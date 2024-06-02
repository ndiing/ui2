# MDSwitchComponent

The `MDSwitchComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-switch>` elements.

## Instance properties

| name                 | type      | desc |
| -------------------- | --------- | ---- |
| autocapitalize       | `String`  | -    |
| disabled             | `Boolean` | -    |
| form                 | `String`  | -    |
| name                 | `String`  | -    |
| required             | `Boolean` | -    |
| type                 | `String`  | -    |
| value                | `String`  | -    |
| checked              | `Boolean` | -    |
| defaultValue         | `String`  | -    |
| defaultChecked       | `Boolean` | -    |
| indeterminate        | `Boolean` | -    |
| defaultIndeterminate | `Boolean` | -    |
| icons                | `Array`   | -    |

## Instance methods

| static | asynchronous | accessor | name         | parameters |
| ------ | ------------ | -------- | ------------ | ---------- |
| -      | -            | get      | switchNative | -          |
| -      | -            | get      | switchTrack  | -          |
| -      | -            | get      | switchThumb  | -          |

## Events

| name                    | desc |
| ----------------------- | ---- |
| `onSwitchNativeInput`   | -    |
| `onSwitchNativeInvalid` | -    |
| `onSwitchNativeReset`   | -    |
