import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class MDEmojiPicker extends MDElement {
    static get properties() {
        return {
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-emoji-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-emoji-picker");
    }

    updated(changedProperties) {
    }
}

customElements.define("md-emoji-picker", MDEmojiPicker);

export { MDEmojiPicker };
