# Name: MDDataTable

Description: Represents a Material Design data table element.

## Instance properties

| name    | type   | default | description                                   |
| ------- | ------ | ------- | --------------------------------------------- |
| columns | Array  | []      | An array of column objects representing the columns of the data table. |
| rows    | Array  | []      | An array of row objects representing the rows of the data table.     |

## Instance methods

| name          | args        | description                                               |
| ------------- | ----------- | --------------------------------------------------------- |
| reorderArray  | array, oldIndex, newIndex | Reorders the given array by moving an element from the old index to the new index. |

## Events

| name                           | description                                              |
| ------------------------------ | -------------------------------------------------------- |
| onDataTableColumnResizeStart   | Triggered when a column resize operation starts.        |
| onDataTableColumnResize        | Triggered during a column resize operation.             |
| onDataTableColumnResizeEnd     | Triggered when a column resize operation ends.          |
| onDataTableColumnResizeHandleDoubleTap | Triggered when a column resize handle is double-tapped. |
| onDataTableRowClick            | Triggered when a row in the data table is clicked.      |
| onDataTableColumnDragStart     | Triggered when a column drag operation starts.          |
| onDataTableColumnDrag          | Triggered during a column drag operation.               |
| onDataTableColumnDragEnd       | Triggered when a column drag operation ends.            |
| onDataTableRowDragStart        | Triggered when a row drag operation starts.             |
| onDataTableRowDrag             | Triggered during a row drag operation.                  |
| onDataTableRowDragEnd          | Triggered when a row drag operation ends.               |
