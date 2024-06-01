# MDDialogComponent
The `MDDialogComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-dialog>` elements.

## Instance properties

name|type|desc
---|---|---
leadingActions|`Array`|-
label|`String`|-
subLabel|`String`|-
trailingActions|`Array`|-
buttons|`Array`|-
ui|`String`|possible values full-screen
open|`Boolean`|-

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---

    | - | | show| 

    | - | | close| 

    | - | | toggle| 

## Events

name|desc
---|---
`onDialogActionClick`|-
`onDialogButtonClick`|-
`onDialogScrimClick`|-
