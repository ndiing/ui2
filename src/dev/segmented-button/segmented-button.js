import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSegmentedButton extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-segmented-button
                        .buttons="${[
                            {label:'Day',selected:true},
                            {label:'Week'},
                            {label:'Month'},
                        ]}"
                    ></md-segmented-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-segmented-button
                        .buttons="${[
                            {label:'$',selected:true},
                            {label:'$$',selected:true},
                            {label:'$$$'},
                        ]}"
                    ></md-segmented-button>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-segmented-button", DevSegmentedButton);

export default document.createElement("dev-segmented-button");
