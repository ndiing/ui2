import { MDSheetComponent } from "../sheet/sheet.js";

class MDBottomAppBarComponent extends MDSheetComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-bottom-app-bar");
    }
}

customElements.define("md-bottom-app-bar", MDBottomAppBarComponent);

export { MDBottomAppBarComponent };
