import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSnackbar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-snackbar></md-snackbar>
                </div>
                
                
            </div>
        `;
    }
}

customElements.define("dev-snackbar", DevSnackbar);

export default document.createElement("dev-snackbar");
