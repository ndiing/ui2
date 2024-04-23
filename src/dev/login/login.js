import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevLogin extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <h1>${msg("Login")}</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("dev-login", DevLogin);

export default document.createElement("dev-login");
