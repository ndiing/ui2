import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevImage extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-image style="height:112px;" src="https://placehold.co/200x200" alt="" ratio="16/9"></md-image>
                    <md-image style="height:112px;" src="https://placehold.co/200x200" alt="" ratio="3/2"></md-image>
                    <md-image style="height:112px;" src="https://placehold.co/200x200" alt="" ratio="4/3"></md-image>
                    <md-image style="height:112px;" src="https://placehold.co/200x200" alt="" ratio="1/1"></md-image>
                    <md-image style="height:112px;" src="https://placehold.co/200x200" alt="" ratio="3/4"></md-image>
                    <md-image style="height:112px;" src="https://placehold.co/200x200" alt="" ratio="2/3"></md-image>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-image style="width:112px;" src="https://placehold.co/200x200" alt="" ratio="16/9"></md-image>
                    <md-image style="width:112px;" src="https://placehold.co/200x200" alt="" ratio="3/2"></md-image>
                    <md-image style="width:112px;" src="https://placehold.co/200x200" alt="" ratio="4/3"></md-image>
                    <md-image style="width:112px;" src="https://placehold.co/200x200" alt="" ratio="1/1"></md-image>
                    <md-image style="width:112px;" src="https://placehold.co/200x200" alt="" ratio="3/4"></md-image>
                    <md-image style="width:112px;" src="https://placehold.co/200x200" alt="" ratio="2/3"></md-image>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-image style="height:112px;" src="https://placehold.co/200x200" alt="" ratio="16/9" rounded></md-image>
                    <md-image style="height:112px;" src="https://placehold.co/200x200" alt="" ratio="3/2" rounded></md-image>
                    <md-image style="height:112px;" src="https://placehold.co/200x200" alt="" ratio="4/3" rounded></md-image>
                    <md-image style="height:112px;" src="https://placehold.co/200x200" alt="" ratio="1/1" rounded></md-image>
                    <md-image style="height:112px;" src="https://placehold.co/200x200" alt="" ratio="3/4" rounded></md-image>
                    <md-image style="height:112px;" src="https://placehold.co/200x200" alt="" ratio="2/3" rounded></md-image>
                </div>
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-image style="width:112px;" src="https://placehold.co/200x200" alt="" ratio="16/9" rounded></md-image>
                    <md-image style="width:112px;" src="https://placehold.co/200x200" alt="" ratio="3/2" rounded></md-image>
                    <md-image style="width:112px;" src="https://placehold.co/200x200" alt="" ratio="4/3" rounded></md-image>
                    <md-image style="width:112px;" src="https://placehold.co/200x200" alt="" ratio="1/1" rounded></md-image>
                    <md-image style="width:112px;" src="https://placehold.co/200x200" alt="" ratio="3/4" rounded></md-image>
                    <md-image style="width:112px;" src="https://placehold.co/200x200" alt="" ratio="2/3" rounded></md-image>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-image", DevImage);

export default document.createElement("dev-image");
