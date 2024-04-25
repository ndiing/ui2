const fetch = window.fetch;
window.fetch = function () {
    performance.mark("markFetchStart");
    const response = fetch.apply(this, arguments);
    response.then((response) => {
        performance.mark("markFetchEnd");
        performance.measure("measureFetch", "markFetchStart", "markFetchEnd");
    });
    return response;
};

const pushState = window.history.pushState;
window.history.pushState = function () {
    pushState.apply(this, arguments);
    Router.emit("popstate");
};

class Progress {
    static start(duration) {
        if (this.interval) {
            return;
        }

        if (!this.progressElement) {
            this.progressElement = document.createElement("md-progress-indicator");
            document.body.appendChild(this.progressElement);
            this.progressElement.style.setProperty("width", "100%");
            this.progressElement.style.setProperty("position", "absolute");
            this.progressElement.style.setProperty("top", "0px");
            this.progressElement.style.setProperty("left", "0px");
            this.progressElement.style.setProperty("z-index", "9999");
        }
        this.duration = duration;
        this.startTime = Date.now();
        this.update();
    }

    static update() {
        const elapsedTime = Date.now() - this.startTime;
        const progress = Math.min(1, elapsedTime / this.duration);
        const value = Math.round(progress * 100);

        if (!isNaN(value)) {
            this.progressElement.value = value;
        }

        if (progress < 1) {
            this.interval = requestAnimationFrame(() => this.update());
        } else {
            this.stop();
            this.progressElement.remove();
            this.progressElement = null;
        }
    }

    static stop() {
        if (!this.interval) {
            return;
        }
        cancelAnimationFrame(this.interval);
        this.interval = null;
    }
}

class Color {
    static start(
        list = [
            { name: "light", value: "(prefers-color-scheme: light)" },
            { name: "dark", value: "(prefers-color-scheme: dark)" },
        ],
    ) {
        this.list = list;
        this.update();
    }

    static update() {
        const item = this.list.find((item) => window.matchMedia(item.value).matches);
        Router.emit("onColorChange", item);
        this.mql?.removeEventListener("change", this.update);
        this.mql = window.matchMedia(item);
        this.mql.addEventListener("change", this.update);
    }
}

class Layout {
    static start(
        list = [
            { name: "compact", value: "(max-width: 599px)" },
            { name: "medium", value: "(min-width: 600px) and (max-width: 839px)" },
            { name: "expanded", value: "(min-width: 840px)" },
        ],
    ) {
        this.list = list;
        this.update();
    }

    static update() {
        const item = this.list.find((item) => window.matchMedia(item.value).matches);
        Router.emit("onLayoutChange", item);
        this.mql?.removeEventListener("change", this.update);
        this.mql = window.matchMedia(item);
        this.mql.addEventListener("change", this.update);
    }
}

class Router {
    static setRoutes(routes = [], parent = null) {
        return routes.reduce((p, c) => {
            c.parent = parent;
            c.fullpath = `${c.parent?.fullpath ?? ""}/${c.path}`.replace(/\/+/g, "/");
            p = p.concat(c);

            if (c.children) {
                p = p.concat(this.setRoutes(c.children, c));
            }
            return p;
        }, []);
    }

    static on(type, listener) {
        listener = listener.bind(this);
        window.addEventListener(type, listener);
    }

    static off(type, listener) {
        listener = listener.bind(this);
        window.removeEventListener(type, listener);
    }

    static emit(type, detail = { ...this }) {
        const event = new CustomEvent(type, { bubbles: true, cancelable: true, detail });
        window.dispatchEvent(event);
    }

    static getQuery() {
        return Object.fromEntries(new URLSearchParams(window.location.search).entries());
    }

    static getRoute(path) {
        return this.routes.find((route) => {
            const pattern = "^" + route.fullpath.replace(/\:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)") + "(?:/?$)";
            const regexp = new RegExp(pattern, "i");
            const matches = path.match(regexp);
            this.params = { ...matches?.groups };
            return matches;
        });
    }

    static getRoutes(route = []) {
        return [route].reduce((p, c) => {
            if (c.parent) {
                p = p.concat(this.getRoutes(c.parent));
            }
            p = p.concat(c);
            return p;
        }, []);
    }

    static async getOutlet(container) {
        return await new Promise((resolve) => {
            let observer;
            let outlet;
            const callback = () => {
                outlet = container.querySelector("md-outlet");

                if (outlet) {
                    if (observer) {
                        observer.disconnect();
                    }
                    resolve(outlet);
                }
            };
            callback();

            if (!outlet) {
                observer = new MutationObserver(callback);
                observer.observe(container, { childList: true, subtree: true });
            }
        });
    }

    static async handleLoad(event) {
        this.path = window.location.pathname;
        this.params = {};
        this.query = this.getQuery();
        this.route = this.getRoute(this.path);
        this.stacks = this.getRoutes(this.route);

        if (this.controller && !this.controller.signal.aborted) {
            this.controller.abort();
        }

        if (!this.controller || (this.controller && this.controller.signal.aborted)) {
            this.controller = new AbortController();
        }
        Router.emit("onCurrentEntryChange");
        performance.mark("markCurrentEntryChange");

        for (const stack of this.stacks) {
            Router.emit("onNavigate");

            if (stack.beforeLoad) {
                try {
                    await new Promise((resolve, reject) => {
                        this.controller.signal.addEventListener("abort", reject);
                        stack.beforeLoad(resolve, reject);
                    });
                } catch (error) {
                    Router.emit("onNavigateError");
                    break;
                }
            }

            if (!stack.component) {
                stack.component = await stack.load();
            }
            const container = stack.parent?.component ?? document.body;
            const outlet = await this.getOutlet(container);

            if (!stack.component.isConnected) {
                outlet.parentElement.insertBefore(stack.component, outlet.nextElementSibling);
                stack.component.isComponent = true;
            }
            const outlets = Array.from(document.body.querySelectorAll("md-outlet"));

            for (const outlet of outlets) {
                let nextElement = outlet.nextElementSibling;

                while (nextElement) {
                    const notStack = !this.stacks.find((stack) => stack.component === nextElement);
                    const notOutlet = !outlets.find((outlet) => outlet === nextElement);

                    if (nextElement.isComponent && notStack && notOutlet) {
                        nextElement.remove();
                    }
                    nextElement = nextElement.nextElementSibling;
                }
            }
        }
        Router.emit("onNavigateSuccess");
        performance.mark("markNavigateSuccess");
        performance.measure("measureNavigateSuccess", "markCurrentEntryChange", "markNavigateSuccess");
    }

    static navigate(url) {
        window.history.pushState({}, null, url);
    }

    static handleClick(event) {
        const routerLink = event.target.closest("[routerLink]");

        if (routerLink) {
            const url = routerLink.getAttribute("routerLink");
            this.navigate(url);
        }
    }

    static init(routes = []) {
        this.routes = this.setRoutes(routes);

        const observer = new PerformanceObserver((entries) => {
            entries.getEntries().forEach((entry) => {
                Progress.start(entry.duration);
            });
        });
        observer.observe({ entryTypes: ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "long-animation-frame", "longtask", "mark", "measure", "navigation", "paint", "resource", "visibility-state"] });

        Color.start();
        Layout.start();

        this.on("load", this.handleLoad);
        this.on("popstate", this.handleLoad);

        this.on("click", this.handleClick);
    }
}
export { Router };

// onColorChange
// onLayoutChange
// onCurrentEntryChange
// onNavigate
// onNavigateError
// onNavigateSuccess
