<a name="MDBottomSheetComponent"></a>

## MDBottomSheetComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDBottomSheetComponent](#MDBottomSheetComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.render()](#MDBottomSheetComponent+render)
        -   [.connectedCallback()](#MDBottomSheetComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDBottomSheetComponent+disconnectedCallback)
        -   [.updated()](#MDBottomSheetComponent+updated)
        -   [.show()](#MDBottomSheetComponent+show)
        -   [.close()](#MDBottomSheetComponent+close)
        -   [.toggle()](#MDBottomSheetComponent+toggle)
        -   [.handleBottomSheetActionClick()](#MDBottomSheetComponent+handleBottomSheetActionClick)
        -   [.handleBottomSheetButtonClick()](#MDBottomSheetComponent+handleBottomSheetButtonClick)
        -   [.handleBottomSheetScrimClick()](#MDBottomSheetComponent+handleBottomSheetScrimClick)
    -   _static_
        -   [.properties](#MDBottomSheetComponent.properties) ⇒ <code>Object</code>

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

### MDBottomSheetComponent.properties ⇒ <code>Object</code>

Returns the properties of the bottom sheet component.

**Kind**: static property of [<code>MDBottomSheetComponent</code>](#MDBottomSheetComponent)  
**Returns**: <code>Object</code> - The properties of the bottom sheet component.  
**Properties**

| Name              | Type                 | Default                        | Description                                                                                  |
| ----------------- | -------------------- | ------------------------------ | -------------------------------------------------------------------------------------------- |
| [leadingActions]  | <code>Array</code>   |                                | An array of actions to be displayed at the leading side of the bottom sheet.                 |
| [label]           | <code>String</code>  |                                | The main label of the bottom sheet.                                                          |
| [subLabel]        | <code>String</code>  |                                | A sub-label or description for the bottom sheet.                                             |
| [trailingActions] | <code>Array</code>   |                                | An array of actions to be displayed at the trailing side of the bottom sheet.                |
| [buttons]         | <code>Array</code>   |                                | An array of button elements to be displayed in the bottom sheet.                             |
| [ui]              | <code>String</code>  | <code>&#x27;modal&#x27;</code> | The user interface type of the bottom sheet. Possible values are 'modal', 'drawer', 'panel'. |
| [open]            | <code>Boolean</code> | <code>false</code>             | The open state of the bottom sheet, default is false (closed).                               |
