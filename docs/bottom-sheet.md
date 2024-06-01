# MDBottomSheetComponent

The `MDBottomSheetComponent` class provides functionality for managing `<md-bottom-sheet>` elements.

## Instance properties

| Name           | Type      | Description                                              |
| -------------- | --------- | -------------------------------------------------------- |
| leadingActions | `Array`   | Array of leading actions.                                |
| label          | `String`  | Label for the bottom sheet.                              |
| subLabel       | `String`  | Sub-label for the bottom sheet.                          |
| trailingActions| `Array`   | Array of trailing actions.                               |
| buttons        | `Array`   | Array of buttons.                                        |
| ui             | `String`  | UI design configuration. Possible values: `modal`        |
| open           | `Boolean` | Boolean flag indicating whether the bottom sheet is open.|

## Instance methods

| static | asynchronous | accessor | name    | parameters |
| ------ | ------------ | -------- | ------- | ---------- |
| -      | -            | -        | show    | -          |
| -      | -            | -        | close   | -          |
| -      | -            | -        | toggle  | -          |

## Events

| name                          | Description                                                        |
| ----------------------------- | ------------------------------------------------------------------ |
| `onBottomSheetActionClick`   | Event emitted when an action in the bottom sheet is clicked.       |
| `onBottomSheetButtonClick`   | Event emitted when a button in the bottom sheet is clicked.       |
| `onBottomSheetScrimClick`    | Event emitted when the scrim of the bottom sheet is clicked.      |
