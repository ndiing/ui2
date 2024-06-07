import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";
import { notNull } from "../mixin/mixin";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { MDVirtualScrollModule } from "../virtual-scroll/virtual-scroll";
import { MDGestureModule } from "../gesture/gesture";
import { MDStoreModule } from "../store/store";
import { MDRouterModule } from "../router/router";

class MDDataTableNativeColumnCellComponent extends HTMLTableCellElement {
    constructor() {
        super();

        this.callback = this.callback.bind(this);

        this.resizeObserver = new ResizeObserver(this.callback);
    }

    callback(entries) {
        window.requestAnimationFrame(() => {
            if (this.classList.contains("md-data-table__sticky--left")) {
                let prev = this.previousElementSibling;
                let left = 0;

                while (prev) {
                    if (prev.classList.contains("md-data-table__sticky--left")) {
                        left += prev.getBoundingClientRect().width;
                    }
                    prev = prev.previousElementSibling;
                }
                this.style.setProperty("left", left + "px");
            } else if (this.classList.contains("md-data-table__sticky--right")) {
                let next = this.nextElementSibling;
                let right = 0;

                while (next) {
                    if (next.classList.contains("md-data-table__sticky--right")) {
                        right += next.getBoundingClientRect().width;
                    }
                    next = next.nextElementSibling;
                }
                this.style.setProperty("right", right + "px");
            }
        });
    }

    connectedCallback() {
        this.resizeObserver.observe(this);

        if (this.hasAttribute("resizable")) {
            this.gesture = new MDGestureModule(this, {
                resize: ["e"],
                drag: ["x"],
                dragAfterPress: true,
            });
        }
    }

    disconnectedCallback() {
        this.resizeObserver.disconnect();

        if (this.gesture) {
            this.gesture.destroy();
        }
    }
}
customElements.define("md-data-table-native-column-cell", MDDataTableNativeColumnCellComponent, { extends: "th" });

class MDDataTableNativeRowCellComponent extends HTMLTableCellElement {
    constructor() {
        super();

        this.callback = this.callback.bind(this);

        this.resizeObserver = new ResizeObserver(this.callback);
    }

    callback(entries) {
        window.requestAnimationFrame(() => {
            if (this.classList.contains("md-data-table__sticky--left")) {
                let prev = this.previousElementSibling;
                let left = 0;

                while (prev) {
                    if (prev.classList.contains("md-data-table__sticky--left")) {
                        left += prev.getBoundingClientRect().width;
                    }
                    prev = prev.previousElementSibling;
                }
                this.style.setProperty("left", left + "px");
            } else if (this.classList.contains("md-data-table__sticky--right")) {
                let next = this.nextElementSibling;
                let right = 0;

                while (next) {
                    if (next.classList.contains("md-data-table__sticky--right")) {
                        right += next.getBoundingClientRect().width;
                    }
                    next = next.nextElementSibling;
                }
                this.style.setProperty("right", right + "px");
            }
        });
    }

    connectedCallback() {
        this.resizeObserver.observe(this);
    }

    disconnectedCallback() {
        this.resizeObserver.disconnect();
    }
}
customElements.define("md-data-table-native-row-cell", MDDataTableNativeRowCellComponent, { extends: "td" });

class MDDataTableItemComponent extends MDElement {
    static get properties() {
        return {
            avatar: { type: String },
            thumbnail: { type: String },
            video: { type: String },
            leadingCheckbox: { type: Object },
            leadingRadioButton: { type: Object },
            leadingSwitch: { type: Object },
            leadingIcon: { type: String },
            label: { type: String },
            subLabel: { type: String },
            trailingIcon: { type: String },
            trailingCheckbox: { type: Object },
            trailingRadioButton: { type: Object },
            trailingSwitch: { type: Object },
            text: { type: String },
            badge: { type: Object },
            selected: { type: Boolean, reflect: true },
            routerLink: { type: String, reflect: true },
            indeterminate: { type: Boolean },
            sortable: { type: Boolean },
            sortableIcon: { type: String },
            trailingActions: { type: Array },
        };
    }

    constructor() {
        super();
    }

    get labelSecondary() {
        return this.querySelector(".md-data-table__label-secondary");
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.avatar?html`<md-image class="md-data-table__avatar" .src="${this.avatar}" .ui="${"rounded"}"></md-image>`:nothing}
            ${this.thumbnail?html`<md-image class="md-data-table__thumbnail" .src="${this.thumbnail}"></md-image>`:nothing}
            ${this.video?html`<md-image class="md-data-table__video" .src="${this.video}" .ratio="${4/3}"></md-image>`:nothing}

