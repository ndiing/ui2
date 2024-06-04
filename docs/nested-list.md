## Classes

<dl>
<dt><a href="#MDNestedListItemComponent">MDNestedListItemComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
<dt><a href="#MDNestedListRowComponent">MDNestedListRowComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
<dt><a href="#MDNestedListComponent">MDNestedListComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
</dl>

<a name="MDNestedListItemComponent"></a>

## MDNestedListItemComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDNestedListItemComponent](#MDNestedListItemComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.labelSecondary](#MDNestedListItemComponent+labelSecondary)
        * [.renderTree()](#MDNestedListItemComponent+renderTree)
        * [.renderLevel()](#MDNestedListItemComponent+renderLevel)
        * [.renderAccordion()](#MDNestedListItemComponent+renderAccordion)
        * [.render()](#MDNestedListItemComponent+render)
        * [.connectedCallback()](#MDNestedListItemComponent+connectedCallback)
        * [.disconnectedCallback()](#MDNestedListItemComponent+disconnectedCallback)
        * [.firstUpdated()](#MDNestedListItemComponent+firstUpdated)
        * [.handleNestedListItemActionClick()](#MDNestedListItemComponent+handleNestedListItemActionClick)
    * _static_
        * [.properties](#MDNestedListItemComponent.properties)

<a name="MDNestedListItemComponent+labelSecondary"></a>

### mdNestedListItemComponent.labelSecondary
**Kind**: instance property of [<code>MDNestedListItemComponent</code>](#MDNestedListItemComponent)  
<a name="MDNestedListItemComponent+renderTree"></a>

### mdNestedListItemComponent.renderTree()
**Kind**: instance method of [<code>MDNestedListItemComponent</code>](#MDNestedListItemComponent)  
<a name="MDNestedListItemComponent+renderLevel"></a>

### mdNestedListItemComponent.renderLevel()
**Kind**: instance method of [<code>MDNestedListItemComponent</code>](#MDNestedListItemComponent)  
<a name="MDNestedListItemComponent+renderAccordion"></a>

### mdNestedListItemComponent.renderAccordion()
**Kind**: instance method of [<code>MDNestedListItemComponent</code>](#MDNestedListItemComponent)  
<a name="MDNestedListItemComponent+render"></a>

### mdNestedListItemComponent.render()
**Kind**: instance method of [<code>MDNestedListItemComponent</code>](#MDNestedListItemComponent)  
<a name="MDNestedListItemComponent+connectedCallback"></a>

### mdNestedListItemComponent.connectedCallback()
**Kind**: instance method of [<code>MDNestedListItemComponent</code>](#MDNestedListItemComponent)  
<a name="MDNestedListItemComponent+disconnectedCallback"></a>

### mdNestedListItemComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDNestedListItemComponent</code>](#MDNestedListItemComponent)  
<a name="MDNestedListItemComponent+firstUpdated"></a>

### mdNestedListItemComponent.firstUpdated()
**Kind**: instance method of [<code>MDNestedListItemComponent</code>](#MDNestedListItemComponent)  
**Emits**: <code>MDNestedListItemComponent#event:onNestedListItemSelected</code>  
<a name="MDNestedListItemComponent+handleNestedListItemActionClick"></a>

### mdNestedListItemComponent.handleNestedListItemActionClick()
**Kind**: instance method of [<code>MDNestedListItemComponent</code>](#MDNestedListItemComponent)  
**Emits**: <code>MDNestedListItemComponent#event:onNestedListItemActionClick</code>  
<a name="MDNestedListItemComponent.properties"></a>

### MDNestedListItemComponent.properties
Properties of the MDNestedListItemComponent.

**Kind**: static property of [<code>MDNestedListItemComponent</code>](#MDNestedListItemComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [label] | <code>String</code> | The label text of the nested list item. |
| [selected] | <code>Boolean</code> | Indicates if the item is selected. |
| [routerLink] | <code>String</code> | The URL for router link. |
| [indent] | <code>Number</code> | The indentation level of the item. |
| [isNode] | <code>Boolean</code> | Indicates if the item is a node. |
| [ui] | <code>String</code> | UI style of the item. |
| [expanded] | <code>Boolean</code> | Indicates if the item is expanded. |
| [activated] | <code>Boolean</code> | Indicates if the item is activated. |
| [isParent] | <code>Boolean</code> | Indicates if the item is a parent node. |
| [hasLevel] | <code>Boolean</code> | Indicates if the item has a level. |
| [nodeIcons] | <code>Array</code> | Icons for the node. |
| [leafIcon] | <code>String</code> | Icon for leaf nodes. |

<a name="MDNestedListRowComponent"></a>

## MDNestedListRowComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDNestedListRowComponent](#MDNestedListRowComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.render()](#MDNestedListRowComponent+render)
        * [.connectedCallback()](#MDNestedListRowComponent+connectedCallback)
        * [.disconnectedCallback()](#MDNestedListRowComponent+disconnectedCallback)
    * _static_
        * [.properties](#MDNestedListRowComponent.properties)

<a name="MDNestedListRowComponent+render"></a>

### mdNestedListRowComponent.render()
**Kind**: instance method of [<code>MDNestedListRowComponent</code>](#MDNestedListRowComponent)  
<a name="MDNestedListRowComponent+connectedCallback"></a>

### mdNestedListRowComponent.connectedCallback()
**Kind**: instance method of [<code>MDNestedListRowComponent</code>](#MDNestedListRowComponent)  
<a name="MDNestedListRowComponent+disconnectedCallback"></a>

### mdNestedListRowComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDNestedListRowComponent</code>](#MDNestedListRowComponent)  
<a name="MDNestedListRowComponent.properties"></a>

### MDNestedListRowComponent.properties
**Kind**: static property of [<code>MDNestedListRowComponent</code>](#MDNestedListRowComponent)  
<a name="MDNestedListComponent"></a>

## MDNestedListComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDNestedListComponent](#MDNestedListComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.renderItem()](#MDNestedListComponent+renderItem)
        * [.render()](#MDNestedListComponent+render)
        * [.connectedCallback()](#MDNestedListComponent+connectedCallback)
        * [.disconnectedCallback()](#MDNestedListComponent+disconnectedCallback)
        * [.updated()](#MDNestedListComponent+updated)
        * [.createList()](#MDNestedListComponent+createList)
        * [.lastList()](#MDNestedListComponent+lastList)
        * [.handleNestedListItemClick()](#MDNestedListComponent+handleNestedListItemClick)
        * [.selectList()](#MDNestedListComponent+selectList)
        * [.handleNestedListKeydown()](#MDNestedListComponent+handleNestedListKeydown)
        * [.expandList()](#MDNestedListComponent+expandList)
        * [.handleNestedListItemActionClick()](#MDNestedListComponent+handleNestedListItemActionClick)
    * _static_
        * [.properties](#MDNestedListComponent.properties)

<a name="MDNestedListComponent+renderItem"></a>

### mdNestedListComponent.renderItem()
**Kind**: instance method of [<code>MDNestedListComponent</code>](#MDNestedListComponent)  
<a name="MDNestedListComponent+render"></a>

### mdNestedListComponent.render()
**Kind**: instance method of [<code>MDNestedListComponent</code>](#MDNestedListComponent)  
<a name="MDNestedListComponent+connectedCallback"></a>

### mdNestedListComponent.connectedCallback()
**Kind**: instance method of [<code>MDNestedListComponent</code>](#MDNestedListComponent)  
<a name="MDNestedListComponent+disconnectedCallback"></a>

### mdNestedListComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDNestedListComponent</code>](#MDNestedListComponent)  
<a name="MDNestedListComponent+updated"></a>

### mdNestedListComponent.updated()
**Kind**: instance method of [<code>MDNestedListComponent</code>](#MDNestedListComponent)  
<a name="MDNestedListComponent+createList"></a>

### mdNestedListComponent.createList()
**Kind**: instance method of [<code>MDNestedListComponent</code>](#MDNestedListComponent)  
<a name="MDNestedListComponent+lastList"></a>

### mdNestedListComponent.lastList()
**Kind**: instance method of [<code>MDNestedListComponent</code>](#MDNestedListComponent)  
<a name="MDNestedListComponent+handleNestedListItemClick"></a>

### mdNestedListComponent.handleNestedListItemClick()
**Kind**: instance method of [<code>MDNestedListComponent</code>](#MDNestedListComponent)  
**Emits**: <code>MDNestedListComponent#event:onNestedListItemClick</code>  
<a name="MDNestedListComponent+selectList"></a>

### mdNestedListComponent.selectList()
**Kind**: instance method of [<code>MDNestedListComponent</code>](#MDNestedListComponent)  
<a name="MDNestedListComponent+handleNestedListKeydown"></a>

### mdNestedListComponent.handleNestedListKeydown()
**Kind**: instance method of [<code>MDNestedListComponent</code>](#MDNestedListComponent)  
**Emits**: <code>MDNestedListComponent#event:onNestedListKeydown</code>  
<a name="MDNestedListComponent+expandList"></a>

### mdNestedListComponent.expandList()
**Kind**: instance method of [<code>MDNestedListComponent</code>](#MDNestedListComponent)  
<a name="MDNestedListComponent+handleNestedListItemActionClick"></a>

### mdNestedListComponent.handleNestedListItemActionClick()
**Kind**: instance method of [<code>MDNestedListComponent</code>](#MDNestedListComponent)  
<a name="MDNestedListComponent.properties"></a>

### MDNestedListComponent.properties
Properties of the MDNestedListComponent.

**Kind**: static property of [<code>MDNestedListComponent</code>](#MDNestedListComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [list] | <code>Array</code> | The array of items to display in the nested list. |
| [rangeSelection] | <code>Boolean</code> | Indicates if range selection is enabled. |
| [multiSelection] | <code>Boolean</code> | Indicates if multiple selection is enabled. |
| [singleSelection] | <code>Boolean</code> | Indicates if single selection is enabled. |
| [allSelection] | <code>Boolean</code> | Indicates if selecting all items is enabled. |
| [ui] | <code>String</code> | Specifies the UI style of the nested list. Possible values are 'tree', 'level', 'accordion'. |

