import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { hexToHsla, hslaToRgba, rgbaToHex, rgbaToHsla } from "../functions/functions.js";
import { MDPopperController } from "../popper/popper.js";

/**
 * @extends MDSheetComponent
 * @tagname md-color-picker
 * @fires MDColorPickerComponent#onColorPickerIconButtonClick - 
 * @fires MDColorPickerComponent#onColorPickerButtonClick - 
 * @fires MDColorPickerComponent#onColorPickerSelection - 
 * @fires MDColorPickerComponent#onColorPickerIconButtonPrevClick - 
 * @fires MDColorPickerComponent#onColorPickerSelection - 
 * @fires MDColorPickerComponent#onColorPickerIconButtonNextClick - 
 * @fires MDColorPickerComponent#onColorPickerButtonLabelClick - 
 * @fires MDColorPickerComponent#onColorPickerSelection - 
 * @fires MDColorPickerComponent#onColorPickerButtonCancelClick - 
 * @fires MDColorPickerComponent#onColorPickerSelection - 
 * @fires MDColorPickerComponent#onColorPickerButtonOkClick - 
 * @fires MDColorPickerComponent#onColorPickerSelection - 
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointerdown - 
 * @fires MDColorPickerComponent#onColorPickerSelection - 
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointermove - 
 * @fires MDColorPickerComponent#onColorPickerSelection - 
 * @fires MDColorPickerComponent#onColorPickerGradientTrackPointerup - 
 * @fires MDColorPickerComponent#onColorPickerSelection - 
 * @fires MDColorPickerComponent#onColorPickerHueNativeInput - 
 * @fires MDColorPickerComponent#onColorPickerSelection - 
 * @fires MDColorPickerComponent#onColorPickerOpacityNativeInput - 
 */
class MDColorPickerComponent extends MDSheetComponent {
    /**
     * @property {Number} index - 
     * @property {String} value - 
     */
    static properties = {
        ...MDSheetComponent.properties,
        index: { type: Number },
        value: { type: String },
    };

    /**
     * 
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <div class="md-color-picker__card">
                <div class="md-color-picker__card-item">${this.renderArea()}</div>
            </div>
        `];
    }

    /**
     * 
     */
    set body(value) {
        this._body = value;
    }

    /**
     * 
     */
    get leadingActions() {
        let label = this.selection.hex;

        return [{ icon: "arrow_drop_down", variant: "icon-right", name: "label", component: "button", label }];
    }

    /**
     * 
     */
    get actions() {
        return [{ component: "spacer" }, { name: "cancel", label: "Cancel" }, { name: "ok", label: "Ok" }];
    }

    constructor() {
        super();

        this.selection = {};

        this.index = 0;

        this.value = "#000000";

        this.handleColorPickerGradientTrackPointermove = this.handleColorPickerGradientTrackPointermove.bind(this);
        this.handleColorPickerGradientTrackPointerup = this.handleColorPickerGradientTrackPointerup.bind(this);

        this.popper = new MDPopperController(this, {});
    }

