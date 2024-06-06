import { html } from "lit";
import { MDElement } from "../../com/element/element";

class AppDataTableElement extends MDElement {
    constructor() {
        super();

        this.columns = [
            { name: "symbol", label: "Symbol", width: 56 * 2, sticky: true },
            { name: "company", label: "Company", width: 56 * 5, sticky: true },
            { name: "price", label: "Price", width: 56 * 4 },
            { name: "change", label: "Change", width: 56 * 3 },
            { name: "changePercent", label: "Change (%)", width: 56 * 3 },
            { name: "volume", label: "Volume", width: 56 * 4 },
            { name: "marketCap", label: "Market Cap", width: 56 * 4 },
            { name: "peRatio", label: "P/E Ratio", width: 56 * 3 },
            { name: "dividendYield", label: "Dividend Yield", width: 56 * 3 },
            { name: "eps", label: "EPS", width: 56 * 3 },
            { name: "52WeekHigh", label: "52 Week High", width: 56 * 3, sticky: true },
            { name: "52WeekLow", label: "52 Week Low", width: 56 * 3, sticky: true },
        ];

        this.rows = [
            { symbol: "AAPL", company: "Apple Inc.", price: 145.12, change: -1.23, changePercent: -0.84, volume: 35678900, marketCap: 2401.3, peRatio: 28.45, dividendYield: 0.62, eps: 4.45, "52WeekHigh": 150.32, "52WeekLow": 110.89 },
            { symbol: "MSFT", company: "Microsoft Corporation", price: 250.36, change: 2.45, changePercent: 0.99, volume: 28765400, marketCap: 1900.6, peRatio: 34.21, dividendYield: 0.87, eps: 7.32, "52WeekHigh": 260.78, "52WeekLow": 200.12 },
            { symbol: "GOOGL", company: "Alphabet Inc.", price: 2700.45, change: -10.98, changePercent: -0.4, volume: 1689000, marketCap: 1820.2, peRatio: 29.76, dividendYield: 0.53, eps: 90.78, "52WeekHigh": 2805.32, "52WeekLow": 2200.11 },
            { symbol: "AMZN", company: "Amazon.com, Inc.", price: 3245.67, change: -15.43, changePercent: -0.47, volume: 3987100, marketCap: 1620.9, peRatio: 78.9, dividendYield: 0.0, eps: 41.32, "52WeekHigh": 3350.45, "52WeekLow": 2800.23 },
            { symbol: "TSLA", company: "Tesla, Inc.", price: 605.89, change: 5.67, changePercent: 0.94, volume: 7896500, marketCap: 632.5, peRatio: 345.67, dividendYield: 0.0, eps: 1.75, "52WeekHigh": 625.9, "52WeekLow": 380.5 },
            { symbol: "NFLX", company: "Netflix, Inc.", price: 510.23, change: 3.56, changePercent: 0.7, volume: 5478000, marketCap: 225.6, peRatio: 70.12, dividendYield: 0.0, eps: 7.28, "52WeekHigh": 520.9, "52WeekLow": 420.1 },
            { symbol: "NVDA", company: "NVIDIA Corporation", price: 675.34, change: -4.76, changePercent: -0.7, volume: 3895400, marketCap: 420.3, peRatio: 91.34, dividendYield: 0.12, eps: 7.42, "52WeekHigh": 700.45, "52WeekLow": 550.23 },
            { symbol: "FB", company: "Meta Platforms, Inc.", price: 320.67, change: 3.21, changePercent: 1.01, volume: 19876000, marketCap: 920.4, peRatio: 22.89, dividendYield: 0.78, eps: 13.45, "52WeekHigh": 340.56, "52WeekLow": 280.11 },
            { symbol: "BRK.A", company: "Berkshire Hathaway Inc.", price: 435000, change: -1200, changePercent: -0.28, volume: 1200, marketCap: 567.8, peRatio: 14.56, dividendYield: 0.0, eps: 29850.23, "52WeekHigh": 440000, "52WeekLow": 400000 },
            { symbol: "JPM", company: "JPMorgan Chase & Co.", price: 160.56, change: -0.67, changePercent: -0.41, volume: 9876000, marketCap: 480.2, peRatio: 12.34, dividendYield: 2.45, eps: 13.02, "52WeekHigh": 170.89, "52WeekLow": 140.23 },
            { symbol: "V", company: "Visa Inc.", price: 235.78, change: 1.89, changePercent: 0.81, volume: 5678900, marketCap: 520.6, peRatio: 41.56, dividendYield: 0.53, eps: 5.76, "52WeekHigh": 240.9, "52WeekLow": 200.34 },
            { symbol: "PG", company: "Procter & Gamble Company", price: 135.67, change: -0.56, changePercent: -0.41, volume: 3456700, marketCap: 340.9, peRatio: 26.78, dividendYield: 2.32, eps: 5.09, "52WeekHigh": 140.23, "52WeekLow": 120.56 },
            { symbol: "WMT", company: "Walmart Inc.", price: 142.45, change: 0.32, changePercent: 0.22, volume: 4567800, marketCap: 400.3, peRatio: 22.09, dividendYield: 1.51, eps: 6.42, "52WeekHigh": 145.67, "52WeekLow": 120.9 },
            { symbol: "VZ", company: "Verizon Communications Inc.", price: 58.9, change: -0.12, changePercent: -0.2, volume: 8901200, marketCap: 242.6, peRatio: 12.45, dividendYield: 4.42, eps: 4.72, "52WeekHigh": 62.34, "52WeekLow": 55.67 },
            { symbol: "UNH", company: "UnitedHealth Group Incorporated", price: 380.23, change: 2.45, changePercent: 0.65, volume: 2878900, marketCap: 362.8, peRatio: 23.76, dividendYield: 1.36, eps: 16.09, "52WeekHigh": 390.12, "52WeekLow": 350.78 },
            { symbol: "DIS", company: "The Walt Disney Company", price: 175.89, change: 0.98, changePercent: 0.56, volume: 5678900, marketCap: 320.5, peRatio: 40.23, dividendYield: 1.23, eps: 4.36, "52WeekHigh": 180.45, "52WeekLow": 150.67 },
            { symbol: "CSCO", company: "Cisco Systems, Inc.", price: 53.12, change: -0.34, changePercent: -0.63, volume: 4321000, marketCap: 220.4, peRatio: 20.09, dividendYield: 2.88, eps: 2.65, "52WeekHigh": 56.9, "52WeekLow": 50.11 },
            { symbol: "KO", company: "The Coca-Cola Company", price: 55.78, change: 0.45, changePercent: 0.81, volume: 5678900, marketCap: 242.6, peRatio: 28.45, dividendYield: 3.21, eps: 1.96, "52WeekHigh": 58.9, "52WeekLow": 52.34 },
            { symbol: "INTC", company: "Intel Corporation", price: 55.34, change: -0.76, changePercent: -1.36, volume: 3789000, marketCap: 223.9, peRatio: 12.76, dividendYield: 2.78, eps: 4.33, "52WeekHigh": 60.45, "52WeekLow": 50.67 },
            { symbol: "CRM", company: "Salesforce.com, Inc.", price: 235.67, change: 1.23, changePercent: 0.53, volume: 4567800, marketCap: 190.4, peRatio: 55.67, dividendYield: 0.89, eps: 4.21, "52WeekHigh": 240.89, "52WeekLow": 200.34 },
            { symbol: "PEP", company: "PepsiCo, Inc.", price: 150.9, change: 0.32, changePercent: 0.21, volume: 3456700, marketCap: 210.5, peRatio: 27.89, dividendYield: 2.75, eps: 5.43, "52WeekHigh": 155.12, "52WeekLow": 140.56 },
            { symbol: "BAC", company: "Bank of America Corporation", price: 42.56, change: -0.34, changePercent: -0.79, volume: 8901200, marketCap: 354.9, peRatio: 13.67, dividendYield: 2.98, eps: 3.12, "52WeekHigh": 46.9, "52WeekLow": 40.23 },
            { symbol: "CMCSA", company: "Comcast Corporation", price: 57.23, change: 0.89, changePercent: 1.58, volume: 2878900, marketCap: 260.8, peRatio: 20.45, dividendYield: 2.19, eps: 2.81, "52WeekHigh": 60.34, "52WeekLow": 50.56 },
            { symbol: "ADBE", company: "Adobe Inc.", price: 580.12, change: 4.56, changePercent: 0.79, volume: 4321000, marketCap: 280.6, peRatio: 54.78, dividendYield: 0.0, eps: 10.58, "52WeekHigh": 600.9, "52WeekLow": 540.23 },
            { symbol: "PYPL", company: "PayPal Holdings, Inc.", price: 265.78, change: 1.23, changePercent: 0.47, volume: 5678900, marketCap: 312.9, peRatio: 56.09, dividendYield: 0.0, eps: 4.74, "52WeekHigh": 270.9, "52WeekLow": 230.34 },
            { symbol: "IBM", company: "International Business Machines Corporation", price: 132.45, change: -0.56, changePercent: -0.42, volume: 4567800, marketCap: 123.4, peRatio: 14.32, dividendYield: 3.21, eps: 6.78, "52WeekHigh": 140.23, "52WeekLow": 120.56 },
            { symbol: "TGT", company: "Target Corporation", price: 200.67, change: 1.23, changePercent: 0.62, volume: 5678900, marketCap: 100.5, peRatio: 25.67, dividendYield: 1.89, eps: 7.82, "52WeekHigh": 210.34, "52WeekLow": 180.9 },
            { symbol: "NKE", company: "NIKE, Inc.", price: 155.34, change: 0.78, changePercent: 0.5, volume: 3456700, marketCap: 246.7, peRatio: 35.09, dividendYield: 0.85, eps: 4.42, "52WeekHigh": 160.45, "52WeekLow": 130.67 },
            { symbol: "PG", company: "The Procter & Gamble Company", price: 135.67, change: -0.56, changePercent: -0.41, volume: 3456700, marketCap: 340.9, peRatio: 26.78, dividendYield: 2.32, eps: 5.09, "52WeekHigh": 140.23, "52WeekLow": 120.56 },
            { symbol: "CVS", company: "CVS Health Corporation", price: 80.45, change: 0.32, changePercent: 0.4, volume: 2345600, marketCap: 105.3, peRatio: 13.45, dividendYield: 3.25, eps: 6.1, "52WeekHigh": 85.9, "52WeekLow": 70.12 },
            { symbol: "BABA", company: "Alibaba Group Holding Limited", price: 220.9, change: -1.23, changePercent: -0.55, volume: 7896500, marketCap: 600.8, peRatio: 28.34, dividendYield: 0.0, eps: 7.78, "52WeekHigh": 240.56, "52WeekLow": 200.34 },
            { symbol: "CAT", company: "Caterpillar Inc.", price: 200.78, change: 2.56, changePercent: 1.29, volume: 3458900, marketCap: 117.5, peRatio: 32.45, dividendYield: 2.5, eps: 6.18, "52WeekHigh": 210.56, "52WeekLow": 170.89 },
            { symbol: "MMM", company: "3M Company", price: 180.56, change: -0.89, changePercent: -0.49, volume: 4567800, marketCap: 105.4, peRatio: 20.34, dividendYield: 3.0, eps: 8.89, "52WeekHigh": 190.78, "52WeekLow": 160.9 },
            { symbol: "PEP", company: "PepsiCo, Inc.", price: 150.9, change: 0.32, changePercent: 0.21, volume: 3456700, marketCap: 210.5, peRatio: 27.89, dividendYield: 2.75, eps: 5.43, "52WeekHigh": 155.12, "52WeekLow": 140.56 },
            { symbol: "T", company: "AT&T Inc.", price: 30.78, change: -0.12, changePercent: -0.39, volume: 6789000, marketCap: 217.6, peRatio: 9.78, dividendYield: 7.14, eps: 3.15, "52WeekHigh": 35.9, "52WeekLow": 28.34 },
            { symbol: "GM", company: "General Motors Company", price: 60.34, change: 0.45, changePercent: 0.75, volume: 7890000, marketCap: 90.2, peRatio: 8.9, dividendYield: 0.0, eps: 6.78, "52WeekHigh": 65.9, "52WeekLow": 55.67 },
            { symbol: "WBA", company: "Walgreens Boots Alliance, Inc.", price: 47.56, change: -0.67, changePercent: -1.39, volume: 4567800, marketCap: 40.3, peRatio: 8.76, dividendYield: 4.21, eps: 5.43, "52WeekHigh": 52.34, "52WeekLow": 45.67 },
            { symbol: "HD", company: "The Home Depot, Inc.", price: 320.67, change: 1.21, changePercent: 0.38, volume: 19876000, marketCap: 350.4, peRatio: 26.89, dividendYield: 2.05, eps: 12.45, "52WeekHigh": 340.56, "52WeekLow": 290.11 },
            { symbol: "NIO", company: "NIO Inc.", price: 50.78, change: -0.89, changePercent: -1.73, volume: 12789000, marketCap: 78.9, peRatio: 0.0, dividendYield: 0.0, eps: -1.45, "52WeekHigh": 65.9, "52WeekLow": 45.67 },
            { symbol: "MCD", company: "McDonald's Corporation", price: 240.56, change: 1.34, changePercent: 0.56, volume: 5678900, marketCap: 187.6, peRatio: 25.78, dividendYield: 2.27, eps: 9.34, "52WeekHigh": 250.9, "52WeekLow": 210.23 },
            { symbol: "GE", company: "General Electric Company", price: 12.45, change: -0.1, changePercent: -0.8, volume: 34567000, marketCap: 109.8, peRatio: 9.32, dividendYield: 0.35, eps: 1.34, "52WeekHigh": 15.67, "52WeekLow": 10.56 },
            { symbol: "NVAX", company: "Novavax, Inc.", price: 150.34, change: 3.56, changePercent: 2.43, volume: 6789000, marketCap: 35.6, peRatio: null, dividendYield: 0.0, eps: -6.12, "52WeekHigh": 180.9, "52WeekLow": 100.45 },
            { symbol: "UAL", company: "United Airlines Holdings, Inc.", price: 52.89, change: -1.23, changePercent: -2.28, volume: 4567800, marketCap: 15.4, peRatio: null, dividendYield: 0.0, eps: -9.23, "52WeekHigh": 70.45, "52WeekLow": 45.67 },
            { symbol: "NFLX", company: "Netflix, Inc.", price: 510.23, change: 3.56, changePercent: 0.7, volume: 5478000, marketCap: 225.6, peRatio: 70.12, dividendYield: 0.0, eps: 7.28, "52WeekHigh": 520.9, "52WeekLow": 420.1 },
            { symbol: "XOM", company: "Exxon Mobil Corporation", price: 60.45, change: 0.32, changePercent: 0.53, volume: 7896500, marketCap: 255.7, peRatio: null, dividendYield: 6.09, eps: -0.95, "52WeekHigh": 70.9, "52WeekLow": 50.56 },
            { symbol: "AMD", company: "Advanced Micro Devices, Inc.", price: 85.67, change: 0.89, changePercent: 1.05, volume: 4567800, marketCap: 101.2, peRatio: 42.09, dividendYield: 0.0, eps: 2.03, "52WeekHigh": 95.12, "52WeekLow": 75.34 },
            { symbol: "TGT", company: "Target Corporation", price: 200.67, change: 1.23, changePercent: 0.62, volume: 5678900, marketCap: 100.5, peRatio: 25.67, dividendYield: 1.89, eps: 7.82, "52WeekHigh": 210.34, "52WeekLow": 180.9 },
            { symbol: "SBUX", company: "Starbucks Corporation", price: 110.78, change: -0.45, changePercent: -0.4, volume: 7890000, marketCap: 130.2, peRatio: 31.45, dividendYield: 1.98, eps: 3.52, "52WeekHigh": 120.9, "52WeekLow": 95.67 },
            { symbol: "ABNB", company: "Airbnb, Inc.", price: 180.56, change: 2.89, changePercent: 1.63, volume: 5678900, marketCap: 110.4, peRatio: null, dividendYield: 0.0, eps: -11.24, "52WeekHigh": 200.34, "52WeekLow": 130.78 },
            { symbol: "NOK", company: "Nokia Corporation", price: 5.67, change: 0.02, changePercent: 0.35, volume: 98765000, marketCap: 32.7, peRatio: null, dividendYield: 0.0, eps: -0.07, "52WeekHigh": 9.79, "52WeekLow": 3.51 },
            { symbol: "RBLX", company: "Roblox Corporation", price: 85.9, change: -1.23, changePercent: -1.42, volume: 7896500, marketCap: 55.4, peRatio: null, dividendYield: 0.0, eps: -0.48, "52WeekHigh": 103.48, "52WeekLow": 78.12 },
            { symbol: "LYFT", company: "Lyft, Inc.", price: 53.12, change: -0.56, changePercent: -1.04, volume: 12345000, marketCap: 17.2, peRatio: null, dividendYield: 0.0, eps: -2.46, "52WeekHigh": 68.9, "52WeekLow": 44.54 },
            { symbol: "SPCE", company: "Virgin Galactic Holdings, Inc.", price: 22.34, change: 0.76, changePercent: 3.52, volume: 4567800, marketCap: 5.8, peRatio: null, dividendYield: 0.0, eps: -1.8, "52WeekHigh": 62.8, "52WeekLow": 14.21 },
            { symbol: "F", company: "Ford Motor Company", price: 15.78, change: -0.34, changePercent: -2.11, volume: 18765000, marketCap: 62.9, peRatio: 9.78, dividendYield: 0.0, eps: -0.92, "52WeekHigh": 19.35, "52WeekLow": 11.16 },
            { symbol: "GM", company: "General Motors Company", price: 60.34, change: 0.45, changePercent: 0.75, volume: 7890000, marketCap: 90.2, peRatio: 8.9, dividendYield: 0.0, eps: 6.78, "52WeekHigh": 65.9, "52WeekLow": 55.67 },
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
                        .columns="${this.columns}"
                        .rows="${this.rows.slice(0, 20)}"
                        sticky
                    ></md-data-table>
                </div>
            </div>
        `;
    }
}

customElements.define("app-data-table", AppDataTableElement);

export default document.createElement("app-data-table");
