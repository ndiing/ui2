/**
 * Gesture controller for handling drag, resize, selection, and other gestures on a host element.
 *
 * @example
 * // Example usage of MDGestureController:
 * // Assuming `element` is an existing HTMLElement in the DOM.
 * const gestureController = new MDGestureController(element, {
 *     drag: ["x", "y"],
 *     resize: ["n", "s", "e", "w"],
 *     selection: true,
 *     dragAfterLongPress: true,
 *     resizeAfterLongPress: true,
 *     selectionAfterLongPress: true,
 *     updateStyle: true
 * });
 *
 * gestureController.hostConnected(); // Initialize gesture controller when element is connected
 *
 * // Listen to gesture events
 * element.addEventListener('onDragStart', (event) => {
 *     console.log('Drag started!', event);
 * });
 *
 * element.addEventListener('onResizeStart', (event) => {
 *     console.log('Resize started!', event);
 * });
 *
 * element.addEventListener('onSelectionStart', (event) => {
 *     console.log('Selection started!', event);
 * });
 *
 * // Example: show how to handle pointer events if needed
 * element.addEventListener('pointerdown', (event) => {
 *     // Handle pointer down event
 * });
 *
 * element.addEventListener('pointermove', (event) => {
 *     // Handle pointer move event
 * });
 *
 * element.addEventListener('pointerup', (event) => {
 *     // Handle pointer up event
 * });
 */
class MDGestureController {
    /**
     * Creates an instance of MDGestureController.
     * @param {HTMLElement} host - The host element on which gestures are applied.
     * @param {Object} [options={}] - Options to configure the gesture behavior.
     * @param {string[]} [options.drag=["x", "y"]] - Directions in which dragging is allowed ("x", "y").
     * @param {string} [options.dragHandleSelector=null] - Selector for the handle to initiate dragging.
     * @param {string[]} [options.resize=["n", "s", "w", "e", "nw", "ne", "se", "sw"]] - Directions in which resizing is allowed.
     * @param {boolean} [options.selection=false] - Whether selection gestures are enabled.
     * @param {boolean} [options.dragAfterLongPress=false] - Whether dragging is enabled after a long press.
     * @param {boolean} [options.resizeAfterLongPress=false] - Whether resizing is enabled after a long press.
     * @param {boolean} [options.selectionAfterLongPress=false] - Whether selection is enabled after a long press.
     * @param {boolean} [options.updateStyle=false] - Whether to update element style during interaction.
     */
    constructor(host, options = {}) {
        this.host = host;
        this.host.addController(this); // Register this controller with the host element
        this.options = {
            drag: ["x", "y"], // Default drag directions
            dragHandleSelector: null, // Optional selector for drag handle within host
            resize: ["n", "s", "w", "e", "nw", "ne", "se", "sw"], // Default resize directions
            selection: false, // Whether selection is enabled
            dragAfterLongPress: false, // Enable drag after a long press
            resizeAfterLongPress: false, // Enable resize after a long press
            selectionAfterLongPress: false, // Enable selection after a long press
            updateStyle: false, // Whether to update element style during interaction
            ...options, // Override default options with user-provided options
        };
    }

    /**
     * Initializes the gesture controller when the host element is connected to the DOM.
     * Sets up classes, drag handles, resizable handles, and event listeners.
     */
    async hostConnected() {
        await this.host.updateComplete; // Ensure host element is fully updated

        this.container = this.host;
        this.container.classList.add("md-gesture"); // Add gesture class to host element

        // Setup drag handle if specified
        if (this.options.drag?.length) {
            const dragHandle = this.options.dragHandleSelector ? this.host.querySelector(this.options.dragHandleSelector) : this.host;

            if (dragHandle) {
                this.dragHandle = dragHandle;
                this.dragHandle.classList.add("md-draggable", "md-draggable__handle");
            }
        }

        // Setup resizable handles if specified
        if (this.options.resize?.length) {
            this.resizable = document.createElement("div");
            this.resizable.classList.add("md-resizable");

            this.options.resize.forEach((direction) => {
                const handle = document.createElement("div");
                handle.classList.add("md-resizable__handle", `md-resizable__handle--${direction}`);
                this.resizable.append(handle);
            });

            this.container.append(this.resizable);
        }

        // Bind event handlers
        this.handlePointerdown = this.handlePointerdown.bind(this);
        this.handlePointermove = this.handlePointermove.bind(this);
        this.handlePointerup = this.handlePointerup.bind(this);

        this.container.addEventListener("pointerdown", this.handlePointerdown);
    }

    /**
     * Cleans up when the host element is disconnected from the DOM.
     * Removes added classes, drag handles, resizable elements, and event listeners.
     */
    async hostDisconnected() {
        await this.host.updateComplete; // Ensure host element is fully updated

        this.container = this.host;
        this.container.classList.remove("md-gesture"); // Remove gesture class from host element

        // Remove drag handle classes if present
        if (this.dragHandle) {
            this.dragHandle.classList.remove("md-draggable", "md-draggable__handle");
        }

        // Remove resizable element if present
        if (this.resizable) {
            this.resizable.remove();
        }

        this.container.removeEventListener("pointerdown", this.handlePointerdown);
    }

