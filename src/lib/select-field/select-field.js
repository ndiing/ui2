import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { ifDefined } from "lit/directives/if-defined.js";

class MDSelectField extends MDElement {
    static get properties() {
        return {
            label: { type: String },
            type: { type: String },
            name: { type: String },
            placeholder: { type: String },
            required: { type: Boolean },
            readOnly: { type: Boolean },
            value: { type: String },
            defaultValue: { type: String },
            text: { type: String },
            valid: { type: Boolean },
            validationMessage: { type: String },
        };
    }

    constructor() {
        super();
        this.type = "text";
    }

    render() {
        // prettier-ignore
        return html`
            ${this.label?html`
                <div class="md-select-field__label">
                    <label class="md-select-field__label-text">${this.label}</label>
                </div>
            `:nothing}
            <div class="md-select-field__container">
                <input 
                    class="md-select-field__native"
                    .type="${ifDefined(this.type)}"
                    .name="${ifDefined(this.name)}"
                    .placeholder="${ifDefined(this.placeholder)}"
                    .required="${ifDefined(this.required)}"
                    .readOnly="${ifDefined(this.readOnly)}"
                    .value="${ifDefined(this.value)}"
                    .defaultValue="${ifDefined(this.defaultValue)}"
                    @focus="${this.handleSelectFieldNativeFocus}"
                    @blur="${this.handleSelectFieldNativeBlur}"
                    @input="${this.handleSelectFieldNativeInput}"
                    @invalid="${this.handleSelectFieldNativeInvalid}"
                    @reset="${this.handleSelectFieldNativeReset}"
                >
                <div class="md-select-field__actions">
                    <div 
                        class="md-select-field__action"
                        @click="${this.handleSelectFieldActionClick}"
                    >arrow_drop_down</div>
                </div>
                <md-menu 
                    class="md-select-field__menu"
                    .list="${[
                        {label:'label1',value:'value1'},
                        {label:'label2',value:'value2'},
                        {label:'label3',value:'value3'},
                        {label:'label4',value:'value4'},
                    ]}"
                    @onListItemClick="${this.handleSelectFieldListContainerClick}"
                ></md-menu>
            </div>
            ${this.validationMessage??this.text?html`
                <div class="md-select-field__text">
                    <div class="md-select-field__text-message">${this.validationMessage??this.text}</div>
                </div>
            `:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-select-field");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-select-field");
    }

    updated(changedProperties) {}

    get selectFieldNative() {
        return this.querySelector(".md-select-field__native");
    }

    get selectFieldContainer() {
        return this.querySelector(".md-select-field__container");
    }

    get selectFieldMenu() {
        return this.querySelector(".md-select-field__menu");
    }

    handleSelectFieldNativeFocus(event) {
        this.emit("onSelectFieldNativeFocus", event);
    }

    handleSelectFieldNativeBlur(event) {
        this.emit("onSelectFieldNativeBlur", event);
    }

    handleSelectFieldNativeInput(event) {
        this.emit("onSelectFieldNativeInput", event);
    }

    handleSelectFieldNativeInvalid(event) {
        event.preventDefault();
        this.valid = this.selectFieldNative.validity.valid;
        this.validationMessage = this.selectFieldNative.validationMessage;
        this.emit("onSelectFieldNativeInvalid", event);
    }

    handleSelectFieldNativeReset(event) {
        this.valid = undefined;
        this.validationMessage = undefined;
        this.emit("onSelectFieldNativeReset", event);
    }

    handleSelectFieldActionClick(event) {
        const rect=this.selectFieldContainer.getBoundingClientRect()
        this.selectFieldMenu.style.width=rect.width+'px'
        this.selectFieldMenu.style.minWidth=rect.width+'px'
        this.selectFieldMenu.style.maxWidth=rect.width+'px'
        this.selectFieldMenu.show(this.selectFieldContainer,{

        })
    }

    handleSelectFieldListContainerClick(event){
        console.log(event)
    }
}
customElements.define("md-select-field", MDSelectField);
export { MDSelectField };
