import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppFabElement extends MDElement {
    render() {
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-fab ui="" icon="image"></md-fab>
                    <md-fab ui="small" icon="image"></md-fab>
                    <md-fab ui="large" icon="image"></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-fab ui="extended" icon="image" label="Label"></md-fab>
                    <md-fab ui="extended" label="Label"></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-fab ui="surface" icon="image"></md-fab>
                    <md-fab ui="container" icon="image"></md-fab>
                    <md-fab ui="tertiary" icon="image"></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-fab ui="unelevated" icon="image"></md-fab>
                </div>
            </div>
        `;
    }
}

customElements.define("app-fab", AppFabElement);

export default document.createElement("app-fab");
