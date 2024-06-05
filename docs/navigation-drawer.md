<a name="MDNavigationDrawerComponent"></a>

## MDNavigationDrawerComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDNavigationDrawerComponent](#MDNavigationDrawerComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.render()](#MDNavigationDrawerComponent+render)
        -   [.connectedCallback()](#MDNavigationDrawerComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDNavigationDrawerComponent+disconnectedCallback)
        -   [.updated()](#MDNavigationDrawerComponent+updated)
        -   [.show()](#MDNavigationDrawerComponent+show)
        -   [.close()](#MDNavigationDrawerComponent+close)
        -   [.toggle()](#MDNavigationDrawerComponent+toggle)
        -   [.handleNavigationDrawerActionClick()](#MDNavigationDrawerComponent+handleNavigationDrawerActionClick)
        -   [.handleNavigationDrawerButtonClick()](#MDNavigationDrawerComponent+handleNavigationDrawerButtonClick)
        -   [.handleNavigationDrawerScrimClick()](#MDNavigationDrawerComponent+handleNavigationDrawerScrimClick)
    -   _static_
        -   [.properties](#MDNavigationDrawerComponent.properties) ⇒ <code>Object</code>

<a name="MDNavigationDrawerComponent+render"></a>

### mdNavigationDrawerComponent.render()

**Kind**: instance method of [<code>MDNavigationDrawerComponent</code>](#MDNavigationDrawerComponent)  
<a name="MDNavigationDrawerComponent+connectedCallback"></a>

### mdNavigationDrawerComponent.connectedCallback()

**Kind**: instance method of [<code>MDNavigationDrawerComponent</code>](#MDNavigationDrawerComponent)  
<a name="MDNavigationDrawerComponent+disconnectedCallback"></a>

### mdNavigationDrawerComponent.disconnectedCallback()

**Kind**: instance method of [<code>MDNavigationDrawerComponent</code>](#MDNavigationDrawerComponent)  
<a name="MDNavigationDrawerComponent+updated"></a>

### mdNavigationDrawerComponent.updated()

**Kind**: instance method of [<code>MDNavigationDrawerComponent</code>](#MDNavigationDrawerComponent)  
<a name="MDNavigationDrawerComponent+show"></a>

### mdNavigationDrawerComponent.show()

**Kind**: instance method of [<code>MDNavigationDrawerComponent</code>](#MDNavigationDrawerComponent)  
<a name="MDNavigationDrawerComponent+close"></a>

### mdNavigationDrawerComponent.close()

**Kind**: instance method of [<code>MDNavigationDrawerComponent</code>](#MDNavigationDrawerComponent)  
<a name="MDNavigationDrawerComponent+toggle"></a>

### mdNavigationDrawerComponent.toggle()

**Kind**: instance method of [<code>MDNavigationDrawerComponent</code>](#MDNavigationDrawerComponent)  
<a name="MDNavigationDrawerComponent+handleNavigationDrawerActionClick"></a>

### mdNavigationDrawerComponent.handleNavigationDrawerActionClick()

**Kind**: instance method of [<code>MDNavigationDrawerComponent</code>](#MDNavigationDrawerComponent)  
**Emits**: <code>MDNavigationDrawerComponent#event:onNavigationDrawerActionClick</code>  
<a name="MDNavigationDrawerComponent+handleNavigationDrawerButtonClick"></a>

### mdNavigationDrawerComponent.handleNavigationDrawerButtonClick()

**Kind**: instance method of [<code>MDNavigationDrawerComponent</code>](#MDNavigationDrawerComponent)  
**Emits**: <code>MDNavigationDrawerComponent#event:onNavigationDrawerButtonClick</code>  
<a name="MDNavigationDrawerComponent+handleNavigationDrawerScrimClick"></a>

### mdNavigationDrawerComponent.handleNavigationDrawerScrimClick()

**Kind**: instance method of [<code>MDNavigationDrawerComponent</code>](#MDNavigationDrawerComponent)  
**Emits**: <code>MDNavigationDrawerComponent#event:onNavigationDrawerScrimClick</code>  
<a name="MDNavigationDrawerComponent.properties"></a>

### MDNavigationDrawerComponent.properties ⇒ <code>Object</code>

Returns the properties of the navigation drawer component.

**Kind**: static property of [<code>MDNavigationDrawerComponent</code>](#MDNavigationDrawerComponent)  
**Returns**: <code>Object</code> - The properties of the navigation drawer component.  
**Properties**

| Name              | Type                 | Default                        | Description                                                                                       |
| ----------------- | -------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------- |
| [leadingActions]  | <code>Array</code>   |                                | An array of actions to be displayed at the leading side of the navigation drawer.                 |
| [label]           | <code>String</code>  |                                | The main label of the navigation drawer.                                                          |
| [subLabel]        | <code>String</code>  |                                | A sub-label or description for the navigation drawer.                                             |
| [trailingActions] | <code>Array</code>   |                                | An array of actions to be displayed at the trailing side of the navigation drawer.                |
| [buttons]         | <code>Array</code>   |                                | An array of button elements to be displayed in the navigation drawer.                             |
| [ui]              | <code>String</code>  | <code>&#x27;modal&#x27;</code> | The user interface type of the navigation drawer. Possible values are 'modal', 'drawer', 'panel'. |
| [open]            | <code>Boolean</code> | <code>false</code>             | The open state of the navigation drawer, default is false (closed).                               |
| [properties]      | <code>Object</code>  |                                | Additional properties inherited from MDListComponent.                                             |
