class MDRippleModule {
    constructor(host, options) {
        this.host = host;
        this.options = {
            button: this.host,
            containment: true,
            // size:Math.sqrt(Math.pow(40,2)+Math.pow(40,2))/40*100,// in %
            centered: false,
            fadeout: false,
            inverse: false,
            ...options,
        };
        this.init();
    }

    init() {
        this.host.classList.add("md-ripple");

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

        if (!this.options.size) {
            const { width, height } = this.host.getBoundingClientRect();
            this.options.size = (Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / width) * 100;
        }

        this.host.style.setProperty("--md-ripple-size", this.options.size + "%");

        this.options.button.classList.add("md-ripple--button");

        this.options.button.setAttribute("tabIndex", "0");

        this.handleRippleButtonPointerenter = this.handleRippleButtonPointerenter.bind(this);
        this.handleRippleButtonPointerleave = this.handleRippleButtonPointerleave.bind(this);
        this.handleRippleButtonPointerdown = this.handleRippleButtonPointerdown.bind(this);
        this.handleRippleButtonPointerup = this.handleRippleButtonPointerup.bind(this);
        this.handleRippleButtonFocus = this.handleRippleButtonFocus.bind(this);
        this.handleRippleButtonBlur = this.handleRippleButtonBlur.bind(this);
        this.handleRippleButtonAnimationend = this.handleRippleButtonAnimationend.bind(this);

        this.options.button.addEventListener("pointerenter", this.handleRippleButtonPointerenter);
        this.options.button.addEventListener("pointerleave", this.handleRippleButtonPointerleave);
        this.options.button.addEventListener("pointerdown", this.handleRippleButtonPointerdown);
        this.options.button.addEventListener("focus", this.handleRippleButtonFocus);
        this.options.button.addEventListener("blur", this.handleRippleButtonBlur);
        this.options.button.addEventListener("animationend", this.handleRippleButtonAnimationend);
    }

    handleRippleButtonPointerenter(event) {
        this.host.classList.add("md-ripple--hover");
    }

    handleRippleButtonPointerleave(event) {
        this.host.classList.remove("md-ripple--hover");
    }

    handleRippleButtonPointerdown(event) {
        window.addEventListener("pointerup", this.handleRippleButtonPointerup);
        this.host.classList.add("md-ripple--pressed");

        this.host.style.setProperty("--md-ripple-animation", "none");
        this.host.style.setProperty("--md-ripple-animation-fadeout", "none");

        const { left: _left, top: _top, width, height } = this.host.getBoundingClientRect();

        if (!this.options.centered) {
            const { clientX, clientY } = event;
            const size = this.options.size;
            const left = (clientX-_left) / width;
            const top = (clientY-_top) / height;
            const x = (0.5 - left) * (100 / size);
            const y = (0.5 - top) * ((100 / size) * (height / width));

            this.host.style.setProperty("--md-ripple-left", left * 100 + "%");
            this.host.style.setProperty("--md-ripple-top", top * 100 + "%");
            this.host.style.setProperty("--md-ripple-x", x * 100 + "%");
            this.host.style.setProperty("--md-ripple-y", y * 100 + "%");
        }

        this.host.style.setProperty("--md-ripple-animation", "md-ripple");
        this.host.style.setProperty("--md-ripple-animation-fadeout", "md-ripple-fadeout");
    }

    handleRippleButtonPointerup(event) {
        this.host.classList.remove("md-ripple--pressed");
        window.removeEventListener("pointerup", this.handleRippleButtonPointerup);
    }

    handleRippleButtonAnimationend(event) {
        if (event.animationName == "md-ripple-fadeout") {
            this.host.style.removeProperty("--md-ripple-animation");
            this.host.style.removeProperty("--md-ripple-animation-fadeout");
        }
    }

    handleRippleButtonFocus(event) {
        this.host.classList.add("md-ripple--focused");
    }

    handleRippleButtonBlur(event) {
        this.host.classList.remove("md-ripple--focused");
    }

    destroy() {
        this.host.classList.remove("md-ripple");

        this.host.classList.remove("md-ripple--containment");

        this.host.classList.remove("md-ripple--fadeout");

        this.host.classList.remove("md-ripple--inverse");

        this.host.style.removeProperty("--md-ripple-size");

        this.options.button.classList.remove("md-ripple--button");

        this.options.button.removeAttribute("tabIndex");

        this.options.button.removeEventListener("pointerenter", this.handleRippleButtonPointerenter);
        this.options.button.removeEventListener("pointerleave", this.handleRippleButtonPointerleave);
        this.options.button.removeEventListener("pointerdown", this.handleRippleButtonPointerdown);
        this.options.button.removeEventListener("focus", this.handleRippleButtonFocus);
        this.options.button.removeEventListener("blur", this.handleRippleButtonBlur);
        this.options.button.removeEventListener("animationend", this.handleRippleButtonAnimationend);
    }
}

export { MDRippleModule };
