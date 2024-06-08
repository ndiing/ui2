import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

/**
 * Represents a module for managing functionality related to the host element.
 */
class MDModule {
    /**
     * Creates an instance of MDModule.
     * @param {HTMLElement} host - The host element to which the module is attached.
     * @param {object} [options={}] - Options for configuring the module.
     */
    constructor(host, options = {}) {
        this.host = host;
        this.options = options;
        // this.init();
    }

    /**
     * Initializes the module.
     */
    init() {}

    /**
     * Destroys the module and cleans up resources.
     */
    destroy() {}

    /**
     * Emits a custom event from the host element.
     * @param {string} type - The type of the event.
     * @param {*} detail - Data to be passed with the event.
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });

        this.host.dispatchEvent(event);
    }
}

/**
 * Represents a controller for managing the behavior of the host element.
 */
class MDController {
    /**
     * Creates an instance of MDController.
     * @param {HTMLElement} host - The host element to which the controller is attached.
     * @param {object} [options={}] - Options for configuring the controller.
     */
    constructor(host, options = {}) {
        this.host = host;
        host.addController(this);
        this.options = options;
    }

    /**
     * Called when the host element is connected to the DOM.
     */
    hostConnected() {}

    /**
     * Called when the host element is updated.
     */
    hostUpdate() {}

    /**
     * Called when the host element is updated and all the children have been updated.
     */
    hostUpdated() {}

    /**
     * Called when the host element is disconnected from the DOM.
     */
    hostDisconnected() {}

    /**
     * Emits a custom event from the host element.
     * @param {...any} args - Arguments to be passed to the emit function of the host element.
     */
    emit(...args) {
        this.host.emit(...args);
    }
}

/**
 * Represents a custom element that extends LitElement.
 */
class MDElement extends LitElement {
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }

    /**
     * Returns the element itself as the render root.
     * @returns {HTMLElement} The element itself.
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Emits a custom event from the element.
     * @param {string} type - The type of the event.
     * @param {*} detail - Data to be passed with the event.
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });

        this.dispatchEvent(event);
    }
}

export { MDModule, MDController, MDElement };
