import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppTabsElement extends MDElement {
    constructor() {
        super();

        this.list1 = [
            { leadingIcon: "image", label: "Label 1", selected: true },
            { leadingIcon: "image", label: "Label 2" },
            { leadingIcon: "image", label: "Label 3" },
        ];
        this.list2 = [{ label: "Label 1", selected: true }, { label: "Label 2" }, { label: "Label 3" }];

        this.list3 = [
            { leadingIcon: "image", label: "Label 1", selected: true },
            { leadingIcon: "image", label: "Label 2" },
            { leadingIcon: "image", label: "Label 3" },
        ];
        this.list4 = [{ label: "Label 1", selected: true }, { label: "Label 2" }, { label: "Label 3" }];

        this.list5 = [
            { leadingIcon: "image", label: "Label 1", selected: true },
            { leadingIcon: "image", label: "Label 2", badge: { label: 0 } },
            { leadingIcon: "image", label: "Label 3", badge: { label: 1 } },
            { leadingIcon: "image", label: "Label 4", badge: { label: 1000 } },
            { leadingIcon: "image", label: "Label 5" },
            { leadingIcon: "image", label: "Label 6" },
            { leadingIcon: "image", label: "Label 7" },
            { leadingIcon: "image", label: "Label 8" },
            { leadingIcon: "image", label: "Label 9" },
            { leadingIcon: "image", label: "Label 10" },
            { leadingIcon: "image", label: "Label 11" },
            { leadingIcon: "image", label: "Label 12" },
        ];
        this.list6 = [{ label: "Label 1", selected: true }, { label: "Label 2", badge: { label: 0 } }, { label: "Label 3", badge: { label: 1 } }, { label: "Label 4", badge: { label: 1000 } }, { label: "Label 5" }, { label: "Label 6" }, { label: "Label 7" }, { label: "Label 8" }, { label: "Label 9" }, { label: "Label 10" }, { label: "Label 11" }, { label: "Label 12" }];

        this.list7 = [
            { leadingIcon: "image", label: "Label 1", selected: true },
            { leadingIcon: "image", label: "Label 2", badge: { label: 0 } },
            { leadingIcon: "image", label: "Label 3", badge: { label: 1 } },
            { leadingIcon: "image", label: "Label 4", badge: { label: 1000 } },
            { leadingIcon: "image", label: "Label 5" },
            { leadingIcon: "image", label: "Label 6" },
            { leadingIcon: "image", label: "Label 7" },
            { leadingIcon: "image", label: "Label 8" },
            { leadingIcon: "image", label: "Label 9" },
            { leadingIcon: "image", label: "Label 10" },
            { leadingIcon: "image", label: "Label 11" },
            { leadingIcon: "image", label: "Label 12" },
        ];
        this.list8 = [{ label: "Label 1", selected: true }, { label: "Label 2", badge: { label: 0 } }, { label: "Label 3", badge: { label: 1 } }, { label: "Label 4", badge: { label: 1000 } }, { label: "Label 5" }, { label: "Label 6" }, { label: "Label 7" }, { label: "Label 8" }, { label: "Label 9" }, { label: "Label 10" }, { label: "Label 11" }, { label: "Label 12" }];
    }

    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tabs .list="${this.list1}"></md-tabs>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tabs .list="${this.list2}"></md-tabs>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tabs ui="secondary" .list="${this.list3}"></md-tabs>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tabs ui="secondary" .list="${this.list4}"></md-tabs>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tabs ui="scrollable" .list="${this.list5}"></md-tabs>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tabs ui="scrollable" .list="${this.list6}"></md-tabs>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tabs ui="scrollable secondary" .list="${this.list7}"></md-tabs>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-tabs ui="scrollable secondary" .list="${this.list8}"></md-tabs>
                </div>
            </div>
        `
    }
}

customElements.define("app-tabs", AppTabsElement);

export default document.createElement("app-tabs");