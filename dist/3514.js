"use strict";(self.webpackChunkmaterial=self.webpackChunkmaterial||[]).push([[3514],{3514:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r,o=n(420),u=n(7184),i=n(8416);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l(r.key),r)}}function l(e){var t=function(e,t){if("object"!=c(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==c(t)?t:t+""}function s(e,t,n){return t=p(t),function(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,d()?Reflect.construct(t,n||[],p(e).constructor):t.apply(e,n))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(t,e),n=t,(u=[{key:"render",value:function(){return(0,o.qy)(r||(e=['\n            <div\n                class="md-layout-column"\n                style="margin:24px;"\n            >\n                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                    <pre\n                        id="gesture"\n                        style="overflow:auto;width: calc(56px * 5);height: calc(56px * 5);background: var(--md-sys-color-surface-container);"\n                    ><output></output></pre>\n                </div>\n                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                    <pre\n                        id="gesture2"\n                        style="overflow:auto;width: calc(56px * 5);height: calc(56px * 5);background: var(--md-sys-color-surface-container);"\n                    ><output></output></pre>\n                </div>\n                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                    <pre\n                        id="gesture3"\n                        style="overflow:auto;width: calc(56px * 5);height: calc(56px * 5);background: var(--md-sys-color-surface-container);"\n                    ><output></output></pre>\n                </div>\n                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                    <pre\n                        id="gesture4"\n                        style="overflow:auto;width: calc(56px * 5);height: calc(56px * 5);background: var(--md-sys-color-surface-container);"\n                    ><output></output></pre>\n                </div>\n                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                    <pre\n                        id="gesture5"\n                        style="overflow:auto;width: calc(56px * 5);height: calc(56px * 5);background: var(--md-sys-color-surface-container);"\n                    ><output></output></pre>\n                </div>\n            </div>\n        '],t||(t=e.slice(0)),r=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))));var e,t}},{key:"firstUpdated",value:function(){var e=function(e,t){var n=e.querySelector("output"),r=function(e){var t=e.detail,r=t.resize,o=(t.startWidth,t.startHeight,t.endX,t.endY,t.startX,t.startY,t.press),u=t.drag,i=t.swipe,c=t.currentX,a=t.currentY,l=t.currentHeight,s=t.currentWidth,d=t.options;n.textContent=JSON.stringify({resize:r,press:o,drag:u,swipe:i,currentX:c,currentY:a,currentHeight:l,currentWidth:s,options:d},null,4)};e.addEventListener("onPress",r),e.addEventListener("onDragStart",r),e.addEventListener("onResizeStart",r),e.addEventListener("onDrag",r),e.addEventListener("onResize",r),e.addEventListener("onTap",r),e.addEventListener("onDoubleTap",r),e.addEventListener("onSwipeTop",r),e.addEventListener("onSwipeRight",r),e.addEventListener("onSwipeBottom",r),e.addEventListener("onSwipeLeft",r),e.addEventListener("onDragEnd",r),e.addEventListener("onResizeEnd",r),new i.B(e,t)};e(this.querySelector("#gesture"),{applyStyle:!0}),e(this.querySelector("#gesture2"),{resizeAfterPress:!0,dragAfterPress:!0,applyStyle:!0}),e(this.querySelector("#gesture3"),{resize:["w","e"],drag:["x"],applyStyle:!0}),e(this.querySelector("#gesture4"),{resize:["n","s"],drag:["y"],applyStyle:!0}),e(this.querySelector("#gesture5"),{})}}])&&a(n.prototype,u),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,u}(u.U);customElements.define("app-gesture",y);const f=document.createElement("app-gesture")}}]);