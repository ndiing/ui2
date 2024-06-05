<a name="MDSegmentedButtonComponent"></a>

## MDSegmentedButtonComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDSegmentedButtonComponent](#MDSegmentedButtonComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.renderButton()](#MDSegmentedButtonComponent+renderButton)
        -   [.render()](#MDSegmentedButtonComponent+render)
        -   [.connectedCallback()](#MDSegmentedButtonComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDSegmentedButtonComponent+disconnectedCallback)
        -   [.updated()](#MDSegmentedButtonComponent+updated)
        -   [.handleSegmentedButtonKeydown()](#MDSegmentedButtonComponent+handleSegmentedButtonKeydown)
    -   _static_
        -   [.properties](#MDSegmentedButtonComponent.properties)

<a name="MDSegmentedButtonComponent+renderButton"></a>

### mdSegmentedButtonComponent.renderButton()

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
<a name="MDSegmentedButtonComponent+render"></a>

### mdSegmentedButtonComponent.render()

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
<a name="MDSegmentedButtonComponent+connectedCallback"></a>

### mdSegmentedButtonComponent.connectedCallback()

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
<a name="MDSegmentedButtonComponent+disconnectedCallback"></a>

### mdSegmentedButtonComponent.disconnectedCallback()

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
<a name="MDSegmentedButtonComponent+updated"></a>

### mdSegmentedButtonComponent.updated()

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
**Emits**: <code>MDSegmentedButtonComponent#event:onSegmentedButtonButtonClick</code>  
<a name="MDSegmentedButtonComponent+handleSegmentedButtonKeydown"></a>

### mdSegmentedButtonComponent.handleSegmentedButtonKeydown()

**Kind**: instance method of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
**Emits**: <code>MDSegmentedButtonComponent#event:onSegmentedButtonKeydown</code>  
<a name="MDSegmentedButtonComponent.properties"></a>

### MDSegmentedButtonComponent.properties

Properties of the MDSegmentedButtonComponent.

**Kind**: static property of [<code>MDSegmentedButtonComponent</code>](#MDSegmentedButtonComponent)  
**Properties**

| Name              | Type                 | Description                                               |
| ----------------- | -------------------- | --------------------------------------------------------- |
| [buttons]         | <code>Array</code>   | An array of buttons in the segmented button component.    |
| [rangeSelection]  | <code>Boolean</code> | Indicates if range selection is enabled for the buttons.  |
| [multiSelection]  | <code>Boolean</code> | Indicates if multi-selection is enabled for the buttons.  |
| [singleSelection] | <code>Boolean</code> | Indicates if single-selection is enabled for the buttons. |
| [allSelection]    | <code>Boolean</code> | Indicates if selecting all buttons is enabled.            |
