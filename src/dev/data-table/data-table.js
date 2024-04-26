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
                    <md-button label="table" @click="${this.handleClick}"></md-button>
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
    get list(){
        return [
            'https://jsonplaceholder.typicode.com/posts',
            'https://jsonplaceholder.typicode.com/comments',
            'https://jsonplaceholder.typicode.com/albums',
            'https://jsonplaceholder.typicode.com/photos',
            'https://jsonplaceholder.typicode.com/todos',
            'https://jsonplaceholder.typicode.com/users',
        ]
    }
    counter=0
    handleClick(){
        fetch(this.list[this.counter%this.list.length])
        .then(res=>res.json())
        .then(res=>{
            const store = new Store(res, {
                primaryKey: "id",
            });
            const result = store.getAll({
                _page: 1,
                _limit: 10,
            });
    
            this.columns = Object.keys(result.docs[0]).map(name=>({name,label:name,width:56*5}));
            this.rows = result.docs;
            this.requestUpdate()
        })
        ++this.counter
    }
}

customElements.define("dev-data-table", DevDataTable);

export default document.createElement("dev-data-table");
