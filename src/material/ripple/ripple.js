/**
 * MDRippleController manages ripple effect behavior on a host element.
 * @example
 * // HTML structure
 * // <div id="host">
 * //   <div class="button">
 * //     Click Me
 * //   </div>
 * // </div>
 *
 * // Define the host element
 * const hostElement = document.getElementById('host');
 *
 * // Define configuration options
 * const options = {
 *   containerSelector: '#host',
 *   buttonSelector: '.button',
 *   size: 150,
 *   fadeOut: true,
 *   centered: false,
 *   clipped: true
 * };
 *
 * // Instantiate the ripple controller
 * const rippleController = new MDRippleController(hostElement, options);
 *
 * // Add methods to handle connecting and disconnecting the host element
 * hostElement.connectedCallback = () => rippleController.hostConnected();
 * hostElement.disconnectedCallback = () => rippleController.hostDisconnected();
 *
 * // Simulate connecting the host element to the DOM
 * hostElement.connectedCallback();
 *
 * // To disconnect the host element and clean up
 * // hostElement.disconnectedCallback();
 */
class MDRippleController {
    /**
     * Constructs an instance of MDRippleController.
     * @param {HTMLElement} host - The host element to which the ripple effect is applied.
     * @param {Object} options - Options for configuring the ripple effect.
     * @param {string} [options.containerSelector=null] - Selector for the container element within the host.
     * @param {string} [options.buttonSelector=null] - Selector for the button element within the host.
     * @param {number} [options.size=null] - Size of the ripple relative to the container's dimensions.
     * @param {boolean} [options.fadeOut=false] - Whether to fade out the ripple effect.
     * @param {boolean} [options.centered=false] - Whether to center the ripple effect.
     * @param {boolean} [options.clipped=true] - Whether the ripple effect is clipped within the container.
     */
    constructor(host, options) {
        (this.host = host).addController(this);
        this.options = {
            containerSelector: null,
            buttonSelector: null,
            size: null,
            fadeOut: false,
            centered: false,
            clipped: true,
            ...options,
        };
    }

    /**
     * Performs setup tasks when the host element is connected to the DOM.
     * Waits for host's update to complete and sets up event listeners and initial styles.
     * @returns {Promise<void>} A promise that resolves when setup is complete.
     */
    async hostConnected() {
        await this.host.updateComplete;

        this.container = this.options.containerSelector ? this.host.querySelector(this.options.containerSelector) : this.host;
        this.button = this.options.buttonSelector ? this.host.querySelector(this.options.buttonSelector) : this.host;

        this.container.classList.add("md-ripple");

        let size;
        if (this.options.size) {
            size = (this.options.size / this.container.clientWidth) * 100;
        } else {
            size = (Math.sqrt(Math.pow(this.container.clientWidth, 2) + Math.pow(this.container.clientHeight, 2)) / this.container.clientWidth) * 100;
        }
        this.container.style.setProperty("--md-comp-ripple-size", size + "%");
        this.size = size;

        this.button.setAttribute("tabIndex", 0);
        this.button.classList.add("md-ripple--button");

        this.container.classList.toggle("md-ripple--fade-out", !!this.options.fadeOut);
        this.container.classList.toggle("md-ripple--clipped", !!this.options.clipped);

        this.handlePointerenter = this.handlePointerenter.bind(this);
        this.handlePointerleave = this.handlePointerleave.bind(this);
        this.handlePointerdown = this.handlePointerdown.bind(this);
        this.handlePointerup = this.handlePointerup.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);

        this.button.addEventListener("pointerenter", this.handlePointerenter);
        this.button.addEventListener("pointerleave", this.handlePointerleave);
        this.button.addEventListener("pointerdown", this.handlePointerdown);
        this.button.addEventListener("focus", this.handleFocus);
        this.button.addEventListener("blur", this.handleBlur);
    }

    /**
     * Cleans up resources when the host element is disconnected from the DOM.
     * Waits for host's update to complete and removes event listeners and styles.
     * @returns {Promise<void>} A promise that resolves when cleanup is complete.
     */
    async hostDisconnected() {
        await this.host.updateComplete;

        this.container.classList.remove("md-ripple");

        this.container.style.removeProperty("--md-comp-ripple-size");

        this.button.removeAttribute("tabIndex");

        this.button.classList.remove("md-ripple--button");
        this.container.classList.remove("md-ripple--fade-out");
        this.container.classList.remove("md-ripple--clipped");

        this.button.removeEventListener("pointerenter", this.handlePointerenter);
        this.button.removeEventListener("pointerleave", this.handlePointerleave);
        this.button.removeEventListener("pointerdown", this.handlePointerdown);
        this.button.removeEventListener("focus", this.handleFocus);
        this.button.removeEventListener("blur", this.handleBlur);
    }

    /**
     * Handles the pointerenter event on the button to add hover effect.
     */
    handlePointerenter() {
        this.container.classList.add("md-ripple--hover");
    }

    /**
     * Handles the pointerleave event on the button to remove hover effect.
     */
    handlePointerleave() {
        this.container.classList.remove("md-ripple--hover");
    }

    /**
     * Handles the pointerdown event on the button to initiate the ripple effect.
     * @param {PointerEvent} event - The pointerdown event object.
     */
    handlePointerdown(event) {
        window.addEventListener("pointerup", this.handlePointerup);
        this.container.classList.add("md-ripple--pressed");

        this.container.style.setProperty("--md-comp-ripple-animation", "none");

        const rect = this.container.getBoundingClientRect();

        this.container.style.removeProperty("--md-comp-ripple-animation");

        if (!this.options.centered) {
            const size = this.size;
            const left = (event.clientX - rect.left) / rect.width;
            const top = (event.clientY - rect.top) / rect.height;
            const x = (0.5 - left) * (100 / size);
            const y = (0.5 - top) * ((100 / size) * (rect.height / rect.width));

            this.container.style.setProperty("--md-comp-ripple-size", size + "%");
            this.container.style.setProperty("--md-comp-ripple-left", left * 100 + "%");
            this.container.style.setProperty("--md-comp-ripple-top", top * 100 + "%");
            this.container.style.setProperty("--md-comp-ripple-x", x * 100 + "%");
            this.container.style.setProperty("--md-comp-ripple-y", y * 100 + "%");
        }
    }

    /**
     * Handles the pointerup event on the button to end the ripple effect.
     */
    handlePointerup() {
        this.container.classList.remove("md-ripple--pressed");
        window.removeEventListener("pointerup", this.handlePointerup);
    }

    /**
     * Handles the focus event on the button to add focus effect.
     */
    handleFocus() {
        this.container.classList.add("md-ripple--focused");
    }

    /**
     * Handles the blur event on the button to remove focus effect.
     */
    handleBlur() {
        this.container.classList.remove("md-ripple--focused");
    }
}

export { MDRippleController };
