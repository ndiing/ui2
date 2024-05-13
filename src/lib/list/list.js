import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { Ripple } from "../ripple/ripple";

function notNull(value){
    return value!==null&&value!==undefined
}

class MDListItem extends MDElement {
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

            badge: { type: Number },

            selected: { type: Boolean, reflect: true },

            routerLink: { type: String, reflect: true },
        };
    }

    get labelSecondaryElement() {
        return this.querySelector(".md-list__label-secondary");
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            ${this.avatar?html`<md-image class="md-list__avatar" .src="${this.avatar}" .ratio="${"1/1"}" .rounded="${true}"></md-image>`:nothing}
            ${this.image?html`<md-image class="md-list__image" .src="${this.image}" .ratio="${"1/1"}" .rounded="${false}"></md-image>`:nothing}
            ${this.video?html`<md-image class="md-list__video" .src="${this.video}" .ratio="${"4/3"}" .rounded="${false}"></md-image>`:nothing}

            ${this.icon?html`<md-icon class="md-list__icon">${this.icon}</md-icon>`:nothing}

            ${this.leadingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleListItemCheckboxInput}" .checked="${this.selected}" class="md-list__checkbox"></md-checkbox>`:nothing}
            ${this.leadingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleListItemRadioButtonInput}" .checked="${this.selected}" class="md-list__radio-button"></md-radio-button>`:nothing}
            ${this.leadingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleListItemSwitchInput}" .checked="${this.selected}" class="md-list__switch"></md-switch>`:nothing}

            ${this.label||this.labelSecondary?html`
                <div class="md-list__label">
                    ${this.label?html`<div class="md-list__label-primary">${this.label}</div>`:nothing}
                    ${this.labelSecondary?html`<div class="md-list__label-secondary">${this.labelSecondary}</div>`:nothing}
                </div>
            `:nothing}
            ${this.text?html`<div class="md-list__text">${this.text}</div>`:nothing}

            ${this.trailingCheckbox?html`<md-checkbox @onCheckboxNativeInput="${this.handleListItemCheckboxInput}" .checked="${this.selected}" class="md-list__checkbox"></md-checkbox>`:nothing}
            ${this.trailingRadioButton?html`<md-radio-button @onRadioButtonNativeInput="${this.handleListItemRadioButtonInput}" .checked="${this.selected}" class="md-list__radio-button"></md-radio-button>`:nothing}
            ${this.trailingSwitch?html`<md-switch @onSwitchNativeInput="${this.handleListItemSwitchInput}" .checked="${this.selected}" class="md-list__switch"></md-switch>`:nothing}

            ${notNull(this.badge)?html`<md-badge class="md-list__badge" .label="${this.badge}"></md-badge>`:nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list__item");

        this.ripple = new Ripple(this, {
            fadeout:true
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-list__item");

        this.ripple.destroy();
    }

    firstUpdated(changedProperties) {
        if (changedProperties.has("labelSecondary")) {
            if (this.labelSecondary) {
                const lineHeight = parseFloat(window.getComputedStyle(this.labelSecondaryElement).getPropertyValue("line-height"));

                if (this.labelSecondaryElement.clientHeight > lineHeight) {
                    this.classList.add("md-list__item--three-line");
                } else {
                    this.classList.add("md-list__item--two-line");
                }
            } else {
                this.classList.add("md-list__item--two-line");
                this.classList.add("md-list__item--three-line");
            }
        }
    }

    updated(changedProperties) {
        if(changedProperties.has('selected')){
            if(this.selected){
                this.emit('onListItemSelected',this)
            }
        }
    }

    handleListItemCheckboxInput(event) {
        this.emit("onListItemCheckboxInput", event);
    }
    handleListItemRadioButtonInput(event) {
        this.emit("onListItemRadioButtonInput", event);
    }
    handleListItemSwitchInput(event) {
        this.emit("onListItemSwitchInput", event);
    }
}

customElements.define("md-list-item", MDListItem);

class MDListRow extends MDElement {
    static get properties() {
        return {};
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html``;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list__row");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-list__row");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}
}

customElements.define("md-list-row", MDListRow);

class MDList extends MDElement {
    static get properties() {
        return {
            list: { type: Array },

            allSelection: { type: Boolean },
            rangeSelection: { type: Boolean },
            multiSelection: { type: Boolean },
            singleSelection: { type: Boolean },
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            ${this.list.map(item => html`
                <md-list-row>
                    <md-list-item
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
                        .badge="${ifDefined(item.badge)}"
                        .selected="${ifDefined(item.selected)}"
                        .routerLink="${ifDefined(item.routerLink)}"
                        @click="${this.handleListItemClick}"
                        @onListItemCheckboxInput="${this.handleListCheckboxInput}"
                        @onListItemRadioButtonInput="${this.handleListRadioButtonInput}"
                        @onListItemSwitchInput="${this.handleListSwitchInput}"
                    ></md-list-item>
                </md-list-row>
            `)}
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list");

        this.handleListKeydown = this.handleListKeydown.bind(this);
        this.addEventListener("keydown", this.handleListKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-list");

        this.removeEventListener("keydown", this.handleListKeydown);
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}

    handleListKeydown(event) {
        if (this.allSelection&&event.ctrlKey && event.key === "a") {
            event.preventDefault();
            this.list.forEach((item) => {
                item.selected = true;
            });
            this.requestUpdate();
            this.emit("onListKeydown", event);
        }
    }

    handleListItemClick(event) {
        if (event.target.closest(".md-list__checkbox,.md-list__radio-button,.md-list__switch")) {
            return;
        }

        const data = event.currentTarget.data;
        this.currentSelectedIndex = this.list.indexOf(data);

        if (this.rangeSelection&&event.shiftKey) {
            this.lastSelectedIndex = this.lastSelectedIndex ?? 0;

            if (this.lastSelectedIndex > this.currentSelectedIndex) {
                [this.lastSelectedIndex, this.currentSelectedIndex] = [this.currentSelectedIndex, this.lastSelectedIndex];
            }
            this.list.forEach((item, index) => {
                item.selected = index >= this.lastSelectedIndex && index <= this.currentSelectedIndex;
            });
        } else if (this.multiSelection&&event.ctrlKey) {
            data.selected = !data.selected;
        } else if (this.singleSelection) {
            this.list.forEach((item) => {
                item.selected = item === data;
            });
        }
        this.lastSelectedIndex = this.currentSelectedIndex;

        this.requestUpdate();

        this.emit("onListItemClick", event);
    }

    handleListCheckboxInput(event) {
        const data = event.currentTarget.data;

        data.selected = !data.selected;

        this.requestUpdate();

        this.emit("onListCheckboxInput", event);
    }
    handleListRadioButtonInput(event) {
        const data = event.currentTarget.data;

        this.list.forEach((item) => {
            item.selected = item === data;
        });

        this.requestUpdate();

        this.emit("onListRadioButtonInput", event);
    }
    handleListSwitchInput(event) {
        const data = event.currentTarget.data;

        data.selected = !data.selected;

        this.requestUpdate();

        this.emit("onListSwitchInput", event);
    }
}

customElements.define("md-list", MDList);

export { MDList };
