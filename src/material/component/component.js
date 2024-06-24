import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

/**
 * Base component class for custom components using LitElement.
 * @extends LitElement
 */
class MDComponent extends LitElement {
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }

    /**
     * Override createRenderRoot to render into the component's shadowRoot.
     * @returns {this}
     */
    createRenderRoot() {
        return this;
    }

    /**
     * Shorthand for adding an event listener to the component.
     * @param {string} type - The event type to listen for.
     * @param {EventListenerOrEventListenerObject} listener - The listener function or object.
     */
    on(type, listener) {
        listener = listener.bind(this);
        this.addEventListener(type, listener);
    }

    /**
     * Shorthand for adding a one-time event listener to the component.
     * @param {string} type - The event type to listen for.
     * @param {EventListenerOrEventListenerObject} listener - The listener function or object.
     */
    once(type, listener) {
        const handleListener = (event) => {
            listener(event);
            this.off(type, handleListener);
        };
        this.on(type, handleListener);
    }

    /**
     * Shorthand for removing an event listener from the component.
     * @param {string} type - The event type to remove the listener from.
     * @param {EventListenerOrEventListenerObject} listener - The listener function or object to remove.
     */
    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    /**
     * Emits a custom event from the component.
     * @param {string} type - The event type to emit.
     * @param {*} detail - Optional detail to include with the event.
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

export { MDComponent };
