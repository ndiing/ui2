/**
 * {{desc}}
 * @fires MDVirtualController#onVirtualScrollChange - {{desc}}
 * @fires MDVirtualController#onVirtualScroll - {{desc}}
 */
class MDVirtualController {
    /**
     * {{desc}}
     * @param {*} host - {{desc}}
     * @param {*} options - {{desc}}
     * @property {String} options.viewportSelector - {{desc}}
     * @property {String} options.scrollbarSelector - {{desc}}
     * @property {String} options.containerSelector - {{desc}}
     * @property {Number} options.rowTotal - {{desc}}
     * @property {Number} options.rowHeight - {{desc}}
     * @property {Number} options.buffer - {{desc}}
     * @property {Number} options.columnTotal - {{desc}}
     * @property {Number} options.columnWidth - {{desc}}
     */
    constructor(host, options) {
        (this.host = host).addController(this);
        this.options = {
            viewportSelector: null,
            scrollbarSelector: null,
            containerSelector: null,
            rowSelector: null,
            columnSelector: null,

            rowTotal: 0,
            rowHeight: 52,
            buffer: 2,
            rowBuffer: 2,

            columnTotal: 0,
            columnWidth: 156,
            columnBuffer: 2,

            ...options,
        };
        this.cache = null; // Initialize cache
    }

    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });

        if (this.viewport) {
            this.viewport.dispatchEvent(event);
        }
    }

    async hostConnected() {
        await this.host.updateComplete;

        this.viewport = this.options.viewportSelector ? this.host.querySelector(this.options.viewportSelector) : this.host;

        this.scrollbar = this.options.scrollbarSelector && this.host.querySelector(this.options.scrollbarSelector);

        this.container = this.options.containerSelector && this.host.querySelector(this.options.containerSelector);

        if (this.viewport) {
            this.handleVirtualScroll = this.handleVirtualScroll.bind(this);
            this.viewport.addEventListener("scroll", this.handleVirtualScroll);
            this.handleVirtualScroll();
        }
    }

    async hostDisconnected() {
        await this.host.updateComplete;
        if (this.viewport) {
            this.viewport.removeEventListener("scroll", this.handleVirtualScroll);
        }
    }

    handleVirtualScroll(event) {
        window.requestAnimationFrame(() => {
            if (this.options.rowTotal) {
                let rowHeight;
                if (this.options.rowSelector) {
                    let totalHeight = 0;
                    const rows = Array.from(this.viewport.querySelectorAll(this.options.rowSelector));
                    rows.forEach((row) => {
                        totalHeight += row.data.height;
                    });
                    rowHeight = totalHeight / rows.length;
                }
                rowHeight = rowHeight || this.options.rowHeight;
                this.scrollbarHeight = this.options.rowTotal * rowHeight;
                this.rowStart = Math.floor(this.viewport.scrollTop / rowHeight) - (this.options.rowBuffer || this.options.buffer);
                this.rowStart = Math.max(0, this.rowStart);
                this.rowLimit = Math.ceil(this.viewport.clientHeight / rowHeight) + 2 * (this.options.rowBuffer || this.options.buffer);
                this.rowLimit = Math.min(this.options.rowTotal - this.rowStart, this.rowLimit);
                this.rowEnd = this.rowStart + this.rowLimit;
                this.translateY = this.rowStart * rowHeight;
            }

            if (this.options.columnTotal) {
                let columnWidth;
                if (this.options.columnSelector) {
                    let totalWidth = 0;
                    const columns = Array.from(this.viewport.querySelectorAll(this.options.columnSelector));
                    columns.forEach((column) => {
                        totalWidth += column.data.width;
                    });
                    columnWidth = totalWidth / columns.length;
                }
                columnWidth = columnWidth || this.options.columnWidth;
                this.scrollbarWidth = this.options.columnTotal * columnWidth;
                this.columnStart = Math.floor(this.viewport.scrollLeft / columnWidth) - this.options.columnBuffer;
                this.columnStart = Math.max(0, this.columnStart);
                this.columnLimit = Math.ceil(this.viewport.clientWidth / columnWidth) + 2 * this.options.columnBuffer;
                this.columnLimit = Math.min(this.options.columnTotal - this.columnStart, this.columnLimit);
                this.columnEnd = this.columnStart + this.columnLimit;
                this.translateX = this.columnStart * columnWidth;
            }

            let cache = JSON.stringify([this.rowStart, this.rowEnd, this.columnStart, this.columnEnd]);

            if (this.cache !== cache) {
                this.cache = cache;
                this.emit("onVirtualScrollChange", event);
            }

            this.emit("onVirtualScroll", event);
        });
    }
}

export { MDVirtualController };
