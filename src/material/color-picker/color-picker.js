import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { hexToHsla, hslaToRgba, rgbaToHex, rgbaToHsla } from "../functions/functions.js";
import { MDPopperController } from "../popper/popper.js";

/**
 * MDColorPickerComponent class represents a color picker component.
 * @extends MDSheetComponent
 */
class MDColorPickerComponent extends MDSheetComponent {
    /**
     * Static properties of MDColorPickerComponent.
     * @property {Object} properties - Static properties inherited from MDSheetComponent.
     * @property {Number} properties.index - Index property.
     * @property {String} properties.value - Value property.
     * @static
     */
    static properties = {
        ...MDSheetComponent.properties,
        index: { type: Number },
        value: { type: String },
    };

    /**
     * HTML template for the body of the color picker.
     * @returns {TemplateResult[]} Array of lit-html templates.
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
     * Setter for the body property.
     * @param {TemplateResult[]} value - Array of lit-html templates.
     */
    set body(value) {
        this._body = value;
    }

    /**
     * Returns leading actions for the color picker.
     * @returns {Object[]} Array of leading actions.
     */
    get leadingActions() {
        let label = this.selection.hex;

        return [{ icon: "arrow_drop_down", variant: "icon-right", name: "label", component: "button", label }];
    }

    /**
     * Returns actions for the color picker.
     * @returns {Object[]} Array of actions.
     */
    get actions() {
        return [{ component: "spacer" }, { name: "cancel", label: "Cancel" }, { name: "ok", label: "Ok" }];
    }

    /**
     * Constructs a new MDColorPickerComponent instance.
     */
    constructor() {
        super();

        /**
         * Object to store selection data including hue, saturation, lightness, red, green, blue, alpha, and hex.
         * @type {Object}
         */
        this.selection = {};

        /**
         * Index property.
         * @type {Number}
         * @default 0
         */
        this.index = 0;

        /**
         * Initial value in hex format.
         * @type {String}
         * @default "#000000"
         */
        this.value = "#000000";

        this.handleColorPickerGradientTrackPointermove = this.handleColorPickerGradientTrackPointermove.bind(this);
        this.handleColorPickerGradientTrackPointerup = this.handleColorPickerGradientTrackPointerup.bind(this);

        this.popper = new MDPopperController(this, {});
    }

    /**
     * Renders the color picker area.
     * @returns {TemplateResult} lit-html template.
     */
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

    /**
     * Lifecycle callback when the component is added to the DOM.
     * @async
     */
    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-color-picker");

        this.defaultValue = this.value;

        this.updateHsla();

        await this.updateComplete;

