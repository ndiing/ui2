import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevEmoji extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin:24px;">
                <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                    <md-emoji>🥳</md-emoji>
                    <md-emoji>🧁</md-emoji>
                    <md-emoji>🍰</md-emoji>
                    <md-emoji>🎁</md-emoji>
                    <md-emoji>🎂</md-emoji>
                </div>
                
                
            </div>
        `;
    }
}

customElements.define("dev-emoji", DevEmoji);

export default document.createElement("dev-emoji");
