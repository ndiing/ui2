import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDListComponent } from "../list/list";
import { MDPopperModule } from "../popper/popper";

class MDMenuComponent extends MDElement {
    static get properties() {
        return {
            leadingActions: { type: Array },
            label: { type: String },
            subLabel: { type: String },
            trailingActions: { type: Array },
            buttons: { type: Array },
            ui: { type: String },
            open: { type: Boolean, reflect: true },
            ...MDListComponent.properties,
        };
    }

    constructor() {
        super();
    }

    /* prettier-ignore */

    render() {
        return html`
            ${this.leadingActions?.length||this.label||this.subLabel||this.trailingActions?.length?html`
                <div class="md-menu__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-menu__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleMenuActionClick}" class="md-menu__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    ${this.label||this.subLabel?html`
                        <div class="md-menu__label">
                            ${this.label?html`<div class="md-menu__label-primary">${this.label}</div>`:nothing}
                            ${this.subLabel?html`<div class="md-menu__label-secondary">${this.subLabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.trailingActions?.length?html`
                        <div class="md-menu__actions">
                            ${this.trailingActions.map(action=>html`
                                <md-icon-button @click="${this.handleMenuActionClick}" class="md-menu__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
            <div class="md-menu__body">
                <div class="md-menu__inner">
                    <md-list 
                        class="md-menu__list"
                        .list="${ifDefined(this.list)}"
                        .rangeSelection="${ifDefined(this.rangeSelection)}"
                        .multiSelection="${ifDefined(this.multiSelection)}"
                        .singleSelection="${ifDefined(this.singleSelection??true)}"
                        .allSelection="${ifDefined(this.allSelection)}"
                    ></md-list>
                </div>
                ${this.buttons?.length?html`
                    <div class="md-menu__footer">
                        ${this.buttons.map(button=>html`
                            <md-button @click="${this.handleMenuButtonClick}" class="md-menu__button" .label="${ifDefined(button?.label??button)}" .icon="${ifDefined(button?.icon)}" .ui="${ifDefined(button?.ui)}"></md-button>
                        `)}
                    </div>
                `:nothing}
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-menu");
        await this.updateComplete;
        this.scrim = document.createElement("div");
        this.scrim.classList.add("md-menu__scrim");
        this.handleMenuScrimClick = this.handleMenuScrimClick.bind(this);
        this.scrim.addEventListener("click", this.handleMenuScrimClick);
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-menu");
        await this.updateComplete;
        this.scrim.removeEventListener("click", this.handleMenuScrimClick);
        this.scrim.remove();
    }

    updated(changedProperties) {
        if (changedProperties.has("open")) {
            if (this.open) {
                this.scrim.setAttribute("open", "");
            } else {
                this.scrim.removeAttribute("open", "");
            }
        }
    }

    show(button, options = {}) {
        this.open = true;
        window.requestAnimationFrame(() => {
            this.popper = new MDPopperModule(this, {
                button,
                placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top", "center"],
                shift: true,
                ...options,
            });
            this.popper.set();
        });
    }

    close() {
        this.open = false;
        this.popper.destroy();
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleMenuActionClick(event) {
        this.emit("onMenuActionClick", event);
    }

    handleMenuButtonClick(event) {
        this.emit("onMenuButtonClick", event);
    }

    handleMenuScrimClick(event) {
        this.close();

        this.emit("onMenuScrimClick", event);
    }
}

customElements.define("md-menu", MDMenuComponent);

export { MDMenuComponent };
