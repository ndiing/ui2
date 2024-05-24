class Controller {
    constructor(host, options = {}) {
        this.options = {
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
        this.host.classList.add("md-controller");
    }

    destroy() {
        this.host.classList.remove("md-controller");
    }

}
export { Controller };
