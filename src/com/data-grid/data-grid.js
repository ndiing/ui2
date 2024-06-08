import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

/**
 *
 * @extends MDElement
 */
class MDDataGridItemComponent extends MDElement {
    /**
     * Properties of the MDDataGridItemComponent.
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
     * @property {String} [routerLink] - URL for router link.
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
            routerLink: { type: String, reflect: true },
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
            ${this.avatar?html`<md-image class="md-data-grid__avatar" .src="${this.avatar}" .ui="${"rounded"}"></md-image>`:nothing}
            ${this.thumbnail?html`<md-image class="md-data-grid__thumbnail" .src="${this.thumbnail}"></md-image>`:nothing}
            ${this.video?html`<md-image class="md-data-grid__video" .src="${this.video}" .ratio="${4/3}"></md-image>`:nothing}

            ${this.leadingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleDataGridItemCheckboxNativeInput}" .checked="${this.selected}" class="md-data-grid__checkbox"></md-checkbox>`:nothing}
            ${this.leadingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleDataGridItemRadioButtonNativeInput}" .checked="${this.selected}" class="md-data-grid__radio-button"></md-radio-button>`:nothing}
            ${this.leadingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleDataGridItemSwitchNativeInput}" .checked="${this.selected}" class="md-data-grid__switch"></md-switch>`:nothing}

            ${this.leadingIcon?html`<md-icon class="md-data-grid__icon">${this.leadingIcon}</md-icon>`:nothing}

            ${this.label||this.subLabel||this.badge?html`
                <div class="md-data-grid__label">
                    ${this.label?html`<div class="md-data-grid__label-primary">${this.label}</div>`:nothing}
                    ${this.subLabel?html`<div class="md-data-grid__label-secondary">${this.subLabel}</div>`:nothing}
                    ${this.badge?html`<md-badge class="md-data-grid__badge" .label="${ifDefined(this.badge?.label??this.badge)}" .max="${ifDefined(this.badge.max)}"></md-badge>`:nothing}
                </div>
            `:nothing}

            ${this.trailingIcon?html`<md-icon class="md-data-grid__icon">${this.trailingIcon}</md-icon>`:nothing}

            ${this.trailingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleDataGridItemCheckboxNativeInput}" .checked="${this.selected}" class="md-data-grid__checkbox"></md-checkbox>`:nothing}
            ${this.trailingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleDataGridItemRadioButtonNativeInput}" .checked="${this.selected}" class="md-data-grid__radio-button"></md-radio-button>`:nothing}
            ${this.trailingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleDataGridItemSwitchNativeInput}" .checked="${this.selected}" class="md-data-grid__switch"></md-switch>`:nothing}

            ${this.text?html`<div class="md-data-grid__text">${this.text}</div>`:nothing}
        `;
    }

    /**
     *
     */
    get labelSecondary() {
        return this.querySelector(".md-data-grid__label-secondary");
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-data-grid__item");
        await this.updateComplete;

        if (this.labelSecondary) {
            if (this.labelSecondary.scrollHeight > this.labelSecondary.clientHeight) {
                this.classList.add("md-data-grid__item--three-line");
            } else {
                this.classList.add("md-data-grid__item--two-line");
            }
        }
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-data-grid__item");
    }

    /**
     *
     * @fires MDDataGridItemComponent#onDataGridItemSelected
     */
    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onDataGridItemSelected", this);
            }
        }
    }

    /**
     *
     * @fires MDDataGridItemComponent#onDataGridItemCheckboxNativeInput
     */
    handleDataGridItemCheckboxNativeInput(event) {
        this.emit("onDataGridItemCheckboxNativeInput", event);
    }

    /**
     *
     * @fires MDDataGridItemComponent#onDataGridItemRadioButtonNativeInput
     */
    handleDataGridItemRadioButtonNativeInput(event) {
        this.emit("onDataGridItemRadioButtonNativeInput", event);
    }

    /**
     *
     * @fires MDDataGridItemComponent#onDataGridItemSwitchNativeInput
     */
    handleDataGridItemSwitchNativeInput(event) {
        this.emit("onDataGridItemSwitchNativeInput", event);
    }
}

