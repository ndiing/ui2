import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevUrlField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <md-form
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tel-field label="Tel Field" text="Text content" name="text1"></md-tel-field>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tel-field label="Tel Field" text="Text content" name="text2" placeholder="placeholder" required></md-tel-field>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tel-field label="Tel Field" text="Text content" name="text3" value="value" defaultValue="value"></md-tel-field>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
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

customElements.define("dev-tel-field", DevUrlField);

export default document.createElement("dev-tel-field");
