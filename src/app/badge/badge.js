import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppBadgeElement extends MDElement {
    render() {
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-badge label=""></md-badge>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-badge label="1"></md-badge>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-badge label="1000"></md-badge>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-badge label="1000" max="99"></md-badge>
                </div>
            </div>
        `;
    }
}

customElements.define("app-badge", AppBadgeElement);

export default document.createElement("app-badge");
