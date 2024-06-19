import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppBadgeComponent extends MDElement {
    render() {
        return html`
            <div
                style=""
                class="md-layout-grid"
            >
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-badge label=""></md-badge>
                    <md-badge label="3"></md-badge>
                    <md-badge label="33"></md-badge>
                    <md-badge label="3333"></md-badge>
                </div>
            </div>
        `;
    }
}

customElements.define("app-badge", AppBadgeComponent);

export default document.createElement("app-badge");