        this.init();
    }

    /**
     * Lifecycle callback when the component is updated.
     * @param {Map<any, any>} changedProperties - Map of changed properties.
     */
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
     * Initializes the color picker component.
     */
    init() {
        this.canvas = this.querySelector(".md-color-picker__gradient-track");
        this.thumb = this.querySelector(".md-color-picker__gradient-thumb");

        this.context = this.canvas.getContext("2d", { willReadFrequently: true });

        this.draw();
        this.updateThumb();
    }

    /**
     * Draws the color picker gradient on the canvas.
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
     * Finds the pixel coordinates matching the given RGBA values on the canvas.
     * @param {number} r - Red value.
     * @param {number} g - Green value.
     * @param {number} b - Blue value.
     * @returns {Object} Object with x and y coordinates.
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
     * Updates the HSLA values based on the current hex color value.
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
     * Updates the position of the color picker thumb.
     */
    updateThumb() {
        const { x, y } = this.findPixel(this.selection.red, this.selection.green, this.selection.blue);

        this.thumb.style.left = x + "px";
        this.thumb.style.top = y + "px";
    }

    /**
     * Updates RGBA values based on pointer event coordinates.
     * @param {PointerEvent} event - Pointer event object.
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

    /**
     * Handles click events on icon buttons in the color picker.
     * @param {MouseEvent} event - Mouse event object.
     * @fires MDColorPickerComponent#onColorPickerIconButtonClick
     */
    handleCardIconButtonClick(event) {
        if (event.currentTarget.name == "prev") {
            this.handleCardIconButtonPrevClick(event);
        } else if (event.currentTarget.name == "next") {
            this.handleCardIconButtonNextClick(event);
        }
        this.emit("onColorPickerIconButtonClick", event);
    }

    /**
     * Handles click events on regular buttons in the color picker.
     * @param {MouseEvent} event - Mouse event object.
     * @fires MDColorPickerComponent#onColorPickerButtonClick
     */
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

    /**
     * Handles click events on the 'prev' icon button in the color picker.
     * @param {MouseEvent} event - Mouse event object.
     * @fires MDColorPickerComponent#onColorPickerSelection
     * @fires MDColorPickerComponent#onColorPickerIconButtonPrevClick
     */
    handleCardIconButtonPrevClick(event) {
        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerIconButtonPrevClick", event);
    }

    /**
     * Handles click events on the 'next' icon button in the color picker.
     * @param {MouseEvent} event - Mouse event object.
     * @fires MDColorPickerComponent#onColorPickerSelection
     * @fires MDColorPickerComponent#onColorPickerIconButtonNextClick
     */
    handleCardIconButtonNextClick(event) {
        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerIconButtonNextClick", event);
    }

    /**
     * Handles click events on the label button in the color picker.
     * @param {MouseEvent} event - Mouse event object.
     * @fires MDColorPickerComponent#onColorPickerButtonLabelClick
     */
    handleCardButtonLabelClick(event) {
        this.emit("onColorPickerButtonLabelClick", event);
    }

    /**
     * Handles click events on the 'cancel' button in the color picker.
     * @param {MouseEvent} event - Mouse event object.
     * @fires MDColorPickerComponent#onColorPickerSelection
     * @fires MDColorPickerComponent#onColorPickerButtonCancelClick
     */
    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateHsla();
        this.draw();
        this.updateThumb();
        this.requestUpdate();

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerButtonCancelClick", event);
    }

    /**
     * Handles click events on the 'ok' button in the color picker.
     * @param {MouseEvent} event - Mouse event object.
     * @fires MDColorPickerComponent#onColorPickerSelection
     * @fires MDColorPickerComponent#onColorPickerButtonOkClick
     */
    handleCardButtonOkClick(event) {
        this.value = this.selection.hex;

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerButtonOkClick", event);
    }

    /**
     * Handles pointer down events on the gradient track in the color picker.
     * @param {PointerEvent} event - Pointer event object.
     * @fires MDColorPickerComponent#onColorPickerSelection
     * @fires MDColorPickerComponent#onColorPickerGradientTrackPointerdown
     */
    handleColorPickerGradientTrackPointerdown(event) {
        window.addEventListener("pointermove", this.handleColorPickerGradientTrackPointermove);
        window.addEventListener("pointerup", this.handleColorPickerGradientTrackPointerup);

        document.documentElement.classList.add("md-gesture--unselectable");

        this.canvasRect = this.canvas.getBoundingClientRect();

        this.updateRgba(event);

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerGradientTrackPointerdown", event);
    }

    /**
     * Handles pointer move events on the gradient track in the color picker.
     * @param {PointerEvent} event - Pointer event object.
     * @fires MDColorPickerComponent#onColorPickerSelection
     * @fires MDColorPickerComponent#onColorPickerGradientTrackPointermove
     */
    handleColorPickerGradientTrackPointermove(event) {
        this.updateRgba(event);

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerGradientTrackPointermove", event);
    }

    /**
     * Handles pointer up events on the gradient track in the color picker.
     * @param {PointerEvent} event - Pointer event object.
     * @fires MDColorPickerComponent#onColorPickerSelection
     * @fires MDColorPickerComponent#onColorPickerGradientTrackPointerup
     */
    handleColorPickerGradientTrackPointerup(event) {
        this.updateRgba(event);

        document.documentElement.classList.remove("md-gesture--unselectable");

        window.removeEventListener("pointermove", this.handleColorPickerGradientTrackPointermove);
        window.removeEventListener("pointerup", this.handleColorPickerGradientTrackPointerup);

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerGradientTrackPointerup", event);
    }

    /**
     * Handles input events on the hue range input in the color picker.
     * @param {InputEvent} event - Input event object.
     * @fires MDColorPickerComponent#onColorPickerSelection
     * @fires MDColorPickerComponent#onColorPickerHueNativeInput
     */
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

    /**
     * Handles input events on the opacity range input in the color picker.
     * @param {InputEvent} event - Input event object.
     * @fires MDColorPickerComponent#onColorPickerSelection
     * @fires MDColorPickerComponent#onColorPickerOpacityNativeInput
     */
    handleColorPickerOpacityNativeInput(event) {
        const alpha = parseFloat(event.currentTarget.value);

        this.selection.alpha = alpha;

        this.selection.hex = rgbaToHex(this.selection.red, this.selection.green, this.selection.blue, this.selection.alpha);

        this.requestUpdate();

        this.emit("onColorPickerSelection", event);
        this.emit("onColorPickerOpacityNativeInput", event);
    }

    /**
     * Displays the datetime-picker relative to the provided button element with specified options.
     * @param {HTMLElement} button - The button or element to which the datetime-picker is anchored.
     * @param {Object} options - Additional options for configuring the datetime-picker's behavior.
     * @param {Array.<String>} [options.placements=["below", "above", "after", "before", "north-east", "south-east", "south-west", "north-west"]] - List of possible placements for the datetime-picker relative to the button.
     * @param {Number} [options.offset=8] - Offset value in pixels for adjusting the datetime-picker's position.
     */
    show(button, options) {
        this.showModal();

        this.popper.setPlacement(button, {
            placements: ["top-start", "top-end", "top", "below-start", "below-end", "below", "bottom-start", "bottom-end", "bottom", "above-start", "above-end", "above", "left-start", "left-end", "left", "after-start", "after-end", "after", "right-start", "right-end", "right", "before-start", "before-end", "before", "center"],
            ...options,
        });
    }
}

customElements.define("md-color-picker", MDColorPickerComponent);

export { MDColorPickerComponent };
