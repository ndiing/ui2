import { MDSheetComponent } from "../sheet/sheet.js";

class MDTopAppBarComponent extends MDSheetComponent {
    variants = ["center", "small", "medium", "large"];

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-top-app-bar");
    }
}

customElements.define("md-top-app-bar", MDTopAppBarComponent);

export { MDTopAppBarComponent };
