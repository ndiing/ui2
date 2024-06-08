import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { MDStoreModule } from "../../com/store/store";

class AppDataTableElement extends MDElement {
    constructor() {
        super();
        this.columns = [
            { name: "symbol", label: "Symbol", width: 56 * 2 },
            { name: "company", label: "Company", width: 56 * 4 },
            { name: "price", label: "Price", width: 56 * 2 },
            { name: "change", label: "Change", width: 56 * 2 },
            { name: "volume", label: "Volume", width: 56 * 2 },
            // { name: "openPrice", label: "Open Price", width: 56 * 2 },
            // { name: "highPrice", label: "High Price", width: 56 * 2 },
            // { name: "lowPrice", label: "Low Price", width: 56 * 2 },
            // { name: "marketCap", label: "Market Cap", width: 56 * 2 },
            // { name: "52WeekHigh", label: "52 Week High", width: 56 * 2 },
            // { name: "52WeekLow", label: "52 Week Low", width: 56 * 2 },
            // { name: "peRatio", label: "P/E Ratio", width: 56 * 2 },
            // { name: "dividendYield", label: "Dividend Yield", width: 56 * 2 },
            // { name: "eps", label: "EPS", width: 56 * 2 },
        ];

        this.rows = [
            { symbol: "AAPL", company: "Apple Inc.", price: 145.09, change: -1.5, volume: 54321000, openPrice: 146.7, highPrice: 147.1, lowPrice: 144.5, marketCap: 2400000000000, "52WeekHigh": 150.0, "52WeekLow": 120.0, peRatio: 30.5, dividendYield: 0.6, eps: 5.0 },
            { symbol: "MSFT", company: "Microsoft Corp.", price: 289.67, change: 0.3, volume: 32165400, openPrice: 290.5, highPrice: 292.0, lowPrice: 288.3, marketCap: 2200000000000, "52WeekHigh": 300.0, "52WeekLow": 250.0, peRatio: 35.0, dividendYield: 0.9, eps: 8.25 },
            { symbol: "GOOGL", company: "Alphabet Inc.", price: 2725.6, change: -12.4, volume: 12345000, openPrice: 2740.0, highPrice: 2755.5, lowPrice: 2705.1, marketCap: 1800000000000, "52WeekHigh": 2800.0, "52WeekLow": 2200.0, peRatio: 32.0, dividendYield: 0.0, eps: 45.5 },
            { symbol: "AMZN", company: "Amazon.com Inc.", price: 3342.88, change: 15.2, volume: 6789000, openPrice: 3320.0, highPrice: 3355.0, lowPrice: 3310.2, marketCap: 1700000000000, "52WeekHigh": 3500.0, "52WeekLow": 2900.0, peRatio: 60.0, dividendYield: 0.0, eps: 52.3 },
            { symbol: "TSLA", company: "Tesla Inc.", price: 759.2, change: -8.8, volume: 7654321, openPrice: 770.0, highPrice: 772.5, lowPrice: 755.1, marketCap: 760000000000, "52WeekHigh": 900.0, "52WeekLow": 600.0, peRatio: 85.0, dividendYield: 0.0, eps: 8.5 },
            { symbol: "FB", company: "Meta Platforms Inc.", price: 355.64, change: 1.6, volume: 21436500, openPrice: 353.5, highPrice: 357.0, lowPrice: 352.0, marketCap: 1000000000000, "52WeekHigh": 375.0, "52WeekLow": 250.0, peRatio: 29.0, dividendYield: 0.0, eps: 12.25 },
            { symbol: "NFLX", company: "Netflix Inc.", price: 510.12, change: -3.4, volume: 14321000, openPrice: 515.0, highPrice: 520.5, lowPrice: 508.2, marketCap: 225000000000, "52WeekHigh": 550.0, "52WeekLow": 400.0, peRatio: 50.0, dividendYield: 0.0, eps: 10.2 },
            { symbol: "NVDA", company: "NVIDIA Corp.", price: 625.0, change: 10.0, volume: 12343200, openPrice: 615.0, highPrice: 630.0, lowPrice: 612.5, marketCap: 375000000000, "52WeekHigh": 650.0, "52WeekLow": 500.0, peRatio: 55.0, dividendYield: 0.1, eps: 11.5 },
            { symbol: "INTC", company: "Intel Corp.", price: 54.9, change: 0.5, volume: 87654321, openPrice: 54.4, highPrice: 55.5, lowPrice: 54.0, marketCap: 225000000000, "52WeekHigh": 60.0, "52WeekLow": 45.0, peRatio: 12.0, dividendYield: 2.0, eps: 4.5 },
            { symbol: "AMD", company: "Advanced Micro Devices Inc.", price: 84.2, change: -1.0, volume: 65432100, openPrice: 85.0, highPrice: 86.0, lowPrice: 83.5, marketCap: 127000000000, "52WeekHigh": 100.0, "52WeekLow": 70.0, peRatio: 40.0, dividendYield: 0.0, eps: 2.1 },
            { symbol: "ORCL", company: "Oracle Corp.", price: 88.7, change: 0.7, volume: 43210000, openPrice: 88.0, highPrice: 89.5, lowPrice: 87.0, marketCap: 200000000000, "52WeekHigh": 95.0, "52WeekLow": 70.0, peRatio: 20.0, dividendYield: 1.5, eps: 4.45 },
            { symbol: "IBM", company: "IBM Corp.", price: 139.4, change: -0.8, volume: 35421000, openPrice: 140.0, highPrice: 141.5, lowPrice: 138.0, marketCap: 125000000000, "52WeekHigh": 150.0, "52WeekLow": 115.0, peRatio: 14.0, dividendYield: 4.5, eps: 10.0 },
            { symbol: "CSCO", company: "Cisco Systems Inc.", price: 55.12, change: -0.2, volume: 23210000, openPrice: 55.5, highPrice: 56.0, lowPrice: 54.5, marketCap: 230000000000, "52WeekHigh": 60.0, "52WeekLow": 45.0, peRatio: 16.0, dividendYield: 2.8, eps: 3.5 },
            { symbol: "ADBE", company: "Adobe Inc.", price: 519.25, change: 1.75, volume: 6543210, openPrice: 517.0, highPrice: 522.0, lowPrice: 515.0, marketCap: 250000000000, "52WeekHigh": 550.0, "52WeekLow": 420.0, peRatio: 38.0, dividendYield: 0.0, eps: 13.65 },
            { symbol: "AAPL", company: "Apple Inc.", price: 145.09, change: -1.5, volume: 54321000, openPrice: 146.7, highPrice: 147.1, lowPrice: 144.5, marketCap: 2400000000000, "52WeekHigh": 150.0, "52WeekLow": 120.0, peRatio: 30.5, dividendYield: 0.6, eps: 5.0 },
            { symbol: "MSFT", company: "Microsoft Corp.", price: 289.67, change: 0.3, volume: 32165400, openPrice: 290.5, highPrice: 292.0, lowPrice: 288.3, marketCap: 2200000000000, "52WeekHigh": 300.0, "52WeekLow": 250.0, peRatio: 35.0, dividendYield: 0.9, eps: 8.25 },
            { symbol: "GOOGL", company: "Alphabet Inc.", price: 2725.6, change: -12.4, volume: 12345000, openPrice: 2740.0, highPrice: 2755.5, lowPrice: 2705.1, marketCap: 1800000000000, "52WeekHigh": 2800.0, "52WeekLow": 2200.0, peRatio: 32.0, dividendYield: 0.0, eps: 45.5 },
            { symbol: "AMZN", company: "Amazon.com Inc.", price: 3342.88, change: 15.2, volume: 6789000, openPrice: 3320.0, highPrice: 3355.0, lowPrice: 3310.2, marketCap: 1700000000000, "52WeekHigh": 3500.0, "52WeekLow": 2900.0, peRatio: 60.0, dividendYield: 0.0, eps: 52.3 },
            { symbol: "TSLA", company: "Tesla Inc.", price: 759.2, change: -8.8, volume: 7654321, openPrice: 770.0, highPrice: 772.5, lowPrice: 755.1, marketCap: 760000000000, "52WeekHigh": 900.0, "52WeekLow": 600.0, peRatio: 85.0, dividendYield: 0.0, eps: 8.5 },
            { symbol: "FB", company: "Meta Platforms Inc.", price: 355.64, change: 1.6, volume: 21436500, openPrice: 353.5, highPrice: 357.0, lowPrice: 352.0, marketCap: 1000000000000, "52WeekHigh": 375.0, "52WeekLow": 250.0, peRatio: 29.0, dividendYield: 0.0, eps: 12.25 },
            { symbol: "NFLX", company: "Netflix Inc.", price: 510.12, change: -3.4, volume: 14321000, openPrice: 515.0, highPrice: 520.5, lowPrice: 508.2, marketCap: 225000000000, "52WeekHigh": 550.0, "52WeekLow": 400.0, peRatio: 50.0, dividendYield: 0.0, eps: 10.2 },
            { symbol: "NVDA", company: "NVIDIA Corp.", price: 625.0, change: 10.0, volume: 12343200, openPrice: 615.0, highPrice: 630.0, lowPrice: 612.5, marketCap: 375000000000, "52WeekHigh": 650.0, "52WeekLow": 500.0, peRatio: 55.0, dividendYield: 0.1, eps: 11.5 },
            { symbol: "INTC", company: "Intel Corp.", price: 54.9, change: 0.5, volume: 87654321, openPrice: 54.4, highPrice: 55.5, lowPrice: 54.0, marketCap: 225000000000, "52WeekHigh": 60.0, "52WeekLow": 45.0, peRatio: 12.0, dividendYield: 2.0, eps: 4.5 },
            { symbol: "AMD", company: "Advanced Micro Devices Inc.", price: 84.2, change: -1.0, volume: 65432100, openPrice: 85.0, highPrice: 86.0, lowPrice: 83.5, marketCap: 127000000000, "52WeekHigh": 100.0, "52WeekLow": 70.0, peRatio: 40.0, dividendYield: 0.0, eps: 2.1 },
            { symbol: "ORCL", company: "Oracle Corp.", price: 88.7, change: 0.7, volume: 43210000, openPrice: 88.0, highPrice: 89.5, lowPrice: 87.0, marketCap: 200000000000, "52WeekHigh": 95.0, "52WeekLow": 70.0, peRatio: 20.0, dividendYield: 1.5, eps: 4.45 },
            { symbol: "IBM", company: "IBM Corp.", price: 139.4, change: -0.8, volume: 35421000, openPrice: 140.0, highPrice: 141.5, lowPrice: 138.0, marketCap: 125000000000, "52WeekHigh": 150.0, "52WeekLow": 115.0, peRatio: 14.0, dividendYield: 4.5, eps: 10.0 },
            { symbol: "CSCO", company: "Cisco Systems Inc.", price: 55.12, change: -0.2, volume: 23210000, openPrice: 55.5, highPrice: 56.0, lowPrice: 54.5, marketCap: 230000000000, "52WeekHigh": 60.0, "52WeekLow": 45.0, peRatio: 16.0, dividendYield: 2.8, eps: 3.5 },
            { symbol: "ADBE", company: "Adobe Inc.", price: 519.25, change: 1.75, volume: 6543210, openPrice: 517.0, highPrice: 522.0, lowPrice: 515.0, marketCap: 250000000000, "52WeekHigh": 550.0, "52WeekLow": 420.0, peRatio: 38.0, dividendYield: 0.0, eps: 13.65 },
            { symbol: "AAPL", company: "Apple Inc.", price: 145.09, change: -1.5, volume: 54321000, openPrice: 146.7, highPrice: 147.1, lowPrice: 144.5, marketCap: 2400000000000, "52WeekHigh": 150.0, "52WeekLow": 120.0, peRatio: 30.5, dividendYield: 0.6, eps: 5.0 },
            { symbol: "MSFT", company: "Microsoft Corp.", price: 289.67, change: 0.3, volume: 32165400, openPrice: 290.5, highPrice: 292.0, lowPrice: 288.3, marketCap: 2200000000000, "52WeekHigh": 300.0, "52WeekLow": 250.0, peRatio: 35.0, dividendYield: 0.9, eps: 8.25 },
            { symbol: "GOOGL", company: "Alphabet Inc.", price: 2725.6, change: -12.4, volume: 12345000, openPrice: 2740.0, highPrice: 2755.5, lowPrice: 2705.1, marketCap: 1800000000000, "52WeekHigh": 2800.0, "52WeekLow": 2200.0, peRatio: 32.0, dividendYield: 0.0, eps: 45.5 },
            { symbol: "AMZN", company: "Amazon.com Inc.", price: 3342.88, change: 15.2, volume: 6789000, openPrice: 3320.0, highPrice: 3355.0, lowPrice: 3310.2, marketCap: 1700000000000, "52WeekHigh": 3500.0, "52WeekLow": 2900.0, peRatio: 60.0, dividendYield: 0.0, eps: 52.3 },
            { symbol: "TSLA", company: "Tesla Inc.", price: 759.2, change: -8.8, volume: 7654321, openPrice: 770.0, highPrice: 772.5, lowPrice: 755.1, marketCap: 760000000000, "52WeekHigh": 900.0, "52WeekLow": 600.0, peRatio: 85.0, dividendYield: 0.0, eps: 8.5 },
            { symbol: "FB", company: "Meta Platforms Inc.", price: 355.64, change: 1.6, volume: 21436500, openPrice: 353.5, highPrice: 357.0, lowPrice: 352.0, marketCap: 1000000000000, "52WeekHigh": 375.0, "52WeekLow": 250.0, peRatio: 29.0, dividendYield: 0.0, eps: 12.25 },
            { symbol: "NFLX", company: "Netflix Inc.", price: 510.12, change: -3.4, volume: 14321000, openPrice: 515.0, highPrice: 520.5, lowPrice: 508.2, marketCap: 225000000000, "52WeekHigh": 550.0, "52WeekLow": 400.0, peRatio: 50.0, dividendYield: 0.0, eps: 10.2 },
            { symbol: "NVDA", company: "NVIDIA Corp.", price: 625.0, change: 10.0, volume: 12343200, openPrice: 615.0, highPrice: 630.0, lowPrice: 612.5, marketCap: 375000000000, "52WeekHigh": 650.0, "52WeekLow": 500.0, peRatio: 55.0, dividendYield: 0.1, eps: 11.5 },
            { symbol: "INTC", company: "Intel Corp.", price: 54.9, change: 0.5, volume: 87654321, openPrice: 54.4, highPrice: 55.5, lowPrice: 54.0, marketCap: 225000000000, "52WeekHigh": 60.0, "52WeekLow": 45.0, peRatio: 12.0, dividendYield: 2.0, eps: 4.5 },
            { symbol: "AMD", company: "Advanced Micro Devices Inc.", price: 84.2, change: -1.0, volume: 65432100, openPrice: 85.0, highPrice: 86.0, lowPrice: 83.5, marketCap: 127000000000, "52WeekHigh": 100.0, "52WeekLow": 70.0, peRatio: 40.0, dividendYield: 0.0, eps: 2.1 },
            { symbol: "ORCL", company: "Oracle Corp.", price: 88.7, change: 0.7, volume: 43210000, openPrice: 88.0, highPrice: 89.5, lowPrice: 87.0, marketCap: 200000000000, "52WeekHigh": 95.0, "52WeekLow": 70.0, peRatio: 20.0, dividendYield: 1.5, eps: 4.45 },
            { symbol: "IBM", company: "IBM Corp.", price: 139.4, change: -0.8, volume: 35421000, openPrice: 140.0, highPrice: 141.5, lowPrice: 138.0, marketCap: 125000000000, "52WeekHigh": 150.0, "52WeekLow": 115.0, peRatio: 14.0, dividendYield: 4.5, eps: 10.0 },
            { symbol: "CSCO", company: "Cisco Systems Inc.", price: 55.12, change: -0.2, volume: 23210000, openPrice: 55.5, highPrice: 56.0, lowPrice: 54.5, marketCap: 230000000000, "52WeekHigh": 60.0, "52WeekLow": 45.0, peRatio: 16.0, dividendYield: 2.8, eps: 3.5 },
            { symbol: "ADBE", company: "Adobe Inc.", price: 519.25, change: 1.75, volume: 6543210, openPrice: 517.0, highPrice: 522.0, lowPrice: 515.0, marketCap: 250000000000, "52WeekHigh": 550.0, "52WeekLow": 420.0, peRatio: 38.0, dividendYield: 0.0, eps: 13.65 },
            { symbol: "AAPL", company: "Apple Inc.", price: 145.09, change: -1.5, volume: 54321000, openPrice: 146.7, highPrice: 147.1, lowPrice: 144.5, marketCap: 2400000000000, "52WeekHigh": 150.0, "52WeekLow": 120.0, peRatio: 30.5, dividendYield: 0.6, eps: 5.0 },
            { symbol: "MSFT", company: "Microsoft Corp.", price: 289.67, change: 0.3, volume: 32165400, openPrice: 290.5, highPrice: 292.0, lowPrice: 288.3, marketCap: 2200000000000, "52WeekHigh": 300.0, "52WeekLow": 250.0, peRatio: 35.0, dividendYield: 0.9, eps: 8.25 },
            { symbol: "GOOGL", company: "Alphabet Inc.", price: 2725.6, change: -12.4, volume: 12345000, openPrice: 2740.0, highPrice: 2755.5, lowPrice: 2705.1, marketCap: 1800000000000, "52WeekHigh": 2800.0, "52WeekLow": 2200.0, peRatio: 32.0, dividendYield: 0.0, eps: 45.5 },
            { symbol: "AMZN", company: "Amazon.com Inc.", price: 3342.88, change: 15.2, volume: 6789000, openPrice: 3320.0, highPrice: 3355.0, lowPrice: 3310.2, marketCap: 1700000000000, "52WeekHigh": 3500.0, "52WeekLow": 2900.0, peRatio: 60.0, dividendYield: 0.0, eps: 52.3 },
            { symbol: "TSLA", company: "Tesla Inc.", price: 759.2, change: -8.8, volume: 7654321, openPrice: 770.0, highPrice: 772.5, lowPrice: 755.1, marketCap: 760000000000, "52WeekHigh": 900.0, "52WeekLow": 600.0, peRatio: 85.0, dividendYield: 0.0, eps: 8.5 },
            { symbol: "FB", company: "Meta Platforms Inc.", price: 355.64, change: 1.6, volume: 21436500, openPrice: 353.5, highPrice: 357.0, lowPrice: 352.0, marketCap: 1000000000000, "52WeekHigh": 375.0, "52WeekLow": 250.0, peRatio: 29.0, dividendYield: 0.0, eps: 12.25 },
            { symbol: "NFLX", company: "Netflix Inc.", price: 510.12, change: -3.4, volume: 14321000, openPrice: 515.0, highPrice: 520.5, lowPrice: 508.2, marketCap: 225000000000, "52WeekHigh": 550.0, "52WeekLow": 400.0, peRatio: 50.0, dividendYield: 0.0, eps: 10.2 },
            { symbol: "NVDA", company: "NVIDIA Corp.", price: 625.0, change: 10.0, volume: 12343200, openPrice: 615.0, highPrice: 630.0, lowPrice: 612.5, marketCap: 375000000000, "52WeekHigh": 650.0, "52WeekLow": 500.0, peRatio: 55.0, dividendYield: 0.1, eps: 11.5 },
            { symbol: "INTC", company: "Intel Corp.", price: 54.9, change: 0.5, volume: 87654321, openPrice: 54.4, highPrice: 55.5, lowPrice: 54.0, marketCap: 225000000000, "52WeekHigh": 60.0, "52WeekLow": 45.0, peRatio: 12.0, dividendYield: 2.0, eps: 4.5 },
            { symbol: "AMD", company: "Advanced Micro Devices Inc.", price: 84.2, change: -1.0, volume: 65432100, openPrice: 85.0, highPrice: 86.0, lowPrice: 83.5, marketCap: 127000000000, "52WeekHigh": 100.0, "52WeekLow": 70.0, peRatio: 40.0, dividendYield: 0.0, eps: 2.1 },
            { symbol: "ORCL", company: "Oracle Corp.", price: 88.7, change: 0.7, volume: 43210000, openPrice: 88.0, highPrice: 89.5, lowPrice: 87.0, marketCap: 200000000000, "52WeekHigh": 95.0, "52WeekLow": 70.0, peRatio: 20.0, dividendYield: 1.5, eps: 4.45 },
            { symbol: "IBM", company: "IBM Corp.", price: 139.4, change: -0.8, volume: 35421000, openPrice: 140.0, highPrice: 141.5, lowPrice: 138.0, marketCap: 125000000000, "52WeekHigh": 150.0, "52WeekLow": 115.0, peRatio: 14.0, dividendYield: 4.5, eps: 10.0 },
            { symbol: "CSCO", company: "Cisco Systems Inc.", price: 55.12, change: -0.2, volume: 23210000, openPrice: 55.5, highPrice: 56.0, lowPrice: 54.5, marketCap: 230000000000, "52WeekHigh": 60.0, "52WeekLow": 45.0, peRatio: 16.0, dividendYield: 2.8, eps: 3.5 },
            { symbol: "ADBE", company: "Adobe Inc.", price: 519.25, change: 1.75, volume: 6543210, openPrice: 517.0, highPrice: 522.0, lowPrice: 515.0, marketCap: 250000000000, "52WeekHigh": 550.0, "52WeekLow": 420.0, peRatio: 38.0, dividendYield: 0.0, eps: 13.65 },
            { symbol: "AAPL", company: "Apple Inc.", price: 145.09, change: -1.5, volume: 54321000, openPrice: 146.7, highPrice: 147.1, lowPrice: 144.5, marketCap: 2400000000000, "52WeekHigh": 150.0, "52WeekLow": 120.0, peRatio: 30.5, dividendYield: 0.6, eps: 5.0 },
            { symbol: "MSFT", company: "Microsoft Corp.", price: 289.67, change: 0.3, volume: 32165400, openPrice: 290.5, highPrice: 292.0, lowPrice: 288.3, marketCap: 2200000000000, "52WeekHigh": 300.0, "52WeekLow": 250.0, peRatio: 35.0, dividendYield: 0.9, eps: 8.25 },
            { symbol: "GOOGL", company: "Alphabet Inc.", price: 2725.6, change: -12.4, volume: 12345000, openPrice: 2740.0, highPrice: 2755.5, lowPrice: 2705.1, marketCap: 1800000000000, "52WeekHigh": 2800.0, "52WeekLow": 2200.0, peRatio: 32.0, dividendYield: 0.0, eps: 45.5 },
            { symbol: "AMZN", company: "Amazon.com Inc.", price: 3342.88, change: 15.2, volume: 6789000, openPrice: 3320.0, highPrice: 3355.0, lowPrice: 3310.2, marketCap: 1700000000000, "52WeekHigh": 3500.0, "52WeekLow": 2900.0, peRatio: 60.0, dividendYield: 0.0, eps: 52.3 },
            { symbol: "TSLA", company: "Tesla Inc.", price: 759.2, change: -8.8, volume: 7654321, openPrice: 770.0, highPrice: 772.5, lowPrice: 755.1, marketCap: 760000000000, "52WeekHigh": 900.0, "52WeekLow": 600.0, peRatio: 85.0, dividendYield: 0.0, eps: 8.5 },
            { symbol: "FB", company: "Meta Platforms Inc.", price: 355.64, change: 1.6, volume: 21436500, openPrice: 353.5, highPrice: 357.0, lowPrice: 352.0, marketCap: 1000000000000, "52WeekHigh": 375.0, "52WeekLow": 250.0, peRatio: 29.0, dividendYield: 0.0, eps: 12.25 },
            { symbol: "NFLX", company: "Netflix Inc.", price: 510.12, change: -3.4, volume: 14321000, openPrice: 515.0, highPrice: 520.5, lowPrice: 508.2, marketCap: 225000000000, "52WeekHigh": 550.0, "52WeekLow": 400.0, peRatio: 50.0, dividendYield: 0.0, eps: 10.2 },
            { symbol: "NVDA", company: "NVIDIA Corp.", price: 625.0, change: 10.0, volume: 12343200, openPrice: 615.0, highPrice: 630.0, lowPrice: 612.5, marketCap: 375000000000, "52WeekHigh": 650.0, "52WeekLow": 500.0, peRatio: 55.0, dividendYield: 0.1, eps: 11.5 },
            { symbol: "INTC", company: "Intel Corp.", price: 54.9, change: 0.5, volume: 87654321, openPrice: 54.4, highPrice: 55.5, lowPrice: 54.0, marketCap: 225000000000, "52WeekHigh": 60.0, "52WeekLow": 45.0, peRatio: 12.0, dividendYield: 2.0, eps: 4.5 },
            { symbol: "AMD", company: "Advanced Micro Devices Inc.", price: 84.2, change: -1.0, volume: 65432100, openPrice: 85.0, highPrice: 86.0, lowPrice: 83.5, marketCap: 127000000000, "52WeekHigh": 100.0, "52WeekLow": 70.0, peRatio: 40.0, dividendYield: 0.0, eps: 2.1 },
            { symbol: "ORCL", company: "Oracle Corp.", price: 88.7, change: 0.7, volume: 43210000, openPrice: 88.0, highPrice: 89.5, lowPrice: 87.0, marketCap: 200000000000, "52WeekHigh": 95.0, "52WeekLow": 70.0, peRatio: 20.0, dividendYield: 1.5, eps: 4.45 },
            { symbol: "IBM", company: "IBM Corp.", price: 139.4, change: -0.8, volume: 35421000, openPrice: 140.0, highPrice: 141.5, lowPrice: 138.0, marketCap: 125000000000, "52WeekHigh": 150.0, "52WeekLow": 115.0, peRatio: 14.0, dividendYield: 4.5, eps: 10.0 },
            { symbol: "CSCO", company: "Cisco Systems Inc.", price: 55.12, change: -0.2, volume: 23210000, openPrice: 55.5, highPrice: 56.0, lowPrice: 54.5, marketCap: 230000000000, "52WeekHigh": 60.0, "52WeekLow": 45.0, peRatio: 16.0, dividendYield: 2.8, eps: 3.5 },
            { symbol: "ADBE", company: "Adobe Inc.", price: 519.25, change: 1.75, volume: 6543210, openPrice: 517.0, highPrice: 522.0, lowPrice: 515.0, marketCap: 250000000000, "52WeekHigh": 550.0, "52WeekLow": 420.0, peRatio: 38.0, dividendYield: 0.0, eps: 13.65 },
            { symbol: "AAPL", company: "Apple Inc.", price: 145.09, change: -1.5, volume: 54321000, openPrice: 146.7, highPrice: 147.1, lowPrice: 144.5, marketCap: 2400000000000, "52WeekHigh": 150.0, "52WeekLow": 120.0, peRatio: 30.5, dividendYield: 0.6, eps: 5.0 },
            { symbol: "MSFT", company: "Microsoft Corp.", price: 289.67, change: 0.3, volume: 32165400, openPrice: 290.5, highPrice: 292.0, lowPrice: 288.3, marketCap: 2200000000000, "52WeekHigh": 300.0, "52WeekLow": 250.0, peRatio: 35.0, dividendYield: 0.9, eps: 8.25 },
            { symbol: "GOOGL", company: "Alphabet Inc.", price: 2725.6, change: -12.4, volume: 12345000, openPrice: 2740.0, highPrice: 2755.5, lowPrice: 2705.1, marketCap: 1800000000000, "52WeekHigh": 2800.0, "52WeekLow": 2200.0, peRatio: 32.0, dividendYield: 0.0, eps: 45.5 },
            { symbol: "AMZN", company: "Amazon.com Inc.", price: 3342.88, change: 15.2, volume: 6789000, openPrice: 3320.0, highPrice: 3355.0, lowPrice: 3310.2, marketCap: 1700000000000, "52WeekHigh": 3500.0, "52WeekLow": 2900.0, peRatio: 60.0, dividendYield: 0.0, eps: 52.3 },
            { symbol: "TSLA", company: "Tesla Inc.", price: 759.2, change: -8.8, volume: 7654321, openPrice: 770.0, highPrice: 772.5, lowPrice: 755.1, marketCap: 760000000000, "52WeekHigh": 900.0, "52WeekLow": 600.0, peRatio: 85.0, dividendYield: 0.0, eps: 8.5 },
            { symbol: "FB", company: "Meta Platforms Inc.", price: 355.64, change: 1.6, volume: 21436500, openPrice: 353.5, highPrice: 357.0, lowPrice: 352.0, marketCap: 1000000000000, "52WeekHigh": 375.0, "52WeekLow": 250.0, peRatio: 29.0, dividendYield: 0.0, eps: 12.25 },
            { symbol: "NFLX", company: "Netflix Inc.", price: 510.12, change: -3.4, volume: 14321000, openPrice: 515.0, highPrice: 520.5, lowPrice: 508.2, marketCap: 225000000000, "52WeekHigh": 550.0, "52WeekLow": 400.0, peRatio: 50.0, dividendYield: 0.0, eps: 10.2 },
            { symbol: "NVDA", company: "NVIDIA Corp.", price: 625.0, change: 10.0, volume: 12343200, openPrice: 615.0, highPrice: 630.0, lowPrice: 612.5, marketCap: 375000000000, "52WeekHigh": 650.0, "52WeekLow": 500.0, peRatio: 55.0, dividendYield: 0.1, eps: 11.5 },
            { symbol: "INTC", company: "Intel Corp.", price: 54.9, change: 0.5, volume: 87654321, openPrice: 54.4, highPrice: 55.5, lowPrice: 54.0, marketCap: 225000000000, "52WeekHigh": 60.0, "52WeekLow": 45.0, peRatio: 12.0, dividendYield: 2.0, eps: 4.5 },
            { symbol: "AMD", company: "Advanced Micro Devices Inc.", price: 84.2, change: -1.0, volume: 65432100, openPrice: 85.0, highPrice: 86.0, lowPrice: 83.5, marketCap: 127000000000, "52WeekHigh": 100.0, "52WeekLow": 70.0, peRatio: 40.0, dividendYield: 0.0, eps: 2.1 },
            { symbol: "ORCL", company: "Oracle Corp.", price: 88.7, change: 0.7, volume: 43210000, openPrice: 88.0, highPrice: 89.5, lowPrice: 87.0, marketCap: 200000000000, "52WeekHigh": 95.0, "52WeekLow": 70.0, peRatio: 20.0, dividendYield: 1.5, eps: 4.45 },
            { symbol: "IBM", company: "IBM Corp.", price: 139.4, change: -0.8, volume: 35421000, openPrice: 140.0, highPrice: 141.5, lowPrice: 138.0, marketCap: 125000000000, "52WeekHigh": 150.0, "52WeekLow": 115.0, peRatio: 14.0, dividendYield: 4.5, eps: 10.0 },
            { symbol: "CSCO", company: "Cisco Systems Inc.", price: 55.12, change: -0.2, volume: 23210000, openPrice: 55.5, highPrice: 56.0, lowPrice: 54.5, marketCap: 230000000000, "52WeekHigh": 60.0, "52WeekLow": 45.0, peRatio: 16.0, dividendYield: 2.8, eps: 3.5 },
            { symbol: "ADBE", company: "Adobe Inc.", price: 519.25, change: 1.75, volume: 6543210, openPrice: 517.0, highPrice: 522.0, lowPrice: 515.0, marketCap: 250000000000, "52WeekHigh": 550.0, "52WeekLow": 420.0, peRatio: 38.0, dividendYield: 0.0, eps: 13.65 },
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
