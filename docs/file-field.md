# MDFileFieldComponent

The `MDFileFieldComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-file-field>` elements.

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
| accept            | `String`  | -                                       |
| capture           | `String`  | -                                       |
| multiple          | `Boolean` | -                                       |
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

| static | asynchronous | accessor | name            | parameters |
| ------ | ------------ | -------- | --------------- | ---------- |
| -      | -            | get      | fileFieldNative | -          |

## Events

| name                                 | desc |
| ------------------------------------ | ---- |
| `onFileFieldNativeActionUploadClick` | -    |
| `onFileFieldNativeActionClick`       | -    |
| `onFileFieldNativeFocus`             | -    |
| `onFileFieldNativeBlur`              | -    |
| `onFileFieldNativeInput`             | -    |
| `onFileFieldNativeInvalid`           | -    |
| `onFileFieldNativeReset`             | -    |
