import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppNavigationRailElement extends MDElement {
    constructor() {
        super();

        this.list1 = [
            { leadingIcon: "image", label: "Label 1", selected: true },
            { leadingIcon: "image", label: "Label 2", badge: { label: 0 } },
            { leadingIcon: "image", label: "Label 3", badge: { label: 1 } },
            { leadingIcon: "image", label: "Label 4", badge: { label: 1000 } },
        ];
        this.list2 = [
            { leadingIcon: "image", selected: true },
            { leadingIcon: "image", badge: { label: 0 } },
            { leadingIcon: "image", badge: { label: 1 } },
            { leadingIcon: "image", badge: { label: 1000 } },
        ];
    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-navigation-rail
                    .list="${this.list1}"
                    id="navigationDrawer1"
                ></md-navigation-rail>
                
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border md-layout-fit">
                        <md-navigation-rail
                            .list="${this.list2}"
                            id="navigationDrawer2"
                        ></md-navigation-rail>
                        
                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-column" style="margin:24px;">
                
                                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-button @click="${() => navigationDrawer1.toggle()}" label="navigation-rail"></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                    <md-button @click="${() => navigationDrawer2.toggle()}" label="navigation-rail"></md-button>
                                </div>
                
                            </div>
        
                        </div>
                    </div>

                </div>
            </div>
        `
    }
}

customElements.define("app-navigation-rail", AppNavigationRailElement);

export default document.createElement("app-navigation-rail");
