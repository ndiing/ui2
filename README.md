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

