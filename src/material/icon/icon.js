import { MDComponent } from "../component/component.js";

/**
 * Icon component that extends MDComponent.
 * Adds 'md-icon' class to the component's class list when connected to the DOM.
 * @extends MDComponent
 */
class MDIconComponent extends MDComponent {
    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-icon' class to the component's class list.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-icon");
    }
}

customElements.define("md-icon", MDIconComponent);

export { MDIconComponent };
