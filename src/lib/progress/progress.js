class Progress {
    constructor(callback = () => {}) {
        this.callback = callback;
        this.progressElement = null;
    }

    start(duration) {
        if (this.interval) {
            return;
        }

        if (!this.progressElement) {
            this.progressElement = document.createElement("md-progress-indicator");
            document.body.appendChild(this.progressElement);
            this.progressElement.style.setProperty("width", "100%");
            this.progressElement.style.setProperty("position", "absolute");
            this.progressElement.style.setProperty("top", "0px");
            this.progressElement.style.setProperty("left", "0px");
            this.progressElement.style.setProperty("z-index", "9999");
        }
        this.duration = duration;
        this.startTime = Date.now();
        this.update();
    }

    update() {
        const elapsedTime = Date.now() - this.startTime;
        const progress = Math.min(1, elapsedTime / this.duration);
        const value = Math.round(progress * 100);

        if (!isNaN(value)) {
            this.progressElement.value = value;
        }

        if (progress < 1) {
            this.interval = requestAnimationFrame(() => this.update());
        } else {
            this.callback();
            this.stop();
            this.progressElement.remove();
            this.progressElement = null;
        }
    }

    stop() {
        if (!this.interval) {
            return;
        }
        cancelAnimationFrame(this.interval);
        this.interval = null;
    }
}
const progress = new Progress();

const observer = new PerformanceObserver((entries) => {
    entries.getEntries().forEach((entry) => {
        const { duration } = entry;
        progress.start(duration);
    });
});
observer.observe({
    entryTypes: ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "long-animation-frame", "longtask", "mark", "measure", "navigation", "paint", "resource", "visibility-state"],
});

const originalFetch = window.fetch;

window.fetch = function () {
    performance.mark("markFetchStart");
    const fetchPromise = originalFetch.apply(this, arguments);
    fetchPromise.then((response) => {
        performance.mark("markFetchEnd");
        performance.measure("measureFetch", "markFetchStart", "markFetchEnd");
    });
    return fetchPromise;
};
