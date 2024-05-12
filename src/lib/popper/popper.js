class Popper {
    constructor(host, options = {}) {
        this.options = {
            button: undefined,
            boundary: document.body,
            offset: 0,
            placements: ["top", "bottom"],
            ...options,
        };

        if (this.options.button?.hasOwnProperty("isTrusted")) {
            const event = this.options.button;
            this.options.button = {
                getBoundingClientRect: () => {
                    return {
                        x: event.x,
                        y: event.y,
                        left: event.clientX,
                        top: event.clientY,
                        right: event.clientX + event.width,
                        bottom: event.clientY + event.height,
                        width: event.width,
                        height: event.height,
                    };
                },
                classList: { add: () => {} },
            };
        }

        this.host = host;
        this.init();
    }

    on(type, listener) {
        this.host.addEventListener(type, listener);
    }

    off(type, listener) {
        this.host.removeEventListener(type, listener);
    }

    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.host.dispatchEvent(event);
    }

    init() {
        this.host.classList.add("md-popper--container");
        this.options.button.classList.add("md-popper--button");
    }

    setPlacement() {
        let left;
        let top;

        for (const placement of this.options.placements) {
            let result = this.getPlacement(placement);

            if (result.exceed) {
                continue;
            } else {
                left = result.left;
                top = result.top;
                break;
            }
        }

        this.host.style.setProperty("left", left + "px");
        this.host.style.setProperty("top", top + "px");
    }

    getPlacement(placement) {
        this.containerRect = this.host.getBoundingClientRect();
        this.buttonRect = this.options.button.getBoundingClientRect();
        this.boundaryRect = this.options.boundary.getBoundingClientRect();

        const placements = [
            { placement: "top-start", calculate: () => ({ top: this.buttonRect.top - this.containerRect.height - this.options.offset, left: this.buttonRect.left }) },
            { placement: "top", calculate: () => ({ top: this.buttonRect.top - this.containerRect.height - this.options.offset, left: this.buttonRect.left + (this.buttonRect.width - this.containerRect.width) / 2 }) },
            { placement: "top-end", calculate: () => ({ top: this.buttonRect.top - this.containerRect.height - this.options.offset, left: this.buttonRect.right - this.containerRect.width }) },
            { placement: "right-start", calculate: () => ({ top: this.buttonRect.top, left: this.buttonRect.right + this.options.offset }) },
            { placement: "right", calculate: () => ({ top: this.buttonRect.top + (this.buttonRect.height - this.containerRect.height) / 2, left: this.buttonRect.right + this.options.offset }) },
            { placement: "right-end", calculate: () => ({ top: this.buttonRect.bottom - this.containerRect.height, left: this.buttonRect.right + this.options.offset }) },
            { placement: "bottom-end", calculate: () => ({ top: this.buttonRect.bottom + this.options.offset, left: this.buttonRect.right - this.containerRect.width }) },
            { placement: "bottom", calculate: () => ({ top: this.buttonRect.bottom + this.options.offset, left: this.buttonRect.left + (this.buttonRect.width - this.containerRect.width) / 2 }) },
            { placement: "bottom-start", calculate: () => ({ top: this.buttonRect.bottom + this.options.offset, left: this.buttonRect.left }) },
            { placement: "left-end", calculate: () => ({ top: this.buttonRect.bottom - this.containerRect.height, left: this.buttonRect.left - this.containerRect.width - this.options.offset }) },
            { placement: "left", calculate: () => ({ top: this.buttonRect.top + (this.buttonRect.height - this.containerRect.height) / 2, left: this.buttonRect.left - this.containerRect.width - this.options.offset }) },
            { placement: "left-start", calculate: () => ({ top: this.buttonRect.top, left: this.buttonRect.left - this.containerRect.width - this.options.offset }) },
        ];

        const { left, top } = placements.find((p) => p.placement == placement).calculate();

        const right = left + this.containerRect.width;
        const bottom = top + this.containerRect.height;

        const exceed = left < this.boundaryRect.left || right > this.boundaryRect.right || top < this.boundaryRect.top || bottom > this.boundaryRect.bottom;

        return { exceed, left, top, right, bottom };
    }

    destroy() {}
}
export { Popper };
