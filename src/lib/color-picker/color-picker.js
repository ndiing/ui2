import { MDElement } from "../element/element";
import { html, nothing } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { VirtualScroll } from "../virtual-scroll/virtual-scroll";

class MDColorPicker extends MDElement {
    static get properties() {
        return {
            value: { type: String },
            index: { type: Number },
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
        r = Math.round(r);
        g = Math.round(g);
        b = Math.round(b);

        var hexR = r.toString(16).padStart(2, "0");
        var hexG = g.toString(16).padStart(2, "0");
        var hexB = b.toString(16).padStart(2, "0");

        var hexA = Math.round(a * 255)
            .toString(16)
            .padStart(2, "0");

        return "#" + hexR + hexG + hexB + hexA;
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
        if (this.index === 0) {
            return this.rgbaToHex(this.red, this.green, this.blue, this.alpha);
        } else if (this.index === 1) {
            return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
        } else if (this.index === 2) {
            const { h, s, l, a } = this.rgbaToHsla(this.red, this.green, this.blue, this.alpha);
            return `hsla(${h.toFixed(2)}, ${s.toFixed(2)}, ${l.toFixed(2)}, ${a})`;
        }
    }

    constructor() {
        super();
        this.value = "#000000";
        this.index = 0;

        const { r, g, b, a } = this.hexToRgba(this.value);
        this.red = r;
        this.green = g;
        this.blue = b;
        this.alpha = a;

        const { h, s, l } = this.rgbaToHsla(this.red, this.green, this.blue, 1);
        this.hue = h;
        this.saturation = s;
        this.lightness = l;

        const hex = this.rgbaToHex(this.red, this.green, this.blue, 1);
        this.hex = hex;
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-color-picker__header">
                <md-button 
                    @click="${this.handleColorPickerLabelClick}" 
                    class="md-color-picker__label" 
                    .label="${this.label}"
                ></md-button>
                <div class="md-color-picker__actions">
                    <md-icon-button @click="${this.handleColorPickerActionBeforeClick}" class="md-color-picker__action" icon="navigate_before"></md-icon-button>
                    <md-icon-button @click="${this.handleColorPickerActionNextClick}" class="md-color-picker__action" icon="navigate_next"></md-icon-button>
                </div>
            </div>
            <div class="md-color-picker__body">
                <div class="md-color-picker__inner">
                    <div class="md-color-picker__area">
                        <canvas 
                            class="md-color-picker__gradient" 
                            width="336" 
                            height="216" 
                            @mousedown="${this.handleColorPickerGradientMousedown}"
                        ></canvas>
                        <input 
                            type="range" 
                            class="md-color-picker__hue" 
                            min="0" 
                            max="360" 
                            .value="${this.hue}" 
                            @input="${this.handleColorPickerHueInput}"
                        >
                        <input 
                            type="range" 
                            class="md-color-picker__opacity" 
                            min="0" 
                            max="100" 
                            .value="${this.alpha*100}" 
                            @input="${this.handleColorPickerOpacityInput}"
                        >
                    </div>
                </div>
                <div class="md-color-picker__footer">
                    <md-button @click="${this.handleColorPickerButtonCancelClick}" class="md-color-picker__button" label="Cancel"></md-button>
                    <md-button @click="${this.handleColorPickerButtonOkClick}" class="md-color-picker__button" label="Ok"></md-button>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-color-picker");

        this.handleColorPickerGradientMousedown = this.handleColorPickerGradientMousedown.bind(this);
        this.handleColorPickerGradientMousemove = this.handleColorPickerGradientMousemove.bind(this);
        this.handleColorPickerGradientMouseup = this.handleColorPickerGradientMouseup.bind(this);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-color-picker");
    }

    async firstUpdated(changedProperties) {
        await this.updateComplete;

        const { r, g, b, a } = this.hexToRgba(this.value);
        this.red = r;
        this.green = g;
        this.blue = b;
        this.alpha = a;

        const { h, s, l } = this.rgbaToHsla(this.red, this.green, this.blue, 1);
        this.hue = h;
        this.saturation = s;
        this.lightness = l;

        const hex = this.rgbaToHex(this.red, this.green, this.blue, 1);
        this.hex = hex;

        this.requestUpdate();

        this.canvas = this.querySelector(".md-color-picker__gradient");
        this.ctx = this.canvas.getContext("2d", { willReadFrequently: true });

        this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);

        this.draw();
    }

