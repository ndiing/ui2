import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevImage extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-image style="width:112px" src="https://placehold.co/600x400" ratio="16/9"></md-image>
                    <md-image style="width:112px" src="https://placehold.co/600x400" ratio="3/2"></md-image>
                    <md-image style="width:112px" src="https://placehold.co/600x400" ratio="4/3"></md-image>
                    <md-image style="width:112px" src="https://placehold.co/600x400" ratio="1/1"></md-image>
                    <md-image style="width:112px" src="https://placehold.co/600x400" ratio="3/4"></md-image>
                    <md-image style="width:112px" src="https://placehold.co/600x400" ratio="2/3"></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-image style="height:112px" src="https://placehold.co/600x400" ratio="16/9"></md-image>
                    <md-image style="height:112px" src="https://placehold.co/600x400" ratio="3/2"></md-image>
                    <md-image style="height:112px" src="https://placehold.co/600x400" ratio="4/3"></md-image>
                    <md-image style="height:112px" src="https://placehold.co/600x400" ratio="1/1"></md-image>
                    <md-image style="height:112px" src="https://placehold.co/600x400" ratio="3/4"></md-image>
                    <md-image style="height:112px" src="https://placehold.co/600x400" ratio="2/3"></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-image style="width:112px" src="https://placehold.co/600x400" rounded ratio="16/9"></md-image>
                    <md-image style="width:112px" src="https://placehold.co/600x400" rounded ratio="3/2"></md-image>
                    <md-image style="width:112px" src="https://placehold.co/600x400" rounded ratio="4/3"></md-image>
                    <md-image style="width:112px" src="https://placehold.co/600x400" rounded ratio="1/1"></md-image>
                    <md-image style="width:112px" src="https://placehold.co/600x400" rounded ratio="3/4"></md-image>
                    <md-image style="width:112px" src="https://placehold.co/600x400" rounded ratio="2/3"></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-image style="height:112px" src="https://placehold.co/600x400" rounded ratio="16/9"></md-image>
                    <md-image style="height:112px" src="https://placehold.co/600x400" rounded ratio="3/2"></md-image>
                    <md-image style="height:112px" src="https://placehold.co/600x400" rounded ratio="4/3"></md-image>
                    <md-image style="height:112px" src="https://placehold.co/600x400" rounded ratio="1/1"></md-image>
                    <md-image style="height:112px" src="https://placehold.co/600x400" rounded ratio="3/4"></md-image>
                    <md-image style="height:112px" src="https://placehold.co/600x400" rounded ratio="2/3"></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                </div>
            </div>
        `;
    }
}

customElements.define("dev-image", DevImage);

export default document.createElement("dev-image");
