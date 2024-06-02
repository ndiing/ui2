# MDColorModule

The `MDColorModule` interface provides special properties for managing color themes using the Material Design Color Utilities library. This module listens for changes in the preferred color scheme and updates the theme accordingly.

## Instance Properties

| Name | Type | Description |
|------|------|-------------|
| list | `Array` | An array of objects representing color scheme preferences (light and dark) with their respective media queries. |
| item | `Object` or `null` | The currently active color scheme object. |
| callback | `Function` | A bound function that handles the theme updates. |

## Instance Methods

| Static | Asynchronous | Accessor | Name | Parameters | Description |
|--------|--------------|----------|------|------------|-------------|
| - | - | - | `init` | - | Initializes the color module by setting up the initial theme and observing changes to the theme color. |
| - | - | - | `callback` | - | Updates the theme based on the current color scheme preference and triggers the `onColorChange` event. |

## Events

| Name | Description |
|------|-------------|
| `onColorChange` | Triggered when the color scheme changes. The event detail contains the current color scheme object. |

## Usage

<pre>
import { color } from './path/to/md-color-module';

window.addEventListener('onColorChange', (event) => {
    console.log('Color scheme changed to:', event.detail.name);
});
</pre>

The module automatically handles the color scheme changes and applies the appropriate theme to the document body. It also listens for mutations in the theme color meta tag and updates the theme accordingly.
