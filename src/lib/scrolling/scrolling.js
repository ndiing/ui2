class Scrolling {
    constructor(host, options = {}) {
        this.options = {
            total: 1000,
            itemHeight: 52,
            threshold: 2,
            // viewportHeight: 52*5,
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
        this.options.scrollbar.classList.add("md-scrolling__scrollbar");
        this.options.container.classList.add("md-scrolling__container");
        // // md-scrolling
        // this.host.style.position = "relative";

        // // md-scrolling__scrollbar
        // this.options.scrollbar.style.width = "1px";
        // this.options.scrollbar.style.position = "absolute";
        // this.options.scrollbar.style.left = "0px";
        // this.options.scrollbar.style.top = "0px";

        this.handleScroll = this.handleScroll.bind(this);
        this.host.addEventListener("scroll", this.handleScroll);
        this.handleScroll()
    }

    destroy() {
        this.host.classList.remove("md-scrolling");
        this.host.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        // requestAnimationFrame(() => {
            const total = this.options.total;
            const itemHeight = this.options.itemHeight;
            const threshold = this.options.threshold;
            const scrollbarHeight = total * itemHeight;
            const viewportHeight = this.options.viewportHeight;
            const scrollTop = this.host.scrollTop;

            // md-scrolling__scrollbar
            this.options.scrollbar.style.height = scrollbarHeight + "px";
            
            this.start = Math.floor(scrollTop / itemHeight) - threshold;
            this.start = Math.max(0, this.start);

            this.limit = Math.ceil(viewportHeight / itemHeight) + 2 * threshold;
            this.limit = Math.min(total - this.start, this.limit);

            this.end = this.start + this.limit;
            const translateY = this.start * itemHeight;

            // md-scrolling__container
            this.options.container.style.transform = `translate3d(0px,${translateY}px,0px)`;

            this.emit("onScrolling", this);
        // });
    }
}

export { Scrolling };
