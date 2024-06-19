/**
 * MDVirtualController manages virtual scrolling for a host element.
 * @example
 * // HTML structure
 * // <div id="host">
 * //   <div class="viewport">
 * //     <!-- Virtualized content will be rendered here -->
 * //   </div>
 * // </div>
 *
 * // Define the host element
 * const hostElement = document.getElementById('host');
 *
 * // Define configuration options
 * const options = {
 *   viewportSelector: '.viewport',
 *   buffer: 5,
 *   totalRows: 1000,
 *   rowHeight: 30,
 *   totalColumns: 50,
 *   columnWidth: 100
 * };
 *
 * // Instantiate the virtual controller
 * const virtualController = new MDVirtualController(hostElement, options);
 *
 * // Add methods to handle connecting and disconnecting the host element
 * hostElement.connectedCallback = () => virtualController.hostConnected();
 * hostElement.disconnectedCallback = () => virtualController.hostDisconnected();
 *
 * // Simulate connecting the host element to the DOM
 * hostElement.connectedCallback();
 *
 * // Simulate scrolling event
 * hostElement.querySelector('.viewport').scrollTop = 300;
 * hostElement.querySelector('.viewport').dispatchEvent(new Event('scroll'));
 */
class MDVirtualController {
    /**
     * Constructs an instance of MDVirtualController.
     * @param {HTMLElement} host - The host element to which the virtual controller is attached.
     * @param {Object} [options={}] - Configuration options for the virtual controller.
     * @param {string} [options.viewportSelector=null] - Selector for the viewport element within the host.
     * @param {number} [options.buffer=0] - Number of buffer rows/columns to render outside the viewport.
     * @param {number} [options.totalRows=0] - Total number of rows in the virtualized content.
     * @param {number} [options.rowHeight=0] - Height of each row in pixels.
     * @param {number} [options.totalColumns=0] - Total number of columns in the virtualized content.
     * @param {number} [options.columnWidth=0] - Width of each column in pixels.
     */
    constructor(host, options = {}) {
        (this.host = host).addController(this);
        this.options = {
            viewportSelector: null,
            buffer: 0,
            totalRows: 0,
            rowHeight: 0,
            totalColumns: 0,
            columnWidth: 0,
            ...options,
        };
    }

    /**
     * Performs setup tasks when the host element is connected to the DOM.
     * Waits for host's update to complete and sets up scroll and resize observers.
     * @returns {Promise<void>} A promise that resolves when setup is complete.
     */
    async hostConnected() {
        await this.host.updateComplete;

        this.viewport = this.options.viewportSelector ? this.host.querySelector(this.options.viewportSelector) : this.host;

        this.handleScroll = this.handleScroll.bind(this);
        this.viewport.addEventListener("scroll", this.handleScroll);

        this.handleScroll();

        // this.resizeObserver = new ResizeObserver(this.handleScroll);
        // this.resizeObserver.observe(this.viewport);
    }

    /**
     * Cleans up resources when the host element is disconnected from the DOM.
     * Waits for host's update to complete and disconnects scroll and resize observers.
     * @returns {Promise<void>} A promise that resolves when cleanup is complete.
     */
    async hostDisconnected() {
        await this.host.updateComplete;

        this.viewport.removeEventListener("scroll", this.handleScroll);

        // this.resizeObserver.disconnect();
    }

    /**
     * Handles the scroll event on the viewport element.
     * Calculates visible rows/columns based on scroll position and updates internal state.
     * Emits an "onScroll" event via the host element.
     * @param {Event} event - The scroll event object.
     */
    handleScroll(event) {
        window.requestAnimationFrame(() => {
            if (this.options.totalRows) {
                this.scrollbarHeight = this.options.rowHeight * this.options.totalRows;

                this.rowStart = Math.floor(this.viewport.scrollTop / this.options.rowHeight) - this.options.buffer;
                this.rowStart = Math.max(0, this.rowStart);
                this.rowLimit = Math.ceil(this.viewport.clientHeight / this.options.rowHeight) + 2 * this.options.buffer;
                this.rowLimit = Math.min(this.options.totalRows - this.rowStart, this.rowLimit);

                this.rowEnd = this.rowStart + this.rowLimit;
                this.translateY = this.rowStart * this.options.rowHeight;
            }

            if (this.options.totalColumns) {
                this.scrollbarWidth = this.options.columnWidth * this.options.totalColumns;

                this.columnStart = Math.floor(this.viewport.scrollLeft / this.options.columnWidth) - this.options.buffer;
                this.columnStart = Math.max(0, this.columnStart);
                this.columnLimit = Math.ceil(this.viewport.clientWidth / this.options.columnWidth) + 2 * this.options.buffer;
                this.columnLimit = Math.min(this.options.totalColumns - this.columnStart, this.columnLimit);

                this.columnEnd = this.columnStart + this.columnLimit;
                this.translateX = this.columnStart * this.options.columnWidth;
            }

            this.host.emit("onScroll", event);
        });
    }
}

export { MDVirtualController };
