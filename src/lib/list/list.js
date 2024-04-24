import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { Ripple } from "../ripple/ripple";

class MDListContainer extends MDElement {
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            routerLink: { type: String, reflect: true },
            selected: { type: Boolean, reflect: true },
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            ${this.icon?html`<div class="md-list__icon">${this.icon}</div>`:nothing}
            ${this.label?html`<div class="md-list__label">${this.label}</div>`:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list__container");
        await this.updateComplete;
        this.ripple = new Ripple(this, {});
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-list__container");
        this.ripple.destroy();
    }

    updated(changedProperties) {
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.emit("onListContainerSelected", this);
            }
        }
    }
}
customElements.define("md-list-container", MDListContainer);

class MDList extends MDElement {
    static get properties() {
        return {
            list: { type: Array },
        };
    }

    constructor() {
        super();
        this.list = [];
    }

    render() {
        // prettier-ignore
        return html`
            <ul>
                ${this.list.map(item=>html`
                    <li>
                        <md-list-container
                            .data="${item}"
                            .icon="${item.icon}"
                            .label="${item.label}"
                            .routerLink="${item.routerLink}"
                            .selected="${item.selected}"
                            @click="${this.handleListContainerClick}"
                        ></md-list-container>
                    </li>
                `)}
            </ul>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list");
        this.addEventListener("keydown", this.handleListKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-list");
        this.removeEventListener("keydown", this.handleListKeydown);
    }

    updated(changedProperties) {}

    handleListKeydown(event) {
        if (event.ctrlKey && event.key === "a") {
            event.preventDefault();
            this.list.forEach((item) => {
                item.selected = true;
            });
            this.requestUpdate();
        }
    }

    handleListContainerClick(event) {
        const data = event.currentTarget.data;
        this.currentSelectedIndex = this.list.indexOf(data);

        if (event.shiftKey) {
            this.lastSelectedIndex = this.lastSelectedIndex ?? 0;

            if (this.lastSelectedIndex > this.currentSelectedIndex) {
                [this.lastSelectedIndex, this.currentSelectedIndex] = [this.currentSelectedIndex, this.lastSelectedIndex];
            }
            this.list.forEach((item, index) => {
                item.selected = index >= this.lastSelectedIndex && index <= this.currentSelectedIndex;
            });
        } else if (event.ctrlKey) {
            data.selected = !data.selected;
        } else {
            this.list.forEach((item) => {
                item.selected = item === data;
            });
        }
        this.lastSelectedIndex = this.currentSelectedIndex;
        this.requestUpdate();
    }
}
customElements.define("md-list", MDList);
export { MDList };
