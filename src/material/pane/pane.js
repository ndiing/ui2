import { html, nothing } from "lit";
import { MDElement } from "../element/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { MDPopperController } from "../popper/popper.js";

/**
 * Custom element representing a pane.
 * Extends MDElement to inherit base element functionality.
 */
class MDPaneElement extends MDElement {
    /**
     * Properties inherited from MDElement and specific to MDPaneElement.
     * @type {Object}
     * @property {Array} leadingActions - Actions displayed before the header.
     * @property {String} label - Main label for the pane.
     * @property {String} subLabel - Sublabel for additional context.
     * @property {Array} trailingActions - Actions displayed after the header.
     * @property {Array} buttons - Buttons displayed in the pane footer.
     * @property {Boolean} open - Indicates if the pane is open.
     */
    static properties = {
        ...MDElement.properties,
        leadingActions: { type: Array },
        label: { type: String },
        subLabel: { type: String },
        trailingActions: { type: Array },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
    };

    /**
     * Variants applicable to the pane element.
     * @type {Array<String>}
     */
    variants = ["elevated", "filled", "outlined", "dialog", "full-screen", "sheet", "north", "east", "south", "west", "modal", "menu", "tooltip", "plain", "rich", "snackbar"];

    /**
     * Variants where a scrim (background overlay) is used.
     * @type {Array<String>}
     */
    scrimvariants = ["dialog", "modal", "menu"];

    /**
     * Variants where a popper (tooltip or menu) is used.
     * @type {Array<String>}
     */
    poppervariants = ["menu", "tooltip"];

    /**
     * Checks if the pane has a header (any of leading actions, label, sublabel, or trailing actions).
     * @returns {Boolean} True if the pane has a header, false otherwise.
     */
    get hasHeader() {
        return this.leadingActions?.length || this.label || this.subLabel || this.trailingActions?.length;
    }

    /**
     * Checks if the pane has a label (either main label or sublabel).
     * @returns {Boolean} True if the pane has a label, false otherwise.
     */
    get hasLabel() {
        return this.label || this.subLabel;
    }

    /**
     * Checks if the pane has body content (either main body content or buttons in footer).
     * @returns {Boolean} True if the pane has body content, false otherwise.
     */
    get hasBody() {
        return this.body?.length || this.buttons?.length;
    }

    /**
     * Getter for the body content of the pane.
     * @returns {any} Body content of the pane.
     */
    get body() {
        return this._body;
    }

    /**
     * Setter for the body content of the pane.
     * @param {any} value - Body content to set.
     */
    set body(value) {
        this._body = value;
    }

    /**
     * Initializes the pane element.
     * Creates a new MDPopperController instance and sets initial body content from child nodes.
     */
    constructor() {
        super();

        this.popper = new MDPopperController(this, {});

        this.body = Array.from(this.childNodes);
    }

    /**
     * Renders an icon button component.
     * @param {Object} item - Item containing properties for the icon button.
     * @returns {TemplateResult} Rendered icon button template.
     */
    renderIconButton(item) {
        /* prettier-ignore */
        return html`
            <md-icon-button 
                class="md-pane__action"
                .name="${ifDefined(item.name)}"
                .icon="${ifDefined(item.icon)}"
                .selected="${ifDefined(item.selected)}"
                .variant="${ifDefined(item.variant)}"
                @click="${this.handlePaneIconButtonClick}"
            ></md-icon-button>
        `;
    }

    /**
     * Renders a button component.
     * @param {Object} item - Item containing properties for the button.
     * @returns {TemplateResult} Rendered button template.
     */
    renderButton(item) {
        /* prettier-ignore */
        return html`
            <md-button 
                class="md-pane__button"
                .name="${ifDefined(item.name)}"
                .label="${ifDefined(item.label)}"
                .icon="${ifDefined(item.icon)}"
                .type="${ifDefined(item.type)}"
                .selected="${ifDefined(item.selected)}"
                .variant="${ifDefined(item.variant)}"
                @click="${this.handlePaneButtonClick}"
            ></md-button>
        `;
    }

    /**
     * Renders the header section of the pane.
     * @returns {TemplateResult} Rendered header template.
     */
    renderHeader() {
        /* prettier-ignore */
        return this.hasHeader ? html`
            <div class="md-pane__header">
                ${this.leadingActions?.length ? html`
                    <div class="md-pane__actions">
                        ${this.leadingActions.map(item => choose(item.component, [
                            ["button", () => this.renderButton(item)]
                        ], () => this.renderIconButton(item)))}
                    </div>` : nothing}
                ${this.hasLabel ? html`
                    <div class="md-pane__label">
                        ${this.label ? html`<div class="md-pane__label-primary" @click="${this.handlePaneLabelClick}">${this.label}</div>` : nothing}
                        ${this.subLabel ? html`<div class="md-pane__label-secondary" @click="${this.handlePaneSubLabelClick}">${this.subLabel}</div>` : nothing}
                    </div>` : nothing}
                ${this.trailingActions?.length ? html`
                    <div class="md-pane__actions">
                        ${this.trailingActions.map(item => choose(item.component, [
                            ["button", () => this.renderButton(item)]
                        ], () => this.renderIconButton(item)))}
                    </div>` : nothing}
            </div>` : nothing;
    }

