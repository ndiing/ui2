import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";
import { MDGestureController } from "../gesture/gesture.js";

class MDListItemComponent extends MDComponent {
    static properties = {
        avatar: { type: String },
        thumbnail: { type: String },
        video: { type: String },

        icon: { type: String },

        label: { type: String },
        subLabel: { type: String },

        badge: { type: Number },

        text: { type: String },

        leadingCheckbox: { type: Boolean },
        leadingRadioButton: { type: Boolean },
        leadingSwitch: { type: Boolean },

        trailingCheckbox: { type: Boolean },
        trailingRadioButton: { type: Boolean },
        trailingSwitch: { type: Boolean },

        selected: { type: Boolean, reflect: true },
        routerLink: { type: String, reflect: true },
    };

    constructor() {
        super();

        this.ripple = new MDRippleController(this, {
            clipped: true,
        });

        this.gesture = new MDGestureController(this, {
            drag: [],
            dragAfterLongPress: true,
            resize: [],
            resizeAfterLongPress: true,
            selection: true,
            selectionAfterLongPress: true,
        });
    }

    renderCheckbox() {
        /* prettier-ignore */
        return html`<md-checkbox 
            class="md-list__checkbox"
            .checked="${this.selected}"
        ></md-checkbox>`
    }

    renderRadioButton() {
        /* prettier-ignore */
        return html`<md-radio-button 
            class="md-list__radio-button"
            .checked="${this.selected}"
        ></md-radio-button>`
    }

    renderSwitch() {
        /* prettier-ignore */
        return html`<md-switch 
            class="md-list__switch"
            .checked="${this.selected}"
        ></md-switch>`
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.leadingCheckbox?this.renderCheckbox():nothing}
            ${this.leadingRadioButton?this.renderRadioButton():nothing}
            ${this.leadingSwitch?this.renderSwitch():nothing}

            ${this.avatar?html`<md-image class="md-list__avatar" .src="${this.avatar}" .alt="${"avatar"}" .variant="${"rounded"}"></md-image>`:nothing}
            ${this.thumbnail?html`<md-image class="md-list__thumbnail" .src="${this.thumbnail}" .alt="${"thumbnail"}"></md-image>`:nothing}
            ${this.video?html`<md-image class="md-list__video" .src="${this.video}" .alt="${"video"}" .ratio="${"3/2"}"></md-image>`:nothing}

            ${this.icon?html`<md-icon class="md-list__icon">${this.icon}</md-icon>`:nothing}

            ${this.label||this.subLabel||this.badge?html`
                    <div class="md-list__inner">
                        ${this.label||this.subLabel?html`
                                <div class="md-list__label">
                                    ${this.label?html`<div class="md-list__label-primary">${this.label}</div>`:nothing}
                                    ${this.subLabel?html`<div class="md-list__label-secondary">${this.subLabel}</div>`:nothing}
                                </div>
                        `:nothing}
                        ${this.badge?html`<md-badge class="md-list__badge" .label="${this.badge}"></md-badge>`:nothing}
                    </div>
            `:nothing}

            ${this.text?html`<div class="md-list__text">${this.text}</div>`:nothing}

            ${this.trailingCheckbox?this.renderCheckbox():nothing}
            ${this.trailingRadioButton?this.renderRadioButton():nothing}
            ${this.trailingSwitch?this.renderSwitch():nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list__item");
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("subLabel")) {
            await this.requestUpdate;
            const secondary = this.querySelector(".md-list__label-secondary");
            const style = window.getComputedStyle(secondary);
            const lineHeight = parseFloat(style.getPropertyValue("line-height"));
            if (secondary.scrollHeight > lineHeight) {
                this.classList.add("md-list__item--three");
            } else {
                this.classList.add("md-list__item--two");
            }
        }
    }
}

customElements.define("md-list-item", MDListItemComponent);

class MDListComponent extends MDComponent {
    static properties = {
        list: { type: Array },

        selection: { type: Boolean },
        rangeSelection: { type: Boolean },
        multiSelection: { type: Boolean },
        singleSelection: { type: Boolean },
        allSelection: { type: Boolean },
    };

    constructor() {
        super();
    }

