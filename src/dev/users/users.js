import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevUsers extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <h1>${"Users"}</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("dev-users", DevUsers);

export default document.createElement("dev-users");
