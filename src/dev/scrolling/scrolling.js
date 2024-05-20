import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Scrolling } from "../../com/scrolling/scrolling";

class DevScrolling extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <div class="viewport" style="height:calc(52px * 10);">
                        <div class="scrollbar"></div>
                        <div class="container">
                            ${this.list?.map(item => html`
                                <div class="item" style="height:52px;">${item.label}</div>
                            `)}
                        </div>
                    </div>
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        const viewport = this.querySelector(".viewport");
        const scrollbar = this.querySelector(".scrollbar");
        const container = this.querySelector(".container");
        const item = this.querySelector(".item");

        handleScrolling = handleScrolling.bind(this);

        function handleScrolling(event) {
            const { start, end } = event.detail;

            this.list = Array.from({ length: end - start }, (v, k) => ({
                label: start + k,
            }));

            this.requestUpdate();
        }
        viewport.addEventListener("onScrolling", handleScrolling);

        this.scrolling = new Scrolling(viewport, {
            scrollbar,
            container,
        });
        // console.log(this.scrolling)

        viewport.scrollTop=(Math.floor(1000*52))/2
    }
}

customElements.define("dev-scrolling", DevScrolling);

export default document.createElement("dev-scrolling");
