# MDDateFieldComponent

The `MDDateFieldComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-date-field>` elements.

## Instance properties

| name              | type      | desc                                    |
| ----------------- | --------- | --------------------------------------- |
| autocapitalize    | `Boolean` | -                                       |
| autocomplete      | `String`  | -                                       |
| disabled          | `Boolean` | -                                       |
| form              | `String`  | -                                       |
| list              | `String`  | -                                       |
| name              | `String`  | -                                       |
| readonly          | `Boolean` | -                                       |
| required          | `Boolean` | -                                       |
| type              | `String`  | -                                       |
| value             | `String`  | -                                       |
| max               | `String`  | -                                       |
| min               | `String`  | -                                       |
| step              | `String`  | -                                       |
| defaultValue      | `String`  | -                                       |
| label             | `String`  | -                                       |
| leadingIcon       | `String`  | -                                       |
| leadingMeta       | `String`  | -                                       |
| trailingMeta      | `String`  | -                                       |
| trailingActions   | `Array`   | -                                       |
| trailingIcon      | `String`  | -                                       |
| text              | `String`  | -                                       |
| focused           | `Boolean` | -                                       |
| populated         | `Boolean` | -                                       |
| invalid           | `Boolean` | -                                       |
| validationMessage | `String`  | -                                       |
| ui                | `String`  | possible values filled,outlined,rounded |

## Instance methods

| static | asynchronous | accessor | name             | parameters |
| ------ | ------------ | -------- | ---------------- | ---------- |
| -      | -            | get      | colorFieldNative | -          |

## Events

| name                                        | desc |
| ------------------------------------------- | ---- |
| `onDateFieldNativeActionClick`              | -    |
| `onDateFieldNativeActionCalendarClockClick` | -    |
| `onDateFieldNativeFocus`                    | -    |
| `onDateFieldNativeBlur`                     | -    |
| `onDateFieldNativeInput`                    | -    |
| `onDateFieldNativeInvalid`                  | -    |
| `onDateFieldNativeReset`                    | -    |
| `onDateFieldNativeClick`                    | -    |