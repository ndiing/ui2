import { html } from "lit";
import { MDElement } from "../../com/element/element";

/**
 * A class representing a virtual scroll.
 */
class VirtualScroll {
    /**
     * Creates an instance of VirtualScroll.
     * @param {HTMLElement} host - The host element.
     * @param {Object} options - Options for the virtual scroll.
     * @param {string} options.scrollbarX - Selector for the horizontal scrollbar.
     * @param {string} options.scrollbarY - Selector for the vertical scrollbar.
     * @param {string} options.container - Selector for the container element.
     * @param {string} options.row - Selector for the row elements.
     * @param {string} options.column - Selector for the column elements.
     * @param {number} options.totalY - Total number of rows.
     * @param {number} options.totalX - Total number of columns.
     */
    constructor(host, options) {
        /**
         * The host element.
         * @type {HTMLElement}
         */
        this.host = host;
        /**
         * Options for the virtual scroll.
         * @type {Object}
         */
        this.options = {
            scrollbarX:undefined,
            scrollbarY:undefined,
            container:undefined,
            row:undefined,
            column:undefined,
            totalY:undefined,
            totalX:undefined,
            ...options,
        };
        this.init();
    }

    /**
     * Initializes the virtual scroll.
     */
    init() {
        /**
         * The viewport element.
         * @type {HTMLElement}
         */
        this.viewport = this.host;
        /**
         * The horizontal scrollbar element.
         * @type {HTMLElement}
         */
        this.scrollbarX = this.host.querySelector(this.options.scrollbarX);
        /**
         * The vertical scrollbar element.
         * @type {HTMLElement}
         */
        this.scrollbarY = this.host.querySelector(this.options.scrollbarY);
        /**
         * The container element.
         * @type {HTMLElement}
         */
        this.container = this.host.querySelector(this.options.container);

        this.viewport.classList.add("md-virtual-scroll");
        if (this.scrollbarY) this.scrollbarY.classList.add("md-virtual-scroll__scrollbar", "md-virtual-scroll__scrollbar--y");
        if (this.scrollbarX) this.scrollbarX.classList.add("md-virtual-scroll__scrollbar", "md-virtual-scroll__scrollbar--x");
        this.container.classList.add("md-virtual-scroll__container");

        this.handleScroll();
        this.handleScroll = this.handleScroll.bind(this);
        this.viewport.addEventListener("scroll", this.handleScroll);
    }

