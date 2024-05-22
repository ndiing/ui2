import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevDataTable extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-data-table-item avatar="https://placehold.co/200x200" image="https://placehold.co/200x200" video="https://placehold.co/200x200" icon="favorite" label="Label" labelSecondary="" text="" leadingCheckbox="" leadingRadioButton="" leadingSwitch="" trailingCheckbox="" trailingRadioButton="" trailingSwitch=""></md-data-table-item>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-data-table></md-data-table>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-data-table", DevDataTable);

export default document.createElement("dev-data-table");
