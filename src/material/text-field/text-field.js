import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";


class MDTextFieldComponent extends MDComponent {

    static properties={
        variant: { type: String },
        label: { type: String },
        icon: { type: String },
        prefix: { type: String },
        suffix: { type: String },
        actions: { type: Array },
        text: { type: String },

        accept: { type: String },
        alt: { type: String },
        autocomplete: { type: String },
        autofocus: { type: Boolean },
        checked: { type: Boolean },
        defaultChecked: { type: Boolean },
        disabled: { type: Boolean },
        form: { type: Object }, // Reference to the associated form element
        files: { type: FileList }, // Used with type="file"
        formAction: { type: String },
        formEnctype: { type: String },
        formMethod: { type: String },
        formNoValidate: { type: Boolean },
        formTarget: { type: String },
        height: { type: Number },
        indeterminate: { type: Boolean },
        list: { type: Object }, // Reference to the associated <datalist> element
        max: { type: String },
        maxLength: { type: Number },
        min: { type: String },
        minLength: { type: Number },
        multiple: { type: Boolean },
        name: { type: String },
        pattern: { type: String },
        placeholder: { type: String },
        readOnly: { type: Boolean },
        required: { type: Boolean },
        size: { type: Number },
        src: { type: String },
        step: { type: String },
        type: { type: String },
        defaultValue: { type: String },
        value: { type: String },
        width: { type: Number },

        errorText: {type:String},
        error: {type:Boolean},
    }

    variants = [
        
    ];

    constructor(){
        super()
        this.type='text'
    }

    renderIconButton(item) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                class="md-text-field__icon-button"
                name="${ifDefined(item.name)}"
                .name="${ifDefined(item.name)}"
                .variant="${ifDefined(item.variant)}"
                .icon="${ifDefined(item.icon)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
            ></md-icon-button>
        `;
    }

    get native(){
        return this.querySelector('.md-text-field__native')
    }

    render(){
        /* prettier-ignore */
        return html`
            <label class="md-text-field__inner">
                ${this.label?html`<div class="md-text-field__label">${this.label}</div>`:html`<div class="md-text-field__placeholder">Label</div>`}
                <div class="md-text-field__container">
                    ${this.icon?html`<md-icon class="md-text-field__icon">${this.icon}</md-icon>`:nothing}
                    ${this.prefix?html`<div class="md-text-field__meta">${this.prefix}</div>`:nothing}
                    <input 
                        class="md-text-field__native"
                        .accept="${ifDefined(this.accept)}"
                        .alt="${ifDefined(this.alt)}"
                        .autocomplete="${ifDefined(this.autocomplete)}"
                        .autofocus="${ifDefined(this.autofocus)}"
                        .checked="${ifDefined(this.checked)}"
                        .defaultChecked="${ifDefined(this.defaultChecked)}"
                        .disabled="${ifDefined(this.disabled)}"
                        .form="${ifDefined(this.form)}"
                        .files="${ifDefined(this.files)}"
                        .formAction="${ifDefined(this.formAction)}"
                        .formEnctype="${ifDefined(this.formEnctype)}"
                        .formMethod="${ifDefined(this.formMethod)}"
                        .formNoValidate="${ifDefined(this.formNoValidate)}"
                        .formTarget="${ifDefined(this.formTarget)}"
                        .height="${ifDefined(this.height)}"
                        .indeterminate="${ifDefined(this.indeterminate)}"
                        .list="${ifDefined(this.list)}"
                        .max="${ifDefined(this.max)}"
                        .maxLength="${ifDefined(this.maxLength)}"
                        .min="${ifDefined(this.min)}"
                        .minLength="${ifDefined(this.minLength)}"
                        .multiple="${ifDefined(this.multiple)}"
                        .name="${ifDefined(this.name)}"
                        .pattern="${ifDefined(this.pattern)}"
                        .placeholder="${ifDefined(this.placeholder)}"
                        .readOnly="${ifDefined(this.readOnly)}"
                        .required="${ifDefined(this.required)}"
                        .size="${ifDefined(this.size)}"
                        .src="${ifDefined(this.src)}"
                        .step="${ifDefined(this.step)}"
                        .type="${ifDefined(this.type)}"
                        .defaultValue="${ifDefined(this.defaultValue)}"
                        .value="${ifDefined(this.value)}"
                        .width="${ifDefined(this.width)}"
                        @focus="${this.handleTextFieldNativeFocus}"
                        @blur="${this.handleTextFieldNativeBlur}"
                        @invalid="${this.handleTextFieldNativeInvalid}"
                        @input="${this.handleTextFieldNativeInput}"
                        @reset="${this.handleTextFieldNativeReset}"
                    >
                    ${this.suffix?html`<div class="md-text-field__meta">${this.suffix}</div>`:nothing}
                    <div class="md-text-field__actions">
                        ${this.error?html`<md-icon class="md-text-field__icon md-text-field__icon--error">error</md-icon>`:nothing}
                        ${this.actions?.map(item=>this.renderIconButton(item))}
                    </div>
                </div>
                ${this.errorText||this.text?html`<div class="md-text-field__text">${this.errorText||this.text}</div>`:nothing}
            </label>
        `
    }

    
    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-text-field");

        this.defaultValue=this.value

        this.populated();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`${this.localName}--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }

    }

    handleTextFieldNativeFocus(event){

        this.classList.add('md-text-field--focused')

        this.emit('onTextFieldNativeFocus',event)
    }

    handleTextFieldNativeBlur(event){

        this.classList.remove('md-text-field--focused')

        this.emit('onTextFieldNativeBlur',event)
    }

    handleTextFieldNativeInvalid(event){
        event.preventDefault()

        this.populated();
        this.validate();


        this.emit('onTextFieldNativeInvalid',event)
    }

    validate() {
        this.errorText = this.native.validationMessage;
        this.error = !!this.errorText;
        this.classList.toggle('md-text-field--error', this.error);
    }

    populated() {
        this.classList.toggle('md-text-field--populated', !!this.value);
    }

    handleTextFieldNativeInput(event){

        this.value=this.native.value

        this.validate()

        // this.requestUpdate()

        this.emit('onTextFieldNativeInput',event)
    }

    handleTextFieldNativeReset(event){

        this.native.value=this.defaultValue
        this.value=this.defaultValue

        this.populated();
        this.validate()

        // this.requestUpdate()

        this.emit('onTextFieldNativeReset',event)
    }

}

customElements.define("md-text-field", MDTextFieldComponent);

export { MDTextFieldComponent };
