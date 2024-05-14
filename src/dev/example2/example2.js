import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevExample2 extends MDElement {
    render() {
        // prettier-ignore
        return html`
        `;
    }

    firstUpdated(){
    }
}

customElements.define("dev-example2", DevExample2);

export default document.createElement("dev-example2");
