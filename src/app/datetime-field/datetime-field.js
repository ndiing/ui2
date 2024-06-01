import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppDatetimeFieldElement extends MDElement {
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
                        <md-datetime-field label="Datetime Field" name="color0"></md-datetime-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-datetime-field label="Datetime Field (value)" name="color1" value="1990-10-17T20:30"></md-datetime-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-datetime-field label="Datetime Field (required)" name="color2" required></md-datetime-field>
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

customElements.define("app-datetime-field", AppDatetimeFieldElement);

export default document.createElement("app-datetime-field");
