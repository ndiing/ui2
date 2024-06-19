/**
 * Class representing a Router for navigating through routes and managing components.
 * @example
 * // Define some route components
 * class HomeComponent extends HTMLElement {
 *   connectedCallback() {
 *     this.innerHTML = '<h1>Home</h1>';
 *   }
 * }
 *
 * class AboutComponent extends HTMLElement {
 *   connectedCallback() {
 *     this.innerHTML = '<h1>About</h1>';
 *   }
 * }
 *
 * // Define custom elements for the components
 * customElements.define('home-component', HomeComponent);
 * customElements.define('about-component', AboutComponent);
 *
 * // Define routes
 * const routes = [
 *   { path: '', component: new HomeComponent() },
 *   { path: 'about', component: new AboutComponent() },
 * ];
 *
 * // Initialize the router with the defined routes
 * MDRouter.init(routes);
 *
 * // Navigate to the about page programmatically
 * MDRouter.navigate('/about');
 *
 * // HTML structure
 * // <body>
 * //   <md-outlet></md-outlet>
 * // </body>
 */
class MDRouter {
    /**
     * Sets routes recursively, assigns parent references, and constructs pathnames.
     * @param {Array} routes - The array of route objects to set.
     * @param {Object} parent - The parent route object (default: null).
     * @returns {Array} The array of routes with parent and pathname properties set.
     */
    static setRoutes(routes = [], parent = null) {
        return routes.reduce((prev, curr) => {
            curr.parent = parent;
            curr.pathname = ((curr.parent?.pathname ?? "") + "/" + curr.path).replace(/\/+/g, "/");

            prev.push(curr);

            if (curr.children?.length) {
                prev.push(...this.setRoutes(curr.children, curr));
            }

            return prev;
        }, []);
    }

    /**
     * Retrieves the current path based on the browser's location.
     * @returns {String} The current path.
     */
    static get path() {
        if (this.historyApiFallback) {
            return window.location.pathname;
        } else {
            return window.location.hash.replace(/^#/, "").replace(/\?.*$/, "") || "/";
        }
    }

    /**
     * Retrieves query parameters from the current URL.
     * @returns {Object} The object containing query parameters.
     */
    static get query() {
        let search;

        if (this.historyApiFallback) {
            search = window.location.search;
        } else {
            search = window.location.hash.replace(/(\?.*)$/, "") || "";
        }

        return Object.fromEntries(new URLSearchParams(search).entries());
    }

    /**
     * Retrieves the route matching the given path.
     * @param {String} path - The path to match against routes.
     * @returns {Object|undefined} The matched route object or undefined if not found.
     */
    static getRoutes(path) {
        return this.stacks.find((stack) => {
            const pattern = "^" + stack.pathname.replace(/:(\w+)/g, "(?<$1>[^/]+)").replace(/\*/g, "(?:.*)") + "(?:/?$)";
            const regexp = new RegExp(pattern, "i");
            const matches = path.match(regexp);

            this.params = { ...matches?.groups };

            return matches;
        });
    }

    /**
     * Recursively retrieves all routes up to the root for a given route.
     * @param {Object} route - The route object to start from.
     * @returns {Array} The array of routes from the given route up to the root.
     */
    static getRoute(route) {
        return [route].reduce((prev, curr) => {
            if (curr.parent) {
                prev.push(...this.getRoute(curr.parent));
            }
            prev.push(curr);
            return prev;
        }, []);
    }

    /**
     * Retrieves the outlet element associated with the route.
     * @param {HTMLElement} container - The container element to search for the outlet.
     * @param {Object} route - The route object containing outlet information.
     * @returns {Promise<HTMLElement>} Promise resolving to the outlet HTMLElement.
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
                observer.observe(target, { childList: true, subtree: true });
            }
        });
    }

    /**
     * Handles the navigation process on page load and popstate/hashchange events.
     * @param {Event} event - The event triggering the navigation process.
     * @returns {void}
     */
    static async handleLoad(event) {
        this.route = this.getRoutes(this.path);
        this.routes = this.getRoute(this.route);

        if (this.controller && !this.controller.signal.aborted) {
            this.controller.abort();
        }

        if (!this.controller || (this.controller && this.controller.signal.aborted)) {
            this.controller = new AbortController();
        }

        MDRouter.emit("onNavigationStart", event);

        for (const route of this.routes) {
            MDRouter.emit("onNavigation", event);

            if (route.beforeLoad) {
                try {
                    await new Promise((resolve, reject) => {
                        const next = (err) => {
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
                    MDRouter.emit("onNavigationError", event);
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

            document.querySelectorAll("md-outlet").forEach((outlet, index, outlets) => {
                let nextElement = outlet.nextElementSibling;

                while (nextElement) {
                    const component = this.routes.find((route) => route.component == nextElement);
                    let element;

                    for (let outlet of outlets) {
                        element = outlet == nextElement;

                        if (element) {
                            break;
                        }
                    }

                    if (!component && !element) {
                        nextElement.remove();
                    }

                    nextElement = nextElement.nextElementSibling;
                }
            });
        }

        MDRouter.emit("onNavigationEnd", event);
    }

    /**
     * Navigates to the specified URL using history API or hash fragment.
     * @param {String} url - The URL to navigate to.
     * @returns {void}
     */
    static navigate(url) {
        if (this.historyApiFallback) {
            window.history.pushState({}, "", url);
        } else {
            window.location.hash = url;
        }
    }

    /**
     * Handles click events on elements with 'routerLink' attribute to trigger navigation.
     * @param {MouseEvent} event - The click event.
     * @returns {void}
     */
    static handleClick(event) {
        const routerLink = event.target.closest("[routerLink]");

        if (routerLink) {
            const url = routerLink.getAttribute("routerLink");
            this.navigate(url);
        }
    }

    /**
     * Emits a custom event with the specified type and detail.
     * @param {String} type - The type of the event.
     * @param {Object} detail - The detail object to include with the event.
     * @returns {void}
     */
    static emit(type, detail) {
        const event = new CustomEvent(type, { bubbles: true, cancelable: true, detail });
        window.dispatchEvent(event);
    }

    /**
     * Flag indicating whether to use history API for routing (true) or hash fragment (false).
     * @type {Boolean}
     */
    static historyApiFallback = true;

    /**
     * Initializes the router with the provided routes and sets up event listeners.
     * @param {Array} routes - The array of route objects to initialize the router with.
     * @returns {void}
     */
    static init(routes) {
        this.stacks = this.setRoutes(routes);

        window.addEventListener("load", this.handleLoad.bind(this));

        if (this.historyApiFallback) {
            window.addEventListener("popstate", this.handleLoad.bind(this));
            const pushState = window.history.pushState;

            window.history.pushState = function () {
                pushState.apply(this, arguments);
                MDRouter.emit("popstate");
            };
        } else {
            window.addEventListener("hashchange", this.handleLoad.bind(this));
        }

        window.addEventListener("click", this.handleClick.bind(this));
    }
}

export { MDRouter };
