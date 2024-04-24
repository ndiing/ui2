import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Gesture } from "../gesture/gesture";
import { styleMap } from "lit/directives/style-map.js";

class MDDataTableColumn extends HTMLTableCellElement {
    connectedCallback() {
        this.gesture = new Gesture(this, {
            dragStartWaitForLongPress:true,
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
            dragStartWaitForLongPress:true,
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
        return { label: { type: String } };
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
        return { columns: { type: Array }, rows: { type: Array } };
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
                                @onResizeHandleDoubleTap="${this.handleDataTableColumnResizeHandleDoubleTap}"
                                @onDragStart="${this.handleDataTableColumnDragStart}"
                                @onDrag="${this.handleDataTableColumnDrag}"
                                @onDragEnd="${this.handleDataTableColumnDragEnd}"
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
                            @onDragStart="${this.handleDataTableRowDragStart}"
                            @onDrag="${this.handleDataTableRowDrag}"
                            @onDragEnd="${this.handleDataTableRowDragEnd}"
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

    handleDataTableColumnResizeStart(event) {
        const th = event.currentTarget;
        th.startOffsetWidth = th.offsetWidth - event.detail.clientX;
    }

    handleDataTableColumnResize(event) {
        const th = event.currentTarget;
        const data = th.data;
        const width = th.startOffsetWidth + event.detail.clientX;
        data.width = width;
        th.style.minWidth = width + "px";
        th.style.maxWidth = width + "px";
        this.requestUpdate();
    }

    handleDataTableColumnResizeEnd(event) {}

    handleDataTableColumnResizeHandleDoubleTap(event) {
        const th = event.currentTarget;
        const data = th.data;
        const index = this.columns.indexOf(data);
        const tds = Array.from(this.querySelectorAll("td:nth-child(" + (index + 1) + ")"));
        tds.forEach((td) => td.style.setProperty("max-width", "100%"));
        th.style.setProperty("min-width", "0px");
        th.style.setProperty("max-width", "0px");
        const width = Math.max(...tds.map((td) => td.scrollWidth));
        th.style.setProperty("min-width", width + "px");
        th.style.setProperty("max-width", width + "px");
        tds.forEach((td) => td.style.setProperty("max-width", "0px"));
        data.width = width;
        this.requestUpdate();
    }

    handleDataTableKeydown(event) {
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

        if (event.shiftKey) {
            this.lastSelectedIndex = this.lastSelectedIndex ?? 0;

            if (this.lastSelectedIndex > this.currentSelectedIndex) {
                [this.lastSelectedIndex, this.currentSelectedIndex] = [this.currentSelectedIndex, this.lastSelectedIndex];
            }
            this.rows.forEach((item, index) => {
                item.selected = index >= this.lastSelectedIndex && index <= this.currentSelectedIndex;
            });
        } else if (event.ctrlKey) {
            data.selected = !data.selected;
        } else {
            this.rows.forEach((item) => {
                item.selected = item === data;
            });
        }
        this.lastSelectedIndex = this.currentSelectedIndex;
        this.requestUpdate();
    }

    handleDataTableColumnDragStart(event) {
        this.fromColumn = event.currentTarget;
        this.fromColumnRect = this.fromColumn.getBoundingClientRect();

        this.fromColumnDragged = this.fromColumn.cloneNode(true);
        this.parentElement.insertBefore(this.fromColumnDragged, this.nextElementSibling);
        this.fromColumnDragged.style.setProperty("width", this.fromColumnRect.width + "px");
        this.fromColumnDragged.style.setProperty("height", this.fromColumnRect.height + "px");
        this.fromColumnDragged.style.setProperty("position", "absolute");
        this.fromColumnDragged.style.setProperty("left", this.fromColumnRect.left + "px");
        this.fromColumnDragged.style.setProperty("top", this.fromColumnRect.top + "px");
        this.fromColumnDragged.style.setProperty("z-index", 1);
        this.fromColumnDragged.style.setProperty("pointer-events", "none");
        this.fromColumnDragged.classList.add("md-ripple");
        this.fromColumnDragged.classList.add("md-ripple--containment");
        this.fromColumnDragged.classList.add("md-ripple--button");
        this.fromColumnDragged.classList.add("md-ripple--dragged");
    }

    handleDataTableColumnDrag(event) {
        // this.fromColumnDragged.style.setProperty('transform',`translate3d(${event.detail.moveX}px,${event.detail.moveY}px,0)`)
        this.fromColumnDragged.style.setProperty("transform", `translate3d(${event.detail.moveX}px,0px,0)`);
    }

    handleDataTableColumnDragEnd(event) {
        const toColumn = event.detail.target?.closest("th");
        if (toColumn && this.toColumn !== toColumn && !this.fromColumn !== toColumn) {
            this.toColumn = toColumn;
            const oldIndex = this.columns.indexOf(this.fromColumn.data);
            const newIndex = this.columns.indexOf(this.toColumn.data);
            this.reorderArray(this.columns, oldIndex, newIndex);
            this.requestUpdate();
        }
        this.fromColumn = null;
        this.toColumn = null;
        this.fromColumnDragged.remove();
    }

    handleDataTableRowDragStart(event) {
        this.fromRow = event.currentTarget;
        this.fromRowRect = this.fromRow.getBoundingClientRect();
        const tds = Array.from(this.fromRow.children).map((td) => {
            return td.getBoundingClientRect();
        });
        this.fromRowDragged = this.fromRow.cloneNode(true);
        this.parentElement.insertBefore(this.fromRowDragged, this.nextElementSibling);
        this.fromRowDragged.style.setProperty("width", this.fromRowRect.width + "px");
        this.fromRowDragged.style.setProperty("height", this.fromRowRect.height + "px");
        this.fromRowDragged.style.setProperty("position", "absolute");
        this.fromRowDragged.style.setProperty("left", this.fromRowRect.left + "px");
        this.fromRowDragged.style.setProperty("top", this.fromRowRect.top + "px");
        this.fromRowDragged.style.setProperty("z-index", 1);
        this.fromRowDragged.style.setProperty("pointer-events", "none");
        this.fromRowDragged.classList.add("md-ripple");
        this.fromRowDragged.classList.add("md-ripple--containment");
        this.fromRowDragged.classList.add("md-ripple--button");
        this.fromRowDragged.classList.add("md-ripple--dragged");
        Array.from(this.fromRowDragged.children).map((td, index) => {
            const rect = tds[index];
            td.style.setProperty("min-width", rect.width + "px");
            td.style.setProperty("max-width", rect.width + "px");
            td.style.setProperty("min-height", rect.height + "px");
            td.style.setProperty("max-height", rect.height + "px");
        });
    }

    handleDataTableRowDrag(event) {
        // this.fromRowDragged.style.setProperty('transform',`translate3d(${event.detail.moveX}px,${event.detail.moveY}px,0)`)
        this.fromRowDragged.style.setProperty("transform", `translate3d(0px,${event.detail.moveY}px,0)`);
    }

    handleDataTableRowDragEnd(event) {
        const toRow = event.detail.target?.closest("tr");
        if (toRow && this.toRow !== toRow && !this.fromRow !== toRow) {
            this.toRow = toRow;
            const oldIndex = this.rows.indexOf(this.fromRow.data);
            const newIndex = this.rows.indexOf(this.toRow.data);
            this.reorderArray(this.rows, oldIndex, newIndex);
            this.requestUpdate();
        }
        this.fromRow = null;
        this.toRow = null;
        this.fromRowDragged.remove();
    }

    reorderArray(array, oldIndex, newIndex) {
        const element = array.splice(oldIndex, 1)[0];
        array.splice(newIndex, 0, element);
        return array;
    }
}
customElements.define("md-data-table", MDDataTable);
export { MDDataTable };
