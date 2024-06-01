# MDTooltipComponent
The `MDTooltipComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-tooltip>` elements.

## Instance properties

name|type|desc
---|---|---
leadingActions|`Array`|
label|`String`|
subLabel|`String`|
trailingActions|`Array`|
buttons|`Array`|
ui|`String`|possible values plain
open|`Boolean`|

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---
|  | | show| button, options
|  | | close| 
|  | | toggle| 

## Events

name|desc
---|---
`onTooltipActionClick`|
`onTooltipButtonClick`|
`onTooltipScrimClick`|
