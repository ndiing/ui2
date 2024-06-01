# MDMonthPickerComponent
The `MDMonthPickerComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-month-picker>` elements.

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
`onMonthPickerShow`|
`onMonthPickerClose`|
`onMonthPickerChange`|
`onMonthPickerScrimClick`|
`onMonthPickerLabelPrimaryClick`|
`onMonthPickerLabelSecondaryClick`|
`onMonthPickerActionNavigateBeforeClick`|
`onMonthPickerActionNavigateNextClick`|
`onMonthPickerYearClick`|
`onMonthPickerChange`|
`onMonthPickerMonthClick`|
`onMonthPickerChange`|
`onMonthPickerDayClick`|
`onMonthPickerChange`|
`onMonthPickerHourClick`|
`onMonthPickerChange`|
`onMonthPickerMinuteClick`|
`onMonthPickerChange`|
`onMonthPickerButtonCancelClick`|
`onMonthPickerChange`|
`onMonthPickerButtonOkClick`|
`onMonthPickerChange`|
