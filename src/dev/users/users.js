import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";

class DevUsersComponent extends MDComponent {
    render() {
        return html`
            <h1>Users</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("dev-users", DevUsersComponent);

export default document.createElement("dev-users");
