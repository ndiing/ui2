import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppListElement extends MDElement {
    constructor() {
        super();

        this.list1 = [
            {
                avatar: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                avatar: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
                subLabel: "Supporting text",
            },
            {
                avatar: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
            },
        ];
        this.list2 = [
            {
                trailingCheckbox: {},
                avatar: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                trailingCheckbox: {},
                avatar: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
                subLabel: "Supporting text",
            },
            {
                trailingCheckbox: {},
                avatar: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
            },
        ];

        this.list3 = [
            {
                thumbnail: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                thumbnail: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
                subLabel: "Supporting text",
            },
            {
                thumbnail: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
            },
        ];
        this.list4 = [
            {
                trailingCheckbox: {},
                thumbnail: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                trailingCheckbox: {},
                thumbnail: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
                subLabel: "Supporting text",
            },
            {
                trailingCheckbox: {},
                thumbnail: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
            },
        ];

        this.list5 = [
            {
                video: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                video: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
                subLabel: "Supporting text",
            },
            {
                video: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
            },
        ];
        this.list6 = [
            {
                trailingCheckbox: {},
                video: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                trailingCheckbox: {},
                video: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
                subLabel: "Supporting text",
            },
            {
                trailingCheckbox: {},
                video: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70",
                label: "Headline",
            },
        ];

        this.list7 = [
            {
                leadingIcon: "image",
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                leadingIcon: "image",
                label: "Headline",
                subLabel: "Supporting text",
            },
            { leadingIcon: "image", label: "Headline" },
        ];
        this.list8 = [
            {
                trailingCheckbox: {},
                leadingIcon: "image",
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                trailingCheckbox: {},
                leadingIcon: "image",
                label: "Headline",
                subLabel: "Supporting text",
            },
            { trailingCheckbox: {}, leadingIcon: "image", label: "Headline" },
        ];

        this.list9 = [
            {
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            { label: "Headline", subLabel: "Supporting text" },
            { label: "Headline" },
        ];
        this.list10 = [
            {
                trailingCheckbox: {},
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                trailingCheckbox: {},
                label: "Headline",
                subLabel: "Supporting text",
            },
            { trailingCheckbox: {}, label: "Headline" },
        ];

        this.list11 = [
            {
                leadingCheckbox: {},
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                leadingCheckbox: {},
                label: "Headline",
                subLabel: "Supporting text",
            },
            { leadingCheckbox: {}, label: "Headline" },
        ];
        this.list12 = [
            {
                leadingCheckbox: {},
                text: "100+",
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                leadingCheckbox: {},
                text: "100+",
                label: "Headline",
                subLabel: "Supporting text",
            },
            { leadingCheckbox: {}, text: "100+", label: "Headline" },
        ];

        this.list13 = [
            {
                leadingRadioButton: {},
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                leadingRadioButton: {},
                label: "Headline",
                subLabel: "Supporting text",
            },
            { leadingRadioButton: {}, label: "Headline" },
        ];
        this.list14 = [
            {
                leadingRadioButton: {},
                text: "100+",
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                leadingRadioButton: {},
                text: "100+",
                label: "Headline",
                subLabel: "Supporting text",
            },
            { leadingRadioButton: {}, text: "100+", label: "Headline" },
        ];

        this.list15 = [
            {
                trailingSwitch: {},
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                trailingSwitch: {},
                label: "Headline",
                subLabel: "Supporting text",
            },
            { trailingSwitch: {}, label: "Headline" },
        ];
        this.list16 = [
            {
                trailingSwitch: {},
                leadingIcon: "image",
                label: "Headline",
                subLabel: "Supporting text that is long enough to fill up multiple lines",
            },
            {
                trailingSwitch: {},
                leadingIcon: "image",
                label: "Headline",
                subLabel: "Supporting text",
            },
            { trailingSwitch: {}, leadingIcon: "image", label: "Headline" },
        ];
    }

    render() {
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list1}"></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list2}"></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list3}"></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list4}"></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list5}"></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list6}"></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list7}"></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list8}"></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list9}"></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list10}"></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list11}"></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list12}"></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list13}"></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list14}"></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list15}"></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-list .list="${this.list16}"></md-list>
                </div>
            </div>
        `;
    }
}

customElements.define("app-list", AppListElement);

export default document.createElement("app-list");
