# MDWeekPickerComponent
The `MDWeekPickerComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-week-picker>` elements.

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

    |  | get | first| 
    |  | get | last| 

    |  | get | years| 
    |  | get | months| 
    |  | get | weekdays| 
    |  | get | days| 
    |  | get | hours| 
    |  | get | minutes| 

    |  | get | label| 

    |  | get | subLabel| 

    |  | | show| button, options

    |  | | close| 

    |  | | toggle| 

## Events

name|desc
---|---
`onWeekPickerShow`|
`onWeekPickerClose`|
`onWeekPickerChange`|
`onWeekPickerScrimClick`|
`onWeekPickerLabelPrimaryClick`|
`onWeekPickerLabelSecondaryClick`|
`onWeekPickerActionNavigateBeforeClick`|
`onWeekPickerActionNavigateNextClick`|
`onWeekPickerYearClick`|
`onWeekPickerChange`|
`onWeekPickerMonthClick`|
`onWeekPickerChange`|
`onWeekPickerDayClick`|
`onWeekPickerChange`|
`onWeekPickerHourClick`|
`onWeekPickerChange`|
`onWeekPickerMinuteClick`|
`onWeekPickerChange`|
`onWeekPickerButtonCancelClick`|
`onWeekPickerChange`|
`onWeekPickerButtonOkClick`|
`onWeekPickerChange`|
