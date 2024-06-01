/*! For license information please see 9681.js.LICENSE.txt */
"use strict";(self.webpackChunkmaterial=self.webpackChunkmaterial||[]).push([[9681],{9681:(t,e,r)=>{r.r(e),r.d(e,{default:()=>S});var n=r(420),o=r(7184);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,l(n.key),n)}}function l(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==i(e)?e:e+""}var s,u=function(){return t=function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.host=e,this.options=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){var n,o,i;n=t,o=e,i=r[e],(o=l(o))in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({scrollbar:null,container:null,total:1e3,itemHeight:40,threshold:2},r),this.init()},(e=[{key:"init",value:function(){this.host.classList.add("md-virtual-scroll"),this.scrollbar=this.options.scrollbar,this.scrollbar.classList.add("md-virtual-scroll__scrollbar"),this.container=this.options.container,this.container.classList.add("md-virtual-scroll__container"),this.handleScroll=this.handleScroll.bind(this),this.host.addEventListener("scroll",this.handleScroll),this.handleScroll()}},{key:"handleScroll",value:function(t){var e=this.options.total,r=this.options.itemHeight,n=this.options.threshold,o=this.host.scrollTop,i=this.host.clientHeight;this.containerHeight=e*r,this.start=Math.floor(o/r)-n,this.start=Math.max(0,this.start),this.limit=Math.ceil(i/r)+2*n,this.limit=Math.min(e-this.start,this.limit),this.end=this.start+this.limit,this.translateY=this.start*r,this.scrollbar.style.setProperty("height",this.containerHeight+"px"),this.container.style.setProperty("transform","translate3d(0%,".concat(this.translateY,"px,0px)")),this.emit("onVirtualScroll",this),this.hasChange!==[this.start,this.end].join()&&this.emit("onVirtualScrollChange",this),this.hasChange=[this.start,this.end].join()}},{key:"emit",value:function(t,e){var r=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:e});this.host.dispatchEvent(r)}},{key:"destroy",value:function(){this.host.classList.remove("md-virtual-scroll"),this.scrollbar=this.options.scrollbar,this.scrollbar.style.removeProperty("height"),this.scrollbar.classList.remove("md-virtual-scroll__scrollbar"),this.container=this.options.container,this.container.style.removeProperty("transform"),this.container.classList.remove("md-virtual-scroll__container"),this.host.removeEventListener("scroll",this.handleScroll)}}])&&c(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function f(){f=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new I(n||[]);return o(a,"_invoke",{value:E(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var y="suspendedStart",v="suspendedYield",d="executing",m="completed",b={};function g(){}function w(){}function O(){}var j={};s(j,a,(function(){return this}));var S=Object.getPrototypeOf,L=S&&S(S(G([])));L&&L!==r&&n.call(L,a)&&(j=L);var P=O.prototype=g.prototype=Object.create(j);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,a,c){var l=p(t[o],t,i);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==h(u)&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(u).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(l.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function E(e,r,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=k(c,n);if(l){if(l===b)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(e,r,n);if("normal"===s.type){if(o=n.done?m:v,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(h(e)+" is not iterable")}return w.prototype=O,o(P,"constructor",{value:O,configurable:!0}),o(O,"constructor",{value:w,configurable:!0}),w.displayName=s(O,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,s(t,l,"GeneratorFunction")),t.prototype=Object.create(P),t},e.awrap=function(t){return{__await:t}},_(x.prototype),s(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(P),s(P,l,"Generator"),s(P,a,(function(){return this})),s(P,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function p(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function y(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){p(i,n,o,a,c,"next",t)}function c(t){p(i,n,o,a,c,"throw",t)}a(void 0)}))}}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,d(n.key),n)}}function d(t){var e=function(t,e){if("object"!=h(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==h(e)?e:e+""}function m(t,e,r){return e=w(e),function(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,b()?Reflect.construct(e,r||[],w(t).constructor):e.apply(t,r))}function b(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(b=function(){return!!t})()}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=w(t)););return t}(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},g.apply(this,arguments)}function w(t){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},w(t)}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}var j=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),m(this,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(e,t),r=e,o=[{key:"render",value:function(){return(0,n.qy)(s||(t=['\n            <div class="md-layout-column" style="margin:24px;">\n                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium4 md-layout-column__item--compact4">\n\n                    <div id="viewport" style="width: calc(56px * 5);height: calc(56px * 5);" @onVirtualScrollChange="','">\n                        <div id="scrollbar"></div>\n                        <md-list \n                            id="container"\n                            .list="','"\n                            .singleSelection="','"\n                            @onListItemClick="','"\n                            @onListItemSelected="','"\n                        ></md-list>\n                    </div>\n\n                </div>\n            </div>\n        '],e||(e=t.slice(0)),s=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))),this.handleVirtualScrollChange,this.list,!0,this.handleListItemClick,this.handleListItemSelected);var t,e}},{key:"viewport",get:function(){return this.querySelector("#viewport")}},{key:"scrollbar",get:function(){return this.querySelector("#scrollbar")}},{key:"container",get:function(){return this.querySelector("#container")}},{key:"connectedCallback",value:(a=y(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g(w(e.prototype),"connectedCallback",this).call(this),t.next=3,this.updateComplete;case 3:this.data=Array.from({length:5e5},(function(t,e){return{label:e+1}})),this.virtualScroll=new u(this.viewport,{scrollbar:this.scrollbar,container:this.container,total:this.data.length,itemHeight:56});case 5:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"handleVirtualScrollChange",value:function(t){var e=t.detail,r=e.start,n=e.end;this.list=this.data.slice(r,n),this.requestUpdate()}},{key:"handleListItemClick",value:function(t){}},{key:"handleListItemSelected",value:function(t){}},{key:"disconnectedCallback",value:(i=y(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return g(w(e.prototype),"disconnectedCallback",this).call(this),t.next=3,this.updateComplete;case 3:this.virtualScroll.destroy();case 4:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})}],o&&v(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o,i,a}(o.U);customElements.define("app-virtual-scroll",j);const S=document.createElement("app-virtual-scroll")}}]);