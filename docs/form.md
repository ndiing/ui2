<a name="MDFormComponent"></a>

## MDFormComponent ⇐ <code>MDElement</code>

**Kind**: global class  
**Extends**: <code>MDElement</code>

-   [MDFormComponent](#MDFormComponent) ⇐ <code>MDElement</code>
    -   _instance_
        -   [.render()](#MDFormComponent+render)
        -   [.connectedCallback()](#MDFormComponent+connectedCallback)
        -   [.disconnectedCallback()](#MDFormComponent+disconnectedCallback)
        -   [.updated()](#MDFormComponent+updated)
        -   [.handleFormNativeFormdata()](#MDFormComponent+handleFormNativeFormdata)
        -   [.handleFormNativeReset()](#MDFormComponent+handleFormNativeReset)
        -   [.handleFormNativeSubmit()](#MDFormComponent+handleFormNativeSubmit)
        -   [.reset()](#MDFormComponent+reset)
        -   [.submit()](#MDFormComponent+submit)
    -   _static_
        -   [.properties](#MDFormComponent.properties)

<a name="MDFormComponent+render"></a>

### mdFormComponent.render()

**Kind**: instance method of [<code>MDFormComponent</code>](#MDFormComponent)  
<a name="MDFormComponent+connectedCallback"></a>

### mdFormComponent.connectedCallback()

**Kind**: instance method of [<code>MDFormComponent</code>](#MDFormComponent)  
<a name="MDFormComponent+disconnectedCallback"></a>

### mdFormComponent.disconnectedCallback()

**Kind**: instance method of [<code>MDFormComponent</code>](#MDFormComponent)  
<a name="MDFormComponent+updated"></a>

### mdFormComponent.updated()

**Kind**: instance method of [<code>MDFormComponent</code>](#MDFormComponent)  
<a name="MDFormComponent+handleFormNativeFormdata"></a>

### mdFormComponent.handleFormNativeFormdata()

**Kind**: instance method of [<code>MDFormComponent</code>](#MDFormComponent)  
**Emits**: <code>MDFormComponent#event:onFormNativeFormdata</code>  
<a name="MDFormComponent+handleFormNativeReset"></a>

### mdFormComponent.handleFormNativeReset()

**Kind**: instance method of [<code>MDFormComponent</code>](#MDFormComponent)  
**Emits**: <code>MDFormComponent#event:onFormNativeReset</code>  
<a name="MDFormComponent+handleFormNativeSubmit"></a>

### mdFormComponent.handleFormNativeSubmit()

**Kind**: instance method of [<code>MDFormComponent</code>](#MDFormComponent)  
**Emits**: <code>MDFormComponent#event:onFormNativeSubmit</code>  
<a name="MDFormComponent+reset"></a>

### mdFormComponent.reset()

**Kind**: instance method of [<code>MDFormComponent</code>](#MDFormComponent)  
<a name="MDFormComponent+submit"></a>

### mdFormComponent.submit()

**Kind**: instance method of [<code>MDFormComponent</code>](#MDFormComponent)  
<a name="MDFormComponent.properties"></a>

### MDFormComponent.properties

Properties of the MDFormComponent.

**Kind**: static property of [<code>MDFormComponent</code>](#MDFormComponent)  
**Properties**

| Name            | Type                 | Description                                                                    |
| --------------- | -------------------- | ------------------------------------------------------------------------------ |
| [acceptCharset] | <code>String</code>  | The character encodings that are to be used for form submission.               |
| [action]        | <code>String</code>  | The URL where the form data will be submitted.                                 |
| [elements]      | <code>String</code>  | The form elements.                                                             |
| [encoding]      | <code>String</code>  | The encoding type for form submission.                                         |
| [enctype]       | <code>String</code>  | The content type used to submit the form to the server.                        |
| [length]        | <code>String</code>  | The number of elements in the form.                                            |
| [method]        | <code>String</code>  | The HTTP method used to submit the form.                                       |
| [name]          | <code>String</code>  | The name of the form.                                                          |
| [target]        | <code>String</code>  | The name of the target frame where the response will be displayed.             |
| [novalidate]    | <code>Boolean</code> | Specifies whether the form should be validated before submission.              |
| [autocomplete]  | <code>String</code>  | Specifies whether the autocomplete feature is enabled or disabled on the form. |
