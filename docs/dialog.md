<a name="MDDialogComponent"></a>

## MDDialogComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDDialogComponent](#MDDialogComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.render()](#MDDialogComponent+render)
        * [.connectedCallback()](#MDDialogComponent+connectedCallback)
        * [.disconnectedCallback()](#MDDialogComponent+disconnectedCallback)
        * [.updated()](#MDDialogComponent+updated)
        * [.show()](#MDDialogComponent+show)
        * [.close()](#MDDialogComponent+close)
        * [.toggle()](#MDDialogComponent+toggle)
        * [.handleDialogActionClick()](#MDDialogComponent+handleDialogActionClick)
        * [.handleDialogButtonClick()](#MDDialogComponent+handleDialogButtonClick)
        * [.handleDialogScrimClick()](#MDDialogComponent+handleDialogScrimClick)
    * _static_
        * [.properties](#MDDialogComponent.properties)

<a name="MDDialogComponent+render"></a>

### mdDialogComponent.render()
**Kind**: instance method of [<code>MDDialogComponent</code>](#MDDialogComponent)  
<a name="MDDialogComponent+connectedCallback"></a>

### mdDialogComponent.connectedCallback()
**Kind**: instance method of [<code>MDDialogComponent</code>](#MDDialogComponent)  
<a name="MDDialogComponent+disconnectedCallback"></a>

### mdDialogComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDDialogComponent</code>](#MDDialogComponent)  
<a name="MDDialogComponent+updated"></a>

### mdDialogComponent.updated()
**Kind**: instance method of [<code>MDDialogComponent</code>](#MDDialogComponent)  
<a name="MDDialogComponent+show"></a>

### mdDialogComponent.show()
**Kind**: instance method of [<code>MDDialogComponent</code>](#MDDialogComponent)  
<a name="MDDialogComponent+close"></a>

### mdDialogComponent.close()
**Kind**: instance method of [<code>MDDialogComponent</code>](#MDDialogComponent)  
<a name="MDDialogComponent+toggle"></a>

### mdDialogComponent.toggle()
**Kind**: instance method of [<code>MDDialogComponent</code>](#MDDialogComponent)  
<a name="MDDialogComponent+handleDialogActionClick"></a>

### mdDialogComponent.handleDialogActionClick()
**Kind**: instance method of [<code>MDDialogComponent</code>](#MDDialogComponent)  
**Emits**: <code>MDDialogComponent#event:onDialogActionClick</code>  
<a name="MDDialogComponent+handleDialogButtonClick"></a>

### mdDialogComponent.handleDialogButtonClick()
**Kind**: instance method of [<code>MDDialogComponent</code>](#MDDialogComponent)  
**Emits**: <code>MDDialogComponent#event:onDialogButtonClick</code>  
<a name="MDDialogComponent+handleDialogScrimClick"></a>

### mdDialogComponent.handleDialogScrimClick()
**Kind**: instance method of [<code>MDDialogComponent</code>](#MDDialogComponent)  
**Emits**: <code>MDDialogComponent#event:onDialogScrimClick</code>  
<a name="MDDialogComponent.properties"></a>

### MDDialogComponent.properties
Properties of the MDDialogComponent.

**Kind**: static property of [<code>MDDialogComponent</code>](#MDDialogComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [leadingActions] | <code>Array</code> | Actions displayed on the leading side of the dialog. |
| [label] | <code>String</code> | The main label of the dialog. |
| [subLabel] | <code>String</code> | The sublabel of the dialog. |
| [trailingActions] | <code>Array</code> | Actions displayed on the trailing side of the dialog. |
| [buttons] | <code>Array</code> | Buttons displayed on the dialog. |
| [ui] | <code>String</code> | Specifies the UI style of the dialog. Possible value is 'full-screen'. |
| [open] | <code>Boolean</code> | Indicates whether the dialog is open. |

