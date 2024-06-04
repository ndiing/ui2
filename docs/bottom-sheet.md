<a name="MDBottomSheetComponent"></a>

## MDBottomSheetComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDBottomSheetComponent](#MDBottomSheetComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.render()](#MDBottomSheetComponent+render)
        * [.connectedCallback()](#MDBottomSheetComponent+connectedCallback)
        * [.disconnectedCallback()](#MDBottomSheetComponent+disconnectedCallback)
        * [.updated()](#MDBottomSheetComponent+updated)
        * [.show()](#MDBottomSheetComponent+show)
        * [.close()](#MDBottomSheetComponent+close)
        * [.toggle()](#MDBottomSheetComponent+toggle)
        * [.handleBottomSheetActionClick()](#MDBottomSheetComponent+handleBottomSheetActionClick)
        * [.handleBottomSheetButtonClick()](#MDBottomSheetComponent+handleBottomSheetButtonClick)
        * [.handleBottomSheetScrimClick()](#MDBottomSheetComponent+handleBottomSheetScrimClick)
    * _static_
        * [.properties](#MDBottomSheetComponent.properties)

<a name="MDBottomSheetComponent+render"></a>

### mdBottomSheetComponent.render()
**Kind**: instance method of [<code>MDBottomSheetComponent</code>](#MDBottomSheetComponent)  
<a name="MDBottomSheetComponent+connectedCallback"></a>

### mdBottomSheetComponent.connectedCallback()
**Kind**: instance method of [<code>MDBottomSheetComponent</code>](#MDBottomSheetComponent)  
<a name="MDBottomSheetComponent+disconnectedCallback"></a>

### mdBottomSheetComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDBottomSheetComponent</code>](#MDBottomSheetComponent)  
<a name="MDBottomSheetComponent+updated"></a>

### mdBottomSheetComponent.updated()
**Kind**: instance method of [<code>MDBottomSheetComponent</code>](#MDBottomSheetComponent)  
<a name="MDBottomSheetComponent+show"></a>

### mdBottomSheetComponent.show()
**Kind**: instance method of [<code>MDBottomSheetComponent</code>](#MDBottomSheetComponent)  
<a name="MDBottomSheetComponent+close"></a>

### mdBottomSheetComponent.close()
**Kind**: instance method of [<code>MDBottomSheetComponent</code>](#MDBottomSheetComponent)  
<a name="MDBottomSheetComponent+toggle"></a>

### mdBottomSheetComponent.toggle()
**Kind**: instance method of [<code>MDBottomSheetComponent</code>](#MDBottomSheetComponent)  
<a name="MDBottomSheetComponent+handleBottomSheetActionClick"></a>

### mdBottomSheetComponent.handleBottomSheetActionClick()
**Kind**: instance method of [<code>MDBottomSheetComponent</code>](#MDBottomSheetComponent)  
**Emits**: <code>MDBottomSheetComponent#event:onBottomSheetActionClick</code>  
<a name="MDBottomSheetComponent+handleBottomSheetButtonClick"></a>

### mdBottomSheetComponent.handleBottomSheetButtonClick()
**Kind**: instance method of [<code>MDBottomSheetComponent</code>](#MDBottomSheetComponent)  
**Emits**: <code>MDBottomSheetComponent#event:onBottomSheetButtonClick</code>  
<a name="MDBottomSheetComponent+handleBottomSheetScrimClick"></a>

### mdBottomSheetComponent.handleBottomSheetScrimClick()
**Kind**: instance method of [<code>MDBottomSheetComponent</code>](#MDBottomSheetComponent)  
**Emits**: <code>MDBottomSheetComponent#event:onBottomSheetScrimClick</code>  
<a name="MDBottomSheetComponent.properties"></a>

### MDBottomSheetComponent.properties
**Kind**: static property of [<code>MDBottomSheetComponent</code>](#MDBottomSheetComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [leadingActions] | <code>Array</code> | Represents actions aligned to the start of the bottom sheet. |
| [label] | <code>String</code> | Represents the label of the bottom sheet. |
| [subLabel] | <code>String</code> | Represents the sub-label of the bottom sheet. |
| [trailingActions] | <code>Array</code> | Represents actions aligned to the end of the bottom sheet. |
| [buttons] | <code>Array</code> | Represents buttons within the bottom sheet. |
| [ui] | <code>String</code> | Represents the UI style of the bottom sheet. In this case, it is set to 'modal'. |
| [open] | <code>Boolean</code> | Indicates whether the bottom sheet is open. |
