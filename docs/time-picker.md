# MDTimePickerComponent
The `MDTimePickerComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-time-picker>` elements.

## Instance properties

name|type|desc
---|---|---
ui|`String`|possible values full-screen
open|`Boolean`|
index|`Number`|
value|`String`|

## Instance methods

block| asynchronous | accessor| name| parameters
---| --- | ---| ---| ---
undefined| undefined | get| first| 
undefined| undefined | get| last| 
undefined| undefined | get| years| 
undefined| undefined | get| months| 
undefined| undefined | get| weekdays| 
undefined| undefined | get| days| 
undefined| undefined | get| hours| 
undefined| undefined | get| minutes| 
undefined| undefined | get| label| 
undefined| undefined | get| subLabel| 
undefined| undefined | undefined| show| button, options
undefined| undefined | undefined| close| 
undefined| undefined | undefined| toggle| 

## Events

name|desc
---|---
`onTimePickerShow`|
`onTimePickerClose`|
`onTimePickerChange`|
`onTimePickerScrimClick`|
`onTimePickerLabelPrimaryClick`|
`onTimePickerLabelSecondaryClick`|
`onTimePickerActionNavigateBeforeClick`|
`onTimePickerActionNavigateNextClick`|
`onTimePickerYearClick`|
`onTimePickerChange`|
`onTimePickerMonthClick`|
`onTimePickerChange`|
`onTimePickerDayClick`|
`onTimePickerChange`|
`onTimePickerHourClick`|
`onTimePickerChange`|
`onTimePickerMinuteClick`|
`onTimePickerChange`|
`onTimePickerButtonCancelClick`|
`onTimePickerChange`|
`onTimePickerButtonOkClick`|
`onTimePickerChange`|
