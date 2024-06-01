# MDColorPickerComponent
The `MDColorPickerComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-color-picker>` elements.

## Instance properties

name|type|desc
---|---|---
ui|`String`|possible values full-screen
open|`Boolean`|-
index|`Number`|-
value|`String`|-

## Instance methods

block|asynchronous|accessor|name|parameters
---|---|---|---|---

    |-|-|hexToRgba|hex

    |-|-|rgbaToHsla|r, g, b, a = 1

    |-|-|rgbaToHex|r, g, b, a = 1

    |-|-|hslaToRgba|h, s, l, a = 1

    |-|get |label|-

    |-|get |subLabel|-

    |-|-|drawSolidGradient|-

    |-|-|drawHueGradient|-

    |-|-|drawOpacityGradient|-

    |-|-|resizeCanvas|-

    |-|-|show|button, options

    |-|-|close|-

    |-|-|toggle|-

## Events

name|desc
---|---
`onColorPickerShow`|-
`onColorPickerClose`|-
`onColorPickerChange`|-
`onColorPickerScrimClick`|-
`onColorPickerLabelPrimaryClick`|-
`onColorPickerLabelSecondaryClick`|-
`onColorPickerActionNavigateBeforeClick`|-
`onColorPickerActionNavigateNextClick`|-
`onColorPickerSolidPointerdown`|-
`onColorPickerChange`|-
`onColorPickerSolidPointermove`|-
`onColorPickerChange`|-
`onColorPickerSolidPointerup`|-
`onColorPickerChange`|-
`onColorPickerHueInput`|-
`onColorPickerChange`|-
`onColorPickerOpacityInput`|-
`onColorPickerChange`|-
`onColorPickerButtonCancelClick`|-
`onColorPickerChange`|-
`onColorPickerButtonOkClick`|-
`onColorPickerChange`|-
