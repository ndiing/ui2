# Material Design Component Library

Welcome to our Material Design Component Library! This repository hosts a comprehensive collection of reusable components inspired by Google's Material Design guidelines, aimed at facilitating the creation of beautiful and consistent user interfaces.

## Overview

Our library encompasses a wide range of components thoughtfully grouped into various sections, catering to diverse UI requirements.

| status    | type         | name               | js                                                       | scss                                                     | docs                               |
| --------- | ------------ | ------------------ | -------------------------------------------------------- | -------------------------------------------------------- | ---------------------------------- |
| `ready`   | `controller` | polyfill           | [js](./src/lib/polyfill/polyfill.js)                     | [scss](./lib/polyfill/polyfill.scss)                     | [md](./docs/polyfill.md)           |
| `ready`   | `controller` | observer           | [js](./src/lib/observer/observer.js)                     | [scss](./lib/observer/observer.scss)                     | [md](./docs/observer.md)           |
| `ready`   | `controller` | marker             | [js](./src/lib/marker/marker.js)                         | [scss](./lib/marker/marker.scss)                         | [md](./docs/marker.md)             |
| `ready`   | `controller` | progress           | [js](./src/lib/progress/progress.js)                     | [scss](./lib/progress/progress.scss)                     | [md](./docs/progress.md)           |
| `ready`   | `controller` | router             | [js](./src/lib/router/router.js)                         | [scss](./lib/router/router.scss)                         | [md](./docs/router.md)             |
| `ready`   | `controller` | store              | [js](./src/lib/store/store.js)                           | [scss](./lib/store/store.scss)                           | [md](./docs/store.md)              |
| `ready`   | `controller` | gesture            | [js](./src/lib/gesture/gesture.js)                       | [scss](./lib/gesture/gesture.scss)                       | [md](./docs/gesture.md)            |
| `ready`   | `controller` | ripple             | [js](./src/lib/ripple/ripple.js)                         | [scss](./lib/ripple/ripple.scss)                         | [md](./docs/ripple.md)             |
| `ready`   | `controller` | popper             | [js](./src/lib/popper/popper.js)                         | [scss](./lib/popper/popper.scss)                         | [md](./docs/popper.md)             |
| `ready`   | `controller` | virtual-scroll     | [js](./src/lib/virtual-scroll/virtual-scroll.js)         | [scss](./lib/virtual-scroll/virtual-scroll.scss)         | [md](./docs/virtual-scroll.md)     |
| `ready`   | `controller` | localization       | [js](./src/lib/localization/localization.js)             | [scss](./lib/localization/localization.scss)             | [md](./docs/localization.md)       |
| `ready`   | `component`  | element            | [js](./src/lib/element/element.js)                       | [scss](./lib/element/element.scss)                       | [md](./docs/element.md)            |
| `ready`   | `component`  | icon               | [js](./src/lib/icon/icon.js)                             | [scss](./lib/icon/icon.scss)                             | [md](./docs/icon.md)               |
| `ready`   | `component`  | badge              | [js](./src/lib/badge/badge.js)                           | [scss](./lib/badge/badge.scss)                           | [md](./docs/badge.md)              |
| `ready`   | `component`  | divider            | [js](./src/lib/divider/divider.js)                       | [scss](./lib/divider/divider.scss)                       | [md](./docs/divider.md)            |
| `ready`   | `component`  | button             | [js](./src/lib/button/button.js)                         | [scss](./lib/button/button.scss)                         | [md](./docs/button.md)             |
| `ready`   | `component`  | segmented-button   | [js](./src/lib/segmented-button/segmented-button.js)     | [scss](./lib/segmented-button/segmented-button.scss)     | [md](./docs/segmented-button.md)   |
| `ready`   | `component`  | icon-button        | [js](./src/lib/icon-button/icon-button.js)               | [scss](./lib/icon-button/icon-button.scss)               | [md](./docs/icon-button.md)        |
| `ready`   | `component`  | fab                | [js](./src/lib/fab/fab.js)                               | [scss](./lib/fab/fab.scss)                               | [md](./docs/fab.md)                |
| `ready`   | `component`  | extended-fab       | [js](./src/lib/extended-fab/extended-fab.js)             | [scss](./lib/extended-fab/extended-fab.scss)             | [md](./docs/extended-fab.md)       |
| `planned` | `component`  | chip               | [js](./src/lib/chip/chip.js)                             | [scss](./lib/chip/chip.scss)                             | [md](./docs/chip.md)               |
| `dev`     | `component`  | layout             | [js](./src/lib/layout/layout.js)                         | [scss](./lib/layout/layout.scss)                         | [md](./docs/layout.md)             |
| `ready`   | `component`  | pane               | [js](./src/lib/pane/pane.js)                             | [scss](./lib/pane/pane.scss)                             | [md](./docs/pane.md)               |
| `ready`   | `component`  | card               | [js](./src/lib/card/card.js)                             | [scss](./lib/card/card.scss)                             | [md](./docs/card.md)               |
| `planned` | `component`  | carousel           | [js](./src/lib/carousel/carousel.js)                     | [scss](./lib/carousel/carousel.scss)                     | [md](./docs/carousel.md)           |
| `ready`   | `component`  | dialog             | [js](./src/lib/dialog/dialog.js)                         | [scss](./lib/dialog/dialog.scss)                         | [md](./docs/dialog.md)             |
| `ready`   | `component`  | bottom-sheet       | [js](./src/lib/bottom-sheet/bottom-sheet.js)             | [scss](./lib/bottom-sheet/bottom-sheet.scss)             | [md](./docs/bottom-sheet.md)       |
| `ready`   | `component`  | side-sheet         | [js](./src/lib/side-sheet/side-sheet.js)                 | [scss](./lib/side-sheet/side-sheet.scss)                 | [md](./docs/side-sheet.md)         |
| `ready`   | `component`  | snackbar           | [js](./src/lib/snackbar/snackbar.js)                     | [scss](./lib/snackbar/snackbar.scss)                     | [md](./docs/snackbar.md)           |
| `ready`   | `component`  | tooltip            | [js](./src/lib/tooltip/tooltip.js)                       | [scss](./lib/tooltip/tooltip.scss)                       | [md](./docs/tooltip.md)            |
| `ready`   | `component`  | progress-indicator | [js](./src/lib/progress-indicator/progress-indicator.js) | [scss](./lib/progress-indicator/progress-indicator.scss) | [md](./docs/progress-indicator.md) |
| `ready`   | `component`  | list               | [js](./src/lib/list/list.js)                             | [scss](./lib/list/list.scss)                             | [md](./docs/list.md)               |
| `ready`   | `component`  | navigation-bar     | [js](./src/lib/navigation-bar/navigation-bar.js)         | [scss](./lib/navigation-bar/navigation-bar.scss)         | [md](./docs/navigation-bar.md)     |
| `ready`   | `component`  | navigation-drawer  | [js](./src/lib/navigation-drawer/navigation-drawer.js)   | [scss](./lib/navigation-drawer/navigation-drawer.scss)   | [md](./docs/navigation-drawer.md)  |
| `ready`   | `component`  | navigation-rail    | [js](./src/lib/navigation-rail/navigation-rail.js)       | [scss](./lib/navigation-rail/navigation-rail.scss)       | [md](./docs/navigation-rail.md)    |
| `ready`   | `component`  | tab                | [js](./src/lib/tab/tab.js)                               | [scss](./lib/tab/tab.scss)                               | [md](./docs/tab.md)                |
| `ready`   | `component`  | top-app-bar        | [js](./src/lib/top-app-bar/top-app-bar.js)               | [scss](./lib/top-app-bar/top-app-bar.scss)               | [md](./docs/top-app-bar.md)        |
| `ready`   | `component`  | bottom-app-bar     | [js](./src/lib/bottom-app-bar/bottom-app-bar.js)         | [scss](./lib/bottom-app-bar/bottom-app-bar.scss)         | [md](./docs/bottom-app-bar.md)     |
| `ready`   | `component`  | menu               | [js](./src/lib/menu/menu.js)                             | [scss](./lib/menu/menu.scss)                             | [md](./docs/menu.md)               |
| `dev`     | `component`  | date-picker        | [js](./src/lib/date-picker/date-picker.js)               | [scss](./lib/date-picker/date-picker.scss)               | [md](./docs/date-picker.md)        |
| `dev`     | `component`  | time-picker        | [js](./src/lib/time-picker/time-picker.js)               | [scss](./lib/time-picker/time-picker.scss)               | [md](./docs/time-picker.md)        |
| `dev`     | `component`  | week-picker        | [js](./src/lib/week-picker/week-picker.js)               | [scss](./lib/week-picker/week-picker.scss)               | [md](./docs/week-picker.md)        |
| `dev`     | `component`  | month-picker       | [js](./src/lib/month-picker/month-picker.js)             | [scss](./lib/month-picker/month-picker.scss)             | [md](./docs/month-picker.md)       |
| `dev`     | `component`  | datetime-picker    | [js](./src/lib/datetime-picker/datetime-picker.js)       | [scss](./lib/datetime-picker/datetime-picker.scss)       | [md](./docs/datetime-picker.md)    |
| `dev`     | `component`  | color-picker       | [js](./src/lib/color-picker/color-picker.js)             | [scss](./lib/color-picker/color-picker.scss)             | [md](./docs/color-picker.md)       |
| `ready`   | `component`  | form               | [js](./src/lib/form/form.js)                             | [scss](./lib/form/form.scss)                             | [md](./docs/form.md)               |
| `ready`   | `component`  | email-field        | [js](./src/lib/email-field/email-field.js)               | [scss](./lib/email-field/email-field.scss)               | [md](./docs/email-field.md)        |
| `ready`   | `component`  | password-field     | [js](./src/lib/password-field/password-field.js)         | [scss](./lib/password-field/password-field.scss)         | [md](./docs/password-field.md)     |
| `ready`   | `component`  | text-field         | [js](./src/lib/text-field/text-field.js)                 | [scss](./lib/text-field/text-field.scss)                 | [md](./docs/text-field.md)         |
| `ready`   | `component`  | url-field          | [js](./src/lib/url-field/url-field.js)                   | [scss](./lib/url-field/url-field.scss)                   | [md](./docs/url-field.md)          |
| `ready`   | `component`  | tel-field          | [js](./src/lib/tel-field/tel-field.js)                   | [scss](./lib/tel-field/tel-field.scss)                   | [md](./docs/tel-field.md)          |
| `dev`     | `component`  | date-field         | [js](./src/lib/date-field/date-field.js)                 | [scss](./lib/date-field/date-field.scss)                 | [md](./docs/date-field.md)         |
| `dev`     | `component`  | datetime-field     | [js](./src/lib/datetime-field/datetime-field.js)         | [scss](./lib/datetime-field/datetime-field.scss)         | [md](./docs/datetime-field.md)     |
| `dev`     | `component`  | month-field        | [js](./src/lib/month-field/month-field.js)               | [scss](./lib/month-field/month-field.scss)               | [md](./docs/month-field.md)        |
| `dev`     | `component`  | time-field         | [js](./src/lib/time-field/time-field.js)                 | [scss](./lib/time-field/time-field.scss)                 | [md](./docs/time-field.md)         |
| `dev`     | `component`  | week-field         | [js](./src/lib/week-field/week-field.js)                 | [scss](./lib/week-field/week-field.scss)                 | [md](./docs/week-field.md)         |
| `dev`     | `component`  | color-field        | [js](./src/lib/color-field/color-field.js)               | [scss](./lib/color-field/color-field.scss)               | [md](./docs/color-field.md)        |
| `dev`     | `component`  | file-field         | [js](./src/lib/file-field/file-field.js)                 | [scss](./lib/file-field/file-field.scss)                 | [md](./docs/file-field.md)         |
| `ready`   | `component`  | textarea-field     | [js](./src/lib/textarea-field/textarea-field.js)         | [scss](./lib/textarea-field/textarea-field.scss)         | [md](./docs/textarea-field.md)     |
| `dev`     | `component`  | select-field       | [js](./src/lib/select-field/select-field.js)             | [scss](./lib/select-field/select-field.scss)             | [md](./docs/select-field.md)       |
| `ready`   | `component`  | number-field       | [js](./src/lib/number-field/number-field.js)             | [scss](./lib/number-field/number-field.scss)             | [md](./docs/number-field.md)       |
| `ready`   | `component`  | search-field       | [js](./src/lib/search-field/search-field.js)             | [scss](./lib/search-field/search-field.scss)             | [md](./docs/search-field.md)       |
| `ready`   | `component`  | checkbox           | [js](./src/lib/checkbox/checkbox.js)                     | [scss](./lib/checkbox/checkbox.scss)                     | [md](./docs/checkbox.md)           |
| `ready`   | `component`  | radio-button       | [js](./src/lib/radio-button/radio-button.js)             | [scss](./lib/radio-button/radio-button.scss)             | [md](./docs/radio-button.md)       |
| `ready`   | `component`  | switch             | [js](./src/lib/switch/switch.js)                         | [scss](./lib/switch/switch.scss)                         | [md](./docs/switch.md)             |
| `ready`   | `component`  | slider             | [js](./src/lib/slider/slider.js)                         | [scss](./lib/slider/slider.scss)                         | [md](./docs/slider.md)             |
| `dev`     | `component`  | data-table         | [js](./src/lib/data-table/data-table.js)                 | [scss](./lib/data-table/data-table.scss)                 | [md](./docs/data-table.md)         |
| `dev`     | `component`  | pagination         | [js](./src/lib/pagination/pagination.js)                 | [scss](./lib/pagination/pagination.scss)                 | [md](./docs/pagination.md)         |



## Usage

Each component is encapsulated within its own file, facilitating easy integration into your projects. Simply import the desired component into your codebase and follow the provided documentation for usage instructions.

## Contributing

We welcome contributions to our component library! If you have ideas for new components, improvements to existing ones, or bug fixes, please feel free to submit a pull request.

## License

This library is licensed under the [MIT License](./LICENSE). Feel free to use, modify, and distribute the components as per the terms of the license.

## Feedback

We value your feedback! If you have any questions, suggestions, or issues, please don't hesitate to [contact us](mailto:your-email@example.com).

Thank you for choosing our Material Design Component Library!
