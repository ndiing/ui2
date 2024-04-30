import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevPane extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="padding:24px;">
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-pane>body</md-pane>
                </div>
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-pane label="Label">body</md-pane>
                </div>
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-pane leadingActions='["home"]' label="Label">body</md-pane>
                </div>
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-pane label="Label" trailingActions='["close"]'>body</md-pane>
                </div>
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-pane label="Label" buttons='["save"]'>body</md-pane>
                </div>
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4">
                    <md-pane leadingActions='["home"]' label="Label" trailingActions='["close"]' buttons='[{"label":"save","ui":"filled"}]'>body</md-pane>
                </div>
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4"></div>
                <div class="md-layout__item--expanded3 md-layout__item--medium4 md-layout__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("dev-pane", DevPane);

export default document.createElement("dev-pane");
