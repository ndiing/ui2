import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

/**
 * Base class for a custom MDComponent extending LitElement.
 * Provides utility methods for event handling.
 * @extends LitElement
 */
class MDComponent extends LitElement {
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }

    createRenderRoot() {
        return this;
    }

    /**
     * Adds an event listener bound to the element instance.
     * @param {string} type - The type of event to listen for.
     * @param {EventListenerOrEventListenerObject} listener - The listener function to call when the event occurs.
     */
    on(type, listener) {
        listener = listener.bind(this);
        this.addEventListener(type, listener);
    }

    /**
     * Adds a one-time event listener bound to the element instance.
     * @param {string} type - The type of event to listen for.
     * @param {EventListenerOrEventListenerObject} listener - The listener function to call when the event occurs.
     */
    once(type, listener) {
        const handleListener = (event) => {
            listener(event);
            this.off(type, handleListener);
        };
        this.on(type, handleListener);
    }

    /**
     * Removes an event listener from the element instance.
     * @param {string} type - The type of event to remove the listener from.
     * @param {EventListenerOrEventListenerObject} listener - The listener function to remove.
     */
    off(type, listener) {
        this.removeEventListener(type, listener);
    }

    /**
     * Dispatches a custom event from the element instance.
     * @param {string} type - The type of event to dispatch.
     * @param {*} detail - Any data to pass along with the event.
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
