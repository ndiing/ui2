import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevColorField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <md-form
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout--column">
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-color-field label="Color Field" text="Text content" name="text1"></md-color-field>
                    </div>
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-color-field label="Color Field" text="Text content" name="text2" placeholder="placeholder" required></md-color-field>
                    </div>
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-color-field label="Color Field" text="Text content" name="text3" value="value" defaultValue="value"></md-color-field>
                    </div>
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-button type="reset" label="Reset"></md-button>
                        <md-button type="submit" label="Submit"></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }
    handleFormNativeSubmit(event){
        const formData=(new FormData(event.detail.target))
        console.log(Object.fromEntries(formData.entries()))
    }
}

customElements.define("dev-color-field", DevColorField);

export default document.createElement("dev-color-field");
