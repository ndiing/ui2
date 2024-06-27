import { MDSheetComponent } from "../sheet/sheet.js";

/**
 * MDBottomAppBarComponent is a custom bottom app bar element, extending the functionalities of MDSheetComponent.
 * @extends MDSheetComponent
 * @tagname md-bottom-app-bar
 */
class MDBottomAppBarComponent extends MDSheetComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-bottom-app-bar");
    }
}

customElements.define("md-bottom-app-bar", MDBottomAppBarComponent);

export { MDBottomAppBarComponent };
