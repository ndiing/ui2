if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>s(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"243.js",revision:"3db6fb4f1c95946502d5a0e8abdd2bc8"},{url:"index.html",revision:"b1bf5eb30943ecc2a793d55ce18b4636"},{url:"main.css",revision:"2ba81f8e1ca0d6d84171b1ed25a23e98"},{url:"main.js",revision:"316bad7f1a29552143c44b3d3101c7bb"},{url:"main.js.LICENSE.txt",revision:"34941ec691cb0e021969d560521fa01f"}],{})}));
