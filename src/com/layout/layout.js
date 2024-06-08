import { MDModule } from "../element/element";

/**
 * MDLayoutModule manages the layout changes based on media queries.
 */
class MDLayoutModule extends MDModule {
    /**
     * Initializes the MDLayoutModule instance.
     *
     * The constructor sets up the list of layout configurations, binds the callback, and initializes the module.
     */
    constructor() {
        super()
        
        /**
         * @property {Array<Object>} list - An array of layout configurations with names and media queries.
         * @property {String} list.name - The name of the layout configuration.
         * @property {MediaQueryList} list.query - The media query associated with the layout configuration.
         */
        this.list = [
            {
                name: "compact",
                query: window.matchMedia("(max-width: 599px)"),
            },
            {
                name: "medium",
                query: window.matchMedia("(min-width: 600px) and (max-width: 839px)"),
            },
            {
                name: "expanded",
                query: window.matchMedia("(min-width: 840px)"),
            },
        ];
        this.item = null;
        this.callback = this.callback.bind(this);
        this.init();
    }

    /**
     * Initializes the layout module.
     *
     * The init method calls the callback method to set the initial layout state.
     */
    init() {
        this.callback();
    }

    /**
     * Handles layout changes and dispatches a custom event.
     *
     * The callback method determines the current layout configuration based on the matching media query,
     * dispatches an "onLayoutChange" event with the layout details, and sets up an event listener for changes.
     */
    callback() {
        if (this.item) {
            this.item.query.removeEventListener("change", this.callback);
        }
        this.item = this.list.find((item) => item.query.matches);
        const event = new CustomEvent("onLayoutChange", {
            bubbles: true,
            cancelable: true,
            detail: this.item,
        });
        window.dispatchEvent(event);

        if (this.item) {
            this.item.query.addEventListener("change", this.callback);
        }
    }
}

const layout = new MDLayoutModule();

export { layout };
