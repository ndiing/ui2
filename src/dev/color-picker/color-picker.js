import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevColorPicker extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-color-picker id="picker"></md-color-picker>
                    <md-button label="color-picker" @click="${this.handleClick}"></md-button>
                </div>

            </div>
        `;
    }

    get picker(){return this.querySelector('#picker')}
    handleClick(event){if(this.picker.open){this.picker.close()}else{this.picker.show(event.currentTarget)}}

}

customElements.define("dev-color-picker", DevColorPicker);

export default document.createElement("dev-color-picker");
