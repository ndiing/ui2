import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppDateFieldElement extends MDElement {
    /* prettier-ignore */
    render(){
        return html`
            <md-form
                @onFormNativeSubmit="${(event) => {
                    console.log(Object.fromEntries(new FormData(event.detail.currentTarget).entries()));
                }}"
            >
                <div class="md-layout-column" style="margin:24px;">

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-date-field label="Date Field" name="color0"></md-date-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-date-field label="Date Field (value)" name="color1" value="1990-10-17"></md-date-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-date-field label="Date Field (required)" name="color2" required></md-date-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-button type="reset" label="Reset"></md-button>
                        <md-button type="submit" label="Submit"></md-button>
                    </div>

                </div>
            </md-form>
        `
    }
}

customElements.define("app-date-field", AppDateFieldElement);

export default document.createElement("app-date-field");
