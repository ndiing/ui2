import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppDataTableElement extends MDElement {
    constructor() {
        super();
        this.columns = [
            { name: "text", label: "Text", width:56*5,sticky:true },
            { name: "number", label: "Number", width:56*2 },
            { name: "tel", label: "Telephone", width:56*5 },
            { name: "email", label: "Email", width:56*5 },
            { name: "url", label: "URL", width:56*5 },
            { name: "password", label: "Password", width:56*2 },
            { name: "search", label: "Search", width:56*2 },
            { name: "color", label: "Color", width:56*2 },
            { name: "file", label: "File", width:56*2 },
            { name: "datetime", label: "DateTime", width:56*5 },
            { name: "date", label: "Date", width:56*5 },
            { name: "month", label: "Month", width:56*5 },
            { name: "week", label: "Week", width:56*2 },
            { name: "time", label: "Time", width:56*2 },
            { name: "textarea", label: "Textarea", width:56*5 },
            { name: "select", label: "Select,", width:56*2,sticky:true },
        ];

        this.rows = [
            { text: "Example text 1", number: 123, tel: "+1234567890", email: "example1@example.com", url: "https://example1.com", password: "examplepassword1", search: "Example search 1", color: "#ff0000", file: "example1.pdf", datetime: "2023-05-14T13:45:00", date: "2023-05-14", month: "2023-05", week: "2023-W20", time: "13:45", textarea: "Example textarea content 1", select: "Option 1" },
            { text: "Example text 2", number: 456, tel: "+0987654321", email: "example2@example.com", url: "https://example2.com", password: "examplepassword2", search: "Example search 2", color: "#00ff00", file: "example2.pdf", datetime: "2024-06-07T09:30:00", date: "2024-06-07", month: "2024-06", week: "2024-W23", time: "09:30", textarea: "Example textarea content 2", select: "Option 2" },
            { text: "Example text 3", number: 789, tel: "+9876543210", email: "example3@example.com", url: "https://example3.com", password: "examplepassword3", search: "Example search 3", color: "#0000ff", file: "example3.pdf", datetime: "2025-07-20T15:00:00", date: "2025-07-20", month: "2025-07", week: "2025-W30", time: "15:00", textarea: "Example textarea content 3", select: "Option 3" },
            { text: "Example text 4", number: 101112, tel: "+1122334455", email: "example4@example.com", url: "https://example4.com", password: "examplepassword4", search: "Example search 4", color: "#ff00ff", file: "example4.pdf", datetime: "2026-08-15T10:00:00", date: "2026-08-15", month: "2026-08", week: "2026-W33", time: "10:00", textarea: "Example textarea content 4", select: "Option 4" },
            { text: "Example text 5", number: 131415, tel: "+1516171819", email: "example5@example.com", url: "https://example5.com", password: "examplepassword5", search: "Example search 5", color: "#ffff00", file: "example5.pdf", datetime: "2027-09-10T14:30:00", date: "2027-09-10", month: "2027-09", week: "2027-W37", time: "14:30", textarea: "Example textarea content 5", select: "Option 5" },
            { text: "Example text 6", number: 161718, tel: "+1819202122", email: "example6@example.com", url: "https://example6.com", password: "examplepassword6", search: "Example search 6", color: "#00ffff", file: "example6.pdf", datetime: "2028-10-25T11:45:00", date: "2028-10-25", month: "2028-10", week: "2028-W43", time: "11:45", textarea: "Example textarea content 6", select: "Option 6" },
            { text: "Example text 7", number: 192021, tel: "+2122232425", email: "example7@example.com", url: "https://example7.com", password: "examplepassword7", search: "Example search 7", color: "#808080", file: "example7.pdf", datetime: "2029-11-30T16:15:00", date: "2029-11-30", month: "2029-11", week: "2029-W48", time: "16:15", textarea: "Example textarea content 7", select: "Option 7" },
            { text: "Example text 8", number: 222324, tel: "+2425262728", email: "example8@example.com", url: "https://example8.com", password: "examplepassword8", search: "Example search 8", color: "#c0c0c0", file: "example8.pdf", datetime: "2030-12-05T08:00:00", date: "2030-12-05", month: "2030-12", week: "2030-W49", time: "08:00", textarea: "Example textarea content 8", select: "Option 8" },
            { text: "Example text 9", number: 252627, tel: "+2728293031", email: "example9@example.com", url: "https://example9.com", password: "examplepassword9", search: "Example search 9", color: "#ffffff", file: "example9.pdf", datetime: "2031-01-20T12:30:00", date: "2031-01-20", month: "2031-01", week: "2031-W03", time: "12:30", textarea: "Example textarea content 9", select: "Option 9" },
            { text: "Example text 10", number: 282930, tel: "+3031323334", email: "example10@example.com", url: "https://example10.com", password: "examplepassword10", search: "Example search 10", color: "#000000", file: "example10.pdf", datetime: "2032-02-15T17:45:00", date: "2032-02-15", month: "2032-02", week: "2032-W07", time: "17:45", textarea: "Example textarea content 10", select: "Option 10" },
            { text: "John Doe", number: 42, tel: "+1234567890", email: "john.doe@example.com", url: "https://johndoe.com", password: "strongpassword", search: "search query", color: "#3366cc", file: "document.pdf", datetime: "2023-08-18T08:30:00", date: "2023-08-18", month: "2023-08", week: "2023-W33", time: "08:30", textarea: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor.", select: "Option A" },
            { text: "Jane Smith", number: 35, tel: "+9876543210", email: "jane.smith@example.com", url: "https://janesmith.com", password: "safepassword", search: "keyword", color: "#ff6600", file: "data_sheet.pdf", datetime: "2024-09-25T15:45:00", date: "2024-09-25", month: "2024-09", week: "2024-W39", time: "15:45", textarea: "Nulla facilisi. Proin tristique, est ac fermentum suscipit, quam tellus sollicitudin mi, ac rutrum.", select: "Option B" },
            { text: "Alice Johnson", number: 28, tel: "+1122334455", email: "alice.johnson@example.com", url: "https://alicejohnson.com", password: "securepassword", search: "phrase", color: "#009933", file: "presentation.pdf", datetime: "2025-10-10T11:00:00", date: "2025-10-10", month: "2025-10", week: "2025-W41", time: "11:00", textarea: "Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui, id egestas quam mauris ut lacus.", select: "Option C" },
            { text: "Michael Brown", number: 55, tel: "+9988776655", email: "michael.brown@example.com", url: "https://michaelbrown.com", password: "mypassword", search: "query", color: "#cc3300", file: "report.pdf", datetime: "2026-11-05T09:15:00", date: "2026-11-05", month: "2026-11", week: "2026-W45", time: "09:15", textarea: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo.", select: "Option D" },
            { text: "Emily Davis", number: 38, tel: "+5566778899", email: "emily.davis@example.com", url: "https://emilydavis.com", password: "testpassword", search: "text", color: "#6600cc", file: "manual.pdf", datetime: "2027-12-20T14:00:00", date: "2027-12-20", month: "2027-12", week: "2027-W51", time: "14:00", textarea: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.", select: "Option E" },
            { text: "David Wilson", number: 47, tel: "+4433221100", email: "david.wilson@example.com", url: "https://davidwilson.com", password: "example123", search: "word", color: "#ff3399", file: "guide.pdf", datetime: "2028-01-15T16:30:00", date: "2028-01-15", month: "2028-01", week: "2028-W02", time: "16:30", textarea: "Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.", select: "Option F" },
            { text: "Sophia Martinez", number: 31, tel: "+9988776655", email: "sophia.martinez@example.com", url: "https://sophiamartinez.com", password: "abc123", search: "example", color: "#0099cc", file: "book.pdf", datetime: "2029-02-10T10:45:00", date: "2029-02-10", month: "2029-02", week: "2029-W06", time: "10:45", textarea: "Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.", select: "Option G" },
            { text: "Olivia Taylor", number: 26, tel: "+1122334455", email: "olivia.taylor@example.com", url: "https://oliviataylor.com", password: "qwerty", search: "content", color: "#ff9966", file: "handbook.pdf", datetime: "2030-03-25T13:15:00", date: "2030-03-25", month: "2030-03", week: "2030-W12", time: "13:15", textarea: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", select: "Option H" },
            { text: "William Anderson", number: 34, tel: "+3344556677", email: "william.anderson@example.com", url: "https://williamanderson.com", password: "password123", search: "textbook", color: "#003366", file: "catalog.pdf", datetime: "2031-04-05T11:30:00", date: "2031-04-05", month: "2031-04", week: "2031-W14", time: "11:30", textarea: "Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna.", select: "Option I" },
            { text: "Ethan Thomas", number: 39, tel: "+1122334455", email: "ethan.thomas@example.com", url: "https://ethanthomas.com", password: "password1234", search: "document", color: "#660066", file: "agenda.pdf", datetime: "2032-05-20T09:45:00", date: "2032-05-20", month: "2032-05", week: "2032-W20", time: "09:45", textarea: "Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", select: "Option J" },
            { text: "Sarah Wilson", number: 29, tel: "+1122334455", email: "sarah.wilson@example.com", url: "https://sarahwilson.com", password: "pass123", search: "data", color: "#9900cc", file: "report.pdf", datetime: "2023-06-15T10:00:00", date: "2023-06-15", month: "2023-06", week: "2023-W24", time: "10:00", textarea: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo.", select: "Option A" },
            { text: "Daniel Miller", number: 36, tel: "+9988776655", email: "daniel.miller@example.com", url: "https://danielmiller.com", password: "abc1234", search: "text", color: "#003399", file: "presentation.pdf", datetime: "2024-07-20T14:30:00", date: "2024-07-20", month: "2024-07", week: "2024-W29", time: "14:30", textarea: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.", select: "Option B" },
            { text: "Emma Brown", number: 43, tel: "+1122334455", email: "emma.brown@example.com", url: "https://emmabrown.com", password: "qwerty123", search: "query", color: "#cc0099", file: "manual.pdf", datetime: "2025-08-25T11:45:00", date: "2025-08-25", month: "2025-08", week: "2025-W35", time: "11:45", textarea: "Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna.", select: "Option C" },
            { text: "James Taylor", number: 50, tel: "+3344556677", email: "james.taylor@example.com", url: "https://jamestaylor.com", password: "password1234", search: "search term", color: "#ff3366", file: "report.pdf", datetime: "2026-09-10T09:15:00", date: "2026-09-10", month: "2026-09", week: "2026-W37", time: "09:15", textarea: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", select: "Option D" },
            { text: "Ava Johnson", number: 33, tel: "+5566778899", email: "ava.johnson@example.com", url: "https://avajohnson.com", password: "examplepass", search: "example", color: "#ff6600", file: "document.pdf", datetime: "2027-10-05T13:30:00", date: "2027-10-05", month: "2027-10", week: "2027-W40", time: "13:30", textarea: "Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", select: "Option E" },
            { text: "Benjamin Martinez", number: 45, tel: "+9988776655", email: "benjamin.martinez@example.com", url: "https://benjaminmartinez.com", password: "example1234", search: "keyword", color: "#009966", file: "data_sheet.pdf", datetime: "2028-11-20T15:00:00", date: "2028-11-20", month: "2028-11", week: "2028-W47", time: "15:00", textarea: "Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.", select: "Option F" },
            { text: "Mia Thompson", number: 30, tel: "+3344556677", email: "mia.thompson@example.com", url: "https://miathompson.com", password: "examplepassword", search: "text query", color: "#663399", file: "presentation.pdf", datetime: "2029-12-15T10:30:00", date: "2029-12-15", month: "2029-12", week: "2029-W50", time: "10:30", textarea: "Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus.", select: "Option G" },
            { text: "Chloe Davis", number: 40, tel: "+1122334455", email: "chloe.davis@example.com", url: "https://chloedavis.com", password: "testpass", search: "searchword", color: "#660033", file: "report.pdf", datetime: "2030-01-25T12:15:00", date: "2030-01-25", month: "2030-01", week: "2030-W04", time: "12:15", textarea: "Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo.", select: "Option H" },
            { text: "Evelyn Wilson", number: 32, tel: "+9988776655", email: "evelyn.wilson@example.com", url: "https://evelynwilson.com", password: "mypassword123", search: "searchterm", color: "#009999", file: "manual.pdf", datetime: "2031-02-20T13:45:00", date: "2031-02-20", month: "2031-02", week: "2031-W07", time: "13:45", textarea: "Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna.", select: "Option I" },
            { text: "Noah Anderson", number: 37, tel: "+3344556677", email: "noah.anderson@example.com", url: "https://noahanderson.com", password: "password12345", search: "searchstring", color: "#993366", file: "presentation.pdf", datetime: "2032-03-15T11:00:00", date: "2032-03-15", month: "2032-03", week: "2032-W11", time: "11:00", textarea: "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", select: "Option J" },
                
        ];

        this.summaries = [];
    }
    render() {
        return html`
            <div
                class="md-layout-column"
                style="height:100%;"
            >
                <div
                    style="height:100%;overflow:auto;"
                    class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4"
                >
                    <md-data-table
                        id="table"
                        .columns="${this.columns}"
                        .rows="${this.rows.slice(0,20)}"
                        .summaries="${this.summaries}"
                        checkbox
                    ></md-data-table>
                </div>
            </div>
        `;
    }
}

customElements.define("app-data-table", AppDataTableElement);

export default document.createElement("app-data-table");
