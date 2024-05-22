import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevChip extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chip label="Label"></md-chip>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chip avatar="https://placehold.co/200x200" label="Label"></md-chip>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chip leadingIcon="favorite" label="Label" trailingIcon=""></md-chip>
                </div>

                
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chip trailingIcon="close" label="Label"></md-chip>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chip trailingIcon="close" avatar="https://placehold.co/200x200" label="Label"></md-chip>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chip trailingIcon="close" leadingIcon="favorite" label="Label" trailingIcon=""></md-chip>
                </div>
                
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chip selected label="Label"></md-chip>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chip selected avatar="https://placehold.co/200x200" label="Label"></md-chip>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chip selected leadingIcon="favorite" label="Label" trailingIcon=""></md-chip>
                </div>

                
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chip selected trailingIcon="close" label="Label"></md-chip>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chip selected trailingIcon="close" avatar="https://placehold.co/200x200" label="Label"></md-chip>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chip selected trailingIcon="close" leadingIcon="favorite" label="Label" trailingIcon=""></md-chip>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-chip", DevChip);

export default document.createElement("dev-chip");
