import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import emojis from "../../assets/emojis.json"

class DevEmojiComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    ${emojis.map(row => html`
                        <div>
                            ${row.map(emoji => emoji.label?html`
                                <div>${emoji.label}</div>
                            `:html`
                                <md-emoji>${emoji.emoji}</md-emoji>
                            `)}
                        </div>
                    `)}
                </div>
            </div>
        `;
    }
}

customElements.define("dev-emoji", DevEmojiComponent);

export default document.createElement("dev-emoji");
