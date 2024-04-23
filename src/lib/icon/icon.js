import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDIconElement extends MDElement {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-icon");
    }
}

customElements.define("md-icon", MDIconElement);

export { MDIconElement };
