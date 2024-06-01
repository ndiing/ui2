# MDChipComponent

The `MDChipComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-chip>` elements.

## Instance Properties

| Name       | Type     | Description                                 |
|------------|----------|---------------------------------------------|
| avatar     | `String` | Specifies the avatar URL for the chip.     |
| icon       | `String` | Specifies the icon for the chip.           |
| label      | `String` | Specifies the label for the chip.          |
| action     | `String` | Specifies the action for the chip.         |
| routerLink | `String` | Specifies the router link for the chip.    |
| selected   | `Boolean`| Indicates whether the chip is selected.    |

## Instance Methods

No specific instance methods are defined in this interface.

## Events

- `onChipSelected`: Triggered when the chip is selected.
- `onChipActionClick`: Triggered when the chip action is clicked.

---

# MDChipsComponent

The `MDChipsComponent` interface provides special properties (beyond the regular `MDElement` interface it also has available to it by inheritance) for manipulating `<md-chips>` elements.

## Instance Properties

| Name            | Type      | Description                                    |
|-----------------|-----------|------------------------------------------------|
| ui              | `String`  | Possible values: `scrollable`.                 |
| list            | `Array`   | List of items to be displayed as chips.        |
| rangeSelection  | `Boolean` | Indicates whether range selection is enabled.  |
| multiSelection  | `Boolean` | Indicates whether multi selection is enabled.  |
| singleSelection | `Boolean` | Indicates whether single selection is enabled. |
| allSelection    | `Boolean` | Indicates whether all selection is enabled.    |

## Instance Methods

No specific instance methods are defined in this interface.

## Events

- `onChipClick`: Triggered when a chip is clicked.
- `onChipsKeydown`: Triggered when a key is pressed within the chips area.
