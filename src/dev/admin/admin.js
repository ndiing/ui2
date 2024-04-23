import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevAdmin extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <h1>${msg("Admin")}</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("dev-admin", DevAdmin);

export default document.createElement("dev-admin");