    renderArea() {
        /* prettier-ignore */
        return html`
            <div class="md-color-picker__area">
                <div class="md-color-picker__gradient">
                    <canvas 
                        class="md-color-picker__gradient-track"
                        width="360"
                        height="256"
                        @pointerdown="${this.handleColorPickerGradientTrackPointerdown}"
                    ></canvas>
                    <div class="md-color-picker__gradient-thumb"></div>
                </div>
                <label class="md-color-picker__hue">
                    <div class="md-color-picker__hue-label">Hue</div>
                    <input 
                        type="range" 
                        class="md-color-picker__hue-native"
                        min="0"
                        max="360"
                        .value="${this.selection.hue}"
                        @input="${this.handleColorPickerHueNativeInput}"
                    >
                </label>
                <label class="md-color-picker__opacity">
                    <div class="md-color-picker__opacity-label">Opacity</div>
                    <input 
                        type="range" 
                        class="md-color-picker__opacity-native"
                        min="0"
                        max="1"
                        step="0.01"
                        .value="${this.selection.alpha}"
                        @input="${this.handleColorPickerOpacityNativeInput}"
                    >
                </label>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-color-picker");

        this.defaultValue = this.value;

        this.updateHsla();

        await this.updateComplete;

        this.init();
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("index")) {
            this.style.setProperty("--md-comp-color-picker-card-index", this.index);
        }

        if (changedProperties.has("value") && changedProperties.get("value")) {
            if (this.value) {
                await this.updateComplete;
                this.updateHsla();
                this.draw();
                this.updateThumb();
                this.requestUpdate();
            }
        }

        this.style.setProperty("--md-comp-color-picker-base", `rgb(${this.selection.red},${this.selection.green},${this.selection.blue})`);
    }

    /**
     * 
     */
    init() {
        this.canvas = this.querySelector(".md-color-picker__gradient-track");
        this.thumb = this.querySelector(".md-color-picker__gradient-thumb");

        this.context = this.canvas.getContext("2d", { willReadFrequently: true });

        this.draw();
        this.updateThumb();
    }

    /**
     * 
     */
    draw() {
        const ctx = this.context;

        ctx.fillStyle = `hsl(${this.selection.hue}deg, 100%, 50%)`;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const gradient2 = ctx.createLinearGradient(0, 0, this.canvas.width, 0);
        gradient2.addColorStop(0 + 1 / 100, "#ffffff");
        gradient2.addColorStop(1, "transparent");
        ctx.fillStyle = gradient2;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const gradient1 = ctx.createLinearGradient(0, 0, 0, this.canvas.height);
        gradient1.addColorStop(0, "transparent");
        gradient1.addColorStop(1, "#000000");
        ctx.fillStyle = gradient1;
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.data = ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data;
    }

    /**
     * 
     */
    findPixel(r, g, b) {
        const data = this.data;
        let xx;
        let yy;

        for (let y = 0; y < this.canvas.height; y++) {
            for (let x = 0; x < this.canvas.width; x++) {
                const index = (y * this.canvas.width + x) * 4;

                const red = data[index];
                const green = data[index + 1];
                const blue = data[index + 2];

                if (red === r && green === g && blue === b) {
                    xx = x;
                    yy = y;
                }
            }
        }

        return { x: xx, y: yy };
    }

    /**
     * 
     */
    updateHsla() {
        const { hue, saturation, lightness, red, green, blue, alpha } = hexToHsla(this.value);
        this.selection.hue = hue;
        this.selection.saturation = saturation;
        this.selection.lightness = lightness;
        this.selection.red = red;
        this.selection.green = green;
        this.selection.blue = blue;
        this.selection.alpha = alpha;
        this.selection.hex = this.value;
    }

    /**
     * 
     */
    updateThumb() {
        const { x, y } = this.findPixel(this.selection.red, this.selection.green, this.selection.blue);

        this.thumb.style.left = x + "px";
        this.thumb.style.top = y + "px";
    }

    /**
     * 
     */
    updateRgba(event) {
        const { width, height, left, top } = this.canvasRect;
        const x = Math.min(Math.max(0, event.clientX - left), width - 1 / 100);
        const y = Math.min(Math.max(0, event.clientY - top), height);

        const [red, green, blue] = this.context.getImageData(x, y, width, height).data;
        this.selection.red = red;
        this.selection.green = green;
        this.selection.blue = blue;

        const { hue, saturation, lightness } = rgbaToHsla(this.selection.red, this.selection.green, this.selection.blue);
        this.selection.saturation = saturation;
        this.selection.lightness = lightness;

        this.selection.hex = rgbaToHex(this.selection.red, this.selection.green, this.selection.blue, this.selection.alpha);

        this.thumb.style.left = x + "px";
        this.thumb.style.top = y + "px";

        this.requestUpdate();
    }

    handleCardIconButtonClick(event) {
        if (event.currentTarget.name == "prev") {
            this.handleCardIconButtonPrevClick(event);
        } else if (event.currentTarget.name == "next") {
            this.handleCardIconButtonNextClick(event);
        }
        this.emit("onColorPickerIconButtonClick", event);
    }

    handleCardButtonClick(event) {
        if (event.currentTarget.name == "label") {
            this.handleCardButtonLabelClick(event);
        } else if (event.currentTarget.name == "cancel") {
            this.handleCardButtonCancelClick(event);
        } else if (event.currentTarget.name == "ok") {
            this.handleCardButtonOkClick(event);
        }
        this.emit("onColorPickerButtonClick", event);
    }

    handleCardIconButtonPrevClick(event) {
        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerIconButtonPrevClick", event);
    }

    handleCardIconButtonNextClick(event) {
        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerIconButtonNextClick", event);
    }

    handleCardButtonLabelClick(event) {
        this.emit("onColorPickerButtonLabelClick", event);
    }

    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateHsla();
        this.draw();
        this.updateThumb();
        this.requestUpdate();

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerButtonCancelClick", event);
    }

    handleCardButtonOkClick(event) {
        this.value = this.selection.hex;

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerButtonOkClick", event);
    }

    handleColorPickerGradientTrackPointerdown(event) {
        window.addEventListener("pointermove", this.handleColorPickerGradientTrackPointermove);
        window.addEventListener("pointerup", this.handleColorPickerGradientTrackPointerup);

        document.documentElement.classList.add("md-gesture--unselectable");

        this.canvasRect = this.canvas.getBoundingClientRect();

        this.updateRgba(event);

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerGradientTrackPointerdown", event);
    }

    handleColorPickerGradientTrackPointermove(event) {
        this.updateRgba(event);

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerGradientTrackPointermove", event);
    }

    handleColorPickerGradientTrackPointerup(event) {
        this.updateRgba(event);

        document.documentElement.classList.remove("md-gesture--unselectable");

        window.removeEventListener("pointermove", this.handleColorPickerGradientTrackPointermove);
        window.removeEventListener("pointerup", this.handleColorPickerGradientTrackPointerup);

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerGradientTrackPointerup", event);
    }

    handleColorPickerHueNativeInput(event) {
        const hue = parseFloat(event.currentTarget.value);

        this.selection.hue = hue;

        this.draw();

        const { red, green, blue } = hslaToRgba(this.selection.hue, this.selection.saturation, this.selection.lightness);
        this.selection.red = red;
        this.selection.green = green;
        this.selection.blue = blue;

        this.selection.hex = rgbaToHex(this.selection.red, this.selection.green, this.selection.blue, this.selection.alpha);

        this.requestUpdate();

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerHueNativeInput", event);
    }

    handleColorPickerOpacityNativeInput(event) {
        const alpha = parseFloat(event.currentTarget.value);

        this.selection.alpha = alpha;

        this.selection.hex = rgbaToHex(this.selection.red, this.selection.green, this.selection.blue, this.selection.alpha);

        this.requestUpdate();

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerOpacityNativeInput", event);
    }

    /**
     * 
     */
    showModal(button, options) {
        super.showModal();

        this.setPlacement(button, options);
    }

    /**
     * 
     */
    show(button, options) {
        super.show();

        this.setPlacement(button, options);
    }

    /**
     * 
     */
    setPlacement(button, options) {
        this.popper.setPlacement(button, {
            placements: ["top-start", "top-end", "top", "below-start", "below-end", "below", "bottom-start", "bottom-end", "bottom", "above-start", "above-end", "above", "left-start", "left-end", "left", "after-start", "after-end", "after", "right-start", "right-end", "right", "before-start", "before-end", "before", "center"],
            ...options,
        });
    }
}

customElements.define("md-color-picker", MDColorPickerComponent);

export { MDColorPickerComponent };