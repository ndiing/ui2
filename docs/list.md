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

* [MDListItemComponent](#MDListItemComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.labelSecondary](#MDListItemComponent+labelSecondary)
        * [.render()](#MDListItemComponent+render)
        * [.connectedCallback()](#MDListItemComponent+connectedCallback)
        * [.disconnectedCallback()](#MDListItemComponent+disconnectedCallback)
        * [.firstUpdated()](#MDListItemComponent+firstUpdated)
        * [.handleListItemCheckboxNativeInput()](#MDListItemComponent+handleListItemCheckboxNativeInput)
        * [.handleListItemRadioButtonNativeInput()](#MDListItemComponent+handleListItemRadioButtonNativeInput)
        * [.handleListItemSwitchNativeInput()](#MDListItemComponent+handleListItemSwitchNativeInput)
    * _static_
        * [.properties](#MDListItemComponent.properties)

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
Properties of the MDListItemComponent.

**Kind**: static property of [<code>MDListItemComponent</code>](#MDListItemComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [avatar] | <code>String</code> | URL of the avatar image. |
| [thumbnail] | <code>String</code> | URL of the thumbnail image. |
| [video] | <code>String</code> | URL of the video. |
| [leadingCheckbox] | <code>Object</code> | Leading checkbox object. |
| [leadingRadioButton] | <code>Object</code> | Leading radio button object. |
| [leadingSwitch] | <code>Object</code> | Leading switch object. |
| [leadingIcon] | <code>String</code> | Leading icon name. |
| [label] | <code>String</code> | Main label text. |
| [subLabel] | <code>String</code> | Sublabel text. |
| [trailingIcon] | <code>String</code> | Trailing icon name. |
| [trailingCheckbox] | <code>Object</code> | Trailing checkbox object. |
| [trailingRadioButton] | <code>Object</code> | Trailing radio button object. |
| [trailingSwitch] | <code>Object</code> | Trailing switch object. |
| [text] | <code>String</code> | Additional text content. |
| [badge] | <code>Object</code> | Badge object. |
| [selected] | <code>Boolean</code> | Indicates if the item is selected. |
| [routerLink] | <code>String</code> | URL for router link. |

<a name="MDListRowComponent"></a>

## MDListRowComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDListRowComponent](#MDListRowComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.render()](#MDListRowComponent+render)
        * [.connectedCallback()](#MDListRowComponent+connectedCallback)
        * [.disconnectedCallback()](#MDListRowComponent+disconnectedCallback)
    * _static_
        * [.properties](#MDListRowComponent.properties)

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

* [MDListComponent](#MDListComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.renderItem()](#MDListComponent+renderItem)
        * [.render()](#MDListComponent+render)
        * [.connectedCallback()](#MDListComponent+connectedCallback)
        * [.disconnectedCallback()](#MDListComponent+disconnectedCallback)
        * [.updated()](#MDListComponent+updated)
        * [.handleListKeydown()](#MDListComponent+handleListKeydown)
        * [.handleListItemCheckboxNativeInput()](#MDListComponent+handleListItemCheckboxNativeInput)
        * [.handleListItemRadioButtonNativeInput()](#MDListComponent+handleListItemRadioButtonNativeInput)
        * [.handleListItemSwitchNativeInput()](#MDListComponent+handleListItemSwitchNativeInput)
    * _static_
        * [.properties](#MDListComponent.properties)

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
Properties of the MDListComponent.

**Kind**: static property of [<code>MDListComponent</code>](#MDListComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [list] | <code>Array</code> | The array of items to display in the list. |
| [rangeSelection] | <code>Boolean</code> | Indicates if range selection is enabled. |
| [multiSelection] | <code>Boolean</code> | Indicates if multiple selection is enabled. |
| [singleSelection] | <code>Boolean</code> | Indicates if single selection is enabled. |
| [allSelection] | <code>Boolean</code> | Indicates if selecting all items is enabled. |

