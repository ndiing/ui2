## Classes

<dl>
<dt><a href="#MDDataTableItemComponent">MDDataTableItemComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
<dt><a href="#MDDataTableComponent">MDDataTableComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
</dl>

<a name="MDDataTableItemComponent"></a>

## MDDataTableItemComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDDataTableItemComponent](#MDDataTableItemComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.labelSecondary](#MDDataTableItemComponent+labelSecondary)
        -   [.render()](#MDDataTableItemComponent+render)
        -   [.connectedCallback()](#MDDataTableItemComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDDataTableItemComponent+disconnectedCallback)
        -   [.firstUpdated()](#MDDataTableItemComponent+firstUpdated)
        -   [.handleDataTableItemActionClick()](#MDDataTableItemComponent+handleDataTableItemActionClick)
        -   [.handleDataTableItemSortableClick()](#MDDataTableItemComponent+handleDataTableItemSortableClick)
        -   [.handleDataTableItemCheckboxNativeInput()](#MDDataTableItemComponent+handleDataTableItemCheckboxNativeInput)
        -   [.handleDataTableItemRadioButtonNativeInput()](#MDDataTableItemComponent+handleDataTableItemRadioButtonNativeInput)
        -   [.handleDataTableItemSwitchNativeInput()](#MDDataTableItemComponent+handleDataTableItemSwitchNativeInput)
    -   _static_
        -   [.properties](#MDDataTableItemComponent.properties)

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
<a name="MDDataTableItemComponent+handleDataTableItemActionClick"></a>

### mdDataTableItemComponent.handleDataTableItemActionClick()

**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Emits**: <code>MDDataTableItemComponent#event:onDataTableItemActionClick</code>  
<a name="MDDataTableItemComponent+handleDataTableItemSortableClick"></a>

### mdDataTableItemComponent.handleDataTableItemSortableClick()

**Kind**: instance method of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Emits**: <code>MDDataTableItemComponent#event:onDataTableItemSortableClick</code>  
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
<a name="MDDataTableItemComponent.properties"></a>

### MDDataTableItemComponent.properties

Properties of the MDDataTableItemComponent.

**Kind**: static property of [<code>MDDataTableItemComponent</code>](#MDDataTableItemComponent)  
**Properties**

| Name                  | Type                 | Description                                       |
| --------------------- | -------------------- | ------------------------------------------------- |
| [avatar]              | <code>String</code>  | URL of the avatar image.                          |
| [thumbnail]           | <code>String</code>  | URL of the thumbnail image.                       |
| [video]               | <code>String</code>  | URL of the video.                                 |
| [leadingCheckbox]     | <code>Object</code>  | Leading checkbox object.                          |
| [leadingRadioButton]  | <code>Object</code>  | Leading radio button object.                      |
| [leadingSwitch]       | <code>Object</code>  | Leading switch object.                            |
| [leadingIcon]         | <code>String</code>  | Leading icon name.                                |
| [label]               | <code>String</code>  | Main label text.                                  |
| [subLabel]            | <code>String</code>  | Sublabel text.                                    |
| [trailingIcon]        | <code>String</code>  | Trailing icon name.                               |
| [trailingCheckbox]    | <code>Object</code>  | Trailing checkbox object.                         |
| [trailingRadioButton] | <code>Object</code>  | Trailing radio button object.                     |
| [trailingSwitch]      | <code>Object</code>  | Trailing switch object.                           |
| [text]                | <code>String</code>  | Additional text content.                          |
| [badge]               | <code>Object</code>  | Badge object.                                     |
| [selected]            | <code>Boolean</code> | Indicates if the item is selected.                |
| [indeterminate]       | <code>Boolean</code> | Indicates if the item selection is indeterminate. |
| [routerLink]          | <code>String</code>  | URL for router link.                              |
| [align]               | <code>String</code>  | Alignment of the item content.                    |
| [sortable]            | <code>Boolean</code> | Indicates if the item is sortable.                |
| [sortableIcon]        | <code>String</code>  | Icon to indicate sorting.                         |

<a name="MDDataTableComponent"></a>

## MDDataTableComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDDataTableComponent](#MDDataTableComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.renderItem()](#MDDataTableComponent+renderItem)
        -   [.render()](#MDDataTableComponent+render)
        -   [.connectedCallback()](#MDDataTableComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDDataTableComponent+disconnectedCallback)
        -   [.updated()](#MDDataTableComponent+updated)
        -   [.handleDataTableKeydown()](#MDDataTableComponent+handleDataTableKeydown)
        -   [.handleDataTableColumnCellCheckboxNativeInput()](#MDDataTableComponent+handleDataTableColumnCellCheckboxNativeInput)
        -   [.handleDataTableRowCellCheckboxNativeInput()](#MDDataTableComponent+handleDataTableRowCellCheckboxNativeInput)
    -   _static_
        -   [.properties](#MDDataTableComponent.properties)

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
<a name="MDDataTableComponent+handleDataTableRowCellCheckboxNativeInput"></a>

### mdDataTableComponent.handleDataTableRowCellCheckboxNativeInput()

**Kind**: instance method of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
<a name="MDDataTableComponent.properties"></a>

### MDDataTableComponent.properties

Properties of the MDDataTableComponent.

**Kind**: static property of [<code>MDDataTableComponent</code>](#MDDataTableComponent)  
**Properties**

| Name              | Type                 | Description                                          |
| ----------------- | -------------------- | ---------------------------------------------------- |
| [columns]         | <code>Array</code>   | The array of columns to display in the table.        |
| [rows]            | <code>Array</code>   | The array of rows to display in the table.           |
| [rangeSelection]  | <code>Boolean</code> | Indicates if range selection is enabled.             |
| [multiSelection]  | <code>Boolean</code> | Indicates if multiple selection is enabled.          |
| [singleSelection] | <code>Boolean</code> | Indicates if single selection is enabled.            |
| [allSelection]    | <code>Boolean</code> | Indicates if selecting all items is enabled.         |
| [checkbox]        | <code>Boolean</code> | Indicates if checkboxes are displayed for selection. |
