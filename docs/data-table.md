# MDDataTableItemComponent
The `MDDataTableItemComponent` interface provides special properties and methods for manipulating `<md-data-table-item>` elements.

## Instance properties

| Name               | Type      | Description                                     |
|--------------------|-----------|-------------------------------------------------|
| avatar             | `String`  | Specifies the avatar image source.              |
| thumbnail          | `String`  | Specifies the thumbnail image source.           |
| video              | `String`  | Specifies the video source.                     |
| leadingCheckbox    | `Object`  | Object representing the leading checkbox.       |
| leadingRadioButton | `Object`  | Object representing the leading radio button.   |
| leadingSwitch      | `Object`  | Object representing the leading switch.         |
| leadingIcon        | `String`  | Specifies the leading icon.                     |
| label              | `String`  | Specifies the label.                            |
| leadingAction      | `String`  | Specifies the leading action.                   |
| subLabel           | `String`  | Specifies the sub-label.                        |
| trailingAction     | `String`  | Specifies the trailing action.                  |
| trailingIcon       | `String`  | Specifies the trailing icon.                    |
| trailingCheckbox   | `Object`  | Object representing the trailing checkbox.      |
| trailingRadioButton| `Object`  | Object representing the trailing radio button.  |
| trailingSwitch     | `Object`  | Object representing the trailing switch.        |
| text               | `String`  | Specifies the text.                             |
| badge              | `Object`  | Object representing the badge.                  |
| selected           | `Boolean` | Indicates whether the item is selected.         |
| indeterminate      | `String`  | Specifies the indeterminate state.              |

## Instance methods

| Static | Asynchronous | Accessor | Name             | Parameters |
|--------|--------------|----------|------------------|------------|
|        |              |          | `labelSecondary` |            |

## Events

| Name                               | Description                           |
|------------------------------------|---------------------------------------|
| `onDataTableItemSelected`          | Triggered when the item is selected.  |
| `onDataTableItemActionClick`       | Triggered when an action is clicked.  |
| `onDataTableItemCheckboxNativeInput` | Triggered when a checkbox input occurs. |
| `onDataTableItemRadioButtonNativeInput` | Triggered when a radio button input occurs. |
| `onDataTableItemSwitchNativeInput` | Triggered when a switch input occurs. |

# MDDataTableRowComponent
The `MDDataTableRowComponent` interface provides special properties for manipulating `<md-data-table-row>` elements.

## Instance properties

| Name | Type | Description |
|------|------|-------------|
|      |      |             |

## Instance methods

| Static | Asynchronous | Accessor | Name | Parameters |
|--------|--------------|----------|------|------------|
|        |              |          |      |            |

## Events

| Name | Description |
|------|-------------|
|      |             |

# MDDataTableComponent
The `MDDataTableComponent` interface provides special properties and methods for manipulating `<md-data-table>` elements.

## Instance properties

| Name            | Type     | Description                           |
|-----------------|----------|---------------------------------------|
| columns         | `Array`  | Array of column data.                 |
| rows            | `Array`  | Array of row data.                    |
| rangeSelection  | `Boolean`| Indicates if range selection is enabled. |
| multiSelection  | `Boolean`| Indicates if multi-selection is enabled. |
| singleSelection | `Boolean`| Indicates if single-selection is enabled. |
| allSelection    | `Boolean`| Indicates if all selection is enabled. |

## Instance methods

| Static | Asynchronous | Accessor | Name       | Parameters |
|--------|--------------|----------|------------|------------|
|        |              | `get`    | `selected` |            |
|        |              | `get`    | `indeterminate` |            |

## Events

| Name                               | Description                           |
|------------------------------------|---------------------------------------|
| `onDataTableColumnCellPointerenter`| Triggered when pointer enters a cell of the column. |
| `onDataTableColumnCellPointerleave`| Triggered when pointer leaves a cell of the column. |
| `onDataTableItemClick`            | Triggered when an item is clicked.    |
| `onDataTableKeydown`              | Triggered when a key is pressed.      |
