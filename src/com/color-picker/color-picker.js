import { html, nothing } from "lit";
import { MDElement } from "../element/element";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDPopperModule } from "../popper/popper";

class MDColorPickerComponent extends MDElement {
    static get properties() {
        return {
            ui: { type: String },
            open: { type: Boolean, reflect: true },
            index: { type: Number },
            value: { type: String },
        };
    }

    hexToRgba(hex) {
        hex = hex.replace(/^#/, "");

        var alpha = hex.substring(6);
        var a = alpha ? parseInt(alpha, 16) / 255 : 1;

        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);

        return { r, g, b, a };
    }

    rgbaToHsla(r, g, b, a = 1) {
        r /= 255;
        g /= 255;
        b /= 255;

        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        var delta = max - min;

        var l = (max + min) / 2;

        var s = 0;
        if (delta !== 0) {
            s = delta / (1 - Math.abs(2 * l - 1));
        }

        var h = 0;
        if (delta !== 0) {
            if (max === r) {
                h = ((g - b) / delta) % 6;
            } else if (max === g) {
                h = (b - r) / delta + 2;
            } else {
                h = (r - g) / delta + 4;
            }
        }
        h *= 60;
        if (h < 0) {
            h += 360;
        }

        return { h, s: s * 100, l: l * 100, a };
    }

    rgbaToHex(r, g, b, a = 1) {
        r = Math.max(0, Math.min(255, r));
        g = Math.max(0, Math.min(255, g));
        b = Math.max(0, Math.min(255, b));

        var hex = ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

        if (a < 1) {
            a = Math.max(0, Math.min(1, a));
            var alphaHex = Math.round(a * 255).toString(16);
            hex += alphaHex.length === 1 ? "0" + alphaHex : alphaHex;
        }

        return "#" + hex;
    }

    hslaToRgba(h, s, l, a = 1) {
        h = ((h % 360) + 360) % 360;

        s = Math.max(0, Math.min(s, 100));
        l = Math.max(0, Math.min(l, 100));

        s /= 100;
        l /= 100;

        var c = (1 - Math.abs(2 * l - 1)) * s;
        var x = c * (1 - Math.abs(((h / 60) % 2) - 1));
        var m = l - c / 2;

        var r, g, b;
        if (0 <= h && h < 60) {
            r = c;
            g = x;
            b = 0;
        } else if (60 <= h && h < 120) {
            r = x;
            g = c;
            b = 0;
        } else if (120 <= h && h < 180) {
            r = 0;
            g = c;
            b = x;
        } else if (180 <= h && h < 240) {
            r = 0;
            g = x;
            b = c;
        } else if (240 <= h && h < 300) {
            r = x;
            g = 0;
            b = c;
        } else if (300 <= h && h < 360) {
            r = c;
            g = 0;
            b = x;
        }

        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);

