<a name="MDNavigationRailComponent"></a>

## MDNavigationRailComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDNavigationRailComponent](#MDNavigationRailComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.render()](#MDNavigationRailComponent+render)
        -   [.connectedCallback()](#MDNavigationRailComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDNavigationRailComponent+disconnectedCallback)
        -   [.updated()](#MDNavigationRailComponent+updated)
        -   [.close()](#MDNavigationRailComponent+close)
        -   [.toggle()](#MDNavigationRailComponent+toggle)
        -   [.handleNavigationRailActionClick()](#MDNavigationRailComponent+handleNavigationRailActionClick)
        -   [.handleNavigationRailButtonClick()](#MDNavigationRailComponent+handleNavigationRailButtonClick)
    -   _static_
        -   [.properties](#MDNavigationRailComponent.properties) ⇒ <code>Object</code>

<a name="MDNavigationRailComponent+render"></a>

### mdNavigationRailComponent.render()

**Kind**: instance method of [<code>MDNavigationRailComponent</code>](#MDNavigationRailComponent)  
<a name="MDNavigationRailComponent+connectedCallback"></a>

### mdNavigationRailComponent.connectedCallback()

**Kind**: instance method of [<code>MDNavigationRailComponent</code>](#MDNavigationRailComponent)  
<a name="MDNavigationRailComponent+disconnectedCallback"></a>

### mdNavigationRailComponent.disconnectedCallback()

**Kind**: instance method of [<code>MDNavigationRailComponent</code>](#MDNavigationRailComponent)  
<a name="MDNavigationRailComponent+updated"></a>

### mdNavigationRailComponent.updated()

**Kind**: instance method of [<code>MDNavigationRailComponent</code>](#MDNavigationRailComponent)  
<a name="MDNavigationRailComponent+close"></a>

### mdNavigationRailComponent.close()

**Kind**: instance method of [<code>MDNavigationRailComponent</code>](#MDNavigationRailComponent)  
<a name="MDNavigationRailComponent+toggle"></a>

### mdNavigationRailComponent.toggle()

**Kind**: instance method of [<code>MDNavigationRailComponent</code>](#MDNavigationRailComponent)  
<a name="MDNavigationRailComponent+handleNavigationRailActionClick"></a>

### mdNavigationRailComponent.handleNavigationRailActionClick()

**Kind**: instance method of [<code>MDNavigationRailComponent</code>](#MDNavigationRailComponent)  
**Emits**: <code>MDNavigationRailComponent#event:onNavigationRailActionClick</code>  
<a name="MDNavigationRailComponent+handleNavigationRailButtonClick"></a>

### mdNavigationRailComponent.handleNavigationRailButtonClick()

**Kind**: instance method of [<code>MDNavigationRailComponent</code>](#MDNavigationRailComponent)  
**Emits**: <code>MDNavigationRailComponent#event:onNavigationRailButtonClick</code>  
<a name="MDNavigationRailComponent.properties"></a>

### MDNavigationRailComponent.properties ⇒ <code>Object</code>

Returns the properties of the navigation rail component.

**Kind**: static property of [<code>MDNavigationRailComponent</code>](#MDNavigationRailComponent)  
**Returns**: <code>Object</code> - The properties of the navigation rail component.  
**Properties**

| Name              | Type                 | Default            | Description                                                                      |
| ----------------- | -------------------- | ------------------ | -------------------------------------------------------------------------------- |
| [leadingActions]  | <code>Array</code>   |                    | An array of actions to be displayed at the leading side of the navigation rail.  |
| [label]           | <code>String</code>  |                    | The main label of the navigation rail.                                           |
| [subLabel]        | <code>String</code>  |                    | A sub-label or description for the navigation rail.                              |
| [trailingActions] | <code>Array</code>   |                    | An array of actions to be displayed at the trailing side of the navigation rail. |
| [buttons]         | <code>Array</code>   |                    | An array of button elements to be displayed in the navigation rail.              |
| [ui]              | <code>String</code>  |                    | The user interface type of the navigation rail.                                  |
| [open]            | <code>Boolean</code> | <code>false</code> | The open state of the navigation rail, default is false (closed).                |
| [properties]      | <code>Object</code>  |                    | Additional properties inherited from MDListComponent.                            |
