import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";
import { choose } from "lit/directives/choose.js";
import { isDefined } from "../functions/functions.js";

class MDTreeItemComponent extends MDComponent {
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

    get nodeAction() {
        return this.nodeActions_[~~this.expanded];
    }

    get nodeicon() {
        return this.nodeIcons_[~~this.expanded];
    }

    get leafIcon() {
        return this.leafIcons_[~~this.selected];
    }

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
            ${this.icon_?html`<md-icon class="md-tree__icon">${this.icon_}</md-icon>`:nothing}
            ${this.label||isDefined(this.badge)?html`
                <div class="md-tree__inner">
                    ${this.label?html`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>`:nothing}
                    ${isDefined(this.badge)?html`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>`:nothing}
                </div>
            `:nothing}
            ${this.isNode?html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>`:nothing}
        `
    }

    renderAccordion() {
        /* prettier-ignore */
        return html`
            ${this.icon_?html`<md-icon class="md-tree__icon">${this.icon_}</md-icon>`:this.indent>0?html`<div class="md-tree__indent"></div>`:nothing}
            ${this.label||isDefined(this.badge)?html`
                <div class="md-tree__inner">
                    ${this.label?html`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>`:nothing}
                    ${isDefined(this.badge)?html`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>`:nothing}
                </div>
            `:nothing}
            ${this.isNode?html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>`:nothing}
        `
    }

    renderTree() {
        /* prettier-ignore */
        return html`
            ${Array.from({length:this.indent}, () => html`<div class="md-tree__indent"></div>`)}
            ${this.isNode?html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>`:this.indent>0?html`<div class="md-tree__indent"></div>`:nothing}
            ${this.icon_?html`<md-icon class="md-tree__icon">${this.icon_}</md-icon>`:nothing}
            ${this.label||isDefined(this.badge)?html`
                <div class="md-tree__inner">
                    ${this.label?html`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>`:nothing}
                    ${isDefined(this.badge)?html`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>`:nothing}
                </div>
            `:nothing}
        `
    }

    renderLevel() {
        /* prettier-ignore */
        return html`
            ${this.isParent?html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeActions_[1]}"></md-icon-button>`:this.icon_?html`<md-icon class="md-tree__icon">${this.icon_}</md-icon>`:this.indent>0?html`<div class="md-tree__indent"></div>`:nothing}
            ${this.label||isDefined(this.badge)?html`
                <div class="md-tree__inner">
                    ${this.label?html`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>`:nothing}
                    ${isDefined(this.badge)?html`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>`:nothing}
                </div>
            `:nothing}
            ${this.isNode?html`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeActions_[0]}"></md-icon-button>`:nothing}
            
        `
    }

    render() {
        /* prettier-ignore */
        return choose(this.variant,[
            ['accordion', () => this.renderAccordion()],
            ['tree', () => this.renderTree()],
            ['level', () => this.renderLevel()],
        ],() => this.renderPlain())
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

class MDTreeComponent extends MDComponent {
    static properties = {
        list: { type: Array },
        variant: { type: String },
    };

    variants = ["plain", "accordion", "tree", "level"];

    constructor() {
        super();

        this.variant = "tree";
    }

    renderTreeItem(item) {
        /* prettier-ignore */
        return html`
            <md-tree-item
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .badge="${ifDefined(item.badge)}"
                .selected="${ifDefined(item.selected)}"
                .routerLink="${ifDefined(item.routerLink)}"
                .indent="${ifDefined(item.indent)}"
                .isNode="${ifDefined(item.isNode)}"
                .expanded="${ifDefined(item.expanded)}"
                .activated="${ifDefined(item.activated)}"
                .variant="${ifDefined(this.variant)}"
                .isParent="${ifDefined(item.isParent)}"
                .nodeActions="${ifDefined(item.nodeActions)}"
                .nodeIcons="${ifDefined(item.nodeIcons)}"
                .leafIcons="${ifDefined(item.leafIcons)}"
                @click="${this.handleTreeItemClick}"
                @onTreeItemSelected="${this.handleTreeItemSelected}"
            ></md-tree-item>
            ${item.expanded&&item.children?.length?item.children.map(item=>this.renderTreeItem(item)):nothing}
        `
    }

    render() {
        /* prettier-ignore */
        return (this.variant=='level'?this.getList(this.list)||this.list:this.list)?.map(item=>this.renderTreeItem(item))
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-tree");
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`${this.localName}--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }

        if (changedProperties.has("list")) {
            await this.updateComplete;
            this.setList(this.list);
            this.requestUpdate();
        }
    }

    getList(list) {
        let children;

        for (let i = 0; i < list.length; i++) {
            let item = list[i];

            if (item.expanded) {
                children = item.children;
            }

            if (item.children?.length) {
                const children_ = this.getList(item.children);

                if (children_) {
                    children = children_;
                }
            }
        }

        return children;
    }

    setList(list, indent = 0) {
        let expanded;
        let activated;

        for (let index = 0; index < list.length; index++) {
            let item = list[index];
            item.indent = indent;

            if (item.expanded || item.selected) {
                expanded = true;
            }

            if (item.selected) {
                activated = true;
            }

            if (item.children?.length) {
                if (this.variant == "level") {
                    item.children.unshift({
                        label: item.label,
                        parent: item,
                        isParent: true,
                    });
                }

                item.isNode = true;

                const { expanded: isExpanded, activated: isActivated } = this.setList(item.children, indent + 1);

                if (isExpanded) {
                    expanded = true;
                    item.expanded = true;
                }

                if (isActivated) {
                    activated = true;
                    item.activated = true;
                }
            }
        }

        return { expanded, activated };
    }

    select(list, data) {
        let activated;

        for (let i = 0; i < list.length; i++) {
            let item = list[i];
            item.selected = item == data;
            item.activated = false;

            if (item.selected) {
                activated = true;
            }

            if (item.children?.length) {
                if (this.select(item.children, data)) {
                    activated = true;
                    item.activated = true;
                }
            }
        }

        return activated;
    }

    expand(list, data) {
        data.expanded = !data.expanded;
    }

    handleTreeItemClick(event) {
        const data = event.currentTarget.data;

        if (data.isNode || data.isParent) {
            event.preventDefault();

            this.expand(this.list, data.isParent ? data.parent : data);
        } else {
            this.select(this.list, data);
        }

        this.requestUpdate();

        this.emit("onTreeItemClick", event);
    }

    handleTreeItemSelected() {}
}

customElements.define("md-tree", MDTreeComponent);

export { MDTreeComponent };
