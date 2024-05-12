import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { Gesture } from "../gesture/gesture";
import { styleMap } from "lit/directives/style-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { classMap } from "lit/directives/class-map.js";

class MDDataTableColumn extends HTMLTableCellElement {
    connectedCallback() {
        this.gesture = new Gesture(this, { dragStartWaitForLongPress: true, resizeHandles: ["e"] });
    }

    disconnectedCallback() {
        this.gesture.destroy();
    }
}

customElements.define("md-data-table-column", MDDataTableColumn, { extends: "th" });

class MDDataTableRow extends HTMLTableRowElement {
    connectedCallback() {
        this.gesture = new Gesture(this, { dragStartWaitForLongPress: true, resizeHandles: [] });
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
            sortable: { type: Boolean },
            type: { type: String },
            order: { type: String },
            actions: { type: Array },
        };
    }

    get sortableIcon() {
        return this.order == "asc" ? "arrow_upward" : this.order == "desc" ? "arrow_downward" : "";
    }

    constructor() {
        super();

        this.type = "string";
    }

    renderIcon() {
        // prettier-ignore
        return html`
            <md-icon-button 
                class="md-data-table__icon"
                .icon="${this.sortableIcon}"
                .type="${undefined}"
                .ui="${undefined}"
                @click="${this.handleDataTableIconClick}"
            ></md-icon-button>
        `
    }

    render() {
        // prettier-ignore
        return html`
            ${this.sortable&&this.type!=='string'?this.renderIcon():nothing}
            ${this.label?html`<div class="md-data-table__label">${this.label}</div>`:nothing}
            ${this.sortable&&this.type=='string'?this.renderIcon():nothing}
            ${this.actions?.length?html`
                <div class="md-data-table__actions">
                    ${this.actions.map(action => html`
                        <md-icon-button 
                            class="md-data-table__action" 
                            .icon="${action?.icon??action}"
                            .type="${action.type}"
                            .ui="${action.ui}"
                            @click="${this.handleDataTableActionClick}"
                        ></md-icon-button>
                    `)}
                </div>
            `:nothing}
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

    handleDataTableIconClick(event) {
        this.emit("onDataTableIconClick", event);
    }

    handleDataTableActionClick(event) {
        this.emit("onDataTableActionClick", event);
    }
}

customElements.define("md-data-table-container", MDDataTableContainer);

class MDDataTable extends MDElement {
    static get properties() {
        return {
            columns: { type: Array },
            rows: { type: Array },
            selectAll: { type: Boolean },
            selectRange: { type: Boolean },
            selectMulti: { type: Boolean },
            selectSingle: { type: Boolean },
        };
    }

    getLabel(data,name){
        return name.split('.')
        .reduce((p,c) => p[c],data)
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
                <caption></caption>
                <thead>
                    <tr>
                        ${this.columns?.map(column => html`
                            <th
                                is="md-data-table-column"
                                .data="${column}"
                                tabindex="0"
                                style="${styleMap({
                                    ...(column.width&&{'min-width':column.width+'px'})
                                })}"
                                class="${classMap({
                                    "md-data-table__th":true,
                                    "md-data-table__th--order":column.order,
                                })}"
                                @onResizeStart="${true&&this.handleDataTableColumnResizeStart||(() => {})}"
                                @onResize="${true&&this.handleDataTableColumnResize||(() => {})}"
                                @onResizeEnd="${true&&this.handleDataTableColumnResizeEnd||(() => {})}"
                                @onResizeHandleDoubleTap="${true&&this.handleDataTableColumnResizeHandleDoubleTap||(() => {})}"
                                @onDragStart="${false&&this.handleDataTableColumnDragStart||(() => {})}"
                                @onDrag="${false&&this.handleDataTableColumnDrag||(() => {})}"
                                @onDragEnd="${false&&this.handleDataTableColumnDragEnd||(() => {})}"
                                @onDataTableIconClick="${this.handleDataTableColumnIconClick}"
                                @onDataTableActionClick="${this.handleDataTableColumnActionClick}"
                                @contextmenu="${this.handleDataTableColumnContextmenu}"
                            >
                                <md-data-table-container
                                    class="${classMap({
                                        "md-data-table__container":true,
                                        "md-data-table__container--number":column.type=='number',
                                    })}"
                                    .label="${ifDefined(column.label)}"
                                    .sortable="${ifDefined(column.sortable)}"
                                    .type="${ifDefined(column.type)}"
                                    .order="${ifDefined(column.order)}"
                                    .actions="${ifDefined(column.actions)}"
                                ></md-data-table-container>
                            </th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${this.rows?.map(row=>html`
                        <tr
                            is="md-data-table-row"
                            .data="${row}"
                            tabindex="0"
                            ?selected="${row.selected}"
                            @click="${this.handleDataTableRowClick}"
                            @onDragStart="${false&&this.handleDataTableRowDragStart||(() => {})}"
                            @onDrag="${false&&this.handleDataTableRowDrag||(() => {})}"
                            @onDragEnd="${false&&this.handleDataTableRowDragEnd||(() => {})}"
                            @onDataTableActionClick="${this.handleDataTableRowActionClick}"
                            @contextmenu="${this.handleDataTableRowContextmenu}"
                        >
                            ${this.columns?.map(column => html`
                                <td>
                                    <md-data-table-container
                                        class="${classMap({
                                            "md-data-table__container":true,
                                            "md-data-table__container--number":column.type=='number',
                                        })}"
                                        .label="${(column.rowConverter||((value) => value))(this.getLabel(row,column.name))}"
                                        .actions="${ifDefined(column.rowActions)}"
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

    handleDataTableColumnIconClick(event) {
        const data = event.currentTarget.data;

        if (data.sortable) {
            if (!data.order) {
                data.order = "asc";
            } else if (data.order == "asc") {
                data.order = "desc";
            } else if (data.order == "desc") {
                data.order = undefined;
            }
        }

        this.requestUpdate();

        this.emit("onDataTableColumnIconClick", event);
    }

    handleDataTableColumnActionClick(event) {
        this.emit("onDataTableColumnActionClick",event);
    }

    handleDataTableRowActionClick(event) {
        this.emit("onDataTableRowActionClick",event);
    }

    handleDataTableColumnContextmenu(event){
        this.emit('onDataTableColumnContextmenu',event)
    }
    handleDataTableRowContextmenu(event){
        this.emit('onDataTableRowContextmenu',event)
    }

    handleDataTableColumnResizeStart(event) {
        const th = event.currentTarget;
        th.startOffsetWidth = th.offsetWidth - event.detail.clientX;
        this.emit("onDataTableColumnResizeStart", event);
    }

    handleDataTableColumnResize(event) {
        const th = event.currentTarget;
        const data = th.data;
        const width = th.startOffsetWidth + event.detail.clientX;
        data.width = width;
        this.requestUpdate();
        this.emit("onDataTableColumnResize", event);
    }

    handleDataTableColumnResizeEnd(event) {
        this.emit("onDataTableColumnResizeEnd", event);
    }

    handleDataTableColumnResizeHandleDoubleTap(event) {
        const th = event.currentTarget;
        const data = th.data;
        const index = this.columns.indexOf(data);
        const tds = Array.from(this.querySelectorAll("td:nth-child(" + (index + 1) + ")"));

        tds.forEach((td) => td.style.setProperty("max-width", "100%"));

        th.style.setProperty("min-width", "0px");

        const width = Math.max(...tds.map((td) => td.scrollWidth));

        th.style.setProperty("min-width", width + "px");
        th.style.setProperty("max-width", width + "px");

        tds.forEach((td) => td.style.setProperty("max-width", "0px"));

        data.width = width;

        this.requestUpdate();

        this.emit("onDataTableColumnResizeHandleDoubleTap", event);
    }

    handleDataTableKeydown(event) {
        if (this.selectAll && event.ctrlKey && event.key === "a") {
            event.preventDefault();
            this.rows.forEach((item) => {
                item.selected = true;
            });
            this.requestUpdate();
            this.emit("onDataTableKeydownCtrlA", event);
        }
    }

    handleDataTableRowClick(event) {
        const data = event.currentTarget.data;
        this.currentSelectedIndex = this.rows.indexOf(data);

        if (this.selectRange && event.shiftKey) {
            this.lastSelectedIndex = this.lastSelectedIndex ?? 0;

            if (this.lastSelectedIndex > this.currentSelectedIndex) {
                [this.lastSelectedIndex, this.currentSelectedIndex] = [this.currentSelectedIndex, this.lastSelectedIndex];
            }
            this.rows.forEach((item, index) => {
                item.selected = index >= this.lastSelectedIndex && index <= this.currentSelectedIndex;
            });
        } else if (this.selectMulti && event.ctrlKey) {
            data.selected = !data.selected;
        } else if (this.selectSingle) {
            this.rows.forEach((item) => {
                item.selected = item === data;
            });
        }
        this.lastSelectedIndex = this.currentSelectedIndex;
        this.requestUpdate();
        this.emit("onDataTableRowClick", event);
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
        this.emit("onDataTableColumnDragStart", event);
    }

    handleDataTableColumnDrag(event) {
        this.fromColumnDragged.style.setProperty("transform", `translate3d(${event.detail.moveX}px,0px,0)`);
        this.emit("onDataTableColumnDrag", event);
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
        this.emit("onDataTableColumnDragEnd", event);
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
        this.emit("onDataTableRowDragStart", event);
    }

    handleDataTableRowDrag(event) {
        this.fromRowDragged.style.setProperty("transform", `translate3d(0px,${event.detail.moveY}px,0)`);
        this.emit("onDataTableRowDrag", event);
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
        this.emit("onDataTableRowDragEnd", event);
    }

    reorderArray(array, oldIndex, newIndex) {
        const element = array.splice(oldIndex, 1)[0];
        array.splice(newIndex, 0, element);
        return array;
    }
}

customElements.define("md-data-table", MDDataTable);
export { MDDataTable };
