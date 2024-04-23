import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Store } from "../../lib/store/store";
import data from "../data/data";

const store = new Store(data.posts, {
    primaryKey: "id",
});

class DevDataTable extends MDElement {
    constructor() {
        super();

        const result = store.getAll({
            _page: 1,
            _limit: 10,
        });

        this.columns = [
            { name: "userId", label: "userId",width:56 },
            { name: "id", label: "id",width:56 },
            { name: "title", label: "title",width:56*5 },
            { name: "body", label: "body",width:56*10 },
        ];
        this.rows = result.docs;
    }
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                    <md-data-table
                        .columns="${this.columns}"
                        .rows="${this.rows}"
                    ></md-data-table>
                </div>
                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4"></div>
            </div>
        `;
    }
}

customElements.define("dev-data-table", DevDataTable);

export default document.createElement("dev-data-table");
