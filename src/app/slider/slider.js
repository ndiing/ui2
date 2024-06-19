import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppSliderComponent extends MDElement {
    render() {
        return html`
            <md-form @onFormNativeSubmit="${this.handleFormNativeSubmit}">
                <div
                    style=""
                    class="md-layout-grid"
                >
                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <br>
                        <br>
                        <br>
                        <md-slider name="centered" min="-1000000" max="1000000"></md-slider>
                    </div>
                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <br>
                        <br>
                        <br>
                        <md-slider name="continuous" min="0" max="1000000"></md-slider>
                    </div>
                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <br>
                        <br>
                        <br>
                        <md-slider name="discrete" step="100000" min="0" max="1000000"></md-slider>
                    </div>
                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <br>
                        <br>
                        <br>
                        <md-slider name="range-selection" min="1000000" max="10000000" value='[3000000,8000000]'></md-slider>
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

customElements.define("app-slider", AppSliderComponent);

export default document.createElement("app-slider");
