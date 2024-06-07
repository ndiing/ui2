/**
 * A class representing a virtual scroll.
 */
class MDVirtualScrollModule {
    /**
     * Creates an instance of VirtualScroll.
     * @param {HTMLElement} host - The host element.
     * @param {Object} options - Options for the virtual scroll.
     * @param {string} options.scrollbar - Selector for the scrollbar.
     * @param {string} options.container - Selector for the container element.
     * @param {string} options.row - Selector for the row elements.
     * @param {string} options.column - Selector for the column elements.
     * @param {number} options.totalY - Total number of rows.
     * @param {number} options.totalX - Total number of columns.
     * @param {number} [options.buffer=2] - The buffer size for the virtual scroll.
     * @param {number} [options.rowHeight=56] - The default height of a row.
     * @param {number} [options.rowWidth=56*3] - The default width of a row.
     */
    constructor(host, options = {}) {
        this.host = host;
        this.options = {
            scrollbar: "",
            container: "",
            row: "",
            column: "",
            totalY: 0,
            totalX: 0,
            buffer: 2,
            rowHeight: 56,
            rowWidth: 56 * 3,
            ...options,
        };
        this.init();
    }

    /**
     * Initializes the virtual scroll.
     */
    init() {
        this.viewport = this.host;
        this.scrollbar = this.viewport.querySelector(this.options.scrollbar);
        this.container = this.viewport.querySelector(this.options.container);

        this.viewport.classList.add("md-virtual-scroll");
        this.scrollbar.classList.add("md-virtual-scroll__scrollbar");
        this.container.classList.add("md-virtual-scroll__container");

        this.handleScroll = this.handleScroll.bind(this);
        this.viewport.addEventListener("scroll", this.handleScroll);
        this.buffer = this.options.buffer; // Default buffer

        this.handleScroll(); // Initial call to set up the scroll
    }

    /**
     * Destroys the virtual scroll.
     */
    destroy() {
        this.viewport.classList.remove("md-virtual-scroll");
        this.scrollbar.classList.remove("md-virtual-scroll__scrollbar");
        this.container.classList.remove("md-virtual-scroll__container");

        this.viewport.removeEventListener("scroll", this.handleScroll);
    }

    /**
     * Emits a custom event.
     * @param {string} type - The event type.
     * @param {Object} detail - The event detail.
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.host.dispatchEvent(event);
    }

    /**
     * Updates the scroll position.
     */
    handleScroll() {
        window.requestAnimationFrame(() => {
            const rows = this.collectRowsData();

            this.translateX = 0;
            this.translateY = 0;

            if (this.options.row) {
                this.calculateVerticalScroll(rows);
            }
            if (this.options.column) {
                this.calculateHorizontalScroll(rows);
            }

            // let temp=(
            //     [this.startX??0,
            //     this.endX??0,
            //     this.startY??0,
            //     this.endY??0,].join()
            // )

            this.container.style.transform = `translate3d(${this.translateX}px,${this.translateY}px,0px)`;

            // if(this.temp!==temp){
            // this.temp=temp
            this.emit("onVirtualScroll", this);
            // }
        });
    }

    /**
     * Collects data for rows and columns.
     * @returns {Array} The array of row data.
     */
    collectRowsData() {
        const rows = [];
        this.host.querySelectorAll(this.options.row).forEach((row) => {
            const height = row.getBoundingClientRect().height;
            if (this.options.column) {
                const columns = [];
                row.querySelectorAll(this.options.column).forEach((column) => {
                    const width = column.getBoundingClientRect().width;
                    if (!column.data) column.data = {};
                    column.data.height = height;
                    column.data.width = width;
                    columns.push(column.data);
                });
                rows.push(columns);
            } else {
                if (!row.data) row.data = {};
                row.data.height = height;
                rows.push(row.data);
            }
        });
        return rows;
    }

    /**
     * Calculates the vertical scrolling parameters.
     * @param {Array} rows - The array of row data.
     */
    calculateVerticalScroll(rows) {
        this.scrollY = this.viewport.scrollTop;
        this.rowHeight = this.calculateAverageHeight(rows);
        this.viewportHeight = this.viewport.clientHeight;
        this.totalY = this.options.totalY;
        this.scrollbarHeight = this.totalY * this.rowHeight;

        this.startY = Math.max(0, Math.floor(this.scrollY / this.rowHeight) - this.buffer);
        this.limitY = Math.min(this.totalY - this.startY, Math.ceil(this.viewportHeight / this.rowHeight) + 2 * this.buffer);
        this.endY = this.startY + this.limitY;
        this.translateY = this.startY * this.rowHeight;

        this.scrollbar.style.height = `${this.scrollbarHeight}px`;
    }

    /**
     * Calculates the horizontal scrolling parameters.
     * @param {Array} rows - The array of row data.
     */
    calculateHorizontalScroll(rows) {
        this.scrollX = this.viewport.scrollLeft;
        this.rowWidth = this.calculateAverageWidth(rows);
        this.viewportWidth = this.viewport.clientWidth;
        this.totalX = this.options.totalX;
        this.scrollbarWidth = this.totalX * this.rowWidth;

        this.startX = Math.max(0, Math.floor(this.scrollX / this.rowWidth) - this.buffer);
        this.limitX = Math.min(this.totalX - this.startX, Math.ceil(this.viewportWidth / this.rowWidth) + 2 * this.buffer);
        this.endX = this.startX + this.limitX;
        this.translateX = this.startX * this.rowWidth;

        this.scrollbar.style.width = `${this.scrollbarWidth}px`;
    }

    /**
     * Calculates the average row height.
     * @param {Array} rows - The array of row data.
     * @returns {number} The average row height.
     */
    calculateAverageHeight(rows) {
        if (rows.length === 0) return this.options.rowHeight;
        const totalHeight = rows.reduce((sum, row) => sum + (this.options.column ? row[0].height : row.height), 0);
        return Math.round(totalHeight / rows.length);
    }

    /**
     * Calculates the average row width.
     * @param {Array} rows - The array of row data.
     * @returns {number} The average row width.
     */
    calculateAverageWidth(rows) {
        if (rows.length === 0) return this.options.rowWidth;
        const totalWidth = rows.reduce((sum, row) => sum + row.reduce((innerSum, col) => innerSum + col.width, 0) / row.length, 0);
        return Math.round(totalWidth / rows.length);
    }
}

export { MDVirtualScrollModule };
