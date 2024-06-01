# MDCheckboxComponent

The `MDCheckboxComponent` class provides functionality for managing `<md-checkbox>` elements.

## Instance properties

| Name                    | Type      | Description                                                          |
| ----------------------- | --------- | -------------------------------------------------------------------- |
| autocapitalize          | `String`  | The autocapitalize attribute for the checkbox.                       |
| disabled                | `Boolean` | Indicates whether the checkbox is disabled.                          |
| form                    | `String`  | The id of the form that the checkbox belongs to.                     |
| name                    | `String`  | The name attribute for the checkbox.                                 |
| required                | `Boolean` | Indicates whether the checkbox is required.                          |
| type                    | `String`  | The type attribute for the checkbox. Default value is `"checkbox"`.   |
| value                   | `String`  | The value attribute for the checkbox.                                |
| checked                 | `Boolean` | Indicates whether the checkbox is checked.                           |
| defaultValue            | `String`  | The default value of the checkbox.                                   |
| defaultChecked          | `Boolean` | Indicates whether the checkbox is checked by default.                |
| indeterminate           | `Boolean` | Indicates whether the checkbox is in an indeterminate state.         |
| defaultIndeterminate    | `Boolean` | Indicates whether the checkbox is in an indeterminate state by default. |

## Instance methods

| static | asynchronous | accessor | name             | parameters |
| ------ | ------------ | -------- | ---------------- | ---------- |
| -      | -            | `get`    | checkboxNative   | -          |
| -      | -            | `get`    | checkboxTrack    | -          |

## Events

| name                    | Description                                                           |
| ----------------------- | --------------------------------------------------------------------- |
| `onCheckboxNativeInput` | Event emitted when the input value of the native checkbox changes.   |
| `onCheckboxNativeInvalid` | Event emitted when the native checkbox's value is invalid.           |
| `onCheckboxNativeReset` | Event emitted when the native checkbox is reset.                      |
