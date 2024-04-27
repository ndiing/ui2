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
            // _page: 1,
            // _limit: 10,
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
            <div class="md-layout__grid" >
                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                    <md-data-table
                        id="table"
                        .columns="${this.columns}"
                        .rows="${this.rows}"
                    ></md-data-table>
                </div>
                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4"></div>
            </div>
        `;
    }

    async connectedCallback(){
        super.connectedCallback()

        await this.updateComplete

        table.addEventListener('scroll',(event) => {
            const itemCount = 2000
            const rowHeight = 52
            const scrollTop = event.currentTarget.scrollTop
            const nodePadding = 2
            const viewportHeight = 256

            const totalContentHeight = itemCount * rowHeight;

            let startNode = Math.floor(scrollTop / rowHeight) - nodePadding;
            startNode = Math.max(0, startNode);
          
            let visibleNodesCount = Math.ceil(viewportHeight / rowHeight) + 2 * nodePadding;
            visibleNodesCount = Math.min(itemCount - startNode, visibleNodesCount);
          
            const offsetY = startNode * rowHeight;
          
            console.log(
                totalContentHeight,
                startNode,
                visibleNodesCount,
                offsetY,
            )
        })
    }
    disconnectedCallback(){
        super.disconnectedCallback()
    }
}

customElements.define("dev-data-table", DevDataTable);

export default document.createElement("dev-data-table");
