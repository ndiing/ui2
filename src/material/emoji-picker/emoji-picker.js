import { html, nothing } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDPopperController } from "../popper/popper.js";
import data from "../../assets/emojis.json";
import { MDStore } from "../store/store.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { styleMap } from "lit/directives/style-map.js";

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
        frequentlyUsed: { type: Array },
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
        return [{ name: "label", component: "text-field", type: "search", placeholder: "Search", icon: "search", variant: "rounded" }];
    }

    /**
     * {{desc}}
     */
    get actions() {
        return [{ component: "spacer" }, { name: "cancel", label: "Cancel" }, { name: "ok", label: "Ok" }];
    }

    get tabs() {
        return this.querySelector(".md-emoji-picker__tabs");
    }

    constructor() {
        super();

        this.selection = {};

        this.popper = new MDPopperController(this, {});

        this.tabEmojis = {
            "Frequently Used": "🕛",
            "Smileys and emotions": "😀",
            People: "🙇",
            "Animals and nature": "💐",
            "Food and drink": "🍓",
            "Travel and places": "🛑",
            "Activities and events": "🎉",
            Objects: "📱",
            Symbols: "🔴",
            Flags: "🏁",
        };

        this.frequentlyUsed = [
            // //
            // { emoji: "😑" },
            // { emoji: "🥱" },
            // { emoji: "🫣" },
            // { emoji: "🧐" },
            // { emoji: "😵" },
            // { emoji: "😩" },
            // { emoji: "😆" },
            // { emoji: "🤪" },
            // { emoji: "😁" },
            // { emoji: "😔" },
            // { emoji: "😤" },
            // { emoji: "😮‍💨" },
            // { emoji: "🥳" },
        ];
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
                                        ...(!!row[0]?.label&&{
                                            position: "sticky",
                                            top: (0-this.virtual.translateY)+"px",
                                            "z-index": "1",
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

        this.on("onTextFieldNativeInput", this.handleEmojiPickerTextFieldNativeInput);

        this.store = new MDStore(data);
        const { docs } = this.store.getAll();

        const { dataTabs, dataRows } = this.createTabsAndRows(this.frequentlyUsed.concat(docs), this.tabEmojis);
        this.dataTabs = dataTabs;
        this.dataRows = dataRows;

        this.virtual = new MDVirtualController(this, {
            viewportSelector: ".md-emoji-picker__viewport",
            scrollbarSelector: ".md-emoji-picker__scrollbar",
            containerSelector: ".md-emoji-picker__container",

            rowTotal: this.dataRows.length,
            rowHeight: 48,
            buffer: this.dataTabs.length,
        });
    }

    async disconnectedCallback() {
        super.disconnectedCallback();

        this.off("onTextFieldNativeInput", this.handleEmojiPickerTextFieldNativeInput);
    }

    handleEmojiPickerTextFieldNativeInput(event) {
        const value = event.detail.currentTarget.value;

        const { docs } = this.store.getAll({
            shortcodes_like: value,
        });

        const { dataTabs, dataRows } = this.createTabsAndRows(value ? docs : this.frequentlyUsed.concat(docs), this.tabEmojis);
        this.dataTabs = dataTabs;
        this.dataRows = dataRows;

        this.virtual.options.buffer = this.dataTabs.length;
        this.virtual.options.rowTotal = this.dataRows.length;

        this.virtual.handleVirtualScroll();
        this.emit("onEmojiPickerTextFieldNativeInput", event);
    }

    handleEmojiPickerTabsItemClick(event) {
        const data = event.currentTarget.data;

        this.virtual.viewport.scrollTop = data.rowIndex * 48 + data.index * 48;

        this.updateEmojiPickerTabsScrollLeftAndIndicator(data);
        this.emit("onEmojiPickerTabsItemClick", event);
    }

    updateEmojiPickerTabsScrollLeftAndIndicator(data) {
        if (!data) {
            return;
        }
        const left = 12 + 12 + data.index * 48;
        const scrollWidth = 12 + this.dataTabs.length * 48 + 12;
        const clientWidth = 360;
        const right = scrollWidth - left - (scrollWidth - clientWidth) - 24;

        this.tabs.scrollLeft = scrollWidth - clientWidth - right + 24;

        this.style.setProperty("--md-comp-emoji-picker-tabs-indicator-left", left + "px");
        this.style.setProperty("--md-comp-emoji-picker-tabs-indicator-right", right + "px");
    }

    handleEmojiPickerViewportVirtualScroll(event) {
        this.virtualRows = this.dataRows.filter((row, index) => {
            return (index >= this.virtual.rowStart && index < this.virtual.rowEnd) || !!row[0]?.label;
        });
        this.requestUpdate();
        const scrollTop = Math.floor(this.virtual.viewport.scrollTop / this.virtual.options.rowHeight);
        const data = this.dataTabs.find((item, index, array) => {
            if (array[index + 1]) {
                return scrollTop >= item.rowIndex && scrollTop < array[index + 1].rowIndex;
            }
            return scrollTop >= item.rowIndex;
        });
        if (this.data !== data) {
            this.data = data;
            this.updateEmojiPickerTabsScrollLeftAndIndicator(data);
        }
        this.virtual.scrollbar.style.height = this.virtual.scrollbarHeight + "px";
        this.virtual.container.style.transform = `translate3d(0,${this.virtual.translateY}px,0)`;
        this.emit("onEmojiPickerViewportVirtualScroll", event);
    }

    handleEmojiPickerGridColumnClick(event) {
        this.emit("onEmojiPickerGridColumnClick", event);
    }

    createTabsAndRows(data, tabEmojis) {
        const grouped = data.reduce((acc, curr) => {
            const { group = "Frequently Used", emoji } = curr;
            if (!acc[group]) {
                acc[group] = [];
            }
            acc[group].push({ emoji });
            return acc;
        }, {});
        const dataRows = [];
        const dataTabs = [];
        let rowIndex = 0;
        let index = 0;
        for (const name in grouped) {
            const value = grouped[name];
            dataRows.push([{ label: name }]);
            dataTabs.push({ label: name, emoji: tabEmojis[name] || value[0].emoji, rowIndex, index });
            ++rowIndex;
            ++index;
            for (let i = 0; i < value.length; i += 7) {
                dataRows.push(value.slice(i, i + 7));
                ++rowIndex;
            }
        }
        return { dataTabs, dataRows };
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
