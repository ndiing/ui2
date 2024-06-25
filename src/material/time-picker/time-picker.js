import { parseTime, stringifyTime, stringifyYear } from "../functions/functions.js";
import { MDDatetimePickerComponent } from "../datetime-picker/datetime-picker.js";
import { html } from "lit";

class MDTimePickerComponent extends MDDatetimePickerComponent {
    /**
     * Getter for body content.
     * @returns {TemplateResult[]} Array containing the body HTML.
     */
    get body() {
        /* prettier-ignore */
        return [html`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderHour()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMinute()}</div>
            </div>
        `];
    }

    /**
     * Setter for body content.
     * @param {TemplateResult[]} value - HTML template to set as body.
     */
    set body(value) {
        this._body = value;
    }

    /**
     * Getter for leading actions.
     * @returns {Object[]} Array of leading action objects.
     */
    get leadingActions() {
        let label;
        if (this.index == 0) {
            label = stringifyTime(this.selection);
        } else if (this.index == 1) {
            label = stringifyTime(this.selection);
        }
        return [{ icon: "arrow_drop_down", variant: "icon-right", name: "label", component: "button", label }];
    }

    constructor() {
        super();
        this.index = 0;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-time-picker");
    }

    /**
     * Converts the value to Date object.
     */
    updateDate() {
        const date = parseTime(this.value);

        this.selection.setHours(date.getHours());
        this.selection.setMinutes(date.getMinutes());

        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());
    }

    /**
     * Handles click on previous icon button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onTimePickerSelection
     * @fires MDDatetimePickerComponent#onTimePickerIconButtonPrevClick
     */
    handleCardIconButtonPrevClick(event) {
        if (this.index == 0) {
            this.selection.setHours(this.selection.getHours() - 1);

            this.selected.setHours(this.selection.getHours());
        } else if (this.index == 1) {
            this.selection.setMinutes(this.selection.getMinutes() - 1);

            this.selected.setMinutes(this.selection.getMinutes());
        }

        this.requestUpdate();

        this.emit("onTimePickerSelection", event);
        this.emit("onTimePickerIconButtonPrevClick", event);
    }

    /**
     * Handles click on next icon button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onTimePickerSelection
     * @fires MDDatetimePickerComponent#onTimePickerIconButtonNextClick
     */
    handleCardIconButtonNextClick(event) {
        if (this.index == 0) {
            this.selection.setHours(this.selection.getHours() + 1);

            this.selected.setHours(this.selection.getHours());
        } else if (this.index == 1) {
            this.selection.setMinutes(this.selection.getMinutes() + 1);

            this.selected.setMinutes(this.selection.getMinutes());
        }

        this.requestUpdate();

        this.emit("onTimePickerSelection", event);
        this.emit("onTimePickerIconButtonNextClick", event);
    }

    /**
     * Handles click on label button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onTimePickerButtonLabelClick
     */
    handleCardButtonLabelClick(event) {
        if (this.index == 0) {
            this.index = 1;
        } else if (this.index == 1) {
            this.index = 0;
        }

        this.emit("onTimePickerButtonLabelClick", event);
    }

    /**
     * Handles click on cancel button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onTimePickerSelection
     * @fires MDDatetimePickerComponent#onTimePickerButtonCancelClick
     */
    handleCardButtonCancelClick(event) {
        this.value = this.defaultValue;
        this.updateDate();
        this.requestUpdate();
        this.index = 0;

        this.emit("onTimePickerSelection", event);
        this.emit("onTimePickerButtonCancelClick", event);
    }

    /**
     * Handles click on OK button.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onTimePickerSelection
     * @fires MDDatetimePickerComponent#onTimePickerButtonOkClick
     */
    handleCardButtonOkClick(event) {
        this.selected.setMinutes(this.selection.getMinutes());

        this.value = this.getValue();
        this.requestUpdate();

        this.index = 0;

        this.emit("onTimePickerSelection", event);
        this.emit("onTimePickerButtonOkClick", event);
    }

    /**
     * Handles click on hour item in the hour selector.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onTimePickerSelection
     * @fires MDDatetimePickerComponent#onTimePickerHourItemClick
     */
    handleDatetimePickerHourItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setHours(data.hour);

        this.selection.setHours(data.hour);

        this.index = 1;

        this.emit("onTimePickerSelection", event);
        this.emit("onTimePickerHourItemClick", event);
    }

    /**
     * Handles click on minute item in the minute selector.
     * @param {Event} event - Click event.
     * @fires MDDatetimePickerComponent#onTimePickerSelection
     * @fires MDDatetimePickerComponent#onTimePickerMinuteItemClick
     */
    handleDatetimePickerMinuteItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setHours(data.hour);
        this.selected.setMinutes(data.minute);

        this.selection.setHours(data.hour);
        this.selection.setMinutes(data.minute);

        this.index = 0;

        this.emit("onTimePickerSelection", event);
        this.emit("onTimePickerMinuteItemClick", event);
    }

    /**
     * Converts the selected date to a string.
     * @returns {string} String representation of selected date.
     */
    getValue() {
        return stringifyTime(this.selected);
    }
}

customElements.define("md-time-picker", MDTimePickerComponent);

export { MDTimePickerComponent };
