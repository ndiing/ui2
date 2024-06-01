import { html } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";
class MDIconButtonComponent extends MDElement {
    static get properties() {
        return {
            icon: { type: String },
            ui: { type: String },
            toggle: { type: Boolean, reflect: true },
            selected: { type: Boolean, reflect: true },
        };
    }

    constructor() {
        super();
        this.icon = Array.from(this.childNodes);
    }

    /* prettier-ignore */

    render() {
        return this.icon;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon-button");
        await this.updateComplete;
        this.ripple = new MDRippleModule(this, {
            containment: false,
            size: (40 / (this.ui ? 40 : 24)) * 100,
            fadeout: true,
        });
        this.handleIconButtonClick = this.handleIconButtonClick.bind(this);
        this.addEventListener("click", this.handleIconButtonClick);
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-icon-button");
        await this.updateComplete;
        this.ripple.destroy();
        this.removeEventListener("click", this.handleIconButtonClick);
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["filled", "tonal", "outlined"].forEach((ui) => {
                this.classList.remove("md-icon-button--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-icon-button--" + ui);
                });
            }
        }
    }

    handleIconButtonClick(event) {
        if (this.toggle) {
            this.selected = !this.selected;
        }
        this.emit("onIconButtonClick", event);
    }
}

customElements.define("md-icon-button", MDIconButtonComponent);

export { MDIconButtonComponent };
