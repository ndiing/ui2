import { html } from "lit";
import { MDElement } from "../../material/element/element.js";

class AppChipsComponent extends MDElement {
    render() {
        return html`
            <div
                style=""
                class="md-layout-grid"
            >
                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-chip label="Label"></md-chip>
                    <md-chip
                        avatar="https://placehold.co/112"
                        label="Label"
                    ></md-chip>
                    <md-chip
                        icon="image"
                        label="Label"
                    ></md-chip>
                    <md-chip
                        label="Label"
                        action="close"
                        @onChipIconButtonClick="${console.log}"
                    ></md-chip>
                    <md-chip
                        avatar="https://placehold.co/112"
                        label="Label"
                        action="close"
                    ></md-chip>
                    <md-chip
                        icon="image"
                        label="Label"
                        action="close"
                    ></md-chip>
                    <md-chip
                        selected
                        label="Label"
                        action="close"
                    ></md-chip>
                    <md-chip
                        selected
                        avatar="https://placehold.co/112"
                        label="Label"
                        action="close"
                    ></md-chip>
                    <md-chip
                        selected
                        icon="image"
                        label="Label"
                        action="close"
                    ></md-chip>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-chips
                        .list="${[
                            { icon: "image", label: "Label 1" },
                            { icon: "image", label: "Label 2" },
                            { icon: "image", label: "Label 3" },
                            { icon: "image", label: "Label 4" },
                        ]}"
                        @onChipsItemClick="${console.log}"
                    ></md-chips>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-chips
                        .list="${[{ label: "Label 1", selected: true }, { label: "Label 2", selected: true }, { label: "Label 3" }, { label: "Label 4" }]}"
                        multiSelection
                    ></md-chips>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-chips
                        .list="${[
                            { avatar: "https://placehold.co/112", label: "Label 1", action: "close" },
                            { avatar: "https://placehold.co/112", label: "Label 2", action: "close" },
                            { avatar: "https://placehold.co/112", label: "Label 3", action: "close" },
                            { avatar: "https://placehold.co/112", label: "Label 4", action: "close" },
                        ]}"
                    ></md-chips>
                </div>

                <div
                    style=""
                    class="md-layout-grid__item md-layout-grid__item--expanded12 md-layout-grid__item--medium8 md-layout-grid__item--compact4"
                >
                    <md-chips .list="${[{ label: "Label 1" }, { label: "Label 2" }, { label: "Label 3" }, { label: "Label 4" }]}"></md-chips>
                </div>
            </div>
        `;
    }
}

customElements.define("app-chips", AppChipsComponent);

export default document.createElement("app-chips");
