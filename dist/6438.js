"use strict";(self.webpackChunkmaterial=self.webpackChunkmaterial||[]).push([[6438],{6438:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r,o=n(420),i=n(7184);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l(r.key),r)}}function l(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:t+""}function c(e,t,n){return t=d(t),function(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,a()?Reflect.construct(t,n||[],d(e).constructor):t.apply(e,n))}function a(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(a=function(){return!!e})()}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}var y=new Intl.NumberFormat("id",{currency:"IDR",style:"currency"}).format,b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c(this,t,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){return(0,o.qy)(r||(e=['\n            <md-form\n                @onFormNativeSubmit="','"\n            >\n                <div class="md-layout-column" style="margin:24px;">\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <br>\n                        <br>\n                        <br>\n                        <br>\n                        <md-slider name="slider1" min="-50" max="50" value="-23"></md-slider>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <br>\n                        <br>\n                        <br>\n                        <br>\n                        <md-slider name="slider2"></md-slider>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <br>\n                        <br>\n                        <br>\n                        <br>\n                        <md-slider name="slider3" step="10"></md-slider>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <br>\n                        <br>\n                        <br>\n                        <br>\n                        <md-slider name="slider4" value=\'[25,75]\'></md-slider>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <br>\n                        <br>\n                        <br>\n                        <br>\n                        <md-slider \n                            name="slider5" \n                            min="1000000" \n                            max="10000000" \n                            value=\'[2000000,4000000]\'\n                            .convertLabel="','"\n                        ></md-slider>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-button type="reset" label="Reset"></md-button>\n                        <md-button type="submit" label="Submit"></md-button>\n                    </div>\n                </div>\n            </md-form>\n        '],t||(t=e.slice(0)),r=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))),(function(e){console.log(Object.fromEntries(new FormData(e.detail.currentTarget).entries()))}),y);var e,t}}])&&u(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i}(i.U);customElements.define("app-slider",b);const f=document.createElement("app-slider")}}]);