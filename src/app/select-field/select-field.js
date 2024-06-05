import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppSelectFieldElement extends MDElement {
    render() {
        return html`
            <md-form
                @onFormNativeSubmit="${(event) => {
                    console.log(Object.fromEntries(new FormData(event.detail.currentTarget).entries()));
                }}"
            >
                <div class="md-layout-column" style="margin:24px;">
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-select-field
                            label="Select Field"
                            name="color0"
                            .options="${[
                                //
                                { label: "Option 1", value: "1" },
                                { label: "Option 2", value: "2" },
                                { label: "Option 3", value: "3" },
                                { label: "Option 4", value: "4" },
                                { label: "Option 5", value: "5" },
                            ]}"
                        ></md-select-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-select-field
                            label="Select Field (value)"
                            name="color1"
                            .options="${[
                                //
                                { label: "Option 1", value: "1", selected: true },
                                { label: "Option 2", value: "2" },
                                { label: "Option 3", value: "3" },
                                { label: "Option 4", value: "4" },
                                { label: "Option 5", value: "5" },
                            ]}"
                        ></md-select-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-select-field
                            label="Select Field (required)"
                            name="color2"
                            required
                            .options="${[
                                //
                                { label: "Option 1", value: "1" },
                                { label: "Option 2", value: "2" },
                                { label: "Option 3", value: "3" },
                                { label: "Option 4", value: "4" },
                                { label: "Option 5", value: "5" },
                            ]}"
                        ></md-select-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <md-button type="reset" label="Reset"></md-button>
                        <md-button type="submit" label="Submit"></md-button>
                    </div>
                </div>
            </md-form>
        `;
    }
}

customElements.define("app-select-field", AppSelectFieldElement);

export default document.createElement("app-select-field");
