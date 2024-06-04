import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleModule } from "../ripple/ripple";

/**
 *
 * @extends MDElement
 */
class MDButtonComponent extends MDElement {
    /**
     * Properties of the MDButtonComponent.
     * @property {String} [icon] - The icon to display on the button.
     * @property {String} [label] - The label text of the button.
     * @property {String} [ui] - Specifies the UI style of the button. Possible values are 'elevated', 'filled', 'tonal', 'outlined'.
     * @property {String} [type] - The type of the button (e.g., 'submit', 'reset', 'button').
     * @property {Boolean} [selected] - Indicates if the button is selected.
     */
    static get properties() {
        return {
            icon: { type: String },
            label: { type: String },
            ui: { type: String },
            type: { type: String },
            selected: { type: Boolean, reflect: true },
        };
    }

    /**
     *
     */
    constructor() {
        super();
        this.type = "button";
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            <button class="md-button__native" .type="${this.type}">button</button>
            ${this.icon?html`<md-icon class="md-button__icon">${this.icon}</md-icon>`:nothing}
            ${this.label?html`<div class="md-button__label">${this.label}</div>`:nothing}
        `;
    }

    /**
     *
     */
    get buttonNative() {
        return this.querySelector(".md-button__native");
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-button");
        await this.updateComplete;
        this.ripple = new MDRippleModule(this, {
            button: this.buttonNative,
        });
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-button");
        await this.updateComplete;
        this.ripple.destroy();
    }

    /**
     *
     */
    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["elevated", "filled", "tonal", "outlined"].forEach((ui) => {
                this.classList.remove("md-button--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-button--" + ui);
                });
            }
        }
    }
}

customElements.define("md-button", MDButtonComponent);

export { MDButtonComponent };
