<a name="MDSideSheetComponent"></a>

## MDSideSheetComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDSideSheetComponent](#MDSideSheetComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.render()](#MDSideSheetComponent+render)
        -   [.connectedCallback()](#MDSideSheetComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDSideSheetComponent+disconnectedCallback)
        -   [.updated()](#MDSideSheetComponent+updated)
        -   [.show()](#MDSideSheetComponent+show)
        -   [.close()](#MDSideSheetComponent+close)
        -   [.toggle()](#MDSideSheetComponent+toggle)
        -   [.handleSideSheetActionClick()](#MDSideSheetComponent+handleSideSheetActionClick)
        -   [.handleSideSheetButtonClick()](#MDSideSheetComponent+handleSideSheetButtonClick)
        -   [.handleSideSheetScrimClick()](#MDSideSheetComponent+handleSideSheetScrimClick)
    -   _static_
        -   [.properties](#MDSideSheetComponent.properties) ⇒ <code>Object</code>

<a name="MDSideSheetComponent+render"></a>

### mdSideSheetComponent.render()

**Kind**: instance method of [<code>MDSideSheetComponent</code>](#MDSideSheetComponent)  
<a name="MDSideSheetComponent+connectedCallback"></a>

### mdSideSheetComponent.connectedCallback()

**Kind**: instance method of [<code>MDSideSheetComponent</code>](#MDSideSheetComponent)  
<a name="MDSideSheetComponent+disconnectedCallback"></a>

### mdSideSheetComponent.disconnectedCallback()

**Kind**: instance method of [<code>MDSideSheetComponent</code>](#MDSideSheetComponent)  
<a name="MDSideSheetComponent+updated"></a>

### mdSideSheetComponent.updated()

**Kind**: instance method of [<code>MDSideSheetComponent</code>](#MDSideSheetComponent)  
<a name="MDSideSheetComponent+show"></a>

### mdSideSheetComponent.show()

**Kind**: instance method of [<code>MDSideSheetComponent</code>](#MDSideSheetComponent)  
<a name="MDSideSheetComponent+close"></a>

### mdSideSheetComponent.close()

**Kind**: instance method of [<code>MDSideSheetComponent</code>](#MDSideSheetComponent)  
<a name="MDSideSheetComponent+toggle"></a>

### mdSideSheetComponent.toggle()

**Kind**: instance method of [<code>MDSideSheetComponent</code>](#MDSideSheetComponent)  
<a name="MDSideSheetComponent+handleSideSheetActionClick"></a>

### mdSideSheetComponent.handleSideSheetActionClick()

**Kind**: instance method of [<code>MDSideSheetComponent</code>](#MDSideSheetComponent)  
**Emits**: <code>MDSideSheetComponent#event:onSideSheetActionClick</code>  
<a name="MDSideSheetComponent+handleSideSheetButtonClick"></a>

### mdSideSheetComponent.handleSideSheetButtonClick()

**Kind**: instance method of [<code>MDSideSheetComponent</code>](#MDSideSheetComponent)  
**Emits**: <code>MDSideSheetComponent#event:onSideSheetButtonClick</code>  
<a name="MDSideSheetComponent+handleSideSheetScrimClick"></a>

### mdSideSheetComponent.handleSideSheetScrimClick()

**Kind**: instance method of [<code>MDSideSheetComponent</code>](#MDSideSheetComponent)  
**Emits**: <code>MDSideSheetComponent#event:onSideSheetScrimClick</code>  
<a name="MDSideSheetComponent.properties"></a>

### MDSideSheetComponent.properties ⇒ <code>Object</code>

Returns the properties of the side sheet component.

**Kind**: static property of [<code>MDSideSheetComponent</code>](#MDSideSheetComponent)  
**Returns**: <code>Object</code> - The properties of the side sheet component.  
**Properties**

| Name              | Type                 | Default                        | Description                                                                                |
| ----------------- | -------------------- | ------------------------------ | ------------------------------------------------------------------------------------------ |
| [leadingActions]  | <code>Array</code>   |                                | An array of actions to be displayed at the leading side of the side sheet.                 |
| [label]           | <code>String</code>  |                                | The main label of the side sheet.                                                          |
| [subLabel]        | <code>String</code>  |                                | A sub-label or description for the side sheet.                                             |
| [trailingActions] | <code>Array</code>   |                                | An array of actions to be displayed at the trailing side of the side sheet.                |
| [buttons]         | <code>Array</code>   |                                | An array of button elements to be displayed in the side sheet.                             |
| [ui]              | <code>String</code>  | <code>&#x27;modal&#x27;</code> | The user interface type of the side sheet. Possible values are 'modal', 'drawer', 'panel'. |
| [open]            | <code>Boolean</code> | <code>false</code>             | The open state of the side sheet, default is false (closed).                               |
