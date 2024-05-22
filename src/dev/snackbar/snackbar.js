import { MDElement } from "../../com/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";

class DevSnackbar extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin: 24px;">
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-snackbar action="Action" icon="close">Single-line snackbar with action</md-snackbar>
                </div>

                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-snackbar>Single-line snackbar</md-snackbar>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-snackbar action="Action">Single-line snackbar with action</md-snackbar>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-snackbar>Two-line snackbar<br>without action</md-snackbar>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-snackbar action="Action">Two-line snackbar<br>with action</md-snackbar>
                </div>
                <div class="md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-snackbar action="Longer action">Two-line snackbar<br>with longer action</md-snackbar>
                </div>

            </div>
        `;
    }
}

customElements.define("dev-snackbar", DevSnackbar);

export default document.createElement("dev-snackbar");
