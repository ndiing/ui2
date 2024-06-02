# MDMonthPickerComponent

The `MDMonthPickerComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-month-picker>` elements.

## Instance properties

| name  | type      | desc                        |
| ----- | --------- | --------------------------- |
| ui    | `String`  | possible values full-screen |
| open  | `Boolean` | -                           |
| index | `Number`  | -                           |
| value | `String`  | -                           |

## Instance methods

| static | asynchronous | accessor | name     | parameters      |
| ------ | ------------ | -------- | -------- | --------------- |
| -      | -            | get      | first    | -               |
| -      | -            | get      | last     | -               |
| -      | -            | get      | years    | -               |
| -      | -            | get      | months   | -               |
| -      | -            | get      | weekdays | -               |
| -      | -            | get      | days     | -               |
| -      | -            | get      | hours    | -               |
| -      | -            | get      | minutes  | -               |
| -      | -            | get      | label    | -               |
| -      | -            | get      | subLabel | -               |
| -      | -            | -        | show     | button, options |
| -      | -            | -        | close    | -               |
| -      | -            | -        | toggle   | -               |

## Events

| name                                     | desc |
| ---------------------------------------- | ---- |
| `onMonthPickerShow`                      | -    |
| `onMonthPickerClose`                     | -    |
| `onMonthPickerChange`                    | -    |
| `onMonthPickerScrimClick`                | -    |
| `onMonthPickerLabelPrimaryClick`         | -    |
| `onMonthPickerLabelSecondaryClick`       | -    |
| `onMonthPickerActionNavigateBeforeClick` | -    |
| `onMonthPickerActionNavigateNextClick`   | -    |
| `onMonthPickerYearClick`                 | -    |
| `onMonthPickerChange`                    | -    |
| `onMonthPickerMonthClick`                | -    |
| `onMonthPickerChange`                    | -    |
| `onMonthPickerDayClick`                  | -    |
| `onMonthPickerChange`                    | -    |
| `onMonthPickerHourClick`                 | -    |
| `onMonthPickerChange`                    | -    |
| `onMonthPickerMinuteClick`               | -    |
| `onMonthPickerChange`                    | -    |
| `onMonthPickerButtonCancelClick`         | -    |
| `onMonthPickerChange`                    | -    |
| `onMonthPickerButtonOkClick`             | -    |
| `onMonthPickerChange`                    | -    |
