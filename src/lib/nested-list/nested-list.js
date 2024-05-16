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
            indent: { type: Number },
            isNode: { type: Boolean },
            expanded: { type: Boolean, reflect: true },
            label: { type: String },
            selected: { type: Boolean, reflect: true },
            activated: { type: Boolean, reflect: true },
            routerLink: { type: String, reflect: true },
            ui: { type: String },
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
            ${this.hasNode||this.indent>0?this.isNode?html`<md-icon-button @click="${this.handleNestedListActionClick}" class="md-nested-list__action" .icon="${this.expanded?'keyboard_arrow_down':'keyboard_arrow_right'}"></md-icon-button>`:html`<md-icon class="md-nested-list__indent"></md-icon>`:nothing}
            <md-icon class="md-nested-list__icon">${this.isNode?this.nodeIcons_?.[~~this.expanded]:this.leafIcon_}</md-icon>
            <div class="md-nested-list__label"><div class="md-nested-list__label-primary">${this.label}</div></div>
        `;
    }

    renderCard() {
        // prettier-ignore
        return html`
            ${this.isParent?html`<md-icon-button @click="${this.handleNestedListActionClick}" class="md-nested-list__action" .icon="${'arrow_back'}"></md-icon-button>`:this.indent>0||(this.nodeIcons_?.[~~this.expanded]||this.leafIcon_)?html`<md-icon class="md-nested-list__icon">${this.isNode?this.nodeIcons_?.[~~this.expanded]:this.leafIcon_}</md-icon>`:nothing}
            <div class="md-nested-list__label"><div class="md-nested-list__label-primary">${this.label}</div></div>
            ${this.isNode?html`<md-icon-button @click="${this.handleNestedListActionClick}" class="md-nested-list__action" .icon="${'arrow_forward'}"></md-icon-button>`:html`<md-icon class="md-nested-list__indent"></md-icon>`}
        `;
    }

    renderAccordion() {
        // prettier-ignore
        return html`
            ${this.indent>0||(this.nodeIcons_?.[~~this.expanded]||this.leafIcon_)?html`<md-icon class="md-nested-list__icon">${this.isNode?this.nodeIcons_?.[~~this.expanded]:this.leafIcon_}</md-icon>`:nothing}
            <div class="md-nested-list__label"><div class="md-nested-list__label-primary">${this.label}</div></div>
            ${this.isNode?html`<md-icon-button @click="${this.handleNestedListActionClick}" class="md-nested-list__action" .icon="${this.expanded?'keyboard_arrow_up':'keyboard_arrow_down'}"></md-icon-button>`:html`<md-icon class="md-nested-list__indent"></md-icon>`}
        `;
    }

    render() {
        // prettier-ignore
        return choose(this.ui,[
            ['tree', () => this.renderTree()],
            ['card', () => this.renderCard()],
        ], () => this.renderAccordion())
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

    handleNestedListActionClick(event) {
        this.emit("onNestedListActionClick", event);
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

        this.ui = "tree";
    }

    renderRowItem(item) {
        // prettier-ignore
        return html`
            <md-nested-list-row>
                <md-nested-list-item
                    .data="${item}"
                    .nodeIcons="${ifDefined(item.nodeIcons)}"
                    .leafIcon="${ifDefined(item.leafIcon)}"
                    .indent="${item.indent}"
                    .isNode="${!!item.children?.length}"
                    .expanded="${ifDefined(item.expanded)}"
                    .label="${ifDefined(item.label)}"
                    .selected="${ifDefined(item.selected)}"
                    .routerLink="${ifDefined(item.routerLink)}"
                    .ui="${this.ui}"
                    .isParent="${!!item.parent}"
                    .hasNode="${!!item.hasNode}"
                    .activated="${item.activated}"
                    @click="${this.handleListItemClick}"
                    @onNestedListActionClick="${this.handleNestedListActionClick}"
                ></md-nested-list-item>
            </md-nested-list-row>
            ${!!item.children?.length&&item.expanded?item.children?.map(item => this.renderRowItem(item,)):nothing}
        `;
    }

    render() {
        // prettier-ignore
        return (this.ui == "card"?(this.getList(this.list)?.children ?? this.list):this.list)
        ?.map((item) => this.renderRowItem(item));
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
        await this.updateComplete;

        if (changedProperties.has("ui")) {
            [
                //
                "tree",
                "card",
                "accordion",
            ].forEach((ui) => {
                this.classList.remove("md-nested-list--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-nested-list--" + ui);
                });
            }
        }

        if (changedProperties.has("list")) {
            this.setList(this.list);
            this.requestUpdate();
            console.log(this.list);
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

    handleNestedListActionClick(event) {
        let data = event.currentTarget.data;

        // data.expanded = !data.expanded;
        this.expand(this.list, data.parent ? data.parent : data);

        this.requestUpdate();
    }

    getList(list) {
        let last = null;
        list.forEach((item) => {
            if (item.expanded) {
                last = item;
            }

            if (item.children?.length) {
                let last2 = this.getList(item.children);
                if (last2) {
                    last = last2;
                }
            }
        });
        return last;
    }

    expand(list, data) {
        data.expanded = !data.expanded;
    }

    select(list, data) {
        let activated=false
        list.forEach((item) => {
            item.selected = item === data;
            item.activated = item === data;

            if(item.selected){
                activated=true
            }

            if (item.children?.length) {
                if(this.select(item.children, data)){
                    activated=true
                    item.activated=true
                }
            }
        });
        return activated
    }

    setList(list, indent = 0) {
        let expanded = false;
        list.forEach((item, index, array) => {
            item.indent = indent;

            item.hasNode = array.find((item) => item.children?.length);

            if (item.expanded || item.selected) {
                expanded = true;
            }

            if (item.children?.length) {
                if (this.ui == "card") {
                    item.expanded = false;
                    let { children, expanded, selected, ...newItem } = item;
                    newItem.parent = item;
                    item.children.unshift(newItem);
                }

                if (this.setList(item.children, indent + 1)) {
                    expanded = true;
                    item.expanded = true;
                    item.activated = true;
                }
            }
        });
        return expanded;
    }
}

customElements.define("md-nested-list", MDNestedList);

export { MDNestedList };
