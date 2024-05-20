import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevBottomAppBar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-bottom-app-bar
                    id="bottom-app-bar"
                    .actions="${[
                        "check_box",
                        "brush",
                        "mic",
                        "image",
                    ]}"
                    .fab="${{
                        icon:"add"
                    }}"
                    .open="${true}"
                    @onBottomAppBarActionClick="${console.log}"
                    @onBottomAppBarFabClick="${console.log}"
                ></md-bottom-app-bar>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border md-layout-fit">
                        <md-bottom-app-bar
                            id="bottom-app-bar2"
                            .actions="${[
                                {icon:"check_box"},
                                {icon:"brush"},
                                {icon:"mic"},
                                {icon:"image"},
                            ]}"
                            @onBottomAppBarActionClick="${console.log}"
                        ></md-bottom-app-bar>
                        <div class="md-layout-border__item md-layout-border__item--center" style="padding:24px;">
                            <md-button ui="filled-tonal" label="Icon buttons and FAB" @click="${this.handleClick}"></md-button><br><br>
                            <md-button ui="filled-tonal" label="Icon buttons and no FAB" @click="${this.handleClick2}"></md-button><br><br>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    get bottomAppBar() {
        return this.querySelector("#bottom-app-bar");
    }

    get bottomAppBar2() {
        return this.querySelector("#bottom-app-bar2");
    }

    handleClick() {
        if (this.bottomAppBar.open) {
            this.bottomAppBar.close();
        } else {
            this.bottomAppBar.show();
        }
    }

    handleClick2() {
        if (this.bottomAppBar2.open) {
            this.bottomAppBar2.close();
        } else {
            this.bottomAppBar2.show();
        }
    }
}

customElements.define("dev-bottom-app-bar", DevBottomAppBar);

export default document.createElement("dev-bottom-app-bar");
