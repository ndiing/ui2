/**
 * MDGestureController class for handling drag, resize, and selection gestures.
 * @fires MDGestureController#onDragStart
 * @fires MDGestureController#onDrag
 * @fires MDGestureController#onDragEnd
 * @fires MDGestureController#onResizeStart
 * @fires MDGestureController#onResize
 * @fires MDGestureController#onResizeEnd
 * @fires MDGestureController#onSelectionStart
 * @fires MDGestureController#onSelection
 * @fires MDGestureController#onSelectionEnd
 * @fires MDGestureController#onSwipeLeft
 * @fires MDGestureController#onSwipeTop
 * @fires MDGestureController#onSwipeRight
 * @fires MDGestureController#onSwipeBottom
 * @fires MDGestureController#onLongPress
 * @fires MDGestureController#onTap
 * @fires MDGestureController#onDoubleTap
 */
class MDGestureController {
    /**
     * Creates an instance of MDGestureController.
     * @param {HTMLElement} host - The host element that this controller is associated with.
     * @param {Object} [options] - Configuration options for the gesture controller.
     * @property {string} [options.containerSelector] - Selector for the container element.
     * @property {string} [options.dragHandleSelector] - Selector for the drag handle element.
     * @property {string[]} [options.drag] - Array of directions in which dragging is allowed ("x", "y").
     * @property {boolean} [options.dragAfterLongPress] - Enables dragging after a long press.
     * @property {string[]} [options.resize] - Array of directions in which resizing is allowed ("n", "e", "s", "w", "ne", "se", "sw", "nw").
     * @property {boolean} [options.resizeAfterLongPress] - Enables resizing after a long press.
     * @property {boolean} [options.selection] - Enables selection.
     * @property {boolean} [options.selectionAfterLongPress] - Enables selection after a long press.
     * @property {boolean} [options.updateStyle] - Automatically updates the style of the container during gestures.
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

    /**
     * Emits a custom event from the container.
     * @param {string} type - The type of the event.
     * @param {any} detail - The detail of the event.
     */
    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.container.dispatchEvent(event);
    }

    /**
     * Called when the host is connected.
     * @returns {Promise<void>}
     */
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

    /**
     * Called when the host is disconnected.
     * @returns {Promise<void>}
     */
    async hostDisconnected() {
        await this.host.updateComplete;
    }

    /**
     * Handles the pointerdown event for gestures.
     * @param {PointerEvent} event - The pointerdown event.
     */
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

    /**
     * Handles the pointermove event for gestures.
     * @param {PointerEvent} event - The pointermove event.
     */
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

    /**
     * Handles the pointerup event for gestures.
     * @param {PointerEvent} event - The pointerup event.
     */
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
