import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppTestElement extends MDElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <div class="viewport">
                <div class="scrollbar scrollbar--x"></div>
                <div class="scrollbar scrollbar--y"></div>
                <div class="container">
                    ${this.list?.map(
                        (row) => html`
                            <div
                                .data="${row}"
                                class="row"
                            >
                                ${row.map(
                                    (column) => html`
                                        <div
                                            .data="${column}"
                                            class="column"
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

        this.data = Array.from({ length: 10000 }, (v, k) => {
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

            scrollbarY: ".scrollbar--y", //Selector for the vertical scrollbar.
            row: ".row", //Selector for the row elements.
            totalY: this.data.length, //Total number of rows.

            scrollbarX: ".scrollbar--x", //Selector for the horizontal scrollbar.
            column: ".column", //Selector for the column elements.
            totalX: this.data[0].length, //Total number of columns.
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
        const { startX, startY, endX, endY, scrollbarX } = event.detail;

        if (scrollbarX) {
            this.list = this.data.slice(startY, endY).map((row) => row.slice(startX, endX));
        } else {
            this.list = this.data.slice(startY, endY);
        }
        this.requestUpdate();
    }
}

customElements.define("app-test", AppTestElement);

export default document.createElement("app-test");
