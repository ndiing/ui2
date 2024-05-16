import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { Ripple } from "../ripple/ripple";
import { choose } from "lit/directives/choose.js";

class MDNestedListItem extends MDElement {
    static get properties() {
        return {
            nodeIcons: { type: Array },
            leafIcon: { type: String },
            label: { type: String },
            selected: { type: Boolean, reflect: true },
            routerLink: { type: String, reflect: true },
            indent: { type: Number },
            isNode: { type: Boolean },
            expanded: { type: Boolean, reflect: true },
            activated: { type: Boolean, reflect: true },
            ui: { type: String },
            isParent: { type: Boolean },
            hasNode: { type: Boolean },
        };
    }

    get nodeIcons_() {
        return this.ui == "tree" ? this.nodeIcons ?? ["folder", "folder_open"] : this.nodeIcons;
    }

    get leafIcon_() {
        return this.ui == "tree" ? this.leafIcon ?? "draft" : this.leafIcon;
    }

    constructor() {
        super();
    }

    renderTree() {
        // prettier-ignore
        return html`
            ${Array.from({length:this.indent}, () => html`<md-icon class="md-nested-list__indent"></md-icon>`)}
            ${this.indent>0||this.hasNode?this.isNode?html`<md-icon-button @click="${this.handleNestedListItemActionClick}" class="md-nested-list__action" .icon="${this.expanded?"keyboard_arrow_down":'keyboard_arrow_right'}"></md-icon-button>`:html`<md-icon class="md-nested-list__indent"></md-icon>`:nothing}
            <md-icon class="md-nested-list__icon">${this.isNode?this.nodeIcons_?.[~~this.expanded]:this.leafIcon_}</md-icon>
            <div class="md-nested-list__label"><div class="md-nested-list__label-primary">${this.label}</div></div>
        `;
    }

    renderCard() {
        // prettier-ignore
        return html`
            ${this.isParent?html`<md-icon-button @click="${this.handleNestedListItemActionClick}" class="md-nested-list__action" .icon="${'arrow_back'}"></md-icon-button>`:(this.indent>0||this.nodeIcons_?.[~~this.expanded]||this.leafIcon_)?html`<md-icon class="md-nested-list__icon">${this.isNode?this.nodeIcons_?.[~~this.expanded]:this.leafIcon_}</md-icon>`:nothing}
            <div class="md-nested-list__label"><div class="md-nested-list__label-primary">${this.label}</div></div>
            ${this.isNode?html`<md-icon-button @click="${this.handleNestedListItemActionClick}" class="md-nested-list__action" .icon="${'arrow_forward'}"></md-icon-button>`:html`<md-icon class="md-nested-list__indent"></md-icon>`}
        `;
    }

    renderAccordion() {
        // prettier-ignore
        return html`
            ${(this.indent>0||this.nodeIcons_?.[~~this.expanded]||this.leafIcon_)?html`<md-icon class="md-nested-list__icon">${this.isNode?this.nodeIcons_?.[~~this.expanded]:this.leafIcon_}</md-icon>`:nothing}
            <div class="md-nested-list__label"><div class="md-nested-list__label-primary">${this.label}</div></div>
            ${this.isNode?html`<md-icon-button @click="${this.handleNestedListItemActionClick}" class="md-nested-list__action" .icon="${this.expanded?"keyboard_arrow_up":'keyboard_arrow_down'}"></md-icon-button>`:html`<md-icon class="md-nested-list__indent"></md-icon>`}
        `;
    }

    render() {
        // prettier-ignore
        return choose(this.ui,[
            ['tree', () => this.renderTree()],
            ['card', () => this.renderCard()],
        ],() => this.renderAccordion())
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        await this.updateComplete;

        this.classList.add("md-nested-list__item");

        this.ripple = new Ripple(this, {
            fadeout: true,
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-nested-list__item");

        this.ripple?.destroy();
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onListItemSelected", this);
            }
        }
    }

    handleNestedListItemActionClick(event) {
        this.emit("onNestedListItemActionClick", event);
    }
}

customElements.define("md-nested-list-item", MDNestedListItem);

class MDNestedListRow extends MDElement {
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
        this.classList.add("md-nested-list__row");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-nested-list__row");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {}
}

