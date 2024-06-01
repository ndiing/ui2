# MDListItemComponent
The `MDListItemComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-list-item>` elements.

## Instance properties

name|type|desc
---|---|---
avatar|`String`|-
thumbnail|`String`|-
video|`String`|-
leadingCheckbox|`Object`|-
leadingRadioButton|`Object`|-
leadingSwitch|`Object`|-
leadingIcon|`String`|-
label|`String`|-
subLabel|`String`|-
trailingIcon|`String`|-
trailingCheckbox|`Object`|-
trailingRadioButton|`Object`|-
trailingSwitch|`Object`|-
text|`String`|-
badge|`Object`|-
selected|`Boolean`|-
routerLink|`String`|-

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---

    | - | get | labelSecondary| -

## Events

name|desc
---|---
`onListItemSelected`|-
`onListItemCheckboxNativeInput`|-
`onListItemRadioButtonNativeInput`|-
`onListItemSwitchNativeInput`|-
# MDListRowComponent
The `MDListRowComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-list-row>` elements.

## Instance properties

name|type|desc
---|---|---

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---

## Events

name|desc
---|---
# MDListComponent
The `MDListComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-list>` elements.

## Instance properties

name|type|desc
---|---|---
list|`Array`|-
rangeSelection|`Boolean`|-
multiSelection|`Boolean`|-
singleSelection|`Boolean`|-
allSelection|`Boolean`|-

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---

## Events

name|desc
---|---
`onListItemClick`|-
`onListKeydown`|-
