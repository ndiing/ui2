import { MDComponent } from "../component/component.js";

/**
 * Emoji component that extends MDComponent.
 * Adds 'md-emoji' class to the component's class list when connected to the DOM.
 * @extends MDComponent
 */
class MDEmojiComponent extends MDComponent {
    /**
     * Callback invoked when the element is connected to the DOM.
     * Adds the 'md-emoji' class to the component's class list.
     */
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-emoji");
    }
}

customElements.define("md-emoji", MDEmojiComponent);

export { MDEmojiComponent };
