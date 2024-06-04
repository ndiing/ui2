import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppButtonElement extends MDElement {
    render() {
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-button ui="elevated" label="Label"></md-button>
                    <md-button ui="elevated" label="Label" icon="image"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-button ui="filled" label="Label"></md-button>
                    <md-button ui="filled" label="Label" icon="image"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-button ui="tonal" label="Label"></md-button>
                    <md-button ui="tonal" label="Label" icon="image"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-button ui="outlined" label="Label"></md-button>
                    <md-button ui="outlined" label="Label" icon="image"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-button ui="" label="Label"></md-button>
                    <md-button ui="" label="Label" icon="image"></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-button style="width:112px;" ui="tonal" label="Label"></md-button>
                    <md-button style="width:112px;" ui="tonal" label="Label" icon="image"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-button style="width:560px;" ui="tonal" label="Label"></md-button>
                    <md-button style="width:560px;" ui="tonal" label="Label" icon="image"></md-button>
                </div>
            </div>
        `;
    }
}

customElements.define("app-button", AppButtonElement);

export default document.createElement("app-button");
