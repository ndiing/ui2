import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Gesture } from "../gesture/gesture";
import { styleMap } from "lit/directives/style-map.js";


class MDDataTableColumn extends HTMLTableCellElement {
    connectedCallback() {
        this.gesture = new Gesture(this, {
            resizeHandles: ["e"],
        });
    }
    disconnectedCallback() {
        this.gesture.destroy();
    }
}
customElements.define("md-data-table-column", MDDataTableColumn, { extends: "th" });

class MDDataTableRow extends HTMLTableRowElement {
    connectedCallback() {
        this.gesture = new Gesture(this, {
            resizeHandles: [],
        });
    }
    disconnectedCallback() {
        this.gesture.destroy();
    }
}
customElements.define("md-data-table-row", MDDataTableRow, { extends: "tr" });

class MDDataTableContainer extends MDElement {
    static get properties() {
        return {
            label: { type: String },
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-data-table__label">${this.label}</div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table__container");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-data-table__container");
    }

    updated(changedProperties) {}
}

customElements.define("md-data-table-container", MDDataTableContainer);

class MDDataTable extends MDElement {
    static get properties() {
        return {
            columns: { type: Array },
            rows: { type: Array },
        };
    }

    constructor() {
        super();

        this.columns = [];
        this.rows = [];
    }

    render() {
        // prettier-ignore
        return html`
            <table>
                <thead>
                    <tr>
                        ${this.columns.map(column => html`
                            <th
                                is="md-data-table-column"
                                .data="${column}"
                                tabindex="0"
                                style="${styleMap({
                                    ...(column.width&&{'min-width':column.width+'px'})
                                })}"
                                @onResizeStart="${this.handleDataTableColumnResizeStart}"
                                @onResize="${this.handleDataTableColumnResize}"
                                @onResizeEnd="${this.handleDataTableColumnResizeEnd}"
                                @onDoubleTap="${this.handleDataTableColumnDoubleTap}"
                            >
                                <md-data-table-container
                                    .label="${column.label}"
                                ></md-data-table-container>
                            </th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${this.rows.map(row=>html`
                        <tr
                            is="md-data-table-row"
                            .data="${row}"
                            tabindex="0"
                            ?selected="${row.selected}"
                            @click="${this.handleDataTableRowClick}"
                        >
                            ${this.columns.map(column => html`
                                <td>
                                    <md-data-table-container
                                        .label="${row[column.name]}"
                                    ></md-data-table-container>
                                </td>
                            `)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table");
        this.addEventListener("keydown", this.handleDataTableKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-data-table");
        this.addEventListener("keydown", this.handleDataTableKeydown);
    }

    updated(changedProperties) {}

    handleDataTableColumnResizeStart(event){
        const th = (event.currentTarget)
        th.startOffsetWidth=th.offsetWidth-event.detail.clientX
    }
    handleDataTableColumnResize(event){
        const th = (event.currentTarget)
        const data=th.data
        const width=th.startOffsetWidth+event.detail.clientX
        data.width=width
        th.style.minWidth=(width)+'px'
        th.style.maxWidth=(width)+'px'
        this.requestUpdate()
    }
    handleDataTableColumnResizeEnd(event){
    }
    
    handleDataTableColumnDoubleTap(event){
        const th=event.currentTarget
        const data=th.data
        const index=this.columns.indexOf(data)

        const tds = Array.from(this.querySelectorAll('td:nth-child('+(index+1)+')'))
        tds.forEach(td=>td.style.setProperty('max-width','100%'))
        th.style.setProperty('min-width','0px')
        th.style.setProperty('max-width','0px')
        const width = Math.max(...tds.map(td=>td.scrollWidth))
        th.style.setProperty('min-width',width+'px')
        th.style.setProperty('max-width',width+'px')
        tds.forEach(td=>td.style.setProperty('max-width','0px'))

        data.width=width
        this.requestUpdate()
    }

    handleDataTableKeydown(event) {
        // all selection
        if (event.ctrlKey && event.key === "a") {
            event.preventDefault();
            this.rows.forEach((item) => {
                item.selected = true;
            });
            this.requestUpdate();
        }
    }

    handleDataTableRowClick(event) {
        const data = event.currentTarget.data;

        this.currentSelectedIndex = this.rows.indexOf(data);
        // range selection
        if (event.shiftKey) {
            this.lastSelectedIndex = this.lastSelectedIndex ?? 0;
            if (this.lastSelectedIndex > this.currentSelectedIndex) {
                [this.lastSelectedIndex, this.currentSelectedIndex] = [this.currentSelectedIndex, this.lastSelectedIndex];
            }
            this.rows.forEach((item, index) => {
                item.selected = index >= this.lastSelectedIndex && index <= this.currentSelectedIndex;
            });
        } else if (event.ctrlKey) {
            // multi selection
            data.selected = !data.selected;
        } else {
            // single selection
            this.rows.forEach((item) => {
                item.selected = item === data;
            });
        }
        this.lastSelectedIndex = this.currentSelectedIndex;

        this.requestUpdate();
    }
}

customElements.define("md-data-table", MDDataTable);

export { MDDataTable };
