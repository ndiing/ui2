/**
 * Represents a media observer that monitors media queries and invokes a callback when conditions match.
 */
class MDObserver {
    /**
     * Creates an instance of MDObserver.
     * @param {function} [callback] - The callback function to be called when media query conditions match.
     */
    constructor(callback = () => {}) {
        /**
         * The callback function to be called when media query conditions match.
         * @type {function}
         */
        this.callback = callback;
    }

    /**
     * Observes a list of media query definitions and invokes the callback when conditions match.
     * @param {Array<{ name: string, query: string }>} list - The list of media query definitions to observe.
     */
    observe(list) {
        /**
         * Handles the change event of the media query.
         * @private
         */
        const handleChange = () => {
            this.media?.removeEventListener("change", handleChange); // Remove previous event listener
            this.item = list.find((item) => window.matchMedia(item.query).matches); // Find matching media query item
            this.media = window.matchMedia(this.item.query); // Create new MediaQueryList instance
            this.callback(this.item); // Invoke callback with matching item
            this.media.addEventListener("change", handleChange); // Add event listener for future changes
        };

        // Initial call to handleChange to set up initial state
        handleChange();
    }
}

/**
 * List of breakpoints for responsive design.
 * @type {Array<{ name: string, query: string }>}
 */
const breakpoints = [
    { name: "compact", query: "(max-width: 599px)" },
    { name: "medium", query: "(min-width: 600px) and (max-width: 839px)" },
    { name: "expanded", query: "(min-width: 840px)" },
];

/**
 * List of color scheme preferences.
 * @type {Array<{ name: string, query: string }>}
 */
const schemes = [
    { name: "light", query: "(prefers-color-scheme: light)" },
    { name: "dark", query: "(prefers-color-scheme: dark)" },
];

export { breakpoints, schemes, MDObserver };