    async updated(changedProperties) {
        this.style.setProperty("--md-color-picker-red", this.red);
        this.style.setProperty("--md-color-picker-green", this.green);
        this.style.setProperty("--md-color-picker-blue", this.blue);

        this.style.setProperty("--md-color-picker-hue", this.hue);
        this.style.setProperty("--md-color-picker-saturation", this.saturation);
        this.style.setProperty("--md-color-picker-lightness", this.lightness);

        this.style.setProperty("--md-color-picker-hex", this.hex);

        this.style.setProperty("--md-color-picker-alpha", this.alpha);
    }

    draw() {
        this.ctx.fillStyle = `rgba(${this.red},${this.green},${this.blue},1)`;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const gradient1 = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);
        gradient1.addColorStop(1/100, "rgba(255, 255, 255, 1)");
        gradient1.addColorStop(1, "rgba(255, 255, 255, 0)");

        this.ctx.fillStyle = gradient1;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const gradient2 = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient2.addColorStop(1/100, "rgba(0, 0, 0, 0)");
        gradient2.addColorStop(1, "rgba(0, 0, 0, 1)");

        this.ctx.fillStyle = gradient2;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    handleColorPickerLabelClick(event) {
        this.index = (this.index + 3 + 1) % 3;

        this.emit("onColorPickerLabelClick", event);
    }

    handleColorPickerActionBeforeClick(event) {
        this.index = (this.index + 3 + -1) % 3;

        this.emit("onColorPickerActionBeforeClick", event);
    }

    handleColorPickerActionNextClick(event) {
        this.index = (this.index + 3 + 1) % 3;

        this.emit("onColorPickerActionNextClick", event);
    }

    handleColorPickerGradientMousedown(event) {
        this.drag = true;

        window.addEventListener("mousemove", this.handleColorPickerGradientMousemove);
        window.addEventListener("mouseup", this.handleColorPickerGradientMouseup);

        this.setValue(event);

        this.emit("onColorPickerGradientMousedown", event);
    }

    handleColorPickerGradientMousemove(event) {
        if (this.drag) {
            this.setValue(event);

            this.emit("onColorPickerGradientMousemove", event);
        }
    }

    handleColorPickerGradientMouseup(event) {
        if (this.drag) {
            this.emit("onColorPickerGradientMouseup", event);

            window.removeEventListener("mousemove", this.handleColorPickerGradientMousemove);
            window.removeEventListener("mouseup", this.handleColorPickerGradientMouseup);

            this.drag = false;
        }
    }

    setValue(event) {
        this.rect = this.canvas.getBoundingClientRect();
        const sx = Math.max(0, Math.min(event.clientX - this.rect.left, this.canvas.width) - 1);
        const sy = Math.max(0, Math.min(event.clientY - this.rect.top, this.canvas.height));

        const [r, g, b, a] = this.ctx.getImageData(sx, sy, 1, 1).data;
        this.red = r;
        this.green = g;
        this.blue = b;

        console.log(r, g, b, a);

        this.value = this.rgbaToHex(this.red, this.green, this.blue, this.alpha);
    }

    handleColorPickerHueInput(event) {
        this.hue = parseFloat(event.currentTarget.value);

        const { r, g, b, a } = this.hslaToRgba(this.hue, 100, 50, 1);
        this.red = r;
        this.green = g;
        this.blue = b;

        const hex = this.rgbaToHex(this.red, this.green, this.blue, 1);
        this.hex = hex;

        this.draw();

        this.value = this.rgbaToHex(this.red, this.green, this.blue, this.alpha);

        this.emit("onColorPickerHueInput", event);
    }

    handleColorPickerOpacityInput(event) {
        this.alpha = parseFloat(event.currentTarget.value) / 100;

        this.value = this.rgbaToHex(this.red, this.green, this.blue, this.alpha);

        this.emit("onColorPickerOpacityInput", event);
    }

    handleColorPickerButtonCancelClick(event) {
        this.emit("onColorPickerButtonCancelClick", event);
    }

    handleColorPickerButtonOkClick(event) {
        this.emit("onColorPickerButtonOkClick", event);
    }
}

customElements.define("md-color-picker", MDColorPicker);

export { MDColorPicker };
