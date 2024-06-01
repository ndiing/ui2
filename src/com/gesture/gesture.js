class MDGestureModule {
    // static zIndex=1000
    constructor(host, options = {}) {
        this.host = host;
        this.options = {
            resize: [
                //
                "nw",
                "n",
                "ne",
                "w",
                "e",
                "sw",
                "s",
                "se",
            ],
            drag: [
                //
                "x",
                "y",
            ],
            resizeAfterPress: false,
            dragAfterPress: false,
            ...options,
        };
        this.init();
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

        this.handlePointerdown = this.handlePointerdown.bind(this);
        this.handlePointermove = this.handlePointermove.bind(this);
        this.handlePointerup = this.handlePointerup.bind(this);

        let text = "";
        text += `<div class="md-resize">`;
        if (this.options.resize.includes("nw")) {
            text += `    <div class="md-resize__item md-resize__item--nw"></div>`;
        }
        if (this.options.resize.includes("n")) {
            text += `    <div class="md-resize__item md-resize__item--n"></div>`;
        }
        if (this.options.resize.includes("ne")) {
            text += `    <div class="md-resize__item md-resize__item--ne"></div>`;
        }
        if (this.options.resize.includes("w")) {
            text += `    <div class="md-resize__item md-resize__item--w"></div>`;
        }
        // text += `    <div class="md-resize__item md-resize__item--c"></div>`;
        if (this.options.resize.includes("e")) {
            text += `    <div class="md-resize__item md-resize__item--e"></div>`;
        }
        if (this.options.resize.includes("sw")) {
            text += `    <div class="md-resize__item md-resize__item--sw"></div>`;
        }
        if (this.options.resize.includes("s")) {
            text += `    <div class="md-resize__item md-resize__item--s"></div>`;
        }
        if (this.options.resize.includes("se")) {
            text += `    <div class="md-resize__item md-resize__item--se"></div>`;
        }
        text += `</div>`;
        this.host.insertAdjacentHTML("afterbegin", text);

        this.host.addEventListener("pointerdown", this.handlePointerdown);
    }

    handlePointerdown(event) {
        this.resize = false;
        const resize = event.target
            .closest(".md-resize__item")
            ?.classList.value.match(/--(\w+)$/)[1];

        window.addEventListener("pointermove", this.handlePointermove);
        window.addEventListener("pointerup", this.handlePointerup);

        this.startWidth = this.host.clientWidth;
        this.startHeight = this.host.clientHeight;

        this.endX = this.endX ?? 0;
        this.endY = this.endY ?? 0;

        this.startX = event.clientX - this.endX;
        this.startY = event.clientY - this.endY;

        document.documentElement.classList.add("md-gesture--dragged");
        // this.host.style.setProperty('z-index',++MDGestureModule.zIndex)

        this.press = false;

        this.presTimeout = window.setTimeout(() => {
            this.press = true;
            this.emit("onPress", this);
            if (this.options.dragAfterPress) {
                this.drag = true;
                this.emit("onDragStart", this);
            }
            if (resize && this.options.resizeAfterPress) {
                this.resize = resize;
                this.emit("onResizeStart", this);
            }
        }, 300);

        this.swipe = false;

        this.drag = false;

        if (!this.options.dragAfterPress) {
            this.drag = true;
            this.emit("onDragStart", this);
        }

        if (resize && !this.options.resizeAfterPress) {
            this.resize = resize;
            this.emit("onResizeStart", this);
        }
    }

    handlePointermove(event) {
        const currentX = event.clientX - this.startX;
        const currentY = event.clientY - this.startY;

        window.clearTimeout(this.presTimeout);

        if (this.drag && !this.resize) {
            if (this.options.drag.includes("x")) {
                this.currentX = currentX;
            }
            if (this.options.drag.includes("y")) {
                this.currentY = currentY;
            }

            this.host.style.setProperty("left", this.currentX + "px");
            this.host.style.setProperty("top", this.currentY + "px");

            this.emit("onDrag", this);
        }

        if (this.resize) {
            if (
                this.options.resize.some((resize) =>
                    ["n", "ne", "nw"].includes(resize),
                ) &&
                /n/.test(this.resize)
            ) {
                this.currentY = currentY;
                this.currentHeight =
                    this.startHeight - this.currentY + this.endY;

                this.host.style.setProperty("top", this.currentY + "px");
                this.host.style.setProperty(
                    "height",
                    this.currentHeight + "px",
                );
            }

            if (
                this.options.resize.some((resize) =>
                    ["e", "ne", "se"].includes(resize),
                ) &&
                /e/.test(this.resize)
            ) {
                this.currentWidth = this.startWidth + currentX - this.endX;

                this.host.style.setProperty("width", this.currentWidth + "px");
            }

            if (
                this.options.resize.some((resize) =>
                    ["s", "se", "sw"].includes(resize),
                ) &&
                /s/.test(this.resize)
            ) {
                this.currentHeight = this.startHeight + currentY - this.endY;

                this.host.style.setProperty(
                    "height",
                    this.currentHeight + "px",
                );
            }

            if (
                this.options.resize.some((resize) =>
                    ["w", "sw", "nw"].includes(resize),
                ) &&
                /w/.test(this.resize)
            ) {
                this.currentX = currentX;
                this.currentWidth = this.startWidth - this.currentX + this.endX;

                this.host.style.setProperty("left", this.currentX + "px");
                this.host.style.setProperty("width", this.currentWidth + "px");
            }

            this.emit("onResize", this);
        }

        this.swipe =
            !this.drag &&
            !this.resize &&
            (currentX > 30 //
                ? "Right"
                : currentX < -30
                  ? "Left"
                  : currentY > 30
                    ? "Bottom"
                    : currentY < -30
                      ? "Top"
                      : false);
    }

    handlePointerup(event) {
        window.clearTimeout(this.presTimeout);

        if (!this.press && !this.swipe && !this.drag) {
            this.emit("onTap", this);

            if (Date.now() - this.lastTap < 300) {
                this.emit("onDoubleTap", this);
            }

            this.lastTap = Date.now();
        }

        if (this.swipe) {
            this.emit("onSwipe" + this.swipe, this);
        }

        if (this.drag) {
            this.emit("onDragEnd", this);
        }

        if (this.resize) {
            this.emit("onResizeEnd", this);
        }

        this.endX = this.currentX;
        this.endY = this.currentY;

        document.documentElement.classList.remove("md-gesture--dragged");

        window.removeEventListener("pointermove", this.handlePointermove);
        window.removeEventListener("pointerup", this.handlePointerup);
    }

    destroy() {
        this.host.classList.remove("md-gesture");
    }
}
export { MDGestureModule };
