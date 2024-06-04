<a name="MDBottomAppBarComponent"></a>

## MDBottomAppBarComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDBottomAppBarComponent](#MDBottomAppBarComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.render()](#MDBottomAppBarComponent+render)
        * [.connectedCallback()](#MDBottomAppBarComponent+connectedCallback)
        * [.disconnectedCallback()](#MDBottomAppBarComponent+disconnectedCallback)
        * [.updated()](#MDBottomAppBarComponent+updated)
        * [.close()](#MDBottomAppBarComponent+close)
        * [.toggle()](#MDBottomAppBarComponent+toggle)
        * [.handleBottomAppBarActionClick()](#MDBottomAppBarComponent+handleBottomAppBarActionClick)
        * [.handleBottomAppBarButtonClick()](#MDBottomAppBarComponent+handleBottomAppBarButtonClick)
    * _static_
        * [.properties](#MDBottomAppBarComponent.properties)

<a name="MDBottomAppBarComponent+render"></a>

### mdBottomAppBarComponent.render()
**Kind**: instance method of [<code>MDBottomAppBarComponent</code>](#MDBottomAppBarComponent)  
<a name="MDBottomAppBarComponent+connectedCallback"></a>

### mdBottomAppBarComponent.connectedCallback()
**Kind**: instance method of [<code>MDBottomAppBarComponent</code>](#MDBottomAppBarComponent)  
<a name="MDBottomAppBarComponent+disconnectedCallback"></a>

### mdBottomAppBarComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDBottomAppBarComponent</code>](#MDBottomAppBarComponent)  
<a name="MDBottomAppBarComponent+updated"></a>

### mdBottomAppBarComponent.updated()
**Kind**: instance method of [<code>MDBottomAppBarComponent</code>](#MDBottomAppBarComponent)  
<a name="MDBottomAppBarComponent+close"></a>

### mdBottomAppBarComponent.close()
**Kind**: instance method of [<code>MDBottomAppBarComponent</code>](#MDBottomAppBarComponent)  
<a name="MDBottomAppBarComponent+toggle"></a>

### mdBottomAppBarComponent.toggle()
**Kind**: instance method of [<code>MDBottomAppBarComponent</code>](#MDBottomAppBarComponent)  
<a name="MDBottomAppBarComponent+handleBottomAppBarActionClick"></a>

### mdBottomAppBarComponent.handleBottomAppBarActionClick()
**Kind**: instance method of [<code>MDBottomAppBarComponent</code>](#MDBottomAppBarComponent)  
**Emits**: <code>MDBottomAppBarComponent#event:onBottomAppBarActionClick</code>  
<a name="MDBottomAppBarComponent+handleBottomAppBarButtonClick"></a>

### mdBottomAppBarComponent.handleBottomAppBarButtonClick()
**Kind**: instance method of [<code>MDBottomAppBarComponent</code>](#MDBottomAppBarComponent)  
**Emits**: <code>MDBottomAppBarComponent#event:onBottomAppBarButtonClick</code>  
<a name="MDBottomAppBarComponent.properties"></a>

### MDBottomAppBarComponent.properties
**Kind**: static property of [<code>MDBottomAppBarComponent</code>](#MDBottomAppBarComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [leadingActions] | <code>Array</code> | Represents actions aligned to the start of the bottom app bar. |
| [label] | <code>String</code> | Represents the label of the bottom app bar. |
| [subLabel] | <code>String</code> | Represents the sub-label of the bottom app bar. |
| [trailingActions] | <code>Array</code> | Represents actions aligned to the end of the bottom app bar. |
| [buttons] | <code>Array</code> | Represents buttons within the bottom app bar. |
| [ui] | <code>String</code> | Represents the UI style of the bottom app bar. |
| [open] | <code>Boolean</code> | Indicates whether the bottom app bar is open. |
| [fab] | <code>Object</code> | Represents the floating action button associated with the bottom app bar. |
