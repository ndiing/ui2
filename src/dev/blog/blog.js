import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevBlog extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <h1>${"Blog"}</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("dev-blog", DevBlog);

export default document.createElement("dev-blog");
