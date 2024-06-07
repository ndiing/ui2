## Classes

<dl>
<dt><a href="#MDDataTableNativeColumnCellComponent">MDDataTableNativeColumnCellComponent</a> ⇐ <code>HTMLTableCellElement</code></dt>
<dd><p>MDDataTableNativeColumnCellComponent class extends HTMLTableCellElement
to manage sticky columns in a data table.</p>
</dd>
<dt><a href="#MDDataTableNativeRowCellComponent">MDDataTableNativeRowCellComponent</a> ⇐ <code>HTMLTableCellElement</code></dt>
<dd><p>MDDataTableNativeRowCellComponent class extends HTMLTableCellElement
to manage sticky cells in a data table row.</p>
</dd>
<dt><a href="#MDDataTableItemComponent">MDDataTableItemComponent</a> ⇐ <code>MDElement</code></dt>
<dd><p>MDDataTableItemComponent class extends MDElement
to represent an item in a data table.</p>
</dd>
<dt><a href="#MDDataTableComponent">MDDataTableComponent</a> ⇐ <code>MDElement</code></dt>
<dd><p>Represents a Material Design Data Table component with various selection options and rendering functionalities.</p>
</dd>
</dl>

<a name="MDDataTableNativeColumnCellComponent"></a>

## MDDataTableNativeColumnCellComponent ⇐ <code>HTMLTableCellElement</code>
MDDataTableNativeColumnCellComponent class extends HTMLTableCellElement
to manage sticky columns in a data table.

**Kind**: global class  
**Extends**: <code>HTMLTableCellElement</code>  

