import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevError extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <h1>${"Error"}</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("dev-error", DevError);

export default document.createElement("dev-error");
