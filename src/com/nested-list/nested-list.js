import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";
import { choose } from "lit/directives/choose.js";

/**
 *
 * @extends MDElement
 */
class MDNestedListItemComponent extends MDElement {
    /**
     *
     * @property {String} [label] -
     * @property {Boolean} [selected] -
     * @property {String} [routerLink] -
     * @property {Number} [indent] -
     * @property {Boolean} [isNode] -
     * @property {String} [ui] -
     * @property {Boolean} [expanded] -
     * @property {Boolean} [activated] -
     * @property {Boolean} [isParent] -
     * @property {Boolean} [hasLevel] -
     */
    static get properties() {
        return {
            label: { type: String },
            selected: { type: Boolean, reflect: true },
            routerLink: { type: String, reflect: true },
            indent: { type: Number },
            isNode: { type: Boolean },
            ui: { type: String },
            expanded: { type: Boolean, reflect: true },
            activated: { type: Boolean, reflect: true },
            isParent: { type: Boolean },
            hasLevel: { type: Boolean },
            nodeIcons: { type: Array },
            leafIcon: { type: String },
        };
    }

    /**
     *
     */
    constructor() {
        super();

        this.nodeIcons = ["folder", "folder_open"];
        this.leafIcon = "draft";
    }

    /**
     *
     */
    renderTree() {
        /* prettier-ignore */
        return html`
            ${Array.from({length:this.indent},() => html`
                <md-icon class="md-nested-list__indent"></md-icon>
            `)}
            ${this.hasLevel?this.isNode?html`<md-icon-button @click="${this.handleNestedListItemActionClick}" class="md-nested-list__action" .icon="${this.expanded?'keyboard_arrow_down':'keyboard_arrow_right'}"></md-icon-button>`:html`<md-icon class="md-nested-list__icon"></md-icon>`:nothing}
            <md-icon class="md-nested-list__icon">${this.isNode?this.nodeIcons[~~this.selected]:this.leafIcon}</md-icon>
            <div class="md-nested-list__label">
                <div class="md-nested-list__label-primary">${this.label}</div>
            </div>
        `;
    }

    /**
     *
     */
    renderLevel() {
        /* prettier-ignore */
        return html`
            ${this.isParent?html`<md-icon-button @click="${this.handleNestedListItemActionClick}" class="md-nested-list__action" .icon="${'arrow_back'}"></md-icon-button>`:html`<md-icon class="md-nested-list__icon">${this.isNode?this.nodeIcons[~~this.selected]:this.leafIcon}</md-icon>`}
            <div class="md-nested-list__label">
                <div class="md-nested-list__label-primary">${this.label}</div>
            </div>
            ${this.isNode?html`<md-icon-button @click="${this.handleNestedListItemActionClick}" class="md-nested-list__action" .icon="${'arrow_forward'}"></md-icon-button>`:html`<md-icon class="md-nested-list__icon"></md-icon>`}
        `;
    }

    /**
     *
     */
    renderAccordion() {
        /* prettier-ignore */
        return html`
            <md-icon class="md-nested-list__icon">${this.isNode?this.nodeIcons[~~this.selected]:this.leafIcon}</md-icon>
            <div class="md-nested-list__label">
                <div class="md-nested-list__label-primary">${this.label}</div>
            </div>
            ${this.isNode?html`<md-icon-button @click="${this.handleNestedListItemActionClick}" class="md-nested-list__action" .icon="${this.expanded?'keyboard_arrow_up':'keyboard_arrow_down'}"></md-icon-button>`:html`<md-icon class="md-nested-list__icon"></md-icon>`}
        `;
    }

    /**
     *
     */
    render() {
        return choose(
            this.ui,
            [
                ["level", () => this.renderLevel()],
                ["accordion", () => this.renderAccordion()],
            ],
            () => this.renderTree(),
        );
    }

    /**
     *
     */
    get labelSecondary() {
        return this.querySelector(".md-nested-list__label-secondary");
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-nested-list__item");
        await this.updateComplete;

        this.ripple = new MDRippleModule(this, {});
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-nested-list__item");
        await this.updateComplete;
        this.ripple.destroy();
    }

    /**
     *
     * @fires MDNestedListItemComponent#onNestedListItemSelected
     */
    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onNestedListItemSelected", this);
            }
        }
    }

    /**
     *
     * @fires MDNestedListItemComponent#onNestedListItemActionClick
     */
    handleNestedListItemActionClick(event) {
        this.emit("onNestedListItemActionClick", event);
    }
}

customElements.define("md-nested-list-item", MDNestedListItemComponent);

/**
 *
 * @extends MDElement
 */
class MDNestedListRowComponent extends MDElement {
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
        await this.updateComplete;

        this.classList.add("md-nested-list__row");
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        await this.updateComplete;

        this.classList.remove("md-nested-list__row");
    }

    updated(changedProperties) {}
}

customElements.define("md-nested-list-row", MDNestedListRowComponent);

/**
 *
 * @extends MDElement
 */
