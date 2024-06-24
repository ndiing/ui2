/**
 * Controller class for managing ripple effects on a host element.
 */
class MDRippleController {
    /**
     * Constructs an instance of MDRippleController.
     * @param {HTMLElement} host - The host element to apply ripple effects to.
     * @param {Object} [options={}] - Optional configuration options.
     * @param {string} [options.buttonSelector] - Selector for the button element within the host.
     * @param {boolean} [options.centered=false] - Whether the ripple effect should be centered.
     * @param {boolean} [options.clipped=false] - Whether the ripple effect is clipped.
     * @param {string} [options.containerSelector] - Selector for the container element within the host.
     * @param {boolean} [options.fadeOut=false] - Whether the ripple effect should fade out.
     * @param {number} [options.size=null] - Size of the ripple effect relative to the container.
     */
    constructor(host, options = {}) {
        (this.host = host).addController(this);

        this.options = {
            buttonSelector: null,
            centered: false,
            clipped: false,
            containerSelector: null,
            fadeOut: false,
            size: null,
            ...options,
        };
    }

    /**
     * Method called when the host element is connected to the DOM.
     * Initializes the ripple effect listeners and configuration.
     */
    async hostConnected() {
        await this.host.updateComplete;

        this.container = this.options.containerSelector ? this.host.querySelector(this.options.containerSelector) : this.host;
        this.button = this.options.buttonSelector ? this.host.querySelector(this.options.buttonSelector) : this.host;

        this.container.classList.add("md-ripple");

        this.button.classList.add("md-ripple--button");

        this.button.setAttribute("tabIndex", 0);

        this.container.classList.toggle("md-ripple--clipped", !!this.options.clipped);
        this.container.classList.toggle("md-ripple--fade-out", !!this.options.fadeOut);

        if (this.options.size) {
            this.size = (this.options.size / this.container.clientWidth) * 100;
        } else {
            this.size = (Math.sqrt(Math.pow(this.container.clientWidth, 2) + Math.pow(this.container.clientHeight, 2)) / this.container.clientWidth) * 100;
        }
        this.container.style.setProperty("--md-comp-ripple-size", `${this.size}%`);
        this.container.style.setProperty("--md-comp-ripple-animation", "none");

        this.handleRipplePointerenter = this.handleRipplePointerenter.bind(this);
        this.handleRipplePointerleave = this.handleRipplePointerleave.bind(this);
        this.handleRipplePointerdown = this.handleRipplePointerdown.bind(this);
        this.handleRipplePointerup = this.handleRipplePointerup.bind(this);
        this.handleRippleFocus = this.handleRippleFocus.bind(this);
        this.handleRippleBlur = this.handleRippleBlur.bind(this);

        this.button.addEventListener("pointerenter", this.handleRipplePointerenter);
        this.button.addEventListener("pointerleave", this.handleRipplePointerleave);
        this.button.addEventListener("pointerdown", this.handleRipplePointerdown);
        this.button.addEventListener("focus", this.handleRippleFocus);
        this.button.addEventListener("blur", this.handleRippleBlur);
    }

    /**
     * Method called when the host element is disconnected from the DOM.
     * Placeholder for future functionality if needed.
     */
    async hostDisconnected() {
        await this.host.updateComplete;

        this.container.classList.remove("md-ripple");
        this.button.classList.remove("md-ripple--button");
        this.button.removeAttribute("tabIndex");

        this.container.classList.remove("md-ripple--clipped");
        this.container.classList.remove("md-ripple--fade-out");

        this.container.style.removeProperty("--md-comp-ripple-size");

        this.button.removeEventListener("pointerenter", this.handleRipplePointerenter);
        this.button.removeEventListener("pointerleave", this.handleRipplePointerleave);
        this.button.removeEventListener("pointerdown", this.handleRipplePointerdown);
        this.button.removeEventListener("focus", this.handleRippleFocus);
        this.button.removeEventListener("blur", this.handleRippleBlur);
    }

    /**
     * Handles pointerenter event to add hover effect to the ripple container.
     */
    handleRipplePointerenter() {
        this.container.style.removeProperty("--md-comp-ripple-animation");

        this.container.classList.add("md-ripple--hover");
    }

    /**
     * Handles pointerleave event to remove hover effect from the ripple container.
     */
    handleRipplePointerleave() {
        this.container.classList.remove("md-ripple--hover");
    }

    /**
     * Handles pointerdown event to initiate the ripple effect.
     * @param {PointerEvent} event - The pointerdown event object.
     */
    handleRipplePointerdown(event) {
        this.container.classList.add("md-ripple--pressed");

        window.addEventListener("pointerup", this.handleRipplePointerup);

        this.container.style.setProperty("--md-comp-ripple-animation", "none");

        const rect = this.container.getBoundingClientRect();

        this.container.style.removeProperty("--md-comp-ripple-animation");

        if (!this.options.centered) {
            const size = this.size;
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / size);
            const y = (0.5 - top) * ((100 / size) * (rect.height / rect.width));

            this.container.style.setProperty("--md-comp-ripple-size", `${size}%`);
            this.container.style.setProperty("--md-comp-ripple-left", `${left * 100}%`);
            this.container.style.setProperty("--md-comp-ripple-top", `${top * 100}%`);
            this.container.style.setProperty("--md-comp-ripple-x", `${x * 100}%`);
            this.container.style.setProperty("--md-comp-ripple-y", `${y * 100}%`);
        }
    }

    /**
     * Handles pointerup event to end the ripple effect.
     */
    handleRipplePointerup() {
        this.container.classList.remove("md-ripple--pressed");

        window.removeEventListener("pointerup", this.handleRipplePointerup);
    }

    /**
     * Handles focus event to add focus effect to the ripple container.
     */
    handleRippleFocus() {
        this.container.classList.add("md-ripple--focused");
    }

    /**
     * Handles blur event to remove focus effect from the ripple container.
     */
    handleRippleBlur() {
        this.container.classList.remove("md-ripple--focused");
    }
}

export { MDRippleController };
