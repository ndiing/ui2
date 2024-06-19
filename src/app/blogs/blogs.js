import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppBlogsComponent extends MDElement {
    render() {
        return html`
            <h1>Blogs</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("app-blogs", AppBlogsComponent);

export default document.createElement("app-blogs");
