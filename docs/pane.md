# MDPane

A custom element representing a pane.

## Instance properties

| name            | type    | default | description                                            |
| --------------- | ------- | ------- | ------------------------------------------------------ |
| leadingActions  | Array   |         | The leading actions displayed in the pane header       |
| label           | String  |         | The label of the pane                                  |
| trailingActions | Array   |         | The trailing actions displayed in the pane header      |
| buttons         | Array   |         | The buttons displayed in the pane footer               |
| ui              | String  |         | The UI styles of the pane                              |
| open            | Boolean |         | Indicates if the pane is open                          |

## Instance methods

| name    | args | description                         |
| ------- | ---- | ----------------------------------- |
| show    | -    | Shows the pane                     |
| close   | -    | Closes the pane                    |

## Events

| name               | description                                    |
| ------------------ | ---------------------------------------------- |
| onPaneActionClick  | Handles click events on the pane actions       |
| onPaneButtonClick | Handles click events on the pane buttons       |
| onPaneScrimClick   | Handles click events on the pane scrim element |
