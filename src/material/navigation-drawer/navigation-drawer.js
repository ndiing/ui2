import { html } from "lit";
import { MDSheetComponent } from "../sheet/sheet.js";
import { MDTreeComponent } from "../tree/tree.js";

class MDNavigationBarComponent extends MDSheetComponent {
    static properties = {
        ...MDSheetComponent.properties,
        ...MDTreeComponent.properties,
    };

    get body() {
        /* prettier-ignore */
        return [html`
            <md-tree
                class="md-navigation-drawer__tree"
                .variant="${"plain"}"
                .list="${this.list}"
            ></md-tree>
        `];
    }

    set body(value) {
        this._body = value;
    }

    connectedCallback() {
        super.connectedCallback();

        this.classList.add("md-sheet");
        this.classList.add("md-navigation-drawer");
    }
}

customElements.define("md-navigation-drawer", MDNavigationBarComponent);

export { MDNavigationBarComponent };
