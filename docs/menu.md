<a name="MDMenuComponent"></a>

## MDMenuComponent ⇐ <code>MDSheetComponent</code>
MDMenuComponent is a class that extends MDSheetComponent and represents a menu component with tree-like structure.
This component supports interactions with menu items and dynamic positioning.

**Kind**: global class  
**Extends**: <code>MDSheetComponent</code>  
**Emits**: <code>MDMenuComponent#event:onMenuTreeItemClick - Fires when a menu tree item is clicked.</code>  
**Tagname**: md-menu  

* [MDMenuComponent](#MDMenuComponent) ⇐ <code>MDSheetComponent</code>
    * [.properties](#MDMenuComponent+properties)
    * [.body](#MDMenuComponent+body)
    * [.body](#MDMenuComponent+body)
    * [.showModal(button, options)](#MDMenuComponent+showModal)
    * [.show(button, options)](#MDMenuComponent+show)
    * [.setPlacement(button, options)](#MDMenuComponent+setPlacement)

<a name="MDMenuComponent+properties"></a>

### mdMenuComponent.properties
Inherits properties from MDSheetComponent and MDTreeComponent.

**Kind**: instance property of [<code>MDMenuComponent</code>](#MDMenuComponent)  
<a name="MDMenuComponent+body"></a>

### mdMenuComponent.body
Returns the body of the menu component, which contains a tree of menu items.

**Kind**: instance property of [<code>MDMenuComponent</code>](#MDMenuComponent)  
<a name="MDMenuComponent+body"></a>

### mdMenuComponent.body
Sets the body of the menu component.

**Kind**: instance property of [<code>MDMenuComponent</code>](#MDMenuComponent)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Object</code> | The new body content for the menu. |

<a name="MDMenuComponent+showModal"></a>

### mdMenuComponent.showModal(button, options)
Shows the menu as a modal.

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>HTMLElement</code> | The button element that triggers the menu. |
| options | <code>Object</code> | Options for positioning the menu. |

<a name="MDMenuComponent+show"></a>

### mdMenuComponent.show(button, options)
Shows the menu.

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>HTMLElement</code> | The button element that triggers the menu. |
| options | <code>Object</code> | Options for positioning the menu. |

<a name="MDMenuComponent+setPlacement"></a>

### mdMenuComponent.setPlacement(button, options)
Sets the placement of the menu relative to the button.

**Kind**: instance method of [<code>MDMenuComponent</code>](#MDMenuComponent)  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>HTMLElement</code> | The button element that triggers the menu. |
| options | <code>Object</code> | Options for positioning the menu. |

