import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevChip extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-chip
                        .label="${"Label"}"
                    ></md-chip>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-chip
                        .leadingIcons="${"today"}"
                        .label="${"Label"}"
                    ></md-chip>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-chip
                        .leadingIcons="${"today"}"
                        .label="${"Label"}"
                        .trailingIcon="${"close"}"
                    ></md-chip>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-chip
                        .avatar="${"https://placehold.co/600x400"}"
                        .label="${"Label"}"
                        .trailingIcon="${"close"}"
                    ></md-chip>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-chip
                        .selected="${true}"
                        .label="${"Label"}"
                    ></md-chip>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-chip
                        .selected="${true}"
                        .leadingIcons="${"today"}"
                        .label="${"Label"}"
                    ></md-chip>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-chip
                        .selected="${true}"
                        .leadingIcons="${"today"}"
                        .label="${"Label"}"
                        .trailingIcon="${"close"}"
                    ></md-chip>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-chip
                        .selected="${true}"
                        .avatar="${"https://placehold.co/600x400"}"
                        .label="${"Label"}"
                        .trailingIcon="${"close"}"
                    ></md-chip>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-chip", DevChip);

export default document.createElement("dev-chip");
