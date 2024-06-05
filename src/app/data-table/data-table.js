import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppDataTableElement extends MDElement {
    constructor() {
        super();
        this.columns = [
            { name: "id", label: "ID", width: 56 * 2, /* align: "right", */ sortable: true, selected: true },
            { name: "name", label: "Name", width: 56 * 5, sortable: true, selected: true },
            { name: "age", label: "Age", width: 56 * 2, /* align: "right", */ sortable: true, selected: true },
            { name: "email", label: "Email", width: 56 * 5, sortable: true, selected: true },
        ];

        this.rows = [
            { id: 1, name: "John Doe", age: 28, email: "john.doe@example.com" },
            { id: 2, name: "Jane Smith", age: 34, email: "jane.smith@example.com" },
            { id: 3, name: "Emily Davis", age: 22, email: "emily.davis@example.com" },
            { id: 4, name: "Michael Brown", age: 45, email: "michael.brown@example.com" },
            { id: 5, name: "Sarah Wilson", age: 30, email: "sarah.wilson@example.com" },
            { id: 6, name: "David Johnson", age: 40, email: "david.johnson@example.com" },
            { id: 7, name: "Laura Lee", age: 29, email: "laura.lee@example.com" },
            { id: 8, name: "Robert Taylor", age: 50, email: "robert.taylor@example.com" },
            { id: 9, name: "Linda Clark", age: 33, email: "linda.clark@example.com" },
            { id: 10, name: "James White", age: 27, email: "james.white@example.com" },
            { id: 11, name: "Paul Harris", age: 36, email: "paul.harris@example.com" },
            { id: 12, name: "Anna Martin", age: 24, email: "anna.martin@example.com" },
            { id: 13, name: "Mark Thompson", age: 42, email: "mark.thompson@example.com" },
            { id: 14, name: "Susan Roberts", age: 31, email: "susan.roberts@example.com" },
            { id: 15, name: "Charles Clark", age: 38, email: "charles.clark@example.com" },
            { id: 16, name: "Nancy Lewis", age: 27, email: "nancy.lewis@example.com" },
            { id: 17, name: "Steven Walker", age: 49, email: "steven.walker@example.com" },
            { id: 18, name: "Karen Hall", age: 29, email: "karen.hall@example.com" },
            { id: 19, name: "Brian Allen", age: 33, email: "brian.allen@example.com" },
            { id: 20, name: "Jessica Young", age: 26, email: "jessica.young@example.com" },
        ];
    }
    render() {
        return html`
            <div
                style="height:100%;overflow:auto;"
                class="md-layout-column"
            >
                <div
                    style="height:100%;overflow:auto;"
                    class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4"
                >
                    <md-data-table
                        id="table"
                        .columns="${this.columns}"
                        .rows="${this.rows}"
                        .checkbox="${true}"
                    ></md-data-table>
                </div>
            </div>
        `;
    }
}

customElements.define("app-data-table", AppDataTableElement);

export default document.createElement("app-data-table");
