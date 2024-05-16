import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Store } from "../../lib/store/store";
// import { VirtualScroll } from "../../lib/virtual-scroll/virtual-scroll";
import { Scrolling } from "../../lib/scrolling/scrolling";

class DevDataTable extends MDElement {
    static get properties() {
        return {
            columns: { type: Array },
            rows: { type: Array },
        };
    }

    constructor() {
        super();

        this.store = new Store();

        this.columns = [
            { name: "albumId", label: "albumId", width: 56 * 3 },
            { name: "id", label: "id", width: 56 * 3 },
            { name: "title", label: "title", width: 56 * 3 },
            { name: "url", label: "url", width: 56 * 3 },
            { name: "thumbnailUrl", label: "thumbnailUrl", width: 56 * 3 },
        ];
        this.rows = [];
    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-data-table
                        class="md-layout-fit"
                        .columns="${this.columns}"
                        .rows="${this.rows}"
                    ></md-data-table>
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        const response = await fetch("https://jsonplaceholder.typicode.com/photos");
        const json = await response.json();
        this.store.docs = json;
        const { docs, total } = this.store.getAll({ _start: 0, _end: 20 });
        this.total = total;
        this.rows = docs;

        this.viewport = this.querySelector("md-data-table > table");

        this.handleScrolling = this.handleScrolling.bind(this);
        this.viewport.addEventListener("onScrolling", this.handleScrolling);

        this.scrolling = new Scrolling(this.viewport, {
            scrollbar: this.querySelector("md-data-table > table > caption"),
            container: this.querySelector("md-data-table > table > tbody"),
            total:this.total,
            // itemHeight
            // threshold
        });

        // this.viewport.scrollTop = Math.floor(this.total * 52) / 2;
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        this.viewport.removeEventListener("onScrolling", this.handleScrolling);
        this.scrolling.destroy();
    }

    handleScrolling(event) {
        const { start, end } = event.detail;
        const { docs } = this.store.getAll({ _start: start, _end: end });
        this.rows = docs;
    }
}

customElements.define("dev-data-table", DevDataTable);

export default document.createElement("dev-data-table");
