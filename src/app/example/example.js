import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { template } from "../../com/mixin/mixin";

class AppExampleElement extends MDElement {
    render() {
        return html`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    ${template({tag:'md-button',label:'Label'})}
                </div>
            </div>
        `;
    }
}

customElements.define("app-example", AppExampleElement);

export default document.createElement("app-example");
