import { LitElement } from "lit";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

/**
 *
 * @extends LitElement
 */
class MDElement extends LitElement {
    /**
     *
     */
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }

    /**
     *
     */
    createRenderRoot() {
        return this;
    }

    /**
     *
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

export { MDElement };
