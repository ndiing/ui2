import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppUsersComponent extends MDElement {
    render() {
        return html`
            <h1>Users</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("app-users", AppUsersComponent);

export default document.createElement("app-users");
