import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Top App Bar component that extends MDSheetComponent.
 * Provides additional variants for different sizes and positions.
 * @extends MDSheetComponent
 */
class MDTopAppBarComponent extends MDSheetComponent {
    /**
     * Array of valid top app bar variants.
     * @type {Array<String>}
     */
    variants = ["center", "small", "medium", "large"];

    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds necessary classes for the top app bar component.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-top-app-bar");
    }
}

customElements.define("md-top-app-bar", MDTopAppBarComponent);

export { MDTopAppBarComponent };
