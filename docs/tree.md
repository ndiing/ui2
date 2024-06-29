<a name="MDTreeComponent"></a>

## MDTreeComponent ⇐ <code>MDComponent</code>
A custom tree component that extends MDComponent to display a tree structure with various variants.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  
**Emits**: <code>MDTreeComponent#event:onTreeItemClick - Fires when a tree item is clicked.</code>  
**Tagname**: md-tree  

* [MDTreeComponent](#MDTreeComponent) ⇐ <code>MDComponent</code>
    * [.properties](#MDTreeComponent+properties)
    * [.getList(list)](#MDTreeComponent+getList) ⇒ <code>Array</code> \| <code>undefined</code>
    * [.setList(list, [indent])](#MDTreeComponent+setList) ⇒ <code>Object</code>
    * [.select(list, data)](#MDTreeComponent+select) ⇒ <code>boolean</code>
    * [.expand(list, data)](#MDTreeComponent+expand)

<a name="MDTreeComponent+properties"></a>

### mdTreeComponent.properties
**Kind**: instance property of [<code>MDTreeComponent</code>](#MDTreeComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | The list of tree items to be rendered. |
| variant | <code>String</code> | The variant of the tree component (e.g., "plain", "accordion", "tree", "level"). |

<a name="MDTreeComponent+getList"></a>

### mdTreeComponent.getList(list) ⇒ <code>Array</code> \| <code>undefined</code>
Recursively retrieves the list of children from the given list of items.

**Kind**: instance method of [<code>MDTreeComponent</code>](#MDTreeComponent)  
**Returns**: <code>Array</code> \| <code>undefined</code> - The list of children, if any.  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | The list of items to retrieve children from. |

<a name="MDTreeComponent+setList"></a>

### mdTreeComponent.setList(list, [indent]) ⇒ <code>Object</code>
Recursively sets the list of items with the appropriate properties.

**Kind**: instance method of [<code>MDTreeComponent</code>](#MDTreeComponent)  
**Returns**: <code>Object</code> - An object containing expanded and activated states.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| list | <code>Array</code> |  | The list of items to set. |
| [indent] | <code>number</code> | <code>0</code> | The indent level of the items. |

<a name="MDTreeComponent+select"></a>

### mdTreeComponent.select(list, data) ⇒ <code>boolean</code>
Recursively selects the specified data item in the list.

**Kind**: instance method of [<code>MDTreeComponent</code>](#MDTreeComponent)  
**Returns**: <code>boolean</code> - True if the item was activated, false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | The list of items to search. |
| data | <code>Object</code> | The data item to select. |

<a name="MDTreeComponent+expand"></a>

### mdTreeComponent.expand(list, data)
Toggles the expanded state of the specified data item.

**Kind**: instance method of [<code>MDTreeComponent</code>](#MDTreeComponent)  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | The list of items. |
| data | <code>Object</code> | The data item to expand or collapse. |

