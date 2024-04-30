import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSwitch extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <md-form
                @onFormNativeSubmit="${console.log}"
            >
                <div class="md-layout--column">
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-switch name="switch"></md-switch>
                    </div>
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-switch name="switch" checked defaultChecked></md-switch>
                    </div>
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-button type="reset" label="Reset"></md-button>
                        <md-button type="submit" label="Submit"></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }
}

customElements.define("dev-switch", DevSwitch);

export default document.createElement("dev-switch");
