class Marker {
    constructor() {
        this.id = null;
        this.remainingTime = null;
        
        this.start = this.start.bind(this);
        this.pending = this.pending.bind(this);
        this.stop = this.stop.bind(this);
        
        performance.mark("markRequestStart");
    }

    pending(time) {
        performance.mark("markPendingStart");
        if (!this.remainingTime) {
            this.remainingTime = time;
        } else {
            this.remainingTime += time;
        }
        performance.mark("markPendingEnd");
        performance.measure("measurePending");
        if (this.id) {
            this.id = window.requestAnimationFrame(this.pending);
        }
    }

    start() {
        this.id = window.requestAnimationFrame(this.pending);
    }

    stop() {
        performance.mark("markRequestEnd");
        performance.measure("measureRequest", "markRequestStart", "markRequestEnd");

        window.cancelAnimationFrame(this.id);
        this.id = null;
        this.remainingTime = null;
    }
}

export { Marker };
