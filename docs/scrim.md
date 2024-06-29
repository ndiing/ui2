<a name="MDScrimComponent"></a>

## MDScrimComponent ⇐ <code>MDComponent</code>
Represents a scrim component that extends MDComponent.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  
**Tagname**: md-scrim  

* [MDScrimComponent](#MDScrimComponent) ⇐ <code>MDComponent</code>
    * [.properties](#MDScrimComponent+properties)
    * [.show()](#MDScrimComponent+show)
    * [.close()](#MDScrimComponent+close)
    * [.toggle()](#MDScrimComponent+toggle)

<a name="MDScrimComponent+properties"></a>

### mdScrimComponent.properties
**Kind**: instance property of [<code>MDScrimComponent</code>](#MDScrimComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| open | <code>Boolean</code> | Indicates whether the scrim is currently open. |

<a name="MDScrimComponent+show"></a>

### mdScrimComponent.show()
Shows the scrim by setting the `open` property to `true`.

**Kind**: instance method of [<code>MDScrimComponent</code>](#MDScrimComponent)  
<a name="MDScrimComponent+close"></a>

### mdScrimComponent.close()
Closes the scrim by setting the `open` property to `false`.

**Kind**: instance method of [<code>MDScrimComponent</code>](#MDScrimComponent)  
<a name="MDScrimComponent+toggle"></a>

### mdScrimComponent.toggle()
Toggles the visibility of the scrim. If currently open, it closes; if closed, it opens.

**Kind**: instance method of [<code>MDScrimComponent</code>](#MDScrimComponent)  
