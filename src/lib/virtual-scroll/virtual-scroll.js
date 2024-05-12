class VirtualScroll {
    constructor(host, options = {}) {
        this.options = {
            total: 1000,
            itemHeight: 40,
            threshold: 2,
            viewportHeight: 40 * 5,
            containerSelector: ".dev-virtual-scroll__container",
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
        const event = new CustomEvent(type, { bubbles: true, cancelable: true, detail });
        this.host.dispatchEvent(event);
    }

    init() {
        this.host.classList.add("md-virtual-scroll");

        this.scrollElement = document.createElement("div");
        this.scrollElement.classList.add("md-virtual-scroll__scroll");
        this.host.append(this.scrollElement);

        this.containerElement = this.host.querySelector(this.options.containerSelector);
        this.containerElement.classList.add("md-virtual-scroll__container");

        this.handleScroll = this.handleScroll.bind(this);
        this.host.addEventListener("scroll", this.handleScroll);

        this.handleScroll({ currentTarget: { scrollTop: this.host.scrollTop ?? 0 } });
    }

    destroy() {
        this.host.classList.remove("md-virtual-scroll");

        this.scrollElement.remove()

        this.containerElement.classList.remove("md-virtual-scroll__container");

        this.host.removeEventListener("scroll", this.handleScroll);

    }

    handleScroll(event) {
        const { total, itemHeight, threshold, viewportHeight } = this.options;
        this.containerHeight = total * itemHeight;

        this.start = Math.floor(event.currentTarget.scrollTop / itemHeight) - threshold;
        this.start = Math.max(0, this.start);

        this.limit = Math.ceil(viewportHeight / itemHeight) + 2 * threshold;
        this.limit = Math.min(total - this.start, this.limit);

        this.end = this.start + this.limit;

        this.translateY = this.start * itemHeight;

        this.scrollElement.style.height = this.containerHeight + "px";
        this.containerElement.style.transform = "translate3d(0," + this.translateY + "px,0)";

        if(this.oldStart!==this.start){
            this.emit("onVirtualScroll", this);
        }

        this.oldStart=this.start
    }
}
export { VirtualScroll };
