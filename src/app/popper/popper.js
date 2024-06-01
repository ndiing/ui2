import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { MDPopperModule } from "../../com/popper/popper";

class AppPopperElement extends MDElement {
    /* prettier-ignore */
    render(){
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <div id="container" style="display: inline-flex;align-items: center;justify-content: center;width: calc(56px * 3);height: calc(56px * 4);background: var(--md-sys-color-surface-container);"></div>
                    <div id="button" style="display: inline-flex;align-items: center;justify-content: center;width: calc(56px * 2);height: calc(56px * 1);background: var(--md-sys-color-secondary-container);"></div>
                </div>
            </div>
        `
    }

    async firstUpdated() {
        const placements = [
            //
            // "top-end",
            // "top",
            // "top-start",
            // "right-end",
            // "right",
            // "right-start",
            // "bottom-start",
            "bottom",
            // "bottom-end",
            // "left-start",
            // "left",
            // "left-end",
            "center"
        ];

        const container = this.querySelector("#container");
        const popper = new MDPopperModule(container, {
            button: this.querySelector("#button"),
            // containment: container.parentElement,
            // shift: true,
            offset:8,
            placements,
        });
        popper.set()
    }
}

customElements.define("app-popper", AppPopperElement);

export default document.createElement("app-popper");
