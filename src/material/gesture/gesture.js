/**
 * {{desc}}
 * @fires MDGestureController#onDragStart - {{desc}}
 * @fires MDGestureController#onResizeStart - {{desc}}
 * @fires MDGestureController#onSelectionStart - {{desc}}
 * @fires MDGestureController#onLongPress - {{desc}}
 * @fires MDGestureController#onDragStart - {{desc}}
 * @fires MDGestureController#onResizeStart - {{desc}}
 * @fires MDGestureController#onSelectionStart - {{desc}}
 * @fires MDGestureController#onDrag - {{desc}}
 * @fires MDGestureController#onResize - {{desc}}
 * @fires MDGestureController#onSelection - {{desc}}
 * @fires MDGestureController#onTap - {{desc}}
 * @fires MDGestureController#onDoubleTap - {{desc}}
 * @fires MDGestureController#onSelectionEnd - {{desc}}
 * @fires MDGestureController#onDragEnd - {{desc}}
 * @fires MDGestureController#onResizeEnd - {{desc}}
 */
class MDGestureController {
    /**
     * {{desc}}
     * @param {*} host - {{desc}}
     * @param {*} options - {{desc}}
     * @property {String} options.containerSelector - {{desc}}
     * @property {String} options.dragHandleSelector - {{desc}}
     * @property {Array} options.drag - {{desc}}
     * @property {Boolean} options.dragAfterLongPress - {{desc}}
     * @property {Array} options.resize - {{desc}}
     * @property {Boolean} options.resizeAfterLongPress - {{desc}}
     * @property {Boolean} options.selection - {{desc}}
     * @property {Boolean} options.selectionAfterLongPress - {{desc}}
     * @property {Boolean} options.updateStyle - {{desc}}
     */
    constructor(host, options) {
        (this.host = host).addController(this);
        this.options = {
            containerSelector: undefined,
            dragHandleSelector: undefined,
            drag: ["x", "y"],
            dragAfterLongPress: false,
            resize: ["n", "e", "s", "w", "ne", "se", "sw", "nw"],
            resizeAfterLongPress: false,
            selection: false,
            selectionAfterLongPress: false,
            updateStyle: false,
            ...options,
        };
    }

    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.container.dispatchEvent(event);
    }

    async hostConnected() {
        await this.host.updateComplete;

        this.container = this.options.containerSelector ? this.host.querySelector(this.options.containerSelector) : this.host;

        this.container.classList.add("md-gesture");

        if (this.options.drag.length) {
            this.dragHandle = this.options.dragHandleSelector ? this.container.querySelector(this.options.dragHandleSelector) : this.container;
            this.dragHandle.classList.add("md-draggable");
        }

        if (this.options.resize.length) {
            this.resizable = document.createElement("div");
            this.resizable.classList.add("md-resizable");

            for (const direction of this.options.resize) {
                const handle = document.createElement("div");
                handle.classList.add("md-resizable__handle");
                handle.classList.add("md-resizable__handle--" + direction);
                this.resizable.append(handle);
            }

            this.container.append(this.resizable);
        }

        this.handleGesturePointerdown = this.handleGesturePointerdown.bind(this);
        this.handleGesturePointermove = this.handleGesturePointermove.bind(this);
        this.handleGesturePointerup = this.handleGesturePointerup.bind(this);

        this.container.addEventListener("pointerdown", this.handleGesturePointerdown);
    }

    async hostDisconnected() {
        await this.host.updateComplete;
    }

    handleGesturePointerdown(event) {
        if (event.button !== 0) {
            return;
        }

        const dragHandle = (this.options.dragHandleSelector ? event.target.closest(this.options.dragHandleSelector) : this.container) == this.dragHandle;
        const resizeDirection = event.target.closest(".md-resizable__handle")?.classList.value.match(/--(\w+)$/)[1];

        window.addEventListener("pointermove", this.handleGesturePointermove);
        window.addEventListener("pointerup", this.handleGesturePointerup);

        document.body.classList.add("md-gesture--unselectable");

        this.endX = this.endX || 0;
        this.endY = this.endY || 0;

        this.startX = event.clientX - this.endX;
        this.startY = event.clientY - this.endY;

        this.startWidth = this.container.clientWidth;
        this.startHeight = this.container.clientHeight;

        this.swipe = false;

        this.drag = false;
        if (!this.options.dragAfterLongPress && dragHandle && !resizeDirection) {
            this.drag = true;
            this.dragHandle.classList.add("md-draggable--drag");
            this.emit("onDragStart", event);
        }

        this.resize = false;
        if (!this.options.resizeAfterLongPress && resizeDirection) {
            this.resize = resizeDirection;
            this.emit("onResizeStart", event);
        }

        this.selection = false;
        if (!this.options.selectionAfterLongPress && this.options.selection) {
            this.selection = true;
            this.emit("onSelectionStart", event);
        }

        this.longPress = false;
        this.longPressTimeout = window.setTimeout(() => {
            this.longPress = true;
            this.emit("onLongPress", event);

            if (this.options.dragAfterLongPress && dragHandle && !resizeDirection) {
                this.drag = true;
                this.dragHandle.classList.add("md-draggable--drag");
                this.emit("onDragStart", event);
            }

            if (this.options.resizeAfterLongPress && resizeDirection) {
                this.resize = resizeDirection;
                this.emit("onResizeStart", event);
            }

            if (!this.drag && !this.resize && this.options.selectionAfterLongPress && this.options.selection) {
                this.selection = true;
                this.emit("onSelectionStart", event);
            }
        }, 300);
    }

    handleGesturePointermove(event) {
        window.clearTimeout(this.longPressTimeout);

        const currentX = event.clientX - this.startX;
        const currentY = event.clientY - this.startY;

        this.swipe = !this.drag && !this.resize && (currentX - this.endX < -30 ? "Left" : currentY - this.endY < -30 ? "Top" : currentX - this.endX > 30 ? "Right" : currentY - this.endY > 30 ? "Bottom" : "");

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
            if (this.resize.includes("e")) {
                this.currentWidth = this.startWidth + currentX - this.endX;
            }
            if (this.resize.includes("s")) {
                this.currentHeight = this.startHeight + currentY - this.endY;
            }
            if (this.resize.includes("w")) {
                this.currentX = currentX;
                this.currentWidth = this.startWidth - this.currentX + this.endX;
            }
            if (this.resize.includes("n")) {
                this.currentY = currentY;
                this.currentHeight = this.startHeight - this.currentY + this.endY;
            }
            this.emit("onResize", event);
        }

        if (this.selection) {
            this.emit("onSelection", event);
        }

        if (this.options.updateStyle) {
            this.container.style.left = (this.currentX ?? 0) + "px";
            this.container.style.top = (this.currentY ?? 0) + "px";
            this.container.style.width = (this.currentWidth ?? this.startWidth) + "px";
            this.container.style.height = (this.currentHeight ?? this.startHeight) + "px";
        }
    }

    handleGesturePointerup(event) {
        window.clearTimeout(this.longPressTimeout);

        if (this.options.updateStyle) {
            this.endX = this.currentX;
            this.endY = this.currentY;
        }

        if (!this.longPress && !this.swipe) {
            this.emit("onTap", event);
            if (performance.now() - this.lastTap < 300) {
                if (this.lastTap - this.lastDoubleTap !== 0) {
                    this.emit("onDoubleTap", event);
                }
                this.lastDoubleTap = performance.now();
            }
            this.lastTap = performance.now();
        }

        if (this.swipe && !this.selection) {
            this.emit("onSwipe" + this.swipe, event);
        }

        if (this.selection) {
            this.emit("onSelectionEnd", event);
        }

        if (this.drag) {
            this.dragHandle.classList.remove("md-draggable--drag");
            this.emit("onDragEnd", event);
        }

        if (this.resize) {
            this.emit("onResizeEnd", event);
        }

        document.body.classList.remove("md-gesture--unselectable");

        window.removeEventListener("pointermove", this.handleGesturePointermove);
        window.removeEventListener("pointerup", this.handleGesturePointerup);
    }
}

export { MDGestureController };
