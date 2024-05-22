import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevTopAppBar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-top-app-bar 
                    id="bar"
                    .leadingActions="${[{icon:'favorite'}]}" 
                    label="Label" 
                    .trailingActions="${[{icon:'favorite'},{icon:'favorite'},{icon:'favorite'}]}" 
                    @onTopAppBarActionClick="${this.handleClick}"
                ></md-top-app-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column" style="margin: 24px;">
                        <div class="md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button label="Small top app bar" @click="${this.handleClick}"></md-button>
                        </div>
        
                    </div>

                </div>
            </div>
        `;
    }

    get bar(){return this.querySelector('#bar')}
    handleClick(){if(this.bar.open){this.bar.close()}else{this.bar.show()}}
}

customElements.define("dev-top-app-bar", DevTopAppBar);

export default document.createElement("dev-top-app-bar");