        return { r, g, b, a };
    }

    get label() {
        return this.selected;
    }

    get subLabel() {}

    constructor() {
        super();

        this.value = "#000000";

        this.index = 0;
    }

    renderCard() {
        /* prettier-ignore */
        return html`
            <div class="md-color-picker__card">
                <div class="md-color-picker__card-item">

                    <div class="md-color-picker__container">
                        <div class="md-color-picker__solid">
                            <canvas 
                                class="md-color-picker__track"
                                @pointerdown="${this.handleColorPickerSolidPointerdown}"
                            ></canvas>
                            <div class="md-color-picker__thumb"></div>
                        </div>
                        <!-- <canvas class="md-color-picker__hue"></canvas> -->
                        <input 
                            class="md-color-picker__hue"
                            type="range"
                            min="0"
                            max="360"
                            @input="${this.handleColorPickerHueInput}"
                            .value="${this.hue}"
                        >
                        <!-- <canvas class="md-color-picker__opacity"></canvas> -->
                        <input 
                            class="md-color-picker__opacity"
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            .value="${this.alpha}"
                            @input="${this.handleColorPickerOpacityInput}"
                        >
                    </div>

                </div>
            </div>
        `
    }

    render() {
        /* prettier-ignore */
        return html`
                <div class="md-color-picker__header">
                    ${this.leadingActions?.length?html`
                        <div class="md-color-picker__actions">
                            ${this.leadingActions.map(action=>html`
                                <md-icon-button @click="${this.handleColorPickerActionClick}" class="md-color-picker__action" .icon="${ifDefined(action?.icon??action)}" .ui="${ifDefined(action?.ui)}"></md-icon-button>
                            `)}
                        </div>
                    `:nothing}
                    <div class="md-color-picker__label">
                        <div @click="${this.handleColorPickerLabelPrimaryClick}" class="md-color-picker__label-primary">${this.label}</div>
                        <!-- <div @click="${this.handleColorPickerLabelSecondaryClick}" class="md-color-picker__label-secondary">${this.subLabel}</div> -->
                    </div>
                    <!-- <div class="md-color-picker__actions">
                        <md-icon-button @click="${this.handleColorPickerActionNavigateBeforeClick}" class="md-color-picker__action" .icon="${"navigate_before"}"></md-icon-button>
                        <md-icon-button @click="${this.handleColorPickerActionNavigateNextClick}" class="md-color-picker__action" .icon="${"navigate_next"}"></md-icon-button>
                    </div> -->
                </div>
            <div class="md-color-picker__body">
                <div class="md-color-picker__inner">${this.renderCard()}</div>
                <div class="md-color-picker__footer">
                    <md-button @click="${this.handleColorPickerButtonCancelClick}" class="md-color-picker__button" .label="${"Cancel"}"></md-button>
                    <md-button @click="${this.handleColorPickerButtonOkClick}" class="md-color-picker__button" .label="${"Ok"}"></md-button>
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-color-picker");
        await this.updateComplete;
        this.scrim = document.createElement("div");
        this.scrim.classList.add("md-color-picker__scrim");
        this.handleColorPickerScrimClick = this.handleColorPickerScrimClick.bind(this);
        this.scrim.addEventListener("click", this.handleColorPickerScrimClick);
        this.parentElement.insertBefore(this.scrim, this.nextElementSibling);

        this.handleColorPickerSolidPointermove = this.handleColorPickerSolidPointermove.bind(this);
        this.handleColorPickerSolidPointerup = this.handleColorPickerSolidPointerup.bind(this);
    }

    async disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-color-picker");
        await this.updateComplete;
        this.scrim.removeEventListener("click", this.handleColorPickerScrimClick);
        this.scrim.remove();
    }

    async firstUpdated() {
        await this.updateComplete;

        this.updateFromValue();

        this.resizeCanvas();
    }

    async updated(changedProperties) {
        if (changedProperties.has("ui")) {
            ["full-screen"].forEach((ui) => {
                this.classList.remove("md-color-picker--" + ui);
            });

            if (this.ui) {
                this.ui.split(" ").forEach((ui) => {
                    this.classList.add("md-color-picker--" + ui);
                });
            }
        }

        if (changedProperties.has("open")) {
            if (this.open) {
                this.scrim.setAttribute("open", "");
                this.emit("onColorPickerShow", this);
            } else {
                this.scrim.removeAttribute("open", "");
                this.emit("onColorPickerClose", this);
            }
        }

        if (changedProperties.has("value")) {
            if (this.value) {
                await this.updateComplete;

                this.updateFromValue();

                this.emit("onColorPickerChange", { detail: this });
            }
        }

        this.selected = this.rgbaToHex(this.red, this.green, this.blue, this.alpha);
        this.style.setProperty("--md-color-picker-rgb", `rgb(${this.red},${this.green},${this.blue})`);
        this.style.setProperty("--md-color-picker-hsl", `hsl(${this.hue}deg 100% 50%)`);
        this.style.setProperty("--md-color-picker-hex", this.selected);
    }

    updateFromValue() {
        this.selected = this.value;

        const { r, g, b, a } = this.hexToRgba(this.selected);
        const { h, s, l } = this.rgbaToHsla(r, g, b, a);

        this.red = r;
        this.green = g;
        this.blue = b;
        this.alpha = a;
        this.hue = h;
        this.saturation = s;
        this.lightness = l;

        this.requestUpdate();
    }

    drawSolidGradient() {
        const { width, height } = this.solidCanvas;
        this.solidCtx.fillStyle = `hsl(${this.hue} 100% 50%)`;
        this.solidCtx.fillRect(0, 0, width, height);

        let gradientWhite = this.solidCtx.createLinearGradient(0, 0, width, 0);
        gradientWhite.addColorStop(0.01, "white");
        gradientWhite.addColorStop(1, "transparent");
        this.solidCtx.fillStyle = gradientWhite;
        this.solidCtx.fillRect(0, 0, width, height);

        let gradientBlack = this.solidCtx.createLinearGradient(0, 0, 0, height);
        gradientBlack.addColorStop(0.01, "transparent");
        gradientBlack.addColorStop(1, "black");
        this.solidCtx.fillStyle = gradientBlack;
        this.solidCtx.fillRect(0, 0, width, height);
    }

    drawHueGradient() {
        const { width, height } = this.hueCanvas;
        let gradientHue = this.hueCtx.createLinearGradient(0, 0, width, 0);
        gradientHue.addColorStop(0, "hsl(0, 100%, 50%)");
        gradientHue.addColorStop(1 / 6, "hsl(60, 100%, 50%)");
        gradientHue.addColorStop(2 / 6, "hsl(120, 100%, 50%)");
        gradientHue.addColorStop(3 / 6, "hsl(180, 100%, 50%)");
        gradientHue.addColorStop(4 / 6, "hsl(240, 100%, 50%)");
        gradientHue.addColorStop(5 / 6, "hsl(300, 100%, 50%)");
        gradientHue.addColorStop(1, "hsl(360, 100%, 50%)");
        this.hueCtx.fillStyle = gradientHue;
        this.hueCtx.fillRect(0, 0, width, height);
    }

    drawOpacityGradient() {
        const { width, height } = this.opacityCanvas;
        let gradientOpacity = this.opacityCtx.createLinearGradient(0, 0, width, 0);
        gradientOpacity.addColorStop(0, "transparent");
        gradientOpacity.addColorStop(1, "#ff0000");
        this.opacityCtx.fillStyle = gradientOpacity;
        this.opacityCtx.fillRect(0, 0, width, height);
    }

    resizeCanvas() {
        this.solidCanvas = document.querySelector(".md-color-picker__track");
        this.hueCanvas = document.querySelector(".md-color-picker__hue");
        this.opacityCanvas = document.querySelector(".md-color-picker__opacity");

        this.solidCtx = this.solidCanvas.getContext("2d", {
            willReadFrequently: true,
        });

        this.solidCanvas.width = this.solidCanvas.clientWidth;
        this.solidCanvas.height = this.solidCanvas.clientHeight;

        this.drawSolidGradient();

        this.solidThumb = document.querySelector(".md-color-picker__thumb");

        const imageData = this.solidCtx.getImageData(0, 0, this.solidCanvas.width, this.solidCanvas.height);
        const data = imageData.data;

        let xy = [];

        for (let y = 0; y < this.solidCanvas.height; y++) {
            for (let x = 0; x < this.solidCanvas.width; x++) {
                const index = (y * this.solidCanvas.width + x) * 4;

                if (this.red == data[index] && this.green == data[index + 1] && this.blue == data[index + 2]) {
                    xy = [x, y];
                    break;
                }
            }

            if (xy.length) {
                break;
            }
        }

        const [x = this.solidCanvas.width, y = this.solidCanvas.height] = xy;

        this.solidThumb.style.left = x + "px";
        this.solidThumb.style.top = y + "px";
    }

    show(button, options) {
        this.open = true;
        this.popper = new MDPopperModule(this, {
            button,
            placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top"],
            ...options,
        });
        this.popper.set();
    }

    close() {
        this.open = false;
        this.popper.destroy();
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleColorPickerScrimClick(event) {
        this.close();

        this.emit("onColorPickerScrimClick", event);
    }

    handleColorPickerLabelPrimaryClick(event) {
        this.emit("onColorPickerLabelPrimaryClick", event);
    }

    handleColorPickerLabelSecondaryClick(event) {
        this.emit("onColorPickerLabelSecondaryClick", event);
    }

    handleColorPickerActionNavigateBeforeClick(event) {
        this.emit("onColorPickerActionNavigateBeforeClick", event);
    }

    handleColorPickerActionNavigateNextClick(event) {
        this.emit("onColorPickerActionNavigateNextClick", event);
    }

    handleColorPickerSolidPointerdown(event) {
        window.addEventListener("pointermove", this.handleColorPickerSolidPointermove);
        window.addEventListener("pointerup", this.handleColorPickerSolidPointerup);
        document.documentElement.classList.add("md-gesture--dragged");

        this.updateFromSolid(event);

        this.emit("onColorPickerSolidPointerdown", event);
        this.emit("onColorPickerChange", event);
    }

    updateFromSolid(event) {
        const { left, top, width, height } = this.solidCanvas.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - left, width) - 1);
        const y = Math.max(0, Math.min(event.clientY - top, height));
        const pixel = this.solidCtx.getImageData(x, y, 1, 1).data;
        const [r, g, b, a] = pixel;
        const { h, s, l } = this.rgbaToHsla(r, g, b, a);

        this.red = r;
        this.green = g;
        this.blue = b;
        this.saturation = s;
        this.lightness = l;

        this.solidThumb.style.setProperty("left", x + "px");
        this.solidThumb.style.setProperty("top", y + "px");

        this.requestUpdate();
    }

    handleColorPickerSolidPointermove(event) {
        this.updateFromSolid(event);

        this.emit("onColorPickerSolidPointermove", event);
        this.emit("onColorPickerChange", event);
    }

    handleColorPickerSolidPointerup(event) {
        window.removeEventListener("pointermove", this.handleColorPickerSolidPointermove);
        window.removeEventListener("pointerup", this.handleColorPickerSolidPointerup);
        document.documentElement.classList.remove("md-gesture--dragged");

        this.updateFromSolid(event);

        this.emit("onColorPickerSolidPointerup", event);
        this.emit("onColorPickerChange", event);
    }

    handleColorPickerHueInput(event) {
        this.hue = parseFloat(this.hueCanvas.value);

        const { r, g, b } = this.hslaToRgba(this.hue, this.saturation, this.lightness, this.alpha);
        this.red = r;
        this.green = g;
        this.blue = b;

        this.drawSolidGradient();

        this.requestUpdate();

        this.emit("onColorPickerHueInput", event);
        this.emit("onColorPickerChange", event);
    }

    handleColorPickerOpacityInput(event) {
        this.alpha = parseFloat(this.opacityCanvas.value);

        this.requestUpdate();

        this.emit("onColorPickerOpacityInput", event);
        this.emit("onColorPickerChange", event);
    }

    handleColorPickerButtonCancelClick(event) {
        this.emit("onColorPickerButtonCancelClick", event);
    }

    handleColorPickerButtonOkClick(event) {
        this.emit("onColorPickerButtonOkClick", event);
    }
}

customElements.define("md-color-picker", MDColorPickerComponent);

export { MDColorPickerComponent };
