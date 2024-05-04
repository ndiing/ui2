import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevBottomAppBar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--border md-layout--fit">
                <div class="md-layout__item--south" style="overflow:hidden;">
                    <md-bottom-app-bar
                        id="bottomAppBar1"
                        .actions="${[
                            {icon:"check_box"},
                            {icon:"brush"},
                            {icon:"mic"},
                            {icon:"image"},
                        ]}"
                        .fab="${{
                            icon:"add"
                        }}"
                        @onBottomAppBarActionClick="${console.log}"
                        @onBottomAppBarFabClick="${console.log}"
                    ></md-bottom-app-bar>
                    <md-bottom-app-bar
                        id="bottomAppBar2"
                        .actions="${[
                            {icon:"check_box"},
                            {icon:"brush"},
                            {icon:"mic"},
                            {icon:"image"},
                        ]}"
                        @onBottomAppBarActionClick="${console.log}"
                    ></md-bottom-app-bar>
                </div>
                <div class="md-layout__item--center" style="padding:24px;">
                    <md-button ui="filled-tonal" label="Icon buttons and FAB" @click="${this.handleClick1}"></md-button><br><br>
                    <md-button ui="filled-tonal" label="Icon buttons and no FAB" @click="${this.handleClick2}"></md-button><br><br>
                </div>
            </div>
        `;
    }

    handleClick1() {
        if (bottomAppBar1.open) bottomAppBar1.close();
        else bottomAppBar1.show();
    }

    handleClick2() {
        if (bottomAppBar2.open) bottomAppBar2.close();
        else bottomAppBar2.show();
    }
}

customElements.define("dev-bottom-app-bar", DevBottomAppBar);

export default document.createElement("dev-bottom-app-bar");
