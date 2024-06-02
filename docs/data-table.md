# MDDataTableItemComponent
The `MDDataTableItemComponent` class provides functionality for manipulating `<md-data-table-item>` elements.

## Properties

| Name              | Type       | Description                                                |
|-------------------|------------|------------------------------------------------------------|
| avatar            | `String`   | Specifies the avatar image source.                         |
| thumbnail         | `String`   | Specifies the thumbnail image source.                      |
| video             | `String`   | Specifies the video source.                                |
| leadingCheckbox   | `Object`   | Object representing the leading checkbox.                  |
| leadingRadioButton| `Object`   | Object representing the leading radio button.              |
| leadingSwitch     | `Object`   | Object representing the leading switch.                    |
| leadingIcon       | `String`   | Specifies the leading icon.                                |
| label             | `String`   | Specifies the label.                                       |
| leadingAction     | `String`   | Specifies the leading action.                              |
| subLabel          | `String`   | Specifies the sub-label.                                   |
| trailingAction    | `String`   | Specifies the trailing action.                             |
| trailingIcon      | `String`   | Specifies the trailing icon.                               |
| trailingCheckbox  | `Object`   | Object representing the trailing checkbox.                 |
| trailingRadioButton| `Object`  | Object representing the trailing radio button.             |
| trailingSwitch    | `Object`   | Object representing the trailing switch.                   |
| text              | `String`   | Specifies the text.                                        |
| badge             | `Object`   | Object representing the badge.                             |
| selected          | `Boolean`  | Indicates whether the item is selected.                    |
| indeterminate     | `String`   | Specifies the indeterminate state.                         |

## Methods

- `labelSecondary()`: Returns the secondary label element.

## Lifecycle Methods

- `connectedCallback()`: Called when the element is added to the DOM.
- `disconnectedCallback()`: Called when the element is removed from the DOM.
- `firstUpdated(changedProperties)`: Called after the first update.
- `updated(changedProperties)`: Called after each update.

## Event Handlers

- `handleDataTableItemActionClick(event)`: Handles the click event for data table item actions.

# MDDataTableRowComponent
The `MDDataTableRowComponent` class provides functionality for manipulating `<md-data-table-row>` elements.

## Properties

None.

## Methods

None.

## Lifecycle Methods

- `connectedCallback()`: Called when the element is added to the DOM.
- `disconnectedCallback()`: Called when the element is removed from the DOM.

# MDDataTableComponent
The `MDDataTableComponent` class provides functionality for manipulating `<md-data-table>` elements.

## Properties

| Name             | Type     | Description                                |
|------------------|----------|--------------------------------------------|
| columns          | `Array`  | Array of column data.                      |
| rows             | `Array`  | Array of row data.                         |
| rangeSelection   | `Boolean`| Indicates if range selection is enabled.   |
| multiSelection   | `Boolean`| Indicates if multi-selection is enabled.   |
| singleSelection  | `Boolean`| Indicates if single-selection is enabled.  |
| allSelection     | `Boolean`| Indicates if all selection is enabled.     |

## Methods

- `renderItem(item)`: Renders a table row item.
- `handleDataTableColumnCheckboxNativeInput(event)`: Handles checkbox input event for columns.
- `handleDataTableRowCheckboxNativeInput(event)`: Handles checkbox input event for rows.

## Lifecycle Methods

- `connectedCallback()`: Called when the element is added to the DOM.
- `disconnectedCallback()`: Called when the element is removed from the DOM.

## Event Handlers

- `handleDataTableRowClick(event)`: Handles click event for table rows.
- `handleDataTableKeydown(event)`: Handles keydown event for the data table.

