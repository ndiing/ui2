import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppChipsElement extends MDElement {
    constructor() {
        super();

        this.list1 = [
            { icon: "image", label: "Label 1" },
            { icon: "image", label: "Label 2" },
            { icon: "image", label: "Label 3" },
            { icon: "image", label: "Label 4" },
            { icon: "image", label: "Label 5" },
            {
                avatar: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Label 6",
            },
            {
                avatar: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Label 7",
            },
            {
                avatar: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Label 8",
            },
            {
                avatar: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Label 9",
            },
            {
                avatar: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Label 10",
            },
        ];

        this.list2 = [{ label: "Label 1", selected: true }, { label: "Label 2", selected: true }, { label: "Label 3", selected: true }, { label: "Label 4", selected: true }, { label: "Label 5", selected: true }, { label: "Label 6" }, { label: "Label 7" }, { label: "Label 8" }, { label: "Label 9" }, { label: "Label 10" }];

        this.list3 = [
            { label: "Label 1", action: "close" },
            { label: "Label 2", action: "close" },
            { label: "Label 3", action: "close" },
            { label: "Label 4", action: "close" },
            { label: "Label 5", action: "close" },
            { label: "Label 6", action: "close" },
            { label: "Label 7", action: "close" },
            { label: "Label 8", action: "close" },
            { label: "Label 9", action: "close" },
            { label: "Label 10", action: "close" },
        ];

        this.list4 = [{ label: "Label 1" }, { label: "Label 2" }, { label: "Label 3" }, { label: "Label 4" }, { label: "Label 5" }, { label: "Label 6" }, { label: "Label 7" }, { label: "Label 8" }, { label: "Label 9" }, { label: "Label 10" }];

        this.list5 = [
            { label: "Label 1", action: "close" },
            { label: "Label 2", action: "close" },
            { label: "Label 3", action: "close" },
            { label: "Label 4", action: "close" },
            { label: "Label 5", action: "close" },
            { label: "Label 6", action: "close" },
            { label: "Label 7", action: "close" },
            { label: "Label 8", action: "close" },
            { label: "Label 9", action: "close" },
            { label: "Label 10", action: "close" },
        ];
    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-chips
                        .list="${this.list1}"
                    ></md-chips>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-chips
                        .list="${this.list2}"
                        .rangeSelection="${true}"
                        .multiSelection="${true}"
                        .singleSelection="${true}"
                        .allSelection="${true}"
                    ></md-chips>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-chips
                        .list="${this.list3}"
                        @onChipActionClick="${(event) => {
                            event.detail.remove()
                        }}"
                    ></md-chips>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-chips
                        .list="${this.list4}"
                    ></md-chips>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-chips
                        ui="scrollable"
                        .list="${this.list3}"
                        @onChipActionClick="${(event) => {
                            event.detail.remove()
                        }}"
                    ></md-chips>
                </div>
            </div>
        `
    }
}

customElements.define("app-chips", AppChipsElement);

export default document.createElement("app-chips");
