# MDSnackbarComponent
The `MDSnackbarComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-snackbar>` elements.

## Instance properties

name|type|desc
---|---|---
leadingActions|`Array`|
label|`String`|
subLabel|`String`|
trailingActions|`Array`|
buttons|`Array`|
ui|`String`|possible values 
open|`Boolean`|

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---
undefined| undefined | get| snackbarInner| 
undefined| undefined | undefined| show| 
undefined| undefined | undefined| close| 
undefined| undefined | undefined| toggle| 

## Events

name|desc
---|---
`onSnackbarShow`|
`onSnackbarClose`|
`onSnackbarActionClick`|
`onSnackbarButtonClick`|
