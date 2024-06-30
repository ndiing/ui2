import { html } from "lit";
import { MDComponent } from "../../material/component/component.js";
import data from "../../assets/comments.json";

class DevDataTableComponent extends MDComponent {
    constructor() {
        super();

        this.columns = [
            { name: "postId", label: "postId", width:56*3 },
            { name: "id", label: "id", width:56*3 },
            { name: "name", label: "name", width:56*3 },
            { name: "email", label: "email", width:56*3 },
            { name: "body", label: "body", width:56*10 },
        ];
        this.rows = data;
    }
    render() {
        return html`
            <div
                class="md-layout-column"
                style="min-width:0;min-height:0;margin:0;height:100%;width:100%;padding:24px;"
            >
                <div
                    class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4"
                    style="min-width:0;min-height:0;margin:0;height:100%;width:100%;"
                >
                    <md-data-table
                        .columns="${this.columns}"
                        .rows="${this.rows}"
                    ></md-data-table>
                </div>
            </div>
        `;
    }
}

customElements.define("dev-data-table", DevDataTableComponent);

export default document.createElement("dev-data-table");
