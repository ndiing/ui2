import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";
import { styleMap } from "lit/directives/style-map.js";
import { isDefined } from "../mixin/mixin";
import { MDGestureModule } from "../gesture/gesture";

class MDDataTableColumnCellComponent extends HTMLTableCellElement {
    constructor() {
        super();
        // this.callback = this.callback.bind(this);
        // this.resizeObserver = new ResizeObserver(this.callback);
    }

    // callback(entries){
    //     for(const entry of entries){
    //         const {width} = (entry.contentRect)
    //         this.data.width=width
    //     }
    // }

    connectedCallback() {
        // this.resizeObserver.observe(this);
        this.gesture = new MDGestureModule(this, {
            resize: [
                //
                // "nw",
                // "n",
                // "ne",
                // "w",
                "e",
                // "sw",
                // "s",
                // "se",
            ],
            drag: [
                //
                "x",
                // "y",
            ],
            // applyStyle: true,
            // resizeAfterPress: true,
            // dragAfterPress: true,
        });
    }

    disconnectedCallback() {
        // this.resizeObserver.destroy();
        this.gesture.destroy();
    }
}
customElements.define("md-data-table-column-cell", MDDataTableColumnCellComponent, { extends: "th" });

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
            leadingAction: { type: String },
            subLabel: { type: String },
            trailingAction: { type: String },
            trailingIcon: { type: String },
            trailingCheckbox: { type: Object },
            trailingRadioButton: { type: Object },
            trailingSwitch: { type: Object },
            text: { type: String },
            badge: { type: Object },
            selected: { type: Boolean, reflect: true },
            indeterminate: { type: String },
        };
    }

    constructor() {
        super();
    }

    /* prettier-ignore */

    render() {
        return html`
            ${this.avatar?html`<md-image class="md-data-table__avatar" .src="${this.avatar}" .ui="${"rounded"}"></md-image>`:nothing}
            ${this.thumbnail?html`<md-image class="md-data-table__thumbnail" .src="${this.thumbnail}"></md-image>`:nothing}
            ${this.video?html`<md-image class="md-data-table__video" .src="${this.video}" .ratio="${4/3}"></md-image>`:nothing}

            ${this.leadingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleDataTableItemCheckboxNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__checkbox"></md-checkbox>`:nothing}
            ${this.leadingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleDataTableItemRadioButtonNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__radio-button"></md-radio-button>`:nothing}
            ${this.leadingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleDataTableItemSwitchNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__switch"></md-switch>`:nothing}

            ${isDefined(this.leadingIcon)?html`<md-icon class="md-data-table__icon">${this.leadingIcon}</md-icon>`:nothing}
            
            ${this.leadingAction?html`<md-icon-button @click="${this.handleDataTableItemActionClick}" class="md-data-table__action" .icon="${this.leadingAction}"></md-icon-button>`:nothing}
            ${isDefined(this.label)||this.subLabel||this.badge?html`
                <div class="md-data-table__label">
                    ${isDefined(this.label)?html`<div class="md-data-table__label-primary">${this.label}</div>`:nothing}
                    ${this.subLabel?html`<div class="md-data-table__label-secondary">${this.subLabel}</div>`:nothing}
                    ${this.badge?html`<md-badge class="md-data-table__badge" .label="${ifDefined(this.badge?.label??this.badge)}" .max="${ifDefined(this.badge.max)}"></md-badge>`:nothing}
                </div>
            `:nothing}
            ${isDefined(this.trailingAction)?html`<md-icon-button @click="${this.handleDataTableItemActionClick}" class="md-data-table__action" .icon="${this.trailingAction}"></md-icon-button>`:nothing}

            ${this.trailingIcon?html`<md-icon class="md-data-table__icon">${this.trailingIcon}</md-icon>`:nothing}

            ${this.trailingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleDataTableItemCheckboxNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__checkbox"></md-checkbox>`:nothing}
            ${this.trailingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleDataTableItemRadioButtonNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__radio-button"></md-radio-button>`:nothing}
            ${this.trailingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleDataTableItemSwitchNativeInput}" .checked="${this.selected}" .indeterminate="${this.indeterminate}" class="md-data-table__switch"></md-switch>`:nothing}

            ${this.text?html`<div class="md-data-table__text">${this.text}</div>`:nothing}
        `;
    }

    get labelSecondary() {
        return this.querySelector(".md-data-table__label-secondary");
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

    handleDataTableItemActionClick(event) {
        this.emit("onDataTableItemActionClick", event);
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
}

customElements.define("md-data-table-item", MDDataTableItemComponent);

class MDDataTableRowComponent extends MDElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    /* prettier-ignore */

    render() {
        return html``;
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        this.classList.add("md-data-table__row");
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        await this.updateComplete;

        this.classList.remove("md-data-table__row");
    }

    updated(changedProperties) {}
}

customElements.define("md-data-table-row", MDDataTableRowComponent);

class MDDataTableComponent extends MDElement {
    static get properties() {
        return {
            columns: { type: Array },
            rows: { type: Array },
            rangeSelection: { type: Boolean },
            multiSelection: { type: Boolean },
            singleSelection: { type: Boolean },
            allSelection: { type: Boolean },
        };
    }

    constructor() {
        super();

        this.rangeSelection = true;
        this.multiSelection = true;
        this.singleSelection = true;
        this.allSelection = true;
    }

    /* prettier-ignore */

    renderItem(item) {
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
                    .leadingAction="${ifDefined(item.leadingAction)}"
                    .label="${ifDefined(item.label)}"
                    .subLabel="${ifDefined(item.subLabel)}"
                    .trailingAction="${ifDefined(item.trailingAction)}"
                    .trailingIcon="${ifDefined(item.trailingIcon)}"
                    .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                    .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                    .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                    .badge="${ifDefined(item.badge)}"
                    .text="${ifDefined(item.text)}"
                    .selected="${ifDefined(item.selected)}"
                    .indeterminate="${ifDefined(item.indeterminate)}"
                ></md-data-table-item>
            </md-data-table-row>
        `;
    }

    /* prettier-ignore */

    render() {
        return html`
            <table>
                <caption></caption>
                <thead>
                    <tr>
                        <!-- <th
                            @onDataTableItemCheckboxNativeInput="${this.handleDataTableColumnCheckboxNativeInput}"
                        >${this.renderItem({
                            leadingCheckbox:{},
                            selected:this.selected,
                            indeterminate:this.indeterminate,
                        })}</th> -->
                        ${this.columns?.map(column => html`
                            <th
                                is="md-data-table-column-cell"
                                .data="${column}"
                                style="${styleMap({
                                    width: column.width+'px'
                                })}"
                                @pointerenter="${this.handleDataTableColumnCellPointerenter}"
                                @onDataTableItemActionClick="${this.handleDataTableColumnCellActionClick}"
                                @pointerleave="${this.handleDataTableColumnCellPointerleave}"
                                @onResize="${this.handleDataTableColumnCellResize}"
                                @onDoubleTap="${this.handleDataTableColumnCellDoubleTap}"
                                @onDragStart="${this.handleDataTableColumnCellDragStart}"
                                @onDrag="${this.handleDataTableColumnCellDrag}"
                                @onDragEnd="${this.handleDataTableColumnCellDragEnd}"
                            >${this.renderItem({
                                label:column.label,
                                // trailingAction:column.trailingAction??'',
                            })}</th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${this.rows?.map(row => html`
                        <tr
                            .data="${row}"
                            .tabIndex="${0}"
                            ?selected="${row.selected}"
                            @click="${this.handleDataTableRowClick}"
                            @onDataTableItemCheckboxNativeInput="${this.handleDataTableRowCheckboxNativeInput}"
                        >
                            <!-- <td>${this.renderItem({
                                leadingCheckbox:{},
                                selected:row.selected,
                            })}</td> -->
                            ${this.columns?.map(column => html`
                                <td>${this.renderItem({
                                    label:row[column.name]
                                })}</td>
                            `)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        this.classList.add("md-data-table");
        this.handleDataTableKeydown = this.handleDataTableKeydown.bind(this);
        this.addEventListener("keydown", this.handleDataTableKeydown);
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        await this.updateComplete;

        this.classList.remove("md-data-table");
        this.removeEventListener("keydown", this.handleDataTableKeydown);
    }

    updated(changedProperties) {}

    handleDataTableColumnCellPointerenter(event) {
        const data = event.currentTarget.data;

        if (!data.order) {
            data.trailingAction = "arrow_upward";
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellPointerenter", event);
    }

    handleDataTableColumnCellActionClick(event) {
        const data = event.currentTarget.data;

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

        this.emit("onDataTableColumnCellPointerleave", event);
    }

    handleDataTableColumnCellPointerleave(event) {
        const data = event.currentTarget.data;

        if (!data.order) {
            data.trailingAction = "";
            this.requestUpdate();
        }

        this.emit("onDataTableColumnCellPointerleave", event);
    }

    handleDataTableColumnCellResize(event) {
        const data = event.currentTarget.data;
        data.width = event.currentTarget.gesture.currentWidth;
        this.requestUpdate();
    }

    handleDataTableColumnCellDoubleTap(event) {
        const th = event.currentTarget;
        const tr = th.parentElement;
        const data = th.data;
        const index = Array.from(tr.children).indexOf(th);
        const tds = Array.from(this.querySelectorAll(`td:nth-child(${index + 1}) .md-data-table__item`));
        th.style.setProperty("max-width", "0px");
        const widths = tds.map((td) => {
            const label = td.querySelector(".md-data-table__label-primary");
            const style = window.getComputedStyle(td);
            const paddingLeft = parseFloat(style.getPropertyValue("padding-left"));
            const paddingRight = parseFloat(style.getPropertyValue("padding-right"));
            return paddingLeft + label.scrollWidth + paddingRight;
        });
        const width = Math.max(...widths);
        th.style.removeProperty("max-width");
        data.width = width;
        this.requestUpdate();
    }

    handleDataTableColumnCellDragStart(event) {
        const data = event.currentTarget.data;
        // console.log(data)
    }
    handleDataTableColumnCellDrag(event) {
        const data = event.currentTarget.data;
        // console.log(data)
    }
    handleDataTableColumnCellDragEnd(event) {
        const data = event.currentTarget.data;
        const x = event.detail.clientX;
        const y = event.detail.clientY;
        const th = document.elementFromPoint(x, y)?.closest("th");
        if (th) {
            const from = this.columns.indexOf(data);
            const to = this.columns.indexOf(th.data);
            [this.columns[from], this.columns[to]] = [this.columns[to], this.columns[from]];
            this.requestUpdate();
        }
    }

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

    get selected() {
        return this.rows?.length == this.rows?.filter((row) => row.selected)?.length;
    }
    get indeterminate() {
        let selected = this.rows?.filter((row) => row.selected).length;
        return selected && selected < this.rows?.length;
    }

    handleDataTableColumnCheckboxNativeInput(event) {
        const checkbox = event.detail.currentTarget;
        this.rows.forEach((row) => {
            row.selected = checkbox.checked;
        });
        this.requestUpdate();
    }

    handleDataTableRowCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
    }
}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent, MDDataTableRowComponent, MDDataTableItemComponent };
