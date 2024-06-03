## Classes

<dl>
<dt><a href="#MDNumberFieldComponent">MDNumberFieldComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
<dt><a href="#MDNumberFieldComponent">MDNumberFieldComponent</a></dt>
<dd></dd>
</dl>

<a name="MDNumberFieldComponent"></a>

## MDNumberFieldComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDNumberFieldComponent](#MDNumberFieldComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.numberFieldNative](#MDNumberFieldComponent+numberFieldNative)
        * [.render()](#MDNumberFieldComponent+render)
        * [.connectedCallback()](#MDNumberFieldComponent+connectedCallback)
        * [.disconnectedCallback()](#MDNumberFieldComponent+disconnectedCallback)
        * [.firstUpdated()](#MDNumberFieldComponent+firstUpdated)
        * [.updated()](#MDNumberFieldComponent+updated)
        * [.handleNumberFieldNativeActionClick()](#MDNumberFieldComponent+handleNumberFieldNativeActionClick)
        * [.handleNumberFieldNativeActionStepDownClick()](#MDNumberFieldComponent+handleNumberFieldNativeActionStepDownClick)
        * [.handleNumberFieldNativeActionStepUpClick()](#MDNumberFieldComponent+handleNumberFieldNativeActionStepUpClick)
        * [.handleNumberFieldNativeFocus()](#MDNumberFieldComponent+handleNumberFieldNativeFocus)
        * [.handleNumberFieldNativeBlur()](#MDNumberFieldComponent+handleNumberFieldNativeBlur)
        * [.handleNumberFieldNativeInput()](#MDNumberFieldComponent+handleNumberFieldNativeInput)
        * [.handleNumberFieldNativeInvalid()](#MDNumberFieldComponent+handleNumberFieldNativeInvalid)
        * [.handleNumberFieldNativeReset()](#MDNumberFieldComponent+handleNumberFieldNativeReset)
    * _static_
        * [.properties](#MDNumberFieldComponent.properties)

<a name="MDNumberFieldComponent+numberFieldNative"></a>

### mdNumberFieldComponent.numberFieldNative
**Kind**: instance property of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
<a name="MDNumberFieldComponent+render"></a>

### mdNumberFieldComponent.render()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
<a name="MDNumberFieldComponent+connectedCallback"></a>

### mdNumberFieldComponent.connectedCallback()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
<a name="MDNumberFieldComponent+disconnectedCallback"></a>

### mdNumberFieldComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
<a name="MDNumberFieldComponent+firstUpdated"></a>

### mdNumberFieldComponent.firstUpdated()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
<a name="MDNumberFieldComponent+updated"></a>

### mdNumberFieldComponent.updated()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
<a name="MDNumberFieldComponent+handleNumberFieldNativeActionClick"></a>

### mdNumberFieldComponent.handleNumberFieldNativeActionClick()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeActionClick</code>  
<a name="MDNumberFieldComponent+handleNumberFieldNativeActionStepDownClick"></a>

### mdNumberFieldComponent.handleNumberFieldNativeActionStepDownClick()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeActionStepDownClick</code>  
<a name="MDNumberFieldComponent+handleNumberFieldNativeActionStepUpClick"></a>

### mdNumberFieldComponent.handleNumberFieldNativeActionStepUpClick()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeActionStepUpClick</code>  
<a name="MDNumberFieldComponent+handleNumberFieldNativeFocus"></a>

### mdNumberFieldComponent.handleNumberFieldNativeFocus()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeFocus</code>  
<a name="MDNumberFieldComponent+handleNumberFieldNativeBlur"></a>

### mdNumberFieldComponent.handleNumberFieldNativeBlur()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeBlur</code>  
<a name="MDNumberFieldComponent+handleNumberFieldNativeInput"></a>

### mdNumberFieldComponent.handleNumberFieldNativeInput()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeInput</code>  
<a name="MDNumberFieldComponent+handleNumberFieldNativeInvalid"></a>

### mdNumberFieldComponent.handleNumberFieldNativeInvalid()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeInvalid</code>  
<a name="MDNumberFieldComponent+handleNumberFieldNativeReset"></a>

### mdNumberFieldComponent.handleNumberFieldNativeReset()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeReset</code>  
<a name="MDNumberFieldComponent.properties"></a>

### MDNumberFieldComponent.properties
**Kind**: static property of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [autocapitalize] | <code>Boolean</code> | - |
| [autocomplete] | <code>String</code> | - |
| [disabled] | <code>Boolean</code> | - |
| [form] | <code>String</code> | - |
| [list] | <code>String</code> | - |
| [name] | <code>String</code> | - |
| [readonly] | <code>Boolean</code> | - |
| [required] | <code>Boolean</code> | - |
| [type] | <code>String</code> | - |
| [value] | <code>Number</code> | - |
| [max] | <code>Number</code> | - |
| [min] | <code>Number</code> | - |
| [placeholder] | <code>String</code> | - |
| [step] | <code>Number</code> | - |
| [defaultValue] | <code>Number</code> | - |
| [label] | <code>String</code> | - |
| [leadingIcon] | <code>String</code> | - |
| [leadingMeta] | <code>String</code> | - |
| [trailingMeta] | <code>String</code> | - |
| [trailingActions] | <code>Array</code> | - |
| [trailingIcon] | <code>String</code> | - |
| [text] | <code>String</code> | - |
| [focused] | <code>Boolean</code> | - |
| [populated] | <code>Boolean</code> | - |
| [invalid] | <code>Boolean</code> | - |
| [validationMessage] | <code>String</code> | - |
| [ui] | <code>String</code> | filled,outlined,rounded |

<a name="MDNumberFieldComponent"></a>

## MDNumberFieldComponent
**Kind**: global class  

* [MDNumberFieldComponent](#MDNumberFieldComponent)
    * _instance_
        * [.numberFieldNative](#MDNumberFieldComponent+numberFieldNative)
        * [.render()](#MDNumberFieldComponent+render)
        * [.connectedCallback()](#MDNumberFieldComponent+connectedCallback)
        * [.disconnectedCallback()](#MDNumberFieldComponent+disconnectedCallback)
        * [.firstUpdated()](#MDNumberFieldComponent+firstUpdated)
        * [.updated()](#MDNumberFieldComponent+updated)
        * [.handleNumberFieldNativeActionClick()](#MDNumberFieldComponent+handleNumberFieldNativeActionClick)
        * [.handleNumberFieldNativeActionStepDownClick()](#MDNumberFieldComponent+handleNumberFieldNativeActionStepDownClick)
        * [.handleNumberFieldNativeActionStepUpClick()](#MDNumberFieldComponent+handleNumberFieldNativeActionStepUpClick)
        * [.handleNumberFieldNativeFocus()](#MDNumberFieldComponent+handleNumberFieldNativeFocus)
        * [.handleNumberFieldNativeBlur()](#MDNumberFieldComponent+handleNumberFieldNativeBlur)
        * [.handleNumberFieldNativeInput()](#MDNumberFieldComponent+handleNumberFieldNativeInput)
        * [.handleNumberFieldNativeInvalid()](#MDNumberFieldComponent+handleNumberFieldNativeInvalid)
        * [.handleNumberFieldNativeReset()](#MDNumberFieldComponent+handleNumberFieldNativeReset)
    * _static_
        * [.properties](#MDNumberFieldComponent.properties)

<a name="MDNumberFieldComponent+numberFieldNative"></a>

### mdNumberFieldComponent.numberFieldNative
**Kind**: instance property of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
<a name="MDNumberFieldComponent+render"></a>

### mdNumberFieldComponent.render()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
<a name="MDNumberFieldComponent+connectedCallback"></a>

### mdNumberFieldComponent.connectedCallback()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
<a name="MDNumberFieldComponent+disconnectedCallback"></a>

### mdNumberFieldComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
<a name="MDNumberFieldComponent+firstUpdated"></a>

### mdNumberFieldComponent.firstUpdated()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
<a name="MDNumberFieldComponent+updated"></a>

### mdNumberFieldComponent.updated()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
<a name="MDNumberFieldComponent+handleNumberFieldNativeActionClick"></a>

### mdNumberFieldComponent.handleNumberFieldNativeActionClick()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeActionClick</code>  
<a name="MDNumberFieldComponent+handleNumberFieldNativeActionStepDownClick"></a>

### mdNumberFieldComponent.handleNumberFieldNativeActionStepDownClick()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeActionStepDownClick</code>  
<a name="MDNumberFieldComponent+handleNumberFieldNativeActionStepUpClick"></a>

### mdNumberFieldComponent.handleNumberFieldNativeActionStepUpClick()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeActionStepUpClick</code>  
<a name="MDNumberFieldComponent+handleNumberFieldNativeFocus"></a>

### mdNumberFieldComponent.handleNumberFieldNativeFocus()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeFocus</code>  
<a name="MDNumberFieldComponent+handleNumberFieldNativeBlur"></a>

### mdNumberFieldComponent.handleNumberFieldNativeBlur()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeBlur</code>  
<a name="MDNumberFieldComponent+handleNumberFieldNativeInput"></a>

### mdNumberFieldComponent.handleNumberFieldNativeInput()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeInput</code>  
<a name="MDNumberFieldComponent+handleNumberFieldNativeInvalid"></a>

### mdNumberFieldComponent.handleNumberFieldNativeInvalid()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeInvalid</code>  
<a name="MDNumberFieldComponent+handleNumberFieldNativeReset"></a>

### mdNumberFieldComponent.handleNumberFieldNativeReset()
**Kind**: instance method of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Emits**: <code>MDNumberFieldComponent#event:onNumberFieldNativeReset</code>  
<a name="MDNumberFieldComponent.properties"></a>

### MDNumberFieldComponent.properties
**Kind**: static property of [<code>MDNumberFieldComponent</code>](#MDNumberFieldComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [autocapitalize] | <code>Boolean</code> | - |
| [autocomplete] | <code>String</code> | - |
| [disabled] | <code>Boolean</code> | - |
| [form] | <code>String</code> | - |
| [list] | <code>String</code> | - |
| [name] | <code>String</code> | - |
| [readonly] | <code>Boolean</code> | - |
| [required] | <code>Boolean</code> | - |
| [type] | <code>String</code> | - |
| [value] | <code>Number</code> | - |
| [max] | <code>Number</code> | - |
| [min] | <code>Number</code> | - |
| [placeholder] | <code>String</code> | - |
| [step] | <code>Number</code> | - |
| [defaultValue] | <code>Number</code> | - |
| [label] | <code>String</code> | - |
| [leadingIcon] | <code>String</code> | - |
| [leadingMeta] | <code>String</code> | - |
| [trailingMeta] | <code>String</code> | - |
| [trailingActions] | <code>Array</code> | - |
| [trailingIcon] | <code>String</code> | - |
| [text] | <code>String</code> | - |
| [focused] | <code>Boolean</code> | - |
| [populated] | <code>Boolean</code> | - |
| [invalid] | <code>Boolean</code> | - |
| [validationMessage] | <code>String</code> | - |
| [ui] | <code>String</code> | filled,outlined,rounded |

