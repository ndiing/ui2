import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevLayout extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-pane ui="sheet" class="md-layout-border__item md-layout-border__item--north" style="height:80px; margin-top:-80px;">
                    north
                    lorem1000
                </md-pane>
                <md-pane ui="sheet" class="md-layout-border__item md-layout-border__item--east" style="width:360px; margin-right:-360px;">
                    east
                    lorem1000
                </md-pane>
                <md-pane ui="sheet" class="md-layout-border__item md-layout-border__item--south" style="height:80px; margin-bottom:-80px;">
                    south
                    lorem1000
                </md-pane>
                <md-pane ui="sheet" class="md-layout-border__item md-layout-border__item--west" style="width:360px; margin-left:-360px;">
                    west
                    lorem1000
                </md-pane>
                <md-pane ui="sheet" class="md-layout-border__item md-layout-border__item--center">
                    center
                    lorem1000
                </md-pane>
            </div>
        `;
    }
}

customElements.define("dev-layout", DevLayout);

export default document.createElement("dev-layout");
