import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppIconButtonElement extends MDElement {
    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-icon-button>image</md-icon-button>
                    <md-icon-button ui="filled">image</md-icon-button>
                    <md-icon-button ui="tonal">image</md-icon-button>
                    <md-icon-button ui="outlined">image</md-icon-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-icon-button toggle>image</md-icon-button>
                    <md-icon-button toggle ui="filled">image</md-icon-button>
                    <md-icon-button toggle ui="tonal">image</md-icon-button>
                    <md-icon-button toggle ui="outlined">image</md-icon-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-icon-button toggle selected>image</md-icon-button>
                    <md-icon-button toggle selected ui="filled">image</md-icon-button>
                    <md-icon-button toggle selected ui="tonal">image</md-icon-button>
                    <md-icon-button toggle selected ui="outlined">image</md-icon-button>
                </div>
            </div>
        `
    }
}

customElements.define("app-icon-button", AppIconButtonElement);

export default document.createElement("app-icon-button");
