# MDDataTableItemComponent
The `MDDataTableItemComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-data-table-item>` elements.

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
leadingAction|`String`|-
subLabel|`String`|-
trailingAction|`String`|-
trailingIcon|`String`|-
trailingCheckbox|`Object`|-
trailingRadioButton|`Object`|-
trailingSwitch|`Object`|-
text|`String`|-
badge|`Object`|-
selected|`Boolean`|-
indeterminate|`String`|-

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---

    | - | get | labelSecondary| -

## Events

name|desc
---|---
`onDataTableItemSelected`|-
`onDataTableItemActionClick`|-
`onDataTableItemCheckboxNativeInput`|-
`onDataTableItemRadioButtonNativeInput`|-
`onDataTableItemSwitchNativeInput`|-
# MDDataTableRowComponent
The `MDDataTableRowComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-data-table-row>` elements.

## Instance properties

name|type|desc
---|---|---

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---

## Events

name|desc
---|---
# MDDataTableComponent
The `MDDataTableComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-data-table>` elements.

## Instance properties

name|type|desc
---|---|---
columns|`Array`|-
rows|`Array`|-
rangeSelection|`Boolean`|-
multiSelection|`Boolean`|-
singleSelection|`Boolean`|-
allSelection|`Boolean`|-

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---

    | - | get | selected| -
    | - | get | indeterminate| -

## Events

name|desc
---|---
`onDataTableColumnCellPointerenter`|-
`onDataTableColumnCellPointerleave`|-
`onDataTableColumnCellPointerleave`|-
`onDataTableItemClick`|-
`onDataTableKeydown`|-
