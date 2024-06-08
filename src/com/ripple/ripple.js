/**
 * Represents a module for creating ripple effects on elements.
 */
class MDRippleModule {
    /**
     * Creates an instance of MDRippleModule.
     * @param {HTMLElement} host - The host element to which the module is attached.
     * @param {object} options - Options for configuring the ripple effect.
     * @param {HTMLElement} [options.container=null] - The container element for the ripple effect. Defaults to the host element.
     * @param {HTMLElement} [options.button=null] - The button element to which the ripple effect is applied. Defaults to the host element.
     * @param {boolean} [options.containment=true] - Flag indicating whether the ripple effect is contained within the container. Defaults to true.
     * @param {number} [options.size=null] - The size of the ripple effect in percentage. Defaults to dynamically calculated size based on container dimensions.
     * @param {boolean} [options.centered=false] - Flag indicating whether the ripple effect is centered on the click position. Defaults to false.
     * @param {boolean} [options.fadeout=false] - Flag indicating whether the ripple effect fades out. Defaults to false.
     * @param {boolean} [options.inverse=false] - Flag indicating whether the ripple effect is inverted. Defaults to false.
     */
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

        this.handlePointerenter = this.handlePointerenter.bind(this);
        this.handlePointerleave = this.handlePointerleave.bind(this);
        this.handlePointerdown = this.handlePointerdown.bind(this);
        this.handlePointerup = this.handlePointerup.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleAnimationend = this.handleAnimationend.bind(this);

        this.init();
    }

    /**
     * Initializes the ripple module.
     */
    init() {
        this.container = this.options.container || this.host;
        this.button = this.options.button || this.host;

        this.container.classList.add("md-ripple");

        this.container.classList.toggle("md-ripple--containment",this.options.containment);
        this.container.classList.toggle("md-ripple--fadeout",this.options.fadeout);
        this.container.classList.toggle("md-ripple--inverse",this.options.inverse);

        if (!this.options.size) {
            const { width, height } = this.container.getBoundingClientRect();

            this.options.size = (Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / width) * 100;
        }

        this.container.style.setProperty("--md-ripple-size", this.options.size + "%");

        this.button.classList.add("md-ripple--button");
        this.button.setAttribute("tabIndex", "0");

        this.button.addEventListener("pointerenter", this.handlePointerenter);
        this.button.addEventListener("pointerleave", this.handlePointerleave);
        this.button.addEventListener("pointerdown", this.handlePointerdown);
        this.button.addEventListener("focus", this.handleFocus);
        this.button.addEventListener("blur", this.handleBlur);
        this.button.addEventListener("animationend", this.handleAnimationend);
    }

    /**
     * Event handler for the pointerenter event.
     * @param {PointerEvent} event - The pointerenter event.
     */
    handlePointerenter(event) {
        this.container.classList.add("md-ripple--hover");
    }

    /**
     * Event handler for the pointerleave event.
     * @param {PointerEvent} event - The pointerleave event.
     */
    handlePointerleave(event) {
        this.container.classList.remove("md-ripple--hover");
    }

    /**
     * Event handler for the pointerdown event.
     * @param {PointerEvent} event - The pointerdown event.
     */
    handlePointerdown(event) {
        window.addEventListener("pointerup", this.handlePointerup);

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

    /**
     * Event handler for the pointerup event.
     * @param {PointerEvent} event - The pointerup event.
     */
    handlePointerup(event) {
        this.container.classList.remove("md-ripple--pressed");

        window.removeEventListener("pointerup", this.handlePointerup);
    }

    /**
     * Event handler for the animationend event.
     * @param {AnimationEvent} event - The animationend event.
     */
    handleAnimationend(event) {
        if (this.options.fadeout) {
            if (event.animationName == "md-ripple-fadeout") {
                this.container.style.removeProperty("--md-ripple-animation");
                this.container.style.removeProperty("--md-ripple-animation-fadeout");
            }
        } else {
            this.container.style.removeProperty("--md-ripple-animation");
        }
    }

    /**
     * Event handler for the focus event.
     * @param {FocusEvent} event - The focus event.
     */
    handleFocus(event) {
        this.container.classList.add("md-ripple--focused");
    }

    /**
     * Event handler for the blur event.
     * @param {FocusEvent} event - The blur event.
     */
    handleBlur(event) {
        this.container.classList.remove("md-ripple--focused");
    }

    /**
     * Destroys the ripple module and cleans up resources.
     */
    destroy() {
        this.container.classList.remove("md-ripple");
        this.container.classList.remove("md-ripple--containment");
        this.container.classList.remove("md-ripple--fadeout");
        this.container.classList.remove("md-ripple--inverse");

        this.container.style.removeProperty("--md-ripple-size");

        this.button.classList.remove("md-ripple--button");
        this.button.removeAttribute("tabIndex");

        this.button.removeEventListener("pointerenter", this.handlePointerenter);
        this.button.removeEventListener("pointerleave", this.handlePointerleave);
        this.button.removeEventListener("pointerdown", this.handlePointerdown);
        this.button.removeEventListener("focus", this.handleFocus);
        this.button.removeEventListener("blur", this.handleBlur);
        this.button.removeEventListener("animationend", this.handleAnimationend);
    }
}

export { MDRippleModule };
