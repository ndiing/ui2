import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppPasswordFieldElement extends MDElement{

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
                        <md-password-field label="Password Field" name="number"></md-password-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-password-field label="Password Field (value)" name="number" value="123456"></md-password-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-password-field label="Password Field (required)" name="number" required></md-password-field>
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

customElements.define('app-password-field',AppPasswordFieldElement)

export default document.createElement('app-password-field')