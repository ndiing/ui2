import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevTextFieldComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-text-field></md-text-field>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-text-field", DevTextFieldComponent);

export default document.createElement("dev-text-field");
