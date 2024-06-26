import { MDSheetComponent } from "../sheet/sheet.js";

class MDDialogComponent extends MDSheetComponent {
    variants = ["full"];

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-dialog");
    }
}

customElements.define("md-dialog", MDDialogComponent);

export { MDDialogComponent };
