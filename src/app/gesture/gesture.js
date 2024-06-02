import { html } from "lit";
import { MDElement } from "../../com/element/element";
import { MDGestureModule } from "../../com/gesture/gesture";

class AppGestureElement extends MDElement {
    render() {
        return html`
            <div
                class="md-layout-column"
                style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <pre
                        id="gesture"
                        style="overflow:auto;width: calc(56px * 5);height: calc(56px * 5);background: var(--md-sys-color-surface-container);"><output></output></pre>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <pre
                        id="gesture2"
                        style="overflow:auto;width: calc(56px * 5);height: calc(56px * 5);background: var(--md-sys-color-surface-container);"><output></output></pre>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <pre
                        id="gesture3"
                        style="overflow:auto;width: calc(56px * 5);height: calc(56px * 5);background: var(--md-sys-color-surface-container);"><output></output></pre>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <pre
                        id="gesture4"
                        style="overflow:auto;width: calc(56px * 5);height: calc(56px * 5);background: var(--md-sys-color-surface-container);"><output></output></pre>
                </div>
            </div>
        `;
    }

    firstUpdated() {
        const usageExample = (gesture, options) => {
            const output = gesture.querySelector("output");

            const log = (event) => {
                const { resize, startWidth, startHeight, endX, endY, startX, startY, press, drag, swipe, currentX, currentY, currentHeight, currentWidth, options } = event.detail;
                output.textContent = JSON.stringify(
                    {
                        resize,
                        // startWidth,
                        // startHeight,
                        // endX,
                        // endY,
                        // startX,
                        // startY,
                        press,
                        drag,
                        swipe,
                        currentX,
                        currentY,
                        currentHeight,
                        currentWidth,
                        options,
                    },
                    null,
                    4,
                );
            };
            gesture.addEventListener("onPress", log);
            gesture.addEventListener("onDragStart", log);
            gesture.addEventListener("onResizeStart", log);
            gesture.addEventListener("onDrag", log);
            gesture.addEventListener("onResize", log);
            gesture.addEventListener("onTap", log);
            gesture.addEventListener("onDoubleTap", log);
            gesture.addEventListener("onSwipeTop", log);
            gesture.addEventListener("onSwipeRight", log);
            gesture.addEventListener("onSwipeBottom", log);
            gesture.addEventListener("onSwipeLeft", log);
            gesture.addEventListener("onDragEnd", log);
            gesture.addEventListener("onResizeEnd", log);

            new MDGestureModule(gesture, options);
        };
        usageExample(this.querySelector("#gesture"));
        usageExample(this.querySelector("#gesture2"), {
            resizeAfterPress: true,
            dragAfterPress: true,
        });
        usageExample(this.querySelector("#gesture3"), {
            resize: [
                //
                // "nw",
                // "n",
                // "ne",
                "w",
                "e",
                // "sw",
                // "s",
                // "se",
            ],
            drag: [
                //
                "x",
                // "y",
            ],
        });
        usageExample(this.querySelector("#gesture4"), {
            resize: [
                //
                // "nw",
                "n",
                // "ne",
                // "w",
                // "e",
                // "sw",
                "s",
                // "se",
            ],
            drag: [
                //
                // "x",
                "y",
            ],
        });
    }
}

customElements.define("app-gesture", AppGestureElement);

export default document.createElement("app-gesture");
