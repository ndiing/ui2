<a name="MDMenuComponent"></a>

## MDMenuComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDMenuComponent](#MDMenuComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.render()](#MDMenuComponent+render)
        -   [.connectedCallback()](#MDMenuComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDMenuComponent+disconnectedCallback)
        -   [.updated()](#MDMenuComponent+updated)
        -   [.show()](#MDMenuComponent+show)
        -   [.close()](#MDMenuComponent+close)
        -   [.toggle()](#MDMenuComponent+toggle)
        -   [.handleMenuActionClick()](#MDMenuComponent+handleMenuActionClick)
        -   [.handleMenuButtonClick()](#MDMenuComponent+handleMenuButtonClick)
        -   [.handleMenuScrimClick()](#MDMenuComponent+handleMenuScrimClick)
    -   _static_
        -   [.properties](#MDMenuComponent.properties)

<a name="MDMenuComponent+render"></a>

### mdMenuComponent.render()

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  
<a name="MDMenuComponent+connectedCallback"></a>

### mdMenuComponent.connectedCallback()

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  
<a name="MDMenuComponent+disconnectedCallback"></a>

### mdMenuComponent.disconnectedCallback()

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  
<a name="MDMenuComponent+updated"></a>

### mdMenuComponent.updated()

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  
**Emits**: <code>MDMenuComponent#event:onMenuShow</code>, <code>MDMenuComponent#event:onMenuClose</code>  
<a name="MDMenuComponent+show"></a>

### mdMenuComponent.show()

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  
<a name="MDMenuComponent+close"></a>

### mdMenuComponent.close()

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  
<a name="MDMenuComponent+toggle"></a>

### mdMenuComponent.toggle()

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  
<a name="MDMenuComponent+handleMenuActionClick"></a>

### mdMenuComponent.handleMenuActionClick()

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  
**Emits**: <code>MDMenuComponent#event:onMenuActionClick</code>  
<a name="MDMenuComponent+handleMenuButtonClick"></a>

### mdMenuComponent.handleMenuButtonClick()

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  
**Emits**: <code>MDMenuComponent#event:onMenuButtonClick</code>  
<a name="MDMenuComponent+handleMenuScrimClick"></a>

### mdMenuComponent.handleMenuScrimClick()

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  
**Emits**: <code>MDMenuComponent#event:onMenuScrimClick</code>  
<a name="MDMenuComponent.properties"></a>

### MDMenuComponent.properties

**Kind**: static property of [<code>MDMenuComponent</code>](#MDMenuComponent)  
**Properties**

| Name              | Type                 | Description |
| ----------------- | -------------------- | ----------- |
| [leadingActions]  | <code>Array</code>   | -           |
| [label]           | <code>String</code>  | -           |
| [subLabel]        | <code>String</code>  | -           |
| [trailingActions] | <code>Array</code>   | -           |
| [buttons]         | <code>Array</code>   | -           |
| [ui]              | <code>String</code>  | -           |
| [open]            | <code>Boolean</code> | -           |
