import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevAuth extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <h1>${msg("Auth")}</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("dev-auth", DevAuth);

export default document.createElement("dev-auth");
