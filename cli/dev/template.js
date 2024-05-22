import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTemplate extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
{{placeholder}}
            </div>
        `;
    }
}

customElements.define("dev-template", DevTemplate);

export default document.createElement("dev-template");
