import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppBlogComponent extends MDElement {
    render() {
        return html`
            <h1>Blog</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("app-blog", AppBlogComponent);

export default document.createElement("app-blog");
