/*! For license information please see main.js.LICENSE.txt */
(()=>{var e,t,i={485:(e,t,i)=>{var a={"./zh-Hans.js":[243,243]};function o(e){if(!i.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return i.e(t[1]).then((()=>i(o)))}o.keys=()=>Object.keys(a),o.id=485,e.exports=o}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var n=a[e]={exports:{}};return i[e](n,n.exports,o),n.exports}o.m=i,o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,i)=>(o.f[i](e,t),t)),[])),o.u=e=>e+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@ndiinginc/material:",o.l=(i,a,n,l)=>{if(e[i])e[i].push(a);else{var d,s;if(void 0!==n)for(var r=document.getElementsByTagName("script"),c=0;c<r.length;c++){var m=r[c];if(m.getAttribute("src")==i||m.getAttribute("data-webpack")==t+n){d=m;break}}d||(s=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",t+n),d.src=i),e[i]=[a];var u=(t,a)=>{d.onerror=d.onload=null,clearTimeout(h);var o=e[i];if(delete e[i],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(a))),t)return t(a)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),s&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var a=i.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=i[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={792:0};o.f.j=(t,i)=>{var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)i.push(a[2]);else{var n=new Promise(((i,o)=>a=e[t]=[i,o]));i.push(a[2]=n);var l=o.p+o.u(t),d=new Error;o.l(l,(i=>{if(o.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+l+")",d.name="ChunkLoadError",d.type=n,d.request=l,a[1](d)}}),"chunk-"+t,t)}};var t=(t,i)=>{var a,n,[l,d,s]=i,r=0;if(l.some((t=>0!==e[t]))){for(a in d)o.o(d,a)&&(o.m[a]=d[a]);s&&s(o)}for(t&&t(i);r<l.length;r++)n=l[r],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0},i=self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})(),(()=>{"use strict";function e(e){const t=e=>String(e).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}T${t(e.getHours())}:${t(e.getMinutes())}`}function t(e){const t=e=>String(e).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}function i(e){return`${e.getFullYear()}`}function a(e){return`${e.getFullYear()}-${(e=>String(e).padStart(2,"0"))(e.getMonth()+1)}`}function n(e){const t=e=>String(e).padStart(2,"0");return`${t(e.getHours())}:${t(e.getMinutes())}`}function l(e){let t=e.getFullYear(),i=e.getWeek();return`${t}-W${i<10?"0"+i:i}`}function d(e){return null!=e}function s(e,t,i,a=1){e=Math.round(Math.min(255,Math.max(0,e))),t=Math.round(Math.min(255,Math.max(0,t))),i=Math.round(Math.min(255,Math.max(0,i))),a=Math.min(1,Math.max(0,a));const o=Math.round(255*a).toString(16).padStart(2,"0"),n=`#${e.toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}${i.toString(16).padStart(2,"0")}`;return 1===a?n:`${n}${o}`}function r(e,t,i){return(i-e)/(t-e)*100}Date.prototype.setWeek=function(e){if("number"!=typeof e||e<1||e>53)throw new Error("Invalid week number. Week number should be between 1 and 53.");return this.setDate(1),this.setMonth(0),this.setDate(1+7*(e-1)),this},Date.prototype.getWeek=function(){let e=new Date(this.getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);let t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e-t)/864e5-3+(t.getDay()+6)%7)/7)};const c=(e,t,i)=>{let a=e[0];for(let o=1;o<e.length;o++)a+=t[i?i[o-1]:o-1],a+=e[o];return a},m=e=>{return"string"!=typeof(t=e)&&"strTag"in t?c(e.strings,e.values):e;var t},u="lit-localize-status";class h{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(u,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(u,this.__litLocalizeEventHandler)}}class p{constructor(){this.settled=!1,this.promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t}))}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}const _=[];for(let e=0;e<256;e++)_[e]=(e>>4&15).toString(16)+(15&e).toString(16);const b="",v="h",y="s";const g=new WeakMap,k=new Map;function f(e,t,i){if(e){const a=i?.id??function(e){const t="string"==typeof e?e:e.strings;let i=k.get(t);return void 0===i&&(i=function(e,t){return(t?v:y)+function(e){let t=0,i=8997,a=0,o=33826,n=0,l=40164,d=0,s=52210;for(let r=0;r<e.length;r++)i^=e.charCodeAt(r),t=435*i,a=435*o,n=435*l,d=435*s,n+=i<<8,d+=o<<8,a+=t>>>16,i=65535&t,n+=a>>>16,o=65535&a,s=d+(n>>>16)&65535,l=65535&n;return _[s>>8]+_[255&s]+_[l>>8]+_[255&l]+_[o>>8]+_[255&o]+_[i>>8]+_[255&i]}("string"==typeof e?e:e.join(b))}(t,"string"!=typeof e&&!("strTag"in e)),k.set(t,i)),i}(t),o=e[a];if(o){if("string"==typeof o)return o;if("strTag"in o)return c(o.strings,t.values,o.values);{let e=g.get(o);return void 0===e&&(e=o.values,g.set(o,e)),{...o,values:e.map((e=>t.values[e]))}}}}return m(t)}function x(e){window.dispatchEvent(new CustomEvent(u,{detail:e}))}let C,$,w,S,P,B="",I=new p;I.resolve();let T=0;let M=m,A=!1;const L={Afrikaans:"af",Akan:"ak",Albanian:"sq",Amharic:"am",Arabic:"ar",Armenian:"hy",Assamese:"as",Aymara:"ay",Azerbaijani:"az",Bambara:"bm",Bangla:"bn",Basque:"eu",Belarusian:"be",Bhojpuri:"bh",Bosnian:"bs",Bulgarian:"bg",Burmese:"my",Catalan:"ca",Cebuano:"ceb","Central Kurdish":"ckb","Chinese (Simplified)":"zh-Hans","Chinese (Traditional)":"zh-Hant",Corsican:"co",Croatian:"hr",Czech:"cs",Danish:"da",Divehi:"dv",Dogri:"doi",Dutch:"nl",English:"en",Esperanto:"eo",Estonian:"et",Ewe:"ee",Filipino:"fil",Finnish:"fi",French:"fr",Galician:"gl",Ganda:"lg",Georgian:"ka",German:"de","Goan Konkani":"gom",Greek:"el",Guarani:"gn",Gujarati:"gu","Haitian Creole":"ht",Hausa:"ha",Hawaiian:"haw",Hebrew:"he",Hindi:"hi",Hmong:"hmn",Hungarian:"hu",Icelandic:"is",Igbo:"ig",Iloko:"ilo",Indonesian:"id",Irish:"ga",Italian:"it",Japanese:"ja",Javanese:"jv",Kannada:"kn",Kazakh:"kk",Khmer:"km",Kinyarwanda:"rw",Korean:"ko",Krio:"kri",Kurdish:"ku",Kyrgyz:"ky",Lao:"lo",Latin:"la",Latvian:"lv",Lingala:"ln",Lithuanian:"lt",Luxembourgish:"lb",Macedonian:"mk",Maithili:"mai",Malagasy:"mg",Malay:"ms",Malayalam:"ml",Maltese:"mt","Manipuri (Meitei Mayek)":"mni",Māori:"mi",Marathi:"mr",Mizo:"lus",Mongolian:"mn",Nepali:"ne","Northern Sotho":"nso",Norwegian:"no",Nyanja:"ny",Odia:"or",Oromo:"om",Pashto:"ps",Persian:"fa",Polish:"pl",Portuguese:"pt",Punjabi:"pa",Quechua:"qu",Romanian:"ro",Russian:"ru",Samoan:"sm",Sanskrit:"sa","Scottish Gaelic":"gd",Serbian:"sr",Shona:"sn",Sindhi:"sd",Sinhala:"si",Slovak:"sk",Slovenian:"sl",Somali:"so","Southern Sotho":"st",Spanish:"es",Sundanese:"su",Swahili:"sw",Swedish:"sv",Tajik:"tg",Tamil:"ta",Tatar:"tt",Telugu:"te",Thai:"th",Tigrinya:"ti",Tsonga:"ts",Turkish:"tr",Turkmen:"tk",Ukrainian:"uk",Urdu:"ur",Uyghur:"ug",Uzbek:"uz",Vietnamese:"vi",Welsh:"cy","Western Frisian":"fy",Xhosa:"xh",Yiddish:"yi",Yoruba:"yo",Zulu:"zu"},{getLocale:E,setLocale:R}=(D={sourceLocale:"en",targetLocales:["zh-Hans"],loadLocale:e=>o(485)(`./${e}.js`)},function(e){if(A)throw new Error("lit-localize can only be configured once");M=(e,t)=>f(P,e,t),A=!0}(),B=$=D.sourceLocale,w=new Set(D.targetLocales),w.add(D.sourceLocale),S=D.loadLocale,{getLocale:()=>B,setLocale:e=>{if(e===(C??B))return I.promise;if(!w||!S)throw new Error("Internal error");if(!w.has(e))throw new Error("Invalid locale code");T++;const t=T;return C=e,I.settled&&(I=new p),x({status:"loading",loadingLocale:e}),(e===$?Promise.resolve({templates:void 0}):S(e)).then((i=>{T===t&&(B=e,C=void 0,P=i.templates,x({status:"ready",readyLocale:e}),I.resolve())}),(i=>{T===t&&(x({status:"error",errorLocale:e,errorMessage:i.toString()}),I.reject(i))})),I.promise}});var D;function F(e){return e<0?-1:0===e?0:1}function N(e,t,i){return(1-i)*e+i*t}function H(e,t,i){return i<e?e:i>t?t:i}function q(e){return(e%=360)<0&&(e+=360),e}function O(e){return(e%=360)<0&&(e+=360),e}function Y(e,t){return 180-Math.abs(Math.abs(e-t)-180)}function U(e,t){return[e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2]]}const z=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],W=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],V=[95.047,100,108.883];function G(e,t,i){return(255<<24|(255&e)<<16|(255&t)<<8|255&i)>>>0}function j(e){return G(ae(e[0]),ae(e[1]),ae(e[2]))}function X(e){return e>>16&255}function K(e){return e>>8&255}function J(e){return 255&e}function Z(e,t,i){const a=W,o=a[0][0]*e+a[0][1]*t+a[0][2]*i,n=a[1][0]*e+a[1][1]*t+a[1][2]*i,l=a[2][0]*e+a[2][1]*t+a[2][2]*i;return G(ae(o),ae(n),ae(l))}function Q(e){const t=function(e){return U([ie(X(e)),ie(K(e)),ie(J(e))],z)}(e)[1];return 116*oe(t/100)-16}function ee(e){return 100*ne((e+16)/116)}function te(e){return 116*oe(e/100)-16}function ie(e){const t=e/255;return t<=.040449936?t/12.92*100:100*Math.pow((t+.055)/1.055,2.4)}function ae(e){const t=e/100;let i=0;return i=t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,(a=Math.round(255*i))<0?0:a>255?255:a;var a}function oe(e){return e>216/24389?Math.pow(e,1/3):(24389/27*e+16)/116}function ne(e){const t=e*e*e;return t>216/24389?t:(116*e-16)/(24389/27)}class le{static make(e=function(){return V}(),t=200/Math.PI*ee(50)/100,i=50,a=2,o=!1){const n=e,l=.401288*n[0]+.650173*n[1]+-.051461*n[2],d=-.250268*n[0]+1.204414*n[1]+.045854*n[2],s=-.002079*n[0]+.048952*n[1]+.953127*n[2],r=.8+a/10,c=r>=.9?N(.59,.69,10*(r-.9)):N(.525,.59,10*(r-.8));let m=o?1:r*(1-1/3.6*Math.exp((-t-42)/92));m=m>1?1:m<0?0:m;const u=r,h=[m*(100/l)+1-m,m*(100/d)+1-m,m*(100/s)+1-m],p=1/(5*t+1),_=p*p*p*p,b=1-_,v=_*t+.1*b*b*Math.cbrt(5*t),y=ee(i)/e[1],g=1.48+Math.sqrt(y),k=.725/Math.pow(y,.2),f=k,x=[Math.pow(v*h[0]*l/100,.42),Math.pow(v*h[1]*d/100,.42),Math.pow(v*h[2]*s/100,.42)],C=[400*x[0]/(x[0]+27.13),400*x[1]/(x[1]+27.13),400*x[2]/(x[2]+27.13)];return new le(y,(2*C[0]+C[1]+.05*C[2])*k,k,f,c,u,h,v,Math.pow(v,.25),g)}constructor(e,t,i,a,o,n,l,d,s,r){this.n=e,this.aw=t,this.nbb=i,this.ncb=a,this.c=o,this.nc=n,this.rgbD=l,this.fl=d,this.fLRoot=s,this.z=r}}le.DEFAULT=le.make();class de{constructor(e,t,i,a,o,n,l,d,s){this.hue=e,this.chroma=t,this.j=i,this.q=a,this.m=o,this.s=n,this.jstar=l,this.astar=d,this.bstar=s}distance(e){const t=this.jstar-e.jstar,i=this.astar-e.astar,a=this.bstar-e.bstar,o=Math.sqrt(t*t+i*i+a*a);return 1.41*Math.pow(o,.63)}static fromInt(e){return de.fromIntInViewingConditions(e,le.DEFAULT)}static fromIntInViewingConditions(e,t){const i=(65280&e)>>8,a=255&e,o=ie((16711680&e)>>16),n=ie(i),l=ie(a),d=.41233895*o+.35762064*n+.18051042*l,s=.2126*o+.7152*n+.0722*l,r=.01932141*o+.11916382*n+.95034478*l,c=.401288*d+.650173*s-.051461*r,m=-.250268*d+1.204414*s+.045854*r,u=-.002079*d+.048952*s+.953127*r,h=t.rgbD[0]*c,p=t.rgbD[1]*m,_=t.rgbD[2]*u,b=Math.pow(t.fl*Math.abs(h)/100,.42),v=Math.pow(t.fl*Math.abs(p)/100,.42),y=Math.pow(t.fl*Math.abs(_)/100,.42),g=400*F(h)*b/(b+27.13),k=400*F(p)*v/(v+27.13),f=400*F(_)*y/(y+27.13),x=(11*g+-12*k+f)/11,C=(g+k-2*f)/9,$=(20*g+20*k+21*f)/20,w=(40*g+20*k+f)/20,S=180*Math.atan2(C,x)/Math.PI,P=S<0?S+360:S>=360?S-360:S,B=P*Math.PI/180,I=w*t.nbb,T=100*Math.pow(I/t.aw,t.c*t.z),M=4/t.c*Math.sqrt(T/100)*(t.aw+4)*t.fLRoot,A=P<20.14?P+360:P,L=5e4/13*(.25*(Math.cos(A*Math.PI/180+2)+3.8))*t.nc*t.ncb*Math.sqrt(x*x+C*C)/($+.305),E=Math.pow(L,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),R=E*Math.sqrt(T/100),D=R*t.fLRoot,N=50*Math.sqrt(E*t.c/(t.aw+4)),H=(1+100*.007)*T/(1+.007*T),q=1/.0228*Math.log(1+.0228*D),O=q*Math.cos(B),Y=q*Math.sin(B);return new de(P,R,T,M,D,N,H,O,Y)}static fromJch(e,t,i){return de.fromJchInViewingConditions(e,t,i,le.DEFAULT)}static fromJchInViewingConditions(e,t,i,a){const o=4/a.c*Math.sqrt(e/100)*(a.aw+4)*a.fLRoot,n=t*a.fLRoot,l=t/Math.sqrt(e/100),d=50*Math.sqrt(l*a.c/(a.aw+4)),s=i*Math.PI/180,r=(1+100*.007)*e/(1+.007*e),c=1/.0228*Math.log(1+.0228*n),m=c*Math.cos(s),u=c*Math.sin(s);return new de(i,t,e,o,n,d,r,m,u)}static fromUcs(e,t,i){return de.fromUcsInViewingConditions(e,t,i,le.DEFAULT)}static fromUcsInViewingConditions(e,t,i,a){const o=t,n=i,l=Math.sqrt(o*o+n*n),d=(Math.exp(.0228*l)-1)/.0228/a.fLRoot;let s=Math.atan2(n,o)*(180/Math.PI);s<0&&(s+=360);const r=e/(1-.007*(e-100));return de.fromJchInViewingConditions(r,d,s,a)}toInt(){return this.viewed(le.DEFAULT)}viewed(e){const t=0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100),i=Math.pow(t/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),n=e.aw*Math.pow(this.j/100,1/e.c/e.z),l=o*(5e4/13)*e.nc*e.ncb,d=n/e.nbb,s=Math.sin(a),r=Math.cos(a),c=23*(d+.305)*i/(23*l+11*i*r+108*i*s),m=c*r,u=c*s,h=(460*d+451*m+288*u)/1403,p=(460*d-891*m-261*u)/1403,_=(460*d-220*m-6300*u)/1403,b=Math.max(0,27.13*Math.abs(h)/(400-Math.abs(h))),v=F(h)*(100/e.fl)*Math.pow(b,1/.42),y=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),g=F(p)*(100/e.fl)*Math.pow(y,1/.42),k=Math.max(0,27.13*Math.abs(_)/(400-Math.abs(_))),f=F(_)*(100/e.fl)*Math.pow(k,1/.42),x=v/e.rgbD[0],C=g/e.rgbD[1],$=f/e.rgbD[2];return Z(1.86206786*x-1.01125463*C+.14918677*$,.38752654*x+.62144744*C-.00897398*$,-.0158415*x-.03412294*C+1.04996444*$)}static fromXyzInViewingConditions(e,t,i,a){const o=.401288*e+.650173*t-.051461*i,n=-.250268*e+1.204414*t+.045854*i,l=-.002079*e+.048952*t+.953127*i,d=a.rgbD[0]*o,s=a.rgbD[1]*n,r=a.rgbD[2]*l,c=Math.pow(a.fl*Math.abs(d)/100,.42),m=Math.pow(a.fl*Math.abs(s)/100,.42),u=Math.pow(a.fl*Math.abs(r)/100,.42),h=400*F(d)*c/(c+27.13),p=400*F(s)*m/(m+27.13),_=400*F(r)*u/(u+27.13),b=(11*h+-12*p+_)/11,v=(h+p-2*_)/9,y=(20*h+20*p+21*_)/20,g=(40*h+20*p+_)/20,k=180*Math.atan2(v,b)/Math.PI,f=k<0?k+360:k>=360?k-360:k,x=f*Math.PI/180,C=g*a.nbb,$=100*Math.pow(C/a.aw,a.c*a.z),w=4/a.c*Math.sqrt($/100)*(a.aw+4)*a.fLRoot,S=f<20.14?f+360:f,P=5e4/13*(1/4*(Math.cos(S*Math.PI/180+2)+3.8))*a.nc*a.ncb*Math.sqrt(b*b+v*v)/(y+.305),B=Math.pow(P,.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),I=B*Math.sqrt($/100),T=I*a.fLRoot,M=50*Math.sqrt(B*a.c/(a.aw+4)),A=(1+100*.007)*$/(1+.007*$),L=Math.log(1+.0228*T)/.0228,E=L*Math.cos(x),R=L*Math.sin(x);return new de(f,I,$,w,T,M,A,E,R)}xyzInViewingConditions(e){const t=0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100),i=Math.pow(t/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),a=this.hue*Math.PI/180,o=.25*(Math.cos(a+2)+3.8),n=e.aw*Math.pow(this.j/100,1/e.c/e.z),l=o*(5e4/13)*e.nc*e.ncb,d=n/e.nbb,s=Math.sin(a),r=Math.cos(a),c=23*(d+.305)*i/(23*l+11*i*r+108*i*s),m=c*r,u=c*s,h=(460*d+451*m+288*u)/1403,p=(460*d-891*m-261*u)/1403,_=(460*d-220*m-6300*u)/1403,b=Math.max(0,27.13*Math.abs(h)/(400-Math.abs(h))),v=F(h)*(100/e.fl)*Math.pow(b,1/.42),y=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),g=F(p)*(100/e.fl)*Math.pow(y,1/.42),k=Math.max(0,27.13*Math.abs(_)/(400-Math.abs(_))),f=F(_)*(100/e.fl)*Math.pow(k,1/.42),x=v/e.rgbD[0],C=g/e.rgbD[1],$=f/e.rgbD[2];return[1.86206786*x-1.01125463*C+.14918677*$,.38752654*x+.62144744*C-.00897398*$,-.0158415*x-.03412294*C+1.04996444*$]}}class se{static sanitizeRadians(e){return(e+8*Math.PI)%(2*Math.PI)}static trueDelinearized(e){const t=e/100;let i=0;return i=t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,255*i}static chromaticAdaptation(e){const t=Math.pow(Math.abs(e),.42);return 400*F(e)*t/(t+27.13)}static hueOf(e){const t=U(e,se.SCALED_DISCOUNT_FROM_LINRGB),i=se.chromaticAdaptation(t[0]),a=se.chromaticAdaptation(t[1]),o=se.chromaticAdaptation(t[2]),n=(11*i+-12*a+o)/11,l=(i+a-2*o)/9;return Math.atan2(l,n)}static areInCyclicOrder(e,t,i){return se.sanitizeRadians(t-e)<se.sanitizeRadians(i-e)}static intercept(e,t,i){return(t-e)/(i-e)}static lerpPoint(e,t,i){return[e[0]+(i[0]-e[0])*t,e[1]+(i[1]-e[1])*t,e[2]+(i[2]-e[2])*t]}static setCoordinate(e,t,i,a){const o=se.intercept(e[a],t,i[a]);return se.lerpPoint(e,o,i)}static isBounded(e){return 0<=e&&e<=100}static nthVertex(e,t){const i=se.Y_FROM_LINRGB[0],a=se.Y_FROM_LINRGB[1],o=se.Y_FROM_LINRGB[2],n=t%4<=1?0:100,l=t%2==0?0:100;if(t<4){const t=n,d=l,s=(e-t*a-d*o)/i;return se.isBounded(s)?[s,t,d]:[-1,-1,-1]}if(t<8){const t=n,d=l,s=(e-d*i-t*o)/a;return se.isBounded(s)?[d,s,t]:[-1,-1,-1]}{const t=n,d=l,s=(e-t*i-d*a)/o;return se.isBounded(s)?[t,d,s]:[-1,-1,-1]}}static bisectToSegment(e,t){let i=[-1,-1,-1],a=i,o=0,n=0,l=!1,d=!0;for(let s=0;s<12;s++){const r=se.nthVertex(e,s);if(r[0]<0)continue;const c=se.hueOf(r);l?(d||se.areInCyclicOrder(o,c,n))&&(d=!1,se.areInCyclicOrder(o,t,c)?(a=r,n=c):(i=r,o=c)):(i=r,a=r,o=c,n=c,l=!0)}return[i,a]}static midpoint(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2]}static criticalPlaneBelow(e){return Math.floor(e-.5)}static criticalPlaneAbove(e){return Math.ceil(e-.5)}static bisectToLimit(e,t){const i=se.bisectToSegment(e,t);let a=i[0],o=se.hueOf(a),n=i[1];for(let e=0;e<3;e++)if(a[e]!==n[e]){let i=-1,l=255;a[e]<n[e]?(i=se.criticalPlaneBelow(se.trueDelinearized(a[e])),l=se.criticalPlaneAbove(se.trueDelinearized(n[e]))):(i=se.criticalPlaneAbove(se.trueDelinearized(a[e])),l=se.criticalPlaneBelow(se.trueDelinearized(n[e])));for(let d=0;d<8&&!(Math.abs(l-i)<=1);d++){const d=Math.floor((i+l)/2),s=se.CRITICAL_PLANES[d],r=se.setCoordinate(a,s,n,e),c=se.hueOf(r);se.areInCyclicOrder(o,t,c)?(n=r,l=d):(a=r,o=c,i=d)}}return se.midpoint(a,n)}static inverseChromaticAdaptation(e){const t=Math.abs(e),i=Math.max(0,27.13*t/(400-t));return F(e)*Math.pow(i,1/.42)}static findResultByJ(e,t,i){let a=11*Math.sqrt(i);const o=le.DEFAULT,n=1/Math.pow(1.64-Math.pow(.29,o.n),.73),l=.25*(Math.cos(e+2)+3.8)*(5e4/13)*o.nc*o.ncb,d=Math.sin(e),s=Math.cos(e);for(let e=0;e<5;e++){const r=a/100,c=0===t||0===a?0:t/Math.sqrt(r),m=Math.pow(c*n,1/.9),u=o.aw*Math.pow(r,1/o.c/o.z)/o.nbb,h=23*(u+.305)*m/(23*l+11*m*s+108*m*d),p=h*s,_=h*d,b=(460*u+451*p+288*_)/1403,v=(460*u-891*p-261*_)/1403,y=(460*u-220*p-6300*_)/1403,g=U([se.inverseChromaticAdaptation(b),se.inverseChromaticAdaptation(v),se.inverseChromaticAdaptation(y)],se.LINRGB_FROM_SCALED_DISCOUNT);if(g[0]<0||g[1]<0||g[2]<0)return 0;const k=se.Y_FROM_LINRGB[0],f=se.Y_FROM_LINRGB[1],x=se.Y_FROM_LINRGB[2],C=k*g[0]+f*g[1]+x*g[2];if(C<=0)return 0;if(4===e||Math.abs(C-i)<.002)return g[0]>100.01||g[1]>100.01||g[2]>100.01?0:j(g);a-=(C-i)*a/(2*C)}return 0}static solveToInt(e,t,i){if(t<1e-4||i<1e-4||i>99.9999)return function(e){const t=ae(ee(e));return G(t,t,t)}(i);const a=(e=O(e))/180*Math.PI,o=ee(i),n=se.findResultByJ(a,t,o);return 0!==n?n:j(se.bisectToLimit(o,a))}static solveToCam(e,t,i){return de.fromInt(se.solveToInt(e,t,i))}}se.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]],se.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]],se.Y_FROM_LINRGB=[.2126,.7152,.0722],se.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];class re{static from(e,t,i){return new re(se.solveToInt(e,t,i))}static fromInt(e){return new re(e)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(e){this.setInternalState(se.solveToInt(e,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(e){this.setInternalState(se.solveToInt(this.internalHue,e,this.internalTone))}get tone(){return this.internalTone}set tone(e){this.setInternalState(se.solveToInt(this.internalHue,this.internalChroma,e))}constructor(e){this.argb=e;const t=de.fromInt(e);this.internalHue=t.hue,this.internalChroma=t.chroma,this.internalTone=Q(e),this.argb=e}setInternalState(e){const t=de.fromInt(e);this.internalHue=t.hue,this.internalChroma=t.chroma,this.internalTone=Q(e),this.argb=e}inViewingConditions(e){const t=de.fromInt(this.toInt()).xyzInViewingConditions(e),i=de.fromXyzInViewingConditions(t[0],t[1],t[2],le.make());return re.from(i.hue,i.chroma,te(t[1]))}}class ce{static harmonize(e,t){const i=re.fromInt(e),a=re.fromInt(t),o=Y(i.hue,a.hue),n=Math.min(.5*o,15),l=O(i.hue+n*(d=i.hue,O(a.hue-d)<=180?1:-1));var d;return re.from(l,i.chroma,i.tone).toInt()}static hctHue(e,t,i){const a=ce.cam16Ucs(e,t,i),o=de.fromInt(a),n=de.fromInt(e);return re.from(o.hue,n.chroma,Q(e)).toInt()}static cam16Ucs(e,t,i){const a=de.fromInt(e),o=de.fromInt(t),n=a.jstar,l=a.astar,d=a.bstar,s=n+(o.jstar-n)*i,r=l+(o.astar-l)*i,c=d+(o.bstar-d)*i;return de.fromUcs(s,r,c).toInt()}}class me{static isDisliked(e){const t=Math.round(e.hue)>=90&&Math.round(e.hue)<=111,i=Math.round(e.chroma)>16,a=Math.round(e.tone)<65;return t&&i&&a}static fixIfDisliked(e){return me.isDisliked(e)?re.from(e.hue,e.chroma,70):e}}var ue;!function(e){e[e.MONOCHROME=0]="MONOCHROME",e[e.NEUTRAL=1]="NEUTRAL",e[e.TONAL_SPOT=2]="TONAL_SPOT",e[e.VIBRANT=3]="VIBRANT",e[e.EXPRESSIVE=4]="EXPRESSIVE",e[e.FIDELITY=5]="FIDELITY",e[e.CONTENT=6]="CONTENT",e[e.RAINBOW=7]="RAINBOW",e[e.FRUIT_SALAD=8]="FRUIT_SALAD"}(ue||(ue={}));class he{constructor(e,t,i,a){this.low=e,this.normal=t,this.medium=i,this.high=a}getContrast(e){return e<=-1?this.low:e<0?N(this.low,this.normal,(e- -1)/1):e<.5?N(this.normal,this.medium,(e-0)/.5):e<1?N(this.medium,this.high,(e-.5)/.5):this.high}}class pe{static ratioOfTones(e,t){return e=H(0,100,e),t=H(0,100,t),pe.ratioOfYs(ee(e),ee(t))}static ratioOfYs(e,t){const i=e>t?e:t;return(i+5)/((i===t?e:t)+5)}static lighter(e,t){if(e<0||e>100)return-1;const i=ee(e),a=t*(i+5)-5,o=pe.ratioOfYs(a,i),n=Math.abs(o-t);if(o<t&&n>.04)return-1;const l=te(a)+.4;return l<0||l>100?-1:l}static darker(e,t){if(e<0||e>100)return-1;const i=ee(e),a=(i+5)/t-5,o=pe.ratioOfYs(i,a),n=Math.abs(o-t);if(o<t&&n>.04)return-1;const l=te(a)-.4;return l<0||l>100?-1:l}static lighterUnsafe(e,t){const i=pe.lighter(e,t);return i<0?100:i}static darkerUnsafe(e,t){const i=pe.darker(e,t);return i<0?0:i}}class _e{static fromPalette(e){return new _e(e.name??"",e.palette,e.tone,e.isBackground??!1,e.background,e.secondBackground,e.contrastCurve,e.toneDeltaPair)}constructor(e,t,i,a,o,n,l,d){if(this.name=e,this.palette=t,this.tone=i,this.isBackground=a,this.background=o,this.secondBackground=n,this.contrastCurve=l,this.toneDeltaPair=d,this.hctCache=new Map,!o&&n)throw new Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);if(!o&&l)throw new Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);if(o&&!l)throw new Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(e){return this.getHct(e).toInt()}getHct(e){const t=this.hctCache.get(e);if(null!=t)return t;const i=this.getTone(e),a=this.palette(e).getHct(i);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(e,a),a}getTone(e){const t=e.contrastLevel<0;if(this.toneDeltaPair){const i=this.toneDeltaPair(e),a=i.roleA,o=i.roleB,n=i.delta,l=i.polarity,d=i.stayTogether,s=this.background(e).getTone(e),r="nearer"===l||"lighter"===l&&!e.isDark||"darker"===l&&e.isDark,c=r?a:o,m=r?o:a,u=this.name===c.name,h=e.isDark?1:-1,p=c.contrastCurve.getContrast(e.contrastLevel),_=m.contrastCurve.getContrast(e.contrastLevel),b=c.tone(e);let v=pe.ratioOfTones(s,b)>=p?b:_e.foregroundTone(s,p);const y=m.tone(e);let g=pe.ratioOfTones(s,y)>=_?y:_e.foregroundTone(s,_);return t&&(v=_e.foregroundTone(s,p),g=_e.foregroundTone(s,_)),(g-v)*h>=n||(g=H(0,100,v+n*h),(g-v)*h>=n||(v=H(0,100,g-n*h))),50<=v&&v<60?h>0?(v=60,g=Math.max(g,v+n*h)):(v=49,g=Math.min(g,v+n*h)):50<=g&&g<60&&(d?h>0?(v=60,g=Math.max(g,v+n*h)):(v=49,g=Math.min(g,v+n*h)):g=h>0?60:49),u?v:g}{let i=this.tone(e);if(null==this.background)return i;const a=this.background(e).getTone(e),o=this.contrastCurve.getContrast(e.contrastLevel);if(pe.ratioOfTones(a,i)>=o||(i=_e.foregroundTone(a,o)),t&&(i=_e.foregroundTone(a,o)),this.isBackground&&50<=i&&i<60&&(i=pe.ratioOfTones(49,a)>=o?49:60),this.secondBackground){const[t,a]=[this.background,this.secondBackground],[n,l]=[t(e).getTone(e),a(e).getTone(e)],[d,s]=[Math.max(n,l),Math.min(n,l)];if(pe.ratioOfTones(d,i)>=o&&pe.ratioOfTones(s,i)>=o)return i;const r=pe.lighter(d,o),c=pe.darker(s,o),m=[];return-1!==r&&m.push(r),-1!==c&&m.push(c),_e.tonePrefersLightForeground(n)||_e.tonePrefersLightForeground(l)?r<0?100:r:1===m.length?m[0]:c<0?0:c}return i}}static foregroundTone(e,t){const i=pe.lighterUnsafe(e,t),a=pe.darkerUnsafe(e,t),o=pe.ratioOfTones(i,e),n=pe.ratioOfTones(a,e);if(_e.tonePrefersLightForeground(e)){const e=Math.abs(o-n)<.1&&o<t&&n<t;return o>=t||o>=n||e?i:a}return n>=t||n>=o?a:i}static tonePrefersLightForeground(e){return Math.round(e)<60}static toneAllowsLightForeground(e){return Math.round(e)<=49}static enableLightForeground(e){return _e.tonePrefersLightForeground(e)&&!_e.toneAllowsLightForeground(e)?49:e}}class be{constructor(e,t,i,a,o){this.roleA=e,this.roleB=t,this.delta=i,this.polarity=a,this.stayTogether=o}}function ve(e){return e.variant===ue.FIDELITY||e.variant===ue.CONTENT}function ye(e){return e.variant===ue.MONOCHROME}function ge(e,t){const i=e.inViewingConditions(function(e){return le.make(void 0,void 0,e.isDark?30:80,void 0,void 0)}(t));return _e.tonePrefersLightForeground(e.tone)&&!_e.toneAllowsLightForeground(i.tone)?_e.enableLightForeground(e.tone):_e.enableLightForeground(i.tone)}class ke{static highestSurface(e){return e.isDark?ke.surfaceBright:ke.surfaceDim}}ke.contentAccentToneDelta=15,ke.primaryPaletteKeyColor=_e.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone}),ke.secondaryPaletteKeyColor=_e.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone}),ke.tertiaryPaletteKeyColor=_e.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone}),ke.neutralPaletteKeyColor=_e.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone}),ke.neutralVariantPaletteKeyColor=_e.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone}),ke.background=_e.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0}),ke.onBackground=_e.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>ke.background,contrastCurve:new he(3,3,4.5,7)}),ke.surface=_e.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0}),ke.surfaceDim=_e.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:87,isBackground:!0}),ke.surfaceBright=_e.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?24:98,isBackground:!0}),ke.surfaceContainerLowest=_e.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?4:100,isBackground:!0}),ke.surfaceContainerLow=_e.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?10:96,isBackground:!0}),ke.surfaceContainer=_e.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?12:94,isBackground:!0}),ke.surfaceContainerHigh=_e.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?17:92,isBackground:!0}),ke.surfaceContainerHighest=_e.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?22:90,isBackground:!0}),ke.onSurface=_e.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>ke.highestSurface(e),contrastCurve:new he(4.5,7,11,21)}),ke.surfaceVariant=_e.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0}),ke.onSurfaceVariant=_e.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>ke.highestSurface(e),contrastCurve:new he(3,4.5,7,11)}),ke.inverseSurface=_e.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20}),ke.inverseOnSurface=_e.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>ke.inverseSurface,contrastCurve:new he(4.5,7,11,21)}),ke.outline=_e.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>ke.highestSurface(e),contrastCurve:new he(1.5,3,4.5,7)}),ke.outlineVariant=_e.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>ke.highestSurface(e),contrastCurve:new he(1,1,3,7)}),ke.shadow=_e.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0}),ke.scrim=_e.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0}),ke.surfaceTint=_e.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0}),ke.primary=_e.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>ye(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>ke.highestSurface(e),contrastCurve:new he(3,4.5,7,11),toneDeltaPair:e=>new be(ke.primaryContainer,ke.primary,15,"nearer",!1)}),ke.onPrimary=_e.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>ye(e)?e.isDark?10:90:e.isDark?20:100,background:e=>ke.primary,contrastCurve:new he(4.5,7,11,21)}),ke.primaryContainer=_e.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>ve(e)?ge(e.sourceColorHct,e):ye(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>ke.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new be(ke.primaryContainer,ke.primary,15,"nearer",!1)}),ke.onPrimaryContainer=_e.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>ve(e)?_e.foregroundTone(ke.primaryContainer.tone(e),4.5):ye(e)?e.isDark?0:100:e.isDark?90:10,background:e=>ke.primaryContainer,contrastCurve:new he(4.5,7,11,21)}),ke.inversePrimary=_e.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>ke.inverseSurface,contrastCurve:new he(3,4.5,7,11)}),ke.secondary=_e.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>ke.highestSurface(e),contrastCurve:new he(3,4.5,7,11),toneDeltaPair:e=>new be(ke.secondaryContainer,ke.secondary,15,"nearer",!1)}),ke.onSecondary=_e.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>ye(e)?e.isDark?10:100:e.isDark?20:100,background:e=>ke.secondary,contrastCurve:new he(4.5,7,11,21)}),ke.secondaryContainer=_e.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>{const t=e.isDark?30:90;if(ye(e))return e.isDark?30:85;if(!ve(e))return t;let i=function(e,t,i,a){let o=i,n=re.from(e,t,i);if(n.chroma<t){let i=n.chroma;for(;n.chroma<t;){o+=a?-1:1;const l=re.from(e,t,o);if(i>l.chroma)break;if(Math.abs(l.chroma-t)<.4)break;Math.abs(l.chroma-t)<Math.abs(n.chroma-t)&&(n=l),i=Math.max(i,l.chroma)}}return o}(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark);return i=ge(e.secondaryPalette.getHct(i),e),i},isBackground:!0,background:e=>ke.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new be(ke.secondaryContainer,ke.secondary,15,"nearer",!1)}),ke.onSecondaryContainer=_e.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>ve(e)?_e.foregroundTone(ke.secondaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>ke.secondaryContainer,contrastCurve:new he(4.5,7,11,21)}),ke.tertiary=_e.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>ye(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>ke.highestSurface(e),contrastCurve:new he(3,4.5,7,11),toneDeltaPair:e=>new be(ke.tertiaryContainer,ke.tertiary,15,"nearer",!1)}),ke.onTertiary=_e.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>ye(e)?e.isDark?10:90:e.isDark?20:100,background:e=>ke.tertiary,contrastCurve:new he(4.5,7,11,21)}),ke.tertiaryContainer=_e.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>{if(ye(e))return e.isDark?60:49;if(!ve(e))return e.isDark?30:90;const t=ge(e.tertiaryPalette.getHct(e.sourceColorHct.tone),e),i=e.tertiaryPalette.getHct(t);return me.fixIfDisliked(i).tone},isBackground:!0,background:e=>ke.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new be(ke.tertiaryContainer,ke.tertiary,15,"nearer",!1)}),ke.onTertiaryContainer=_e.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>ye(e)?e.isDark?0:100:ve(e)?_e.foregroundTone(ke.tertiaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>ke.tertiaryContainer,contrastCurve:new he(4.5,7,11,21)}),ke.error=_e.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>ke.highestSurface(e),contrastCurve:new he(3,4.5,7,11),toneDeltaPair:e=>new be(ke.errorContainer,ke.error,15,"nearer",!1)}),ke.onError=_e.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>ke.error,contrastCurve:new he(4.5,7,11,21)}),ke.errorContainer=_e.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>ke.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new be(ke.errorContainer,ke.error,15,"nearer",!1)}),ke.onErrorContainer=_e.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?90:10,background:e=>ke.errorContainer,contrastCurve:new he(4.5,7,11,21)}),ke.primaryFixed=_e.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>ye(e)?40:90,isBackground:!0,background:e=>ke.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new be(ke.primaryFixed,ke.primaryFixedDim,10,"lighter",!0)}),ke.primaryFixedDim=_e.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>ye(e)?30:80,isBackground:!0,background:e=>ke.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new be(ke.primaryFixed,ke.primaryFixedDim,10,"lighter",!0)}),ke.onPrimaryFixed=_e.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>ye(e)?100:10,background:e=>ke.primaryFixedDim,secondBackground:e=>ke.primaryFixed,contrastCurve:new he(4.5,7,11,21)}),ke.onPrimaryFixedVariant=_e.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>ye(e)?90:30,background:e=>ke.primaryFixedDim,secondBackground:e=>ke.primaryFixed,contrastCurve:new he(3,4.5,7,11)}),ke.secondaryFixed=_e.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>ye(e)?80:90,isBackground:!0,background:e=>ke.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new be(ke.secondaryFixed,ke.secondaryFixedDim,10,"lighter",!0)}),ke.secondaryFixedDim=_e.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>ye(e)?70:80,isBackground:!0,background:e=>ke.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new be(ke.secondaryFixed,ke.secondaryFixedDim,10,"lighter",!0)}),ke.onSecondaryFixed=_e.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>ke.secondaryFixedDim,secondBackground:e=>ke.secondaryFixed,contrastCurve:new he(4.5,7,11,21)}),ke.onSecondaryFixedVariant=_e.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>ye(e)?25:30,background:e=>ke.secondaryFixedDim,secondBackground:e=>ke.secondaryFixed,contrastCurve:new he(3,4.5,7,11)}),ke.tertiaryFixed=_e.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>ye(e)?40:90,isBackground:!0,background:e=>ke.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new be(ke.tertiaryFixed,ke.tertiaryFixedDim,10,"lighter",!0)}),ke.tertiaryFixedDim=_e.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>ye(e)?30:80,isBackground:!0,background:e=>ke.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new be(ke.tertiaryFixed,ke.tertiaryFixedDim,10,"lighter",!0)}),ke.onTertiaryFixed=_e.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>ye(e)?100:10,background:e=>ke.tertiaryFixedDim,secondBackground:e=>ke.tertiaryFixed,contrastCurve:new he(4.5,7,11,21)}),ke.onTertiaryFixedVariant=_e.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>ye(e)?90:30,background:e=>ke.tertiaryFixedDim,secondBackground:e=>ke.tertiaryFixed,contrastCurve:new he(3,4.5,7,11)});class fe{static fromInt(e){const t=re.fromInt(e);return fe.fromHct(t)}static fromHct(e){return new fe(e.hue,e.chroma,e)}static fromHueAndChroma(e,t){return new fe(e,t,fe.createKeyColor(e,t))}constructor(e,t,i){this.hue=e,this.chroma=t,this.keyColor=i,this.cache=new Map}static createKeyColor(e,t){let i=re.from(e,t,50),a=Math.abs(i.chroma-t);for(let o=1;o<50;o+=1){if(Math.round(t)===Math.round(i.chroma))return i;const n=re.from(e,t,50+o),l=Math.abs(n.chroma-t);l<a&&(a=l,i=n);const d=re.from(e,t,50-o),s=Math.abs(d.chroma-t);s<a&&(a=s,i=d)}return i}tone(e){let t=this.cache.get(e);return void 0===t&&(t=re.from(this.hue,this.chroma,e).toInt(),this.cache.set(e,t)),t}getHct(e){return re.fromInt(this.tone(e))}}class xe{static of(e){return new xe(e,!1)}static contentOf(e){return new xe(e,!0)}static fromColors(e){return xe.createPaletteFromColors(!1,e)}static contentFromColors(e){return xe.createPaletteFromColors(!0,e)}static createPaletteFromColors(e,t){const i=new xe(t.primary,e);if(t.secondary){const a=new xe(t.secondary,e);i.a2=a.a1}if(t.tertiary){const a=new xe(t.tertiary,e);i.a3=a.a1}if(t.error){const a=new xe(t.error,e);i.error=a.a1}if(t.neutral){const a=new xe(t.neutral,e);i.n1=a.n1}if(t.neutralVariant){const a=new xe(t.neutralVariant,e);i.n2=a.n2}return i}constructor(e,t){const i=re.fromInt(e),a=i.hue,o=i.chroma;t?(this.a1=fe.fromHueAndChroma(a,o),this.a2=fe.fromHueAndChroma(a,o/3),this.a3=fe.fromHueAndChroma(a+60,o/2),this.n1=fe.fromHueAndChroma(a,Math.min(o/12,4)),this.n2=fe.fromHueAndChroma(a,Math.min(o/6,8))):(this.a1=fe.fromHueAndChroma(a,Math.max(48,o)),this.a2=fe.fromHueAndChroma(a,16),this.a3=fe.fromHueAndChroma(a+60,24),this.n1=fe.fromHueAndChroma(a,4),this.n2=fe.fromHueAndChroma(a,8)),this.error=fe.fromHueAndChroma(25,84)}}class Ce{fromInt(e){return function(e){const t=ie(X(e)),i=ie(K(e)),a=ie(J(e)),o=z,n=o[0][0]*t+o[0][1]*i+o[0][2]*a,l=o[1][0]*t+o[1][1]*i+o[1][2]*a,d=o[2][0]*t+o[2][1]*i+o[2][2]*a,s=l/V[1],r=d/V[2],c=oe(n/V[0]),m=oe(s);return[116*m-16,500*(c-m),200*(m-oe(r))]}(e)}toInt(e){return function(e,t,i){const a=V,o=(e+16)/116,n=o-i/200,l=ne(t/500+o),d=ne(o),s=ne(n);return Z(l*a[0],d*a[1],s*a[2])}(e[0],e[1],e[2])}distance(e,t){const i=e[0]-t[0],a=e[1]-t[1],o=e[2]-t[2];return i*i+a*a+o*o}}class $e{static quantize(e,t,i){const a=new Map,o=new Array,n=new Array,l=new Ce;let d=0;for(let t=0;t<e.length;t++){const i=e[t],s=a.get(i);void 0===s?(d++,o.push(l.fromInt(i)),n.push(i),a.set(i,1)):a.set(i,s+1)}const s=new Array;for(let e=0;e<d;e++){const t=n[e],i=a.get(t);void 0!==i&&(s[e]=i)}let r=Math.min(i,d);t.length>0&&(r=Math.min(r,t.length));const c=new Array;for(let e=0;e<t.length;e++)c.push(l.fromInt(t[e]));const m=r-c.length;if(0===t.length&&m>0)for(let e=0;e<m;e++){const e=100*Math.random(),t=201*Math.random()-100,i=201*Math.random()-100;c.push(new Array(e,t,i))}const u=new Array;for(let e=0;e<d;e++)u.push(Math.floor(Math.random()*r));const h=new Array;for(let e=0;e<r;e++){h.push(new Array);for(let t=0;t<r;t++)h[e].push(0)}const p=new Array;for(let e=0;e<r;e++){p.push(new Array);for(let t=0;t<r;t++)p[e].push(new we)}const _=new Array;for(let e=0;e<r;e++)_.push(0);for(let e=0;e<10;e++){for(let e=0;e<r;e++){for(let t=e+1;t<r;t++){const i=l.distance(c[e],c[t]);p[t][e].distance=i,p[t][e].index=e,p[e][t].distance=i,p[e][t].index=t}p[e].sort();for(let t=0;t<r;t++)h[e][t]=p[e][t].index}let t=0;for(let e=0;e<d;e++){const i=o[e],a=u[e],n=c[a],d=l.distance(i,n);let s=d,m=-1;for(let e=0;e<r;e++){if(p[a][e].distance>=4*d)continue;const t=l.distance(i,c[e]);t<s&&(s=t,m=e)}-1!==m&&Math.abs(Math.sqrt(s)-Math.sqrt(d))>3&&(t++,u[e]=m)}if(0===t&&0!==e)break;const i=new Array(r).fill(0),a=new Array(r).fill(0),n=new Array(r).fill(0);for(let e=0;e<r;e++)_[e]=0;for(let e=0;e<d;e++){const t=u[e],l=o[e],d=s[e];_[t]+=d,i[t]+=l[0]*d,a[t]+=l[1]*d,n[t]+=l[2]*d}for(let e=0;e<r;e++){const t=_[e];if(0===t){c[e]=[0,0,0];continue}const o=i[e]/t,l=a[e]/t,d=n[e]/t;c[e]=[o,l,d]}}const b=new Map;for(let e=0;e<r;e++){const t=_[e];if(0===t)continue;const i=l.toInt(c[e]);b.has(i)||b.set(i,t)}return b}}class we{constructor(){this.distance=-1,this.index=-1}}class Se{static quantize(e){const t=new Map;for(let i=0;i<e.length;i++){const a=e[i];(a>>24&255)<255||t.set(a,(t.get(a)??0)+1)}return t}}const Pe=33,Be=35937,Ie="red",Te="green",Me="blue";class Ae{constructor(e=[],t=[],i=[],a=[],o=[],n=[]){this.weights=e,this.momentsR=t,this.momentsG=i,this.momentsB=a,this.moments=o,this.cubes=n}quantize(e,t){this.constructHistogram(e),this.computeMoments();const i=this.createBoxes(t);return this.createResult(i.resultCount)}constructHistogram(e){this.weights=Array.from({length:Be}).fill(0),this.momentsR=Array.from({length:Be}).fill(0),this.momentsG=Array.from({length:Be}).fill(0),this.momentsB=Array.from({length:Be}).fill(0),this.moments=Array.from({length:Be}).fill(0);const t=Se.quantize(e);for(const[e,i]of t.entries()){const t=X(e),a=K(e),o=J(e),n=3,l=1+(t>>n),d=1+(a>>n),s=1+(o>>n),r=this.getIndex(l,d,s);this.weights[r]=(this.weights[r]??0)+i,this.momentsR[r]+=i*t,this.momentsG[r]+=i*a,this.momentsB[r]+=i*o,this.moments[r]+=i*(t*t+a*a+o*o)}}computeMoments(){for(let e=1;e<Pe;e++){const t=Array.from({length:Pe}).fill(0),i=Array.from({length:Pe}).fill(0),a=Array.from({length:Pe}).fill(0),o=Array.from({length:Pe}).fill(0),n=Array.from({length:Pe}).fill(0);for(let l=1;l<Pe;l++){let d=0,s=0,r=0,c=0,m=0;for(let u=1;u<Pe;u++){const h=this.getIndex(e,l,u);d+=this.weights[h],s+=this.momentsR[h],r+=this.momentsG[h],c+=this.momentsB[h],m+=this.moments[h],t[u]+=d,i[u]+=s,a[u]+=r,o[u]+=c,n[u]+=m;const p=this.getIndex(e-1,l,u);this.weights[h]=this.weights[p]+t[u],this.momentsR[h]=this.momentsR[p]+i[u],this.momentsG[h]=this.momentsG[p]+a[u],this.momentsB[h]=this.momentsB[p]+o[u],this.moments[h]=this.moments[p]+n[u]}}}}createBoxes(e){this.cubes=Array.from({length:e}).fill(0).map((()=>new Le));const t=Array.from({length:e}).fill(0);this.cubes[0].r0=0,this.cubes[0].g0=0,this.cubes[0].b0=0,this.cubes[0].r1=32,this.cubes[0].g1=32,this.cubes[0].b1=32;let i=e,a=0;for(let o=1;o<e;o++){this.cut(this.cubes[a],this.cubes[o])?(t[a]=this.cubes[a].vol>1?this.variance(this.cubes[a]):0,t[o]=this.cubes[o].vol>1?this.variance(this.cubes[o]):0):(t[a]=0,o--),a=0;let e=t[0];for(let i=1;i<=o;i++)t[i]>e&&(e=t[i],a=i);if(e<=0){i=o+1;break}}return new Ee(e,i)}createResult(e){const t=[];for(let i=0;i<e;++i){const e=this.cubes[i],a=this.volume(e,this.weights);if(a>0){const i=255<<24|(255&Math.round(this.volume(e,this.momentsR)/a))<<16|(255&Math.round(this.volume(e,this.momentsG)/a))<<8|255&Math.round(this.volume(e,this.momentsB)/a);t.push(i)}}return t}variance(e){const t=this.volume(e,this.momentsR),i=this.volume(e,this.momentsG),a=this.volume(e,this.momentsB);return this.moments[this.getIndex(e.r1,e.g1,e.b1)]-this.moments[this.getIndex(e.r1,e.g1,e.b0)]-this.moments[this.getIndex(e.r1,e.g0,e.b1)]+this.moments[this.getIndex(e.r1,e.g0,e.b0)]-this.moments[this.getIndex(e.r0,e.g1,e.b1)]+this.moments[this.getIndex(e.r0,e.g1,e.b0)]+this.moments[this.getIndex(e.r0,e.g0,e.b1)]-this.moments[this.getIndex(e.r0,e.g0,e.b0)]-(t*t+i*i+a*a)/this.volume(e,this.weights)}cut(e,t){const i=this.volume(e,this.momentsR),a=this.volume(e,this.momentsG),o=this.volume(e,this.momentsB),n=this.volume(e,this.weights),l=this.maximize(e,Ie,e.r0+1,e.r1,i,a,o,n),d=this.maximize(e,Te,e.g0+1,e.g1,i,a,o,n),s=this.maximize(e,Me,e.b0+1,e.b1,i,a,o,n);let r;const c=l.maximum,m=d.maximum,u=s.maximum;if(c>=m&&c>=u){if(l.cutLocation<0)return!1;r=Ie}else r=m>=c&&m>=u?Te:Me;switch(t.r1=e.r1,t.g1=e.g1,t.b1=e.b1,r){case Ie:e.r1=l.cutLocation,t.r0=e.r1,t.g0=e.g0,t.b0=e.b0;break;case Te:e.g1=d.cutLocation,t.r0=e.r0,t.g0=e.g1,t.b0=e.b0;break;case Me:e.b1=s.cutLocation,t.r0=e.r0,t.g0=e.g0,t.b0=e.b1;break;default:throw new Error("unexpected direction "+r)}return e.vol=(e.r1-e.r0)*(e.g1-e.g0)*(e.b1-e.b0),t.vol=(t.r1-t.r0)*(t.g1-t.g0)*(t.b1-t.b0),!0}maximize(e,t,i,a,o,n,l,d){const s=this.bottom(e,t,this.momentsR),r=this.bottom(e,t,this.momentsG),c=this.bottom(e,t,this.momentsB),m=this.bottom(e,t,this.weights);let u=0,h=-1,p=0,_=0,b=0,v=0;for(let y=i;y<a;y++){if(p=s+this.top(e,t,y,this.momentsR),_=r+this.top(e,t,y,this.momentsG),b=c+this.top(e,t,y,this.momentsB),v=m+this.top(e,t,y,this.weights),0===v)continue;let i=1*(p*p+_*_+b*b),a=1*v,g=i/a;p=o-p,_=n-_,b=l-b,v=d-v,0!==v&&(i=1*(p*p+_*_+b*b),a=1*v,g+=i/a,g>u&&(u=g,h=y))}return new Re(h,u)}volume(e,t){return t[this.getIndex(e.r1,e.g1,e.b1)]-t[this.getIndex(e.r1,e.g1,e.b0)]-t[this.getIndex(e.r1,e.g0,e.b1)]+t[this.getIndex(e.r1,e.g0,e.b0)]-t[this.getIndex(e.r0,e.g1,e.b1)]+t[this.getIndex(e.r0,e.g1,e.b0)]+t[this.getIndex(e.r0,e.g0,e.b1)]-t[this.getIndex(e.r0,e.g0,e.b0)]}bottom(e,t,i){switch(t){case Ie:return-i[this.getIndex(e.r0,e.g1,e.b1)]+i[this.getIndex(e.r0,e.g1,e.b0)]+i[this.getIndex(e.r0,e.g0,e.b1)]-i[this.getIndex(e.r0,e.g0,e.b0)];case Te:return-i[this.getIndex(e.r1,e.g0,e.b1)]+i[this.getIndex(e.r1,e.g0,e.b0)]+i[this.getIndex(e.r0,e.g0,e.b1)]-i[this.getIndex(e.r0,e.g0,e.b0)];case Me:return-i[this.getIndex(e.r1,e.g1,e.b0)]+i[this.getIndex(e.r1,e.g0,e.b0)]+i[this.getIndex(e.r0,e.g1,e.b0)]-i[this.getIndex(e.r0,e.g0,e.b0)];default:throw new Error("unexpected direction $direction")}}top(e,t,i,a){switch(t){case Ie:return a[this.getIndex(i,e.g1,e.b1)]-a[this.getIndex(i,e.g1,e.b0)]-a[this.getIndex(i,e.g0,e.b1)]+a[this.getIndex(i,e.g0,e.b0)];case Te:return a[this.getIndex(e.r1,i,e.b1)]-a[this.getIndex(e.r1,i,e.b0)]-a[this.getIndex(e.r0,i,e.b1)]+a[this.getIndex(e.r0,i,e.b0)];case Me:return a[this.getIndex(e.r1,e.g1,i)]-a[this.getIndex(e.r1,e.g0,i)]-a[this.getIndex(e.r0,e.g1,i)]+a[this.getIndex(e.r0,e.g0,i)];default:throw new Error("unexpected direction $direction")}}getIndex(e,t,i){return(e<<10)+(e<<6)+e+(t<<5)+t+i}}class Le{constructor(e=0,t=0,i=0,a=0,o=0,n=0,l=0){this.r0=e,this.r1=t,this.g0=i,this.g1=a,this.b0=o,this.b1=n,this.vol=l}}class Ee{constructor(e,t){this.requestedCount=e,this.resultCount=t}}class Re{constructor(e,t){this.cutLocation=e,this.maximum=t}}class De{static quantize(e,t){const i=(new Ae).quantize(e,t);return $e.quantize(e,i,t)}}class Fe{constructor(e){this.sourceColorArgb=e.sourceColorArgb,this.variant=e.variant,this.contrastLevel=e.contrastLevel,this.isDark=e.isDark,this.sourceColorHct=re.fromInt(e.sourceColorArgb),this.primaryPalette=e.primaryPalette,this.secondaryPalette=e.secondaryPalette,this.tertiaryPalette=e.tertiaryPalette,this.neutralPalette=e.neutralPalette,this.neutralVariantPalette=e.neutralVariantPalette,this.errorPalette=fe.fromHueAndChroma(25,84)}static getRotatedHue(e,t,i){const a=e.hue;if(t.length!==i.length)throw new Error(`mismatch between hue length ${t.length} & rotations ${i.length}`);if(1===i.length)return O(e.hue+i[0]);const o=t.length;for(let e=0;e<=o-2;e++){const o=t[e],n=t[e+1];if(o<a&&a<n)return O(a+i[e])}return a}}class Ne{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(e){return Ne.lightFromCorePalette(xe.of(e))}static dark(e){return Ne.darkFromCorePalette(xe.of(e))}static lightContent(e){return Ne.lightFromCorePalette(xe.contentOf(e))}static darkContent(e){return Ne.darkFromCorePalette(xe.contentOf(e))}static lightFromCorePalette(e){return new Ne({primary:e.a1.tone(40),onPrimary:e.a1.tone(100),primaryContainer:e.a1.tone(90),onPrimaryContainer:e.a1.tone(10),secondary:e.a2.tone(40),onSecondary:e.a2.tone(100),secondaryContainer:e.a2.tone(90),onSecondaryContainer:e.a2.tone(10),tertiary:e.a3.tone(40),onTertiary:e.a3.tone(100),tertiaryContainer:e.a3.tone(90),onTertiaryContainer:e.a3.tone(10),error:e.error.tone(40),onError:e.error.tone(100),errorContainer:e.error.tone(90),onErrorContainer:e.error.tone(10),background:e.n1.tone(99),onBackground:e.n1.tone(10),surface:e.n1.tone(99),onSurface:e.n1.tone(10),surfaceVariant:e.n2.tone(90),onSurfaceVariant:e.n2.tone(30),outline:e.n2.tone(50),outlineVariant:e.n2.tone(80),shadow:e.n1.tone(0),scrim:e.n1.tone(0),inverseSurface:e.n1.tone(20),inverseOnSurface:e.n1.tone(95),inversePrimary:e.a1.tone(80)})}static darkFromCorePalette(e){return new Ne({primary:e.a1.tone(80),onPrimary:e.a1.tone(20),primaryContainer:e.a1.tone(30),onPrimaryContainer:e.a1.tone(90),secondary:e.a2.tone(80),onSecondary:e.a2.tone(20),secondaryContainer:e.a2.tone(30),onSecondaryContainer:e.a2.tone(90),tertiary:e.a3.tone(80),onTertiary:e.a3.tone(20),tertiaryContainer:e.a3.tone(30),onTertiaryContainer:e.a3.tone(90),error:e.error.tone(80),onError:e.error.tone(20),errorContainer:e.error.tone(30),onErrorContainer:e.error.tone(80),background:e.n1.tone(10),onBackground:e.n1.tone(90),surface:e.n1.tone(10),onSurface:e.n1.tone(90),surfaceVariant:e.n2.tone(30),onSurfaceVariant:e.n2.tone(80),outline:e.n2.tone(60),outlineVariant:e.n2.tone(30),shadow:e.n1.tone(0),scrim:e.n1.tone(0),inverseSurface:e.n1.tone(90),inverseOnSurface:e.n1.tone(20),inversePrimary:e.a1.tone(40)})}constructor(e){this.props=e}toJSON(){return{...this.props}}}class He extends Fe{constructor(e,t,i){super({sourceColorArgb:e.toInt(),variant:ue.EXPRESSIVE,contrastLevel:i,isDark:t,primaryPalette:fe.fromHueAndChroma(O(e.hue+240),40),secondaryPalette:fe.fromHueAndChroma(Fe.getRotatedHue(e,He.hues,He.secondaryRotations),24),tertiaryPalette:fe.fromHueAndChroma(Fe.getRotatedHue(e,He.hues,He.tertiaryRotations),32),neutralPalette:fe.fromHueAndChroma(e.hue+15,8),neutralVariantPalette:fe.fromHueAndChroma(e.hue+15,12)})}}He.hues=[0,21,51,121,151,191,271,321,360],He.secondaryRotations=[45,95,45,20,45,90,45,45,45],He.tertiaryRotations=[120,120,20,45,20,15,20,120,120];class qe extends Fe{constructor(e,t,i){super({sourceColorArgb:e.toInt(),variant:ue.VIBRANT,contrastLevel:i,isDark:t,primaryPalette:fe.fromHueAndChroma(e.hue,200),secondaryPalette:fe.fromHueAndChroma(Fe.getRotatedHue(e,qe.hues,qe.secondaryRotations),24),tertiaryPalette:fe.fromHueAndChroma(Fe.getRotatedHue(e,qe.hues,qe.tertiaryRotations),32),neutralPalette:fe.fromHueAndChroma(e.hue,10),neutralVariantPalette:fe.fromHueAndChroma(e.hue,12)})}}qe.hues=[0,41,61,101,131,181,251,301,360],qe.secondaryRotations=[18,15,10,12,15,18,15,12,12],qe.tertiaryRotations=[35,30,20,25,30,35,30,25,25];const Oe={desired:4,fallbackColorARGB:4282549748,filter:!0};function Ye(e,t){return e.score>t.score?-1:e.score<t.score?1:0}class Ue{constructor(){}static score(e,t){const{desired:i,fallbackColorARGB:a,filter:o}={...Oe,...t},n=[],l=new Array(360).fill(0);let d=0;for(const[t,i]of e.entries()){const e=re.fromInt(t);n.push(e),l[Math.floor(e.hue)]+=i,d+=i}const s=new Array(360).fill(0);for(let e=0;e<360;e++){const t=l[e]/d;for(let i=e-14;i<e+16;i++)s[q(i)]+=t}const r=new Array;for(const e of n){const t=s[q(Math.round(e.hue))];if(o&&(e.chroma<Ue.CUTOFF_CHROMA||t<=Ue.CUTOFF_EXCITED_PROPORTION))continue;const i=100*t*Ue.WEIGHT_PROPORTION,a=e.chroma<Ue.TARGET_CHROMA?Ue.WEIGHT_CHROMA_BELOW:Ue.WEIGHT_CHROMA_ABOVE,n=i+(e.chroma-Ue.TARGET_CHROMA)*a;r.push({hct:e,score:n})}r.sort(Ye);const c=[];for(let e=90;e>=15;e--){c.length=0;for(const{hct:t}of r)if(c.find((i=>Y(t.hue,i.hue)<e))||c.push(t),c.length>=i)break;if(c.length>=i)break}const m=[];0===c.length&&m.push(a);for(const e of c)m.push(e.toInt());return m}}function ze(e){const t=X(e),i=K(e),a=J(e),o=[t.toString(16),i.toString(16),a.toString(16)];for(const[e,t]of o.entries())1===t.length&&(o[e]="0"+t);return"#"+o.join("")}function We(e){return parseInt(e,16)}function Ve(e,t=[]){const i=xe.of(e);return{source:e,schemes:{light:Ne.light(e),dark:Ne.dark(e)},palettes:{primary:i.a1,secondary:i.a2,tertiary:i.a3,neutral:i.n1,neutralVariant:i.n2,error:i.error},customColors:t.map((t=>function(e,t){let i=t.value;const a=i,o=e;t.blend&&(i=ce.harmonize(a,o));const n=xe.of(i).a1;return{color:t,value:i,light:{color:n.tone(40),onColor:n.tone(100),colorContainer:n.tone(90),onColorContainer:n.tone(10)},dark:{color:n.tone(80),onColor:n.tone(20),colorContainer:n.tone(30),onColorContainer:n.tone(90)}}}(e,t)))}}function Ge(e,t,i=""){for(const[a,o]of Object.entries(t.toJSON())){const t=a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=ze(o);e.style.setProperty(`--md-sys-color-${t}${i}`,n)}}async function je(e,t){let i;i=function(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e)}(e)?Ve(function(e){const t=3===(e=e.replace("#","")).length,i=6===e.length,a=8===e.length;if(!t&&!i&&!a)throw new Error("unexpected hex "+e);let o=0,n=0,l=0;return t?(o=We(e.slice(0,1).repeat(2)),n=We(e.slice(1,2).repeat(2)),l=We(e.slice(2,3).repeat(2))):i?(o=We(e.slice(0,2)),n=We(e.slice(2,4)),l=We(e.slice(4,6))):a&&(o=We(e.slice(2,4)),n=We(e.slice(4,6)),l=We(e.slice(6,8))),(255<<24|(255&o)<<16|(255&n)<<8|255&l)>>>0}(e),t):await async function(e,t=[]){const i=await async function(e){const t=await new Promise(((t,i)=>{const a=document.createElement("canvas"),o=a.getContext("2d");if(!o)return void i(new Error("Could not get canvas context"));const n=()=>{a.width=e.width,a.height=e.height,o.drawImage(e,0,0);let i=[0,0,e.width,e.height];const n=e.dataset.area;n&&/^\d+(\s*,\s*\d+){3}$/.test(n)&&(i=n.split(/\s*,\s*/).map((e=>parseInt(e,10))));const[l,d,s,r]=i;t(o.getImageData(l,d,s,r).data)};e.complete?n():e.onload=n})),i=[];for(let e=0;e<t.length;e+=4){const a=t[e],o=t[e+1],n=t[e+2];if(t[e+3]<255)continue;const l=G(a,o,n);i.push(l)}const a=De.quantize(i,128);return Ue.score(a)[0]}(e);return Ve(i,t)}(e,t),i.schemes.dark.props.surfaceDim=i.palettes.neutral.tone(6),i.schemes.dark.props.surfaceBright=i.palettes.neutral.tone(24),i.schemes.dark.props.surfaceContainerLowest=i.palettes.neutral.tone(4),i.schemes.dark.props.surfaceContainerLow=i.palettes.neutral.tone(10),i.schemes.dark.props.surfaceContainer=i.palettes.neutral.tone(12),i.schemes.dark.props.surfaceContainerHigh=i.palettes.neutral.tone(17),i.schemes.dark.props.surfaceContainerHighest=i.palettes.neutral.tone(22),i.schemes.light.props.surfaceDim=i.palettes.neutral.tone(87),i.schemes.light.props.surfaceBright=i.palettes.neutral.tone(98),i.schemes.light.props.surfaceContainerLowest=i.palettes.neutral.tone(100),i.schemes.light.props.surfaceContainerLow=i.palettes.neutral.tone(96),i.schemes.light.props.surfaceContainer=i.palettes.neutral.tone(94),i.schemes.light.props.surfaceContainerHigh=i.palettes.neutral.tone(92),i.schemes.light.props.surfaceContainerHighest=i.palettes.neutral.tone(90);const a=window.matchMedia("(prefers-color-scheme: dark)").matches;!function(e,t){const i=t?.target||document.body;if(Ge(i,t?.dark?e.schemes.dark:e.schemes.light),t?.brightnessSuffix&&(Ge(i,e.schemes.dark,"-dark"),Ge(i,e.schemes.light,"-light")),t?.paletteTones){const a=t?.paletteTones??[];for(const[t,o]of Object.entries(e.palettes)){const e=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();for(const t of a){const a=`--md-ref-palette-${e}-${e}${t}`,n=ze(o.tone(t));i.style.setProperty(a,n)}}}}(i,{target:document.body,dark:a})}Ue.TARGET_CHROMA=48,Ue.WEIGHT_PROPORTION=.7,Ue.WEIGHT_CHROMA_ABOVE=.3,Ue.WEIGHT_CHROMA_BELOW=.1,Ue.CUTOFF_CHROMA=5,Ue.CUTOFF_EXCITED_PROPORTION=.01;const Xe=globalThis,Ke=Xe.ShadowRoot&&(void 0===Xe.ShadyCSS||Xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Je=Symbol(),Ze=new WeakMap;class Qe{constructor(e,t,i){if(this._$cssResult$=!0,i!==Je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ke&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=Ze.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ze.set(t,e))}return e}toString(){return this.cssText}}const et=(e,t)=>{if(Ke)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),a=Xe.litNonce;void 0!==a&&t.setAttribute("nonce",a),t.textContent=i.cssText,e.appendChild(t)}},tt=Ke?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new Qe("string"==typeof e?e:e+"",void 0,Je))(t)})(e):e,{is:it,defineProperty:at,getOwnPropertyDescriptor:ot,getOwnPropertyNames:nt,getOwnPropertySymbols:lt,getPrototypeOf:dt}=Object,st=globalThis,rt=st.trustedTypes,ct=rt?rt.emptyScript:"",mt=st.reactiveElementPolyfillSupport,ut=(e,t)=>e,ht={toAttribute(e,t){switch(t){case Boolean:e=e?ct:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},pt=(e,t)=>!it(e,t),_t={attribute:!0,type:String,converter:ht,reflect:!1,hasChanged:pt};Symbol.metadata??=Symbol("metadata"),st.litPropertyMetadata??=new WeakMap;class bt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_t){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&at(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:o}=ot(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return a?.call(this)},set(t){const n=a?.call(this);o.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_t}static _$Ei(){if(this.hasOwnProperty(ut("elementProperties")))return;const e=dt(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ut("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ut("properties"))){const e=this.properties,t=[...nt(e),...lt(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(tt(e))}else void 0!==e&&t.push(tt(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return et(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:ht).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(a):this.setAttribute(a,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=i.getPropertyOptions(a),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:ht;this._$Em=a,this[a]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??pt)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}bt.elementStyles=[],bt.shadowRootOptions={mode:"open"},bt[ut("elementProperties")]=new Map,bt[ut("finalized")]=new Map,mt?.({ReactiveElement:bt}),(st.reactiveElementVersions??=[]).push("2.0.4");const vt=globalThis,yt=vt.trustedTypes,gt=yt?yt.createPolicy("lit-html",{createHTML:e=>e}):void 0,kt="$lit$",ft=`lit$${Math.random().toFixed(9).slice(2)}$`,xt="?"+ft,Ct=`<${xt}>`,$t=document,wt=()=>$t.createComment(""),St=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Pt=Array.isArray,Bt="[ \t\n\f\r]",It=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tt=/-->/g,Mt=/>/g,At=RegExp(`>|${Bt}(?:([^\\s"'>=/]+)(${Bt}*=${Bt}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,Et=/"/g,Rt=/^(?:script|style|textarea|title)$/i,Dt=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),Ft=Dt(1),Nt=(Dt(2),Symbol.for("lit-noChange")),Ht=Symbol.for("lit-nothing"),qt=new WeakMap,Ot=$t.createTreeWalker($t,129);function Yt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==gt?gt.createHTML(t):t}const Ut=(e,t)=>{const i=e.length-1,a=[];let o,n=2===t?"<svg>":"",l=It;for(let t=0;t<i;t++){const i=e[t];let d,s,r=-1,c=0;for(;c<i.length&&(l.lastIndex=c,s=l.exec(i),null!==s);)c=l.lastIndex,l===It?"!--"===s[1]?l=Tt:void 0!==s[1]?l=Mt:void 0!==s[2]?(Rt.test(s[2])&&(o=RegExp("</"+s[2],"g")),l=At):void 0!==s[3]&&(l=At):l===At?">"===s[0]?(l=o??It,r=-1):void 0===s[1]?r=-2:(r=l.lastIndex-s[2].length,d=s[1],l=void 0===s[3]?At:'"'===s[3]?Et:Lt):l===Et||l===Lt?l=At:l===Tt||l===Mt?l=It:(l=At,o=void 0);const m=l===At&&e[t+1].startsWith("/>")?" ":"";n+=l===It?i+Ct:r>=0?(a.push(d),i.slice(0,r)+kt+i.slice(r)+ft+m):i+ft+(-2===r?t:m)}return[Yt(e,n+(e[i]||"<?>")+(2===t?"</svg>":"")),a]};class zt{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let o=0,n=0;const l=e.length-1,d=this.parts,[s,r]=Ut(e,t);if(this.el=zt.createElement(s,i),Ot.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=Ot.nextNode())&&d.length<l;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(kt)){const t=r[n++],i=a.getAttribute(e).split(ft),l=/([.?@])?(.*)/.exec(t);d.push({type:1,index:o,name:l[2],strings:i,ctor:"."===l[1]?Xt:"?"===l[1]?Kt:"@"===l[1]?Jt:jt}),a.removeAttribute(e)}else e.startsWith(ft)&&(d.push({type:6,index:o}),a.removeAttribute(e));if(Rt.test(a.tagName)){const e=a.textContent.split(ft),t=e.length-1;if(t>0){a.textContent=yt?yt.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],wt()),Ot.nextNode(),d.push({type:2,index:++o});a.append(e[t],wt())}}}else if(8===a.nodeType)if(a.data===xt)d.push({type:2,index:o});else{let e=-1;for(;-1!==(e=a.data.indexOf(ft,e+1));)d.push({type:7,index:o}),e+=ft.length-1}o++}}static createElement(e,t){const i=$t.createElement("template");return i.innerHTML=e,i}}function Wt(e,t,i=e,a){if(t===Nt)return t;let o=void 0!==a?i._$Co?.[a]:i._$Cl;const n=St(t)?void 0:t._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(e),o._$AT(e,i,a)),void 0!==a?(i._$Co??=[])[a]=o:i._$Cl=o),void 0!==o&&(t=Wt(e,o._$AS(e,t.values),o,a)),t}class Vt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=(e?.creationScope??$t).importNode(t,!0);Ot.currentNode=a;let o=Ot.nextNode(),n=0,l=0,d=i[0];for(;void 0!==d;){if(n===d.index){let t;2===d.type?t=new Gt(o,o.nextSibling,this,e):1===d.type?t=new d.ctor(o,d.name,d.strings,this,e):6===d.type&&(t=new Zt(o,this,e)),this._$AV.push(t),d=i[++l]}n!==d?.index&&(o=Ot.nextNode(),n++)}return Ot.currentNode=$t,a}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Gt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=Ht,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Wt(this,e,t),St(e)?e===Ht||null==e||""===e?(this._$AH!==Ht&&this._$AR(),this._$AH=Ht):e!==this._$AH&&e!==Nt&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>Pt(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Ht&&St(this._$AH)?this._$AA.nextSibling.data=e:this.T($t.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,a="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=zt.createElement(Yt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new Vt(a,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=qt.get(e.strings);return void 0===t&&qt.set(e.strings,t=new zt(e)),t}k(e){Pt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const o of e)a===t.length?t.push(i=new Gt(this.S(wt()),this.S(wt()),this,this.options)):i=t[a],i._$AI(o),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class jt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,o){this.type=1,this._$AH=Ht,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Ht}_$AI(e,t=this,i,a){const o=this.strings;let n=!1;if(void 0===o)e=Wt(this,e,t,0),n=!St(e)||e!==this._$AH&&e!==Nt,n&&(this._$AH=e);else{const a=e;let l,d;for(e=o[0],l=0;l<o.length-1;l++)d=Wt(this,a[i+l],t,l),d===Nt&&(d=this._$AH[l]),n||=!St(d)||d!==this._$AH[l],d===Ht?e=Ht:e!==Ht&&(e+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!a&&this.j(e)}j(e){e===Ht?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Xt extends jt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ht?void 0:e}}class Kt extends jt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ht)}}class Jt extends jt{constructor(e,t,i,a,o){super(e,t,i,a,o),this.type=5}_$AI(e,t=this){if((e=Wt(this,e,t,0)??Ht)===Nt)return;const i=this._$AH,a=e===Ht&&i!==Ht||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Ht&&(i===Ht||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Zt{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Wt(this,e)}}const Qt=vt.litHtmlPolyfillSupport;Qt?.(zt,Gt),(vt.litHtmlVersions??=[]).push("3.1.4");class ei extends bt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const a=i?.renderBefore??t;let o=a._$litPart$;if(void 0===o){const e=i?.renderBefore??null;a._$litPart$=o=new Gt(t.insertBefore(wt(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Nt}}ei._$litElement$=!0,ei.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ei});const ti=globalThis.litElementPolyfillSupport;ti?.({LitElement:ei}),(globalThis.litElementVersions??=[]).push("4.0.6");class ii extends ei{constructor(){var e;super(),(e=this).addController(new h(e))}createRenderRoot(){return this}on(e,t){t=t.bind(this),this.addEventListener(e,t)}once(e,t){const i=a=>{t(a),this.off(e,i)};this.on(e,i)}off(e,t){this.removeEventListener(e,t)}emit(e,t){const i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});this.dispatchEvent(i)}}let ai,oi,ni,li=0,di=1e4,si=!1,ri=0;function ci(e=1e4){return new Promise((t=>{if(ni||(ni=document.createElement("md-progress-indicator"),ni.setAttribute("max",di),ni.setAttribute("value",0),document.body.insertAdjacentElement("afterbegin",ni),ni.style.position="absolute",ni.style.left="0px",ni.style.top="0px"),si)return di+=e,void t();di=e,si=!0,oi=performance.now()-li,ni.setAttribute("max",di),hi(t)}))}function mi(){if(si){let e=di-(performance.now()-oi);Math.min(100,(di-e)/di*100),ni&&ni.setAttribute("value",di),cancelAnimationFrame(ai),ui()}}function ui(){si=!1,li=0,di=1e4,ri=0,ni.parentNode.removeChild(ni),ni=null}function hi(e){let t=performance.now();ri=t-oi,Math.min(100,ri/di*100),ni&&ni.setAttribute("value",ri),ri<di?ai=requestAnimationFrame((()=>hi(e))):(ui(),e&&e())}new PerformanceObserver((function(e){for(var t=e.getEntries(),i=0;i<t.length;i++){var a=t[i],o=a.name;ci(a.duration||1e3),"markRouterNavigate"===o?si&&(cancelAnimationFrame(ai),li=performance.now()-oi,si=!1):"measureRouterNavigateSuccess"===o?si||(si=!0,oi=performance.now()-li,hi()):"markRouterNavigateSuccess"===o&&mi()}})).observe({entryTypes:["mark","measure","navigation"]}),customElements.define("md-icon",class extends ii{connectedCallback(){super.connectedCallback(),this.classList.add("md-icon")}});class pi{constructor(e,t={}){(this.host=e).addController(this),this.options={buttonSelector:null,centered:!1,clipped:!1,containerSelector:null,fadeOut:!1,size:null,...t}}async hostConnected(){await this.host.updateComplete,this.container=this.options.containerSelector?this.host.querySelector(this.options.containerSelector):this.host,this.button=this.options.buttonSelector?this.host.querySelector(this.options.buttonSelector):this.host,this.container.classList.add("md-ripple"),this.button.classList.add("md-ripple--button"),this.button.setAttribute("tabIndex",0),this.container.classList.toggle("md-ripple--clipped",!!this.options.clipped),this.container.classList.toggle("md-ripple--fade-out",!!this.options.fadeOut),this.options.size?this.size=this.options.size/this.container.clientWidth*100:this.size=Math.sqrt(Math.pow(this.container.clientWidth,2)+Math.pow(this.container.clientHeight,2))/this.container.clientWidth*100,this.container.style.setProperty("--md-comp-ripple-size",`${this.size}%`),this.container.style.setProperty("--md-comp-ripple-animation","none"),this.handleRipplePointerenter=this.handleRipplePointerenter.bind(this),this.handleRipplePointerleave=this.handleRipplePointerleave.bind(this),this.handleRipplePointerdown=this.handleRipplePointerdown.bind(this),this.handleRipplePointerup=this.handleRipplePointerup.bind(this),this.handleRippleFocus=this.handleRippleFocus.bind(this),this.handleRippleBlur=this.handleRippleBlur.bind(this),this.button.addEventListener("pointerenter",this.handleRipplePointerenter),this.button.addEventListener("pointerleave",this.handleRipplePointerleave),this.button.addEventListener("pointerdown",this.handleRipplePointerdown),this.button.addEventListener("focus",this.handleRippleFocus),this.button.addEventListener("blur",this.handleRippleBlur)}async hostDisconnected(){await this.host.updateComplete,this.container.classList.remove("md-ripple"),this.button.classList.remove("md-ripple--button"),this.button.removeAttribute("tabIndex"),this.container.classList.remove("md-ripple--clipped"),this.container.classList.remove("md-ripple--fade-out"),this.container.style.removeProperty("--md-comp-ripple-size"),this.button.removeEventListener("pointerenter",this.handleRipplePointerenter),this.button.removeEventListener("pointerleave",this.handleRipplePointerleave),this.button.removeEventListener("pointerdown",this.handleRipplePointerdown),this.button.removeEventListener("focus",this.handleRippleFocus),this.button.removeEventListener("blur",this.handleRippleBlur)}handleRipplePointerenter(){this.container.style.removeProperty("--md-comp-ripple-animation"),this.container.classList.add("md-ripple--hover")}handleRipplePointerleave(){this.container.classList.remove("md-ripple--hover")}handleRipplePointerdown(e){this.container.classList.add("md-ripple--pressed"),window.addEventListener("pointerup",this.handleRipplePointerup),this.container.style.setProperty("--md-comp-ripple-animation","none");const t=this.container.getBoundingClientRect();if(this.container.style.removeProperty("--md-comp-ripple-animation"),!this.options.centered){const i=this.size,a=(e.clientX-t.left)/t.width,o=(e.clientY-t.top)/t.height,n=100/i*(.5-a),l=(.5-o)*(100/i*(t.height/t.width));this.container.style.setProperty("--md-comp-ripple-size",`${i}%`),this.container.style.setProperty("--md-comp-ripple-left",100*a+"%"),this.container.style.setProperty("--md-comp-ripple-top",100*o+"%"),this.container.style.setProperty("--md-comp-ripple-x",100*n+"%"),this.container.style.setProperty("--md-comp-ripple-y",100*l+"%")}}handleRipplePointerup(){this.container.classList.remove("md-ripple--pressed"),window.removeEventListener("pointerup",this.handleRipplePointerup)}handleRippleFocus(){this.container.classList.add("md-ripple--focused")}handleRippleBlur(){this.container.classList.remove("md-ripple--focused")}}class _i extends ii{static properties={variant:{type:String},type:{type:String},icon:{type:String},label:{type:String},selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};variants=["elevated","filled","tonal","outlined","icon-right"];constructor(){super(),this.type="button",this.ripple=new pi(this,{buttonSelector:".md-button__native",clipped:!0})}render(){return Ft`
            <button class="md-button__native" .type="${this.type}">
                ${this.icon?Ft`<md-icon class="md-button__icon">${this.icon}</md-icon>`:Ht}
                <div class="md-button__label">${this.label}</div>
            </button>
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-button")}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`md-button--${t}`,(this.variant??"").split(" ").includes(t))}e.has("disabled")&&(this.disabled?(this.setAttribute("aria-disabled","true"),this.setAttribute("tabindex","-1")):(this.removeAttribute("aria-disabled"),this.removeAttribute("tabindex")))}}customElements.define("md-button",_i);class bi extends ii{static properties={variant:{type:String},icon:{type:String},selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};variants=["filled","tonal","outlined","toggle"];constructor(){super(),this.ripple=new pi(this,{size:40,centered:!0,fadeOut:!0})}render(){return this.icon?Ft`<md-icon class="md-icon-button__icon">${this.icon}</md-icon>`:Ht}connectedCallback(){super.connectedCallback(),this.classList.add("md-icon-button"),this.on("click",this.handleIconButtonClick)}disconnectedCallback(){super.disconnectedCallback(),this.off("click",this.handleIconButtonClick)}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`md-icon-button--${t}`,(this.variant??"").split(" ").includes(t))}e.has("disabled")&&(this.disabled?(this.setAttribute("aria-disabled","true"),this.setAttribute("tabindex","-1")):(this.removeAttribute("aria-disabled"),this.removeAttribute("tabindex")))}handleIconButtonClick(e){this.variant&&this.variant.includes("toggle")&&(this.selected=!this.selected),this.emit("onIconButtonClick",e)}}customElements.define("md-icon-button",bi);const vi=e=>e??Ht,yi=(e,t,i)=>{for(const i of t)if(i[0]===e)return(0,i[1])();return i?.()};class gi extends ii{static properties={variant:{type:String},leadingActions:{type:Array},label:{type:String},subLabel:{type:String},trailingActions:{type:Array},actions:{type:Array}};variants=["elevated","filled","outlined"];constructor(){super(),this.body=Array.from(this.childNodes),this.renderIconButton=this.renderIconButton.bind(this),this.renderButton=this.renderButton.bind(this),this.renderFab=this.renderFab.bind(this)}renderIconButton(e){return Ft`
            <md-icon-button
                class="md-card__icon-button"
                name="${vi(e.name)}"
                .name="${vi(e.name)}"
                .variant="${vi(e.variant)}"
                .icon="${vi(e.icon)}"
                .selected="${vi(e.selected)}"
                .disabled="${vi(e.disabled)}"
                @click="${this.handleCardIconButtonClick}"
            ></md-icon-button>
        `}renderIcon(e){return Ft`
            <md-icon
                class="md-card__icon"
                name="${vi(e.name)}"
                .name="${vi(e.name)}"
                @click="${this.handleCardIconClick}"
            >${e.icon}</md-icon>
        `}renderButton(e){return Ft`
            <md-button
                class="md-card__button"
                name="${vi(e.name)}"
                .name="${vi(e.name)}"
                .variant="${vi(e.variant)}"
                .type="${vi(e.type)}"
                .icon="${vi(e.icon)}"
                .label="${vi(e.label)}"
                .selected="${vi(e.selected)}"
                .disabled="${vi(e.disabled)}"
                @click="${this.handleCardButtonClick}"
            ></md-button>
        `}renderFab(e){return Ft`
            <md-fab
                class="md-card__fab"
                name="${vi(e.name)}"
                .name="${vi(e.name)}"
                .variant="${vi(e.variant)}"
                .icon="${vi(e.icon)}"
                .label="${vi(e.label)}"
                @click="${this.handleCardFabClick}"
            ></md-fab>
        `}renderAction(e,t=this.renderButton){return yi(e.component,[["icon-button",()=>this.renderIconButton(e)],["icon",()=>this.renderIcon(e)],["button",()=>this.renderButton(e)],["fab",()=>this.renderFab(e)],["spacer",()=>Ft`<div class="md-pane__spacer"></div>`]],(()=>t(e)))}renderHeader(){return this.leadingActions?.length||this.label||this.subLabel||this.trailingActions?.length?Ft`
            <div class="md-card__header">
                ${this.leadingActions?.length?Ft`
                    <div class="md-card__actions">
                        ${this.leadingActions.map((e=>this.renderAction(e,this.renderIconButton)))}
                    </div>
                `:Ht}
                ${this.label||this.subLabel?Ft`
                    <div class="md-card__label">
                        ${this.label?Ft`<div class="md-card__label-primary">${this.label}</div>`:Ht}
                        ${this.subLabel?Ft`<div class="md-card__label-secondary">${this.subLabel}</div>`:Ht}
                    </div>
                `:Ht}
                ${this.trailingActions?.length?Ft`
                    <div class="md-card__actions md-card__actions--end">
                        ${this.trailingActions.map((e=>this.renderAction(e,this.renderIconButton)))}
                    </div>
                `:Ht}
            </div>
        `:Ht}renderBody(){return this.body?.length||this.actions?.length?Ft`
            <div class="md-card__body">
                ${this.body?.length?Ft`<div class="md-card__inner">${this.body}</div>`:Ht}
                ${this.actions?.length?Ft`
                    <div class="md-card__footer">
                        ${this.actions.map((e=>this.renderAction(e,this.renderButton)))}
                    </div>
                `:Ht}
            </div>
        `:Ht}render(){return Ft`
            ${this.renderHeader()}
            ${this.renderBody()}
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.variant&&this.variant.includes("interactive")&&(this.ripple=new pi(this,{clipped:!0}))}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`${this.localName}--${t}`,(this.variant??"").split(" ").includes(t))}}handleCardIconButtonClick(e){this.emit("onCardIconButtonClick",e)}handleCardButtonClick(e){this.emit("onCardButtonClick",e)}handleCardFabClick(e){this.emit("onCardFabClick",e)}}customElements.define("md-card",gi);class ki extends ii{static properties={...ii.properties,open:{type:Boolean,reflect:!0}};connectedCallback(){super.connectedCallback(),this.classList.add("md-scrim")}show(){this.open=!0}close(){this.open=!1}toggle(){this.open?this.close():this.show()}}customElements.define("md-scrim",ki);class fi extends gi{static properties={...gi.properties,open:{type:Boolean,reflect:!0}};variants=["north","east","south","west","modal"];connectedCallback(){super.connectedCallback(),this.style.setProperty("--md-comp-sheet-animation","none"),this.classList.add("md-card"),this.classList.add("md-sheet")}showModal(){this.style.removeProperty("--md-comp-sheet-animation"),this.style.setProperty("--md-comp-sheet-height",this.clientHeight+"px"),this.style.setProperty("--md-comp-sheet-width",this.clientWidth+"px"),this.scrim=document.createElement("md-scrim"),this.parentElement.insertBefore(this.scrim,this.nextElementSibling),this.handleSheetScrimClick=this.handleSheetScrimClick.bind(this),this.scrim.on("click",this.handleSheetScrimClick),this.scrim.show(),this.open=!0}handleSheetScrimClick(e){this.close(),this.emit("onSheetScrimClick",e)}show(){this.style.removeProperty("--md-comp-sheet-animation"),this.style.setProperty("--md-comp-sheet-height",this.clientHeight+"px"),this.style.setProperty("--md-comp-sheet-width",this.clientWidth+"px"),this.open=!0}close(){this.style.removeProperty("--md-comp-sheet-animation"),this.style.setProperty("--md-comp-sheet-height",this.clientHeight+"px"),this.style.setProperty("--md-comp-sheet-width",this.clientWidth+"px"),this.scrim&&(this.scrim.off("click",this.handleSheetScrimClick),this.scrim.remove(),this.scrim=null),this.open=!1}toggle(...e){this.open?this.close():this.show(...e)}}customElements.define("md-sheet",fi),customElements.define("md-dialog",class extends fi{variants=["full"];connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-dialog")}}),customElements.define("md-top-app-bar",class extends fi{variants=["center","small","medium","large"];connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-top-app-bar")}}),customElements.define("md-side-sheet",class extends fi{variants=["modal"];connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-side-sheet")}}),customElements.define("md-bottom-sheet",class extends fi{variants=["modal"];connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-bottom-sheet")}});class xi extends ii{static properties={...ii.properties,buttons:{type:Array},singleSelect:{type:Boolean,attribute:"single-select"},multiSelect:{type:Boolean,attribute:"multi-select"}};renderButton(e){return Ft`
            <md-button
                class="md-segmented-button__item"
                .data="${e}"
                .name="${vi(e.name)}"
                .variant="${e.variant??"outlined"}"
                .type="${vi(e.type)}"
                .icon="${vi(e.selected?"check":e.icon)}"
                .label="${vi(e.label)}"
                .selected="${vi(e.selected)}"
                .disabled="${vi(e.disabled)}"
                @click="${this.handleSegmentedButtonItemClick}"
            ></md-button>
        `}render(){return this.buttons.map((e=>this.renderButton(e)))}connectedCallback(){super.connectedCallback(),this.classList.add("md-segmented-button")}handleSegmentedButtonItemClick(e){if(this.multiSelect||this.singleSelect){const t=e.currentTarget.data;if(this.multiSelect)t.selected=!t.selected;else if(this.singleSelect)for(let e=0;e<this.buttons.length;e++){let i=this.buttons[e];i.selected=i===t}this.requestUpdate()}this.emit("onSegmentedButtonItemClick",e)}}customElements.define("md-segmented-button",xi);class Ci extends fi{static properties={...fi.properties};static queue=(()=>{let e=Promise.resolve();return(t=(()=>{}))=>e=(async(t=(()=>{}))=>{let i;try{await e}finally{i=t()}return i})(t)})();connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-snackbar")}show(){return Ci.queue((()=>new Promise((e=>{this.timeout=window.setTimeout((()=>{this.close()}),4e3),this.once("animationend",(t=>{"snackbarOut"==t.animationName&&(window.clearTimeout(this.timeout),e())})),super.show(),this.emit("onSnackbarShow",this)}))))}close(){super.close(),this.emit("onSnackbarClose",this)}}customElements.define("md-snackbar",Ci);class $i{constructor(e,t={}){this.host=e,this.options={placements:["center","top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end","above","above-start","above-end","after","after-start","after-end","below","below-start","below-end","before","before-start","before-end","north-east","south-east","south-west","north-west"],boundary:document.documentElement,offset:0,...t}}async setPlacement(e,t={}){this.button=e,this.options={...this.options,...t},this.container=this.host,this.boundary=this.options.boundary;const i={above:()=>({left:this.buttonRect.left+(this.buttonRect.width-this.containerRect.width)/2,top:this.buttonRect.top-this.containerRect.height-this.options.offset,originX:"50%",originY:"100%"}),"above-start":()=>({left:this.buttonRect.left,top:this.buttonRect.top-this.containerRect.height-this.options.offset,originX:"0%",originY:"100%"}),"above-end":()=>({left:this.buttonRect.left+this.buttonRect.width-this.containerRect.width,top:this.buttonRect.top-this.containerRect.height-this.options.offset,originX:"100%",originY:"100%"}),after:()=>({left:this.buttonRect.right+this.options.offset,top:this.buttonRect.top+(this.buttonRect.height-this.containerRect.height)/2,originX:"0%",originY:"50%"}),"after-start":()=>({left:this.buttonRect.right+this.options.offset,top:this.buttonRect.top,originX:"0%",originY:"0%"}),"after-end":()=>({left:this.buttonRect.right+this.options.offset,top:this.buttonRect.top+this.buttonRect.height-this.containerRect.height,originX:"0%",originY:"100%"}),below:()=>({left:this.buttonRect.left+(this.buttonRect.width-this.containerRect.width)/2,top:this.buttonRect.bottom+this.options.offset,originX:"50%",originY:"0%"}),"below-start":()=>({left:this.buttonRect.left,top:this.buttonRect.bottom+this.options.offset,originX:"0%",originY:"0%"}),"below-end":()=>({left:this.buttonRect.left+this.buttonRect.width-this.containerRect.width,top:this.buttonRect.bottom+this.options.offset,originX:"100%",originY:"0%"}),before:()=>({left:this.buttonRect.left-this.containerRect.width-this.options.offset,top:this.buttonRect.top+(this.buttonRect.height-this.containerRect.height)/2,originX:"100%",originY:"50%"}),"before-start":()=>({left:this.buttonRect.left-this.containerRect.width-this.options.offset,top:this.buttonRect.top,originX:"100%",originY:"0%"}),"before-end":()=>({left:this.buttonRect.left-this.containerRect.width-this.options.offset,top:this.buttonRect.top+this.buttonRect.height-this.containerRect.height,originX:"100%",originY:"100%"}),top:()=>({left:this.buttonRect.left+(this.buttonRect.width-this.containerRect.width)/2,top:this.buttonRect.top+this.options.offset,originX:"50%",originY:"0%"}),"top-start":()=>({left:this.buttonRect.left,top:this.buttonRect.top+this.options.offset,originX:"0%",originY:"0%"}),"top-end":()=>({left:this.buttonRect.left+this.buttonRect.width-this.containerRect.width,top:this.buttonRect.top+this.options.offset,originX:"100%",originY:"0%"}),right:()=>({left:this.buttonRect.right-this.containerRect.width-this.options.offset,top:this.buttonRect.top+(this.buttonRect.height-this.containerRect.height)/2,originX:"0%",originY:"50%"}),"right-start":()=>({left:this.buttonRect.right-this.containerRect.width-this.options.offset,top:this.buttonRect.top,originX:"0%",originY:"0%"}),"right-end":()=>({left:this.buttonRect.right-this.containerRect.width-this.options.offset,top:this.buttonRect.top+this.buttonRect.height-this.containerRect.height,originX:"0%",originY:"100%"}),bottom:()=>({left:this.buttonRect.left+(this.buttonRect.width-this.containerRect.width)/2,top:this.buttonRect.bottom-this.containerRect.height-this.options.offset,originX:"50%",originY:"100%"}),"bottom-start":()=>({left:this.buttonRect.left,top:this.buttonRect.bottom-this.containerRect.height-this.options.offset,originX:"0%",originY:"100%"}),"bottom-end":()=>({left:this.buttonRect.left+this.buttonRect.width-this.containerRect.width,top:this.buttonRect.bottom-this.containerRect.height-this.options.offset,originX:"100%",originY:"100%"}),left:()=>({left:this.buttonRect.left+this.options.offset,top:this.buttonRect.top+(this.buttonRect.height-this.containerRect.height)/2,originX:"100%",originY:"50%"}),"left-start":()=>({left:this.buttonRect.left+this.options.offset,top:this.buttonRect.top,originX:"100%",originY:"0%"}),"left-end":()=>({left:this.buttonRect.left+this.options.offset,top:this.buttonRect.top+this.buttonRect.height-this.containerRect.height,originX:"100%",originY:"100%"}),"north-east":()=>({left:this.buttonRect.right+this.options.offset,top:this.buttonRect.top-this.containerRect.height-this.options.offset,originX:"0%",originY:"100%"}),"south-east":()=>({left:this.buttonRect.right+this.options.offset,top:this.buttonRect.bottom+this.options.offset,originX:"0%",originY:"0%"}),"south-west":()=>({left:this.buttonRect.left-this.containerRect.width-this.options.offset,top:this.buttonRect.bottom+this.options.offset,originX:"100%",originY:"0%"}),"north-west":()=>({left:this.buttonRect.left-this.containerRect.width-this.options.offset,top:this.buttonRect.top-this.containerRect.height-this.options.offset,originX:"100%",originY:"100%"}),center:()=>({left:this.buttonRect.left+(this.buttonRect.width-this.containerRect.width)/2,top:this.buttonRect.top+(this.buttonRect.height-this.containerRect.height)/2,originX:"50%",originY:"50%"})};this.buttonRect=this.getRect(this.button),this.containerRect=this.container.getBoundingClientRect(),this.boundaryRect=this.boundary.getBoundingClientRect();for(const e of this.options.placements){const{left:t,top:a,originX:o,originY:n}=i[e](),l=t+this.containerRect.width,d=a+this.containerRect.height;if(!(t<this.boundaryRect.left||a<this.boundaryRect.top||l>this.boundaryRect.right||d>this.boundaryRect.bottom)){this.container.style.left=`${t}px`,this.container.style.top=`${a}px`,this.container.style.transformOrigin=`${o} ${n}`;break}}}getRect(e){if(e instanceof Event){const{clientX:t,clientY:i,width:a,height:o}=e;return{left:t,top:i,width:a,height:o,right:t+a,bottom:i+o}}return e.getBoundingClientRect()}}customElements.define("md-tooltip",class extends fi{variants=["plain","rich"];constructor(){super(),this.popper=new $i(this,{})}connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-tooltip")}show(e,t){super.show(),this.popper.setPlacement(e,{placements:["below","above","after","before","north-east","south-east","south-west","north-west","center"],offset:8,...t})}});class wi extends fi{static properties={...fi.properties,index:{type:Number},value:{type:String}};get years(){const e=[],t=this.selection.getFullYear(),i=10*Math.floor(t/10),a=10*Math.floor((t+10)/10);for(let t=0;t<a-i;t++){const a=new Date(i+t,0),o=a.getFullYear();e.push({label:this.yearFormat(a),activated:o==this.activated.getFullYear(),selected:o==this.selected.getFullYear(),year:o})}return e}get months(){const e=[];for(let t=0;t<12;t++){const i=new Date(this.selection.getFullYear(),t),a=i.getFullYear(),o=i.getMonth();e.push({label:this.monthFormat(i),activated:a==this.activated.getFullYear()&&o==this.activated.getMonth(),selected:a==this.selected.getFullYear()&&o==this.selected.getMonth(),year:a,month:o})}return e}get first(){return new Date(this.selection.getFullYear(),this.selection.getMonth()).getDay()}get last(){return 32-new Date(this.selection.getFullYear(),this.selection.getMonth(),32).getDate()}get weekdays(){const e=[];for(let t=0;t<7;t++){const i=new Date(0,0,t);e.push({label:this.weekdayFormat(i)})}return e}get days(){const e=[];for(let t=0;t<6;t++){const i={},a=[];for(let e=0;e<7;e++){const i=new Date(this.selection.getFullYear(),this.selection.getMonth(),7*t+e+1-this.first),o=i.getFullYear(),n=i.getMonth(),l=i.getDate();a.push({label:this.dayFormat(i),activated:o==this.activated.getFullYear()&&n==this.activated.getMonth()&&l==this.activated.getDate(),selected:o==this.selected.getFullYear()&&n==this.selected.getMonth()&&l==this.selected.getDate(),year:o,month:n,day:l})}i.children=a,e.push(i)}return e}get hours(){const e=[];for(let t=0;t<24;t++){const i=new Date(this.selection.getFullYear(),this.selection.getMonth(),this.selection.getDate(),t),a=i.getFullYear(),o=i.getMonth(),n=i.getDate(),l=i.getHours();e.push({label:this.hourFormat(i),activated:l==this.activated.getHours(),selected:l==this.selected.getHours(),year:a,month:o,day:n,hour:l})}return e}get minutes(){const e=[];for(let t=0;t<60;t++){const i=new Date(this.selection.getFullYear(),this.selection.getMonth(),this.selection.getDate(),this.selection.getHours(),t),a=i.getFullYear(),o=i.getMonth(),n=i.getDate(),l=i.getHours(),d=i.getMinutes();e.push({label:this.minuteFormat(i),activated:l==this.activated.getHours()&&d==this.activated.getMinutes(),selected:l==this.selected.getHours()&&d==this.selected.getMinutes(),year:a,month:o,day:n,hour:l,minute:d})}return e}get body(){return[Ft`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderYear()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMonth()}</div>
                <div class="md-datetime-picker__card-item">${this.renderDay()}</div>
                <div class="md-datetime-picker__card-item">${this.renderHour()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMinute()}</div>
            </div>
        `]}set body(e){this._body=e}get leadingActions(){let t;return 0==this.index?t=[this.years[0].label,this.years[this.years.length-1].label].join("-"):1==this.index?t=i(this.selection):2==this.index?t=e(this.selection):(3==this.index||4==this.index)&&(t=n(this.selection)),[{icon:"arrow_drop_down",variant:"icon-right",name:"label",component:"button",label:t}]}get trailingActions(){return[{name:"prev",icon:"keyboard_arrow_left"},{name:"next",icon:"keyboard_arrow_right"}]}get actions(){return[{component:"spacer"},{name:"cancel",label:"Cancel"},{name:"ok",label:"Ok"}]}constructor(){super(),this.yearFormat=new Intl.DateTimeFormat(void 0,{year:"numeric"}).format,this.monthFormat=new Intl.DateTimeFormat(void 0,{month:"long"}).format,this.weekdayFormat=new Intl.DateTimeFormat(void 0,{weekday:"narrow"}).format,this.dayFormat=new Intl.DateTimeFormat(void 0,{day:"numeric"}).format,this.hourFormat=new Intl.DateTimeFormat(void 0,{hour:"numeric",hour12:!1}).format,this.minuteFormat=new Intl.DateTimeFormat(void 0,{minute:"numeric",hour12:!1}).format,this.activated=new Date,this.selection=new Date,this.selected=new Date,this.index=2,this.value=this.getValue(),this.popper=new $i(this,{})}renderYear(){return Ft`
            <div class="md-datetime-picker__list md-datetime-picker__list--years">
                ${this.years.map((e=>Ft`
                    <div class="md-datetime-picker__list-item" ?activated="${e.activated}" ?selected="${e.selected}" .data="${e}" @click="${this.handleDatetimePickerYearItemClick}">
                        <md-icon class="md-datetime-picker__list-icon">${e.selected?"check":Ht}</md-icon>
                        <div class="md-datetime-picker__list-label">${e.label}</div>
                    </div>    
                `))}
            </div>
        `}renderMonth(){return Ft`
            <div class="md-datetime-picker__list md-datetime-picker__list--months">
                ${this.months.map((e=>Ft`
                    <div class="md-datetime-picker__list-item" ?activated="${e.activated}" ?selected="${e.selected}" .data="${e}" @click="${this.handleDatetimePickerMonthItemClick}">
                        <md-icon class="md-datetime-picker__list-icon">${e.selected?"check":Ht}</md-icon>
                        <div class="md-datetime-picker__list-label">${e.label}</div>
                    </div>    
                `))}
            </div>
        `}renderDay(){return Ft`
            <div class="md-datetime-picker__grid">
                <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--weekdays">
                    ${this.weekdays.map((e=>Ft`
                        <div class="md-datetime-picker__grid-item">
                            <div class="md-datetime-picker__grid-label">${e.label}</div>
                        </div>    
                    `))}
                </div>
                ${this.days.map((e=>Ft`
                    <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--days">
                        ${e.children.map((e=>Ft`
                            <div class="md-datetime-picker__grid-item" ?activated="${e.activated}" ?selected="${e.selected}" .data="${e}" @click="${this.handleDatetimePickerDayItemClick}">
                                <div class="md-datetime-picker__grid-label">${e.label}</div>
                            </div>    
                        `))}
                    </div>
                `))}
            </div>
        `}renderHour(){return Ft`
            <div class="md-datetime-picker__absolute md-datetime-picker__absolute--hours">
                ${this.hours.map((e=>Ft`
                    <div class="md-datetime-picker__absolute-item" ?activated="${e.activated}" ?selected="${e.selected}" .data="${e}" @click="${this.handleDatetimePickerHourItemClick}">
                        <div class="md-datetime-picker__absolute-label">${e.label}</div>
                    </div>    
                `))}
            </div>
        `}renderMinute(){return Ft`
            <div class="md-datetime-picker__absolute md-datetime-picker__absolute--minutes">
                ${this.minutes.map((e=>Ft`
                    <div class="md-datetime-picker__absolute-item" ?activated="${e.activated}" ?selected="${e.selected}" .data="${e}" @click="${this.handleDatetimePickerMinuteItemClick}">
                        <div class="md-datetime-picker__absolute-label">${e.label}</div>
                    </div>    
                `))}
            </div>
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-datetime-picker"),this.defaultValue=this.value,this.updateDate()}async updated(e){super.updated(e),e.has("index")&&this.style.setProperty("--md-comp-datetime-picker-card-index",this.index),e.has("value")&&e.get("value")&&this.value&&(await this.updateComplete,this.updateDate(),this.requestUpdate())}handleCardIconButtonClick(e){"prev"==e.currentTarget.name?this.handleCardIconButtonPrevClick(e):"next"==e.currentTarget.name&&this.handleCardIconButtonNextClick(e),this.emit("onDatetimePickerIconButtonClick",e)}handleCardButtonClick(e){"label"==e.currentTarget.name?this.handleCardButtonLabelClick(e):"cancel"==e.currentTarget.name?this.handleCardButtonCancelClick(e):"ok"==e.currentTarget.name&&this.handleCardButtonOkClick(e),this.emit("onDatetimePickerButtonClick",e)}updateDate(){const e=(t=this.value,new Date(t));var t;this.selection.setFullYear(e.getFullYear()),this.selection.setMonth(e.getMonth()),this.selection.setDate(e.getDate()),this.selection.setHours(e.getHours()),this.selection.setMinutes(e.getMinutes()),this.selected.setFullYear(e.getFullYear()),this.selected.setMonth(e.getMonth()),this.selected.setDate(e.getDate()),this.selected.setHours(e.getHours()),this.selected.setMinutes(e.getMinutes())}handleCardIconButtonPrevClick(e){0==this.index?this.selection.setFullYear(this.selection.getFullYear()-10):1==this.index?this.selection.setFullYear(this.selection.getFullYear()-1):2==this.index?this.selection.setMonth(this.selection.getMonth()-1):3==this.index?this.selection.setHours(this.selection.getHours()-1):4==this.index&&this.selection.setMinutes(this.selection.getMinutes()-1),this.requestUpdate(),this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerIconButtonPrevClick",e)}handleCardIconButtonNextClick(e){0==this.index?this.selection.setFullYear(this.selection.getFullYear()+10):1==this.index?this.selection.setFullYear(this.selection.getFullYear()+1):2==this.index?this.selection.setMonth(this.selection.getMonth()+1):3==this.index?this.selection.setHours(this.selection.getHours()+1):4==this.index&&this.selection.setMinutes(this.selection.getMinutes()+1),this.requestUpdate(),this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerIconButtonNextClick",e)}handleCardButtonLabelClick(e){0==this.index?this.index=2:1==this.index?this.index=0:2==this.index?this.index=1:3==this.index?this.index=4:4==this.index&&(this.index=2),this.emit("onDatetimePickerButtonLabelClick",e)}handleCardButtonCancelClick(e){this.value=this.defaultValue,this.updateDate(),this.requestUpdate(),this.index=2,this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerButtonCancelClick",e)}handleCardButtonOkClick(e){this.selected.setFullYear(this.selection.getFullYear()),this.selected.setMonth(this.selection.getMonth()),this.selected.setDate(this.selection.getDate()),this.selected.setHours(this.selection.getHours()),this.selected.setMinutes(this.selection.getMinutes()),this.value=this.getValue(),this.requestUpdate(),this.index=2,this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerButtonOkClick",e)}handleDatetimePickerYearItemClick(e){const t=e.currentTarget.data;this.selection.setFullYear(t.year),this.index=1,this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerYearItemClick",e)}handleDatetimePickerMonthItemClick(e){const t=e.currentTarget.data;this.selection.setMonth(t.month),this.index=2,this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerMonthItemClick",e)}handleDatetimePickerDayItemClick(e){const t=e.currentTarget.data;this.selected.setFullYear(t.year),this.selected.setMonth(t.month),this.selected.setDate(t.day),this.selection.setFullYear(t.year),this.selection.setMonth(t.month),this.selection.setDate(t.day),this.index=3,this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerDayItemClick",e)}handleDatetimePickerHourItemClick(e){const t=e.currentTarget.data;this.selected.setFullYear(t.year),this.selected.setMonth(t.month),this.selected.setDate(t.day),this.selected.setHours(t.hour),this.selection.setFullYear(t.year),this.selection.setMonth(t.month),this.selection.setDate(t.day),this.selection.setHours(t.hour),this.index=4,this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerHourItemClick",e)}handleDatetimePickerMinuteItemClick(e){const t=e.currentTarget.data;this.selected.setFullYear(t.year),this.selected.setMonth(t.month),this.selected.setDate(t.day),this.selected.setHours(t.hour),this.selected.setMinutes(t.minute),this.selection.setFullYear(t.year),this.selection.setMonth(t.month),this.selection.setDate(t.day),this.selection.setHours(t.hour),this.selection.setMinutes(t.minute),this.index=2,this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerMinuteItemClick",e)}getValue(){return e(this.selected)}show(e,t){this.showModal(),this.popper.setPlacement(e,{placements:["top-start","top-end","top","below-start","below-end","below","bottom-start","bottom-end","bottom","above-start","above-end","above","left-start","left-end","left","after-start","after-end","after","right-start","right-end","right","before-start","before-end","before","center"],...t})}}customElements.define("md-datetime-picker",wi),customElements.define("md-date-picker",class extends wi{get leadingActions(){let e;return 0==this.index?e=[this.years[0].label,this.years[this.years.length-1].label].join("-"):1==this.index?e=i(this.selection):2==this.index&&(e=t(this.selection)),[{icon:"arrow_drop_down",variant:"icon-right",name:"label",component:"button",label:e}]}get body(){return[Ft`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderYear()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMonth()}</div>
                <div class="md-datetime-picker__card-item">${this.renderDay()}</div>
            </div>
        `]}set body(e){this._body=e}connectedCallback(){super.connectedCallback(),this.classList.add("md-date-picker")}updateDate(){const e=function(e){var[t,i,a]=e.split("-").map(Number);return new Date(t,i-1,a)}(this.value);this.selection.setFullYear(e.getFullYear()),this.selection.setMonth(e.getMonth()),this.selection.setDate(e.getDate()),this.selected.setFullYear(e.getFullYear()),this.selected.setMonth(e.getMonth()),this.selected.setDate(e.getDate())}handleCardIconButtonPrevClick(e){0==this.index?this.selection.setFullYear(this.selection.getFullYear()-10):1==this.index?this.selection.setFullYear(this.selection.getFullYear()-1):2==this.index&&this.selection.setMonth(this.selection.getMonth()-1),this.requestUpdate(),this.emit("onDatePickerSelection",e),this.emit("onDatePickerIconButtonPrevClick",e)}handleCardIconButtonNextClick(e){0==this.index?this.selection.setFullYear(this.selection.getFullYear()+10):1==this.index?this.selection.setFullYear(this.selection.getFullYear()+1):2==this.index&&this.selection.setMonth(this.selection.getMonth()+1),this.requestUpdate(),this.emit("onDatePickerSelection",e),this.emit("onDatePickerIconButtonNextClick",e)}handleCardButtonLabelClick(e){0==this.index?this.index=2:1==this.index?this.index=0:2==this.index&&(this.index=1),this.emit("onDatePickerButtonLabelClick",e)}handleCardButtonCancelClick(e){this.value=this.defaultValue,this.updateDate(),this.requestUpdate(),this.index=2,this.emit("onDatePickerSelection",e),this.emit("onDatePickerButtonCancelClick",e)}handleCardButtonOkClick(e){this.selected.setFullYear(this.selection.getFullYear()),this.selected.setMonth(this.selection.getMonth()),this.selected.setDate(this.selection.getDate()),this.value=this.getValue(),this.requestUpdate(),this.index=2,this.emit("onDatePickerSelection",e),this.emit("onDatePickerButtonOkClick",e)}handleDatetimePickerYearItemClick(e){const t=e.currentTarget.data;this.selection.setFullYear(t.year),this.index=1,this.emit("onDatePickerSelection",e),this.emit("onDatePickerYearItemClick",e)}handleDatetimePickerMonthItemClick(e){const t=e.currentTarget.data;this.selection.setMonth(t.month),this.index=2,this.emit("onDatePickerSelection",e),this.emit("onDatePickerMonthItemClick",e)}handleDatetimePickerDayItemClick(e){const t=e.currentTarget.data;this.selected.setFullYear(t.year),this.selected.setMonth(t.month),this.selected.setDate(t.day),this.selection.setFullYear(t.year),this.selection.setMonth(t.month),this.selection.setDate(t.day),this.requestUpdate(),this.emit("onDatePickerSelection",e),this.emit("onDatePickerDayItemClick",e)}getValue(){return t(this.selected)}}),customElements.define("md-month-picker",class extends wi{get leadingActions(){let e;return 0==this.index?e=[this.years[0].label,this.years[this.years.length-1].label].join("-"):1==this.index&&(e=a(this.selection)),[{icon:"arrow_drop_down",variant:"icon-right",name:"label",component:"button",label:e}]}get body(){return[Ft`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderYear()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMonth()}</div>
            </div>
        `]}set body(e){this._body=e}constructor(){super(),this.index=1}connectedCallback(){super.connectedCallback(),this.classList.add("md-month-picker")}updateDate(){const e=function(e){var[t,i]=e.split("-").map(Number);return new Date(t,i-1)}(this.value);this.selection.setFullYear(e.getFullYear()),this.selection.setMonth(e.getMonth()),this.selected.setFullYear(e.getFullYear()),this.selected.setMonth(e.getMonth())}handleCardIconButtonPrevClick(e){0==this.index?this.selection.setFullYear(this.selection.getFullYear()-10):1==this.index&&this.selection.setFullYear(this.selection.getFullYear()-1),this.requestUpdate(),this.emit("onMonthPickerSelection",e),this.emit("onMonthPickerIconButtonPrevClick",e)}handleCardIconButtonNextClick(e){0==this.index?this.selection.setFullYear(this.selection.getFullYear()+10):1==this.index&&this.selection.setFullYear(this.selection.getFullYear()+1),this.requestUpdate(),this.emit("onMonthPickerSelection",e),this.emit("onMonthPickerIconButtonNextClick",e)}handleCardButtonLabelClick(e){0==this.index?this.index=1:1==this.index&&(this.index=0),this.emit("onMonthPickerButtonLabelClick",e)}handleCardButtonCancelClick(e){this.value=this.defaultValue,this.updateDate(),this.requestUpdate(),this.index=1,this.emit("onMonthPickerSelection",e),this.emit("onMonthPickerButtonCancelClick",e)}handleCardButtonOkClick(e){this.selected.setFullYear(this.selection.getFullYear()),this.selected.setMonth(this.selection.getMonth()),this.value=this.getValue(),this.requestUpdate(),this.index=1,this.emit("onMonthPickerSelection",e),this.emit("onMonthPickerButtonOkClick",e)}handleDatetimePickerYearItemClick(e){const t=e.currentTarget.data;this.selection.setFullYear(t.year),this.index=1,this.emit("onMonthPickerSelection",e),this.emit("onMonthPickerYearItemClick",e)}handleDatetimePickerMonthItemClick(e){const t=e.currentTarget.data;this.selected.setFullYear(t.year),this.selected.setMonth(t.month),this.selection.setFullYear(t.year),this.selection.setMonth(t.month),this.requestUpdate(),this.emit("onMonthPickerSelection",e),this.emit("onMonthPickerMonthItemClick",e)}getValue(){return a(this.selected)}}),customElements.define("md-time-picker",class extends wi{get body(){return[Ft`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderHour()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMinute()}</div>
            </div>
        `]}set body(e){this._body=e}get leadingActions(){let e;return(0==this.index||1==this.index)&&(e=n(this.selection)),[{icon:"arrow_drop_down",variant:"icon-right",name:"label",component:"button",label:e}]}constructor(){super(),this.index=0}connectedCallback(){super.connectedCallback(),this.classList.add("md-time-picker")}updateDate(){const e=function(e){var[t,i]=e.split(":").map(Number),a=new Date;return a.setHours(t,i,0,0),a}(this.value);this.selection.setHours(e.getHours()),this.selection.setMinutes(e.getMinutes()),this.selected.setHours(e.getHours()),this.selected.setMinutes(e.getMinutes())}handleCardIconButtonPrevClick(e){0==this.index?(this.selection.setHours(this.selection.getHours()-1),this.selected.setHours(this.selection.getHours())):1==this.index&&(this.selection.setMinutes(this.selection.getMinutes()-1),this.selected.setMinutes(this.selection.getMinutes())),this.requestUpdate(),this.emit("onTimePickerSelection",e),this.emit("onTimePickerIconButtonPrevClick",e)}handleCardIconButtonNextClick(e){0==this.index?(this.selection.setHours(this.selection.getHours()+1),this.selected.setHours(this.selection.getHours())):1==this.index&&(this.selection.setMinutes(this.selection.getMinutes()+1),this.selected.setMinutes(this.selection.getMinutes())),this.requestUpdate(),this.emit("onTimePickerSelection",e),this.emit("onTimePickerIconButtonNextClick",e)}handleCardButtonLabelClick(e){0==this.index?this.index=1:1==this.index&&(this.index=0),this.emit("onTimePickerButtonLabelClick",e)}handleCardButtonCancelClick(e){this.value=this.defaultValue,this.updateDate(),this.requestUpdate(),this.index=0,this.emit("onTimePickerSelection",e),this.emit("onTimePickerButtonCancelClick",e)}handleCardButtonOkClick(e){this.selected.setMinutes(this.selection.getMinutes()),this.value=this.getValue(),this.requestUpdate(),this.index=0,this.emit("onTimePickerSelection",e),this.emit("onTimePickerButtonOkClick",e)}handleDatetimePickerHourItemClick(e){const t=e.currentTarget.data;this.selected.setHours(t.hour),this.selection.setHours(t.hour),this.index=1,this.emit("onTimePickerSelection",e),this.emit("onTimePickerHourItemClick",e)}handleDatetimePickerMinuteItemClick(e){const t=e.currentTarget.data;this.selected.setHours(t.hour),this.selected.setMinutes(t.minute),this.selection.setHours(t.hour),this.selection.setMinutes(t.minute),this.index=0,this.emit("onTimePickerSelection",e),this.emit("onTimePickerMinuteItemClick",e)}getValue(){return n(this.selected)}}),customElements.define("md-week-picker",class extends wi{get weekdays(){const e=[];for(let t=0;t<7;t++){const i=new Date(0,0,t+1);e.push({label:this.weekdayFormat(i)})}return e}get days(){const e=[];for(let t=0;t<6;t++){const i=new Date(this.selection.getFullYear(),this.selection.getMonth(),7*t+0+1-this.first+1),a=i.getFullYear(),o=i.getMonth(),n=i.getWeek(),l=[],d={activated:a==this.activated.getFullYear()&&n==this.activated.getWeek(),selected:a==this.selected.getFullYear()&&n==this.selected.getWeek(),year:a,month:o,week:n};for(let e=0;e<7;e++){const i=new Date(this.selection.getFullYear(),this.selection.getMonth(),7*t+e+1-this.first+1);l.push({label:this.dayFormat(i)})}d.children=l,e.push(d)}return e}get body(){return[Ft`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderYear()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMonth()}</div>
                <div class="md-datetime-picker__card-item">${this.renderDay()}</div>
            </div>
        `]}set body(e){this._body=e}get leadingActions(){let e;return 0==this.index?e=[this.years[0].label,this.years[this.years.length-1].label].join("-"):1==this.index?e=i(this.selection):2==this.index&&(e=l(this.selection)),[{icon:"arrow_drop_down",variant:"icon-right",name:"label",component:"button",label:e}]}renderDay(){return Ft`
            <div class="md-datetime-picker__grid">
                <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--weekdays">
                    ${this.weekdays.map((e=>Ft`
                        <div class="md-datetime-picker__grid-item">
                            <div class="md-datetime-picker__grid-label">${e.label}</div>
                        </div>    
                    `))}
                </div>
                ${this.days.map((e=>Ft`
                    <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--days" ?activated="${e.activated}" ?selected="${e.selected}" .data="${e}" @click="${this.handleDatetimePickerDayItemClick}">
                        ${e.children.map((e=>Ft`
                            <div class="md-datetime-picker__grid-item" >
                                <div class="md-datetime-picker__grid-label">${e.label}</div>
                            </div>    
                        `))}
                    </div>
                `))}
            </div>
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-week-picker")}updateDate(){const e=function(e){let t=e.split("-W");if(2!==t.length||2!==t[1].length)throw new Error("Invalid week format. Should be in YYYY-WWW format.");let i=parseInt(t[0],10),a=parseInt(t[1],10);if(isNaN(i)||isNaN(a)||a<1||a>53)throw new Error("Invalid year or week number.");let o=new Date(i,0,4);return new Date(o.setDate(o.getDate()-(o.getDay()+6)%7+7*(a-1)))}(this.value);this.selection.setFullYear(e.getFullYear()),this.selection.setWeek(e.getWeek()),this.selected.setFullYear(e.getFullYear()),this.selected.setWeek(e.getWeek())}handleCardIconButtonPrevClick(e){0==this.index?this.selection.setFullYear(this.selection.getFullYear()-10):1==this.index?this.selection.setFullYear(this.selection.getFullYear()-1):2==this.index&&this.selection.setMonth(this.selection.getMonth()-1),this.requestUpdate(),this.emit("onWeekPickerSelection",e),this.emit("onWeekPickerIconButtonPrevClick",e)}handleCardIconButtonNextClick(e){0==this.index?this.selection.setFullYear(this.selection.getFullYear()+10):1==this.index?this.selection.setFullYear(this.selection.getFullYear()+1):2==this.index&&this.selection.setMonth(this.selection.getMonth()+1),this.requestUpdate(),this.emit("onWeekPickerSelection",e),this.emit("onWeekPickerIconButtonNextClick",e)}handleCardButtonLabelClick(e){0==this.index?this.index=2:1==this.index?this.index=0:2==this.index&&(this.index=1),this.emit("onWeekPickerButtonLabelClick",e)}handleCardButtonCancelClick(e){this.value=this.defaultValue,this.updateDate(),this.requestUpdate(),this.index=2,this.emit("onWeekPickerSelection",e),this.emit("onWeekPickerButtonCancelClick",e)}handleCardButtonOkClick(e){this.selected.setFullYear(this.selection.getFullYear()),this.selected.setWeek(this.selection.getWeek()),this.value=this.getValue(),this.requestUpdate(),this.index=2,this.emit("onWeekPickerSelection",e),this.emit("onWeekPickerButtonOkClick",e)}handleDatetimePickerYearItemClick(e){const t=e.currentTarget.data;this.selection.setFullYear(t.year),this.index=1,this.emit("onWeekPickerSelection",e),this.emit("onWeekPickerYearItemClick",e)}handleDatetimePickerMonthItemClick(e){const t=e.currentTarget.data;this.selection.setMonth(t.month),this.index=2,this.emit("onWeekPickerSelection",e),this.emit("onWeekPickerMonthItemClick",e)}handleDatetimePickerDayItemClick(e){const t=e.currentTarget.data;this.selected.setFullYear(t.year),this.selected.setWeek(t.week),this.selection.setFullYear(t.year),this.selection.setWeek(t.week),this.requestUpdate(),this.emit("onWeekPickerSelection",e),this.emit("onWeekPickerDayItemClick",e)}getValue(){return l(this.selected)}});class Si extends fi{static properties={...fi.properties,index:{type:Number},value:{type:String}};get body(){return[Ft`
            <div class="md-color-picker__card">
                <div class="md-color-picker__card-item">${this.renderArea()}</div>
            </div>
        `]}set body(e){this._body=e}get leadingActions(){return[{icon:"arrow_drop_down",variant:"icon-right",name:"label",component:"button",label:this.selection.hex}]}get actions(){return[{component:"spacer"},{name:"cancel",label:"Cancel"},{name:"ok",label:"Ok"}]}constructor(){super(),this.selection={},this.index=0,this.value="#000000",this.handleColorPickerGradientTrackPointermove=this.handleColorPickerGradientTrackPointermove.bind(this),this.handleColorPickerGradientTrackPointerup=this.handleColorPickerGradientTrackPointerup.bind(this),this.popper=new $i(this,{})}renderArea(){return Ft`
            <div class="md-color-picker__area">
                <div class="md-color-picker__gradient">
                    <canvas 
                        class="md-color-picker__gradient-track"
                        width="360"
                        height="256"
                        @pointerdown="${this.handleColorPickerGradientTrackPointerdown}"
                    ></canvas>
                    <div class="md-color-picker__gradient-thumb"></div>
                </div>
                <label class="md-color-picker__hue">
                    <div class="md-color-picker__hue-label">Hue</div>
                    <input 
                        type="range" 
                        class="md-color-picker__hue-native"
                        min="0"
                        max="360"
                        .value="${this.selection.hue}"
                        @input="${this.handleColorPickerHueNativeInput}"
                    >
                </label>
                <label class="md-color-picker__opacity">
                    <div class="md-color-picker__opacity-label">Opacity</div>
                    <input 
                        type="range" 
                        class="md-color-picker__opacity-native"
                        min="0"
                        max="1"
                        step="0.01"
                        .value="${this.selection.alpha}"
                        @input="${this.handleColorPickerOpacityNativeInput}"
                    >
                </label>
            </div>
        `}async connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-color-picker"),this.defaultValue=this.value,this.updateHsla(),await this.updateComplete,this.init()}async updated(e){super.updated(e),e.has("index")&&this.style.setProperty("--md-comp-color-picker-card-index",this.index),e.has("value")&&e.get("value")&&this.value&&(await this.updateComplete,this.updateHsla(),this.draw(),this.updateThumb(),this.requestUpdate()),this.style.setProperty("--md-comp-color-picker-base",`rgb(${this.selection.red},${this.selection.green},${this.selection.blue})`)}init(){this.canvas=this.querySelector(".md-color-picker__gradient-track"),this.thumb=this.querySelector(".md-color-picker__gradient-thumb"),this.context=this.canvas.getContext("2d",{willReadFrequently:!0}),this.draw(),this.updateThumb()}draw(){const e=this.context;e.fillStyle=`hsl(${this.selection.hue}deg, 100%, 50%)`,e.fillRect(0,0,this.canvas.width,this.canvas.height);const t=e.createLinearGradient(0,0,this.canvas.width,0);t.addColorStop(.01,"#ffffff"),t.addColorStop(1,"transparent"),e.fillStyle=t,e.fillRect(0,0,this.canvas.width,this.canvas.height);const i=e.createLinearGradient(0,0,0,this.canvas.height);i.addColorStop(0,"transparent"),i.addColorStop(1,"#000000"),e.fillStyle=i,e.fillRect(0,0,this.canvas.width,this.canvas.height),this.data=e.getImageData(0,0,this.canvas.width,this.canvas.height).data}findPixel(e,t,i){const a=this.data;let o,n;for(let l=0;l<this.canvas.height;l++)for(let d=0;d<this.canvas.width;d++){const s=4*(l*this.canvas.width+d),r=a[s],c=a[s+1],m=a[s+2];r===e&&c===t&&m===i&&(o=d,n=l)}return{x:o,y:n}}updateHsla(){const{hue:e,saturation:t,lightness:i,red:a,green:o,blue:n,alpha:l}=function(e){const t=function(e){return e=e.replace(/^#/,""),{red:parseInt(e.substring(0,2),16),green:parseInt(e.substring(2,4),16),blue:parseInt(e.substring(4,6),16),alpha:8===e.length?parseInt(e.substring(6,8),16)/255:1}}(e),{red:i,green:a,blue:o,alpha:n}=t,l=i/255,d=a/255,s=o/255,r=Math.max(l,d,s),c=Math.min(l,d,s);let m,u,h=(r+c)/2;if(r===c)m=0,u=0;else{const e=r-c;switch(u=h>.5?e/(2-r-c):e/(r+c),r){case l:m=60*((d-s)/e+(d<s?6:0));break;case d:m=60*((s-l)/e+2);break;case s:m=60*((l-d)/e+4)}}return{hue:Math.round(m),saturation:u,lightness:h,red:i,green:a,blue:o,alpha:n}}(this.value);this.selection.hue=e,this.selection.saturation=t,this.selection.lightness=i,this.selection.red=a,this.selection.green=o,this.selection.blue=n,this.selection.alpha=l,this.selection.hex=this.value}updateThumb(){const{x:e,y:t}=this.findPixel(this.selection.red,this.selection.green,this.selection.blue);this.thumb.style.left=e+"px",this.thumb.style.top=t+"px"}updateRgba(e){const{width:t,height:i,left:a,top:o}=this.canvasRect,n=Math.min(Math.max(0,e.clientX-a),t-.01),l=Math.min(Math.max(0,e.clientY-o),i),[d,r,c]=this.context.getImageData(n,l,t,i).data;this.selection.red=d,this.selection.green=r,this.selection.blue=c;const{hue:m,saturation:u,lightness:h}=function(e,t,i,a=1){const o=e/255,n=t/255,l=i/255,d=Math.max(o,n,l),s=Math.min(o,n,l);let r,c,m=(d+s)/2;if(d===s)r=0,c=0;else{const e=d-s;switch(c=m>.5?e/(2-d-s):e/(d+s),d){case o:r=60*((n-l)/e+(n<l?6:0));break;case n:r=60*((l-o)/e+2);break;case l:r=60*((o-n)/e+4)}}return{hue:Math.round(r),saturation:c,lightness:m,alpha:a}}(this.selection.red,this.selection.green,this.selection.blue);this.selection.saturation=u,this.selection.lightness=h,this.selection.hex=s(this.selection.red,this.selection.green,this.selection.blue,this.selection.alpha),this.thumb.style.left=n+"px",this.thumb.style.top=l+"px",this.requestUpdate()}handleCardIconButtonClick(e){"prev"==e.currentTarget.name?this.handleCardIconButtonPrevClick(e):"next"==e.currentTarget.name&&this.handleCardIconButtonNextClick(e),this.emit("onColorPickerIconButtonClick",e)}handleCardButtonClick(e){"label"==e.currentTarget.name?this.handleCardButtonLabelClick(e):"cancel"==e.currentTarget.name?this.handleCardButtonCancelClick(e):"ok"==e.currentTarget.name&&this.handleCardButtonOkClick(e),this.emit("onColorPickerButtonClick",e)}handleCardIconButtonPrevClick(e){this.emit("onColorPickerSelection",e),this.emit("onColorPickerIconButtonPrevClick",e)}handleCardIconButtonNextClick(e){this.emit("onColorPickerSelection",e),this.emit("onColorPickerIconButtonNextClick",e)}handleCardButtonLabelClick(e){this.emit("onColorPickerButtonLabelClick",e)}handleCardButtonCancelClick(e){this.value=this.defaultValue,this.updateHsla(),this.draw(),this.updateThumb(),this.requestUpdate(),this.emit("onColorPickerSelection",e),this.emit("onColorPickerButtonCancelClick",e)}handleCardButtonOkClick(e){this.value=this.selection.hex,this.emit("onColorPickerSelection",e),this.emit("onColorPickerButtonOkClick",e)}handleColorPickerGradientTrackPointerdown(e){window.addEventListener("pointermove",this.handleColorPickerGradientTrackPointermove),window.addEventListener("pointerup",this.handleColorPickerGradientTrackPointerup),document.documentElement.classList.add("md-gesture--unselectable"),this.canvasRect=this.canvas.getBoundingClientRect(),this.updateRgba(e),this.emit("onColorPickerSelection",e),this.emit("onColorPickerGradientTrackPointerdown",e)}handleColorPickerGradientTrackPointermove(e){this.updateRgba(e),this.emit("onColorPickerSelection",e),this.emit("onColorPickerGradientTrackPointermove",e)}handleColorPickerGradientTrackPointerup(e){this.updateRgba(e),document.documentElement.classList.remove("md-gesture--unselectable"),window.removeEventListener("pointermove",this.handleColorPickerGradientTrackPointermove),window.removeEventListener("pointerup",this.handleColorPickerGradientTrackPointerup),this.emit("onColorPickerSelection",e),this.emit("onColorPickerGradientTrackPointerup",e)}handleColorPickerHueNativeInput(e){const t=parseFloat(e.currentTarget.value);this.selection.hue=t,this.draw();const{red:i,green:a,blue:o}=function(e,t,i,a=1){e=(e%360+360)%360,t=Math.max(0,Math.min(1,t)),i=Math.max(0,Math.min(1,i));let o=(1-Math.abs(2*i-1))*t,n=e/60,l=o*(1-Math.abs(n%2-1)),d=i-o/2,s=0,r=0,c=0;return n>=0&&n<1?(s=o,r=l):n>=1&&n<2?(s=l,r=o):n>=2&&n<3?(r=o,c=l):n>=3&&n<4?(r=l,c=o):n>=4&&n<5?(s=l,c=o):(s=o,c=l),s=Math.round(255*(s+d)),r=Math.round(255*(r+d)),c=Math.round(255*(c+d)),{red:s,green:r,blue:c,alpha:a}}(this.selection.hue,this.selection.saturation,this.selection.lightness);this.selection.red=i,this.selection.green=a,this.selection.blue=o,this.selection.hex=s(this.selection.red,this.selection.green,this.selection.blue,this.selection.alpha),this.requestUpdate(),this.emit("onColorPickerSelection",e),this.emit("onColorPickerHueNativeInput",e)}handleColorPickerOpacityNativeInput(e){const t=parseFloat(e.currentTarget.value);this.selection.alpha=t,this.selection.hex=s(this.selection.red,this.selection.green,this.selection.blue,this.selection.alpha),this.requestUpdate(),this.emit("onColorPickerSelection",e),this.emit("onColorPickerOpacityNativeInput",e)}show(e,t){this.showModal(),this.popper.setPlacement(e,{placements:["top-start","top-end","top","below-start","below-end","below","bottom-start","bottom-end","bottom","above-start","above-end","above","left-start","left-end","left","after-start","after-end","after","right-start","right-end","right","before-start","before-end","before","center"],...t})}}customElements.define("md-color-picker",Si);class Pi extends ii{static properties={variant:{type:String},icon:{type:String},label:{type:String},selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};variants=["small","large","surface","secondary","tertiary","unelevated","extended"];constructor(){super(),this.ripple=new pi(this,{clipped:!0,fadeOut:!0})}render(){return Ft`
            ${this.icon?Ft`<md-icon class="md-fab__icon">${this.icon}</md-icon>`:Ht}
            ${this.label?Ft`<div class="md-fab__label">${this.label}</div>`:Ht}
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-fab")}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`md-fab--${t}`,(this.variant??"").split(" ").includes(t))}e.has("disabled")&&(this.disabled?(this.setAttribute("aria-disabled","true"),this.setAttribute("tabindex","-1")):(this.removeAttribute("aria-disabled"),this.removeAttribute("tabindex")))}}customElements.define("md-fab",Pi),customElements.define("md-bottom-app-bar",class extends fi{connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-bottom-app-bar")}});const Bi=e=>(...t)=>({_$litDirective$:e,values:t});class Ii{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Ti="important",Mi=" !"+Ti,Ai=Bi(class extends Ii{constructor(e){if(super(e),1!==e.type||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const a=e[i];return null==a?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const a=t[e];if(null!=a){this.ft.add(e);const t="string"==typeof a&&a.endsWith(Mi);e.includes("-")||t?i.setProperty(e,t?a.slice(0,-11):a,t?Ti:""):i[e]=a}}return Nt}});class Li extends ii{static properties={src:{type:String},alt:{type:String},srcset:{type:String},sizes:{type:String},crossorigin:{type:String},usemap:{type:String},ismap:{type:Boolean},width:{type:Number},height:{type:Number},referrerpolicy:{type:String},decoding:{type:String},loading:{type:String},title:{type:String},longdesc:{type:String},fetchpriority:{type:String},ratio:{type:String},variant:{type:String}};variants=["rounded"];get nativeStyle(){let e={};return this.ratio&&(e["aspect-ratio"]=this.ratio),this.variant&&this.variant.includes("rounded")&&(this.ratio?e["border-radius"]=`50% / calc(50% * ${this.ratio})`:e["border-radius"]="50%"),e}constructor(){super(),this.loading="lazy",this.alt="alt"}render(){return Ft`
            <img 
                class="md-image__native"
                style="${Ai(this.nativeStyle)}"
                .src="${vi(this.src)}"
                .alt="${vi(this.alt)}"
                .srcset="${vi(this.srcset)}"
                .sizes="${vi(this.sizes)}"
                .crossorigin="${vi(this.crossorigin)}"
                .usemap="${vi(this.usemap)}"
                .ismap="${vi(this.ismap)}"
                .width="${vi(this.width)}"
                .height="${vi(this.height)}"
                .referrerpolicy="${vi(this.referrerpolicy)}"
                .decoding="${vi(this.decoding)}"
                .loading="${vi(this.loading)}"
                .title="${vi(this.title)}"
                .longdesc="${vi(this.longdesc)}"
                .fetchpriority="${vi(this.fetchpriority)}"
                @load="${this.handleImageNativeLoad}"
                @error="${this.handleImageNativeError}"
            >
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-image")}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`md-image--${t}`,(this.variant??"").split(" ").includes(t))}}handleImageNativeLoad(e){this.emit("onImageNativeLoad",e)}handleImageNativeError(e){e.currentTarget.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",this.emit("onImageNativeError",e)}}customElements.define("md-image",Li),customElements.define("md-badge",class extends ii{static properties={label:{type:Number},limit:{type:Number}};constructor(){super(),this.limit=999}render(){return this.label?Ft`<div class="md-badge__label">${this.label>this.limit?this.limit+"+":this.label}</div>`:Ht}connectedCallback(){super.connectedCallback(),this.classList.add("md-badge")}});class Ei extends ii{static properties={acceptCharset:{type:String},action:{type:String},autocomplete:{type:String},enctype:{type:String},method:{type:String},name:{type:String},novalidate:{type:Boolean},target:{type:String},rel:{type:String}};constructor(){super(),this.method="post",this.enctype="application/x-www-form-urlencoded",this.acceptCharset="UTF-8",this.body=Array.from(this.childNodes)}render(){return Ft`
            <form 
                class="md-form__native"
                .acceptCharset="${vi(this.acceptCharset)}"
                .action="${vi(this.action)}"
                .autocomplete="${vi(this.autocomplete)}"
                .enctype="${vi(this.enctype)}"
                .method="${vi(this.method)}"
                .name="${vi(this.name)}"
                .novalidate="${vi(this.novalidate)}"
                .target="${vi(this.target)}"
                .rel="${vi(this.rel)}"
                @reset="${this.handleFormNativeReset}"
                @submit="${this.handleFormNativeSubmit}"
            >${this.body}</form>
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-form")}handleFormNativeReset(e){for(const t of e.currentTarget.elements){const i=new CustomEvent("reset",{bubbles:!0,cancelable:!0,detail:e});t.dispatchEvent(i)}this.emit("onFormNativeReset",e)}handleFormNativeSubmit(e){e.preventDefault();const t=new FormData(e.currentTarget),i={};for(const[e,a]of t.entries())i[e]?Array.isArray(i[e])?i[e].push(a):i[e]=[i[e],a]:i[e]=a;e.formData=t,e.data=i,this.emit("onFormNativeSubmit",e)}}customElements.define("md-form",Ei);class Ri extends ii{static properties={checked:{type:Boolean},defaultChecked:{type:Boolean},disabled:{type:Boolean},indeterminate:{type:Boolean},value:{type:String},name:{type:String},form:{type:Object},type:{type:String}};constructor(){super(),this.type="checkbox",this.ripple=new pi(this,{buttonSelector:".md-checkbox__native",containerSelector:".md-checkbox__track",size:40,centered:!0,fadeOut:!0})}renderNative(){return Ft`
            <input 
                .type="${this.type}" 
                class="md-checkbox__native"
                .checked="${vi(this.checked)}"
                .defaultChecked="${vi(this.defaultChecked)}"
                .disabled="${vi(this.disabled)}"
                .indeterminate="${vi(this.indeterminate)}"
                .value="${vi(this.value)}"
                .defaultValue="${vi(this.defaultValue)}"
                .name="${vi(this.name)}"
                .form="${vi(this.form)}"
                @input="${this.handleCheckboxNativeInput}"
                @reset="${this.handleCheckboxNativeReset}"
            >
        `}renderTrack(){return Ft`
            <div class="md-checkbox__track"><div class="md-checkbox__thumb"></div></div>
        `}renderContainer(){return Ft`
            <div class="md-checkbox__container">
                ${this.renderNative()}
                ${this.renderTrack()}
            </div>
        `}render(){return Ft`
            <label class="md-checkbox__inner">
                <div class="md-checkbox__label">${this.type}</div>
                ${this.renderContainer()}
            </label>
        `}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value||"on",this.defaultChecked=this.checked,this.defaultIndeterminate=this.indeterminate,this.classList.add("md-checkbox")}handleCheckboxNativeInput(e){const t=e.currentTarget;this.value=t.value,this.checked=t.checked,this.indeterminate=t.indeterminate,this.emit("onCheckboxNativeInput",e)}handleCheckboxNativeReset(e){const t=e.currentTarget;t.value=this.defaultValue,t.checked=this.defaultChecked,t.indeterminate=this.defaultIndeterminate,this.value=this.defaultValue,this.checked=this.defaultChecked,this.indeterminate=this.defaultIndeterminate,this.emit("onCheckboxNativeReset",e)}}customElements.define("md-checkbox",Ri);class Di extends ii{static properties={checked:{type:Boolean},defaultChecked:{type:Boolean},disabled:{type:Boolean},indeterminate:{type:Boolean},value:{type:String},name:{type:String},form:{type:Object},type:{type:String}};constructor(){super(),this.type="radio",this.ripple=new pi(this,{buttonSelector:".md-radio-button__native",containerSelector:".md-radio-button__track",size:40,centered:!0,fadeOut:!0})}renderNative(){return Ft`
            <input 
                .type="${this.type}" 
                class="md-radio-button__native"
                .checked="${vi(this.checked)}"
                .defaultChecked="${vi(this.defaultChecked)}"
                .disabled="${vi(this.disabled)}"
                .indeterminate="${vi(this.indeterminate)}"
                .value="${vi(this.value)}"
                .defaultValue="${vi(this.defaultValue)}"
                .name="${vi(this.name)}"
                .form="${vi(this.form)}"
                @input="${this.handleRadioButtonNativeInput}"
                @reset="${this.handleRadioButtonNativeReset}"
            >
        `}renderTrack(){return Ft`
            <div class="md-radio-button__track"><div class="md-radio-button__thumb"></div></div>
        `}renderContainer(){return Ft`
            <div class="md-radio-button__container">
                ${this.renderNative()}
                ${this.renderTrack()}
            </div>
        `}render(){return Ft`
            <label class="md-radio-button__inner">
                <div class="md-radio-button__label">${this.type}</div>
                ${this.renderContainer()}
            </label>
        `}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value||"on",this.defaultChecked=this.checked,this.defaultIndeterminate=this.indeterminate,this.classList.add("md-radio-button")}handleRadioButtonNativeInput(e){const t=e.currentTarget;this.value=t.value,this.checked=t.checked,this.indeterminate=t.indeterminate,this.emit("onRadioButtonNativeInput",e)}handleRadioButtonNativeReset(e){const t=e.currentTarget;t.value=this.defaultValue,t.checked=this.defaultChecked,t.indeterminate=this.defaultIndeterminate,this.value=this.defaultValue,this.checked=this.defaultChecked,this.indeterminate=this.defaultIndeterminate,this.emit("onRadioButtonNativeReset",e)}}customElements.define("md-radio-button",Di);class Fi extends ii{static properties={checked:{type:Boolean},defaultChecked:{type:Boolean},disabled:{type:Boolean},indeterminate:{type:Boolean},value:{type:String},name:{type:String},form:{type:Object},type:{type:String},icons:{type:Array}};constructor(){super(),this.type="checkbox",this.ripple=new pi(this,{buttonSelector:".md-switch__native",containerSelector:".md-switch__thumb",size:40,centered:!0,fadeOut:!0})}renderNative(){return Ft`
            <input 
                .type="${this.type}" 
                class="md-switch__native"
                .checked="${vi(this.checked)}"
                .defaultChecked="${vi(this.defaultChecked)}"
                .disabled="${vi(this.disabled)}"
                .indeterminate="${vi(this.indeterminate)}"
                .value="${vi(this.value)}"
                .defaultValue="${vi(this.defaultValue)}"
                .name="${vi(this.name)}"
                .form="${vi(this.form)}"
                @input="${this.handleSwitchNativeInput}"
                @reset="${this.handleSwitchNativeReset}"
            >
        `}renderTrack(){return Ft`
            <div class="md-switch__track"><md-icon class="md-switch__thumb">${this.icons?.length?this.icons[~~this.checked]:Ht}</md-icon></div>
        `}renderContainer(){return Ft`
            <div class="md-switch__container">
                ${this.renderNative()}
                ${this.renderTrack()}
            </div>
        `}render(){return Ft`
            <label class="md-switch__inner">
                <div class="md-switch__label">${this.type}</div>
                ${this.renderContainer()}
            </label>
        `}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value||"on",this.defaultChecked=this.checked,this.defaultIndeterminate=this.indeterminate,this.classList.add("md-switch")}handleSwitchNativeInput(e){const t=e.currentTarget;this.value=t.value,this.checked=t.checked,this.indeterminate=t.indeterminate,this.emit("onSwitchNativeInput",e)}handleSwitchNativeReset(e){const t=e.currentTarget;t.value=this.defaultValue,t.checked=this.defaultChecked,t.indeterminate=this.defaultIndeterminate,this.value=this.defaultValue,this.checked=this.defaultChecked,this.indeterminate=this.defaultIndeterminate,this.emit("onSwitchNativeReset",e)}}customElements.define("md-switch",Fi);class Ni extends ii{static properties={value:{type:Array,converter:{fromAttribute:(e,t)=>(/^\s*\[.*\]\s*$/.test(e)||(e=`[${e}]`),JSON.parse(e)),toAttribute:(e,t)=>JSON.stringify(e)}},defaultValue:{type:Array},min:{type:Number},max:{type:Number},step:{type:Number},disabled:{type:Boolean},form:{type:String},name:{type:String},list:{type:String},autocomplete:{type:String}};constructor(){super(),this.type="range",this.min=0,this.max=100,this.step=1,this.value=[void 0]}renderTrack(e,t){let i=2;return this.step>1&&(i=this.max/this.step),i+=1,Ft`
            <div class="md-slider__track">
                ${Array.from({length:i},((t,i)=>Ft`
                    <div class="md-slider__indicator" value="${this.step*i}" ?activated="${this.step*i<=e}"></div>
                `))}
            </div>
        `}render(){return Ft`
            <label class="md-slider__inner">
                <div class="md-slider__label">${this.type}</div>
                ${this.value.map(((e,t)=>Ft`
                    <div class="md-slider__container md-slider__container${t+1}">
                        <input 
                            .type="${this.type}" 
                            class="md-slider__native"
                            .value="${vi(this.value?.[t])}"
                            .defaultValue="${vi(this.defaultValue?.[t])}"
                            .min="${vi(this.min)}"
                            .max="${vi(this.max)}"
                            .step="${vi(this.step)}"
                            .disabled="${vi(this.disabled)}"
                            .form="${vi(this.form)}"
                            .list="${vi(this.list)}"
                            .autocomplete="${vi(this.autocomplete)}"
                            @input="${this.handleSliderNativeInput}"
                            @reset="${this.handleSliderNativeReset}"
                        >
                        <div class="md-slider__value">${e}</div>
                        ${this.renderTrack(e,t)}
                    </div>
                `))}
                <input 
                    type="hidden" 
                    class="md-slider__hidden"
                    .name="${vi(this.name)}"
                    .value="${vi(this.value)}"
                >
            </label>
        `}async connectedCallback(){await super.connectedCallback();const e=this.max<this.min?this.min:this.min+(this.max-this.min)/2;for(let t=0;t<this.value.length;t++)this.value[t]=this.value[t]??e;this.defaultValue=this.value.slice(),this.classList.add("md-slider"),await this.updateComplete;for(let e=0;e<this.natives.length;e++)this.natives[e].value=this.value[e],this.updateStyle(e)}updateStyle(e){const t=r(this.min,this.max,this.value[e]),i=(a=this.min,o=this.max,(this.value[e]-a)/(o-a));var a,o;this.style.setProperty("--md-comp-slider-percentage"+(e+1),t+"%"),this.style.setProperty("--md-comp-slider-decimal"+(e+1),i)}async updated(e){super.updated(e),e.has("min")&&this.min<0&&this.classList.add("md-slider--centered"),e.has("step")&&this.step>1&&this.classList.add("md-slider--discrete"),e.has("value")&&this.value?.length>1&&this.classList.add("md-slider--range")}get natives(){return this.querySelectorAll(".md-slider__native")}handleSliderNativeInput(e){this.value?.length>1?(this.natives[0].value=Math.min(this.natives[0].value,this.value[1]),this.natives[1].value=Math.max(this.natives[1].value,this.value[0]),this.value[0]=this.natives[0].value,this.value[1]=this.natives[1].value,this.updateStyle(0),this.updateStyle(1)):(this.value[0]=this.natives[0].value,this.updateStyle(0)),this.requestUpdate(),this.emit("onSliderNativeInput",e)}handleSliderNativeReset(e){for(let e=0;e<this.natives.length;e++)this.natives[e].value=this.defaultValue[e],this.value[e]=this.defaultValue[e],this.updateStyle(e);this.requestUpdate(),this.emit("onSliderNativeReset",e)}}customElements.define("md-slider",Ni),customElements.define("md-progress-indicator",class extends ii{static properties={variant:{type:String},value:{type:Number},max:{type:Number}};variants=["circular","linear"];constructor(){super(),this.max=100}renderCircular(){return Ft`
            <svg class="md-progress-indicator__container" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle class="md-progress-indicator__track" cx="50" cy="50" r="45.833333333333336" />
                <circle class="md-progress-indicator__indicator" cx="50" cy="50" r="45.833333333333336" />
            </svg>

        `}renderLinear(){return Ft`
            <div class="md-progress-indicator__track">
                <div class="md-progress-indicator__indicator"></div>
            </div>
        `}render(){return this.variant&&this.variant.includes("circular")?this.renderCircular():this.renderLinear()}connectedCallback(){super.connectedCallback(),this.classList.add("md-progress-indicator")}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`md-progress-indicator--${t}`,(this.variant??"").split(" ").includes(t))}if(e.has("value")){const e=r(0,this.max,this.value);this.style.setProperty("--md-comp-progress-indicator-percentage",e+"%"),this.style.setProperty("--md-comp-progress-indicator-value",e)}}});class Hi{constructor(e,t){(this.host=e).addController(this),this.options={containerSelector:void 0,dragHandleSelector:void 0,drag:["x","y"],dragAfterLongPress:!1,resize:["n","e","s","w","ne","se","sw","nw"],resizeAfterLongPress:!1,selection:!1,selectionAfterLongPress:!1,updateStyle:!1,...t}}emit(e,t){const i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});this.container.dispatchEvent(i)}async hostConnected(){if(await this.host.updateComplete,this.container=this.options.containerSelector?this.host.querySelector(this.options.containerSelector):this.host,this.container.classList.add("md-gesture"),this.options.drag.length&&(this.dragHandle=this.options.dragHandleSelector?this.container.querySelector(this.options.dragHandleSelector):this.container,this.dragHandle.classList.add("md-draggable")),this.options.resize.length){this.resizable=document.createElement("div"),this.resizable.classList.add("md-resizable");for(const e of this.options.resize){const t=document.createElement("div");t.classList.add("md-resizable__handle"),t.classList.add("md-resizable__handle--"+e),this.resizable.append(t)}this.container.append(this.resizable)}this.handleGesturePointerdown=this.handleGesturePointerdown.bind(this),this.handleGesturePointermove=this.handleGesturePointermove.bind(this),this.handleGesturePointerup=this.handleGesturePointerup.bind(this),this.container.addEventListener("pointerdown",this.handleGesturePointerdown)}async hostDisconnected(){await this.host.updateComplete}handleGesturePointerdown(e){if(0!==e.button)return;const t=(this.options.dragHandleSelector?e.target.closest(this.options.dragHandleSelector):this.container)==this.dragHandle,i=e.target.closest(".md-resizable__handle")?.classList.value.match(/--(\w+)$/)[1];window.addEventListener("pointermove",this.handleGesturePointermove),window.addEventListener("pointerup",this.handleGesturePointerup),document.body.classList.add("md-gesture--unselectable"),this.endX=this.endX||0,this.endY=this.endY||0,this.startX=e.clientX-this.endX,this.startY=e.clientY-this.endY,this.startWidth=this.container.clientWidth,this.startHeight=this.container.clientHeight,this.swipe=!1,this.drag=!1,this.options.dragAfterLongPress||!t||i||(this.drag=!0,this.dragHandle.classList.add("md-draggable--drag"),this.emit("onDragStart",e)),this.resize=!1,!this.options.resizeAfterLongPress&&i&&(this.resize=i,this.emit("onResizeStart",e)),this.selection=!1,!this.options.selectionAfterLongPress&&this.options.selection&&(this.selection=!0,this.emit("onSelectionStart",e)),this.longPress=!1,this.longPressTimeout=window.setTimeout((()=>{this.longPress=!0,this.emit("onLongPress",e),this.options.dragAfterLongPress&&t&&!i&&(this.drag=!0,this.dragHandle.classList.add("md-draggable--drag"),this.emit("onDragStart",e)),this.options.resizeAfterLongPress&&i&&(this.resize=i,this.emit("onResizeStart",e)),!this.drag&&!this.resize&&this.options.selectionAfterLongPress&&this.options.selection&&(this.selection=!0,this.emit("onSelectionStart",e))}),300)}handleGesturePointermove(e){window.clearTimeout(this.longPressTimeout);const t=e.clientX-this.startX,i=e.clientY-this.startY;this.swipe=!this.drag&&!this.resize&&(t-this.endX<-30?"Left":i-this.endY<-30?"Top":t-this.endX>30?"Right":i-this.endY>30?"Bottom":""),this.drag&&(this.options.drag.includes("x")&&(this.currentX=t),this.options.drag.includes("y")&&(this.currentY=i),this.emit("onDrag",e)),this.resize&&(this.resize.includes("e")&&(this.currentWidth=this.startWidth+t-this.endX),this.resize.includes("s")&&(this.currentHeight=this.startHeight+i-this.endY),this.resize.includes("w")&&(this.currentX=t,this.currentWidth=this.startWidth-this.currentX+this.endX),this.resize.includes("n")&&(this.currentY=i,this.currentHeight=this.startHeight-this.currentY+this.endY),this.emit("onResize",e)),this.selection&&this.emit("onSelection",e),this.options.updateStyle&&(this.container.style.left=(this.currentX??0)+"px",this.container.style.top=(this.currentY??0)+"px",this.container.style.width=(this.currentWidth??this.startWidth)+"px",this.container.style.height=(this.currentHeight??this.startHeight)+"px")}handleGesturePointerup(e){window.clearTimeout(this.longPressTimeout),this.options.updateStyle&&(this.endX=this.currentX,this.endY=this.currentY),this.longPress||this.swipe||(this.emit("onTap",e),performance.now()-this.lastTap<300&&(this.lastTap-this.lastDoubleTap!=0&&this.emit("onDoubleTap",e),this.lastDoubleTap=performance.now()),this.lastTap=performance.now()),this.swipe&&!this.selection&&this.emit("onSwipe"+this.swipe,e),this.selection&&this.emit("onSelectionEnd",e),this.drag&&(this.dragHandle.classList.remove("md-draggable--drag"),this.emit("onDragEnd",e)),this.resize&&this.emit("onResizeEnd",e),document.body.classList.remove("md-gesture--unselectable"),window.removeEventListener("pointermove",this.handleGesturePointermove),window.removeEventListener("pointerup",this.handleGesturePointerup)}}class qi extends ii{static properties={avatar:{type:String},thumbnail:{type:String},video:{type:String},icon:{type:String},label:{type:String},subLabel:{type:String},badge:{type:Number},text:{type:String},leadingCheckbox:{type:Boolean},leadingRadioButton:{type:Boolean},leadingSwitch:{type:Boolean},trailingCheckbox:{type:Boolean},trailingRadioButton:{type:Boolean},trailingSwitch:{type:Boolean},selected:{type:Boolean,reflect:!0},routerLink:{type:String,reflect:!0}};constructor(){super(),this.ripple=new pi(this,{clipped:!0}),this.gesture=new Hi(this,{drag:[],dragAfterLongPress:!0,resize:[],resizeAfterLongPress:!0,selection:!0,selectionAfterLongPress:!0})}renderCheckbox(){return Ft`<md-checkbox 
            class="md-list__checkbox"
            .checked="${this.selected}"
        ></md-checkbox>`}renderRadioButton(){return Ft`<md-radio-button 
            class="md-list__radio-button"
            .checked="${this.selected}"
        ></md-radio-button>`}renderSwitch(){return Ft`<md-switch 
            class="md-list__switch"
            .checked="${this.selected}"
        ></md-switch>`}render(){return Ft`
            ${this.leadingCheckbox?this.renderCheckbox():Ht}
            ${this.leadingRadioButton?this.renderRadioButton():Ht}
            ${this.leadingSwitch?this.renderSwitch():Ht}

            ${this.avatar?Ft`<md-image class="md-list__avatar" .src="${this.avatar}" .alt="${"avatar"}" .variant="${"rounded"}"></md-image>`:Ht}
            ${this.thumbnail?Ft`<md-image class="md-list__thumbnail" .src="${this.thumbnail}" .alt="${"thumbnail"}"></md-image>`:Ht}
            ${this.video?Ft`<md-image class="md-list__video" .src="${this.video}" .alt="${"video"}" .ratio="${"3/2"}"></md-image>`:Ht}

            ${this.icon?Ft`<md-icon class="md-list__icon">${this.icon}</md-icon>`:Ht}

            ${this.label||this.subLabel||this.badge?Ft`
                    <div class="md-list__inner">
                        ${this.label||this.subLabel?Ft`
                                <div class="md-list__label">
                                    ${this.label?Ft`<div class="md-list__label-primary">${this.label}</div>`:Ht}
                                    ${this.subLabel?Ft`<div class="md-list__label-secondary">${this.subLabel}</div>`:Ht}
                                </div>
                        `:Ht}
                        ${this.badge?Ft`<md-badge class="md-list__badge" .label="${this.badge}"></md-badge>`:Ht}
                    </div>
            `:Ht}

            ${this.text?Ft`<div class="md-list__text">${this.text}</div>`:Ht}

            ${this.trailingCheckbox?this.renderCheckbox():Ht}
            ${this.trailingRadioButton?this.renderRadioButton():Ht}
            ${this.trailingSwitch?this.renderSwitch():Ht}
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-list__item")}async updated(e){if(super.updated(e),e.has("subLabel")){await this.requestUpdate;const e=this.querySelector(".md-list__label-secondary"),t=window.getComputedStyle(e),i=parseFloat(t.getPropertyValue("line-height"));e.scrollHeight>i?this.classList.add("md-list__item--three"):this.classList.add("md-list__item--two")}}}customElements.define("md-list-item",qi);class Oi extends ii{static properties={list:{type:Array},selection:{type:Boolean},rangeSelection:{type:Boolean},multiSelection:{type:Boolean},singleSelection:{type:Boolean},allSelection:{type:Boolean}};constructor(){super()}renderListItem(e){return Ft`
            <md-list-item
                .data="${e}"
                .avatar="${vi(e.avatar)}"
                .thumbnail="${vi(e.thumbnail)}"
                .video="${vi(e.video)}"
                .icon="${vi(e.icon)}"
                .label="${vi(e.label)}"
                .subLabel="${vi(e.subLabel)}"
                .badge="${vi(e.badge)}"
                .text="${vi(e.text)}"
                .leadingCheckbox="${vi(e.leadingCheckbox)}"
                .leadingRadioButton="${vi(e.leadingRadioButton)}"
                .leadingSwitch="${vi(e.leadingSwitch)}"
                .trailingCheckbox="${vi(e.trailingCheckbox)}"
                .trailingRadioButton="${vi(e.trailingRadioButton)}"
                .trailingSwitch="${vi(e.trailingSwitch)}"
                .selected="${vi(e.selected)}"
                .routerLink="${vi(e.routerLink)}"
                @click="${this.handleListItemClick}"
                @onCheckboxNativeInput="${this.handleListItemCheckboxNativeInput}"
                @onRadioButtonNativeInput="${this.handleListItemRadioButtonNativeInput}"
                @onSwitchNativeInput="${this.handleListItemSwitchNativeInput}"
                @onSelectionStart="${this.handleListItemSelectionStart}"
                @onSelection="${this.handleListItemSelection}"
                @onSelectionEnd="${this.handleListItemSelectionEnd}"
            ></md-list-item>
        `}render(){return this.list?.map((e=>this.renderListItem(e)))}connectedCallback(){super.connectedCallback(),this.classList.add("md-list"),this.on("keydown",this.handleListKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.off("keydown",this.handleListKeydown)}select(e){for(let t=0;t<this.list.length;t++){let i=this.list[t];i.selected=i===e}this.endIndex=this.list.indexOf(e)}multiSelect(e){e.selected=!e.selected,this.selectionMode&&-1==this.list.findIndex((e=>e.selected))&&(this.selectionMode=!1)}selectRange(e){this.endIndex=this.endIndex||0,this.startIndex=this.list.indexOf(e),this.swapIndex=this.startIndex>this.endIndex,this.swapIndex&&([this.endIndex,this.startIndex]=[this.startIndex,this.endIndex]);for(let e=0;e<this.list.length;e++)this.list[e].selected=e>=this.startIndex&&e<=this.endIndex;this.swapIndex&&([this.startIndex,this.endIndex]=[this.endIndex,this.startIndex])}selectAll(){for(let e=0;e<this.list.length;e++)this.list[e].selected=!0}handleListItemClick(e){if(e.target.closest(".md-list__checkbox,.md-list__radio-button,.md-list__switch"))return;const t=e.currentTarget.data;this.rangeSelection&&e.shiftKey?this.selectRange(t):this.multiSelection&&e.ctrlKey||this.selectionMode?this.multiSelect(t):this.singleSelection&&this.select(t),this.requestUpdate(),this.emit("onListItemClick",e)}handleListKeydown(e){this.allSelection&&e.ctrlKey&&"a"==e.key&&(this.selectAll(),this.requestUpdate()),this.emit("handleListKeydown",e)}handleListItemSelectionStart(e){if(!this.selection)return;const t=e.currentTarget.data;this.select(t),this.requestUpdate(),this.emit("onListItemSelectionStart",e)}handleListItemSelection(e){if(!this.selection)return;const t=e.detail.target.closest(".md-list__item")?.data;t&&this.data!==t&&(this.data=t,this.selectRange(t),this.requestUpdate()),this.emit("onListItemSelection",e)}async handleListItemSelectionEnd(e){this.selection&&(e.currentTarget.data,window.requestAnimationFrame((()=>{this.selectionMode=!0})),this.emit("onListItemSelectionEnd",e))}handleListItemCheckboxNativeInput(e){const t=e.currentTarget.data;this.multiSelect(t),this.requestUpdate(),this.emit("onListItemCheckboxNativeInput",e)}handleListItemRadioButtonNativeInput(e){const t=e.currentTarget.data;this.select(t),this.requestUpdate(),this.emit("onListItemRadioButtonNativeInput",e)}handleListItemSwitchNativeInput(e){const t=e.currentTarget.data;this.multiSelect(t),this.requestUpdate(),this.emit("onListItemSwitchNativeInput",e)}}customElements.define("md-list",Oi);class Yi extends ii{static properties={icon:{type:String},label:{type:String},badge:{type:Number},selected:{type:Boolean,reflect:!0},routerLink:{type:String,reflect:!0},indent:{type:Number},isNode:{type:Boolean},expanded:{type:Boolean,reflect:!0},activated:{type:Boolean,reflect:!0},variant:{type:String},isParent:{type:Boolean},nodeActions:{type:Array},nodeIcons:{type:Array},leafIcons:{type:Array}};get nodeActions_(){let e=[];return"plain"==this.variant||("accordion"==this.variant?e=["keyboard_arrow_down","keyboard_arrow_up"]:"tree"==this.variant?e=["keyboard_arrow_right","keyboard_arrow_down"]:"level"==this.variant&&(e=["arrow_forward","arrow_back"])),this.nodeActions&&(e=this.nodeActions),e}get nodeIcons_(){let e=[];return"tree"==this.variant&&(e=["folder","folder_open"]),this.nodeIcons?e=this.nodeIcons:this.icon&&(e=[this.icon,this.icon]),e}get leafIcons_(){let e=[];return"tree"==this.variant&&(e=["draft","draft"]),this.leafIcons?e=this.leafIcons:this.icon&&(e=[this.icon,this.icon]),e}get nodeAction(){return this.nodeActions_[~~this.expanded]}get nodeicon(){return this.nodeIcons_[~~this.expanded]}get leafIcon(){return this.leafIcons_[~~this.selected]}get icon_(){return this.isNode?this.nodeicon:this.leafIcon}constructor(){super(),this.ripple=new pi(this,{clipped:!0})}renderPlain(){return Ft`
            ${this.icon_?Ft`<md-icon class="md-tree__icon">${this.icon_}</md-icon>`:Ht}
            ${this.label||d(this.badge)?Ft`
                <div class="md-tree__inner">
                    ${this.label?Ft`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>`:Ht}
                    ${d(this.badge)?Ft`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>`:Ht}
                </div>
            `:Ht}
            ${this.isNode?Ft`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>`:Ht}
        `}renderAccordion(){return Ft`
            ${this.icon_?Ft`<md-icon class="md-tree__icon">${this.icon_}</md-icon>`:this.indent>0?Ft`<div class="md-tree__indent"></div>`:Ht}
            ${this.label||d(this.badge)?Ft`
                <div class="md-tree__inner">
                    ${this.label?Ft`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>`:Ht}
                    ${d(this.badge)?Ft`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>`:Ht}
                </div>
            `:Ht}
            ${this.isNode?Ft`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>`:Ht}
        `}renderTree(){return Ft`
            ${Array.from({length:this.indent},(()=>Ft`<div class="md-tree__indent"></div>`))}
            ${this.isNode?Ft`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>`:this.indent>0?Ft`<div class="md-tree__indent"></div>`:Ht}
            ${this.icon_?Ft`<md-icon class="md-tree__icon">${this.icon_}</md-icon>`:Ht}
            ${this.label||d(this.badge)?Ft`
                <div class="md-tree__inner">
                    ${this.label?Ft`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>`:Ht}
                    ${d(this.badge)?Ft`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>`:Ht}
                </div>
            `:Ht}
        `}renderLevel(){return Ft`
            ${this.isParent?Ft`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeActions_[1]}"></md-icon-button>`:this.icon_?Ft`<md-icon class="md-tree__icon">${this.icon_}</md-icon>`:this.indent>0?Ft`<div class="md-tree__indent"></div>`:Ht}
            ${this.label||d(this.badge)?Ft`
                <div class="md-tree__inner">
                    ${this.label?Ft`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>`:Ht}
                    ${d(this.badge)?Ft`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>`:Ht}
                </div>
            `:Ht}
            ${this.isNode?Ft`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeActions_[0]}"></md-icon-button>`:Ht}
            
        `}render(){return yi(this.variant,[["accordion",()=>this.renderAccordion()],["tree",()=>this.renderTree()],["level",()=>this.renderLevel()]],(()=>this.renderPlain()))}connectedCallback(){super.connectedCallback(),this.classList.add("md-tree__item")}async updated(e){super.updated(e),e.has("selected")&&this.selected&&this.emit("onTreeItemSelected",this)}}customElements.define("md-tree-item",Yi);class Ui extends ii{static properties={list:{type:Array},variant:{type:String}};variants=["plain","accordion","tree","level"];constructor(){super(),this.variant="tree"}renderTreeItem(e){return Ft`
            <md-tree-item
                .data="${e}"
                .icon="${vi(e.icon)}"
                .label="${vi(e.label)}"
                .badge="${vi(e.badge)}"
                .selected="${vi(e.selected)}"
                .routerLink="${vi(e.routerLink)}"
                .indent="${vi(e.indent)}"
                .isNode="${vi(e.isNode)}"
                .expanded="${vi(e.expanded)}"
                .activated="${vi(e.activated)}"
                .variant="${vi(this.variant)}"
                .isParent="${vi(e.isParent)}"
                .nodeActions="${vi(e.nodeActions)}"
                .nodeIcons="${vi(e.nodeIcons)}"
                .leafIcons="${vi(e.leafIcons)}"
                @click="${this.handleTreeItemClick}"
                @onTreeItemSelected="${this.handleTreeItemSelected}"
            ></md-tree-item>
            ${e.expanded&&e.children?.length?e.children.map((e=>this.renderTreeItem(e))):Ht}
        `}render(){return("level"==this.variant&&this.getList(this.list)||this.list)?.map((e=>this.renderTreeItem(e)))}connectedCallback(){super.connectedCallback(),this.classList.add("md-tree")}async updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`${this.localName}--${t}`,(this.variant??"").split(" ").includes(t))}e.has("list")&&(await this.updateComplete,this.setList(this.list),this.requestUpdate())}getList(e){let t;for(let i=0;i<e.length;i++){let a=e[i];if(a.expanded&&(t=a.children),a.children?.length){const e=this.getList(a.children);e&&(t=e)}}return t}setList(e,t=0){let i,a;for(let o=0;o<e.length;o++){let n=e[o];if(n.indent=t,(n.expanded||n.selected)&&(i=!0),n.selected&&(a=!0),n.children?.length){"level"==this.variant&&n.children.unshift({label:n.label,parent:n,isParent:!0}),n.isNode=!0;const{expanded:e,activated:o}=this.setList(n.children,t+1);e&&(i=!0,n.expanded=!0),o&&(a=!0,n.activated=!0)}}return{expanded:i,activated:a}}select(e,t){let i;for(let a=0;a<e.length;a++){let o=e[a];o.selected=o==t,o.activated=!1,o.selected&&(i=!0),o.children?.length&&this.select(o.children,t)&&(i=!0,o.activated=!0)}return i}expand(e,t){t.expanded=!t.expanded}handleTreeItemClick(e){const t=e.currentTarget.data;t.isNode||t.isParent?(e.preventDefault(),this.expand(this.list,t.isParent?t.parent:t)):this.select(this.list,t),this.requestUpdate(),this.emit("onTreeItemClick",e)}handleTreeItemSelected(){}}customElements.define("md-tree",Ui);class zi extends fi{static properties={...fi.properties,...Ui.properties};get body(){return[Ft`
            <md-tree
                class="md-navigation-bar__tree"
                .variant="${"plain"}"
                .list="${this.list}"
            ></md-tree>
        `]}set body(e){this._body=e}connectedCallback(){super.connectedCallback(),this.classList.add("md-sheet"),this.classList.add("md-navigation-bar")}}customElements.define("md-navigation-bar",zi);class Wi extends fi{static properties={...fi.properties,...Ui.properties};get body(){return[Ft`
            <md-tree
                class="md-navigation-drawer__tree"
                .variant="${"plain"}"
                .list="${this.list}"
            ></md-tree>
        `]}set body(e){this._body=e}connectedCallback(){super.connectedCallback(),this.classList.add("md-sheet"),this.classList.add("md-navigation-drawer")}}customElements.define("md-navigation-drawer",Wi);class Vi extends fi{static properties={...fi.properties,...Ui.properties};get body(){return[Ft`
            <md-tree
                class="md-navigation-rail__tree"
                .variant="${"plain"}"
                .list="${this.list}"
            ></md-tree>
        `]}set body(e){this._body=e}connectedCallback(){super.connectedCallback(),this.classList.add("md-sheet"),this.classList.add("md-navigation-rail")}}customElements.define("md-navigation-rail",Vi);class Gi extends fi{static properties={...fi.properties,...Ui.properties};get body(){return[Ft`
            <md-tree
                class="md-menu__tree"
                .variant="${"plain"}"
                .list="${this.list}"
                @onTreeItemClick="${this.handleMenuTreeItemClick}"
            ></md-tree>
        `]}set body(e){this._body=e}constructor(){super(),this.popper=new $i(this,{})}connectedCallback(){super.connectedCallback(),this.classList.add("md-sheet"),this.classList.add("md-menu")}show(e,t){this.showModal(),this.popper.setPlacement(e,{placements:["top-start","top-end","top","below-start","below-end","below","bottom-start","bottom-end","bottom","above-start","above-end","above","left-start","left-end","left","after-start","after-end","after","right-start","right-end","right","before-start","before-end","before","center"],...t})}handleMenuTreeItemClick(e){this.close(),this.emit("onMenuTreeItemClick",e)}}customElements.define("md-menu",Gi),customElements.define("md-tabs",class extends Ui{constructor(){super(),this.variant="primary"}variants=["primary","secondary"];connectedCallback(){super.connectedCallback(),this.classList.add("md-tabs")}handleTreeItemSelected(e){window.requestAnimationFrame((()=>{const t=e.detail;let i=t.clientWidth,a=t.offsetLeft;if("primary"==this.variant){const e=t.querySelector(".md-tree__inner");i=e.clientWidth,a+=e.offsetLeft}let o=this.scrollWidth-(a+i);this.currentSelectedIndex=this.list.indexOf(t.data);const n=this.lastSelectedIndex>this.currentSelectedIndex?"left":"right";this.style.removeProperty("--md-comp-tabs-indicator-transition-left"),this.style.removeProperty("--md-comp-tabs-indicator-transition-right"),this.style.setProperty(`--md-comp-tabs-indicator-transition-${n}`,"0ms"),this.lastSelectedIndex=this.currentSelectedIndex,this.style.setProperty("--md-comp-tabs-indicator-left",a+"px"),this.style.setProperty("--md-comp-tabs-indicator-right",o+"px")}))}});class ji extends ii{static properties={variant:{type:String},avatar:{type:String},icon:{type:String},label:{type:String},action:{type:String},selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};variants=["assist","filter","input","suggestion"];constructor(){super(),this.ripple=new pi(this,{clipped:!0})}render(){return Ft`
            ${this.selected?Ft`<md-icon class="md-chip__icon">check</md-icon>`:Ht}
            ${!this.selected&&this.avatar?Ft`<md-image class="md-chip__avatar" .src="${this.avatar}" .alt="${"Avatar"}" .variant="${"rounded"}"></md-image>`:Ht}
            ${!this.selected&&this.icon?Ft`<md-icon class="md-chip__icon">${this.icon}</md-icon>`:Ht}
            <div class="md-chip__label">${this.label}</div>
            ${this.action?Ft`<md-icon-button class="md-chip__action" .icon="${this.action}" @click="${this.handleChipActionClick}"></md-icon-button>`:Ht}
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-chip")}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`md-chip--${t}`,(this.variant??"").split(" ").includes(t))}e.has("disabled")&&(this.disabled?(this.setAttribute("aria-disabled","true"),this.setAttribute("tabindex","-1")):(this.removeAttribute("aria-disabled"),this.removeAttribute("tabindex")))}handleChipActionClick(e){this.emit("onChipActionClick",e)}}customElements.define("md-chip",ji);class Xi extends ii{static properties={list:{type:Array},multiSelection:{type:Boolean}};constructor(){super()}renderChip(e){return Ft`
            <md-chip
                .data="${e}"
                .variant="${vi(e.variant)}"
                .avatar="${vi(e.avatar)}"
                .icon="${vi(e.icon)}"
                .label="${vi(e.label)}"
                .action="${vi(e.action)}"
                .selected="${vi(e.selected)}"
                .disabled="${vi(e.disabled)}"
                @click="${this.handleChipClick}"
                @onChipActionClick="${this.handleChipActionClick}"
            ></md-chip>
        `}render(){return this.list?.map((e=>this.renderChip(e)))}connectedCallback(){super.connectedCallback(),this.classList.add("md-chips")}handleChipClick(e){const t=e.currentTarget.data;this.multiSelection&&(t.selected=!t.selected,this.requestUpdate()),this.emit("onChipClick",e)}handleChipActionClick(e){const t=e.currentTarget.data,i=this.list.indexOf(t);i>-1&&this.list.splice(i,1),this.requestUpdate()}}customElements.define("md-chips",Xi);class Ki extends ii{static properties={label:{type:String},icon:{type:String},prefix:{type:String},suffix:{type:String},actions:{type:Array},text:{type:String},accept:{type:String},autocomplete:{type:String},disabled:{type:Boolean},max:{type:String},maxLength:{type:Number},min:{type:String},minLength:{type:Number},multiple:{type:Boolean},name:{type:String},pattern:{type:String},placeholder:{type:String},readOnly:{type:Boolean},required:{type:Boolean},size:{type:Number},src:{type:String},step:{type:String},type:{type:String},defaultValue:{type:String},value:{type:String},cols:{type:Number},rows:{type:Number},options:{type:Array},errorText:{type:String},error:{type:Boolean},variant:{type:String}};variants=["filled","outlined","rounded"];get native(){return this.querySelector(".md-text-field__native")}constructor(){super(),this.type="text",this.autocomplete="off",this.renderIconButton=this.renderIconButton.bind(this)}renderInput(){return Ft`
            <input 
                class="md-text-field__native"
                .accept="${vi(this.accept)}"
                .autocomplete="${vi(this.autocomplete)}"
                .disabled="${vi(this.disabled)}"
                .max="${vi(this.max)}"
                .maxLength="${vi(this.maxLength)}"
                .min="${vi(this.min)}"
                .minLength="${vi(this.minLength)}"
                .multiple="${vi(this.multiple)}"
                .name="${vi(this.name)}"
                .pattern="${vi(this.pattern)}"
                .placeholder="${vi(this.placeholder)}"
                .readOnly="${vi(this.readOnly)}"
                .required="${vi(this.required)}"
                .size="${vi(this.size)}"
                .src="${vi(this.src)}"
                .step="${vi(this.step)}"
                .type="${vi(this.type)}"
                .defaultValue="${vi(this.defaultValue)}"
                .value="${vi(this.value)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            >
        `}renderTextarea(){return Ft`
            <textarea 
                class="md-text-field__native"
                .autocomplete="${vi(this.autocomplete)}"
                .disabled="${vi(this.disabled)}"
                .maxLength="${vi(this.maxLength)}"
                .minLength="${vi(this.minLength)}"
                .name="${vi(this.name)}"
                .placeholder="${vi(this.placeholder)}"
                .readOnly="${vi(this.readOnly)}"
                .required="${vi(this.required)}"
                .defaultValue="${vi(this.defaultValue)}"
                .value="${vi(this.value)}"
                .cols="${vi(this.cols)}"
                .rows="${vi(this.rows)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            ></textarea>
        `}renderSelect(){return Ft`
            <select 
                class="md-text-field__native"
                .autocomplete="${vi(this.autocomplete)}"
                .disabled="${vi(this.disabled)}"
                .multiple="${vi(this.multiple)}"
                .name="${vi(this.name)}"
                .required="${vi(this.required)}"
                .size="${vi(this.size)}"
                .value="${vi(this.value)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            >
                ${this.options?.map((e=>Ft`
                    <option 
                        .disabled="${vi(e.disabled)}"
                        .label="${vi(e.label)}"
                        .selected="${vi(e.selected)}"
                        .value="${vi(e.value)}"
                        .text="${vi(e.text)}"
                    ></option>
                `))}
            </select>
        `}renderNative(){return yi(this.type,[["textarea",()=>this.renderTextarea()],["select",()=>this.renderSelect()]],(()=>this.renderInput()))}renderIconButton(e){return Ft`
            <md-icon-button
                class="md-text-field__icon-button"
                name="${vi(e.name)}"
                .name="${vi(e.name)}"
                .variant="${vi(e.variant)}"
                .icon="${vi(e.icon)}"
                .selected="${vi(e.selected)}"
                .disabled="${vi(e.disabled)}"
            ></md-icon-button>
        `}renderAction(e){return this.renderIconButton(e)}renderActions(e){return this.actions?.length||this.error?Ft`
            <div class="md-text-field__actions">
                ${this.error?Ft`<md-icon class="md-text-field__icon md-text-field__icon--error">error</md-icon>`:Ht}
                ${this.actions?.map((e=>this.renderAction(e)))}
            </div>
        `:Ht}render(){return Ft`
            <label class="md-text-field__inner">
                ${this.label?Ft`<div class="md-text-field__label">${this.label}</div>`:Ft`<div class="md-text-field__nolabel">Label</div>`}
                <div class="md-text-field__container">
                    ${this.icon?Ft`<md-icon class="md-text-field__icon">${this.icon}</md-icon>`:Ht}
                    ${this.prefix?Ft`<div class="md-text-field__meta">${this.prefix}</div>`:Ht}
                    ${this.renderNative()}
                    ${this.suffix?Ft`<div class="md-text-field__meta">${this.suffix}</div>`:Ht}
                    ${this.renderActions()}
                </div>
                ${this.errorText||this.text?Ft`<div class="md-text-field__text">${this.errorText||this.text}</div>`:Ht}
            </label>
        `}async connectedCallback(){super.connectedCallback(),this.classList.add("md-text-field"),await this.updateComplete,this.value=this.value||this.native.value,this.defaultValue=this.value,this.populate()}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`${this.localName}--${t}`,(this.variant??"").split(" ").includes(t))}e.has("icon")&&window.requestAnimationFrame((()=>{this.style.setProperty("--md-comp-text-field-offset-left",this.native.offsetLeft+"px")}))}handleTextFieldNativeFocus(e){this.classList.add("md-text-field--focused"),this.emit("onTextFieldNativeFocus",e)}handleTextFieldNativeBlur(e){this.classList.remove("md-text-field--focused"),this.emit("onTextFieldNativeBlur",e)}handleTextFieldNativeInput(e){"file"!==this.type&&(this.value=this.native.value),this.populate(),this.validate(),this.emit("onTextFieldNativeInput",e)}handleTextFieldNativeInvalid(e){e.preventDefault(),this.validate(),this.emit("onTextFieldNativeInvalid",e)}handleTextFieldNativeReset(e){"file"!==this.type&&(this.native.value=this.defaultValue,this.value=this.defaultValue),this.populate(),this.validate(),this.emit("onTextFieldNativeReset",e)}populate(){this.classList.toggle("md-text-field--populated",!!this.value||"file"==this.type)}validate(){this.errorText=this.native.validationMessage,this.error=!!this.errorText,this.classList.toggle("md-text-field--error",this.error)}}customElements.define("md-text-field",Ki);class Ji{static setRoutes(e,t){return e.reduce(((e,i)=>(i.parent=t,i.pathname=`${t?.pathname??""}/${i.path}`.replace(/\/+/g,"/"),e.push(i),i.children?.length&&e.push(...this.setRoutes(i.children,i)),e)),[])}static get path(){return this.historyApiFallback?window.location.pathname:window.location.hash.replace(/^#/,"").replace(/\?.*$/,"")||"/"}static get query(){let e;e=this.historyApiFallback?window.location.search:window.location.hash.replace(/^#/,"").match(/(\?.*)$/)?.[1]||"";const t={};for(const[i,a]of new URLSearchParams(e).entries())t[i]?Array.isArray(t[i])?t[i].push(a):t[i]=[t[i],a]:t[i]=a;return t}static getRoute(e){return this.stacks.find((t=>{const i=`^${t.pathname.replace(/:(\w+)/g,"(?<$1>[^/]+)").replace(/\*/,"(?:.*)")}(?:/?$)`,a=new RegExp(i,"i"),o=e.match(a);return!!o&&(this.params={...o.groups},!0)}))}static getRoutes(e){return[e].reduce(((e,t)=>(t.parent&&e.push(...this.getRoutes(t.parent)),e.push(t),e)),[])}static getOutlet(e,t){return new Promise((i=>{let a,o,n=e,l="md-outlet:not([name])";t.outlet&&(n=document.body,l=`md-outlet[name="${t.outlet}"]`);const d=()=>{a=n.querySelector(l),a&&(o&&o.disconnect(),i(a))};d(),a||(o=new MutationObserver(d),o.observe(n,{childList:!0,subtree:!0}))}))}static async handleLoad(e){this.emit("onRouterCurrentEntryChange",e),performance.mark("markRouterCurrentEntryChange"),this.params={},this.route=this.getRoute(this.path),this.routes=this.getRoutes(this.route),this.controller&&!this.controller.signal.aborted&&this.controller.abort(),(!this.controller||this.controller&&this.controller.signal.aborted)&&(this.controller=new AbortController);for(const t of this.routes){if(this.emit("onRouterNavigate",e),performance.mark("markRouterNavigate"),t.beforeLoad)try{await new Promise(((e,i)=>{const a=t=>{this.controller.signal.removeEventListener("abort",a),t?i(t):e()};this.controller.signal.addEventListener("abort",a),t.beforeLoad(a)}))}catch(t){this.emit("onRouterNavigateError",e),performance.mark("markRouterNavigateError"),console.error(t);break}t.component||(t.component=await t.load());const i=t.parent?.component??document.body,a=await this.getOutlet(i,t);t.component.isConnected||a.parentElement.insertBefore(t.component,a.nextElementSibling);const o=Array.from(document.body.querySelectorAll("md-outlet"));for(const e of o){let t=e.nextElementSibling;for(;t;){const e=!this.routes.find((e=>e.component==t)),i=!o.find((e=>e==t));e&&i&&t.remove(),t=t.nextElementSibling}}}this.emit("onRouterNavigateSuccess",e),performance.mark("markRouterNavigateSuccess"),performance.measure("measureRouterNavigateSuccess","markRouterCurrentEntryChange","markRouterNavigateSuccess"),performance.clearMarks("markRouterCurrentEntryChange"),performance.clearMarks("markRouterNavigate"),performance.clearMarks("markRouterNavigateError"),performance.clearMarks("markRouterNavigateSuccess"),performance.clearMeasures("measureRouterNavigateSuccess")}static navigate(e){this.historyApiFallback?window.history.pushState({},"",e):window.location.hash=e}static handleClick(e){const t=e.target.closest("[routerLink]");if(t){const e=t.getAttribute("routerLink");this.navigate(e)}}static historyApiFallback=!0;static emit(e,t){const i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});window.dispatchEvent(i)}static init(e){if(this.stacks=this.setRoutes(e),this.handleLoad=this.handleLoad.bind(this),window.addEventListener("DOMContentLoaded",this.handleLoad),this.historyApiFallback){window.addEventListener("popstate",this.handleLoad);const e=window.history.pushState;window.history.pushState=function(){e.apply(this,arguments),Ji.emit("popstate")}}else window.addEventListener("hashchange",this.handleLoad);this.handleClick=this.handleClick.bind(this),window.addEventListener("click",this.handleClick)}}Ji.historyApiFallback=!1,customElements.define("dev-main",class extends ii{get topAppBar(){return this.querySelector("#topAppBar")}get navigationDrawer(){return this.querySelector("#navigationDrawer")}constructor(){super(),this.list=[{icon:"deployed_code",routerLink:"/icon",label:"Icon"},{icon:"deployed_code",routerLink:"/button",label:"Button"},{icon:"deployed_code",routerLink:"/icon-button",label:"Icon Button"},{icon:"deployed_code",routerLink:"/card",label:"Card"},{icon:"deployed_code",routerLink:"/sheet",label:"Sheet"},{icon:"deployed_code",routerLink:"/dialog",label:"Dialog"},{icon:"deployed_code",routerLink:"/top-app-bar",label:"Top App Bar"},{icon:"deployed_code",routerLink:"/side-sheet",label:"Side Sheet"},{icon:"deployed_code",routerLink:"/bottom-sheet",label:"Bottom Sheet"},{icon:"deployed_code",routerLink:"/segmented-button",label:"Segmented Button"},{icon:"deployed_code",routerLink:"/snackbar",label:"Snackbar"},{icon:"deployed_code",routerLink:"/localization",label:"Localization"},{icon:"deployed_code",routerLink:"/color",label:"Color"},{icon:"deployed_code",routerLink:"/ripple",label:"Ripple"},{icon:"deployed_code",routerLink:"/tooltip",label:"Tooltip"},{icon:"deployed_code",routerLink:"/picker",label:"Picker"},{icon:"deployed_code",routerLink:"/datetime-picker",label:"Datetime Picker"},{icon:"deployed_code",routerLink:"/date-picker",label:"Date Picker"},{icon:"deployed_code",routerLink:"/month-picker",label:"Month Picker"},{icon:"deployed_code",routerLink:"/time-picker",label:"Time Picker"},{icon:"deployed_code",routerLink:"/week-picker",label:"Week Picker"},{icon:"deployed_code",routerLink:"/color-picker",label:"Color Picker"},{icon:"deployed_code",routerLink:"/fab",label:"Fab"},{icon:"deployed_code",routerLink:"/bottom-app-bar",label:"Bottom App Bar"},{icon:"deployed_code",routerLink:"/image",label:"Image"},{icon:"deployed_code",routerLink:"/popper",label:"Popper"},{icon:"deployed_code",routerLink:"/badge",label:"Badge"},{icon:"deployed_code",routerLink:"/form",label:"Form"},{icon:"deployed_code",routerLink:"/checkbox",label:"Checkbox"},{icon:"deployed_code",routerLink:"/radio-button",label:"Radio Button"},{icon:"deployed_code",routerLink:"/switch",label:"Switch"},{icon:"deployed_code",routerLink:"/slider",label:"Slider"},{icon:"deployed_code",routerLink:"/form2",label:"Form 2"},{icon:"deployed_code",routerLink:"/progress-indicator",label:"Progress Indicator"},{icon:"deployed_code",routerLink:"/gesture",label:"Gesture"},{icon:"deployed_code",routerLink:"/list",label:"List"},{icon:"deployed_code",routerLink:"/selection",label:"Selection"},{icon:"deployed_code",routerLink:"/tree",label:"Tree"},{icon:"deployed_code",routerLink:"/navigation",label:"Navigation"},{icon:"deployed_code",routerLink:"/navigation-bar",label:"Navigation Bar"},{icon:"deployed_code",routerLink:"/navigation-drawer",label:"Navigation Drawer"},{icon:"deployed_code",routerLink:"/navigation-rail",label:"Navigation Rail"},{icon:"deployed_code",routerLink:"/menu",label:"Menu"},{icon:"deployed_code",routerLink:"/tabs",label:"Tabs"},{icon:"deployed_code",routerLink:"/chips",label:"Chips"},{icon:"deployed_code",routerLink:"/text-field",label:"Text Field"},{icon:"deployed_code",routerLink:"/text-field2",label:"Text Field 2"},{icon:"deployed_code",routerLink:"/text-field3",label:"Text Field 3"}];for(let e=0;e<this.list.length;e++){let t=this.list[e];t.selected=t.routerLink===Ji.path}this.list.sort(((e,t)=>e.label.localeCompare(t.label)))}render(){return Ft`
            <div class="md-layout-border">
                <md-top-app-bar
                    id="topAppBar"
                    leadingActions='[{"icon":"menu"}]'
                    @onCardIconButtonClick="${this.handleCardIconButtonClick}"
                ></md-top-app-bar>
                <md-navigation-drawer
                    id="navigationDrawer"
                    open
                    .list="${this.list}"
                    @onTreeItemSelected="${this.handleTreeItemSelected}"
                ></md-navigation-drawer>
                <div class="md-layout-border__item md-layout-border__item--center">
                    <md-outlet></md-outlet>
                </div>
            </div>
        `}handleCardIconButtonClick(e){this.navigationDrawer.toggle()}handleTreeItemSelected(e){const t=e.detail;this.ready||(this.ready=!0,t.scrollIntoView({block:"center",inline:"center",behavior:"instant"}))}});const Zi=document.createElement("dev-main");customElements.define("dev-icon",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon>image</md-icon>
                </div>
            </div>
        `}});const Qi=document.createElement("dev-icon");customElements.define("dev-button",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button
                        variant="elevated"
                        label="Elevated button"
                    ></md-button>
                    <md-button
                        variant="elevated"
                        label="Elevated button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="elevated icon-right"
                        label="Elevated button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="elevated"
                        label="Elevated button"
                        icon="add"
                        disabled
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button
                        variant="filled"
                        label="Filled button"
                    ></md-button>
                    <md-button
                        variant="filled"
                        label="Filled button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="filled icon-right"
                        label="Filled button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="filled"
                        label="Filled button"
                        icon="add"
                        disabled
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button
                        variant="tonal"
                        label="Tonal button"
                    ></md-button>
                    <md-button
                        variant="tonal"
                        label="Tonal button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="tonal icon-right"
                        label="Tonal button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="tonal"
                        label="Tonal button"
                        icon="add"
                        disabled
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button
                        variant="outlined"
                        label="Outlined button"
                    ></md-button>
                    <md-button
                        variant="outlined"
                        label="Outlined button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="outlined icon-right"
                        label="Outlined button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="outlined"
                        label="Outlined button"
                        icon="add"
                        disabled
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button label="Text button"></md-button>
                    <md-button
                        label="Text button"
                        icon="add"
                    ></md-button>
                    <md-button
                        variant="icon-right"
                        label="Text button"
                        icon="add"
                    ></md-button>
                    <md-button
                        label="Text button"
                        icon="add"
                        disabled
                    ></md-button>
                </div>
            </div>
        `}});const ea=document.createElement("dev-button");customElements.define("dev-icon-button",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon-button
                        variant="filled"
                        icon="favorite"
                    ></md-icon-button>
                    <md-icon-button
                        variant="filled toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        selected
                        variant="filled toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        variant="filled"
                        icon="settings"
                        disabled
                    ></md-icon-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon-button
                        variant="tonal"
                        icon="favorite"
                    ></md-icon-button>
                    <md-icon-button
                        variant="tonal toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        selected
                        variant="tonal toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        variant="tonal"
                        icon="settings"
                        disabled
                    ></md-icon-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon-button
                        variant="outlined"
                        icon="favorite"
                    ></md-icon-button>
                    <md-icon-button
                        variant="outlined toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        selected
                        variant="outlined toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        variant="outlined"
                        icon="settings"
                        disabled
                    ></md-icon-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon-button icon="favorite"></md-icon-button>
                    <md-icon-button
                        variant="toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        selected
                        variant="toggle"
                        icon="settings"
                    ></md-icon-button>
                    <md-icon-button
                        icon="settings"
                        disabled
                    ></md-icon-button>
                </div>
            </div>
        `}});const ta=document.createElement("dev-icon-button");customElements.define("dev-card",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        variant="elevated interactive"
                        label="Title"
                        subLabel="Subhead"
                        actions='[{"component":"spacer"},{"label":"Action","variant":"filled"}]'
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        variant="filled interactive"
                        label="Title"
                        subLabel="Subhead"
                        actions='[{"component":"spacer"},{"label":"Action","variant":"outlined"}]'
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        variant="outlined interactive"
                        label="Title"
                        subLabel="Subhead"
                        actions='[{"component":"spacer"},{"label":"Action","variant":"tonal"}]'
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        leadingActions='[{"icon":"image"}]'
                        label="Title"
                        subLabel="Subhead"
                        trailingActions='[{"icon":"image"},{"icon":"image"},{"icon":"image"}]'
                        actions='[{"component":"spacer"},{"label":"Action","variant":"outlined"}]'
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        leadingActions='[{"icon":"image"}]'
                        label="Title"
                        subLabel="Subhead"
                        trailingActions='[{"icon":"image"},{"icon":"image"},{"icon":"image"}]'
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        leadingActions='[{"icon":"image"}]'
                        label="Title"
                        subLabel="Subhead"
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        label="Title"
                        subLabel="Subhead"
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        label="Title"
                        subLabel="Subhead"
                    >
                        Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information.
                    </md-card>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded4 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card> Use a card to display content and actions on a single topic. Cards should be easy to scan for relevant information. </md-card>
                </div>
            </div>
        `}});const ia=document.createElement("dev-card");customElements.define("dev-sheet",class extends ii{get sheetNorth(){return this.querySelector("#sheetNorth")}get sheetEast(){return this.querySelector("#sheetEast")}get sheetSouth(){return this.querySelector("#sheetSouth")}get sheetWest(){return this.querySelector("#sheetWest")}get sheetNorthModal(){return this.querySelector("#sheetNorthModal")}get sheetEastModal(){return this.querySelector("#sheetEastModal")}get sheetSouthModal(){return this.querySelector("#sheetSouthModal")}get sheetWestModal(){return this.querySelector("#sheetWestModal")}render(){return Ft`
            <div class="md-layout-border">
                <md-sheet
                    id="sheetNorth"
                    variant="north"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetNorthClick}
                    @onCardButtonClick=${this.handleSheetNorthClick}
                ></md-sheet>
                <md-sheet
                    id="sheetEast"
                    variant="east"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetEastClick}
                    @onCardButtonClick=${this.handleSheetEastClick}
                ></md-sheet>
                <md-sheet
                    id="sheetSouth"
                    variant="south"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetSouthClick}
                    @onCardButtonClick=${this.handleSheetSouthClick}
                ></md-sheet>
                <md-sheet
                    id="sheetWest"
                    variant="west"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetWestClick}
                    @onCardButtonClick=${this.handleSheetWestClick}
                ></md-sheet>

                <md-sheet
                    id="sheetNorthModal"
                    variant="north modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetNorthModalClick}
                    @onCardButtonClick=${this.handleSheetNorthModalClick}
                ></md-sheet>
                <md-sheet
                    id="sheetEastModal"
                    variant="east modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetEastModalClick}
                    @onCardButtonClick=${this.handleSheetEastModalClick}
                ></md-sheet>
                <md-sheet
                    id="sheetSouthModal"
                    variant="south modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetSouthModalClick}
                    @onCardButtonClick=${this.handleSheetSouthModalClick}
                ></md-sheet>
                <md-sheet
                    id="sheetWestModal"
                    variant="west modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Label"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSheetWestModalClick}
                    @onCardButtonClick=${this.handleSheetWestModalClick}
                ></md-sheet>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="North"
                                @click="${this.handleButtonSheetNorthClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="East"
                                @click="${this.handleButtonSheetEastClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="South"
                                @click="${this.handleButtonSheetSouthClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="West"
                                @click="${this.handleButtonSheetWestClick}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="North Modal"
                                @click="${this.handleButtonSheetNorthModalClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="East Modal"
                                @click="${this.handleButtonSheetEastModalClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="South Modal"
                                @click="${this.handleButtonSheetSouthModalClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="West Modal"
                                @click="${this.handleButtonSheetWestModalClick}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonSheetNorthClick(){this.sheetNorth.toggle()}handleButtonSheetEastClick(){this.sheetEast.toggle()}handleButtonSheetSouthClick(){this.sheetSouth.toggle()}handleButtonSheetWestClick(){this.sheetWest.toggle()}handleButtonSheetNorthModalClick(){this.sheetNorthModal.showModal()}handleButtonSheetEastModalClick(){this.sheetEastModal.showModal()}handleButtonSheetSouthModalClick(){this.sheetSouthModal.showModal()}handleButtonSheetWestModalClick(){this.sheetWestModal.showModal()}handleSheetNorthClick(){this.sheetNorth.close()}handleSheetEastClick(){this.sheetEast.close()}handleSheetSouthClick(){this.sheetSouth.close()}handleSheetWestClick(){this.sheetWest.close()}handleSheetNorthModalClick(){this.sheetNorthModal.close()}handleSheetEastModalClick(){this.sheetEastModal.close()}handleSheetSouthModalClick(){this.sheetSouthModal.close()}handleSheetWestModalClick(){this.sheetWestModal.close()}});const aa=document.createElement("dev-sheet");customElements.define("dev-dialog",class extends ii{get dialog(){return this.querySelector("#dialog")}get dialog2(){return this.querySelector("#dialog2")}get dialogFull(){return this.querySelector("#dialogFull")}render(){return Ft`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-dialog
                                id="dialog"
                                leadingActions='[{"icon":"mobile_friendly"}]'
                                label="Dialog with hero icon"
                                actions='[{"component":"spacer"},{"label":"Text button"},{"label":"Text button"}]'
                                @onCardIconButtonClick=${this.handleDialogClick}
                                @onCardButtonClick=${this.handleDialogClick}
                            >
                                A dialog is a type of modal window that<br />
                                appears in front of app content to provide<br />
                                critical information, or ask for a decision.
                            </md-dialog>

                            <md-button
                                variant="tonal"
                                label="Basic dialogs"
                                @click="${this.handleButtonDialogClick}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-dialog
                                id="dialog2"
                                label="Basic dialog title"
                                actions='[{"component":"spacer"},{"label":"Text button"},{"label":"Text button"}]'
                                @onCardIconButtonClick=${this.handleDialog2Click}
                                @onCardButtonClick=${this.handleDialog2Click}
                            >
                                A dialog is a type of modal window that<br />
                                appears in front of app content to provide<br />
                                critical information, or ask for a decision.
                            </md-dialog>

                            <md-button
                                variant="tonal"
                                label="Basic dialogs 2"
                                @click="${this.handleButtonDialog2Click}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-dialog
                                id="dialogFull"
                                variant="full"
                                leadingActions='[{"icon":"close"}]'
                                label="Full-screen dialog title"
                                trailingActions='[{"component":"button","label":"Save"}]'
                                @onCardIconButtonClick=${this.handleDialogFullClick}
                                @onCardButtonClick=${this.handleDialogFullClick}
                            ></md-dialog>

                            <md-button
                                variant="tonal"
                                label="Full-screen dialogs"
                                @click="${this.handleButtonDialogFullClick}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonDialogClick(){this.dialog.showModal()}handleButtonDialog2Click(){this.dialog2.showModal()}handleButtonDialogFullClick(){this.dialogFull.show()}handleDialogClick(){this.dialog.close()}handleDialog2Click(){this.dialog2.close()}handleDialogFullClick(){this.dialogFull.close()}});const oa=document.createElement("dev-dialog");customElements.define("dev-top-app-bar",class extends ii{get topAppBarCenter(){return this.querySelector("#topAppBarCenter")}get topAppBarSmall(){return this.querySelector("#topAppBarSmall")}get topAppBarMedium(){return this.querySelector("#topAppBarMedium")}get topAppBarLarge(){return this.querySelector("#topAppBarLarge")}get center(){return this.querySelector("#center")}render(){return Ft`
            <div class="md-layout-border">
                <md-top-app-bar
                    id="topAppBarCenter"
                    variant="center"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Title Large"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.topAppBarCenterClick}
                    @onCardButtonClick=${this.topAppBarCenterClick}
                ></md-top-app-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-top-app-bar
                            id="topAppBarSmall"
                            variant="small"
                            leadingActions='[{"icon":"arrow_back"}]'
                            label="Title Large"
                            trailingActions='[{"icon":"close"}]'
                            @onCardIconButtonClick=${this.topAppBarSmallClick}
                            @onCardButtonClick=${this.topAppBarSmallClick}
                        ></md-top-app-bar>

                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div class="md-layout-border">
                                <md-top-app-bar
                                    id="topAppBarMedium"
                                    variant="medium"
                                    leadingActions='[{"icon":"arrow_back"}]'
                                    label="Headline Small"
                                    trailingActions='[{"icon":"close"}]'
                                    @onCardIconButtonClick=${this.topAppBarMediumClick}
                                    @onCardButtonClick=${this.topAppBarMediumClick}
                                ></md-top-app-bar>

                                <div class="md-layout-border__item md-layout-border__item--center">
                                    <div class="md-layout-border">
                                        <md-top-app-bar
                                            id="topAppBarLarge"
                                            variant="large"
                                            leadingActions='[{"icon":"arrow_back"}]'
                                            label="Headline Medium"
                                            trailingActions='[{"icon":"close"}]'
                                            @onCardIconButtonClick=${this.topAppBarLargeClick}
                                            @onCardButtonClick=${this.topAppBarLargeClick}
                                        ></md-top-app-bar>

                                        <div
                                            id="center"
                                            class="md-layout-border__item md-layout-border__item--center"
                                        >
                                            <div class="md-layout-column">
                                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                                    <md-button
                                                        variant="tonal"
                                                        label="Center-aligned top app bar"
                                                        @click="${this.handleButtonTopAppBarCenterClick}"
                                                    ></md-button>
                                                </div>
                                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                                    <md-button
                                                        variant="tonal"
                                                        label="Small top app bar"
                                                        @click="${this.handleButtonTopAppBarSmallClick}"
                                                    ></md-button>
                                                </div>
                                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                                    <md-button
                                                        variant="tonal"
                                                        label="Medium top app bar"
                                                        @click="${this.handleButtonTopAppBarMediumClick}"
                                                    ></md-button>
                                                </div>
                                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                                    <md-button
                                                        variant="tonal"
                                                        label="Large top app bar"
                                                        @click="${this.handleButtonTopAppBarLargeClick}"
                                                    ></md-button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonTopAppBarCenterClick(){this.topAppBarCenter.toggle()}handleButtonTopAppBarSmallClick(){this.topAppBarSmall.toggle()}handleButtonTopAppBarMediumClick(){this.topAppBarMedium.toggle()}handleButtonTopAppBarLargeClick(){this.topAppBarLarge.toggle()}topAppBarCenterClick(){this.topAppBarCenter.close()}topAppBarSmallClick(){this.topAppBarSmall.close()}topAppBarMediumClick(){this.topAppBarMedium.close()}topAppBarLargeClick(){this.topAppBarLarge.close()}});const na=document.createElement("dev-top-app-bar");customElements.define("dev-side-sheet",class extends ii{get sideSheet(){return this.querySelector("#sideSheet")}get sideSheetModal(){return this.querySelector("#sideSheetModal")}render(){return Ft`
            <div class="md-layout-border">
                <md-side-sheet
                    id="sideSheet"
                    label="Title"
                    trailingActions='[{"icon":"close"}]'
                    @onCardIconButtonClick=${this.handleSideSheetClick}
                    @onCardButtonClick=${this.handleSideSheetClick}
                ></md-side-sheet>

                <md-side-sheet
                    id="sideSheetModal"
                    variant="modal"
                    leadingActions='[{"icon":"arrow_back"}]'
                    label="Title"
                    trailingActions='[{"icon":"close"}]'
                    actions='[{"label":"Save","variant":"filled"},{"label":"Cancel","variant":"outlined"}]'
                    @onCardIconButtonClick=${this.handleSideSheetModalClick}
                    @onCardButtonClick=${this.handleSideSheetModalClick}
                ></md-side-sheet>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="Standard side sheet"
                                @click="${this.handleButtonSideSheetClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="Modal side sheet"
                                @click="${this.handleButtonSideSheetModalClick}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonSideSheetClick(){this.sideSheet.toggle()}handleButtonSideSheetModalClick(){this.sideSheetModal.showModal()}handleSideSheetClick(){this.sideSheet.close()}handleSideSheetModalClick(){this.sideSheetModal.close()}});const la=document.createElement("dev-side-sheet");customElements.define("dev-bottom-sheet",class extends ii{get bottomSheet(){return this.querySelector("#bottomSheet")}get bottomSheetModal(){return this.querySelector("#bottomSheetModal")}render(){return Ft`
            <div class="md-layout-border">
                <md-bottom-sheet
                    id="bottomSheet"
                    @onCardIconButtonClick=${this.handleBottomSheetClick}
                    @onCardButtonClick=${this.handleBottomSheetClick}
                >
                </md-bottom-sheet>

                <md-bottom-sheet
                    id="bottomSheetModal"
                    variant="modal"
                    @onCardIconButtonClick=${this.handleBottomSheetModalClick}
                    @onCardButtonClick=${this.handleBottomSheetModalClick}
                >
                </md-bottom-sheet>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="Bottom sheets standard"
                                @click="${this.handleButtonBottomSheetClick}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-button
                                variant="tonal"
                                label="Bottom sheets modal"
                                @click="${this.handleButtonBottomSheetModalClick}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonBottomSheetClick(){this.bottomSheet.toggle()}handleButtonBottomSheetModalClick(){this.bottomSheetModal.showModal()}handleBottomSheetClick(){this.bottomSheet.close()}handleBottomSheetModalClick(){this.bottomSheetModal.close()}});const da=document.createElement("dev-bottom-sheet");customElements.define("dev-segmented-button",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-segmented-button
                        single-select
                        .buttons="${[{label:"Enabled",selected:!0},{label:"Enabled"},{label:"Enabled"}]}"
                    ></md-segmented-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-segmented-button
                        multi-select
                        .buttons="${[{label:"$",selected:!0},{label:"$$",selected:!0},{label:"$$$"},{label:"$$$$"}]}"
                    ></md-segmented-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-segmented-button
                        style="--md-comp-segmented-button-density:0;"
                        single-select
                        .buttons="${[{label:"Enabled",selected:!0},{label:"Enabled"},{label:"Enabled"}]}"
                    ></md-segmented-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-segmented-button
                        style="--md-comp-segmented-button-density:-1;"
                        single-select
                        .buttons="${[{label:"Enabled",selected:!0},{label:"Enabled"},{label:"Enabled"}]}"
                    ></md-segmented-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-segmented-button
                        style="--md-comp-segmented-button-density:-2;"
                        single-select
                        .buttons="${[{label:"Enabled",selected:!0},{label:"Enabled"},{label:"Enabled"}]}"
                    ></md-segmented-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-segmented-button
                        style="--md-comp-segmented-button-density:-3;"
                        single-select
                        .buttons="${[{label:"Enabled",selected:!0},{label:"Enabled"},{label:"Enabled"}]}"
                    ></md-segmented-button>
                </div>
            </div>
        `}});const sa=document.createElement("dev-segmented-button");customElements.define("dev-snackbar",class extends ii{get snackbar(){return this.querySelector("#snackbar")}get snackbar1(){return this.querySelector("#snackbar1")}get snackbar2(){return this.querySelector("#snackbar2")}get snackbar3(){return this.querySelector("#snackbar3")}get snackbar4(){return this.querySelector("#snackbar4")}get snackbar5(){return this.querySelector("#snackbar5")}render(){return Ft`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar"
                                @onCardIconButtonClick=${this.handleSnackbarClick}
                                @onCardButtonClick=${this.handleSnackbarClick}
                            >
                                Single-line snackbar
                            </md-snackbar>

                            <md-button
                                variant="tonal"
                                label="Single line"
                                @click="${this.handleButtonSnackbarClick}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar1"
                                actions='[{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleSnackbar1Click}
                                @onCardButtonClick=${this.handleSnackbar1Click}
                            >
                                Single-line snackbar with action
                            </md-snackbar>

                            <md-button
                                variant="tonal"
                                label="Single line with action"
                                @click="${this.handleButtonSnackbar1Click}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar2"
                                @onCardIconButtonClick=${this.handleSnackbar2Click}
                                @onCardButtonClick=${this.handleSnackbar2Click}
                            >
                                Two-line snackbar<br />
                                without action
                            </md-snackbar>

                            <md-button
                                variant="tonal"
                                label="Two lines"
                                @click="${this.handleButtonSnackbar2Click}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar3"
                                actions='[{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleSnackbar3Click}
                                @onCardButtonClick=${this.handleSnackbar3Click}
                            >
                                Two-line snackbar<br />
                                with action
                            </md-snackbar>

                            <md-button
                                variant="tonal"
                                label="Two lines with action"
                                @click="${this.handleButtonSnackbar3Click}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar4"
                                actions='[{"label":"Longer action"}]'
                                @onCardIconButtonClick=${this.handleSnackbar4Click}
                                @onCardButtonClick=${this.handleSnackbar4Click}
                            >
                                Two-line snackbar<br />
                                with longer action
                            </md-snackbar>

                            <md-button
                                variant="tonal"
                                label="Two lines with longer action"
                                @click="${this.handleButtonSnackbar4Click}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-snackbar
                                id="snackbar5"
                                actions='[{"label":"Action"},{"component":"icon-button","icon":"close"}]'
                                @onCardIconButtonClick=${this.handleSnackbar5Click}
                                @onCardButtonClick=${this.handleSnackbar5Click}
                            >
                                Single-line snackbar with action
                            </md-snackbar>

                            <md-button
                                variant="tonal"
                                label="With close icon"
                                @click="${this.handleButtonSnackbar5Click}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonSnackbarClick(){this.snackbar.toggle()}handleButtonSnackbar1Click(){this.snackbar1.toggle()}handleButtonSnackbar2Click(){this.snackbar2.toggle()}handleButtonSnackbar3Click(){this.snackbar3.toggle()}handleButtonSnackbar4Click(){this.snackbar4.toggle()}handleButtonSnackbar5Click(){this.snackbar5.toggle()}handleSnackbarClick(){this.snackbar.close()}handleSnackbar1Click(){this.snackbar1.close()}handleSnackbar2Click(){this.snackbar2.close()}handleSnackbar3Click(){this.snackbar3.close()}handleSnackbar4Click(){this.snackbar4.close()}handleSnackbar5Click(){this.snackbar5.close()}});const ra=document.createElement("dev-snackbar"),ca=Object.keys(L).map((e=>({name:e,value:L[e]})));customElements.define("dev-localization",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <div>${M("The older sisters perched on the window of grandma, her old teeth were only two")}</div>
                    <label for="localization">Select localization</label>
                    <select
                        name=""
                        id="localization"
                        @change="${this.handleChange}"
                    >
                        <option value="en">Select language</option>
                        ${ca.map((e=>Ft`
                                <option
                                    value="${e.value}"
                                    ?disabled="${!["af","ak","am","id"].includes(e.value)}"
                                >
                                    ${e.name}
                                </option>
                            `))}
                    </select>
                </div>
            </div>
        `}handleChange(e){R(e.currentTarget.value)}});const ma=document.createElement("dev-localization");customElements.define("dev-color",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="color">Select color</label>
                    <input
                        type="color"
                        name=""
                        id="color"
                        @input="${this.handleChange}"
                    />
                </div>
            </div>
        `}handleChange(e){je(e.currentTarget.value)}});const ua=document.createElement("dev-color");customElements.define("dev-ripple",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button label="button"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon-button icon="image"></md-icon-button>
                </div>
            </div>
        `}});const ha=document.createElement("dev-ripple");customElements.define("dev-tooltip",class extends ii{get tooltip(){return this.querySelector("#tooltip")}get tooltip1(){return this.querySelector("#tooltip1")}get tooltip2(){return this.querySelector("#tooltip2")}get tooltip3(){return this.querySelector("#tooltip3")}get tooltip4(){return this.querySelector("#tooltip4")}get tooltip5(){return this.querySelector("#tooltip5")}get tooltip6(){return this.querySelector("#tooltip6")}render(){return Ft`
            <div class="md-layout-border">
                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-column">
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip"
                                label="Rich tooltip"
                                actions='[{"label":"Action"},{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleTooltipClick}
                                @onCardButtonClick=${this.handleTooltipClick}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Subhead, supporting text, and two buttons"
                                @pointerenter="${this.handleButtonTooltipPointerenter}"
                                @pointerleave="${this.handleButtonTooltipPointerleave}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip1"
                                label="Rich tooltip"
                                actions='[{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleTooltip1Click}
                                @onCardButtonClick=${this.handleTooltip1Click}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Subhead, supporting text, and one button"
                                @pointerenter="${this.handleButtonTooltip1Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip1Pointerleave}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip2"
                                label="Rich tooltip"
                                @onCardIconButtonClick=${this.handleTooltip2Click}
                                @onCardButtonClick=${this.handleTooltip2Click}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Subhead and supporting text"
                                @pointerenter="${this.handleButtonTooltip2Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip2Pointerleave}"
                            ></md-button>
                        </div>

                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip3"
                                actions='[{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleTooltip3Click}
                                @onCardButtonClick=${this.handleTooltip3Click}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Supporting text and one button"
                                @pointerenter="${this.handleButtonTooltip3Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip3Pointerleave}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip4"
                                label="Rich tooltip"
                                actions='[{"label":"Action"},{"label":"Action"}]'
                                @onCardIconButtonClick=${this.handleTooltip4Click}
                                @onCardButtonClick=${this.handleTooltip4Click}
                            >
                                Rich tooltips bring attention to a particular<br />
                                element of feature that warrants the user's<br />
                                focus.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Button text and two buttons"
                                @pointerenter="${this.handleButtonTooltip4Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip4Pointerleave}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip5"
                                variant="plain"
                                @onCardIconButtonClick=${this.handleTooltip5Click}
                                @onCardButtonClick=${this.handleTooltip5Click}
                            >
                                Save to favorites
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Plain tooltip"
                                @pointerenter="${this.handleButtonTooltip5Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip5Pointerleave}"
                            ></md-button>
                        </div>
                        <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                            <md-tooltip
                                id="tooltip6"
                                variant="plain"
                                @onCardIconButtonClick=${this.handleTooltip6Click}
                                @onCardButtonClick=${this.handleTooltip6Click}
                            >
                                Grant value is calculated using the<br />
                                closing stock price from the day<br />
                                before the grant date. Amounts do<br />
                                not reflect tax witholdings.
                            </md-tooltip>

                            <md-button
                                variant="tonal"
                                label="Plain tooltip 2"
                                @pointerenter="${this.handleButtonTooltip6Pointerenter}"
                                @pointerleave="${this.handleButtonTooltip6Pointerleave}"
                            ></md-button>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonTooltipPointerenter(e){this.tooltip.show(e.currentTarget)}handleButtonTooltipPointerleave(){this.tooltip.close()}handleButtonTooltip1Pointerenter(e){this.tooltip1.show(e.currentTarget)}handleButtonTooltip1Pointerleave(){this.tooltip1.close()}handleButtonTooltip2Pointerenter(e){this.tooltip2.show(e.currentTarget)}handleButtonTooltip2Pointerleave(){this.tooltip2.close()}handleButtonTooltip3Pointerenter(e){this.tooltip3.show(e.currentTarget)}handleButtonTooltip3Pointerleave(){this.tooltip3.close()}handleButtonTooltip4Pointerenter(e){this.tooltip4.show(e.currentTarget)}handleButtonTooltip4Pointerleave(){this.tooltip4.close()}handleButtonTooltip5Pointerenter(e){this.tooltip5.show(e.currentTarget)}handleButtonTooltip5Pointerleave(){this.tooltip5.close()}handleButtonTooltip6Pointerenter(e){this.tooltip6.show(e.currentTarget)}handleButtonTooltip6Pointerleave(){this.tooltip6.close()}handleTooltipClick(){this.tooltip.close()}handleTooltip1Click(){this.tooltip1.close()}handleTooltip2Click(){this.tooltip2.close()}handleTooltip3Click(){this.tooltip3.close()}handleTooltip4Click(){this.tooltip4.close()}handleTooltip5Click(){this.tooltip5.close()}handleTooltip6Click(){this.tooltip6.close()}});const pa=document.createElement("dev-tooltip");customElements.define("dev-picker",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-datetime-picker id="datetimePicker"></md-datetime-picker>
                    <md-button
                        variant="tonal"
                        label="Datetime Picker"
                        @click="${this.handleDatetimePickerButtonClick}"
                    ></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-date-picker id="datePicker"></md-date-picker>
                    <md-button
                        variant="tonal"
                        label="Date Picker"
                        @click="${this.handleDatePickerButtonClick}"
                    ></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-month-picker id="monthPicker"></md-month-picker>
                    <md-button
                        variant="tonal"
                        label="Month Picker"
                        @click="${this.handleMonthPickerButtonClick}"
                    ></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-time-picker id="timePicker"></md-time-picker>
                    <md-button
                        variant="tonal"
                        label="Time Picker"
                        @click="${this.handleTimePickerButtonClick}"
                    ></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-week-picker id="weekPicker"></md-week-picker>
                    <md-button
                        variant="tonal"
                        label="Week Picker"
                        @click="${this.handleWeekPickerButtonClick}"
                    ></md-button>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-color-picker id="colorPicker"></md-color-picker>
                    <md-button
                        variant="tonal"
                        label="Color Picker"
                        @click="${this.handleColorPickerButtonClick}"
                    ></md-button>
                </div>
            </div>
        `}get datetimePicker(){return this.querySelector("#datetimePicker")}handleDatetimePickerButtonClick(e){this.datetimePicker.toggle(e.currentTarget)}get datePicker(){return this.querySelector("#datePicker")}handleDatePickerButtonClick(e){this.datePicker.toggle(e.currentTarget)}get monthPicker(){return this.querySelector("#monthPicker")}handleMonthPickerButtonClick(e){this.monthPicker.toggle(e.currentTarget)}get timePicker(){return this.querySelector("#timePicker")}handleTimePickerButtonClick(e){this.timePicker.toggle(e.currentTarget)}get weekPicker(){return this.querySelector("#weekPicker")}handleWeekPickerButtonClick(e){this.weekPicker.toggle(e.currentTarget)}get colorPicker(){return this.querySelector("#colorPicker")}handleColorPickerButtonClick(e){this.colorPicker.toggle(e.currentTarget)}});const _a=document.createElement("dev-picker");customElements.define("dev-datetime-picker",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="datetimeLocal">Select datetime-local</label>
                    <input
                        id="datetimeLocal"
                        name="datetime-local"
                        type="datetime-local"
                        value="1990-10-17T20:30"
                        @input="${this.handleDatetimeLocalInput}"
                    />
                    <md-datetime-picker
                        id="datetimePicker"
                        value="1990-10-17T20:30"
                        @onDatetimePickerButtonCancelClick="${this.handleDatetimePickerButtonCancelClick}"
                        @onDatetimePickerButtonOkClick="${this.handleDatetimePickerButtonOkClick}"
                        @onDatetimePickerSelection="${this.handleDatetimePickerSelection}"
                    ></md-datetime-picker>
                    <md-button
                        variant="tonal"
                        label="Datetime Picker"
                        @click="${this.handleDatetimePickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-datetime-picker id="datetimePicker2"></md-datetime-picker>
                    <md-button
                        variant="tonal"
                        label="Datetime Picker 2"
                        @click="${this.handleDatetimePickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `}get datetimeLocal(){return this.querySelector("#datetimeLocal")}get datetimePicker(){return this.querySelector("#datetimePicker")}get datetimePicker2(){return this.querySelector("#datetimePicker2")}handleDatetimePickerButtonClick(e){this.datetimePicker.toggle(e.currentTarget)}handleDatetimePickerButtonClick2(e){this.datetimePicker2.toggle(e.currentTarget)}handleDatetimeLocalInput(){this.datetimePicker.value=this.datetimeLocal.value}handleDatetimePickerButtonCancelClick(){this.datetimeLocal.value=this.datetimePicker.value,this.datetimePicker.close()}handleDatetimePickerButtonOkClick(){this.datetimeLocal.value=this.datetimePicker.value,this.datetimePicker.close()}handleDatetimePickerSelection(){this.datetimeLocal.value=e(this.datetimePicker.selection)}});const ba=document.createElement("dev-datetime-picker");customElements.define("dev-date-picker",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="date">Select date</label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        value="1990-10-17"
                        @input="${this.handleDateInput}"
                    />
                    <md-date-picker
                        id="datePicker"
                        value="1990-10-17"
                        @onDatePickerButtonCancelClick="${this.handleDatePickerButtonCancelClick}"
                        @onDatePickerButtonOkClick="${this.handleDatePickerButtonOkClick}"
                        @onDatePickerSelection="${this.handleDatePickerSelection}"
                    ></md-date-picker>
                    <md-button
                        variant="tonal"
                        label="Date Picker"
                        @click="${this.handleDatePickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-date-picker id="datePicker2"></md-date-picker>
                    <md-button
                        variant="tonal"
                        label="Date Picker 2"
                        @click="${this.handleDatePickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `}get date(){return this.querySelector("#date")}get datePicker(){return this.querySelector("#datePicker")}get datePicker2(){return this.querySelector("#datePicker2")}handleDatePickerButtonClick(e){this.datePicker.toggle(e.currentTarget)}handleDatePickerButtonClick2(e){this.datePicker2.toggle(e.currentTarget)}handleDateInput(){this.datePicker.value=this.date.value}handleDatePickerButtonCancelClick(){this.date.value=this.datePicker.value,this.datePicker.close()}handleDatePickerButtonOkClick(){this.date.value=this.datePicker.value,this.datePicker.close()}handleDatePickerSelection(){this.date.value=t(this.datePicker.selection)}});const va=document.createElement("dev-date-picker");customElements.define("dev-month-picker",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="month">Select month</label>
                    <input
                        id="month"
                        name="month"
                        type="month"
                        value="1990-10"
                        @input="${this.handleMonthInput}"
                    />
                    <md-month-picker
                        id="monthPicker"
                        value="1990-10"
                        @onMonthPickerButtonCancelClick="${this.handleMonthPickerButtonCancelClick}"
                        @onMonthPickerButtonOkClick="${this.handleMonthPickerButtonOkClick}"
                        @onMonthPickerSelection="${this.handleMonthPickerSelection}"
                    ></md-month-picker>
                    <md-button
                        variant="tonal"
                        label="Month Picker"
                        @click="${this.handleMonthPickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-month-picker id="monthPicker2"></md-month-picker>
                    <md-button
                        variant="tonal"
                        label="Month Picker 2"
                        @click="${this.handleMonthPickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `}get month(){return this.querySelector("#month")}get monthPicker(){return this.querySelector("#monthPicker")}get monthPicker2(){return this.querySelector("#monthPicker2")}handleMonthPickerButtonClick(e){this.monthPicker.toggle(e.currentTarget)}handleMonthPickerButtonClick2(e){this.monthPicker2.toggle(e.currentTarget)}handleMonthInput(){this.monthPicker.value=this.month.value}handleMonthPickerButtonCancelClick(){this.month.value=this.monthPicker.value,this.monthPicker.close()}handleMonthPickerButtonOkClick(){this.month.value=this.monthPicker.value,this.monthPicker.close()}handleMonthPickerSelection(){this.month.value=a(this.monthPicker.selection)}});const ya=document.createElement("dev-month-picker");customElements.define("dev-time-picker",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="time">Select time</label>
                    <input
                        id="time"
                        name="time"
                        type="time"
                        value="20:30"
                        @input="${this.handleTimeInput}"
                    />
                    <md-time-picker
                        id="timePicker"
                        value="20:30"
                        @onTimePickerButtonCancelClick="${this.handleTimePickerButtonCancelClick}"
                        @onTimePickerButtonOkClick="${this.handleTimePickerButtonOkClick}"
                        @onTimePickerSelection="${this.handleTimePickerSelection}"
                    ></md-time-picker>
                    <md-button
                        variant="tonal"
                        label="Time Picker"
                        @click="${this.handleTimePickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-time-picker id="timePicker2"></md-time-picker>
                    <md-button
                        variant="tonal"
                        label="Time Picker 2"
                        @click="${this.handleTimePickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `}get time(){return this.querySelector("#time")}get timePicker(){return this.querySelector("#timePicker")}get timePicker2(){return this.querySelector("#timePicker2")}handleTimePickerButtonClick(e){this.timePicker.toggle(e.currentTarget)}handleTimePickerButtonClick2(e){this.timePicker2.toggle(e.currentTarget)}handleTimeInput(){this.timePicker.value=this.time.value}handleTimePickerButtonCancelClick(){this.time.value=this.timePicker.value,this.timePicker.close()}handleTimePickerButtonOkClick(){this.time.value=this.timePicker.value,this.timePicker.close()}handleTimePickerSelection(){this.time.value=n(this.timePicker.selection)}});const ga=document.createElement("dev-time-picker");customElements.define("dev-week-picker",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="week">Select week</label>
                    <input
                        id="week"
                        name="week"
                        type="week"
                        value="1990-W42"
                        @input="${this.handleWeekInput}"
                    />
                    <md-week-picker
                        id="weekPicker"
                        value="1990-W42"
                        @onWeekPickerButtonCancelClick="${this.handleWeekPickerButtonCancelClick}"
                        @onWeekPickerButtonOkClick="${this.handleWeekPickerButtonOkClick}"
                        @onWeekPickerSelection="${this.handleWeekPickerSelection}"
                    ></md-week-picker>
                    <md-button
                        variant="tonal"
                        label="Week Picker"
                        @click="${this.handleWeekPickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-week-picker id="weekPicker2"></md-week-picker>
                    <md-button
                        variant="tonal"
                        label="Week Picker 2"
                        @click="${this.handleWeekPickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `}get week(){return this.querySelector("#week")}get weekPicker(){return this.querySelector("#weekPicker")}get weekPicker2(){return this.querySelector("#weekPicker2")}handleWeekPickerButtonClick(e){this.weekPicker.toggle(e.currentTarget)}handleWeekPickerButtonClick2(e){this.weekPicker2.toggle(e.currentTarget)}handleWeekInput(){this.weekPicker.value=this.week.value}handleWeekPickerButtonCancelClick(){this.week.value=this.weekPicker.value,this.weekPicker.close()}handleWeekPickerButtonOkClick(){this.week.value=this.weekPicker.value,this.weekPicker.close()}handleWeekPickerSelection(){this.week.value=l(this.weekPicker.selection)}});const ka=document.createElement("dev-week-picker");customElements.define("dev-color-picker",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="color">Select color-local</label>
                    <input
                        id="color"
                        name="color-local"
                        type="color-local"
                        value="#6750a4"
                        @input="${this.handleColorLocalInput}"
                    />
                    <md-color-picker
                        id="colorPicker"
                        value="#6750a4"
                        @onColorPickerButtonCancelClick="${this.handleColorPickerButtonCancelClick}"
                        @onColorPickerButtonOkClick="${this.handleColorPickerButtonOkClick}"
                        @onColorPickerSelection="${this.handleColorPickerSelection}"
                    ></md-color-picker>
                    <md-button
                        variant="tonal"
                        label="Color Picker"
                        @click="${this.handleColorPickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-color-picker id="colorPicker2"></md-color-picker>
                    <md-button
                        variant="tonal"
                        label="Color Picker 2"
                        @click="${this.handleColorPickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `}get color(){return this.querySelector("#color")}get colorPicker(){return this.querySelector("#colorPicker")}get colorPicker2(){return this.querySelector("#colorPicker2")}handleColorPickerButtonClick(e){this.colorPicker.toggle(e.currentTarget)}handleColorPickerButtonClick2(e){this.colorPicker2.toggle(e.currentTarget)}handleColorLocalInput(){this.colorPicker.value=this.color.value}handleColorPickerButtonCancelClick(){this.color.value=this.colorPicker.value,this.colorPicker.close()}handleColorPickerButtonOkClick(){this.color.value=this.colorPicker.value,this.colorPicker.close()}handleColorPickerSelection(){this.color.value=this.colorPicker.selection.hex.slice(0,7)}});const fa=document.createElement("dev-color-picker");customElements.define("dev-fab",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-fab
                        variant="small"
                        icon="edit"
                    ></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-fab
                        variant=""
                        icon="edit"
                    ></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-fab
                        variant="large"
                        icon="edit"
                    ></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-fab
                        variant="surface"
                        icon="edit"
                    ></md-fab>
                    <md-fab
                        variant="secondary"
                        icon="edit"
                    ></md-fab>
                    <md-fab
                        variant="tertiary"
                        icon="edit"
                    ></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-fab
                        variant="surface unelevated"
                        icon="edit"
                    ></md-fab>
                    <md-fab
                        variant="secondary unelevated"
                        icon="edit"
                    ></md-fab>
                    <md-fab
                        variant="tertiary unelevated"
                        icon="edit"
                    ></md-fab>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-fab
                        variant="extended"
                        icon="edit"
                        label="Navigate"
                    ></md-fab>
                    <md-fab
                        variant="extended"
                        label="Reroute"
                    ></md-fab>
                </div>
            </div>
        `}});const xa=document.createElement("dev-fab");customElements.define("dev-bottom-app-bar",class extends ii{get bottomAppBar(){return this.querySelector("#bottomAppBar")}get bottomAppBar2(){return this.querySelector("#bottomAppBar2")}render(){return Ft`
            <div class="md-layout-border">
                <md-bottom-app-bar
                    id="bottomAppBar"
                    leadingActions='[{"icon":"check_box"},{"icon":"brush"},{"icon":"mic"},{"icon":"image"}]'
                    trailingActions='[{"component":"fab","variant":"unelevated","icon":"add"}]'
                    @onCardIconButtonClick=${this.bottomAppBarClick}
                    @onCardButtonClick=${this.bottomAppBarClick}
                ></md-bottom-app-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-bottom-app-bar
                            id="bottomAppBar2"
                            leadingActions='[{"icon":"check_box"},{"icon":"brush"},{"icon":"mic"},{"icon":"image"}]'
                            @onCardIconButtonClick=${this.bottomAppBar2Click}
                            @onCardButtonClick=${this.bottomAppBar2Click}
                        ></md-bottom-app-bar>

                        <div class="md-layout-border__item md-layout-border__item--center">
                            <div
                                id="center"
                                class="md-layout-border__item md-layout-border__item--center"
                            >
                                <div class="md-layout-column">
                                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                        <md-button
                                            variant="tonal"
                                            label="Icon buttons and FAB "
                                            @click="${this.handleButtonBottomAppBarClick}"
                                        ></md-button>
                                    </div>
                                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                        <md-button
                                            variant="tonal"
                                            label="Icon buttons and no FAB"
                                            @click="${this.handleButtonBottomAppBar2Click}"
                                        ></md-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonBottomAppBarClick(){this.bottomAppBar.toggle()}handleButtonBottomAppBar2Click(){this.bottomAppBar2.toggle()}bottomAppBarClick(){this.bottomAppBar.close()}bottomAppBar2Click(){this.bottomAppBar2.close()}});const Ca=document.createElement("dev-bottom-app-bar");customElements.define("dev-image",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-image src="https://placehold.co/112"></md-image>
                    <md-image
                        variant="rounded"
                        src="https://placehold.co/112"
                    ></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-image
                        style="width:112px;"
                        variant="rounded"
                        ratio="16/9"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        variant="rounded"
                        ratio="3/2"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        variant="rounded"
                        ratio="4/3"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        variant="rounded"
                        ratio="1/1"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        variant="rounded"
                        ratio="3/4"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        variant="rounded"
                        ratio="2/3"
                        src="https://placehold.co/112"
                    ></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-image
                        style="height:112px;"
                        variant="rounded"
                        ratio="16/9"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        variant="rounded"
                        ratio="3/2"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        variant="rounded"
                        ratio="4/3"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        variant="rounded"
                        ratio="1/1"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        variant="rounded"
                        ratio="3/4"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        variant="rounded"
                        ratio="2/3"
                        src="https://placehold.co/112"
                    ></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-image
                        style="width:112px;"
                        ratio="16/9"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        ratio="3/2"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        ratio="4/3"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        ratio="1/1"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        ratio="3/4"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="width:112px;"
                        ratio="2/3"
                        src="https://placehold.co/112"
                    ></md-image>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-image
                        style="height:112px;"
                        ratio="16/9"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        ratio="3/2"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        ratio="4/3"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        ratio="1/1"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        ratio="3/4"
                        src="https://placehold.co/112"
                    ></md-image>
                    <md-image
                        style="height:112px;"
                        ratio="2/3"
                        src="https://placehold.co/112"
                    ></md-image>
                </div>
            </div>
        `}});const $a=document.createElement("dev-image");customElements.define("dev-popper",class extends ii{get tooltip(){return this.querySelector("#tooltip")}render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tooltip
                        id="tooltip"
                        variant="plain"
                        >tooltip</md-tooltip
                    >
                    <md-button
                        label="button"
                        @click="${this.handleButtonClick}"
                    ></md-button>
                </div>
            </div>
        `}handleButtonClick(e){this.tooltip.toggle(e.currentTarget)}});const wa=document.createElement("dev-popper");customElements.define("dev-badge",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-badge label=""></md-badge>
                    <md-badge label="1"></md-badge>
                    <md-badge label="11"></md-badge>
                    <md-badge label="111"></md-badge>
                    <md-badge label="1111"></md-badge>
                </div>
            </div>
        `}});const Sa=document.createElement("dev-badge");customElements.define("dev-form",class extends ii{render(){return Ft`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Checkbox Input -->
                        <label for="subscribe">Subscribe:</label>
                        <input
                            type="checkbox"
                            id="subscribe"
                            name="subscribe"
                            value="newsletter"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Color Input -->
                        <label for="favcolor">Favorite Color:</label>
                        <input
                            type="color"
                            id="favcolor"
                            name="favcolor"
                            value="#ff0000"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Date Input -->
                        <label for="birthdate">Birthdate:</label>
                        <input
                            type="date"
                            id="birthdate"
                            name="birthdate"
                            value="2000-01-01"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Datetime-local Input -->
                        <label for="appointment">Appointment:</label>
                        <input
                            type="datetime-local"
                            id="appointment"
                            name="appointment"
                            value="2023-06-22T12:00"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Email Input -->
                        <label for="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value="example@example.com"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- File Input -->
                        <label for="resume">Upload Resume:</label>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Month Input -->
                        <label for="startmonth">Start Month:</label>
                        <input
                            type="month"
                            id="startmonth"
                            name="startmonth"
                            value="2023-06"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Number Input -->
                        <label for="quantity">Quantity:</label>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            value="1"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Password Input -->
                        <label for="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value=""
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Radio Input -->
                        <label for="gender_male">Male:</label>
                        <input
                            type="radio"
                            id="gender_male"
                            name="gender"
                            value="male"
                        />
                        <label for="gender_female">Female:</label>
                        <input
                            type="radio"
                            id="gender_female"
                            name="gender"
                            value="female"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Range Input -->
                        <label for="volume">Volume:</label>
                        <input
                            type="range"
                            id="volume"
                            name="volume"
                            value="50"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Search Input -->
                        <label for="search">Search:</label>
                        <input
                            type="search"
                            id="search"
                            name="search"
                            value=""
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Tel Input -->
                        <label for="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value="123-456-7890"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Text Input -->
                        <label for="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value="user123"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Time Input -->
                        <label for="alarm">Alarm:</label>
                        <input
                            type="time"
                            id="alarm"
                            name="alarm"
                            value="07:00"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- URL Input -->
                        <label for="website">Website:</label>
                        <input
                            type="url"
                            id="website"
                            name="website"
                            value="https://example.com"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Week Input -->
                        <label for="week">Week:</label>
                        <input
                            type="week"
                            id="week"
                            name="week"
                            value="2023-W25"
                        />
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Select with Options -->
                        <label for="cars">Choose a car:</label>
                        <select
                            id="cars"
                            name="cars"
                        >
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Select with Optgroup and Options -->
                        <label for="fruits">Choose a fruit:</label>
                        <select
                            id="fruits"
                            name="fruits"
                        >
                            <optgroup label="Citrus">
                                <option value="orange">Orange</option>
                                <option value="lemon">Lemon</option>
                                <option value="lime">Lime</option>
                            </optgroup>
                            <optgroup label="Berries">
                                <option value="strawberry">Strawberry</option>
                                <option value="blueberry">Blueberry</option>
                                <option value="raspberry">Raspberry</option>
                            </optgroup>
                        </select>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <!-- Textarea -->
                        <label for="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            cols="50"
                        >
Enter your message here...</textarea
                        >
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button
                            label="Reset"
                            type="reset"
                            variant="outlined"
                        ></md-button>
                        <md-button
                            label="Submit"
                            type="submit"
                            variant="filled"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){const t=JSON.stringify(e.detail.data);console.log(t)}});const Pa=document.createElement("dev-form");customElements.define("dev-checkbox",class extends ii{render(){return Ft`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-checkbox
                            name="checkbox"
                            value="item0"
                            indeterminate
                        ></md-checkbox>
                        <md-checkbox
                            name="checkbox"
                            value="item1"
                            checked
                        ></md-checkbox>
                        <md-checkbox
                            name="checkbox"
                            value="item2"
                        ></md-checkbox>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button
                            label="Reset"
                            type="reset"
                            variant="outlined"
                        ></md-button>
                        <md-button
                            label="Submit"
                            type="submit"
                            variant="filled"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const Ba=document.createElement("dev-checkbox");customElements.define("dev-radio-button",class extends ii{render(){return Ft`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-radio-button
                            name="radio-button"
                            value="item1"
                            checked
                        ></md-radio-button>
                        <md-radio-button
                            name="radio-button"
                            value="item2"
                        ></md-radio-button>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button
                            label="Reset"
                            type="reset"
                            variant="outlined"
                        ></md-button>
                        <md-button
                            label="Submit"
                            type="submit"
                            variant="filled"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const Ia=document.createElement("dev-radio-button");customElements.define("dev-switch",class extends ii{render(){return Ft`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-switch
                            name="switch"
                            value="item1"
                            checked
                        ></md-switch>
                        <md-switch
                            name="switch"
                            value="item2"
                        ></md-switch>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-switch
                            icons='["check","close"]'
                            name="switch2"
                            value="item1"
                            checked
                        ></md-switch>
                        <md-switch
                            icons='["check","close"]'
                            name="switch2"
                            value="item2"
                        ></md-switch>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button
                            label="Reset"
                            type="reset"
                            variant="outlined"
                        ></md-button>
                        <md-button
                            label="Submit"
                            type="submit"
                            variant="filled"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const Ta=document.createElement("dev-switch");customElements.define("dev-slider",class extends ii{render(){return Ft`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider0"
                            min="-5000"
                            max="5000"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider1"
                            min="0"
                            max="5000"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider2"
                            min="0"
                            max="5000"
                            step="500"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider3"
                            min="1000"
                            max="10000"
                            value="[2000,8000]"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button
                            label="Reset"
                            type="reset"
                            variant="outlined"
                        ></md-button>
                        <md-button
                            label="Submit"
                            type="submit"
                            variant="filled"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const Ma=document.createElement("dev-slider");customElements.define("dev-form2",class extends ii{render(){return Ft`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider0"
                            min="-5000"
                            max="5000"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider1"
                            min="0"
                            max="5000"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider2"
                            min="0"
                            max="5000"
                            step="500"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <br />
                        <br />
                        <md-slider
                            name="slider3"
                            min="1000"
                            max="10000"
                            value="[2000,8000]"
                        ></md-slider>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-switch
                            name="switch"
                            value="item1"
                            checked
                        ></md-switch>
                        <md-switch
                            name="switch"
                            value="item2"
                        ></md-switch>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-switch
                            icons='["check","close"]'
                            name="switch2"
                            value="item1"
                            checked
                        ></md-switch>
                        <md-switch
                            icons='["check","close"]'
                            name="switch2"
                            value="item2"
                        ></md-switch>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-radio-button
                            name="radio-button"
                            value="item1"
                            checked
                        ></md-radio-button>
                        <md-radio-button
                            name="radio-button"
                            value="item2"
                        ></md-radio-button>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-checkbox
                            name="checkbox"
                            value="item0"
                            indeterminate
                        ></md-checkbox>
                        <md-checkbox
                            name="checkbox"
                            value="item1"
                            checked
                        ></md-checkbox>
                        <md-checkbox
                            name="checkbox"
                            value="item2"
                        ></md-checkbox>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button
                            label="Reset"
                            type="reset"
                            variant="outlined"
                        ></md-button>
                        <md-button
                            label="Submit"
                            type="submit"
                            variant="filled"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const Aa=document.createElement("dev-form2");customElements.define("dev-progress-indicator",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator value="25"></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator value="50"></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator value="100"></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator variant="circular"></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator
                        variant="circular"
                        value="25"
                    ></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator
                        variant="circular"
                        value="50"
                    ></md-progress-indicator>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-progress-indicator
                        variant="circular"
                        value="100"
                    ></md-progress-indicator>
                </div>
            </div>
        `}});const La=document.createElement("dev-progress-indicator");class Ea extends Ii{constructor(e){if(super(e),this.it=Ht,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Ht||null==e)return this._t=void 0,this.it=e;if(e===Nt)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ea.directiveName="unsafeHTML",Ea.resultType=1;const Ra=Bi(Ea);customElements.define("dev-gesture",class extends ii{constructor(){super(),new Hi(this,{containerSelector:"#card",updateStyle:!0}),new Hi(this,{containerSelector:"#card2",updateStyle:!0,resize:[],drag:["x"]}),new Hi(this,{containerSelector:"#card3",updateStyle:!0,resize:[],drag:["y"]}),new Hi(this,{containerSelector:"#card4",updateStyle:!0,drag:[],resize:["e","w"]}),new Hi(this,{containerSelector:"#card5",updateStyle:!0,drag:[],resize:["s","n"]}),new Hi(this,{containerSelector:"#card6",updateStyle:!0,dragHandleSelector:'[name="drag_indicator"]'}),new Hi(this,{containerSelector:"#card7",updateStyle:!0,dragAfterLongPress:!0,resizeAfterLongPress:!0}),new Hi(this,{containerSelector:"#card8",updateStyle:!0,selection:!0,dragAfterLongPress:!0,resizeAfterLongPress:!0,selectionAfterLongPress:!0,dragHandleSelector:'[name="drag_indicator"]'})}render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card"
                        style="width:224px;height:224px"
                        @onDragStart="${this.handleCardEvent}"
                        @onDrag="${this.handleCardEvent}"
                        @onDragEnd="${this.handleCardEvent}"
                        @onResizeStart="${this.handleCardEvent}"
                        @onResize="${this.handleCardEvent}"
                        @onResizeEnd="${this.handleCardEvent}"
                        @onLongPress="${this.handleCardEvent}"
                        @onTap="${this.handleCardEvent}"
                        @onDoubleTap="${this.handleCardEvent}"
                        @onSwipeTop="${this.handleCardEvent}"
                        @onSwipeRight="${this.handleCardEvent}"
                        @onSwipeBottom="${this.handleCardEvent}"
                        @onSwipeLeft="${this.handleCardEvent}"
                        @onSelectionStart="${this.handleCardEvent}"
                        @onSelection="${this.handleCardEvent}"
                        @onSelectionEnd="${this.handleCardEvent}"
                        >${Ra(this.cardLog)}</md-card
                    >
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card2"
                        label="no resize, drag only x"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card3"
                        label="no resize, drag only y"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card4"
                        label="no drag, resize only e/w"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card5"
                        label="no drag, resize only s/n"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card6"
                        label="drag handle"
                        leadingActions='[{"component":"icon","icon":"drag_indicator","name":"drag_indicator"}]'
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card7"
                        label="drag/resize After Long Press"
                        style="width:224px;height:224px"
                    ></md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card
                        id="card8"
                        leadingActions='[{"component":"icon","icon":"drag_indicator","name":"drag_indicator"}]'
                        style="width:224px;height:224px"
                        @onDragStart="${this.handleCardEvent8}"
                        @onDrag="${this.handleCardEvent8}"
                        @onDragEnd="${this.handleCardEvent8}"
                        @onResizeStart="${this.handleCardEvent8}"
                        @onResize="${this.handleCardEvent8}"
                        @onResizeEnd="${this.handleCardEvent8}"
                        @onLongPress="${this.handleCardEvent8}"
                        @onTap="${this.handleCardEvent8}"
                        @onDoubleTap="${this.handleCardEvent8}"
                        @onSwipeTop="${this.handleCardEvent8}"
                        @onSwipeRight="${this.handleCardEvent8}"
                        @onSwipeBottom="${this.handleCardEvent8}"
                        @onSwipeLeft="${this.handleCardEvent8}"
                        @onSelectionStart="${this.handleCardEvent8}"
                        @onSelection="${this.handleCardEvent8}"
                        @onSelectionEnd="${this.handleCardEvent8}"
                        >${Ra(this.cardLog8)}</md-card
                    >
                </div>
            </div>
        `}cardLog="";handleCardEvent(e){const t=e.currentTarget.querySelector(".md-card__inner");this.cardLog+=e.type+"<br>",this.requestUpdate(),window.requestAnimationFrame((()=>{t.scrollTop=t.scrollHeight}))}cardLog8="";handleCardEvent8(e){const t=e.currentTarget.querySelector(".md-card__inner");this.cardLog8+=e.type+"<br>",this.requestUpdate(),window.requestAnimationFrame((()=>{t.scrollTop=t.scrollHeight}))}});const Da=document.createElement("dev-gesture");customElements.define("dev-list",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{avatar:"https://placehold.co/96",label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{avatar:"https://placehold.co/96",label:"Headline",subLabel:"Supporting text"},{avatar:"https://placehold.co/96",label:"Headline"}]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{avatar:"https://placehold.co/96",trailingCheckbox:!0,label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{avatar:"https://placehold.co/96",trailingCheckbox:!0,label:"Headline",subLabel:"Supporting text"},{avatar:"https://placehold.co/96",trailingCheckbox:!0,label:"Headline"}]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{thumbnail:"https://placehold.co/96",label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{thumbnail:"https://placehold.co/96",label:"Headline",subLabel:"Supporting text"},{thumbnail:"https://placehold.co/96",label:"Headline"}]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{thumbnail:"https://placehold.co/96",trailingCheckbox:!0,label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{thumbnail:"https://placehold.co/96",trailingCheckbox:!0,label:"Headline",subLabel:"Supporting text"},{thumbnail:"https://placehold.co/96",trailingCheckbox:!0,label:"Headline"}]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{video:"https://placehold.co/96",label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{video:"https://placehold.co/96",label:"Headline",subLabel:"Supporting text"},{video:"https://placehold.co/96",label:"Headline"}]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{video:"https://placehold.co/96",trailingCheckbox:!0,label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{video:"https://placehold.co/96",trailingCheckbox:!0,label:"Headline",subLabel:"Supporting text"},{video:"https://placehold.co/96",trailingCheckbox:!0,label:"Headline"}]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{icon:"image",label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{icon:"image",label:"Headline",subLabel:"Supporting text"},{icon:"image",label:"Headline"}]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{icon:"image",trailingCheckbox:!0,label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{icon:"image",trailingCheckbox:!0,label:"Headline",subLabel:"Supporting text"},{icon:"image",trailingCheckbox:!0,label:"Headline"}]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list .list="${[{label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{label:"Headline",subLabel:"Supporting text"},{label:"Headline"}]}"></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{trailingCheckbox:!0,label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{trailingCheckbox:!0,label:"Headline",subLabel:"Supporting text"},{trailingCheckbox:!0,label:"Headline"}]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{leadingCheckbox:!0,label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{leadingCheckbox:!0,label:"Headline",subLabel:"Supporting text"},{leadingCheckbox:!0,label:"Headline"}]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{leadingCheckbox:!0,text:"100+",label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{leadingCheckbox:!0,text:"100+",label:"Headline",subLabel:"Supporting text"},{leadingCheckbox:!0,text:"100+",label:"Headline"}]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{leadingRadioButton:!0,label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{leadingRadioButton:!0,label:"Headline",subLabel:"Supporting text"},{leadingRadioButton:!0,label:"Headline"}]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{leadingRadioButton:!0,text:"100+",label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{leadingRadioButton:!0,text:"100+",label:"Headline",subLabel:"Supporting text"},{leadingRadioButton:!0,text:"100+",label:"Headline"}]}"
                    ></md-list>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{trailingSwitch:!0,label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{trailingSwitch:!0,label:"Headline",subLabel:"Supporting text"},{trailingSwitch:!0,label:"Headline"}]}"
                    ></md-list>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-list
                        .list="${[{trailingSwitch:!0,icon:"image",label:"Headline",subLabel:"Supporting text that is long enough to fill up multiple lines"},{trailingSwitch:!0,icon:"image",label:"Headline",subLabel:"Supporting text"},{trailingSwitch:!0,icon:"image",label:"Headline"}]}"
                    ></md-list>
                </div>
            </div>
        `}});const Fa=document.createElement("dev-list");customElements.define("dev-selection",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="No selection">
                        <md-list .list="${[{label:"Headline 1"},{label:"Headline 2"},{label:"Headline 3"},{label:"Headline 4"},{label:"Headline 5"},{label:"Headline 6"}]}"></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Single selection (keyboard)">
                        <md-list
                            singleSelection
                            .list="${[{label:"Headline 1"},{label:"Headline 2"},{label:"Headline 3"},{label:"Headline 4"},{label:"Headline 5"},{label:"Headline 6"}]}"
                        ></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Single+multi selection (keyboard)">
                        <md-list
                            singleSelection
                            multiSelection
                            .list="${[{label:"Headline 1"},{label:"Headline 2"},{label:"Headline 3"},{label:"Headline 4"},{label:"Headline 5"},{label:"Headline 6"}]}"
                        ></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Single+multi+range selection (keyboard)">
                        <md-list
                            singleSelection
                            multiSelection
                            rangeSelection
                            .list="${[{label:"Headline 1"},{label:"Headline 2"},{label:"Headline 3"},{label:"Headline 4"},{label:"Headline 5"},{label:"Headline 6"}]}"
                        ></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Single+multi+range+all selection (keyboard)">
                        <md-list
                            singleSelection
                            multiSelection
                            rangeSelection
                            allSelection
                            .list="${[{label:"Headline 1"},{label:"Headline 2"},{label:"Headline 3"},{label:"Headline 4"},{label:"Headline 5"},{label:"Headline 6"}]}"
                        ></md-list>
                    </md-card>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-card label="Selection mode (mouse)">
                        <md-list
                            selection
                            .list="${[{label:"Headline 1"},{label:"Headline 2"},{label:"Headline 3"},{label:"Headline 4"},{label:"Headline 5"},{label:"Headline 6"}]}"
                        ></md-list>
                    </md-card>
                </div>
            </div>
        `}});const Na=document.createElement("dev-selection");customElements.define("dev-tree",class extends ii{constructor(){super(),this.list1=[{label:"Item 1",children:[{label:"Item 1.1",expanded:!0,children:[{label:"Item 1.1.1"},{label:"Item 1.1.2"}]},{label:"Item 1.2",children:[{label:"Item 1.2.1"},{label:"Item 1.2.2"}]}]},{label:"Item 2",children:[{label:"Item 2.1",children:[{label:"Item 2.1.1",selected:!0},{label:"Item 2.1.2"}]},{label:"Item 2.2",children:[{label:"Item 2.2.1"},{label:"Item 2.2.2"}]}]},{label:"Item 3",children:[{label:"Item 3.1",children:[{label:"Item 3.1.1"},{label:"Item 3.1.2"}]},{label:"Item 3.2",children:[{label:"Item 3.2.1"},{label:"Item 3.2.2"}]}]}],this.list2=[{label:"Item 1",children:[{label:"Item 1.1",expanded:!0,children:[{label:"Item 1.1.1"},{label:"Item 1.1.2"}]},{label:"Item 1.2",children:[{label:"Item 1.2.1"},{label:"Item 1.2.2"}]}]},{label:"Item 2",children:[{label:"Item 2.1",children:[{label:"Item 2.1.1",selected:!0},{label:"Item 2.1.2"}]},{label:"Item 2.2",children:[{label:"Item 2.2.1"},{label:"Item 2.2.2"}]}]},{label:"Item 3",children:[{label:"Item 3.1",children:[{label:"Item 3.1.1"},{label:"Item 3.1.2"}]},{label:"Item 3.2",children:[{label:"Item 3.2.1"},{label:"Item 3.2.2"}]}]}],this.list3=[{label:"Item 1",children:[{label:"Item 1.1",expanded:!0,children:[{label:"Item 1.1.1"},{label:"Item 1.1.2"}]},{label:"Item 1.2",children:[{label:"Item 1.2.1"},{label:"Item 1.2.2"}]}]},{label:"Item 2",children:[{label:"Item 2.1",children:[{label:"Item 2.1.1",selected:!0},{label:"Item 2.1.2"}]},{label:"Item 2.2",children:[{label:"Item 2.2.1"},{label:"Item 2.2.2"}]}]},{label:"Item 3",children:[{label:"Item 3.1",children:[{label:"Item 3.1.1"},{label:"Item 3.1.2"}]},{label:"Item 3.2",children:[{label:"Item 3.2.1"},{label:"Item 3.2.2"}]}]}],this.list4=[{label:"Item 1",children:[{label:"Item 1.1",expanded:!0,children:[{label:"Item 1.1.1"},{label:"Item 1.1.2"}]},{label:"Item 1.2",children:[{label:"Item 1.2.1"},{label:"Item 1.2.2"}]}]},{label:"Item 2",children:[{label:"Item 2.1",children:[{label:"Item 2.1.1",selected:!0},{label:"Item 2.1.2"}]},{label:"Item 2.2",children:[{label:"Item 2.2.1"},{label:"Item 2.2.2"}]}]},{label:"Item 3",children:[{label:"Item 3.1",children:[{label:"Item 3.1.1"},{label:"Item 3.1.2"}]},{label:"Item 3.2",children:[{label:"Item 3.2.1"},{label:"Item 3.2.2"}]}]}]}render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        variant="plain"
                        .list="${this.list1}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        variant="accordion"
                        .list="${this.list2}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        variant="tree"
                        .list="${this.list3}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        variant="level"
                        .list="${this.list4}"
                    ></md-tree>
                </div>
            </div>
        `}});const Ha=document.createElement("dev-tree");customElements.define("dev-navigation",class extends ii{constructor(){super()}render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-navigation-bar__tree"
                        variant="plain"
                        .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-navigation-bar__tree"
                        variant="plain"
                        .list="${[{icon:"image",selected:!0},{icon:"image",badge:0},{icon:"image",badge:1},{icon:"image",badge:1111}]}"
                    ></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-navigation-drawer__tree"
                        variant="plain"
                        .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-navigation-drawer__tree"
                        variant="plain"
                        .list="${[{label:"Item 1",selected:!0},{label:"Item 2",badge:0},{label:"Item 3",badge:1},{label:"Item 4",badge:1111}]}"
                    ></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-navigation-rail__tree"
                        variant="plain"
                        .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-navigation-rail__tree"
                        variant="plain"
                        .list="${[{icon:"image",selected:!0},{icon:"image",badge:0},{icon:"image",badge:1},{icon:"image",badge:1111}]}"
                    ></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-menu__tree"
                        variant="plain"
                        .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-menu__tree"
                        variant="plain"
                        .list="${[{label:"Item 1",selected:!0},{label:"Item 2",badge:0},{label:"Item 3",badge:1},{label:"Item 4",badge:1111}]}"
                    ></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-tabs__tree md-tabs__tree--primary"
                        variant="plain"
                        .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-tabs__tree md-tabs__tree--primary"
                        variant="plain"
                        .list="${[{label:"Item 1",selected:!0},{label:"Item 2",badge:0},{label:"Item 3",badge:1},{label:"Item 4",badge:1111}]}"
                    ></md-tree>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-tabs__tree md-tabs__tree--secondary"
                        variant="plain"
                        .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    ></md-tree>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tree
                        class="md-tabs__tree md-tabs__tree--secondary"
                        variant="plain"
                        .list="${[{label:"Item 1",selected:!0},{label:"Item 2",badge:0},{label:"Item 3",badge:1},{label:"Item 4",badge:1111}]}"
                    ></md-tree>
                </div>
            </div>
        `}});const qa=document.createElement("dev-navigation");customElements.define("dev-navigation-bar",class extends ii{get navigationBar(){return this.querySelector("#navigationBar")}get navigationBar2(){return this.querySelector("#navigationBar2")}render(){return Ft`
            <div class="md-layout-border">
                <md-navigation-bar
                    id="navigationBar"
                    .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    @onCardIconButtonClick=${this.navigationBarClick}
                    @onCardButtonClick=${this.navigationBarClick}
                ></md-navigation-bar>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-navigation-bar
                            id="navigationBar2"
                            .list="${[{icon:"image",selected:!0},{icon:"image",badge:0},{icon:"image",badge:1},{icon:"image",badge:1111}]}"
                            @onCardIconButtonClick=${this.navigationBar2Click}
                            @onCardButtonClick=${this.navigationBar2Click}
                        ></md-navigation-bar>

                        <div
                            id="center"
                            class="md-layout-border__item md-layout-border__item--center"
                        >
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Navigation bar label text"
                                        @click="${this.handleButtonNavigationBarClick}"
                                    ></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Navigation bar no label text"
                                        @click="${this.handleButtonNavigationBar2Click}"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonNavigationBarClick(){this.navigationBar.toggle()}handleButtonNavigationBar2Click(){this.navigationBar2.toggle()}navigationBarClick(){this.navigationBar.close()}navigationBar2Click(){this.navigationBar2.close()}});const Oa=document.createElement("dev-navigation-bar");customElements.define("dev-navigation-drawer",class extends ii{get navigationDrawer(){return this.querySelector("#navigationDrawer")}get navigationDrawer2(){return this.querySelector("#navigationDrawer2")}render(){return Ft`
            <div class="md-layout-border">
                <md-navigation-drawer
                    id="navigationDrawer"
                    .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    @onCardIconButtonClick=${this.navigationDrawerClick}
                    @onCardButtonClick=${this.navigationDrawerClick}
                ></md-navigation-drawer>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-navigation-drawer
                            id="navigationDrawer2"
                            variant="modal"
                            .list="${[{label:"Item 1",selected:!0},{label:"Item 2",badge:0},{label:"Item 3",badge:1},{label:"Item 4",badge:1111}]}"
                            @onCardIconButtonClick=${this.navigationDrawer2Click}
                            @onCardButtonClick=${this.navigationDrawer2Click}
                        ></md-navigation-drawer>

                        <div
                            id="center"
                            class="md-layout-border__item md-layout-border__item--center"
                        >
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Standard navigation drawer"
                                        @click="${this.handleButtonNavigationDrawerClick}"
                                    ></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Modal navigation drawer"
                                        @click="${this.handleButtonNavigationDrawer2Click}"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonNavigationDrawerClick(){this.navigationDrawer.toggle()}handleButtonNavigationDrawer2Click(){this.navigationDrawer2.toggle()}navigationDrawerClick(){this.navigationDrawer.close()}navigationDrawer2Click(){this.navigationDrawer2.close()}});const Ya=document.createElement("dev-navigation-drawer");customElements.define("dev-navigation-rail",class extends ii{get navigationRail(){return this.querySelector("#navigationRail")}get navigationRail2(){return this.querySelector("#navigationRail2")}render(){return Ft`
            <div class="md-layout-border">
                <md-navigation-rail
                    id="navigationRail"
                    .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    @onCardIconButtonClick=${this.navigationRailClick}
                    @onCardButtonClick=${this.navigationRailClick}
                ></md-navigation-rail>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-navigation-rail
                            id="navigationRail2"
                            .list="${[{icon:"image",selected:!0},{icon:"image",badge:0},{icon:"image",badge:1},{icon:"image",badge:1111}]}"
                            @onCardIconButtonClick=${this.navigationRail2Click}
                            @onCardButtonClick=${this.navigationRail2Click}
                        ></md-navigation-rail>

                        <div
                            id="center"
                            class="md-layout-border__item md-layout-border__item--center"
                        >
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Navigation rail label text"
                                        @click="${this.handleButtonNavigationRailClick}"
                                    ></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Navigation rail no label text"
                                        @click="${this.handleButtonNavigationRail2Click}"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonNavigationRailClick(){this.navigationRail.toggle()}handleButtonNavigationRail2Click(){this.navigationRail2.toggle()}navigationRailClick(){this.navigationRail.close()}navigationRail2Click(){this.navigationRail2.close()}});const Ua=document.createElement("dev-navigation-rail");customElements.define("dev-menu",class extends ii{get menu(){return this.querySelector("#menu")}get menu2(){return this.querySelector("#menu2")}render(){return Ft`
            <div class="md-layout-border">
                <md-menu
                    id="menu"
                    .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    @onCardIconButtonClick=${this.menuClick}
                    @onCardButtonClick=${this.menuClick}
                ></md-menu>

                <div class="md-layout-border__item md-layout-border__item--center">
                    <div class="md-layout-border">
                        <md-menu
                            id="menu2"
                            .list="${[{label:"Item 1",selected:!0},{label:"Item 2",badge:0},{label:"Item 3",badge:1},{label:"Item 4",badge:1111}]}"
                            @onCardIconButtonClick=${this.menu2Click}
                            @onCardButtonClick=${this.menu2Click}
                        ></md-menu>

                        <div
                            id="center"
                            class="md-layout-border__item md-layout-border__item--center"
                        >
                            <div class="md-layout-column">
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Menu icon"
                                        @click="${this.handleButtonMenuClick}"
                                    ></md-button>
                                </div>
                                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                                    <md-button
                                        variant="tonal"
                                        label="Menu no icon"
                                        @click="${this.handleButtonMenu2Click}"
                                    ></md-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}handleButtonMenuClick(e){this.menu.toggle(e.currentTarget)}handleButtonMenu2Click(e){this.menu2.toggle(e.currentTarget)}menuClick(){this.menu.close()}menu2Click(){this.menu2.close()}});const za=document.createElement("dev-menu");customElements.define("dev-tabs",class extends ii{constructor(){super()}render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tabs
                        .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    ></md-tabs>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tabs
                        .list="${[{label:"Item 1",selected:!0},{label:"Item 2",badge:0},{label:"Item 3",badge:1},{label:"Item 4",badge:1111}]}"
                    ></md-tabs>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tabs
                        variant="secondary"
                        .list="${[{icon:"image",label:"Item 1",selected:!0},{icon:"image",label:"Item 2",badge:0},{icon:"image",label:"Item 3",badge:1},{icon:"image",label:"Item 4",badge:1111}]}"
                    ></md-tabs>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded6 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-tabs
                        variant="secondary"
                        .list="${[{label:"Item 1",selected:!0},{label:"Item 2",badge:0},{label:"Item 3",badge:1},{label:"Item 4",badge:1111}]}"
                    ></md-tabs>
                </div>
            </div>
        `}});const Wa=document.createElement("dev-tabs");customElements.define("dev-chips",class extends ii{render(){return Ft`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chips
                        .list="${[{icon:"image",label:"Item 1"},{icon:"image",label:"Item 2"},{icon:"image",label:"Item 3"},{icon:"image",label:"Item 4"}]}"
                    ></md-chips>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chips
                        multiSelection
                        .list="${[{label:"Item 1",selected:!0},{label:"Item 2",selected:!0},{label:"Item 3"},{label:"Item 4"}]}"
                    ></md-chips>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chips
                        .list="${[{avatar:"https://placehold.co/24",label:"Item 1",action:"close"},{avatar:"https://placehold.co/24",label:"Item 2",action:"close"},{avatar:"https://placehold.co/24",label:"Item 3",action:"close"},{avatar:"https://placehold.co/24",label:"Item 4",action:"close"}]}"
                    ></md-chips>
                </div>

                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-chips .list="${[{label:"Item 1"},{label:"Item 2"},{label:"Item 3"},{label:"Item 4"}]}"></md-chips>
                </div>
            </div>
        `}});const Va=document.createElement("dev-chips");customElements.define("dev-text-field",class extends ii{render(){return Ft`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required text="Text" name="text" placeholder="Placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required text="Text" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required text="Text" prefix="Prefix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required text="Text" prefix="Prefix" suffix="Suffix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required text="Text" icon="image" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required text="Text" icon="image" actions='[{"icon":"image"}]' name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field 
                        required text="Text" label="Label" name="text" placeholder="Placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field 
                        required text="Text" label="Label" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required text="Text" label="Label" prefix="Prefix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required text="Text" label="Label" prefix="Prefix" suffix="Suffix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required text="Text" label="Label" icon="image" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field required text="Text" label="Label" icon="image" actions='[{"icon":"image"}]' name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" required text="Text" name="text" placeholder="Placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" required text="Text" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" required text="Text" prefix="Prefix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" required text="Text" prefix="Prefix" suffix="Suffix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" required text="Text" icon="image" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" required text="Text" icon="image" actions='[{"icon":"image"}]' name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" 
                        required text="Text" label="Label" name="text" placeholder="Placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" 
                        required text="Text" label="Label" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" required text="Text" label="Label" prefix="Prefix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" required text="Text" label="Label" prefix="Prefix" suffix="Suffix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" required text="Text" label="Label" icon="image" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" required text="Text" label="Label" icon="image" actions='[{"icon":"image"}]' name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" required text="Text" name="text" placeholder="Placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" required text="Text" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" required text="Text" prefix="Prefix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" required text="Text" prefix="Prefix" suffix="Suffix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" required text="Text" icon="image" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" required text="Text" icon="image" actions='[{"icon":"image"}]' name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" 
                        required text="Text" label="Label" name="text" placeholder="Placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" 
                        required text="Text" label="Label" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" required text="Text" label="Label" prefix="Prefix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" required text="Text" label="Label" prefix="Prefix" suffix="Suffix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" required text="Text" label="Label" icon="image" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" required text="Text" label="Label" icon="image" actions='[{"icon":"image"}]' name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" required text="Text" name="text" placeholder="Placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" required text="Text" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" required text="Text" prefix="Prefix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" required text="Text" prefix="Prefix" suffix="Suffix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" required text="Text" icon="image" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" required text="Text" icon="image" actions='[{"icon":"image"}]' name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" 
                        required text="Text" label="Label" name="text" placeholder="Placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" 
                        required text="Text" label="Label" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" required text="Text" label="Label" prefix="Prefix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" required text="Text" label="Label" prefix="Prefix" suffix="Suffix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" required text="Text" label="Label" icon="image" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded" required text="Text" label="Label" icon="image" actions='[{"icon":"image"}]' name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded filled" required text="Text" name="text" placeholder="Placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded filled" required text="Text" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded filled" required text="Text" prefix="Prefix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded filled" required text="Text" prefix="Prefix" suffix="Suffix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded filled" required text="Text" icon="image" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded filled" required text="Text" icon="image" actions='[{"icon":"image"}]' name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded filled" 
                        required text="Text" label="Label" name="text" placeholder="Placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded filled" 
                        required text="Text" label="Label" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded filled" required text="Text" label="Label" prefix="Prefix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded filled" required text="Text" label="Label" prefix="Prefix" suffix="Suffix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded filled" required text="Text" label="Label" icon="image" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded filled" required text="Text" label="Label" icon="image" actions='[{"icon":"image"}]' name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded outlined" required text="Text" name="text" placeholder="Placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded outlined" required text="Text" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded outlined" required text="Text" prefix="Prefix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded outlined" required text="Text" prefix="Prefix" suffix="Suffix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded outlined" required text="Text" icon="image" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded outlined" required text="Text" icon="image" actions='[{"icon":"image"}]' name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded outlined" 
                        required text="Text" label="Label" name="text" placeholder="Placeholder"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded outlined" 
                        required text="Text" label="Label" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded outlined" required text="Text" label="Label" prefix="Prefix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded outlined" required text="Text" label="Label" prefix="Prefix" suffix="Suffix" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded outlined" required text="Text" label="Label" icon="image" name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="rounded outlined" required text="Text" label="Label" icon="image" actions='[{"icon":"image"}]' name="text" placeholder="Placeholder" value=""></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button
                            label="Reset"
                            type="reset"
                            variant="outlined"
                        ></md-button>
                        <md-button
                            label="Submit"
                            type="submit"
                            variant="filled"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const Ga=document.createElement("dev-text-field");customElements.define("dev-text-field2",class extends ii{render(){return Ft`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field novalue="#ff0000" name="color" placeholder="color" label="Color" text="Color description" type="color"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field novalue="1990-10-17" name="date" placeholder="date" label="Date" text="Date description" type="date"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field novalue="1990-10-17T20:30" name="datetime" placeholder="datetime" label="Datetime" text="Datetime description" type="datetime-local"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field novalue="ndiing.inc@gmail.com" name="email" placeholder="email" label="Email" text="Email description" type="email"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field name="file" multiple placeholder="file" label="File" text="File description" type="file"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field novalue="1990-10" name="month" placeholder="month" label="Month" text="Month description" type="month"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field novalue="1" name="number" placeholder="number" label="Number" text="Number description" type="number"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field novalue="secret" name="password" placeholder="password" label="Password" text="Password description" type="password"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field novalue="what today is it?" name="search" placeholder="search" label="Search" text="Search description" type="search"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field novalue="+6281935155404" name="tel" placeholder="tel" label="Tel" text="Tel description" type="tel"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field novalue="Hello word!" name="text" placeholder="text" label="Text" text="Text description" type="text"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field novalue="20:30" name="time" placeholder="time" label="Time" text="Time description" type="time"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field novalue="https://www.google.com" name="url" placeholder="url" label="Url" text="Url description" type="url"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field novalue="1990-W42" name="week" placeholder="week" label="Week" text="Week description" type="week"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        1
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        1
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        1
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        1
                    </div>
                    
                    

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" novalue="#ff0000" name="color" placeholder="color" label="Color" text="Color description" type="color"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" novalue="1990-10-17" name="date" placeholder="date" label="Date" text="Date description" type="date"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" novalue="1990-10-17T20:30" name="datetime" placeholder="datetime" label="Datetime" text="Datetime description" type="datetime-local"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" novalue="ndiing.inc@gmail.com" name="email" placeholder="email" label="Email" text="Email description" type="email"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" name="file" multiple placeholder="file" label="File" text="File description" type="file"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" novalue="1990-10" name="month" placeholder="month" label="Month" text="Month description" type="month"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" novalue="1" name="number" placeholder="number" label="Number" text="Number description" type="number"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" novalue="secret" name="password" placeholder="password" label="Password" text="Password description" type="password"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" novalue="what today is it?" name="search" placeholder="search" label="Search" text="Search description" type="search"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" novalue="+6281935155404" name="tel" placeholder="tel" label="Tel" text="Tel description" type="tel"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" novalue="Hello word!" name="text" placeholder="text" label="Text" text="Text description" type="text"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" novalue="20:30" name="time" placeholder="time" label="Time" text="Time description" type="time"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" novalue="https://www.google.com" name="url" placeholder="url" label="Url" text="Url description" type="url"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="filled" novalue="1990-W42" name="week" placeholder="week" label="Week" text="Week description" type="week"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        1
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        1
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        1
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        1
                    </div>
                    

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" novalue="#ff0000" name="color" placeholder="color" label="Color" text="Color description" type="color"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" novalue="1990-10-17" name="date" placeholder="date" label="Date" text="Date description" type="date"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" novalue="1990-10-17T20:30" name="datetime" placeholder="datetime" label="Datetime" text="Datetime description" type="datetime-local"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" novalue="ndiing.inc@gmail.com" name="email" placeholder="email" label="Email" text="Email description" type="email"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" name="file" multiple placeholder="file" label="File" text="File description" type="file"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" novalue="1990-10" name="month" placeholder="month" label="Month" text="Month description" type="month"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" novalue="1" name="number" placeholder="number" label="Number" text="Number description" type="number"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" novalue="secret" name="password" placeholder="password" label="Password" text="Password description" type="password"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" novalue="what today is it?" name="search" placeholder="search" label="Search" text="Search description" type="search"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" novalue="+6281935155404" name="tel" placeholder="tel" label="Tel" text="Tel description" type="tel"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" novalue="Hello word!" name="text" placeholder="text" label="Text" text="Text description" type="text"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" novalue="20:30" name="time" placeholder="time" label="Time" text="Time description" type="time"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" novalue="https://www.google.com" name="url" placeholder="url" label="Url" text="Url description" type="url"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field variant="outlined" novalue="1990-W42" name="week" placeholder="week" label="Week" text="Week description" type="week"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        1
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        1
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        1
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        1
                    </div>
                    
                    

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button
                            label="Reset"
                            type="reset"
                            variant="outlined"
                        ></md-button>
                        <md-button
                            label="Submit"
                            type="submit"
                            variant="filled"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const ja=document.createElement("dev-text-field2");customElements.define("dev-text-field3",class extends ii{render(){return Ft`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field name="text" label="Text field" type="text"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field name="textarea" label="Textarea field" type="textarea"></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field 
                            name="select" label="Select field" 
                            type="select"
                            .options="${[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5",selected:!0}]}"
                        ></md-text-field>
                    </div>
                    
                    
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-button
                            label="Reset"
                            type="reset"
                            variant="outlined"
                        ></md-button>
                        <md-button
                            label="Submit"
                            type="submit"
                            variant="filled"
                        ></md-button>
                    </div>
                </div>
            </md-form>
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const Xa=document.createElement("dev-text-field3");Ji.historyApiFallback=!1;const Ka=[{path:"",component:Zi,children:[{path:"icon",component:Qi},{path:"button",component:ea},{path:"icon-button",component:ta},{path:"card",component:ia},{path:"sheet",component:aa},{path:"dialog",component:oa},{path:"top-app-bar",component:na},{path:"side-sheet",component:la},{path:"bottom-sheet",component:da},{path:"segmented-button",component:sa},{path:"snackbar",component:ra},{path:"localization",component:ma},{path:"color",component:ua},{path:"ripple",component:ha},{path:"tooltip",component:pa},{path:"picker",component:_a},{path:"datetime-picker",component:ba},{path:"date-picker",component:va},{path:"month-picker",component:ya},{path:"time-picker",component:ga},{path:"week-picker",component:ka},{path:"color-picker",component:fa},{path:"fab",component:xa},{path:"bottom-app-bar",component:Ca},{path:"image",component:$a},{path:"popper",component:wa},{path:"badge",component:Sa},{path:"form",component:Pa},{path:"checkbox",component:Ba},{path:"radio-button",component:Ia},{path:"switch",component:Ta},{path:"slider",component:Ma},{path:"form2",component:Aa},{path:"progress-indicator",component:La},{path:"gesture",component:Da},{path:"list",component:Fa},{path:"selection",component:Na},{path:"tree",component:Ha},{path:"navigation",component:qa},{path:"navigation-bar",component:Oa},{path:"navigation-drawer",component:Ya},{path:"navigation-rail",component:Ua},{path:"menu",component:za},{path:"tabs",component:Wa},{path:"chips",component:Va},{path:"text-field",component:Ga},{path:"text-field2",component:ja},{path:"text-field3",component:Xa}]},{path:"*",component:Zi}];Ji.init(Ka)})()})();