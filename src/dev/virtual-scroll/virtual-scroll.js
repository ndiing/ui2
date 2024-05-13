import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { VirtualScroll } from "../../lib/virtual-scroll/virtual-scroll";
import { Store } from "../../lib/store/store";

class DevVirtualScroll extends MDElement {
    constructor() {
        super();
        this.data = [];
    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <div class="dev-virtual-scroll__viewport" style="height:calc(40px * 10)">
                        <div class="dev-virtual-scroll__container">
                            ${this.data.map(item=>html`
                                <div class="dev-virtual-scroll__item">${item.label}</div>
                            `)}
                        </div>
                    </div>
                </div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4"></div>
            </div>
        `;
    }

    async firstUpdated() {
        await this.updateComplete;

        let year = new Date().getFullYear();
        // year = 1990;

        const total = new Date().getFullYear() * 2;
        const itemHeight = 40;
        const viewportHeight = 40 * 10;
        const viewport = this.querySelector(".dev-virtual-scroll__viewport");
        const virtualScroll = new VirtualScroll(viewport, {
            total,
            itemHeight,
            viewportHeight,
        });

        viewport.scrollTop = itemHeight * (total / 2) - itemHeight * Math.floor(viewportHeight / itemHeight / 2);

        viewport.addEventListener("onVirtualScroll", (event) => {
            const { start, end } = event.detail;
            this.data = Array.from({ length: end - start }, (v, k) => ({
                label: year + k + start - total / 2,
            }));
            this.requestUpdate();
        });
    }
}

customElements.define("dev-virtual-scroll", DevVirtualScroll);

export default document.createElement("dev-virtual-scroll");
