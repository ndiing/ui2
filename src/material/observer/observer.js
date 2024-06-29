const schemes = [
    { name: "light", query: "(prefers-color-scheme: light)" },
    { name: "dark", query: "(prefers-color-scheme: dark)" },
];

const breakpoints = [
    { name: "compact", query: "(max-width: 599px)" },
    { name: "medium", query: "(min-width: 600px) and (max-width: 839px)" },
    { name: "expanded", query: "(min-width: 840px)" },
];

/**
 * Represents a media observer that watches changes in media queries.
 * Use this class to observe changes in media queries based on a provided list.
 */
class MDObserver {
    /**
     * Creates an instance of MDObserver.
     * @param {function} [callback] - The callback function to be called on query change.
     */
    constructor(callback = () => {}) {
        this.callback = callback;
    }

    /**
     * Begins observing changes in media queries based on the provided list.
     * @param {Array<{ name: string, query: string }>} list - The list of media queries to observe.
     */
    observe(list) {
        const handleChange = () => {
            this.media?.removeEventListener("change", handleChange);

            this.item = null;
            for (let i = 0; i < list.length; i++) {
                if (window.matchMedia(list[i].query).matches) {
                    this.item = list[i];
                    break;
                }
            }

            if (this.item) {
                this.media = window.matchMedia(this.item.query);
                this.callback(this.item);
                this.media.addEventListener("change", handleChange);
            }
        };

        handleChange();
    }
}

export { schemes, breakpoints, MDObserver };
