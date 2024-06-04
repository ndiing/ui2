## Classes

<dl>
<dt><a href="#MDColorPickerComponent">MDColorPickerComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
<dt><a href="#MDColorPickerComponent">MDColorPickerComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
<dt><a href="#MDColorPickerComponent">MDColorPickerComponent</a> ⇐ <code>MDElement</code></dt>
<dd></dd>
</dl>

<a name="MDColorPickerComponent"></a>

## MDColorPickerComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDColorPickerComponent](#MDColorPickerComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.label](#MDColorPickerComponent+label)
        * [.subLabel](#MDColorPickerComponent+subLabel)
        * [.hexToRgba()](#MDColorPickerComponent+hexToRgba)
        * [.rgbaToHsla()](#MDColorPickerComponent+rgbaToHsla)
        * [.rgbaToHex()](#MDColorPickerComponent+rgbaToHex)
        * [.hslaToRgba()](#MDColorPickerComponent+hslaToRgba)
        * [.renderCard()](#MDColorPickerComponent+renderCard)
        * [.render()](#MDColorPickerComponent+render)
        * [.connectedCallback()](#MDColorPickerComponent+connectedCallback)
        * [.disconnectedCallback()](#MDColorPickerComponent+disconnectedCallback)
        * [.firstUpdated()](#MDColorPickerComponent+firstUpdated)
        * [.updated()](#MDColorPickerComponent+updated)
        * [.updateFromValue()](#MDColorPickerComponent+updateFromValue)
        * [.drawSolidGradient()](#MDColorPickerComponent+drawSolidGradient)
        * [.drawHueGradient()](#MDColorPickerComponent+drawHueGradient)
        * [.drawOpacityGradient()](#MDColorPickerComponent+drawOpacityGradient)
        * [.resizeCanvas()](#MDColorPickerComponent+resizeCanvas)
        * [.show()](#MDColorPickerComponent+show)
        * [.close()](#MDColorPickerComponent+close)
        * [.toggle()](#MDColorPickerComponent+toggle)
        * [.handleColorPickerScrimClick()](#MDColorPickerComponent+handleColorPickerScrimClick)
        * [.handleColorPickerLabelPrimaryClick()](#MDColorPickerComponent+handleColorPickerLabelPrimaryClick)
        * [.handleColorPickerLabelSecondaryClick()](#MDColorPickerComponent+handleColorPickerLabelSecondaryClick)
        * [.handleColorPickerActionNavigateBeforeClick()](#MDColorPickerComponent+handleColorPickerActionNavigateBeforeClick)
        * [.handleColorPickerActionNavigateNextClick()](#MDColorPickerComponent+handleColorPickerActionNavigateNextClick)
        * [.handleColorPickerSolidPointerdown()](#MDColorPickerComponent+handleColorPickerSolidPointerdown)
        * [.updateFromSolid()](#MDColorPickerComponent+updateFromSolid)
        * [.handleColorPickerSolidPointermove()](#MDColorPickerComponent+handleColorPickerSolidPointermove)
        * [.handleColorPickerSolidPointerup()](#MDColorPickerComponent+handleColorPickerSolidPointerup)
        * [.handleColorPickerHueInput()](#MDColorPickerComponent+handleColorPickerHueInput)
        * [.handleColorPickerOpacityInput()](#MDColorPickerComponent+handleColorPickerOpacityInput)
        * [.handleColorPickerButtonCancelClick()](#MDColorPickerComponent+handleColorPickerButtonCancelClick)
        * [.handleColorPickerButtonOkClick()](#MDColorPickerComponent+handleColorPickerButtonOkClick)
    * _static_
        * [.properties](#MDColorPickerComponent.properties)

<a name="MDColorPickerComponent+label"></a>

### mdColorPickerComponent.label
**Kind**: instance property of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+subLabel"></a>

### mdColorPickerComponent.subLabel
**Kind**: instance property of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+hexToRgba"></a>

### mdColorPickerComponent.hexToRgba()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+rgbaToHsla"></a>

### mdColorPickerComponent.rgbaToHsla()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+rgbaToHex"></a>

### mdColorPickerComponent.rgbaToHex()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+hslaToRgba"></a>

### mdColorPickerComponent.hslaToRgba()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+renderCard"></a>

### mdColorPickerComponent.renderCard()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+render"></a>

### mdColorPickerComponent.render()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+connectedCallback"></a>

### mdColorPickerComponent.connectedCallback()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+disconnectedCallback"></a>

### mdColorPickerComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+firstUpdated"></a>

### mdColorPickerComponent.firstUpdated()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+updated"></a>

### mdColorPickerComponent.updated()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerShow</code>, <code>MDColorPickerComponent#event:onColorPickerClose</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+updateFromValue"></a>

### mdColorPickerComponent.updateFromValue()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+drawSolidGradient"></a>

### mdColorPickerComponent.drawSolidGradient()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+drawHueGradient"></a>

### mdColorPickerComponent.drawHueGradient()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+drawOpacityGradient"></a>

### mdColorPickerComponent.drawOpacityGradient()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+resizeCanvas"></a>

### mdColorPickerComponent.resizeCanvas()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+show"></a>

### mdColorPickerComponent.show()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+close"></a>

### mdColorPickerComponent.close()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+toggle"></a>

### mdColorPickerComponent.toggle()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+handleColorPickerScrimClick"></a>

### mdColorPickerComponent.handleColorPickerScrimClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerScrimClick</code>  
<a name="MDColorPickerComponent+handleColorPickerLabelPrimaryClick"></a>

### mdColorPickerComponent.handleColorPickerLabelPrimaryClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerLabelPrimaryClick</code>  
<a name="MDColorPickerComponent+handleColorPickerLabelSecondaryClick"></a>

### mdColorPickerComponent.handleColorPickerLabelSecondaryClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerLabelSecondaryClick</code>  
<a name="MDColorPickerComponent+handleColorPickerActionNavigateBeforeClick"></a>

### mdColorPickerComponent.handleColorPickerActionNavigateBeforeClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerActionNavigateBeforeClick</code>  
<a name="MDColorPickerComponent+handleColorPickerActionNavigateNextClick"></a>

### mdColorPickerComponent.handleColorPickerActionNavigateNextClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerActionNavigateNextClick</code>  
<a name="MDColorPickerComponent+handleColorPickerSolidPointerdown"></a>

### mdColorPickerComponent.handleColorPickerSolidPointerdown()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerSolidPointerdown</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+updateFromSolid"></a>

### mdColorPickerComponent.updateFromSolid()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+handleColorPickerSolidPointermove"></a>

### mdColorPickerComponent.handleColorPickerSolidPointermove()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerSolidPointermove</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+handleColorPickerSolidPointerup"></a>

### mdColorPickerComponent.handleColorPickerSolidPointerup()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerSolidPointerup</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+handleColorPickerHueInput"></a>

### mdColorPickerComponent.handleColorPickerHueInput()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerHueInput</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+handleColorPickerOpacityInput"></a>

### mdColorPickerComponent.handleColorPickerOpacityInput()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerOpacityInput</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+handleColorPickerButtonCancelClick"></a>

### mdColorPickerComponent.handleColorPickerButtonCancelClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerButtonCancelClick</code>  
<a name="MDColorPickerComponent+handleColorPickerButtonOkClick"></a>

### mdColorPickerComponent.handleColorPickerButtonOkClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerButtonOkClick</code>  
<a name="MDColorPickerComponent.properties"></a>

### MDColorPickerComponent.properties
**Kind**: static property of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [ui] | <code>String</code> | full-screen |
| [open] | <code>Boolean</code> | - |
| [index] | <code>Number</code> | - |
| [value] | <code>String</code> | - |

<a name="MDColorPickerComponent"></a>

## MDColorPickerComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDColorPickerComponent](#MDColorPickerComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.label](#MDColorPickerComponent+label)
        * [.subLabel](#MDColorPickerComponent+subLabel)
        * [.hexToRgba()](#MDColorPickerComponent+hexToRgba)
        * [.rgbaToHsla()](#MDColorPickerComponent+rgbaToHsla)
        * [.rgbaToHex()](#MDColorPickerComponent+rgbaToHex)
        * [.hslaToRgba()](#MDColorPickerComponent+hslaToRgba)
        * [.renderCard()](#MDColorPickerComponent+renderCard)
        * [.render()](#MDColorPickerComponent+render)
        * [.connectedCallback()](#MDColorPickerComponent+connectedCallback)
        * [.disconnectedCallback()](#MDColorPickerComponent+disconnectedCallback)
        * [.firstUpdated()](#MDColorPickerComponent+firstUpdated)
        * [.updated()](#MDColorPickerComponent+updated)
        * [.updateFromValue()](#MDColorPickerComponent+updateFromValue)
        * [.drawSolidGradient()](#MDColorPickerComponent+drawSolidGradient)
        * [.drawHueGradient()](#MDColorPickerComponent+drawHueGradient)
        * [.drawOpacityGradient()](#MDColorPickerComponent+drawOpacityGradient)
        * [.resizeCanvas()](#MDColorPickerComponent+resizeCanvas)
        * [.show()](#MDColorPickerComponent+show)
        * [.close()](#MDColorPickerComponent+close)
        * [.toggle()](#MDColorPickerComponent+toggle)
        * [.handleColorPickerScrimClick()](#MDColorPickerComponent+handleColorPickerScrimClick)
        * [.handleColorPickerLabelPrimaryClick()](#MDColorPickerComponent+handleColorPickerLabelPrimaryClick)
        * [.handleColorPickerLabelSecondaryClick()](#MDColorPickerComponent+handleColorPickerLabelSecondaryClick)
        * [.handleColorPickerActionNavigateBeforeClick()](#MDColorPickerComponent+handleColorPickerActionNavigateBeforeClick)
        * [.handleColorPickerActionNavigateNextClick()](#MDColorPickerComponent+handleColorPickerActionNavigateNextClick)
        * [.handleColorPickerSolidPointerdown()](#MDColorPickerComponent+handleColorPickerSolidPointerdown)
        * [.updateFromSolid()](#MDColorPickerComponent+updateFromSolid)
        * [.handleColorPickerSolidPointermove()](#MDColorPickerComponent+handleColorPickerSolidPointermove)
        * [.handleColorPickerSolidPointerup()](#MDColorPickerComponent+handleColorPickerSolidPointerup)
        * [.handleColorPickerHueInput()](#MDColorPickerComponent+handleColorPickerHueInput)
        * [.handleColorPickerOpacityInput()](#MDColorPickerComponent+handleColorPickerOpacityInput)
        * [.handleColorPickerButtonCancelClick()](#MDColorPickerComponent+handleColorPickerButtonCancelClick)
        * [.handleColorPickerButtonOkClick()](#MDColorPickerComponent+handleColorPickerButtonOkClick)
    * _static_
        * [.properties](#MDColorPickerComponent.properties)

<a name="MDColorPickerComponent+label"></a>

### mdColorPickerComponent.label
**Kind**: instance property of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+subLabel"></a>

### mdColorPickerComponent.subLabel
**Kind**: instance property of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+hexToRgba"></a>

### mdColorPickerComponent.hexToRgba()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+rgbaToHsla"></a>

### mdColorPickerComponent.rgbaToHsla()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+rgbaToHex"></a>

### mdColorPickerComponent.rgbaToHex()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+hslaToRgba"></a>

### mdColorPickerComponent.hslaToRgba()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+renderCard"></a>

### mdColorPickerComponent.renderCard()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+render"></a>

### mdColorPickerComponent.render()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+connectedCallback"></a>

### mdColorPickerComponent.connectedCallback()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+disconnectedCallback"></a>

### mdColorPickerComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+firstUpdated"></a>

### mdColorPickerComponent.firstUpdated()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+updated"></a>

### mdColorPickerComponent.updated()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerShow</code>, <code>MDColorPickerComponent#event:onColorPickerClose</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+updateFromValue"></a>

### mdColorPickerComponent.updateFromValue()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+drawSolidGradient"></a>

### mdColorPickerComponent.drawSolidGradient()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+drawHueGradient"></a>

### mdColorPickerComponent.drawHueGradient()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+drawOpacityGradient"></a>

### mdColorPickerComponent.drawOpacityGradient()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+resizeCanvas"></a>

### mdColorPickerComponent.resizeCanvas()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+show"></a>

### mdColorPickerComponent.show()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+close"></a>

### mdColorPickerComponent.close()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+toggle"></a>

### mdColorPickerComponent.toggle()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+handleColorPickerScrimClick"></a>

### mdColorPickerComponent.handleColorPickerScrimClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerScrimClick</code>  
<a name="MDColorPickerComponent+handleColorPickerLabelPrimaryClick"></a>

### mdColorPickerComponent.handleColorPickerLabelPrimaryClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerLabelPrimaryClick</code>  
<a name="MDColorPickerComponent+handleColorPickerLabelSecondaryClick"></a>

### mdColorPickerComponent.handleColorPickerLabelSecondaryClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerLabelSecondaryClick</code>  
<a name="MDColorPickerComponent+handleColorPickerActionNavigateBeforeClick"></a>

### mdColorPickerComponent.handleColorPickerActionNavigateBeforeClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerActionNavigateBeforeClick</code>  
<a name="MDColorPickerComponent+handleColorPickerActionNavigateNextClick"></a>

### mdColorPickerComponent.handleColorPickerActionNavigateNextClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerActionNavigateNextClick</code>  
<a name="MDColorPickerComponent+handleColorPickerSolidPointerdown"></a>

### mdColorPickerComponent.handleColorPickerSolidPointerdown()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerSolidPointerdown</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+updateFromSolid"></a>

### mdColorPickerComponent.updateFromSolid()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+handleColorPickerSolidPointermove"></a>

### mdColorPickerComponent.handleColorPickerSolidPointermove()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerSolidPointermove</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+handleColorPickerSolidPointerup"></a>

### mdColorPickerComponent.handleColorPickerSolidPointerup()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerSolidPointerup</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+handleColorPickerHueInput"></a>

### mdColorPickerComponent.handleColorPickerHueInput()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerHueInput</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+handleColorPickerOpacityInput"></a>

### mdColorPickerComponent.handleColorPickerOpacityInput()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerOpacityInput</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+handleColorPickerButtonCancelClick"></a>

### mdColorPickerComponent.handleColorPickerButtonCancelClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerButtonCancelClick</code>  
<a name="MDColorPickerComponent+handleColorPickerButtonOkClick"></a>

### mdColorPickerComponent.handleColorPickerButtonOkClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerButtonOkClick</code>  
<a name="MDColorPickerComponent.properties"></a>

### MDColorPickerComponent.properties
**Kind**: static property of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [ui] | <code>String</code> | full-screen |
| [open] | <code>Boolean</code> | - |
| [index] | <code>Number</code> | - |
| [value] | <code>String</code> | - |

<a name="MDColorPickerComponent"></a>

## MDColorPickerComponent ⇐ <code>MDElement</code>
**Kind**: global class  
**Extends**: <code>MDElement</code>  

* [MDColorPickerComponent](#MDColorPickerComponent) ⇐ <code>MDElement</code>
    * _instance_
        * [.label](#MDColorPickerComponent+label)
        * [.subLabel](#MDColorPickerComponent+subLabel)
        * [.hexToRgba()](#MDColorPickerComponent+hexToRgba)
        * [.rgbaToHsla()](#MDColorPickerComponent+rgbaToHsla)
        * [.rgbaToHex()](#MDColorPickerComponent+rgbaToHex)
        * [.hslaToRgba()](#MDColorPickerComponent+hslaToRgba)
        * [.renderCard()](#MDColorPickerComponent+renderCard)
        * [.render()](#MDColorPickerComponent+render)
        * [.connectedCallback()](#MDColorPickerComponent+connectedCallback)
        * [.disconnectedCallback()](#MDColorPickerComponent+disconnectedCallback)
        * [.firstUpdated()](#MDColorPickerComponent+firstUpdated)
        * [.updated()](#MDColorPickerComponent+updated)
        * [.updateFromValue()](#MDColorPickerComponent+updateFromValue)
        * [.drawSolidGradient()](#MDColorPickerComponent+drawSolidGradient)
        * [.drawHueGradient()](#MDColorPickerComponent+drawHueGradient)
        * [.drawOpacityGradient()](#MDColorPickerComponent+drawOpacityGradient)
        * [.resizeCanvas()](#MDColorPickerComponent+resizeCanvas)
        * [.show()](#MDColorPickerComponent+show)
        * [.close()](#MDColorPickerComponent+close)
        * [.toggle()](#MDColorPickerComponent+toggle)
        * [.handleColorPickerScrimClick()](#MDColorPickerComponent+handleColorPickerScrimClick)
        * [.handleColorPickerLabelPrimaryClick()](#MDColorPickerComponent+handleColorPickerLabelPrimaryClick)
        * [.handleColorPickerLabelSecondaryClick()](#MDColorPickerComponent+handleColorPickerLabelSecondaryClick)
        * [.handleColorPickerActionNavigateBeforeClick()](#MDColorPickerComponent+handleColorPickerActionNavigateBeforeClick)
        * [.handleColorPickerActionNavigateNextClick()](#MDColorPickerComponent+handleColorPickerActionNavigateNextClick)
        * [.handleColorPickerSolidPointerdown()](#MDColorPickerComponent+handleColorPickerSolidPointerdown)
        * [.updateFromSolid()](#MDColorPickerComponent+updateFromSolid)
        * [.handleColorPickerSolidPointermove()](#MDColorPickerComponent+handleColorPickerSolidPointermove)
        * [.handleColorPickerSolidPointerup()](#MDColorPickerComponent+handleColorPickerSolidPointerup)
        * [.handleColorPickerHueInput()](#MDColorPickerComponent+handleColorPickerHueInput)
        * [.handleColorPickerOpacityInput()](#MDColorPickerComponent+handleColorPickerOpacityInput)
        * [.handleColorPickerButtonCancelClick()](#MDColorPickerComponent+handleColorPickerButtonCancelClick)
        * [.handleColorPickerButtonOkClick()](#MDColorPickerComponent+handleColorPickerButtonOkClick)
    * _static_
        * [.properties](#MDColorPickerComponent.properties)

<a name="MDColorPickerComponent+label"></a>

### mdColorPickerComponent.label
**Kind**: instance property of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+subLabel"></a>

### mdColorPickerComponent.subLabel
**Kind**: instance property of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+hexToRgba"></a>

### mdColorPickerComponent.hexToRgba()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+rgbaToHsla"></a>

### mdColorPickerComponent.rgbaToHsla()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+rgbaToHex"></a>

### mdColorPickerComponent.rgbaToHex()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+hslaToRgba"></a>

### mdColorPickerComponent.hslaToRgba()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+renderCard"></a>

### mdColorPickerComponent.renderCard()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+render"></a>

### mdColorPickerComponent.render()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+connectedCallback"></a>

### mdColorPickerComponent.connectedCallback()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+disconnectedCallback"></a>

### mdColorPickerComponent.disconnectedCallback()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+firstUpdated"></a>

### mdColorPickerComponent.firstUpdated()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+updated"></a>

### mdColorPickerComponent.updated()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerShow</code>, <code>MDColorPickerComponent#event:onColorPickerClose</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+updateFromValue"></a>

### mdColorPickerComponent.updateFromValue()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+drawSolidGradient"></a>

### mdColorPickerComponent.drawSolidGradient()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+drawHueGradient"></a>

### mdColorPickerComponent.drawHueGradient()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+drawOpacityGradient"></a>

### mdColorPickerComponent.drawOpacityGradient()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+resizeCanvas"></a>

### mdColorPickerComponent.resizeCanvas()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+show"></a>

### mdColorPickerComponent.show()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+close"></a>

### mdColorPickerComponent.close()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+toggle"></a>

### mdColorPickerComponent.toggle()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+handleColorPickerScrimClick"></a>

### mdColorPickerComponent.handleColorPickerScrimClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerScrimClick</code>  
<a name="MDColorPickerComponent+handleColorPickerLabelPrimaryClick"></a>

### mdColorPickerComponent.handleColorPickerLabelPrimaryClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerLabelPrimaryClick</code>  
<a name="MDColorPickerComponent+handleColorPickerLabelSecondaryClick"></a>

### mdColorPickerComponent.handleColorPickerLabelSecondaryClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerLabelSecondaryClick</code>  
<a name="MDColorPickerComponent+handleColorPickerActionNavigateBeforeClick"></a>

### mdColorPickerComponent.handleColorPickerActionNavigateBeforeClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerActionNavigateBeforeClick</code>  
<a name="MDColorPickerComponent+handleColorPickerActionNavigateNextClick"></a>

### mdColorPickerComponent.handleColorPickerActionNavigateNextClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerActionNavigateNextClick</code>  
<a name="MDColorPickerComponent+handleColorPickerSolidPointerdown"></a>

### mdColorPickerComponent.handleColorPickerSolidPointerdown()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerSolidPointerdown</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+updateFromSolid"></a>

### mdColorPickerComponent.updateFromSolid()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
<a name="MDColorPickerComponent+handleColorPickerSolidPointermove"></a>

### mdColorPickerComponent.handleColorPickerSolidPointermove()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerSolidPointermove</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+handleColorPickerSolidPointerup"></a>

### mdColorPickerComponent.handleColorPickerSolidPointerup()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerSolidPointerup</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+handleColorPickerHueInput"></a>

### mdColorPickerComponent.handleColorPickerHueInput()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerHueInput</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+handleColorPickerOpacityInput"></a>

### mdColorPickerComponent.handleColorPickerOpacityInput()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerOpacityInput</code>, <code>MDColorPickerComponent#event:onColorPickerChange</code>  
<a name="MDColorPickerComponent+handleColorPickerButtonCancelClick"></a>

### mdColorPickerComponent.handleColorPickerButtonCancelClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerButtonCancelClick</code>  
<a name="MDColorPickerComponent+handleColorPickerButtonOkClick"></a>

### mdColorPickerComponent.handleColorPickerButtonOkClick()
**Kind**: instance method of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Emits**: <code>MDColorPickerComponent#event:onColorPickerButtonOkClick</code>  
<a name="MDColorPickerComponent.properties"></a>

### MDColorPickerComponent.properties
**Kind**: static property of [<code>MDColorPickerComponent</code>](#MDColorPickerComponent)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [ui] | <code>String</code> | full-screen |
| [open] | <code>Boolean</code> | - |
| [index] | <code>Number</code> | - |
| [value] | <code>String</code> | - |

