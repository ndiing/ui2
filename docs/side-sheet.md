# MDSideSheet

A custom element representing a side sheet.

## Instance properties

| name            | type    | default | description                                  |
| --------------- | ------- | ------- | -------------------------------------------- |
| leadingActions  | Array   |         | Actions to be displayed on the leading side  |
| label           | String  |         | Label of the side sheet                      |
| trailingActions | Array   |         | Actions to be displayed on the trailing side |
| buttons         | Array   |         | Buttons to be displayed in the side sheet    |
| ui              | String  |         | The UI styles of the side sheet              |
| open            | Boolean |         | Indicates if the side sheet is open          |

## Instance methods

| name  | args | description                          |
| ----- | ---- | ------------------------------------ |
| show  | -    | Shows the side sheet                 |
| close | -    | Closes the side sheet                |

## Events

| name                    | description                                       |
| ----------------------- | ------------------------------------------------- |
| onSideSheetActionClick | Handles click events on the side sheet actions    |
| onSideSheetButtonClick | Handles click events on the side sheet buttons    |
| onSideSheetScrimClick  | Handles click events on the side sheet scrim element |
