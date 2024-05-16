import { MDElement } from "../../lib/element/element";
import { html } from "lit";
import { msg } from "@lit/localize";
import { Gesture } from "../../lib/gesture/gesture";

class DevGesture extends MDElement {
    render() {
        // prettier-ignore
        return html`
            <div class="md-layout-column" style="margin:24px;">
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <div class="gesture"
                        style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 256px;
                        height: 256px;
                        background: var(--md-sys-color-surface-container-lowest);"
                    ></div>
                </div>
            </div>
        `;
    }

    firstUpdated(){
        const element=this.querySelector('.gesture')

        const gesture = new Gesture(element,{
            dragStartWaitForLongPress:true,
            resizeStartWaitForLongPress:true,
        })

        element.addEventListener('onLongPress',(event) => {
            element.textContent=''
            element.textContent=event.type
        })

        element.addEventListener('onResizeStart',(event) => {
            element.textContent=''
            element.textContent=event.type
        })
        element.addEventListener('onResize',(event) => {
            element.textContent=''
            element.textContent=event.type
        })
        element.addEventListener('onResizeEnd',(event) => {
            element.textContent=''
            element.textContent=event.type
        })

        element.addEventListener('onDragStart',(event) => {
            element.textContent=''
            element.textContent=event.type
        })
        element.addEventListener('onDrag',(event) => {
            element.textContent=''
            element.textContent=event.type
        })
        element.addEventListener('onDragEnd',(event) => {
            element.textContent=''
            element.textContent=event.type
        })

        element.addEventListener('onDoubleTap',(event) => {
            element.textContent=''
            element.textContent=event.type
        })
        element.addEventListener('onTap',(event) => {
            element.textContent=''
            element.textContent=event.type
        })

        element.addEventListener('onSwipeTop',(event) => {
            element.textContent=''
            element.textContent=event.type
        })
        element.addEventListener('onSwipeRight',(event) => {
            element.textContent=''
            element.textContent=event.type
        })
        element.addEventListener('onSwipeBottom',(event) => {
            element.textContent=''
            element.textContent=event.type
        })
        element.addEventListener('onSwipeLeft',(event) => {
            element.textContent=''
            element.textContent=event.type
        })
    }
}

customElements.define("dev-gesture", DevGesture);

export default document.createElement("dev-gesture");
