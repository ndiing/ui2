<a name="MDNavigationBarComponent"></a>

## MDNavigationBarComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDNavigationBarComponent](#MDNavigationBarComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.render()](#MDNavigationBarComponent+render)
        * [.connectedCallback()](#MDNavigationBarComponent+connectedCallback)
        * [.disconnectedCallback()](#MDNavigationBarComponent+disconnectedCallback)
        * [.updated()](#MDNavigationBarComponent+updated)
        * [.close()](#MDNavigationBarComponent+close)
        * [.toggle()](#MDNavigationBarComponent+toggle)
        * [.handleNavigationBarActionClick()](#MDNavigationBarComponent+handleNavigationBarActionClick)
        * [.handleNavigationBarButtonClick()](#MDNavigationBarComponent+handleNavigationBarButtonClick)
    * _static_
        * [.properties](#MDNavigationBarComponent.properties) ⇒ <code>Object</code>

<a name="MDNavigationBarComponent+render"></a>

### mdNavigationBarComponent.render()
**Kind**: instance method of [<code>MDNavigationBarComponent</code>](#MDNavigationBarComponent)  
<a name="MDNavigationBarComponent+connectedCallback"></a>

### mdNavigationBarComponent.connectedCallback()
**Kind**: instance method of [<code>MDNavigationBarComponent</code>](#MDNavigationBarComponent)  
<a name="MDNavigationBarComponent+disconnectedCallback"></a>

### mdNavigationBarComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDNavigationBarComponent</code>](#MDNavigationBarComponent)  
<a name="MDNavigationBarComponent+updated"></a>

### mdNavigationBarComponent.updated()
**Kind**: instance method of [<code>MDNavigationBarComponent</code>](#MDNavigationBarComponent)  
<a name="MDNavigationBarComponent+close"></a>

### mdNavigationBarComponent.close()
**Kind**: instance method of [<code>MDNavigationBarComponent</code>](#MDNavigationBarComponent)  
<a name="MDNavigationBarComponent+toggle"></a>

### mdNavigationBarComponent.toggle()
**Kind**: instance method of [<code>MDNavigationBarComponent</code>](#MDNavigationBarComponent)  
<a name="MDNavigationBarComponent+handleNavigationBarActionClick"></a>

### mdNavigationBarComponent.handleNavigationBarActionClick()
**Kind**: instance method of [<code>MDNavigationBarComponent</code>](#MDNavigationBarComponent)  
**Emits**: <code>MDNavigationBarComponent#event:onNavigationBarActionClick</code>  
<a name="MDNavigationBarComponent+handleNavigationBarButtonClick"></a>

### mdNavigationBarComponent.handleNavigationBarButtonClick()
**Kind**: instance method of [<code>MDNavigationBarComponent</code>](#MDNavigationBarComponent)  
**Emits**: <code>MDNavigationBarComponent#event:onNavigationBarButtonClick</code>  
<a name="MDNavigationBarComponent.properties"></a>

### MDNavigationBarComponent.properties ⇒ <code>Object</code>
Properties of the MDNavigationBarComponent.

**Kind**: static property of [<code>MDNavigationBarComponent</code>](#MDNavigationBarComponent)  
**Returns**: <code>Object</code> - The properties of the navigation bar component.  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [leadingActions] | <code>Array</code> |  | An array of actions to be displayed at the leading side of the navigation bar. |
| [label] | <code>String</code> |  | The main label of the navigation bar. |
| [subLabel] | <code>String</code> |  | A sub-label or description for the navigation bar. |
| [trailingActions] | <code>Array</code> |  | An array of actions to be displayed at the trailing side of the navigation bar. |
| [buttons] | <code>Array</code> |  | An array of button elements to be displayed in the navigation bar. |
| [ui] | <code>String</code> |  | The user interface type of the navigation bar. |
| [open] | <code>Boolean</code> | <code>false</code> | The open state of the navigation bar, default is false (closed). |
| [properties] | <code>Object</code> |  | Additional properties inherited from MDListComponent. |

