import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { MDRippleController } from "../ripple/ripple.js";

/**
 * MDCardComponent is a versatile card component used to display various types of content in different styles.
 * @extends MDComponent
 * @tagname md-card
 * @fires MDCardComponent#onCardIconButtonClick - Fired when an icon button on the card is clicked.
 * @fires MDCardComponent#onCardIconClick - Fired when an icon on the card is clicked.
 * @fires MDCardComponent#onCardButtonClick - Fired when a button on the card is clicked.
 * @fires MDCardComponent#onCardFabClick - Fired when a FAB (Floating Action Button) on the card is clicked.
 * @fires MDCardComponent#onCardTextFieldNativeFocus - Fired when a text field on the card receives focus.
 * @fires MDCardComponent#onCardTextFieldNativeBlur - Fired when a text field on the card loses focus.
 * @fires MDCardComponent#onCardTextFieldNativeInput - Fired when there is input in a text field on the card.
 * @fires MDCardComponent#onCardTextFieldNativeSearch - Fired when a search is performed in a text field on the card.
 * @fires MDCardComponent#onCardTextFieldNativeInvalid - Fired when a text field on the card becomes invalid.
 * @fires MDCardComponent#onCardTextFieldNativeReset - Fired when a text field on the card is reset.
 */
class MDCardComponent extends MDComponent {
    /**
     * @property {String} variant - Specifies the visual variant of the card (e.g., elevated, filled, outlined).
     * @property {Array} leadingActions - Array of actions placed at the leading end of the card.
     * @property {String} label - Primary label for the card.
     * @property {String} subLabel - Secondary label for the card.
     * @property {Array} trailingActions - Array of actions placed at the trailing end of the card.
     * @property {Array} actions - Array of actions associated with the card.
     */
    static properties = {
        variant: { type: String },
        leadingActions: { type: Array },
        label: { type: String },
        subLabel: { type: String },
        trailingActions: { type: Array },
        actions: { type: Array },
    };

    variants = ["elevated", "filled", "outlined"];

    constructor() {
        super();

        this.body = Array.from(this.childNodes);

        this.renderIconButton = this.renderIconButton.bind(this);
        this.renderIcon = this.renderIcon.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.renderFab = this.renderFab.bind(this);
        this.renderTextField = this.renderTextField.bind(this);
    }

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

    renderIcon(item) {
        /* prettier-ignore */
        return html`
            <div
                class="md-icon md-card__icon"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                @click="${this.handleCardIconClick}"
            >${item.icon}</div>
        `;
    }

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

