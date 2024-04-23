import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDForm extends MDElement {
    static get properties() {
        return {
            action: { type: String },
            enctype: { type: String },
            method: { type: String },
        };
    }

    constructor() {
        super();

        this.action = "/";
        this.enctype = "application/json";
        this.method = "post";

        this.childNodes_ = Array.from(this.childNodes);
    }

    render() {
        // prettier-ignore
        return html`
            <form
                class="md-form__native"
                .action="${ifDefined(this.action)}"
                .enctype="${ifDefined(this.enctype)}"
                .method="${ifDefined(this.method)}"
                @reset="${this.handleFormNativeReset}"
                @submit="${this.handleFormNativeSubmit}"
            >${this.childNodes_}</form>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-form");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-form");
    }

    updated(changedProperties) {}

    get formNative() {
        return this.querySelector(".md-form__native");
    }

    handleFormNativeReset(event) {
        for(const element of this.formNative.elements){
            const event=new CustomEvent('reset',{
                bubbles:true,
                cancelable:true,
                detail: event
            })
            element.dispatchEvent(event)
        }

        this.emit("onFormNativeReset", event);
    }
    handleFormNativeSubmit(event) {
        event.preventDefault();

        this.emit("onFormNativeSubmit", event);
    }

    reset() {
        this.formNative.reset();
    }
    submit(button) {
        let formNative = this.formNative;

        if (formNative.requestSubmit) {
            if (button) {
                formNative.requestSubmit(button);
            } else {
                formNative.requestSubmit();
            }
        } else {
            formNative.submit();
        }
    }
}

customElements.define("md-form", MDForm);

export { MDForm };
