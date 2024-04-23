
class Router {
    
    static setRoutes(routes = [], parent = null) {
        return routes.reduce((p, c) => {
            c.parent = parent;
            c.fullpath = `${c.parent?.fullpath ?? ""}/${c.path}` 
                .replace(/\/+/g, "/");

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
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });

        window.dispatchEvent(event);
    }

    
    static getQuery() {
        return Object.fromEntries(
            
            new URLSearchParams(window.location.search) 
                .entries(),
        );
    }

    
    static getRoute(path) {
        return this.routes.find((route) => {
            const pattern =
                "^" +
                route.fullpath 
                    .replace(/\:(\w+)/g, "(?<$1>[^/]+)")
                    .replace(/\*/, "(?:.*)") +
                "(?:/?$)";
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

                observer.observe(container, {
                    childList: true,
                    subtree: true,
                });
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

        this.emit("onCurrentEntryChange");

        for (const stack of this.stacks) {
            this.emit("onNavigate");

            if (stack.beforeLoad) {
                try {
                    await new Promise((resolve, reject) => {
                        this.controller.signal.addEventListener("abort", reject);

                        stack.beforeLoad(resolve, reject);
                    });
                } catch (error) {
                    this.emit("onNavigateError");

                    break;
                }
            }

            if (!stack.component) {
                stack.component = await stack.load();
            }

            const container = stack.parent?.component ?? document.body;

            const outlet = await this.getOutlet(container);

            

            if (!stack.component.isConnected) {
                outlet.parentElement.insertBefore(
                    
                    stack.component,
                    outlet.nextElementSibling,
                );

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

        this.emit("onNavigateSuccess");
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

        this.on("load", this.handleLoad);
        this.on("popstate", this.handleLoad);

        const pushState = window.history.pushState;

        window.history.pushState = function () {
            pushState.apply(this, arguments);
            Router.emit("popstate");
        };

        this.on("click", this.handleClick);
    }
}

export { Router };
