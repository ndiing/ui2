<a name="MDImageComponent"></a>

## MDImageComponent ⇐ <code>MDComponent</code>
MDImageComponent represents an image component that extends MDComponent.
This component supports various properties for image attributes and styling.

**Kind**: global class  
**Extends**: <code>MDComponent</code>  
**Emits**: <code>MDImageComponent#event:onImageNativeLoad - Fires when the native image has loaded successfully.</code>, <code>MDImageComponent#event:onImageNativeError - Fires when there is an error loading the native image.</code>  
**Tagname**: md-image  
<a name="MDImageComponent+properties"></a>

### mdImageComponent.properties
**Kind**: instance property of [<code>MDImageComponent</code>](#MDImageComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| src | <code>String</code> | The URL of the image. |
| alt | <code>String</code> | The alternate text for the image. |
| srcset | <code>String</code> | The image sourceset attribute. |
| sizes | <code>String</code> | The image sizes attribute. |
| crossorigin | <code>String</code> | The CORS attribute for the image. |
| usemap | <code>String</code> | The usemap attribute for image maps. |
| ismap | <code>Boolean</code> | Indicates if the image is part of an image map. |
| width | <code>Number</code> | The width of the image. |
| height | <code>Number</code> | The height of the image. |
| referrerpolicy | <code>String</code> | The referrer policy for the image. |
| decoding | <code>String</code> | The decoding hint for the image. |
| loading | <code>String</code> | The lazy-loading strategy for the image ('lazy', 'eager', or 'auto'). |
| title | <code>String</code> | The title attribute of the image. |
| longdesc | <code>String</code> | The long description URL for the image. |
| fetchpriority | <code>String</code> | The priority hint for fetching the image ('auto', 'high', 'low', or 'none'). |
| ratio | <code>String</code> | The aspect ratio of the image container (e.g., '16/9', '1.5', etc.). |
| variant | <code>String</code> | The variant style for the image (e.g., 'rounded'). |

