import { MDComponent } from "../component/component.js";

/**
 * Represents an icon component that extends MDComponent.
 * @extends MDComponent
 * @tagname md-icon
 */
class MDIconComponent extends MDComponent {
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon");
    }
}

customElements.define("md-icon", MDIconComponent);

export { MDIconComponent };
