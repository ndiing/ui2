import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevUser extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <h1>${"User"}</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("dev-user", DevUser);

export default document.createElement("dev-user");
