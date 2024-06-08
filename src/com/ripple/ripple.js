class MDRippleModule {
    constructor(host, options) {
        this.host = host;
        this.options = {
            container: null,
            button: null,

            containment: true,
            size: null,
            centered: false,
            fadeout: false,
            inverse: false,

            ...options,
        };

        this.handleRippleButtonPointerenter = this.handleRippleButtonPointerenter.bind(this);
        this.handleRippleButtonPointerleave = this.handleRippleButtonPointerleave.bind(this);
        this.handleRippleButtonPointerdown = this.handleRippleButtonPointerdown.bind(this);
        this.handleRippleButtonPointerup = this.handleRippleButtonPointerup.bind(this);
        this.handleRippleButtonFocus = this.handleRippleButtonFocus.bind(this);
        this.handleRippleButtonBlur = this.handleRippleButtonBlur.bind(this);
        this.handleRippleButtonAnimationend = this.handleRippleButtonAnimationend.bind(this);

        this.init();
    }

    init() {
        this.container = this.options.container||this.host;
        this.button = this.options.button||this.host;

        this.container.classList.add("md-ripple");

        if (this.options.containment) {
            this.container.classList.add("md-ripple--containment");
        } else {
            this.container.classList.remove("md-ripple--containment");
        }

        if (this.options.fadeout) {
            this.container.classList.add("md-ripple--fadeout");
        } else {
            this.container.classList.remove("md-ripple--fadeout");
        }

        if (this.options.inverse) {
            this.container.classList.add("md-ripple--inverse");
        } else {
            this.container.classList.remove("md-ripple--inverse");
        }

        if (!this.options.size) {
            const { width, height } = this.container.getBoundingClientRect();

            this.options.size = (Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / width) * 100;
        }

        this.container.style.setProperty("--md-ripple-size", this.options.size + "%");

        this.button.classList.add("md-ripple--button");
        this.button.setAttribute("tabIndex", "0");

        this.button.addEventListener("pointerenter", this.handleRippleButtonPointerenter);
        this.button.addEventListener("pointerleave", this.handleRippleButtonPointerleave);
        this.button.addEventListener("pointerdown", this.handleRippleButtonPointerdown);
        this.button.addEventListener("focus", this.handleRippleButtonFocus);
        this.button.addEventListener("blur", this.handleRippleButtonBlur);
        this.button.addEventListener("animationend", this.handleRippleButtonAnimationend);
    }

    handleRippleButtonPointerenter(event) {
        this.container.classList.add("md-ripple--hover");
    }

    handleRippleButtonPointerleave(event) {
        this.container.classList.remove("md-ripple--hover");
    }

    handleRippleButtonPointerdown(event) {
        window.addEventListener("pointerup", this.handleRippleButtonPointerup);

        this.container.classList.add("md-ripple--pressed");

        this.container.style.setProperty("--md-ripple-animation", "none");
        this.container.style.setProperty("--md-ripple-animation-fadeout", "none");

        const { left: _left, top: _top, width, height } = this.container.getBoundingClientRect();

        if (!this.options.centered) {
            const { clientX, clientY } = event;

            const size = this.options.size;
            const left = (clientX - _left) / width;
            const top = (clientY - _top) / height;
            const x = (0.5 - left) * (100 / size);
            const y = (0.5 - top) * ((100 / size) * (height / width));

            this.container.style.setProperty("--md-ripple-left", left * 100 + "%");
            this.container.style.setProperty("--md-ripple-top", top * 100 + "%");
            this.container.style.setProperty("--md-ripple-x", x * 100 + "%");
            this.container.style.setProperty("--md-ripple-y", y * 100 + "%");
        }

        this.container.style.setProperty("--md-ripple-animation", "md-ripple");
        this.container.style.setProperty("--md-ripple-animation-fadeout", "md-ripple-fadeout");
    }

    handleRippleButtonPointerup(event) {
        this.container.classList.remove("md-ripple--pressed");

        window.removeEventListener("pointerup", this.handleRippleButtonPointerup);
    }

    handleRippleButtonAnimationend(event) {
        if (this.options.fadeout) {
            if (event.animationName == "md-ripple-fadeout") {
                this.container.style.removeProperty("--md-ripple-animation");
                this.container.style.removeProperty("--md-ripple-animation-fadeout");
            }
        } else {
            this.container.style.removeProperty("--md-ripple-animation");
        }
    }

    handleRippleButtonFocus(event) {
        this.container.classList.add("md-ripple--focused");
    }

    handleRippleButtonBlur(event) {
        this.container.classList.remove("md-ripple--focused");
    }

    destroy() {
        this.container.classList.remove("md-ripple");
        this.container.classList.remove("md-ripple--containment");
        this.container.classList.remove("md-ripple--fadeout");
        this.container.classList.remove("md-ripple--inverse");

        this.container.style.removeProperty("--md-ripple-size");

        this.button.classList.remove("md-ripple--button");
        this.button.removeAttribute("tabIndex");

        this.button.removeEventListener("pointerenter", this.handleRippleButtonPointerenter);
        this.button.removeEventListener("pointerleave", this.handleRippleButtonPointerleave);
        this.button.removeEventListener("pointerdown", this.handleRippleButtonPointerdown);
        this.button.removeEventListener("focus", this.handleRippleButtonFocus);
        this.button.removeEventListener("blur", this.handleRippleButtonBlur);
        this.button.removeEventListener("animationend", this.handleRippleButtonAnimationend);
    }
}
export { MDRippleModule };
