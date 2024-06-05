<a name="MDIconButtonComponent"></a>

## MDIconButtonComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDIconButtonComponent](#MDIconButtonComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.render()](#MDIconButtonComponent+render)
        -   [.connectedCallback()](#MDIconButtonComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDIconButtonComponent+disconnectedCallback)
        -   [.updated()](#MDIconButtonComponent+updated)
        -   [.handleIconButtonClick()](#MDIconButtonComponent+handleIconButtonClick)
    -   _static_
        -   [.properties](#MDIconButtonComponent.properties)

<a name="MDIconButtonComponent+render"></a>

### mdIconButtonComponent.render()

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
<a name="MDIconButtonComponent+connectedCallback"></a>

### mdIconButtonComponent.connectedCallback()

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
<a name="MDIconButtonComponent+disconnectedCallback"></a>

### mdIconButtonComponent.disconnectedCallback()

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
<a name="MDIconButtonComponent+updated"></a>

### mdIconButtonComponent.updated()

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
<a name="MDIconButtonComponent+handleIconButtonClick"></a>

### mdIconButtonComponent.handleIconButtonClick()

**Kind**: instance method of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
**Emits**: <code>MDIconButtonComponent#event:onIconButtonClick</code>  
<a name="MDIconButtonComponent.properties"></a>

### MDIconButtonComponent.properties

Properties of the MDIconButtonComponent.

**Kind**: static property of [<code>MDIconButtonComponent</code>](#MDIconButtonComponent)  
**Properties**

| Name       | Type                 | Description                                                                        |
| ---------- | -------------------- | ---------------------------------------------------------------------------------- |
| [icon]     | <code>String</code>  | The icon of the button.                                                            |
| [ui]       | <code>String</code>  | The UI style of the button. Possible values are 'filled', 'tonal', and 'outlined'. |
| [toggle]   | <code>Boolean</code> | Indicates if the button is toggleable.                                             |
| [selected] | <code>Boolean</code> | Indicates if the button is selected.                                               |
