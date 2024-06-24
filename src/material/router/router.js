/**
 * Represents a route configuration object.
 * @typedef {Object} Route
 * @property {string} path - The path of the route.
 * @property {HTMLElement} component - The component associated with the route.
 * @property {Function} load - Function that loads the component asynchronously.
 * @property {Array<Route>} [children] - Optional array of child routes.
 * @property {Function} [beforeLoad] - Function called before loading the route.
 */

/**
 * MDRouter is a client-side router for managing routes and navigation within a single-page application.
 * @property {Array<Route>} stacks - The array of routes configured in the router.
 * @fires MDRouter#onRouterCurrentEntryChange
 * @fires MDRouter#onRouterNavigate
 * @fires MDRouter#onRouterNavigateError
 * @fires MDRouter#onRouterNavigateSuccess
 * @example
 *
 * const route = {
 *     path: "/home",
 *     component: null,
 *     load: async () => {
 *
 *         const component = document.createElement("div");
 *         component.textContent = "Home Component";
 *         return component;
 *     },
 *     children: [
 *         {
 *             path: "/profile",
 *             component: null,
 *             load: async () => {
 *
 *                 const component = document.createElement("div");
 *                 component.textContent = "Profile Component";
 *                 return component;
 *             },
 *         },
 *     ],
 * };
 *
 *
 * const routes = [route];
 *
 *
 * MDRouter.init(routes);
 */
class MDRouter {
    /**
     * Set routes recursively with parent-child relationships.
     * @param {Array<Route>} routes - The array of route objects.
     * @param {Route} [parent] - The parent route object (optional).
     * @returns {Array<Route>} - The flattened array of routes.
     */
    static setRoutes(routes, parent) {
        return routes.reduce((acc, curr) => {
            curr.parent = parent;
            curr.pathname = `${parent?.pathname ?? ""}/${curr.path}`.replace(/\/+/g, "/");

            acc.push(curr);

            if (curr.children?.length) {
                acc.push(...this.setRoutes(curr.children, curr));
            }
            return acc;
        }, []);
    }

