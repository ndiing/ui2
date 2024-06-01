import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppSideSheetElement extends MDElement{

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-border md-layout-fit">
                <md-side-sheet
                    label="Label"
                    .buttons="${[{label:'Button'},{label:'Button'}]}"
                    id="sidesheet1"
                    @onSideSheetButtonClick="${() => sidesheet1.toggle()}"
                >body</md-side-sheet>
                <md-side-sheet
                    label="Label"
                    .leadingActions="${[{icon:'image'}]}"
                    .trailingActions="${[{icon:'image'}]}"
                    .buttons="${[{label:'Button'},{label:'Button'}]}"
                    ui="modal"
                    id="sidesheet2"
                    @onSideSheetActionClick="${() => sidesheet2.toggle()}"
                    @onSideSheetButtonClick="${() => sidesheet2.toggle()}"
                >body</md-side-sheet>
                
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column" style="margin:24px;">
        
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-button @click="${() => sidesheet1.toggle()}" label="side-sheet"></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                            <md-button @click="${() => sidesheet2.toggle()}" label="side-sheet modal"></md-button>
                        </div>
        
                    </div>

                </div>
            </div>
        `
    }
}

customElements.define('app-side-sheet',AppSideSheetElement)

export default document.createElement('app-side-sheet')