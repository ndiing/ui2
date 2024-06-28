import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import { msg } from "@lit/localize";

class DevUserComponent extends MDComponent {
    render() {
        return html`
            <h1>${msg("User")}</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("dev-user", DevUserComponent);

export default document.createElement("dev-user");
