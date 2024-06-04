/**
 *
 * @class MDVirtualScrollModule
 */
class MDVirtualScrollModule {
    /**
     *
     */
    constructor(host, options) {
        this.host = host;
        this.options = {
            scrollbar: null,
            container: null,
            total: 1000,
            itemHeight: 40,
            threshold: 2,
            ...options,
        };
        this.init();
    }

    /**
     *
     */
    init() {
        this.host.classList.add("md-virtual-scroll");
        this.scrollbar = this.options.scrollbar;
        this.scrollbar.classList.add("md-virtual-scroll__scrollbar");
        this.container = this.options.container;
        this.container.classList.add("md-virtual-scroll__container");

        this.handleScroll = this.handleScroll.bind(this);
        this.host.addEventListener("scroll", this.handleScroll);
        this.handleScroll();
    }

    /**
     *
     * @fires MDVirtualScrollModule#onVirtualScroll
     * @fires MDVirtualScrollModule#onVirtualScrollChange
     */
    handleScroll(event) {
        window.requestAnimationFrame(() => {
            const total = this.options.total;
            const itemHeight = this.options.itemHeight;
            const threshold = this.options.threshold;
            const scrollTop = this.host.scrollTop;
            const viewportHeight = this.host.clientHeight;

            this.containerHeight = total * itemHeight;

            this.start = Math.floor(scrollTop / itemHeight) - threshold;
            this.start = Math.max(0, this.start);

            this.limit = Math.ceil(viewportHeight / itemHeight) + 2 * threshold;
            this.limit = Math.min(total - this.start, this.limit);

            this.end = this.start + this.limit;

            this.translateY = this.start * itemHeight;

            // console.log(
            //     (Math.round((scrollTop/(viewportHeight*threshold))/1)*1)
            // )

            this.scrollbar.style.setProperty("height", this.containerHeight + "px");
            this.container.style.setProperty("transform", `translate3d(0%,${this.translateY}px,0px)`);

            this.emit("onVirtualScroll", this);

            if (this.hasChange !== [this.start, this.end].join()) {
                this.emit("onVirtualScrollChange", this);
            }
            this.hasChange = [this.start, this.end].join();
        });
    }

    /**
     *
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
     *
     */
    destroy() {
        this.host.classList.remove("md-virtual-scroll");
        this.scrollbar = this.options.scrollbar;
        this.scrollbar.style.removeProperty("height");
        this.scrollbar.classList.remove("md-virtual-scroll__scrollbar");
        this.container = this.options.container;
        this.container.style.removeProperty("transform");
        this.container.classList.remove("md-virtual-scroll__container");

        this.host.removeEventListener("scroll", this.handleScroll);
    }
}

export { MDVirtualScrollModule };
