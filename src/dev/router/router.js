import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevRouter extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">

            </div>
        `;
    }
}

customElements.define("dev-router", DevRouter);

export default document.createElement("dev-router");
