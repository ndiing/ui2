import { html } from "lit";
import { MDElement } from "../element/element.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

/**
 * Class representing a custom image element.
 * @extends MDElement
 * @example
 * // HTML example:
 * // <md-image src="path/to/image.jpg" alt="Description" loading="lazy" aspect-ratio="16/9"></md-image>
 *
 * // JavaScript example:
 * const imageElement = document.querySelector('md-image');
 * imageElement.src = 'path/to/new-image.jpg';
 * imageElement.alt = 'New Description';
 * imageElement.loading = 'eager';
 * imageElement.aspectRatio = '4/3';
 *
 * imageElement.addEventListener('onImageNativeLoad', (event) => {
 *   console.log('Image loaded:', event);
 * });
 *
 * imageElement.addEventListener('onImageNativeError', (event) => {
 *   console.log('Image failed to load:', event);
 * });
 */
class MDImageElement extends MDElement {
    /**
     * Properties of the MDImageElement.
     * @type {Object}
     * @property {String} src - The source URL of the image.
     * @property {String} alt - The alt text of the image.
     * @property {String} loading - The loading attribute of the image.
     * @property {String} aspectRatio - The aspect ratio of the image.
     */
    static properties = {
        ...MDElement.properties,
        src: { type: String },
        alt: { type: String },
        loading: { type: String },
        aspectRatio: { type: String },
    };

    /**
     * Gets the native styles for the image element.
     * @return {Object} The styles for the image element.
     */
    get nativeStyle() {
        const style = {};

        if (this.aspectRatio) {
            style["aspect-ratio"] = this.aspectRatio;
        }

        if (this.allVariants.includes("rounded")) {
            if (this.aspectRatio) {
                style["border-radius"] = `50% / calc(50% * ${this.aspectRatio})`;
            } else {
                style["border-radius"] = `50% / 50%`;
            }
        }

        return style;
    }

    /**
     * Creates an instance of MDImageElement.
     */
    constructor() {
        super();
        this.loading = "lazy";
    }

    /**
     * Renders the image element.
     * @return {import('lit').TemplateResult} The template result.
     */
    render() {
        /* prettier-ignore */
        return html`
            <img 
                .src="${ifDefined(this.src)}" 
                .alt="${ifDefined(this.alt)}" 
                .loading="${ifDefined(this.loading)}" 
                @load="${this.handleImageNativeLoad}"
                @error="${this.handleImageNativeError}"
                class="md-image__native"
                style="${styleMap(this.nativeStyle)}"
            >
        `;
    }

    /**
     * Handles the image load event.
     * @param {Event} event - The load event.
     * @fires MDImageElement#onImageNativeLoad
     */
    handleImageNativeLoad(event) {
        /**
         * onImageNativeLoad event.
         * @event MDImageElement#onImageNativeLoad
         * @type {Event}
         */
        this.emit("onImageNativeLoad", event);
    }

    /**
     * Handles the image error event.
     * @param {Event} event - The error event.
     * @fires MDImageElement#onImageNativeError
     */
    handleImageNativeError(event) {
        this.src = "";

        /**
         * onImageNativeError event.
         * @event MDImageElement#onImageNativeError
         * @type {Event}
         */
        this.emit("onImageNativeError", event);
    }
}

/**
 * Defines a custom element 'md-image'.
 */
customElements.define("md-image", MDImageElement);

export { MDImageElement };
