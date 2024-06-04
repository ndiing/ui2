# Material

## Overview

**Material** is a front-end framework that utilizes Material Design 3 principles to create modern and responsive web applications. It is built using Node.js, Webpack, and Lit, providing developers with a powerful toolkit for building visually appealing user interfaces.

## Installation

1. Clone the repository:

   <pre>
   git clone https://github.com/ndiing/material.git
   cd material
   </pre>

2. Install dependencies:

   <pre>
   npm install
   </pre>

## Usage

### Router Configuration

To configure routing in your Material application, import `MDRouterModule` from the router module, define routes, and initialize the router.

Example:

<pre>
import { MDRouterModule } from "../com/router/router";

const routes = [
    // Define routes here
];

MDRouterModule.init(routes, { historyApiFallback: false });
</pre>

### Creating Components

Use the CLI to create new components and apps:

- To create a component:

  <pre>
  node src/dev/cli create component <component-name> <component-path>
  </pre>

- To create an app:

  <pre>
  node src/dev/cli create app <app-name> <app-path>
  </pre>

## Example Main Page

Here's a simplified example of a main page component (`main.js`):

<pre>
import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { layout } from "../../com/layout/layout";

class AppMainElement extends MDElement {
    constructor() {
        super();
    }

    render(){
        // Render method content
    }

    // Other methods
}

customElements.define("app-main", AppMainElement);

export default document.createElement("app-main");
</pre>

## Contributing

Contributions to Material are welcome! Please follow the contribution guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries, contact ndiing.inc@gmail.com.

<!-- 
jsdoc2md ./src/com/mixin/mixin.js > ./docs/mixin.md
jsdoc2md ./src/com/layout/layout.js > ./docs/layout.md
jsdoc2md ./src/com/color/color.js > ./docs/color.md
jsdoc2md ./src/com/typography/typography.js > ./docs/typography.md
jsdoc2md ./src/com/localization/localization.js > ./docs/localization.md
jsdoc2md ./src/com/router/router.js > ./docs/router.md
jsdoc2md ./src/com/ripple/ripple.js > ./docs/ripple.md
jsdoc2md ./src/com/popper/popper.js > ./docs/popper.md
jsdoc2md ./src/com/virtual-scroll/virtual-scroll.js > ./docs/virtual-scroll.md
jsdoc2md ./src/com/gesture/gesture.js > ./docs/gesture.md
jsdoc2md ./src/com/store/store.js > ./docs/store.md
jsdoc2md ./src/com/element/element.js > ./docs/element.md
jsdoc2md ./src/com/image/image.js > ./docs/image.md
jsdoc2md ./src/com/icon/icon.js > ./docs/icon.md
jsdoc2md ./src/com/icon-button/icon-button.js > ./docs/icon-button.md
jsdoc2md ./src/com/form/form.js > ./docs/form.md
jsdoc2md ./src/com/checkbox/checkbox.js > ./docs/checkbox.md
jsdoc2md ./src/com/radio-button/radio-button.js > ./docs/radio-button.md
jsdoc2md ./src/com/switch/switch.js > ./docs/switch.md
jsdoc2md ./src/com/badge/badge.js > ./docs/badge.md
jsdoc2md ./src/com/list/list.js > ./docs/list.md
jsdoc2md ./src/com/nested-list/nested-list.js > ./docs/nested-list.md
jsdoc2md ./src/com/fab/fab.js > ./docs/fab.md
jsdoc2md ./src/com/button/button.js > ./docs/button.md
jsdoc2md ./src/com/segmented-button/segmented-button.js > ./docs/segmented-button.md
jsdoc2md ./src/com/card/card.js > ./docs/card.md
jsdoc2md ./src/com/dialog/dialog.js > ./docs/dialog.md
jsdoc2md ./src/com/side-sheet/side-sheet.js > ./docs/side-sheet.md
jsdoc2md ./src/com/bottom-sheet/bottom-sheet.js > ./docs/bottom-sheet.md
jsdoc2md ./src/com/navigation-drawer/navigation-drawer.js > ./docs/navigation-drawer.md
jsdoc2md ./src/com/navigation-rail/navigation-rail.js > ./docs/navigation-rail.md
jsdoc2md ./src/com/navigation-bar/navigation-bar.js > ./docs/navigation-bar.md
jsdoc2md ./src/com/bottom-app-bar/bottom-app-bar.js > ./docs/bottom-app-bar.md
jsdoc2md ./src/com/top-app-bar/top-app-bar.js > ./docs/top-app-bar.md
jsdoc2md ./src/com/snackbar/snackbar.js > ./docs/snackbar.md
jsdoc2md ./src/com/menu/menu.js > ./docs/menu.md
jsdoc2md ./src/com/tooltip/tooltip.js > ./docs/tooltip.md
jsdoc2md ./src/com/tabs/tabs.js > ./docs/tabs.md

jsdoc2md ./src/com/datetime-picker/datetime-picker.js > ./docs/datetime-picker.md
jsdoc2md ./src/com/date-picker/date-picker.js > ./docs/date-picker.md
jsdoc2md ./src/com/time-picker/time-picker.js > ./docs/time-picker.md
jsdoc2md ./src/com/month-picker/month-picker.js > ./docs/month-picker.md
jsdoc2md ./src/com/week-picker/week-picker.js > ./docs/week-picker.md
jsdoc2md ./src/com/color-picker/color-picker.js > ./docs/color-picker.md

jsdoc2md ./src/com/chips/chips.js > ./docs/chips.md
jsdoc2md ./src/com/slider/slider.js > ./docs/slider.md
jsdoc2md ./src/com/progress-indicator/progress-indicator.js > ./docs/progress-indicator.md

jsdoc2md ./src/com/text-field/text-field.js > ./docs/text-field.md
jsdoc2md ./src/com/number-field/number-field.js > ./docs/number-field.md
jsdoc2md ./src/com/tel-field/tel-field.js > ./docs/tel-field.md
jsdoc2md ./src/com/email-field/email-field.js > ./docs/email-field.md
jsdoc2md ./src/com/url-field/url-field.js > ./docs/url-field.md
jsdoc2md ./src/com/password-field/password-field.js > ./docs/password-field.md
jsdoc2md ./src/com/search-field/search-field.js > ./docs/search-field.md
jsdoc2md ./src/com/file-field/file-field.js > ./docs/file-field.md

jsdoc2md ./src/com/color-field/color-field.js > ./docs/color-field.md
jsdoc2md ./src/com/datetime-field/datetime-field.js > ./docs/datetime-field.md
jsdoc2md ./src/com/date-field/date-field.js > ./docs/date-field.md
jsdoc2md ./src/com/month-field/month-field.js > ./docs/month-field.md
jsdoc2md ./src/com/week-field/week-field.js > ./docs/week-field.md
jsdoc2md ./src/com/time-field/time-field.js > ./docs/time-field.md

jsdoc2md ./src/com/textarea-field/textarea-field.js > ./docs/textarea-field.md
jsdoc2md ./src/com/select-field/select-field.js > ./docs/select-field.md

jsdoc2md ./src/com/data-table/data-table.js > ./docs/data-table.md


 -->