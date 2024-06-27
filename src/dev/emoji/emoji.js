import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
// import emojis from "../../assets/emoji_15_1_ordering.json"
import emojis from "../../assets/emojis.json";
// import emojis from "../../assets/emojis.map.json"

// console.log(emojis)

class DevEmojiComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">${emojis.map((list) => html` ${list.emoji.map((item) => html` <md-emoji>${item.base.map((codePoint) => String.fromCodePoint(codePoint)).join("")}</md-emoji> `)} `)}</div>
            </div>
        `;
    }
}

customElements.define("dev-emoji", DevEmojiComponent);

export default document.createElement("dev-emoji");
