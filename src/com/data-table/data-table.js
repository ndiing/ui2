import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";
import { styleMap } from "lit/directives/style-map.js";

class MDDataTableColumnCell extends HTMLTableCellElement {
    constructor() {
        super();
        this.callback = this.callback.bind(this);
        this.resizeObserver = new ResizeObserver(this.callback);
    }
    connectedCallback() {
        this.resizeObserver.observe(this);
    }
    disconnectedCallback() {
        this.resizeObserver.disconnect();
    }
    callback(entries) {
        // for(const entry of entries){
        //     const {width,height}=(entry.contentRect)
        //     console.log(width,height)
        // }
    }
}
customElements.define("md-data-table-column-cell", MDDataTableColumnCell, { extends: "th" });

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

            ${this.leadingIcon?html`<md-icon class="md-data-table__icon">${this.leadingIcon}</md-icon>`:nothing}

            ${this.label||this.subLabel||this.badge?html`
                <div class="md-data-table__label">
                    ${this.label?html`<div class="md-data-table__label-primary">${this.label}</div>`:nothing}
                    ${this.subLabel?html`<div class="md-data-table__label-secondary">${this.subLabel}</div>`:nothing}
                    ${this.badge?html`<md-badge class="md-data-table__badge" .label="${ifDefined(this.badge?.label??this.badge)}" .max="${ifDefined(this.badge.max)}"></md-badge>`:nothing}
                </div>
            `:nothing}

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
        await this.updateComplete;
        // this.ripple = new MDRippleModule(this, {});
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-data-table__item");
        await this.updateComplete;
        // this.ripple.destroy();
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
                ></md-data-table-item>
            </md-data-table-row>
        `;
    }

    /* prettier-ignore */

    render() {
        return html`
            <table class="md-data-table__native">
                <thead>
                    <tr>
                        <th 
                            is="md-data-table-column-cell"
                            id="checkbox"
                            @onDataTableItemCheckboxNativeInput="${this.handleDataTableColumnCheckboxNativeInput}"
                        >${this.renderItem({
                            leadingCheckbox:{},
                            selected:this.selected,
                            indeterminate:this.indeterminate,
                        })}</th>
                        ${this.columns?.map(column => html`
                            <th 
                                is="md-data-table-column-cell"
                                style="${styleMap({
                                    width: column.width+'px'
                                })}"
                            >${this.renderItem(column)}</th>
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
                            <td>${this.renderItem({
                                leadingCheckbox:{},
                                selected:row.selected,
                            })}</td>
                            ${this.columns?.map(column => html`
                                <td>${this.renderItem({
                                    label:row[column.name],
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

    handleDataTableRowCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
    }

    get dataTableColumnCheckbox() {
        return this.querySelector("th .md-data-table__checkbox");
    }

    get selected() {
        return this.rows?.filter((row) => row.selected).length == this.rows?.length;
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
}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent, MDDataTableRowComponent, MDDataTableItemComponent };
