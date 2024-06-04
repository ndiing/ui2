import { html } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDFormComponent extends MDElement {
    /**
     * Properties of the MDFormComponent.
     * @property {String} [acceptCharset] - The character encodings that are to be used for form submission.
     * @property {String} [action] - The URL where the form data will be submitted.
     * @property {String} [elements] - The form elements.
     * @property {String} [encoding] - The encoding type for form submission.
     * @property {String} [enctype] - The content type used to submit the form to the server.
     * @property {String} [length] - The number of elements in the form.
     * @property {String} [method] - The HTTP method used to submit the form.
     * @property {String} [name] - The name of the form.
     * @property {String} [target] - The name of the target frame where the response will be displayed.
     * @property {Boolean} [novalidate] - Specifies whether the form should be validated before submission.
     * @property {String} [autocomplete] - Specifies whether the autocomplete feature is enabled or disabled on the form.
     */
    static get properties() {
        return {
            action: { type: String },
            method: { type: String },
            enctype: { type: String },
            target: { type: String },
            name: { type: String },
            novalidate: { type: Boolean },
            autocomplete: { type: String },
        };
    }

    /**
     *
     */
    constructor() {
        super();
        this.body = Array.from(this.childNodes);
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            <form
                .action="${ifDefined(this.action)}"
                .method="${ifDefined(this.method)}"
                .enctype="${ifDefined(this.enctype)}"
                .target="${ifDefined(this.target)}"
                .name="${ifDefined(this.name)}"
                .novalidate="${ifDefined(this.novalidate)}"
                .autocomplete="${ifDefined(this.autocomplete)}"
                class="md-form__native"
                @formdata="${this.handleFormNativeFormdata}"
                @reset="${this.handleFormNativeReset}"
                @submit="${this.handleFormNativeSubmit}"
            >${this.body}</form>
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-form");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-form");
        await this.updateComplete;
    }

    /**
     *
     */
    updated(changedProperties) {}

    get formNative() {
        return this.querySelector(".md-form__native");
    }

    /**
     *
     * @fires MDFormComponent#onFormNativeFormdata
     */
    handleFormNativeFormdata(event) {
        this.emit("onFormNativeFormdata", event);
    }

    /**
     *
     * @fires MDFormComponent#onFormNativeReset
     */
    handleFormNativeReset(event) {
        for (const element of this.formNative.elements) {
            const event = new CustomEvent("reset", {
                bubbles: true,
                cancelable: true,
            });
            element.dispatchEvent(event);
        }
        this.emit("onFormNativeReset", event);
    }

    /**
     *
     * @fires MDFormComponent#onFormNativeSubmit
     */
    handleFormNativeSubmit(event) {
        event.preventDefault();
        this.emit("onFormNativeSubmit", event);
    }

    /**
     *
     */
    reset() {
        this.formNative.reset();
    }

    /**
     *
     */
    submit(button) {
        if (this.formNative.requestSubmit) {
            if (button) {
                this.formNative.requestSubmit(button);
            } else {
                this.formNative.requestSubmit();
            }
        } else {
            this.formNative.submit();
        }
    }
}

customElements.define("md-form", MDFormComponent);

export { MDFormComponent };
