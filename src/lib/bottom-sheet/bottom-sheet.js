import { MDElement } from "../element/element";
import { html, nothing } from "lit";
class MDBottomSheet extends MDElement {
    static get properties() {
        return {
            ui: { type: String },
            open: { type: Boolean, reflect: true },
        };
    }

    constructor() {
        super();
        this.body = Array.from(this.childNodes);
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-bottom-sheet__body">
                <div class="md-bottom-sheet__inner">${this.body}</div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.classList.add("md-bottom-sheet");
        this.bottomSheetScrimElement = document.createElement("div");
        this.parentElement.insertBefore(this.bottomSheetScrimElement, this.nextElementSibling);
        this.bottomSheetScrimElement.classList.add("md-bottom-sheet__scrim");
        this.handleBottomSheetScrimClick = this.handleBottomSheetScrimClick.bind(this);
        this.bottomSheetScrimElement.addEventListener("click", this.handleBottomSheetScrimClick);
        this.updateStyle();
    }

    updateStyle() {
        if (this.ui?.includes("modal")) {
            if (this.open) {
                this.bottomSheetScrimElement.classList.add("md-bottom-sheet--open");
            } else {
                this.bottomSheetScrimElement.classList.remove("md-bottom-sheet--open");
            }
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-bottom-sheet");
        this.bottomSheetScrimElement.remove();
        this.bottomSheetScrimElement.removeEventListener("click", this.handleBottomSheetScrimClick);
    }

    updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["modal"].forEach((ui) => {
                this.classList.remove("md-bottom-sheet--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-bottom-sheet--" + ui);
                });
            }
        }

        if (changedProperties.has("open")) {
            if (this.open) {
                this.classList.add("md-bottom-sheet--open");
            } else {
                this.classList.remove("md-bottom-sheet--open");
            }
            this.updateStyle();
        }
    }

    handleBottomSheetActionClick(event) {
        this.emit("onBottomSheetActionClick", event);
    }

    handleBottomSheetButtonClick(event) {
        this.emit("onBottomSheetButtonClick", event);
    }

    handleBottomSheetScrimClick(event) {
        this.close();
        this.emit("onBottomSheetScrimClick", event);
    }

    show() {
        this.open = true;
    }

    close() {
        this.open = false;
    }
}
customElements.define("md-bottom-sheet", MDBottomSheet);
export { MDBottomSheet };
