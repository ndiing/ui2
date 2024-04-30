import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevRangeField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <md-form-field @onFormFieldNativeSubmit="${console.log}">
                <div class="md-layout--column">
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-range-field label="Range field" name="rangeField1"></md-range-field>
                    </div>
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-range-field label="Range field with value" name="rangeField2" value="25" defaultValue="25"></md-range-field>
                    </div>
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-range-field label="Range field with value" name="rangeField3" value="[25,55]" defaultValue="[25,55]"></md-range-field>
                    </div>
                    
                    
                    <div class="md-layout__item--expanded12 md-layout__item--medium4 md-layout__item--compact4">
                        <md-button type="reset" label="Reset" ui="filled-tonal"></md-button>
                        <md-button type="submit" label="Submit" ui="filled"></md-button>
                    </div>
                </div>
            </md-form-field>
        `;
    }
}

customElements.define("dev-range-field", DevRangeField);

export default document.createElement("dev-range-field");
