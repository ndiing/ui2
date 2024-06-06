class MDVirtualScrollModule {
    constructor(host, options = {}) {
        this.host = host;
        this.options = {
            total: 1000,
            rowHeight: 56,
            threshold: 2,
            ...options,
        };

        this.init();
    }

    emit(type, detail) {
        this.host.dispatchEvent(
            new CustomEvent(type, {
                bubbles: true,
                cancelable: true,
                detail,
            }),
        );
    }

    init() {
        this.host.classList.add("md-virtual-scroll");
        this.options.scrollbar.classList.add("md-virtual-scroll__scrollbar");
        this.options.container.classList.add("md-virtual-scroll__container");

        this.handleScroll = this.handleScroll.bind(this);
        this.host.addEventListener("scroll", this.handleScroll);
        this.handleScroll({})
    }
    destroy() {}

    handleScroll(event) {
        window.requestAnimationFrame(() => {
            this.scrollbarHeight = this.options.total * this.options.rowHeight;

            this.start = Math.floor(this.host.scrollTop / this.options.rowHeight) - this.options.threshold;
            this.start = Math.max(0, this.start);

            this.limit = Math.ceil(this.host.clientHeight / this.options.rowHeight) + 2 * this.options.threshold;
            this.limit = Math.min(this.options.total - this.start, this.limit);

            this.translateY = this.start * this.options.rowHeight;

            this.options.scrollbar.style.setProperty("height", this.scrollbarHeight + "px");
            this.options.container.style.setProperty("transform", `translate3d(0%,${this.translateY}px,0px)`);

            this.emit('onVirtualScroll',this)
        });
    }
}

export { MDVirtualScrollModule };
