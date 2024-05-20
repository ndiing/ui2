import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { Ripple } from "../ripple/ripple";
import { styleMap } from "lit/directives/style-map.js";

function notNull(value) {
    return value !== null && value !== undefined;
}

class MDDataTableItem extends MDElement {
    static get properties() {
        return {
            avatar: { type: String },
            image: { type: String },
            video: { type: String },

            icon: { type: String },

            label: { type: String },
            labelSecondary: { type: String },

            text: { type: String },

            leadingCheckbox: { type: Object },
            leadingRadioButton: { type: Object },
            leadingSwitch: { type: Object },

            trailingCheckbox: { type: Object },
            trailingRadioButton: { type: Object },
            trailingSwitch: { type: Object },


            selected: { type: Boolean, reflect: true },

        };
    }

    get labelSecondaryElement() {
        return this.querySelector(".md-data-table__label-secondary");
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            ${this.avatar?html`<md-image class="md-data-table__avatar" .src="${this.avatar}" .ratio="${"1/1"}" .rounded="${true}"></md-image>`:nothing}
            ${this.image?html`<md-image class="md-data-table__image" .src="${this.image}" .ratio="${"1/1"}" .rounded="${false}"></md-image>`:nothing}
            ${this.video?html`<md-image class="md-data-table__video" .src="${this.video}" .ratio="${"4/3"}" .rounded="${false}"></md-image>`:nothing}

            ${this.icon?html`<md-icon class="md-data-table__icon">${this.icon}</md-icon>`:nothing}

            ${this.leadingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleDataTableItemCheckboxInput}" .checked="${this.selected}" class="md-data-table__checkbox"></md-checkbox>`:nothing}
            ${this.leadingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleDataTableItemRadioButtonInput}" .checked="${this.selected}" class="md-data-table__radio-button"></md-radio-button>`:nothing}
            ${this.leadingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleDataTableItemSwitchInput}" .checked="${this.selected}" class="md-data-table__switch"></md-switch>`:nothing}

            ${this.label||this.labelSecondary?html`
                <div class="md-data-table__label">
                    ${this.label?html`<div class="md-data-table__label-primary">${this.label}</div>`:nothing}
                    ${this.labelSecondary?html`<div class="md-data-table__label-secondary">${this.labelSecondary}</div>`:nothing}
                </div>
            `:nothing}
            ${this.text?html`<div class="md-data-table__text">${this.text}</div>`:nothing}

            ${this.trailingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleDataTableItemCheckboxInput}" .checked="${this.selected}" class="md-data-table__checkbox"></md-checkbox>`:nothing}
            ${this.trailingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleDataTableItemRadioButtonInput}" .checked="${this.selected}" class="md-data-table__radio-button"></md-radio-button>`:nothing}
            ${this.trailingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleDataTableItemSwitchInput}" .checked="${this.selected}" class="md-data-table__switch"></md-switch>`:nothing}

        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        await this.updateComplete;

        this.classList.add("md-data-table__item");

        // this.ripple = new Ripple(this, {
        //     fadeout: true,
        // });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-data-table__item");

        // this.ripple?.destroy();
    }

    firstUpdated(changedProperties) {
        if (changedProperties.has("labelSecondary")) {
            window.requestAnimationFrame(() => {
                if (this.labelSecondary) {
                    const lineHeight = parseFloat(window.getComputedStyle(this.labelSecondaryElement).getPropertyValue("line-height"));
    
                    if (this.labelSecondaryElement.scrollHeight > lineHeight) {
                        this.classList.add("md-data-table__item--three-line");
                    } else {
                        this.classList.add("md-data-table__item--two-line");
                    }
                } else {
                    this.classList.add("md-data-table__item--two-line");
                    this.classList.add("md-data-table__item--three-line");
                }
            })
        }
    }

    updated(changedProperties) {
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onDataTableItemSelected", this);
            }
        }
    }

    handleDataTableItemCheckboxInput(event) {
        this.emit("onDataTableItemCheckboxInput", event);
    }
    handleDataTableItemRadioButtonInput(event) {
        this.emit("onDataTableItemRadioButtonInput", event);
    }
    handleDataTableItemSwitchInput(event) {
        this.emit("onDataTableItemSwitchInput", event);
    }
}

customElements.define("md-data-table-item", MDDataTableItem);

