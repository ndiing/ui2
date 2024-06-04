import { html } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 * @extends MDElement
 */
class MDImageComponent extends MDElement {
    /**
     * Properties of the MDImageComponent.
     * @property {String} [src] - The source of the image.
     * @property {String} [alt] - The alternate text of the image.
     * @property {String} [ratio] - The ratio of the image.
     * @property {String} [ui] - The UI style of the image. Possible values are 'rounded', 'square', 'circle', etc.
     */
    static get properties() {
        return {
            src: { type: String },
            alt: { type: String },
            ratio: { type: String },
            ui: { type: String },
        };
    }

    /**
     *
     */
    constructor() {
        super();
    }

    /**
     *
     */
    render() {
        /* prettier-ignore */
        return html`
            <img 
                .src="${ifDefined(this.src)}" 
                .alt="${ifDefined(this.alt)}" 
                class="md-image__native"
            >
        `;
    }

    /**
     *
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-image");
        await this.updateComplete;
    }

    /**
     *
     */
    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-image");
        await this.updateComplete;
    }

    /**
     *
     */
    updated(changedProperties) {
        if (changedProperties.has("ratio")) {
            this.style.removeProperty("aspect-ratio");

            if (this.ratio) {
                this.style.setProperty("aspect-ratio", this.ratio);
            }
        }

        if (changedProperties.has("ui")) {
            ["rounded"].forEach((ui) => {
                this.classList.remove("md-image--" + ui);
            });
            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-image--" + ui);
                });
            }

            this.style.removeProperty("border-radius");

            if (this.ui?.includes("rounded")) {
                const ratioValues = this.ratio ? this.ratio.split("/").map((ratio) => ratio.trim()) : [1, 1];
                const [width, height] = ratioValues.map((value) => parseFloat(value));
                const borderRadius = this.ratio ? `50% / ${(width / height) * 50}%` : "50%";
                this.style.setProperty("border-radius", borderRadius);
            }
        }
    }
}

customElements.define("md-image", MDImageComponent);

export { MDImageComponent };
