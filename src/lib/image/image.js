import { ifDefined } from "lit/directives/if-defined.js";
import { MDElement } from "../element/element";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";

class MDImage extends MDElement {
    static get properties() {
        return {
            src: { type: String },
            alt: { type: String },
            ratio: { type: String },
            rounded: { type: Boolean },
        };
    }

    constructor() {
        super();
    }

    render() {
        // prettier-ignore
        return html`
            <img 
                .src="${ifDefined(this.src)}" 
                .alt="${ifDefined(this.alt)}" 
                class="md-image__native"
            >
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-image");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-image");
    }

    firstUpdated(changedProperties) {}

    updated(changedProperties) {
        if (changedProperties.has("ratio")) {
            if (this.ratio) {
                this.style.aspectRatio = this.ratio;
            }
        }
        if (changedProperties.has("rounded")) {
            if (this.rounded) {
                this.classList.add("md-image--rounded");
                if (this.ratio) {
                    const [width, height] = this.ratio.split("/").map((ratio) => Number(ratio.trim()));
                    this.style.borderRadius = `calc(50% / ${width} * ${height}) / 50%`;
                }
            } else {
                this.classList.remove("md-image--rounded");
            }
        }
    }
}

customElements.define("md-image", MDImage);

export { MDImage };
