"use strict";(self.webpackChunkmaterial=self.webpackChunkmaterial||[]).push([[6378],{3997:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var o,r=n(420);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,l(o.key),o)}}function l(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!=i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}function c(e,t,n){return t=a(t),function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,m()?Reflect.construct(t,n||[],a(e).constructor):t.apply(e,n))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}var f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){return(0,r.qy)(o||(e=['\n            <md-form\n                @onFormNativeSubmit="','">\n                <div\n                    class="md-layout-column"\n                    style="margin:24px;">\n                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-week-field\n                            label="Week Field"\n                            name="color0"></md-week-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-week-field\n                            label="Week Field (value)"\n                            name="color1"\n                            value="1990-W05"></md-week-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-week-field\n                            label="Week Field (required)"\n                            name="color2"\n                            required></md-week-field>\n                    </div>\n\n                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-button\n                            type="reset"\n                            label="Reset"></md-button>\n                        <md-button\n                            type="submit"\n                            label="Submit"></md-button>\n                    </div>\n                </div>\n            </md-form>\n        '],t||(t=e.slice(0)),o=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))),(function(e){console.log(Object.fromEntries(new FormData(e.detail.currentTarget).entries()))}));var e,t}}])&&u(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i}(n(7184).U);customElements.define("app-week-field",f);const y=document.createElement("app-week-field")}}]);