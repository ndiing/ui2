import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { MDRippleModule } from "../../com/ripple/ripple";

class AppRippleElement extends MDElement {
    render() {
        return html`
            <div
                class="md-layout-column"
                style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-icon-button
                        id="ripple1"
                        ui="tonal"
                        >image</md-icon-button
                    >
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <div
                        id="ripple2"
                        style="
                            width:calc(56px * 4);
                            height:calc(56px * 2);
                            background:var(--md-sys-color-secondary-container);
                        "></div>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <div
                        id="ripple3"
                        style="
                            width:calc(56px * 2);
                            height:calc(56px * 4);
                            background:var(--md-sys-color-secondary-container);
                        "></div>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <div
                        id="ripple4"
                        style="
                            width:calc(56px * 2);
                            height:calc(56px * 2);
                            background:var(--md-sys-color-secondary-container);
                        "></div>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <div
                        id="ripple5"
                        style="
                            width:calc(56px * 2);
                            height:calc(56px * 2);
                            background:var(--md-sys-color-secondary-container);
                        "></div>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <div
                        id="ripple6"
                        style="
                            width:calc(56px * 2);
                            height:calc(56px * 2);
                            background:var(--md-sys-color-secondary-container);
                        "></div>
                </div>
            </div>
        `;
    }

    firstUpdated() {
        new MDRippleModule(this.querySelector("#ripple1"), {});
        new MDRippleModule(this.querySelector("#ripple2"), {});
        new MDRippleModule(this.querySelector("#ripple3"), {});
        new MDRippleModule(this.querySelector("#ripple4"), {
            centered: true,
        });
        new MDRippleModule(this.querySelector("#ripple5"), {
            fadeout: true,
        });
        new MDRippleModule(this.querySelector("#ripple6"), {
            button: this.querySelector("#ripple1"),
        });
    }
}

customElements.define("app-ripple", AppRippleElement);

export default document.createElement("app-ripple");
