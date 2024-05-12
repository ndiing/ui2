import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Store } from "../../lib/store/store";
import { VirtualScroll } from "../../lib/virtual-scroll/virtual-scroll";

class DevDataTable extends MDElement {
    constructor() {
        super();

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

        this.store2 = new Store([], {
            primaryKey: "kode",
        });
    }
    render() {
        // prettier-ignore
        return html`
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
        `;
    }

    async connectedCallback() {
        super.connectedCallback()
        await this.updateComplete;
        this.viewport = this.querySelector(".md-data-table");
        this.table = this.querySelector(".md-data-table > table");

        // first load
        const result2 = this.store2.getAll({
            _start: 0,
            _end: 20,
        });
        this.rows2 = result2.docs;
        this.requestUpdate();

        const total = result2.total;
        const itemHeight = 52;
        const viewportHeight = this.viewport.clientHeight;

        this.virtualScroll=new VirtualScroll(this.table, {
            containerSelector: ".md-data-table > table > tbody",
            total,
            itemHeight,
            viewportHeight,
        });

        this.handleScroll=this.handleScroll.bind(this)
        this.table.addEventListener("onVirtualScroll", this.handleScroll);
    }

    handleScroll(){
        const { start, end } = event.detail;

            // load on scroll
            const result2 = this.store2.getAll({
                _start: start,
                _end: end,
            });
            this.rows2 = result2.docs;
            this.requestUpdate();
    }

    disconnectedCallback(){
        super.disconnectedCallback()
        this.table.removeEventListener("onVirtualScroll", this.handleScroll);
        this.virtualScroll.destroy()
    }
}

customElements.define("dev-data-table", DevDataTable);

export default document.createElement("dev-data-table");
