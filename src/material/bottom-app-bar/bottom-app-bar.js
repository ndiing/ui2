import { html, nothing } from "lit";
import { MDPaneElement } from "../pane/pane.js";
import { choose } from "lit/directives/choose.js";

/**
 * Custom bottom app bar element that extends MDPaneElement.
 */
class MDBottomAppBarElement extends MDPaneElement {
    /**
     * Defines the properties of the custom element.
     * @property {string} fab - The floating action button icon.
     */
    static properties = {
        ...MDPaneElement.properties,
        fab: { type: String },
    };

    /**
     * Renders the header section of the pane.
     * @returns {import('lit').TemplateResult} Rendered header template.
     */
    renderHeader() {
        /* prettier-ignore */
        return this.hasHeader || this.fab ? html`
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
                ${this.fab ? html`<md-fab class="md-bottom-app-bar__fab" .icon="${this.fab}" .variant="${"unelevated"}" @click="${this.handleBottomAppBarFabClick}"></md-fab>` : nothing}
            </div>` : nothing;
    }

    /**
     * Called when the element is added to the DOM.
     * Adds the necessary class to the element.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-pane");
    }

    /**
     * Called when the element is removed from the DOM.
     * Removes the class from the element.
     */
    disconnectedCallback() {
        super.disconnectedCallback();

        this.classList.remove("md-pane");
    }

    /**
     * Handles the click event on the floating action button.
     * @param {Event} event - The click event.
     * @fires MDBottomAppBarElement#onBottomAppBarFabClick
     */
    handleBottomAppBarFabClick(event) {
        this.emit("onBottomAppBarFabClick", event);
    }
}

customElements.define("md-bottom-app-bar", MDBottomAppBarElement);

export { MDBottomAppBarElement };
