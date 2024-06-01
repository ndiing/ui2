# MDCheckboxComponent
The `MDCheckboxComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-checkbox>` elements.

## Instance properties

name|type|desc
---|---|---
autocapitalize|`String`|
disabled|`Boolean`|
form|`String`|
name|`String`|
required|`Boolean`|
type|`String`|
value|`String`|
checked|`Boolean`|
defaultValue|`String`|
defaultChecked|`Boolean`|
indeterminate|`Boolean`|
defaultIndeterminate|`Boolean`|

## Instance methods

name|parameters
---|---
`firstUpdated`|changedProperties
`checkboxNative`|
`checkboxTrack`|

## Events

name|desc
---|---
`onCheckboxNativeInput`|
`onCheckboxNativeInvalid`|
`onCheckboxNativeReset`|
