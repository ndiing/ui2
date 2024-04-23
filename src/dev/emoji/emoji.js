import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevEmoji extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <md-emoji>🥳</md-emoji>
                    <md-emoji>🧁</md-emoji>
                    <md-emoji>🍰</md-emoji>
                    <md-emoji>🎁</md-emoji>
                    <md-emoji>🎂</md-emoji>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
            </div>
        `;
    }
}

customElements.define("dev-emoji", DevEmoji);

export default document.createElement("dev-emoji");
