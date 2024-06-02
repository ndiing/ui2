import { html } from "lit";
import { MDElement } from "../../com/element/element";

const format = new Intl.NumberFormat("id", {
    currency: "IDR",
    style: "currency",
}).format;

class AppSliderElement extends MDElement {
    render() {
        return html`
            <md-form
                @onFormNativeSubmit="${(event) => {
                    console.log(Object.fromEntries(new FormData(event.detail.currentTarget).entries()));
                }}"
            >
                <div
                    class="md-layout-column"
                    style="margin:24px;"
                >
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <br />
                        <br />
                        <md-slider
                            name="slider1"
                            min="-50"
                            max="50"
                            value="-23"
                        ></md-slider>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <br />
                        <br />
                        <md-slider name="slider2"></md-slider>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <br />
                        <br />
                        <md-slider
                            name="slider3"
                            step="10"
                        ></md-slider>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <br />
                        <br />
                        <md-slider
                            name="slider4"
                            value="[25,75]"
                        ></md-slider>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <br />
                        <br />
                        <md-slider
                            name="slider5"
                            min="1000000"
                            max="10000000"
                            value="[2000000,4000000]"
                            .convertLabel="${format}"
                        ></md-slider>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
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
}

customElements.define("app-slider", AppSliderElement);

export default document.createElement("app-slider");
