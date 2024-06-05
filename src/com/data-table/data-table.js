import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";
import { styleMap } from "lit/directives/style-map.js";
import { MDGestureModule } from "../gesture/gesture";

class MDDataTableColumnNativeCellComponent extends HTMLTableCellElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.gesture = new MDGestureModule(this, {
            resize: ["e"],
            drag: ["x"],
            dragAfterPress: true,
        });
    }

    disconnectedCallback() {
        this.gesture.destroy();
    }

    static observedAttributes = [];

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
    }
}
customElements.define("md-data-table-navtive-column-cell", MDDataTableColumnNativeCellComponent, { extends: "th" });

class MDDataTableNativeRowComponent extends HTMLTableRowElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.gesture = new MDGestureModule(this, {
            resize: [],
            drag: ["y"],
            dragAfterPress: true,
        });
    }

    disconnectedCallback() {
        this.gesture.destroy();
    }
}
customElements.define("md-data-table-native-row", MDDataTableNativeRowComponent, { extends: "tr" });

class MDDataTableNativeComponent extends HTMLTableElement {
    constructor() {
        super();
        this.callback = this.callback.bind(this);
        this.resizeObserver = new ResizeObserver(this.callback);
    }

    callback(entries) {
        window.requestAnimationFrame(() => {
            for (const entry of entries) {
                this.style.setProperty("--md-data-table-height", entry.contentRect.height + "px");
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
customElements.define("md-data-table-native", MDDataTableNativeComponent, { extends: "table" });

/**
 *
 * @extends MDElement
 */
class MDDataTableItemComponent extends MDElement {
    /**
     * Properties of the MDDataTableItemComponent.
     * 
     * @property {String} [avatar] - URL of the avatar image.
     * @property {String} [thumbnail] - URL of the thumbnail image.
     * @property {String} [video] - URL of the video.
     * @property {Object} [leadingCheckbox] - Leading checkbox object.
     * @property {Object} [leadingRadioButton] - Leading radio button object.
     * @property {Object} [leadingSwitch] - Leading switch object.
     * @property {String} [leadingIcon] - Leading icon name.
     * @property {String} [label] - Main label text.
     * @property {String} [subLabel] - Sublabel text.
     * @property {String} [trailingIcon] - Trailing icon name.
     * @property {Object} [trailingCheckbox] - Trailing checkbox object.
     * @property {Object} [trailingRadioButton] - Trailing radio button object.
     * @property {Object} [trailingSwitch] - Trailing switch object.
     * @property {String} [text] - Additional text content.
     * @property {Object} [badge] - Badge object.
     * @property {Boolean} [selected] - Indicates if the item is selected.
     * @property {Boolean} [indeterminate] - Indicates if the item selection is indeterminate.
     * @property {String} [routerLink] - URL for router link.
     * @property {String} [align] - Alignment of the item content.
     * @property {Boolean} [sortable] - Indicates if the item is sortable.
     * @property {String} [sortableIcon] - Icon to indicate sorting.
     */
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
            indeterminate: { type: Boolean },
            routerLink: { type: String, reflect: true },
            align: { type: String },
            sortable: { type: Boolean },
            sortableIcon: { type: String },
            actions: { type: Array },
        };
    }

    /**
     *
     */

    constructor() {
        super();
    }

    /**
     *
     */

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
            
            ${this.sortable&&this.align=='right'?html`<md-icon-button @click="${this.handleDataTableItemSortableClick}" class="md-data-table__sortable" .icon="${this.sortableIcon}"></md-icon-button>`:nothing}
            ${this.label||this.subLabel||this.badge?html`
                <div class="md-data-table__label">
                    ${this.label?html`<div class="md-data-table__label-primary">${this.label}</div>`:nothing}
                    ${this.subLabel?html`<div class="md-data-table__label-secondary">${this.subLabel}</div>`:nothing}
                    ${this.badge?html`<md-badge class="md-data-table__badge" .label="${ifDefined(this.badge?.label??this.badge)}" .max="${ifDefined(this.badge.max)}"></md-badge>`:nothing}
                </div>
            `:nothing}
            ${this.sortable&&this.align!=='right'?html`<md-icon-button @click="${this.handleDataTableItemSortableClick}" class="md-data-table__sortable" .icon="${this.sortableIcon}"></md-icon-button>`:nothing}

            ${this.trailingIcon?html`<md-icon class="md-data-table__icon">${this.trailingIcon}</md-icon>`:nothing}

            ${this.trailingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleDataTableItemCheckboxNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__checkbox"></md-checkbox>`:nothing}
            ${this.trailingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleDataTableItemRadioButtonNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__radio-button"></md-radio-button>`:nothing}
            ${this.trailingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleDataTableItemSwitchNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__switch"></md-switch>`:nothing}

            ${this.text?html`<div class="md-data-table__text">${this.text}</div>`:nothing}

            ${this.actions?.length?html`
                <div class="md-data-table__actions">
                    ${this.actions?.map(action => html`
                        <md-icon-button 
                            @click="${this.handleDataTableItemActionClick}"
                            class="md-data-table__action"
                            .icon="${ifDefined(action?.icon??action)}"
                            .ui="${ifDefined(action?.ui)}"
                            .toggle="${ifDefined(action?.toggle)}"
                            .selected="${ifDefined(action?.selected)}"
                        ></md-icon-button>
                    `)}
                </div>
            `:nothing}
        `;
    }

    /**
     *
     */

    get labelSecondary() {
        return this.querySelector(".md-data-table__label-secondary");
    }

    /**
     *
     */

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

    /**
     *
     */

    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-data-table__item");
        await this.updateComplete;
    }

    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemSelected
     */

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onDataTableItemSelected", this);
            }
        }

        if (changedProperties.has("align")) {
            this.classList.remove("md-data-table__item--align-right");

            if (this.align) {
                this.classList.add("md-data-table__item--align-right");
            }
        }
    }

    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemActionClick
     */

    handleDataTableItemActionClick(event) {
        this.emit("onDataTableItemActionClick", event);
    }

    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemSortableClick
     */

    handleDataTableItemSortableClick(event) {
        this.emit("onDataTableItemSortableClick", event);
    }

    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemCheckboxNativeInput
     */

    handleDataTableItemCheckboxNativeInput(event) {
        this.emit("onDataTableItemCheckboxNativeInput", event);
    }

    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemRadioButtonNativeInput
     */

    handleDataTableItemRadioButtonNativeInput(event) {
        this.emit("onDataTableItemRadioButtonNativeInput", event);
    }

    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemSwitchNativeInput
     */

    handleDataTableItemSwitchNativeInput(event) {
        this.emit("onDataTableItemSwitchNativeInput", event);
    }
}

customElements.define("md-data-table-item", MDDataTableItemComponent);

/**
 *
 * @extends MDElement
 */
class MDDataTableComponent extends MDElement {
    /**
     * Properties of the MDDataTableComponent.
     * 
     * @property {Array} [columns] - The array of columns to display in the table.
     * @property {Array} [rows] - The array of rows to display in the table.
     * @property {Boolean} [rangeSelection] - Indicates if range selection is enabled.
     * @property {Boolean} [multiSelection] - Indicates if multiple selection is enabled.
     * @property {Boolean} [singleSelection] - Indicates if single selection is enabled.
     * @property {Boolean} [allSelection] - Indicates if selecting all items is enabled.
     * @property {Boolean} [checkbox] - Indicates if checkboxes are displayed for selection.
     */
    static get properties() {
        return {
            columns: { type: Array },
            rows: { type: Array },
            rangeSelection: { type: Boolean },
            multiSelection: { type: Boolean },
            singleSelection: { type: Boolean },
            allSelection: { type: Boolean },
            checkbox: { type: Boolean },
        };
    }

    /**
     *
     */

    constructor() {
        super();

        this.rangeSelection = true;
        this.multiSelection = true;
        this.singleSelection = true;
        this.allSelection = true;
    }

    /**
     *
     */

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
                .align="${ifDefined(item.align)}"
                .sortable="${ifDefined(item.sortable)}"
                .sortableIcon="${ifDefined(item.sortableIcon)}"
                .actions="${ifDefined(item.actions)}"
            ></md-data-table-item>
        `;
    }

    /**
     *
     */

    render() {
        return html`
            <table is="md-data-table-native">
                <caption></caption>
                <thead>
                    <tr>
                        ${this.columns?.length && this.checkbox
                            ? html`
                                  <th @onDataTableItemCheckboxNativeInput="${this.handleDataTableColumnCellCheckboxNativeInput}">
                                      ${this.renderItem({
                                          leadingCheckbox: {},
                                          indeterminate: this.indeterminate,
                                          selected: this.selected,
                                      })}
                                  </th>
                              `
                            : nothing}
                        ${this.columns?.map((column, index) =>
                            column.selected !== false
                                ? html`
                                      <th
                                          is="md-data-table-navtive-column-cell"
                                          .data="${column}"
                                          index="${index}"
                                          style="${styleMap({
                                              "min-width": column.width + "px",
                                          })}"
                                          @pointerenter="${this.handleDataTableColumnCellPointerenter}"
                                          @pointerleave="${this.handleDataTableColumnCellPointerleave}"
                                          @onDataTableItemSortableClick="${this.handleDataTableColumnCellSortableClick}"
                                          @onResizeStart="${this.handleDataTableColumnCellResizeStart}"
                                          @onResize="${this.handleDataTableColumnCellResize}"
                                          @onResizeEnd="${this.handleDataTableColumnCellResizeEnd}"
                                          @onResizeDoubleTap="${this.handleDataTableColumnCellResizeDoubleTap}"
                                          @onDragStart="${this.handleDataTableColumnCellDragStart}"
                                          @onDrag="${this.handleDataTableColumnCellDrag}"
                                          @onDragEnd="${this.handleDataTableColumnCellDragEnd}"
                                      >
                                          ${this.renderItem({
                                              label: column.label,
                                              align: column.align,
                                              sortable: column.sortable,
                                              sortableIcon: column.sortableIcon ?? "",
                                              actions:[
                                                {icon:'keyboard_arrow_down'}
                                              ]
                                          })}
                                      </th>
                                  `
                                : nothing,
                        )}
                        <th style="width:100%"></th>
                    </tr>
                </thead>
                <tbody>
                    ${this.rows?.map(
                        (row) => html`
                            <tr
                                is="md-data-table-native-row"
                                .data="${row}"
                                .tabIndex="${0}"
                                ?selected="${ifDefined(row.selected)}"
                                @click="${this.handleDataTableRowClick}"
                                @onDataTableItemCheckboxNativeInput="${this.handleDataTableRowCellCheckboxNativeInput}"
                                @onResizeStart="${this.handleDataTableRowResizeStart}"
                                @onResize="${this.handleDataTableRowResize}"
                                @onResizeEnd="${this.handleDataTableRowResizeEnd}"
                                @onResizeDoubleTap="${this.handleDataTableRowResizeDoubleTap}"
                                @onDragStart="${this.handleDataTableRowDragStart}"
                                @onDrag="${this.handleDataTableRowDrag}"
                                @onDragEnd="${this.handleDataTableRowDragEnd}"
                            >
                                ${this.checkbox
                                    ? html`
                                          <td>
                                              ${this.renderItem({
                                                  leadingCheckbox: {},
                                                  selected: row.selected,
                                              })}
                                          </td>
                                      `
                                    : nothing}
                                ${this.columns?.map((column) =>
                                    column.selected !== false
                                        ? html`
                                              <td>
                                                  ${this.renderItem({
                                                      label: row[column.name],
                                                      align: column.align,
                                                  })}
                                              </td>
                                          `
                                        : nothing,
                                )}
                                <td><div class="md-data-table__item"></div></td>
                            </tr>
                        `,
                    )}
                </tbody>
            </table>
        `;
    }

    get indeterminate() {
        const selected = this.rows?.filter((row) => row.selected)?.length;
        return selected > 0 && selected < this.rows?.length;
    }

    get selected() {
        const selected = this.rows?.filter((row) => row.selected)?.length;
        return selected > 0 && selected == this.rows?.length;
    }

    /**
     *
     */

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        this.classList.add("md-data-table");
        this.handleDataTableKeydown = this.handleDataTableKeydown.bind(this);
        this.addEventListener("keydown", this.handleDataTableKeydown);
    }

    /**
     *
     */

    async disconnectedCallback() {
        super.disconnectedCallback();
        await this.updateComplete;

        this.classList.remove("md-data-table");
        this.removeEventListener("keydown", this.handleDataTableKeydown);
    }

    /**
     *
     * @fires MDDataTableComponent#onDataTableRowClick
     */

    updated(changedProperties) {}

    // column

    handleDataTableColumnCellResizeStart(event) {
        this.emit("onDataTableColumnCellResizeStart", event);
    }

    handleDataTableColumnCellResize(event) {
        const th = event.currentTarget;
        const data = th.data;
        const currentWidth = th.gesture.currentWidth;
        data.width = currentWidth;
        this.requestUpdate();
        this.emit("onDataTableColumnCellResize", event);
    }

    handleDataTableColumnCellResizeEnd(event) {
        this.emit("onDataTableColumnCellResizeEnd", event);
    }

    handleDataTableColumnCellResizeDoubleTap(event) {
        const th = event.currentTarget;
        const data = th.data;
        const index = Array.from(th.parentElement.children).indexOf(th);
        th.style.setProperty("max-width", "0px");
        const maxWidth = Math.max(
            ...Array.from(this.querySelectorAll(`td:nth-child(${index + 1}) .md-data-table__item`), (item) => {
                const label = item.querySelector(".md-data-table__label");
                const style = window.getComputedStyle(item);
                const paddingLeft = parseInt(style.getPropertyValue("padding-left"));
                const paddingRight = parseInt(style.getPropertyValue("padding-right"));
                return paddingLeft + label.scrollWidth + paddingRight;
            }),
        );
        th.style.removeProperty("max-width");
        data.width = maxWidth;
        this.requestUpdate();

        this.emit("onDataTableColumnCellResizeDoubleTap", event);
    }

    handleDataTableColumnCellDragStart(event) {
        const th = event.currentTarget;
        const { left, top, width, height } = th.getBoundingClientRect();
        this.cloneTh = th.cloneNode();
        this.cloneTh.style.setProperty("width", width + "px");
        this.cloneTh.style.setProperty("height", height + "px");
        this.cloneTh.style.setProperty("position", "absolute");
        this.cloneTh.style.setProperty("left", left + "px");
        this.cloneTh.style.setProperty("top", top + "px");
        this.cloneTh.style.setProperty("z-index", "3");
        this.cloneTh.style.setProperty("pointer-events", "none");
        this.cloneTh.classList.add("md-ripple");
        this.cloneTh.classList.add("md-ripple--button");
        this.cloneTh.classList.add("md-ripple--containment");
        this.cloneTh.classList.add("md-ripple--dragged");
        document.body.append(this.cloneTh);

        this.emit("onDataTableColumnCellDragStart", event);
    }

    handleDataTableColumnCellDrag(event) {
        let currentX = event.currentTarget.gesture.currentX;

        if (this.cloneTh) {
            this.cloneTh.style.setProperty("transform", `translate3d(${currentX}px,0%,0px)`);
        }

        this.emit("onDataTableColumnCellDrag", event);
    }

    handleDataTableColumnCellDragEnd(event) {
        if (this.cloneTh) {
            this.cloneTh.remove();
        }

        const th = event.currentTarget;
        const data = th.data;
        const x = event.detail.clientX;
        const y = event.detail.clientY;
        const currentTh = document.elementFromPoint(x, y)?.closest("th");

        if (currentTh !== th) {
            const from = this.columns.indexOf(data);
            const to = this.columns.indexOf(currentTh.data);
            // swap
            // [this.columns[from], this.columns[to]] = [this.columns[to], this.columns[from]];

            // order
            let [column] = this.columns.splice(from, 1);
            this.columns.splice(to, 0, column);
            this.requestUpdate();
        }
        this.emit("onDataTableColumnCellDragEnd", event);
    }

    // row

    handleDataTableRowResizeStart(event) {
        this.emit("onDataTableRowResizeStart", event);
    }

    handleDataTableRowResize(event) {
        this.emit("onDataTableRowResize", event);
    }

    handleDataTableRowResizeEnd(event) {
        this.emit("onDataTableRowResizeEnd", event);
    }

    handleDataTableRowResizeDoubleTap(event) {
        this.emit("onDataTableRowResizeDoubleTap", event);
    }

    handleDataTableRowDragStart(event) {
        const tr = event.currentTarget;
        const { left, top, width, height } = tr.getBoundingClientRect();
        this.cloneTr = tr.cloneNode();
        this.cloneTr.style.setProperty("width", width + "px");
        this.cloneTr.style.setProperty("height", height + "px");
        this.cloneTr.style.setProperty("position", "absolute");
        this.cloneTr.style.setProperty("left", left + "px");
        this.cloneTr.style.setProperty("top", top + "px");
        this.cloneTr.style.setProperty("z-index", "3");
        this.cloneTr.style.setProperty("pointer-events", "none");
        this.cloneTr.classList.add("md-ripple");
        this.cloneTr.classList.add("md-ripple--button");
        this.cloneTr.classList.add("md-ripple--containment");
        this.cloneTr.classList.add("md-ripple--dragged");
        document.body.append(this.cloneTr);

        this.emit("onDataTableRowDragStart", event);
    }

    handleDataTableRowDrag(event) {
        let currentY = event.currentTarget.gesture.currentY;

        if (this.cloneTr) {
            this.cloneTr.style.setProperty("transform", `translate3d(0px,${currentY}px,0px)`);
        }

        this.emit("onDataTableRowDrag", event);
    }

    handleDataTableRowDragEnd(event) {
        if (this.cloneTr) {
            this.cloneTr.remove();
        }

        const tr = event.currentTarget;
        const data = tr.data;
        const x = event.detail.clientX;
        const y = event.detail.clientY;
        const currentTr = document.elementFromPoint(x, y)?.closest("tr");

        if (currentTr !== tr) {
            const from = this.rows.indexOf(data);
            const to = this.rows.indexOf(currentTr.data);
            // swap
            // [this.rows[from], this.rows[to]] = [this.rows[to], this.rows[from]];
            // order
            const [row] = this.rows.splice(from, 1);
            this.rows.splice(to, 0, row);
            this.requestUpdate();
        }
        this.emit("onDataTableRowDragEnd", event);
    }

    // column

    handleDataTableColumnCellPointerenter(event) {
        const data = event.currentTarget.data;

        if (data.sortable && !data.order) {
            data.sortableIcon = "arrow_upward";
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellPointerenter", event);
    }

    handleDataTableColumnCellPointerleave(event) {
        const data = event.currentTarget.data;

        if (data.sortable && !data.order) {
            data.sortableIcon = "";
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellPointerleave", event);
    }

    handleDataTableColumnCellSortableClick(event) {
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
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellSortableClick", event);
    }

    // row

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
        this.emit("onDataTableRowClick", event);
    }

    // table
    /**
     *
     * @fires MDDataTableComponent#onDataTableKeydown
     */

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

    // column
    /**
     *
     */

    handleDataTableColumnCellCheckboxNativeInput(event) {
        const checked = event.detail.currentTarget.checked;
        this.rows.forEach((row) => {
            row.selected = checked;
        });
        this.requestUpdate();
    }

    // row
    /**
     *
     */

    handleDataTableRowCellCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
    }
}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent, MDDataTableItemComponent };
