import { html, nothing } from "lit";
import { MDElement } from "../element/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";
import { MDGestureController } from "../gesture/gesture.js";
import { isDefined } from "../helper/helper.js";

/**
 * Custom element representing a list item.
 * Extends MDElement for base element functionalities.
 */
class MDListItemElement extends MDElement {
    /**
     * Defines the properties of the MDListItemElement.
     * Inherits properties from MDElement and adds additional ones specific to list items.
     * @type {Object}
     * @property {string} avatar - URL of the avatar image.
     * @property {string} image - URL of the main image.
     * @property {string} video - URL of the video.
     * @property {string} icon - Name or path of the icon to display.
     * @property {string} label - Primary label text.
     * @property {string} subLabel - Secondary label text.
     * @property {number} badge - Numeric badge value.
     * @property {string} text - Additional text content.
     * @property {boolean} leadingCheckbox - Indicates if the item has a leading checkbox.
     * @property {boolean} leadingRadioButton - Indicates if the item has a leading radio button.
     * @property {boolean} leadingSwitch - Indicates if the item has a leading switch.
     * @property {boolean} trailingCheckbox - Indicates if the item has a trailing checkbox.
     * @property {boolean} trailingRadioButton - Indicates if the item has a trailing radio button.
     * @property {boolean} trailingSwitch - Indicates if the item has a trailing switch.
     * @property {boolean} selected - Indicates if the item is selected (reflective property).
     * @property {string} routerLink - URL router link (reflective property).
     */
    static properties = {
        ...MDElement.properties,
        avatar: { type: String },
        image: { type: String },
        video: { type: String },

        icon: { type: String },
        label: { type: String },
        subLabel: { type: String },
        badge: { type: Number },
        text: { type: String },

        leadingCheckbox: { type: Boolean },
        leadingRadioButton: { type: Boolean },
        leadingSwitch: { type: Boolean },
        trailingCheckbox: { type: Boolean },
        trailingRadioButton: { type: Boolean },
        trailingSwitch: { type: Boolean },

        selected: { type: Boolean, reflect: true },
        routerLink: { type: String, reflect: true },
    };

    /**
     * Initializes the MDListItemElement.
     * Sets up ripple effect and gesture handling.
     */
    constructor() {
        super();

        /**
         * Ripple effect controller for the list item.
         * @type {MDRippleController}
         */
        this.ripple = new MDRippleController(this, {});

        /**
         * Gesture handling controller for the list item.
         * @type {MDGestureController}
         */
        this.gesture = new MDGestureController(this, {
            drag: [],
            resize: [],
            selection: true,
            selectionAfterLongPress: true,
        });
    }

    /**
     * Renders a checkbox element.
     * @returns {import('lit').TemplateResult} Rendered checkbox template result.
     */
    renderCheckbox() {
        /* prettier-ignore */
        return html`
            <md-checkbox
                class="md-list__checkbox"
                .checked="${ifDefined(this.selected)}"
            ></md-checkbox>
        `;
    }

    /**
     * Renders a radio button element.
     * @returns {import('lit').TemplateResult} Rendered radio button template result.
     */
    renderRadioButton() {
        /* prettier-ignore */
        return html`
            <md-radio-button
                class="md-list__radio-button"
                .checked="${ifDefined(this.selected)}"
            ></md-radio-button>
        `;
    }

    /**
     * Renders a switch element.
     * @returns {import('lit').TemplateResult} Rendered switch template result.
     */
    renderSwitch() {
        /* prettier-ignore */
        return html`
            <md-switch
                class="md-list__switch"
                .checked="${ifDefined(this.selected)}"
            ></md-switch>
        `;
    }

    /**
     * Renders the list item.
     * @returns {import('lit').TemplateResult} Rendered list item template result.
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.leadingCheckbox ? this.renderCheckbox() : nothing}
            ${this.leadingRadioButton ? this.renderRadioButton() : nothing}
            ${this.leadingSwitch ? this.renderSwitch() : nothing}

            ${this.avatar ? html`<md-image class="md-list__avatar" .src="${this.avatar}" .alt="${"Avatar"}" .variant="${"rounded"}"></md-image>` : nothing}
            ${this.image ? html`<md-image class="md-list__image" .src="${this.image}" .alt="${"Image"}"></md-image>` : nothing}
            ${this.video ? html`<md-image class="md-list__video" .src="${this.video}" .alt="${"Video"}" .aspectRatio="${"3/2"}"></md-image>` : nothing}

            ${this.icon ? html`<md-icon class="md-list__icon">${this.icon}</md-icon>` : nothing}

            ${this.label || this.subLabel || isDefined(this.badge) ? html`
                <div class="md-list__inner">
                    ${this.label || this.subLabel ? html`
                        <div class="md-list__label">
                            ${this.label ? html`<div class="md-list__label-primary">${this.label}</div>` : nothing}
                            ${this.subLabel ? html`<div class="md-list__label-secondary">${this.subLabel}</div>` : nothing}
                        </div>  
                    ` : nothing}
                    ${isDefined(this.badge) ? html`<md-badge class="md-list__badge" .label="${this.badge}"></md-badge>` : nothing}
                </div>
            ` : nothing}

            ${this.text ? html`<div class="md-list__text">${this.text}</div>` : nothing}

            ${this.trailingCheckbox ? this.renderCheckbox() : nothing}
            ${this.trailingRadioButton ? this.renderRadioButton() : nothing}
            ${this.trailingSwitch ? this.renderSwitch() : nothing}
        `;
    }

    /**
     * Called when the element is inserted into the DOM.
     * Adds the 'md-list__item' class to the element.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list__item");
    }

    /**
     * Called when the element is removed from the DOM.
     * Removes the 'md-list__item' class from the element.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-list__item");
    }

    /**
     * Handles updates to specific properties after the element has been updated.
     * @param {Map<string, unknown>} changeProperties - Map of properties that have changed.
     */
    async updated(changeProperties) {
        super.updated(changeProperties);

        if (changeProperties.has("subLabel")) {
            await this.updateComplete;
            if (this.subLabel) {
                const secondary = this.querySelector(".md-list__label-secondary");
                const style = window.getComputedStyle(secondary);
                const lineHeight = parseFloat(style.getPropertyValue("line-height"));
                if (secondary.scrollHeight > lineHeight) {
                    this.classList.add("md-list__item--three-line");
                } else {
                    this.classList.add("md-list__item--two-line");
                }
            }
        }

        if (changeProperties.has("selected")) {
            if (this.selected) {
                this.emit("onListItemSelected", this);
            }
        }
    }
}

customElements.define("md-list-item", MDListItemElement);

export { MDListItemElement };
