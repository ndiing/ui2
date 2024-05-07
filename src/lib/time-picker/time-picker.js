import { MDElement } from "../element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { classMap } from "lit/directives/class-map.js";

class MDTimePicker extends MDElement {
    static get properties() {
        return {
            value: { type: Date },
            index: { type: Number },
        };
    }

    get hours() {
        return Array.from({ length: 24 }, (v, k) => {
            const date = new Date();
            date.setHours(k);
            const hour = date.getHours();
            return {
                activated: hour === this.current.getHours(),
                selected: hour === this.value.getHours(),
                label: this.hourDTF.format(date),
                hour,
                hour12: k < 12,
            };
        });
    }
    get minutes() {
        return Array.from({ length: 60 }, (v, k) => {
            const date = new Date();
            date.setMinutes(k);
            let label = "";
            if (k % 5 === 0) {
                label = this.minuteDTF.format(date);
            }
            const hour = date.getHours();
            const minute = date.getMinutes();
            return {
                activated:
                    // hour===this.current.getHours()&&
                    minute === this.current.getMinutes(),
                selected:
                    // hour===this.value.getHours()&&
                    minute === this.value.getMinutes(),
                label,
                hour,
                minute,
            };
        });
    }

    get label() {
        return this.labelDTF.format(this.selected);
    }

    constructor() {
        super();

        this.hourDTF = new Intl.DateTimeFormat("id-ID", { hour: "2-digit" });
        this.minuteDTF = new Intl.DateTimeFormat("id-ID", { minute: "2-digit" });
        this.labelDTF = new Intl.DateTimeFormat("id-ID", { hour: "2-digit", minute: "2-digit" });

        this.current = new Date();
        this.selected = new Date();
        this.value = new Date();
        this.index = 0;

        // console.log(this.hours)
        // console.log(this.minutes)
    }

    render() {
        // prettier-ignore
        return html`
            <div class="md-time-picker__header">
                <div class="md-time-picker__label" @click="${this.handleTimePickerLabelClick}">${this.label}</div>
                <div class="md-time-picker__actions">
                    <md-icon-button class="md-time-picker__action" icon="navigate_before" @click="${this.handleTimePickerActionBeforeClick}"></md-icon-button>
                    <md-icon-button class="md-time-picker__action" icon="navigate_next" @click="${this.handleTimePickerActionNextClick}"></md-icon-button>
                </div>
            </div>
            <div class="md-time-picker__body">
                <div class="md-time-picker__inner">

                    <div class="md-time-picker__card">
                        <div class="md-time-picker__card-item">

                            <div 
                                class="md-time-picker__column"
                                style="transform: rotate(${360/12*3}deg)"
                            >
                                ${this.hours.map((data,index)=>html`
                                    <div 
                                        class="${classMap({
                                            'md-time-picker__column-item':true,
                                            'md-time-picker__column-item--selected':data.selected,
                                            'md-time-picker__column-item--hour24':!data.hour12,
                                        })}"
                                        style="transform: rotate(${360/12*index}deg)"
                                    >
                                        <div 
                                            class="${classMap({
                                                'md-time-picker__column-label':true,
                                                'md-time-picker__column-label--activated':data.activated,
                                                'md-time-picker__column-label--selected':data.selected,
                                            })}"
                                            style="transform: rotate(${360/12*(-3-index)}deg)"
                                            .data="${data}"
                                            @click="${this.handleTimePickerItemHourClick}"
                                        >${data.label}</div>
                                    </div>
                                `)}
                            </div>
                        </div>
                        <div class="md-time-picker__card-item">
                            
                            <div 
                                class="md-time-picker__column"
                                style="transform: rotate(${360/60*15}deg)"
                            >
                                ${this.minutes.map((data,index)=>html`
                                    <div 
                                        class="${classMap({
                                            'md-time-picker__column-item':true,
                                            'md-time-picker__column-item--selected':data.selected,
                                        })}"
                                        style="transform: rotate(${360/60*index}deg)"
                                    >
                                        <div 
                                            class="${classMap({
                                                'md-time-picker__column-label':true,
                                                'md-time-picker__column-label--activated':data.activated,
                                                'md-time-picker__column-label--selected':data.selected,
                                            })}"
                                            style="transform: rotate(${360/60*(-15-index)}deg)"
                                            .data="${data}"
                                            @click="${this.handleTimePickerItemMinuteClick}"
                                        >${data.label}</div>
                                    </div>
                                `)}
                            </div>
                        </div>
                    </div>


                </div>
                <div class="md-time-picker__footer">
                    <md-button class="md-time-picker__button" label="Clear" @click="${this.handleTimePickerButtonClearClick}"></md-button>
                    <md-button class="md-time-picker__button" label="Now" @click="${this.handleTimePickerButtonNowClick}"></md-button>
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
        if (changedProperties.has("value")) {
            await this.updateComplete;
            this.selected = this.value;
            this.requestUpdate();
        }
    }

    updated(changedProperties) {
        if (changedProperties.has("index")) {
            this.style.setProperty("--md-time-picker-index", this.index);
        }
    }

    handleTimePickerLabelClick(event) {
        if (this.index === 0) {
            this.index = 1;
        } else if (this.index === 1) {
            this.index = 0;
        }
        this.emit("onTimePickerLabelClick", event);
    }
    handleTimePickerActionBeforeClick(event) {
        if (this.index === 0) {
            this.selected.setHours(this.selected.getHours() - 1);
        } else if (this.index === 1) {
            this.selected.setMinutes(this.selected.getMinutes() - 1);
        }
        this.requestUpdate();
        this.emit("onTimePickerActionBeforeClick", event);
    }
    handleTimePickerActionNextClick(event) {
        if (this.index === 0) {
            this.selected.setHours(this.selected.getHours() + 1);
        } else if (this.index === 1) {
            this.selected.setMinutes(this.selected.getMinutes() + 1);
        }
        this.requestUpdate();
        this.emit("onTimePickerActionNextClick", event);
    }
    handleTimePickerItemHourClick(event) {
        this.index = 1;
        const data = event.currentTarget.data;
        this.selected.setHours(data.hour);
        this.requestUpdate();
        this.emit("onTimePickerItemHourClick", event);
    }
    handleTimePickerItemMinuteClick(event) {
        this.index = 0;
        const data = event.currentTarget.data;
        this.selected.setMinutes(data.minute);
        this.value.setHours(this.selected.getHours());
        this.value.setMinutes(this.selected.getMinutes());
        this.requestUpdate();
        this.emit("onTimePickerItemMinuteClick", event);
    }
    handleTimePickerButtonClearClick(event) {
        this.index = 0;
        const date=new Date()
        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());
        this.value.setHours(date.getHours());
        this.value.setMinutes(date.getMinutes());
        this.requestUpdate();
        this.emit("onTimePickerButtonClearClick", event);
    }
    handleTimePickerButtonNowClick(event) {
        this.index = 0;
        const date=new Date()
        this.selected.setHours(date.getHours());
        this.selected.setMinutes(date.getMinutes());
        this.value.setHours(date.getHours());
        this.value.setMinutes(date.getMinutes());
        this.requestUpdate();
        this.emit("onTimePickerButtonNowClick", event);
    }
}

customElements.define("md-time-picker", MDTimePicker);

export { MDTimePicker };