customElements.define("md-data-grid-item", MDDataGridItemComponent);

/**
 *
 * @extends MDElement
 */
class MDDataGridRowComponent extends MDElement {
    /**
     *
     */
    static get properties() {
        return {};
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
        return html``;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-data-grid__row");
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-data-grid__row");
    }

    updated(changedProperties) {}
}

customElements.define("md-data-grid-row", MDDataGridRowComponent);

/**
 *
 * @extends MDElement
 */
class MDDataGridComponent extends MDElement {
    /**
     * Properties of the MDDataGridComponent.
     * @property {Array} [list] - The array of items to display in the list.
     * @property {Boolean} [rangeSelection] - Indicates if range selection is enabled.
     * @property {Boolean} [multiSelection] - Indicates if multiple selection is enabled.
     * @property {Boolean} [singleSelection] - Indicates if single selection is enabled.
     * @property {Boolean} [allSelection] - Indicates if selecting all items is enabled.
     */
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

    /**
     *
     */
    constructor() {
        super();
    }

    /**
     *
     */
    renderItem(item) {
        /* prettier-ignore */
        return html`
            <md-data-grid-item
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
                @click="${this.handleDataGridItemClick}"
                @onDataGridItemCheckboxNativeInput="${this.handleDataGridItemCheckboxNativeInput}"
                @onDataGridItemRadioButtonNativeInput="${this.handleDataGridItemRadioButtonNativeInput}"
                @onDataGridItemSwitchNativeInput="${this.handleDataGridItemSwitchNativeInput}"
            ></md-data-grid-item>
        `;
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            <table>
                <thead>
                    <tr>
                        ${this.columns1?.map(column => html`
                            <th
                                class="
                                    md-data-grid__freeze
                                    md-data-grid__freeze--column
                                    md-data-grid__freeze--top
                                    md-data-grid__freeze--left
                                    ${column.freezeEnd?'md-data-grid__freeze--end':''}
                                "
                                style="${styleMap({
                                    'min-width':column.width+'px'
                                })}"
                            >${this.renderItem({
                                label:column.label
                            })}</th>
                        `)}
                        ${this.columns2?.map(column => html`
                            <th
                                class="
                                    md-data-grid__freeze
                                    md-data-grid__freeze--column
                                    md-data-grid__freeze--top
                                "
                                style="${styleMap({
                                    'min-width':column.width+'px'
                                })}"
                            >${this.renderItem({
                                label:column.label
                            })}</th>
                        `)}
                        ${this.columns3?.map(column => html`
                            <th
                                class="
                                    md-data-grid__freeze
                                    md-data-grid__freeze--column
                                    md-data-grid__freeze--top
                                    md-data-grid__freeze--right
                                    ${column.freezeStart?'md-data-grid__freeze--start':''}
                                "
                                style="${styleMap({
                                    'min-width':column.width+'px'
                                })}"
                            >${this.renderItem({
                                label:column.label
                            })}</th>
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${this.rows?.map(row => html`
                        <tr>
                            ${this.columns1?.map(column => html`
                                <td
                                    class="
                                        md-data-grid__freeze
                                        md-data-grid__freeze--row
                                        md-data-grid__freeze--left
                                        ${column.freezeEnd?'md-data-grid__freeze--end':''}
                                    "
                                >${this.renderItem({
                                    label:row[column.name]
                                })}</td>
                            `)}
                            ${this.columns2?.map(column => html`
                                <td
                                    class="
                                    "
                                >${this.renderItem({
                                    label:row[column.name]
                                })}</td>
                            `)}
                            ${this.columns3?.map(column => html`
                                <td
                                    class="
                                        md-data-grid__freeze
                                        md-data-grid__freeze--row
                                        md-data-grid__freeze--right
                                        ${column.freezeStart?'md-data-grid__freeze--start':''}
                                    "
                                >${this.renderItem({
                                    label:row[column.name]
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
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-data-grid");
        this.handleDataGridKeydown = this.handleDataGridKeydown.bind(this);
        this.addEventListener("keydown", this.handleDataGridKeydown);
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-data-grid");
        this.removeEventListener("keydown", this.handleDataGridKeydown);
    }

    /**
     *
     * @fires MDDataGridComponent#onDataGridItemClick
     */
    async updated(changedProperties) {
        if (changedProperties.has("columns")) {
            await this.updateComplete;
            this.columns1 = this.columns.filter((column) => column.freeze == "left");
            if(this.columns1[this.columns1.length-1])this.columns1[this.columns1.length-1].freezeEnd=true
            this.columns2 = this.columns.filter((column) => !column.freeze);
            this.columns3 = this.columns.filter((column) => column.freeze == "right");
            if(this.columns3[0])this.columns3[0].freezeStart=true
            this.requestUpdate();
            await this.updateComplete;
            const leftMap = new Map();
            const rightMap = new Map();
            this.querySelectorAll("th").forEach((th, index) => {
                if (th.classList.contains("md-data-grid__freeze--left")) {
                    let prev = th.previousElementSibling;
                    let left = 0;
                    while (prev) {
                        if (prev.classList.contains("md-data-grid__freeze--left")) {
                            left += prev.getBoundingClientRect().width;
                        }
                        prev = prev.previousElementSibling;
                    }
                    leftMap.set(index + 1, left);
                } else if (th.classList.contains("md-data-grid__freeze--right")) {
                    let next = th.nextElementSibling;
                    let right = 0;
                    while (next) {
                        if (next.classList.contains("md-data-grid__freeze--right")) {
                            right += next.getBoundingClientRect().width;
                        }
                        next = next.nextElementSibling;
                    }
                    rightMap.set(index + 1, right);
                }
            });
            const css = Array.from(leftMap.entries(), ([n, left]) => `th:nth-child(${n}){left:${left}px}td:nth-child(${n}){left:${left}px}`).join("") + Array.from(rightMap.entries(), ([n, right]) => `th:nth-child(${n}){right:${right}px}td:nth-child(${n}){right:${right}px}`).join("");
            const style = document.createElement("style");
            style.textContent = css;
            this.append(style);

            // const keys = [...leftMap.keys()];
            // console.log(keys[keys.length - 1])
            
            // console.log(rightMap.keys().next().value)
        }
    }

    handleDataGridItemClick(event) {
        if (event.target.closest(".md-data-grid__checkbox,.md-data-grid__radio-button,.md-data-grid__switch")) {
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
            this.rows.forEach((item, index) => {
                item.selected = index >= this.lastIndex && index <= this.currentIndex;
            });

            if (this.swapIndex) {
                [this.currentIndex, this.lastIndex] = [this.lastIndex, this.currentIndex];
            }
        } else if (this.multiSelection && event.ctrlKey) {
            data.selected = !data.selected;
        } else if (this.singleSelection) {
            this.rows.forEach((item) => {
                item.selected = item == data;
            });
            this.lastIndex = this.rows.indexOf(data);
        }
        this.requestUpdate();
        this.emit("onDataGridItemClick", event);
    }

    /**
     *
     * @fires MDDataGridComponent#onDataGridKeydown
     */
    handleDataGridKeydown(event) {
        if (this.allSelection && event.ctrlKey && event.key == "a") {
            event.preventDefault();
            this.rows.forEach((item) => {
                item.selected = true;
            });
            this.requestUpdate();
        }
        this.emit("onDataGridKeydown", event);
    }

    /**
     *
     */
    handleDataGridItemCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
    }

    /**
     *
     */
    handleDataGridItemRadioButtonNativeInput(event) {
        const data = event.currentTarget.data;
        this.rows.forEach((item) => {
            item.selected = item == data;
        });
        this.requestUpdate();
    }

    /**
     *
     */
    handleDataGridItemSwitchNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
    }
}

customElements.define("md-data-grid", MDDataGridComponent);

export { MDDataGridComponent, MDDataGridRowComponent, MDDataGridItemComponent };
