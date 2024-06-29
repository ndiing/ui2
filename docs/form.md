<a name="MDFormComponent"></a>

## MDFormComponent ⇐ <code>MDComponent</code>
A custom form component that extends MDComponent to handle form submissions and resets.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  
**Emits**: <code>MDFormComponent#event:onFormNativeReset - Fires when the form is reset.</code>, <code>MDFormComponent#event:onFormNativeSubmit - Fires when the form is submitted.</code>  
**Tagname**: md-form  

* [MDFormComponent](#MDFormComponent) ⇐ <code>MDComponent</code>
    * [.properties](#MDFormComponent+properties)
    * [.native](#MDFormComponent+native) ⇒ <code>HTMLFormElement</code>
    * [.reset()](#MDFormComponent+reset)
    * [.submit()](#MDFormComponent+submit)

<a name="MDFormComponent+properties"></a>

### mdFormComponent.properties
**Kind**: instance property of [<code>MDFormComponent</code>](#MDFormComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| acceptCharset | <code>String</code> | Character encodings that are to be used for the form submission. |
| action | <code>String</code> | The URL that processes the form submission. |
| autocomplete | <code>String</code> | Indicates whether the browser can automatically complete the form fields. |
| enctype | <code>String</code> | The encoding type to use for form submission. |
| method | <code>String</code> | The HTTP method to use for form submission (e.g., "get", "post"). |
| name | <code>String</code> | The name of the form. |
| novalidate | <code>Boolean</code> | If true, the form will not be validated when submitted. |
| target | <code>String</code> | The browsing context in which to display the response. |
| rel | <code>String</code> | Specifies the relationship of the target object to the form. |

<a name="MDFormComponent+native"></a>

### mdFormComponent.native ⇒ <code>HTMLFormElement</code>
Returns the native form element within the component.

**Kind**: instance property of [<code>MDFormComponent</code>](#MDFormComponent)  
**Returns**: <code>HTMLFormElement</code> - The native form element.  
<a name="MDFormComponent+reset"></a>

### mdFormComponent.reset()
Resets the native form element.

**Kind**: instance method of [<code>MDFormComponent</code>](#MDFormComponent)  
<a name="MDFormComponent+submit"></a>

### mdFormComponent.submit()
Submits the native form element.

**Kind**: instance method of [<code>MDFormComponent</code>](#MDFormComponent)  
