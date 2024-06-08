import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { MDVirtualScrollModule } from "../../com/virtual-scroll/virtual-scroll";

class AppVirtualScrollElement extends MDElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <div
                class="viewport"
                style="width:100%;height:100%;"
            >
                <div class="scrollbar scrollbar--x"></div>
                <div class="scrollbar scrollbar--y"></div>
                <div class="container">
                    ${this.list?.map(
                        (row) => html`
                            <div
                                .data="${row}"
                                class="row"
                                style="display:flex;height:56px;"
                            >
                                ${row.map(
                                    (column) => html`
                                        <div
                                            .data="${column}"
                                            class="column"
                                            style="flex:1 0 auto;width:200px;border:1px solid var(--md-sys-color-outline-variant);"
                                        >
                                            ${column.label}
                                        </div>
                                    `,
                                )}
                            </div>
                        `,
                    )}
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.data = Array.from({ length: 1000 }, (v, k) => {
            return Array.from({ length: 100 }, (v2, k2) => {
                return {
                    label: k * 100 + k2 + 1,
                };
            });
        });

        // this.list=this.data
        // this.requestUpdate()

        this.viewport = this.querySelector(".viewport");
        this.viewport.addEventListener("onVirtualScroll", this.onVirtualScroll.bind(this));

        // Example of how to instantiate the VirtualScroll class
        this.virtualScroll = new MDVirtualScrollModule(this.viewport, {
            container: ".container", //Selector for the container element.
            scrollbar: ".scrollbar", //Selector for the scrollbar.

            row: ".row", //Selector for the row elements.
            totalY: this.data.length, //Total number of rows.

            // column: ".column", //Selector for the column elements.
            // totalX: this.data[0].length, //Total number of columns.
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.viewport.removeEventListener("onVirtualScroll", this.onVirtualScroll);
        if (this.virtualScroll) {
            this.virtualScroll.destroy();
        }
    }

    onVirtualScroll(event) {
        const {
            startX,
            startY,
            endX,
            endY,
            options: { column },
        } = event.detail;

        if (column) {
            this.list = this.data.slice(startY, endY).map((row) => row.slice(startX, endX));
        } else {
            this.list = this.data.slice(startY, endY);
        }
        this.requestUpdate();
    }
}

customElements.define("app-virtual-scroll", AppVirtualScrollElement);

export default document.createElement("app-virtual-scroll");
