import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * Bottom App Bar component that extends MDSheetComponent.
 * Provides additional variants for different sizes and positions.
 * @extends MDSheetComponent
 */
class MDBottomAppBarComponent extends MDSheetComponent {
    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds necessary classes for the bottom app bar component.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-bottom-app-bar");
    }
}

customElements.define("md-bottom-app-bar", MDBottomAppBarComponent);

export { MDBottomAppBarComponent };
