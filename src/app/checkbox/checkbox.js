import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppCheckboxComponent extends MDElement {
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
                        <md-checkbox
                            name="checkbox"
                            value="1"
                            @onCheckboxNativeInput="${console.log}"
                            @onCheckboxNativeReset="${console.log}"
                        ></md-checkbox>
                        <md-checkbox
                            name="checkbox"
                            value="2"
                            indeterminate
                        ></md-checkbox>
                        <md-checkbox
                            name="checkbox"
                            value="3"
                            checked
                        ></md-checkbox>
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

customElements.define("app-checkbox", AppCheckboxComponent);

export default document.createElement("app-checkbox");
