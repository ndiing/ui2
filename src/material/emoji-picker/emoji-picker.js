import { html, nothing } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { hexToHsla, hslaToRgba, rgbaToHex, rgbaToHsla } from "../functions/functions.js";
import { MDPopperController } from "../popper/popper.js";
import { styleMap } from "lit/directives/style-map.js";
import { MDVirtualController } from "../virtual/virtual.js";
import data from "../../assets/emojis.map.json";
import { MDStore } from "../store/store.js";

/**
 * {{desc}}
 * @extends MDSheetComponent
 * @tagname md-emoji-picker
 * @fires MDEmojiPickerComponent#onEmojiPickerIconButtonClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerSelection - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerIconButtonPrevClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerSelection - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerIconButtonNextClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonLabelClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerSelection - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonCancelClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerSelection - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerButtonOkClick - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerSelection - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerGradientTrackPointerdown - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerSelection - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerGradientTrackPointermove - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerSelection - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerGradientTrackPointerup - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerSelection - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerHueNativeInput - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerSelection - {{desc}}
 * @fires MDEmojiPickerComponent#onEmojiPickerOpacityNativeInput - {{desc}}
 */
class MDEmojiPickerComponent extends MDSheetComponent {
    /**
     * @property {String} value - {{desc}}
     */
    static properties = {
        ...MDSheetComponent.properties,
        value: { type: String },
    };

    /**
     * {{desc}}
     */
    get body() {
        /* prettier-ignore */
        return [this.renderMain()];
    }

    /**
     * {{desc}}
     */
    set body(value) {
        this._body = value;
    }

    /**
     * {{desc}}
     */
    get leadingActions() {
        return [{ name: "label", component: "text-field", type: "search", icon: "search", placeholder: "Search", variant: "rounded" }];
    }

    /**
     * {{desc}}
     */
    get actions() {
        return [{ component: "spacer" }, { name: "cancel", label: "Cancel" }, { name: "ok", label: "Ok" }];
    }

    constructor() {
        super();

        this.selection = {};

        this.popper = new MDPopperController(this, {});

        this.store = new MDStore(data);
        this.storeResult = this.store.getAll();

        this.frequentlyUsed = [
            // {emoji:'😀',},
            // {emoji:'🤣',},
            // {emoji:'🥰',},
            // {emoji:'🥲',},
            // {emoji:'😏',},
            // {emoji:'🫶',},
            // {emoji:'👊',},
            // {emoji:'👋',},
            // {emoji:'✌️',},
            // {emoji:'🫵',},
        ];

        this.generateResult = this.generateTabsAndRows(this.frequentlyUsed.concat(this.storeResult.docs));
        this.dataTabs = this.generateResult.tabs;
        this.dataRows = this.generateResult.rows;

        this.virtual = new MDVirtualController(this, {
            viewportSelector: ".md-emoji-picker__viewport",
            scrollbarSelector: ".md-emoji-picker__scrollbar",
            containerSelector: ".md-emoji-picker__container",

            rowTotal: this.dataRows.length,
            rowHeight: 48,
            buffer: this.dataTabs.length,
        });
    }

