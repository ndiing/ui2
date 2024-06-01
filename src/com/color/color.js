import { Hct, applyTheme, argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";

class MDColorModule {
    constructor() {
        this.list = [
            {
                name: "light",
                query: window.matchMedia("(prefers-color-scheme: light)"),
            },
            {
                name: "dark",
                query: window.matchMedia("(prefers-color-scheme: dark)"),
            },
        ];
        this.item = null;
        this.callback = this.callback.bind(this);
        this.init();
    }

    init() {
        this.callback();
        new MutationObserver(this.callback).observe(document.querySelector('[name="theme-color"]'), {
            attributes: true,
            attributeFilter: ["content"],
        });
    }

    callback() {
        if (this.item) {
            this.item.query.removeEventListener("change", this.callback);
        }
        this.item = this.list.find((item) => item.query.matches);

        const hex = document.querySelector('[name="theme-color"]').getAttribute("content");
        const theme = themeFromSourceColor(argbFromHex(hex), []);
        applyTheme(theme, {
            target: document.body,
            dark: this.item.name == "dark",
        });

        const event = new CustomEvent("onColorChange", {
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

const color = new MDColorModule();

export { color };
