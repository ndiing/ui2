import { MDElement } from "../element/element.js";

/**
 * Class representing a custom icon element.
 * @extends MDElement
 * @example
 * // Example usage:
 * // Assuming 'md-icon' is defined in HTML:
 * // <md-icon icon="favorite"></md-icon>
 *
 * // JavaScript to interact with the custom element:
 * const iconElement = document.querySelector('md-icon');
 * iconElement.setAttribute('icon', 'favorite'); // Set the icon attribute
 * iconElement.addEventListener('click', () => {
 *   console.log('Icon clicked!');
 * });
 */
class MDIconElement extends MDElement {}

/**
 * Defines a custom element 'md-icon'.
 */
customElements.define("md-icon", MDIconElement);

export { MDIconElement };
