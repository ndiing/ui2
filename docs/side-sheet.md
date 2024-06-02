# MDSideSheetComponent

The `MDSideSheetComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-side-sheet>` elements.

## Instance properties

| name            | type      | desc                  |
| --------------- | --------- | --------------------- |
| leadingActions  | `Array`   | -                     |
| label           | `String`  | -                     |
| subLabel        | `String`  | -                     |
| trailingActions | `Array`   | -                     |
| buttons         | `Array`   | -                     |
| ui              | `String`  | possible values modal |
| open            | `Boolean` | -                     |

## Instance methods

| static | asynchronous | accessor | name   | parameters |
| ------ | ------------ | -------- | ------ | ---------- |
| -      | -            | -        | show   | -          |
| -      | -            | -        | close  | -          |
| -      | -            | -        | toggle | -          |

## Events

| name                     | desc |
| ------------------------ | ---- |
| `onSideSheetActionClick` | -    |
| `onSideSheetButtonClick` | -    |
| `onSideSheetScrimClick`  | -    |
