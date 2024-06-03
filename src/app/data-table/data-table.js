import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { MDDataModule } from "../../com/data/data";

const formatIDR = new Intl.NumberFormat("id", {
    currency: "IDR",
    style: "currency",
}).format;

class AppDataTableElement extends MDElement {
    constructor() {
        super();
        this.columns1 = [
            { name: "id", label: "ID", width: 56 },
            { name: "first_name", label: "First Name", width: 56 * 3 },
            { name: "last_name", label: "Last Name", width: 56 * 3 },
            { name: "email", label: "Email", width: 56 * 5 },
            { name: "age", label: "Age", width: 56 },
        ];

        this.rows1 = [
            { id: 1, first_name: "John", last_name: "Doe", email: "john.doe@example.com", age: 28 },
            { id: 2, first_name: "Jane", last_name: "Smith", email: "jane.smith@example.com", age: 34 },
            { id: 3, first_name: "Alice", last_name: "Johnson", email: "alice.johnson@example.com", age: 23 },
            { id: 4, first_name: "Bob", last_name: "Brown", email: "bob.brown@example.com", age: 45 },
            { id: 5, first_name: "Charlie", last_name: "Davis", email: "charlie.davis@example.com", age: 30 },
            { id: 6, first_name: "Emily", last_name: "Clark", email: "emily.clark@example.com", age: 29 },
            { id: 7, first_name: "Frank", last_name: "Martinez", email: "frank.martinez@example.com", age: 40 },
            { id: 8, first_name: "Grace", last_name: "Lee", email: "grace.lee@example.com", age: 32 },
            { id: 9, first_name: "Henry", last_name: "Taylor", email: "henry.taylor@example.com", age: 27 },
            { id: 10, first_name: "Ivy", last_name: "Anderson", email: "ivy.anderson@example.com", age: 35 },
        ];

        this.columns2 = [
            { name: "id", label: "ID" },
            { name: "date", label: "Date" },
            { name: "description", label: "Description" },
            { name: "amount", label: "Amount" },
            { name: "category", label: "Category" },
            { name: "balance", label: "Balance" },
        ];

        this.rows2 = [
            { id: 1, date: "2024-01-01", description: "Salary", amount: 5000.0, category: "Income", balance: 5000.0 },
            { id: 2, date: "2024-01-03", description: "Rent", amount: -1500.0, category: "Expense", balance: 3500.0 },
            { id: 3, date: "2024-01-05", description: "Groceries", amount: -200.0, category: "Expense", balance: 3300.0 },
            { id: 4, date: "2024-01-10", description: "Electricity Bill", amount: -100.0, category: "Expense", balance: 3200.0 },
            { id: 5, date: "2024-01-15", description: "Freelance Project", amount: 750.0, category: "Income", balance: 3950.0 },
            { id: 6, date: "2024-01-20", description: "Dining Out", amount: -50.0, category: "Expense", balance: 3900.0 },
            { id: 7, date: "2024-01-22", description: "Gym Membership", amount: -45.0, category: "Expense", balance: 3855.0 },
            { id: 8, date: "2024-01-25", description: "Internet Bill", amount: -60.0, category: "Expense", balance: 3795.0 },
            { id: 9, date: "2024-01-28", description: "Office Supplies", amount: -80.0, category: "Expense", balance: 3715.0 },
            { id: 10, date: "2024-01-31", description: "Investment Return", amount: 200.0, category: "Income", balance: 3915.0 },
        ];

        this.columns3 = [
            { name: "id", label: "ID", sortable: true,width:56*1 },
            { name: "tanggal", label: "Tanggal", sortable: true,width:56*5 },
            { name: "deskripsi", label: "Deskripsi", sortable: true,width:56*5 },
            { name: "jumlah", label: "Jumlah", sortable: true, format: formatIDR,width:56*3 },
            { name: "kategori", label: "Kategori", sortable: true,width:56*5 },
            { name: "saldo", label: "Saldo", sortable: true, format: formatIDR,width:56*3 },
        ];

        this.data3 = new MDDataModule([
            { id: 1, tanggal: "2024-01-01", deskripsi: "Gaji", jumlah: 5000000.0, kategori: "Pemasukan", saldo: 5000000.0 },
            { id: 2, tanggal: "2024-01-03", deskripsi: "Sewa Rumah", jumlah: -1500000.0, kategori: "Pengeluaran", saldo: 3500000.0 },
            { id: 3, tanggal: "2024-01-05", deskripsi: "Belanja Bulanan", jumlah: -200000.0, kategori: "Pengeluaran", saldo: 3300000.0 },
            { id: 4, tanggal: "2024-01-10", deskripsi: "Tagihan Listrik", jumlah: -100000.0, kategori: "Pengeluaran", saldo: 3200000.0 },
            { id: 5, tanggal: "2024-01-15", deskripsi: "Proyek Freelance", jumlah: 750000.0, kategori: "Pemasukan", saldo: 3950000.0 },
            { id: 6, tanggal: "2024-01-20", deskripsi: "Makan di Luar", jumlah: -50000.0, kategori: "Pengeluaran", saldo: 3900000.0 },
            { id: 7, tanggal: "2024-01-22", deskripsi: "Keanggotaan Gym", jumlah: -45000.0, kategori: "Pengeluaran", saldo: 3855000.0 },
            { id: 8, tanggal: "2024-01-25", deskripsi: "Tagihan Internet", jumlah: -60000.0, kategori: "Pengeluaran", saldo: 3795000.0 },
            { id: 9, tanggal: "2024-01-28", deskripsi: "Alat Tulis Kantor", jumlah: -80000.0, kategori: "Pengeluaran", saldo: 3715000.0 },
            { id: 10, tanggal: "2024-01-31", deskripsi: "Keuntungan Investasi", jumlah: 200000.0, kategori: "Pemasukan", saldo: 3915000.0 },
        ]);

        this.rows3 = this.data3.getAll().rows;
    }
    render() {
        return html`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
            
                <div class="md-layout-column__item md-layout-column__item--expanded10 md-layout-column__item--medium4 md-layout-column__item--compact4">
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-search-field
                        placeholder="search"
                        ui="rounded"
                        @onSearchFieldNativeSearch="${this.handleSearchFieldNativeSearch}"
                    ></md-search-field>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-data-table
                        id="table3"
                        style="height:calc(52px * 5);"
                        .columns="${this.columns3}"
                        .rows="${this.rows3}"
                        checkbox
                        @onDataTableColumnCellSortableClick="${this.handleDataTableColumnCellSortableClick}"
                    ></md-data-table>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-data-table
                        style="height:calc(52px * 5);"
                        .columns="${this.columns1}"
                        .rows="${this.rows1}"
                    ></md-data-table>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <md-data-table
                        style="height:calc(52px * 5);"
                        .columns="${this.columns2}"
                        .rows="${this.rows2}"
                        checkbox
                    ></md-data-table>
                </div>

            </div>
        `;
    }

    handleDataTableColumnCellSortableClick(event) {
        this.rows3 = this.data3.getAll({ sorters: this.columns3.filter((column) => column.order) }).rows;
        this.requestUpdate();
    }

    handleSearchFieldNativeSearch(event) {
        this.rows3 = this.data3.getAll({ q: event.detail.currentTarget.value }).rows;
        this.requestUpdate();
    }
}

customElements.define("app-data-table", AppDataTableElement);

export default document.createElement("app-data-table");
