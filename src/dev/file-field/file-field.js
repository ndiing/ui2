import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevFileField extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <md-form
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout--column">
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-file-field label="File Field" text="Text content" name="text1"></md-file-field>
                    </div>
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-file-field label="File Field" text="Text content" name="text2" placeholder="placeholder" required></md-file-field>
                    </div>
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-file-field label="File Field" text="Text content" name="text3" value="value" defaultValue="value"></md-file-field>
                    </div>
                    <div class="md-layout__item--expanded4 md-layout__item--medium4 md-layout__item--compact4">
                        <md-button type="reset" label="Reset" ui="filled-tonal"></md-button>
                        <md-button type="submit" label="Submit" ui="filled"></md-button>
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

customElements.define("dev-file-field", DevFileField);

export default document.createElement("dev-file-field");
