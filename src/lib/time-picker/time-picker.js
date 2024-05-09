import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

class MDTimePicker extends MDElement {
    static get properties() {
        return {
            value: {
                type: Date,
                converter(value) {
                    return new Date(value);
                },
            },
            index: { type: Number },
        };
    }

    get hours() {
        return Array.from({ length: 24 }, (v, k) => {
            let x;
            let y;
            let h = (k + 3) % 12;

            if (k < 12) {
                x = 128 * Math.cos((k / 12) * 2 * Math.PI) + 132;
                y = 128 * Math.sin((k / 12) * 2 * Math.PI) + 132;
            } else {
                h = h + 12;
                x = 84 * Math.cos(((k % 12) / 12) * 2 * Math.PI) + 132;
                y = 84 * Math.sin(((k % 12) / 12) * 2 * Math.PI) + 132;
            }

            const date = new Date(0, 0, 1, h, 0);
            const hour = date.getHours();

            return {
                x,
                y,
                activated: hour == this.current.getHours(),
                selected: hour == this.value.getHours(),
                disabled: false,
                label: this.hourDTF.format(date),
                hour,
            };
        });
    }
    get minutes() {
        return Array.from({ length: 60 }, (v, k) => {
            const x = 128 * Math.cos((k / 60) * 2 * Math.PI) + 132;
            const y = 128 * Math.sin((k / 60) * 2 * Math.PI) + 132;

            const date = new Date(0, 0, 1, 0, (k + 15) % 60);
            const minute = date.getMinutes();

            let label;
            if (k % 5 == 0) {
                label = this.minuteDTF.format(date);
            }

            return {
                x,
                y,
                activated: minute == this.current.getMinutes(),
                selected: minute == this.value.getMinutes(),
                disabled: false,
                label,
                minute,
            };
        });
    }

    get label() {
        return this.labelDTF.format(this.selected);
    }

    constructor() {
        super();

        const locales = "id-ID";

        this.hourDTF = new Intl.DateTimeFormat(locales, { hour: "numeric" });
        this.minuteDTF = new Intl.DateTimeFormat(locales, { minute: "numeric" });
        this.labelDTF = new Intl.DateTimeFormat(locales, { hour: "2-digit", minute: "2-digit", hour12: false });

        this.current = new Date();
        this.value = new Date();
        this.selected = new Date();

        this.index = 0;

        console.log(this.hours, this.minutes);
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-time-picker__header">
                <md-button @click="${this.handleTimePickerLabelClick}" class="md-time-picker__label" .label="${this.label}"></md-button>
                <div class="md-time-picker__actions">
                    <md-icon-button @click="${this.handleTimePickerActionBeforeClick}" class="md-time-picker__action" icon="navigate_before"></md-icon-button>
                    <md-icon-button @click="${this.handleTimePickerActionNextClick}" class="md-time-picker__action" icon="navigate_next"></md-icon-button>
                </div>
            </div>
            <div class="md-time-picker__body">
                <div class="md-time-picker__inner">

                    <div class="md-time-picker__card">
                        <div class="md-time-picker__card-item">
                            <div class="md-time-picker__inner">

                                <div class="md-time-picker__absolute">
                                    ${this.hours.map(item=>html`
                                        <div 
                                            .data="${item}"
                                            @click="${this.handleTimePickerAbsoluteItemHourClick}"
                                            class="${classMap({
                                                'md-time-picker__absolute-item':true,
                                                'md-time-picker__absolute-item--activated':item.activated,
                                                'md-time-picker__absolute-item--selected':item.selected,
                                                'md-time-picker__absolute-item--disalbed':item.disalbed,
                                            })}"
                                            style="${styleMap({
                                                left:item.x+'px',
                                                top:item.y+'px',
                                            })}"
                                        >${item.label}</div>
                                    `)}
                                </div>

                            </div>
                        </div>
                        <div class="md-time-picker__card-item">
                            <div class="md-time-picker__inner">

                                <div class="md-time-picker__absolute">
                                    ${this.minutes.map(item=>html`
                                        <div 
                                            .data="${item}"
                                            @click="${this.handleTimePickerAbsoluteItemMinuteClick}"
                                            class="${classMap({
                                                'md-time-picker__absolute-item':true,
                                                'md-time-picker__absolute-item--activated':item.activated,
                                                'md-time-picker__absolute-item--selected':item.selected,
                                                'md-time-picker__absolute-item--disalbed':item.disalbed,
                                            })}"
                                            style="${styleMap({
                                                left:item.x+'px',
                                                top:item.y+'px',
                                            })}"
                                        >${item.label}</div>
                                    `)}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div class="md-time-picker__footer">
                    <md-button @click="${this.handleTimePickerButtonCancelClick}" class="md-time-picker__button" label="Cancel"></md-button>
                    <md-button @click="${this.handleTimePickerButtonOkClick}" class="md-time-picker__button" label="Ok"></md-button>
                </div>
            </div>
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-time-picker");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-time-picker");
    }

    async firstUpdated(changedProperties) {
        await this.updateComplete;

        this.selected.setHours(this.value.getHours());
        this.selected.setMinutes(this.value.getMinutes());

        this.requestUpdate();
    }

    updated(changedProperties) {
        this.style.setProperty("--md-time-picker-index", this.index);
    }

    handleTimePickerLabelClick(event) {
        if (this.index == 0) {
            this.index = 1;
        } else if (this.index == 1) {
            this.index = 0;
        }
        this.emit("onTimePickerLabelClick", event);
    }

    handleTimePickerActionBeforeClick(event) {
        if (this.index == 1) {
            this.selected.setMinutes(this.selected.getMinutes() - 1);
        } else if (this.index == 0) {
            this.selected.setHours(this.selected.getHours() - 1);
        }

        this.requestUpdate();

        this.emit("onTimePickerActionBeforeClick", event);
    }
    handleTimePickerActionNextClick(event) {
        if (this.index == 1) {
            this.selected.setMinutes(this.selected.getMinutes() + 1);
        } else if (this.index == 0) {
            this.selected.setHours(this.selected.getHours() + 1);
        }

        this.requestUpdate();

        this.emit("onTimePickerActionNextClick", event);
    }

    handleTimePickerButtonCancelClick(event) {
        const date = new Date()

        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());

        this.value.setHours(date.getHours());
        this.value.setMinutes(date.getMinutes());

        this.requestUpdate();

        this.emit("onTimePickerButtonCancelClick", event);
    }
    handleTimePickerButtonOkClick(event) {
        this.value.setHours(this.selected.getHours());
        this.value.setMinutes(this.selected.getMinutes());

        this.requestUpdate();

        this.emit("onTimePickerButtonOkClick", event);
    }

    handleTimePickerAbsoluteItemHourClick(event){
        const data = event.currentTarget.data

        this.selected.setHours(data.hour)

        this.index=1

        this.requestUpdate()

        this.emit('onTimePickerAbsoluteItemHourClick',event)
    }
    handleTimePickerAbsoluteItemMinuteClick(event){
        const data = event.currentTarget.data

        this.selected.setMinutes(data.minute)

        this.index=0

        this.value.setHours(this.selected.getHours())
        this.value.setMinutes(this.selected.getMinutes())

        this.requestUpdate()

        this.emit('onTimePickerAbsoluteItemMinuteClick',event)
    }
}

customElements.define("md-time-picker", MDTimePicker);

export { MDTimePicker };
