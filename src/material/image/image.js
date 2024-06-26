import { html } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

/**
 * Tambahkan deskripsi
 * @extends MDComponent
 * @tagname md-image
 * @fires MDImageComponent#onImageNativeLoad -
 * @fires MDImageComponent#onImageNativeError -
 */
class MDImageComponent extends MDComponent {
    /**
     * @property {String} src - Tambahkan deskripsi
     * @property {String} alt - Tambahkan deskripsi
     * @property {String} srcset - Tambahkan deskripsi
     * @property {String} sizes - Tambahkan deskripsi
     * @property {String} crossorigin - Tambahkan deskripsi
     * @property {String} usemap - Tambahkan deskripsi
     * @property {Boolean} ismap - Tambahkan deskripsi
     * @property {Number} width - Tambahkan deskripsi
     * @property {Number} height - Tambahkan deskripsi
     * @property {String} referrerpolicy - Tambahkan deskripsi
     * @property {String} decoding - Tambahkan deskripsi
     * @property {String} loading - Tambahkan deskripsi
     * @property {String} title - Tambahkan deskripsi
     * @property {String} longdesc - Tambahkan deskripsi
     * @property {String} fetchpriority - Tambahkan deskripsi
     * @property {String} ratio - Tambahkan deskripsi
     * @property {String} variant - Tambahkan deskripsi
     */
    static properties = {
        src: { type: String },
        alt: { type: String },
        srcset: { type: String },
        sizes: { type: String },
        crossorigin: { type: String },
        usemap: { type: String },
        ismap: { type: Boolean },
        width: { type: Number },
        height: { type: Number },
        referrerpolicy: { type: String },
        decoding: { type: String },
        loading: { type: String },
        title: { type: String },
        longdesc: { type: String },
        fetchpriority: { type: String },

        ratio: { type: String },
        variant: { type: String },
    };

    variants = ["rounded"];

    get nativeStyle() {
        let style = {};
        if (this.ratio) {
            style["aspect-ratio"] = this.ratio;
        }
        if (this.variant && this.variant.includes("rounded")) {
            if (this.ratio) {
                style["border-radius"] = `50% / calc(50% * ${this.ratio})`;
            } else {
                style["border-radius"] = "50%";
            }
        }
        return style;
    }

    constructor() {
        super();

        this.loading = "lazy";
        this.alt = "alt";
    }

    render() {
        /* prettier-ignore */
        return html`
            <img 
                class="md-image__native"
                style="${styleMap(this.nativeStyle)}"
                .src="${ifDefined(this.src)}"
                .alt="${ifDefined(this.alt)}"
                .srcset="${ifDefined(this.srcset)}"
                .sizes="${ifDefined(this.sizes)}"
                .crossorigin="${ifDefined(this.crossorigin)}"
                .usemap="${ifDefined(this.usemap)}"
                .ismap="${ifDefined(this.ismap)}"
                .width="${ifDefined(this.width)}"
                .height="${ifDefined(this.height)}"
                .referrerpolicy="${ifDefined(this.referrerpolicy)}"
                .decoding="${ifDefined(this.decoding)}"
                .loading="${ifDefined(this.loading)}"
                .title="${ifDefined(this.title)}"
                .longdesc="${ifDefined(this.longdesc)}"
                .fetchpriority="${ifDefined(this.fetchpriority)}"
                @load="${this.handleImageNativeLoad}"
                @error="${this.handleImageNativeError}"
            >
        `
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-image");
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (let i = 0; i < this.variants.length; i++) {
                let variant = this.variants[i];
                this.classList.toggle(`md-image--${variant}`, (this.variant ?? "").split(" ").includes(variant));
            }
        }
    }

    handleImageNativeLoad(event) {
        this.emit("onImageNativeLoad", event);
    }

    handleImageNativeError(event) {
        const native = event.currentTarget;

        native.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

        this.emit("onImageNativeError", event);
    }
}

customElements.define("md-image", MDImageComponent);

export { MDImageComponent };
