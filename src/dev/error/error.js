import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevErrorComponent extends MDComponent {
    render() {
        return html`
            <h1>Error</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("dev-error", DevErrorComponent);

export default document.createElement("dev-error");