            ${this.leadingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleDataTableItemCheckboxNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__checkbox"></md-checkbox>`:nothing}
            ${this.leadingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleDataTableItemRadioButtonNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__radio-button"></md-radio-button>`:nothing}
            ${this.leadingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleDataTableItemSwitchNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__switch"></md-switch>`:nothing}

            ${this.leadingIcon?html`<md-icon class="md-data-table__icon">${this.leadingIcon}</md-icon>`:nothing}
            <!-- ${this.sortable?html`<md-icon-button @click="${this.handleDataTableItemSortableClick}" class="md-data-table__sortable">${this.sortableIcon}</md-icon-button>`:nothing} -->

            ${notNull(this.label)||this.subLabel||this.badge?html`
                <div class="md-data-table__label">
                    ${notNull(this.label)?html`<div class="md-data-table__label-primary">${this.label}</div>`:nothing}
                    ${this.subLabel?html`<div class="md-data-table__label-secondary">${this.subLabel}</div>`:nothing}
                    ${this.badge?html`<md-badge class="md-data-table__badge" .label="${ifDefined(this.badge?.label??this.badge)}" .max="${ifDefined(this.badge.max)}"></md-badge>`:nothing}
                </div>
            `:nothing}

            ${this.sortable?html`<md-icon-button @click="${this.handleDataTableItemSortableClick}" class="md-data-table__sortable">${this.sortableIcon}</md-icon-button>`:nothing}
            ${this.trailingIcon?html`<md-icon class="md-data-table__icon">${this.trailingIcon}</md-icon>`:nothing}

            ${this.trailingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleDataTableItemCheckboxNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__checkbox"></md-checkbox>`:nothing}
            ${this.trailingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleDataTableItemRadioButtonNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__radio-button"></md-radio-button>`:nothing}
            ${this.trailingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleDataTableItemSwitchNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__switch"></md-switch>`:nothing}

            ${this.text?html`<div class="md-data-table__text">${this.text}</div>`:nothing}

            ${this.trailingActions?.length?html`
                <div class="md-data-table__actions">
                    ${this.trailingActions.map(action => html`
                        <md-icon-button 
                            class="md-data-table__action"
                            .icon="${ifDefined(action?.icon)}"
                            @click="${this.handleDataTableItemActionClick}"
                        ></md-icon-button>
                    `)}
                </div>
            `:nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-data-table__item");
        await this.updateComplete;

        if (this.labelSecondary) {
            if (this.labelSecondary.scrollHeight > this.labelSecondary.clientHeight) {
                this.classList.add("md-data-table__item--three-line");
            } else {
                this.classList.add("md-data-table__item--two-line");
            }
        }
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-data-table__item");
        await this.updateComplete;
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onDataTableItemSelected", this);
            }
        }
    }

    handleDataTableItemCheckboxNativeInput(event) {
        this.emit("onDataTableItemCheckboxNativeInput", event);
    }

    handleDataTableItemRadioButtonNativeInput(event) {
        this.emit("onDataTableItemRadioButtonNativeInput", event);
    }

    handleDataTableItemSwitchNativeInput(event) {
        this.emit("onDataTableItemSwitchNativeInput", event);
    }

    handleDataTableItemSortableClick(event) {
        this.emit("onDataTableItemSortableClick", event);
    }

    handleDataTableItemActionClick(event) {
        this.emit("onDataTableItemActionClick", event);
    }
}

customElements.define("md-data-table-item", MDDataTableItemComponent);

class MDDataTableComponent extends MDElement {
    static get properties() {
        return {
            columns: { type: Array },
            rows: { type: Array },
            summaries: { type: Array },
            rangeSelection: { type: Boolean },
            multiSelection: { type: Boolean },
            singleSelection: { type: Boolean },
            allSelection: { type: Boolean },
            checkbox: { type: Boolean },
        };
    }

    get indeterminate() {
        const selected = this.rows?.filter((row) => row.selected).length;
        return selected > 0 && selected < this.rows?.length;
    }

    get selected() {
        const selected = this.rows?.filter((row) => row.selected).length;
        return selected > 0 && selected == this.rows?.length;
    }

    constructor() {
        super();
        this.rangeSelection = true;
        this.multiSelection = true;
        this.singleSelection = true;
        this.allSelection = true;

        this.store = new MDStoreModule();
        // this.store.remoteStore.url.search=MDRouterModule.location.search
    }

    isStickyLeft(index) {
        const middle = Math.floor(this.columns.length / 2);
        return index <= middle;
    }

    hasSticky() {
        return !!this.columns.find((column) => column.sticky);
    }

    hasStickyBorder(position, index) {
        const middle = Math.floor(this.columns.length / 2);

        let maxLeftIndex = -1;
        let minRightIndex = this.columns.length;

        this.columns.forEach((column, i) => {
            if (column.sticky) {
                if (i <= middle) {
                    if (i > maxLeftIndex) {
                        maxLeftIndex = i;
                    }
                } else {
                    if (i < minRightIndex) {
                        minRightIndex = i;
                    }
                }
            }
        });

        if (position === "left") {
            return maxLeftIndex === index;
        }

        return minRightIndex === index;
    }

    renderItem(item) {
        /* prettier-ignore */
        return html`
            <md-data-table-item
                .data="${item}"
                .avatar="${ifDefined(item.avatar)}"
                .thumbnail="${ifDefined(item.thumbnail)}"
                .video="${ifDefined(item.video)}"
                .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                .leadingIcon="${ifDefined(item.leadingIcon)}"
                .label="${ifDefined(item.label)}"
                .subLabel="${ifDefined(item.subLabel)}"
                .trailingIcon="${ifDefined(item.trailingIcon)}"
                .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                .badge="${ifDefined(item.badge)}"
                .text="${ifDefined(item.text)}"
                .selected="${ifDefined(item.selected)}"
                .routerLink="${ifDefined(item.routerLink)}"
                .indeterminate="${ifDefined(item.indeterminate)}"
                .sortable="${ifDefined(item.sortable)}"
                .sortableIcon="${ifDefined(item.sortableIcon)}"
                .trailingActions="${ifDefined(item.trailingActions)}"
            ></md-data-table-item>
        `;
    }

    renderColumnCellCheckbox() {
        /* prettier-ignore */
        return this.checkbox?html`
            <th
                is="md-data-table-native-column-cell"
                class="${classMap({
                    'md-data-table__sticky':true,
                    'md-data-table__sticky--column':true,
                    'md-data-table__sticky--top':true,
                    'md-data-table__sticky--left':true,
                    'md-data-table__sticky--end':!this.hasSticky(),
                })}"
                @onDataTableItemCheckboxNativeInput="${this.handleDataTableColumnCellCheckboxInput}"
            >
                ${this.renderItem({
                    leadingCheckbox:{},
                    indeterminate:this.indeterminate,
                    selected:this.selected,
                })}
            </th>
        `:nothing
    }

    renderRowCellCheckbox(row) {
        /* prettier-ignore */
        return this.checkbox?html`
            <td
                is="md-data-table-native-row-cell"
                .data="${row}"
                class="${classMap({
                    'md-data-table__sticky':true,
                    'md-data-table__sticky--row':true,
                    'md-data-table__sticky--left':true,
                    'md-data-table__sticky--end':!this.hasSticky(),
                })}"
                @onDataTableItemCheckboxNativeInput="${this.handleDataTableRowCellCheckboxInput}"
            >
                ${this.renderItem({
                    leadingCheckbox:{},
                    selected:row.selected
                })}
            </td>
        `:nothing
    }

    renderColumnCells() {
        /* prettier-ignore */
        return this.columns?.filter(column=>column.selected!==false)?.map((column, index) => html`
            <th
                .data="${column}"
                is="md-data-table-native-column-cell"
                resizable
                style="${styleMap({
                    'min-width':column.width+'px'
                })}"
                class="${classMap({
                    'md-data-table__sticky':true,
                    'md-data-table__sticky--top':true,
                    'md-data-table__sticky--column':column.sticky,
                    'md-data-table__sticky--left':column.sticky&&this.isStickyLeft(index),
                    'md-data-table__sticky--right':column.sticky&&!this.isStickyLeft(index),
                    'md-data-table__sticky--end':column.sticky&&this.hasStickyBorder('left',index),
                    'md-data-table__sticky--start':column.sticky&&this.hasStickyBorder('right',index),
                })}"
                @pointerenter="${this.handleDataTableColumnCellSortablePointerenter}"
                @pointerleave="${this.handleDataTableColumnCellSortablePointerleave}"
                @onDataTableItemSortableClick="${this.handleDataTableColumnCellSortableClick}"

                @onResizeStart="${this.handleDataTabaleColumnCellResizeStart}"
                @onResize="${this.handleDataTabaleColumnCellResize}"
                @onResizeEnd="${this.handleDataTabaleColumnCellResizeEnd}"
                @onResizeDoubleTap="${this.handleDataTabaleColumnCellResizeDoubleTap}"
                @onDragStart="${this.handleDataTabaleColumnCellDragStart}"
                @onDrag="${this.handleDataTabaleColumnCellDrag}"
                @onDragEnd="${this.handleDataTabaleColumnCellDragEnd}"
            >
                ${this.renderItem({
                    label: column.label,
                    sortable: column.sortable,
                    sortableIcon: /* (column.order=='asc'?'arrow_upward':column.order=='desc'?'arrow_downward':'')|| */column.sortableIcon||'',
                    // trailingActions:[
                    //     {icon:'keyboard_arrow_down'}
                    // ]
                })}
            </th>
        `)
    }

    renderRows() {
        /* prettier-ignore */
        return this.virtualRows?.map(row => html`
            <tr
                .data="${row}"
                .tabIndex="${0}"
                ?selected="${row.selected}"
                @click="${this.handleDataTableRowClick}"
            >
                ${this.renderRowCellCheckbox(row)}
                ${this.columns?.filter(column=>column.selected!==false)?.map((column, index) => html`
                    <td
                        is="md-data-table-native-row-cell"
                        class="${classMap({
                            'md-data-table__sticky':column.sticky,
                            'md-data-table__sticky--row':column.sticky,
                            'md-data-table__sticky--left':column.sticky&&this.isStickyLeft(index),
                            'md-data-table__sticky--right':column.sticky&&!this.isStickyLeft(index),
                            // 'md-data-table__sticky--end':column.sticky&&this.hasStickyBorder('left',index),
                            // 'md-data-table__sticky--start':column.sticky&&this.hasStickyBorder('right',index),
                        })}"
                    >
                        ${this.renderItem({
                            label: (column.format||((value,row,column) => value))(row[column.name],row,column)
                        })}
                    </td>
                `)}
                <td>
                    <div class="md-data-table__item"></div>
                </td>
            </tr>
        `)
    }

    render() {
        /* prettier-ignore */
        return html`
            <table
                @onVirtualScroll="${this.handleDataTableNativeVirtualScroll}"
            >
                <caption></caption>
                <thead>
                    <tr>
                        ${this.renderColumnCellCheckbox()}
                        ${this.renderColumnCells()}
                        <th 
                            style="width:100%;"
                            class="md-data-table__sticky md-data-table__sticky--column md-data-table__sticky--top"
                        >
                            <div class="md-data-table__item"></div>
                        </th>
                    </tr>
                </thead>
                <tbody >
                    ${this.renderRows()}
                </tbody>
                <tfoot>
                    <tr>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        this.classList.add("md-data-table");
        this.handleDataTableKeydown = this.handleDataTableKeydown.bind(this);
        this.addEventListener("keydown", this.handleDataTableKeydown);

        this.host = this.querySelector("table");
        this.virtualScroll = new MDVirtualScrollModule(this.host, {
            scrollbar: "table caption",
            container: "table tbody",
            row: "table tbody tr",
            totalY: 100,
            // column: '',
        });
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        await this.updateComplete;

        this.classList.remove("md-data-table");
        this.removeEventListener("keydown", this.handleDataTableKeydown);

        this.virtualScroll.destroy();
    }

    async updated(changedProperties) {
        if (changedProperties.has("columns")) {
            await this.updateComplete;
            // for(const [name,value] of this.store.remoteStore.url.searchParams.entries()){
            //     console.log(name,value)
            // }
        }
        if (changedProperties.has("rows")) {
            await this.updateComplete;
            this.store.localStore.docs = this.rows;
            this.load();
        }

        let height = this.querySelector("tbody").clientHeight + this.querySelector("thead").clientHeight;
        this.style.setProperty("--md-data-table-height", height + "px");
    }

    // Table

    handleDataTableKeydown(event) {
        if (this.allSelection && event.ctrlKey && event.key == "a") {
            event.preventDefault();
            this.rows.forEach((row) => {
                row.selected = true;
            });
            this.requestUpdate();
        }
        this.emit("onDataTableKeydown", event);
    }

    async handleDataTableNativeVirtualScroll(event) {
        const { startY, endY } = event.detail;
        this.virtualRows = this.storeRows.slice(startY, endY);
        this.requestUpdate();
        this.emit("onDataTableNativeVirtualScroll", event);
    }

    // Column

    handleDataTabaleColumnCellResizeStart(event) {
        const data = event.currentTarget.data;
        // this.requestUpdate()
        this.emit("onDataTabaleColumnCellResizeStart", event);
    }

    handleDataTabaleColumnCellResize(event) {
        const data = event.currentTarget.data;

        data.width = event.currentTarget.gesture.currentWidth;
        this.requestUpdate();

        this.emit("onDataTabaleColumnCellResize", event);
    }

    handleDataTabaleColumnCellResizeEnd(event) {
        const data = event.currentTarget.data;
        // this.requestUpdate()
        this.emit("onDataTabaleColumnCellResizeEnd", event);
    }

    handleDataTabaleColumnCellResizeDoubleTap(event) {
        const th = event.currentTarget;
        const data = th.data;
        const index = Array.from(th.parentElement.children).indexOf(th);
        th.style.setProperty("max-width", "0%");
        const width = Math.max(
            ...Array.from(this.querySelectorAll(`td:nth-child(${index + 1}) .md-data-table__item`), (item) => {
                const label = item.querySelector(".md-data-table__label-primary");
                const style = window.getComputedStyle(item);
                const paddingLeft = parseFloat(style.getPropertyValue("padding-left"));
                const paddingRight = parseFloat(style.getPropertyValue("padding-right"));
                return paddingLeft + label.scrollWidth + paddingRight;
            }),
        );
        th.style.removeProperty("max-width");
        data.width = width;
        this.requestUpdate();

        this.emit("onDataTabaleColumnCellResizeDoubleTap", event);
    }

    handleDataTabaleColumnCellDragStart(event) {
        const data = event.currentTarget.data;
        // this.requestUpdate()
        this.emit("onDataTabaleColumnCellDragStart", event);
    }

    handleDataTabaleColumnCellDrag(event) {
        const data = event.currentTarget.data;
        // this.requestUpdate()
        this.emit("onDataTabaleColumnCellDrag", event);
    }

    handleDataTabaleColumnCellDragEnd(event) {
        const data = event.currentTarget.data;
        // this.requestUpdate()
        this.emit("onDataTabaleColumnCellDragEnd", event);
    }

    handleDataTableColumnCellSortablePointerenter(event) {
        const data = event.currentTarget.data;

        if (data.sortable && !data.order) {
            data.sortableIcon = "arrow_upward";
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellSortablePointerenter", event);
    }

    handleDataTableColumnCellSortablePointerleave(event) {
        const data = event.currentTarget.data;

        if (data.sortable && !data.order) {
            data.sortableIcon = "";
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellSortablePointerleave", event);
    }

    async handleDataTableColumnCellSortableClick(event) {
        const data = event.currentTarget.data;

        if (data.sortable) {
            if (!data.order) {
                data.order = "asc";
                data.sortableIcon = "arrow_upward";
            } else if (data.order == "asc") {
                data.order = "desc";
                data.sortableIcon = "arrow_downward";
            } else {
                data.order = "";
                data.sortableIcon = "";
            }

            this.store.sort(data.name, data.order);
            this.load();
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellSortableClick", event);
    }

    handleDataTableColumnCellCheckboxInput(event) {
        const checked = event.detail.currentTarget.checked;
        this.rows.forEach((row) => {
            row.selected = checked;
        });
        this.requestUpdate();
    }

    // Row

    handleDataTableRowClick(event) {
        if (event.target.closest(".md-data-table__checkbox,.md-data-table__radio-button,.md-data-table__switch")) {
            return;
        }
        const data = event.currentTarget.data;

        if (this.rangeSelection && event.shiftKey) {
            if (this.lastIndex == undefined) {
                this.lastIndex = 0;
            }
            this.currentIndex = this.rows.indexOf(data);
            this.swapIndex = this.lastIndex > this.currentIndex;

            if (this.swapIndex) {
                [this.currentIndex, this.lastIndex] = [this.lastIndex, this.currentIndex];
            }
            this.rows.forEach((row, index) => {
                row.selected = index >= this.lastIndex && index <= this.currentIndex;
            });

            if (this.swapIndex) {
                [this.currentIndex, this.lastIndex] = [this.lastIndex, this.currentIndex];
            }
        } else if (this.multiSelection && event.ctrlKey) {
            data.selected = !data.selected;
        } else if (this.singleSelection) {
            this.rows.forEach((row) => {
                row.selected = row == data;
            });
            this.lastIndex = this.rows.indexOf(data);
        }
        this.requestUpdate();
        this.emit("onDataTableItemClick", event);
    }

    handleDataTableRowCellCheckboxInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
    }

    async load() {
        this.storeRows = await this.store.getAll();
        this.virtualScroll.handleScroll();
    }
}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent, MDDataTableItemComponent };
