## Classes

<dl>
<dt><a href="#MDListItemComponent">MDListItemComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
<dt><a href="#MDListRowComponent">MDListRowComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
<dt><a href="#MDListComponent">MDListComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
</dl>

<a name="MDListItemComponent"></a>

## MDListItemComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDListItemComponent](#MDListItemComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.labelSecondary](#MDListItemComponent+labelSecondary)
        -   [.render()](#MDListItemComponent+render)
        -   [.connectedCallback()](#MDListItemComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDListItemComponent+disconnectedCallback)
        -   [.firstUpdated()](#MDListItemComponent+firstUpdated)
        -   [.handleListItemCheckboxNativeInput()](#MDListItemComponent+handleListItemCheckboxNativeInput)
        -   [.handleListItemRadioButtonNativeInput()](#MDListItemComponent+handleListItemRadioButtonNativeInput)
        -   [.handleListItemSwitchNativeInput()](#MDListItemComponent+handleListItemSwitchNativeInput)
    -   _static_
        -   [.properties](#MDListItemComponent.properties)

<a name="MDListItemComponent+labelSecondary"></a>

### mdListItemComponent.labelSecondary

**Kind**: instance property of [<code>MDListItemComponent</code>](#MDListItemComponent)  
<a name="MDListItemComponent+render"></a>

### mdListItemComponent.render()

**Kind**: instance method of [<code>MDListItemComponent</code>](#MDListItemComponent)  
<a name="MDListItemComponent+connectedCallback"></a>

### mdListItemComponent.connectedCallback()

**Kind**: instance method of [<code>MDListItemComponent</code>](#MDListItemComponent)  
<a name="MDListItemComponent+disconnectedCallback"></a>

### mdListItemComponent.disconnectedCallback()

**Kind**: instance method of [<code>MDListItemComponent</code>](#MDListItemComponent)  
<a name="MDListItemComponent+firstUpdated"></a>

### mdListItemComponent.firstUpdated()

**Kind**: instance method of [<code>MDListItemComponent</code>](#MDListItemComponent)  
**Emits**: <code>MDListItemComponent#event:onListItemSelected</code>  
<a name="MDListItemComponent+handleListItemCheckboxNativeInput"></a>

### mdListItemComponent.handleListItemCheckboxNativeInput()

**Kind**: instance method of [<code>MDListItemComponent</code>](#MDListItemComponent)  
**Emits**: <code>MDListItemComponent#event:onListItemCheckboxNativeInput</code>  
<a name="MDListItemComponent+handleListItemRadioButtonNativeInput"></a>

### mdListItemComponent.handleListItemRadioButtonNativeInput()

**Kind**: instance method of [<code>MDListItemComponent</code>](#MDListItemComponent)  
**Emits**: <code>MDListItemComponent#event:onListItemRadioButtonNativeInput</code>  
<a name="MDListItemComponent+handleListItemSwitchNativeInput"></a>

### mdListItemComponent.handleListItemSwitchNativeInput()

**Kind**: instance method of [<code>MDListItemComponent</code>](#MDListItemComponent)  
**Emits**: <code>MDListItemComponent#event:onListItemSwitchNativeInput</code>  
<a name="MDListItemComponent.properties"></a>

### MDListItemComponent.properties

**Kind**: static property of [<code>MDListItemComponent</code>](#MDListItemComponent)  
**Properties**

| Name                  | Type                 | Description |
| --------------------- | -------------------- | ----------- |
| [avatar]              | <code>String</code>  | -           |
| [thumbnail]           | <code>String</code>  | -           |
| [video]               | <code>String</code>  | -           |
| [leadingCheckbox]     | <code>Object</code>  | -           |
| [leadingRadioButton]  | <code>Object</code>  | -           |
| [leadingSwitch]       | <code>Object</code>  | -           |
| [leadingIcon]         | <code>String</code>  | -           |
| [label]               | <code>String</code>  | -           |
| [subLabel]            | <code>String</code>  | -           |
| [trailingIcon]        | <code>String</code>  | -           |
| [trailingCheckbox]    | <code>Object</code>  | -           |
| [trailingRadioButton] | <code>Object</code>  | -           |
| [trailingSwitch]      | <code>Object</code>  | -           |
| [text]                | <code>String</code>  | -           |
| [badge]               | <code>Object</code>  | -           |
| [selected]            | <code>Boolean</code> | -           |
| [routerLink]          | <code>String</code>  | -           |

<a name="MDListRowComponent"></a>

## MDListRowComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDListRowComponent](#MDListRowComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.render()](#MDListRowComponent+render)
        -   [.connectedCallback()](#MDListRowComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDListRowComponent+disconnectedCallback)
    -   _static_
        -   [.properties](#MDListRowComponent.properties)

<a name="MDListRowComponent+render"></a>

### mdListRowComponent.render()

**Kind**: instance method of [<code>MDListRowComponent</code>](#MDListRowComponent)  
<a name="MDListRowComponent+connectedCallback"></a>

### mdListRowComponent.connectedCallback()

**Kind**: instance method of [<code>MDListRowComponent</code>](#MDListRowComponent)  
<a name="MDListRowComponent+disconnectedCallback"></a>

### mdListRowComponent.disconnectedCallback()

**Kind**: instance method of [<code>MDListRowComponent</code>](#MDListRowComponent)  
<a name="MDListRowComponent.properties"></a>

### MDListRowComponent.properties

**Kind**: static property of [<code>MDListRowComponent</code>](#MDListRowComponent)  
<a name="MDListComponent"></a>

## MDListComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDListComponent](#MDListComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.renderItem()](#MDListComponent+renderItem)
        -   [.render()](#MDListComponent+render)
        -   [.connectedCallback()](#MDListComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDListComponent+disconnectedCallback)
        -   [.updated()](#MDListComponent+updated)
        -   [.handleListKeydown()](#MDListComponent+handleListKeydown)
        -   [.handleListItemCheckboxNativeInput()](#MDListComponent+handleListItemCheckboxNativeInput)
        -   [.handleListItemRadioButtonNativeInput()](#MDListComponent+handleListItemRadioButtonNativeInput)
        -   [.handleListItemSwitchNativeInput()](#MDListComponent+handleListItemSwitchNativeInput)
    -   _static_
        -   [.properties](#MDListComponent.properties)

<a name="MDListComponent+renderItem"></a>

### mdListComponent.renderItem()

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  
<a name="MDListComponent+render"></a>

### mdListComponent.render()

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  
<a name="MDListComponent+connectedCallback"></a>

### mdListComponent.connectedCallback()

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  
<a name="MDListComponent+disconnectedCallback"></a>

### mdListComponent.disconnectedCallback()

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  
<a name="MDListComponent+updated"></a>

### mdListComponent.updated()

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  
**Emits**: <code>MDListComponent#event:onListItemClick</code>  
<a name="MDListComponent+handleListKeydown"></a>

### mdListComponent.handleListKeydown()

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  
**Emits**: <code>MDListComponent#event:onListKeydown</code>  
<a name="MDListComponent+handleListItemCheckboxNativeInput"></a>

### mdListComponent.handleListItemCheckboxNativeInput()

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  
<a name="MDListComponent+handleListItemRadioButtonNativeInput"></a>

### mdListComponent.handleListItemRadioButtonNativeInput()

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  
<a name="MDListComponent+handleListItemSwitchNativeInput"></a>

### mdListComponent.handleListItemSwitchNativeInput()

**Kind**: instance method of [<code>MDListComponent</code>](#MDListComponent)  
<a name="MDListComponent.properties"></a>

### MDListComponent.properties

**Kind**: static property of [<code>MDListComponent</code>](#MDListComponent)  
**Properties**

| Name              | Type                 | Description |
| ----------------- | -------------------- | ----------- |
| [list]            | <code>Array</code>   | -           |
| [rangeSelection]  | <code>Boolean</code> | -           |
| [multiSelection]  | <code>Boolean</code> | -           |
| [singleSelection] | <code>Boolean</code> | -           |
| [allSelection]    | <code>Boolean</code> | -           |
