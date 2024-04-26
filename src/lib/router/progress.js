import { Marker } from "./marker";

const fetch = window.fetch;
const documentBody = document.body;

window.fetch = function () {
    const marker = new Marker();
    const response = fetch.apply(this, arguments);
    marker.start();
    response.then(marker.stop).catch(marker.stop);
    return response;
};

class Progress {
    static id = null;
    static remainingDuration = null;
    static startTime = null;
    static indicator = null;
    static last = 0;
    static elapsedTime = 0;
    static timeout = null;
    static removeTimeout = null;

    static start(duration) {
        const callback = (time) => {
            if (!this.startTime) {
                this.startTime = time;
            }
            this.elapsedTime = time - this.startTime;
            const progress = this.elapsedTime / this.remainingDuration;
            const value = progress * 100;

            clearTimeout(this.removeTimeout);

            if (progress > this.last) {
                this.indicator.value = value;
                this.last = progress;
            }

            if (progress < 1) {
                this.id = window.requestAnimationFrame(callback);
            } else {
                this.id = null;
                this.remainingDuration = null;
                this.startTime = null;
                this.last = 0;
                this.removeTimeout = setTimeout(() => {
                    this.indicator.remove();
                    this.indicator = null;
                }, 100);
            }
        };

        if (this.id) {
            this.remainingDuration += duration;
        } else {
            this.remainingDuration = duration;
            this.id = window.requestAnimationFrame(callback);

            if (this.indicator) {
                this.indicator.value = 0;
            } else {
                this.create();
            }
        }
    }

    static create() {
        this.indicator = document.createElement("md-progress-indicator");
        documentBody.append(this.indicator);
        this.indicator.style.cssText = "position: absolute; top: 0; right: 0; left: 0; z-index: 999;";
    }

    static init() {
        const observer = new PerformanceObserver((entries) => {
            entries.getEntries().forEach((entry) => {
                this.start(entry.duration);
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.remainingDuration = this.elapsedTime + 100;
                }, 100);
            });
        });
        observer.observe({
            entryTypes: [
                'element',
                'event',
                'first-input',
                'largest-contentful-paint',
                'layout-shift',
                'long-animation-frame',
                'longtask',
                'mark',
                'measure',
                'navigation',
                'paint',
                'resource',
                // 'taskattribution',
                'visibility-state',                
            ],
        });
    }
}

Progress.init();
