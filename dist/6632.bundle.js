"use strict";(self.webpackChunkmaterial=self.webpackChunkmaterial||[]).push([[6632],{6632:(t,n,e)=>{e.r(n),e.d(n,{default:()=>b});var o,r=e(420);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function l(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,u(o.key),o)}}function u(t){var n=function(t,n){if("object"!=i(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,n||"default");if("object"!=i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==i(n)?n:n+""}function c(t,n,e){return n=f(n),function(t,n){if(n&&("object"===i(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,a()?Reflect.construct(n,e||[],f(t).constructor):n.apply(t,e))}function a(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(a=function(){return!!t})()}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function d(t,n){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},d(t,n)}var m=function(t){function n(){return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),c(this,n,arguments)}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&d(t,n)}(n,t),e=n,(i=[{key:"render",value:function(){return(0,r.qy)(o||(t=['\n            <div\n                class="md-layout-column"\n                style="margin:24px;"\n            >\n                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                    <md-dialog\n                        label="Label"\n                        .buttons="','"\n                        id="dialog1"\n                        @onDialogButtonClick="','"\n                        >body</md-dialog\n                    >\n                    <md-button\n                        @click="','"\n                        label="dialog"\n                    ></md-button>\n                </div>\n                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                    <md-dialog\n                        label="Label"\n                        .leadingActions="','"\n                        .trailingActions="','"\n                        .buttons="','"\n                        ui="full-screen"\n                        id="dialog2"\n                        @onDialogActionClick="','"\n                        @onDialogButtonClick="','"\n                        >body</md-dialog\n                    >\n                    <md-button\n                        @click="','"\n                        label="dialog full-screen"\n                    ></md-button>\n                </div>\n            </div>\n        '],n||(n=t.slice(0)),o=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))),[{label:"Button"},{label:"Button"}],(function(){return dialog1.toggle()}),(function(){return dialog1.toggle()}),[{icon:"image"}],[{icon:"image"}],[{label:"Button"},{label:"Button"}],(function(){return dialog2.toggle()}),(function(){return dialog2.toggle()}),(function(){return dialog2.toggle()}));var t,n}}])&&l(e.prototype,i),u&&l(e,u),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,i,u}(e(7184).U);customElements.define("app-dialog",m);const b=document.createElement("app-dialog")}}]);