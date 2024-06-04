/**
 *
 * @class MDRouterModule
 */
class MDRouterModule {
    /**
     *
     */
    static setRoutes(routes = [], parent) {
        return routes.reduce((acc, route) => {
            route.parent = parent;
            route.pathname = ((route.parent?.pathname ?? "") + "/" + route.path).replace(/\/+/g, "/");
            acc = acc.concat(route);

            if (route.children) {
                acc = acc.concat(this.setRoutes(route.children, route));
            }
            return acc;
        }, []);
    }

    /**
     *
     */
    static get location() {
        return this.options.historyApiFallback ? window.location : new URL(window.location.hash.replace(/^#/, ""), window.location.origin);
    }

    /**
     *
     */
    static get path() {
        return this.location.pathname;
    }

    /**
     *
     */
    static get query() {
        return Object.fromEntries(new URLSearchParams(this.location.search).entries());
    }

    /**
     *
     */
    static getRoute(path) {
        return this.routes.find((route) => {
            const pattern = "^" + route.pathname.replace(/:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)") + "(?:/?$)";
            const regexp = new RegExp(pattern, "i");
            const matches = path.match(regexp);
            this.params = {
                ...matches?.groups,
            };
            return matches;
        });
    }

    /**
     *
     */
    static getRoutes(route) {
        if (!route) return [];
        const parentRoutes = route.parent ? this.getRoutes(route.parent) : [];
        return [...parentRoutes, route];
    }

    /**
     *
     */
    static getOutlet(container, name) {
        return new Promise((resolve) => {
            let outlet;
            let observer;
            const selector = name ? `md-outlet[name="${name}"]` : "md-outlet:not([name])";
            const target = name ? document.body : container;

            const callback = () => {
                outlet = target.querySelector(selector);

                if (outlet) {
                    observer?.disconnect();
                    resolve(outlet);
                }
            };
            callback();

            if (!outlet) {
                observer = new MutationObserver(callback);
                observer.observe(target, {
                    childList: true,
                    subtree: true,
                });
            }
        });
    }

    /**
     *
     */
    static emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        window.dispatchEvent(event);
    }

    /**
     *
     */
    static beforeLoad(beforeLoad) {
        return new Promise((resolve, reject) => {
            const callback = (event) => {
                reject(event);
                this.controller.signal.removeEventListener("abort", callback);
            };
            this.controller.signal.addEventListener("abort", callback);
            beforeLoad(resolve, reject);
        });
    }

    /**
     *
     */
    static async render() {
        this.params = {};
        const route = this.getRoute(this.path);
        const stacks = this.getRoutes(route);
        if (this.controller) this.controller.abort();
        this.controller = new AbortController();
        this.emit("onCurrentEntryChange");

        for (const stack of stacks) {
            this.emit("onNavigate");

            if (stack.beforeLoad) {
                try {
                    await this.beforeLoad(stack.beforeLoad);
                } catch (error) {
                    this.emit("onNavigateError");
                    break;
                }
            }

            if (!stack.component) {
                stack.component = await stack.load();
            }
            const container = stack.parent?.component ?? document.body;
            const outlet = await this.getOutlet(container, stack.outlet);

            if (!stack.component.isConnected) {
                outlet.parentElement.insertBefore(stack.component, outlet.nextElementSibling);
                stack.component.isComponent = true;
            }
            const outlets = Array.from(document.querySelectorAll("md-outlet"));

            for (const outlet of outlets) {
                let nextElement = outlet.nextElementSibling;

                while (nextElement) {
                    const unusedComponent = !stacks.find((stack) => stack.component === nextElement);
                    const unusedOutlet = !outlets.find((outlet) => outlet === nextElement);

                    if (nextElement.isComponent && unusedComponent && unusedOutlet) {
                        nextElement.remove();
                    }
                    nextElement = nextElement.nextElementSibling;
                }
            }
            this.emit("onNavigateSuccess");
        }
    }

    /**
     *
     */
    static navigate(url) {
        if (this.options.historyApiFallback) {
            window.history.pushState(null, "", url);
        } else {
            window.location.hash = url;
        }
    }

    /**
     *
     */
    static change(event) {
        const routerLink = event.target.closest("[routerLink]");

        if (routerLink) {
            const url = routerLink.getAttribute("routerLink");
            this.navigate(url);
        }
    }

    /**
     *
     */
    static init(routes = [], options = {}) {
        this.options = {
            historyApiFallback: true,
            ...options,
        };
        this.routes = this.setRoutes(routes);
        this.render = this.render.bind(this);
        window.addEventListener("load", this.render);

        if (this.options.historyApiFallback) {
            const pushState = window.history.pushState;

            window.history.pushState = function () {
                pushState.apply(this, arguments);
                const event = new CustomEvent("popstate", {
                    bubbles: true,
                    cancelable: true,
                });
                window.dispatchEvent(event);
            };
            window.addEventListener("popstate", this.render);
        } else {
            window.addEventListener("hashchange", this.render);
        }
        this.change = this.change.bind(this);
        window.addEventListener("click", this.change);
    }
}
export { MDRouterModule };