    renderMain() {
        /* prettier-ignore */
        return html`
            <div class="md-emoji-picker__main">

                <div class="md-emoji-picker__tabs">
                    ${this.dataTabs.map(item=>html`
                        <div 
                            class="md-emoji-picker__tabs-item"
                            .data="${item}"
                            @click="${this.handleEmojiPickerTabsItemClick}"
                        >
                            <div class="md-emoji-picker__tabs-emoji md-emoji">${item.emoji}</div>
                        </div>
                    `)}
                </div>

                <div 
                    class="md-emoji-picker__viewport"
                    @onVirtualScroll="${this.handleEmojiPickerViewportVirtualScroll}"
                >
                    <div class="md-emoji-picker__scrollbar"></div>
                    <div class="md-emoji-picker__container">

                        <div class="md-emoji-picker__grid">
                            ${this.virtualRows?.map(row=>html`
                                <div 
                                    class="md-emoji-picker__grid-row"
                                    style="${styleMap({
                                        ...(!!row[0].label&&{
                                            "position":"sticky",
                                            "top":(0-this.virtual.translateY)+"px",
                                            "z-index":"1",
                                        })
                                    })}"
                                >
                                    ${row.map(item=>html`
                                        <div 
                                            class="md-emoji-picker__grid-column"
                                            .data="${item}"
                                            @click="${this.handleEmojiPickerGridColumnClick}"
                                        >
                                            ${item.label?html`<div class="md-emoji-picker__grid-label">${item.label}</div>`:nothing}
                                            ${item.emoji?html`<div class="md-emoji-picker__grid-emoji md-emoji">${item.emoji}</div>`:nothing}
                                        </div>
                                    `)}
                                </div>
                            `)}
                        </div>

                    </div>
                </div>

            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-card");
        this.classList.add("md-emoji-picker");

        this.defaultValue = this.value;

        await this.updateComplete;
        this.tabs = this.querySelector(".md-emoji-picker__tabs");
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("value") && changedProperties.get("value")) {
            if (this.value) {
            }
        }
    }

    handleEmojiPickerTabsItemClick(event) {
        const data = event.currentTarget.data;

        this.updateEmojiPickerTabsIndicator(data);

        this.virtual.viewport.scrollTop = data.rowIndex * 48 + data.index * 48;
    }

    updateEmojiPickerTabsIndicator(data) {
        const scrollWidth = 12 + 48 * 9 + 12;
        const left = 12 + data.index * 48 + 12;
        const right = scrollWidth - left - (scrollWidth - 360) - 24;

        this.tabs.scrollLeft = scrollWidth - 360 - right;
        const direction = this.selectedIndex > data.index ? "left" : "right";
        this.style.removeProperty("--md-comp-emoji-picker-tabs-indicator-transition-left");
        this.style.removeProperty("--md-comp-emoji-picker-tabs-indicator-transition-right");
        this.style.setProperty("--md-comp-emoji-picker-tabs-indicator-transition-" + direction, "0ms");
        this.selectedIndex = data.index;

        this.style.setProperty("--md-comp-emoji-picker-tabs-indicator-left", left + "px");
        this.style.setProperty("--md-comp-emoji-picker-tabs-indicator-right", right + "px");
    }

    handleEmojiPickerGridColumnClick(event) {
        const data = event.currentTarget.data;
    }

    handleEmojiPickerViewportVirtualScroll() {
        this.virtualRows = this.dataRows.filter((row, index) => {
            return (index >= this.virtual.rowStart && index < this.virtual.rowEnd) || row[0]?.label;
        });
        const data = this.dataTabs.find((item, index, array) => {
            const rowStart = this.virtual.rowStart + this.virtual.options.buffer;
            if (array[index + 1]) {
                return rowStart >= item.rowIndex && rowStart < array[index + 1].rowIndex;
            }
            return rowStart >= item.rowIndex;
        });
        if (this.selectedData !== data) {
            this.selectedData = data;

            this.updateEmojiPickerTabsIndicator(data);
        }
        this.requestUpdate();
        this.virtual.scrollbar.style.height = this.virtual.scrollbarHeight + "px";
        this.virtual.container.style.transform = `translate3d(0,${this.virtual.translateY}px,0)`;
    }

    generateTabsAndRows(data, emoji = { "Frequently Used": "🕛" }) {
        const groupedData = data.reduce((acc, { group = "Frequently Used", emoji }) => {
            if (!acc[group]) {
                acc[group] = [];
            }
            acc[group].push({ emoji, group });
            return acc;
        }, {});

        let rowIndex = 0;
        let index = 0;
        const tabs = [];
        const rows = [];

        Object.keys(groupedData).forEach((group) => {
            const emojis = groupedData[group];
            tabs.push({ label: group, emoji: emoji[group] || emojis[0].emoji, rowIndex, index });
            rows.push([{ label: group }]);
            rowIndex++;
            index++;
            for (let i = 0; i < emojis.length; i += 7) {
                rows.push(emojis.slice(i, i + 7));
                rowIndex++;
            }
        });

        return { tabs, rows };
    }

    handleCardIconButtonClick(event) {
        if (event.currentTarget.name == "prev") {
            this.handleCardIconButtonPrevClick(event);
        } else if (event.currentTarget.name == "next") {
            this.handleCardIconButtonNextClick(event);
        }
        this.emit("onEmojiPickerIconButtonClick", event);
    }

    handleCardButtonClick(event) {
        if (event.currentTarget.name == "label") {
            this.handleCardButtonLabelClick(event);
        } else if (event.currentTarget.name == "cancel") {
            this.handleCardButtonCancelClick(event);
        } else if (event.currentTarget.name == "ok") {
            this.handleCardButtonOkClick(event);
        }
        this.emit("onEmojiPickerButtonClick", event);
    }

    handleCardIconButtonPrevClick(event) {
        this.emit("onEmojiPickerSelection", event);
        this.emit("onEmojiPickerIconButtonPrevClick", event);
    }

    handleCardIconButtonNextClick(event) {
        this.emit("onEmojiPickerSelection", event);
        this.emit("onEmojiPickerIconButtonNextClick", event);
    }

    handleCardButtonLabelClick(event) {
        this.emit("onEmojiPickerButtonLabelClick", event);
    }

    handleCardButtonCancelClick(event) {
        this.emit("onEmojiPickerSelection", event);
        this.emit("onEmojiPickerButtonCancelClick", event);
    }

    handleCardButtonOkClick(event) {
        this.emit("onEmojiPickerSelection", event);
        this.emit("onEmojiPickerButtonOkClick", event);
    }

    /**
     * {{desc}}
     */
    showModal(button, options) {
        super.showModal();

        this.setPlacement(button, options);
    }

    /**
     * {{desc}}
     */
    show(button, options) {
        super.show();

        this.setPlacement(button, options);
    }

    /**
     * {{desc}}
     */
    setPlacement(button, options) {
        this.popper.setPlacement(button, {
            placements: ["top-start", "top-end", "top", "below-start", "below-end", "below", "bottom-start", "bottom-end", "bottom", "above-start", "above-end", "above", "left-start", "left-end", "left", "after-start", "after-end", "after", "right-start", "right-end", "right", "before-start", "before-end", "before", "center"],
            ...options,
        });
    }
}

customElements.define("md-emoji-picker", MDEmojiPickerComponent);

export { MDEmojiPickerComponent };