* [MDDataTableNativeColumnCellComponent](#MDDataTableNativeColumnCellComponent) ⇐ <code>HTMLTableCellElement</code>
    * [new MDDataTableNativeColumnCellComponent()](#new_MDDataTableNativeColumnCellComponent_new)
    * [.callback(entries)](#MDDataTableNativeColumnCellComponent+callback)
    * [.connectedCallback()](#MDDataTableNativeColumnCellComponent+connectedCallback)
    * [.disconnectedCallback()](#MDDataTableNativeColumnCellComponent+disconnectedCallback)

<a name="new_MDDataTableNativeColumnCellComponent_new"></a>

### new MDDataTableNativeColumnCellComponent()
Constructor for MDDataTableNativeColumnCellComponent.
Binds the callback method and initializes a ResizeObserver.

<a name="MDDataTableNativeColumnCellComponent+callback"></a>

### mdDataTableNativeColumnCellComponent.callback(entries)
Callback function to handle resize events.
Adjusts the position of sticky columns.

**Kind**: instance method of [<code>MDDataTableNativeColumnCellComponent</code>](#MDDataTableNativeColumnCellComponent)  

| Param | Type | Description |
| --- | --- | --- |
| entries | <code>Array.&lt;ResizeObserverEntry&gt;</code> | The resize observer entries. |

<a name="MDDataTableNativeColumnCellComponent+connectedCallback"></a>

### mdDataTableNativeColumnCellComponent.connectedCallback()
Called when the element is inserted into the DOM.
Observes the element for resize events and initializes resizable features if needed.

**Kind**: instance method of [<code>MDDataTableNativeColumnCellComponent</code>](#MDDataTableNativeColumnCellComponent)  
<a name="MDDataTableNativeColumnCellComponent+disconnectedCallback"></a>

### mdDataTableNativeColumnCellComponent.disconnectedCallback()
Called when the element is removed from the DOM.
Disconnects the resize observer and destroys gesture features if they exist.

**Kind**: instance method of [<code>MDDataTableNativeColumnCellComponent</code>](#MDDataTableNativeColumnCellComponent)  
<a name="MDDataTableNativeRowCellComponent"></a>

## MDDataTableNativeRowCellComponent ⇐ <code>HTMLTableCellElement</code>
MDDataTableNativeRowCellComponent class extends HTMLTableCellElement
to manage sticky cells in a data table row.

**Kind**: global class  
**Extends**: <code>HTMLTableCellElement</code>  

* [MDDataTableNativeRowCellComponent](#MDDataTableNativeRowCellComponent) ⇐ <code>HTMLTableCellElement</code>
    * [new MDDataTableNativeRowCellComponent()](#new_MDDataTableNativeRowCellComponent_new)
    * [.callback(entries)](#MDDataTableNativeRowCellComponent+callback)
    * [.connectedCallback()](#MDDataTableNativeRowCellComponent+connectedCallback)
    * [.disconnectedCallback()](#MDDataTableNativeRowCellComponent+disconnectedCallback)

<a name="new_MDDataTableNativeRowCellComponent_new"></a>

### new MDDataTableNativeRowCellComponent()
Constructor for MDDataTableNativeRowCellComponent.
Binds the callback method and initializes a ResizeObserver.

<a name="MDDataTableNativeRowCellComponent+callback"></a>

### mdDataTableNativeRowCellComponent.callback(entries)
Callback function to handle resize events.
Adjusts the position of sticky cells.

**Kind**: instance method of [<code>MDDataTableNativeRowCellComponent</code>](#MDDataTableNativeRowCellComponent)  

| Param | Type | Description |
| --- | --- | --- |
| entries | <code>Array.&lt;ResizeObserverEntry&gt;</code> | The resize observer entries. |

<a name="MDDataTableNativeRowCellComponent+connectedCallback"></a>

### mdDataTableNativeRowCellComponent.connectedCallback()
Called when the element is inserted into the DOM.
Observes the element for resize events.

**Kind**: instance method of [<code>MDDataTableNativeRowCellComponent</code>](#MDDataTableNativeRowCellComponent)  
<a name="MDDataTableNativeRowCellComponent+disconnectedCallback"></a>

### mdDataTableNativeRowCellComponent.disconnectedCallback()
Called when the element is removed from the DOM.
Disconnects the resize observer.

**Kind**: instance method of [<code>MDDataTableNativeRowCellComponent</code>](#MDDataTableNativeRowCellComponent)  
<a name="MDDataTableItemComponent"></a>

## MDDataTableItemComponent ⇐ <code>MDElement</code>
MDDataTableItemComponent class extends MDElement
to represent an item in a data table.

**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDDataTableItemComponent](#MDDataTableItemComponent) ⇐ <code>MDElement</code>
    * [new MDDataTableItemComponent()](#new_MDDataTableItemComponent_new)
    * _instance_
        * [.labelSecondary](#MDDataTableItemComponent+labelSecondary) ⇒ <code>Element</code>
        * [.render()](#MDDataTableItemComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDDataTableItemComponent+connectedCallback)
        * [.disconnectedCallback()](#MDDataTableItemComponent+disconnectedCallback)
        * [.firstUpdated(changedProperties)](#MDDataTableItemComponent+firstUpdated)
        * [.updated(changedProperties)](#MDDataTableItemComponent+updated)
        * [.handleDataTableItemCheckboxNativeInput(event)](#MDDataTableItemComponent+handleDataTableItemCheckboxNativeInput)
        * [.handleDataTableItemRadioButtonNativeInput(event)](#MDDataTableItemComponent+handleDataTableItemRadioButtonNativeInput)
        * [.handleDataTableItemSwitchNativeInput(event)](#MDDataTableItemComponent+handleDataTableItemSwitchNativeInput)
        * [.handleDataTableItemSortableClick(event)](#MDDataTableItemComponent+handleDataTableItemSortableClick)
        * [.handleDataTableItemActionClick(event)](#MDDataTableItemComponent+handleDataTableItemActionClick)
        * ["onDataTableItemSelected"](#MDDataTableItemComponent+event_onDataTableItemSelected)
        * ["onDataTableItemCheckboxNativeInput"](#MDDataTableItemComponent+event_onDataTableItemCheckboxNativeInput)
        * ["onDataTableItemRadioButtonNativeInput"](#MDDataTableItemComponent+event_onDataTableItemRadioButtonNativeInput)
        * ["onDataTableItemSwitchNativeInput"](#MDDataTableItemComponent+event_onDataTableItemSwitchNativeInput)
        * ["onDataTableItemSortableClick"](#MDDataTableItemComponent+event_onDataTableItemSortableClick)
        * ["onDataTableItemActionClick"](#MDDataTableItemComponent+event_onDataTableItemActionClick)
    * _static_
        * [.properties](#MDDataTableItemComponent.properties) ⇒ <code>Object</code>

<a name="new_MDDataTableItemComponent_new"></a>

### new MDDataTableItemComponent()
Constructor for MDDataTableItemComponent.

<a name="MDDataTableItemComponent+labelSecondary"></a>

### mdDataTableItemComponent.labelSecondary ⇒ <code>Element</code>
Get the secondary label element.

**Kind**: instance property of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Returns**: <code>Element</code> - The secondary label element.  
<a name="MDDataTableItemComponent+render"></a>

### mdDataTableItemComponent.render() ⇒ <code>TemplateResult</code>
Render the component's HTML template.

**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Returns**: <code>TemplateResult</code> - The rendered template.  
<a name="MDDataTableItemComponent+connectedCallback"></a>

### mdDataTableItemComponent.connectedCallback()
Called when the element is inserted into the DOM.
Adds the item class and adjusts line count based on label height.

**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
<a name="MDDataTableItemComponent+disconnectedCallback"></a>

### mdDataTableItemComponent.disconnectedCallback()
Called when the element is removed from the DOM.
Removes the item class.

**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
<a name="MDDataTableItemComponent+firstUpdated"></a>

### mdDataTableItemComponent.firstUpdated(changedProperties)
Called when the element is first updated.

**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map</code> | The changed properties. |

<a name="MDDataTableItemComponent+updated"></a>

### mdDataTableItemComponent.updated(changedProperties)
Called when the element is updated.
Emits an event if the selected property changes.

**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Emits**: [<code>onDataTableItemSelected</code>](#MDDataTableItemComponent+event_onDataTableItemSelected)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map</code> | The changed properties. |

<a name="MDDataTableItemComponent+handleDataTableItemCheckboxNativeInput"></a>

### mdDataTableItemComponent.handleDataTableItemCheckboxNativeInput(event)
Handle native input event for checkbox.

**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Emits**: [<code>onDataTableItemCheckboxNativeInput</code>](#MDDataTableItemComponent+event_onDataTableItemCheckboxNativeInput)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The event object. |

<a name="MDDataTableItemComponent+handleDataTableItemRadioButtonNativeInput"></a>

### mdDataTableItemComponent.handleDataTableItemRadioButtonNativeInput(event)
Handle native input event for radio button.

**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Emits**: [<code>onDataTableItemRadioButtonNativeInput</code>](#MDDataTableItemComponent+event_onDataTableItemRadioButtonNativeInput)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The event object. |

<a name="MDDataTableItemComponent+handleDataTableItemSwitchNativeInput"></a>

### mdDataTableItemComponent.handleDataTableItemSwitchNativeInput(event)
Handle native input event for switch.

**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Emits**: [<code>onDataTableItemSwitchNativeInput</code>](#MDDataTableItemComponent+event_onDataTableItemSwitchNativeInput)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The event object. |

<a name="MDDataTableItemComponent+handleDataTableItemSortableClick"></a>

### mdDataTableItemComponent.handleDataTableItemSortableClick(event)
Handle click event for sortable button.

**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Emits**: [<code>onDataTableItemSortableClick</code>](#MDDataTableItemComponent+event_onDataTableItemSortableClick)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The event object. |

<a name="MDDataTableItemComponent+handleDataTableItemActionClick"></a>

### mdDataTableItemComponent.handleDataTableItemActionClick(event)
Handle click event for action button.

**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Emits**: [<code>onDataTableItemActionClick</code>](#MDDataTableItemComponent+event_onDataTableItemActionClick)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The event object. |

<a name="MDDataTableItemComponent+event_onDataTableItemSelected"></a>

### "onDataTableItemSelected"
Data table item selected event.

**Kind**: event emitted by [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| detail | [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent) | The selected item component. |

<a name="MDDataTableItemComponent+event_onDataTableItemCheckboxNativeInput"></a>

### "onDataTableItemCheckboxNativeInput"
Data table item checkbox native input event.

**Kind**: event emitted by [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
<a name="MDDataTableItemComponent+event_onDataTableItemRadioButtonNativeInput"></a>

### "onDataTableItemRadioButtonNativeInput"
Data table item radio button native input event.

**Kind**: event emitted by [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
<a name="MDDataTableItemComponent+event_onDataTableItemSwitchNativeInput"></a>

### "onDataTableItemSwitchNativeInput"
Data table item switch native input event.

**Kind**: event emitted by [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
<a name="MDDataTableItemComponent+event_onDataTableItemSortableClick"></a>

### "onDataTableItemSortableClick"
Data table item sortable click event.

**Kind**: event emitted by [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
<a name="MDDataTableItemComponent+event_onDataTableItemActionClick"></a>

### "onDataTableItemActionClick"
Data table item action click event.

**Kind**: event emitted by [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
<a name="MDDataTableItemComponent.properties"></a>

### MDDataTableItemComponent.properties ⇒ <code>Object</code>
Define the properties of the component.

**Kind**: static property of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Returns**: <code>Object</code> - The properties of the component.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| avatar | <code>String</code> | The avatar image source URL. |
| thumbnail | <code>String</code> | The thumbnail image source URL. |
| video | <code>String</code> | The video source URL. |
| leadingCheckbox | <code>Object</code> | The leading checkbox configuration. |
| leadingRadioButton | <code>Object</code> | The leading radio button configuration. |
| leadingSwitch | <code>Object</code> | The leading switch configuration. |
| leadingIcon | <code>String</code> | The leading icon. |
| label | <code>String</code> | The primary label text. |
| subLabel | <code>String</code> | The secondary label text. |
| trailingIcon | <code>String</code> | The trailing icon. |
| trailingCheckbox | <code>Object</code> | The trailing checkbox configuration. |
| trailingRadioButton | <code>Object</code> | The trailing radio button configuration. |
| trailingSwitch | <code>Object</code> | The trailing switch configuration. |
| text | <code>String</code> | The additional text content. |
| badge | <code>Object</code> | The badge configuration. |
| selected | <code>Boolean</code> | The selected state of the item. |
| routerLink | <code>String</code> | The router link URL. |
| indeterminate | <code>Boolean</code> | The indeterminate state. |
| sortable | <code>Boolean</code> | The sortable state. |
| sortableIcon | <code>String</code> | The sortable icon. |
| trailingActions | <code>Array</code> | The trailing actions array. |

<a name="MDDataTableComponent"></a>

## MDDataTableComponent ⇐ <code>MDElement</code>
Represents a Material Design Data Table component with various selection options and rendering functionalities.

**Kind**: global class  
**Extends**: <code>MDElement</code>  
**Emits**: <code>MDDataTableComponent#event:onDataTableKeydown</code>, <code>MDDataTableComponent#event:onDataTableNativeVirtualScroll</code>, <code>MDDataTableComponent#event:onDataTabaleColumnCellResizeStart</code>, <code>MDDataTableComponent#event:onDataTabaleColumnCellResize</code>, <code>MDDataTableComponent#event:onDataTabaleColumnCellResizeEnd</code>, <code>MDDataTableComponent#event:onDataTabaleColumnCellResizeDoubleTap</code>, <code>MDDataTableComponent#event:onDataTabaleColumnCellDragStart</code>, <code>MDDataTableComponent#event:onDataTabaleColumnCellDrag</code>, <code>MDDataTableComponent#event:onDataTabaleColumnCellDragEnd</code>, <code>MDDataTableComponent#event:onDataTableColumnCellSortablePointerenter</code>, <code>MDDataTableComponent#event:onDataTableColumnCellSortablePointerleave</code>, <code>MDDataTableComponent#event:onDataTableColumnCellSortableClick</code>, <code>MDDataTableComponent#event:onDataTableItemClick</code>  

* [MDDataTableComponent](#MDDataTableComponent) ⇐ <code>MDElement</code>
    * [new MDDataTableComponent()](#new_MDDataTableComponent_new)
    * _instance_
        * [.indeterminate](#MDDataTableComponent+indeterminate) ⇒ <code>boolean</code>
        * [.selected](#MDDataTableComponent+selected) ⇒ <code>boolean</code>
        * [.isStickyLeft(index)](#MDDataTableComponent+isStickyLeft) ⇒ <code>boolean</code>
        * [.hasSticky()](#MDDataTableComponent+hasSticky) ⇒ <code>boolean</code>
        * [.hasStickyBorder(position, index)](#MDDataTableComponent+hasStickyBorder) ⇒ <code>boolean</code>
        * [.renderItem(item)](#MDDataTableComponent+renderItem) ⇒ <code>TemplateResult</code>
        * [.renderColumnCellCheckbox()](#MDDataTableComponent+renderColumnCellCheckbox) ⇒ <code>TemplateResult</code> \| <code>null</code>
        * [.renderRowCellCheckbox(row)](#MDDataTableComponent+renderRowCellCheckbox) ⇒ <code>TemplateResult</code> \| <code>null</code>
        * [.renderColumnCells()](#MDDataTableComponent+renderColumnCells) ⇒ <code>Array.&lt;TemplateResult&gt;</code>
        * [.renderRows()](#MDDataTableComponent+renderRows) ⇒ <code>Array.&lt;TemplateResult&gt;</code>
        * [.render()](#MDDataTableComponent+render) ⇒ <code>TemplateResult</code>
        * [.connectedCallback()](#MDDataTableComponent+connectedCallback)
        * [.disconnectedCallback()](#MDDataTableComponent+disconnectedCallback)
        * [.updated(changedProperties)](#MDDataTableComponent+updated)
        * [.handleDataTableKeydown(event)](#MDDataTableComponent+handleDataTableKeydown)
        * [.handleDataTableNativeVirtualScroll(event)](#MDDataTableComponent+handleDataTableNativeVirtualScroll)
        * [.handleDataTabaleColumnCellResizeStart(event)](#MDDataTableComponent+handleDataTabaleColumnCellResizeStart)
        * [.handleDataTabaleColumnCellResize(event)](#MDDataTableComponent+handleDataTabaleColumnCellResize)
        * [.handleDataTabaleColumnCellResizeEnd(event)](#MDDataTableComponent+handleDataTabaleColumnCellResizeEnd)
        * [.handleDataTabaleColumnCellResizeDoubleTap(event)](#MDDataTableComponent+handleDataTabaleColumnCellResizeDoubleTap)
        * [.handleDataTabaleColumnCellDragStart(event)](#MDDataTableComponent+handleDataTabaleColumnCellDragStart)
        * [.handleDataTabaleColumnCellDrag(event)](#MDDataTableComponent+handleDataTabaleColumnCellDrag)
        * [.handleDataTabaleColumnCellDragEnd(event)](#MDDataTableComponent+handleDataTabaleColumnCellDragEnd)
        * [.handleDataTableColumnCellSortablePointerenter(event)](#MDDataTableComponent+handleDataTableColumnCellSortablePointerenter)
        * [.handleDataTableColumnCellSortablePointerleave(event)](#MDDataTableComponent+handleDataTableColumnCellSortablePointerleave)
        * [.handleDataTableColumnCellSortableClick(event)](#MDDataTableComponent+handleDataTableColumnCellSortableClick)
        * [.handleDataTableColumnCellCheckboxInput(event)](#MDDataTableComponent+handleDataTableColumnCellCheckboxInput)
        * [.handleDataTableRowClick(event)](#MDDataTableComponent+handleDataTableRowClick)
        * [.handleDataTableRowCellCheckboxInput(event)](#MDDataTableComponent+handleDataTableRowCellCheckboxInput)
        * [.load()](#MDDataTableComponent+load)
    * _static_
        * [.properties](#MDDataTableComponent.properties) ⇒ <code>Object</code>

<a name="new_MDDataTableComponent_new"></a>

### new MDDataTableComponent()
Constructor for MDDataTableComponent.
Initializes default values for selection and store.

<a name="MDDataTableComponent+indeterminate"></a>

### mdDataTableComponent.indeterminate ⇒ <code>boolean</code>
Get the indeterminate state for the checkbox.

**Kind**: instance property of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Returns**: <code>boolean</code> - True if some rows are selected, but not all.  
**Read only**: true  
<a name="MDDataTableComponent+selected"></a>

### mdDataTableComponent.selected ⇒ <code>boolean</code>
Get the selected state for the checkbox.

**Kind**: instance property of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Returns**: <code>boolean</code> - True if all rows are selected.  
**Read only**: true  
<a name="MDDataTableComponent+isStickyLeft"></a>

### mdDataTableComponent.isStickyLeft(index) ⇒ <code>boolean</code>
Check if a column should be sticky to the left.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Returns**: <code>boolean</code> - True if the column should be sticky to the left.  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of the column. |

<a name="MDDataTableComponent+hasSticky"></a>

### mdDataTableComponent.hasSticky() ⇒ <code>boolean</code>
Check if there are any sticky columns.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Returns**: <code>boolean</code> - True if there are sticky columns.  
<a name="MDDataTableComponent+hasStickyBorder"></a>

### mdDataTableComponent.hasStickyBorder(position, index) ⇒ <code>boolean</code>
Check if a column has a sticky border.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Returns**: <code>boolean</code> - True if the column has a sticky border.  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>string</code> | The position of the sticky border ('left' or 'right'). |
| index | <code>number</code> | The index of the column. |

<a name="MDDataTableComponent+renderItem"></a>

### mdDataTableComponent.renderItem(item) ⇒ <code>TemplateResult</code>
Render an item.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Returns**: <code>TemplateResult</code> - The rendered item.  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Object</code> | The item to render. |

<a name="MDDataTableComponent+renderColumnCellCheckbox"></a>

### mdDataTableComponent.renderColumnCellCheckbox() ⇒ <code>TemplateResult</code> \| <code>null</code>
Render the column cell checkbox.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Returns**: <code>TemplateResult</code> \| <code>null</code> - The rendered column cell checkbox or nothing.  
**Emits**: <code>MDDataTableComponent#event:onDataTableItemCheckboxNativeInput</code>  
<a name="MDDataTableComponent+renderRowCellCheckbox"></a>

### mdDataTableComponent.renderRowCellCheckbox(row) ⇒ <code>TemplateResult</code> \| <code>null</code>
Render the row cell checkbox.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Returns**: <code>TemplateResult</code> \| <code>null</code> - The rendered row cell checkbox or nothing.  
**Emits**: <code>MDDataTableComponent#event:onDataTableItemCheckboxNativeInput</code>  

| Param | Type | Description |
| --- | --- | --- |
| row | <code>Object</code> | The row to render the checkbox for. |

<a name="MDDataTableComponent+renderColumnCells"></a>

### mdDataTableComponent.renderColumnCells() ⇒ <code>Array.&lt;TemplateResult&gt;</code>
Render the column cells.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Returns**: <code>Array.&lt;TemplateResult&gt;</code> - The rendered column cells.  
<a name="MDDataTableComponent+renderRows"></a>

### mdDataTableComponent.renderRows() ⇒ <code>Array.&lt;TemplateResult&gt;</code>
Renders the rows of the data table.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Returns**: <code>Array.&lt;TemplateResult&gt;</code> - The rendered rows.  
<a name="MDDataTableComponent+render"></a>

### mdDataTableComponent.render() ⇒ <code>TemplateResult</code>
Renders the MDDataTableComponent.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Returns**: <code>TemplateResult</code> - The rendered MDDataTableComponent.  
<a name="MDDataTableComponent+connectedCallback"></a>

### mdDataTableComponent.connectedCallback()
Connected Callback lifecycle method of the MDDataTableComponent.
Attaches event listeners and initializes virtual scrolling.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+disconnectedCallback"></a>

### mdDataTableComponent.disconnectedCallback()
Disconnected Callback lifecycle method of the MDDataTableComponent.
Removes event listeners and destroys virtual scrolling.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent+updated"></a>

### mdDataTableComponent.updated(changedProperties)
Updated lifecycle method of the MDDataTableComponent.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| changedProperties | <code>Map</code> | The properties that have changed. |

<a name="MDDataTableComponent+handleDataTableKeydown"></a>

### mdDataTableComponent.handleDataTableKeydown(event)
Handles keydown event for the data table.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The keydown event. |

<a name="MDDataTableComponent+handleDataTableNativeVirtualScroll"></a>

### mdDataTableComponent.handleDataTableNativeVirtualScroll(event)
Handles virtual scroll event for the data table.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>CustomEvent</code> | The virtual scroll event. |

<a name="MDDataTableComponent+handleDataTabaleColumnCellResizeStart"></a>

### mdDataTableComponent.handleDataTabaleColumnCellResizeStart(event)
Handles resize start event for the data table column cell.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The resize start event. |

<a name="MDDataTableComponent+handleDataTabaleColumnCellResize"></a>

### mdDataTableComponent.handleDataTabaleColumnCellResize(event)
Handles resize event for the data table column cell.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The resize event. |

<a name="MDDataTableComponent+handleDataTabaleColumnCellResizeEnd"></a>

### mdDataTableComponent.handleDataTabaleColumnCellResizeEnd(event)
Handles resize end event for the data table column cell.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The resize end event. |

<a name="MDDataTableComponent+handleDataTabaleColumnCellResizeDoubleTap"></a>

### mdDataTableComponent.handleDataTabaleColumnCellResizeDoubleTap(event)
Handles double tap event for the data table column cell.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The double tap event. |

<a name="MDDataTableComponent+handleDataTabaleColumnCellDragStart"></a>

### mdDataTableComponent.handleDataTabaleColumnCellDragStart(event)
Handles drag start event for the data table column cell.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The drag start event. |

<a name="MDDataTableComponent+handleDataTabaleColumnCellDrag"></a>

### mdDataTableComponent.handleDataTabaleColumnCellDrag(event)
Handles drag event for the data table column cell.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The drag event. |

<a name="MDDataTableComponent+handleDataTabaleColumnCellDragEnd"></a>

### mdDataTableComponent.handleDataTabaleColumnCellDragEnd(event)
Handles drag end event for the data table column cell.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The drag end event. |

<a name="MDDataTableComponent+handleDataTableColumnCellSortablePointerenter"></a>

### mdDataTableComponent.handleDataTableColumnCellSortablePointerenter(event)
Handles sortable pointer enter event for the data table column cell.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The sortable pointer enter event. |

<a name="MDDataTableComponent+handleDataTableColumnCellSortablePointerleave"></a>

### mdDataTableComponent.handleDataTableColumnCellSortablePointerleave(event)
Handles sortable pointer leave event for the data table column cell.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The sortable pointer leave event. |

<a name="MDDataTableComponent+handleDataTableColumnCellSortableClick"></a>

### mdDataTableComponent.handleDataTableColumnCellSortableClick(event)
Handles sortable click event for the data table column cell.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The sortable click event. |

<a name="MDDataTableComponent+handleDataTableColumnCellCheckboxInput"></a>

### mdDataTableComponent.handleDataTableColumnCellCheckboxInput(event)
Handles input event for the data table column cell checkbox.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The input event. |

<a name="MDDataTableComponent+handleDataTableRowClick"></a>

### mdDataTableComponent.handleDataTableRowClick(event)
Handles click event for the data table row.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The click event. |

<a name="MDDataTableComponent+handleDataTableRowCellCheckboxInput"></a>

### mdDataTableComponent.handleDataTableRowCellCheckboxInput(event)
Handles input event for the data table row cell checkbox.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Event</code> | The input event. |

<a name="MDDataTableComponent+load"></a>

### mdDataTableComponent.load()
Loads data into the data table.

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent.properties"></a>

### MDDataTableComponent.properties ⇒ <code>Object</code>
Properties of the MDDataTableComponent.

**Kind**: static property of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Returns**: <code>Object</code> - The properties object.  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| columns | <code>Array</code> | The columns of the data table. |
| rows | <code>Array</code> | The rows of the data table. |
| summaries | <code>Array</code> | The summaries of the data table. |
| rangeSelection | <code>Boolean</code> | Enables range selection. |
| multiSelection | <code>Boolean</code> | Enables multi-selection. |
| singleSelection | <code>Boolean</code> | Enables single selection. |
| allSelection | <code>Boolean</code> | Enables selection of all rows. |
| checkbox | <code>Boolean</code> | Enables checkbox selection. |

