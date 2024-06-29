<a name="MDSliderComponent"></a>

## MDSliderComponent ⇐ <code>MDComponent</code>
MDSliderComponent is a custom component for creating slider controls.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  
**Emits**: <code>MDSliderComponent#event:onSliderNativeInput - Fired when the slider&#x27;s native input value changes.</code>, <code>MDSliderComponent#event:onSliderNativeReset - Fired when the slider&#x27;s native input is reset.</code>  
**Tagname**: md-slider  

* [MDSliderComponent](#MDSliderComponent) ⇐ <code>MDComponent</code>
    * [.properties](#MDSliderComponent+properties)
    * [.natives](#MDSliderComponent+natives) ⇒ <code>NodeList</code>

<a name="MDSliderComponent+properties"></a>

### mdSliderComponent.properties
**Kind**: instance property of [<code>MDSliderComponent</code>](#MDSliderComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| defaultValue | <code>Array</code> | The default value of the slider. |
| min | <code>Number</code> | The minimum value of the slider. |
| max | <code>Number</code> | The maximum value of the slider. |
| step | <code>Number</code> | The step value for the slider. |
| disabled | <code>Boolean</code> | Indicates if the slider is disabled. |
| form | <code>String</code> | The form attribute of the slider. |
| name | <code>String</code> | The name attribute of the slider. |
| list | <code>String</code> | The list attribute of the slider. |
| autocomplete | <code>String</code> | The autocomplete attribute of the slider. |

<a name="MDSliderComponent+natives"></a>

### mdSliderComponent.natives ⇒ <code>NodeList</code>
Gets the native input elements associated with the slider.

**Kind**: instance property of [<code>MDSliderComponent</code>](#MDSliderComponent)  
**Returns**: <code>NodeList</code> - The native input elements.  
