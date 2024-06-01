import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppColorPickerElement extends MDElement{

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-column" style="margin:24px;">

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-color-picker
                        id="dateTimePicker1"
                        @onColorPickerChange="${(event) => {
                            document.querySelector('[name="theme-color"]')
                            .setAttribute('content',dateTimePicker1.selected);
                            
                            button1.label=dateTimePicker1.selected
                        }}"
                        @onColorPickerButtonOkClick="${(event) => dateTimePicker1.close()}"
                        @onColorPickerButtonCancelClick="${(event) => dateTimePicker1.close()}"
                        value="#6750a4"
                    ></md-color-picker>
                    <md-button id="button1" @click="${(event) => dateTimePicker1.show(event.currentTarget)}" label="color-picker"></md-button>
                </div>

            </div>
        `
    }
}

customElements.define('app-color-picker',AppColorPickerElement)

export default document.createElement('app-color-picker')