customElements.define("md-nested-list-row", MDNestedListRow);

class MDNestedList extends MDElement {
    static get properties() {
        return {
            list: { type: Array },
            ui: { type: String },
        };
    }

    constructor() {
        super();
    }

    renderRowItem(item) {
        // prettier-ignore
        return html`
            <md-nested-list-row>
                <md-nested-list-item
                    .data="${item}"
                    .nodeIcons="${ifDefined(item.nodeIcons)}"
                    .leafIcon="${ifDefined(item.leafIcon)}"
                    .label="${ifDefined(item.label)}"
                    .selected="${ifDefined(item.selected)}"
                    .routerLink="${ifDefined(item.routerLink)}"
                    .indent="${item.indent}"
                    .isNode="${!!item.children?.length}"
                    .expanded="${ifDefined(item.expanded)}"
                    .activated="${ifDefined(item.activated)}"
                    .ui="${this.ui}"
                    .isParent="${!!item.parent}"
                    .hasNode="${item.hasNode}"
                    @click="${this.handleListItemClick}"
                    @onNestedListItemActionClick="${this.handleNestedListItemActionClick}"
                ></md-nested-list-item>
            </md-nested-list-row>
            ${item.children?.length&&item.expanded?item.children.map(item=>this.renderRowItem(item)):nothing}
        `;
    }

    render() {
        // prettier-ignore
        return (this.ui=='card'?
            (this.getList(this.list)?.children??this.list):
            this.list
        )?.map(item => this.renderRowItem(item));
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-nested-list");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-nested-list");
    }

    firstUpdated(changedProperties) {}

    async updated(changedProperties) {
        if (changedProperties.has("ui")) {
            [
                //
                "tree",
                "card",
                "accordion",
            ].forEach((ui) => {
                this.classList.add("md-nested-list--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-nested-list--" + ui);
                });
            }
        }
        if (changedProperties.has("list")) {
            await this.updateComplete;

            this.setList(this.list);

            this.requestUpdate();
        }
    }

    handleListItemClick(event) {
        if (event.target.closest(".md-nested-list__action")) {
            return;
        }

        const data = event.currentTarget.data;

        if (!data.children?.length && !data.parent) {
            this.select(this.list, data);
        } else {
            this.expand(this.list, data.parent ? data.parent : data);
        }

        this.requestUpdate();

        this.emit("onListItemClick", event);
    }

    select(list, data) {
        let activated = false;
        list.forEach((item) => {
            item.selected = item === data;
            item.activated = item === data;

            if (item.selected) {
                activated = true;
            }

            if (item.children?.length) {
                let child = this.select(item.children, data);
                if (child) {
                    activated = true;
                    item.activated = true;
                }
            }
        });
        return activated;
    }

    handleNestedListItemActionClick(event) {
        const data = event.currentTarget.data;

        this.expand(this.list, data.parent ? data.parent : data);

        this.requestUpdate();
    }

    expand(list, data) {
        data.expanded = !data.expanded;
    }

    getList(list) {
        let current;
        list.forEach((item) => {
            if (item.expanded) {
                current = item;
            }

            if (item.children?.length) {
                let child = this.getList(item.children);
                if (child) {
                    current = child;
                }
            }
        });
        return current;
    }

    setList(list, indent = 0) {
        let expanded = false;
        let activated = false;
        list.forEach((item, index, array) => {
            item.indent = indent;

            if (item.indent == 0) item.hasNode = !!array.find((item) => item.children?.length);

            if (item.expanded || item.selected) {
                expanded = true;
            }

            if (item.selected) {
                activated = true;
            }

            if (item.children?.length) {
                if (this.ui == "card") {
                    item.expanded = false;
                    let { children, ...newItem } = item;
                    newItem.parent = item;
                    item.children.unshift(newItem);
                }

                let data = this.setList(item.children, indent + 1);
                if (data.expanded) {
                    expanded = true;
                    item.expanded = true;
                }
                if (data.activated) {
                    activated = true;
                    item.activated = true;
                }
            }
        });
        return { expanded, activated };
    }
}

customElements.define("md-nested-list", MDNestedList);

export { MDNestedList };
