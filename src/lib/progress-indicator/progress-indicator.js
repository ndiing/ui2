import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDProgressIndicator extends MDElement {
    static get properties() {
        return {
            max:{type:Number},
            value:{type:Number},
        };
    }

    constructor() {
        super();
        this.max=100
    }

    render() {
        // prettier-ignore
        return html`
            <progress 
                class="md-progress-indicator__native"
                .max="${ifDefined(this.max)}"
                .value="${ifDefined(this.value)}"
            ></progress>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-progress-indicator");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-progress-indicator");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-progress-indicator", MDProgressIndicator);

export { MDProgressIndicator };
