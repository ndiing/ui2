import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppDataTableElement extends MDElement {
    constructor() {
        super();
        this.columns = [
            { name: "symbol", label: "Stock Symbol", width: 112, sticky: true, sortable: true, selected: true },
            { name: "company", label: "Company Name", width: 224, sticky: true, sortable: true, selected: true },
            { name: "currentPrice", label: "Current Price", width: 112, sortable: true, selected: true },
            { name: "changePercentage", label: "Change (%)", width: 112, sortable: true, selected: true },
            { name: "marketCap", label: "Market Capitalization", width: 112, sortable: true, selected: true },
            { name: "volume", label: "Volume", width: 112, sortable: true, selected: true },
            { name: "previousClose", label: "Previous Close", width: 112, sortable: true, selected: true },
            { name: "openPrice", label: "Open Price", width: 112, sortable: true, selected: true },
            { name: "highPrice", label: "High Price", width: 112, sortable: true, selected: true },
            { name: "lowPrice", label: "Low Price", width: 112, sortable: true, selected: true },
            { name: "dividendYield", label: "Dividend Yield (%)", width: 112, sortable: true, selected: true },
            { name: "52WeekHigh", label: "52-Week High", width: 112, sticky: true, sortable: true, selected: true },
            { name: "52WeekLow", label: "52-Week Low", width: 112, sticky: true, sortable: true, selected: true },
        ];
        this.rows = [
            { symbol: "AAPL", company: "Apple Inc.", currentPrice: 150.25, changePercentage: 1.2, marketCap: "2.5T", volume: 98765432, previousClose: 148.5, openPrice: 149.0, highPrice: 151.0, lowPrice: 148.0, "52WeekHigh": 182.94, "52WeekLow": 116.21, dividendYield: 0.61 },
            { symbol: "GOOGL", company: "Alphabet Inc.", currentPrice: 2800.5, changePercentage: -0.5, marketCap: "1.8T", volume: 23456789, previousClose: 2814.75, openPrice: 2820.0, highPrice: 2830.0, lowPrice: 2795.0, "52WeekHigh": 3042.0, "52WeekLow": 2515.0, dividendYield: 0 },
            { symbol: "AMZN", company: "Amazon.com Inc.", currentPrice: 3400.75, changePercentage: 2.1, marketCap: "1.6T", volume: 56789012, previousClose: 3333.33, openPrice: 3350.0, highPrice: 3425.0, lowPrice: 3340.0, "52WeekHigh": 3773.08, "52WeekLow": 2881.0, dividendYield: 0 },
            { symbol: "TSLA", company: "Tesla Inc.", currentPrice: 720.3, changePercentage: -1.8, marketCap: "700B", volume: 45678901, previousClose: 733.33, openPrice: 725.0, highPrice: 730.0, lowPrice: 715.0, "52WeekHigh": 900.4, "52WeekLow": 539.49, dividendYield: 0 },
            { symbol: "MSFT", company: "Microsoft Corp.", currentPrice: 290.15, changePercentage: 0.5, marketCap: "2.2T", volume: 34567890, previousClose: 288.5, openPrice: 289.0, highPrice: 291.0, lowPrice: 287.0, "52WeekHigh": 305.84, "52WeekLow": 224.22, dividendYield: 0.83 },
            { symbol: "FB", company: "Meta Platforms Inc.", currentPrice: 330.12, changePercentage: 1.0, marketCap: "960B", volume: 67890123, previousClose: 326.75, openPrice: 328.5, highPrice: 332.0, lowPrice: 325.0, "52WeekHigh": 384.33, "52WeekLow": 244.61, dividendYield: 0 },
            { symbol: "NFLX", company: "Netflix Inc.", currentPrice: 610.2, changePercentage: 0.8, marketCap: "270B", volume: 78901234, previousClose: 605.25, openPrice: 607.5, highPrice: 615.0, lowPrice: 602.0, "52WeekHigh": 700.99, "52WeekLow": 478.54, dividendYield: 0 },
            { symbol: "NVDA", company: "NVIDIA Corp.", currentPrice: 800.75, changePercentage: 3.5, marketCap: "480B", volume: 89012345, previousClose: 773.0, openPrice: 780.0, highPrice: 805.0, lowPrice: 775.0, "52WeekHigh": 832.0, "52WeekLow": 428.0, dividendYield: 0.12 },
            { symbol: "DIS", company: "Walt Disney Co.", currentPrice: 185.3, changePercentage: -0.7, marketCap: "340B", volume: 90123456, previousClose: 186.6, openPrice: 187.0, highPrice: 188.5, lowPrice: 184.0, "52WeekHigh": 203.02, "52WeekLow": 167.57, dividendYield: 1.22 },
            { symbol: "V", company: "Visa Inc.", currentPrice: 235.65, changePercentage: 0.3, marketCap: "510B", volume: 12345678, previousClose: 235.0, openPrice: 234.5, highPrice: 237.0, lowPrice: 233.5, "52WeekHigh": 252.67, "52WeekLow": 190.1, dividendYield: 0.6 },
            { symbol: "IBM", company: "International Business Machines Corp.", currentPrice: 145.5, changePercentage: -0.2, marketCap: "130B", volume: 23456789, previousClose: 145.8, openPrice: 146.0, highPrice: 147.0, lowPrice: 144.5, "52WeekHigh": 153.21, "52WeekLow": 116.73, dividendYield: 4.82 },
            { symbol: "ORCL", company: "Oracle Corporation", currentPrice: 90.35, changePercentage: 1.5, marketCap: "250B", volume: 12345678, previousClose: 89.0, openPrice: 89.5, highPrice: 91.0, lowPrice: 88.5, "52WeekHigh": 96.24, "52WeekLow": 59.74, dividendYield: 1.61 },
            { symbol: "INTC", company: "Intel Corporation", currentPrice: 55.2, changePercentage: -1.1, marketCap: "220B", volume: 34567890, previousClose: 55.8, openPrice: 56.0, highPrice: 56.5, lowPrice: 54.8, "52WeekHigh": 68.49, "52WeekLow": 45.24, dividendYield: 2.3 },
            { symbol: "CSCO", company: "Cisco Systems Inc.", currentPrice: 53.15, changePercentage: 0.8, marketCap: "224B", volume: 45678901, previousClose: 52.73, openPrice: 52.8, highPrice: 53.5, lowPrice: 52.5, "52WeekHigh": 64.29, "52WeekLow": 46.51, dividendYield: 2.8 },
            { symbol: "ADBE", company: "Adobe Inc.", currentPrice: 550.65, changePercentage: 2.2, marketCap: "260B", volume: 56789012, previousClose: 538.0, openPrice: 540.0, highPrice: 555.0, lowPrice: 537.5, "52WeekHigh": 673.88, "52WeekLow": 420.78, dividendYield: 0 },
            { symbol: "CRM", company: "Salesforce.com Inc.", currentPrice: 225.85, changePercentage: -0.3, marketCap: "210B", volume: 67890123, previousClose: 226.5, openPrice: 227.0, highPrice: 228.0, lowPrice: 224.0, "52WeekHigh": 284.5, "52WeekLow": 154.64, dividendYield: 0 },
            { symbol: "PYPL", company: "PayPal Holdings Inc.", currentPrice: 190.7, changePercentage: 1.8, marketCap: "225B", volume: 78901234, previousClose: 187.35, openPrice: 188.0, highPrice: 192.0, lowPrice: 186.0, "52WeekHigh": 310.16, "52WeekLow": 179.15, dividendYield: 0 },
            { symbol: "NFLX", company: "Netflix Inc.", currentPrice: 610.2, changePercentage: 0.8, marketCap: "270B", volume: 78901234, previousClose: 605.25, openPrice: 607.5, highPrice: 615.0, lowPrice: 602.0, "52WeekHigh": 700.99, "52WeekLow": 478.54, dividendYield: 0 },
            { symbol: "PEP", company: "PepsiCo Inc.", currentPrice: 155.65, changePercentage: 0.4, marketCap: "214B", volume: 89012345, previousClose: 155.0, openPrice: 154.5, highPrice: 156.0, lowPrice: 153.5, "52WeekHigh": 177.62, "52WeekLow": 147.76, dividendYield: 2.75 },
            { symbol: "KO", company: "Coca-Cola Co.", currentPrice: 55.8, changePercentage: -0.2, marketCap: "240B", volume: 90123456, previousClose: 55.9, openPrice: 56.0, highPrice: 56.5, lowPrice: 55.5, "52WeekHigh": 60.13, "52WeekLow": 48.11, dividendYield: 3.07 },
            { symbol: "BA", company: "The Boeing Company", currentPrice: 245.5, changePercentage: 1.3, marketCap: "140B", volume: 23056789, previousClose: 242.5, openPrice: 243.0, highPrice: 246.5, lowPrice: 241.0, "52WeekHigh": 278.57, "52WeekLow": 166.01, dividendYield: 0 },
            { symbol: "JNJ", company: "Johnson & Johnson", currentPrice: 165.75, changePercentage: -0.5, marketCap: "435B", volume: 12045678, previousClose: 166.5, openPrice: 167.0, highPrice: 168.0, lowPrice: 164.5, "52WeekHigh": 179.92, "52WeekLow": 152.5, dividendYield: 2.54 },
            { symbol: "PG", company: "Procter & Gamble Co.", currentPrice: 140.85, changePercentage: 0.6, marketCap: "340B", volume: 34067890, previousClose: 140.0, openPrice: 139.5, highPrice: 141.0, lowPrice: 138.5, "52WeekHigh": 147.23, "52WeekLow": 121.54, dividendYield: 2.33 },
            { symbol: "XOM", company: "Exxon Mobil Corporation", currentPrice: 90.2, changePercentage: 2.1, marketCap: "380B", volume: 45078901, previousClose: 88.25, openPrice: 89.0, highPrice: 91.0, lowPrice: 88.5, "52WeekHigh": 105.57, "52WeekLow": 52.54, dividendYield: 5.67 },
            { symbol: "JPM", company: "JPMorgan Chase & Co.", currentPrice: 165.45, changePercentage: -0.8, marketCap: "485B", volume: 56089012, previousClose: 166.8, openPrice: 167.5, highPrice: 168.0, lowPrice: 164.0, "52WeekHigh": 173.45, "52WeekLow": 134.45, dividendYield: 2.67 },
            { symbol: "WMT", company: "Walmart Inc.", currentPrice: 145.3, changePercentage: 1.1, marketCap: "410B", volume: 67890123, previousClose: 144.0, openPrice: 143.5, highPrice: 146.0, lowPrice: 143.0, "52WeekHigh": 152.57, "52WeekLow": 117.27, dividendYield: 1.55 },
            { symbol: "MCD", company: "McDonald's Corporation", currentPrice: 245.9, changePercentage: 0.4, marketCap: "185B", volume: 78901234, previousClose: 245.0, openPrice: 244.5, highPrice: 247.0, lowPrice: 243.5, "52WeekHigh": 271.15, "52WeekLow": 202.73, dividendYield: 2.27 },
            { symbol: "NKE", company: "Nike Inc.", currentPrice: 133.5, changePercentage: 0.7, marketCap: "210B", volume: 89012345, previousClose: 132.6, openPrice: 132.0, highPrice: 134.0, lowPrice: 131.5, "52WeekHigh": 147.95, "52WeekLow": 112.85, dividendYield: 0.8 },
            { symbol: "PFE", company: "Pfizer Inc.", currentPrice: 46.2, changePercentage: -1.0, marketCap: "260B", volume: 90123456, previousClose: 46.7, openPrice: 47.0, highPrice: 47.5, lowPrice: 45.8, "52WeekHigh": 61.71, "52WeekLow": 41.45, dividendYield: 3.55 },
            { symbol: "VZ", company: "Verizon Communications Inc.", currentPrice: 55.5, changePercentage: 0.2, marketCap: "230B", volume: 11234567, previousClose: 55.4, openPrice: 55.0, highPrice: 55.8, lowPrice: 54.5, "52WeekHigh": 61.95, "52WeekLow": 50.86, dividendYield: 4.35 },
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
                        .rows="${this.rows}"
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
