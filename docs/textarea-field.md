<a name="MDTextareaFieldComponent"></a>

## MDTextareaFieldComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDTextareaFieldComponent](#MDTextareaFieldComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.textareaFieldNative](#MDTextareaFieldComponent+textareaFieldNative)
        -   [.render()](#MDTextareaFieldComponent+render)
        -   [.connectedCallback()](#MDTextareaFieldComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDTextareaFieldComponent+disconnectedCallback)
        -   [.firstUpdated()](#MDTextareaFieldComponent+firstUpdated)
        -   [.updated()](#MDTextareaFieldComponent+updated)
        -   [.handleTextareaFieldNativeActionClick()](#MDTextareaFieldComponent+handleTextareaFieldNativeActionClick)
        -   [.handleTextareaFieldNativeFocus()](#MDTextareaFieldComponent+handleTextareaFieldNativeFocus)
        -   [.handleTextareaFieldNativeBlur()](#MDTextareaFieldComponent+handleTextareaFieldNativeBlur)
        -   [.handleTextareaFieldNativeInput()](#MDTextareaFieldComponent+handleTextareaFieldNativeInput)
        -   [.handleTextareaFieldNativeInvalid()](#MDTextareaFieldComponent+handleTextareaFieldNativeInvalid)
        -   [.handleTextareaFieldNativeReset()](#MDTextareaFieldComponent+handleTextareaFieldNativeReset)
    -   _static_
        -   [.properties](#MDTextareaFieldComponent.properties)

<a name="MDTextareaFieldComponent+textareaFieldNative"></a>

### mdTextareaFieldComponent.textareaFieldNative

**Kind**: instance property of [<code>MDTextareaFieldComponent</code>](#MDTextareaFieldComponent)  
<a name="MDTextareaFieldComponent+render"></a>

### mdTextareaFieldComponent.render()

**Kind**: instance method of [<code>MDTextareaFieldComponent</code>](#MDTextareaFieldComponent)  
<a name="MDTextareaFieldComponent+connectedCallback"></a>

### mdTextareaFieldComponent.connectedCallback()

**Kind**: instance method of [<code>MDTextareaFieldComponent</code>](#MDTextareaFieldComponent)  
<a name="MDTextareaFieldComponent+disconnectedCallback"></a>

### mdTextareaFieldComponent.disconnectedCallback()

**Kind**: instance method of [<code>MDTextareaFieldComponent</code>](#MDTextareaFieldComponent)  
<a name="MDTextareaFieldComponent+firstUpdated"></a>

### mdTextareaFieldComponent.firstUpdated()

**Kind**: instance method of [<code>MDTextareaFieldComponent</code>](#MDTextareaFieldComponent)  
<a name="MDTextareaFieldComponent+updated"></a>

### mdTextareaFieldComponent.updated()

**Kind**: instance method of [<code>MDTextareaFieldComponent</code>](#MDTextareaFieldComponent)  
<a name="MDTextareaFieldComponent+handleTextareaFieldNativeActionClick"></a>

### mdTextareaFieldComponent.handleTextareaFieldNativeActionClick()

**Kind**: instance method of [<code>MDTextareaFieldComponent</code>](#MDTextareaFieldComponent)  
**Emits**: <code>MDTextareaFieldComponent#event:onTextareaFieldNativeActionClick</code>  
<a name="MDTextareaFieldComponent+handleTextareaFieldNativeFocus"></a>

### mdTextareaFieldComponent.handleTextareaFieldNativeFocus()

**Kind**: instance method of [<code>MDTextareaFieldComponent</code>](#MDTextareaFieldComponent)  
**Emits**: <code>MDTextareaFieldComponent#event:onTextareaFieldNativeFocus</code>  
<a name="MDTextareaFieldComponent+handleTextareaFieldNativeBlur"></a>

### mdTextareaFieldComponent.handleTextareaFieldNativeBlur()

**Kind**: instance method of [<code>MDTextareaFieldComponent</code>](#MDTextareaFieldComponent)  
**Emits**: <code>MDTextareaFieldComponent#event:onTextareaFieldNativeBlur</code>  
<a name="MDTextareaFieldComponent+handleTextareaFieldNativeInput"></a>

### mdTextareaFieldComponent.handleTextareaFieldNativeInput()

**Kind**: instance method of [<code>MDTextareaFieldComponent</code>](#MDTextareaFieldComponent)  
**Emits**: <code>MDTextareaFieldComponent#event:onTextareaFieldNativeInput</code>  
<a name="MDTextareaFieldComponent+handleTextareaFieldNativeInvalid"></a>

### mdTextareaFieldComponent.handleTextareaFieldNativeInvalid()

**Kind**: instance method of [<code>MDTextareaFieldComponent</code>](#MDTextareaFieldComponent)  
**Emits**: <code>MDTextareaFieldComponent#event:onTextareaFieldNativeInvalid</code>  
<a name="MDTextareaFieldComponent+handleTextareaFieldNativeReset"></a>

### mdTextareaFieldComponent.handleTextareaFieldNativeReset()

**Kind**: instance method of [<code>MDTextareaFieldComponent</code>](#MDTextareaFieldComponent)  
**Emits**: <code>MDTextareaFieldComponent#event:onTextareaFieldNativeReset</code>  
<a name="MDTextareaFieldComponent.properties"></a>

### MDTextareaFieldComponent.properties

**Kind**: static property of [<code>MDTextareaFieldComponent</code>](#MDTextareaFieldComponent)  
**Properties**

| Name                | Type                 | Description             |
| ------------------- | -------------------- | ----------------------- |
| [name]              | <code>String</code>  | -                       |
| [placeholder]       | <code>String</code>  | -                       |
| [cols]              | <code>Number</code>  | -                       |
| [rows]              | <code>Number</code>  | -                       |
| [maxlength]         | <code>Number</code>  | -                       |
| [minlength]         | <code>Number</code>  | -                       |
| [readonly]          | <code>Boolean</code> | -                       |
| [disabled]          | <code>Boolean</code> | -                       |
| [required]          | <code>Boolean</code> | -                       |
| [autocomplete]      | <code>String</code>  | -                       |
| [autofocus]         | <code>Boolean</code> | -                       |
| [spellcheck]        | <code>Boolean</code> | -                       |
| [value]             | <code>String</code>  | -                       |
| [defaultValue]      | <code>String</code>  | -                       |
| [label]             | <code>String</code>  | -                       |
| [leadingIcon]       | <code>String</code>  | -                       |
| [leadingMeta]       | <code>String</code>  | -                       |
| [trailingMeta]      | <code>String</code>  | -                       |
| [trailingActions]   | <code>Array</code>   | -                       |
| [trailingIcon]      | <code>String</code>  | -                       |
| [text]              | <code>String</code>  | -                       |
| [focused]           | <code>Boolean</code> | -                       |
| [populated]         | <code>Boolean</code> | -                       |
| [invalid]           | <code>Boolean</code> | -                       |
| [validationMessage] | <code>String</code>  | -                       |
| [ui]                | <code>String</code>  | filled,outlined,rounded |
