/**
 *
 * @class MDPopperModule
 */
class MDPopperModule {
    /**
     *
     */
    constructor(host, options) {
        this.host = host;
        this.options = {
            button: null,
            containment: null,
            placements: [],
            shift: false,
            offset: 0,
            ...options,
        };
        this.init();
    }

    /**
     *
     */
    init() {
        this.host.classList.add("md-popper");
    }

    /**
     *
     */
    get(placement) {
        const containerRect = this.host.getBoundingClientRect();
        const buttonRect = this.options.button.getBoundingClientRect();
        const list = [
            {
                placement: "top",
                calc: () => ({
                    left: buttonRect.left - (containerRect.width - buttonRect.width) / 2,
                    top: buttonRect.top - containerRect.height - this.options.offset,
                }),
            },
            {
                placement: "top-start",
                calc: () => ({
                    left: buttonRect.left,
                    top: buttonRect.top - containerRect.height - this.options.offset,
                }),
            },
            {
                placement: "top-end",
                calc: () => ({
                    left: buttonRect.right - containerRect.width,
                    top: buttonRect.top - containerRect.height - this.options.offset,
                }),
            },
            {
                placement: "right",
                calc: () => ({
                    left: buttonRect.right + this.options.offset,
                    top: buttonRect.top - (containerRect.height - buttonRect.height) / 2,
                }),
            },
            {
                placement: "right-start",
                calc: () => ({
                    left: buttonRect.right + this.options.offset,
                    top: buttonRect.top,
                }),
            },
            {
                placement: "right-end",
                calc: () => ({
                    left: buttonRect.right + this.options.offset,
                    top: buttonRect.bottom - containerRect.height,
                }),
            },
            {
                placement: "bottom",
                calc: () => ({
                    left: buttonRect.left - (containerRect.width - buttonRect.width) / 2,
                    top: buttonRect.bottom + this.options.offset,
                }),
            },
            {
                placement: "bottom-start",
                calc: () => ({
                    left: buttonRect.left,
                    top: buttonRect.bottom + this.options.offset,
                }),
            },
            {
                placement: "bottom-end",
                calc: () => ({
                    left: buttonRect.right - containerRect.width,
                    top: buttonRect.bottom + this.options.offset,
                }),
            },
            {
                placement: "left",
                calc: () => ({
                    left: buttonRect.left - containerRect.width - this.options.offset,
                    top: buttonRect.top - (containerRect.height - buttonRect.height) / 2,
                }),
            },
            {
                placement: "left-start",
                calc: () => ({
                    left: buttonRect.left - containerRect.width - this.options.offset,
                    top: buttonRect.top,
                }),
            },
            {
                placement: "left-end",
                calc: () => ({
                    left: buttonRect.left - containerRect.width - this.options.offset,
                    top: buttonRect.bottom - containerRect.height,
                }),
            },
            {
                placement: "center",
                calc: () => ({
                    left: buttonRect.left - (containerRect.width - buttonRect.width) / 2,
                    top: buttonRect.top - (containerRect.height - buttonRect.height) / 2,
                }),
            },
        ];
        let { left, top } = list.find((item) => item.placement == placement).calc();
        let right = left + containerRect.width;
        let bottom = top + containerRect.height;
        let exceed;

        if (this.options.containment) {
            const containmentRect = this.options.containment.getBoundingClientRect();

            if (this.options.shift) {
                if (left < containmentRect.left) {
                    left = containmentRect.left;
                    right = left + containerRect.width;
                }

                if (top < containmentRect.top) {
                    top = containmentRect.top;
                    bottom = top + containerRect.height;
                }

                if (right > containmentRect.right) {
                    left = containmentRect.right - containerRect.width;
                    right = left + containerRect.width;
                }

                if (bottom > containmentRect.bottom) {
                    top = containmentRect.bottom - containerRect.height;
                    bottom = top + containerRect.height;
                }
            }
            exceed = left < containmentRect.left || top < containmentRect.top || right > containmentRect.right || bottom > containmentRect.bottom;
        }
        return {
            exceed,
            left,
            top,
            right,
            bottom,
        };
    }

    /**
     *
     */
    set() {
        for (const placement of this.options.placements) {
            const { exceed, left, top } = this.get(placement);

            this.host.style.setProperty("left", left + "px");
            this.host.style.setProperty("top", top + "px");

            if (!exceed) {
                break;
            }
        }
    }

    /**
     *
     */
    destroy() {
        this.host.classList.remove("md-popper");
    }
}
export { MDPopperModule };
