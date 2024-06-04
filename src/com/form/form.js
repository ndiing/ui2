import { html } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDFormComponent extends MDElement {
    /**
     *
     * @property {String} [acceptCharset] -
     * @property {String} [action] -
     * @property {String} [elements] -
     * @property {String} [encoding] -
     * @property {String} [enctype] -
     * @property {String} [length] -
     * @property {String} [method] -
     * @property {String} [name] -
     * @property {String} [target] -
     */
    static get properties() {
        return {
            acceptCharset: { type: String },
            action: { type: String },
            elements: { type: String },
            encoding: { type: String },
            enctype: { type: String },
            length: { type: String },
            method: { type: String },
            name: { type: String },
            target: { type: String },
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
                .acceptCharset="${ifDefined(this.acceptCharset)}"
                .action="${ifDefined(this.action)}"
                .elements="${ifDefined(this.elements)}"
                .encoding="${ifDefined(this.encoding)}"
                .enctype="${ifDefined(this.enctype)}"
                .length="${ifDefined(this.length)}"
                .method="${ifDefined(this.method)}"
                .name="${ifDefined(this.name)}"
                .target="${ifDefined(this.target)}"
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
