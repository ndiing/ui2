# MDDatePickerComponent
The `MDDatePickerComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-date-picker>` elements.

## Instance properties

name|type|desc
---|---|---
ui|`String`|possible values full-screen
open|`Boolean`|-
index|`Number`|-
value|`String`|-

## Instance methods

static|asynchronous|accessor|name|parameters
---|---|---|---|---
-|-|get |first|-
-|-|get |last|-
-|-|get |years|-
-|-|get |months|-
-|-|get |weekdays|-
-|-|get |days|-
-|-|get |hours|-
-|-|get |minutes|-
-|-|get |label|-
-|-|get |subLabel|-
-|-|-|show|button, options
-|-|-|close|-
-|-|-|toggle|-

## Events

name|desc
---|---
`onDatePickerChange`|-
`onDatePickerScrimClick`|-
`onDatePickerLabelPrimaryClick`|-
`onDatePickerLabelSecondaryClick`|-
`onDatePickerActionNavigateBeforeClick`|-
`onDatePickerActionNavigateNextClick`|-
`onDatePickerYearClick`|-
`onDatePickerChange`|-
`onDatePickerMonthClick`|-
`onDatePickerChange`|-
`onDatePickerDayClick`|-
`onDatePickerChange`|-
`onDatePickerHourClick`|-
`onDatePickerChange`|-
`onDatePickerMinuteClick`|-
`onDatePickerChange`|-
`onDatePickerButtonCancelClick`|-
`onDatePickerChange`|-
`onDatePickerButtonOkClick`|-
`onDatePickerChange`|-
