import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppDataTableElement extends MDElement {
    constructor() {
        super();
        this.columns = [
            { name: "id", label: "ID", width: 56 * 2, sortable: true, selected: true },
            { name: "patient_name", label: "Patient Name", width: 56 * 5, sortable: true, selected: true },
            { name: "age", label: "Age", width: 56 * 2, sortable: true, selected: true },
            { name: "gender", label: "Gender", width: 56 * 3, sortable: true, selected: true },
            { name: "admission_date", label: "Admission Date", width: 56 * 4, sortable: true, selected: true },
            { name: "discharge_date", label: "Discharge Date", width: 56 * 4, sortable: true, selected: true },
            { name: "diagnosis", label: "Diagnosis", width: 56 * 6, sortable: true, selected: true },
            { name: "doctor", label: "Doctor", width: 56 * 4, sortable: true, selected: true },
            { name: "ward", label: "Ward", width: 56 * 3, sortable: true, selected: true },
            { name: "total_bill", label: "Total Bill ($)", width: 56 * 4, sortable: true, selected: true },
        ];

        this.rows = [
            { id: 1, patient_name: "John Doe", age: 45, gender: "Male", admission_date: "2024-05-01", discharge_date: "2024-05-10", diagnosis: "Pneumonia", doctor: "Dr. Smith", ward: "ICU", total_bill: 5000 },
            { id: 2, patient_name: "Jane Smith", age: 35, gender: "Female", admission_date: "2024-05-03", discharge_date: "2024-05-08", diagnosis: "Fractured Leg", doctor: "Dr. Johnson", ward: "Orthopedic", total_bill: 3000 },
            { id: 3, patient_name: "Michael Brown", age: 60, gender: "Male", admission_date: "2024-05-05", discharge_date: "2024-05-15", diagnosis: "Heart Attack", doctor: "Dr. Williams", ward: "Cardiology", total_bill: 8000 },
            { id: 4, patient_name: "Emily Davis", age: 22, gender: "Female", admission_date: "2024-05-02", discharge_date: "2024-05-07", diagnosis: "Appendicitis", doctor: "Dr. Anderson", ward: "Surgery", total_bill: 4000 },
            { id: 5, patient_name: "David Johnson", age: 50, gender: "Male", admission_date: "2024-05-06", discharge_date: "2024-05-12", diagnosis: "Stroke", doctor: "Dr. Martinez", ward: "Neurology", total_bill: 7000 },
            { id: 6, patient_name: "Susan Williams", age: 55, gender: "Female", admission_date: "2024-05-08", discharge_date: "2024-05-16", diagnosis: "Cancer", doctor: "Dr. Thompson", ward: "Oncology", total_bill: 10000 },
            { id: 7, patient_name: "Robert Taylor", age: 65, gender: "Male", admission_date: "2024-05-10", discharge_date: "2024-05-20", diagnosis: "Diabetes", doctor: "Dr. Brown", ward: "Endocrinology", total_bill: 6000 },
            { id: 8, patient_name: "Linda Clark", age: 40, gender: "Female", admission_date: "2024-05-12", discharge_date: "2024-05-18", diagnosis: "Gallstones", doctor: "Dr. Garcia", ward: "Gastroenterology", total_bill: 4500 },
            { id: 9, patient_name: "James White", age: 30, gender: "Male", admission_date: "2024-05-14", discharge_date: "2024-05-19", diagnosis: "Migraine", doctor: "Dr. Lee", ward: "Neurology", total_bill: 3500 },
            { id: 10, patient_name: "Mary Martinez", age: 70, gender: "Female", admission_date: "2024-05-18", discharge_date: "2024-05-25", diagnosis: "Hypertension", doctor: "Dr. Harris", ward: "Cardiology", total_bill: 9000 },
            { id: 11, patient_name: "Daniel Garcia", age: 28, gender: "Male", admission_date: "2024-05-21", discharge_date: "2024-05-28", diagnosis: "Asthma", doctor: "Dr. Robinson", ward: "Pulmonology", total_bill: 3200 },
            { id: 12, patient_name: "Karen Hall", age: 48, gender: "Female", admission_date: "2024-05-25", discharge_date: "2024-06-02", diagnosis: "Arthritis", doctor: "Dr. Hall", ward: "Rheumatology", total_bill: 5200 },
            { id: 13, patient_name: "Steven Walker", age: 58, gender: "Male", admission_date: "2024-05-29", discharge_date: "2024-06-05", diagnosis: "Kidney Stones", doctor: "Dr. Lopez", ward: "Nephrology", total_bill: 4800 },
            { id: 14, patient_name: "Sarah Wilson", age: 38, gender: "Female", admission_date: "2024-06-01", discharge_date: "2024-06-08", diagnosis: "Depression", doctor: "Dr. King", ward: "Psychiatry", total_bill: 3800 },
            { id: 15, patient_name: "Mark Thompson", age: 55, gender: "Male", admission_date: "2024-06-03", discharge_date: "2024-06-10", diagnosis: "Obesity", doctor: "Dr. Adams", ward: "Bariatrics", total_bill: 5500 },
            { id: 16, patient_name: "Jessica Young", age: 25, gender: "Female", admission_date: "2024-06-06", discharge_date: "2024-06-11", diagnosis: "Anemia", doctor: "Dr. Wright", ward: "Hematology", total_bill: 2900 },
            { id: 17, patient_name: "Paul Harris", age: 32, gender: "Male", admission_date: "2024-06-09", discharge_date: "2024-06-15", diagnosis: "Concussion", doctor: "Dr. Garcia", ward: "Neurology", total_bill: 3700 },
            { id: 18, patient_name: "Nancy Lewis", age: 42, gender: "Female", admission_date: "2024-06-12", discharge_date: "2024-06-18", diagnosis: "Rheumatoid Arthritis", doctor: "Dr. Taylor", ward: "Rheumatology", total_bill: 4800 },
            { id: 19, patient_name: "William Clark", age: 62, gender: "Male", admission_date: "2024-06-15", discharge_date: "2024-06-22", diagnosis: "COPD", doctor: "Dr. Miller", ward: "Pulmonology", total_bill: 6200 },
            { id: 20, patient_name: "Rebecca Baker", age: 44, gender: "Female", admission_date: "2024-06-18", discharge_date: "2024-06-25", diagnosis: "Gastritis", doctor: "Dr. Thomas", ward: "Gastroenterology", total_bill: 4300 },
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
