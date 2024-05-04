import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevCheckbox extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <md-form
                @onFormNativeSubmit="${console.log}"
            >
                <div class="md-layout--column" style="margin:24px;">
                    <div class="md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4">
                        <md-checkbox></md-checkbox>
                    </div>
                    <div class="md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4">
                        <md-checkbox indeterminate></md-checkbox>
                    </div>
                    <div class="md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4">
                        <md-checkbox checked defaultChecked></md-checkbox>
                    </div>
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-button ui="filled-tonal" type="reset" label="Reset"></md-button>
                        <md-button ui="filled" type="submit" label="Submit"></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }
}

customElements.define("dev-checkbox", DevCheckbox);

export default document.createElement("dev-checkbox");
