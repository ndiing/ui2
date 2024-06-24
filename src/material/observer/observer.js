const schemes = [
    { name: "light", query: "(prefers-color-scheme: light)" },
    { name: "dark", query: "(prefers-color-scheme: dark)" },
];
const breakpoints = [
    { name: "compact", query: "(max-width: 599px)" },
    { name: "medium", query: "(min-width: 600px) and (max-width: 839px)" },
    { name: "expanded", query: "(min-width: 840px)" },
];

class MDObserver {
    constructor(callback = () => {}) {
        this.callback = callback;
    }

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

class MDAttributeObserver {
    constructor(callback = () => {}) {
        this.callback = callback;
    }

    observe(target, attributeName) {
        this.callback({
            name: attributeName,
            value: target.getAttribute(attributeName),
        });
        new MutationObserver((entries) => {
            this.callback({
                name: attributeName,
                value: target.getAttribute(attributeName),
            });
        }).observe(target, {
            attributes: true,
            attributeFilter: [attributeName],
        });
    }
}

export {
    schemes,
    breakpoints,
    MDObserver,
    MDAttributeObserver,
}

// new MDAttributeObserver(console.log).observe(document.documentElement, "lang");
// new MDAttributeObserver(console.log).observe(document.head.querySelector('meta[name="theme-color"]'), "content");
// new MDObserver(console.log).observe(breakpoints);
// new MDObserver(console.log).observe(schemes);
