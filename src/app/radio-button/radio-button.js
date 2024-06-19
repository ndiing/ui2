import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppRadioButtonComponent extends MDElement {
    render() {
        return html`
            <md-form @onFormNativeSubmit="${this.handleFormNativeSubmit}">
                <div
                    style=""
                    class="md-layout-grid"
                >
                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <md-radio-button
                            name="radio-button"
                            value="1"
                            @onRadioButtonNativeInput="${console.log}"
                        ></md-radio-button>
                        <md-radio-button
                            name="radio-button"
                            value="2"
                            checked
                        ></md-radio-button>
                    </div>

                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <md-button
                            type="reset"
                            label="Reset"
                        ></md-button>
                        <md-button
                            type="submit"
                            label="Submit"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }

    handleFormNativeSubmit(event) {
        console.log(Array.from(new FormData(event.detail.currentTarget).entries()));
    }
}

customElements.define("app-radio-button", AppRadioButtonComponent);

export default document.createElement("app-radio-button");
