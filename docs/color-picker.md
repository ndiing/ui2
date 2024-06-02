# MDColorPickerComponent

The `MDColorPickerComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-color-picker>` elements.

## Instance properties

| Name  | Type      | Description                    |
| ----- | --------- | ------------------------------ |
| ui    | `String`  | Possible values: `full-screen` |
| open  | `Boolean` | -                              |
| index | `Number`  | -                              |
| value | `String`  | -                              |

## Instance methods

| Static | Asynchronous | Accessor | Name                | Parameters      |
| ------ | ------------ | -------- | ------------------- | --------------- |
| -      | -            | -        | hexToRgba           | hex             |
| -      | -            | -        | rgbaToHsla          | r, g, b, a = 1  |
| -      | -            | -        | rgbaToHex           | r, g, b, a = 1  |
| -      | -            | -        | hslaToRgba          | h, s, l, a = 1  |
| -      | -            | get      | label               | -               |
| -      | -            | get      | subLabel            | -               |
| -      | -            | -        | drawSolidGradient   | -               |
| -      | -            | -        | drawHueGradient     | -               |
| -      | -            | -        | drawOpacityGradient | -               |
| -      | -            | -        | resizeCanvas        | -               |
| -      | -            | -        | show                | button, options |
| -      | -            | -        | close               | -               |
| -      | -            | -        | toggle              | -               |

## Events

| Name                                     | Description |
| ---------------------------------------- | ----------- |
| `onColorPickerShow`                      | -           |
| `onColorPickerClose`                     | -           |
| `onColorPickerChange`                    | -           |
| `onColorPickerScrimClick`                | -           |
| `onColorPickerLabelPrimaryClick`         | -           |
| `onColorPickerLabelSecondaryClick`       | -           |
| `onColorPickerActionNavigateBeforeClick` | -           |
| `onColorPickerActionNavigateNextClick`   | -           |
| `onColorPickerSolidPointerdown`          | -           |
| `onColorPickerSolidPointermove`          | -           |
| `onColorPickerSolidPointerup`            | -           |
| `onColorPickerHueInput`                  | -           |
| `onColorPickerOpacityInput`              | -           |
| `onColorPickerButtonCancelClick`         | -           |
| `onColorPickerButtonOkClick`             | -           |
