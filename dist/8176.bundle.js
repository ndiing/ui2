"use strict";(self.webpackChunkmaterial=self.webpackChunkmaterial||[]).push([[8176],{8176:(e,m,t)=>{t.r(m),t.d(m,{default:()=>y});var n,l=t(420);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function d(e,m){for(var t=0;t<m.length;t++){var n=m[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,i(n.key),n)}}function i(e){var m=function(e,m){if("object"!=o(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,m||"default");if("object"!=o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===m?String:Number)(e)}(e,"string");return"symbol"==o(m)?m:m+""}function u(e,m,t){return m=c(m),function(e,m){if(m&&("object"===o(m)||"function"==typeof m))return m;if(void 0!==m)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,a()?Reflect.construct(m,t||[],c(e).constructor):m.apply(e,t))}function a(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(a=function(){return!!e})()}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function _(e,m){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,m){return e.__proto__=m,e},_(e,m)}var r=function(e){function m(){return function(e,m){if(!(e instanceof m))throw new TypeError("Cannot call a class as a function")}(this,m),u(this,m)}return function(e,m){if("function"!=typeof m&&null!==m)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(m&&m.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),m&&_(e,m)}(m,e),t=m,(o=[{key:"render",value:function(){return(0,l.qy)(n||(e=['\n            <md-form\n                @onFormNativeSubmit="','"\n            >\n                <div\n                    class="md-layout-column"\n                    style="margin:24px;"\n                >\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-text-field\n                            label="Text Field"\n                            name="text"\n                            value="Text"\n                        ></md-text-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-number-field\n                            label="Number Field"\n                            name="number"\n                            value="1234"\n                        ></md-number-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-tel-field\n                            label="Tel Field"\n                            name="tel"\n                            value="+6281935155404"\n                        ></md-tel-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-email-field\n                            label="Email Field"\n                            name="email"\n                            value="ndiing.inc@gmail.com"\n                        ></md-email-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-url-field\n                            label="Url Field"\n                            name="url"\n                            value="https://ndiing.github.io/material/dist/"\n                        ></md-url-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-password-field\n                            label="Password Field"\n                            name="password"\n                            value="secret"\n                        ></md-password-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-search-field\n                            label="Search Field"\n                            name="search"\n                            value="ndiing"\n                        ></md-search-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-color-field\n                            label="Color Field"\n                            name="color"\n                            value="#ff0000"\n                        ></md-color-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-file-field\n                            label="File Field"\n                            name="file"\n                        ></md-file-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-datetime-field\n                            label="Datetime Field"\n                            name="datetime"\n                            value="1990-10-17T20:30"\n                        ></md-datetime-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-date-field\n                            label="Date Field"\n                            name="date"\n                            value="1990-10-17"\n                        ></md-date-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-month-field\n                            label="Month Field"\n                            name="month"\n                            value="1990-10"\n                        ></md-month-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-week-field\n                            label="Week Field"\n                            name="week"\n                            value="1990-W42"\n                        ></md-week-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-time-field\n                            label="Time Field"\n                            name="time"\n                            value="20:30"\n                        ></md-time-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-textarea-field\n                            label="Textarea Field"\n                            name="textarea"\n                            value="Text"\n                        ></md-textarea-field>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-select-field\n                            label="Select Field"\n                            name="select"\n                            .options="','"\n                        ></md-select-field>\n                    </div>\n\n                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-checkbox name="checkbox"></md-checkbox>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-checkbox\n                            name="checkbox"\n                            checked\n                        ></md-checkbox>\n                    </div>\n\n                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-radio-button name="radio-button"></md-radio-button>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-radio-button\n                            name="radio-button"\n                            checked\n                        ></md-radio-button>\n                    </div>\n\n                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-switch name="switch"></md-switch>\n                    </div>\n                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-switch\n                            name="switch"\n                            checked\n                        ></md-switch>\n                    </div>\n\n                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-slider name="slider"></md-slider>\n                    </div>\n\n                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                        <md-button\n                            ui="outlined"\n                            type="reset"\n                            label="Reset"\n                        ></md-button>\n                        <md-button\n                            ui="filled"\n                            type="submit"\n                            label="Submit"\n                        ></md-button>\n                    </div>\n                </div>\n            </md-form>\n        '],m||(m=e.slice(0)),n=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(m)}}))),(function(e){console.log(Object.fromEntries(new FormData(e.detail.currentTarget).entries()))}),[{label:"Option 1",value:"1",selected:!0},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"}]);var e,m}}])&&d(t.prototype,o),i&&d(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,o,i}(t(7184).U);customElements.define("app-form",r);const y=document.createElement("app-form")}}]);