    renderTextField(item) {
        /* prettier-ignore */
        return html`
            <md-text-field
                class="md-card__text-field"
                name="${ifDefined(item.name)}"
                .label="${ifDefined(item.label)}"
                .icon="${ifDefined(item.icon)}"
                .prefix="${ifDefined(item.prefix)}"
                .suffix="${ifDefined(item.suffix)}"
                .actions="${ifDefined(item.actions)}"
                .text="${ifDefined(item.text)}"
                .accept="${ifDefined(item.accept)}"
                .alt="${ifDefined(item.alt)}"
                .autocomplete="${ifDefined(item.autocomplete)}"
                .autofocus="${ifDefined(item.autofocus)}"
                .checked="${ifDefined(item.checked)}"
                .defaultChecked="${ifDefined(item.defaultChecked)}"
                .disabled="${ifDefined(item.disabled)}"
                .files="${ifDefined(item.files)}"
                .form="${ifDefined(item.form)}"
                .formAction="${ifDefined(item.formAction)}"
                .formEnctype="${ifDefined(item.formEnctype)}"
                .formMethod="${ifDefined(item.formMethod)}"
                .formNoValidate="${ifDefined(item.formNoValidate)}"
                .formTarget="${ifDefined(item.formTarget)}"
                .height="${ifDefined(item.height)}"
                .indeterminate="${ifDefined(item.indeterminate)}"
                .list="${ifDefined(item.list)}"
                .max="${ifDefined(item.max)}"
                .maxLength="${ifDefined(item.maxLength)}"
                .min="${ifDefined(item.min)}"
                .minLength="${ifDefined(item.minLength)}"
                .multiple="${ifDefined(item.multiple)}"
                .name="${ifDefined(item.name)}"
                .pattern="${ifDefined(item.pattern)}"
                .placeholder="${ifDefined(item.placeholder)}"
                .readOnly="${ifDefined(item.readOnly)}"
                .required="${ifDefined(item.required)}"
                .size="${ifDefined(item.size)}"
                .src="${ifDefined(item.src)}"
                .step="${ifDefined(item.step)}"
                .type="${ifDefined(item.type)}"
                .defaultValue="${ifDefined(item.defaultValue)}"
                .value="${ifDefined(item.value)}"
                .width="${ifDefined(item.width)}"
                .inputMode="${ifDefined(item.inputMode)}"
                .selectionDirection="${ifDefined(item.selectionDirection)}"
                .selectionEnd="${ifDefined(item.selectionEnd)}"
                .selectionStart="${ifDefined(item.selectionStart)}"
                .align="${ifDefined(item.align)}"
                .useMap="${ifDefined(item.useMap)}"
                .cols="${ifDefined(item.cols)}"
                .rows="${ifDefined(item.rows)}"
                .spellcheck="${ifDefined(item.spellcheck)}"
                .wrap="${ifDefined(item.wrap)}"
                .length="${ifDefined(item.length)}"
                .selectedIndex="${ifDefined(item.selectedIndex)}"
                .selectedOptions="${ifDefined(item.selectedOptions)}"
                .options="${ifDefined(item.options)}"
                .errorText="${ifDefined(item.errorText)}"
                .error="${ifDefined(item.error)}"
                .variant="${ifDefined(item.variant)}"
                @onTextFieldNativeFocus="${this.handleCardTextFieldNativeFocus}"
                @onTextFieldNativeBlur="${this.handleCardTextFieldNativeBlur}"
                @onTextFieldNativeInput="${this.handleCardTextFieldNativeInput}"
                @onTextFieldNativeSearch="${this.handleCardTextFieldNativeSearch}"
                @onTextFieldNativeInvalid="${this.handleCardTextFieldNativeInvalid}"
                @onTextFieldNativeReset="${this.handleCardTextFieldNativeReset}"
            ></md-text-field>
        `;
    }

    renderAction(item, defaultAction = this.renderButton) {
        /* prettier-ignore */
        return choose(item.component, [
            ['text-field', () => this.renderTextField(item)],
            ['icon-button', () => this.renderIconButton(item)],
            ['icon', () => this.renderIcon(item)],
            ['button', () => this.renderButton(item)],
            ['fab', () => this.renderFab(item)],
            ['spacer', () => html`<div class="md-pane__spacer"></div>`],
        ], () => defaultAction(item));
    }

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

    render() {
        /* prettier-ignore */
        return html`
            ${this.renderHeader()}
            ${this.renderBody()}
        `;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");

        if (this.variant && this.variant.includes("interactive")) {
            this.ripple = new MDRippleController(this, {
                clipped: true,
            });
        }
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`${this.localName}--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }
    }

    handleCardIconButtonClick(event) {
        this.emit("onCardIconButtonClick", event);
    }
    handleCardIconClick(event) {
        this.emit("onCardIconClick", event);
    }
    handleCardButtonClick(event) {
        this.emit("onCardButtonClick", event);
    }
    handleCardFabClick(event) {
        this.emit("onCardFabClick", event);
    }
    handleCardTextFieldNativeFocus(event) {
        this.emit("onCardTextFieldNativeFocus", event);
    }
    handleCardTextFieldNativeBlur(event) {
        this.emit("onCardTextFieldNativeBlur", event);
    }
    handleCardTextFieldNativeInput(event) {
        this.emit("onCardTextFieldNativeInput", event);
    }
    handleCardTextFieldNativeSearch(event) {
        this.emit("onCardTextFieldNativeSearch", event);
    }
    handleCardTextFieldNativeInvalid(event) {
        this.emit("onCardTextFieldNativeInvalid", event);
    }
    handleCardTextFieldNativeReset(event) {
        this.emit("onCardTextFieldNativeReset", event);
    }
}

customElements.define("md-card", MDCardComponent);

export { MDCardComponent };
