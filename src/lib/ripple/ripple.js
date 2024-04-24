class Ripple {
    constructor(host, options = {}) {
        this.options = {
            button: host,
            containment: true,
            fadeout: false,
            inverse: false,
            size: undefined,
            ...options,
        };
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
        const event = new CustomEvent(type, { bubbles: true, cancelable: true, detail });
        this.host.dispatchEvent(event);
    }

    init() {
        this.host.classList.add("md-ripple");

        if (!this.options.size) {
            this.rect = this.host.getBoundingClientRect();
            this.options.size = (Math.sqrt(Math.pow(this.rect.width, 2) + Math.pow(this.rect.height, 2)) / this.rect.width) * 100;
        }
        this.host.style.setProperty("--md-ripple-size", this.options.size + "%");

        if (this.options.containment) {
            this.host.classList.add("md-ripple--containment");
        } else {
            this.host.classList.remove("md-ripple--containment");
        }

        if (this.options.fadeout) {
            this.host.classList.add("md-ripple--fadeout");
        } else {
            this.host.classList.remove("md-ripple--fadeout");
        }

        if (this.options.inverse) {
            this.host.classList.add("md-ripple--inverse");
        } else {
            this.host.classList.remove("md-ripple--inverse");
        }

        this.options.button.setAttribute("tabIndex", 0);
        this.options.button.classList.add("md-ripple--button");
        this.handleMousedown = this.handleMousedown.bind(this);
        this.handleMouseup = this.handleMouseup.bind(this);
        this.handleMouseenter = this.handleMouseenter.bind(this);
        this.handleMouseleave = this.handleMouseleave.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.options.button.addEventListener("mousedown", this.handleMousedown);
        this.options.button.addEventListener("mouseenter", this.handleMouseenter);
        this.options.button.addEventListener("mouseleave", this.handleMouseleave);
        this.options.button.addEventListener("focus", this.handleFocus);
        this.options.button.addEventListener("blur", this.handleBlur);
    }

    destroy() {
        this.host.classList.remove("md-ripple");
        this.host.style.removeProperty("--md-ripple-size");
        this.options.button.removeAttribute("tabIndex");
        this.options.button.classList.remove("md-ripple--button");
        this.options.button.removeEventListener("mousedown", this.handleMousedown);
        this.options.button.removeEventListener("mouseup", this.handleMouseup);
        this.options.button.removeEventListener("mouseenter", this.handleMouseenter);
        this.options.button.removeEventListener("mouseleave", this.handleMouseleave);
        this.options.button.removeEventListener("focus", this.handleFocus);
        this.options.button.removeEventListener("blur", this.handleBlur);
    }

    handleMousedown(event) {
        window.addEventListener("mouseup", this.handleMouseup);
        this.host.classList.add("md-ripple--pressed");
        this.host.style.setProperty("--md-ripple-animation", "none");
        this.rect = this.host.getBoundingClientRect();
        const left = (event.clientX - this.rect.left) / this.rect.width;
        const top = (event.clientY - this.rect.top) / this.rect.height;
        const x = (0.5 - left) * (100 / this.options.size);
        const y = (0.5 - top) * ((100 / this.options.size) * (this.rect.height / this.rect.width));
        this.host.style.removeProperty("--md-ripple-animation");
        this.host.style.setProperty("--md-ripple-left", left * 100 + "%");
        this.host.style.setProperty("--md-ripple-top", top * 100 + "%");
        this.host.style.setProperty("--md-ripple-x", x * 100 + "%");
        this.host.style.setProperty("--md-ripple-y", y * 100 + "%");
    }

    handleMouseup(event) {
        this.host.classList.remove("md-ripple--pressed");
        window.removeEventListener("mouseup", this.handleMouseup);
    }

    handleMouseenter(event) {
        this.host.classList.add("md-ripple--hover");
    }

    handleMouseleave(event) {
        this.host.classList.remove("md-ripple--hover");
    }

    handleFocus(event) {
        this.host.classList.add("md-ripple--focused");
    }

    handleBlur(event) {
        this.host.classList.remove("md-ripple--focused");
    }
}
export { Ripple };
