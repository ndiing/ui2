"use strict";(self.webpackChunkmaterial=self.webpackChunkmaterial||[]).push([[6438],{6438:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var r,o=t(420),i=t(7184);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,l(r.key),r)}}function l(e){var n=function(e,n){if("object"!=m(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==m(n)?n:n+""}function c(e,n,t){return n=d(n),function(e,n){if(n&&("object"===m(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,a()?Reflect.construct(n,t||[],d(e).constructor):n.apply(e,t))}function a(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(a=function(){return!!e})()}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function s(e,n){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},s(e,n)}var b=new Intl.NumberFormat("id",{currency:"IDR",style:"currency"}).format,y=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),c(this,n,arguments)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&s(e,n)}(n,e),t=n,(i=[{key:"render",value:function(){return(0,o.qy)(r||(e=['\n            <md-form\n                @onFormNativeSubmit="','"\n            >\n                <div\n                    class="md-layout-column"\n                    style="margin:24px;"\n                >\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <br />\n                        <br />\n                        <br />\n                        <br />\n                        <md-slider\n                            name="slider1"\n                            min="-50"\n                            max="50"\n                            value="-23"\n                        ></md-slider>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <br />\n                        <br />\n                        <br />\n                        <br />\n                        <md-slider name="slider2"></md-slider>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <br />\n                        <br />\n                        <br />\n                        <br />\n                        <md-slider\n                            name="slider3"\n                            step="10"\n                        ></md-slider>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <br />\n                        <br />\n                        <br />\n                        <br />\n                        <md-slider\n                            name="slider4"\n                            value="[25,75]"\n                        ></md-slider>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <br />\n                        <br />\n                        <br />\n                        <br />\n                        <md-slider\n                            name="slider5"\n                            min="1000000"\n                            max="10000000"\n                            value="[2000000,4000000]"\n                            .convertLabel="','"\n                        ></md-slider>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-button\n                            type="reset"\n                            label="Reset"\n                        ></md-button>\n                        <md-button\n                            type="submit"\n                            label="Submit"\n                        ></md-button>\n                    </div>\n                </div>\n            </md-form>\n        '],n||(n=e.slice(0)),r=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))),(function(e){console.log(Object.fromEntries(new FormData(e.detail.currentTarget).entries()))}),b);var e,n}}])&&u(t.prototype,i),m&&u(t,m),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,i,m}(i.U);customElements.define("app-slider",y);const f=document.createElement("app-slider")}}]);