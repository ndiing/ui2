import { MDComponent } from "../component/component.js";

/**
 * MDEmojiComponent is a class that extends MDComponent and represents a custom emoji component.
 * This component automatically adds the "md-emoji" CSS class when connected to the DOM.
 * @extends MDComponent
 * @tagname md-emoji
 */
class MDEmojiComponent extends MDComponent {
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-emoji");
    }
}

customElements.define("md-emoji", MDEmojiComponent);

export { MDEmojiComponent };
