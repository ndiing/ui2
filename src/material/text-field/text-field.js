import { html } from "lit";
import { MDComponent } from "../component/component.js";


class MDTextFieldComponent extends MDComponent {

    static properties={

    }

    constructor(){
        super()
    }

    render(){
        /* prettier-ignore */
        return html`
            <label class="md-text-field__inner">
                ${this.label?html`<div class="md-text-field__label"></div>`:html`<div class="md-text-field__placeholder">Label</div>`}
                <div class="md-text-field__container">
                    <md-icon class="md-text-field__icon"></md-icon>
                    <div class="md-text-field__meta"></div>
                    <input 
                        type="text" 
                        class="md-text-field__native"
                    >
                    <div class="md-text-field__meta"></div>
                    <div class="md-text-field__actions">
                        <md-icon-button class="md-text-field__action" ></md-icon-button>
                        <md-icon-button class="md-text-field__action" ></md-icon-button>
                    </div>
                </div>
                <div class="md-text-field__text"></div>
            </label>
        `
    }

    
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");
    }
}

customElements.define("md-text-field", MDTextFieldComponent);

export { MDTextFieldComponent };