    /**
     * Destroys the virtual scroll.
     */
    destroy() {
        this.viewport.classList.remove("md-virtual-scroll");
        if (this.scrollbarY) this.scrollbarY.classList.remove("md-virtual-scroll__scrollbar", "md-virtual-scroll__scrollbar--y");
        if (this.scrollbarX) this.scrollbarX.classList.remove("md-virtual-scroll__scrollbar", "md-virtual-scroll__scrollbar--x");
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
            // Calculate the dimensions and positions of rows and columns
            const rows = [];
            this.host.querySelectorAll(this.options.row).forEach((row) => {
                const height = row.getBoundingClientRect().height;
                if (this.scrollbarX) {
                    const columns = [];
                    row.querySelectorAll(this.options.column).forEach((column) => {
                        const width = column.getBoundingClientRect().width;
                        column.data.height = height;
                        column.data.width = width;
                        columns.push(column.data);
                    });
                    rows.push(columns);
                } else {
                    row.data.height = height;
                    rows.push(row.data);
                }
            });

            if (this.buffer == undefined) {
                // Set a default buffer if not defined
                this.buffer = 4;
            }

            this.translateX = 0;
            this.translateY = 0;

            if (this.scrollbarY) {
                // Calculate vertical scrolling parameters
                this.scrollY = this.viewport.scrollTop;
                if (this.scrollbarX) {
                    this.rowHeight = rows?.length ? Math.round(rows.reduce((p, c) => p + Math.round(c.reduce((pp, cc) => pp + cc.height, 0) / c.length), 0) / rows.length) : 56;
                } else {
                    this.rowHeight = rows?.length ? Math.round(rows.reduce((p, c) => p + c.height, 0) / rows.length) : 56;
                }
                this.viewportHeight = this.viewport.clientHeight;
                this.totalY = this.options.totalY;
                this.scrollbarHeight = this.totalY * this.rowHeight;

                // Calculate vertical start and end positions
                this.startY = Math.floor(this.scrollY / this.rowHeight) - this.buffer;
                this.startY = Math.max(0, this.startY);
                this.limitY = Math.ceil(this.viewportHeight / this.rowHeight) + 2 * this.buffer;
                this.limitY = Math.min(this.totalY - this.startY, this.limitY);
                this.endY = this.startY + this.limitY;
                this.translateY = this.startY * this.rowHeight;

                this.scrollbarY.style.setProperty("height", this.scrollbarHeight + "px");
            }
            if (this.scrollbarX) {
                // Calculate horizontal scrolling parameters
                this.scrollX = this.viewport.scrollLeft;
                this.rowWidth = rows?.length ? Math.round(rows.reduce((p, c) => p + Math.round(c.reduce((pp, cc) => pp + cc.width, 0) / c.length), 0) / rows.length) : 56 * 3;
                this.viewportWidth = this.viewport.clientWidth;
                this.totalX = this.options.totalX;
                this.scrollbarWidth = this.totalX * this.rowWidth;

                // Calculate horizontal start and end positions
                this.startX = Math.floor(this.scrollX / this.rowWidth) - this.buffer;
                this.startX = Math.max(0, this.startX);
                this.limitX = Math.ceil(this.viewportWidth / this.rowWidth) + 2 * this.buffer;
                this.limitX = Math.min(this.totalX - this.startX, this.limitX);
                this.endX = this.startX + this.limitX;
                this.translateX = this.startX * this.rowWidth;

                this.scrollbarX.style.setProperty("width", this.scrollbarWidth + "px");
            }

            // Update scrollbar and container styles
            this.container.style.setProperty("transform", `translate3d(${this.translateX}px,${this.translateY}px,0px)`);

            // Emit custom event
            this.emit("onVirtualScroll", this);

            // if (this.scrollbarX) {
            //     this.buffer = 0; // Reset buffer to 0
            // }
        });
    }
}

class AppTestElement extends MDElement {
    constructor() {
        super();
    }

    render() {
        return html`
            <div class="viewport">
                <div class="scrollbar scrollbar--x"></div>
                <div class="scrollbar scrollbar--y"></div>
                <div class="container">
                    ${this.list?.map(
                        (row) => html`
                            <div
                                .data="${row}"
                                class="row"
                            >
                                ${row.map(
                                    (column) => html`
                                        <div
                                            .data="${column}"
                                            class="column"
                                        >
                                            ${column.label}
                                        </div>
                                    `,
                                )}
                            </div>
                        `,
                    )}
                </div>
            </div>
        `;
    }

    async connectedCallback() {
        super.connectedCallback();

        await this.updateComplete;

        this.data = Array.from({ length: 10000 }, (v, k) => {
            return Array.from({ length: 100 }, (v2, k2) => {
                return {
                    label: k * 100 + k2 + 1,
                };
            });
        });

        // this.list=this.data
        // this.requestUpdate()

        this.viewport = this.querySelector(".viewport");
        this.viewport.addEventListener("onVirtualScroll", this.onVirtualScroll.bind(this));

        // Example of how to instantiate the VirtualScroll class
        this.virtualScroll = new VirtualScroll(this.viewport, {
            container: ".container", //Selector for the container element.

            scrollbarY: ".scrollbar--y", //Selector for the vertical scrollbar.
            row: ".row", //Selector for the row elements.
            totalY: this.data.length, //Total number of rows.

            scrollbarX: ".scrollbar--x", //Selector for the horizontal scrollbar.
            column: ".column", //Selector for the column elements.
            totalX: this.data[0].length, //Total number of columns.
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();

        this.viewport.removeEventListener("onVirtualScroll", this.onVirtualScroll);
        if (this.virtualScroll) {
            this.virtualScroll.destroy();
        }
    }

    onVirtualScroll(event) {
        const { startX, startY, endX, endY, scrollbarX } = event.detail;

        if (scrollbarX) {
            this.list = this.data.slice(startY, endY).map((row) => row.slice(startX, endX));
        } else {
            this.list = this.data.slice(startY, endY);
        }
        this.requestUpdate();
    }
}

customElements.define("app-test", AppTestElement);

export default document.createElement("app-test");
