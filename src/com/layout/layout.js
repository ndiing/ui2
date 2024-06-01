class MDLayoutModule {
    constructor() {
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

    init() {
        this.callback();
    }

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