    /**
     * Renders the body section of the pane.
     * @returns {TemplateResult} Rendered body template.
     */
    renderBody() {
        /* prettier-ignore */
        return this.hasBody ? html`
            <div class="md-pane__body">
                ${this.body?.length ? html`<div class="md-pane__inner">${this.body}</div>` : nothing}
                ${this.buttons?.length ? html`
                    <div class="md-pane__footer">
                        ${this.buttons.map(item => choose(item.component, [
                            ["icon-button", () => this.renderIconButton(item)]
                        ], () => this.renderButton(item)))}
                    </div>` : nothing}
            </div>` : nothing;
    }

    /**
     * Renders the complete pane element.
     * @returns {TemplateResult} Rendered pane template.
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.renderHeader()}
            ${this.renderBody()}
        `;
    }

    /**
     * Callback when the element is connected to the DOM.
     * Initializes styles and adds event listeners for scrim click and resize observer.
     */
    connectedCallback() {
        super.connectedCallback();

        this.style.setProperty("--md-comp-pane-animation", "none");

        this.scrim = document.createElement("div");
        this.scrim.classList.add("md-pane__scrim");
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
        this.handlePaneScrimClick = this.handlePaneScrimClick.bind(this);
        this.scrim.addEventListener("click", this.handlePaneScrimClick);

        this.resizeObserver = new ResizeObserver((entries) => {
            window.requestAnimationFrame(() => {
                entries.forEach((entry) => {
                    this.style.setProperty("--md-comp-pane-height", entry.contentRect.height + "px");
                    this.style.setProperty("--md-comp-pane-width", entry.contentRect.width + "px");
                    this.style.setProperty("--md-comp-pane-height-pixel", entry.contentRect.height);
                    this.style.setProperty("--md-comp-pane-width-pixel", entry.contentRect.width);
                });
            });
        });
        this.resizeObserver.observe(this);
    }

    /**
     * Callback when the element is disconnected from the DOM.
     * Cleans up event listeners and removes scrim element.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.scrim.removeEventListener("click", this.handlePaneScrimClick);
        this.scrim.remove();

        this.resizeObserver.disconnect();
    }

    /**
     * Callback when properties are updated.
     * Handles 'open' property changes to manage scrim visibility and emits events.
     * @param {Map} changedProperties - Map of changed properties.
     */
    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("open")) {
            if (this.open) {
                if (this.scrimvariants.some((variant) => this.allVariants.includes(variant))) {
                    this.scrim.setAttribute("open", "");
                }
                this.emit("onPaneShow", this);
            } else {
                this.scrim.removeAttribute("open");

                this.emit("onPaneClose", this);
            }
        }
    }

    /**
     * Event handler for icon button click events in the pane.
     * @param {Event} event - Click event object.
     */
    handlePaneIconButtonClick(event) {
        this.emit("onPaneIconButtonClick", event);
    }

    /**
     * Event handler for button click events in the pane.
     * @param {Event} event - Click event object.
     */
    handlePaneButtonClick(event) {
        this.emit("onPaneButtonClick", event);
    }

    /**
     * Event handler for label click events in the pane.
     * @param {Event} event - Click event object.
     */
    handlePaneLabelClick(event) {
        this.emit("onPaneLabelClick", event);
    }

    /**
     * Event handler for sublabel click events in the pane.
     * @param {Event} event - Click event object.
     */
    handlePaneSubLabelClick(event) {
        this.emit("onPaneSubLabelClick", event);
    }

    /**
     * Event handler for scrim click events in the pane.
     * Closes the pane and emits an event.
     * @param {Event} event - Click event object.
     */
    handlePaneScrimClick(event) {
        this.close();

        this.emit("onPaneScrimClick", event);
    }

    /**
     * Shows the pane by setting the 'open' property to true.
     */
    show() {
        this.style.removeProperty("--md-comp-pane-animation");

        this.open = true;
    }

    /**
     * Closes the pane by setting the 'open' property to false.
     */
    close() {
        this.open = false;
    }

    /**
     * Toggles the pane visibility.
     * If pane is open, closes it; if closed, opens it.
     * @param {...any} args - Optional arguments to pass to the show method.
     */
    toggle(...args) {
        if (this.open) {
            this.close();
        } else {
            this.show(...args);
        }
    }
}

// Define the custom element using the defined class.
customElements.define("md-pane", MDPaneElement);

// Export the class for external use if needed.
export { MDPaneElement };
