import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevVerify extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <h1>${"Verify"}</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("dev-verify", DevVerify);

export default document.createElement("dev-verify");
