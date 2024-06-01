# MDColorPickerComponent
The `MDColorPickerComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-color-picker>` elements.

## Instance properties

name|type|desc
---|---|---
ui|`String`|possible values full-screen
open|`Boolean`|
index|`Number`|
value|`String`|

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---
undefined| undefined | undefined| hexToRgba| hex
undefined| undefined | undefined| rgbaToHsla| r, g, b, a = 1
undefined| undefined | undefined| rgbaToHex| r, g, b, a = 1
undefined| undefined | undefined| hslaToRgba| h, s, l, a = 1
undefined| undefined | get| label| 
undefined| undefined | get| subLabel| 
undefined| undefined | undefined| drawSolidGradient| 
undefined| undefined | undefined| drawHueGradient| 
undefined| undefined | undefined| drawOpacityGradient| 
undefined| undefined | undefined| resizeCanvas| 
undefined| undefined | undefined| show| button, options
undefined| undefined | undefined| close| 
undefined| undefined | undefined| toggle| 

## Events

name|desc
---|---
`onColorPickerShow`|
`onColorPickerClose`|
`onColorPickerChange`|
`onColorPickerScrimClick`|
`onColorPickerLabelPrimaryClick`|
`onColorPickerLabelSecondaryClick`|
`onColorPickerActionNavigateBeforeClick`|
`onColorPickerActionNavigateNextClick`|
`onColorPickerSolidPointerdown`|
`onColorPickerChange`|
`onColorPickerSolidPointermove`|
`onColorPickerChange`|
`onColorPickerSolidPointerup`|
`onColorPickerChange`|
`onColorPickerHueInput`|
`onColorPickerChange`|
`onColorPickerOpacityInput`|
`onColorPickerChange`|
`onColorPickerButtonCancelClick`|
`onColorPickerChange`|
`onColorPickerButtonOkClick`|
`onColorPickerChange`|
