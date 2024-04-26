class Observer {
    constructor(list = [], callback = () => {}) {
        this.list = list;
        this.callback = callback;
        this.handleChange = this.handleChange.bind(this);
        this.handleChange();
    }

    handleChange() {
        this.mql?.removeEventListener("change", this.handleChange);
        for (this.item of this.list) {
            this.mql = window.matchMedia(this.item.value);
            if (this.mql.matches) {
                break;
            }
        }
        this.callback(this.item);
        this.mql.addEventListener("change", this.handleChange);
    }
}

function emit(type, detail) {
    const event = new CustomEvent(type, {
        bubbles: true,
        cancelable: true,
        detail,
    });
    window.dispatchEvent(event);
}

let layout;
let color;

new Observer(
    [
        { name: "compact", value: "(max-width: 599px)" },
        { name: "medium", value: "(min-width: 600px) and (max-width: 839px)" },
        { name: "expanded", value: "(min-width: 840px)" },
    ],
    (item) => {
        layout = item;
        emit("onLayoutChange", item);
    },
);

new Observer(
    [
        { name: "light", value: "(prefers-color-scheme: light)" },
        { name: "dark", value: "(prefers-color-scheme: dark)" },
    ],
    (item) => {
        color = item;
        emit("onColorChange", item);
    },
);

export { layout, color };
