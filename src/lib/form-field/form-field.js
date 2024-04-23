import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDFormFieldElement extends MDElement {
    static get properties() {
        return { action: { type: String }, method: { type: String }, enctype: { type: String } };
    }

    constructor() {
        super();
        this.action = "/";
        this.method = "POST";
        this.enctype = "application/json";
        this.childNodes_ = Array.from(this.childNodes);
    }

    render() {
        // prettier-ignore
        return html`
            <form
                .action="${ifDefined(this.action)}"
                .method="${ifDefined(this.method)}"
                .enctype="${ifDefined(this.enctype)}"
                @reset="${this.handleFormFieldNativeReset}"
                @submit="${this.handleFormFieldNativeSubmit}"
            >${this.childNodes_}</form>
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-form-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-form-field");
    }

    get formFieldNative() {
        return this.querySelector("form");
    }

    handleFormFieldNativeReset(event) {
        const elements = this.formFieldNative.elements;

        for (const element of elements) {
            const event = new CustomEvent("reset", { bubbles: true, cancelable: true, detail: event });
            element.dispatchEvent(event);
        }
        this.emit("onFormFieldNativeReset", event);
    }

    handleFormFieldNativeSubmit(event) {
        event.preventDefault();
        const formData = new FormData(this.formFieldNative);
        const resource = this.action;
        let body;

        if (this.enctype.includes("application/json")) {
            body = JSON.stringify(Object.fromEntries(formData.entries()));
        }
        const options = { method: this.method, headers: { "Content-Type": this.enctype }, body };
        this.emit("onFormFieldNativeSubmit", { resource, options });
    }

    reset() {
        let myForm = this.formFieldNative;
        myForm.reset();
    }

    submit(submitButton) {
        let myForm = this.formFieldNative;

        if (myForm.requestSubmit) {
            if (submitButton) {
                myForm.requestSubmit(submitButton);
            } else {
                myForm.requestSubmit();
            }
        } else {
            myForm.submit();
        }
    }
}

customElements.define("md-form-field", MDFormFieldElement);

export { MDFormFieldElement };
