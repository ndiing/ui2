"use strict";(self.webpackChunkmaterial=self.webpackChunkmaterial||[]).push([[4344],{4344:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var o,r=n(420);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,l(o.key),o)}}function l(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==i(t)?t:t+""}function u(e,t,n){return t=d(t),function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,c()?Reflect.construct(t,n||[],d(e).constructor):t.apply(e,n))}function c(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(c=function(){return!!e})()}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}var b=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=u(this,t)).list1=[{leadingIcon:"image",label:"Label 1",selected:!0},{leadingIcon:"image",label:"Label 2",badge:{label:0}},{leadingIcon:"image",label:"Label 3",badge:{label:1}},{leadingIcon:"image",label:"Label 4",badge:{label:1e3}}],e.list2=[{leadingIcon:"image",selected:!0},{leadingIcon:"image",badge:{label:0}},{leadingIcon:"image",badge:{label:1}},{leadingIcon:"image",badge:{label:1e3}}],e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(t,e),n=t,(i=[{key:"render",value:function(){return(0,r.qy)(o||(e=['\n            <div class="md-layout-border md-layout-fit">\n                <md-navigation-bar\n                    .list="','"\n                    id="navigationDrawer1"\n                ></md-navigation-bar>\n\n                <div class="md-layout-border__item md-layout-border__item--center">\n                    <div class="md-layout-border md-layout-fit">\n                        <md-navigation-bar\n                            .list="','"\n                            id="navigationDrawer2"\n                        ></md-navigation-bar>\n\n                        <div class="md-layout-border__item md-layout-border__item--center">\n                            <div\n                                class="md-layout-column"\n                                style="margin:24px;"\n                            >\n                                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                                    <md-button\n                                        @click="','"\n                                        label="navigation-bar"\n                                    ></md-button>\n                                </div>\n                                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                                    <md-button\n                                        @click="','"\n                                        label="navigation-bar"\n                                    ></md-button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        '],t||(t=e.slice(0)),o=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))),this.list1,this.list2,(function(){return navigationDrawer1.toggle()}),(function(){return navigationDrawer2.toggle()}));var e,t}}])&&a(n.prototype,i),l&&a(n,l),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i,l}(n(7184).U);customElements.define("app-navigation-bar",b);const f=document.createElement("app-navigation-bar")}}]);