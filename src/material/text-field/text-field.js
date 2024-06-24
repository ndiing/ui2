import { MDComponent } from "../component/component.js";

class MDTextFieldComponent extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
    }
}

customElements.define("md-text-field", MDTextFieldComponent);

export { MDTextFieldComponent };
