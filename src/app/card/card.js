import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppCardElement extends MDElement {
    render() {
        return html`
            <div
                class="md-layout-column"
                style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-card>body</md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-card label="Label">body</md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-card
                        label="Label"
                        subLabel="Sub label"
                        >body</md-card
                    >
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-card
                        label="Label"
                        subLabel="Sub label"
                        .leadingActions="${[{ icon: "image" }]}"
                        >body</md-card
                    >
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-card
                        label="Label"
                        subLabel="Sub label"
                        .leadingActions="${[{ icon: "image" }]}"
                        .trailingActions="${[{ icon: "image" }, { icon: "image" }, { icon: "image" }]}"
                        >body</md-card
                    >
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-card
                        label="Label"
                        subLabel="Sub label"
                        .leadingActions="${[{ icon: "image" }]}"
                        .trailingActions="${[{ icon: "image" }, { icon: "image" }, { icon: "image" }]}"
                        .buttons="${[{ label: "Button" }, { label: "Button" }]}"
                        >body</md-card
                    >
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-card
                        label="Label"
                        subLabel="Sub label"
                        .leadingActions="${[{ icon: "image" }]}"
                        .trailingActions="${[{ icon: "image" }, { icon: "image" }, { icon: "image" }]}"
                        .buttons="${[{ label: "Button" }, { label: "Button" }]}"
                        .image="${{ src: "https://api.dicebear.com/8.x/icons/svg?seed=Abby&scale=70" }}"
                        >body</md-card
                    >
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-card ui="elevated">body</md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-card ui="filled">body</md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-card ui="outlined">body</md-card>
                </div>
            </div>
        `;
    }
}

customElements.define("app-card", AppCardElement);

export default document.createElement("app-card");
