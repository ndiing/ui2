/**
 *
 * @class MDGestureModule
 */
class MDGestureModule {
    /**
     *
     */
    constructor(host, options = {}) {
        this.host = host;
        this.options = {
            resize: ["nw", "n", "ne", "w", "e", "sw", "s", "se"],
            drag: ["x", "y"],
            resizeAfterPress: false,
            dragAfterPress: false,
            applyStyle: false,
            ...options,
        };
        this.init();
    }

    /**
     *
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.host.dispatchEvent(event);
    }

    /**
     *
     * @fires MDGestureModule#onPress
     * @fires MDGestureModule#onDragStart
     * @fires MDGestureModule#onResizeStart
     * @fires MDGestureModule#onDragStart
     * @fires MDGestureModule#onResizeStart
     */
    handlePointerdown(event) {
        this.resize = false;
        const resize = event.target.closest(".md-resize__item")?.classList.value.match(/--(\w+)$/)[1];

        window.addEventListener("pointermove", this.handlePointermove);
        window.addEventListener("pointerup", this.handlePointerup);

        this.startWidth = this.host.clientWidth;
        this.startHeight = this.host.clientHeight;

        this.endX = this.endX ?? 0;
        this.endY = this.endY ?? 0;

        this.startX = event.clientX - this.endX;
        this.startY = event.clientY - this.endY;

        document.documentElement.classList.add("md-gesture--dragged");

        this.press = false;

        this.presTimeout = window.setTimeout(() => {
            this.press = true;
            this.emit("onPress", event);
            if (this.options.dragAfterPress && !resize) {
                this.drag = true;
                this.emit("onDragStart", event);
            }
            if (resize && this.options.resizeAfterPress) {
                this.resize = resize;
                this.emit("onResizeStart", event);
            }
        }, 300);

        this.swipe = false;

        this.drag = false;

        if (!this.options.dragAfterPress && !resize) {
            this.drag = true;
            this.emit("onDragStart", event);
        }

        if (resize && !this.options.resizeAfterPress) {
            this.resize = resize;
            this.emit("onResizeStart", event);
        }
    }

    /**
     *
     * @fires MDGestureModule#onDrag
     * @fires MDGestureModule#onResize
     */
    handlePointermove(event) {
        const currentX = event.clientX - this.startX;
        const currentY = event.clientY - this.startY;

        window.clearTimeout(this.presTimeout);

        if (this.drag) {
            if (this.options.drag.includes("x")) {
                this.currentX = currentX;
            }

            if (this.options.drag.includes("y")) {
                this.currentY = currentY;
            }

            this.emit("onDrag", event);
        }

        if (this.resize) {
            if (this.options.resize.some((resize) => ["n", "ne", "nw"].includes(resize)) && /n/.test(this.resize)) {
                this.currentY = currentY;
                this.currentHeight = this.startHeight - this.currentY + this.endY;
            }

            if (this.options.resize.some((resize) => ["e", "ne", "se"].includes(resize)) && /e/.test(this.resize)) {
                this.currentWidth = this.startWidth + currentX - this.endX;
            }

            if (this.options.resize.some((resize) => ["s", "se", "sw"].includes(resize)) && /s/.test(this.resize)) {
                this.currentHeight = this.startHeight + currentY - this.endY;
            }

            if (this.options.resize.some((resize) => ["w", "sw", "nw"].includes(resize)) && /w/.test(this.resize)) {
                this.currentX = currentX;
                this.currentWidth = this.startWidth - this.currentX + this.endX;
            }

            this.emit("onResize", event);
        }

        this.swipe = !this.drag && !this.resize && (currentX > 30 ? "Right" : currentX < -30 ? "Left" : currentY > 30 ? "Bottom" : currentY < -30 ? "Top" : false);

        if (this.options.applyStyle) {
            this.host.style.setProperty("left", this.currentX + "px");
            this.host.style.setProperty("top", this.currentY + "px");
            this.host.style.setProperty("width", this.currentWidth + "px");
            this.host.style.setProperty("height", this.currentHeight + "px");
        }
    }

    /**
     *
     * @fires MDGestureModule#onTap
     * @fires MDGestureModule#onDoubleTap
     * @fires MDGestureModule#onResizeDoubleTap
     * @fires MDGestureModule#onDragEnd
     * @fires MDGestureModule#onResizeEnd
     */
    handlePointerup(event) {
        window.clearTimeout(this.presTimeout);

        if (!this.press && !this.swipe) {
            this.emit("onTap", event);

            if (Date.now() - this.lastTap < 300) {
                this.emit("onDoubleTap", event);
                if (this.resize) {
                    this.emit("onResizeDoubleTap", event);
                }
            }

            this.lastTap = Date.now();
        }

        if (this.swipe) {
            this.emit("onSwipe" + this.swipe, event);
        }

        if (this.drag) {
            this.emit("onDragEnd", event);
        }

        if (this.resize) {
            this.emit("onResizeEnd", event);
        }

        if (this.options.applyStyle) {
            this.endX = this.currentX;
            this.endY = this.currentY;
        }

        document.documentElement.classList.remove("md-gesture--dragged");

        window.removeEventListener("pointermove", this.handlePointermove);
        window.removeEventListener("pointerup", this.handlePointerup);
    }

    /**
     *
     */
    init() {
        this.host.classList.add("md-gesture");

        this.handlePointerdown = this.handlePointerdown.bind(this);
        this.handlePointermove = this.handlePointermove.bind(this);
        this.handlePointerup = this.handlePointerup.bind(this);

        this.resizeContainer = document.createElement("div");
        this.resizeContainer.classList.add("md-resize");

        this.options.resize.forEach((position) => {
            const resizeItem = document.createElement("div");
            resizeItem.classList.add("md-resize__item", `md-resize__item--${position}`);
            this.resizeContainer.appendChild(resizeItem);
        });

        this.host.appendChild(this.resizeContainer);

        this.host.addEventListener("pointerdown", this.handlePointerdown);
    }

    /**
     *
     */
    destroy() {
        this.host.removeEventListener("pointerdown", this.handlePointerdown);

        if (this.resizeContainer && this.resizeContainer.parentNode) {
            this.resizeContainer.parentNode.removeChild(this.resizeContainer);
        }

        this.handlePointerdown = null;
        this.handlePointermove = null;
        this.handlePointerup = null;
    }
}
export { MDGestureModule };
