"use strict";(self.webpackChunkmaterial=self.webpackChunkmaterial||[]).push([[6572],{6572:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});var i,o=t(7184),l=t(420);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,u(i.key),i)}}function u(e){var n=function(e,n){if("object"!=a(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,"string");if("object"!=a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==a(n)?n:n+""}function s(e,n,t){return n=r(n),function(e,n){if(n&&("object"===a(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,d()?Reflect.construct(n,t||[],r(e).constructor):n.apply(e,t))}function d(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(d=function(){return!!e})()}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function m(e,n){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},m(e,n)}t(7386);var h=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),s(this,n,arguments)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&m(e,n)}(n,e),t=n,(o=[{key:"render",value:function(){return(0,l.qy)(i||(e=['\n            <div class="md-layout-border md-layout-fit">\n                <md-pane\n                    label="Label"\n                    .trailingActions="','"\n                    ui="sheet north"\n                    id="sheet0"\n                >pane</md-pane>\n                <md-pane\n                    label="Label"\n                    .trailingActions="','"\n                    ui="sheet east"\n                    id="sheet1"\n                >pane</md-pane>\n                <md-pane\n                    label="Label"\n                    .trailingActions="','"\n                    ui="sheet south"\n                    id="sheet2"\n                >pane</md-pane>\n                <md-pane\n                    label="Label"\n                    .trailingActions="','"\n                    ui="sheet west"\n                    id="sheet3"\n                >pane</md-pane>\n\n                <md-pane\n                    label="Label"\n                    .trailingActions="','"\n                    ui="sheet north modal"\n                    id="sheet4"\n                >pane</md-pane>\n                <md-pane\n                    label="Label"\n                    .trailingActions="','"\n                    ui="sheet east modal"\n                    id="sheet5"\n                >pane</md-pane>\n                <md-pane\n                    label="Label"\n                    .trailingActions="','"\n                    ui="sheet south modal"\n                    id="sheet6"\n                >pane</md-pane>\n                <md-pane\n                    label="Label"\n                    .trailingActions="','"\n                    ui="sheet west modal"\n                    id="sheet7"\n                >pane</md-pane>\n\n                <div class="md-layout-border__item md-layout-border__item--center">\n                    <div class="md-layout-column" style="margin: 24px;">\n                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                            <md-pane>pane</md-pane>\n                        </div>\n                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                            <md-pane\n                                label="Label"\n                            >pane</md-pane>\n                        </div>\n                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                            <md-pane\n                                .leadingActions="','"\n                                label="Label"\n                            >pane</md-pane>\n                        </div>\n                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                            <md-pane\n                                .leadingActions="','"\n                                label="Label"\n                                .trailingActions="','"\n                            >pane</md-pane>\n                        </div>\n                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                            <md-pane\n                                .leadingActions="','"\n                                label="Label"\n                                .trailingActions="','"\n                                .buttons="','"\n                            >pane</md-pane>\n                        </div>\n                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                            <md-pane\n                                .leadingActions="','"\n                                label="Label"\n                                .trailingActions="','"\n                                .buttons="','"\n                            >pane</md-pane>\n                        </div>\n\n\n\n\n                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                            <md-pane\n                                .leadingActions="','"\n                                label="Label"\n                                .trailingActions="','"\n                                .buttons="','"\n                                ui="dialog"\n                                id="dialog0"\n                                @onPaneActionClick="','"\n                                @onPaneButtonClick="','"\n                            >pane</md-pane>\n                            <md-button @click="','" label="dialog"></md-button>\n                        </div>\n                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                            <md-pane\n                                .leadingActions="','"\n                                label="Label"\n                                .trailingActions="','"\n                                .buttons="','"\n                                ui="dialog full-screen"\n                                id="dialog1"\n                                @onPaneActionClick="','"\n                                @onPaneButtonClick="','"\n                            >pane</md-pane>\n                            <md-button @click="','" label="dialog full-screen"></md-button>\n                        </div>\n\n\n\n                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                            <md-button @click="','" label="sheet north"></md-button>\n                            <md-button @click="','" label="sheet east"></md-button>\n                            <md-button @click="','" label="sheet south"></md-button>\n                            <md-button @click="','" label="sheet west"></md-button>\n                        </div>\n\n\n                        <div class="md-layout-column__item--expanded4 md-layout-column__item--medium4 md-layout-column__item--compact4">\n                            <md-button @click="','" label="sheet north modal"></md-button>\n                            <md-button @click="','" label="sheet east modal"></md-button>\n                            <md-button @click="','" label="sheet south modal"></md-button>\n                            <md-button @click="','" label="sheet west modal"></md-button>\n                        </div>\n        \n                    </div>\n\n                </div>\n            </div>\n        '],n||(n=e.slice(0)),i=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))),[{icon:"favorite"}],[{icon:"favorite"}],[{icon:"favorite"}],[{icon:"favorite"}],[{icon:"favorite"}],[{icon:"favorite"}],[{icon:"favorite"}],[{icon:"favorite"}],[{icon:"favorite"}],[{icon:"favorite"}],[{icon:"favorite"}],[{icon:"favorite"}],[{icon:"favorite"}],[{label:"Label"}],[{icon:"favorite"}],[{icon:"favorite"},{icon:"favorite"},{icon:"favorite"}],[{label:"Label",ui:"filled"},{label:"Label",ui:"outlined"}],[{icon:"favorite"}],[{icon:"favorite"}],[{label:"Label"}],this.handleClick0,this.handleClick0,this.handleClick0,[{icon:"favorite"}],[{icon:"favorite"}],[{label:"Label"}],this.handleClick1,this.handleClick1,this.handleClick1,this.handleClick2,this.handleClick3,this.handleClick4,this.handleClick5,this.handleClick6,this.handleClick7,this.handleClick8,this.handleClick9);var e,n}},{key:"sheet0",get:function(){return this.querySelector("#sheet0")}},{key:"sheet1",get:function(){return this.querySelector("#sheet1")}},{key:"sheet2",get:function(){return this.querySelector("#sheet2")}},{key:"sheet3",get:function(){return this.querySelector("#sheet3")}},{key:"sheet4",get:function(){return this.querySelector("#sheet4")}},{key:"sheet5",get:function(){return this.querySelector("#sheet5")}},{key:"sheet6",get:function(){return this.querySelector("#sheet6")}},{key:"sheet7",get:function(){return this.querySelector("#sheet7")}},{key:"dialog0",get:function(){return this.querySelector("#dialog0")}},{key:"dialog1",get:function(){return this.querySelector("#dialog1")}},{key:"handleClick0",value:function(){this.dialog0.open?this.dialog0.close():this.dialog0.show()}},{key:"handleClick1",value:function(){this.dialog1.open?this.dialog1.close():this.dialog1.show()}},{key:"handleClick2",value:function(){this.sheet0.open?this.sheet0.close():this.sheet0.show()}},{key:"handleClick3",value:function(){this.sheet1.open?this.sheet1.close():this.sheet1.show()}},{key:"handleClick4",value:function(){this.sheet2.open?this.sheet2.close():this.sheet2.show()}},{key:"handleClick5",value:function(){this.sheet3.open?this.sheet3.close():this.sheet3.show()}},{key:"handleClick6",value:function(){this.sheet4.open?this.sheet4.close():this.sheet4.show()}},{key:"handleClick7",value:function(){this.sheet5.open?this.sheet5.close():this.sheet5.show()}},{key:"handleClick8",value:function(){this.sheet6.open?this.sheet6.close():this.sheet6.show()}},{key:"handleClick9",value:function(){this.sheet7.open?this.sheet7.close():this.sheet7.show()}}])&&c(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,o}(o.U);customElements.define("dev-pane",h);const p=document.createElement("dev-pane")}}]);