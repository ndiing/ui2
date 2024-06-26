import { html, nothing } from "lit";
import { MDComponent } from "../component/component.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDRippleController } from "../ripple/ripple.js";
import { MDGestureController } from "../gesture/gesture.js";

/**
 * @extends MDComponent
 * @tagname md-list
 * @fires MDListComponent#onListItemClick -
 * @fires MDListComponent#handleListKeydown -
 * @fires MDListComponent#onListItemSelectionStart -
 * @fires MDListComponent#onListItemSelection -
 * @fires MDListComponent#onListItemSelectionEnd -
 * @fires MDListComponent#onListItemCheckboxNativeInput -
 * @fires MDListComponent#onListItemRadioButtonNativeInput -
 * @fires MDListComponent#onListItemSwitchNativeInput -
 */
class MDListComponent extends MDComponent {
    /**
     * @property {Array} list -
     * @property {Boolean} selection -
     * @property {Boolean} rangeSelection -
     * @property {Boolean} multiSelection -
     * @property {Boolean} singleSelection -
     * @property {Boolean} allSelection -
     */
    static properties = {
        list: { type: Array },

        selection: { type: Boolean },
        rangeSelection: { type: Boolean },
        multiSelection: { type: Boolean },
        singleSelection: { type: Boolean },
        allSelection: { type: Boolean },
    };

    constructor() {
        super();
    }

    renderListItem(item) {
        /* prettier-ignore */
        return html`
            <md-list-item
                .data="${item}"
                .avatar="${ifDefined(item.avatar)}"
                .thumbnail="${ifDefined(item.thumbnail)}"
                .video="${ifDefined(item.video)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .subLabel="${ifDefined(item.subLabel)}"
                .badge="${ifDefined(item.badge)}"
                .text="${ifDefined(item.text)}"
                .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                .selected="${ifDefined(item.selected)}"
                .routerLink="${ifDefined(item.routerLink)}"
                @click="${this.handleListItemClick}"
                @onCheckboxNativeInput="${this.handleListItemCheckboxNativeInput}"
                @onRadioButtonNativeInput="${this.handleListItemRadioButtonNativeInput}"
                @onSwitchNativeInput="${this.handleListItemSwitchNativeInput}"
                @onSelectionStart="${this.handleListItemSelectionStart}"
                @onSelection="${this.handleListItemSelection}"
                @onSelectionEnd="${this.handleListItemSelectionEnd}"
            ></md-list-item>
        `
    }

    render() {
        /* prettier-ignore */
        return this.list?.map(item=>this.renderListItem(item))
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-list");

        this.on("keydown", this.handleListKeydown);
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.off("keydown", this.handleListKeydown);
    }

    /**
     *
     */
    select(data) {
        for (let i = 0; i < this.list.length; i++) {
            let item = this.list[i];
            item.selected = item === data;
        }
        this.endIndex = this.list.indexOf(data);
    }

    /**
     *
     */
    multiSelect(data) {
        data.selected = !data.selected;

        if (this.selectionMode && this.list.findIndex((item) => item.selected) == -1) {
            this.selectionMode = false;
        }
    }

    /**
     *
     */
    selectRange(data) {
        this.endIndex = this.endIndex || 0;
        this.startIndex = this.list.indexOf(data);
        this.swapIndex = this.startIndex > this.endIndex;

        if (this.swapIndex) {
            [this.endIndex, this.startIndex] = [this.startIndex, this.endIndex];
        }

        for (let i = 0; i < this.list.length; i++) {
            let item = this.list[i];
            item.selected = i >= this.startIndex && i <= this.endIndex;
        }

        if (this.swapIndex) {
            [this.startIndex, this.endIndex] = [this.endIndex, this.startIndex];
        }
    }

    /**
     *
     */
    selectAll() {
        for (let i = 0; i < this.list.length; i++) {
            let item = this.list[i];
            item.selected = true;
        }
    }

    handleListItemClick(event) {
        if (event.target.closest(".md-list__checkbox," + ".md-list__radio-button," + ".md-list__switch")) {
            return;
        }

        const data = event.currentTarget.data;

        if (this.rangeSelection && event.shiftKey) {
            this.selectRange(data);
        } else if ((this.multiSelection && event.ctrlKey) || this.selectionMode) {
            this.multiSelect(data);
        } else if (this.singleSelection) {
            this.select(data);
        }

        this.requestUpdate();

        this.emit("onListItemClick", event);
    }

    handleListKeydown(event) {
        if (this.allSelection && event.ctrlKey && event.key == "a") {
            this.selectAll();

            this.requestUpdate();
        }

        this.emit("handleListKeydown", event);
    }

    handleListItemSelectionStart(event) {
        if (!this.selection) {
            return;
        }
        const data = event.currentTarget.data;

        this.select(data);

        this.requestUpdate();

        this.emit("onListItemSelectionStart", event);
    }

    handleListItemSelection(event) {
        if (!this.selection) {
            return;
        }
        const data = event.detail.target.closest(".md-list__item")?.data;
        if (data && this.data !== data) {
            this.data = data;
            this.selectRange(data);
            this.requestUpdate();
        }

        this.emit("onListItemSelection", event);
    }

    async handleListItemSelectionEnd(event) {
        if (!this.selection) {
            return;
        }
        const data = event.currentTarget.data;

        window.requestAnimationFrame(() => {
            this.selectionMode = true;
        });

        this.emit("onListItemSelectionEnd", event);
    }

    handleListItemCheckboxNativeInput(event) {
        const data = event.currentTarget.data;

        this.multiSelect(data);
        this.requestUpdate();

        this.emit("onListItemCheckboxNativeInput", event);
    }

    handleListItemRadioButtonNativeInput(event) {
        const data = event.currentTarget.data;

        this.select(data);
        this.requestUpdate();

        this.emit("onListItemRadioButtonNativeInput", event);
    }

    handleListItemSwitchNativeInput(event) {
        const data = event.currentTarget.data;

        this.multiSelect(data);
        this.requestUpdate();

        this.emit("onListItemSwitchNativeInput", event);
    }
}

customElements.define("md-list", MDListComponent);

export { MDListComponent };