    /**
     * Get the current path based on history API or hash fallback.
     * @returns {string} - The current path.
     */
    static get path() {
        if (this.historyApiFallback) {
            return window.location.pathname;
        } else {
            return window.location.hash.replace(/^#/, "").replace(/\?.*$/, "") || "/";
        }
    }

    /**
     * Get the query parameters from the current URL.
     * @returns {Object} - The parsed query parameters.
     */
    static get query() {
        let search;
        if (this.historyApiFallback) {
            search = window.location.search;
        } else {
            search = window.location.hash.replace(/^#/, "").match(/(\?.*)$/)?.[1] || "";
        }

        const query = {};
        for (const [name, value] of new URLSearchParams(search).entries()) {
            if (query[name]) {
                if (Array.isArray(query[name])) {
                    query[name].push(value);
                } else {
                    query[name] = [query[name], value];
                }
            } else {
                query[name] = value;
            }
        }

        return query;
    }

    /**
     * Find a route object that matches the given path.
     * @param {string} path - The path to match against.
     * @returns {Route|undefined} - The matched route object or undefined if not found.
     */
    static getRoute(path) {
        return this.stacks.find((route) => {
            const pattern = `^${route.pathname.replace(/:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/, "(?:.*)")}(?:/?\$)`;
            const regexp = new RegExp(pattern, "i");
            const matches = path.match(regexp);

            if (matches) {
                this.params = { ...matches.groups };
                return true;
            }

            return false;
        });
    }

    /**
     * Get all routes from the current route up to the root.
     * @param {Route} route - The current route object.
     * @returns {Array<Route>} - The array of all routes from root to the current route.
     */
    static getRoutes(route) {
        return [route].reduce((acc, curr) => {
            if (curr.parent) {
                acc.push(...this.getRoutes(curr.parent));
            }

            acc.push(curr);

            return acc;
        }, []);
    }

    /**
     * Resolve the outlet element where a route component should be rendered.
     * @param {HTMLElement} container - The container element to search within.
     * @param {Route} route - The route object containing outlet information.
     * @returns {Promise<HTMLElement>} - Resolves with the outlet element.
     */
    static getOutlet(container, route) {
        return new Promise((resolve) => {
            let outlet;
            let observer;
            let target = container;
            let selector = "md-outlet:not([name])";

            if (route.outlet) {
                target = document.body;
                selector = `md-outlet[name="${route.outlet}"]`;
            }

            const callback = () => {
                outlet = target.querySelector(selector);

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
                observer.observe(target, {
                    childList: true,
                    subtree: true,
                });
            }
        });
    }

    /**
     * Handle the load event triggered during initial load or navigation.
     * @param {Event} event - The load or navigation event.
     * @returns {Promise<void>} - Resolves when navigation and component loading is complete.
     */
    static async handleLoad(event) {
        this.emit("onRouterCurrentEntryChange", event);
        performance.mark("markRouterCurrentEntryChange");

        this.params = {};
        this.route = this.getRoute(this.path);
        this.routes = this.getRoutes(this.route);

        if (this.controller && !this.controller.signal.aborted) {
            this.controller.abort();
        }

        if (!this.controller || (this.controller && this.controller.signal.aborted)) {
            this.controller = new AbortController();
        }

        for (const route of this.routes) {
            this.emit("onRouterNavigate", event);
            performance.mark("markRouterNavigate");

            if (route.beforeLoad) {
                try {
                    await new Promise((resolve, reject) => {
                        const next = (err) => {
                            this.controller.signal.removeEventListener("abort", next);
                            if (err) {
                                reject(err);
                            } else {
                                resolve();
                            }
                        };
                        this.controller.signal.addEventListener("abort", next);
                        route.beforeLoad(next);
                    });
                } catch (error) {
                    this.emit("onRouterNavigateError", event);
                    performance.mark("markRouterNavigateError");
                    console.error(error);
                    break;
                }
            }

            if (!route.component) {
                route.component = await route.load();
            }

            const container = route.parent?.component ?? document.body;

            const outlet = await this.getOutlet(container, route);

            if (!route.component.isConnected) {
                outlet.parentElement.insertBefore(route.component, outlet.nextElementSibling);
            }

            const outlets = Array.from(document.body.querySelectorAll("md-outlet"));
            for (const outlet of outlets) {
                let nextElement = outlet.nextElementSibling;
                while (nextElement) {
                    const notComponent = !this.routes.find((route) => route.component == nextElement);
                    const notOutlet = !outlets.find((outlet) => outlet == nextElement);

                    if (notComponent && notOutlet) {
                        nextElement.remove();
                    }

                    nextElement = nextElement.nextElementSibling;
                }
            }
        }
        this.emit("onRouterNavigateSuccess", event);
        performance.mark("markRouterNavigateSuccess");
        performance.measure("measureRouterNavigateSuccess", "markRouterCurrentEntryChange", "markRouterNavigateSuccess");

        performance.clearMarks("markRouterCurrentEntryChange");
        performance.clearMarks("markRouterNavigate");
        performance.clearMarks("markRouterNavigateError");
        performance.clearMarks("markRouterNavigateSuccess");
        performance.clearMeasures("measureRouterNavigateSuccess");
    }

    /**
     * Navigate to a specified URL using history API or hash fallback.
     * @param {string} url - The URL to navigate to.
     */
    static navigate(url) {
        if (this.historyApiFallback) {
            window.history.pushState({}, "", url);
        } else {
            window.location.hash = url;
        }
    }

    /**
     * Handle click events on elements with `[routerLink]` attribute to trigger navigation.
     * @param {MouseEvent} event - The click event.
     */
    static handleClick(event) {
        const routerLink = event.target.closest("[routerLink]");
        if (routerLink) {
            const url = routerLink.getAttribute("routerLink");
            this.navigate(url);
        }
    }

    /**
     * Flag indicating whether to use history API (true) or hash fallback (false).
     * @type {boolean}
     */
    static historyApiFallback = true;

    /**
     * Emit a custom event with specified type and detail.
     * @param {string} type - The event type to emit.
     * @param {*} detail - The event detail to include.
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
     * Initialize the router with the provided routes and set up event listeners.
     * @param {Array<Route>} routes - The array of route objects to configure the router.
     */
    static init(routes) {
        this.stacks = this.setRoutes(routes);

        this.handleLoad = this.handleLoad.bind(this);
        window.addEventListener("DOMContentLoaded", this.handleLoad);

        if (this.historyApiFallback) {
            window.addEventListener("popstate", this.handleLoad);

            const pushState = window.history.pushState;
            window.history.pushState = function () {
                pushState.apply(this, arguments);

                MDRouter.emit("popstate");
            };
        } else {
            window.addEventListener("hashchange", this.handleLoad);
        }

        this.handleClick = this.handleClick.bind(this);
        window.addEventListener("click", this.handleClick);
    }
}

export { MDRouter };
