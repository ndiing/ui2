import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Gesture } from "../../lib/gesture/gesture";

class DevGesture extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout__grid">
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                    <div class="dev-gesture"></div>
                </div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
                <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4"></div>
            </div>
        `;
    }

    firstUpdated(){
        this.querySelectorAll('.dev-gesture')
        .forEach(element => {
            new Gesture(element,{
                dragStartWaitForLongPress:true,
                resizeStartWaitForLongPress:true,
            })

            element.addEventListener('onLongPress',console.log)
            element.addEventListener('onResizeStart',console.log)
            element.addEventListener('onDragStart',console.log)
            element.addEventListener('onDrag',console.log)
            element.addEventListener('onResize',console.log)
            element.addEventListener('onDoubleTap',console.log)
            element.addEventListener('onTap',console.log)
            element.addEventListener('onSwipeTop',console.log)
            element.addEventListener('onSwipeRight',console.log)
            element.addEventListener('onSwipeBottom',console.log)
            element.addEventListener('onSwipeLeft',console.log)
            element.addEventListener('onDragEnd',console.log)
            element.addEventListener('onResizeEnd',console.log)
        })
    }
}

customElements.define("dev-gesture", DevGesture);

export default document.createElement("dev-gesture");
