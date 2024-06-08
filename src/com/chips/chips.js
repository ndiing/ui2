import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";

/**
 *
 * @extends MDElement
 */
class MDChipComponent extends MDElement {
    /**
     *
     * @property {String} [avatar] -
     * @property {String} [icon] -
     * @property {String} [label] -
     * @property {String} [action] -
     * @property {String} [routerLink] -
     * @property {Boolean} [selected] -
     */
    static get properties() {
        return {
            avatar: { type: String },
            icon: { type: String },
            label: { type: String },
            action: { type: String },
            routerLink: { type: String, reflect: true },
            selected: { type: Boolean, reflect: true },
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
            ${this.avatar&&!this.selected?html`<md-image class="md-chip__avatar" .src="${ifDefined(this.avatar)}" .ui="${"rounded"}"></md-image>`:nothing}
            ${this.icon&&!this.selected?html`<md-icon class="md-chip__icon">${this.icon}</md-icon>`:nothing}
            ${this.selected?html`<md-icon class="md-chip__icon">check</md-icon>`:nothing}
            ${this.label?html`<div class="md-chip__label">${this.label}</div>`:nothing}
            ${this.action?html`<md-icon-button @click="${this.handleChipActionClick}" class="md-chip__action" .icon="${ifDefined(this.action)}"></md-icon-button>`:nothing}
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-chip");
        await this.updateComplete;
        this.ripple = new MDRippleModule(this, {});
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-chip");
        await this.updateComplete;
        this.ripple.destroy();
    }

    /**
     *
     * @fires MDChipComponent#onChipSelected
     */
    updated(changedProperties) {
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onChipSelected", this);
            }
        }
    }

    /**
     *
     * @fires MDChipComponent#onChipActionClick
     */
    handleChipActionClick(event) {
        this.emit("onChipActionClick", this);
    }
}

customElements.define("md-chip", MDChipComponent);

/**
 *
 * @extends MDElement
 */
class MDChipsComponent extends MDElement {
    /**
     *
     * @property {String} [ui] - scrollable
     * @property {Array} [list] -
     * @property {Boolean} [rangeSelection] -
     * @property {Boolean} [multiSelection] -
     * @property {Boolean} [singleSelection] -
     * @property {Boolean} [allSelection] -
     */
    static get properties() {
        return {
            ui: { type: String },
            list: { type: Array },
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
            <md-chip
                .data="${item}"
                .avatar="${ifDefined(item.avatar)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .action="${ifDefined(item.action)}"
                .selected="${ifDefined(item.selected)}"
                .routerLink="${ifDefined(item.routerLink)}"
                @click="${this.handleChipClick}"
                @onChipSelected="${this.handleChipSelected}"
            ></md-chip>
        `;
    }

    /**
     *
     */
    render() {
        return this.list?.map((item) => this.renderItem(item));
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-chips");

        this.handleChipsKeydown = this.handleChipsKeydown.bind(this);
        this.addEventListener("keydown", this.handleChipsKeydown);
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-chips");

        this.removeEventListener("keydown", this.handleChipsKeydown);
    }

    /**
     *
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["scrollable"].forEach((ui) => {
                this.classList.remove("md-chips--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-chips--" + ui);
                });
            }
        }
    }

    /**
     *
     * @fires MDChipsComponent#onChipClick
     */
    handleChipClick(event) {
        if (event.target.closest(".md-chip__action")) {
            return;
        }
        const data = event.currentTarget.data;

        if (this.rangeSelection && event.shiftKey) {
            if (this.lastIndex == undefined) {
                this.lastIndex = 0;
            }
            this.currentIndex = this.list.indexOf(data);
            this.swapIndex = this.lastIndex > this.currentIndex;

            if (this.swapIndex) {
                [this.currentIndex, this.lastIndex] = [this.lastIndex, this.currentIndex];
            }
            this.list.forEach((item, index) => {
                item.selected = index >= this.lastIndex && index <= this.currentIndex;
            });

            if (this.swapIndex) {
                [this.currentIndex, this.lastIndex] = [this.lastIndex, this.currentIndex];
            }
        } else if (this.multiSelection && event.ctrlKey) {
            data.selected = !data.selected;
        } else if (this.singleSelection) {
            this.list.forEach((item) => {
                item.selected = item == data;
            });
            this.lastIndex = this.list.indexOf(data);
        }
        this.requestUpdate();

        this.emit("onChipClick", event);
    }

    /**
     *
     * @fires MDChipsComponent#onChipsKeydown
     */
    handleChipsKeydown(event) {
        if (this.allSelection && event.ctrlKey && event.key == "a") {
            event.preventDefault();
            this.list.forEach((item) => {
                item.selected = true;
            });
            this.requestUpdate();
        }
        this.emit("onChipsKeydown", event);
    }

    /**
     *
     */
    handleChipSelected(event) {
        const item = event.detail;

        if (this.ui?.includes("scrollable")) {
            window.requestAnimationFrame(() => {
                item.scrollIntoView({
                    block: "center",
                    inline: "center",
                    behavior: "smooth",
                });
            });
        }
    }
}

customElements.define("md-chips", MDChipsComponent);

export { MDChipsComponent, MDChipComponent };