class MDDataTable extends MDElement {
    static get properties() {
        return {
            columns: { type: Array },
            rows: { type: Array },

            allSelection:{type:Boolean},
            rangeSelection:{type:Boolean},
            multiSelection:{type:Boolean},
            singleSelection:{type:Boolean},
        };
    }

    constructor() {
        super();
    }

    renderColumnItem(item) {
        // prettier-ignore
        return html`
            <md-data-table-item
                .data="${item}"
                .avatar="${ifDefined(item.avatar)}"
                .image="${ifDefined(item.image)}"
                .video="${ifDefined(item.video)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .labelSecondary="${ifDefined(item.labelSecondary)}"
                .text="${ifDefined(item.text)}"
                .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                .selected="${ifDefined(item.selected)}"
            ></md-data-table-item>
        `;
    }

    renderRowItem(item) {
        // prettier-ignore
        return html`
            <md-data-table-item
                .data="${item}"
                .avatar="${ifDefined(item.avatar)}"
                .image="${ifDefined(item.image)}"
                .video="${ifDefined(item.video)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .labelSecondary="${ifDefined(item.labelSecondary)}"
                .text="${ifDefined(item.text)}"
                .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                .selected="${ifDefined(item.selected)}"
            ></md-data-table-item>
        `;
    }

    getLabel(object,path){
        return path.split('.').reduce((p,c) => p[c], object)
    }

    render() {
        // prettier-ignore
        return html`
            <table>
                <caption></caption>
                <thead>
                    <tr>
                        ${this.columns?.map(col => html`
                            <th
                                style="${styleMap({
                                    ...(col.width&&{width: col.width+'px'})
                                })}"
                            >${this.renderColumnItem(col)}</th>
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
                        >
                            ${this.columns?.map(col=>html`
                                <td>${this.renderRowItem({
                                    label:this.getLabel(row,col.name)
                                })}</td>
                            `)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table");

        this.handleDataTableKeydown = this.handleDataTableKeydown.bind(this);
        this.addEventListener("keydown", this.handleDataTableKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-data-table");

        this.removeEventListener("keydown", this.handleDataTableKeydown);
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    handleDataTableKeydown(event) {
        if (this.allSelection && event.ctrlKey && event.key === "a") {
            event.preventDefault();
            this.rows.forEach((item) => {
                item.selected = true;
            });
            this.requestUpdate();
            this.emit("onDataTableKeydown", event);
        }
    }

    handleDataTableRowClick(event) {
        if (event.target.closest(".md-data-table__checkbox,.md-data-table__radio-button,.md-data-table__switch")) {
            return;
        }

        const data = event.currentTarget.data;
        this.currentSelectedIndex = this.rows.indexOf(data);

        if (this.rangeSelection && event.shiftKey) {
            this.lastSelectedIndex = this.lastSelectedIndex ?? 0;

            if (this.lastSelectedIndex > this.currentSelectedIndex) {
                [this.lastSelectedIndex, this.currentSelectedIndex] = [this.currentSelectedIndex, this.lastSelectedIndex];
            }
            this.rows.forEach((item, index) => {
                item.selected = index >= this.lastSelectedIndex && index <= this.currentSelectedIndex;
            });
        } else if (this.multiSelection && event.ctrlKey) {
            data.selected = !data.selected;
        } else if (this.singleSelection) {
            this.rows.forEach((item) => {
                item.selected = item === data;
            });
        }
        this.lastSelectedIndex = this.currentSelectedIndex;

        this.requestUpdate();

        this.emit("onDataTableRowClick", event);
    }

    handleDataTableCheckboxInput(event) {
        const data = event.currentTarget.data;

        data.selected = !data.selected;

        this.requestUpdate();

        this.emit("onDataTableCheckboxInput", event);
    }
    handleDataTableRadioButtonInput(event) {
        const data = event.currentTarget.data;

        this.list.forEach((item) => {
            item.selected = item === data;
        });

        this.requestUpdate();

        this.emit("onDataTableRadioButtonInput", event);
    }
    handleDataTableSwitchInput(event) {
        const data = event.currentTarget.data;

        data.selected = !data.selected;

        this.requestUpdate();

        this.emit("onDataTableSwitchInput", event);
    }
}

customElements.define("md-data-table", MDDataTable);

export { MDDataTable };
