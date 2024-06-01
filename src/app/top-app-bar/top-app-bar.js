import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppTopAppBarElement extends MDElement{

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-top-app-bar
                    label="Title Large"
                    .leadingActions="${[{icon:'image'}]}"
                    .trailingActions="${[{icon:'image'}]}"
                    ui="center-aligned"
                    id="sidesheet1"
                ></md-top-app-bar>
                
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border md-layout-fit">
                        <md-top-app-bar
                            label="Title Large"
                            .leadingActions="${[{icon:'image'}]}"
                            .trailingActions="${[{icon:'image'},{icon:'image'},{icon:'image'}]}"
                            ui="small"
                            id="sidesheet2"
                        ></md-top-app-bar>
                        
                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-border md-layout-fit">
                                <md-top-app-bar
                                    label="Headline Small"
                                    .leadingActions="${[{icon:'image'}]}"
                                    .trailingActions="${[{icon:'image'},{icon:'image'},{icon:'image'}]}"
                                    ui="medium"
                                    id="sidesheet3"
                                ></md-top-app-bar>
                                
                                <div class="md-layout-border__item md-layout-border__item--center">
                                    <div class="md-layout-border md-layout-fit">
                                        <md-top-app-bar
                                            label="Headline Medium"
                                            .leadingActions="${[{icon:'image'}]}"
                                            .trailingActions="${[{icon:'image'},{icon:'image'},{icon:'image'}]}"
                                            ui="large"
                                            id="sidesheet4"
                                        ></md-top-app-bar>
                                        
                                        <div class="md-layout-border__item md-layout-border__item--center">
                                            <div class="md-layout-column" style="margin:24px;">
                                
                                                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                                    <md-button @click="${() => sidesheet1.toggle()}" label="top-app-bar"></md-button>
                                                </div>
                                                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                                    <md-button @click="${() => sidesheet2.toggle()}" label="top-app-bar"></md-button>
                                                </div>
                                                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                                    <md-button @click="${() => sidesheet3.toggle()}" label="top-app-bar"></md-button>
                                                </div>
                                                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                                                    <md-button @click="${() => sidesheet4.toggle()}" label="top-app-bar"></md-button>
                                                </div>
                                
                                            </div>
                        
                                        </div>
                                    </div>
                
                                </div>
                            </div>
        
                        </div>
                    </div>

                </div>
            </div>
        `
    }
}

customElements.define('app-top-app-bar',AppTopAppBarElement)

export default document.createElement('app-top-app-bar')