    renderListItem(item) {
        /* prettier-ignore */
        return html`
            <md-list-item
                .data="${item}"
                .avatar="${ifDefined(item.avatar)}"
                .thumbnail="${ifDefined(item.thumbnail)}"
                .video="${ifDefined(item.video)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .subLabel="${ifDefined(item.subLabel)}"
                .badge="${ifDefined(item.badge)}"
                .text="${ifDefined(item.text)}"
                .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                .selected="${ifDefined(item.selected)}"
                .routerLink="${ifDefined(item.routerLink)}"
                @click="${this.handleListItemClick}"
                @onCheckboxNativeInput="${this.handleListItemCheckboxNativeInput}"
                @onRadioButtonNativeInput="${this.handleListItemRadioButtonNativeInput}"
                @onSwitchNativeInput="${this.handleListItemSwitchNativeInput}"
                @onSelectionStart="${this.handleListItemSelectionStart}"
                @onSelection="${this.handleListItemSelection}"
                @onSelectionEnd="${this.handleListItemSelectionEnd}"
            ></md-list-item>
        `
    }

    render() {
        /* prettier-ignore */
        return this.list?.map(item=>this.renderListItem(item))
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");

        this.on("keydown", this.handleListKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("keydown", this.handleListKeydown);
    }

    select(data) {
        for (let i = 0; i < this.list.length; i++) {
            let item = this.list[i];
            item.selected = item === data;
        }
        this.endIndex = this.list.indexOf(data);
    }

    multiSelect(data) {
        data.selected = !data.selected;

        if (this.selectionMode && this.list.findIndex((item) => item.selected) == -1) {
            this.selectionMode = false;
        }
    }

    selectRange(data) {
        this.endIndex = this.endIndex || 0;
        this.startIndex = this.list.indexOf(data);
        this.swapIndex = this.startIndex > this.endIndex;

        if (this.swapIndex) {
            [this.endIndex, this.startIndex] = [this.startIndex, this.endIndex];
        }

        for (let i = 0; i < this.list.length; i++) {
            let item = this.list[i];
            item.selected = i >= this.startIndex && i <= this.endIndex;
        }

        if (this.swapIndex) {
            [this.startIndex, this.endIndex] = [this.endIndex, this.startIndex];
        }
    }

    selectAll() {
        for (let i = 0; i < this.list.length; i++) {
            let item = this.list[i];
            item.selected = true;
        }
    }

    handleListItemClick(event) {
        if (event.target.closest(".md-list__checkbox," + ".md-list__radio-button," + ".md-list__switch")) {
            return;
        }

        const data = event.currentTarget.data;

        if (this.rangeSelection && event.shiftKey) {
            this.selectRange(data);
        } else if ((this.multiSelection && event.ctrlKey) || this.selectionMode) {
            this.multiSelect(data);
        } else if (this.singleSelection) {
            this.select(data);
        }

        this.requestUpdate();

        this.emit("onListItemClick", event);
    }

    handleListKeydown(event) {
        if (this.allSelection && event.ctrlKey && event.key == "a") {
            this.selectAll();

            this.requestUpdate();
        }

        this.emit("handleListKeydown", event);
    }

    handleListItemSelectionStart(event) {
        if (!this.selection) {
            return;
        }
        const data = event.currentTarget.data;

        this.select(data);

        this.requestUpdate();

        this.emit("onListItemSelectionStart", event);
    }

    handleListItemSelection(event) {
        if (!this.selection) {
            return;
        }
        const data = event.detail.target.closest(".md-list__item")?.data;
        if (data && this.data !== data) {
            this.data = data;
            this.selectRange(data);
            this.requestUpdate();
        }

        this.emit("onListItemSelection", event);
    }

    async handleListItemSelectionEnd(event) {
        if (!this.selection) {
            return;
        }
        const data = event.currentTarget.data;

        window.requestAnimationFrame(() => {
            this.selectionMode = true;
        });

        this.emit("onListItemSelectionEnd", event);
    }

    handleListItemCheckboxNativeInput(event) {
        const data = event.currentTarget.data;

        this.multiSelect(data);
        this.requestUpdate();

        this.emit("onListItemCheckboxNativeInput", event);
    }

    handleListItemRadioButtonNativeInput(event) {
        const data = event.currentTarget.data;

        this.select(data);
        this.requestUpdate();

        this.emit("onListItemRadioButtonNativeInput", event);
    }

    handleListItemSwitchNativeInput(event) {
        const data = event.currentTarget.data;

        this.multiSelect(data);
        this.requestUpdate();

        this.emit("onListItemSwitchNativeInput", event);
    }
}

customElements.define("md-list", MDListComponent);

export { MDListComponent };
