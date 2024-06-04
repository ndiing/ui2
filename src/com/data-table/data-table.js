import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";
import { isDefined } from "../mixin/mixin";
import { styleMap } from "lit/directives/style-map.js";
import { MDGestureModule } from "../gesture/gesture";

/**
 *
 * @extends HTMLTableCellElement
 */
/**
 *
 * @class MDDataTableColumnCellComponent
 * @extends HTMLTableCellElement
 */
/**
 *
 * @class MDDataTableColumnCellComponent
 * @extends HTMLTableCellElement
 */
/**
 *
 * @class MDDataTableColumnCellComponent
 * @extends HTMLTableCellElement
 */
class MDDataTableColumnCellComponent extends HTMLTableCellElement {
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    constructor() {
        super();
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    connectedCallback() {
        this.gesture = new MDGestureModule(this, {
            resize: ["e"],
            drag: ["x"],
            dragAfterPress: true,
        });
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    disconnectedCallback() {
        this.gesture.destroy();
    }
}
customElements.define("md-data-table-column-cell", MDDataTableColumnCellComponent, { extends: "th" });

/**
 *
 * @extends HTMLTableElement
 */
/**
 *
 * @class MDDataTableNativeComponent
 * @extends HTMLTableElement
 */
/**
 *
 * @class MDDataTableNativeComponent
 * @extends HTMLTableElement
 */
/**
 *
 * @class MDDataTableNativeComponent
 * @extends HTMLTableElement
 */
class MDDataTableNativeComponent extends HTMLTableElement {
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    constructor() {
        super();
        this.callback = this.callback.bind(this);
        this.resizeObserver = new ResizeObserver(this.callback);
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    callback(entries) {
        window.requestAnimationFrame(() => {
            for (const entry of entries) {
                const { height } = entry.contentRect;
                this.style.setProperty("--md-data-table-height", height + "px");
            }
        });
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    connectedCallback() {
        this.resizeObserver.observe(this);
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    disconnectedCallback() {
        this.resizeObserver.disconnect();
    }
}
customElements.define("md-data-table-native", MDDataTableNativeComponent, { extends: "table" });

/**
 *
 * @extends MDElement
 */
/**
 *
 * @class MDDataTableItemComponent
 * @extends MDElement
 */
/**
 *
 * @class MDDataTableItemComponent
 * @extends MDElement
 */
/**
 *
 * @class MDDataTableItemComponent
 * @extends MDElement
 */
class MDDataTableItemComponent extends MDElement {
    /**
     *
     * @property {String} [avatar] -
     * @property {String} [thumbnail] -
     * @property {String} [video] -
     * @property {Object} [leadingCheckbox] -
     * @property {Object} [leadingRadioButton] -
     * @property {Object} [leadingSwitch] -
     * @property {String} [leadingIcon] -
     * @property {String} [label] -
     * @property {String} [subLabel] -
     * @property {String} [trailingIcon] -
     * @property {Object} [trailingCheckbox] -
     * @property {Object} [trailingRadioButton] -
     * @property {Object} [trailingSwitch] -
     * @property {String} [text] -
     * @property {Object} [badge] -
     * @property {Boolean} [selected] -
     * @property {Boolean} [indeterminate] -
     * @property {String} [leadingAction] -
     * @property {String} [trailingAction] -
     */
    /**
     *
     * @property {String} [avatar] - 
     * @property {String} [thumbnail] - 
     * @property {String} [video] - 
     * @property {Object} [leadingCheckbox] - 
     * @property {Object} [leadingRadioButton] - 
     * @property {Object} [leadingSwitch] - 
     * @property {String} [leadingIcon] - 
     * @property {String} [label] - 
     * @property {String} [subLabel] - 
     * @property {String} [trailingIcon] - 
     * @property {Object} [trailingCheckbox] - 
     * @property {Object} [trailingRadioButton] - 
     * @property {Object} [trailingSwitch] - 
     * @property {String} [text] - 
     * @property {Object} [badge] - 
     * @property {Boolean} [selected] - 
     * @property {Boolean} [indeterminate] - 
     * @property {String} [leadingAction] - 
     * @property {String} [trailingAction] - 
     */
    /**
     *
     * @property {String} [avatar] - 
     * @property {String} [thumbnail] - 
     * @property {String} [video] - 
     * @property {Object} [leadingCheckbox] - 
     * @property {Object} [leadingRadioButton] - 
     * @property {Object} [leadingSwitch] - 
     * @property {String} [leadingIcon] - 
     * @property {String} [label] - 
     * @property {String} [subLabel] - 
     * @property {String} [trailingIcon] - 
     * @property {Object} [trailingCheckbox] - 
     * @property {Object} [trailingRadioButton] - 
     * @property {Object} [trailingSwitch] - 
     * @property {String} [text] - 
     * @property {Object} [badge] - 
     * @property {Boolean} [selected] - 
     * @property {Boolean} [indeterminate] - 
     * @property {String} [leadingAction] - 
     * @property {String} [trailingAction] - 
     */
    /**
     *
     * @property {String} [avatar] - 
     * @property {String} [thumbnail] - 
     * @property {String} [video] - 
     * @property {Object} [leadingCheckbox] - 
     * @property {Object} [leadingRadioButton] - 
     * @property {Object} [leadingSwitch] - 
     * @property {String} [leadingIcon] - 
     * @property {String} [label] - 
     * @property {String} [subLabel] - 
     * @property {String} [trailingIcon] - 
     * @property {Object} [trailingCheckbox] - 
     * @property {Object} [trailingRadioButton] - 
     * @property {Object} [trailingSwitch] - 
     * @property {String} [text] - 
     * @property {Object} [badge] - 
     * @property {Boolean} [selected] - 
     * @property {Boolean} [indeterminate] - 
     * @property {String} [leadingAction] - 
     * @property {String} [trailingAction] - 
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
            leadingAction: { type: String },
            trailingAction: { type: String },
        };
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    constructor() {
        super();
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
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
            ${isDefined(this.leadingAction)?html`<md-icon-button @click="${this.handleDataTableItemActionClick}" class="md-data-table__action">${this.leadingAction}</md-icon-button>`:nothing}

            ${isDefined(this.label)||this.subLabel||this.badge?html`
                <div class="md-data-table__label">
                    ${isDefined(this.label)?html`<div class="md-data-table__label-primary">${this.label}</div>`:nothing}
                    ${this.subLabel?html`<div class="md-data-table__label-secondary">${this.subLabel}</div>`:nothing}
                    ${this.badge?html`<md-badge class="md-data-table__badge" .label="${ifDefined(this.badge?.label??this.badge)}" .max="${ifDefined(this.badge.max)}"></md-badge>`:nothing}
                </div>
            `:nothing}

            ${isDefined(this.trailingAction)?html`<md-icon-button @click="${this.handleDataTableItemActionClick}" class="md-data-table__action">${this.trailingAction}</md-icon-button>`:nothing}
            ${this.trailingIcon?html`<md-icon class="md-data-table__icon">${this.trailingIcon}</md-icon>`:nothing}

            ${this.trailingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleDataTableItemCheckboxNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__checkbox"></md-checkbox>`:nothing}
            ${this.trailingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleDataTableItemRadioButtonNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__radio-button"></md-radio-button>`:nothing}
            ${this.trailingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleDataTableItemSwitchNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__switch"></md-switch>`:nothing}

            ${this.text?html`<div class="md-data-table__text">${this.text}</div>`:nothing}
        `;
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    get labelSecondary() {
        return this.querySelector(".md-data-table__label-secondary");
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
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
    /**
     *
     */
    /**
     *
     */
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
    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemSelected 
     */
    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemSelected 
     */
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
    }

    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemCheckboxNativeInput
     */
    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemCheckboxNativeInput 
     */
    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemCheckboxNativeInput 
     */
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
    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemRadioButtonNativeInput 
     */
    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemRadioButtonNativeInput 
     */
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
    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemSwitchNativeInput 
     */
    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemSwitchNativeInput 
     */
    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemSwitchNativeInput 
     */
    handleDataTableItemSwitchNativeInput(event) {
        this.emit("onDataTableItemSwitchNativeInput", event);
    }

    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemActionClick
     */
    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemActionClick 
     */
    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemActionClick 
     */
    /**
     *
     * @fires MDDataTableItemComponent#onDataTableItemActionClick 
     */
    handleDataTableItemActionClick(event) {
        this.emit("onDataTableItemActionClick", event);
    }
}

customElements.define("md-data-table-item", MDDataTableItemComponent);

/**
 *
 * @extends MDElement
 */
/**
 *
 * @class MDDataTableRowComponent
 * @extends MDElement
 */
/**
 *
 * @class MDDataTableRowComponent
 * @extends MDElement
 */
/**
 *
 * @class MDDataTableRowComponent
 * @extends MDElement
 */
class MDDataTableRowComponent extends MDElement {
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    static get properties() {
        return {};
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    constructor() {
        super();
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html``;
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        this.classList.add("md-data-table__row");
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        await this.updateComplete;

        this.classList.remove("md-data-table__row");
    }

    updated(changedProperties) {}
}

customElements.define("md-data-table-row", MDDataTableRowComponent);

/**
 *
 * @extends MDElement
 */
/**
 *
 * @class MDDataTableComponent
 * @extends MDElement
 */
/**
 *
 * @class MDDataTableComponent
 * @extends MDElement
 */
/**
 *
 * @class MDDataTableComponent
 * @extends MDElement
 */
class MDDataTableComponent extends MDElement {
    /**
     *
     * @property {Array} [columns] -
     * @property {Array} [rows] -
     * @property {Boolean} [rangeSelection] -
     * @property {Boolean} [multiSelection] -
     * @property {Boolean} [singleSelection] -
     * @property {Boolean} [allSelection] -
     * @property {Boolean} [checkbox] -
     */
    /**
     *
     * @property {Array} [columns] - 
     * @property {Array} [rows] - 
     * @property {Boolean} [rangeSelection] - 
     * @property {Boolean} [multiSelection] - 
     * @property {Boolean} [singleSelection] - 
     * @property {Boolean} [allSelection] - 
     * @property {Boolean} [checkbox] - 
     */
    /**
     *
     * @property {Array} [columns] - 
     * @property {Array} [rows] - 
     * @property {Boolean} [rangeSelection] - 
     * @property {Boolean} [multiSelection] - 
     * @property {Boolean} [singleSelection] - 
     * @property {Boolean} [allSelection] - 
     * @property {Boolean} [checkbox] - 
     */
    /**
     *
     * @property {Array} [columns] - 
     * @property {Array} [rows] - 
     * @property {Boolean} [rangeSelection] - 
     * @property {Boolean} [multiSelection] - 
     * @property {Boolean} [singleSelection] - 
     * @property {Boolean} [allSelection] - 
     * @property {Boolean} [checkbox] - 
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
    /**
     *
     */
    /**
     *
     */
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
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    renderItem(item) {
        /* prettier-ignore */
        return html`
            <md-data-table-row>
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
                    .indeterminate="${ifDefined(item.indeterminate)}"
                    .leadingAction="${ifDefined(item.leadingAction)}"
                    .trailingAction="${ifDefined(item.trailingAction)}"
                ></md-data-table-item>
            </md-data-table-row>
        `;
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            <table is="md-data-table-native">
                <caption></caption>
                <thead>
                    <tr>
                        ${this.checkbox?html`
                            <th
                                class="md-data-table__column-cell-checkbox"
                                @onDataTableItemCheckboxNativeInput="${this.handleDataTableColumnCellCheckboxNativeInput}"
                            >${this.renderItem({
                                leadingCheckbox:{},
                                selected:this.selected,
                                indeterminate:this.indeterminate,
                            })}</th>
                        `:nothing}
                        ${this.columns?.map(column=>html`
                            <th
                                is="md-data-table-column-cell"
                                style="${styleMap({
                                    ...(column.width&&{'min-width': column.width+'px'})
                                })}"
                                .data="${column}"
                                @pointerenter="${this.handleDataTableColumnCellSortablePointerenter}"
                                @pointerleave="${this.handleDataTableColumnCellSortablePointerleave}"
                                @onDataTableItemActionClick="${this.handleDataTableColumnCellSortableClick}"
                                @onResizeStart="${this.handleDataTableColumnCellResizeStart}"
                                @onResize="${this.handleDataTableColumnCellResize}"
                                @onResizeEnd="${this.handleDataTableColumnCellResizeEnd}"
                                @onResizeDoubleTap="${this.handleDataTableColumnCellResizeDoubleTap}"
                                @onDragStart="${this.handleDataTableColumnCellDragStart}"
                                @onDrag="${this.handleDataTableColumnCellDrag}"
                                @onDragEnd="${this.handleDataTableColumnCellDragEnd}"
                            >${this.renderItem({
                                label:column.label,
                                ...(column.sortable&&{trailingAction:column.trailingAction??''}),
                            })}</th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${this.rows?.map(row=>html`
                        <tr
                            .data="${row}"
                            .tabIndex="${0}"
                            ?selected="${row.selected}"
                            @click="${this.handleDataTableRowClick}"
                            @onDataTableItemCheckboxNativeInput="${this.handleDataTableRowCellCheckboxNativeInput}"
                        >
                            ${this.checkbox?html`
                                <td
                                    class="md-data-table__row-cell-checkbox"
                                >${this.renderItem({
                                    leadingCheckbox:{},
                                    selected:row.selected
                                })}</td>
                            `:nothing}
                            ${this.columns?.map(column=>html`
                                <td>${this.renderItem({
                                    label:(column.format||((value,row,column)=>value))(row[column.name],row,column),
                                })}</td>
                            `)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
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
    /**
     *
     */
    /**
     *
     */
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
    /**
     *
     * @fires MDDataTableComponent#onDataTableRowClick 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableRowClick 
     */
    updated(changedProperties) {}

    /**
     *
     * @fires MDDataTableComponent#onDataTableRowClick
     */
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

    /**
     *
     * @fires MDDataTableComponent#onDataTableKeydown
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableKeydown 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableKeydown 
     */
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

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    get selected() {
        return this.rows?.filter((row) => row.selected).length == this.rows?.length;
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
    get indeterminate() {
        const selected = this.rows?.filter((row) => row.selected).length;
        return selected > 0 && selected < this.rows?.length;
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
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

    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellSortablePointerenter
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellSortablePointerenter 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellSortablePointerenter 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellSortablePointerenter 
     */
    handleDataTableColumnCellSortablePointerenter(event) {
        const data = event.currentTarget.data;

        if (data.sortable && !data.order) {
            data.trailingAction = "arrow_upward";
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellSortablePointerenter", event);
    }

    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellSortablePointerleave
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellSortablePointerleave 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellSortablePointerleave 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellSortablePointerleave 
     */
    handleDataTableColumnCellSortablePointerleave(event) {
        const data = event.currentTarget.data;

        if (data.sortable && !data.order) {
            data.trailingAction = "";
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellSortablePointerleave", event);
    }

    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellSortableClick
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellSortableClick 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellSortableClick 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellSortableClick 
     */
    handleDataTableColumnCellSortableClick(event) {
        const data = event.currentTarget.data;

        if (data.sortable) {
            if (!data.order) {
                data.order = "asc";
                data.trailingAction = "arrow_upward";
            } else if (data.order == "asc") {
                data.order = "desc";
                data.trailingAction = "arrow_downward";
            } else {
                data.order = undefined;
                data.trailingAction = "";
            }
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellSortableClick", event);
    }

    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResizeStart
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResizeStart 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResizeStart 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResizeStart 
     */
    handleDataTableColumnCellResizeStart(event) {
        const data = event.currentTarget.data;

        this.emit("onDataTableColumnCellResizeStart", event);
    }

    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResize
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResize 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResize 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResize 
     */
    handleDataTableColumnCellResize(event) {
        const data = event.currentTarget.data;

        data.width = event.currentTarget.gesture.currentWidth;
        this.requestUpdate();

        this.emit("onDataTableColumnCellResize", event);
    }

    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResizeEnd
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResizeEnd 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResizeEnd 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResizeEnd 
     */
    handleDataTableColumnCellResizeEnd(event) {
        const data = event.currentTarget.data;

        this.emit("onDataTableColumnCellResizeEnd", event);
    }

    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResizeDoubleTap
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResizeDoubleTap 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResizeDoubleTap 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellResizeDoubleTap 
     */
    handleDataTableColumnCellResizeDoubleTap(event) {
        const data = event.currentTarget.data;

        const th = event.currentTarget;
        const thIndex = Array.from(th.parentElement.children).indexOf(th);
        th.style.setProperty("max-width", "0px");
        const maxWidth = Math.max(
            ...Array.from(this.querySelectorAll(`td:nth-child(${thIndex + 1}) .md-data-table__item`), (item) => {
                const label = item.querySelector(".md-data-table__label-primary");
                const style = window.getComputedStyle(item);
                const paddingLeft = parseFloat(style.getPropertyValue("padding-left"));
                const paddingRight = parseFloat(style.getPropertyValue("padding-right"));
                return paddingLeft + label.scrollWidth + paddingRight;
            }),
        );
        th.style.removeProperty("max-width");
        data.width = maxWidth;

        this.requestUpdate();

        this.emit("onDataTableColumnCellResizeDoubleTap", event);
    }

    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellDragStart
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellDragStart 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellDragStart 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellDragStart 
     */
    handleDataTableColumnCellDragStart(event) {
        if (event.detail.target.closest(".md-data-table__action,.md-data-table__checkbox,.md-data-table__radio-button,.md-data-table__switch")) {
            return;
        }
        const data = event.currentTarget.data;

        const th = event.currentTarget;
        const rect = th.getBoundingClientRect();
        this.guide = th.cloneNode(true);
        this.guide.style.setProperty("width", rect.width + "px");
        this.guide.style.setProperty("height", rect.height + "px");
        this.guide.style.setProperty("position", "absolute");
        this.guide.style.setProperty("left", rect.left + "px");
        this.guide.style.setProperty("top", rect.top + "px");
        this.guide.style.setProperty("z-index", 6);
        this.guide.style.setProperty("pointer-events", "none");
        this.guide.style.setProperty("--md-ripple-size", "200%");
        this.guide.classList.add("md-ripple");
        this.guide.classList.add("md-ripple--button");
        this.guide.classList.add("md-ripple--containment");
        this.guide.classList.add("md-ripple--dragged");
        document.body.append(this.guide);

        this.emit("onDataTableColumnCellDragStart", event);
    }

    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellDrag
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellDrag 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellDrag 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellDrag 
     */
    handleDataTableColumnCellDrag(event) {
        const data = event.currentTarget.data;

        this.guide.style.setProperty("transform", `translate3d(${event.currentTarget.gesture.currentX}px,0%,0px)`);

        this.emit("onDataTableColumnCellDrag", event);
    }

    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellDragEnd
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellDragEnd 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellDragEnd 
     */
    /**
     *
     * @fires MDDataTableComponent#onDataTableColumnCellDragEnd 
     */
    handleDataTableColumnCellDragEnd(event) {
        this.guide?.remove();

        const data = event.currentTarget.data;

        const { clientX: x, clientY: y } = event.detail;
        const th = document.elementFromPoint(x, y)?.closest("th");
        if (th) {
            const from = this.columns.indexOf(data);
            const to = this.columns.indexOf(th.data);
            [this.columns[from], this.columns[to]] = [this.columns[to], this.columns[from]];
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellDragEnd", event);
    }

    /**
     *
     */
    /**
     *
     */
    /**
     *
     */
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

export { MDDataTableComponent, MDDataTableRowComponent, MDDataTableItemComponent };
