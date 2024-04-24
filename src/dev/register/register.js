import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevRegister extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <h1>${"Register"}</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("dev-register", DevRegister);

export default document.createElement("dev-register");
