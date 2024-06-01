# MDTimePickerComponent
The `MDTimePickerComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-time-picker>` elements.

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
`onTimePickerShow`|-
`onTimePickerClose`|-
`onTimePickerChange`|-
`onTimePickerScrimClick`|-
`onTimePickerLabelPrimaryClick`|-
`onTimePickerLabelSecondaryClick`|-
`onTimePickerActionNavigateBeforeClick`|-
`onTimePickerActionNavigateNextClick`|-
`onTimePickerYearClick`|-
`onTimePickerChange`|-
`onTimePickerMonthClick`|-
`onTimePickerChange`|-
`onTimePickerDayClick`|-
`onTimePickerChange`|-
`onTimePickerHourClick`|-
`onTimePickerChange`|-
`onTimePickerMinuteClick`|-
`onTimePickerChange`|-
`onTimePickerButtonCancelClick`|-
`onTimePickerChange`|-
`onTimePickerButtonOkClick`|-
`onTimePickerChange`|-
