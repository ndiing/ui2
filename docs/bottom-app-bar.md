# MDBottomAppBarComponent

The `MDBottomAppBarComponent` class provides functionality for managing `<md-bottom-app-bar>` elements.

## Instance properties

| name           | type      | desc                                                  |
| -------------- | --------- | ----------------------------------------------------- |
| leadingActions | `Array`   | Array of leading actions.                             |
| label          | `String`  | Label for the bottom app bar.                         |
| subLabel       | `String`  | Sub-label for the bottom app bar.                     |
| trailingActions| `Array`   | Array of trailing actions.                            |
| buttons        | `Array`   | Array of buttons.                                     |
| ui             | `String`  | UI design configuration. Possible values: [insert values here] |
| open           | `Boolean` | Boolean flag indicating whether the bottom app bar is open. |
| fab            | `Object`  | Floating action button configuration.                |

## Instance methods

| static | asynchronous | accessor | name    | parameters |
| ------ | ------------ | -------- | ------- | ---------- |
| -      | -            | -        | show    | -          |
| -      | -            | -        | close   | -          |
| -      | -            | -        | toggle  | -          |

## Events

| name                      | desc                                                |
| ------------------------- | --------------------------------------------------- |
| `onBottomAppBarActionClick` | Event emitted when an action in the bottom app bar is clicked. |
| `onBottomAppBarButtonClick` | Event emitted when a button in the bottom app bar is clicked. |
