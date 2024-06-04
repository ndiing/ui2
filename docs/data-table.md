## Classes

<dl>
<dt><a href="#MDDataTableColumnCellComponent">MDDataTableColumnCellComponent</a> ⇐ <code>HTMLTableCellElement</code></dt>
<dd></dd>
<dt><a href="#MDDataTableNativeComponent">MDDataTableNativeComponent</a> ⇐ <code>HTMLTableElement</code></dt>
<dd></dd>
<dt><a href="#MDDataTableItemComponent">MDDataTableItemComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
<dt><a href="#MDDataTableRowComponent">MDDataTableRowComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
<dt><a href="#MDDataTableComponent">MDDataTableComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
</dl>

<a name="MDDataTableColumnCellComponent"></a>

## MDDataTableColumnCellComponent ⇐ <code>HTMLTableCellElement</code>
**Kind**: global class  
**Extends**: <code>HTMLTableCellElement</code>  

* [MDDataTableColumnCellComponent](#MDDataTableColumnCellComponent) ⇐ <code>HTMLTableCellElement</code>
    * [.connectedCallback()](#MDDataTableColumnCellComponent+connectedCallback)
    * [.disconnectedCallback()](#MDDataTableColumnCellComponent+disconnectedCallback)

<a name="MDDataTableColumnCellComponent+connectedCallback"></a>

### mdDataTableColumnCellComponent.connectedCallback()
**Kind**: instance method of [<code>MDDataTableColumnCellComponent</code>](#MDDataTableColumnCellComponent)  
<a name="MDDataTableColumnCellComponent+disconnectedCallback"></a>

### mdDataTableColumnCellComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDDataTableColumnCellComponent</code>](#MDDataTableColumnCellComponent)  
<a name="MDDataTableNativeComponent"></a>

## MDDataTableNativeComponent ⇐ <code>HTMLTableElement</code>
**Kind**: global class  
**Extends**: <code>HTMLTableElement</code>  

* [MDDataTableNativeComponent](#MDDataTableNativeComponent) ⇐ <code>HTMLTableElement</code>
    * [.callback()](#MDDataTableNativeComponent+callback)
    * [.connectedCallback()](#MDDataTableNativeComponent+connectedCallback)
    * [.disconnectedCallback()](#MDDataTableNativeComponent+disconnectedCallback)

<a name="MDDataTableNativeComponent+callback"></a>

### mdDataTableNativeComponent.callback()
**Kind**: instance method of [<code>MDDataTableNativeComponent</code>](#MDDataTableNativeComponent)  
<a name="MDDataTableNativeComponent+connectedCallback"></a>

### mdDataTableNativeComponent.connectedCallback()
**Kind**: instance method of [<code>MDDataTableNativeComponent</code>](#MDDataTableNativeComponent)  
<a name="MDDataTableNativeComponent+disconnectedCallback"></a>

### mdDataTableNativeComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDDataTableNativeComponent</code>](#MDDataTableNativeComponent)  
<a name="MDDataTableItemComponent"></a>

## MDDataTableItemComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDDataTableItemComponent](#MDDataTableItemComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.labelSecondary](#MDDataTableItemComponent+labelSecondary)
        * [.render()](#MDDataTableItemComponent+render)
        * [.connectedCallback()](#MDDataTableItemComponent+connectedCallback)
        * [.disconnectedCallback()](#MDDataTableItemComponent+disconnectedCallback)
        * [.firstUpdated()](#MDDataTableItemComponent+firstUpdated)
        * [.handleDataTableItemCheckboxNativeInput()](#MDDataTableItemComponent+handleDataTableItemCheckboxNativeInput)
        * [.handleDataTableItemRadioButtonNativeInput()](#MDDataTableItemComponent+handleDataTableItemRadioButtonNativeInput)
        * [.handleDataTableItemSwitchNativeInput()](#MDDataTableItemComponent+handleDataTableItemSwitchNativeInput)
        * [.handleDataTableItemActionClick()](#MDDataTableItemComponent+handleDataTableItemActionClick)
    * _static_
        * [.properties](#MDDataTableItemComponent.properties)

<a name="MDDataTableItemComponent+labelSecondary"></a>

### mdDataTableItemComponent.labelSecondary
**Kind**: instance property of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
<a name="MDDataTableItemComponent+render"></a>

### mdDataTableItemComponent.render()
**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
<a name="MDDataTableItemComponent+connectedCallback"></a>

### mdDataTableItemComponent.connectedCallback()
**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
<a name="MDDataTableItemComponent+disconnectedCallback"></a>

### mdDataTableItemComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
<a name="MDDataTableItemComponent+firstUpdated"></a>

### mdDataTableItemComponent.firstUpdated()
**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Emits**: <code>MDDataTableItemComponent#event:onDataTableItemSelected</code>  
<a name="MDDataTableItemComponent+handleDataTableItemCheckboxNativeInput"></a>

### mdDataTableItemComponent.handleDataTableItemCheckboxNativeInput()
**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Emits**: <code>MDDataTableItemComponent#event:onDataTableItemCheckboxNativeInput</code>  
<a name="MDDataTableItemComponent+handleDataTableItemRadioButtonNativeInput"></a>

### mdDataTableItemComponent.handleDataTableItemRadioButtonNativeInput()
**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Emits**: <code>MDDataTableItemComponent#event:onDataTableItemRadioButtonNativeInput</code>  
<a name="MDDataTableItemComponent+handleDataTableItemSwitchNativeInput"></a>

### mdDataTableItemComponent.handleDataTableItemSwitchNativeInput()
**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Emits**: <code>MDDataTableItemComponent#event:onDataTableItemSwitchNativeInput</code>  
<a name="MDDataTableItemComponent+handleDataTableItemActionClick"></a>

### mdDataTableItemComponent.handleDataTableItemActionClick()
**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Emits**: <code>MDDataTableItemComponent#event:onDataTableItemActionClick</code>  
<a name="MDDataTableItemComponent.properties"></a>

### MDDataTableItemComponent.properties
**Kind**: static property of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [avatar] | <code>String</code> | - |
| [thumbnail] | <code>String</code> | - |
| [video] | <code>String</code> | - |
| [leadingCheckbox] | <code>Object</code> | - |
| [leadingRadioButton] | <code>Object</code> | - |
| [leadingSwitch] | <code>Object</code> | - |
| [leadingIcon] | <code>String</code> | - |
| [label] | <code>String</code> | - |
| [subLabel] | <code>String</code> | - |
| [trailingIcon] | <code>String</code> | - |
| [trailingCheckbox] | <code>Object</code> | - |
| [trailingRadioButton] | <code>Object</code> | - |
| [trailingSwitch] | <code>Object</code> | - |
| [text] | <code>String</code> | - |
| [badge] | <code>Object</code> | - |
| [selected] | <code>Boolean</code> | - |
| [indeterminate] | <code>Boolean</code> | - |
| [leadingAction] | <code>String</code> | - |
| [trailingAction] | <code>String</code> | - |

<a name="MDDataTableRowComponent"></a>

## MDDataTableRowComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDDataTableRowComponent](#MDDataTableRowComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.render()](#MDDataTableRowComponent+render)
        * [.connectedCallback()](#MDDataTableRowComponent+connectedCallback)
        * [.disconnectedCallback()](#MDDataTableRowComponent+disconnectedCallback)
    * _static_
        * [.properties](#MDDataTableRowComponent.properties)

<a name="MDDataTableRowComponent+render"></a>

### mdDataTableRowComponent.render()
**Kind**: instance method of [<code>MDDataTableRowComponent</code>](#MDDataTableRowComponent)  
<a name="MDDataTableRowComponent+connectedCallback"></a>

### mdDataTableRowComponent.connectedCallback()
**Kind**: instance method of [<code>MDDataTableRowComponent</code>](#MDDataTableRowComponent)  
<a name="MDDataTableRowComponent+disconnectedCallback"></a>

### mdDataTableRowComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDDataTableRowComponent</code>](#MDDataTableRowComponent)  
<a name="MDDataTableRowComponent.properties"></a>

### MDDataTableRowComponent.properties
**Kind**: static property of [<code>MDDataTableRowComponent</code>](#MDDataTableRowComponent)  
<a name="MDDataTableComponent"></a>

## MDDataTableComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDDataTableComponent](#MDDataTableComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.selected](#MDDataTableComponent+selected)
        * [.indeterminate](#MDDataTableComponent+indeterminate)
        * [.renderItem()](#MDDataTableComponent+renderItem)
        * [.render()](#MDDataTableComponent+render)
        * [.connectedCallback()](#MDDataTableComponent+connectedCallback)
        * [.disconnectedCallback()](#MDDataTableComponent+disconnectedCallback)
        * [.updated()](#MDDataTableComponent+updated)
        * [.handleDataTableKeydown()](#MDDataTableComponent+handleDataTableKeydown)
        * [.handleDataTableColumnCellCheckboxNativeInput()](#MDDataTableComponent+handleDataTableColumnCellCheckboxNativeInput)
        * [.handleDataTableColumnCellSortablePointerenter()](#MDDataTableComponent+handleDataTableColumnCellSortablePointerenter)
        * [.handleDataTableColumnCellSortablePointerleave()](#MDDataTableComponent+handleDataTableColumnCellSortablePointerleave)
        * [.handleDataTableColumnCellSortableClick()](#MDDataTableComponent+handleDataTableColumnCellSortableClick)
        * [.handleDataTableColumnCellResizeStart()](#MDDataTableComponent+handleDataTableColumnCellResizeStart)
        * [.handleDataTableColumnCellResize()](#MDDataTableComponent+handleDataTableColumnCellResize)
        * [.handleDataTableColumnCellResizeEnd()](#MDDataTableComponent+handleDataTableColumnCellResizeEnd)
        * [.handleDataTableColumnCellResizeDoubleTap()](#MDDataTableComponent+handleDataTableColumnCellResizeDoubleTap)
        * [.handleDataTableColumnCellDragStart()](#MDDataTableComponent+handleDataTableColumnCellDragStart)
        * [.handleDataTableColumnCellDrag()](#MDDataTableComponent+handleDataTableColumnCellDrag)
        * [.handleDataTableColumnCellDragEnd()](#MDDataTableComponent+handleDataTableColumnCellDragEnd)
        * [.handleDataTableRowCellCheckboxNativeInput()](#MDDataTableComponent+handleDataTableRowCellCheckboxNativeInput)
    * _static_
        * [.properties](#MDDataTableComponent.properties)

<a name="MDDataTableComponent+selected"></a>

### mdDataTableComponent.selected
**Kind**: instance property of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+indeterminate"></a>

### mdDataTableComponent.indeterminate
**Kind**: instance property of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+renderItem"></a>

### mdDataTableComponent.renderItem()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+render"></a>

### mdDataTableComponent.render()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+connectedCallback"></a>

### mdDataTableComponent.connectedCallback()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+disconnectedCallback"></a>

### mdDataTableComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+updated"></a>

### mdDataTableComponent.updated()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Emits**: <code>MDDataTableComponent#event:onDataTableRowClick</code>  
<a name="MDDataTableComponent+handleDataTableKeydown"></a>

### mdDataTableComponent.handleDataTableKeydown()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Emits**: <code>MDDataTableComponent#event:onDataTableKeydown</code>  
<a name="MDDataTableComponent+handleDataTableColumnCellCheckboxNativeInput"></a>

### mdDataTableComponent.handleDataTableColumnCellCheckboxNativeInput()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+handleDataTableColumnCellSortablePointerenter"></a>

### mdDataTableComponent.handleDataTableColumnCellSortablePointerenter()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Emits**: <code>MDDataTableComponent#event:onDataTableColumnCellSortablePointerenter</code>  
<a name="MDDataTableComponent+handleDataTableColumnCellSortablePointerleave"></a>

### mdDataTableComponent.handleDataTableColumnCellSortablePointerleave()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Emits**: <code>MDDataTableComponent#event:onDataTableColumnCellSortablePointerleave</code>  
<a name="MDDataTableComponent+handleDataTableColumnCellSortableClick"></a>

### mdDataTableComponent.handleDataTableColumnCellSortableClick()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Emits**: <code>MDDataTableComponent#event:onDataTableColumnCellSortableClick</code>  
<a name="MDDataTableComponent+handleDataTableColumnCellResizeStart"></a>

### mdDataTableComponent.handleDataTableColumnCellResizeStart()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Emits**: <code>MDDataTableComponent#event:onDataTableColumnCellResizeStart</code>  
<a name="MDDataTableComponent+handleDataTableColumnCellResize"></a>

### mdDataTableComponent.handleDataTableColumnCellResize()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Emits**: <code>MDDataTableComponent#event:onDataTableColumnCellResize</code>  
<a name="MDDataTableComponent+handleDataTableColumnCellResizeEnd"></a>

### mdDataTableComponent.handleDataTableColumnCellResizeEnd()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Emits**: <code>MDDataTableComponent#event:onDataTableColumnCellResizeEnd</code>  
<a name="MDDataTableComponent+handleDataTableColumnCellResizeDoubleTap"></a>

### mdDataTableComponent.handleDataTableColumnCellResizeDoubleTap()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Emits**: <code>MDDataTableComponent#event:onDataTableColumnCellResizeDoubleTap</code>  
<a name="MDDataTableComponent+handleDataTableColumnCellDragStart"></a>

### mdDataTableComponent.handleDataTableColumnCellDragStart()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Emits**: <code>MDDataTableComponent#event:onDataTableColumnCellDragStart</code>  
<a name="MDDataTableComponent+handleDataTableColumnCellDrag"></a>

### mdDataTableComponent.handleDataTableColumnCellDrag()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Emits**: <code>MDDataTableComponent#event:onDataTableColumnCellDrag</code>  
<a name="MDDataTableComponent+handleDataTableColumnCellDragEnd"></a>

### mdDataTableComponent.handleDataTableColumnCellDragEnd()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Emits**: <code>MDDataTableComponent#event:onDataTableColumnCellDragEnd</code>  
<a name="MDDataTableComponent+handleDataTableRowCellCheckboxNativeInput"></a>

### mdDataTableComponent.handleDataTableRowCellCheckboxNativeInput()
**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent.properties"></a>

### MDDataTableComponent.properties
**Kind**: static property of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [columns] | <code>Array</code> | - |
| [rows] | <code>Array</code> | - |
| [rangeSelection] | <code>Boolean</code> | - |
| [multiSelection] | <code>Boolean</code> | - |
| [singleSelection] | <code>Boolean</code> | - |
| [allSelection] | <code>Boolean</code> | - |
| [checkbox] | <code>Boolean</code> | - |

