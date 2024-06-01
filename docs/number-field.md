# MDNumberFieldComponent
The `MDNumberFieldComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-number-field>` elements.

## Instance properties

name|type|desc
---|---|---
autocapitalize|`Boolean`|
autocomplete|`String`|
disabled|`Boolean`|
form|`String`|
list|`String`|
name|`String`|
readonly|`Boolean`|
required|`Boolean`|
type|`String`|
value|`Number`|
max|`Number`|
min|`Number`|
placeholder|`String`|
step|`Number`|
defaultValue|`Number`|
label|`String`|
leadingIcon|`String`|
leadingMeta|`String`|
trailingMeta|`String`|
trailingActions|`Array`|
trailingIcon|`String`|
text|`String`|
focused|`Boolean`|
populated|`Boolean`|
invalid|`Boolean`|
validationMessage|`String`|
ui|`String`|possible values filled,outlined,rounded

## Instance methods

name|parameters
---|---
`firstUpdated`|changedProperties
`numberFieldNative`|

## Events

name|desc
---|---
`onNumberFieldNativeActionClick`|
`onNumberFieldNativeActionStepDownClick`|
`onNumberFieldNativeActionStepUpClick`|
`onNumberFieldNativeFocus`|
`onNumberFieldNativeBlur`|
`onNumberFieldNativeInput`|
`onNumberFieldNativeInvalid`|
`onNumberFieldNativeReset`|
