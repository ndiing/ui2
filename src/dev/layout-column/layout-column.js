import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevLayoutColumn extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout--column" style="margin-bottom:24px;">
                <div class="md-layout__item--expanded1" style="height:56px;background:var(--md-sys-color-surface-variant);">expanded1</div>
                <div class="md-layout__item--expanded11" style="height:56px;background:var(--md-sys-color-surface-variant);">expanded11</div>
                <div class="md-layout__item--expanded2" style="height:56px;background:var(--md-sys-color-surface-variant);">expanded2</div>
                <div class="md-layout__item--expanded10" style="height:56px;background:var(--md-sys-color-surface-variant);">expanded10</div>
                <div class="md-layout__item--expanded3" style="height:56px;background:var(--md-sys-color-surface-variant);">expanded3</div>
                <div class="md-layout__item--expanded9" style="height:56px;background:var(--md-sys-color-surface-variant);">expanded9</div>
                <div class="md-layout__item--expanded4" style="height:56px;background:var(--md-sys-color-surface-variant);">expanded4</div>
                <div class="md-layout__item--expanded8" style="height:56px;background:var(--md-sys-color-surface-variant);">expanded8</div>
                <div class="md-layout__item--expanded5" style="height:56px;background:var(--md-sys-color-surface-variant);">expanded5</div>
                <div class="md-layout__item--expanded7" style="height:56px;background:var(--md-sys-color-surface-variant);">expanded7</div>
                <div class="md-layout__item--expanded6" style="height:56px;background:var(--md-sys-color-surface-variant);">expanded6</div>
                <div class="md-layout__item--expanded6" style="height:56px;background:var(--md-sys-color-surface-variant);">expanded6</div>
                <div class="md-layout__item--expanded12" style="height:56px;background:var(--md-sys-color-surface-variant);">expanded12</div>
            </div>
            <div class="md-layout--column" style="margin-bottom:24px;">
                <div class="md-layout__item--medium1" style="height:56px;background:var(--md-sys-color-surface-variant);">medium1</div>
                <div class="md-layout__item--medium7" style="height:56px;background:var(--md-sys-color-surface-variant);">medium7</div>
                <div class="md-layout__item--medium2" style="height:56px;background:var(--md-sys-color-surface-variant);">medium2</div>
                <div class="md-layout__item--medium6" style="height:56px;background:var(--md-sys-color-surface-variant);">medium6</div>
                <div class="md-layout__item--medium3" style="height:56px;background:var(--md-sys-color-surface-variant);">medium3</div>
                <div class="md-layout__item--medium5" style="height:56px;background:var(--md-sys-color-surface-variant);">medium5</div>
                <div class="md-layout__item--medium4" style="height:56px;background:var(--md-sys-color-surface-variant);">medium4</div>
                <div class="md-layout__item--medium4" style="height:56px;background:var(--md-sys-color-surface-variant);">medium4</div>
                <div class="md-layout__item--medium8" style="height:56px;background:var(--md-sys-color-surface-variant);">medium8</div>
            </div>
            <div class="md-layout--column">
                <div class="md-layout__item--compact1" style="height:56px;background:var(--md-sys-color-surface-variant);">compact1</div>
                <div class="md-layout__item--compact3" style="height:56px;background:var(--md-sys-color-surface-variant);">compact3</div>
                <div class="md-layout__item--compact2" style="height:56px;background:var(--md-sys-color-surface-variant);">compact2</div>
                <div class="md-layout__item--compact2" style="height:56px;background:var(--md-sys-color-surface-variant);">compact2</div>
                <div class="md-layout__item--compact4" style="height:56px;background:var(--md-sys-color-surface-variant);">compact4</div>
            </div>
        `;
    }
}

customElements.define("dev-layout-column", DevLayoutColumn);

export default document.createElement("dev-layout-column");
