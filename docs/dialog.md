# MDDialog

A custom element representing a dialog.

## Instance properties

| name            | type    | default | description                                            |
| --------------- | ------- | ------- | ------------------------------------------------------ |
| leadingActions  | Array   |         | The leading actions displayed in the dialog header      |
| label           | String  |         | The label of the dialog                                |
| trailingActions | Array   |         | The trailing actions displayed in the dialog header     |
| buttons         | Array   |         | The buttons displayed in the dialog footer              |
| ui              | String  |         | The UI styles of the dialog                             |
| open            | Boolean |         | Indicates if the dialog is open                         |

## Instance methods

| name    | args | description                         |
| ------- | ---- | ----------------------------------- |
| show    | -    | Shows the dialog                    |
| close   | -    | Closes the dialog                   |

## Events

| name                 | description                                    |
| -------------------- | ---------------------------------------------- |
| onDialogActionClick  | Handles click events on the dialog actions     |
| onDialogButtonClick | Handles click events on the dialog buttons     |
| onDialogScrimClick   | Handles click events on the dialog scrim element |
