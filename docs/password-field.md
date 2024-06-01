# MDPasswordFieldComponent
The `MDPasswordFieldComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-password-field>` elements.

## Instance properties

name|type|desc
---|---|---
type|`String`|
autocomplete|`String`|
disabled|`Boolean`|
form|`String`|
name|`String`|
readonly|`Boolean`|
required|`Boolean`|
value|`String`|
maxlength|`Number`|
minlength|`Number`|
pattern|`String`|
placeholder|`String`|
size|`Number`|
defaultValue|`String`|
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

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---

    |  | get | numberFieldNative| 

## Events

name|desc
---|---
`onPasswordFieldNativeActionClick`|
`onPasswordFieldNativeActionVisibilityClick`|
`onPasswordFieldNativeFocus`|
`onPasswordFieldNativeBlur`|
`onPasswordFieldNativeInput`|
`onPasswordFieldNativeInvalid`|
`onPasswordFieldNativeReset`|
