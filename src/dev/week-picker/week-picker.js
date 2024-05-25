import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevWeekPicker extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-week-picker id="picker"></md-week-picker>
                    <md-button label="week-picker" @click="${this.handleClick}"></md-button>
                </div>

            </div>
        `;
    }

    get picker(){return this.querySelector('#picker')}
    handleClick(event){if(this.picker.open){this.picker.close()}else{this.picker.show(event.currentTarget)}}

}

customElements.define("dev-week-picker", DevWeekPicker);

export default document.createElement("dev-week-picker");
