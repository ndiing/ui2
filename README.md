# Material Design Framework

[![npm version](https://badge.fury.io/js/%40ndiinginc%2Fmaterial.svg)](https://badge.fury.io/js/%40ndiinginc%2Fmaterial)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to the Material Design Framework! This project provides a comprehensive set of components based on Google's Material Design principles, designed for use with Node.js, webpack, and lit.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the Material Design Framework, you can use npm. Make sure you have Node.js installed.

<pre>
npm install @ndiinginc/material
</pre>

## Usage

### Using webpack and lit

1. **Setup webpack**: Ensure your webpack configuration is set up to handle lit elements and JavaScript modules.

   Example `webpack.config.js`:

   <pre>
   const path = require('path');

   module.exports = {
     entry: './src/index.js',
     output: {
       filename: 'bundle.js',
       path: path.resolve(__dirname, 'dist'),
     },
     mode: 'development',
     module: {
       rules: [
         {
           test: /\.js$/,
           exclude: /node_modules/,
           use: {
             loader: 'babel-loader',
             options: {
               presets: ['@babel/preset-env'],
             },
           },
         },
       ],
     },
   };
   </pre>

2. **Import and use components**: Import components from `@ndiinginc/material` and use them in your application.

   Example `src/index.js`:

   <pre>
   import { LitElement, html } from 'lit';
   import { customElement } from 'lit/decorators.js';
   import '@ndiinginc/material/styles/material.css';
   import { Button } from '@ndiinginc/material';

   @customElement('my-app')
   class MyApp extends LitElement {
     render() {
       return html`
         <div>
           <h1>Hello, Material Design!</h1>
           <${Button} variant="contained" color="primary">
             Click Me
           <//>
         </div>
       `;
     }
   }

   document.body.appendChild(new MyApp());
   </pre>

## Components

The framework includes a variety of components such as buttons, cards, typography, and a responsive layout grid, designed specifically for Material Design.

For detailed usage instructions and the full list of available components, refer to the [documentation](#).

## Customization

The Material Design Framework is highly customizable. You can adjust colors, typography, and other aspects to fit your application's design requirements.

Example of customizing the theme with lit:

<pre>
import { css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createTheme, ThemeProvider } from '@ndiinginc/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

@customElement('my-app')
class MyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Roboto', sans-serif;
    }
  `;

  render() {
    return html`
      <${ThemeProvider} .theme=${theme}>
        <div>
          <h1>Hello, Material Design!</h1>
          <${Button} variant="contained" color="primary">
            Click Me
          <//>
        </div>
      <//>
    `;
  }
}

document.body.appendChild(new MyApp());
</pre>

## Contributing

Contributions are welcome! To contribute to this project, follow these steps:

1. Fork the repository and create a new branch.
2. Make your changes and ensure they adhere to the project's coding standards.
3. Test your changes thoroughly.
4. Commit your changes with clear messages.
5. Push your branch to your fork and submit a pull request.

Please review the [CONTRIBUTING.md](CONTRIBUTING.md) file for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Developed with ❤️ by [ndiing](https://github.com/ndiing)

<!-- 
node dev functions
node dev localization
node dev color
node dev component
node dev router
node dev ripple
node dev popper
node dev progress
node dev gesture
node dev observer
node dev attribute-observer
node dev virtual

node dev icon
node dev button
node dev icon-button
node dev card
node dev scrim
node dev sheet
node dev dialog
node dev top-app-bar
node dev side-sheet
node dev bottom-sheet
node dev segmented-button
node dev snackbar
node dev tooltip
node dev datetime-picker
node dev date-picker
node dev month-picker
node dev time-picker
node dev week-picker
node dev color-picker
node dev fab
node dev bottom-app-bar
node dev image
node dev badge
node dev form
node dev checkbox
node dev radio-button
node dev switch
node dev slider
node dev progress-indicator
node dev list-item
node dev list
node dev tree-item
node dev tree
node dev navigation-bar
node dev navigation-drawer
node dev navigation-rail
node dev menu
node dev tabs
node dev chip
node dev chips
node dev text-field
node dev emoji

 -->