import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevBlogs extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <h1>${msg("Blogs")}</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("dev-blogs", DevBlogs);

export default document.createElement("dev-blogs");
