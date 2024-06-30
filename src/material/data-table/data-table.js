import { html } from "lit";
import { MDCardComponent } from "../card/card.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { MDVirtualController } from "../virtual/virtual.js";
import { styleMap } from "lit/directives/style-map.js";
import { MDStore } from "../store/store.js";

class MDDataTableComponent extends MDCardComponent {
    static properties = {
        ...MDCardComponent.properties,
        columns: { type: Array },
        rows: { type: Array },
    };

    get body() {
        /* prettier-ignore */
        return [html`
            <div 
                class="md-data-table__viewport"
                @onVirtualScroll="${this.handleDataTableViewportVirtualScroll}"
            >
                <div class="md-data-table__scrollbar">

                </div>
                <div class="md-data-table__container">
                    ${this.renderTable()}
                </div>

            </div>
        `];
    }

    set body(value) {}

    constructor() {
        super();
    }

    renderDataTableItem(item) {
        /* prettier-ignore */
        return html`
            <md-data-table-item
                .data="${item}"
                .avatar="${ifDefined(item.avatar)}"
                .thumbnail="${ifDefined(item.thumbnail)}"
                .video="${ifDefined(item.video)}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .subLabel="${ifDefined(item.subLabel)}"
                .badge="${ifDefined(item.badge)}"
                .text="${ifDefined(item.text)}"
                .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                .selected="${ifDefined(item.selected)}"
                .routerLink="${ifDefined(item.routerLink)}"
            ></md-data-table-item>
        `;
    }

    renderTable() {
        /* prettier-ignore */
        return html`
            <table 
                class="md-data-table__native"
                
            >
                <caption></caption>
                <thead>
                    <tr>
                        ${this.virtualColumns?.map((column) => html`
                            <th
                                class="md-data-table__column"
                                .data="${column}"
                                style="${styleMap({
                                    'min-width': `${column.width}px`,
                                    position:'sticky',
                                    top: `${0-this.virtual.translateY+0}px`,
                                    'z-index':'2',
                                    ...(column.sticky&&{
                                        [column.flow]:`${(column.flow=='left'?0-this.virtual.translateX:this.virtual.translateX)+column[column.flow]}px`,
                                        'z-index':'3',
                                    })
                                })}"
                            >${this.renderDataTableItem({
                                label: column.label
                            })}</th>    
                        `)}
                    </tr>
                </thead>
                <tbody>
                    ${this.virtualRows?.map(row => html`
                        <tr
                            class="md-data-table__row"
                            .data="${row}"
                        >
                            ${this.virtualColumns?.map(column => html`
                                <td
                                    style="${styleMap({
                                        ...(column.sticky&&{
                                            position:'sticky',
                                            [column.flow]:`${(column.flow=='left'?0-this.virtual.translateX:this.virtual.translateX)+column[column.flow]}px`,
                                            'z-index':'1',
                                        })
                                    })}"
                                >${this.renderDataTableItem({
                                    label: row[column.name]
                                })}</td>
                            `)}
                        </tr>
                    `)}
                </tbody>
            </table>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
        this.classList.add("md-data-table");

        this.store = new MDStore(this.rows, {});
        const { total, docs } = this.store.getAll();

        this.storeRows = docs;

        this.virtual = new MDVirtualController(this, {
            viewportSelector: ".md-data-table__viewport",
            scrollbarSelector: ".md-data-table__scrollbar",
            containerSelector: ".md-data-table__container",
            columnSelector: ".md-data-table__column",
            rowSelector: ".md-data-table__row",

            rowTotal: total,
            rowHeight: 56,
            rowBuffer: 1,

            columnTotal: this.columns.length,
            columnWidth: 200,
            columnBuffer: this.columns.filter((column) => column.sticky).length,
        });
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("columns")) {
            await this.updateComplete;

            const half = Math.floor(this.columns.length / 2);
            this.columns.forEach((column, index) => {
                if (column.sticky) {
                    const flow = index <= half ? "left" : "right";
                    const from = index <= half ? 0 : index + 1;
                    const to = index <= half ? index : this.columns.length;
                    let value = 0;
                    for (let i = from; i < to; i++) {
                        value += this.columns[i].width;
                    }
                    column.flow = flow;
                    column[flow] = value;
                }
            });
        }
    }

    handleDataTableViewportVirtualScroll() {
        this.virtualColumns = this.columns.filter((column, index) => {
            return (
                (index >= this.virtual.columnStart && //
                    index < this.virtual.columnEnd) ||
                column.sticky
            );
        });
        this.virtualRows = this.storeRows.filter((row, index) => {
            return (
                index >= this.virtual.rowStart && //
                index < this.virtual.rowEnd
            );
        });
        this.requestUpdate();
        this.virtual.scrollbar.style.width = `${this.virtual.scrollbarWidth}px`;
        this.virtual.scrollbar.style.height = `${this.virtual.scrollbarHeight}px`;
        this.virtual.container.style.transform = `translate3d(${this.virtual.translateX}px,${this.virtual.translateY}px,0)`;
    }
}

customElements.define("md-data-table", MDDataTableComponent);

export { MDDataTableComponent };
