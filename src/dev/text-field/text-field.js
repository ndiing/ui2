import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTextField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
            
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-text-field label="Label"></md-text-field>
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-text-field label="Label" text="Text"></md-text-field>
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-text-field label="Label" text="Text" value="Text" defaultValue="Text"></md-text-field>
                </div>
                
            
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-text-field ui="filled" label="Label"></md-text-field>
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-text-field ui="filled" label="Label" text="Text"></md-text-field>
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-text-field ui="filled" label="Label" text="Text" value="Text" defaultValue="Text"></md-text-field>
                </div>
                
            
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-text-field ui="outlined" label="Label"></md-text-field>
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-text-field ui="outlined" label="Label" text="Text"></md-text-field>
                </div>
                <div class="md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-text-field ui="outlined" label="Label" text="Text" value="Text" defaultValue="Text"></md-text-field>
                </div>
                

            </div>
        `;
    }
}

customElements.define("dev-text-field", DevTextField);

export default document.createElement("dev-text-field");
