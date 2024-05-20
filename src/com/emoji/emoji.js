import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
class MDEmojiElement extends MDElement {
    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-emoji");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-emoji");
    }
}
customElements.define("md-emoji", MDEmojiElement);
export { MDEmojiElement };
