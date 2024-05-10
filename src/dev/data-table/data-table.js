import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Store } from "../../lib/store/store";
import data from "../data/data";
import { VirtualScroll } from "../../lib/virtual-scroll/virtual-scroll";

class DevDataTable extends MDElement {
    constructor() {
        super();

        // this.columns = [
        //     { name: "userId", label: "userId", width: 56 * 2, sortable: true, type: "number", actions: [{ icon: "expand_more" }] },
        //     { name: "id", label: "id", width: 56 * 2, sortable: true, type: "number", actions: [{ icon: "expand_more" }] },
        //     { name: "title", label: "title", width: 56 * 5, sortable: true, actions: [{ icon: "expand_more" }] },
        //     { name: "body", label: "body", width: 56 * 10, sortable: true, actions: [{ icon: "expand_more" }], rowActions: [{ icon: "expand_more" }] },
        // ];

        // this.store = new Store(data.posts, {
        //     primaryKey: "id",
        // });

        // const result = this.store.getAll({
        //     _page: 1,
        //     _limit: 20,
        // });
        // this.rows = result.docs;

        const format = (value) =>
            new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
            })
                .format(value)
                .replace(/\s/, "");

        this.columns2 = [
            { name: "kode", label: " Kode", width: 56 * 3 },
            { name: "nama", label: " Nama", width: 56 * 5 },
            { name: "harga_jual", label: " Harga Jual", rowConverter: format, type: "number", width: 56 * 3 },
            { name: "harga_beli", label: " Harga Beli", rowConverter: format, type: "number", width: 56 * 3 },
            { name: "stok", label: " Stok", width: 56 * 3 },
            { name: "aktif", label: " Aktif", width: 56 * 3 },
            { name: "gangguan", label: " Gangguan", width: 56 * 3 },
            { name: "fisik", label: " Fisik", width: 56 * 3 },
            { name: "kode_operator", label: " Kode Operator", width: 56 * 3 },
            { name: "prefix_tujuan", label: " Prefix Tujuan", width: 56 * 3 },
            { name: "nominal", label: " Nominal", width: 56 * 3 },
            { name: "kosong", label: " Kosong", width: 56 * 3 },
            { name: "kode_hlr", label: " Kode Hlr", width: 56 * 3 },
            { name: "tanpa_kode", label: " Tanpa Kode", width: 56 * 3 },
            { name: "harga_tetap", label: " Harga Tetap", width: 56 * 3 },
            { name: "kode_area", label: " Kode Area", width: 56 * 3 },
            { name: "catatan", label: " Catatan", width: 56 * 3 },
            { name: "sms_end_user", label: " Sms End User", width: 56 * 3 },
            { name: "postpaid", label: " Postpaid", width: 56 * 3 },
            { name: "rumus_harga", label: " Rumus Harga", width: 56 * 3 },
            { name: "qty", label: " Qty", width: 56 * 3 },
            { name: "poin", label: " Poin", width: 56 * 3 },
            { name: "harga_awal", label: " Harga Awal", width: 56 * 3 },
            { name: "tgl_data", label: " Tgl Data", width: 56 * 3 },
            { name: "unit", label: " Unit", width: 56 * 3 },
        ];

        this.store2 = new Store(data.products, {
            primaryKey: "kode",
        });
    }
    render() {
        // prettier-ignore
        return html`
            <!-- <div class="md-layout--column md-layout--fit" style=""> -->
                <!-- <div class="md-layout__item--expanded6 md-layout__item--medium4 md-layout__item--compact4 md-layout--fit">
                    <md-data-table
                        .columns="${this.columns}"
                        .rows="${this.rows}"
                        .selectSingle="${true}"
                        @onDataTableColumnIconClick="${this.handleDataTableColumnIconClick}"
                        @onDataTableColumnActionClick="${console.log}"
                        @onDataTableRowActionClick="${console.log}"
                        @onDataTableColumnContextmenu="${this.handleDataTableColumnContextmenu}"
                        @onDataTableRowContextmenu="${this.handleDataTableRowContextmenu}"
                        style="height:512px;"
                    ></md-data-table>
                </div> -->
                <!-- <div class="md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4 md-layout--fit"> -->
                    <md-data-table
                        style="height:100vh;"
                        .columns="${this.columns2}"
                        .rows="${this.rows2}"
                        .selectSingle="${true}"
                        @onDataTableColumnIconClick="${this.handleDataTableColumnIconClick}"
                        @onDataTableColumnActionClick="${console.log}"
                        @onDataTableRowActionClick="${console.log}"
                        @onDataTableColumnContextmenu="${this.handleDataTableColumnContextmenu}"
                        @onDataTableRowContextmenu="${this.handleDataTableRowContextmenu}"
                    ></md-data-table>
                <!-- </div> -->
            <!-- </div> -->
        `;
    }

    handleDataTableColumnIconClick(event) {
        const columns = this.columns.filter((data) => data.order);
        const _sort = columns.map((data) => data.name).join(",");
        const _order = columns.map((data) => data.order).join(",");
        const result = this.store.getAll({
            _page: 1,
            _limit: 20,
            _sort,
            _order,
        });
        this.rows = result.docs;
        this.requestUpdate();
    }

    handleDataTableColumnContextmenu(event) {
        event.detail.preventDefault();
    }
    handleDataTableRowContextmenu(event) {
        event.detail.preventDefault();
    }

    async firstUpdated() {
        await this.updateComplete;
        const viewport = this.querySelector(".md-data-table");
        const table = this.querySelector(".md-data-table > table");

        // first load
        const result2 = this.store2.getAll({
            _start: 0,
            _end: 20,
        });
        this.rows2 = result2.docs;
        this.requestUpdate();

        const total = result2.total;
        const itemHeight = 52;
        const viewportHeight = viewport.clientHeight;

        new VirtualScroll(table, {
            containerSelector: ".md-data-table > table > tbody",
            total,
            itemHeight,
            viewportHeight,
        });

        table.addEventListener("onVirtualScroll", (event) => {
            const { start, end } = event.detail;

            // load on scroll
            const result2 = this.store2.getAll({
                _start: start,
                _end: end,
            });
            this.rows2 = result2.docs;
            this.requestUpdate();
        });
    }
}

customElements.define("dev-data-table", DevDataTable);

export default document.createElement("dev-data-table");
