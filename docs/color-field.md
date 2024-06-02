# MDColorFieldComponent

The `MDColorFieldComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-color-field>` elements.

## Instance Properties

| Name              | Type      | Description                                           |
| ----------------- | --------- | ----------------------------------------------------- |
| autocapitalize    | `Boolean` | Specifies whether auto capitalization is enabled.     |
| autocomplete      | `String`  | Specifies the autocomplete setting.                   |
| disabled          | `Boolean` | Indicates whether the color field is disabled.        |
| form              | `String`  | Specifies the form ID to associate the element.       |
| list              | `String`  | Specifies the ID of a `<datalist>` element.           |
| name              | `String`  | Specifies the name of the color field.                |
| value             | `String`  | Specifies the value of the color field.               |
| defaultValue      | `String`  | Specifies the default value of the color field.       |
| label             | `String`  | Specifies the label for the color field.              |
| leadingIcon       | `String`  | Specifies the leading icon for the color field.       |
| leadingMeta       | `String`  | Specifies the leading meta information.               |
| trailingMeta      | `String`  | Specifies the trailing meta information.              |
| trailingActions   | `Array`   | Specifies the trailing actions for the color field.   |
| trailingIcon      | `String`  | Specifies the trailing icon for the color field.      |
| text              | `String`  | Specifies the text value of the color field.          |
| focused           | `Boolean` | Indicates whether the color field is focused.         |
| populated         | `Boolean` | Indicates whether the color field is populated.       |
| invalid           | `Boolean` | Indicates whether the color field is invalid.         |
| validationMessage | `String`  | Specifies the validation message for the color field. |
| ui                | `String`  | Possible values: `filled`, `outlined`, `rounded`.     |

## Instance Methods

No additional instance methods are defined for this component.

## Events

| Name                                   | Description                                   |
| -------------------------------------- | --------------------------------------------- |
| `onColorFieldNativeActionClick`        | Triggered when the action is clicked.         |
| `onColorFieldNativeActionPaletteClick` | Triggered when the palette action is clicked. |
| `onColorFieldNativeFocus`              | Triggered when the color field gains focus.   |
| `onColorFieldNativeBlur`               | Triggered when the color field loses focus.   |
| `onColorFieldNativeInput`              | Triggered when the input value changes.       |
| `onColorFieldNativeInvalid`            | Triggered when the input value is invalid.    |
| `onColorFieldNativeReset`              | Triggered when the color field is reset.      |
| `onColorFieldNativeClick`              | Triggered when the color field is clicked.    |
