import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevExample2 extends MDElement {
    render() {
        // prettier-ignore
        return html`
            
            <!-- absolute -->
            <!-- accordion -->
            <!-- anchor -->
            <!-- border -->
            <!-- tabpanel -->
            <!-- card -->
            <!-- column -->
            <!-- fit -->
            <!-- table -->
            <!-- vbox -->
            <!-- hbox -->
            
        `;
    }
}

customElements.define("dev-example2", DevExample2);

export default document.createElement("dev-example2");
