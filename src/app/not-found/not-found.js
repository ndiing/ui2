import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppNotFoundComponent extends MDElement {
    render() {
        return html`
            <h1>NotFound</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("app-not-found", AppNotFoundComponent);

export default document.createElement("app-not-found");
