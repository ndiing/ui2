class Scrolling {
    constructor(host, options = {}) {
        this.options = {
            scrollbar: null,
            container: null,
            ...options,
        };
        this.host = host;
        this.init();
    }

    on(type, listener) {
        this.host.addEventListener(type, listener);
    }

    off(type, listener) {
        this.host.removeEventListener(type, listener);
    }

    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.host.dispatchEvent(event);
    }

    init() {
        this.host.classList.add("md-scrolling");
        this.options.scrollbar?.classList.add("md-scrolling__scrollbar");
        this.options.container?.classList.add("md-scrolling__container");

        this.handleScroll = this.handleScroll.bind(this);
        this.host.addEventListener("scroll", this.handleScroll);

        this.handleScroll();
    }

    destroy() {
        this.host.classList.remove("md-scrolling");
        this.host.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        const total = this.options.total ?? 1000;
        const itemHeight = this.options.itemHeight ?? 52;
        const scrollTop = this.host.scrollTop;
        const threshold = this.options.threshold ?? 2;
        const viewportHeight = this.host.clientHeight;

        this.scrollbarHeight = total * itemHeight;

        this.start = Math.floor(scrollTop / itemHeight) - threshold;
        this.start = Math.max(0, this.start);

        this.limit = Math.ceil(viewportHeight / itemHeight) + 2 * threshold;
        this.limit = Math.min(total - this.start, this.limit);

        this.end = this.start + this.limit;

        this.translateY = this.start * itemHeight;

        this.options.scrollbar.style.height=this.scrollbarHeight+'px'
        this.options.container.style.transform=`translate3d(0px,${this.translateY}px,0px)`

        this.emit('onScrolling',this)
    }
}

export { Scrolling };
