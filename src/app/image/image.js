import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppImageElement extends MDElement {
    render() {
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-image style="width:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70"></md-image>
                    <md-image style="height:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70"></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-image style="width:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="16/9"></md-image>
                    <md-image style="width:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="3/2"></md-image>
                    <md-image style="width:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="4/3"></md-image>
                    <md-image style="width:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="1/1"></md-image>
                    <md-image style="width:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="3/4"></md-image>
                    <md-image style="width:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="2/3"></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-image style="height:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="16/9"></md-image>
                    <md-image style="height:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="3/2"></md-image>
                    <md-image style="height:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="4/3"></md-image>
                    <md-image style="height:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="1/1"></md-image>
                    <md-image style="height:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="3/4"></md-image>
                    <md-image style="height:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="2/3"></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-image style="width:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="16/9" ui="rounded"></md-image>
                    <md-image style="width:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="3/2" ui="rounded"></md-image>
                    <md-image style="width:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="4/3" ui="rounded"></md-image>
                    <md-image style="width:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="1/1" ui="rounded"></md-image>
                    <md-image style="width:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="3/4" ui="rounded"></md-image>
                    <md-image style="width:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="2/3" ui="rounded"></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-image style="height:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="16/9" ui="rounded"></md-image>
                    <md-image style="height:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="3/2" ui="rounded"></md-image>
                    <md-image style="height:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="4/3" ui="rounded"></md-image>
                    <md-image style="height:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="1/1" ui="rounded"></md-image>
                    <md-image style="height:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="3/4" ui="rounded"></md-image>
                    <md-image style="height:112px;" src="https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" ratio="2/3" ui="rounded"></md-image>
                </div>
            </div>
        `;
    }
}

customElements.define("app-image", AppImageElement);

export default document.createElement("app-image");
