import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppListComponent extends MDElement {
    render() {
        return html`
            <div
                style=""
                class="md-layout-grid"
            >
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { avatar: "https://placehold.co/112", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { avatar: "https://placehold.co/112", label: "Headline", subLabel: "Supporting text" },
                            { avatar: "https://placehold.co/112", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { trailingCheckbox: true, avatar: "https://placehold.co/112", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { trailingCheckbox: true, avatar: "https://placehold.co/112", label: "Headline", subLabel: "Supporting text" },
                            { trailingCheckbox: true, avatar: "https://placehold.co/112", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { image: "https://placehold.co/112", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { image: "https://placehold.co/112", label: "Headline", subLabel: "Supporting text" },
                            { image: "https://placehold.co/112", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { trailingCheckbox: true, image: "https://placehold.co/112", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { trailingCheckbox: true, image: "https://placehold.co/112", label: "Headline", subLabel: "Supporting text" },
                            { trailingCheckbox: true, image: "https://placehold.co/112", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { video: "https://placehold.co/112", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { video: "https://placehold.co/112", label: "Headline", subLabel: "Supporting text" },
                            { video: "https://placehold.co/112", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { trailingCheckbox: true, video: "https://placehold.co/112", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { trailingCheckbox: true, video: "https://placehold.co/112", label: "Headline", subLabel: "Supporting text" },
                            { trailingCheckbox: true, video: "https://placehold.co/112", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { icon: "image", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { icon: "image", label: "Headline", subLabel: "Supporting text" },
                            { icon: "image", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { trailingCheckbox: true, icon: "image", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { trailingCheckbox: true, icon: "image", label: "Headline", subLabel: "Supporting text" },
                            { trailingCheckbox: true, icon: "image", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list .list="${[{ label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" }, { label: "Headline", subLabel: "Supporting text" }, { label: "Headline" }]}"></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { trailingCheckbox: true, label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { trailingCheckbox: true, label: "Headline", subLabel: "Supporting text" },
                            { trailingCheckbox: true, label: "Headline" },
                        ]}"
                    ></md-list>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { leadingCheckbox: true, label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { leadingCheckbox: true, label: "Headline", subLabel: "Supporting text" },
                            { leadingCheckbox: true, label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { leadingCheckbox: true, text: "100+", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { leadingCheckbox: true, text: "100+", label: "Headline", subLabel: "Supporting text" },
                            { leadingCheckbox: true, text: "100+", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { leadingRadioButton: true, label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { leadingRadioButton: true, label: "Headline", subLabel: "Supporting text" },
                            { leadingRadioButton: true, label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { leadingRadioButton: true, text: "100+", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { leadingRadioButton: true, text: "100+", label: "Headline", subLabel: "Supporting text" },
                            { leadingRadioButton: true, text: "100+", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { trailingSwitch: true, label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { trailingSwitch: true, label: "Headline", subLabel: "Supporting text" },
                            { trailingSwitch: true, label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded3 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-list
                        .list="${[
                            { trailingSwitch: true, icon: "image", label: "Headline", subLabel: "Supporting text that is long enough to fill up multiple lines" },
                            { trailingSwitch: true, icon: "image", label: "Headline", subLabel: "Supporting text" },
                            { trailingSwitch: true, icon: "image", label: "Headline" },
                        ]}"
                    ></md-list>
                </div>
            </div>
        `;
    }
}

customElements.define("app-list", AppListComponent);

export default document.createElement("app-list");
