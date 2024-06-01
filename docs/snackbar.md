# MDSnackbarComponent
The `MDSnackbarComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-snackbar>` elements.

## Instance properties

name|type|desc
---|---|---
leadingActions|`Array`|-
label|`String`|-
subLabel|`String`|-
trailingActions|`Array`|-
buttons|`Array`|-
ui|`String`|possible values 
open|`Boolean`|-

## Instance methods

static|asynchronous|accessor|name|parameters
---|---|---|---|---
-|-|get |snackbarInner|-
-|-|-|show|-
-|-|-|close|-
-|-|-|toggle|-

## Events

name|desc
---|---
`onSnackbarShow`|-
`onSnackbarClose`|-
`onSnackbarActionClick`|-
`onSnackbarButtonClick`|-
