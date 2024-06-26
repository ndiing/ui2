import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import icons from "../../assets/icons.json"

class DevIconComponent extends MDComponent {
    render() {
        return html`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    ${icons.map(row => html`
                        <div>
                            ${row.map(icon => icon.label?html`
                                <div>${icon.label}</div>
                            `:html`
                                <md-icon>${icon.icon}</md-icon>
                            `)}
                        </div>
                    `)}
                </div>
            </div>
        `;
    }
}

customElements.define("dev-icon", DevIconComponent);

export default document.createElement("dev-icon");
