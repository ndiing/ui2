import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";
import { choose } from "lit/directives/choose.js";
import { isDefined } from "../functions/functions.js";

/**
 * @extends MDComponent
 * @tagname md-tree-item
 * @fires MDTreeItemComponent#onTreeItemSelected - 
 */
class MDTreeItemComponent extends MDComponent {
    /**
     * @property {String} icon - 
     * @property {String} label - 
     * @property {Number} badge - 
     * @property {Boolean} selected - 
     * @property {String} routerLink - 
     * @property {Number} indent - 
     * @property {Boolean} isNode - 
     * @property {Boolean} expanded - 
     * @property {Boolean} activated - 
     * @property {String} variant - 
     * @property {Boolean} isParent - 
     * @property {Array} nodeActions - 
     * @property {Array} nodeIcons - 
     * @property {Array} leafIcons - 
     */
    static properties = {
        icon: { type: String },
        label: { type: String },
        badge: { type: Number },
        selected: { type: Boolean, reflect: true },
        routerLink: { type: String, reflect: true },
        indent: { type: Number },
        isNode: { type: Boolean },
        expanded: { type: Boolean, reflect: true },
        activated: { type: Boolean, reflect: true },
        variant: { type: String },
        isParent: { type: Boolean },
        nodeActions: { type: Array },
        nodeIcons: { type: Array },
        leafIcons: { type: Array },
    };

    /**
     * 
     */
    get nodeActions_() {
        let icons = [];

        if (this.variant == "plain") {
        } else if (this.variant == "accordion") {
            icons = ["keyboard_arrow_down", "keyboard_arrow_up"];
        } else if (this.variant == "tree") {
            icons = ["keyboard_arrow_right", "keyboard_arrow_down"];
        } else if (this.variant == "level") {
            icons = ["arrow_forward", "arrow_back"];
        }

        if (this.nodeActions) {
            icons = this.nodeActions;
        }

        return icons;
    }

    /**
     * 
     */
    get nodeIcons_() {
        let icons = [];

        if (this.variant == "tree") {
            icons = ["folder", "folder_open"];
        }

        if (this.nodeIcons) {
            icons = this.nodeIcons;
        } else if (this.icon) {
            icons = [this.icon, this.icon];
        }

        return icons;
    }

    /**
     * 
     */
    get leafIcons_() {
        let icons = [];

        if (this.variant == "tree") {
            icons = ["draft", "draft"];
        }

        if (this.leafIcons) {
            icons = this.leafIcons;
        } else if (this.icon) {
            icons = [this.icon, this.icon];
        }

        return icons;
    }

    /**
     * 
     */
    get nodeAction() {
        return this.nodeActions_[~~this.expanded];
    }

    /**
     * 
     */
    get nodeicon() {
        return this.nodeIcons_[~~this.expanded];
    }

    /**
     * 
     */
    get leafIcon() {
        return this.leafIcons_[~~this.selected];
    }

    /**
     * 
     */
    get icon_() {
        return this.isNode ? this.nodeicon : this.leafIcon;
    }

    constructor() {
        super();

        this.ripple = new MDRippleController(this, {
            clipped: true,
        });
    }

    renderPlain() {
        /* prettier-ignore */
        return html`
            ${this.icon_ ? html`<md-icon class="md-tree__icon">${this.icon_}</md-icon>` : nothing}
            ${this.label || isDefined(this.badge) ? html`
                <div class="md-tree__inner">
                    ${this.label ? html`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>` : nothing}
                    ${isDefined(this.badge) ? html`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>` : nothing}
                </div>
            ` : nothing}
            ${this.isNode ? html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>` : nothing}
        `;
    }

    renderAccordion() {
        /* prettier-ignore */
        return html`
            ${this.icon_ ? html`<md-icon class="md-tree__icon">${this.icon_}</md-icon>` : this.indent > 0 ? html`<div class="md-tree__indent"></div>` : nothing}
            ${this.label || isDefined(this.badge) ? html`
                <div class="md-tree__inner">
                    ${this.label ? html`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>` : nothing}
                    ${isDefined(this.badge) ? html`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>` : nothing}
                </div>
            ` : nothing}
            ${this.isNode ? html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>` : nothing}
        `;
    }

    renderTree() {
        /* prettier-ignore */
        return html`
            ${Array.from({ length: this.indent }, () => html`<div class="md-tree__indent"></div>`)}
            ${this.isNode ? html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>` : this.indent > 0 ? html`<div class="md-tree__indent"></div>` : nothing}
            ${this.icon_ ? html`<md-icon class="md-tree__icon">${this.icon_}</md-icon>` : nothing}
            ${this.label || isDefined(this.badge) ? html`
                <div class="md-tree__inner">
                    ${this.label ? html`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>` : nothing}
                    ${isDefined(this.badge) ? html`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>` : nothing}
                </div>
            ` : nothing}
        `;
    }

    renderLevel() {
        /* prettier-ignore */
        return html`
            ${this.isParent ? html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeActions_[1]}"></md-icon-button>` : this.icon_ ? html`<md-icon class="md-tree__icon">${this.icon_}</md-icon>` : this.indent > 0 ? html`<div class="md-tree__indent"></div>` : nothing}
            ${this.label || isDefined(this.badge) ? html`
                <div class="md-tree__inner">
                    ${this.label ? html`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>` : nothing}
                    ${isDefined(this.badge) ? html`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>` : nothing}
                </div>
            ` : nothing}
            ${this.isNode ? html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeActions_[0]}"></md-icon-button>` : nothing}
        `;
    }

    render() {
        /* prettier-ignore */
        return choose(this.variant, [
            ['accordion', () => this.renderAccordion()],
            ['tree', () => this.renderTree()],
            ['level', () => this.renderLevel()],
        ], () => this.renderPlain());
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tree__item");
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onTreeItemSelected", this);
            }
        }
    }
}

customElements.define("md-tree-item", MDTreeItemComponent);

export { MDTreeItemComponent };
