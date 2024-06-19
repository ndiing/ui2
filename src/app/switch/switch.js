import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppSwitchComponent extends MDElement {
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
                        <md-switch
                            name="switch"
                            value="1"
                            @onSwitchNativeInput="${console.log}"
                        ></md-switch>
                        <md-switch
                            name="switch"
                            value="2"
                            checked
                        ></md-switch>
                    </div>

                    <div
                        style=""
                        class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                    >
                        <md-switch
                            icons='["close","check"]'
                            name="switch"
                            value="1"
                        ></md-switch>
                        <md-switch
                            icons='["close","check"]'
                            name="switch"
                            value="2"
                            checked
                        ></md-switch>
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
        this.emit("onFormNativeSubmit", event);
    }
}

customElements.define("app-switch", AppSwitchComponent);

export default document.createElement("app-switch");