class MDNestedListComponent extends MDElement {
    /**
     *
     * @property {Array} [list] -
     * @property {Boolean} [rangeSelection] -
     * @property {Boolean} [multiSelection] -
     * @property {Boolean} [singleSelection] -
     * @property {Boolean} [allSelection] -
     * @property {String} [ui] - tree,level,accordion
     */
    static get properties() {
        return {
            list: { type: Array },
            rangeSelection: { type: Boolean },
            multiSelection: { type: Boolean },
            singleSelection: { type: Boolean },
            allSelection: { type: Boolean },
            ui: { type: String },
        };
    }

    /**
     *
     */
    constructor() {
        super();

        this.singleSelection = true;
    }

    /**
     *
     */
    renderItem(item) {
        /* prettier-ignore */
        return html`
            <md-nested-list-row>
                <md-nested-list-item
                    .data="${item}"
                    .label="${ifDefined(item.label)}"
                    .selected="${ifDefined(item.selected)}"
                    .routerLink="${ifDefined(item.routerLink)}"
                    .indent="${ifDefined(item.indent)}"
                    .isNode="${ifDefined(item.isNode)}"
                    .ui="${ifDefined(this.ui)}"
                    .expanded="${ifDefined(item.expanded)}"
                    .activated="${ifDefined(item.activated)}"
                    .isParent="${ifDefined(item.isParent)}"
                    .hasLevel="${ifDefined(item.hasLevel)}"
                    .nodeIcons="${ifDefined(item.nodeIcons)}"
                    .leafIcon="${ifDefined(item.leafIcon)}"
                    @click="${this.handleNestedListItemClick}"
                    @onNestedListItemActionClick="${this.handleNestedListItemActionClick}"
                ></md-nested-list-item>
                ${item.children?.length&&item.expanded?html`
                    <div class="md-nested-list">
                        ${item.children.map(item=>this.renderItem(item))}
                    </div>
                `:nothing}
            </md-nested-list-row>
        `;
    }

    /**
     *
     */
    render() {
        let list = this.ui == "level" ? this.lastList(this.list) || this.list : this.list;
        return list?.map((item) => this.renderItem(item));
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;

        this.classList.add("md-nested-list");
        this.handleNestedListKeydown = this.handleNestedListKeydown.bind(this);
        this.addEventListener("keydown", this.handleNestedListKeydown);
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        await this.updateComplete;

        this.classList.remove("md-nested-list");
        this.removeEventListener("keydown", this.handleNestedListKeydown);
    }

    /**
     *
     */
    async updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["tree", "level", "accordion"].forEach((ui) => {
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
            this.createList(this.list);
            this.requestUpdate();
        }
    }

    /**
     *
     */
    createList(list, indent = 0) {
        let expanded = false;
        let activated = false;
        list.forEach((item, index, array) => {
            item.indent = indent;
            item.hasLevel = array.find((item) => item.children?.length) || item.indent > 0;
            if (item.expanded || item.selected) {
                expanded = true;
                item.expanded = true;
            }
            item.activated = false;
            if (item.selected) {
                activated = true;
            }
            if (item.children?.length) {
                if (this.ui == "level") {
                    const { label } = item;
                    item.children.unshift({
                        label,
                        isParent: true,
                        parent: item,
                    });
                }

                item.isNode = true;
                const child = this.createList(item.children, indent + 1);
                if (child.expanded) {
                    expanded = true;
                    item.expanded = true;
                }
                if (child.activated) {
                    activated = true;
                    item.activated = true;
                }
            }
        });
        return { expanded, activated };
    }

    /**
     *
     */
    lastList(list) {
        let last;
        list?.forEach((item) => {
            if (item.expanded) {
                last = item.children;
            }
            if (item.children?.length) {
                const child = this.lastList(item.children);
                if (child) {
                    last = child;
                }
            }
        });
        return last;
    }

    /**
     *
     * @fires MDNestedListComponent#onNestedListItemClick
     */
    handleNestedListItemClick(event) {
        if (event.target.closest(".md-nested-list__action")) {
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
            if (!data.isNode && !data.isParent) {
                this.selectList(this.list, data);
            } else {
                this.expandList(this.list, data.isParent ? data.parent : data);
            }
            this.lastIndex = this.list.indexOf(data);
        }
        this.requestUpdate();
        this.emit("onNestedListItemClick", event);
    }

    /**
     *
     */
    selectList(list, data) {
        let activated = false;
        list.forEach((item) => {
            item.selected = item == data;
            item.activated = false;
            if (item.selected) {
                activated = true;
            }
            if (item.children?.length) {
                if (this.selectList(item.children, data)) {
                    activated = true;
                    item.activated = true;
                }
            }
        });
        return activated;
    }

    /**
     *
     * @fires MDNestedListComponent#onNestedListKeydown
     */
    handleNestedListKeydown(event) {
        if (this.allSelection && event.ctrlKey && event.key == "a") {
            event.preventDefault();
            this.list.forEach((item) => {
                item.selected = true;
            });
            this.requestUpdate();
        }
        this.emit("onNestedListKeydown", event);
    }

    /**
     *
     */
    expandList(list, data) {
        data.expanded = !data.expanded;
    }

    /**
     *
     */
    handleNestedListItemActionClick(event) {
        const data = event.currentTarget.data;
        this.expandList(this.list, data.isParent ? data.parent : data);
        this.requestUpdate();
    }
}

customElements.define("md-nested-list", MDNestedListComponent);

export { MDNestedListComponent, MDNestedListRowComponent, MDNestedListItemComponent };
