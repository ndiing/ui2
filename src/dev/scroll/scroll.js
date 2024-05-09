import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Store } from "../../lib/store/store";

class DevScroll extends MDElement {
    constructor() {
        super();

        this.data = [];
    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">

                    <div class="viewport">
                        <div class="scroll"></div>
                        <div class="container">
                            ${this.data.map(item=>html`
                                <div class="item">${item.label}</div>
                            `)}
                        </div>
                    </div>

                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
            </div>
        `;
    }

    firstUpdated() {
    }
}

customElements.define("dev-scroll", DevScroll);

export default document.createElement("dev-scroll");
