
const fetch = window.fetch;
window.fetch = function () {
    performance.mark("markFetchStart");
    const response = fetch.apply(this, arguments);
    response.then((response) => {
        performance.mark("markFetchEnd");
        performance.measure("measureFetchStartFetchEnd", "markFetchStart", "markFetchEnd");
    });
    return response;
};

class Progress {
    static remainingTime = 0;
    static startTime = 0;
    static progress = 0;
    static lastProgress = 0;
    static indicator = null;

    static run(duration) {
        this.remainingTime += duration;
        if (this.progress > 0) return;

        this.startTime = performance.now();

        const callback = (currentTime) => {
            const elapsedTime = currentTime - this.startTime;
            this.progress = elapsedTime / this.remainingTime;

            if (!this.indicator) {
                this.indicator = document.createElement("md-progress-indicator");
                this.indicator.style.position = "absolute";
                this.indicator.style.left = "0px";
                this.indicator.style.right = "0px";
                this.indicator.style.top = "0px";
                this.indicator.style.zIndex = "999";
                document.body.append(this.indicator);
            }

            if (this.progress > this.lastProgress) {
                const value = this.progress * 100;
                const validValue = isNaN(value) || !isFinite(value) ? 0 : Math.floor(value);
                this.indicator.value = validValue;

                this.lastProgress = this.progress;
            }

            if (this.progress < 1) {
                window.requestAnimationFrame(callback);
            } else {
                this.remainingTime = 0;
                this.startTime = 0;
                this.progress = 0;
                this.lastProgress = 0;
                this.indicator.remove();
                this.indicator = null;
            }
        };

        window.requestAnimationFrame(callback);
    }

    static init() {
        const observer = new PerformanceObserver((entries) => {
            entries.getEntries().forEach((entry) => {
                this.run(entry.duration);
            });
        });
        observer.observe({
            entryTypes: ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "longtask", "mark", "measure", "navigation", "paint", "resource"],
        });
    }
}

Progress.init();
