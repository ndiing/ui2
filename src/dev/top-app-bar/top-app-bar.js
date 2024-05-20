import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTopAppBar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                <div class="md-layout-border__item md-layout-border__item--north">
                    <md-top-app-bar
                        id="top-app-bar"
                        .leadingActions="${[
                            {icon:"arrow_back"},
                        ]}"
                        .label="${"Title large"}"
                        .trailingActions="${[
                            {icon:"attach_file"},
                            {icon:"today"},
                            {icon:"more_vert"},
                        ]}"
                        .open="${true}"
                        @onTopAppBarActionClick="${console.log}"
                    ></md-top-app-bar>
                </div>
                <div class="md-layout-border__item md-layout-border__item--center" style="padding:24px;">
                    <md-button ui="filled-tonal" label="Small top app bar" @click="${this.handleClick}"></md-button>
                </div>
            </div>
        `;
    }

    get topAppBar() {
        return this.querySelector("#top-app-bar");
    }

    handleClick() {
        if (this.topAppBar.open) {
            this.topAppBar.close();
        } else {
            this.topAppBar.show();
        }
    }
}

customElements.define("dev-top-app-bar", DevTopAppBar);

export default document.createElement("dev-top-app-bar");
