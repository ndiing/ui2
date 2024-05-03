class Gesture {
    constructor(host, options = {}) {
        this.options = {
            dragStartWaitForLongPress: false,
            resizeStartWaitForLongPress: false,
            resizeHandles: ["n", "ne", "e", "se", "s", "sw", "w", "nw"],
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
        this.host.classList.add("md-gesture");

        if (this.options.resizeHandles.length) {
            this.resizeElement = document.createElement("div");
            this.resizeElement.classList.add("md-resize");

            let innerHTML = "";
            if (this.options.resizeHandles.includes("n")) {
                innerHTML += `<div class="md-resize__handle md-resize__handle--n"></div>`;
            }
            if (this.options.resizeHandles.includes("ne")) {
                innerHTML += `<div class="md-resize__handle md-resize__handle--ne"></div>`;
            }
            if (this.options.resizeHandles.includes("e")) {
                innerHTML += `<div class="md-resize__handle md-resize__handle--e"></div>`;
            }
            if (this.options.resizeHandles.includes("se")) {
                innerHTML += `<div class="md-resize__handle md-resize__handle--se"></div>`;
            }
            if (this.options.resizeHandles.includes("s")) {
                innerHTML += `<div class="md-resize__handle md-resize__handle--s"></div>`;
            }
            if (this.options.resizeHandles.includes("sw")) {
                innerHTML += `<div class="md-resize__handle md-resize__handle--sw"></div>`;
            }
            if (this.options.resizeHandles.includes("w")) {
                innerHTML += `<div class="md-resize__handle md-resize__handle--w"></div>`;
            }
            if (this.options.resizeHandles.includes("nw")) {
                innerHTML += `<div class="md-resize__handle md-resize__handle--nw"></div>`;
            }
            this.resizeElement.innerHTML = innerHTML;

            this.host.append(this.resizeElement);
        }

        this.handleMousedown = this.handleMousedown.bind(this);
        this.handleMousemove = this.handleMousemove.bind(this);
        this.handleMouseup = this.handleMouseup.bind(this);

        this.host.addEventListener("mousedown", this.handleMousedown);
    }

    destroy() {}

    handleMousedown(event) {
        window.addEventListener("mousemove", this.handleMousemove);
        window.addEventListener("mouseup", this.handleMouseup);

        document.body.classList.add("md-gesture--start");

        this.resizeHandleElement = event.target.closest(".md-resize__handle");

        this.startX = event.clientX - (this.endX ?? 0);
        this.startY = event.clientY - (this.endY ?? 0);

        this.longPress = false;
        this.longPressTimeout = window.setTimeout(() => {
            this.longPress = true;
            this.emit("onLongPress", event);
            if (
                this.resizeHandleElement &&
                this.options.resizeStartWaitForLongPress
            ) {
                this.resize = true;
                this.emit("onResizeStart", event);
            }
            if (!this.resize && this.options.dragStartWaitForLongPress) {
                this.drag = true;
                this.emit("onDragStart", event);
            }
        }, 300);

        this.swipeDirection = "";
        this.swipe = false;

        this.resize = false;
        if (
            this.resizeHandleElement &&
            !this.options.resizeStartWaitForLongPress
        ) {
            this.resize = true;
            this.emit("onResizeStart", event);
        }

        this.drag = false;
        if (!this.resize && !this.options.dragStartWaitForLongPress) {
            this.drag = true;
            this.emit("onDragStart", event);
        }
    }

    handleMousemove(event) {
        window.clearTimeout(this.longPressTimeout);

        this.moveX = event.clientX - this.startX;
        this.moveY = event.clientY - this.startY;

        event.moveX = this.moveX;
        event.moveY = this.moveY;

        this.swipeDirection =
            (this.moveX < -30 && "Left") ||
            (this.moveX > 30 && "Right") ||
            (this.moveY < -30 && "Top") ||
            (this.moveY > 30 && "Bottom");

        if (this.swipeDirection) {
            this.swipe = true;
        }

        if (this.drag) {
            this.emit("onDrag", event);
        }

        if (this.resize) {
            this.emit("onResize", event);
        }
    }

    handleMouseup(event) {
        window.clearTimeout(this.longPressTimeout);

        this.endX = 0;
        this.endY = 0;

        if (!this.longPress && !this.swipe) {
            if (Date.now() - this.lastTapTimestamp < 300) {
                this.emit("onDoubleTap", event);
                if (this.resize) {
                    this.emit("onResizeHandleDoubleTap", event);
                }
            } else {
                this.emit("onTap", event);
            }
            this.lastTapTimestamp = Date.now();
        }

        if (this.swipe && !this.drag && !this.resize) {
            this.emit("onSwipe" + this.swipeDirection, event);
        }

        if (this.drag) {
            this.emit("onDragEnd", event);
        }

        if (this.resize) {
            this.emit("onResizeEnd", event);
        }

        document.body.classList.remove("md-gesture--start");

        window.removeEventListener("mousemove", this.handleMousemove);
        window.removeEventListener("mouseup", this.handleMouseup);
    }
}
export { Gesture };
