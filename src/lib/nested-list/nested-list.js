import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { Ripple } from "../ripple/ripple";
import { choose } from "lit/directives/choose.js";

function notNull(value) {
    return value !== null && value !== undefined;
}

class MDNestedListItem extends MDElement {
    static get properties() {
        return {
            nodeIcons: { type: Array },
            leafIcon: { type: String },
            label: { type: String },
            expanded: { type: Boolean, reflect: true },
            selected: { type: Boolean, reflect: true },
            routerLink: { type: String, reflect: true },
        };
    }

    get nodeIcons_(){
        if(this.ui=='tree'){
            return this.nodeIcons??['folder','folder_open']
        }
        return this.nodeIcons
    }
    get leafIcon_(){
        if(this.ui=='tree'){
            return this.leafIcon??'draft'
        }
        return this.leafIcon
    }

    constructor() {
        super();

    }

    renderTree() {
        // prettier-ignore
        return html`
            ${Array.from({length:this.indent}, () => html`<md-icon class="md-nested-list__icon"></md-icon>`)}
            ${this.isNode?html`<md-icon-button @click="${this.handleNestedListActionClick}" class="md-nested-list__action" .icon="${this.isNode?this.expanded?'keyboard_arrow_down':'keyboard_arrow_right':''}"></md-icon-button>`:html`<md-icon class="md-nested-list__icon"></md-icon>`}
            <md-icon class="md-nested-list__icon">${this.isNode?this.nodeIcons_[~~this.expanded]:this.leafIcon_}</md-icon>
            <div class="md-nested-list__label"><div class="md-nested-list__label-primary">${this.label}</div></div>
        `;
    }

    renderCard() {
        // prettier-ignore
        return html`
            ${this.isParent?html`<md-icon-button @click="${this.handleNestedListActionClick}" class="md-nested-list__action" .icon="${"arrow_back"}"></md-icon-button>`:this.indent>0||this.nodeIcons_?.length||this.leafIcon_?html`<md-icon class="md-nested-list__icon">${this.isNode?this.nodeIcons_?.[~~this.expanded]:this.leafIcon_}</md-icon>`:nothing}
            <div class="md-nested-list__label"><div class="md-nested-list__label-primary">${this.label}</div></div>
            ${this.isNode?html`<md-icon-button @click="${this.handleNestedListActionClick}" class="md-nested-list__action" .icon="${"arrow_forward"}"></md-icon-button>`:html`<md-icon class="md-nested-list__icon"></md-icon>`}
        `;
    }

    renderAccordion() {
        // prettier-ignore
        return html`
            ${this.indent>0||this.nodeIcons_?.length||this.leafIcon_?html`<md-icon class="md-nested-list__icon">${this.isNode?this.nodeIcons_?.[~~this.expanded]:this.leafIcon_}</md-icon>`:nothing}
            <div class="md-nested-list__label"><div class="md-nested-list__label-primary">${this.label}</div></div>
            ${this.isNode?html`<md-icon-button @click="${this.handleNestedListActionClick}" class="md-nested-list__action" .icon="${this.isNode?this.expanded?'keyboard_arrow_up':'keyboard_arrow_down':''}"></md-icon-button>`:html`<md-icon class="md-nested-list__icon"></md-icon>`}
        `;
    }

    render() {
        // prettier-ignore
        return choose(this.ui,[
            ['tree', () => this.renderTree()],
            ['card', () => this.renderCard()],
        ], () => this.renderAccordion());
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        // await this.updateComplete;

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

            allSelection: { type: Boolean },
            rangeSelection: { type: Boolean },
            multiSelection: { type: Boolean },
            singleSelection: { type: Boolean },

            ui: { type: String },
        };
    }

    constructor() {
        super();

        this.singleSelection = true;
    }

    renderRowItem(item, indent) {
        // prettier-ignore
        return html`
            <md-nested-list-row>
                <md-nested-list-item
                    .data="${item}"
                    .label="${ifDefined(item.label)}"
                    .nodeIcons="${ifDefined(item.nodeIcons)}"
                    .leafIcon="${ifDefined(item.leafIcon)}"
                    .expanded="${ifDefined(item.expanded)}"
                    .selected="${ifDefined(item.selected)}"
                    .routerLink="${ifDefined(item.routerLink)}"

                    .isNode="${!!item.children?.length}"
                    .isParent="${!!item.parent}"
                    .indent="${indent}"
                    .ui="${this.ui}"

                    @click="${this.handleListItemClick}"
                    @onNestedListActionClick="${this.handleNestedListActionClick}"
                ></md-nested-list-item>
                ${item.children?.length&&item.expanded?html`
                    <div class="md-nested-list">
                        ${item.children.map((item) => this.renderRowItem(item,indent+1))}
                    </div>
                `:nothing}
            </md-nested-list-row>
        `;
    }

    render() {
        // prettier-ignore
        return this.list?.map((item) => this.renderRowItem(item,0))
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-nested-list");

        this.handleListKeydown = this.handleListKeydown.bind(this);
        this.addEventListener("keydown", this.handleListKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-nested-list");

        this.removeEventListener("keydown", this.handleListKeydown);
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
                this.classList.remove("md-nested-list--" + ui);
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
            console.log(this.list);
            this.requestUpdate();
        }
    }

    handleListKeydown(event) {
        if (this.allSelection && event.ctrlKey && event.key === "a") {
            event.preventDefault();
            this.list.forEach((item) => {
                item.selected = true;
            });
            this.requestUpdate();
            this.emit("onListKeydown", event);
        }
    }

    handleListItemClick(event) {
        if (event.target.closest(".md-nested-list__action")) {
            return;
        }

        const data = event.currentTarget.data;
        this.currentSelectedIndex = this.list.indexOf(data);

        if (this.rangeSelection && event.shiftKey) {
            this.lastSelectedIndex = this.lastSelectedIndex ?? 0;

            if (this.lastSelectedIndex > this.currentSelectedIndex) {
                [this.lastSelectedIndex, this.currentSelectedIndex] = [this.currentSelectedIndex, this.lastSelectedIndex];
            }
            this.list.forEach((item, index) => {
                item.selected = index >= this.lastSelectedIndex && index <= this.currentSelectedIndex;
            });
        } else if (this.multiSelection && event.ctrlKey) {
            data.selected = !data.selected;
        } else if (this.singleSelection) {
            if (!data.children?.length && !data.parent) {
                this.selectList(this.list, data);
            } else {
                this.expandList(data);
            }
        }
        this.lastSelectedIndex = this.currentSelectedIndex;

        this.requestUpdate();

        this.emit("onListItemClick", event);
    }

    handleNestedListActionClick(event) {
        let data = event.currentTarget.data;

        this.expandList(data);
    }

    expandList(data) {
        if (data.parent) {
            data.parent.expanded = !data.parent.expanded;
        } else {
            data.expanded = !data.expanded;
        }

        this.requestUpdate();
    }

    selectList(list, data) {
        list.forEach((item) => {
            item.selected = item === data;

            if (item.children?.length) {
                this.selectList(item.children, data);
            }
        });
    }

    setList(data) {
        let expanded = false;

        data.forEach((item) => {
            if (item.expanded || item.selected) {
                item.expanded = true;
                expanded = true;
            }

            if (item.children?.length) {
                if (this.ui == "card") {
                    let { children, ...newItem } = item;
                    newItem.parent = item;
                    item.children.unshift(newItem);
                }

                if (this.setList(item.children)) {
                    item.expanded = true;
                    expanded = true;
                }
            }
        });

        return expanded;
    }
}

customElements.define("md-nested-list", MDNestedList);

export { MDNestedList };
