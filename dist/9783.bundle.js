"use strict";(self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[]).push([[9783],{9783:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var o=r(6684),a=r(1421),n=r(2477);class u extends a.UX{render(){return o.qy`
            <div
                class="md-layout-column"
                style="margin:24px;"
            >
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <pre
                        id="gesture"
                        style="overflow:auto;width: calc(56px * 5);height: calc(56px * 5);background: var(--md-sys-color-surface-container);"
                    ><output></output></pre>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <pre
                        id="gesture2"
                        style="overflow:auto;width: calc(56px * 5);height: calc(56px * 5);background: var(--md-sys-color-surface-container);"
                    ><output></output></pre>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <pre
                        id="gesture3"
                        style="overflow:auto;width: calc(56px * 5);height: calc(56px * 5);background: var(--md-sys-color-surface-container);"
                    ><output></output></pre>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <pre
                        id="gesture4"
                        style="overflow:auto;width: calc(56px * 5);height: calc(56px * 5);background: var(--md-sys-color-surface-container);"
                    ><output></output></pre>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">
                    <pre
                        id="gesture5"
                        style="overflow:auto;width: calc(56px * 5);height: calc(56px * 5);background: var(--md-sys-color-surface-container);"
                    ><output></output></pre>
                </div>
            </div>
        `}firstUpdated(){const e=(e,t)=>{const r=e.querySelector("output"),o=e=>{const{resize:t,startWidth:o,startHeight:a,endX:n,endY:u,startX:d,startY:i,press:s,drag:c,swipe:l,currentX:m,currentY:p,currentHeight:y,currentWidth:_,options:g}=e.detail;r.textContent=JSON.stringify({resize:t,press:s,drag:c,swipe:l,currentX:m,currentY:p,currentHeight:y,currentWidth:_,options:g},null,4)};e.addEventListener("onPress",o),e.addEventListener("onDragStart",o),e.addEventListener("onResizeStart",o),e.addEventListener("onDrag",o),e.addEventListener("onResize",o),e.addEventListener("onTap",o),e.addEventListener("onDoubleTap",o),e.addEventListener("onSwipeTop",o),e.addEventListener("onSwipeRight",o),e.addEventListener("onSwipeBottom",o),e.addEventListener("onSwipeLeft",o),e.addEventListener("onDragEnd",o),e.addEventListener("onResizeEnd",o),new n.B(e,t)};e(this.querySelector("#gesture"),{applyStyle:!0}),e(this.querySelector("#gesture2"),{resizeAfterPress:!0,dragAfterPress:!0,applyStyle:!0}),e(this.querySelector("#gesture3"),{resize:["w","e"],drag:["x"],applyStyle:!0}),e(this.querySelector("#gesture4"),{resize:["n","s"],drag:["y"],applyStyle:!0}),e(this.querySelector("#gesture5"),{})}}customElements.define("app-gesture",u);const d=document.createElement("app-gesture")}}]);