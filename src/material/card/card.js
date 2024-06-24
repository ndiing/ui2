import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * Card component that extends MDComponent.
 * Provides card functionality with optional actions, icons, and ripple effect.
 * @extends MDComponent
 */
class MDCardComponent extends MDComponent {
    /**
     * Static properties for MDCardComponent.
     * @type {Object}
     * @property {String} variant - The variant type of the card.
     * @property {Array<Object>} leadingActions - Actions displayed at the leading edge of the card header.
     * @property {String} label - The primary label of the card.
     * @property {String} subLabel - The secondary label of the card.
     * @property {Array<Object>} trailingActions - Actions displayed at the trailing edge of the card header.
     * @property {Array<Object>} actions - Actions displayed in the card footer.
     */
    static properties = {
        variant: { type: String },
        leadingActions: { type: Array },
        label: { type: String },
        subLabel: { type: String },
        trailingActions: { type: Array },
        actions: { type: Array },
    };

    /**
     * Array of valid card variants.
     * @type {Array<String>}
     */
    variants = ["elevated", "filled", "outlined"];

    /**
     * Constructs an instance of MDCardComponent.
     * Binds methods for rendering buttons and icon buttons.
     */
    constructor() {
        super();

        this.body = Array.from(this.childNodes);

        this.renderIconButton = this.renderIconButton.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.renderFab = this.renderFab.bind(this);
    }

    /**
     * Renders an icon button.
     * @param {Object} item - The icon button item configuration.
     * @returns {import("lit").TemplateResult} The rendered icon button template.
     */
    renderIconButton(item) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                class="md-card__icon-button"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                .variant="${ifDefined(item.variant)}"
                .icon="${ifDefined(item.icon)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleCardIconButtonClick}"
            ></md-icon-button>
        `;
    }

    /**
     * Renders an icon button.
     * @param {Object} item - The icon button item configuration.
     * @returns {import("lit").TemplateResult} The rendered icon button template.
     */
    renderIcon(item) {
        /* prettier-ignore */
        return html`
            <md-icon
                class="md-card__icon"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                @click="${this.handleCardIconClick}"
            >${item.icon}</md-icon>
        `;
    }

    /**
     * Renders a button.
     * @param {Object} item - The button item configuration.
     * @returns {import("lit").TemplateResult} The rendered button template.
     */
    renderButton(item) {
        /* prettier-ignore */
        return html`
            <md-button
                class="md-card__button"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleCardButtonClick}"
            ></md-button>
        `;
    }

    /**
     * Renders a button.
     * @param {Object} item - The button item configuration.
     * @returns {import("lit").TemplateResult} The rendered button template.
     */
    renderFab(item) {
        /* prettier-ignore */
        return html`
            <md-fab
                class="md-card__fab"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                .variant="${ifDefined(item.variant)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                @click="${this.handleCardFabClick}"
            ></md-fab>
        `;
    }

    /**
     * Renders an action based on the item component type.
     * @param {Object} item - The action item configuration.
     * @param {Function} defaultAction - The default action render function.
     * @returns {import("lit").TemplateResult} The rendered action template.
     */
    renderAction(item, defaultAction = this.renderButton) {
        /* prettier-ignore */
        return choose(item.component, [
            ['icon-button', () => this.renderIconButton(item)],
            ['icon', () => this.renderIcon(item)],
            ['button', () => this.renderButton(item)],
            ['fab', () => this.renderFab(item)],
            ['spacer', () => html`<div class="md-pane__spacer"></div>`],
        ], () => defaultAction(item));
    }

    /**
     * Renders the card header.
     * @returns {import("lit").TemplateResult} The rendered card header template.
     */
    renderHeader() {
        /* prettier-ignore */
        return this.leadingActions?.length || this.label || this.subLabel || this.trailingActions?.length ? html`
            <div class="md-card__header">
                ${this.leadingActions?.length ? html`
                    <div class="md-card__actions">
                        ${this.leadingActions.map(item => this.renderAction(item, this.renderIconButton))}
                    </div>
                ` : nothing}
                ${this.label || this.subLabel ? html`
                    <div class="md-card__label">
                        ${this.label ? html`<div class="md-card__label-primary">${this.label}</div>` : nothing}
                        ${this.subLabel ? html`<div class="md-card__label-secondary">${this.subLabel}</div>` : nothing}
                    </div>
                ` : nothing}
                ${this.trailingActions?.length ? html`
                    <div class="md-card__actions md-card__actions--end">
                        ${this.trailingActions.map(item => this.renderAction(item, this.renderIconButton))}
                    </div>
                ` : nothing}
            </div>
        ` : nothing;
    }

    /**
     * Renders the card body.
     * @returns {import("lit").TemplateResult} The rendered card body template.
     */
    renderBody() {
        /* prettier-ignore */
        return this.body?.length || this.actions?.length ? html`
            <div class="md-card__body">
                ${this.body?.length ? html`<div class="md-card__inner">${this.body}</div>` : nothing}
                ${this.actions?.length ? html`
                    <div class="md-card__footer">
                        ${this.actions.map(item => this.renderAction(item, this.renderButton))}
                    </div>
                ` : nothing}
            </div>
        ` : nothing;
    }

    /**
     * Renders the card component.
     * @returns {import("lit").TemplateResult} The rendered card template.
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.renderHeader()}
            ${this.renderBody()}
        `;
    }

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-card' class and initializes ripple effect if 'interactive' variant is present.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");

        if (this.variant && this.variant.includes("interactive")) {
            this.ripple = new MDRippleController(this, {
                clipped: true,
            });
        }
    }

    /**
     * Callback invoked when the element's properties are updated.
     * Toggles variant classes based on the 'variant' property.
     * @param {Map<String, any>} changedProperties - The Map of changed properties.
     */
    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`${this.localName}--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }
    }

    /**
     * Handles click event on card icon button.
     * Emits 'onCardIconButtonClick' event.
     * @param {Event} event - The click event object.
     * @fires MDCardComponent#onCardIconButtonClick
     */
    handleCardIconButtonClick(event) {
        this.emit("onCardIconButtonClick", event);
    }

    /**
     * Handles click event on card button.
     * Emits 'onCardButtonClick' event.
     * @param {Event} event - The click event object.
     * @fires MDCardComponent#onCardButtonClick
     */
    handleCardButtonClick(event) {
        this.emit("onCardButtonClick", event);
    }

    /**
     * Handles click event on card button.
     * Emits 'onCardFabClick' event.
     * @param {Event} event - The click event object.
     * @fires MDCardComponent#onCardFabClick
     */
    handleCardFabClick(event) {
        this.emit("onCardFabClick", event);
    }
}

customElements.define("md-card", MDCardComponent);

export { MDCardComponent };
