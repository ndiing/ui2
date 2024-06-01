import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";

class MDNestedListItemComponent extends MDElement {
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

    constructor() {
        super();
    }

    /* prettier-ignore */

    render() {
        return html`
            ${this.avatar?html`<md-image class="md-nested-list__avatar" .src="${this.avatar}" .ui="${"rounded"}"></md-image>`:nothing}
            ${this.thumbnail?html`<md-image class="md-nested-list__thumbnail" .src="${this.thumbnail}"></md-image>`:nothing}
            ${this.video?html`<md-image class="md-nested-list__video" .src="${this.video}" .ratio="${4/3}"></md-image>`:nothing}

            ${this.leadingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleNestedListItemCheckboxNativeInput}" .checked="${this.selected}" class="md-nested-list__checkbox"></md-checkbox>`:nothing}
            ${this.leadingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleNestedListItemRadioButtonNativeInput}" .checked="${this.selected}" class="md-nested-list__radio-button"></md-radio-button>`:nothing}
            ${this.leadingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleNestedListItemSwitchNativeInput}" .checked="${this.selected}" class="md-nested-list__switch"></md-switch>`:nothing}

            ${this.leadingIcon?html`<md-icon class="md-nested-list__icon">${this.leadingIcon}</md-icon>`:nothing}

            ${this.label||this.subLabel||this.badge?html`
                <div class="md-nested-list__label">
                    ${this.label?html`<div class="md-nested-list__label-primary">${this.label}</div>`:nothing}
                    ${this.subLabel?html`<div class="md-nested-list__label-secondary">${this.subLabel}</div>`:nothing}
                    ${this.badge?html`<md-badge class="md-nested-list__badge" .label="${ifDefined(this.badge?.label??this.badge)}" .max="${ifDefined(this.badge.max)}"></md-badge>`:nothing}
                </div>
            `:nothing}

            ${this.trailingIcon?html`<md-icon class="md-nested-list__icon">${this.trailingIcon}</md-icon>`:nothing}

            ${this.trailingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleNestedListItemCheckboxNativeInput}" .checked="${this.selected}" class="md-nested-list__checkbox"></md-checkbox>`:nothing}
            ${this.trailingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleNestedListItemRadioButtonNativeInput}" .checked="${this.selected}" class="md-nested-list__radio-button"></md-radio-button>`:nothing}
            ${this.trailingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleNestedListItemSwitchNativeInput}" .checked="${this.selected}" class="md-nested-list__switch"></md-switch>`:nothing}

            ${this.text?html`<div class="md-nested-list__text">${this.text}</div>`:nothing}
        `;
    }

    get labelSecondary() {
        return this.querySelector(".md-nested-list__label-secondary");
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classNestedList.add("md-nested-list__item");
        await this.updateComplete;

        if (this.labelSecondary) {
            if (this.labelSecondary.scrollHeight > this.labelSecondary.clientHeight) {
                this.classNestedList.add("md-nested-list__item--three-line");
            } else {
                this.classNestedList.add("md-nested-list__item--two-line");
            }
        }
        await this.updateComplete;
        this.ripple = new MDRippleModule(this, {});
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classNestedList.remove("md-nested-list__item");
        await this.updateComplete;
        this.ripple.destroy();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onNestedListItemSelected", this);
            }
        }
    }

    handleNestedListItemCheckboxNativeInput(event) {
        this.emit("onNestedListItemCheckboxNativeInput", event);
    }

    handleNestedListItemRadioButtonNativeInput(event) {
        this.emit("onNestedListItemRadioButtonNativeInput", event);
    }

    handleNestedListItemSwitchNativeInput(event) {
        this.emit("onNestedListItemSwitchNativeInput", event);
    }
}

customElements.define("md-nested-list-item", MDNestedListItemComponent);

class MDNestedListRowComponent extends MDElement {
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

        this.classNestedList.add("md-nested-list__row");
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        await this.updateComplete;

        this.classNestedList.remove("md-nested-list__row");
    }

    updated(changedProperties) {}
}

customElements.define("md-nested-list-row", MDNestedListRowComponent);

class MDNestedListComponent extends MDElement {
    static get properties() {
        return {
            nested-list: { type: Array },
            rangeSelection: { type: Boolean },
            multiSelection: { type: Boolean },
            singleSelection: { type: Boolean },
            allSelection: { type: Boolean },
        };
    }

    constructor() {
        super();
    }

    /* prettier-ignore */

    renderItem(item) {
        return html`
            <md-nested-list-row>
                <md-nested-list-item
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
                    @click="${this.handleNestedListItemClick}"
                    @onNestedListItemCheckboxNativeInput="${this.handleNestedListItemCheckboxNativeInput}"
                    @onNestedListItemRadioButtonNativeInput="${this.handleNestedListItemRadioButtonNativeInput}"
                    @onNestedListItemSwitchNativeInput="${this.handleNestedListItemSwitchNativeInput}"
                ></md-nested-list-item>
            </md-nested-list-row>
        `;
    }

    /* prettier-ignore */

    render() {
        return this.nested-list?.map(item=>this.renderItem(item));
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        this.classNestedList.add("md-nested-list");
        this.handleNestedListKeydown = this.handleNestedListKeydown.bind(this);
        this.addEventNestedListener("keydown", this.handleNestedListKeydown);
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        await this.updateComplete;

        this.classNestedList.remove("md-nested-list");
        this.removeEventNestedListener("keydown", this.handleNestedListKeydown);
    }

    updated(changedProperties) {}

    handleNestedListItemClick(event) {
        if (event.target.closest(".md-nested-list__checkbox,.md-nested-list__radio-button,.md-nested-list__switch")) {
            return;
        }
        const data = event.currentTarget.data;

        if (this.rangeSelection && event.shiftKey) {
            if (this.lastIndex == undefined) {
                this.lastIndex = 0;
            }
            this.currentIndex = this.nested-list.indexOf(data);
            this.swapIndex = this.lastIndex > this.currentIndex;

            if (this.swapIndex) {
                [this.currentIndex, this.lastIndex] = [this.lastIndex, this.currentIndex];
            }
            this.nested-list.forEach((item, index) => {
                item.selected = index >= this.lastIndex && index <= this.currentIndex;
            });

            if (this.swapIndex) {
                [this.currentIndex, this.lastIndex] = [this.lastIndex, this.currentIndex];
            }
        } else if (this.multiSelection && event.ctrlKey) {
            data.selected = !data.selected;
        } else if (this.singleSelection) {
            this.nested-list.forEach((item) => {
                item.selected = item == data;
            });
            this.lastIndex = this.nested-list.indexOf(data);
        }
        this.requestUpdate();
        this.emit("onNestedListItemClick", event);
    }

    handleNestedListKeydown(event) {
        if (this.allSelection && event.ctrlKey && event.key == "a") {
            event.preventDefault();
            this.nested-list.forEach((item) => {
                item.selected = true;
            });
            this.requestUpdate();
        }
        this.emit("onNestedListKeydown", event);
    }

    handleNestedListItemCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
    }

    handleNestedListItemRadioButtonNativeInput(event) {
        const data = event.currentTarget.data;
        this.nested-list.forEach((item) => {
            item.selected = item == data;
        });
        this.requestUpdate();
    }

    handleNestedListItemSwitchNativeInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
    }

}

customElements.define("md-nested-list", MDNestedListComponent);

export { MDNestedListComponent, MDNestedListRowComponent, MDNestedListItemComponent };