    /**
     * Handles the pointerdown event on the host element.
     * Initializes gesture states and starts timers for long press detection.
     * @param {PointerEvent} event - The pointerdown event object.
     */
    handlePointerdown(event) {
        // Determine if drag handle is clicked
        const dragHandle = this.dragHandle && this.dragHandle == (this.options.dragHandleSelector ? event.target.closest(this.options.dragHandleSelector) : this.host);

        // Determine if resize handle is clicked
        this.resizeHandle = this.resizable && event.target.closest(".md-resizable__handle");
        this.resizeDirection = this.resizeHandle?.classList.value.match(/--(\w+)$/)[1];

        // Add global event listeners for move and up events
        window.addEventListener("pointermove", this.handlePointermove);
        window.addEventListener("pointerup", this.handlePointerup);

        // Prevent text selection during drag/resize
        document.documentElement.classList.add("md-gesture--unselectable");

        // Initialize gesture states
        this.endX = this.endX ?? 0;
        this.endY = this.endY ?? 0;
        this.startX = event.clientX - this.endX;
        this.startY = event.clientY - this.endY;
        this.startWidth = this.container.clientWidth;
        this.startHeight = this.container.clientHeight;

        // Initialize gesture types
        this.drag = false;
        if (!this.options.dragAfterLongPress && dragHandle && !this.resizeHandle) {
            this.drag = true;
            this.dragHandle.classList.add("md-draggable__handle--drag");
            this.host.emit("onDragStart", event);
        }

        this.resize = false;
        if (!this.options.resizeAfterLongPress && this.resizeHandle) {
            this.resize = true;
            this.host.emit("onResizeStart", event);
        }

        this.selection = false;
        if (!this.options.selectionAfterLongPress && this.options.selection && !this.drag && !this.resize) {
            this.selection = true;
            this.host.emit("onSelectionStart", event);
        }

        this.swipe = false;

        // Start long press timer
        this.longPress = false;
        this.longPressTimeout = window.setTimeout(() => {
            this.longPress = true;
            this.host.emit("onLongPress", event);

            if (this.options.dragAfterLongPress && dragHandle && !this.resizeHandle) {
                this.drag = true;
                this.dragHandle.classList.add("md-draggable__handle--drag");
                this.host.emit("onDragStart", event);
            }

            if (this.options.resizeAfterLongPress && this.resizeHandle) {
                this.resize = true;
                this.host.emit("onResizeStart", event);
            }

            if (this.options.selectionAfterLongPress && this.options.selection && !this.drag && !this.resize) {
                this.selection = true;
                this.host.emit("onSelectionStart", event);
            }
        }, 300);
    }

    /**
     * Handles the pointermove event on the host element.
     * Updates gesture states based on pointer movement.
     * @param {PointerEvent} event - The pointermove event object.
     */
    handlePointermove(event) {
        window.clearTimeout(this.longPressTimeout); // Clear long press timeout

        // Calculate movement
        const moveX = event.clientX - this.startX;
        const moveY = event.clientY - this.startY;

        // Handle dragging
        if (this.drag) {
            if (this.options.drag.includes("x")) {
                this.moveX = moveX;
            }

            if (this.options.drag.includes("y")) {
                this.moveY = moveY;
            }

            this.host.emit("onDrag", event);
        }

        // Handle resizing
        if (this.resize) {
            if (this.resizeDirection.includes("e")) {
                this.currentWidth = this.startWidth + moveX - this.endX;
            }

            if (this.resizeDirection.includes("s")) {
                this.currentHeight = this.startHeight + moveY - this.endY;
            }

            if (this.resizeDirection.includes("w")) {
                this.moveX = moveX;
                this.currentWidth = this.startWidth - this.moveX + this.endX;
            }

            if (this.resizeDirection.includes("n")) {
                this.moveY = moveY;
                this.currentHeight = this.startHeight - this.moveY + this.endY;
            }

            this.host.emit("onResize", event);
        }

        // Handle selection
        if (this.selection) {
            this.host.emit("onSelection", event);
        }

        // Detect swipe gesture
        this.swipe = !this.drag && !this.resize && !this.selection && (moveX - this.endX < -30 ? "Left" : moveY - this.endY < -30 ? "Top" : moveX - this.endX > 30 ? "Right" : moveY - this.endY > 30 ? "Bottom" : false);

        // Update element style if enabled
        if (this.options.updateStyle) {
            this.container.style.width = `${this.currentWidth ?? this.startWidth}px`;
            this.container.style.height = `${this.currentHeight ?? this.startHeight}px`;
            this.container.style.left = `${this.moveX ?? 0}px`;
            this.container.style.top = `${this.moveY ?? 0}px`;
        }
    }

    /**
     * Handles the pointerup event on the host element.
     * Finalizes gesture actions, emits corresponding events, and cleans up.
     * @param {PointerEvent} event - The pointerup event object.
     */
    handlePointerup(event) {
        window.clearTimeout(this.longPressTimeout); // Clear long press timeout

        // Update end coordinates for style updating
        if (this.options.updateStyle) {
            this.endX = this.moveX;
            this.endY = this.moveY;
        }

        // Handle drag end
        if (this.drag) {
            this.dragHandle.classList.remove("md-draggable__handle--drag");
            this.host.emit("onDragEnd", event);
        }

        // Handle resize end
        if (this.resize) {
            this.host.emit("onResizeEnd", event);
        }

        // Handle selection end
        if (this.selection) {
            this.host.emit("onSelectionEnd", event);
        }

        // Handle swipe gesture
        if (this.swipe) {
            this.host.emit(`onSwipe${this.swipe}`, event);
        }

        // Handle tap and double tap
        if (!this.swipe && !this.longPress) {
            this.host.emit("onTap", event);

            if (Date.now() - this.lastTap < 300) {
                if (this.lastTap - this.lastDoubleTap !== 0) {
                    this.host.emit("onDoubleTap", event);
                }
                this.lastDoubleTap = Date.now();
            }
            this.lastTap = Date.now();
        }

        // Remove unselectable class from document
        document.documentElement.classList.remove("md-gesture--unselectable");

        // Remove event listeners for move and up events
        window.removeEventListener("pointermove", this.handlePointermove);
        window.removeEventListener("pointerup", this.handlePointerup);
    }
}

export { MDGestureController };
