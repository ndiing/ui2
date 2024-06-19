import { html } from "lit";
import { MDElement } from "../element/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { createRef, ref } from "lit/directives/ref.js";

/**
 * Material Design Form element.
 * @extends MDElement
 */
class MDFormElement extends MDElement {
    /**
     * Static properties for defining form attributes.
     * @property {String} rel - The relationship between the current document and the linked document.
     * @property {String} acceptCharset - List of supported charsets for form submission.
     * @property {String} action - The URL where form data is sent for processing.
     * @property {String} autocomplete - Controls autocomplete behavior for the form.
     * @property {String} enctype - The encoding type for form submission.
     * @property {String} method - The HTTP method used to submit the form.
     * @property {String} name - The name of the form.
     * @property {Boolean} noValidate - Indicates whether form validation is bypassed.
     * @property {String} target - The browsing context (e.g., tab, window) where form responses are displayed.
     */
    static properties = {
        rel: { type: String },
        acceptCharset: { type: String },
        action: { type: String },
        autocomplete: { type: String },
        enctype: { type: String },
        method: { type: String },
        name: { type: String },
        noValidate: { type: Boolean },
        target: { type: String },
    };

    /**
     * Ref object for accessing the native form element.
     * @type {RefObject<HTMLFormElement>}
     */
    native = createRef();

    constructor() {
        super();

        // Default values for method and enctype
        this.method = "POST";
        this.enctype = "application/x-www-form-urlencoded";

        // Initialize body with child nodes
        this.body = Array.from(this.childNodes);
    }

    /**
     * Renders the form element with specified attributes and child nodes.
     * @returns {TemplateResult} Rendered template of the form element.
     */
    render() {
        /* prettier-ignore */
        return html`
            <form 
                class="md-form__native"
                .rel="${ifDefined(this.rel)}"
                .acceptCharset="${ifDefined(this.acceptCharset)}"
                .action="${ifDefined(this.action)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                .enctype="${ifDefined(this.enctype)}"
                .method="${ifDefined(this.method)}"
                .name="${ifDefined(this.name)}"
                .noValidate="${ifDefined(this.noValidate)}"
                .target="${ifDefined(this.target)}"
                @reset="${this.handleFormNativeReset}"
                @submit="${this.handleFormNativeSubmit}"
                ${ref(this.native)}
            >${this.body}</form>
        `;
    }

    /**
     * Handles the form reset event by dispatching a reset event to form elements.
     * @param {Event} event - The reset event from the form.
     * @fires MDFormElement#onFormNativeReset
     */
    handleFormNativeReset(event) {
        for (const element of this.native.value.elements) {
            const event = new CustomEvent("reset", {
                bubbles: true,
                cancelable: true,
            });
            element.dispatchEvent(event);
        }

        this.emit("onFormNativeReset", event);
    }

    /**
     * Handles the form submit event by preventing the default submission and emitting a custom event.
     * @param {Event} event - The submit event from the form.
     * @fires MDFormElement#onFormNativeSubmit
     */
    handleFormNativeSubmit(event) {
        event.preventDefault();

        this.emit("onFormNativeSubmit", event);
    }
}

// Define the custom element 'md-form' using MDFormElement class
customElements.define("md-form", MDFormElement);

export { MDFormElement };
