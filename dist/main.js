/*! For license information please see main.js.LICENSE.txt */
(()=>{var e,t,a={485:(e,t,a)=>{var o={"./zh-Hans.js":[243,243]};function i(e){if(!a.o(o,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],i=t[0];return a.e(t[1]).then((()=>a(i)))}i.keys=()=>Object.keys(o),i.id=485,e.exports=i}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var s=o[e]={exports:{}};return a[e](s,s.exports,i),s.exports}i.m=a,i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,a)=>(i.f[a](e,t),t)),[])),i.u=e=>e+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="@ndiinginc/material:",i.l=(a,o,s,n)=>{if(e[a])e[a].push(o);else{var l,r;if(void 0!==s)for(var d=document.getElementsByTagName("script"),m=0;m<d.length;m++){var c=d[m];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==t+s){l=c;break}}l||(r=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",t+s),l.src=a),e[a]=[o];var u=(t,o)=>{l.onerror=l.onload=null,clearTimeout(h);var i=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((e=>e(o))),t)return t(o)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=u.bind(null,l.onerror),l.onload=u.bind(null,l.onload),r&&document.head.appendChild(l)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={792:0};i.f.j=(t,a)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var s=new Promise(((a,i)=>o=e[t]=[a,i]));a.push(o[2]=s);var n=i.p+i.u(t),l=new Error;i.l(n,(a=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",l.name="ChunkLoadError",l.type=s,l.request=n,o[1](l)}}),"chunk-"+t,t)}};var t=(t,a)=>{var o,s,[n,l,r]=a,d=0;if(n.some((t=>0!==e[t]))){for(o in l)i.o(l,o)&&(i.m[o]=l[o]);r&&r(i)}for(t&&t(a);d<n.length;d++)s=n[d],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0},a=self.webpackChunk_ndiinginc_material=self.webpackChunk_ndiinginc_material||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),(()=>{"use strict";function e(e){const t=e=>String(e).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}T${t(e.getHours())}:${t(e.getMinutes())}`}function t(e){const t=e=>String(e).padStart(2,"0");return`${e.getFullYear()}-${t(e.getMonth()+1)}-${t(e.getDate())}`}function a(e){return`${e.getFullYear()}`}function o(e){return`${e.getFullYear()}-${(e=>String(e).padStart(2,"0"))(e.getMonth()+1)}`}function s(e){const t=e=>String(e).padStart(2,"0");return`${t(e.getHours())}:${t(e.getMinutes())}`}function n(e){let t=e.getFullYear(),a=e.getWeek();return`${t}-W${a<10?"0"+a:a}`}function l(e){return null!=e}function r(e,t,a,o=1){e=Math.round(Math.min(255,Math.max(0,e))),t=Math.round(Math.min(255,Math.max(0,t))),a=Math.round(Math.min(255,Math.max(0,a))),o=Math.min(1,Math.max(0,o));const i=Math.round(255*o).toString(16).padStart(2,"0"),s=`#${e.toString(16).padStart(2,"0")}${t.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}`;return 1===o?s:`${s}${i}`}function d(e,t,a){return(a-e)/(t-e)*100}Date.prototype.setWeek=function(e){if("number"!=typeof e||e<1||e>53)throw new Error("Invalid week number. Week number should be between 1 and 53.");return this.setDate(1),this.setMonth(0),this.setDate(1+7*(e-1)),this},Date.prototype.getWeek=function(){let e=new Date(this.getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);let t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e-t)/864e5-3+(t.getDay()+6)%7)/7)};const m=(e,t,a)=>{let o=e[0];for(let i=1;i<e.length;i++)o+=t[a?a[i-1]:i-1],o+=e[i];return o},c=e=>{return"string"!=typeof(t=e)&&"strTag"in t?m(e.strings,e.values):e;var t},u="lit-localize-status";class h{constructor(e){this.__litLocalizeEventHandler=e=>{"ready"===e.detail.status&&this.host.requestUpdate()},this.host=e}hostConnected(){window.addEventListener(u,this.__litLocalizeEventHandler)}hostDisconnected(){window.removeEventListener(u,this.__litLocalizeEventHandler)}}class p{constructor(){this.settled=!1,this.promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t}))}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}const b=[];for(let e=0;e<256;e++)b[e]=(e>>4&15).toString(16)+(15&e).toString(16);const f="",g="h",_="s";const y=new WeakMap,v=new Map;function k(e,t,a){if(e){const o=a?.id??function(e){const t="string"==typeof e?e:e.strings;let a=v.get(t);return void 0===a&&(a=function(e,t){return(t?g:_)+function(e){let t=0,a=8997,o=0,i=33826,s=0,n=40164,l=0,r=52210;for(let d=0;d<e.length;d++)a^=e.charCodeAt(d),t=435*a,o=435*i,s=435*n,l=435*r,s+=a<<8,l+=i<<8,o+=t>>>16,a=65535&t,s+=o>>>16,i=65535&o,r=l+(s>>>16)&65535,n=65535&s;return b[r>>8]+b[255&r]+b[n>>8]+b[255&n]+b[i>>8]+b[255&i]+b[a>>8]+b[255&a]}("string"==typeof e?e:e.join(f))}(t,"string"!=typeof e&&!("strTag"in e)),v.set(t,a)),a}(t),i=e[o];if(i){if("string"==typeof i)return i;if("strTag"in i)return m(i.strings,t.values,i.values);{let e=y.get(i);return void 0===e&&(e=i.values,y.set(i,e)),{...i,values:e.map((e=>t.values[e]))}}}}return c(t)}function j(e){window.dispatchEvent(new CustomEvent(u,{detail:e}))}let x,S,C,w,P,$="",A=new p;A.resolve();let F=0;let T=c,I=!1;const B={Afrikaans:"af",Akan:"ak",Albanian:"sq",Amharic:"am",Arabic:"ar",Armenian:"hy",Assamese:"as",Aymara:"ay",Azerbaijani:"az",Bambara:"bm",Bangla:"bn",Basque:"eu",Belarusian:"be",Bhojpuri:"bh",Bosnian:"bs",Bulgarian:"bg",Burmese:"my",Catalan:"ca",Cebuano:"ceb","Central Kurdish":"ckb","Chinese (Simplified)":"zh-Hans","Chinese (Traditional)":"zh-Hant",Corsican:"co",Croatian:"hr",Czech:"cs",Danish:"da",Divehi:"dv",Dogri:"doi",Dutch:"nl",English:"en",Esperanto:"eo",Estonian:"et",Ewe:"ee",Filipino:"fil",Finnish:"fi",French:"fr",Galician:"gl",Ganda:"lg",Georgian:"ka",German:"de","Goan Konkani":"gom",Greek:"el",Guarani:"gn",Gujarati:"gu","Haitian Creole":"ht",Hausa:"ha",Hawaiian:"haw",Hebrew:"he",Hindi:"hi",Hmong:"hmn",Hungarian:"hu",Icelandic:"is",Igbo:"ig",Iloko:"ilo",Indonesian:"id",Irish:"ga",Italian:"it",Japanese:"ja",Javanese:"jv",Kannada:"kn",Kazakh:"kk",Khmer:"km",Kinyarwanda:"rw",Korean:"ko",Krio:"kri",Kurdish:"ku",Kyrgyz:"ky",Lao:"lo",Latin:"la",Latvian:"lv",Lingala:"ln",Lithuanian:"lt",Luxembourgish:"lb",Macedonian:"mk",Maithili:"mai",Malagasy:"mg",Malay:"ms",Malayalam:"ml",Maltese:"mt","Manipuri (Meitei Mayek)":"mni",Māori:"mi",Marathi:"mr",Mizo:"lus",Mongolian:"mn",Nepali:"ne","Northern Sotho":"nso",Norwegian:"no",Nyanja:"ny",Odia:"or",Oromo:"om",Pashto:"ps",Persian:"fa",Polish:"pl",Portuguese:"pt",Punjabi:"pa",Quechua:"qu",Romanian:"ro",Russian:"ru",Samoan:"sm",Sanskrit:"sa","Scottish Gaelic":"gd",Serbian:"sr",Shona:"sn",Sindhi:"sd",Sinhala:"si",Slovak:"sk",Slovenian:"sl",Somali:"so","Southern Sotho":"st",Spanish:"es",Sundanese:"su",Swahili:"sw",Swedish:"sv",Tajik:"tg",Tamil:"ta",Tatar:"tt",Telugu:"te",Thai:"th",Tigrinya:"ti",Tsonga:"ts",Turkish:"tr",Turkmen:"tk",Ukrainian:"uk",Urdu:"ur",Uyghur:"ug",Uzbek:"uz",Vietnamese:"vi",Welsh:"cy","Western Frisian":"fy",Xhosa:"xh",Yiddish:"yi",Yoruba:"yo",Zulu:"zu"},{getLocale:M,setLocale:L}=(E={sourceLocale:"en",targetLocales:["zh-Hans"],loadLocale:e=>i(485)(`./${e}.js`)},function(e){if(I)throw new Error("lit-localize can only be configured once");T=(e,t)=>k(P,e,t),I=!0}(),$=S=E.sourceLocale,C=new Set(E.targetLocales),C.add(E.sourceLocale),w=E.loadLocale,{getLocale:()=>$,setLocale:e=>{if(e===(x??$))return A.promise;if(!C||!w)throw new Error("Internal error");if(!C.has(e))throw new Error("Invalid locale code");F++;const t=F;return x=e,A.settled&&(A=new p),j({status:"loading",loadingLocale:e}),(e===S?Promise.resolve({templates:void 0}):w(e)).then((a=>{F===t&&($=e,x=void 0,P=a.templates,j({status:"ready",readyLocale:e}),A.resolve())}),(a=>{F===t&&(j({status:"error",errorLocale:e,errorMessage:a.toString()}),A.reject(a))})),A.promise}});var E;function O(e){return e<0?-1:0===e?0:1}function R(e,t,a){return(1-a)*e+a*t}function D(e,t,a){return a<e?e:a>t?t:a}function N(e){return(e%=360)<0&&(e+=360),e}function q(e){return(e%=360)<0&&(e+=360),e}function H(e,t){return 180-Math.abs(Math.abs(e-t)-180)}function z(e,t){return[e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2]]}const Y=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],U=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],V=[95.047,100,108.883];function W(e,t,a){return(255<<24|(255&e)<<16|(255&t)<<8|255&a)>>>0}function G(e){return W(oe(e[0]),oe(e[1]),oe(e[2]))}function X(e){return e>>16&255}function K(e){return e>>8&255}function J(e){return 255&e}function Z(e,t,a){const o=U,i=o[0][0]*e+o[0][1]*t+o[0][2]*a,s=o[1][0]*e+o[1][1]*t+o[1][2]*a,n=o[2][0]*e+o[2][1]*t+o[2][2]*a;return W(oe(i),oe(s),oe(n))}function Q(e){const t=function(e){return z([ae(X(e)),ae(K(e)),ae(J(e))],Y)}(e)[1];return 116*ie(t/100)-16}function ee(e){return 100*se((e+16)/116)}function te(e){return 116*ie(e/100)-16}function ae(e){const t=e/255;return t<=.040449936?t/12.92*100:100*Math.pow((t+.055)/1.055,2.4)}function oe(e){const t=e/100;let a=0;return a=t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,(o=Math.round(255*a))<0?0:o>255?255:o;var o}function ie(e){return e>216/24389?Math.pow(e,1/3):(24389/27*e+16)/116}function se(e){const t=e*e*e;return t>216/24389?t:(116*e-16)/(24389/27)}class ne{static make(e=function(){return V}(),t=200/Math.PI*ee(50)/100,a=50,o=2,i=!1){const s=e,n=.401288*s[0]+.650173*s[1]+-.051461*s[2],l=-.250268*s[0]+1.204414*s[1]+.045854*s[2],r=-.002079*s[0]+.048952*s[1]+.953127*s[2],d=.8+o/10,m=d>=.9?R(.59,.69,10*(d-.9)):R(.525,.59,10*(d-.8));let c=i?1:d*(1-1/3.6*Math.exp((-t-42)/92));c=c>1?1:c<0?0:c;const u=d,h=[c*(100/n)+1-c,c*(100/l)+1-c,c*(100/r)+1-c],p=1/(5*t+1),b=p*p*p*p,f=1-b,g=b*t+.1*f*f*Math.cbrt(5*t),_=ee(a)/e[1],y=1.48+Math.sqrt(_),v=.725/Math.pow(_,.2),k=v,j=[Math.pow(g*h[0]*n/100,.42),Math.pow(g*h[1]*l/100,.42),Math.pow(g*h[2]*r/100,.42)],x=[400*j[0]/(j[0]+27.13),400*j[1]/(j[1]+27.13),400*j[2]/(j[2]+27.13)];return new ne(_,(2*x[0]+x[1]+.05*x[2])*v,v,k,m,u,h,g,Math.pow(g,.25),y)}constructor(e,t,a,o,i,s,n,l,r,d){this.n=e,this.aw=t,this.nbb=a,this.ncb=o,this.c=i,this.nc=s,this.rgbD=n,this.fl=l,this.fLRoot=r,this.z=d}}ne.DEFAULT=ne.make();class le{constructor(e,t,a,o,i,s,n,l,r){this.hue=e,this.chroma=t,this.j=a,this.q=o,this.m=i,this.s=s,this.jstar=n,this.astar=l,this.bstar=r}distance(e){const t=this.jstar-e.jstar,a=this.astar-e.astar,o=this.bstar-e.bstar,i=Math.sqrt(t*t+a*a+o*o);return 1.41*Math.pow(i,.63)}static fromInt(e){return le.fromIntInViewingConditions(e,ne.DEFAULT)}static fromIntInViewingConditions(e,t){const a=(65280&e)>>8,o=255&e,i=ae((16711680&e)>>16),s=ae(a),n=ae(o),l=.41233895*i+.35762064*s+.18051042*n,r=.2126*i+.7152*s+.0722*n,d=.01932141*i+.11916382*s+.95034478*n,m=.401288*l+.650173*r-.051461*d,c=-.250268*l+1.204414*r+.045854*d,u=-.002079*l+.048952*r+.953127*d,h=t.rgbD[0]*m,p=t.rgbD[1]*c,b=t.rgbD[2]*u,f=Math.pow(t.fl*Math.abs(h)/100,.42),g=Math.pow(t.fl*Math.abs(p)/100,.42),_=Math.pow(t.fl*Math.abs(b)/100,.42),y=400*O(h)*f/(f+27.13),v=400*O(p)*g/(g+27.13),k=400*O(b)*_/(_+27.13),j=(11*y+-12*v+k)/11,x=(y+v-2*k)/9,S=(20*y+20*v+21*k)/20,C=(40*y+20*v+k)/20,w=180*Math.atan2(x,j)/Math.PI,P=w<0?w+360:w>=360?w-360:w,$=P*Math.PI/180,A=C*t.nbb,F=100*Math.pow(A/t.aw,t.c*t.z),T=4/t.c*Math.sqrt(F/100)*(t.aw+4)*t.fLRoot,I=P<20.14?P+360:P,B=5e4/13*(.25*(Math.cos(I*Math.PI/180+2)+3.8))*t.nc*t.ncb*Math.sqrt(j*j+x*x)/(S+.305),M=Math.pow(B,.9)*Math.pow(1.64-Math.pow(.29,t.n),.73),L=M*Math.sqrt(F/100),E=L*t.fLRoot,R=50*Math.sqrt(M*t.c/(t.aw+4)),D=(1+100*.007)*F/(1+.007*F),N=1/.0228*Math.log(1+.0228*E),q=N*Math.cos($),H=N*Math.sin($);return new le(P,L,F,T,E,R,D,q,H)}static fromJch(e,t,a){return le.fromJchInViewingConditions(e,t,a,ne.DEFAULT)}static fromJchInViewingConditions(e,t,a,o){const i=4/o.c*Math.sqrt(e/100)*(o.aw+4)*o.fLRoot,s=t*o.fLRoot,n=t/Math.sqrt(e/100),l=50*Math.sqrt(n*o.c/(o.aw+4)),r=a*Math.PI/180,d=(1+100*.007)*e/(1+.007*e),m=1/.0228*Math.log(1+.0228*s),c=m*Math.cos(r),u=m*Math.sin(r);return new le(a,t,e,i,s,l,d,c,u)}static fromUcs(e,t,a){return le.fromUcsInViewingConditions(e,t,a,ne.DEFAULT)}static fromUcsInViewingConditions(e,t,a,o){const i=t,s=a,n=Math.sqrt(i*i+s*s),l=(Math.exp(.0228*n)-1)/.0228/o.fLRoot;let r=Math.atan2(s,i)*(180/Math.PI);r<0&&(r+=360);const d=e/(1-.007*(e-100));return le.fromJchInViewingConditions(d,l,r,o)}toInt(){return this.viewed(ne.DEFAULT)}viewed(e){const t=0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100),a=Math.pow(t/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),o=this.hue*Math.PI/180,i=.25*(Math.cos(o+2)+3.8),s=e.aw*Math.pow(this.j/100,1/e.c/e.z),n=i*(5e4/13)*e.nc*e.ncb,l=s/e.nbb,r=Math.sin(o),d=Math.cos(o),m=23*(l+.305)*a/(23*n+11*a*d+108*a*r),c=m*d,u=m*r,h=(460*l+451*c+288*u)/1403,p=(460*l-891*c-261*u)/1403,b=(460*l-220*c-6300*u)/1403,f=Math.max(0,27.13*Math.abs(h)/(400-Math.abs(h))),g=O(h)*(100/e.fl)*Math.pow(f,1/.42),_=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),y=O(p)*(100/e.fl)*Math.pow(_,1/.42),v=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),k=O(b)*(100/e.fl)*Math.pow(v,1/.42),j=g/e.rgbD[0],x=y/e.rgbD[1],S=k/e.rgbD[2];return Z(1.86206786*j-1.01125463*x+.14918677*S,.38752654*j+.62144744*x-.00897398*S,-.0158415*j-.03412294*x+1.04996444*S)}static fromXyzInViewingConditions(e,t,a,o){const i=.401288*e+.650173*t-.051461*a,s=-.250268*e+1.204414*t+.045854*a,n=-.002079*e+.048952*t+.953127*a,l=o.rgbD[0]*i,r=o.rgbD[1]*s,d=o.rgbD[2]*n,m=Math.pow(o.fl*Math.abs(l)/100,.42),c=Math.pow(o.fl*Math.abs(r)/100,.42),u=Math.pow(o.fl*Math.abs(d)/100,.42),h=400*O(l)*m/(m+27.13),p=400*O(r)*c/(c+27.13),b=400*O(d)*u/(u+27.13),f=(11*h+-12*p+b)/11,g=(h+p-2*b)/9,_=(20*h+20*p+21*b)/20,y=(40*h+20*p+b)/20,v=180*Math.atan2(g,f)/Math.PI,k=v<0?v+360:v>=360?v-360:v,j=k*Math.PI/180,x=y*o.nbb,S=100*Math.pow(x/o.aw,o.c*o.z),C=4/o.c*Math.sqrt(S/100)*(o.aw+4)*o.fLRoot,w=k<20.14?k+360:k,P=5e4/13*(1/4*(Math.cos(w*Math.PI/180+2)+3.8))*o.nc*o.ncb*Math.sqrt(f*f+g*g)/(_+.305),$=Math.pow(P,.9)*Math.pow(1.64-Math.pow(.29,o.n),.73),A=$*Math.sqrt(S/100),F=A*o.fLRoot,T=50*Math.sqrt($*o.c/(o.aw+4)),I=(1+100*.007)*S/(1+.007*S),B=Math.log(1+.0228*F)/.0228,M=B*Math.cos(j),L=B*Math.sin(j);return new le(k,A,S,C,F,T,I,M,L)}xyzInViewingConditions(e){const t=0===this.chroma||0===this.j?0:this.chroma/Math.sqrt(this.j/100),a=Math.pow(t/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),o=this.hue*Math.PI/180,i=.25*(Math.cos(o+2)+3.8),s=e.aw*Math.pow(this.j/100,1/e.c/e.z),n=i*(5e4/13)*e.nc*e.ncb,l=s/e.nbb,r=Math.sin(o),d=Math.cos(o),m=23*(l+.305)*a/(23*n+11*a*d+108*a*r),c=m*d,u=m*r,h=(460*l+451*c+288*u)/1403,p=(460*l-891*c-261*u)/1403,b=(460*l-220*c-6300*u)/1403,f=Math.max(0,27.13*Math.abs(h)/(400-Math.abs(h))),g=O(h)*(100/e.fl)*Math.pow(f,1/.42),_=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),y=O(p)*(100/e.fl)*Math.pow(_,1/.42),v=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),k=O(b)*(100/e.fl)*Math.pow(v,1/.42),j=g/e.rgbD[0],x=y/e.rgbD[1],S=k/e.rgbD[2];return[1.86206786*j-1.01125463*x+.14918677*S,.38752654*j+.62144744*x-.00897398*S,-.0158415*j-.03412294*x+1.04996444*S]}}class re{static sanitizeRadians(e){return(e+8*Math.PI)%(2*Math.PI)}static trueDelinearized(e){const t=e/100;let a=0;return a=t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,255*a}static chromaticAdaptation(e){const t=Math.pow(Math.abs(e),.42);return 400*O(e)*t/(t+27.13)}static hueOf(e){const t=z(e,re.SCALED_DISCOUNT_FROM_LINRGB),a=re.chromaticAdaptation(t[0]),o=re.chromaticAdaptation(t[1]),i=re.chromaticAdaptation(t[2]),s=(11*a+-12*o+i)/11,n=(a+o-2*i)/9;return Math.atan2(n,s)}static areInCyclicOrder(e,t,a){return re.sanitizeRadians(t-e)<re.sanitizeRadians(a-e)}static intercept(e,t,a){return(t-e)/(a-e)}static lerpPoint(e,t,a){return[e[0]+(a[0]-e[0])*t,e[1]+(a[1]-e[1])*t,e[2]+(a[2]-e[2])*t]}static setCoordinate(e,t,a,o){const i=re.intercept(e[o],t,a[o]);return re.lerpPoint(e,i,a)}static isBounded(e){return 0<=e&&e<=100}static nthVertex(e,t){const a=re.Y_FROM_LINRGB[0],o=re.Y_FROM_LINRGB[1],i=re.Y_FROM_LINRGB[2],s=t%4<=1?0:100,n=t%2==0?0:100;if(t<4){const t=s,l=n,r=(e-t*o-l*i)/a;return re.isBounded(r)?[r,t,l]:[-1,-1,-1]}if(t<8){const t=s,l=n,r=(e-l*a-t*i)/o;return re.isBounded(r)?[l,r,t]:[-1,-1,-1]}{const t=s,l=n,r=(e-t*a-l*o)/i;return re.isBounded(r)?[t,l,r]:[-1,-1,-1]}}static bisectToSegment(e,t){let a=[-1,-1,-1],o=a,i=0,s=0,n=!1,l=!0;for(let r=0;r<12;r++){const d=re.nthVertex(e,r);if(d[0]<0)continue;const m=re.hueOf(d);n?(l||re.areInCyclicOrder(i,m,s))&&(l=!1,re.areInCyclicOrder(i,t,m)?(o=d,s=m):(a=d,i=m)):(a=d,o=d,i=m,s=m,n=!0)}return[a,o]}static midpoint(e,t){return[(e[0]+t[0])/2,(e[1]+t[1])/2,(e[2]+t[2])/2]}static criticalPlaneBelow(e){return Math.floor(e-.5)}static criticalPlaneAbove(e){return Math.ceil(e-.5)}static bisectToLimit(e,t){const a=re.bisectToSegment(e,t);let o=a[0],i=re.hueOf(o),s=a[1];for(let e=0;e<3;e++)if(o[e]!==s[e]){let a=-1,n=255;o[e]<s[e]?(a=re.criticalPlaneBelow(re.trueDelinearized(o[e])),n=re.criticalPlaneAbove(re.trueDelinearized(s[e]))):(a=re.criticalPlaneAbove(re.trueDelinearized(o[e])),n=re.criticalPlaneBelow(re.trueDelinearized(s[e])));for(let l=0;l<8&&!(Math.abs(n-a)<=1);l++){const l=Math.floor((a+n)/2),r=re.CRITICAL_PLANES[l],d=re.setCoordinate(o,r,s,e),m=re.hueOf(d);re.areInCyclicOrder(i,t,m)?(s=d,n=l):(o=d,i=m,a=l)}}return re.midpoint(o,s)}static inverseChromaticAdaptation(e){const t=Math.abs(e),a=Math.max(0,27.13*t/(400-t));return O(e)*Math.pow(a,1/.42)}static findResultByJ(e,t,a){let o=11*Math.sqrt(a);const i=ne.DEFAULT,s=1/Math.pow(1.64-Math.pow(.29,i.n),.73),n=.25*(Math.cos(e+2)+3.8)*(5e4/13)*i.nc*i.ncb,l=Math.sin(e),r=Math.cos(e);for(let e=0;e<5;e++){const d=o/100,m=0===t||0===o?0:t/Math.sqrt(d),c=Math.pow(m*s,1/.9),u=i.aw*Math.pow(d,1/i.c/i.z)/i.nbb,h=23*(u+.305)*c/(23*n+11*c*r+108*c*l),p=h*r,b=h*l,f=(460*u+451*p+288*b)/1403,g=(460*u-891*p-261*b)/1403,_=(460*u-220*p-6300*b)/1403,y=z([re.inverseChromaticAdaptation(f),re.inverseChromaticAdaptation(g),re.inverseChromaticAdaptation(_)],re.LINRGB_FROM_SCALED_DISCOUNT);if(y[0]<0||y[1]<0||y[2]<0)return 0;const v=re.Y_FROM_LINRGB[0],k=re.Y_FROM_LINRGB[1],j=re.Y_FROM_LINRGB[2],x=v*y[0]+k*y[1]+j*y[2];if(x<=0)return 0;if(4===e||Math.abs(x-a)<.002)return y[0]>100.01||y[1]>100.01||y[2]>100.01?0:G(y);o-=(x-a)*o/(2*x)}return 0}static solveToInt(e,t,a){if(t<1e-4||a<1e-4||a>99.9999)return function(e){const t=oe(ee(e));return W(t,t,t)}(a);const o=(e=q(e))/180*Math.PI,i=ee(a),s=re.findResultByJ(o,t,i);return 0!==s?s:G(re.bisectToLimit(i,o))}static solveToCam(e,t,a){return le.fromInt(re.solveToInt(e,t,a))}}re.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]],re.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]],re.Y_FROM_LINRGB=[.2126,.7152,.0722],re.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];class de{static from(e,t,a){return new de(re.solveToInt(e,t,a))}static fromInt(e){return new de(e)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(e){this.setInternalState(re.solveToInt(e,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(e){this.setInternalState(re.solveToInt(this.internalHue,e,this.internalTone))}get tone(){return this.internalTone}set tone(e){this.setInternalState(re.solveToInt(this.internalHue,this.internalChroma,e))}constructor(e){this.argb=e;const t=le.fromInt(e);this.internalHue=t.hue,this.internalChroma=t.chroma,this.internalTone=Q(e),this.argb=e}setInternalState(e){const t=le.fromInt(e);this.internalHue=t.hue,this.internalChroma=t.chroma,this.internalTone=Q(e),this.argb=e}inViewingConditions(e){const t=le.fromInt(this.toInt()).xyzInViewingConditions(e),a=le.fromXyzInViewingConditions(t[0],t[1],t[2],ne.make());return de.from(a.hue,a.chroma,te(t[1]))}}class me{static harmonize(e,t){const a=de.fromInt(e),o=de.fromInt(t),i=H(a.hue,o.hue),s=Math.min(.5*i,15),n=q(a.hue+s*(l=a.hue,q(o.hue-l)<=180?1:-1));var l;return de.from(n,a.chroma,a.tone).toInt()}static hctHue(e,t,a){const o=me.cam16Ucs(e,t,a),i=le.fromInt(o),s=le.fromInt(e);return de.from(i.hue,s.chroma,Q(e)).toInt()}static cam16Ucs(e,t,a){const o=le.fromInt(e),i=le.fromInt(t),s=o.jstar,n=o.astar,l=o.bstar,r=s+(i.jstar-s)*a,d=n+(i.astar-n)*a,m=l+(i.bstar-l)*a;return le.fromUcs(r,d,m).toInt()}}class ce{static isDisliked(e){const t=Math.round(e.hue)>=90&&Math.round(e.hue)<=111,a=Math.round(e.chroma)>16,o=Math.round(e.tone)<65;return t&&a&&o}static fixIfDisliked(e){return ce.isDisliked(e)?de.from(e.hue,e.chroma,70):e}}var ue;!function(e){e[e.MONOCHROME=0]="MONOCHROME",e[e.NEUTRAL=1]="NEUTRAL",e[e.TONAL_SPOT=2]="TONAL_SPOT",e[e.VIBRANT=3]="VIBRANT",e[e.EXPRESSIVE=4]="EXPRESSIVE",e[e.FIDELITY=5]="FIDELITY",e[e.CONTENT=6]="CONTENT",e[e.RAINBOW=7]="RAINBOW",e[e.FRUIT_SALAD=8]="FRUIT_SALAD"}(ue||(ue={}));class he{constructor(e,t,a,o){this.low=e,this.normal=t,this.medium=a,this.high=o}getContrast(e){return e<=-1?this.low:e<0?R(this.low,this.normal,(e- -1)/1):e<.5?R(this.normal,this.medium,(e-0)/.5):e<1?R(this.medium,this.high,(e-.5)/.5):this.high}}class pe{static ratioOfTones(e,t){return e=D(0,100,e),t=D(0,100,t),pe.ratioOfYs(ee(e),ee(t))}static ratioOfYs(e,t){const a=e>t?e:t;return(a+5)/((a===t?e:t)+5)}static lighter(e,t){if(e<0||e>100)return-1;const a=ee(e),o=t*(a+5)-5,i=pe.ratioOfYs(o,a),s=Math.abs(i-t);if(i<t&&s>.04)return-1;const n=te(o)+.4;return n<0||n>100?-1:n}static darker(e,t){if(e<0||e>100)return-1;const a=ee(e),o=(a+5)/t-5,i=pe.ratioOfYs(a,o),s=Math.abs(i-t);if(i<t&&s>.04)return-1;const n=te(o)-.4;return n<0||n>100?-1:n}static lighterUnsafe(e,t){const a=pe.lighter(e,t);return a<0?100:a}static darkerUnsafe(e,t){const a=pe.darker(e,t);return a<0?0:a}}class be{static fromPalette(e){return new be(e.name??"",e.palette,e.tone,e.isBackground??!1,e.background,e.secondBackground,e.contrastCurve,e.toneDeltaPair)}constructor(e,t,a,o,i,s,n,l){if(this.name=e,this.palette=t,this.tone=a,this.isBackground=o,this.background=i,this.secondBackground=s,this.contrastCurve=n,this.toneDeltaPair=l,this.hctCache=new Map,!i&&s)throw new Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);if(!i&&n)throw new Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);if(i&&!n)throw new Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(e){return this.getHct(e).toInt()}getHct(e){const t=this.hctCache.get(e);if(null!=t)return t;const a=this.getTone(e),o=this.palette(e).getHct(a);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(e,o),o}getTone(e){const t=e.contrastLevel<0;if(this.toneDeltaPair){const a=this.toneDeltaPair(e),o=a.roleA,i=a.roleB,s=a.delta,n=a.polarity,l=a.stayTogether,r=this.background(e).getTone(e),d="nearer"===n||"lighter"===n&&!e.isDark||"darker"===n&&e.isDark,m=d?o:i,c=d?i:o,u=this.name===m.name,h=e.isDark?1:-1,p=m.contrastCurve.getContrast(e.contrastLevel),b=c.contrastCurve.getContrast(e.contrastLevel),f=m.tone(e);let g=pe.ratioOfTones(r,f)>=p?f:be.foregroundTone(r,p);const _=c.tone(e);let y=pe.ratioOfTones(r,_)>=b?_:be.foregroundTone(r,b);return t&&(g=be.foregroundTone(r,p),y=be.foregroundTone(r,b)),(y-g)*h>=s||(y=D(0,100,g+s*h),(y-g)*h>=s||(g=D(0,100,y-s*h))),50<=g&&g<60?h>0?(g=60,y=Math.max(y,g+s*h)):(g=49,y=Math.min(y,g+s*h)):50<=y&&y<60&&(l?h>0?(g=60,y=Math.max(y,g+s*h)):(g=49,y=Math.min(y,g+s*h)):y=h>0?60:49),u?g:y}{let a=this.tone(e);if(null==this.background)return a;const o=this.background(e).getTone(e),i=this.contrastCurve.getContrast(e.contrastLevel);if(pe.ratioOfTones(o,a)>=i||(a=be.foregroundTone(o,i)),t&&(a=be.foregroundTone(o,i)),this.isBackground&&50<=a&&a<60&&(a=pe.ratioOfTones(49,o)>=i?49:60),this.secondBackground){const[t,o]=[this.background,this.secondBackground],[s,n]=[t(e).getTone(e),o(e).getTone(e)],[l,r]=[Math.max(s,n),Math.min(s,n)];if(pe.ratioOfTones(l,a)>=i&&pe.ratioOfTones(r,a)>=i)return a;const d=pe.lighter(l,i),m=pe.darker(r,i),c=[];return-1!==d&&c.push(d),-1!==m&&c.push(m),be.tonePrefersLightForeground(s)||be.tonePrefersLightForeground(n)?d<0?100:d:1===c.length?c[0]:m<0?0:m}return a}}static foregroundTone(e,t){const a=pe.lighterUnsafe(e,t),o=pe.darkerUnsafe(e,t),i=pe.ratioOfTones(a,e),s=pe.ratioOfTones(o,e);if(be.tonePrefersLightForeground(e)){const e=Math.abs(i-s)<.1&&i<t&&s<t;return i>=t||i>=s||e?a:o}return s>=t||s>=i?o:a}static tonePrefersLightForeground(e){return Math.round(e)<60}static toneAllowsLightForeground(e){return Math.round(e)<=49}static enableLightForeground(e){return be.tonePrefersLightForeground(e)&&!be.toneAllowsLightForeground(e)?49:e}}class fe{constructor(e,t,a,o,i){this.roleA=e,this.roleB=t,this.delta=a,this.polarity=o,this.stayTogether=i}}function ge(e){return e.variant===ue.FIDELITY||e.variant===ue.CONTENT}function _e(e){return e.variant===ue.MONOCHROME}function ye(e,t){const a=e.inViewingConditions(function(e){return ne.make(void 0,void 0,e.isDark?30:80,void 0,void 0)}(t));return be.tonePrefersLightForeground(e.tone)&&!be.toneAllowsLightForeground(a.tone)?be.enableLightForeground(e.tone):be.enableLightForeground(a.tone)}class ve{static highestSurface(e){return e.isDark?ve.surfaceBright:ve.surfaceDim}}ve.contentAccentToneDelta=15,ve.primaryPaletteKeyColor=be.fromPalette({name:"primary_palette_key_color",palette:e=>e.primaryPalette,tone:e=>e.primaryPalette.keyColor.tone}),ve.secondaryPaletteKeyColor=be.fromPalette({name:"secondary_palette_key_color",palette:e=>e.secondaryPalette,tone:e=>e.secondaryPalette.keyColor.tone}),ve.tertiaryPaletteKeyColor=be.fromPalette({name:"tertiary_palette_key_color",palette:e=>e.tertiaryPalette,tone:e=>e.tertiaryPalette.keyColor.tone}),ve.neutralPaletteKeyColor=be.fromPalette({name:"neutral_palette_key_color",palette:e=>e.neutralPalette,tone:e=>e.neutralPalette.keyColor.tone}),ve.neutralVariantPaletteKeyColor=be.fromPalette({name:"neutral_variant_palette_key_color",palette:e=>e.neutralVariantPalette,tone:e=>e.neutralVariantPalette.keyColor.tone}),ve.background=be.fromPalette({name:"background",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0}),ve.onBackground=be.fromPalette({name:"on_background",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>ve.background,contrastCurve:new he(3,3,4.5,7)}),ve.surface=be.fromPalette({name:"surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:98,isBackground:!0}),ve.surfaceDim=be.fromPalette({name:"surface_dim",palette:e=>e.neutralPalette,tone:e=>e.isDark?6:87,isBackground:!0}),ve.surfaceBright=be.fromPalette({name:"surface_bright",palette:e=>e.neutralPalette,tone:e=>e.isDark?24:98,isBackground:!0}),ve.surfaceContainerLowest=be.fromPalette({name:"surface_container_lowest",palette:e=>e.neutralPalette,tone:e=>e.isDark?4:100,isBackground:!0}),ve.surfaceContainerLow=be.fromPalette({name:"surface_container_low",palette:e=>e.neutralPalette,tone:e=>e.isDark?10:96,isBackground:!0}),ve.surfaceContainer=be.fromPalette({name:"surface_container",palette:e=>e.neutralPalette,tone:e=>e.isDark?12:94,isBackground:!0}),ve.surfaceContainerHigh=be.fromPalette({name:"surface_container_high",palette:e=>e.neutralPalette,tone:e=>e.isDark?17:92,isBackground:!0}),ve.surfaceContainerHighest=be.fromPalette({name:"surface_container_highest",palette:e=>e.neutralPalette,tone:e=>e.isDark?22:90,isBackground:!0}),ve.onSurface=be.fromPalette({name:"on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:10,background:e=>ve.highestSurface(e),contrastCurve:new he(4.5,7,11,21)}),ve.surfaceVariant=be.fromPalette({name:"surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:90,isBackground:!0}),ve.onSurfaceVariant=be.fromPalette({name:"on_surface_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?80:30,background:e=>ve.highestSurface(e),contrastCurve:new he(3,4.5,7,11)}),ve.inverseSurface=be.fromPalette({name:"inverse_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?90:20}),ve.inverseOnSurface=be.fromPalette({name:"inverse_on_surface",palette:e=>e.neutralPalette,tone:e=>e.isDark?20:95,background:e=>ve.inverseSurface,contrastCurve:new he(4.5,7,11,21)}),ve.outline=be.fromPalette({name:"outline",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?60:50,background:e=>ve.highestSurface(e),contrastCurve:new he(1.5,3,4.5,7)}),ve.outlineVariant=be.fromPalette({name:"outline_variant",palette:e=>e.neutralVariantPalette,tone:e=>e.isDark?30:80,background:e=>ve.highestSurface(e),contrastCurve:new he(1,1,3,7)}),ve.shadow=be.fromPalette({name:"shadow",palette:e=>e.neutralPalette,tone:e=>0}),ve.scrim=be.fromPalette({name:"scrim",palette:e=>e.neutralPalette,tone:e=>0}),ve.surfaceTint=be.fromPalette({name:"surface_tint",palette:e=>e.primaryPalette,tone:e=>e.isDark?80:40,isBackground:!0}),ve.primary=be.fromPalette({name:"primary",palette:e=>e.primaryPalette,tone:e=>_e(e)?e.isDark?100:0:e.isDark?80:40,isBackground:!0,background:e=>ve.highestSurface(e),contrastCurve:new he(3,4.5,7,11),toneDeltaPair:e=>new fe(ve.primaryContainer,ve.primary,15,"nearer",!1)}),ve.onPrimary=be.fromPalette({name:"on_primary",palette:e=>e.primaryPalette,tone:e=>_e(e)?e.isDark?10:90:e.isDark?20:100,background:e=>ve.primary,contrastCurve:new he(4.5,7,11,21)}),ve.primaryContainer=be.fromPalette({name:"primary_container",palette:e=>e.primaryPalette,tone:e=>ge(e)?ye(e.sourceColorHct,e):_e(e)?e.isDark?85:25:e.isDark?30:90,isBackground:!0,background:e=>ve.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new fe(ve.primaryContainer,ve.primary,15,"nearer",!1)}),ve.onPrimaryContainer=be.fromPalette({name:"on_primary_container",palette:e=>e.primaryPalette,tone:e=>ge(e)?be.foregroundTone(ve.primaryContainer.tone(e),4.5):_e(e)?e.isDark?0:100:e.isDark?90:10,background:e=>ve.primaryContainer,contrastCurve:new he(4.5,7,11,21)}),ve.inversePrimary=be.fromPalette({name:"inverse_primary",palette:e=>e.primaryPalette,tone:e=>e.isDark?40:80,background:e=>ve.inverseSurface,contrastCurve:new he(3,4.5,7,11)}),ve.secondary=be.fromPalette({name:"secondary",palette:e=>e.secondaryPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>ve.highestSurface(e),contrastCurve:new he(3,4.5,7,11),toneDeltaPair:e=>new fe(ve.secondaryContainer,ve.secondary,15,"nearer",!1)}),ve.onSecondary=be.fromPalette({name:"on_secondary",palette:e=>e.secondaryPalette,tone:e=>_e(e)?e.isDark?10:100:e.isDark?20:100,background:e=>ve.secondary,contrastCurve:new he(4.5,7,11,21)}),ve.secondaryContainer=be.fromPalette({name:"secondary_container",palette:e=>e.secondaryPalette,tone:e=>{const t=e.isDark?30:90;if(_e(e))return e.isDark?30:85;if(!ge(e))return t;let a=function(e,t,a,o){let i=a,s=de.from(e,t,a);if(s.chroma<t){let a=s.chroma;for(;s.chroma<t;){i+=o?-1:1;const n=de.from(e,t,i);if(a>n.chroma)break;if(Math.abs(n.chroma-t)<.4)break;Math.abs(n.chroma-t)<Math.abs(s.chroma-t)&&(s=n),a=Math.max(a,n.chroma)}}return i}(e.secondaryPalette.hue,e.secondaryPalette.chroma,t,!e.isDark);return a=ye(e.secondaryPalette.getHct(a),e),a},isBackground:!0,background:e=>ve.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new fe(ve.secondaryContainer,ve.secondary,15,"nearer",!1)}),ve.onSecondaryContainer=be.fromPalette({name:"on_secondary_container",palette:e=>e.secondaryPalette,tone:e=>ge(e)?be.foregroundTone(ve.secondaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>ve.secondaryContainer,contrastCurve:new he(4.5,7,11,21)}),ve.tertiary=be.fromPalette({name:"tertiary",palette:e=>e.tertiaryPalette,tone:e=>_e(e)?e.isDark?90:25:e.isDark?80:40,isBackground:!0,background:e=>ve.highestSurface(e),contrastCurve:new he(3,4.5,7,11),toneDeltaPair:e=>new fe(ve.tertiaryContainer,ve.tertiary,15,"nearer",!1)}),ve.onTertiary=be.fromPalette({name:"on_tertiary",palette:e=>e.tertiaryPalette,tone:e=>_e(e)?e.isDark?10:90:e.isDark?20:100,background:e=>ve.tertiary,contrastCurve:new he(4.5,7,11,21)}),ve.tertiaryContainer=be.fromPalette({name:"tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>{if(_e(e))return e.isDark?60:49;if(!ge(e))return e.isDark?30:90;const t=ye(e.tertiaryPalette.getHct(e.sourceColorHct.tone),e),a=e.tertiaryPalette.getHct(t);return ce.fixIfDisliked(a).tone},isBackground:!0,background:e=>ve.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new fe(ve.tertiaryContainer,ve.tertiary,15,"nearer",!1)}),ve.onTertiaryContainer=be.fromPalette({name:"on_tertiary_container",palette:e=>e.tertiaryPalette,tone:e=>_e(e)?e.isDark?0:100:ge(e)?be.foregroundTone(ve.tertiaryContainer.tone(e),4.5):e.isDark?90:10,background:e=>ve.tertiaryContainer,contrastCurve:new he(4.5,7,11,21)}),ve.error=be.fromPalette({name:"error",palette:e=>e.errorPalette,tone:e=>e.isDark?80:40,isBackground:!0,background:e=>ve.highestSurface(e),contrastCurve:new he(3,4.5,7,11),toneDeltaPair:e=>new fe(ve.errorContainer,ve.error,15,"nearer",!1)}),ve.onError=be.fromPalette({name:"on_error",palette:e=>e.errorPalette,tone:e=>e.isDark?20:100,background:e=>ve.error,contrastCurve:new he(4.5,7,11,21)}),ve.errorContainer=be.fromPalette({name:"error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?30:90,isBackground:!0,background:e=>ve.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new fe(ve.errorContainer,ve.error,15,"nearer",!1)}),ve.onErrorContainer=be.fromPalette({name:"on_error_container",palette:e=>e.errorPalette,tone:e=>e.isDark?90:10,background:e=>ve.errorContainer,contrastCurve:new he(4.5,7,11,21)}),ve.primaryFixed=be.fromPalette({name:"primary_fixed",palette:e=>e.primaryPalette,tone:e=>_e(e)?40:90,isBackground:!0,background:e=>ve.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new fe(ve.primaryFixed,ve.primaryFixedDim,10,"lighter",!0)}),ve.primaryFixedDim=be.fromPalette({name:"primary_fixed_dim",palette:e=>e.primaryPalette,tone:e=>_e(e)?30:80,isBackground:!0,background:e=>ve.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new fe(ve.primaryFixed,ve.primaryFixedDim,10,"lighter",!0)}),ve.onPrimaryFixed=be.fromPalette({name:"on_primary_fixed",palette:e=>e.primaryPalette,tone:e=>_e(e)?100:10,background:e=>ve.primaryFixedDim,secondBackground:e=>ve.primaryFixed,contrastCurve:new he(4.5,7,11,21)}),ve.onPrimaryFixedVariant=be.fromPalette({name:"on_primary_fixed_variant",palette:e=>e.primaryPalette,tone:e=>_e(e)?90:30,background:e=>ve.primaryFixedDim,secondBackground:e=>ve.primaryFixed,contrastCurve:new he(3,4.5,7,11)}),ve.secondaryFixed=be.fromPalette({name:"secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>_e(e)?80:90,isBackground:!0,background:e=>ve.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new fe(ve.secondaryFixed,ve.secondaryFixedDim,10,"lighter",!0)}),ve.secondaryFixedDim=be.fromPalette({name:"secondary_fixed_dim",palette:e=>e.secondaryPalette,tone:e=>_e(e)?70:80,isBackground:!0,background:e=>ve.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new fe(ve.secondaryFixed,ve.secondaryFixedDim,10,"lighter",!0)}),ve.onSecondaryFixed=be.fromPalette({name:"on_secondary_fixed",palette:e=>e.secondaryPalette,tone:e=>10,background:e=>ve.secondaryFixedDim,secondBackground:e=>ve.secondaryFixed,contrastCurve:new he(4.5,7,11,21)}),ve.onSecondaryFixedVariant=be.fromPalette({name:"on_secondary_fixed_variant",palette:e=>e.secondaryPalette,tone:e=>_e(e)?25:30,background:e=>ve.secondaryFixedDim,secondBackground:e=>ve.secondaryFixed,contrastCurve:new he(3,4.5,7,11)}),ve.tertiaryFixed=be.fromPalette({name:"tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>_e(e)?40:90,isBackground:!0,background:e=>ve.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new fe(ve.tertiaryFixed,ve.tertiaryFixedDim,10,"lighter",!0)}),ve.tertiaryFixedDim=be.fromPalette({name:"tertiary_fixed_dim",palette:e=>e.tertiaryPalette,tone:e=>_e(e)?30:80,isBackground:!0,background:e=>ve.highestSurface(e),contrastCurve:new he(1,1,3,7),toneDeltaPair:e=>new fe(ve.tertiaryFixed,ve.tertiaryFixedDim,10,"lighter",!0)}),ve.onTertiaryFixed=be.fromPalette({name:"on_tertiary_fixed",palette:e=>e.tertiaryPalette,tone:e=>_e(e)?100:10,background:e=>ve.tertiaryFixedDim,secondBackground:e=>ve.tertiaryFixed,contrastCurve:new he(4.5,7,11,21)}),ve.onTertiaryFixedVariant=be.fromPalette({name:"on_tertiary_fixed_variant",palette:e=>e.tertiaryPalette,tone:e=>_e(e)?90:30,background:e=>ve.tertiaryFixedDim,secondBackground:e=>ve.tertiaryFixed,contrastCurve:new he(3,4.5,7,11)});class ke{static fromInt(e){const t=de.fromInt(e);return ke.fromHct(t)}static fromHct(e){return new ke(e.hue,e.chroma,e)}static fromHueAndChroma(e,t){return new ke(e,t,ke.createKeyColor(e,t))}constructor(e,t,a){this.hue=e,this.chroma=t,this.keyColor=a,this.cache=new Map}static createKeyColor(e,t){let a=de.from(e,t,50),o=Math.abs(a.chroma-t);for(let i=1;i<50;i+=1){if(Math.round(t)===Math.round(a.chroma))return a;const s=de.from(e,t,50+i),n=Math.abs(s.chroma-t);n<o&&(o=n,a=s);const l=de.from(e,t,50-i),r=Math.abs(l.chroma-t);r<o&&(o=r,a=l)}return a}tone(e){let t=this.cache.get(e);return void 0===t&&(t=de.from(this.hue,this.chroma,e).toInt(),this.cache.set(e,t)),t}getHct(e){return de.fromInt(this.tone(e))}}class je{static of(e){return new je(e,!1)}static contentOf(e){return new je(e,!0)}static fromColors(e){return je.createPaletteFromColors(!1,e)}static contentFromColors(e){return je.createPaletteFromColors(!0,e)}static createPaletteFromColors(e,t){const a=new je(t.primary,e);if(t.secondary){const o=new je(t.secondary,e);a.a2=o.a1}if(t.tertiary){const o=new je(t.tertiary,e);a.a3=o.a1}if(t.error){const o=new je(t.error,e);a.error=o.a1}if(t.neutral){const o=new je(t.neutral,e);a.n1=o.n1}if(t.neutralVariant){const o=new je(t.neutralVariant,e);a.n2=o.n2}return a}constructor(e,t){const a=de.fromInt(e),o=a.hue,i=a.chroma;t?(this.a1=ke.fromHueAndChroma(o,i),this.a2=ke.fromHueAndChroma(o,i/3),this.a3=ke.fromHueAndChroma(o+60,i/2),this.n1=ke.fromHueAndChroma(o,Math.min(i/12,4)),this.n2=ke.fromHueAndChroma(o,Math.min(i/6,8))):(this.a1=ke.fromHueAndChroma(o,Math.max(48,i)),this.a2=ke.fromHueAndChroma(o,16),this.a3=ke.fromHueAndChroma(o+60,24),this.n1=ke.fromHueAndChroma(o,4),this.n2=ke.fromHueAndChroma(o,8)),this.error=ke.fromHueAndChroma(25,84)}}class xe{fromInt(e){return function(e){const t=ae(X(e)),a=ae(K(e)),o=ae(J(e)),i=Y,s=i[0][0]*t+i[0][1]*a+i[0][2]*o,n=i[1][0]*t+i[1][1]*a+i[1][2]*o,l=i[2][0]*t+i[2][1]*a+i[2][2]*o,r=n/V[1],d=l/V[2],m=ie(s/V[0]),c=ie(r);return[116*c-16,500*(m-c),200*(c-ie(d))]}(e)}toInt(e){return function(e,t,a){const o=V,i=(e+16)/116,s=i-a/200,n=se(t/500+i),l=se(i),r=se(s);return Z(n*o[0],l*o[1],r*o[2])}(e[0],e[1],e[2])}distance(e,t){const a=e[0]-t[0],o=e[1]-t[1],i=e[2]-t[2];return a*a+o*o+i*i}}class Se{static quantize(e,t,a){const o=new Map,i=new Array,s=new Array,n=new xe;let l=0;for(let t=0;t<e.length;t++){const a=e[t],r=o.get(a);void 0===r?(l++,i.push(n.fromInt(a)),s.push(a),o.set(a,1)):o.set(a,r+1)}const r=new Array;for(let e=0;e<l;e++){const t=s[e],a=o.get(t);void 0!==a&&(r[e]=a)}let d=Math.min(a,l);t.length>0&&(d=Math.min(d,t.length));const m=new Array;for(let e=0;e<t.length;e++)m.push(n.fromInt(t[e]));const c=d-m.length;if(0===t.length&&c>0)for(let e=0;e<c;e++){const e=100*Math.random(),t=201*Math.random()-100,a=201*Math.random()-100;m.push(new Array(e,t,a))}const u=new Array;for(let e=0;e<l;e++)u.push(Math.floor(Math.random()*d));const h=new Array;for(let e=0;e<d;e++){h.push(new Array);for(let t=0;t<d;t++)h[e].push(0)}const p=new Array;for(let e=0;e<d;e++){p.push(new Array);for(let t=0;t<d;t++)p[e].push(new Ce)}const b=new Array;for(let e=0;e<d;e++)b.push(0);for(let e=0;e<10;e++){for(let e=0;e<d;e++){for(let t=e+1;t<d;t++){const a=n.distance(m[e],m[t]);p[t][e].distance=a,p[t][e].index=e,p[e][t].distance=a,p[e][t].index=t}p[e].sort();for(let t=0;t<d;t++)h[e][t]=p[e][t].index}let t=0;for(let e=0;e<l;e++){const a=i[e],o=u[e],s=m[o],l=n.distance(a,s);let r=l,c=-1;for(let e=0;e<d;e++){if(p[o][e].distance>=4*l)continue;const t=n.distance(a,m[e]);t<r&&(r=t,c=e)}-1!==c&&Math.abs(Math.sqrt(r)-Math.sqrt(l))>3&&(t++,u[e]=c)}if(0===t&&0!==e)break;const a=new Array(d).fill(0),o=new Array(d).fill(0),s=new Array(d).fill(0);for(let e=0;e<d;e++)b[e]=0;for(let e=0;e<l;e++){const t=u[e],n=i[e],l=r[e];b[t]+=l,a[t]+=n[0]*l,o[t]+=n[1]*l,s[t]+=n[2]*l}for(let e=0;e<d;e++){const t=b[e];if(0===t){m[e]=[0,0,0];continue}const i=a[e]/t,n=o[e]/t,l=s[e]/t;m[e]=[i,n,l]}}const f=new Map;for(let e=0;e<d;e++){const t=b[e];if(0===t)continue;const a=n.toInt(m[e]);f.has(a)||f.set(a,t)}return f}}class Ce{constructor(){this.distance=-1,this.index=-1}}class we{static quantize(e){const t=new Map;for(let a=0;a<e.length;a++){const o=e[a];(o>>24&255)<255||t.set(o,(t.get(o)??0)+1)}return t}}const Pe=33,$e=35937,Ae="red",Fe="green",Te="blue";class Ie{constructor(e=[],t=[],a=[],o=[],i=[],s=[]){this.weights=e,this.momentsR=t,this.momentsG=a,this.momentsB=o,this.moments=i,this.cubes=s}quantize(e,t){this.constructHistogram(e),this.computeMoments();const a=this.createBoxes(t);return this.createResult(a.resultCount)}constructHistogram(e){this.weights=Array.from({length:$e}).fill(0),this.momentsR=Array.from({length:$e}).fill(0),this.momentsG=Array.from({length:$e}).fill(0),this.momentsB=Array.from({length:$e}).fill(0),this.moments=Array.from({length:$e}).fill(0);const t=we.quantize(e);for(const[e,a]of t.entries()){const t=X(e),o=K(e),i=J(e),s=3,n=1+(t>>s),l=1+(o>>s),r=1+(i>>s),d=this.getIndex(n,l,r);this.weights[d]=(this.weights[d]??0)+a,this.momentsR[d]+=a*t,this.momentsG[d]+=a*o,this.momentsB[d]+=a*i,this.moments[d]+=a*(t*t+o*o+i*i)}}computeMoments(){for(let e=1;e<Pe;e++){const t=Array.from({length:Pe}).fill(0),a=Array.from({length:Pe}).fill(0),o=Array.from({length:Pe}).fill(0),i=Array.from({length:Pe}).fill(0),s=Array.from({length:Pe}).fill(0);for(let n=1;n<Pe;n++){let l=0,r=0,d=0,m=0,c=0;for(let u=1;u<Pe;u++){const h=this.getIndex(e,n,u);l+=this.weights[h],r+=this.momentsR[h],d+=this.momentsG[h],m+=this.momentsB[h],c+=this.moments[h],t[u]+=l,a[u]+=r,o[u]+=d,i[u]+=m,s[u]+=c;const p=this.getIndex(e-1,n,u);this.weights[h]=this.weights[p]+t[u],this.momentsR[h]=this.momentsR[p]+a[u],this.momentsG[h]=this.momentsG[p]+o[u],this.momentsB[h]=this.momentsB[p]+i[u],this.moments[h]=this.moments[p]+s[u]}}}}createBoxes(e){this.cubes=Array.from({length:e}).fill(0).map((()=>new Be));const t=Array.from({length:e}).fill(0);this.cubes[0].r0=0,this.cubes[0].g0=0,this.cubes[0].b0=0,this.cubes[0].r1=32,this.cubes[0].g1=32,this.cubes[0].b1=32;let a=e,o=0;for(let i=1;i<e;i++){this.cut(this.cubes[o],this.cubes[i])?(t[o]=this.cubes[o].vol>1?this.variance(this.cubes[o]):0,t[i]=this.cubes[i].vol>1?this.variance(this.cubes[i]):0):(t[o]=0,i--),o=0;let e=t[0];for(let a=1;a<=i;a++)t[a]>e&&(e=t[a],o=a);if(e<=0){a=i+1;break}}return new Me(e,a)}createResult(e){const t=[];for(let a=0;a<e;++a){const e=this.cubes[a],o=this.volume(e,this.weights);if(o>0){const a=255<<24|(255&Math.round(this.volume(e,this.momentsR)/o))<<16|(255&Math.round(this.volume(e,this.momentsG)/o))<<8|255&Math.round(this.volume(e,this.momentsB)/o);t.push(a)}}return t}variance(e){const t=this.volume(e,this.momentsR),a=this.volume(e,this.momentsG),o=this.volume(e,this.momentsB);return this.moments[this.getIndex(e.r1,e.g1,e.b1)]-this.moments[this.getIndex(e.r1,e.g1,e.b0)]-this.moments[this.getIndex(e.r1,e.g0,e.b1)]+this.moments[this.getIndex(e.r1,e.g0,e.b0)]-this.moments[this.getIndex(e.r0,e.g1,e.b1)]+this.moments[this.getIndex(e.r0,e.g1,e.b0)]+this.moments[this.getIndex(e.r0,e.g0,e.b1)]-this.moments[this.getIndex(e.r0,e.g0,e.b0)]-(t*t+a*a+o*o)/this.volume(e,this.weights)}cut(e,t){const a=this.volume(e,this.momentsR),o=this.volume(e,this.momentsG),i=this.volume(e,this.momentsB),s=this.volume(e,this.weights),n=this.maximize(e,Ae,e.r0+1,e.r1,a,o,i,s),l=this.maximize(e,Fe,e.g0+1,e.g1,a,o,i,s),r=this.maximize(e,Te,e.b0+1,e.b1,a,o,i,s);let d;const m=n.maximum,c=l.maximum,u=r.maximum;if(m>=c&&m>=u){if(n.cutLocation<0)return!1;d=Ae}else d=c>=m&&c>=u?Fe:Te;switch(t.r1=e.r1,t.g1=e.g1,t.b1=e.b1,d){case Ae:e.r1=n.cutLocation,t.r0=e.r1,t.g0=e.g0,t.b0=e.b0;break;case Fe:e.g1=l.cutLocation,t.r0=e.r0,t.g0=e.g1,t.b0=e.b0;break;case Te:e.b1=r.cutLocation,t.r0=e.r0,t.g0=e.g0,t.b0=e.b1;break;default:throw new Error("unexpected direction "+d)}return e.vol=(e.r1-e.r0)*(e.g1-e.g0)*(e.b1-e.b0),t.vol=(t.r1-t.r0)*(t.g1-t.g0)*(t.b1-t.b0),!0}maximize(e,t,a,o,i,s,n,l){const r=this.bottom(e,t,this.momentsR),d=this.bottom(e,t,this.momentsG),m=this.bottom(e,t,this.momentsB),c=this.bottom(e,t,this.weights);let u=0,h=-1,p=0,b=0,f=0,g=0;for(let _=a;_<o;_++){if(p=r+this.top(e,t,_,this.momentsR),b=d+this.top(e,t,_,this.momentsG),f=m+this.top(e,t,_,this.momentsB),g=c+this.top(e,t,_,this.weights),0===g)continue;let a=1*(p*p+b*b+f*f),o=1*g,y=a/o;p=i-p,b=s-b,f=n-f,g=l-g,0!==g&&(a=1*(p*p+b*b+f*f),o=1*g,y+=a/o,y>u&&(u=y,h=_))}return new Le(h,u)}volume(e,t){return t[this.getIndex(e.r1,e.g1,e.b1)]-t[this.getIndex(e.r1,e.g1,e.b0)]-t[this.getIndex(e.r1,e.g0,e.b1)]+t[this.getIndex(e.r1,e.g0,e.b0)]-t[this.getIndex(e.r0,e.g1,e.b1)]+t[this.getIndex(e.r0,e.g1,e.b0)]+t[this.getIndex(e.r0,e.g0,e.b1)]-t[this.getIndex(e.r0,e.g0,e.b0)]}bottom(e,t,a){switch(t){case Ae:return-a[this.getIndex(e.r0,e.g1,e.b1)]+a[this.getIndex(e.r0,e.g1,e.b0)]+a[this.getIndex(e.r0,e.g0,e.b1)]-a[this.getIndex(e.r0,e.g0,e.b0)];case Fe:return-a[this.getIndex(e.r1,e.g0,e.b1)]+a[this.getIndex(e.r1,e.g0,e.b0)]+a[this.getIndex(e.r0,e.g0,e.b1)]-a[this.getIndex(e.r0,e.g0,e.b0)];case Te:return-a[this.getIndex(e.r1,e.g1,e.b0)]+a[this.getIndex(e.r1,e.g0,e.b0)]+a[this.getIndex(e.r0,e.g1,e.b0)]-a[this.getIndex(e.r0,e.g0,e.b0)];default:throw new Error("unexpected direction $direction")}}top(e,t,a,o){switch(t){case Ae:return o[this.getIndex(a,e.g1,e.b1)]-o[this.getIndex(a,e.g1,e.b0)]-o[this.getIndex(a,e.g0,e.b1)]+o[this.getIndex(a,e.g0,e.b0)];case Fe:return o[this.getIndex(e.r1,a,e.b1)]-o[this.getIndex(e.r1,a,e.b0)]-o[this.getIndex(e.r0,a,e.b1)]+o[this.getIndex(e.r0,a,e.b0)];case Te:return o[this.getIndex(e.r1,e.g1,a)]-o[this.getIndex(e.r1,e.g0,a)]-o[this.getIndex(e.r0,e.g1,a)]+o[this.getIndex(e.r0,e.g0,a)];default:throw new Error("unexpected direction $direction")}}getIndex(e,t,a){return(e<<10)+(e<<6)+e+(t<<5)+t+a}}class Be{constructor(e=0,t=0,a=0,o=0,i=0,s=0,n=0){this.r0=e,this.r1=t,this.g0=a,this.g1=o,this.b0=i,this.b1=s,this.vol=n}}class Me{constructor(e,t){this.requestedCount=e,this.resultCount=t}}class Le{constructor(e,t){this.cutLocation=e,this.maximum=t}}class Ee{static quantize(e,t){const a=(new Ie).quantize(e,t);return Se.quantize(e,a,t)}}class Oe{constructor(e){this.sourceColorArgb=e.sourceColorArgb,this.variant=e.variant,this.contrastLevel=e.contrastLevel,this.isDark=e.isDark,this.sourceColorHct=de.fromInt(e.sourceColorArgb),this.primaryPalette=e.primaryPalette,this.secondaryPalette=e.secondaryPalette,this.tertiaryPalette=e.tertiaryPalette,this.neutralPalette=e.neutralPalette,this.neutralVariantPalette=e.neutralVariantPalette,this.errorPalette=ke.fromHueAndChroma(25,84)}static getRotatedHue(e,t,a){const o=e.hue;if(t.length!==a.length)throw new Error(`mismatch between hue length ${t.length} & rotations ${a.length}`);if(1===a.length)return q(e.hue+a[0]);const i=t.length;for(let e=0;e<=i-2;e++){const i=t[e],s=t[e+1];if(i<o&&o<s)return q(o+a[e])}return o}}class Re{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(e){return Re.lightFromCorePalette(je.of(e))}static dark(e){return Re.darkFromCorePalette(je.of(e))}static lightContent(e){return Re.lightFromCorePalette(je.contentOf(e))}static darkContent(e){return Re.darkFromCorePalette(je.contentOf(e))}static lightFromCorePalette(e){return new Re({primary:e.a1.tone(40),onPrimary:e.a1.tone(100),primaryContainer:e.a1.tone(90),onPrimaryContainer:e.a1.tone(10),secondary:e.a2.tone(40),onSecondary:e.a2.tone(100),secondaryContainer:e.a2.tone(90),onSecondaryContainer:e.a2.tone(10),tertiary:e.a3.tone(40),onTertiary:e.a3.tone(100),tertiaryContainer:e.a3.tone(90),onTertiaryContainer:e.a3.tone(10),error:e.error.tone(40),onError:e.error.tone(100),errorContainer:e.error.tone(90),onErrorContainer:e.error.tone(10),background:e.n1.tone(99),onBackground:e.n1.tone(10),surface:e.n1.tone(99),onSurface:e.n1.tone(10),surfaceVariant:e.n2.tone(90),onSurfaceVariant:e.n2.tone(30),outline:e.n2.tone(50),outlineVariant:e.n2.tone(80),shadow:e.n1.tone(0),scrim:e.n1.tone(0),inverseSurface:e.n1.tone(20),inverseOnSurface:e.n1.tone(95),inversePrimary:e.a1.tone(80)})}static darkFromCorePalette(e){return new Re({primary:e.a1.tone(80),onPrimary:e.a1.tone(20),primaryContainer:e.a1.tone(30),onPrimaryContainer:e.a1.tone(90),secondary:e.a2.tone(80),onSecondary:e.a2.tone(20),secondaryContainer:e.a2.tone(30),onSecondaryContainer:e.a2.tone(90),tertiary:e.a3.tone(80),onTertiary:e.a3.tone(20),tertiaryContainer:e.a3.tone(30),onTertiaryContainer:e.a3.tone(90),error:e.error.tone(80),onError:e.error.tone(20),errorContainer:e.error.tone(30),onErrorContainer:e.error.tone(80),background:e.n1.tone(10),onBackground:e.n1.tone(90),surface:e.n1.tone(10),onSurface:e.n1.tone(90),surfaceVariant:e.n2.tone(30),onSurfaceVariant:e.n2.tone(80),outline:e.n2.tone(60),outlineVariant:e.n2.tone(30),shadow:e.n1.tone(0),scrim:e.n1.tone(0),inverseSurface:e.n1.tone(90),inverseOnSurface:e.n1.tone(20),inversePrimary:e.a1.tone(40)})}constructor(e){this.props=e}toJSON(){return{...this.props}}}class De extends Oe{constructor(e,t,a){super({sourceColorArgb:e.toInt(),variant:ue.EXPRESSIVE,contrastLevel:a,isDark:t,primaryPalette:ke.fromHueAndChroma(q(e.hue+240),40),secondaryPalette:ke.fromHueAndChroma(Oe.getRotatedHue(e,De.hues,De.secondaryRotations),24),tertiaryPalette:ke.fromHueAndChroma(Oe.getRotatedHue(e,De.hues,De.tertiaryRotations),32),neutralPalette:ke.fromHueAndChroma(e.hue+15,8),neutralVariantPalette:ke.fromHueAndChroma(e.hue+15,12)})}}De.hues=[0,21,51,121,151,191,271,321,360],De.secondaryRotations=[45,95,45,20,45,90,45,45,45],De.tertiaryRotations=[120,120,20,45,20,15,20,120,120];class Ne extends Oe{constructor(e,t,a){super({sourceColorArgb:e.toInt(),variant:ue.VIBRANT,contrastLevel:a,isDark:t,primaryPalette:ke.fromHueAndChroma(e.hue,200),secondaryPalette:ke.fromHueAndChroma(Oe.getRotatedHue(e,Ne.hues,Ne.secondaryRotations),24),tertiaryPalette:ke.fromHueAndChroma(Oe.getRotatedHue(e,Ne.hues,Ne.tertiaryRotations),32),neutralPalette:ke.fromHueAndChroma(e.hue,10),neutralVariantPalette:ke.fromHueAndChroma(e.hue,12)})}}Ne.hues=[0,41,61,101,131,181,251,301,360],Ne.secondaryRotations=[18,15,10,12,15,18,15,12,12],Ne.tertiaryRotations=[35,30,20,25,30,35,30,25,25];const qe={desired:4,fallbackColorARGB:4282549748,filter:!0};function He(e,t){return e.score>t.score?-1:e.score<t.score?1:0}class ze{constructor(){}static score(e,t){const{desired:a,fallbackColorARGB:o,filter:i}={...qe,...t},s=[],n=new Array(360).fill(0);let l=0;for(const[t,a]of e.entries()){const e=de.fromInt(t);s.push(e),n[Math.floor(e.hue)]+=a,l+=a}const r=new Array(360).fill(0);for(let e=0;e<360;e++){const t=n[e]/l;for(let a=e-14;a<e+16;a++)r[N(a)]+=t}const d=new Array;for(const e of s){const t=r[N(Math.round(e.hue))];if(i&&(e.chroma<ze.CUTOFF_CHROMA||t<=ze.CUTOFF_EXCITED_PROPORTION))continue;const a=100*t*ze.WEIGHT_PROPORTION,o=e.chroma<ze.TARGET_CHROMA?ze.WEIGHT_CHROMA_BELOW:ze.WEIGHT_CHROMA_ABOVE,s=a+(e.chroma-ze.TARGET_CHROMA)*o;d.push({hct:e,score:s})}d.sort(He);const m=[];for(let e=90;e>=15;e--){m.length=0;for(const{hct:t}of d)if(m.find((a=>H(t.hue,a.hue)<e))||m.push(t),m.length>=a)break;if(m.length>=a)break}const c=[];0===m.length&&c.push(o);for(const e of m)c.push(e.toInt());return c}}function Ye(e){const t=X(e),a=K(e),o=J(e),i=[t.toString(16),a.toString(16),o.toString(16)];for(const[e,t]of i.entries())1===t.length&&(i[e]="0"+t);return"#"+i.join("")}function Ue(e){return parseInt(e,16)}function Ve(e,t=[]){const a=je.of(e);return{source:e,schemes:{light:Re.light(e),dark:Re.dark(e)},palettes:{primary:a.a1,secondary:a.a2,tertiary:a.a3,neutral:a.n1,neutralVariant:a.n2,error:a.error},customColors:t.map((t=>function(e,t){let a=t.value;const o=a,i=e;t.blend&&(a=me.harmonize(o,i));const s=je.of(a).a1;return{color:t,value:a,light:{color:s.tone(40),onColor:s.tone(100),colorContainer:s.tone(90),onColorContainer:s.tone(10)},dark:{color:s.tone(80),onColor:s.tone(20),colorContainer:s.tone(30),onColorContainer:s.tone(90)}}}(e,t)))}}function We(e,t,a=""){for(const[o,i]of Object.entries(t.toJSON())){const t=o.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),s=Ye(i);e.style.setProperty(`--md-sys-color-${t}${a}`,s)}}async function Ge(e,t){let a;a=function(e){return/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e)}(e)?Ve(function(e){const t=3===(e=e.replace("#","")).length,a=6===e.length,o=8===e.length;if(!t&&!a&&!o)throw new Error("unexpected hex "+e);let i=0,s=0,n=0;return t?(i=Ue(e.slice(0,1).repeat(2)),s=Ue(e.slice(1,2).repeat(2)),n=Ue(e.slice(2,3).repeat(2))):a?(i=Ue(e.slice(0,2)),s=Ue(e.slice(2,4)),n=Ue(e.slice(4,6))):o&&(i=Ue(e.slice(2,4)),s=Ue(e.slice(4,6)),n=Ue(e.slice(6,8))),(255<<24|(255&i)<<16|(255&s)<<8|255&n)>>>0}(e),t):await async function(e,t=[]){const a=await async function(e){const t=await new Promise(((t,a)=>{const o=document.createElement("canvas"),i=o.getContext("2d");if(!i)return void a(new Error("Could not get canvas context"));const s=()=>{o.width=e.width,o.height=e.height,i.drawImage(e,0,0);let a=[0,0,e.width,e.height];const s=e.dataset.area;s&&/^\d+(\s*,\s*\d+){3}$/.test(s)&&(a=s.split(/\s*,\s*/).map((e=>parseInt(e,10))));const[n,l,r,d]=a;t(i.getImageData(n,l,r,d).data)};e.complete?s():e.onload=s})),a=[];for(let e=0;e<t.length;e+=4){const o=t[e],i=t[e+1],s=t[e+2];if(t[e+3]<255)continue;const n=W(o,i,s);a.push(n)}const o=Ee.quantize(a,128);return ze.score(o)[0]}(e);return Ve(a,t)}(e,t),a.schemes.dark.props.surfaceDim=a.palettes.neutral.tone(6),a.schemes.dark.props.surfaceBright=a.palettes.neutral.tone(24),a.schemes.dark.props.surfaceContainerLowest=a.palettes.neutral.tone(4),a.schemes.dark.props.surfaceContainerLow=a.palettes.neutral.tone(10),a.schemes.dark.props.surfaceContainer=a.palettes.neutral.tone(12),a.schemes.dark.props.surfaceContainerHigh=a.palettes.neutral.tone(17),a.schemes.dark.props.surfaceContainerHighest=a.palettes.neutral.tone(22),a.schemes.light.props.surfaceDim=a.palettes.neutral.tone(87),a.schemes.light.props.surfaceBright=a.palettes.neutral.tone(98),a.schemes.light.props.surfaceContainerLowest=a.palettes.neutral.tone(100),a.schemes.light.props.surfaceContainerLow=a.palettes.neutral.tone(96),a.schemes.light.props.surfaceContainer=a.palettes.neutral.tone(94),a.schemes.light.props.surfaceContainerHigh=a.palettes.neutral.tone(92),a.schemes.light.props.surfaceContainerHighest=a.palettes.neutral.tone(90);const o=window.matchMedia("(prefers-color-scheme: dark)").matches;!function(e,t){const a=t?.target||document.body;if(We(a,t?.dark?e.schemes.dark:e.schemes.light),t?.brightnessSuffix&&(We(a,e.schemes.dark,"-dark"),We(a,e.schemes.light,"-light")),t?.paletteTones){const o=t?.paletteTones??[];for(const[t,i]of Object.entries(e.palettes)){const e=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();for(const t of o){const o=`--md-ref-palette-${e}-${e}${t}`,s=Ye(i.tone(t));a.style.setProperty(o,s)}}}}(a,{target:document.body,dark:o})}ze.TARGET_CHROMA=48,ze.WEIGHT_PROPORTION=.7,ze.WEIGHT_CHROMA_ABOVE=.3,ze.WEIGHT_CHROMA_BELOW=.1,ze.CUTOFF_CHROMA=5,ze.CUTOFF_EXCITED_PROPORTION=.01;const Xe=globalThis,Ke=Xe.ShadowRoot&&(void 0===Xe.ShadyCSS||Xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Je=Symbol(),Ze=new WeakMap;class Qe{constructor(e,t,a){if(this._$cssResult$=!0,a!==Je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ke&&void 0===e){const a=void 0!==t&&1===t.length;a&&(e=Ze.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&Ze.set(t,e))}return e}toString(){return this.cssText}}const et=(e,t)=>{if(Ke)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const a of t){const t=document.createElement("style"),o=Xe.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=a.cssText,e.appendChild(t)}},tt=Ke?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return(e=>new Qe("string"==typeof e?e:e+"",void 0,Je))(t)})(e):e,{is:at,defineProperty:ot,getOwnPropertyDescriptor:it,getOwnPropertyNames:st,getOwnPropertySymbols:nt,getPrototypeOf:lt}=Object,rt=globalThis,dt=rt.trustedTypes,mt=dt?dt.emptyScript:"",ct=rt.reactiveElementPolyfillSupport,ut=(e,t)=>e,ht={toAttribute(e,t){switch(t){case Boolean:e=e?mt:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},pt=(e,t)=>!at(e,t),bt={attribute:!0,type:String,converter:ht,reflect:!1,hasChanged:pt};Symbol.metadata??=Symbol("metadata"),rt.litPropertyMetadata??=new WeakMap;class ft extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=bt){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),o=this.getPropertyDescriptor(e,a,t);void 0!==o&&ot(this.prototype,e,o)}}static getPropertyDescriptor(e,t,a){const{get:o,set:i}=it(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const s=o?.call(this);i.call(this,t),this.requestUpdate(e,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??bt}static _$Ei(){if(this.hasOwnProperty(ut("elementProperties")))return;const e=lt(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ut("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ut("properties"))){const e=this.properties,t=[...st(e),...nt(e)];for(const a of t)this.createProperty(a,e[a])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,a]of t)this.elementProperties.set(e,a)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const a=this._$Eu(e,t);void 0!==a&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const e of a)t.unshift(tt(e))}else void 0!==e&&t.push(tt(e));return t}static _$Eu(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return et(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$EC(e,t){const a=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,a);if(void 0!==o&&!0===a.reflect){const i=(void 0!==a.converter?.toAttribute?a.converter:ht).toAttribute(t,a.type);this._$Em=e,null==i?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){const a=this.constructor,o=a._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=a.getPropertyOptions(o),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:ht;this._$Em=o,this[o]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,a){if(void 0!==e){if(a??=this.constructor.getPropertyOptions(e),!(a.hasChanged??pt)(this[e],t))return;this.P(e,t,a)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,a){this._$AL.has(e)||this._$AL.set(e,t),!0===a.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,a]of e)!0!==a.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],a)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}ft.elementStyles=[],ft.shadowRootOptions={mode:"open"},ft[ut("elementProperties")]=new Map,ft[ut("finalized")]=new Map,ct?.({ReactiveElement:ft}),(rt.reactiveElementVersions??=[]).push("2.0.4");const gt=globalThis,_t=gt.trustedTypes,yt=_t?_t.createPolicy("lit-html",{createHTML:e=>e}):void 0,vt="$lit$",kt=`lit$${Math.random().toFixed(9).slice(2)}$`,jt="?"+kt,xt=`<${jt}>`,St=document,Ct=()=>St.createComment(""),wt=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Pt=Array.isArray,$t="[ \t\n\f\r]",At=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ft=/-->/g,Tt=/>/g,It=RegExp(`>|${$t}(?:([^\\s"'>=/]+)(${$t}*=${$t}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Bt=/'/g,Mt=/"/g,Lt=/^(?:script|style|textarea|title)$/i,Et=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),Ot=Et(1),Rt=(Et(2),Symbol.for("lit-noChange")),Dt=Symbol.for("lit-nothing"),Nt=new WeakMap,qt=St.createTreeWalker(St,129);function Ht(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==yt?yt.createHTML(t):t}const zt=(e,t)=>{const a=e.length-1,o=[];let i,s=2===t?"<svg>":"",n=At;for(let t=0;t<a;t++){const a=e[t];let l,r,d=-1,m=0;for(;m<a.length&&(n.lastIndex=m,r=n.exec(a),null!==r);)m=n.lastIndex,n===At?"!--"===r[1]?n=Ft:void 0!==r[1]?n=Tt:void 0!==r[2]?(Lt.test(r[2])&&(i=RegExp("</"+r[2],"g")),n=It):void 0!==r[3]&&(n=It):n===It?">"===r[0]?(n=i??At,d=-1):void 0===r[1]?d=-2:(d=n.lastIndex-r[2].length,l=r[1],n=void 0===r[3]?It:'"'===r[3]?Mt:Bt):n===Mt||n===Bt?n=It:n===Ft||n===Tt?n=At:(n=It,i=void 0);const c=n===It&&e[t+1].startsWith("/>")?" ":"";s+=n===At?a+xt:d>=0?(o.push(l),a.slice(0,d)+vt+a.slice(d)+kt+c):a+kt+(-2===d?t:c)}return[Ht(e,s+(e[a]||"<?>")+(2===t?"</svg>":"")),o]};class Yt{constructor({strings:e,_$litType$:t},a){let o;this.parts=[];let i=0,s=0;const n=e.length-1,l=this.parts,[r,d]=zt(e,t);if(this.el=Yt.createElement(r,a),qt.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=qt.nextNode())&&l.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(vt)){const t=d[s++],a=o.getAttribute(e).split(kt),n=/([.?@])?(.*)/.exec(t);l.push({type:1,index:i,name:n[2],strings:a,ctor:"."===n[1]?Xt:"?"===n[1]?Kt:"@"===n[1]?Jt:Gt}),o.removeAttribute(e)}else e.startsWith(kt)&&(l.push({type:6,index:i}),o.removeAttribute(e));if(Lt.test(o.tagName)){const e=o.textContent.split(kt),t=e.length-1;if(t>0){o.textContent=_t?_t.emptyScript:"";for(let a=0;a<t;a++)o.append(e[a],Ct()),qt.nextNode(),l.push({type:2,index:++i});o.append(e[t],Ct())}}}else if(8===o.nodeType)if(o.data===jt)l.push({type:2,index:i});else{let e=-1;for(;-1!==(e=o.data.indexOf(kt,e+1));)l.push({type:7,index:i}),e+=kt.length-1}i++}}static createElement(e,t){const a=St.createElement("template");return a.innerHTML=e,a}}function Ut(e,t,a=e,o){if(t===Rt)return t;let i=void 0!==o?a._$Co?.[o]:a._$Cl;const s=wt(t)?void 0:t._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),void 0===s?i=void 0:(i=new s(e),i._$AT(e,a,o)),void 0!==o?(a._$Co??=[])[o]=i:a._$Cl=i),void 0!==i&&(t=Ut(e,i._$AS(e,t.values),i,o)),t}class Vt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,o=(e?.creationScope??St).importNode(t,!0);qt.currentNode=o;let i=qt.nextNode(),s=0,n=0,l=a[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new Wt(i,i.nextSibling,this,e):1===l.type?t=new l.ctor(i,l.name,l.strings,this,e):6===l.type&&(t=new Zt(i,this,e)),this._$AV.push(t),l=a[++n]}s!==l?.index&&(i=qt.nextNode(),s++)}return qt.currentNode=St,o}p(e){let t=0;for(const a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class Wt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,a,o){this.type=2,this._$AH=Dt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ut(this,e,t),wt(e)?e===Dt||null==e||""===e?(this._$AH!==Dt&&this._$AR(),this._$AH=Dt):e!==this._$AH&&e!==Rt&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>Pt(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==Dt&&wt(this._$AH)?this._$AA.nextSibling.data=e:this.T(St.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:a}=e,o="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=Yt.createElement(Ht(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Vt(o,this),a=e.u(this.options);e.p(t),this.T(a),this._$AH=e}}_$AC(e){let t=Nt.get(e.strings);return void 0===t&&Nt.set(e.strings,t=new Yt(e)),t}k(e){Pt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,o=0;for(const i of e)o===t.length?t.push(a=new Wt(this.S(Ct()),this.S(Ct()),this,this.options)):a=t[o],a._$AI(i),o++;o<t.length&&(this._$AR(a&&a._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class Gt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,o,i){this.type=1,this._$AH=Dt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=i,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=Dt}_$AI(e,t=this,a,o){const i=this.strings;let s=!1;if(void 0===i)e=Ut(this,e,t,0),s=!wt(e)||e!==this._$AH&&e!==Rt,s&&(this._$AH=e);else{const o=e;let n,l;for(e=i[0],n=0;n<i.length-1;n++)l=Ut(this,o[a+n],t,n),l===Rt&&(l=this._$AH[n]),s||=!wt(l)||l!==this._$AH[n],l===Dt?e=Dt:e!==Dt&&(e+=(l??"")+i[n+1]),this._$AH[n]=l}s&&!o&&this.j(e)}j(e){e===Dt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Xt extends Gt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Dt?void 0:e}}class Kt extends Gt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Dt)}}class Jt extends Gt{constructor(e,t,a,o,i){super(e,t,a,o,i),this.type=5}_$AI(e,t=this){if((e=Ut(this,e,t,0)??Dt)===Rt)return;const a=this._$AH,o=e===Dt&&a!==Dt||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,i=e!==Dt&&(a===Dt||o);o&&this.element.removeEventListener(this.name,this,a),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Zt{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){Ut(this,e)}}const Qt=gt.litHtmlPolyfillSupport;Qt?.(Yt,Wt),(gt.litHtmlVersions??=[]).push("3.1.4");class ea extends ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,a)=>{const o=a?.renderBefore??t;let i=o._$litPart$;if(void 0===i){const e=a?.renderBefore??null;o._$litPart$=i=new Wt(t.insertBefore(Ct(),e),e,void 0,a??{})}return i._$AI(e),i})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Rt}}ea._$litElement$=!0,ea.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ea});const ta=globalThis.litElementPolyfillSupport;ta?.({LitElement:ea}),(globalThis.litElementVersions??=[]).push("4.0.6");class aa extends ea{constructor(){var e;super(),(e=this).addController(new h(e))}createRenderRoot(){return this}on(e,t){t=t.bind(this),this.addEventListener(e,t)}once(e,t){const a=o=>{t(o),this.off(e,a)};this.on(e,a)}off(e,t){this.removeEventListener(e,t)}emit(e,t){const a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});this.dispatchEvent(a)}}customElements.define("md-icon",class extends aa{connectedCallback(){super.connectedCallback(),this.classList.add("md-icon")}}),customElements.define("md-emoji",class extends aa{connectedCallback(){super.connectedCallback(),this.classList.add("md-emoji")}});class oa{constructor(e,t={}){(this.host=e).addController(this),this.options={buttonSelector:null,centered:!1,clipped:!1,containerSelector:null,fadeOut:!1,size:null,...t}}async hostConnected(){await this.host.updateComplete,this.container=this.options.containerSelector?this.host.querySelector(this.options.containerSelector):this.host,this.button=this.options.buttonSelector?this.host.querySelector(this.options.buttonSelector):this.host,this.container.classList.add("md-ripple"),this.button.classList.add("md-ripple--button"),this.button.setAttribute("tabIndex",0),this.container.classList.toggle("md-ripple--clipped",!!this.options.clipped),this.container.classList.toggle("md-ripple--fade-out",!!this.options.fadeOut),this.options.size?this.size=this.options.size/this.container.clientWidth*100:this.size=Math.sqrt(Math.pow(this.container.clientWidth,2)+Math.pow(this.container.clientHeight,2))/this.container.clientWidth*100,this.container.style.setProperty("--md-comp-ripple-size",`${this.size}%`),this.container.style.setProperty("--md-comp-ripple-animation","none"),this.handleRipplePointerenter=this.handleRipplePointerenter.bind(this),this.handleRipplePointerleave=this.handleRipplePointerleave.bind(this),this.handleRipplePointerdown=this.handleRipplePointerdown.bind(this),this.handleRipplePointerup=this.handleRipplePointerup.bind(this),this.handleRippleFocus=this.handleRippleFocus.bind(this),this.handleRippleBlur=this.handleRippleBlur.bind(this),this.button.addEventListener("pointerenter",this.handleRipplePointerenter),this.button.addEventListener("pointerleave",this.handleRipplePointerleave),this.button.addEventListener("pointerdown",this.handleRipplePointerdown),this.button.addEventListener("focus",this.handleRippleFocus),this.button.addEventListener("blur",this.handleRippleBlur)}async hostDisconnected(){await this.host.updateComplete,this.container.classList.remove("md-ripple"),this.button.classList.remove("md-ripple--button"),this.button.removeAttribute("tabIndex"),this.container.classList.remove("md-ripple--clipped"),this.container.classList.remove("md-ripple--fade-out"),this.container.style.removeProperty("--md-comp-ripple-size"),this.button.removeEventListener("pointerenter",this.handleRipplePointerenter),this.button.removeEventListener("pointerleave",this.handleRipplePointerleave),this.button.removeEventListener("pointerdown",this.handleRipplePointerdown),this.button.removeEventListener("focus",this.handleRippleFocus),this.button.removeEventListener("blur",this.handleRippleBlur)}handleRipplePointerenter(){this.container.style.removeProperty("--md-comp-ripple-animation"),this.container.classList.add("md-ripple--hover")}handleRipplePointerleave(){this.container.classList.remove("md-ripple--hover")}handleRipplePointerdown(e){this.container.classList.add("md-ripple--pressed"),window.addEventListener("pointerup",this.handleRipplePointerup),this.container.style.setProperty("--md-comp-ripple-animation","none");const t=this.container.getBoundingClientRect();if(this.container.style.removeProperty("--md-comp-ripple-animation"),!this.options.centered){const a=this.size,o=(e.clientX-t.left)/t.width,i=(e.clientY-t.top)/t.height,s=100/a*(.5-o),n=(.5-i)*(100/a*(t.height/t.width));this.container.style.setProperty("--md-comp-ripple-size",`${a}%`),this.container.style.setProperty("--md-comp-ripple-left",100*o+"%"),this.container.style.setProperty("--md-comp-ripple-top",100*i+"%"),this.container.style.setProperty("--md-comp-ripple-x",100*s+"%"),this.container.style.setProperty("--md-comp-ripple-y",100*n+"%")}}handleRipplePointerup(){this.container.classList.remove("md-ripple--pressed"),window.removeEventListener("pointerup",this.handleRipplePointerup)}handleRippleFocus(){this.container.classList.add("md-ripple--focused")}handleRippleBlur(){this.container.classList.remove("md-ripple--focused")}}class ia extends aa{static properties={variant:{type:String},type:{type:String},icon:{type:String},label:{type:String},selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};variants=["elevated","filled","tonal","outlined","icon-right"];constructor(){super(),this.type="button",this.ripple=new oa(this,{buttonSelector:".md-button__native",clipped:!0})}render(){return Ot`
            <button class="md-button__native" .type="${this.type}">
                ${this.icon?Ot`<div class="md-icon md-button__icon">${this.icon}</div>`:Dt}
                <div class="md-button__label">${this.label}</div>
            </button>
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-button")}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`md-button--${t}`,(this.variant??"").split(" ").includes(t))}e.has("disabled")&&(this.disabled?(this.setAttribute("aria-disabled","true"),this.setAttribute("tabindex","-1")):(this.removeAttribute("aria-disabled"),this.removeAttribute("tabindex")))}}customElements.define("md-button",ia);class sa extends aa{static properties={variant:{type:String},icon:{type:String},selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};variants=["filled","tonal","outlined","toggle"];constructor(){super(),this.ripple=new oa(this,{size:40,centered:!0,fadeOut:!0})}render(){return this.icon?Ot`<div class="md-icon md-icon-button__icon">${this.icon}</div>`:Dt}connectedCallback(){super.connectedCallback(),this.classList.add("md-icon-button"),this.on("click",this.handleIconButtonClick)}disconnectedCallback(){super.disconnectedCallback(),this.off("click",this.handleIconButtonClick)}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`md-icon-button--${t}`,(this.variant??"").split(" ").includes(t))}e.has("disabled")&&(this.disabled?(this.setAttribute("aria-disabled","true"),this.setAttribute("tabindex","-1")):(this.removeAttribute("aria-disabled"),this.removeAttribute("tabindex")))}handleIconButtonClick(e){this.variant&&this.variant.includes("toggle")&&(this.selected=!this.selected),this.emit("onIconButtonClick",e)}}customElements.define("md-icon-button",sa);const na=e=>e??Dt,la=(e,t,a)=>{for(const a of t)if(a[0]===e)return(0,a[1])();return a?.()};class ra extends aa{static properties={variant:{type:String},leadingActions:{type:Array},label:{type:String},subLabel:{type:String},trailingActions:{type:Array},actions:{type:Array}};variants=["elevated","filled","outlined"];constructor(){super(),this.body=Array.from(this.childNodes),this.renderIconButton=this.renderIconButton.bind(this),this.renderButton=this.renderButton.bind(this),this.renderFab=this.renderFab.bind(this)}renderIconButton(e){return Ot`
            <md-icon-button
                class="md-card__icon-button"
                name="${na(e.name)}"
                .name="${na(e.name)}"
                .variant="${na(e.variant)}"
                .icon="${na(e.icon)}"
                .selected="${na(e.selected)}"
                .disabled="${na(e.disabled)}"
                @click="${this.handleCardIconButtonClick}"
            ></md-icon-button>
        `}renderIcon(e){return Ot`
            <div
                class="md-icon md-card__icon"
                name="${na(e.name)}"
                .name="${na(e.name)}"
                @click="${this.handleCardIconClick}"
            >${e.icon}</div>
        `}renderButton(e){return Ot`
            <md-button
                class="md-card__button"
                name="${na(e.name)}"
                .name="${na(e.name)}"
                .variant="${na(e.variant)}"
                .type="${na(e.type)}"
                .icon="${na(e.icon)}"
                .label="${na(e.label)}"
                .selected="${na(e.selected)}"
                .disabled="${na(e.disabled)}"
                @click="${this.handleCardButtonClick}"
            ></md-button>
        `}renderFab(e){return Ot`
            <md-fab
                class="md-card__fab"
                name="${na(e.name)}"
                .name="${na(e.name)}"
                .variant="${na(e.variant)}"
                .icon="${na(e.icon)}"
                .label="${na(e.label)}"
                @click="${this.handleCardFabClick}"
            ></md-fab>
        `}renderTextField(e){return Ot`
            <md-text-field
                class="md-card__text-field"
                name="${na(e.name)}"
                .label="${na(e.label)}"
                .icon="${na(e.icon)}"
                .prefix="${na(e.prefix)}"
                .suffix="${na(e.suffix)}"
                .actions="${na(e.actions)}"
                .text="${na(e.text)}"
                .accept="${na(e.accept)}"
                .alt="${na(e.alt)}"
                .autocomplete="${na(e.autocomplete)}"
                .autofocus="${na(e.autofocus)}"
                .checked="${na(e.checked)}"
                .defaultChecked="${na(e.defaultChecked)}"
                .disabled="${na(e.disabled)}"
                .files="${na(e.files)}"
                .form="${na(e.form)}"
                .formAction="${na(e.formAction)}"
                .formEnctype="${na(e.formEnctype)}"
                .formMethod="${na(e.formMethod)}"
                .formNoValidate="${na(e.formNoValidate)}"
                .formTarget="${na(e.formTarget)}"
                .height="${na(e.height)}"
                .indeterminate="${na(e.indeterminate)}"
                .list="${na(e.list)}"
                .max="${na(e.max)}"
                .maxLength="${na(e.maxLength)}"
                .min="${na(e.min)}"
                .minLength="${na(e.minLength)}"
                .multiple="${na(e.multiple)}"
                .name="${na(e.name)}"
                .pattern="${na(e.pattern)}"
                .placeholder="${na(e.placeholder)}"
                .readOnly="${na(e.readOnly)}"
                .required="${na(e.required)}"
                .size="${na(e.size)}"
                .src="${na(e.src)}"
                .step="${na(e.step)}"
                .type="${na(e.type)}"
                .defaultValue="${na(e.defaultValue)}"
                .value="${na(e.value)}"
                .width="${na(e.width)}"
                .inputMode="${na(e.inputMode)}"
                .selectionDirection="${na(e.selectionDirection)}"
                .selectionEnd="${na(e.selectionEnd)}"
                .selectionStart="${na(e.selectionStart)}"
                .align="${na(e.align)}"
                .useMap="${na(e.useMap)}"
                .cols="${na(e.cols)}"
                .rows="${na(e.rows)}"
                .spellcheck="${na(e.spellcheck)}"
                .wrap="${na(e.wrap)}"
                .length="${na(e.length)}"
                .selectedIndex="${na(e.selectedIndex)}"
                .selectedOptions="${na(e.selectedOptions)}"
                .options="${na(e.options)}"
                .errorText="${na(e.errorText)}"
                .error="${na(e.error)}"
                .variant="${na(e.variant)}"
            ></md-text-field>
        `}renderAction(e,t=this.renderButton){return la(e.component,[["text-field",()=>this.renderTextField(e)],["icon-button",()=>this.renderIconButton(e)],["icon",()=>this.renderIcon(e)],["button",()=>this.renderButton(e)],["fab",()=>this.renderFab(e)],["spacer",()=>Ot`<div class="md-pane__spacer"></div>`]],(()=>t(e)))}renderHeader(){return this.leadingActions?.length||this.label||this.subLabel||this.trailingActions?.length?Ot`
            <div class="md-card__header">
                ${this.leadingActions?.length?Ot`
                    <div class="md-card__actions">
                        ${this.leadingActions.map((e=>this.renderAction(e,this.renderIconButton)))}
                    </div>
                `:Dt}
                ${this.label||this.subLabel?Ot`
                    <div class="md-card__label">
                        ${this.label?Ot`<div class="md-card__label-primary">${this.label}</div>`:Dt}
                        ${this.subLabel?Ot`<div class="md-card__label-secondary">${this.subLabel}</div>`:Dt}
                    </div>
                `:Dt}
                ${this.trailingActions?.length?Ot`
                    <div class="md-card__actions md-card__actions--end">
                        ${this.trailingActions.map((e=>this.renderAction(e,this.renderIconButton)))}
                    </div>
                `:Dt}
            </div>
        `:Dt}renderBody(){return this.body?.length||this.actions?.length?Ot`
            <div class="md-card__body">
                ${this.body?.length?Ot`<div class="md-card__inner">${this.body}</div>`:Dt}
                ${this.actions?.length?Ot`
                    <div class="md-card__footer">
                        ${this.actions.map((e=>this.renderAction(e,this.renderButton)))}
                    </div>
                `:Dt}
            </div>
        `:Dt}render(){return Ot`
            ${this.renderHeader()}
            ${this.renderBody()}
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.variant&&this.variant.includes("interactive")&&(this.ripple=new oa(this,{clipped:!0}))}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`${this.localName}--${t}`,(this.variant??"").split(" ").includes(t))}}handleCardIconButtonClick(e){this.emit("onCardIconButtonClick",e)}handleCardButtonClick(e){this.emit("onCardButtonClick",e)}handleCardFabClick(e){this.emit("onCardFabClick",e)}}customElements.define("md-card",ra);class da extends aa{static properties={...aa.properties,open:{type:Boolean,reflect:!0}};connectedCallback(){super.connectedCallback(),this.classList.add("md-scrim")}show(){this.open=!0}close(){this.open=!1}toggle(){this.open?this.close():this.show()}}customElements.define("md-scrim",da);class ma extends ra{static properties={...ra.properties,open:{type:Boolean,reflect:!0}};variants=["north","east","south","west","modal"];connectedCallback(){super.connectedCallback(),this.style.setProperty("--md-comp-sheet-animation","none"),this.classList.add("md-card"),this.classList.add("md-sheet")}showModal(){this.style.removeProperty("--md-comp-sheet-animation"),this.style.setProperty("--md-comp-sheet-height",this.clientHeight+"px"),this.style.setProperty("--md-comp-sheet-width",this.clientWidth+"px"),this.scrim=document.createElement("md-scrim"),this.parentElement.insertBefore(this.scrim,this.nextElementSibling),this.handleSheetScrimClick=this.handleSheetScrimClick.bind(this),this.scrim.on("click",this.handleSheetScrimClick),this.scrim.show(),this.open=!0}handleSheetScrimClick(e){this.close(),this.emit("onSheetScrimClick",e)}show(){this.style.removeProperty("--md-comp-sheet-animation"),this.style.setProperty("--md-comp-sheet-height",this.clientHeight+"px"),this.style.setProperty("--md-comp-sheet-width",this.clientWidth+"px"),this.open=!0}close(){this.style.removeProperty("--md-comp-sheet-animation"),this.style.setProperty("--md-comp-sheet-height",this.clientHeight+"px"),this.style.setProperty("--md-comp-sheet-width",this.clientWidth+"px"),this.scrim&&(this.scrim.off("click",this.handleSheetScrimClick),this.scrim.remove(),this.scrim=null),this.open=!1}toggle(...e){this.open?this.close():this.show(...e)}}customElements.define("md-sheet",ma),customElements.define("md-dialog",class extends ma{variants=["full"];connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-dialog")}}),customElements.define("md-top-app-bar",class extends ma{variants=["center","small","medium","large"];connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-top-app-bar")}}),customElements.define("md-side-sheet",class extends ma{variants=["modal"];connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-side-sheet")}}),customElements.define("md-bottom-sheet",class extends ma{variants=["modal"];connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-bottom-sheet")}});class ca extends aa{static properties={...aa.properties,buttons:{type:Array},singleSelect:{type:Boolean,attribute:"single-select"},multiSelect:{type:Boolean,attribute:"multi-select"}};renderButton(e){return Ot`
            <md-button
                class="md-segmented-button__item"
                .data="${e}"
                .name="${na(e.name)}"
                .variant="${e.variant??"outlined"}"
                .type="${na(e.type)}"
                .icon="${na(e.selected?"check":e.icon)}"
                .label="${na(e.label)}"
                .selected="${na(e.selected)}"
                .disabled="${na(e.disabled)}"
                @click="${this.handleSegmentedButtonItemClick}"
            ></md-button>
        `}render(){return this.buttons.map((e=>this.renderButton(e)))}connectedCallback(){super.connectedCallback(),this.classList.add("md-segmented-button")}handleSegmentedButtonItemClick(e){if(this.multiSelect||this.singleSelect){const t=e.currentTarget.data;if(this.multiSelect)t.selected=!t.selected;else if(this.singleSelect)for(let e=0;e<this.buttons.length;e++){let a=this.buttons[e];a.selected=a===t}this.requestUpdate()}this.emit("onSegmentedButtonItemClick",e)}}customElements.define("md-segmented-button",ca);class ua extends ma{static properties={...ma.properties};static queue=(()=>{let e=Promise.resolve();return(t=(()=>{}))=>e=(async(t=(()=>{}))=>{let a;try{await e}finally{a=t()}return a})(t)})();connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-snackbar")}show(){return ua.queue((()=>new Promise((e=>{this.timeout=window.setTimeout((()=>{this.close()}),4e3),this.once("animationend",(t=>{"snackbarOut"==t.animationName&&(window.clearTimeout(this.timeout),e())})),super.show(),this.emit("onSnackbarShow",this)}))))}close(){super.close(),this.emit("onSnackbarClose",this)}}customElements.define("md-snackbar",ua);class ha{constructor(e,t={}){this.host=e,this.options={placements:["center","top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end","above","above-start","above-end","after","after-start","after-end","below","below-start","below-end","before","before-start","before-end","north-east","south-east","south-west","north-west"],boundary:document.documentElement,offset:0,...t}}async setPlacement(e,t={}){this.button=e,this.options={...this.options,...t},this.container=this.host,this.boundary=this.options.boundary;const a={above:()=>({left:this.buttonRect.left+(this.buttonRect.width-this.containerRect.width)/2,top:this.buttonRect.top-this.containerRect.height-this.options.offset,originX:"50%",originY:"100%"}),"above-start":()=>({left:this.buttonRect.left,top:this.buttonRect.top-this.containerRect.height-this.options.offset,originX:"0%",originY:"100%"}),"above-end":()=>({left:this.buttonRect.left+this.buttonRect.width-this.containerRect.width,top:this.buttonRect.top-this.containerRect.height-this.options.offset,originX:"100%",originY:"100%"}),after:()=>({left:this.buttonRect.right+this.options.offset,top:this.buttonRect.top+(this.buttonRect.height-this.containerRect.height)/2,originX:"0%",originY:"50%"}),"after-start":()=>({left:this.buttonRect.right+this.options.offset,top:this.buttonRect.top,originX:"0%",originY:"0%"}),"after-end":()=>({left:this.buttonRect.right+this.options.offset,top:this.buttonRect.top+this.buttonRect.height-this.containerRect.height,originX:"0%",originY:"100%"}),below:()=>({left:this.buttonRect.left+(this.buttonRect.width-this.containerRect.width)/2,top:this.buttonRect.bottom+this.options.offset,originX:"50%",originY:"0%"}),"below-start":()=>({left:this.buttonRect.left,top:this.buttonRect.bottom+this.options.offset,originX:"0%",originY:"0%"}),"below-end":()=>({left:this.buttonRect.left+this.buttonRect.width-this.containerRect.width,top:this.buttonRect.bottom+this.options.offset,originX:"100%",originY:"0%"}),before:()=>({left:this.buttonRect.left-this.containerRect.width-this.options.offset,top:this.buttonRect.top+(this.buttonRect.height-this.containerRect.height)/2,originX:"100%",originY:"50%"}),"before-start":()=>({left:this.buttonRect.left-this.containerRect.width-this.options.offset,top:this.buttonRect.top,originX:"100%",originY:"0%"}),"before-end":()=>({left:this.buttonRect.left-this.containerRect.width-this.options.offset,top:this.buttonRect.top+this.buttonRect.height-this.containerRect.height,originX:"100%",originY:"100%"}),top:()=>({left:this.buttonRect.left+(this.buttonRect.width-this.containerRect.width)/2,top:this.buttonRect.top+this.options.offset,originX:"50%",originY:"0%"}),"top-start":()=>({left:this.buttonRect.left,top:this.buttonRect.top+this.options.offset,originX:"0%",originY:"0%"}),"top-end":()=>({left:this.buttonRect.left+this.buttonRect.width-this.containerRect.width,top:this.buttonRect.top+this.options.offset,originX:"100%",originY:"0%"}),right:()=>({left:this.buttonRect.right-this.containerRect.width-this.options.offset,top:this.buttonRect.top+(this.buttonRect.height-this.containerRect.height)/2,originX:"0%",originY:"50%"}),"right-start":()=>({left:this.buttonRect.right-this.containerRect.width-this.options.offset,top:this.buttonRect.top,originX:"0%",originY:"0%"}),"right-end":()=>({left:this.buttonRect.right-this.containerRect.width-this.options.offset,top:this.buttonRect.top+this.buttonRect.height-this.containerRect.height,originX:"0%",originY:"100%"}),bottom:()=>({left:this.buttonRect.left+(this.buttonRect.width-this.containerRect.width)/2,top:this.buttonRect.bottom-this.containerRect.height-this.options.offset,originX:"50%",originY:"100%"}),"bottom-start":()=>({left:this.buttonRect.left,top:this.buttonRect.bottom-this.containerRect.height-this.options.offset,originX:"0%",originY:"100%"}),"bottom-end":()=>({left:this.buttonRect.left+this.buttonRect.width-this.containerRect.width,top:this.buttonRect.bottom-this.containerRect.height-this.options.offset,originX:"100%",originY:"100%"}),left:()=>({left:this.buttonRect.left+this.options.offset,top:this.buttonRect.top+(this.buttonRect.height-this.containerRect.height)/2,originX:"100%",originY:"50%"}),"left-start":()=>({left:this.buttonRect.left+this.options.offset,top:this.buttonRect.top,originX:"100%",originY:"0%"}),"left-end":()=>({left:this.buttonRect.left+this.options.offset,top:this.buttonRect.top+this.buttonRect.height-this.containerRect.height,originX:"100%",originY:"100%"}),"north-east":()=>({left:this.buttonRect.right+this.options.offset,top:this.buttonRect.top-this.containerRect.height-this.options.offset,originX:"0%",originY:"100%"}),"south-east":()=>({left:this.buttonRect.right+this.options.offset,top:this.buttonRect.bottom+this.options.offset,originX:"0%",originY:"0%"}),"south-west":()=>({left:this.buttonRect.left-this.containerRect.width-this.options.offset,top:this.buttonRect.bottom+this.options.offset,originX:"100%",originY:"0%"}),"north-west":()=>({left:this.buttonRect.left-this.containerRect.width-this.options.offset,top:this.buttonRect.top-this.containerRect.height-this.options.offset,originX:"100%",originY:"100%"}),center:()=>({left:this.buttonRect.left+(this.buttonRect.width-this.containerRect.width)/2,top:this.buttonRect.top+(this.buttonRect.height-this.containerRect.height)/2,originX:"50%",originY:"50%"})};this.buttonRect=this.getRect(this.button),this.containerRect=this.container.getBoundingClientRect(),this.boundaryRect=this.boundary.getBoundingClientRect();for(const e of this.options.placements){const{left:t,top:o,originX:i,originY:s}=a[e](),n=t+this.containerRect.width,l=o+this.containerRect.height;if(!(t<this.boundaryRect.left||o<this.boundaryRect.top||n>this.boundaryRect.right||l>this.boundaryRect.bottom)){this.container.style.left=`${t}px`,this.container.style.top=`${o}px`,this.container.style.transformOrigin=`${i} ${s}`;break}}}getRect(e){if(e instanceof Event){const{clientX:t,clientY:a,width:o,height:i}=e;return{left:t,top:a,width:o,height:i,right:t+o,bottom:a+i}}return e.getBoundingClientRect()}}customElements.define("md-tooltip",class extends ma{variants=["plain","rich"];constructor(){super(),this.popper=new ha(this,{})}connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-tooltip")}showModal(e,t){super.showModal(),this.setPlacement(e,t)}show(e,t){super.show(),this.setPlacement(e,t)}setPlacement(e,t){this.popper.setPlacement(e,{placements:["below","above","after","before","north-east","south-east","south-west","north-west","center"],offset:8,...t})}});class pa extends ma{static properties={...ma.properties,index:{type:Number},value:{type:String}};get years(){const e=[],t=this.selection.getFullYear(),a=10*Math.floor(t/10),o=10*Math.floor((t+10)/10);for(let t=0;t<o-a;t++){const o=new Date(a+t,0),i=o.getFullYear();e.push({label:this.yearFormat(o),activated:i==this.activated.getFullYear(),selected:i==this.selected.getFullYear(),year:i})}return e}get months(){const e=[];for(let t=0;t<12;t++){const a=new Date(this.selection.getFullYear(),t),o=a.getFullYear(),i=a.getMonth();e.push({label:this.monthFormat(a),activated:o==this.activated.getFullYear()&&i==this.activated.getMonth(),selected:o==this.selected.getFullYear()&&i==this.selected.getMonth(),year:o,month:i})}return e}get first(){return new Date(this.selection.getFullYear(),this.selection.getMonth()).getDay()}get last(){return 32-new Date(this.selection.getFullYear(),this.selection.getMonth(),32).getDate()}get weekdays(){const e=[];for(let t=0;t<7;t++){const a=new Date(0,0,t);e.push({label:this.weekdayFormat(a)})}return e}get days(){const e=[];for(let t=0;t<6;t++){const a={},o=[];for(let e=0;e<7;e++){const a=new Date(this.selection.getFullYear(),this.selection.getMonth(),7*t+e+1-this.first),i=a.getFullYear(),s=a.getMonth(),n=a.getDate();o.push({label:this.dayFormat(a),activated:i==this.activated.getFullYear()&&s==this.activated.getMonth()&&n==this.activated.getDate(),selected:i==this.selected.getFullYear()&&s==this.selected.getMonth()&&n==this.selected.getDate(),year:i,month:s,day:n})}a.children=o,e.push(a)}return e}get hours(){const e=[];for(let t=0;t<24;t++){const a=new Date(this.selection.getFullYear(),this.selection.getMonth(),this.selection.getDate(),t),o=a.getFullYear(),i=a.getMonth(),s=a.getDate(),n=a.getHours();e.push({label:this.hourFormat(a),activated:n==this.activated.getHours(),selected:n==this.selected.getHours(),year:o,month:i,day:s,hour:n})}return e}get minutes(){const e=[];for(let t=0;t<60;t++){const a=new Date(this.selection.getFullYear(),this.selection.getMonth(),this.selection.getDate(),this.selection.getHours(),t),o=a.getFullYear(),i=a.getMonth(),s=a.getDate(),n=a.getHours(),l=a.getMinutes();e.push({label:this.minuteFormat(a),activated:n==this.activated.getHours()&&l==this.activated.getMinutes(),selected:n==this.selected.getHours()&&l==this.selected.getMinutes(),year:o,month:i,day:s,hour:n,minute:l})}return e}get body(){return[Ot`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderYear()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMonth()}</div>
                <div class="md-datetime-picker__card-item">${this.renderDay()}</div>
                <div class="md-datetime-picker__card-item">${this.renderHour()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMinute()}</div>
            </div>
        `]}set body(e){this._body=e}get leadingActions(){let t;return 0==this.index?t=[this.years[0].label,this.years[this.years.length-1].label].join("-"):1==this.index?t=a(this.selection):2==this.index?t=e(this.selection):(3==this.index||4==this.index)&&(t=s(this.selection)),[{icon:"arrow_drop_down",variant:"icon-right",name:"label",component:"button",label:t}]}get trailingActions(){return[{name:"prev",icon:"keyboard_arrow_left"},{name:"next",icon:"keyboard_arrow_right"}]}get actions(){return[{component:"spacer"},{name:"cancel",label:"Cancel"},{name:"ok",label:"Ok"}]}constructor(){super(),this.yearFormat=new Intl.DateTimeFormat(void 0,{year:"numeric"}).format,this.monthFormat=new Intl.DateTimeFormat(void 0,{month:"long"}).format,this.weekdayFormat=new Intl.DateTimeFormat(void 0,{weekday:"narrow"}).format,this.dayFormat=new Intl.DateTimeFormat(void 0,{day:"numeric"}).format,this.hourFormat=new Intl.DateTimeFormat(void 0,{hour:"numeric",hour12:!1}).format,this.minuteFormat=new Intl.DateTimeFormat(void 0,{minute:"numeric",hour12:!1}).format,this.activated=new Date,this.selection=new Date,this.selected=new Date,this.index=2,this.value=this.getValue(),this.popper=new ha(this,{})}renderYear(){return Ot`
            <div class="md-datetime-picker__list md-datetime-picker__list--years">
                ${this.years.map((e=>Ot`
                    <div class="md-datetime-picker__list-item" ?activated="${e.activated}" ?selected="${e.selected}" .data="${e}" @click="${this.handleDatetimePickerYearItemClick}">
                        <div class="md-icon md-datetime-picker__list-icon">${e.selected?"check":Dt}</div>
                        <div class="md-datetime-picker__list-label">${e.label}</div>
                    </div>    
                `))}
            </div>
        `}renderMonth(){return Ot`
            <div class="md-datetime-picker__list md-datetime-picker__list--months">
                ${this.months.map((e=>Ot`
                    <div class="md-datetime-picker__list-item" ?activated="${e.activated}" ?selected="${e.selected}" .data="${e}" @click="${this.handleDatetimePickerMonthItemClick}">
                        <div class="md-icon md-datetime-picker__list-icon">${e.selected?"check":Dt}</div>
                        <div class="md-datetime-picker__list-label">${e.label}</div>
                    </div>    
                `))}
            </div>
        `}renderDay(){return Ot`
            <div class="md-datetime-picker__grid">
                <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--weekdays">
                    ${this.weekdays.map((e=>Ot`
                        <div class="md-datetime-picker__grid-item">
                            <div class="md-datetime-picker__grid-label">${e.label}</div>
                        </div>    
                    `))}
                </div>
                ${this.days.map((e=>Ot`
                    <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--days">
                        ${e.children.map((e=>Ot`
                            <div class="md-datetime-picker__grid-item" ?activated="${e.activated}" ?selected="${e.selected}" .data="${e}" @click="${this.handleDatetimePickerDayItemClick}">
                                <div class="md-datetime-picker__grid-label">${e.label}</div>
                            </div>    
                        `))}
                    </div>
                `))}
            </div>
        `}renderHour(){return Ot`
            <div class="md-datetime-picker__absolute md-datetime-picker__absolute--hours">
                ${this.hours.map((e=>Ot`
                    <div class="md-datetime-picker__absolute-item" ?activated="${e.activated}" ?selected="${e.selected}" .data="${e}" @click="${this.handleDatetimePickerHourItemClick}">
                        <div class="md-datetime-picker__absolute-label">${e.label}</div>
                    </div>    
                `))}
            </div>
        `}renderMinute(){return Ot`
            <div class="md-datetime-picker__absolute md-datetime-picker__absolute--minutes">
                ${this.minutes.map((e=>Ot`
                    <div class="md-datetime-picker__absolute-item" ?activated="${e.activated}" ?selected="${e.selected}" .data="${e}" @click="${this.handleDatetimePickerMinuteItemClick}">
                        <div class="md-datetime-picker__absolute-label">${e.label}</div>
                    </div>    
                `))}
            </div>
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-datetime-picker"),this.defaultValue=this.value,this.updateDate()}async updated(e){super.updated(e),e.has("index")&&this.style.setProperty("--md-comp-datetime-picker-card-index",this.index),e.has("value")&&e.get("value")&&this.value&&(await this.updateComplete,this.updateDate(),this.requestUpdate())}handleCardIconButtonClick(e){"prev"==e.currentTarget.name?this.handleCardIconButtonPrevClick(e):"next"==e.currentTarget.name&&this.handleCardIconButtonNextClick(e),this.emit("onDatetimePickerIconButtonClick",e)}handleCardButtonClick(e){"label"==e.currentTarget.name?this.handleCardButtonLabelClick(e):"cancel"==e.currentTarget.name?this.handleCardButtonCancelClick(e):"ok"==e.currentTarget.name&&this.handleCardButtonOkClick(e),this.emit("onDatetimePickerButtonClick",e)}updateDate(){const e=(t=this.value,new Date(t));var t;this.selection.setFullYear(e.getFullYear()),this.selection.setMonth(e.getMonth()),this.selection.setDate(e.getDate()),this.selection.setHours(e.getHours()),this.selection.setMinutes(e.getMinutes()),this.selected.setFullYear(e.getFullYear()),this.selected.setMonth(e.getMonth()),this.selected.setDate(e.getDate()),this.selected.setHours(e.getHours()),this.selected.setMinutes(e.getMinutes())}handleCardIconButtonPrevClick(e){0==this.index?this.selection.setFullYear(this.selection.getFullYear()-10):1==this.index?this.selection.setFullYear(this.selection.getFullYear()-1):2==this.index?this.selection.setMonth(this.selection.getMonth()-1):3==this.index?this.selection.setHours(this.selection.getHours()-1):4==this.index&&this.selection.setMinutes(this.selection.getMinutes()-1),this.requestUpdate(),this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerIconButtonPrevClick",e)}handleCardIconButtonNextClick(e){0==this.index?this.selection.setFullYear(this.selection.getFullYear()+10):1==this.index?this.selection.setFullYear(this.selection.getFullYear()+1):2==this.index?this.selection.setMonth(this.selection.getMonth()+1):3==this.index?this.selection.setHours(this.selection.getHours()+1):4==this.index&&this.selection.setMinutes(this.selection.getMinutes()+1),this.requestUpdate(),this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerIconButtonNextClick",e)}handleCardButtonLabelClick(e){0==this.index?this.index=2:1==this.index?this.index=0:2==this.index?this.index=1:3==this.index?this.index=4:4==this.index&&(this.index=2),this.emit("onDatetimePickerButtonLabelClick",e)}handleCardButtonCancelClick(e){this.value=this.defaultValue,this.updateDate(),this.requestUpdate(),this.index=2,this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerButtonCancelClick",e)}handleCardButtonOkClick(e){this.selected.setFullYear(this.selection.getFullYear()),this.selected.setMonth(this.selection.getMonth()),this.selected.setDate(this.selection.getDate()),this.selected.setHours(this.selection.getHours()),this.selected.setMinutes(this.selection.getMinutes()),this.value=this.getValue(),this.requestUpdate(),this.index=2,this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerButtonOkClick",e)}handleDatetimePickerYearItemClick(e){const t=e.currentTarget.data;this.selection.setFullYear(t.year),this.index=1,this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerYearItemClick",e)}handleDatetimePickerMonthItemClick(e){const t=e.currentTarget.data;this.selection.setMonth(t.month),this.index=2,this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerMonthItemClick",e)}handleDatetimePickerDayItemClick(e){const t=e.currentTarget.data;this.selected.setFullYear(t.year),this.selected.setMonth(t.month),this.selected.setDate(t.day),this.selection.setFullYear(t.year),this.selection.setMonth(t.month),this.selection.setDate(t.day),this.index=3,this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerDayItemClick",e)}handleDatetimePickerHourItemClick(e){const t=e.currentTarget.data;this.selected.setFullYear(t.year),this.selected.setMonth(t.month),this.selected.setDate(t.day),this.selected.setHours(t.hour),this.selection.setFullYear(t.year),this.selection.setMonth(t.month),this.selection.setDate(t.day),this.selection.setHours(t.hour),this.index=4,this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerHourItemClick",e)}handleDatetimePickerMinuteItemClick(e){const t=e.currentTarget.data;this.selected.setFullYear(t.year),this.selected.setMonth(t.month),this.selected.setDate(t.day),this.selected.setHours(t.hour),this.selected.setMinutes(t.minute),this.selection.setFullYear(t.year),this.selection.setMonth(t.month),this.selection.setDate(t.day),this.selection.setHours(t.hour),this.selection.setMinutes(t.minute),this.index=2,this.emit("onDatetimePickerSelection",e),this.emit("onDatetimePickerMinuteItemClick",e)}getValue(){return e(this.selected)}showModal(e,t){super.showModal(),this.setPlacement(e,t)}show(e,t){super.show(),this.setPlacement(e,t)}setPlacement(e,t){this.popper.setPlacement(e,{placements:["top-start","top-end","top","below-start","below-end","below","bottom-start","bottom-end","bottom","above-start","above-end","above","left-start","left-end","left","after-start","after-end","after","right-start","right-end","right","before-start","before-end","before","center"],...t})}}customElements.define("md-datetime-picker",pa),customElements.define("md-date-picker",class extends pa{get leadingActions(){let e;return 0==this.index?e=[this.years[0].label,this.years[this.years.length-1].label].join("-"):1==this.index?e=a(this.selection):2==this.index&&(e=t(this.selection)),[{icon:"arrow_drop_down",variant:"icon-right",name:"label",component:"button",label:e}]}get body(){return[Ot`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderYear()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMonth()}</div>
                <div class="md-datetime-picker__card-item">${this.renderDay()}</div>
            </div>
        `]}set body(e){this._body=e}connectedCallback(){super.connectedCallback(),this.classList.add("md-date-picker")}updateDate(){const e=function(e){var[t,a,o]=e.split("-").map(Number);return new Date(t,a-1,o)}(this.value);this.selection.setFullYear(e.getFullYear()),this.selection.setMonth(e.getMonth()),this.selection.setDate(e.getDate()),this.selected.setFullYear(e.getFullYear()),this.selected.setMonth(e.getMonth()),this.selected.setDate(e.getDate())}handleCardIconButtonPrevClick(e){0==this.index?this.selection.setFullYear(this.selection.getFullYear()-10):1==this.index?this.selection.setFullYear(this.selection.getFullYear()-1):2==this.index&&this.selection.setMonth(this.selection.getMonth()-1),this.requestUpdate(),this.emit("onDatePickerSelection",e),this.emit("onDatePickerIconButtonPrevClick",e)}handleCardIconButtonNextClick(e){0==this.index?this.selection.setFullYear(this.selection.getFullYear()+10):1==this.index?this.selection.setFullYear(this.selection.getFullYear()+1):2==this.index&&this.selection.setMonth(this.selection.getMonth()+1),this.requestUpdate(),this.emit("onDatePickerSelection",e),this.emit("onDatePickerIconButtonNextClick",e)}handleCardButtonLabelClick(e){0==this.index?this.index=2:1==this.index?this.index=0:2==this.index&&(this.index=1),this.emit("onDatePickerButtonLabelClick",e)}handleCardButtonCancelClick(e){this.value=this.defaultValue,this.updateDate(),this.requestUpdate(),this.index=2,this.emit("onDatePickerSelection",e),this.emit("onDatePickerButtonCancelClick",e)}handleCardButtonOkClick(e){this.selected.setFullYear(this.selection.getFullYear()),this.selected.setMonth(this.selection.getMonth()),this.selected.setDate(this.selection.getDate()),this.value=this.getValue(),this.requestUpdate(),this.index=2,this.emit("onDatePickerSelection",e),this.emit("onDatePickerButtonOkClick",e)}handleDatetimePickerYearItemClick(e){const t=e.currentTarget.data;this.selection.setFullYear(t.year),this.index=1,this.emit("onDatePickerSelection",e),this.emit("onDatePickerYearItemClick",e)}handleDatetimePickerMonthItemClick(e){const t=e.currentTarget.data;this.selection.setMonth(t.month),this.index=2,this.emit("onDatePickerSelection",e),this.emit("onDatePickerMonthItemClick",e)}handleDatetimePickerDayItemClick(e){const t=e.currentTarget.data;this.selected.setFullYear(t.year),this.selected.setMonth(t.month),this.selected.setDate(t.day),this.selection.setFullYear(t.year),this.selection.setMonth(t.month),this.selection.setDate(t.day),this.requestUpdate(),this.emit("onDatePickerSelection",e),this.emit("onDatePickerDayItemClick",e)}getValue(){return t(this.selected)}}),customElements.define("md-month-picker",class extends pa{get leadingActions(){let e;return 0==this.index?e=[this.years[0].label,this.years[this.years.length-1].label].join("-"):1==this.index&&(e=o(this.selection)),[{icon:"arrow_drop_down",variant:"icon-right",name:"label",component:"button",label:e}]}get body(){return[Ot`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderYear()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMonth()}</div>
            </div>
        `]}set body(e){this._body=e}constructor(){super(),this.index=1}connectedCallback(){super.connectedCallback(),this.classList.add("md-month-picker")}updateDate(){const e=function(e){var[t,a]=e.split("-").map(Number);return new Date(t,a-1)}(this.value);this.selection.setFullYear(e.getFullYear()),this.selection.setMonth(e.getMonth()),this.selected.setFullYear(e.getFullYear()),this.selected.setMonth(e.getMonth())}handleCardIconButtonPrevClick(e){0==this.index?this.selection.setFullYear(this.selection.getFullYear()-10):1==this.index&&this.selection.setFullYear(this.selection.getFullYear()-1),this.requestUpdate(),this.emit("onMonthPickerSelection",e),this.emit("onMonthPickerIconButtonPrevClick",e)}handleCardIconButtonNextClick(e){0==this.index?this.selection.setFullYear(this.selection.getFullYear()+10):1==this.index&&this.selection.setFullYear(this.selection.getFullYear()+1),this.requestUpdate(),this.emit("onMonthPickerSelection",e),this.emit("onMonthPickerIconButtonNextClick",e)}handleCardButtonLabelClick(e){0==this.index?this.index=1:1==this.index&&(this.index=0),this.emit("onMonthPickerButtonLabelClick",e)}handleCardButtonCancelClick(e){this.value=this.defaultValue,this.updateDate(),this.requestUpdate(),this.index=1,this.emit("onMonthPickerSelection",e),this.emit("onMonthPickerButtonCancelClick",e)}handleCardButtonOkClick(e){this.selected.setFullYear(this.selection.getFullYear()),this.selected.setMonth(this.selection.getMonth()),this.value=this.getValue(),this.requestUpdate(),this.index=1,this.emit("onMonthPickerSelection",e),this.emit("onMonthPickerButtonOkClick",e)}handleDatetimePickerYearItemClick(e){const t=e.currentTarget.data;this.selection.setFullYear(t.year),this.index=1,this.emit("onMonthPickerSelection",e),this.emit("onMonthPickerYearItemClick",e)}handleDatetimePickerMonthItemClick(e){const t=e.currentTarget.data;this.selected.setFullYear(t.year),this.selected.setMonth(t.month),this.selection.setFullYear(t.year),this.selection.setMonth(t.month),this.requestUpdate(),this.emit("onMonthPickerSelection",e),this.emit("onMonthPickerMonthItemClick",e)}getValue(){return o(this.selected)}}),customElements.define("md-time-picker",class extends pa{get body(){return[Ot`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderHour()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMinute()}</div>
            </div>
        `]}set body(e){this._body=e}get leadingActions(){let e;return(0==this.index||1==this.index)&&(e=s(this.selection)),[{icon:"arrow_drop_down",variant:"icon-right",name:"label",component:"button",label:e}]}constructor(){super(),this.index=0}connectedCallback(){super.connectedCallback(),this.classList.add("md-time-picker")}updateDate(){const e=function(e){var[t,a]=e.split(":").map(Number),o=new Date;return o.setHours(t,a,0,0),o}(this.value);this.selection.setHours(e.getHours()),this.selection.setMinutes(e.getMinutes()),this.selected.setHours(e.getHours()),this.selected.setMinutes(e.getMinutes())}handleCardIconButtonPrevClick(e){0==this.index?(this.selection.setHours(this.selection.getHours()-1),this.selected.setHours(this.selection.getHours())):1==this.index&&(this.selection.setMinutes(this.selection.getMinutes()-1),this.selected.setMinutes(this.selection.getMinutes())),this.requestUpdate(),this.emit("onTimePickerSelection",e),this.emit("onTimePickerIconButtonPrevClick",e)}handleCardIconButtonNextClick(e){0==this.index?(this.selection.setHours(this.selection.getHours()+1),this.selected.setHours(this.selection.getHours())):1==this.index&&(this.selection.setMinutes(this.selection.getMinutes()+1),this.selected.setMinutes(this.selection.getMinutes())),this.requestUpdate(),this.emit("onTimePickerSelection",e),this.emit("onTimePickerIconButtonNextClick",e)}handleCardButtonLabelClick(e){0==this.index?this.index=1:1==this.index&&(this.index=0),this.emit("onTimePickerButtonLabelClick",e)}handleCardButtonCancelClick(e){this.value=this.defaultValue,this.updateDate(),this.requestUpdate(),this.index=0,this.emit("onTimePickerSelection",e),this.emit("onTimePickerButtonCancelClick",e)}handleCardButtonOkClick(e){this.selected.setMinutes(this.selection.getMinutes()),this.value=this.getValue(),this.requestUpdate(),this.index=0,this.emit("onTimePickerSelection",e),this.emit("onTimePickerButtonOkClick",e)}handleDatetimePickerHourItemClick(e){const t=e.currentTarget.data;this.selected.setHours(t.hour),this.selection.setHours(t.hour),this.index=1,this.emit("onTimePickerSelection",e),this.emit("onTimePickerHourItemClick",e)}handleDatetimePickerMinuteItemClick(e){const t=e.currentTarget.data;this.selected.setHours(t.hour),this.selected.setMinutes(t.minute),this.selection.setHours(t.hour),this.selection.setMinutes(t.minute),this.index=0,this.emit("onTimePickerSelection",e),this.emit("onTimePickerMinuteItemClick",e)}getValue(){return s(this.selected)}}),customElements.define("md-week-picker",class extends pa{get weekdays(){const e=[];for(let t=0;t<7;t++){const a=new Date(0,0,t+1);e.push({label:this.weekdayFormat(a)})}return e}get days(){const e=[];for(let t=0;t<6;t++){const a=new Date(this.selection.getFullYear(),this.selection.getMonth(),7*t+1-this.first),o=a.getFullYear(),i=a.getMonth(),s=a.getWeek(),n=[],l={activated:o===this.activated.getFullYear()&&s===this.activated.getWeek(),selected:o===this.selected.getFullYear()&&s===this.selected.getWeek(),year:o,month:i,week:s};for(let e=0;e<7;e++){const a=new Date(this.selection.getFullYear(),this.selection.getMonth(),7*t+e+1-this.first);n.push({label:this.dayFormat(a)})}l.children=n,e.push(l)}return e}get body(){return[Ot`
            <div class="md-datetime-picker__card">
                <div class="md-datetime-picker__card-item">${this.renderYear()}</div>
                <div class="md-datetime-picker__card-item">${this.renderMonth()}</div>
                <div class="md-datetime-picker__card-item">${this.renderDay()}</div>
            </div>
        `]}set body(e){this._body=e}get leadingActions(){let e;return 0===this.index?e=[this.years[0].label,this.years[this.years.length-1].label].join("-"):1===this.index?e=a(this.selection):2===this.index&&(e=n(this.selection)),[{icon:"arrow_drop_down",variant:"icon-right",name:"label",component:"button",label:e}]}renderDay(){return Ot`
            <div class="md-datetime-picker__grid">
                <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--weekdays">
                    ${this.weekdays.map((e=>Ot`
                        <div class="md-datetime-picker__grid-item">
                            <div class="md-datetime-picker__grid-label">${e.label}</div>
                        </div>    
                    `))}
                </div>
                ${this.days.map((e=>Ot`
                    <div class="md-datetime-picker__grid-row md-datetime-picker__grid-row--days" ?activated="${e.activated}" ?selected="${e.selected}" .data="${e}" @click="${this.handleDatetimePickerDayItemClick}">
                        ${e.children.map((e=>Ot`
                            <div class="md-datetime-picker__grid-item" >
                                <div class="md-datetime-picker__grid-label">${e.label}</div>
                            </div>    
                        `))}
                    </div>
                `))}
            </div>
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-week-picker")}updateDate(){const e=function(e){let t=e.split("-W");if(2!==t.length||2!==t[1].length)throw new Error("Invalid week format. Should be in YYYY-WW format.");let a=parseInt(t[0],10),o=parseInt(t[1],10);if(isNaN(a)||isNaN(o)||o<1||o>53)throw new Error("Invalid year or week number.");let i=new Date(a,0,4);return new Date(i.setDate(i.getDate()-(i.getDay()+6)%7+7*(o-1)))}(this.value);this.selection.setFullYear(e.getFullYear()),this.selection.setWeek(e.getWeek()),this.selected.setFullYear(e.getFullYear()),this.selected.setWeek(e.getWeek())}handleCardIconButtonPrevClick(e){0===this.index?this.selection.setFullYear(this.selection.getFullYear()-10):1===this.index?this.selection.setFullYear(this.selection.getFullYear()-1):2===this.index&&this.selection.setMonth(this.selection.getMonth()-1),this.requestUpdate(),this.emit("onWeekPickerSelection",e),this.emit("onWeekPickerIconButtonPrevClick",e)}handleCardIconButtonNextClick(e){0===this.index?this.selection.setFullYear(this.selection.getFullYear()+10):1===this.index?this.selection.setFullYear(this.selection.getFullYear()+1):2===this.index&&this.selection.setMonth(this.selection.getMonth()+1),this.requestUpdate(),this.emit("onWeekPickerSelection",e),this.emit("onWeekPickerIconButtonNextClick",e)}handleCardButtonLabelClick(e){0===this.index?this.index=2:1===this.index?this.index=0:2===this.index&&(this.index=1),this.emit("onWeekPickerButtonLabelClick",e)}handleCardButtonCancelClick(e){this.value=this.defaultValue,this.updateDate(),this.requestUpdate(),this.index=2,this.emit("onWeekPickerSelection",e),this.emit("onWeekPickerButtonCancelClick",e)}handleCardButtonOkClick(e){this.selected.setFullYear(this.selection.getFullYear()),this.selected.setWeek(this.selection.getWeek()),this.value=this.getValue(),this.requestUpdate(),this.index=2,this.emit("onWeekPickerSelection",e),this.emit("onWeekPickerButtonOkClick",e)}handleDatetimePickerYearItemClick(e){const t=e.currentTarget.data;this.selection.setFullYear(t.year),this.index=1,this.emit("onWeekPickerSelection",e),this.emit("onWeekPickerYearItemClick",e)}handleDatetimePickerMonthItemClick(e){const t=e.currentTarget.data;this.selection.setMonth(t.month),this.index=2,this.emit("onWeekPickerSelection",e),this.emit("onWeekPickerMonthItemClick",e)}handleDatetimePickerDayItemClick(e){const t=e.currentTarget.data;this.selected.setFullYear(t.year),this.selected.setWeek(t.week),this.selection.setFullYear(t.year),this.selection.setWeek(t.week),this.requestUpdate(),this.emit("onWeekPickerSelection",e),this.emit("onWeekPickerDayItemClick",e)}getValue(){return n(this.selected)}});class ba extends ma{static properties={...ma.properties,value:{type:String}};get body(){return[this.renderMain()]}set body(e){this._body=e}get leadingActions(){return[{name:"label",component:"button",label:this.selection.hex}]}get actions(){return[{component:"spacer"},{name:"cancel",label:"Cancel"},{name:"ok",label:"Ok"}]}constructor(){super(),this.selection={},this.value="#000000",this.handleColorPickerGradientTrackPointermove=this.handleColorPickerGradientTrackPointermove.bind(this),this.handleColorPickerGradientTrackPointerup=this.handleColorPickerGradientTrackPointerup.bind(this),this.popper=new ha(this,{})}renderMain(){return Ot`
            <div class="md-color-picker__main">
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
        `}async connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-color-picker"),this.defaultValue=this.value,this.updateHsla(),await this.updateComplete,this.init()}async updated(e){super.updated(e),e.has("value")&&e.get("value")&&this.value&&(await this.updateComplete,this.updateHsla(),this.draw(),this.updateThumb(),this.requestUpdate()),this.style.setProperty("--md-comp-color-picker-base",`rgb(${this.selection.red},${this.selection.green},${this.selection.blue})`)}init(){this.canvas=this.querySelector(".md-color-picker__gradient-track"),this.thumb=this.querySelector(".md-color-picker__gradient-thumb"),this.context=this.canvas.getContext("2d",{willReadFrequently:!0}),this.draw(),this.updateThumb()}draw(){const e=this.context;e.fillStyle=`hsl(${this.selection.hue}deg, 100%, 50%)`,e.fillRect(0,0,this.canvas.width,this.canvas.height);const t=e.createLinearGradient(0,0,this.canvas.width,0);t.addColorStop(.01,"#ffffff"),t.addColorStop(1,"transparent"),e.fillStyle=t,e.fillRect(0,0,this.canvas.width,this.canvas.height);const a=e.createLinearGradient(0,0,0,this.canvas.height);a.addColorStop(0,"transparent"),a.addColorStop(1,"#000000"),e.fillStyle=a,e.fillRect(0,0,this.canvas.width,this.canvas.height),this.data=e.getImageData(0,0,this.canvas.width,this.canvas.height).data}findPixel(e,t,a){const o=this.data;let i,s;for(let n=0;n<this.canvas.height;n++)for(let l=0;l<this.canvas.width;l++){const r=4*(n*this.canvas.width+l),d=o[r],m=o[r+1],c=o[r+2];d===e&&m===t&&c===a&&(i=l,s=n)}return{x:i,y:s}}updateHsla(){const{hue:e,saturation:t,lightness:a,red:o,green:i,blue:s,alpha:n}=function(e){const t=function(e){return e=e.replace(/^#/,""),{red:parseInt(e.substring(0,2),16),green:parseInt(e.substring(2,4),16),blue:parseInt(e.substring(4,6),16),alpha:8===e.length?parseInt(e.substring(6,8),16)/255:1}}(e),{red:a,green:o,blue:i,alpha:s}=t,n=a/255,l=o/255,r=i/255,d=Math.max(n,l,r),m=Math.min(n,l,r);let c,u,h=(d+m)/2;if(d===m)c=0,u=0;else{const e=d-m;switch(u=h>.5?e/(2-d-m):e/(d+m),d){case n:c=60*((l-r)/e+(l<r?6:0));break;case l:c=60*((r-n)/e+2);break;case r:c=60*((n-l)/e+4)}}return{hue:Math.round(c),saturation:u,lightness:h,red:a,green:o,blue:i,alpha:s}}(this.value);this.selection.hue=e,this.selection.saturation=t,this.selection.lightness=a,this.selection.red=o,this.selection.green=i,this.selection.blue=s,this.selection.alpha=n,this.selection.hex=this.value}updateThumb(){const{x:e,y:t}=this.findPixel(this.selection.red,this.selection.green,this.selection.blue);this.thumb.style.left=e+"px",this.thumb.style.top=t+"px"}updateRgba(e){const{width:t,height:a,left:o,top:i}=this.canvasRect,s=Math.min(Math.max(0,e.clientX-o),t-.01),n=Math.min(Math.max(0,e.clientY-i),a),[l,d,m]=this.context.getImageData(s,n,t,a).data;this.selection.red=l,this.selection.green=d,this.selection.blue=m;const{saturation:c,lightness:u}=function(e,t,a,o=1){const i=e/255,s=t/255,n=a/255,l=Math.max(i,s,n),r=Math.min(i,s,n);let d,m,c=(l+r)/2;if(l===r)d=0,m=0;else{const e=l-r;switch(m=c>.5?e/(2-l-r):e/(l+r),l){case i:d=60*((s-n)/e+(s<n?6:0));break;case s:d=60*((n-i)/e+2);break;case n:d=60*((i-s)/e+4)}}return{hue:Math.round(d),saturation:m,lightness:c,alpha:o}}(this.selection.red,this.selection.green,this.selection.blue);this.selection.saturation=c,this.selection.lightness=u,this.selection.hex=r(this.selection.red,this.selection.green,this.selection.blue,this.selection.alpha),this.thumb.style.left=s+"px",this.thumb.style.top=n+"px",this.requestUpdate()}handleCardIconButtonClick(e){"prev"==e.currentTarget.name?this.handleCardIconButtonPrevClick(e):"next"==e.currentTarget.name&&this.handleCardIconButtonNextClick(e),this.emit("onColorPickerIconButtonClick",e)}handleCardButtonClick(e){"label"==e.currentTarget.name?this.handleCardButtonLabelClick(e):"cancel"==e.currentTarget.name?this.handleCardButtonCancelClick(e):"ok"==e.currentTarget.name&&this.handleCardButtonOkClick(e),this.emit("onColorPickerButtonClick",e)}handleCardIconButtonPrevClick(e){this.emit("onColorPickerSelection",e),this.emit("onColorPickerIconButtonPrevClick",e)}handleCardIconButtonNextClick(e){this.emit("onColorPickerSelection",e),this.emit("onColorPickerIconButtonNextClick",e)}handleCardButtonLabelClick(e){this.emit("onColorPickerButtonLabelClick",e)}handleCardButtonCancelClick(e){this.value=this.defaultValue,this.updateHsla(),this.draw(),this.updateThumb(),this.requestUpdate(),this.emit("onColorPickerSelection",e),this.emit("onColorPickerButtonCancelClick",e)}handleCardButtonOkClick(e){this.value=this.selection.hex,this.emit("onColorPickerSelection",e),this.emit("onColorPickerButtonOkClick",e)}handleColorPickerGradientTrackPointerdown(e){window.addEventListener("pointermove",this.handleColorPickerGradientTrackPointermove),window.addEventListener("pointerup",this.handleColorPickerGradientTrackPointerup),document.documentElement.classList.add("md-gesture--unselectable"),this.canvasRect=this.canvas.getBoundingClientRect(),this.updateRgba(e),this.emit("onColorPickerSelection",e),this.emit("onColorPickerGradientTrackPointerdown",e)}handleColorPickerGradientTrackPointermove(e){this.updateRgba(e),this.emit("onColorPickerSelection",e),this.emit("onColorPickerGradientTrackPointermove",e)}handleColorPickerGradientTrackPointerup(e){this.updateRgba(e),document.documentElement.classList.remove("md-gesture--unselectable"),window.removeEventListener("pointermove",this.handleColorPickerGradientTrackPointermove),window.removeEventListener("pointerup",this.handleColorPickerGradientTrackPointerup),this.emit("onColorPickerSelection",e),this.emit("onColorPickerGradientTrackPointerup",e)}handleColorPickerHueNativeInput(e){const t=parseFloat(e.currentTarget.value);this.selection.hue=t,this.draw();const{red:a,green:o,blue:i}=function(e,t,a,o=1){e=(e%360+360)%360,t=Math.max(0,Math.min(1,t)),a=Math.max(0,Math.min(1,a));let i=(1-Math.abs(2*a-1))*t,s=e/60,n=i*(1-Math.abs(s%2-1)),l=a-i/2,r=0,d=0,m=0;return s>=0&&s<1?(r=i,d=n):s>=1&&s<2?(r=n,d=i):s>=2&&s<3?(d=i,m=n):s>=3&&s<4?(d=n,m=i):s>=4&&s<5?(r=n,m=i):(r=i,m=n),r=Math.round(255*(r+l)),d=Math.round(255*(d+l)),m=Math.round(255*(m+l)),{red:r,green:d,blue:m,alpha:o}}(this.selection.hue,this.selection.saturation,this.selection.lightness);this.selection.red=a,this.selection.green=o,this.selection.blue=i,this.selection.hex=r(this.selection.red,this.selection.green,this.selection.blue,this.selection.alpha),this.requestUpdate(),this.emit("onColorPickerSelection",e),this.emit("onColorPickerHueNativeInput",e)}handleColorPickerOpacityNativeInput(e){const t=parseFloat(e.currentTarget.value);this.selection.alpha=t,this.selection.hex=r(this.selection.red,this.selection.green,this.selection.blue,this.selection.alpha),this.requestUpdate(),this.emit("onColorPickerSelection",e),this.emit("onColorPickerOpacityNativeInput",e)}showModal(e,t){super.showModal(),this.setPlacement(e,t)}show(e,t){super.show(),this.setPlacement(e,t)}setPlacement(e,t){this.popper.setPlacement(e,{placements:["top-start","top-end","top","below-start","below-end","below","bottom-start","bottom-end","bottom","above-start","above-end","above","left-start","left-end","left","after-start","after-end","after","right-start","right-end","right","before-start","before-end","before","center"],...t})}}customElements.define("md-color-picker",ba);const fa=JSON.parse('[{"base":[128512],"alternates":[],"emoticons":[":D"],"shortcodes":[":smile:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😀"},{"base":[128515],"alternates":[],"emoticons":[":-D"],"shortcodes":[":smile-with-big-eyes:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😃"},{"base":[128516],"alternates":[],"emoticons":["^_^"],"shortcodes":[":grin:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😄"},{"base":[128513],"alternates":[],"emoticons":["*^_^*"],"shortcodes":[":grinning:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😁"},{"base":[128518],"alternates":[],"emoticons":["X-D"],"shortcodes":[":laughing:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😆"},{"base":[128517],"alternates":[],"emoticons":["^_^;"],"shortcodes":[":grin-sweat:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😅"},{"base":[128514],"alternates":[],"emoticons":[">w<"],"shortcodes":[":joy:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😂"},{"base":[129315],"alternates":[],"emoticons":["*>w<*"],"shortcodes":[":rofl:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤣"},{"base":[128557],"alternates":[],"emoticons":[";_;"],"shortcodes":[":loudly-crying:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😭"},{"base":[128521],"alternates":[],"emoticons":[";)"],"shortcodes":[":wink:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😉"},{"base":[128535],"alternates":[],"emoticons":[":*"],"shortcodes":[":kissing:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😗"},{"base":[128537],"alternates":[],"emoticons":["^3^"],"shortcodes":[":kissing-smiling-eyes:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😙"},{"base":[128538],"alternates":[],"emoticons":[":**"],"shortcodes":[":kissing-closed-eyes:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😚"},{"base":[128536],"alternates":[],"emoticons":[";*"],"shortcodes":[":kissing-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😘"},{"base":[129392],"alternates":[],"emoticons":["<3:)"],"shortcodes":[":heart-face:",":3-hearts:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🥰"},{"base":[128525],"alternates":[],"emoticons":["♥_♥"],"shortcodes":[":heart-eyes:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😍"},{"base":[129321],"alternates":[],"emoticons":["*_*"],"shortcodes":[":star-struck:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤩"},{"base":[129395],"alternates":[],"emoticons":["(ﾉ◕ヮ◕)♬♪"],"shortcodes":[":partying-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🥳"},{"base":[129760],"alternates":[],"emoticons":[],"shortcodes":[":melting:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🫠"},{"base":[128579],"alternates":[],"emoticons":["(:"],"shortcodes":[":upside-down-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🙃"},{"base":[128578],"alternates":[],"emoticons":[":)",":-)"],"shortcodes":[":slightly-happy:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🙂"},{"base":[129394],"alternates":[],"emoticons":[":,)"],"shortcodes":[":happy-cry:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🥲"},{"base":[129401],"alternates":[],"emoticons":["(；人；)"],"shortcodes":[":holding-back-tears:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🥹"},{"base":[128522],"alternates":[],"emoticons":[],"shortcodes":[":blush:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😊"},{"base":[9786,65039],"alternates":[],"emoticons":[],"shortcodes":[":warm-smile:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"☺️"},{"base":[128524],"alternates":[],"emoticons":[],"shortcodes":[":relieved:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😌"},{"base":[128578,8205,8597,65039],"alternates":[],"emoticons":[],"shortcodes":[":head-nod:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🙂‍↕️"},{"base":[128578,8205,8596,65039],"alternates":[],"emoticons":[],"shortcodes":[":head-shake:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🙂‍↔️"},{"base":[128527],"alternates":[],"emoticons":[">~>"],"shortcodes":[":smirk:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😏"},{"base":[129316],"alternates":[],"emoticons":["(¯﹃¯)"],"shortcodes":[":drool:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤤"},{"base":[128523],"alternates":[],"emoticons":[],"shortcodes":[":yum:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😋"},{"base":[128539],"alternates":[],"emoticons":[":P",":p",":-P",":-p"],"shortcodes":[":stuck-out-tongue:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😛"},{"base":[128541],"alternates":[],"emoticons":[">q<"],"shortcodes":[":squinting-tongue:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😝"},{"base":[128540],"alternates":[],"emoticons":[";p"],"shortcodes":[":winky-tongue:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😜"},{"base":[129322],"alternates":[],"emoticons":[],"shortcodes":[":zany-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤪"},{"base":[129396],"alternates":[],"emoticons":[">﹏☉"],"shortcodes":[":woozy:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🥴"},{"base":[128532],"alternates":[],"emoticons":["._."],"shortcodes":[":pensive:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😔"},{"base":[129402],"alternates":[],"emoticons":["◕﹏◕"],"shortcodes":[":pleading:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🥺"},{"base":[128556],"alternates":[],"emoticons":[":-|"],"shortcodes":[":grimacing:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😬"},{"base":[128529],"alternates":[],"emoticons":["-_-"],"shortcodes":[":expressionless:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😑"},{"base":[128528],"alternates":[],"emoticons":[":|"],"shortcodes":[":neutral-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😐"},{"base":[128566],"alternates":[],"emoticons":[],"shortcodes":[":mouth-none:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😶"},{"base":[128566,8205,127787,65039],"alternates":[],"emoticons":[],"shortcodes":[":face-in-clouds:",":lost:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😶‍🌫️"},{"base":[129765],"alternates":[],"emoticons":[],"shortcodes":[":dotted-line-face:",":invisible:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🫥"},{"base":[129296],"alternates":[],"emoticons":[":#"],"shortcodes":[":zipper-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤐"},{"base":[129761],"alternates":[],"emoticons":["(・д・ゝ）"],"shortcodes":[":salute:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🫡"},{"base":[129300],"alternates":[],"emoticons":["=L"],"shortcodes":[":thinking-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤔"},{"base":[129323],"alternates":[],"emoticons":["(￣b￣)"],"shortcodes":[":shushing-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤫"},{"base":[129762],"alternates":[],"emoticons":[],"shortcodes":[":hand-over-mouth:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🫢"},{"base":[129325],"alternates":[],"emoticons":[],"shortcodes":[":smiling-eyes-with-hand-over-mouth:",":chuckling:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤭"},{"base":[129393],"alternates":[],"emoticons":["~O~"],"shortcodes":[":yawn:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🥱"},{"base":[129303],"alternates":[],"emoticons":["\\\\(^o^)/"],"shortcodes":[":hug-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤗"},{"base":[129763],"alternates":[],"emoticons":["(*/。＼)"],"shortcodes":[":peeking:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🫣"},{"base":[128561],"alternates":[],"emoticons":["@0@"],"shortcodes":[":screaming:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😱"},{"base":[129320],"alternates":[],"emoticons":["(","͝סּ","͜ʖ͡סּ)"],"shortcodes":[":raised-eyebrow:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤨"},{"base":[129488],"alternates":[],"emoticons":["o~O"],"shortcodes":[":monocle:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🧐"},{"base":[128530],"alternates":[],"emoticons":[">->"],"shortcodes":[":unamused:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😒"},{"base":[128580],"alternates":[],"emoticons":[],"shortcodes":[":rolling-eyes:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🙄"},{"base":[128558,8205,128168],"alternates":[],"emoticons":[],"shortcodes":[":exhale:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😮‍💨"},{"base":[128548],"alternates":[],"emoticons":["(((╬◣﹏◢)))"],"shortcodes":[":triumph:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😤"},{"base":[128544],"alternates":[],"emoticons":["X-("],"shortcodes":[":angry:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😠"},{"base":[128545],"alternates":[],"emoticons":[">:O"],"shortcodes":[":rage:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😡"},{"base":[129324],"alternates":[],"emoticons":["#$@!"],"shortcodes":[":cursing:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤬"},{"base":[128542],"alternates":[],"emoticons":[],"shortcodes":[":sad:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😞"},{"base":[128531],"alternates":[],"emoticons":["(0へ0)"],"shortcodes":[":sweat:",":downcast:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😓"},{"base":[128543],"alternates":[],"emoticons":[":S"],"shortcodes":[":worried:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😟"},{"base":[128549],"alternates":[],"emoticons":["•_•\'"],"shortcodes":[":concerned:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😥"},{"base":[128546],"alternates":[],"emoticons":[":\'("],"shortcodes":[":cry:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😢"},{"base":[9785,65039],"alternates":[],"emoticons":[":-("],"shortcodes":[":big-frown:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"☹️"},{"base":[128577],"alternates":[],"emoticons":[":("],"shortcodes":[":frown:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🙁"},{"base":[129764],"alternates":[],"emoticons":[":/"],"shortcodes":[":diagonal-mouth:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🫤"},{"base":[128533],"alternates":[],"emoticons":[":-/"],"shortcodes":[":slightly-frowning:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😕"},{"base":[128560],"alternates":[],"emoticons":["D-\':"],"shortcodes":[":anxious-with-sweat:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😰"},{"base":[128552],"alternates":[],"emoticons":["D-:"],"shortcodes":[":scared:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😨"},{"base":[128551],"alternates":[],"emoticons":[],"shortcodes":[":anguished:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😧"},{"base":[128550],"alternates":[],"emoticons":["D="],"shortcodes":[":gasp:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😦"},{"base":[128558],"alternates":[],"emoticons":[":O"],"shortcodes":[":mouth-open:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😮"},{"base":[128559],"alternates":[],"emoticons":[":o"],"shortcodes":[":surprised:",":hushed:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😯"},{"base":[128562],"alternates":[],"emoticons":[],"shortcodes":[":astonished:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😲"},{"base":[128563],"alternates":[],"emoticons":["8‑0"],"shortcodes":[":flushed:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😳"},{"base":[129327],"alternates":[],"emoticons":[],"shortcodes":[":mind-blown:",":exploding-head:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤯"},{"base":[128534],"alternates":[],"emoticons":[">:["],"shortcodes":[":scrunched-mouth:",":confounded:",":zigzag-mouth:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😖"},{"base":[128547],"alternates":[],"emoticons":[">:("],"shortcodes":[":scrunched-eyes:",":persevering:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😣"},{"base":[128553],"alternates":[],"emoticons":["D:"],"shortcodes":[":weary:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😩"},{"base":[128555],"alternates":[],"emoticons":["D-X"],"shortcodes":[":distraught:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😫"},{"base":[128565],"alternates":[],"emoticons":["X_o"],"shortcodes":[":x-eyes:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😵"},{"base":[128565,8205,128171],"alternates":[],"emoticons":[],"shortcodes":[":dizzy-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😵‍💫"},{"base":[129768],"alternates":[],"emoticons":[],"shortcodes":[":shaking-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🫨"},{"base":[129398],"alternates":[],"emoticons":[],"shortcodes":[":cold-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🥶"},{"base":[129397],"alternates":[],"emoticons":[],"shortcodes":[":hot-face:",":sweat-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🥵"},{"base":[129314],"alternates":[],"emoticons":[":-###"],"shortcodes":[":sick:",":nauseated:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤢"},{"base":[129326],"alternates":[],"emoticons":[":-O##"],"shortcodes":[":vomit:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤮"},{"base":[128564],"alternates":[],"emoticons":["Z_Z"],"shortcodes":[":sleep:",":tired:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😴"},{"base":[128554],"alternates":[],"emoticons":["(-.-)zzZZ"],"shortcodes":[":sleepy:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😪"},{"base":[129319],"alternates":[],"emoticons":["(*´台｀*)"],"shortcodes":[":sneeze:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤧"},{"base":[129298],"alternates":[],"emoticons":[],"shortcodes":[":thermometer-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤒"},{"base":[129301],"alternates":[],"emoticons":[],"shortcodes":[":bandage-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤕"},{"base":[128567],"alternates":[],"emoticons":[],"shortcodes":[":mask:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😷"},{"base":[129317],"alternates":[],"emoticons":[],"shortcodes":[":liar:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤥"},{"base":[128519],"alternates":[],"emoticons":["O:)"],"shortcodes":[":halo:",":innocent:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😇"},{"base":[129312],"alternates":[],"emoticons":["<):)"],"shortcodes":[":cowboy:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤠"},{"base":[129297],"alternates":[],"emoticons":["$_$"],"shortcodes":[":money-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤑"},{"base":[129299],"alternates":[],"emoticons":[":-B"],"shortcodes":[":nerd-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤓"},{"base":[128526],"alternates":[],"emoticons":["B-)"],"shortcodes":[":sunglasses-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😎"},{"base":[129400],"alternates":[],"emoticons":[],"shortcodes":[":disguise:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🥸"},{"base":[129313],"alternates":[],"emoticons":[":o)"],"shortcodes":[":clown:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤡"},{"base":[128520],"alternates":[],"emoticons":["3:)"],"shortcodes":[":imp-smile:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😈"},{"base":[128127],"alternates":[],"emoticons":["3:("],"shortcodes":[":imp-frown:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"👿"},{"base":[128123],"alternates":[],"emoticons":["⊂(´・◡・⊂)∘˚˳°"],"shortcodes":[":ghost:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"👻"},{"base":[128128],"alternates":[],"emoticons":[],"shortcodes":[":skull:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💀"},{"base":[9760,65039],"alternates":[],"emoticons":[],"shortcodes":[":skull-and-crossbones:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"☠️"},{"base":[128121],"alternates":[],"emoticons":[],"shortcodes":[":ogre:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👹"},{"base":[128122],"alternates":[],"emoticons":[],"shortcodes":[":goblin:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👺"},{"base":[127875],"alternates":[],"emoticons":[],"shortcodes":[":jack-o-lantern:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🎃"},{"base":[128169],"alternates":[],"emoticons":["༼^-^༽"],"shortcodes":[":poop:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💩"},{"base":[129302],"alternates":[],"emoticons":[],"shortcodes":[":robot:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤖"},{"base":[128125],"alternates":[],"emoticons":["(<>..<>)"],"shortcodes":[":alien:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"👽"},{"base":[128126],"alternates":[],"emoticons":[],"shortcodes":[":alien-monster:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👾"},{"base":[127770],"alternates":[],"emoticons":[">_>"],"shortcodes":[":moon-face-new:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🌚"},{"base":[127773],"alternates":[],"emoticons":["<_<"],"shortcodes":[":moon-face-full:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🌝"},{"base":[127774],"alternates":[],"emoticons":[],"shortcodes":[":sun-with-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🌞"},{"base":[127771],"alternates":[],"emoticons":[],"shortcodes":[":moon-face-first-quarter:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🌛"},{"base":[127772],"alternates":[],"emoticons":[],"shortcodes":[":moon-face-last-quarter:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🌜"},{"base":[128584],"alternates":[],"emoticons":[],"shortcodes":[":see-no-evil-monkey:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🙈"},{"base":[128585],"alternates":[],"emoticons":[],"shortcodes":[":hear-no-evil-monkey:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🙉"},{"base":[128586],"alternates":[],"emoticons":[],"shortcodes":[":speak-no-evil-monkey:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🙊"},{"base":[128570],"alternates":[],"emoticons":[":3"],"shortcodes":[":smiley-cat:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😺"},{"base":[128568],"alternates":[],"emoticons":[],"shortcodes":[":smile-cat:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😸"},{"base":[128569],"alternates":[],"emoticons":[],"shortcodes":[":joy-cat:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😹"},{"base":[128571],"alternates":[],"emoticons":[],"shortcodes":[":heart-eyes-cat:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😻"},{"base":[128572],"alternates":[],"emoticons":[],"shortcodes":[":smirk-cat:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😼"},{"base":[128573],"alternates":[],"emoticons":[],"shortcodes":[":kissing-cat:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😽"},{"base":[128576],"alternates":[],"emoticons":[],"shortcodes":[":scream-cat:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🙀"},{"base":[128575],"alternates":[],"emoticons":[],"shortcodes":[":crying-cat-face:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😿"},{"base":[128574],"alternates":[],"emoticons":[],"shortcodes":[":pouting-cat:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"😾"},{"base":[128171],"alternates":[],"emoticons":[],"shortcodes":[":dizzy:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"💫"},{"base":[11088],"alternates":[],"emoticons":[],"shortcodes":[":star:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"⭐"},{"base":[127775],"alternates":[],"emoticons":[],"shortcodes":[":glowing-star:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🌟"},{"base":[10024],"alternates":[],"emoticons":[],"shortcodes":[":sparkles:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"✨"},{"base":[128165],"alternates":[],"emoticons":[],"shortcodes":[":collision:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💥"},{"base":[128168],"alternates":[],"emoticons":[],"shortcodes":[":dash:",":poof:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"💨"},{"base":[128166],"alternates":[],"emoticons":[],"shortcodes":[":sweat-droplets:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"💦"},{"base":[128164],"alternates":[],"emoticons":[],"shortcodes":[":zzz:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"💤"},{"base":[128371,65039],"alternates":[],"emoticons":[],"shortcodes":[":hole:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🕳️"},{"base":[128293],"alternates":[],"emoticons":[],"shortcodes":[":fire:",":burn:",":lit:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🔥"},{"base":[128175],"alternates":[],"emoticons":[],"shortcodes":[":100:",":one-hundred:",":hundred:",":points:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💯"},{"base":[127881],"alternates":[],"emoticons":[],"shortcodes":[":party-popper:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🎉"},{"base":[10084,65039],"alternates":[],"emoticons":["<3"],"shortcodes":[":red-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"❤️"},{"base":[129505],"alternates":[],"emoticons":[],"shortcodes":[":orange-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🧡"},{"base":[128155],"alternates":[],"emoticons":[],"shortcodes":[":yellow-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💛"},{"base":[128154],"alternates":[],"emoticons":[],"shortcodes":[":green-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💚"},{"base":[129653],"alternates":[],"emoticons":[],"shortcodes":[":light-blue-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🩵"},{"base":[128153],"alternates":[],"emoticons":[],"shortcodes":[":blue-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💙"},{"base":[128156],"alternates":[],"emoticons":[],"shortcodes":[":purple-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💜"},{"base":[129294],"alternates":[],"emoticons":[],"shortcodes":[":brown-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤎"},{"base":[128420],"alternates":[],"emoticons":[],"shortcodes":[":black-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🖤"},{"base":[129654],"alternates":[],"emoticons":[],"shortcodes":[":grey-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🩶"},{"base":[129293],"alternates":[],"emoticons":[],"shortcodes":[":white-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤍"},{"base":[129655],"alternates":[],"emoticons":[],"shortcodes":[":pink-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🩷"},{"base":[128152],"alternates":[],"emoticons":[],"shortcodes":[":cupid:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💘"},{"base":[128157],"alternates":[],"emoticons":[],"shortcodes":[":gift-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💝"},{"base":[128150],"alternates":[],"emoticons":[],"shortcodes":[":sparkling-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💖"},{"base":[128151],"alternates":[],"emoticons":[],"shortcodes":[":heart-grow:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💗"},{"base":[128147],"alternates":[],"emoticons":[],"shortcodes":[":beating-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💓"},{"base":[128158],"alternates":[],"emoticons":[],"shortcodes":[":revolving-hearts:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💞"},{"base":[128149],"alternates":[],"emoticons":["<3<3"],"shortcodes":[":two-hearts:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💕"},{"base":[128140],"alternates":[],"emoticons":[],"shortcodes":[":love-letter:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💌"},{"base":[128159],"alternates":[],"emoticons":[],"shortcodes":[":heart-box:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💟"},{"base":[9829,65039],"alternates":[],"emoticons":[],"shortcodes":[":heart:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"♥️"},{"base":[10083,65039],"alternates":[],"emoticons":["<3!"],"shortcodes":[":heart-exclamation-point:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"❣️"},{"base":[10084,65039,8205,129657],"alternates":[],"emoticons":[],"shortcodes":[":bandaged-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"❤️‍🩹"},{"base":[128148],"alternates":[],"emoticons":["</3"],"shortcodes":[":broken-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💔"},{"base":[10084,65039,8205,128293],"alternates":[],"emoticons":[],"shortcodes":[":fire-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"❤️‍🔥"},{"base":[128139],"alternates":[],"emoticons":[],"shortcodes":[":kiss:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💋"},{"base":[129730],"alternates":[],"emoticons":[],"shortcodes":[":hugging:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🫂"},{"base":[128101],"alternates":[],"emoticons":[],"shortcodes":[":busts-in-silhouette:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👥"},{"base":[128100],"alternates":[],"emoticons":[],"shortcodes":[":bust-in-silhouette:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👤"},{"base":[128483,65039],"alternates":[],"emoticons":[],"shortcodes":[":speaking-head:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🗣️"},{"base":[128099],"alternates":[],"emoticons":[],"shortcodes":[":footprints:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"👣"},{"base":[129504],"alternates":[],"emoticons":[],"shortcodes":[":brain:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🧠"},{"base":[129728],"alternates":[],"emoticons":[],"shortcodes":[":anatomical-heart:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🫀"},{"base":[129729],"alternates":[],"emoticons":[],"shortcodes":[":lungs:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🫁"},{"base":[129656],"alternates":[],"emoticons":[],"shortcodes":[":blood:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🩸"},{"base":[129440],"alternates":[],"emoticons":[],"shortcodes":[":microbe:",":virus:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🦠"},{"base":[129463],"alternates":[],"emoticons":[],"shortcodes":[":tooth:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🦷"},{"base":[129460],"alternates":[],"emoticons":[],"shortcodes":[":bone:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🦴"},{"base":[128064],"alternates":[],"emoticons":[],"shortcodes":[":eyes:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"👀"},{"base":[128065,65039],"alternates":[],"emoticons":[],"shortcodes":[":eye:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"👁️"},{"base":[128068],"alternates":[],"emoticons":[],"shortcodes":[":mouth:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👄"},{"base":[129766],"alternates":[],"emoticons":[],"shortcodes":[":biting-lip:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🫦"},{"base":[128069],"alternates":[],"emoticons":[],"shortcodes":[":tongue:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👅"},{"base":[128067],"alternates":[[128067],[128067,127995],[128067,127996],[128067,127997],[128067,127998],[128067,127999]],"emoticons":[],"shortcodes":[":nose:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👃"},{"base":[128066],"alternates":[[128066],[128066,127995],[128066,127996],[128066,127997],[128066,127998],[128066,127999]],"emoticons":[],"shortcodes":[":ear:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👂"},{"base":[129467],"alternates":[[129467],[129467,127995],[129467,127996],[129467,127997],[129467,127998],[129467,127999]],"emoticons":[],"shortcodes":[":hearing-aid:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🦻"},{"base":[129462],"alternates":[[129462],[129462,127995],[129462,127996],[129462,127997],[129462,127998],[129462,127999]],"emoticons":[],"shortcodes":[":foot:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🦶"},{"base":[129461],"alternates":[[129461],[129461,127995],[129461,127996],[129461,127997],[129461,127998],[129461,127999]],"emoticons":[],"shortcodes":[":leg:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🦵"},{"base":[129471],"alternates":[],"emoticons":[],"shortcodes":[":leg-mechanical:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🦿"},{"base":[129470],"alternates":[],"emoticons":[],"shortcodes":[":arm-mechanical:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🦾"},{"base":[128170],"alternates":[[128170],[128170,127995],[128170,127996],[128170,127997],[128170,127998],[128170,127999]],"emoticons":[],"shortcodes":[":muscle:",":flex:",":bicep:",":strong:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"💪"},{"base":[128079],"alternates":[[128079],[128079,127995],[128079,127996],[128079,127997],[128079,127998],[128079,127999]],"emoticons":[],"shortcodes":[":clap:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"👏"},{"base":[128077],"alternates":[[128077],[128077,127995],[128077,127996],[128077,127997],[128077,127998],[128077,127999]],"emoticons":[],"shortcodes":[":thumbs-up:",":+1:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"👍"},{"base":[128078],"alternates":[[128078],[128078,127995],[128078,127996],[128078,127997],[128078,127998],[128078,127999]],"emoticons":[],"shortcodes":[":thumbs-down:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"👎"},{"base":[129782],"alternates":[[129782],[129782,127995],[129782,127996],[129782,127997],[129782,127998],[129782,127999]],"emoticons":[],"shortcodes":[":heart-hands:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🫶"},{"base":[128588],"alternates":[[128588],[128588,127995],[128588,127996],[128588,127997],[128588,127998],[128588,127999]],"emoticons":[],"shortcodes":[":raising-hands:",":hooray:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🙌"},{"base":[128080],"alternates":[[128080],[128080,127995],[128080,127996],[128080,127997],[128080,127998],[128080,127999]],"emoticons":[],"shortcodes":[":open-hands:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👐"},{"base":[129330],"alternates":[[129330],[129330,127995],[129330,127996],[129330,127997],[129330,127998],[129330,127999]],"emoticons":[],"shortcodes":[":palms-up:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🤲"},{"base":[129308],"alternates":[[129308],[129308,127995],[129308,127996],[129308,127997],[129308,127998],[129308,127999]],"emoticons":[],"shortcodes":[":fist-rightwards:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🤜"},{"base":[129307],"alternates":[[129307],[129307,127995],[129307,127996],[129307,127997],[129307,127998],[129307,127999]],"emoticons":[],"shortcodes":[":fist-leftwards:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🤛"},{"base":[9994],"alternates":[[9994],[9994,127995],[9994,127996],[9994,127997],[9994,127998],[9994,127999]],"emoticons":[],"shortcodes":[":raised-fist:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"✊"},{"base":[128074],"alternates":[[128074],[128074,127995],[128074,127996],[128074,127997],[128074,127998],[128074,127999]],"emoticons":[],"shortcodes":[":fist:",":bump:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👊"},{"base":[129779],"alternates":[[129779],[129779,127995],[129779,127996],[129779,127997],[129779,127998],[129779,127999]],"emoticons":[],"shortcodes":[":palm-down:",":drop:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🫳"},{"base":[129780],"alternates":[[129780],[129780,127995],[129780,127996],[129780,127997],[129780,127998],[129780,127999]],"emoticons":[],"shortcodes":[":palm-up:",":throw:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🫴"},{"base":[129777],"alternates":[[129777],[129777,127995],[129777,127996],[129777,127997],[129777,127998],[129777,127999]],"emoticons":[],"shortcodes":[":rightwards-hand:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🫱"},{"base":[129778],"alternates":[[129778],[129778,127995],[129778,127996],[129778,127997],[129778,127998],[129778,127999]],"emoticons":[],"shortcodes":[":leftwards-hand:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🫲"},{"base":[129784],"alternates":[[129784],[129784,127995],[129784,127996],[129784,127997],[129784,127998],[129784,127999]],"emoticons":[],"shortcodes":[":push-rightwards:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🫸"},{"base":[129783],"alternates":[[129783],[129783,127995],[129783,127996],[129783,127997],[129783,127998],[129783,127999]],"emoticons":[],"shortcodes":[":push-leftwards:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🫷"},{"base":[128075],"alternates":[[128075],[128075,127995],[128075,127996],[128075,127997],[128075,127998],[128075,127999]],"emoticons":[],"shortcodes":[":wave:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"👋"},{"base":[129306],"alternates":[[129306],[129306,127995],[129306,127996],[129306,127997],[129306,127998],[129306,127999]],"emoticons":[],"shortcodes":[":back-hand:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🤚"},{"base":[128400,65039],"alternates":[[128400,65039],[128400,127995],[128400,127996],[128400,127997],[128400,127998],[128400,127999]],"emoticons":[],"shortcodes":[":palm:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🖐️"},{"base":[9995],"alternates":[[9995],[9995,127995],[9995,127996],[9995,127997],[9995,127998],[9995,127999]],"emoticons":[],"shortcodes":[":raised-hand:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"✋"},{"base":[128406],"alternates":[[128406],[128406,127995],[128406,127996],[128406,127997],[128406,127998],[128406,127999]],"emoticons":[],"shortcodes":[":vulcan:",":prosper:",":spock:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🖖"},{"base":[129311],"alternates":[[129311],[129311,127995],[129311,127996],[129311,127997],[129311,127998],[129311,127999]],"emoticons":[],"shortcodes":[":love-you-gesture:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🤟"},{"base":[129304],"alternates":[[129304],[129304,127995],[129304,127996],[129304,127997],[129304,127998],[129304,127999]],"emoticons":[],"shortcodes":[":metal:",":horns:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🤘"},{"base":[9996,65039],"alternates":[[9996,65039],[9996,127995],[9996,127996],[9996,127997],[9996,127998],[9996,127999]],"emoticons":[],"shortcodes":[":v:",":peace-hand:",":victory:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"✌️"},{"base":[129310],"alternates":[[129310],[129310,127995],[129310,127996],[129310,127997],[129310,127998],[129310,127999]],"emoticons":[],"shortcodes":[":crossed-fingers:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🤞"},{"base":[129776],"alternates":[[129776],[129776,127995],[129776,127996],[129776,127997],[129776,127998],[129776,127999]],"emoticons":[],"shortcodes":[":hand-with-index-finger-and-thumb-crossed:",":snap:",":finger-heart:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🫰"},{"base":[129305],"alternates":[[129305],[129305,127995],[129305,127996],[129305,127997],[129305,127998],[129305,127999]],"emoticons":[],"shortcodes":[":call-me-hand:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🤙"},{"base":[129292],"alternates":[[129292],[129292,127995],[129292,127996],[129292,127997],[129292,127998],[129292,127999]],"emoticons":[],"shortcodes":[":pinched-fingers:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🤌"},{"base":[129295],"alternates":[[129295],[129295,127995],[129295,127996],[129295,127997],[129295,127998],[129295,127999]],"emoticons":[],"shortcodes":[":pinch:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🤏"},{"base":[128076],"alternates":[[128076],[128076,127995],[128076,127996],[128076,127997],[128076,127998],[128076,127999]],"emoticons":[],"shortcodes":[":ok:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👌"},{"base":[129781],"alternates":[[129781],[129781,127995],[129781,127996],[129781,127997],[129781,127998],[129781,127999]],"emoticons":[],"shortcodes":[":pointing:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🫵"},{"base":[128073],"alternates":[[128073],[128073,127995],[128073,127996],[128073,127997],[128073,127998],[128073,127999]],"emoticons":[],"shortcodes":[":point-right:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👉"},{"base":[128072],"alternates":[[128072],[128072,127995],[128072,127996],[128072,127997],[128072,127998],[128072,127999]],"emoticons":[],"shortcodes":[":point-left:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👈"},{"base":[9757,65039],"alternates":[[9757,65039],[9757,127995],[9757,127996],[9757,127997],[9757,127998],[9757,127999]],"emoticons":[],"shortcodes":[":index-finger:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"☝️"},{"base":[128070],"alternates":[[128070],[128070,127995],[128070,127996],[128070,127997],[128070,127998],[128070,127999]],"emoticons":[],"shortcodes":[":point-up:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👆"},{"base":[128071],"alternates":[[128071],[128071,127995],[128071,127996],[128071,127997],[128071,127998],[128071,127999]],"emoticons":[],"shortcodes":[":point-down:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"👇"},{"base":[128405],"alternates":[[128405],[128405,127995],[128405,127996],[128405,127997],[128405,127998],[128405,127999]],"emoticons":[],"shortcodes":[":middle-finger:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🖕"},{"base":[9997,65039],"alternates":[[9997,65039],[9997,127995],[9997,127996],[9997,127997],[9997,127998],[9997,127999]],"emoticons":[],"shortcodes":[":writing-hand:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"✍️"},{"base":[129331],"alternates":[[129331],[129331,127995],[129331,127996],[129331,127997],[129331,127998],[129331,127999]],"emoticons":[],"shortcodes":[":selfie:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🤳"},{"base":[128591],"alternates":[[128591],[128591,127995],[128591,127996],[128591,127997],[128591,127998],[128591,127999]],"emoticons":[],"shortcodes":[":folded-hands:",":please:",":pray:",":hope:",":wish:",":thank-you:",":high-five:"],"animated":true,"directional":false,"group":"Smileys and emotions","emoji":"🙏"},{"base":[128133],"alternates":[[128133],[128133,127995],[128133,127996],[128133,127997],[128133,127998],[128133,127999]],"emoticons":[],"shortcodes":[":nail-care:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"💅"},{"base":[129309],"alternates":[[129309],[129309,127995],[129777,127995,8205,129778,127996],[129777,127995,8205,129778,127997],[129777,127995,8205,129778,127998],[129777,127995,8205,129778,127999],[129777,127996,8205,129778,127995],[129309,127996],[129777,127996,8205,129778,127997],[129777,127996,8205,129778,127998],[129777,127996,8205,129778,127999],[129777,127997,8205,129778,127995],[129777,127997,8205,129778,127996],[129309,127997],[129777,127997,8205,129778,127998],[129777,127997,8205,129778,127999],[129777,127998,8205,129778,127995],[129777,127998,8205,129778,127996],[129777,127998,8205,129778,127997],[129309,127998],[129777,127998,8205,129778,127999],[129777,127999,8205,129778,127995],[129777,127999,8205,129778,127996],[129777,127999,8205,129778,127997],[129777,127999,8205,129778,127998],[129309,127999]],"emoticons":[],"shortcodes":[":handshake:"],"animated":false,"directional":false,"group":"Smileys and emotions","emoji":"🤝"},{"base":[128583],"alternates":[[128583],[128583,127995],[128583,127996],[128583,127997],[128583,127998],[128583,127999],[128583,8205,9792,65039],[128583,127995,8205,9792,65039],[128583,127996,8205,9792,65039],[128583,127997,8205,9792,65039],[128583,127998,8205,9792,65039],[128583,127999,8205,9792,65039],[128583,8205,9794,65039],[128583,127995,8205,9794,65039],[128583,127996,8205,9794,65039],[128583,127997,8205,9794,65039],[128583,127998,8205,9794,65039],[128583,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":bow:"],"animated":false,"directional":false,"group":"People","emoji":"🙇"},{"base":[128587],"alternates":[[128587],[128587,127995],[128587,127996],[128587,127997],[128587,127998],[128587,127999],[128587,8205,9792,65039],[128587,127995,8205,9792,65039],[128587,127996,8205,9792,65039],[128587,127997,8205,9792,65039],[128587,127998,8205,9792,65039],[128587,127999,8205,9792,65039],[128587,8205,9794,65039],[128587,127995,8205,9794,65039],[128587,127996,8205,9794,65039],[128587,127997,8205,9794,65039],[128587,127998,8205,9794,65039],[128587,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":raising-hand:"],"animated":false,"directional":false,"group":"People","emoji":"🙋"},{"base":[128129],"alternates":[[128129],[128129,127995],[128129,127996],[128129,127997],[128129,127998],[128129,127999],[128129,8205,9792,65039],[128129,127995,8205,9792,65039],[128129,127996,8205,9792,65039],[128129,127997,8205,9792,65039],[128129,127998,8205,9792,65039],[128129,127999,8205,9792,65039],[128129,8205,9794,65039],[128129,127995,8205,9794,65039],[128129,127996,8205,9794,65039],[128129,127997,8205,9794,65039],[128129,127998,8205,9794,65039],[128129,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":tipping-hand:"],"animated":false,"directional":false,"group":"People","emoji":"💁"},{"base":[128582],"alternates":[[128582],[128582,127995],[128582,127996],[128582,127997],[128582,127998],[128582,127999],[128582,8205,9792,65039],[128582,127995,8205,9792,65039],[128582,127996,8205,9792,65039],[128582,127997,8205,9792,65039],[128582,127998,8205,9792,65039],[128582,127999,8205,9792,65039],[128582,8205,9794,65039],[128582,127995,8205,9794,65039],[128582,127996,8205,9794,65039],[128582,127997,8205,9794,65039],[128582,127998,8205,9794,65039],[128582,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":gesture-ok:"],"animated":false,"directional":false,"group":"People","emoji":"🙆"},{"base":[128581],"alternates":[[128581],[128581,127995],[128581,127996],[128581,127997],[128581,127998],[128581,127999],[128581,8205,9792,65039],[128581,127995,8205,9792,65039],[128581,127996,8205,9792,65039],[128581,127997,8205,9792,65039],[128581,127998,8205,9792,65039],[128581,127999,8205,9792,65039],[128581,8205,9794,65039],[128581,127995,8205,9794,65039],[128581,127996,8205,9794,65039],[128581,127997,8205,9794,65039],[128581,127998,8205,9794,65039],[128581,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":no-gesture:",":no-good:",":denied:",":halt:"],"animated":false,"directional":false,"group":"People","emoji":"🙅"},{"base":[129335],"alternates":[[129335],[129335,127995],[129335,127996],[129335,127997],[129335,127998],[129335,127999],[129335,8205,9792,65039],[129335,127995,8205,9792,65039],[129335,127996,8205,9792,65039],[129335,127997,8205,9792,65039],[129335,127998,8205,9792,65039],[129335,127999,8205,9792,65039],[129335,8205,9794,65039],[129335,127995,8205,9794,65039],[129335,127996,8205,9794,65039],[129335,127997,8205,9794,65039],[129335,127998,8205,9794,65039],[129335,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":shrug:"],"animated":false,"directional":false,"group":"People","emoji":"🤷"},{"base":[129318],"alternates":[[129318],[129318,127995],[129318,127996],[129318,127997],[129318,127998],[129318,127999],[129318,8205,9792,65039],[129318,127995,8205,9792,65039],[129318,127996,8205,9792,65039],[129318,127997,8205,9792,65039],[129318,127998,8205,9792,65039],[129318,127999,8205,9792,65039],[129318,8205,9794,65039],[129318,127995,8205,9794,65039],[129318,127996,8205,9794,65039],[129318,127997,8205,9794,65039],[129318,127998,8205,9794,65039],[129318,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":facepalm:"],"animated":false,"directional":false,"group":"People","emoji":"🤦"},{"base":[128589],"alternates":[[128589],[128589,127995],[128589,127996],[128589,127997],[128589,127998],[128589,127999],[128589,8205,9792,65039],[128589,127995,8205,9792,65039],[128589,127996,8205,9792,65039],[128589,127997,8205,9792,65039],[128589,127998,8205,9792,65039],[128589,127999,8205,9792,65039],[128589,8205,9794,65039],[128589,127995,8205,9794,65039],[128589,127996,8205,9794,65039],[128589,127997,8205,9794,65039],[128589,127998,8205,9794,65039],[128589,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":frowning:"],"animated":false,"directional":false,"group":"People","emoji":"🙍"},{"base":[128590],"alternates":[[128590],[128590,127995],[128590,127996],[128590,127997],[128590,127998],[128590,127999],[128590,8205,9792,65039],[128590,127995,8205,9792,65039],[128590,127996,8205,9792,65039],[128590,127997,8205,9792,65039],[128590,127998,8205,9792,65039],[128590,127999,8205,9792,65039],[128590,8205,9794,65039],[128590,127995,8205,9794,65039],[128590,127996,8205,9794,65039],[128590,127997,8205,9794,65039],[128590,127998,8205,9794,65039],[128590,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":pouting:"],"animated":false,"directional":false,"group":"People","emoji":"🙎"},{"base":[129487],"alternates":[[129487],[129487,127995],[129487,127996],[129487,127997],[129487,127998],[129487,127999],[129487,8205,9792,65039],[129487,127995,8205,9792,65039],[129487,127996,8205,9792,65039],[129487,127997,8205,9792,65039],[129487,127998,8205,9792,65039],[129487,127999,8205,9792,65039],[129487,8205,9794,65039],[129487,127995,8205,9794,65039],[129487,127996,8205,9794,65039],[129487,127997,8205,9794,65039],[129487,127998,8205,9794,65039],[129487,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":deaf:"],"animated":false,"directional":false,"group":"People","emoji":"🧏"},{"base":[128134],"alternates":[[128134],[128134,127995],[128134,127996],[128134,127997],[128134,127998],[128134,127999],[128134,8205,9792,65039],[128134,127995,8205,9792,65039],[128134,127996,8205,9792,65039],[128134,127997,8205,9792,65039],[128134,127998,8205,9792,65039],[128134,127999,8205,9792,65039],[128134,8205,9794,65039],[128134,127995,8205,9794,65039],[128134,127996,8205,9794,65039],[128134,127997,8205,9794,65039],[128134,127998,8205,9794,65039],[128134,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":massage:"],"animated":false,"directional":false,"group":"People","emoji":"💆"},{"base":[128135],"alternates":[[128135],[128135,127995],[128135,127996],[128135,127997],[128135,127998],[128135,127999],[128135,8205,9792,65039],[128135,127995,8205,9792,65039],[128135,127996,8205,9792,65039],[128135,127997,8205,9792,65039],[128135,127998,8205,9792,65039],[128135,127999,8205,9792,65039],[128135,8205,9794,65039],[128135,127995,8205,9794,65039],[128135,127996,8205,9794,65039],[128135,127997,8205,9794,65039],[128135,127998,8205,9794,65039],[128135,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":haircut:"],"animated":false,"directional":false,"group":"People","emoji":"💇"},{"base":[129494],"alternates":[[129494],[129494,127995],[129494,127996],[129494,127997],[129494,127998],[129494,127999],[129494,8205,9792,65039],[129494,127995,8205,9792,65039],[129494,127996,8205,9792,65039],[129494,127997,8205,9792,65039],[129494,127998,8205,9792,65039],[129494,127999,8205,9792,65039],[129494,8205,9794,65039],[129494,127995,8205,9794,65039],[129494,127996,8205,9794,65039],[129494,127997,8205,9794,65039],[129494,127998,8205,9794,65039],[129494,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":sauna:",":steamy:"],"animated":false,"directional":false,"group":"People","emoji":"🧖"},{"base":[128704],"alternates":[[128704],[128704,127995],[128704,127996],[128704,127997],[128704,127998],[128704,127999]],"emoticons":[],"shortcodes":[":bathe:"],"animated":false,"directional":false,"group":"People","emoji":"🛀"},{"base":[128716],"alternates":[[128716],[128716,127995],[128716,127996],[128716,127997],[128716,127998],[128716,127999]],"emoticons":[],"shortcodes":[":in-bed:"],"animated":false,"directional":false,"group":"People","emoji":"🛌"},{"base":[129496],"alternates":[[129496],[129496,127995],[129496,127996],[129496,127997],[129496,127998],[129496,127999],[129496,8205,9792,65039],[129496,127995,8205,9792,65039],[129496,127996,8205,9792,65039],[129496,127997,8205,9792,65039],[129496,127998,8205,9792,65039],[129496,127999,8205,9792,65039],[129496,8205,9794,65039],[129496,127995,8205,9794,65039],[129496,127996,8205,9794,65039],[129496,127997,8205,9794,65039],[129496,127998,8205,9794,65039],[129496,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":yoga:",":meditation:",":lotus-position:"],"animated":false,"directional":false,"group":"People","emoji":"🧘"},{"base":[129485],"alternates":[[129485],[129485,127995],[129485,127996],[129485,127997],[129485,127998],[129485,127999],[129485,8205,9792,65039],[129485,127995,8205,9792,65039],[129485,127996,8205,9792,65039],[129485,127997,8205,9792,65039],[129485,127998,8205,9792,65039],[129485,127999,8205,9792,65039],[129485,8205,9794,65039],[129485,127995,8205,9794,65039],[129485,127996,8205,9794,65039],[129485,127997,8205,9794,65039],[129485,127998,8205,9794,65039],[129485,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":standing:"],"animated":false,"directional":false,"group":"People","emoji":"🧍"},{"base":[129336],"alternates":[[129336],[129336,127995],[129336,127996],[129336,127997],[129336,127998],[129336,127999],[129336,8205,9792,65039],[129336,127995,8205,9792,65039],[129336,127996,8205,9792,65039],[129336,127997,8205,9792,65039],[129336,127998,8205,9792,65039],[129336,127999,8205,9792,65039],[129336,8205,9794,65039],[129336,127995,8205,9794,65039],[129336,127996,8205,9794,65039],[129336,127997,8205,9794,65039],[129336,127998,8205,9794,65039],[129336,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":cartwheel:"],"animated":false,"directional":false,"group":"People","emoji":"🤸"},{"base":[129486],"alternates":[[129486],[129486,127995],[129486,127996],[129486,127997],[129486,127998],[129486,127999],[129486,8205,10145,65039],[129486,127995,8205,10145,65039],[129486,127996,8205,10145,65039],[129486,127997,8205,10145,65039],[129486,127998,8205,10145,65039],[129486,127999,8205,10145,65039],[129486,8205,9792,65039],[129486,127995,8205,9792,65039],[129486,127996,8205,9792,65039],[129486,127997,8205,9792,65039],[129486,127998,8205,9792,65039],[129486,127999,8205,9792,65039],[129486,8205,9792,65039,8205,10145,65039],[129486,127995,8205,9792,65039,8205,10145,65039],[129486,127996,8205,9792,65039,8205,10145,65039],[129486,127997,8205,9792,65039,8205,10145,65039],[129486,127998,8205,9792,65039,8205,10145,65039],[129486,127999,8205,9792,65039,8205,10145,65039],[129486,8205,9794,65039],[129486,127995,8205,9794,65039],[129486,127996,8205,9794,65039],[129486,127997,8205,9794,65039],[129486,127998,8205,9794,65039],[129486,127999,8205,9794,65039],[129486,8205,9794,65039,8205,10145,65039],[129486,127995,8205,9794,65039,8205,10145,65039],[129486,127996,8205,9794,65039,8205,10145,65039],[129486,127997,8205,9794,65039,8205,10145,65039],[129486,127998,8205,9794,65039,8205,10145,65039],[129486,127999,8205,9794,65039,8205,10145,65039]],"emoticons":[],"shortcodes":[":kneeling:"],"animated":false,"directional":true,"group":"People","emoji":"🧎"},{"base":[129489,8205,129468],"alternates":[[129489,8205,129468],[129489,127995,8205,129468],[129489,127996,8205,129468],[129489,127997,8205,129468],[129489,127998,8205,129468],[129489,127999,8205,129468],[129489,8205,129468,8205,10145,65039],[129489,127995,8205,129468,8205,10145,65039],[129489,127996,8205,129468,8205,10145,65039],[129489,127997,8205,129468,8205,10145,65039],[129489,127998,8205,129468,8205,10145,65039],[129489,127999,8205,129468,8205,10145,65039],[128105,8205,129468],[128105,127995,8205,129468],[128105,127996,8205,129468],[128105,127997,8205,129468],[128105,127998,8205,129468],[128105,127999,8205,129468],[128105,8205,129468,8205,10145,65039],[128105,127995,8205,129468,8205,10145,65039],[128105,127996,8205,129468,8205,10145,65039],[128105,127997,8205,129468,8205,10145,65039],[128105,127998,8205,129468,8205,10145,65039],[128105,127999,8205,129468,8205,10145,65039],[128104,8205,129468],[128104,127995,8205,129468],[128104,127996,8205,129468],[128104,127997,8205,129468],[128104,127998,8205,129468],[128104,127999,8205,129468],[128104,8205,129468,8205,10145,65039],[128104,127995,8205,129468,8205,10145,65039],[128104,127996,8205,129468,8205,10145,65039],[128104,127997,8205,129468,8205,10145,65039],[128104,127998,8205,129468,8205,10145,65039],[128104,127999,8205,129468,8205,10145,65039]],"emoticons":[],"shortcodes":[":person-in-motorized-wheelchair:"],"animated":false,"directional":true,"group":"People","emoji":"🧑‍🦼"},{"base":[129489,8205,129469],"alternates":[[129489,8205,129469],[129489,127995,8205,129469],[129489,127996,8205,129469],[129489,127997,8205,129469],[129489,127998,8205,129469],[129489,127999,8205,129469],[129489,8205,129469,8205,10145,65039],[129489,127995,8205,129469,8205,10145,65039],[129489,127996,8205,129469,8205,10145,65039],[129489,127997,8205,129469,8205,10145,65039],[129489,127998,8205,129469,8205,10145,65039],[129489,127999,8205,129469,8205,10145,65039],[128105,8205,129469],[128105,127995,8205,129469],[128105,127996,8205,129469],[128105,127997,8205,129469],[128105,127998,8205,129469],[128105,127999,8205,129469],[128105,8205,129469,8205,10145,65039],[128105,127995,8205,129469,8205,10145,65039],[128105,127996,8205,129469,8205,10145,65039],[128105,127997,8205,129469,8205,10145,65039],[128105,127998,8205,129469,8205,10145,65039],[128105,127999,8205,129469,8205,10145,65039],[128104,8205,129469],[128104,127995,8205,129469],[128104,127996,8205,129469],[128104,127997,8205,129469],[128104,127998,8205,129469],[128104,127999,8205,129469],[128104,8205,129469,8205,10145,65039],[128104,127995,8205,129469,8205,10145,65039],[128104,127996,8205,129469,8205,10145,65039],[128104,127997,8205,129469,8205,10145,65039],[128104,127998,8205,129469,8205,10145,65039],[128104,127999,8205,129469,8205,10145,65039]],"emoticons":[],"shortcodes":[":person-in-manual-wheelchair:"],"animated":false,"directional":true,"group":"People","emoji":"🧑‍🦽"},{"base":[129489,8205,129455],"alternates":[[129489,8205,129455],[129489,127995,8205,129455],[129489,127996,8205,129455],[129489,127997,8205,129455],[129489,127998,8205,129455],[129489,127999,8205,129455],[129489,8205,129455,8205,10145,65039],[129489,127995,8205,129455,8205,10145,65039],[129489,127996,8205,129455,8205,10145,65039],[129489,127997,8205,129455,8205,10145,65039],[129489,127998,8205,129455,8205,10145,65039],[129489,127999,8205,129455,8205,10145,65039],[128105,8205,129455],[128105,127995,8205,129455],[128105,127996,8205,129455],[128105,127997,8205,129455],[128105,127998,8205,129455],[128105,127999,8205,129455],[128105,8205,129455,8205,10145,65039],[128105,127995,8205,129455,8205,10145,65039],[128105,127996,8205,129455,8205,10145,65039],[128105,127997,8205,129455,8205,10145,65039],[128105,127998,8205,129455,8205,10145,65039],[128105,127999,8205,129455,8205,10145,65039],[128104,8205,129455],[128104,127995,8205,129455],[128104,127996,8205,129455],[128104,127997,8205,129455],[128104,127998,8205,129455],[128104,127999,8205,129455],[128104,8205,129455,8205,10145,65039],[128104,127995,8205,129455,8205,10145,65039],[128104,127996,8205,129455,8205,10145,65039],[128104,127997,8205,129455,8205,10145,65039],[128104,127998,8205,129455,8205,10145,65039],[128104,127999,8205,129455,8205,10145,65039]],"emoticons":[],"shortcodes":[":walking-with-cane:",":blind:"],"animated":false,"directional":true,"group":"People","emoji":"🧑‍🦯"},{"base":[128694],"alternates":[[128694],[128694,127995],[128694,127996],[128694,127997],[128694,127998],[128694,127999],[128694,8205,10145,65039],[128694,127995,8205,10145,65039],[128694,127996,8205,10145,65039],[128694,127997,8205,10145,65039],[128694,127998,8205,10145,65039],[128694,127999,8205,10145,65039],[128694,8205,9792,65039],[128694,127995,8205,9792,65039],[128694,127996,8205,9792,65039],[128694,127997,8205,9792,65039],[128694,127998,8205,9792,65039],[128694,127999,8205,9792,65039],[128694,8205,9792,65039,8205,10145,65039],[128694,127995,8205,9792,65039,8205,10145,65039],[128694,127996,8205,9792,65039,8205,10145,65039],[128694,127997,8205,9792,65039,8205,10145,65039],[128694,127998,8205,9792,65039,8205,10145,65039],[128694,127999,8205,9792,65039,8205,10145,65039],[128694,8205,9794,65039],[128694,127995,8205,9794,65039],[128694,127996,8205,9794,65039],[128694,127997,8205,9794,65039],[128694,127998,8205,9794,65039],[128694,127999,8205,9794,65039],[128694,8205,9794,65039,8205,10145,65039],[128694,127995,8205,9794,65039,8205,10145,65039],[128694,127996,8205,9794,65039,8205,10145,65039],[128694,127997,8205,9794,65039,8205,10145,65039],[128694,127998,8205,9794,65039,8205,10145,65039],[128694,127999,8205,9794,65039,8205,10145,65039]],"emoticons":[],"shortcodes":[":walking:"],"animated":false,"directional":true,"group":"People","emoji":"🚶"},{"base":[127939],"alternates":[[127939],[127939,127995],[127939,127996],[127939,127997],[127939,127998],[127939,127999],[127939,8205,10145,65039],[127939,127995,8205,10145,65039],[127939,127996,8205,10145,65039],[127939,127997,8205,10145,65039],[127939,127998,8205,10145,65039],[127939,127999,8205,10145,65039],[127939,8205,9792,65039],[127939,127995,8205,9792,65039],[127939,127996,8205,9792,65039],[127939,127997,8205,9792,65039],[127939,127998,8205,9792,65039],[127939,127999,8205,9792,65039],[127939,8205,9792,65039,8205,10145,65039],[127939,127995,8205,9792,65039,8205,10145,65039],[127939,127996,8205,9792,65039,8205,10145,65039],[127939,127997,8205,9792,65039,8205,10145,65039],[127939,127998,8205,9792,65039,8205,10145,65039],[127939,127999,8205,9792,65039,8205,10145,65039],[127939,8205,9794,65039],[127939,127995,8205,9794,65039],[127939,127996,8205,9794,65039],[127939,127997,8205,9794,65039],[127939,127998,8205,9794,65039],[127939,127999,8205,9794,65039],[127939,8205,9794,65039,8205,10145,65039],[127939,127995,8205,9794,65039,8205,10145,65039],[127939,127996,8205,9794,65039,8205,10145,65039],[127939,127997,8205,9794,65039,8205,10145,65039],[127939,127998,8205,9794,65039,8205,10145,65039],[127939,127999,8205,9794,65039,8205,10145,65039]],"emoticons":[],"shortcodes":[":running:"],"animated":false,"directional":true,"group":"People","emoji":"🏃"},{"base":[9977,65039],"alternates":[[9977,65039],[9977,127995],[9977,127996],[9977,127997],[9977,127998],[9977,127999],[9977,65039,8205,9792,65039],[9977,127995,8205,9792,65039],[9977,127996,8205,9792,65039],[9977,127997,8205,9792,65039],[9977,127998,8205,9792,65039],[9977,127999,8205,9792,65039],[9977,65039,8205,9794,65039],[9977,127995,8205,9794,65039],[9977,127996,8205,9794,65039],[9977,127997,8205,9794,65039],[9977,127998,8205,9794,65039],[9977,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":bouncing-ball:"],"animated":false,"directional":false,"group":"People","emoji":"⛹️"},{"base":[129342],"alternates":[[129342],[129342,127995],[129342,127996],[129342,127997],[129342,127998],[129342,127999],[129342,8205,9792,65039],[129342,127995,8205,9792,65039],[129342,127996,8205,9792,65039],[129342,127997,8205,9792,65039],[129342,127998,8205,9792,65039],[129342,127999,8205,9792,65039],[129342,8205,9794,65039],[129342,127995,8205,9794,65039],[129342,127996,8205,9794,65039],[129342,127997,8205,9794,65039],[129342,127998,8205,9794,65039],[129342,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":handball:"],"animated":false,"directional":false,"group":"People","emoji":"🤾"},{"base":[128692],"alternates":[[128692],[128692,127995],[128692,127996],[128692,127997],[128692,127998],[128692,127999],[128692,8205,9792,65039],[128692,127995,8205,9792,65039],[128692,127996,8205,9792,65039],[128692,127997,8205,9792,65039],[128692,127998,8205,9792,65039],[128692,127999,8205,9792,65039],[128692,8205,9794,65039],[128692,127995,8205,9794,65039],[128692,127996,8205,9794,65039],[128692,127997,8205,9794,65039],[128692,127998,8205,9794,65039],[128692,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":biking:"],"animated":false,"directional":false,"group":"People","emoji":"🚴"},{"base":[128693],"alternates":[[128693],[128693,127995],[128693,127996],[128693,127997],[128693,127998],[128693,127999],[128693,8205,9792,65039],[128693,127995,8205,9792,65039],[128693,127996,8205,9792,65039],[128693,127997,8205,9792,65039],[128693,127998,8205,9792,65039],[128693,127999,8205,9792,65039],[128693,8205,9794,65039],[128693,127995,8205,9794,65039],[128693,127996,8205,9794,65039],[128693,127997,8205,9794,65039],[128693,127998,8205,9794,65039],[128693,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":mountain-biking:"],"animated":false,"directional":false,"group":"People","emoji":"🚵"},{"base":[129495],"alternates":[[129495],[129495,127995],[129495,127996],[129495,127997],[129495,127998],[129495,127999],[129495,8205,9792,65039],[129495,127995,8205,9792,65039],[129495,127996,8205,9792,65039],[129495,127997,8205,9792,65039],[129495,127998,8205,9792,65039],[129495,127999,8205,9792,65039],[129495,8205,9794,65039],[129495,127995,8205,9794,65039],[129495,127996,8205,9794,65039],[129495,127997,8205,9794,65039],[129495,127998,8205,9794,65039],[129495,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":climbing:"],"animated":false,"directional":false,"group":"People","emoji":"🧗"},{"base":[127947,65039],"alternates":[[127947,65039],[127947,127995],[127947,127996],[127947,127997],[127947,127998],[127947,127999],[127947,65039,8205,9792,65039],[127947,127995,8205,9792,65039],[127947,127996,8205,9792,65039],[127947,127997,8205,9792,65039],[127947,127998,8205,9792,65039],[127947,127999,8205,9792,65039],[127947,65039,8205,9794,65039],[127947,127995,8205,9794,65039],[127947,127996,8205,9794,65039],[127947,127997,8205,9794,65039],[127947,127998,8205,9794,65039],[127947,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":lifting-weights:"],"animated":false,"directional":false,"group":"People","emoji":"🏋️"},{"base":[129340],"alternates":[[129340],[129340,8205,9792,65039],[129340,8205,9794,65039]],"emoticons":[],"shortcodes":[":wrestling:"],"animated":false,"directional":false,"group":"People","emoji":"🤼"},{"base":[129337],"alternates":[[129337],[129337,127995],[129337,127996],[129337,127997],[129337,127998],[129337,127999],[129337,8205,9792,65039],[129337,127995,8205,9792,65039],[129337,127996,8205,9792,65039],[129337,127997,8205,9792,65039],[129337,127998,8205,9792,65039],[129337,127999,8205,9792,65039],[129337,8205,9794,65039],[129337,127995,8205,9794,65039],[129337,127996,8205,9794,65039],[129337,127997,8205,9794,65039],[129337,127998,8205,9794,65039],[129337,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":juggling:"],"animated":false,"directional":false,"group":"People","emoji":"🤹"},{"base":[127948,65039],"alternates":[[127948,65039],[127948,127995],[127948,127996],[127948,127997],[127948,127998],[127948,127999],[127948,65039,8205,9792,65039],[127948,127995,8205,9792,65039],[127948,127996,8205,9792,65039],[127948,127997,8205,9792,65039],[127948,127998,8205,9792,65039],[127948,127999,8205,9792,65039],[127948,65039,8205,9794,65039],[127948,127995,8205,9794,65039],[127948,127996,8205,9794,65039],[127948,127997,8205,9794,65039],[127948,127998,8205,9794,65039],[127948,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":golfing:"],"animated":false,"directional":false,"group":"People","emoji":"🏌️"},{"base":[127943],"alternates":[[127943],[127943,127995],[127943,127996],[127943,127997],[127943,127998],[127943,127999]],"emoticons":[],"shortcodes":[":horse-racing:"],"animated":false,"directional":false,"group":"People","emoji":"🏇"},{"base":[129338],"alternates":[],"emoticons":[],"shortcodes":[":fencing:"],"animated":false,"directional":false,"group":"People","emoji":"🤺"},{"base":[9975,65039],"alternates":[],"emoticons":[],"shortcodes":[":skier:"],"animated":false,"directional":false,"group":"People","emoji":"⛷️"},{"base":[127938],"alternates":[[127938],[127938,127995],[127938,127996],[127938,127997],[127938,127998],[127938,127999]],"emoticons":[],"shortcodes":[":snowboarder:"],"animated":false,"directional":false,"group":"People","emoji":"🏂"},{"base":[129666],"alternates":[],"emoticons":[],"shortcodes":[":parachute:"],"animated":false,"directional":false,"group":"People","emoji":"🪂"},{"base":[127940],"alternates":[[127940],[127940,127995],[127940,127996],[127940,127997],[127940,127998],[127940,127999],[127940,8205,9792,65039],[127940,127995,8205,9792,65039],[127940,127996,8205,9792,65039],[127940,127997,8205,9792,65039],[127940,127998,8205,9792,65039],[127940,127999,8205,9792,65039],[127940,8205,9794,65039],[127940,127995,8205,9794,65039],[127940,127996,8205,9794,65039],[127940,127997,8205,9794,65039],[127940,127998,8205,9794,65039],[127940,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":surfing:"],"animated":false,"directional":false,"group":"People","emoji":"🏄"},{"base":[128675],"alternates":[[128675],[128675,127995],[128675,127996],[128675,127997],[128675,127998],[128675,127999],[128675,8205,9792,65039],[128675,127995,8205,9792,65039],[128675,127996,8205,9792,65039],[128675,127997,8205,9792,65039],[128675,127998,8205,9792,65039],[128675,127999,8205,9792,65039],[128675,8205,9794,65039],[128675,127995,8205,9794,65039],[128675,127996,8205,9794,65039],[128675,127997,8205,9794,65039],[128675,127998,8205,9794,65039],[128675,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":rowing-boat:"],"animated":false,"directional":false,"group":"People","emoji":"🚣"},{"base":[127946],"alternates":[[127946],[127946,127995],[127946,127996],[127946,127997],[127946,127998],[127946,127999],[127946,8205,9792,65039],[127946,127995,8205,9792,65039],[127946,127996,8205,9792,65039],[127946,127997,8205,9792,65039],[127946,127998,8205,9792,65039],[127946,127999,8205,9792,65039],[127946,8205,9794,65039],[127946,127995,8205,9794,65039],[127946,127996,8205,9794,65039],[127946,127997,8205,9794,65039],[127946,127998,8205,9794,65039],[127946,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":swimming:"],"animated":false,"directional":false,"group":"People","emoji":"🏊"},{"base":[129341],"alternates":[[129341],[129341,127995],[129341,127996],[129341,127997],[129341,127998],[129341,127999],[129341,8205,9792,65039],[129341,127995,8205,9792,65039],[129341,127996,8205,9792,65039],[129341,127997,8205,9792,65039],[129341,127998,8205,9792,65039],[129341,127999,8205,9792,65039],[129341,8205,9794,65039],[129341,127995,8205,9794,65039],[129341,127996,8205,9794,65039],[129341,127997,8205,9794,65039],[129341,127998,8205,9794,65039],[129341,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":water-polo:"],"animated":false,"directional":false,"group":"People","emoji":"🤽"},{"base":[129500],"alternates":[[129500],[129500,127995],[129500,127996],[129500,127997],[129500,127998],[129500,127999],[129500,8205,9792,65039],[129500,127995,8205,9792,65039],[129500,127996,8205,9792,65039],[129500,127997,8205,9792,65039],[129500,127998,8205,9792,65039],[129500,127999,8205,9792,65039],[129500,8205,9794,65039],[129500,127995,8205,9794,65039],[129500,127996,8205,9794,65039],[129500,127997,8205,9794,65039],[129500,127998,8205,9794,65039],[129500,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":merperson:"],"animated":false,"directional":false,"group":"People","emoji":"🧜"},{"base":[129498],"alternates":[[129498],[129498,127995],[129498,127996],[129498,127997],[129498,127998],[129498,127999],[129498,8205,9792,65039],[129498,127995,8205,9792,65039],[129498,127996,8205,9792,65039],[129498,127997,8205,9792,65039],[129498,127998,8205,9792,65039],[129498,127999,8205,9792,65039],[129498,8205,9794,65039],[129498,127995,8205,9794,65039],[129498,127996,8205,9794,65039],[129498,127997,8205,9794,65039],[129498,127998,8205,9794,65039],[129498,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":fairy:"],"animated":false,"directional":false,"group":"People","emoji":"🧚"},{"base":[129502],"alternates":[[129502],[129502,8205,9792,65039],[129502,8205,9794,65039]],"emoticons":[],"shortcodes":[":genie:"],"animated":false,"directional":false,"group":"People","emoji":"🧞"},{"base":[129501],"alternates":[[129501],[129501,127995],[129501,127996],[129501,127997],[129501,127998],[129501,127999],[129501,8205,9792,65039],[129501,127995,8205,9792,65039],[129501,127996,8205,9792,65039],[129501,127997,8205,9792,65039],[129501,127998,8205,9792,65039],[129501,127999,8205,9792,65039],[129501,8205,9794,65039],[129501,127995,8205,9794,65039],[129501,127996,8205,9794,65039],[129501,127997,8205,9794,65039],[129501,127998,8205,9794,65039],[129501,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":elf:"],"animated":false,"directional":false,"group":"People","emoji":"🧝"},{"base":[129497],"alternates":[[129497],[129497,127995],[129497,127996],[129497,127997],[129497,127998],[129497,127999],[129497,8205,9792,65039],[129497,127995,8205,9792,65039],[129497,127996,8205,9792,65039],[129497,127997,8205,9792,65039],[129497,127998,8205,9792,65039],[129497,127999,8205,9792,65039],[129497,8205,9794,65039],[129497,127995,8205,9794,65039],[129497,127996,8205,9794,65039],[129497,127997,8205,9794,65039],[129497,127998,8205,9794,65039],[129497,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":mage:"],"animated":false,"directional":false,"group":"People","emoji":"🧙"},{"base":[129499],"alternates":[[129499],[129499,127995],[129499,127996],[129499,127997],[129499,127998],[129499,127999],[129499,8205,9792,65039],[129499,127995,8205,9792,65039],[129499,127996,8205,9792,65039],[129499,127997,8205,9792,65039],[129499,127998,8205,9792,65039],[129499,127999,8205,9792,65039],[129499,8205,9794,65039],[129499,127995,8205,9794,65039],[129499,127996,8205,9794,65039],[129499,127997,8205,9794,65039],[129499,127998,8205,9794,65039],[129499,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":vampire:"],"animated":false,"directional":false,"group":"People","emoji":"🧛"},{"base":[129503],"alternates":[[129503],[129503,8205,9792,65039],[129503,8205,9794,65039]],"emoticons":[],"shortcodes":[":zombie:"],"animated":false,"directional":false,"group":"People","emoji":"🧟"},{"base":[129484],"alternates":[],"emoticons":[],"shortcodes":[":troll:"],"animated":false,"directional":false,"group":"People","emoji":"🧌"},{"base":[129464],"alternates":[[129464],[129464,127995],[129464,127996],[129464,127997],[129464,127998],[129464,127999],[129464,8205,9792,65039],[129464,127995,8205,9792,65039],[129464,127996,8205,9792,65039],[129464,127997,8205,9792,65039],[129464,127998,8205,9792,65039],[129464,127999,8205,9792,65039],[129464,8205,9794,65039],[129464,127995,8205,9794,65039],[129464,127996,8205,9794,65039],[129464,127997,8205,9794,65039],[129464,127998,8205,9794,65039],[129464,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":superhero:"],"animated":false,"directional":false,"group":"People","emoji":"🦸"},{"base":[129465],"alternates":[[129465],[129465,127995],[129465,127996],[129465,127997],[129465,127998],[129465,127999],[129465,8205,9792,65039],[129465,127995,8205,9792,65039],[129465,127996,8205,9792,65039],[129465,127997,8205,9792,65039],[129465,127998,8205,9792,65039],[129465,127999,8205,9792,65039],[129465,8205,9794,65039],[129465,127995,8205,9794,65039],[129465,127996,8205,9794,65039],[129465,127997,8205,9794,65039],[129465,127998,8205,9794,65039],[129465,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":supervillain:"],"animated":false,"directional":false,"group":"People","emoji":"🦹"},{"base":[129399],"alternates":[[129399],[129399,127995],[129399,127996],[129399,127997],[129399,127998],[129399,127999]],"emoticons":[],"shortcodes":[":ninja:"],"animated":false,"directional":false,"group":"People","emoji":"🥷"},{"base":[129489,8205,127876],"alternates":[[129489,8205,127876],[129489,127995,8205,127876],[129489,127996,8205,127876],[129489,127997,8205,127876],[129489,127998,8205,127876],[129489,127999,8205,127876],[129334],[129334,127995],[129334,127996],[129334,127997],[129334,127998],[129334,127999],[127877],[127877,127995],[127877,127996],[127877,127997],[127877,127998],[127877,127999]],"emoticons":[],"shortcodes":[":mx-claus:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🎄"},{"base":[128124],"alternates":[[128124],[128124,127995],[128124,127996],[128124,127997],[128124,127998],[128124,127999]],"emoticons":[],"shortcodes":[":angel:"],"animated":false,"directional":false,"group":"People","emoji":"👼"},{"base":[128130],"alternates":[[128130],[128130,127995],[128130,127996],[128130,127997],[128130,127998],[128130,127999],[128130,8205,9792,65039],[128130,127995,8205,9792,65039],[128130,127996,8205,9792,65039],[128130,127997,8205,9792,65039],[128130,127998,8205,9792,65039],[128130,127999,8205,9792,65039],[128130,8205,9794,65039],[128130,127995,8205,9794,65039],[128130,127996,8205,9794,65039],[128130,127997,8205,9794,65039],[128130,127998,8205,9794,65039],[128130,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":guard:"],"animated":false,"directional":false,"group":"People","emoji":"💂"},{"base":[129733],"alternates":[[129733],[129733,127995],[129733,127996],[129733,127997],[129733,127998],[129733,127999],[128120],[128120,127995],[128120,127996],[128120,127997],[128120,127998],[128120,127999],[129332],[129332,127995],[129332,127996],[129332,127997],[129332,127998],[129332,127999]],"emoticons":[],"shortcodes":[":royalty:"],"animated":false,"directional":false,"group":"People","emoji":"🫅"},{"base":[129333],"alternates":[[129333],[129333,127995],[129333,127996],[129333,127997],[129333,127998],[129333,127999],[129333,8205,9792,65039],[129333,127995,8205,9792,65039],[129333,127996,8205,9792,65039],[129333,127997,8205,9792,65039],[129333,127998,8205,9792,65039],[129333,127999,8205,9792,65039],[129333,8205,9794,65039],[129333,127995,8205,9794,65039],[129333,127996,8205,9794,65039],[129333,127997,8205,9794,65039],[129333,127998,8205,9794,65039],[129333,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":tuxedo:"],"animated":false,"directional":false,"group":"People","emoji":"🤵"},{"base":[128112],"alternates":[[128112],[128112,127995],[128112,127996],[128112,127997],[128112,127998],[128112,127999],[128112,8205,9792,65039],[128112,127995,8205,9792,65039],[128112,127996,8205,9792,65039],[128112,127997,8205,9792,65039],[128112,127998,8205,9792,65039],[128112,127999,8205,9792,65039],[128112,8205,9794,65039],[128112,127995,8205,9794,65039],[128112,127996,8205,9794,65039],[128112,127997,8205,9794,65039],[128112,127998,8205,9794,65039],[128112,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":veil:"],"animated":false,"directional":false,"group":"People","emoji":"👰"},{"base":[129489,8205,128640],"alternates":[[129489,8205,128640],[129489,127995,8205,128640],[129489,127996,8205,128640],[129489,127997,8205,128640],[129489,127998,8205,128640],[129489,127999,8205,128640],[128105,8205,128640],[128105,127995,8205,128640],[128105,127996,8205,128640],[128105,127997,8205,128640],[128105,127998,8205,128640],[128105,127999,8205,128640],[128104,8205,128640],[128104,127995,8205,128640],[128104,127996,8205,128640],[128104,127997,8205,128640],[128104,127998,8205,128640],[128104,127999,8205,128640]],"emoticons":[],"shortcodes":[":astronaut:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🚀"},{"base":[128119],"alternates":[[128119],[128119,127995],[128119,127996],[128119,127997],[128119,127998],[128119,127999],[128119,8205,9792,65039],[128119,127995,8205,9792,65039],[128119,127996,8205,9792,65039],[128119,127997,8205,9792,65039],[128119,127998,8205,9792,65039],[128119,127999,8205,9792,65039],[128119,8205,9794,65039],[128119,127995,8205,9794,65039],[128119,127996,8205,9794,65039],[128119,127997,8205,9794,65039],[128119,127998,8205,9794,65039],[128119,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":construction-worker:"],"animated":false,"directional":false,"group":"People","emoji":"👷"},{"base":[128110],"alternates":[[128110],[128110,127995],[128110,127996],[128110,127997],[128110,127998],[128110,127999],[128110,8205,9792,65039],[128110,127995,8205,9792,65039],[128110,127996,8205,9792,65039],[128110,127997,8205,9792,65039],[128110,127998,8205,9792,65039],[128110,127999,8205,9792,65039],[128110,8205,9794,65039],[128110,127995,8205,9794,65039],[128110,127996,8205,9794,65039],[128110,127997,8205,9794,65039],[128110,127998,8205,9794,65039],[128110,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":police:"],"animated":false,"directional":false,"group":"People","emoji":"👮"},{"base":[128373,65039],"alternates":[[128373,65039],[128373,127995],[128373,127996],[128373,127997],[128373,127998],[128373,127999],[128373,65039,8205,9792,65039],[128373,127995,8205,9792,65039],[128373,127996,8205,9792,65039],[128373,127997,8205,9792,65039],[128373,127998,8205,9792,65039],[128373,127999,8205,9792,65039],[128373,65039,8205,9794,65039],[128373,127995,8205,9794,65039],[128373,127996,8205,9794,65039],[128373,127997,8205,9794,65039],[128373,127998,8205,9794,65039],[128373,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":detective:"],"animated":false,"directional":false,"group":"People","emoji":"🕵️"},{"base":[129489,8205,9992,65039],"alternates":[[129489,8205,9992,65039],[129489,127995,8205,9992,65039],[129489,127996,8205,9992,65039],[129489,127997,8205,9992,65039],[129489,127998,8205,9992,65039],[129489,127999,8205,9992,65039],[128105,8205,9992,65039],[128105,127995,8205,9992,65039],[128105,127996,8205,9992,65039],[128105,127997,8205,9992,65039],[128105,127998,8205,9992,65039],[128105,127999,8205,9992,65039],[128104,8205,9992,65039],[128104,127995,8205,9992,65039],[128104,127996,8205,9992,65039],[128104,127997,8205,9992,65039],[128104,127998,8205,9992,65039],[128104,127999,8205,9992,65039]],"emoticons":[],"shortcodes":[":pilot:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍✈️"},{"base":[129489,8205,128300],"alternates":[[129489,8205,128300],[129489,127995,8205,128300],[129489,127996,8205,128300],[129489,127997,8205,128300],[129489,127998,8205,128300],[129489,127999,8205,128300],[128105,8205,128300],[128105,127995,8205,128300],[128105,127996,8205,128300],[128105,127997,8205,128300],[128105,127998,8205,128300],[128105,127999,8205,128300],[128104,8205,128300],[128104,127995,8205,128300],[128104,127996,8205,128300],[128104,127997,8205,128300],[128104,127998,8205,128300],[128104,127999,8205,128300]],"emoticons":[],"shortcodes":[":scientist:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🔬"},{"base":[129489,8205,9877,65039],"alternates":[[129489,8205,9877,65039],[129489,127995,8205,9877,65039],[129489,127996,8205,9877,65039],[129489,127997,8205,9877,65039],[129489,127998,8205,9877,65039],[129489,127999,8205,9877,65039],[128105,8205,9877,65039],[128105,127995,8205,9877,65039],[128105,127996,8205,9877,65039],[128105,127997,8205,9877,65039],[128105,127998,8205,9877,65039],[128105,127999,8205,9877,65039],[128104,8205,9877,65039],[128104,127995,8205,9877,65039],[128104,127996,8205,9877,65039],[128104,127997,8205,9877,65039],[128104,127998,8205,9877,65039],[128104,127999,8205,9877,65039]],"emoticons":[],"shortcodes":[":health-worker:",":doctor:",":nurse:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍⚕️"},{"base":[129489,8205,128295],"alternates":[[129489,8205,128295],[129489,127995,8205,128295],[129489,127996,8205,128295],[129489,127997,8205,128295],[129489,127998,8205,128295],[129489,127999,8205,128295],[128105,8205,128295],[128105,127995,8205,128295],[128105,127996,8205,128295],[128105,127997,8205,128295],[128105,127998,8205,128295],[128105,127999,8205,128295],[128104,8205,128295],[128104,127995,8205,128295],[128104,127996,8205,128295],[128104,127997,8205,128295],[128104,127998,8205,128295],[128104,127999,8205,128295]],"emoticons":[],"shortcodes":[":mechanic:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🔧"},{"base":[129489,8205,127981],"alternates":[[129489,8205,127981],[129489,127995,8205,127981],[129489,127996,8205,127981],[129489,127997,8205,127981],[129489,127998,8205,127981],[129489,127999,8205,127981],[128105,8205,127981],[128105,127995,8205,127981],[128105,127996,8205,127981],[128105,127997,8205,127981],[128105,127998,8205,127981],[128105,127999,8205,127981],[128104,8205,127981],[128104,127995,8205,127981],[128104,127996,8205,127981],[128104,127997,8205,127981],[128104,127998,8205,127981],[128104,127999,8205,127981]],"emoticons":[],"shortcodes":[":factory-worker:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🏭"},{"base":[129489,8205,128658],"alternates":[[129489,8205,128658],[129489,127995,8205,128658],[129489,127996,8205,128658],[129489,127997,8205,128658],[129489,127998,8205,128658],[129489,127999,8205,128658],[128105,8205,128658],[128105,127995,8205,128658],[128105,127996,8205,128658],[128105,127997,8205,128658],[128105,127998,8205,128658],[128105,127999,8205,128658],[128104,8205,128658],[128104,127995,8205,128658],[128104,127996,8205,128658],[128104,127997,8205,128658],[128104,127998,8205,128658],[128104,127999,8205,128658]],"emoticons":[],"shortcodes":[":firefighter:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🚒"},{"base":[129489,8205,127806],"alternates":[[129489,8205,127806],[129489,127995,8205,127806],[129489,127996,8205,127806],[129489,127997,8205,127806],[129489,127998,8205,127806],[129489,127999,8205,127806],[128105,8205,127806],[128105,127995,8205,127806],[128105,127996,8205,127806],[128105,127997,8205,127806],[128105,127998,8205,127806],[128105,127999,8205,127806],[128104,8205,127806],[128104,127995,8205,127806],[128104,127996,8205,127806],[128104,127997,8205,127806],[128104,127998,8205,127806],[128104,127999,8205,127806]],"emoticons":[],"shortcodes":[":farmer:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🌾"},{"base":[129489,8205,127979],"alternates":[[129489,8205,127979],[129489,127995,8205,127979],[129489,127996,8205,127979],[129489,127997,8205,127979],[129489,127998,8205,127979],[129489,127999,8205,127979],[128105,8205,127979],[128105,127995,8205,127979],[128105,127996,8205,127979],[128105,127997,8205,127979],[128105,127998,8205,127979],[128105,127999,8205,127979],[128104,8205,127979],[128104,127995,8205,127979],[128104,127996,8205,127979],[128104,127997,8205,127979],[128104,127998,8205,127979],[128104,127999,8205,127979]],"emoticons":[],"shortcodes":[":teacher:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🏫"},{"base":[129489,8205,127891],"alternates":[[129489,8205,127891],[129489,127995,8205,127891],[129489,127996,8205,127891],[129489,127997,8205,127891],[129489,127998,8205,127891],[129489,127999,8205,127891],[128105,8205,127891],[128105,127995,8205,127891],[128105,127996,8205,127891],[128105,127997,8205,127891],[128105,127998,8205,127891],[128105,127999,8205,127891],[128104,8205,127891],[128104,127995,8205,127891],[128104,127996,8205,127891],[128104,127997,8205,127891],[128104,127998,8205,127891],[128104,127999,8205,127891]],"emoticons":[],"shortcodes":[":student:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🎓"},{"base":[129489,8205,128188],"alternates":[[129489,8205,128188],[129489,127995,8205,128188],[129489,127996,8205,128188],[129489,127997,8205,128188],[129489,127998,8205,128188],[129489,127999,8205,128188],[128105,8205,128188],[128105,127995,8205,128188],[128105,127996,8205,128188],[128105,127997,8205,128188],[128105,127998,8205,128188],[128105,127999,8205,128188],[128104,8205,128188],[128104,127995,8205,128188],[128104,127996,8205,128188],[128104,127997,8205,128188],[128104,127998,8205,128188],[128104,127999,8205,128188]],"emoticons":[],"shortcodes":[":office-worker:",":business-person:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍💼"},{"base":[129489,8205,9878,65039],"alternates":[[129489,8205,9878,65039],[129489,127995,8205,9878,65039],[129489,127996,8205,9878,65039],[129489,127997,8205,9878,65039],[129489,127998,8205,9878,65039],[129489,127999,8205,9878,65039],[128105,8205,9878,65039],[128105,127995,8205,9878,65039],[128105,127996,8205,9878,65039],[128105,127997,8205,9878,65039],[128105,127998,8205,9878,65039],[128105,127999,8205,9878,65039],[128104,8205,9878,65039],[128104,127995,8205,9878,65039],[128104,127996,8205,9878,65039],[128104,127997,8205,9878,65039],[128104,127998,8205,9878,65039],[128104,127999,8205,9878,65039]],"emoticons":[],"shortcodes":[":judge:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍⚖️"},{"base":[129489,8205,128187],"alternates":[[129489,8205,128187],[129489,127995,8205,128187],[129489,127996,8205,128187],[129489,127997,8205,128187],[129489,127998,8205,128187],[129489,127999,8205,128187],[128105,8205,128187],[128105,127995,8205,128187],[128105,127996,8205,128187],[128105,127997,8205,128187],[128105,127998,8205,128187],[128105,127999,8205,128187],[128104,8205,128187],[128104,127995,8205,128187],[128104,127996,8205,128187],[128104,127997,8205,128187],[128104,127998,8205,128187],[128104,127999,8205,128187]],"emoticons":[],"shortcodes":[":technologist:",":person-at-computer:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍💻"},{"base":[129489,8205,127908],"alternates":[[129489,8205,127908],[129489,127995,8205,127908],[129489,127996,8205,127908],[129489,127997,8205,127908],[129489,127998,8205,127908],[129489,127999,8205,127908],[128105,8205,127908],[128105,127995,8205,127908],[128105,127996,8205,127908],[128105,127997,8205,127908],[128105,127998,8205,127908],[128105,127999,8205,127908],[128104,8205,127908],[128104,127995,8205,127908],[128104,127996,8205,127908],[128104,127997,8205,127908],[128104,127998,8205,127908],[128104,127999,8205,127908]],"emoticons":[],"shortcodes":[":singer:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🎤"},{"base":[129489,8205,127912],"alternates":[[129489,8205,127912],[129489,127995,8205,127912],[129489,127996,8205,127912],[129489,127997,8205,127912],[129489,127998,8205,127912],[129489,127999,8205,127912],[128105,8205,127912],[128105,127995,8205,127912],[128105,127996,8205,127912],[128105,127997,8205,127912],[128105,127998,8205,127912],[128105,127999,8205,127912],[128104,8205,127912],[128104,127995,8205,127912],[128104,127996,8205,127912],[128104,127997,8205,127912],[128104,127998,8205,127912],[128104,127999,8205,127912]],"emoticons":[],"shortcodes":[":artist:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🎨"},{"base":[129489,8205,127859],"alternates":[[129489,8205,127859],[129489,127995,8205,127859],[129489,127996,8205,127859],[129489,127997,8205,127859],[129489,127998,8205,127859],[129489,127999,8205,127859],[128105,8205,127859],[128105,127995,8205,127859],[128105,127996,8205,127859],[128105,127997,8205,127859],[128105,127998,8205,127859],[128105,127999,8205,127859],[128104,8205,127859],[128104,127995,8205,127859],[128104,127996,8205,127859],[128104,127997,8205,127859],[128104,127998,8205,127859],[128104,127999,8205,127859]],"emoticons":[],"shortcodes":[":cook:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🍳"},{"base":[128115],"alternates":[[128115],[128115,127995],[128115,127996],[128115,127997],[128115,127998],[128115,127999],[128115,8205,9792,65039],[128115,127995,8205,9792,65039],[128115,127996,8205,9792,65039],[128115,127997,8205,9792,65039],[128115,127998,8205,9792,65039],[128115,127999,8205,9792,65039],[128115,8205,9794,65039],[128115,127995,8205,9794,65039],[128115,127996,8205,9794,65039],[128115,127997,8205,9794,65039],[128115,127998,8205,9794,65039],[128115,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":turban:"],"animated":false,"directional":false,"group":"People","emoji":"👳"},{"base":[129493],"alternates":[[129493],[129493,127995],[129493,127996],[129493,127997],[129493,127998],[129493,127999]],"emoticons":[],"shortcodes":[":headscarf:"],"animated":false,"directional":false,"group":"People","emoji":"🧕"},{"base":[128114],"alternates":[[128114],[128114,127995],[128114,127996],[128114,127997],[128114,127998],[128114,127999]],"emoticons":[],"shortcodes":[":gua-pi-mao:"],"animated":false,"directional":false,"group":"People","emoji":"👲"},{"base":[128118],"alternates":[[128118],[128118,127995],[128118,127996],[128118,127997],[128118,127998],[128118,127999]],"emoticons":[],"shortcodes":[":baby:"],"animated":false,"directional":false,"group":"People","emoji":"👶"},{"base":[129490],"alternates":[[129490],[129490,127995],[129490,127996],[129490,127997],[129490,127998],[129490,127999],[128103],[128103,127995],[128103,127996],[128103,127997],[128103,127998],[128103,127999],[128102],[128102,127995],[128102,127996],[128102,127997],[128102,127998],[128102,127999]],"emoticons":[],"shortcodes":[":child:"],"animated":false,"directional":false,"group":"People","emoji":"🧒"},{"base":[129489],"alternates":[[129489],[129489,127995],[129489,127996],[129489,127997],[129489,127998],[129489,127999],[128105],[128105,127995],[128105,127996],[128105,127997],[128105,127998],[128105,127999],[128104],[128104,127995],[128104,127996],[128104,127997],[128104,127998],[128104,127999]],"emoticons":[],"shortcodes":[":adult:"],"animated":false,"directional":false,"group":"People","emoji":"🧑"},{"base":[129491],"alternates":[[129491],[129491,127995],[129491,127996],[129491,127997],[129491,127998],[129491,127999],[128117],[128117,127995],[128117,127996],[128117,127997],[128117,127998],[128117,127999],[128116],[128116,127995],[128116,127996],[128116,127997],[128116,127998],[128116,127999]],"emoticons":[],"shortcodes":[":elder:"],"animated":false,"directional":false,"group":"People","emoji":"🧓"},{"base":[129489,8205,129459],"alternates":[[129489,8205,129459],[129489,127995,8205,129459],[129489,127996,8205,129459],[129489,127997,8205,129459],[129489,127998,8205,129459],[129489,127999,8205,129459],[128105,8205,129459],[128105,127995,8205,129459],[128105,127996,8205,129459],[128105,127997,8205,129459],[128105,127998,8205,129459],[128105,127999,8205,129459],[128104,8205,129459],[128104,127995,8205,129459],[128104,127996,8205,129459],[128104,127997,8205,129459],[128104,127998,8205,129459],[128104,127999,8205,129459]],"emoticons":[],"shortcodes":[":white-hair:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🦳"},{"base":[129489,8205,129456],"alternates":[[129489,8205,129456],[129489,127995,8205,129456],[129489,127996,8205,129456],[129489,127997,8205,129456],[129489,127998,8205,129456],[129489,127999,8205,129456],[128105,8205,129456],[128105,127995,8205,129456],[128105,127996,8205,129456],[128105,127997,8205,129456],[128105,127998,8205,129456],[128105,127999,8205,129456],[128104,8205,129456],[128104,127995,8205,129456],[128104,127996,8205,129456],[128104,127997,8205,129456],[128104,127998,8205,129456],[128104,127999,8205,129456]],"emoticons":[],"shortcodes":[":red-hair:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🦰"},{"base":[128113],"alternates":[[128113],[128113,127995],[128113,127996],[128113,127997],[128113,127998],[128113,127999],[128113,8205,9792,65039],[128113,127995,8205,9792,65039],[128113,127996,8205,9792,65039],[128113,127997,8205,9792,65039],[128113,127998,8205,9792,65039],[128113,127999,8205,9792,65039],[128113,8205,9794,65039],[128113,127995,8205,9794,65039],[128113,127996,8205,9794,65039],[128113,127997,8205,9794,65039],[128113,127998,8205,9794,65039],[128113,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":blond-hair:"],"animated":false,"directional":false,"group":"People","emoji":"👱"},{"base":[129489,8205,129457],"alternates":[[129489,8205,129457],[129489,127995,8205,129457],[129489,127996,8205,129457],[129489,127997,8205,129457],[129489,127998,8205,129457],[129489,127999,8205,129457],[128105,8205,129457],[128105,127995,8205,129457],[128105,127996,8205,129457],[128105,127997,8205,129457],[128105,127998,8205,129457],[128105,127999,8205,129457],[128104,8205,129457],[128104,127995,8205,129457],[128104,127996,8205,129457],[128104,127997,8205,129457],[128104,127998,8205,129457],[128104,127999,8205,129457]],"emoticons":[],"shortcodes":[":curly-hair:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🦱"},{"base":[129489,8205,129458],"alternates":[[129489,8205,129458],[129489,127995,8205,129458],[129489,127996,8205,129458],[129489,127997,8205,129458],[129489,127998,8205,129458],[129489,127999,8205,129458],[128105,8205,129458],[128105,127995,8205,129458],[128105,127996,8205,129458],[128105,127997,8205,129458],[128105,127998,8205,129458],[128105,127999,8205,129458],[128104,8205,129458],[128104,127995,8205,129458],[128104,127996,8205,129458],[128104,127997,8205,129458],[128104,127998,8205,129458],[128104,127999,8205,129458]],"emoticons":[],"shortcodes":[":bald:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🦲"},{"base":[129492],"alternates":[[129492],[129492,127995],[129492,127996],[129492,127997],[129492,127998],[129492,127999],[129492,8205,9792,65039],[129492,127995,8205,9792,65039],[129492,127996,8205,9792,65039],[129492,127997,8205,9792,65039],[129492,127998,8205,9792,65039],[129492,127999,8205,9792,65039],[129492,8205,9794,65039],[129492,127995,8205,9794,65039],[129492,127996,8205,9794,65039],[129492,127997,8205,9794,65039],[129492,127998,8205,9794,65039],[129492,127999,8205,9794,65039]],"emoticons":[],"shortcodes":[":beard:"],"animated":false,"directional":false,"group":"People","emoji":"🧔"},{"base":[128372,65039],"alternates":[[128372,65039],[128372,127995],[128372,127996],[128372,127997],[128372,127998],[128372,127999]],"emoticons":[],"shortcodes":[":levitating-suit:"],"animated":false,"directional":false,"group":"People","emoji":"🕴️"},{"base":[128131],"alternates":[[128131],[128131,127995],[128131,127996],[128131,127997],[128131,127998],[128131,127999]],"emoticons":["♪┏(･o･)┛♪"],"shortcodes":[":dancer-woman:"],"animated":true,"directional":false,"group":"People","emoji":"💃"},{"base":[128378],"alternates":[[128378],[128378,127995],[128378,127996],[128378,127997],[128378,127998],[128378,127999]],"emoticons":["♪┗(･o･)┓♪"],"shortcodes":[":dancer-man:"],"animated":false,"directional":false,"group":"People","emoji":"🕺"},{"base":[128111],"alternates":[[128111],[128111,8205,9794,65039],[128111,8205,9792,65039]],"emoticons":[],"shortcodes":[":bunny-ears:"],"animated":false,"directional":false,"group":"People","emoji":"👯"},{"base":[129489,8205,129309,8205,129489],"alternates":[[129489,8205,129309,8205,129489],[129489,127995,8205,129309,8205,129489,127995],[129489,127995,8205,129309,8205,129489,127996],[129489,127995,8205,129309,8205,129489,127997],[129489,127995,8205,129309,8205,129489,127998],[129489,127995,8205,129309,8205,129489,127999],[129489,127996,8205,129309,8205,129489,127995],[129489,127996,8205,129309,8205,129489,127996],[129489,127996,8205,129309,8205,129489,127997],[129489,127996,8205,129309,8205,129489,127998],[129489,127996,8205,129309,8205,129489,127999],[129489,127997,8205,129309,8205,129489,127995],[129489,127997,8205,129309,8205,129489,127996],[129489,127997,8205,129309,8205,129489,127997],[129489,127997,8205,129309,8205,129489,127998],[129489,127997,8205,129309,8205,129489,127999],[129489,127998,8205,129309,8205,129489,127995],[129489,127998,8205,129309,8205,129489,127996],[129489,127998,8205,129309,8205,129489,127997],[129489,127998,8205,129309,8205,129489,127998],[129489,127998,8205,129309,8205,129489,127999],[129489,127999,8205,129309,8205,129489,127995],[129489,127999,8205,129309,8205,129489,127996],[129489,127999,8205,129309,8205,129489,127997],[129489,127999,8205,129309,8205,129489,127998],[129489,127999,8205,129309,8205,129489,127999]],"emoticons":[],"shortcodes":[":holding-hands:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🤝‍🧑"},{"base":[128109],"alternates":[[128109],[128109,127995],[128105,127995,8205,129309,8205,128105,127996],[128105,127995,8205,129309,8205,128105,127997],[128105,127995,8205,129309,8205,128105,127998],[128105,127995,8205,129309,8205,128105,127999],[128105,127996,8205,129309,8205,128105,127995],[128109,127996],[128105,127996,8205,129309,8205,128105,127997],[128105,127996,8205,129309,8205,128105,127998],[128105,127996,8205,129309,8205,128105,127999],[128105,127997,8205,129309,8205,128105,127995],[128105,127997,8205,129309,8205,128105,127996],[128109,127997],[128105,127997,8205,129309,8205,128105,127998],[128105,127997,8205,129309,8205,128105,127999],[128105,127998,8205,129309,8205,128105,127995],[128105,127998,8205,129309,8205,128105,127996],[128105,127998,8205,129309,8205,128105,127997],[128109,127998],[128105,127998,8205,129309,8205,128105,127999],[128105,127999,8205,129309,8205,128105,127995],[128105,127999,8205,129309,8205,128105,127996],[128105,127999,8205,129309,8205,128105,127997],[128105,127999,8205,129309,8205,128105,127998],[128109,127999]],"emoticons":[],"shortcodes":[":holding-hands-women:"],"animated":false,"directional":false,"group":"People","emoji":"👭"},{"base":[128108],"alternates":[[128108],[128108,127995],[128104,127995,8205,129309,8205,128104,127996],[128104,127995,8205,129309,8205,128104,127997],[128104,127995,8205,129309,8205,128104,127998],[128104,127995,8205,129309,8205,128104,127999],[128104,127996,8205,129309,8205,128104,127995],[128108,127996],[128104,127996,8205,129309,8205,128104,127997],[128104,127996,8205,129309,8205,128104,127998],[128104,127996,8205,129309,8205,128104,127999],[128104,127997,8205,129309,8205,128104,127995],[128104,127997,8205,129309,8205,128104,127996],[128108,127997],[128104,127997,8205,129309,8205,128104,127998],[128104,127997,8205,129309,8205,128104,127999],[128104,127998,8205,129309,8205,128104,127995],[128104,127998,8205,129309,8205,128104,127996],[128104,127998,8205,129309,8205,128104,127997],[128108,127998],[128104,127998,8205,129309,8205,128104,127999],[128104,127999,8205,129309,8205,128104,127995],[128104,127999,8205,129309,8205,128104,127996],[128104,127999,8205,129309,8205,128104,127997],[128104,127999,8205,129309,8205,128104,127998],[128108,127999]],"emoticons":[],"shortcodes":[":holding-hands-men:"],"animated":false,"directional":false,"group":"People","emoji":"👬"},{"base":[128107],"alternates":[[128107],[128107,127995],[128105,127995,8205,129309,8205,128104,127996],[128105,127995,8205,129309,8205,128104,127997],[128105,127995,8205,129309,8205,128104,127998],[128105,127995,8205,129309,8205,128104,127999],[128105,127996,8205,129309,8205,128104,127995],[128107,127996],[128105,127996,8205,129309,8205,128104,127997],[128105,127996,8205,129309,8205,128104,127998],[128105,127996,8205,129309,8205,128104,127999],[128105,127997,8205,129309,8205,128104,127995],[128105,127997,8205,129309,8205,128104,127996],[128107,127997],[128105,127997,8205,129309,8205,128104,127998],[128105,127997,8205,129309,8205,128104,127999],[128105,127998,8205,129309,8205,128104,127995],[128105,127998,8205,129309,8205,128104,127996],[128105,127998,8205,129309,8205,128104,127997],[128107,127998],[128105,127998,8205,129309,8205,128104,127999],[128105,127999,8205,129309,8205,128104,127995],[128105,127999,8205,129309,8205,128104,127996],[128105,127999,8205,129309,8205,128104,127997],[128105,127999,8205,129309,8205,128104,127998],[128107,127999]],"emoticons":[],"shortcodes":[":holding-hands-woman-and-man:"],"animated":false,"directional":false,"group":"People","emoji":"👫"},{"base":[128143],"alternates":[[128143],[128143,127995],[129489,127995,8205,10084,65039,8205,128139,8205,129489,127996],[129489,127995,8205,10084,65039,8205,128139,8205,129489,127997],[129489,127995,8205,10084,65039,8205,128139,8205,129489,127998],[129489,127995,8205,10084,65039,8205,128139,8205,129489,127999],[129489,127996,8205,10084,65039,8205,128139,8205,129489,127995],[128143,127996],[129489,127996,8205,10084,65039,8205,128139,8205,129489,127997],[129489,127996,8205,10084,65039,8205,128139,8205,129489,127998],[129489,127996,8205,10084,65039,8205,128139,8205,129489,127999],[129489,127997,8205,10084,65039,8205,128139,8205,129489,127995],[129489,127997,8205,10084,65039,8205,128139,8205,129489,127996],[128143,127997],[129489,127997,8205,10084,65039,8205,128139,8205,129489,127998],[129489,127997,8205,10084,65039,8205,128139,8205,129489,127999],[129489,127998,8205,10084,65039,8205,128139,8205,129489,127995],[129489,127998,8205,10084,65039,8205,128139,8205,129489,127996],[129489,127998,8205,10084,65039,8205,128139,8205,129489,127997],[128143,127998],[129489,127998,8205,10084,65039,8205,128139,8205,129489,127999],[129489,127999,8205,10084,65039,8205,128139,8205,129489,127995],[129489,127999,8205,10084,65039,8205,128139,8205,129489,127996],[129489,127999,8205,10084,65039,8205,128139,8205,129489,127997],[129489,127999,8205,10084,65039,8205,128139,8205,129489,127998],[128143,127999]],"emoticons":["(-}{-)"],"shortcodes":[":kiss-people:"],"animated":false,"directional":false,"group":"People","emoji":"💏"},{"base":[128105,8205,10084,65039,8205,128139,8205,128104],"alternates":[[128105,8205,10084,65039,8205,128139,8205,128104],[128105,127995,8205,10084,65039,8205,128139,8205,128104,127995],[128105,127995,8205,10084,65039,8205,128139,8205,128104,127996],[128105,127995,8205,10084,65039,8205,128139,8205,128104,127997],[128105,127995,8205,10084,65039,8205,128139,8205,128104,127998],[128105,127995,8205,10084,65039,8205,128139,8205,128104,127999],[128105,127996,8205,10084,65039,8205,128139,8205,128104,127995],[128105,127996,8205,10084,65039,8205,128139,8205,128104,127996],[128105,127996,8205,10084,65039,8205,128139,8205,128104,127997],[128105,127996,8205,10084,65039,8205,128139,8205,128104,127998],[128105,127996,8205,10084,65039,8205,128139,8205,128104,127999],[128105,127997,8205,10084,65039,8205,128139,8205,128104,127995],[128105,127997,8205,10084,65039,8205,128139,8205,128104,127996],[128105,127997,8205,10084,65039,8205,128139,8205,128104,127997],[128105,127997,8205,10084,65039,8205,128139,8205,128104,127998],[128105,127997,8205,10084,65039,8205,128139,8205,128104,127999],[128105,127998,8205,10084,65039,8205,128139,8205,128104,127995],[128105,127998,8205,10084,65039,8205,128139,8205,128104,127996],[128105,127998,8205,10084,65039,8205,128139,8205,128104,127997],[128105,127998,8205,10084,65039,8205,128139,8205,128104,127998],[128105,127998,8205,10084,65039,8205,128139,8205,128104,127999],[128105,127999,8205,10084,65039,8205,128139,8205,128104,127995],[128105,127999,8205,10084,65039,8205,128139,8205,128104,127996],[128105,127999,8205,10084,65039,8205,128139,8205,128104,127997],[128105,127999,8205,10084,65039,8205,128139,8205,128104,127998],[128105,127999,8205,10084,65039,8205,128139,8205,128104,127999]],"emoticons":[],"shortcodes":[":kiss-woman-and-man:"],"animated":false,"directional":false,"group":"People","emoji":"👩‍❤️‍💋‍👨"},{"base":[128104,8205,10084,65039,8205,128139,8205,128104],"alternates":[[128104,8205,10084,65039,8205,128139,8205,128104],[128104,127995,8205,10084,65039,8205,128139,8205,128104,127995],[128104,127995,8205,10084,65039,8205,128139,8205,128104,127996],[128104,127995,8205,10084,65039,8205,128139,8205,128104,127997],[128104,127995,8205,10084,65039,8205,128139,8205,128104,127998],[128104,127995,8205,10084,65039,8205,128139,8205,128104,127999],[128104,127996,8205,10084,65039,8205,128139,8205,128104,127995],[128104,127996,8205,10084,65039,8205,128139,8205,128104,127996],[128104,127996,8205,10084,65039,8205,128139,8205,128104,127997],[128104,127996,8205,10084,65039,8205,128139,8205,128104,127998],[128104,127996,8205,10084,65039,8205,128139,8205,128104,127999],[128104,127997,8205,10084,65039,8205,128139,8205,128104,127995],[128104,127997,8205,10084,65039,8205,128139,8205,128104,127996],[128104,127997,8205,10084,65039,8205,128139,8205,128104,127997],[128104,127997,8205,10084,65039,8205,128139,8205,128104,127998],[128104,127997,8205,10084,65039,8205,128139,8205,128104,127999],[128104,127998,8205,10084,65039,8205,128139,8205,128104,127995],[128104,127998,8205,10084,65039,8205,128139,8205,128104,127996],[128104,127998,8205,10084,65039,8205,128139,8205,128104,127997],[128104,127998,8205,10084,65039,8205,128139,8205,128104,127998],[128104,127998,8205,10084,65039,8205,128139,8205,128104,127999],[128104,127999,8205,10084,65039,8205,128139,8205,128104,127995],[128104,127999,8205,10084,65039,8205,128139,8205,128104,127996],[128104,127999,8205,10084,65039,8205,128139,8205,128104,127997],[128104,127999,8205,10084,65039,8205,128139,8205,128104,127998],[128104,127999,8205,10084,65039,8205,128139,8205,128104,127999]],"emoticons":[],"shortcodes":[":kiss-man-and-man:"],"animated":false,"directional":false,"group":"People","emoji":"👨‍❤️‍💋‍👨"},{"base":[128105,8205,10084,65039,8205,128139,8205,128105],"alternates":[[128105,8205,10084,65039,8205,128139,8205,128105],[128105,127995,8205,10084,65039,8205,128139,8205,128105,127995],[128105,127995,8205,10084,65039,8205,128139,8205,128105,127996],[128105,127995,8205,10084,65039,8205,128139,8205,128105,127997],[128105,127995,8205,10084,65039,8205,128139,8205,128105,127998],[128105,127995,8205,10084,65039,8205,128139,8205,128105,127999],[128105,127996,8205,10084,65039,8205,128139,8205,128105,127995],[128105,127996,8205,10084,65039,8205,128139,8205,128105,127996],[128105,127996,8205,10084,65039,8205,128139,8205,128105,127997],[128105,127996,8205,10084,65039,8205,128139,8205,128105,127998],[128105,127996,8205,10084,65039,8205,128139,8205,128105,127999],[128105,127997,8205,10084,65039,8205,128139,8205,128105,127995],[128105,127997,8205,10084,65039,8205,128139,8205,128105,127996],[128105,127997,8205,10084,65039,8205,128139,8205,128105,127997],[128105,127997,8205,10084,65039,8205,128139,8205,128105,127998],[128105,127997,8205,10084,65039,8205,128139,8205,128105,127999],[128105,127998,8205,10084,65039,8205,128139,8205,128105,127995],[128105,127998,8205,10084,65039,8205,128139,8205,128105,127996],[128105,127998,8205,10084,65039,8205,128139,8205,128105,127997],[128105,127998,8205,10084,65039,8205,128139,8205,128105,127998],[128105,127998,8205,10084,65039,8205,128139,8205,128105,127999],[128105,127999,8205,10084,65039,8205,128139,8205,128105,127995],[128105,127999,8205,10084,65039,8205,128139,8205,128105,127996],[128105,127999,8205,10084,65039,8205,128139,8205,128105,127997],[128105,127999,8205,10084,65039,8205,128139,8205,128105,127998],[128105,127999,8205,10084,65039,8205,128139,8205,128105,127999]],"emoticons":[],"shortcodes":[":kiss-woman-and-woman:"],"animated":false,"directional":false,"group":"People","emoji":"👩‍❤️‍💋‍👩"},{"base":[128145],"alternates":[[128145],[128145,127995],[129489,127995,8205,10084,65039,8205,129489,127996],[129489,127995,8205,10084,65039,8205,129489,127997],[129489,127995,8205,10084,65039,8205,129489,127998],[129489,127995,8205,10084,65039,8205,129489,127999],[129489,127996,8205,10084,65039,8205,129489,127995],[128145,127996],[129489,127996,8205,10084,65039,8205,129489,127997],[129489,127996,8205,10084,65039,8205,129489,127998],[129489,127996,8205,10084,65039,8205,129489,127999],[129489,127997,8205,10084,65039,8205,129489,127995],[129489,127997,8205,10084,65039,8205,129489,127996],[128145,127997],[129489,127997,8205,10084,65039,8205,129489,127998],[129489,127997,8205,10084,65039,8205,129489,127999],[129489,127998,8205,10084,65039,8205,129489,127995],[129489,127998,8205,10084,65039,8205,129489,127996],[129489,127998,8205,10084,65039,8205,129489,127997],[128145,127998],[129489,127998,8205,10084,65039,8205,129489,127999],[129489,127999,8205,10084,65039,8205,129489,127995],[129489,127999,8205,10084,65039,8205,129489,127996],[129489,127999,8205,10084,65039,8205,129489,127997],[129489,127999,8205,10084,65039,8205,129489,127998],[128145,127999]],"emoticons":[],"shortcodes":[":people-with-heart:"],"animated":false,"directional":false,"group":"People","emoji":"💑"},{"base":[128105,8205,10084,65039,8205,128104],"alternates":[[128105,8205,10084,65039,8205,128104],[128105,127995,8205,10084,65039,8205,128104,127995],[128105,127995,8205,10084,65039,8205,128104,127996],[128105,127995,8205,10084,65039,8205,128104,127997],[128105,127995,8205,10084,65039,8205,128104,127998],[128105,127995,8205,10084,65039,8205,128104,127999],[128105,127996,8205,10084,65039,8205,128104,127995],[128105,127996,8205,10084,65039,8205,128104,127996],[128105,127996,8205,10084,65039,8205,128104,127997],[128105,127996,8205,10084,65039,8205,128104,127998],[128105,127996,8205,10084,65039,8205,128104,127999],[128105,127997,8205,10084,65039,8205,128104,127995],[128105,127997,8205,10084,65039,8205,128104,127996],[128105,127997,8205,10084,65039,8205,128104,127997],[128105,127997,8205,10084,65039,8205,128104,127998],[128105,127997,8205,10084,65039,8205,128104,127999],[128105,127998,8205,10084,65039,8205,128104,127995],[128105,127998,8205,10084,65039,8205,128104,127996],[128105,127998,8205,10084,65039,8205,128104,127997],[128105,127998,8205,10084,65039,8205,128104,127998],[128105,127998,8205,10084,65039,8205,128104,127999],[128105,127999,8205,10084,65039,8205,128104,127995],[128105,127999,8205,10084,65039,8205,128104,127996],[128105,127999,8205,10084,65039,8205,128104,127997],[128105,127999,8205,10084,65039,8205,128104,127998],[128105,127999,8205,10084,65039,8205,128104,127999]],"emoticons":[],"shortcodes":[":heart-with-woman-and-man:"],"animated":false,"directional":false,"group":"People","emoji":"👩‍❤️‍👨"},{"base":[128104,8205,10084,65039,8205,128104],"alternates":[[128104,8205,10084,65039,8205,128104],[128104,127995,8205,10084,65039,8205,128104,127995],[128104,127995,8205,10084,65039,8205,128104,127996],[128104,127995,8205,10084,65039,8205,128104,127997],[128104,127995,8205,10084,65039,8205,128104,127998],[128104,127995,8205,10084,65039,8205,128104,127999],[128104,127996,8205,10084,65039,8205,128104,127995],[128104,127996,8205,10084,65039,8205,128104,127996],[128104,127996,8205,10084,65039,8205,128104,127997],[128104,127996,8205,10084,65039,8205,128104,127998],[128104,127996,8205,10084,65039,8205,128104,127999],[128104,127997,8205,10084,65039,8205,128104,127995],[128104,127997,8205,10084,65039,8205,128104,127996],[128104,127997,8205,10084,65039,8205,128104,127997],[128104,127997,8205,10084,65039,8205,128104,127998],[128104,127997,8205,10084,65039,8205,128104,127999],[128104,127998,8205,10084,65039,8205,128104,127995],[128104,127998,8205,10084,65039,8205,128104,127996],[128104,127998,8205,10084,65039,8205,128104,127997],[128104,127998,8205,10084,65039,8205,128104,127998],[128104,127998,8205,10084,65039,8205,128104,127999],[128104,127999,8205,10084,65039,8205,128104,127995],[128104,127999,8205,10084,65039,8205,128104,127996],[128104,127999,8205,10084,65039,8205,128104,127997],[128104,127999,8205,10084,65039,8205,128104,127998],[128104,127999,8205,10084,65039,8205,128104,127999]],"emoticons":[],"shortcodes":[":heart-with-man-and-man:"],"animated":false,"directional":false,"group":"People","emoji":"👨‍❤️‍👨"},{"base":[128105,8205,10084,65039,8205,128105],"alternates":[[128105,8205,10084,65039,8205,128105],[128105,127995,8205,10084,65039,8205,128105,127995],[128105,127995,8205,10084,65039,8205,128105,127996],[128105,127995,8205,10084,65039,8205,128105,127997],[128105,127995,8205,10084,65039,8205,128105,127998],[128105,127995,8205,10084,65039,8205,128105,127999],[128105,127996,8205,10084,65039,8205,128105,127995],[128105,127996,8205,10084,65039,8205,128105,127996],[128105,127996,8205,10084,65039,8205,128105,127997],[128105,127996,8205,10084,65039,8205,128105,127998],[128105,127996,8205,10084,65039,8205,128105,127999],[128105,127997,8205,10084,65039,8205,128105,127995],[128105,127997,8205,10084,65039,8205,128105,127996],[128105,127997,8205,10084,65039,8205,128105,127997],[128105,127997,8205,10084,65039,8205,128105,127998],[128105,127997,8205,10084,65039,8205,128105,127999],[128105,127998,8205,10084,65039,8205,128105,127995],[128105,127998,8205,10084,65039,8205,128105,127996],[128105,127998,8205,10084,65039,8205,128105,127997],[128105,127998,8205,10084,65039,8205,128105,127998],[128105,127998,8205,10084,65039,8205,128105,127999],[128105,127999,8205,10084,65039,8205,128105,127995],[128105,127999,8205,10084,65039,8205,128105,127996],[128105,127999,8205,10084,65039,8205,128105,127997],[128105,127999,8205,10084,65039,8205,128105,127998],[128105,127999,8205,10084,65039,8205,128105,127999]],"emoticons":[],"shortcodes":[":heart-with-woman-and-woman:"],"animated":false,"directional":false,"group":"People","emoji":"👩‍❤️‍👩"},{"base":[129732],"alternates":[[129732],[129732,127995],[129732,127996],[129732,127997],[129732,127998],[129732,127999],[129328],[129328,127995],[129328,127996],[129328,127997],[129328,127998],[129328,127999],[129731],[129731,127995],[129731,127996],[129731,127997],[129731,127998],[129731,127999]],"emoticons":[],"shortcodes":[":pregnant:"],"animated":false,"directional":false,"group":"People","emoji":"🫄"},{"base":[129329],"alternates":[[129329],[129329,127995],[129329,127996],[129329,127997],[129329,127998],[129329,127999]],"emoticons":[],"shortcodes":[":breast-feeding:"],"animated":false,"directional":false,"group":"People","emoji":"🤱"},{"base":[129489,8205,127868],"alternates":[[129489,8205,127868],[129489,127995,8205,127868],[129489,127996,8205,127868],[129489,127997,8205,127868],[129489,127998,8205,127868],[129489,127999,8205,127868],[128105,8205,127868],[128105,127995,8205,127868],[128105,127996,8205,127868],[128105,127997,8205,127868],[128105,127998,8205,127868],[128105,127999,8205,127868],[128104,8205,127868],[128104,127995,8205,127868],[128104,127996,8205,127868],[128104,127997,8205,127868],[128104,127998,8205,127868],[128104,127999,8205,127868]],"emoticons":[],"shortcodes":[":person-feeding-baby:"],"animated":false,"directional":false,"group":"People","emoji":"🧑‍🍼"},{"base":[128144],"alternates":[],"emoticons":[],"shortcodes":[":bouquet:",":flowers:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"💐"},{"base":[127801],"alternates":[],"emoticons":["@-,-\'-,-"],"shortcodes":[":rose:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌹"},{"base":[129344],"alternates":[],"emoticons":[],"shortcodes":[":wilted-flower:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🥀"},{"base":[127802],"alternates":[],"emoticons":[],"shortcodes":[":hibiscus:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌺"},{"base":[127799],"alternates":[],"emoticons":[],"shortcodes":[":tulip:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌷"},{"base":[129719],"alternates":[],"emoticons":[],"shortcodes":[":lotus:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🪷"},{"base":[127800],"alternates":[],"emoticons":[],"shortcodes":[":cherry-blossom:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌸"},{"base":[128174],"alternates":[],"emoticons":[],"shortcodes":[":white-flower:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"💮"},{"base":[127989,65039],"alternates":[],"emoticons":[],"shortcodes":[":rosette:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🏵️"},{"base":[129723],"alternates":[],"emoticons":[],"shortcodes":[":hyacinth:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🪻"},{"base":[127803],"alternates":[],"emoticons":[],"shortcodes":[":sunflower:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌻"},{"base":[127804],"alternates":[],"emoticons":[],"shortcodes":[":blossom:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌼"},{"base":[127810],"alternates":[],"emoticons":[],"shortcodes":[":fallen-leaf:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🍂"},{"base":[127809],"alternates":[],"emoticons":[],"shortcodes":[":maple-leaf:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🍁"},{"base":[127812],"alternates":[],"emoticons":[],"shortcodes":[":mushroom:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🍄"},{"base":[127806],"alternates":[],"emoticons":[],"shortcodes":[":ear-of-rice:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌾"},{"base":[127793],"alternates":[],"emoticons":[],"shortcodes":[":plant:",":seed:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌱"},{"base":[127807],"alternates":[],"emoticons":[],"shortcodes":[":herb:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌿"},{"base":[127811],"alternates":[],"emoticons":[],"shortcodes":[":leaves:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🍃"},{"base":[9752,65039],"alternates":[],"emoticons":[],"shortcodes":[":shamrock:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"☘️"},{"base":[127808],"alternates":[],"emoticons":[],"shortcodes":[":luck:",":four-leaf-clover:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🍀"},{"base":[129716],"alternates":[],"emoticons":[],"shortcodes":[":potted-plant:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🪴"},{"base":[127797],"alternates":[],"emoticons":[],"shortcodes":[":cactus:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌵"},{"base":[127796],"alternates":[],"emoticons":[],"shortcodes":[":palm-tree:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌴"},{"base":[127795],"alternates":[],"emoticons":[],"shortcodes":[":deciduous-tree:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌳"},{"base":[127794],"alternates":[],"emoticons":[],"shortcodes":[":evergreen-tree:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌲"},{"base":[129717],"alternates":[],"emoticons":[],"shortcodes":[":wood:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🪵"},{"base":[129721],"alternates":[],"emoticons":[],"shortcodes":[":nest:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🪹"},{"base":[129722],"alternates":[],"emoticons":[],"shortcodes":[":nest-with-eggs:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🪺"},{"base":[129704],"alternates":[],"emoticons":[],"shortcodes":[":rock:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🪨"},{"base":[9968,65039],"alternates":[],"emoticons":[],"shortcodes":[":mountain:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"⛰️"},{"base":[127956,65039],"alternates":[],"emoticons":[],"shortcodes":[":snow-mountain:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🏔️"},{"base":[10052,65039],"alternates":[],"emoticons":[],"shortcodes":[":snowflake:",":winter:",":cold:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"❄️"},{"base":[9731,65039],"alternates":[],"emoticons":[],"shortcodes":[":snowman-with-snow:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"☃️"},{"base":[9924],"alternates":[],"emoticons":[],"shortcodes":[":snowman:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"⛄"},{"base":[127787,65039],"alternates":[],"emoticons":[],"shortcodes":[":fog:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌫️"},{"base":[127777,65039],"alternates":[],"emoticons":[],"shortcodes":[":thermometer:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌡️"},{"base":[128293],"alternates":[],"emoticons":[],"shortcodes":[":fire:",":burn:",":lit:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🔥"},{"base":[127755],"alternates":[],"emoticons":[],"shortcodes":[":volcano:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌋"},{"base":[127964,65039],"alternates":[],"emoticons":[],"shortcodes":[":desert:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🏜️"},{"base":[127966,65039],"alternates":[],"emoticons":[],"shortcodes":[":national-park:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🏞️"},{"base":[127965,65039],"alternates":[],"emoticons":[],"shortcodes":[":desert-island:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🏝️"},{"base":[127958,65039],"alternates":[],"emoticons":[],"shortcodes":[":beach:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🏖️"},{"base":[127749],"alternates":[],"emoticons":[],"shortcodes":[":sunrise:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌅"},{"base":[127748],"alternates":[],"emoticons":[],"shortcodes":[":sunrise-over-mountains:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌄"},{"base":[127752],"alternates":[],"emoticons":[],"shortcodes":[":rainbow:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌈"},{"base":[129767],"alternates":[],"emoticons":[],"shortcodes":[":bubbles:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🫧"},{"base":[127754],"alternates":[],"emoticons":[],"shortcodes":[":ocean:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌊"},{"base":[127788,65039],"alternates":[],"emoticons":[],"shortcodes":[":wind-face:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌬️"},{"base":[127744],"alternates":[],"emoticons":[],"shortcodes":[":cyclone:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌀"},{"base":[127786,65039],"alternates":[],"emoticons":[],"shortcodes":[":tornado:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌪️"},{"base":[9889],"alternates":[],"emoticons":[],"shortcodes":[":electricity:",":zap:",":lightning:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"⚡"},{"base":[9748],"alternates":[],"emoticons":[],"shortcodes":[":umbrella-in-rain:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"☔"},{"base":[128167],"alternates":[],"emoticons":[],"shortcodes":[":droplet:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"💧"},{"base":[9729,65039],"alternates":[],"emoticons":[],"shortcodes":[":cloud:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"☁️"},{"base":[127784,65039],"alternates":[],"emoticons":[],"shortcodes":[":cloud-with-snow:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌨️"},{"base":[127783,65039],"alternates":[],"emoticons":[],"shortcodes":[":rain-cloud:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌧️"},{"base":[127785,65039],"alternates":[],"emoticons":[],"shortcodes":[":cloud-with-lightning:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌩️"},{"base":[9928,65039],"alternates":[],"emoticons":[],"shortcodes":[":cloud-with-lightning-and-rain:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"⛈️"},{"base":[127782,65039],"alternates":[],"emoticons":[],"shortcodes":[":sun-behind-rain-cloud:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌦️"},{"base":[127781,65039],"alternates":[],"emoticons":[],"shortcodes":[":sun-behind-large-cloud:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌥️"},{"base":[9925],"alternates":[],"emoticons":[],"shortcodes":[":partly-sunny:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"⛅"},{"base":[127780,65039],"alternates":[],"emoticons":[],"shortcodes":[":sun-behind-small-cloud:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌤️"},{"base":[9728,65039],"alternates":[],"emoticons":[],"shortcodes":[":sunny:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"☀️"},{"base":[127774],"alternates":[],"emoticons":[],"shortcodes":[":sun-with-face:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌞"},{"base":[127773],"alternates":[],"emoticons":["<_<"],"shortcodes":[":moon-face-full:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌝"},{"base":[127770],"alternates":[],"emoticons":[">_>"],"shortcodes":[":moon-face-new:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌚"},{"base":[127772],"alternates":[],"emoticons":[],"shortcodes":[":moon-face-last-quarter:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌜"},{"base":[127771],"alternates":[],"emoticons":[],"shortcodes":[":moon-face-first-quarter:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌛"},{"base":[11088],"alternates":[],"emoticons":[],"shortcodes":[":star:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"⭐"},{"base":[127775],"alternates":[],"emoticons":[],"shortcodes":[":glowing-star:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌟"},{"base":[10024],"alternates":[],"emoticons":[],"shortcodes":[":sparkles:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"✨"},{"base":[128171],"alternates":[],"emoticons":[],"shortcodes":[":dizzy:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"💫"},{"base":[127769],"alternates":[],"emoticons":[],"shortcodes":[":crescent-moon:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌙"},{"base":[9732,65039],"alternates":[],"emoticons":[],"shortcodes":[":comet:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"☄️"},{"base":[128371,65039],"alternates":[],"emoticons":[],"shortcodes":[":hole:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🕳️"},{"base":[127776],"alternates":[],"emoticons":[],"shortcodes":[":shooting-star:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌠"},{"base":[127756],"alternates":[],"emoticons":[],"shortcodes":[":milky-way:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌌"},{"base":[127757],"alternates":[],"emoticons":[],"shortcodes":[":globe-showing-Europe-Africa:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌍"},{"base":[127758],"alternates":[],"emoticons":[],"shortcodes":[":globe-showing-Americas:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌎"},{"base":[127759],"alternates":[],"emoticons":[],"shortcodes":[":globe-showing-Asia-Australia:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🌏"},{"base":[129680],"alternates":[],"emoticons":[],"shortcodes":[":ringed-planet:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🪐"},{"base":[127761],"alternates":[],"emoticons":[],"shortcodes":[":new-moon:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌑"},{"base":[127762],"alternates":[],"emoticons":[],"shortcodes":[":waxing-crescent-moon:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌒"},{"base":[127763],"alternates":[],"emoticons":[],"shortcodes":[":first-quarter-moon:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌓"},{"base":[127764],"alternates":[],"emoticons":[],"shortcodes":[":waxing-gibbous-moon:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌔"},{"base":[127765],"alternates":[],"emoticons":[],"shortcodes":[":full-moon:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌕"},{"base":[127766],"alternates":[],"emoticons":[],"shortcodes":[":waning-gibbous-moon:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌖"},{"base":[127767],"alternates":[],"emoticons":[],"shortcodes":[":last-quarter-moon:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌗"},{"base":[127768],"alternates":[],"emoticons":[],"shortcodes":[":waning-crescent-moon:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🌘"},{"base":[128584],"alternates":[],"emoticons":[],"shortcodes":[":see-no-evil-monkey:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🙈"},{"base":[128585],"alternates":[],"emoticons":[],"shortcodes":[":hear-no-evil-monkey:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🙉"},{"base":[128586],"alternates":[],"emoticons":[],"shortcodes":[":speak-no-evil-monkey:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🙊"},{"base":[128053],"alternates":[],"emoticons":[],"shortcodes":[":monkey-face:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐵"},{"base":[129409],"alternates":[],"emoticons":[],"shortcodes":[":lion-face:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦁"},{"base":[128047],"alternates":[],"emoticons":[],"shortcodes":[":tiger-face:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐯"},{"base":[128049],"alternates":[],"emoticons":["=^.^="],"shortcodes":[":cat-face:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐱"},{"base":[128054],"alternates":[],"emoticons":["▼・ᴥ・▼"],"shortcodes":[":dog-face:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐶"},{"base":[128058],"alternates":[],"emoticons":[],"shortcodes":[":wolf:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐺"},{"base":[128059],"alternates":[],"emoticons":["ʕ·ᴥ·ʔ"],"shortcodes":[":bear-face:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐻"},{"base":[128059,8205,10052,65039],"alternates":[],"emoticons":[],"shortcodes":[":polar-bear:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐻‍❄️"},{"base":[128040],"alternates":[],"emoticons":[],"shortcodes":[":koala:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐨"},{"base":[128060],"alternates":[],"emoticons":[],"shortcodes":[":panda:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐼"},{"base":[128057],"alternates":[],"emoticons":[],"shortcodes":[":hamster:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐹"},{"base":[128045],"alternates":[],"emoticons":[],"shortcodes":[":mouse-face:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐭"},{"base":[128048],"alternates":[],"emoticons":[],"shortcodes":[":rabbit-face:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐰"},{"base":[129418],"alternates":[],"emoticons":[],"shortcodes":[":fox-face:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦊"},{"base":[129437],"alternates":[],"emoticons":[],"shortcodes":[":raccoon:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦝"},{"base":[128046],"alternates":[],"emoticons":["3:O"],"shortcodes":[":cow-face:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐮"},{"base":[128055],"alternates":[],"emoticons":[],"shortcodes":[":pig-face:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐷"},{"base":[128061],"alternates":[],"emoticons":[],"shortcodes":[":snout:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐽"},{"base":[128023],"alternates":[],"emoticons":[],"shortcodes":[":boar:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐗"},{"base":[129427],"alternates":[],"emoticons":[],"shortcodes":[":zebra:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦓"},{"base":[129412],"alternates":[],"emoticons":[],"shortcodes":[":unicorn:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦄"},{"base":[128052],"alternates":[],"emoticons":[],"shortcodes":[":horse-face:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐴"},{"base":[129742],"alternates":[],"emoticons":[],"shortcodes":[":moose:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🫎"},{"base":[128050],"alternates":[],"emoticons":[],"shortcodes":[":dragon-face:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐲"},{"base":[129422],"alternates":[],"emoticons":[],"shortcodes":[":lizard:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦎"},{"base":[128009],"alternates":[],"emoticons":[],"shortcodes":[":dragon:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐉"},{"base":[129430],"alternates":[],"emoticons":[],"shortcodes":[":t-rex:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦖"},{"base":[129429],"alternates":[],"emoticons":[],"shortcodes":[":dinosaur:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦕"},{"base":[128034],"alternates":[],"emoticons":[],"shortcodes":[":turtle:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐢"},{"base":[128010],"alternates":[],"emoticons":[],"shortcodes":[":crocodile:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐊"},{"base":[128013],"alternates":[],"emoticons":["～>゜）～～～～"],"shortcodes":[":snake:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐍"},{"base":[128056],"alternates":[],"emoticons":[],"shortcodes":[":frog:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐸"},{"base":[128007],"alternates":[],"emoticons":[],"shortcodes":[":rabbit:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐇"},{"base":[128001],"alternates":[],"emoticons":["<:3)~"],"shortcodes":[":mouse:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐁"},{"base":[128000],"alternates":[],"emoticons":[],"shortcodes":[":rat:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐀"},{"base":[128008],"alternates":[],"emoticons":[],"shortcodes":[":cat:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐈"},{"base":[128008,8205,11035],"alternates":[],"emoticons":[],"shortcodes":[":black-cat:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐈‍⬛"},{"base":[128041],"alternates":[],"emoticons":[],"shortcodes":[":poodle:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐩"},{"base":[128021],"alternates":[],"emoticons":[],"shortcodes":[":dog:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐕"},{"base":[129454],"alternates":[],"emoticons":[],"shortcodes":[":guide-dog:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦮"},{"base":[128021,8205,129466],"alternates":[],"emoticons":[],"shortcodes":[":service-dog:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐕‍🦺"},{"base":[128022],"alternates":[],"emoticons":[],"shortcodes":[":pig:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐖"},{"base":[128014],"alternates":[],"emoticons":[],"shortcodes":[":racehorse:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐎"},{"base":[129743],"alternates":[],"emoticons":[],"shortcodes":[":donkey:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🫏"},{"base":[128004],"alternates":[],"emoticons":[],"shortcodes":[":cow:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐄"},{"base":[128002],"alternates":[],"emoticons":[],"shortcodes":[":ox:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐂"},{"base":[128003],"alternates":[],"emoticons":[],"shortcodes":[":water-buffalo:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐃"},{"base":[129452],"alternates":[],"emoticons":[],"shortcodes":[":bison:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦬"},{"base":[128015],"alternates":[],"emoticons":[],"shortcodes":[":ram:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐏"},{"base":[128017],"alternates":[],"emoticons":[],"shortcodes":[":sheep:",":ewe:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐑"},{"base":[128016],"alternates":[],"emoticons":[],"shortcodes":[":goat:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐐"},{"base":[129420],"alternates":[],"emoticons":[],"shortcodes":[":deer:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦌"},{"base":[129433],"alternates":[],"emoticons":[],"shortcodes":[":llama:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦙"},{"base":[129445],"alternates":[],"emoticons":[],"shortcodes":[":sloth:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦥"},{"base":[129432],"alternates":[],"emoticons":[],"shortcodes":[":kangaroo:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦘"},{"base":[128024],"alternates":[],"emoticons":[],"shortcodes":[":elephant:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐘"},{"base":[129443],"alternates":[],"emoticons":[],"shortcodes":[":mammoth:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦣"},{"base":[129423],"alternates":[],"emoticons":[],"shortcodes":[":rhino:",":rhinoceros:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦏"},{"base":[129435],"alternates":[],"emoticons":[],"shortcodes":[":hippo:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦛"},{"base":[129426],"alternates":[],"emoticons":[],"shortcodes":[":giraffe:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦒"},{"base":[128006],"alternates":[],"emoticons":[],"shortcodes":[":leopard:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐆"},{"base":[128005],"alternates":[],"emoticons":[],"shortcodes":[":tiger:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐅"},{"base":[128018],"alternates":[],"emoticons":[],"shortcodes":[":monkey:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐒"},{"base":[129421],"alternates":[],"emoticons":[],"shortcodes":[":gorilla:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦍"},{"base":[129447],"alternates":[],"emoticons":[],"shortcodes":[":orangutan:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦧"},{"base":[128042],"alternates":[],"emoticons":[],"shortcodes":[":camel:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐪"},{"base":[128043],"alternates":[],"emoticons":[],"shortcodes":[":bactrian-camel:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐫"},{"base":[128063,65039],"alternates":[],"emoticons":[],"shortcodes":[":chipmunk:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐿️"},{"base":[129451],"alternates":[],"emoticons":[],"shortcodes":[":beaver:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦫"},{"base":[129448],"alternates":[],"emoticons":[],"shortcodes":[":skunk:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦨"},{"base":[129441],"alternates":[],"emoticons":[],"shortcodes":[":badger:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦡"},{"base":[129428],"alternates":[],"emoticons":[],"shortcodes":[":hedgehog:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦔"},{"base":[129446],"alternates":[],"emoticons":["(:3ꇤ⁐ꃳ"],"shortcodes":[":otter:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦦"},{"base":[129415],"alternates":[],"emoticons":["⎛⎝(•ⱅ•)⎠⎞"],"shortcodes":[":bat:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦇"},{"base":[129725],"alternates":[],"emoticons":[],"shortcodes":[":wing:; :fly:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🪽"},{"base":[129718],"alternates":[],"emoticons":[],"shortcodes":[":feather:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🪶"},{"base":[128038],"alternates":[],"emoticons":[],"shortcodes":[":bird:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐦"},{"base":[128038,8205,11035],"alternates":[],"emoticons":[],"shortcodes":[":black-bird:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐦‍⬛"},{"base":[128019],"alternates":[],"emoticons":[],"shortcodes":[":rooster:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐓"},{"base":[128020],"alternates":[],"emoticons":[],"shortcodes":[":chicken:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐔"},{"base":[128035],"alternates":[],"emoticons":[],"shortcodes":[":hatching-chick:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐣"},{"base":[128036],"alternates":[],"emoticons":[],"shortcodes":[":baby-chick:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐤"},{"base":[128037],"alternates":[],"emoticons":[],"shortcodes":[":hatched-chick:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐥"},{"base":[129413],"alternates":[],"emoticons":[],"shortcodes":[":eagle:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦅"},{"base":[129417],"alternates":[],"emoticons":[],"shortcodes":[":owl:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦉"},{"base":[129436],"alternates":[],"emoticons":[],"shortcodes":[":parrot:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦜"},{"base":[128330,65039],"alternates":[],"emoticons":[],"shortcodes":[":peace:",":dove:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🕊️"},{"base":[129444],"alternates":[],"emoticons":[],"shortcodes":[":dodo:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦤"},{"base":[129442],"alternates":[],"emoticons":[],"shortcodes":[":swan:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦢"},{"base":[129414],"alternates":[],"emoticons":[],"shortcodes":[":duck:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦆"},{"base":[129727],"alternates":[],"emoticons":[],"shortcodes":[":goose:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🪿"},{"base":[129449],"alternates":[],"emoticons":[],"shortcodes":[":flamingo:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦩"},{"base":[129434],"alternates":[],"emoticons":[],"shortcodes":[":peacock:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦚"},{"base":[128038,8205,128293],"alternates":[],"emoticons":[],"shortcodes":[":phoenix:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐦‍🔥"},{"base":[129411],"alternates":[],"emoticons":[],"shortcodes":[":turkey:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦃"},{"base":[128039],"alternates":[],"emoticons":["<(\\")"],"shortcodes":[":penguin:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐧"},{"base":[129453],"alternates":[],"emoticons":[],"shortcodes":[":seal:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦭"},{"base":[129416],"alternates":[],"emoticons":[],"shortcodes":[":shark:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦈"},{"base":[128044],"alternates":[],"emoticons":[],"shortcodes":[":dolphin:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐬"},{"base":[128011],"alternates":[],"emoticons":[],"shortcodes":[":humpback-whale:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐋"},{"base":[128051],"alternates":[],"emoticons":[],"shortcodes":[":whale:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐳"},{"base":[128031],"alternates":[],"emoticons":["<><"],"shortcodes":[":fish:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐟"},{"base":[128032],"alternates":[],"emoticons":[],"shortcodes":[":tropical-fish:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐠"},{"base":[128033],"alternates":[],"emoticons":[],"shortcodes":[":blowfish:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐡"},{"base":[129424],"alternates":[],"emoticons":[],"shortcodes":[":shrimp:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦐"},{"base":[129438],"alternates":[],"emoticons":[],"shortcodes":[":lobster:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦞"},{"base":[129408],"alternates":[],"emoticons":[],"shortcodes":[":crab:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦀"},{"base":[129425],"alternates":[],"emoticons":["くコ:彡"],"shortcodes":[":squid:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦑"},{"base":[128025],"alternates":[],"emoticons":[],"shortcodes":[":octopus:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐙"},{"base":[129724],"alternates":[],"emoticons":[],"shortcodes":[":jellyfish:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🪼"},{"base":[129450],"alternates":[],"emoticons":[],"shortcodes":[":oyster:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦪"},{"base":[129720],"alternates":[],"emoticons":[],"shortcodes":[":coral:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🪸"},{"base":[129410],"alternates":[],"emoticons":[],"shortcodes":[":scorpion:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦂"},{"base":[128375,65039],"alternates":[],"emoticons":[],"shortcodes":[":spider:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🕷️"},{"base":[128376,65039],"alternates":[],"emoticons":[],"shortcodes":[":spider-web:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🕸️"},{"base":[128026],"alternates":[],"emoticons":[],"shortcodes":[":shell:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🐚"},{"base":[128012],"alternates":[],"emoticons":[],"shortcodes":[":snail:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐌"},{"base":[128028],"alternates":[],"emoticons":[],"shortcodes":[":ant:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐜"},{"base":[129431],"alternates":[],"emoticons":[],"shortcodes":[":cricket:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦗"},{"base":[129714],"alternates":[],"emoticons":[],"shortcodes":[":beetle:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🪲"},{"base":[129439],"alternates":[],"emoticons":[],"shortcodes":[":mosquito:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦟"},{"base":[129715],"alternates":[],"emoticons":[],"shortcodes":[":cockroach:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🪳"},{"base":[129712],"alternates":[],"emoticons":[],"shortcodes":[":fly:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🪰"},{"base":[128029],"alternates":[],"emoticons":[],"shortcodes":[":bee:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐝"},{"base":[128030],"alternates":[],"emoticons":[],"shortcodes":[":lady-bug:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐞"},{"base":[129419],"alternates":[],"emoticons":["εїз"],"shortcodes":[":butterfly:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🦋"},{"base":[128027],"alternates":[],"emoticons":[],"shortcodes":[":bug:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐛"},{"base":[129713],"alternates":[],"emoticons":[],"shortcodes":[":worm:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🪱"},{"base":[129440],"alternates":[],"emoticons":[],"shortcodes":[":microbe:"],"animated":false,"directional":false,"group":"Animals and nature","emoji":"🦠"},{"base":[128062],"alternates":[],"emoticons":[],"shortcodes":[":paw prints:"],"animated":true,"directional":false,"group":"Animals and nature","emoji":"🐾"},{"base":[127827],"alternates":[],"emoticons":[],"shortcodes":[":strawberry:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍓"},{"base":[127826],"alternates":[],"emoticons":[],"shortcodes":[":cherries:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍒"},{"base":[127822],"alternates":[],"emoticons":[],"shortcodes":[":red-apple:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍎"},{"base":[127817],"alternates":[],"emoticons":[],"shortcodes":[":watermelon:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍉"},{"base":[127825],"alternates":[],"emoticons":[],"shortcodes":[":peach:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍑"},{"base":[127818],"alternates":[],"emoticons":[],"shortcodes":[":tangerine:",":orange:",":mandarin:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍊"},{"base":[129389],"alternates":[],"emoticons":[],"shortcodes":[":mango:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥭"},{"base":[127821],"alternates":[],"emoticons":[],"shortcodes":[":pineapple:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍍"},{"base":[127820],"alternates":[],"emoticons":[],"shortcodes":[":banana:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍌"},{"base":[127819],"alternates":[],"emoticons":[],"shortcodes":[":lemon:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍋"},{"base":[127819,8205,129001],"alternates":[],"emoticons":[],"shortcodes":[":lime:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍋‍🟩"},{"base":[127816],"alternates":[],"emoticons":[],"shortcodes":[":melon:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍈"},{"base":[127823],"alternates":[],"emoticons":[],"shortcodes":[":green-apple:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍏"},{"base":[127824],"alternates":[],"emoticons":[],"shortcodes":[":pear:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍐"},{"base":[129373],"alternates":[],"emoticons":[],"shortcodes":[":kiwi-fruit:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥝"},{"base":[129746],"alternates":[],"emoticons":[],"shortcodes":[":olive:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🫒"},{"base":[129744],"alternates":[],"emoticons":[],"shortcodes":[":blueberries:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🫐"},{"base":[127815],"alternates":[],"emoticons":[],"shortcodes":[":grapes:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍇"},{"base":[129381],"alternates":[],"emoticons":[],"shortcodes":[":coconut:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥥"},{"base":[127813],"alternates":[],"emoticons":[],"shortcodes":[":tomato:"],"animated":true,"directional":false,"group":"Food and drink","emoji":"🍅"},{"base":[127798,65039],"alternates":[],"emoticons":[],"shortcodes":[":hot-pepper:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🌶️"},{"base":[129754],"alternates":[],"emoticons":[],"shortcodes":[":ginger:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🫚"},{"base":[129365],"alternates":[],"emoticons":[],"shortcodes":[":carrot:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥕"},{"base":[129477],"alternates":[],"emoticons":[],"shortcodes":[":onion:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🧅"},{"base":[127805],"alternates":[],"emoticons":[],"shortcodes":[":ear-of-corn:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🌽"},{"base":[129382],"alternates":[],"emoticons":[],"shortcodes":[":broccoli:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥦"},{"base":[129362],"alternates":[],"emoticons":[],"shortcodes":[":cucumber:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥒"},{"base":[129388],"alternates":[],"emoticons":[],"shortcodes":[":leafy-green:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥬"},{"base":[129755],"alternates":[],"emoticons":[],"shortcodes":[":pea-pod:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🫛"},{"base":[129745],"alternates":[],"emoticons":[],"shortcodes":[":bell-pepper:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🫑"},{"base":[129361],"alternates":[],"emoticons":[],"shortcodes":[":avocado:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥑"},{"base":[127840],"alternates":[],"emoticons":[],"shortcodes":[":roasted-sweet-potato:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍠"},{"base":[127814],"alternates":[],"emoticons":[],"shortcodes":[":eggplant:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍆"},{"base":[129476],"alternates":[],"emoticons":[],"shortcodes":[":garlic:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🧄"},{"base":[129364],"alternates":[],"emoticons":[],"shortcodes":[":potato:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥔"},{"base":[127812,8205,129003],"alternates":[],"emoticons":[],"shortcodes":[":brown-mushroom:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍄‍🟫"},{"base":[129752],"alternates":[],"emoticons":[],"shortcodes":[":beans:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🫘"},{"base":[127792],"alternates":[],"emoticons":[],"shortcodes":[":chestnut:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🌰"},{"base":[129372],"alternates":[],"emoticons":[],"shortcodes":[":peanuts:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥜"},{"base":[127838],"alternates":[],"emoticons":[],"shortcodes":[":bread:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍞"},{"base":[129747],"alternates":[],"emoticons":[],"shortcodes":[":flatbread:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🫓"},{"base":[129360],"alternates":[],"emoticons":[],"shortcodes":[":croissant:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥐"},{"base":[129366],"alternates":[],"emoticons":[],"shortcodes":[":baguette-bread:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥖"},{"base":[129391],"alternates":[],"emoticons":[],"shortcodes":[":bagel:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥯"},{"base":[129479],"alternates":[],"emoticons":[],"shortcodes":[":waffle:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🧇"},{"base":[129374],"alternates":[],"emoticons":[],"shortcodes":[":pancakes:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥞"},{"base":[127859],"alternates":[],"emoticons":[],"shortcodes":[":cooking:"],"animated":true,"directional":false,"group":"Food and drink","emoji":"🍳"},{"base":[129370],"alternates":[],"emoticons":[],"shortcodes":[":egg:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥚"},{"base":[129472],"alternates":[],"emoticons":[],"shortcodes":[":cheese-wedge:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🧀"},{"base":[129363],"alternates":[],"emoticons":[],"shortcodes":[":bacon:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥓"},{"base":[129385],"alternates":[],"emoticons":[],"shortcodes":[":cut-of-meat:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥩"},{"base":[127831],"alternates":[],"emoticons":[],"shortcodes":[":poultry-leg:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍗"},{"base":[127830],"alternates":[],"emoticons":[],"shortcodes":[":meat-on-bone:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍖"},{"base":[127828],"alternates":[],"emoticons":[],"shortcodes":[":hamburger:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍔"},{"base":[127789],"alternates":[],"emoticons":[],"shortcodes":[":hot-dog:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🌭"},{"base":[129386],"alternates":[],"emoticons":[],"shortcodes":[":sandwich:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥪"},{"base":[129384],"alternates":[],"emoticons":[],"shortcodes":[":pretzel:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥨"},{"base":[127839],"alternates":[],"emoticons":[],"shortcodes":[":french-fries:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍟"},{"base":[127829],"alternates":[],"emoticons":[],"shortcodes":[":pizza:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍕"},{"base":[129748],"alternates":[],"emoticons":[],"shortcodes":[":tamale:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🫔"},{"base":[127790],"alternates":[],"emoticons":[],"shortcodes":[":taco:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🌮"},{"base":[127791],"alternates":[],"emoticons":[],"shortcodes":[":burrito:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🌯"},{"base":[129369],"alternates":[],"emoticons":[],"shortcodes":[":stuffed-flatbread:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥙"},{"base":[129478],"alternates":[],"emoticons":[],"shortcodes":[":falafel:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🧆"},{"base":[129368],"alternates":[],"emoticons":[],"shortcodes":[":shallow-pan-of-food:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥘"},{"base":[127837],"alternates":[],"emoticons":[],"shortcodes":[":spaghetti:"],"animated":true,"directional":false,"group":"Food and drink","emoji":"🍝"},{"base":[129387],"alternates":[],"emoticons":[],"shortcodes":[":canned-food:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥫"},{"base":[129749],"alternates":[],"emoticons":[],"shortcodes":[":fondue:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🫕"},{"base":[129379],"alternates":[],"emoticons":[],"shortcodes":[":bowl-with-spoon:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥣"},{"base":[129367],"alternates":[],"emoticons":[],"shortcodes":[":green-salad:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥗"},{"base":[127858],"alternates":[],"emoticons":[],"shortcodes":[":pot-of-food:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍲"},{"base":[127835],"alternates":[],"emoticons":[],"shortcodes":[":curry-rice:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍛"},{"base":[127836],"alternates":[],"emoticons":[],"shortcodes":[":steaming-bowl:"],"animated":true,"directional":false,"group":"Food and drink","emoji":"🍜"},{"base":[129450],"alternates":[],"emoticons":[],"shortcodes":[":oyster:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🦪"},{"base":[129438],"alternates":[],"emoticons":[],"shortcodes":[":lobster:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🦞"},{"base":[127843],"alternates":[],"emoticons":[],"shortcodes":[":sushi:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍣"},{"base":[127844],"alternates":[],"emoticons":[],"shortcodes":[":fried-shrimp:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍤"},{"base":[129377],"alternates":[],"emoticons":[],"shortcodes":[":takeout-box:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥡"},{"base":[127834],"alternates":[],"emoticons":[],"shortcodes":[":cooked-rice:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍚"},{"base":[127857],"alternates":[],"emoticons":[],"shortcodes":[":bento-box:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍱"},{"base":[129375],"alternates":[],"emoticons":[],"shortcodes":[":dumpling:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥟"},{"base":[127842],"alternates":[],"emoticons":[],"shortcodes":[":oden:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍢"},{"base":[127833],"alternates":[],"emoticons":[],"shortcodes":[":rice-ball:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍙"},{"base":[127832],"alternates":[],"emoticons":[],"shortcodes":[":rice-cracker:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍘"},{"base":[127845],"alternates":[],"emoticons":[],"shortcodes":[":fish-cake-with-swirl:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍥"},{"base":[127841],"alternates":[],"emoticons":[],"shortcodes":[":dango:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍡"},{"base":[129376],"alternates":[],"emoticons":[],"shortcodes":[":fortune-cookie:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥠"},{"base":[129390],"alternates":[],"emoticons":[],"shortcodes":[":moon-cake:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥮"},{"base":[127847],"alternates":[],"emoticons":[],"shortcodes":[":shaved-ice:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍧"},{"base":[127848],"alternates":[],"emoticons":[],"shortcodes":[":ice-cream:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍨"},{"base":[127846],"alternates":[],"emoticons":[],"shortcodes":[":soft-ice-cream:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍦"},{"base":[129383],"alternates":[],"emoticons":[],"shortcodes":[":pie:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥧"},{"base":[127856],"alternates":[],"emoticons":[],"shortcodes":[":shortcake:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍰"},{"base":[127854],"alternates":[],"emoticons":[],"shortcodes":[":custard:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍮"},{"base":[127874],"alternates":[],"emoticons":[],"shortcodes":[":birthday-cake:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🎂"},{"base":[129473],"alternates":[],"emoticons":[],"shortcodes":[":cupcake:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🧁"},{"base":[127853],"alternates":[],"emoticons":[],"shortcodes":[":lollipop:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍭"},{"base":[127852],"alternates":[],"emoticons":[],"shortcodes":[":candy:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍬"},{"base":[127851],"alternates":[],"emoticons":[],"shortcodes":[":chocolate-bar:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍫"},{"base":[127849],"alternates":[],"emoticons":[],"shortcodes":[":doughnut:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍩"},{"base":[127850],"alternates":[],"emoticons":[],"shortcodes":[":cookie:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍪"},{"base":[127855],"alternates":[],"emoticons":[],"shortcodes":[":honey-pot:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍯"},{"base":[129474],"alternates":[],"emoticons":[],"shortcodes":[":salt:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🧂"},{"base":[129480],"alternates":[],"emoticons":[],"shortcodes":[":butter:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🧈"},{"base":[127871],"alternates":[],"emoticons":[],"shortcodes":[":popcorn:"],"animated":true,"directional":false,"group":"Food and drink","emoji":"🍿"},{"base":[129482],"alternates":[],"emoticons":[],"shortcodes":[":ice-cube:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🧊"},{"base":[129753],"alternates":[],"emoticons":[],"shortcodes":[":jar:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🫙"},{"base":[129380],"alternates":[],"emoticons":[],"shortcodes":[":cup-with-straw:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥤"},{"base":[129483],"alternates":[],"emoticons":[],"shortcodes":[":bubble-tea:",":milk-tea:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🧋"},{"base":[129475],"alternates":[],"emoticons":[],"shortcodes":[":beverage-box:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🧃"},{"base":[129371],"alternates":[],"emoticons":[],"shortcodes":[":glass-of-milk:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥛"},{"base":[127868],"alternates":[],"emoticons":[],"shortcodes":[":baby-bottle:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍼"},{"base":[127861],"alternates":[],"emoticons":[],"shortcodes":[":teacup-without-handle:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍵"},{"base":[9749],"alternates":[],"emoticons":[],"shortcodes":[":hot-beverage:"],"animated":true,"directional":false,"group":"Food and drink","emoji":"☕"},{"base":[129750],"alternates":[],"emoticons":[],"shortcodes":[":teapot:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🫖"},{"base":[129481],"alternates":[],"emoticons":[],"shortcodes":[":mate:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🧉"},{"base":[127866],"alternates":[],"emoticons":[],"shortcodes":[":beer-mug:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍺"},{"base":[127867],"alternates":[],"emoticons":[],"shortcodes":[":clinking-beer-mugs:"],"animated":true,"directional":false,"group":"Food and drink","emoji":"🍻"},{"base":[129346],"alternates":[],"emoticons":[],"shortcodes":[":clinking-glasses:"],"animated":true,"directional":false,"group":"Food and drink","emoji":"🥂"},{"base":[127870],"alternates":[],"emoticons":[],"shortcodes":[":bottle-with-popping-cork:"],"animated":true,"directional":false,"group":"Food and drink","emoji":"🍾"},{"base":[127863],"alternates":[],"emoticons":[],"shortcodes":[":wine-glass:"],"animated":true,"directional":false,"group":"Food and drink","emoji":"🍷"},{"base":[129347],"alternates":[],"emoticons":[],"shortcodes":[":tumbler-glass:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥃"},{"base":[129751],"alternates":[],"emoticons":[],"shortcodes":[":pour:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🫗"},{"base":[127864],"alternates":[],"emoticons":[],"shortcodes":[":cocktail-glass:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍸"},{"base":[127865],"alternates":[],"emoticons":[],"shortcodes":[":tropical-drink:"],"animated":true,"directional":false,"group":"Food and drink","emoji":"🍹"},{"base":[127862],"alternates":[],"emoticons":[],"shortcodes":[":sake:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍶"},{"base":[129378],"alternates":[],"emoticons":[],"shortcodes":[":chopsticks:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥢"},{"base":[127860],"alternates":[],"emoticons":[],"shortcodes":[":fork-and-knife:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍴"},{"base":[129348],"alternates":[],"emoticons":[],"shortcodes":[":spoon:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🥄"},{"base":[128298],"alternates":[],"emoticons":[],"shortcodes":[":kitchen-knife:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🔪"},{"base":[127869,65039],"alternates":[],"emoticons":[],"shortcodes":[":fork-and-knife-with-plate:"],"animated":false,"directional":false,"group":"Food and drink","emoji":"🍽️"},{"base":[128721],"alternates":[],"emoticons":[],"shortcodes":[":stop-sign:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛑"},{"base":[128679],"alternates":[],"emoticons":[],"shortcodes":[":construction:"],"animated":true,"directional":false,"group":"Travel and places","emoji":"🚧"},{"base":[128680],"alternates":[],"emoticons":[],"shortcodes":[":police-car-light:"],"animated":true,"directional":false,"group":"Travel and places","emoji":"🚨"},{"base":[9981],"alternates":[],"emoticons":[],"shortcodes":[":fuel-pump:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"⛽"},{"base":[128738,65039],"alternates":[],"emoticons":[],"shortcodes":[":oil-drum:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛢️"},{"base":[129517],"alternates":[],"emoticons":[],"shortcodes":[":compass:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🧭"},{"base":[128734],"alternates":[],"emoticons":[],"shortcodes":[":wheel:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛞"},{"base":[128735],"alternates":[],"emoticons":[],"shortcodes":[":ring-buoy:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛟"},{"base":[9875],"alternates":[],"emoticons":[],"shortcodes":[":anchor:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"⚓"},{"base":[128655],"alternates":[],"emoticons":[],"shortcodes":[":bus-stop:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚏"},{"base":[128647],"alternates":[],"emoticons":[],"shortcodes":[":metro:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚇"},{"base":[128677],"alternates":[],"emoticons":[],"shortcodes":[":horizontal-traffic-light:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚥"},{"base":[128678],"alternates":[],"emoticons":[],"shortcodes":[":vertical-traffic-light:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚦"},{"base":[128756],"alternates":[],"emoticons":[],"shortcodes":[":kick-scooter:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛴"},{"base":[129469],"alternates":[],"emoticons":[],"shortcodes":[":manual-wheelchair:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🦽"},{"base":[129468],"alternates":[],"emoticons":[],"shortcodes":[":motorized-wheelchair:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🦼"},{"base":[129660],"alternates":[],"emoticons":[],"shortcodes":[":crutch:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🩼"},{"base":[128690],"alternates":[],"emoticons":[],"shortcodes":[":bicycle:"],"animated":true,"directional":false,"group":"Travel and places","emoji":"🚲"},{"base":[128757],"alternates":[],"emoticons":[],"shortcodes":[":motor-scooter:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛵"},{"base":[127949,65039],"alternates":[],"emoticons":[],"shortcodes":[":motorcycle:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏍️"},{"base":[128665],"alternates":[],"emoticons":[],"shortcodes":[":sport-utility-vehicle:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚙"},{"base":[128663],"alternates":[],"emoticons":[],"shortcodes":[":automobile:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚗"},{"base":[128763],"alternates":[],"emoticons":[],"shortcodes":[":pickup-truck:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛻"},{"base":[128656],"alternates":[],"emoticons":[],"shortcodes":[":minibus:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚐"},{"base":[128666],"alternates":[],"emoticons":[],"shortcodes":[":delivery-truck:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚚"},{"base":[128667],"alternates":[],"emoticons":[],"shortcodes":[":articulated-lorry:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚛"},{"base":[128668],"alternates":[],"emoticons":[],"shortcodes":[":tractor:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚜"},{"base":[127950,65039],"alternates":[],"emoticons":[],"shortcodes":[":racing-car:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏎️"},{"base":[128658],"alternates":[],"emoticons":[],"shortcodes":[":fire-engine:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚒"},{"base":[128657],"alternates":[],"emoticons":[],"shortcodes":[":ambulance:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚑"},{"base":[128659],"alternates":[],"emoticons":[],"shortcodes":[":police-car:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚓"},{"base":[128661],"alternates":[],"emoticons":[],"shortcodes":[":taxi:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚕"},{"base":[128762],"alternates":[],"emoticons":[],"shortcodes":[":auto-rickshaw:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛺"},{"base":[128652],"alternates":[],"emoticons":[],"shortcodes":[":bus:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚌"},{"base":[128648],"alternates":[],"emoticons":[],"shortcodes":[":light-rail:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚈"},{"base":[128669],"alternates":[],"emoticons":[],"shortcodes":[":monorail:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚝"},{"base":[128645],"alternates":[],"emoticons":[],"shortcodes":[":bullet-train:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚅"},{"base":[128644],"alternates":[],"emoticons":[],"shortcodes":[":high-speed-train:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚄"},{"base":[128642],"alternates":[],"emoticons":[],"shortcodes":[":locomotive:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚂"},{"base":[128643],"alternates":[],"emoticons":[],"shortcodes":[":railway-car:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚃"},{"base":[128651],"alternates":[],"emoticons":[],"shortcodes":[":tram-car:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚋"},{"base":[128654],"alternates":[],"emoticons":[],"shortcodes":[":trolleybus:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚎"},{"base":[128670],"alternates":[],"emoticons":[],"shortcodes":[":mountain-railway:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚞"},{"base":[128650],"alternates":[],"emoticons":[],"shortcodes":[":tram:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚊"},{"base":[128649],"alternates":[],"emoticons":[],"shortcodes":[":station:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚉"},{"base":[128653],"alternates":[],"emoticons":[],"shortcodes":[":bus-front:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚍"},{"base":[128660],"alternates":[],"emoticons":[],"shortcodes":[":police-car-front:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚔"},{"base":[128664],"alternates":[],"emoticons":[],"shortcodes":[":automobile-front:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚘"},{"base":[128662],"alternates":[],"emoticons":[],"shortcodes":[":taxi-front:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚖"},{"base":[128646],"alternates":[],"emoticons":[],"shortcodes":[":train:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚆"},{"base":[128674],"alternates":[],"emoticons":[],"shortcodes":[":ship:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚢"},{"base":[128755,65039],"alternates":[],"emoticons":[],"shortcodes":[":passenger-ship:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛳️"},{"base":[128741,65039],"alternates":[],"emoticons":[],"shortcodes":[":motor-boat:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛥️"},{"base":[128676],"alternates":[],"emoticons":[],"shortcodes":[":speedboat:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚤"},{"base":[9972,65039],"alternates":[],"emoticons":[],"shortcodes":[":ferry:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"⛴️"},{"base":[9973],"alternates":[],"emoticons":[],"shortcodes":[":sailboat:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"⛵"},{"base":[128758],"alternates":[],"emoticons":[],"shortcodes":[":canoe:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛶"},{"base":[128671],"alternates":[],"emoticons":[],"shortcodes":[":suspension-railway:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚟"},{"base":[128672],"alternates":[],"emoticons":[],"shortcodes":[":mountain-cableway:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚠"},{"base":[128673],"alternates":[],"emoticons":[],"shortcodes":[":aerial-tramway:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚡"},{"base":[128641],"alternates":[],"emoticons":[],"shortcodes":[":helicopter:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🚁"},{"base":[128760],"alternates":[],"emoticons":[],"shortcodes":[":flying-saucer:"],"animated":true,"directional":false,"group":"Travel and places","emoji":"🛸"},{"base":[128640],"alternates":[],"emoticons":[],"shortcodes":[":rocket:"],"animated":true,"directional":false,"group":"Travel and places","emoji":"🚀"},{"base":[9992,65039],"alternates":[],"emoticons":[],"shortcodes":[":airplane:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"✈️"},{"base":[128747],"alternates":[],"emoticons":[],"shortcodes":[":airplane-departure:"],"animated":true,"directional":false,"group":"Travel and places","emoji":"🛫"},{"base":[128748],"alternates":[],"emoticons":[],"shortcodes":[":airplane-arrival:"],"animated":true,"directional":false,"group":"Travel and places","emoji":"🛬"},{"base":[128745,65039],"alternates":[],"emoticons":[],"shortcodes":[":small-airplane:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛩️"},{"base":[128733],"alternates":[],"emoticons":[],"shortcodes":[":slide:",":playground:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛝"},{"base":[127906],"alternates":[],"emoticons":[],"shortcodes":[":roller-coaster:"],"animated":true,"directional":false,"group":"Travel and places","emoji":"🎢"},{"base":[127905],"alternates":[],"emoticons":[],"shortcodes":[":ferris-wheel:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🎡"},{"base":[127904],"alternates":[],"emoticons":[],"shortcodes":[":carousel-horse:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🎠"},{"base":[127914],"alternates":[],"emoticons":[],"shortcodes":[":circus-tent:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🎪"},{"base":[128508],"alternates":[],"emoticons":[],"shortcodes":[":tokyo-tower:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🗼"},{"base":[128509],"alternates":[],"emoticons":[],"shortcodes":[":statue-of-Liberty:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🗽"},{"base":[128511],"alternates":[],"emoticons":[],"shortcodes":[":moai:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🗿"},{"base":[128507],"alternates":[],"emoticons":[],"shortcodes":[":mount-fuji:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🗻"},{"base":[127963,65039],"alternates":[],"emoticons":[],"shortcodes":[":classical-building:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏛️"},{"base":[128136],"alternates":[],"emoticons":[],"shortcodes":[":barber-pole:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"💈"},{"base":[9970],"alternates":[],"emoticons":[],"shortcodes":[":fountain:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"⛲"},{"base":[9961,65039],"alternates":[],"emoticons":[],"shortcodes":[":shinto-shrine:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"⛩️"},{"base":[128333],"alternates":[],"emoticons":[],"shortcodes":[":synagogue:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🕍"},{"base":[128332],"alternates":[],"emoticons":[],"shortcodes":[":mosque:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🕌"},{"base":[128331],"alternates":[],"emoticons":[],"shortcodes":[":kaaba:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🕋"},{"base":[128725],"alternates":[],"emoticons":[],"shortcodes":[":hindu-temple:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛕"},{"base":[9962],"alternates":[],"emoticons":[],"shortcodes":[":church:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"⛪"},{"base":[128146],"alternates":[],"emoticons":[],"shortcodes":[":wedding:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"💒"},{"base":[127977],"alternates":[],"emoticons":[],"shortcodes":[":love-hotel:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏩"},{"base":[127983],"alternates":[],"emoticons":[],"shortcodes":[":Japanese-castle:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏯"},{"base":[127984],"alternates":[],"emoticons":[],"shortcodes":[":castle:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏰"},{"base":[127959,65039],"alternates":[],"emoticons":[],"shortcodes":[":construction-building:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏗️"},{"base":[127970],"alternates":[],"emoticons":[],"shortcodes":[":office-building:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏢"},{"base":[127981],"alternates":[],"emoticons":[],"shortcodes":[":factory:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏭"},{"base":[127980],"alternates":[],"emoticons":[],"shortcodes":[":department-store:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏬"},{"base":[127978],"alternates":[],"emoticons":[],"shortcodes":[":convenience-store:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏪"},{"base":[127967,65039],"alternates":[],"emoticons":[],"shortcodes":[":stadium:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏟️"},{"base":[127974],"alternates":[],"emoticons":[],"shortcodes":[":bank:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏦"},{"base":[127979],"alternates":[],"emoticons":[],"shortcodes":[":school:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏫"},{"base":[127976],"alternates":[],"emoticons":[],"shortcodes":[":hotel:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏨"},{"base":[127971],"alternates":[],"emoticons":[],"shortcodes":[":Japanese-post-office:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏣"},{"base":[127972],"alternates":[],"emoticons":[],"shortcodes":[":post-office:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏤"},{"base":[127973],"alternates":[],"emoticons":[],"shortcodes":[":hospital:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏥"},{"base":[127962,65039],"alternates":[],"emoticons":[],"shortcodes":[":derelict-house:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏚️"},{"base":[127968],"alternates":[],"emoticons":[],"shortcodes":[":house:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏠"},{"base":[127969],"alternates":[],"emoticons":[],"shortcodes":[":house-with-garden:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏡"},{"base":[127960,65039],"alternates":[],"emoticons":[],"shortcodes":[":houses:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏘️"},{"base":[128726],"alternates":[],"emoticons":[],"shortcodes":[":hut:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛖"},{"base":[9978],"alternates":[],"emoticons":[],"shortcodes":[":tent:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"⛺"},{"base":[127957,65039],"alternates":[],"emoticons":[],"shortcodes":[":camping:"],"animated":true,"directional":false,"group":"Travel and places","emoji":"🏕️"},{"base":[9969,65039],"alternates":[],"emoticons":[],"shortcodes":[":umbrella-on-ground:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"⛱️"},{"base":[127961,65039],"alternates":[],"emoticons":[],"shortcodes":[":cityscape:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🏙️"},{"base":[127750],"alternates":[],"emoticons":[],"shortcodes":[":sunset-cityscape:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🌆"},{"base":[127751],"alternates":[],"emoticons":[],"shortcodes":[":sunset:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🌇"},{"base":[127747],"alternates":[],"emoticons":[],"shortcodes":[":night-with-stars:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🌃"},{"base":[127753],"alternates":[],"emoticons":[],"shortcodes":[":bridge-at-night:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🌉"},{"base":[127745],"alternates":[],"emoticons":[],"shortcodes":[":foggy:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🌁"},{"base":[128740,65039],"alternates":[],"emoticons":[],"shortcodes":[":railway-track:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛤️"},{"base":[128739,65039],"alternates":[],"emoticons":[],"shortcodes":[":motorway:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🛣️"},{"base":[128510],"alternates":[],"emoticons":[],"shortcodes":[":map-of-Japan:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🗾"},{"base":[128506,65039],"alternates":[],"emoticons":[],"shortcodes":[":world-map:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🗺️"},{"base":[127760],"alternates":[],"emoticons":[],"shortcodes":[":globe-with-meridians:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🌐"},{"base":[128186],"alternates":[],"emoticons":[],"shortcodes":[":seat:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"💺"},{"base":[129523],"alternates":[],"emoticons":[],"shortcodes":[":luggage:"],"animated":false,"directional":false,"group":"Travel and places","emoji":"🧳"},{"base":[127881],"alternates":[],"emoticons":[],"shortcodes":[":party-popper:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🎉"},{"base":[127882],"alternates":[],"emoticons":[],"shortcodes":[":confetti-ball:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🎊"},{"base":[127880],"alternates":[],"emoticons":[],"shortcodes":[":balloon:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🎈"},{"base":[127874],"alternates":[],"emoticons":[],"shortcodes":[":birthday-cake:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🎂"},{"base":[127872],"alternates":[],"emoticons":[],"shortcodes":[":ribbon:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎀"},{"base":[127873],"alternates":[],"emoticons":[],"shortcodes":[":wrapped-gift:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🎁"},{"base":[127879],"alternates":[],"emoticons":[],"shortcodes":[":sparkler:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎇"},{"base":[127878],"alternates":[],"emoticons":[],"shortcodes":[":fireworks:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🎆"},{"base":[129512],"alternates":[],"emoticons":[],"shortcodes":[":firecracker:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🧨"},{"base":[129511],"alternates":[],"emoticons":[],"shortcodes":[":red-envelope:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🧧"},{"base":[129684],"alternates":[],"emoticons":[],"shortcodes":[":diya-lamp:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🪔"},{"base":[129669],"alternates":[],"emoticons":[],"shortcodes":[":piñata:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🪅"},{"base":[129705],"alternates":[],"emoticons":[],"shortcodes":[":mirror-ball:",":disco-ball:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🪩"},{"base":[127888],"alternates":[],"emoticons":[],"shortcodes":[":wind-chime:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎐"},{"base":[127887],"alternates":[],"emoticons":[],"shortcodes":[":carp-streamer:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎏"},{"base":[127886],"alternates":[],"emoticons":[],"shortcodes":[":Japanese-dolls:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎎"},{"base":[127889],"alternates":[],"emoticons":[],"shortcodes":[":moon-viewing-ceremony:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎑"},{"base":[127885],"alternates":[],"emoticons":[],"shortcodes":[":pine-decoration:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎍"},{"base":[127883],"alternates":[],"emoticons":[],"shortcodes":[":tanabata-tree:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎋"},{"base":[127876],"alternates":[],"emoticons":[],"shortcodes":[":Christmas-tree:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎄"},{"base":[127875],"alternates":[],"emoticons":[],"shortcodes":[":jack-o-lantern:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎃"},{"base":[127895,65039],"alternates":[],"emoticons":[],"shortcodes":[":reminder-ribbon:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎗️"},{"base":[129351],"alternates":[],"emoticons":[],"shortcodes":[":gold-medal:",":1st-place-medal:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🥇"},{"base":[129352],"alternates":[],"emoticons":[],"shortcodes":[":silver-medal:",":2nd-place-medal:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🥈"},{"base":[129353],"alternates":[],"emoticons":[],"shortcodes":[":bronze-medal:",":3rd-place-medal:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🥉"},{"base":[127941],"alternates":[],"emoticons":[],"shortcodes":[":medal:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🏅"},{"base":[127894,65039],"alternates":[],"emoticons":[],"shortcodes":[":military-medal:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎖️"},{"base":[127942],"alternates":[],"emoticons":[],"shortcodes":[":trophy:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🏆"},{"base":[128226],"alternates":[],"emoticons":[],"shortcodes":[":loudspeaker:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"📢"},{"base":[9917],"alternates":[],"emoticons":[],"shortcodes":[":soccer-ball:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"⚽"},{"base":[9918],"alternates":[],"emoticons":[],"shortcodes":[":baseball:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"⚾"},{"base":[129358],"alternates":[],"emoticons":[],"shortcodes":[":softball:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🥎"},{"base":[127936],"alternates":[],"emoticons":[],"shortcodes":[":basketball:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🏀"},{"base":[127952],"alternates":[],"emoticons":[],"shortcodes":[":volleyball:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🏐"},{"base":[127944],"alternates":[],"emoticons":[],"shortcodes":[":american-football:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🏈"},{"base":[127945],"alternates":[],"emoticons":[],"shortcodes":[":rugby-football:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🏉"},{"base":[129349],"alternates":[],"emoticons":[],"shortcodes":[":goal-net:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🥅"},{"base":[127934],"alternates":[],"emoticons":[],"shortcodes":[":tennis:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🎾"},{"base":[127992],"alternates":[],"emoticons":[],"shortcodes":[":badminton:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🏸"},{"base":[129357],"alternates":[],"emoticons":[],"shortcodes":[":lacrosse:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🥍"},{"base":[127951],"alternates":[],"emoticons":[],"shortcodes":[":cricket-game:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🏏"},{"base":[127953],"alternates":[],"emoticons":[],"shortcodes":[":field-hockey:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🏑"},{"base":[127954],"alternates":[],"emoticons":[],"shortcodes":[":ice-hockey:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🏒"},{"base":[129356],"alternates":[],"emoticons":[],"shortcodes":[":curling-stone:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🥌"},{"base":[128759],"alternates":[],"emoticons":[],"shortcodes":[":sled:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🛷"},{"base":[127935],"alternates":[],"emoticons":[],"shortcodes":[":skis:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎿"},{"base":[9976,65039],"alternates":[],"emoticons":[],"shortcodes":[":ice-skate:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"⛸️"},{"base":[128764],"alternates":[],"emoticons":[],"shortcodes":[":roller-skates:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🛼"},{"base":[129648],"alternates":[],"emoticons":[],"shortcodes":[":ballet-shoes:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🩰"},{"base":[128761],"alternates":[],"emoticons":[],"shortcodes":[":skateboard:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🛹"},{"base":[9971],"alternates":[],"emoticons":[],"shortcodes":[":flag-in-hole:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"⛳"},{"base":[127919],"alternates":[],"emoticons":[],"shortcodes":[":direct-hit:",":target:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🎯"},{"base":[127993],"alternates":[],"emoticons":[],"shortcodes":[":bow-and-arrow:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🏹"},{"base":[129359],"alternates":[],"emoticons":[],"shortcodes":[":flying-disc:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🥏"},{"base":[129667],"alternates":[],"emoticons":[],"shortcodes":[":boomerang:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🪃"},{"base":[129665],"alternates":[],"emoticons":[],"shortcodes":[":kite:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🪁"},{"base":[127907],"alternates":[],"emoticons":[],"shortcodes":[":fishing-pole:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎣"},{"base":[129343],"alternates":[],"emoticons":[],"shortcodes":[":diving-mask:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🤿"},{"base":[129649],"alternates":[],"emoticons":[],"shortcodes":[":one-piece-swimsuit:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🩱"},{"base":[127933],"alternates":[],"emoticons":[],"shortcodes":[":running-shirt:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎽"},{"base":[129355],"alternates":[],"emoticons":[],"shortcodes":[":martial-arts-uniform:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🥋"},{"base":[129354],"alternates":[],"emoticons":[],"shortcodes":[":boxing-glove:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🥊"},{"base":[127921],"alternates":[],"emoticons":[],"shortcodes":[":8-ball:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎱"},{"base":[127955],"alternates":[],"emoticons":[],"shortcodes":[":ping-pong:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🏓"},{"base":[127923],"alternates":[],"emoticons":[],"shortcodes":[":bowling:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🎳"},{"base":[9823,65039],"alternates":[],"emoticons":[],"shortcodes":[":chess-pawn:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"♟️"},{"base":[129664],"alternates":[],"emoticons":[],"shortcodes":[":yo-yo:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🪀"},{"base":[129513],"alternates":[],"emoticons":[],"shortcodes":[":jigsaw:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🧩"},{"base":[127918],"alternates":[],"emoticons":[],"shortcodes":[":video-game:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎮"},{"base":[128377,65039],"alternates":[],"emoticons":[],"shortcodes":[":joystick:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🕹️"},{"base":[128126],"alternates":[],"emoticons":[],"shortcodes":[":alien-monster:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"👾"},{"base":[128299],"alternates":[],"emoticons":[],"shortcodes":[":pistol:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🔫"},{"base":[127922],"alternates":[],"emoticons":[],"shortcodes":[":die:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🎲"},{"base":[127920],"alternates":[],"emoticons":[],"shortcodes":[":slot-machine:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🎰"},{"base":[127924],"alternates":[],"emoticons":[],"shortcodes":[":flower-playing-cards:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎴"},{"base":[126980],"alternates":[],"emoticons":[],"shortcodes":[":mahjong-red-dragon:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🀄"},{"base":[127183],"alternates":[],"emoticons":[],"shortcodes":[":joker:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🃏"},{"base":[129668],"alternates":[],"emoticons":[],"shortcodes":[":wand:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🪄"},{"base":[127913],"alternates":[],"emoticons":[],"shortcodes":[":game-die:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎩"},{"base":[128247],"alternates":[],"emoticons":[],"shortcodes":[":camera:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"📷"},{"base":[128248],"alternates":[],"emoticons":[],"shortcodes":[":camera-flash:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"📸"},{"base":[128444,65039],"alternates":[],"emoticons":[],"shortcodes":[":framed-picture:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🖼️"},{"base":[127912],"alternates":[],"emoticons":[],"shortcodes":[":artist-palette:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎨"},{"base":[128396,65039],"alternates":[],"emoticons":[],"shortcodes":[":paintbrush:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🖌️"},{"base":[128397,65039],"alternates":[],"emoticons":[],"shortcodes":[":crayon:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🖍️"},{"base":[129697],"alternates":[],"emoticons":[],"shortcodes":[":needle:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🪡"},{"base":[129525],"alternates":[],"emoticons":[],"shortcodes":[":thread:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🧵"},{"base":[129526],"alternates":[],"emoticons":[],"shortcodes":[":yarn:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🧶"},{"base":[127929],"alternates":[],"emoticons":[],"shortcodes":[":piano:",":musical-keyboard:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎹"},{"base":[127927],"alternates":[],"emoticons":[],"shortcodes":[":saxophone:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎷"},{"base":[127930],"alternates":[],"emoticons":[],"shortcodes":[":trumpet:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎺"},{"base":[127928],"alternates":[],"emoticons":[],"shortcodes":[":guitar:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎸"},{"base":[129685],"alternates":[],"emoticons":[],"shortcodes":[":banjo:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🪕"},{"base":[127931],"alternates":[],"emoticons":[],"shortcodes":[":violin:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🎻"},{"base":[129688],"alternates":[],"emoticons":[],"shortcodes":[":long-drum:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🪘"},{"base":[129345],"alternates":[],"emoticons":[],"shortcodes":[":drum:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🥁"},{"base":[129671],"alternates":[],"emoticons":[],"shortcodes":[":maracas:"],"animated":true,"directional":false,"group":"Activities and events","emoji":"🪇"},{"base":[129672],"alternates":[],"emoticons":[],"shortcodes":[":flute:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🪈"},{"base":[129687],"alternates":[],"emoticons":[],"shortcodes":[":accordion:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🪗"},{"base":[127908],"alternates":[],"emoticons":[],"shortcodes":[":microphone:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎤"},{"base":[127911],"alternates":[],"emoticons":[],"shortcodes":[":headphone:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎧"},{"base":[127898,65039],"alternates":[],"emoticons":[],"shortcodes":[":level-slider:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎚️"},{"base":[127899,65039],"alternates":[],"emoticons":[],"shortcodes":[":control-knobs:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎛️"},{"base":[127897,65039],"alternates":[],"emoticons":[],"shortcodes":[":studio-microphone:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎙️"},{"base":[128251],"alternates":[],"emoticons":[],"shortcodes":[":radio:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"📻"},{"base":[128250],"alternates":[],"emoticons":[],"shortcodes":[":television:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"📺"},{"base":[128252],"alternates":[],"emoticons":[],"shortcodes":[":videocassette:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"📼"},{"base":[128249],"alternates":[],"emoticons":[],"shortcodes":[":video-camera:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"📹"},{"base":[128253,65039],"alternates":[],"emoticons":[],"shortcodes":[":film-projector:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"📽️"},{"base":[127909],"alternates":[],"emoticons":[],"shortcodes":[":movie-camera:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎥"},{"base":[127902,65039],"alternates":[],"emoticons":[],"shortcodes":[":film:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎞️"},{"base":[127916],"alternates":[],"emoticons":[],"shortcodes":[":clapper:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎬"},{"base":[127917],"alternates":[],"emoticons":[],"shortcodes":[":performing-arts:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎭"},{"base":[127915],"alternates":[],"emoticons":[],"shortcodes":[":ticket:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎫"},{"base":[127903,65039],"alternates":[],"emoticons":[],"shortcodes":[":admission-tickets:"],"animated":false,"directional":false,"group":"Activities and events","emoji":"🎟️"},{"base":[128241],"alternates":[],"emoticons":[],"shortcodes":[":mobile-phone:"],"animated":false,"directional":false,"group":"Objects","emoji":"📱"},{"base":[9742,65039],"alternates":[],"emoticons":[],"shortcodes":[":telephone:"],"animated":false,"directional":false,"group":"Objects","emoji":"☎️"},{"base":[128222],"alternates":[],"emoticons":[],"shortcodes":[":telephone-receiver:"],"animated":false,"directional":false,"group":"Objects","emoji":"📞"},{"base":[128223],"alternates":[],"emoticons":[],"shortcodes":[":pager:"],"animated":false,"directional":false,"group":"Objects","emoji":"📟"},{"base":[128224],"alternates":[],"emoticons":[],"shortcodes":[":fax-machine:"],"animated":false,"directional":false,"group":"Objects","emoji":"📠"},{"base":[128268],"alternates":[],"emoticons":[],"shortcodes":[":electric-plug:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔌"},{"base":[128267],"alternates":[],"emoticons":[],"shortcodes":[":battery-full:"],"animated":true,"directional":false,"group":"Objects","emoji":"🔋"},{"base":[129707],"alternates":[],"emoticons":[],"shortcodes":[":battery-low:"],"animated":true,"directional":false,"group":"Objects","emoji":"🪫"},{"base":[128434,65039],"alternates":[],"emoticons":[],"shortcodes":[":trackball:"],"animated":false,"directional":false,"group":"Objects","emoji":"🖲️"},{"base":[128189],"alternates":[],"emoticons":[],"shortcodes":[":computer-disk:"],"animated":false,"directional":false,"group":"Objects","emoji":"💽"},{"base":[128190],"alternates":[],"emoticons":[],"shortcodes":[":floppy-disk:"],"animated":false,"directional":false,"group":"Objects","emoji":"💾"},{"base":[128191],"alternates":[],"emoticons":[],"shortcodes":[":optical-disk:"],"animated":false,"directional":false,"group":"Objects","emoji":"💿"},{"base":[128192],"alternates":[],"emoticons":[],"shortcodes":[":dvd:"],"animated":false,"directional":false,"group":"Objects","emoji":"📀"},{"base":[128421,65039],"alternates":[],"emoticons":[],"shortcodes":[":desktop-computer:"],"animated":false,"directional":false,"group":"Objects","emoji":"🖥️"},{"base":[128187],"alternates":[],"emoticons":[],"shortcodes":[":laptop-computer:"],"animated":false,"directional":false,"group":"Objects","emoji":"💻"},{"base":[9000,65039],"alternates":[],"emoticons":[],"shortcodes":[":keyboard:"],"animated":false,"directional":false,"group":"Objects","emoji":"⌨️"},{"base":[128424,65039],"alternates":[],"emoticons":[],"shortcodes":[":printer:"],"animated":false,"directional":false,"group":"Objects","emoji":"🖨️"},{"base":[128433,65039],"alternates":[],"emoticons":[],"shortcodes":[":computer-mouse:"],"animated":false,"directional":false,"group":"Objects","emoji":"🖱️"},{"base":[129689],"alternates":[],"emoticons":[],"shortcodes":[":coin:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪙"},{"base":[128184],"alternates":[],"emoticons":[],"shortcodes":[":money-with-wings:"],"animated":true,"directional":false,"group":"Objects","emoji":"💸"},{"base":[128181],"alternates":[],"emoticons":[],"shortcodes":[":dollar:"],"animated":false,"directional":false,"group":"Objects","emoji":"💵"},{"base":[128180],"alternates":[],"emoticons":[],"shortcodes":[":yen:"],"animated":false,"directional":false,"group":"Objects","emoji":"💴"},{"base":[128182],"alternates":[],"emoticons":[],"shortcodes":[":euro:"],"animated":false,"directional":false,"group":"Objects","emoji":"💶"},{"base":[128183],"alternates":[],"emoticons":[],"shortcodes":[":pound:"],"animated":false,"directional":false,"group":"Objects","emoji":"💷"},{"base":[128179],"alternates":[],"emoticons":[],"shortcodes":[":credit-card:"],"animated":false,"directional":false,"group":"Objects","emoji":"💳"},{"base":[128176],"alternates":[],"emoticons":[],"shortcodes":[":money-bag:"],"animated":false,"directional":false,"group":"Objects","emoji":"💰"},{"base":[129534],"alternates":[],"emoticons":[],"shortcodes":[":receipt:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧾"},{"base":[129518],"alternates":[],"emoticons":[],"shortcodes":[":abacus:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧮"},{"base":[9878,65039],"alternates":[],"emoticons":[],"shortcodes":[":balance-scale:"],"animated":true,"directional":false,"group":"Objects","emoji":"⚖️"},{"base":[128722],"alternates":[],"emoticons":[],"shortcodes":[":shopping-cart:"],"animated":false,"directional":false,"group":"Objects","emoji":"🛒"},{"base":[128717,65039],"alternates":[],"emoticons":[],"shortcodes":[":shopping-bags:"],"animated":false,"directional":false,"group":"Objects","emoji":"🛍️"},{"base":[128367,65039],"alternates":[],"emoticons":[],"shortcodes":[":candle:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕯️"},{"base":[128161],"alternates":[],"emoticons":[],"shortcodes":[":light-bulb:"],"animated":true,"directional":false,"group":"Objects","emoji":"💡"},{"base":[128294],"alternates":[],"emoticons":[],"shortcodes":[":flashlight:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔦"},{"base":[127982],"alternates":[],"emoticons":[],"shortcodes":[":red-paper-lantern:"],"animated":false,"directional":false,"group":"Objects","emoji":"🏮"},{"base":[129521],"alternates":[],"emoticons":[],"shortcodes":[":bricks:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧱"},{"base":[129695],"alternates":[],"emoticons":[],"shortcodes":[":window:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪟"},{"base":[129694],"alternates":[],"emoticons":[],"shortcodes":[":mirror:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪞"},{"base":[128682],"alternates":[],"emoticons":[],"shortcodes":[":door:"],"animated":false,"directional":false,"group":"Objects","emoji":"🚪"},{"base":[129681],"alternates":[],"emoticons":[],"shortcodes":[":chair:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪑"},{"base":[128719,65039],"alternates":[],"emoticons":[],"shortcodes":[":bed:"],"animated":false,"directional":false,"group":"Objects","emoji":"🛏️"},{"base":[128715,65039],"alternates":[],"emoticons":[],"shortcodes":[":couch-and-lamp:"],"animated":false,"directional":false,"group":"Objects","emoji":"🛋️"},{"base":[128703],"alternates":[],"emoticons":[],"shortcodes":[":shower:"],"animated":false,"directional":false,"group":"Objects","emoji":"🚿"},{"base":[128705],"alternates":[],"emoticons":[],"shortcodes":[":bathtub:"],"animated":false,"directional":false,"group":"Objects","emoji":"🛁"},{"base":[128701],"alternates":[],"emoticons":[],"shortcodes":[":toilet:"],"animated":false,"directional":false,"group":"Objects","emoji":"🚽"},{"base":[129531],"alternates":[],"emoticons":[],"shortcodes":[":roll-of-paper:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧻"},{"base":[129696],"alternates":[],"emoticons":[],"shortcodes":[":plunger:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪠"},{"base":[129528],"alternates":[],"emoticons":[],"shortcodes":[":teddy-bear:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧸"},{"base":[129670],"alternates":[],"emoticons":[],"shortcodes":[":nesting-doll:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪆"},{"base":[129527],"alternates":[],"emoticons":[],"shortcodes":[":safety-pin:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧷"},{"base":[129698],"alternates":[],"emoticons":[],"shortcodes":[":knot:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪢"},{"base":[129529],"alternates":[],"emoticons":[],"shortcodes":[":broom:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧹"},{"base":[129524],"alternates":[],"emoticons":[],"shortcodes":[":lotion-bottle:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧴"},{"base":[129533],"alternates":[],"emoticons":[],"shortcodes":[":sponge:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧽"},{"base":[129532],"alternates":[],"emoticons":[],"shortcodes":[":soap:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧼"},{"base":[129701],"alternates":[],"emoticons":[],"shortcodes":[":toothbrush:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪥"},{"base":[129682],"alternates":[],"emoticons":[],"shortcodes":[":razor:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪒"},{"base":[129710],"alternates":[],"emoticons":[],"shortcodes":[":hair-pick:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪮"},{"base":[129530],"alternates":[],"emoticons":[],"shortcodes":[":basket:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧺"},{"base":[129510],"alternates":[],"emoticons":[],"shortcodes":[":socks:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧦"},{"base":[129508],"alternates":[],"emoticons":[],"shortcodes":[":gloves:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧤"},{"base":[129507],"alternates":[],"emoticons":[],"shortcodes":[":scarf:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧣"},{"base":[128086],"alternates":[],"emoticons":[],"shortcodes":[":jeans:"],"animated":false,"directional":false,"group":"Objects","emoji":"👖"},{"base":[128085],"alternates":[],"emoticons":[],"shortcodes":[":t-shirt:"],"animated":false,"directional":false,"group":"Objects","emoji":"👕"},{"base":[127933],"alternates":[],"emoticons":[],"shortcodes":[":running-shirt:"],"animated":false,"directional":false,"group":"Objects","emoji":"🎽"},{"base":[128090],"alternates":[],"emoticons":[],"shortcodes":[":woman’s-clothes:"],"animated":false,"directional":false,"group":"Objects","emoji":"👚"},{"base":[128084],"alternates":[],"emoticons":[],"shortcodes":[":necktie:"],"animated":false,"directional":false,"group":"Objects","emoji":"👔"},{"base":[128087],"alternates":[],"emoticons":[],"shortcodes":[":dress:"],"animated":false,"directional":false,"group":"Objects","emoji":"👗"},{"base":[128088],"alternates":[],"emoticons":[],"shortcodes":[":kimono:"],"animated":false,"directional":false,"group":"Objects","emoji":"👘"},{"base":[129403],"alternates":[],"emoticons":[],"shortcodes":[":sari:"],"animated":false,"directional":false,"group":"Objects","emoji":"🥻"},{"base":[129649],"alternates":[],"emoticons":[],"shortcodes":[":one-piece-swimsuit:"],"animated":false,"directional":false,"group":"Objects","emoji":"🩱"},{"base":[128089],"alternates":[],"emoticons":[],"shortcodes":[":bikini:"],"animated":false,"directional":false,"group":"Objects","emoji":"👙"},{"base":[129651],"alternates":[],"emoticons":[],"shortcodes":[":shorts:"],"animated":false,"directional":false,"group":"Objects","emoji":"🩳"},{"base":[129650],"alternates":[],"emoticons":[],"shortcodes":[":swim-brief:"],"animated":false,"directional":false,"group":"Objects","emoji":"🩲"},{"base":[129509],"alternates":[],"emoticons":[],"shortcodes":[":coat:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧥"},{"base":[129404],"alternates":[],"emoticons":[],"shortcodes":[":lab-coat:"],"animated":false,"directional":false,"group":"Objects","emoji":"🥼"},{"base":[129466],"alternates":[],"emoticons":[],"shortcodes":[":safety-vest:"],"animated":false,"directional":false,"group":"Objects","emoji":"🦺"},{"base":[9937,65039],"alternates":[],"emoticons":[],"shortcodes":[":rescue-worker’s-helmet:"],"animated":false,"directional":false,"group":"Objects","emoji":"⛑️"},{"base":[129686],"alternates":[],"emoticons":[],"shortcodes":[":military-helmet:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪖"},{"base":[127891],"alternates":[],"emoticons":[],"shortcodes":[":graduation-cap:"],"animated":true,"directional":false,"group":"Objects","emoji":"🎓"},{"base":[127913],"alternates":[],"emoticons":[],"shortcodes":[":top-hat:"],"animated":false,"directional":false,"group":"Objects","emoji":"🎩"},{"base":[128082],"alternates":[],"emoticons":[],"shortcodes":[":woman’s-hat:"],"animated":false,"directional":false,"group":"Objects","emoji":"👒"},{"base":[129506],"alternates":[],"emoticons":[],"shortcodes":[":billed-cap:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧢"},{"base":[128081],"alternates":[],"emoticons":[],"shortcodes":[":crown:"],"animated":false,"directional":false,"group":"Objects","emoji":"👑"},{"base":[129709],"alternates":[],"emoticons":[],"shortcodes":[":fan:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪭"},{"base":[127890],"alternates":[],"emoticons":[],"shortcodes":[":school-backpack:"],"animated":false,"directional":false,"group":"Objects","emoji":"🎒"},{"base":[128093],"alternates":[],"emoticons":[],"shortcodes":[":clutch-bag:"],"animated":false,"directional":false,"group":"Objects","emoji":"👝"},{"base":[128091],"alternates":[],"emoticons":[],"shortcodes":[":purse:"],"animated":false,"directional":false,"group":"Objects","emoji":"👛"},{"base":[128092],"alternates":[],"emoticons":[],"shortcodes":[":handbag:"],"animated":false,"directional":false,"group":"Objects","emoji":"👜"},{"base":[128188],"alternates":[],"emoticons":[],"shortcodes":[":briefcase:"],"animated":false,"directional":false,"group":"Objects","emoji":"💼"},{"base":[129523],"alternates":[],"emoticons":[],"shortcodes":[":luggage:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧳"},{"base":[9730,65039],"alternates":[],"emoticons":[],"shortcodes":[":umbrella:"],"animated":true,"directional":false,"group":"Objects","emoji":"☂️"},{"base":[127746],"alternates":[],"emoticons":[],"shortcodes":[":closed-umbrella:"],"animated":false,"directional":false,"group":"Objects","emoji":"🌂"},{"base":[128141],"alternates":[],"emoticons":[],"shortcodes":[":ring:"],"animated":false,"directional":false,"group":"Objects","emoji":"💍"},{"base":[128142],"alternates":[],"emoticons":[],"shortcodes":[":gem-stone:"],"animated":true,"directional":false,"group":"Objects","emoji":"💎"},{"base":[128132],"alternates":[],"emoticons":[],"shortcodes":[":lipstick:"],"animated":false,"directional":false,"group":"Objects","emoji":"💄"},{"base":[128096],"alternates":[],"emoticons":[],"shortcodes":[":high-heeled-shoe:"],"animated":false,"directional":false,"group":"Objects","emoji":"👠"},{"base":[128095],"alternates":[],"emoticons":[],"shortcodes":[":running-shoe:"],"animated":false,"directional":false,"group":"Objects","emoji":"👟"},{"base":[128094],"alternates":[],"emoticons":[],"shortcodes":[":man’s-shoe:"],"animated":false,"directional":false,"group":"Objects","emoji":"👞"},{"base":[129407],"alternates":[],"emoticons":[],"shortcodes":[":flat-shoe:"],"animated":false,"directional":false,"group":"Objects","emoji":"🥿"},{"base":[129652],"alternates":[],"emoticons":[],"shortcodes":[":flip-flop:",":thong-sandal:"],"animated":false,"directional":false,"group":"Objects","emoji":"🩴"},{"base":[128097],"alternates":[],"emoticons":[],"shortcodes":[":sandal:"],"animated":false,"directional":false,"group":"Objects","emoji":"👡"},{"base":[128098],"alternates":[],"emoticons":[],"shortcodes":[":boot:"],"animated":false,"directional":false,"group":"Objects","emoji":"👢"},{"base":[129406],"alternates":[],"emoticons":[],"shortcodes":[":hiking-boot:"],"animated":false,"directional":false,"group":"Objects","emoji":"🥾"},{"base":[129455],"alternates":[],"emoticons":[],"shortcodes":[":probing-cane:"],"animated":false,"directional":false,"group":"Objects","emoji":"🦯"},{"base":[128374,65039],"alternates":[],"emoticons":[],"shortcodes":[":sunglasses:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕶️"},{"base":[128083],"alternates":[],"emoticons":[],"shortcodes":[":glasses:"],"animated":false,"directional":false,"group":"Objects","emoji":"👓"},{"base":[129405],"alternates":[],"emoticons":[],"shortcodes":[":goggles:"],"animated":false,"directional":false,"group":"Objects","emoji":"🥽"},{"base":[9879,65039],"alternates":[],"emoticons":[],"shortcodes":[":alembic:"],"animated":false,"directional":false,"group":"Objects","emoji":"⚗️"},{"base":[129515],"alternates":[],"emoticons":[],"shortcodes":[":petri-dish:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧫"},{"base":[129514],"alternates":[],"emoticons":[],"shortcodes":[":test-tube:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧪"},{"base":[127777,65039],"alternates":[],"emoticons":[],"shortcodes":[":thermometer:"],"animated":false,"directional":false,"group":"Objects","emoji":"🌡️"},{"base":[128137],"alternates":[],"emoticons":[],"shortcodes":[":syringe:"],"animated":false,"directional":false,"group":"Objects","emoji":"💉"},{"base":[128138],"alternates":[],"emoticons":[],"shortcodes":[":pill:"],"animated":false,"directional":false,"group":"Objects","emoji":"💊"},{"base":[129657],"alternates":[],"emoticons":[],"shortcodes":[":adhesive-bandage:"],"animated":false,"directional":false,"group":"Objects","emoji":"🩹"},{"base":[129658],"alternates":[],"emoticons":[],"shortcodes":[":stethoscope:"],"animated":false,"directional":false,"group":"Objects","emoji":"🩺"},{"base":[129659],"alternates":[],"emoticons":[],"shortcodes":[":x-ray:"],"animated":false,"directional":false,"group":"Objects","emoji":"🩻"},{"base":[129516],"alternates":[],"emoticons":[],"shortcodes":[":dna:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧬"},{"base":[128301],"alternates":[],"emoticons":[],"shortcodes":[":telescope:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔭"},{"base":[128300],"alternates":[],"emoticons":[],"shortcodes":[":microscope:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔬"},{"base":[128225],"alternates":[],"emoticons":[],"shortcodes":[":satellite-antenna:"],"animated":false,"directional":false,"group":"Objects","emoji":"📡"},{"base":[128752,65039],"alternates":[],"emoticons":[],"shortcodes":[":satellite:"],"animated":false,"directional":false,"group":"Objects","emoji":"🛰️"},{"base":[129519],"alternates":[],"emoticons":[],"shortcodes":[":fire-extinguisher:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧯"},{"base":[129683],"alternates":[],"emoticons":[],"shortcodes":[":axe:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪓"},{"base":[129692],"alternates":[],"emoticons":[],"shortcodes":[":ladder:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪜"},{"base":[129699],"alternates":[],"emoticons":[],"shortcodes":[":bucket:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪣"},{"base":[129693],"alternates":[],"emoticons":[],"shortcodes":[":hook:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪝"},{"base":[129522],"alternates":[],"emoticons":[],"shortcodes":[":magnet:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧲"},{"base":[129520],"alternates":[],"emoticons":[],"shortcodes":[":toolbox:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧰"},{"base":[128476,65039],"alternates":[],"emoticons":[],"shortcodes":[":clamp:"],"animated":false,"directional":false,"group":"Objects","emoji":"🗜️"},{"base":[128297],"alternates":[],"emoticons":[],"shortcodes":[":nut-and-bolt:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔩"},{"base":[129691],"alternates":[],"emoticons":[],"shortcodes":[":screwdriver:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪛"},{"base":[129690],"alternates":[],"emoticons":[],"shortcodes":[":saw:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪚"},{"base":[128295],"alternates":[],"emoticons":[],"shortcodes":[":wrench:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔧"},{"base":[128296],"alternates":[],"emoticons":[],"shortcodes":[":hammer:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔨"},{"base":[9874,65039],"alternates":[],"emoticons":[],"shortcodes":[":hammer-and-pick:"],"animated":false,"directional":false,"group":"Objects","emoji":"⚒️"},{"base":[128736,65039],"alternates":[],"emoticons":[],"shortcodes":[":hammer-and-wrench:"],"animated":false,"directional":false,"group":"Objects","emoji":"🛠️"},{"base":[9935,65039],"alternates":[],"emoticons":[],"shortcodes":[":pick:"],"animated":false,"directional":false,"group":"Objects","emoji":"⛏️"},{"base":[9881,65039],"alternates":[],"emoticons":[],"shortcodes":[":gear:"],"animated":true,"directional":false,"group":"Objects","emoji":"⚙️"},{"base":[9939,65039,8205,128165],"alternates":[],"emoticons":[],"shortcodes":[":broken-chain:"],"animated":false,"directional":false,"group":"Objects","emoji":"⛓️‍💥"},{"base":[128279],"alternates":[],"emoticons":[],"shortcodes":[":link:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔗"},{"base":[9939,65039],"alternates":[],"emoticons":[],"shortcodes":[":chains:"],"animated":false,"directional":false,"group":"Objects","emoji":"⛓️"},{"base":[128206],"alternates":[],"emoticons":[],"shortcodes":[":paperclip:"],"animated":false,"directional":false,"group":"Objects","emoji":"📎"},{"base":[128391,65039],"alternates":[],"emoticons":[],"shortcodes":[":linked-paperclips:"],"animated":false,"directional":false,"group":"Objects","emoji":"🖇️"},{"base":[128207],"alternates":[],"emoticons":[],"shortcodes":[":straight-ruler:"],"animated":false,"directional":false,"group":"Objects","emoji":"📏"},{"base":[128208],"alternates":[],"emoticons":[],"shortcodes":[":triangular-ruler:"],"animated":false,"directional":false,"group":"Objects","emoji":"📐"},{"base":[128396,65039],"alternates":[],"emoticons":[],"shortcodes":[":paintbrush:"],"animated":false,"directional":false,"group":"Objects","emoji":"🖌️"},{"base":[128397,65039],"alternates":[],"emoticons":[],"shortcodes":[":crayon:"],"animated":false,"directional":false,"group":"Objects","emoji":"🖍️"},{"base":[128394,65039],"alternates":[],"emoticons":[],"shortcodes":[":pen:"],"animated":false,"directional":false,"group":"Objects","emoji":"🖊️"},{"base":[128395,65039],"alternates":[],"emoticons":[],"shortcodes":[":fountain-pen:"],"animated":false,"directional":false,"group":"Objects","emoji":"🖋️"},{"base":[10002,65039],"alternates":[],"emoticons":[],"shortcodes":[":black-nib:"],"animated":false,"directional":false,"group":"Objects","emoji":"✒️"},{"base":[9999,65039],"alternates":[],"emoticons":[],"shortcodes":[":pencil:"],"animated":true,"directional":false,"group":"Objects","emoji":"✏️"},{"base":[128221],"alternates":[],"emoticons":[],"shortcodes":[":memo:"],"animated":false,"directional":false,"group":"Objects","emoji":"📝"},{"base":[128214],"alternates":[],"emoticons":[],"shortcodes":[":open-book:"],"animated":false,"directional":false,"group":"Objects","emoji":"📖"},{"base":[128218],"alternates":[],"emoticons":[],"shortcodes":[":books:"],"animated":false,"directional":false,"group":"Objects","emoji":"📚"},{"base":[128210],"alternates":[],"emoticons":[],"shortcodes":[":ledger:"],"animated":false,"directional":false,"group":"Objects","emoji":"📒"},{"base":[128212],"alternates":[],"emoticons":[],"shortcodes":[":notebook-with-decorative-cover:"],"animated":false,"directional":false,"group":"Objects","emoji":"📔"},{"base":[128213],"alternates":[],"emoticons":[],"shortcodes":[":closed-book:"],"animated":false,"directional":false,"group":"Objects","emoji":"📕"},{"base":[128211],"alternates":[],"emoticons":[],"shortcodes":[":notebook:"],"animated":false,"directional":false,"group":"Objects","emoji":"📓"},{"base":[128215],"alternates":[],"emoticons":[],"shortcodes":[":green-book:"],"animated":false,"directional":false,"group":"Objects","emoji":"📗"},{"base":[128216],"alternates":[],"emoticons":[],"shortcodes":[":blue-book:"],"animated":false,"directional":false,"group":"Objects","emoji":"📘"},{"base":[128217],"alternates":[],"emoticons":[],"shortcodes":[":orange-book:"],"animated":false,"directional":false,"group":"Objects","emoji":"📙"},{"base":[128278],"alternates":[],"emoticons":[],"shortcodes":[":bookmark:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔖"},{"base":[128466,65039],"alternates":[],"emoticons":[],"shortcodes":[":spiral-notepad:"],"animated":false,"directional":false,"group":"Objects","emoji":"🗒️"},{"base":[128196],"alternates":[],"emoticons":[],"shortcodes":[":page-facing-up:"],"animated":false,"directional":false,"group":"Objects","emoji":"📄"},{"base":[128195],"alternates":[],"emoticons":[],"shortcodes":[":page-with-curl:"],"animated":false,"directional":false,"group":"Objects","emoji":"📃"},{"base":[128203],"alternates":[],"emoticons":[],"shortcodes":[":clipboard:"],"animated":false,"directional":false,"group":"Objects","emoji":"📋"},{"base":[128209],"alternates":[],"emoticons":[],"shortcodes":[":bookmark-tabs:"],"animated":false,"directional":false,"group":"Objects","emoji":"📑"},{"base":[128194],"alternates":[],"emoticons":[],"shortcodes":[":open-file-folder:"],"animated":false,"directional":false,"group":"Objects","emoji":"📂"},{"base":[128193],"alternates":[],"emoticons":[],"shortcodes":[":file-folder:"],"animated":false,"directional":false,"group":"Objects","emoji":"📁"},{"base":[128450,65039],"alternates":[],"emoticons":[],"shortcodes":[":card-index-dividers:"],"animated":false,"directional":false,"group":"Objects","emoji":"🗂️"},{"base":[128451,65039],"alternates":[],"emoticons":[],"shortcodes":[":card-file-box:"],"animated":false,"directional":false,"group":"Objects","emoji":"🗃️"},{"base":[128452,65039],"alternates":[],"emoticons":[],"shortcodes":[":file-cabinet:"],"animated":false,"directional":false,"group":"Objects","emoji":"🗄️"},{"base":[128202],"alternates":[],"emoticons":[],"shortcodes":[":bar-chart:"],"animated":false,"directional":false,"group":"Objects","emoji":"📊"},{"base":[128200],"alternates":[],"emoticons":[],"shortcodes":[":chart-increasing:"],"animated":false,"directional":false,"group":"Objects","emoji":"📈"},{"base":[128201],"alternates":[],"emoticons":[],"shortcodes":[":chart-decreasing:"],"animated":false,"directional":false,"group":"Objects","emoji":"📉"},{"base":[128199],"alternates":[],"emoticons":[],"shortcodes":[":card-index:"],"animated":false,"directional":false,"group":"Objects","emoji":"📇"},{"base":[129706],"alternates":[],"emoticons":[],"shortcodes":[":id:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪪"},{"base":[128204],"alternates":[],"emoticons":[],"shortcodes":[":pushpin:"],"animated":false,"directional":false,"group":"Objects","emoji":"📌"},{"base":[128205],"alternates":[],"emoticons":[],"shortcodes":[":round-pushpin:"],"animated":false,"directional":false,"group":"Objects","emoji":"📍"},{"base":[9986,65039],"alternates":[],"emoticons":[],"shortcodes":[":scissors:"],"animated":false,"directional":false,"group":"Objects","emoji":"✂️"},{"base":[128465,65039],"alternates":[],"emoticons":[],"shortcodes":[":wastebasket:"],"animated":false,"directional":false,"group":"Objects","emoji":"🗑️"},{"base":[128240],"alternates":[],"emoticons":[],"shortcodes":[":newspaper:"],"animated":false,"directional":false,"group":"Objects","emoji":"📰"},{"base":[128478,65039],"alternates":[],"emoticons":[],"shortcodes":[":rolled-up-newspaper:"],"animated":false,"directional":false,"group":"Objects","emoji":"🗞️"},{"base":[127991,65039],"alternates":[],"emoticons":[],"shortcodes":[":label:"],"animated":false,"directional":false,"group":"Objects","emoji":"🏷️"},{"base":[128230],"alternates":[],"emoticons":[],"shortcodes":[":package:"],"animated":false,"directional":false,"group":"Objects","emoji":"📦"},{"base":[128235],"alternates":[],"emoticons":[],"shortcodes":[":closed-mailbox-with-raised:"],"animated":false,"directional":false,"group":"Objects","emoji":"📫"},{"base":[128234],"alternates":[],"emoticons":[],"shortcodes":[":closed-mailbox-with-lowered:"],"animated":false,"directional":false,"group":"Objects","emoji":"📪"},{"base":[128236],"alternates":[],"emoticons":[],"shortcodes":[":open-mailbox-with-raised:"],"animated":false,"directional":false,"group":"Objects","emoji":"📬"},{"base":[128237],"alternates":[],"emoticons":[],"shortcodes":[":open-mailbox-with-lowered:"],"animated":false,"directional":false,"group":"Objects","emoji":"📭"},{"base":[128238],"alternates":[],"emoticons":[],"shortcodes":[":postbox:"],"animated":false,"directional":false,"group":"Objects","emoji":"📮"},{"base":[9993,65039],"alternates":[],"emoticons":[],"shortcodes":[":envelope:"],"animated":false,"directional":false,"group":"Objects","emoji":"✉️"},{"base":[128231],"alternates":[],"emoticons":[],"shortcodes":[":e-mail:"],"animated":false,"directional":false,"group":"Objects","emoji":"📧"},{"base":[128233],"alternates":[],"emoticons":[],"shortcodes":[":envelope-with-arrow:"],"animated":false,"directional":false,"group":"Objects","emoji":"📩"},{"base":[128232],"alternates":[],"emoticons":[],"shortcodes":[":incoming-envelope:"],"animated":false,"directional":false,"group":"Objects","emoji":"📨"},{"base":[128140],"alternates":[],"emoticons":[],"shortcodes":[":love-letter:"],"animated":false,"directional":false,"group":"Objects","emoji":"💌"},{"base":[128228],"alternates":[],"emoticons":[],"shortcodes":[":outbox-tray:"],"animated":false,"directional":false,"group":"Objects","emoji":"📤"},{"base":[128229],"alternates":[],"emoticons":[],"shortcodes":[":inbox-tray:"],"animated":false,"directional":false,"group":"Objects","emoji":"📥"},{"base":[128499,65039],"alternates":[],"emoticons":[],"shortcodes":[":ballot-box:"],"animated":false,"directional":false,"group":"Objects","emoji":"🗳️"},{"base":[128347],"alternates":[],"emoticons":[],"shortcodes":[":twelve-o-clock:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕛"},{"base":[128359],"alternates":[],"emoticons":[],"shortcodes":[":twelve-thirty:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕧"},{"base":[128336],"alternates":[],"emoticons":[],"shortcodes":[":one-o-clock:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕐"},{"base":[128348],"alternates":[],"emoticons":[],"shortcodes":[":one-thirty:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕜"},{"base":[128337],"alternates":[],"emoticons":[],"shortcodes":[":two-o-clock:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕑"},{"base":[128349],"alternates":[],"emoticons":[],"shortcodes":[":two-thirty:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕝"},{"base":[128338],"alternates":[],"emoticons":[],"shortcodes":[":three-o-clock:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕒"},{"base":[128350],"alternates":[],"emoticons":[],"shortcodes":[":three-thirty:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕞"},{"base":[128339],"alternates":[],"emoticons":[],"shortcodes":[":four-o-clock:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕓"},{"base":[128351],"alternates":[],"emoticons":[],"shortcodes":[":four-thirty:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕟"},{"base":[128340],"alternates":[],"emoticons":[],"shortcodes":[":five-o-clock:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕔"},{"base":[128352],"alternates":[],"emoticons":[],"shortcodes":[":five-thirty:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕠"},{"base":[128341],"alternates":[],"emoticons":[],"shortcodes":[":six-o-clock:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕕"},{"base":[128353],"alternates":[],"emoticons":[],"shortcodes":[":six-thirty:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕡"},{"base":[128342],"alternates":[],"emoticons":[],"shortcodes":[":seven-o-clock:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕖"},{"base":[128354],"alternates":[],"emoticons":[],"shortcodes":[":seven-thirty:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕢"},{"base":[128343],"alternates":[],"emoticons":[],"shortcodes":[":eight-o-clock:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕗"},{"base":[128355],"alternates":[],"emoticons":[],"shortcodes":[":eight-thirty:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕣"},{"base":[128344],"alternates":[],"emoticons":[],"shortcodes":[":nine-o-clock:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕘"},{"base":[128356],"alternates":[],"emoticons":[],"shortcodes":[":nine-thirty:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕤"},{"base":[128345],"alternates":[],"emoticons":[],"shortcodes":[":ten-o-clock:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕙"},{"base":[128357],"alternates":[],"emoticons":[],"shortcodes":[":ten-thirty:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕥"},{"base":[128346],"alternates":[],"emoticons":[],"shortcodes":[":eleven-o-clock:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕚"},{"base":[128358],"alternates":[],"emoticons":[],"shortcodes":[":eleven-thirty:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕦"},{"base":[9201,65039],"alternates":[],"emoticons":[],"shortcodes":[":stopwatch:"],"animated":false,"directional":false,"group":"Objects","emoji":"⏱️"},{"base":[8986],"alternates":[],"emoticons":[],"shortcodes":[":watch:"],"animated":false,"directional":false,"group":"Objects","emoji":"⌚"},{"base":[128368,65039],"alternates":[],"emoticons":[],"shortcodes":[":mantelpiece-clock:"],"animated":false,"directional":false,"group":"Objects","emoji":"🕰️"},{"base":[8987],"alternates":[],"emoticons":[],"shortcodes":[":hourglass-done:"],"animated":false,"directional":false,"group":"Objects","emoji":"⌛"},{"base":[9203],"alternates":[],"emoticons":[],"shortcodes":[":hourglass-not-done:"],"animated":false,"directional":false,"group":"Objects","emoji":"⏳"},{"base":[9202,65039],"alternates":[],"emoticons":[],"shortcodes":[":timer-clock:"],"animated":false,"directional":false,"group":"Objects","emoji":"⏲️"},{"base":[9200],"alternates":[],"emoticons":[],"shortcodes":[":alarm-clock:"],"animated":true,"directional":false,"group":"Objects","emoji":"⏰"},{"base":[128197],"alternates":[],"emoticons":[],"shortcodes":[":calendar:"],"animated":false,"directional":false,"group":"Objects","emoji":"📅"},{"base":[128198],"alternates":[],"emoticons":[],"shortcodes":[":tear-off-calendar:"],"animated":false,"directional":false,"group":"Objects","emoji":"📆"},{"base":[128467,65039],"alternates":[],"emoticons":[],"shortcodes":[":spiral-calendar:"],"animated":false,"directional":false,"group":"Objects","emoji":"🗓️"},{"base":[129703],"alternates":[],"emoticons":[],"shortcodes":[":placard:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪧"},{"base":[128718,65039],"alternates":[],"emoticons":[],"shortcodes":[":bellhop-bell:"],"animated":true,"directional":false,"group":"Objects","emoji":"🛎️"},{"base":[128276],"alternates":[],"emoticons":[],"shortcodes":[":bell:"],"animated":true,"directional":false,"group":"Objects","emoji":"🔔"},{"base":[128239],"alternates":[],"emoticons":[],"shortcodes":[":postal-horn:"],"animated":false,"directional":false,"group":"Objects","emoji":"📯"},{"base":[128226],"alternates":[],"emoticons":[],"shortcodes":[":loudspeaker:"],"animated":false,"directional":false,"group":"Objects","emoji":"📢"},{"base":[128227],"alternates":[],"emoticons":[],"shortcodes":[":megaphone:"],"animated":false,"directional":false,"group":"Objects","emoji":"📣"},{"base":[128264],"alternates":[],"emoticons":[],"shortcodes":[":low-volume:",":speaker-low-volume:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔈"},{"base":[128265],"alternates":[],"emoticons":[],"shortcodes":[":medium-volume:",":speaker-medium-volume:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔉"},{"base":[128266],"alternates":[],"emoticons":[],"shortcodes":[":high-volume:",":speaker-high-volume:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔊"},{"base":[128269],"alternates":[],"emoticons":[],"shortcodes":[":magnifying-glass-tilted-left:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔍"},{"base":[128270],"alternates":[],"emoticons":[],"shortcodes":[":magnifying-glass-tilted-right:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔎"},{"base":[128302],"alternates":[],"emoticons":[],"shortcodes":[":crystal-ball:"],"animated":true,"directional":false,"group":"Objects","emoji":"🔮"},{"base":[129535],"alternates":[],"emoticons":[],"shortcodes":[":evil-eye:",":nazar-amulet:"],"animated":false,"directional":false,"group":"Objects","emoji":"🧿"},{"base":[129708],"alternates":[],"emoticons":[],"shortcodes":[":hamsa:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪬"},{"base":[128255],"alternates":[],"emoticons":[],"shortcodes":[":prayer-beads:"],"animated":false,"directional":false,"group":"Objects","emoji":"📿"},{"base":[127994],"alternates":[],"emoticons":[],"shortcodes":[":amphora:"],"animated":false,"directional":false,"group":"Objects","emoji":"🏺"},{"base":[9905,65039],"alternates":[],"emoticons":[],"shortcodes":[":urn:"],"animated":false,"directional":false,"group":"Objects","emoji":"⚱️"},{"base":[9904,65039],"alternates":[],"emoticons":[],"shortcodes":[":coffin:"],"animated":false,"directional":false,"group":"Objects","emoji":"⚰️"},{"base":[129702],"alternates":[],"emoticons":[],"shortcodes":[":headstone:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪦"},{"base":[128684],"alternates":[],"emoticons":[],"shortcodes":[":cigarette:"],"animated":false,"directional":false,"group":"Objects","emoji":"🚬"},{"base":[128163],"alternates":[],"emoticons":[],"shortcodes":[":bomb:"],"animated":false,"directional":false,"group":"Objects","emoji":"💣"},{"base":[129700],"alternates":[],"emoticons":[],"shortcodes":[":mouse-trap:"],"animated":false,"directional":false,"group":"Objects","emoji":"🪤"},{"base":[128220],"alternates":[],"emoticons":[],"shortcodes":[":scroll:"],"animated":false,"directional":false,"group":"Objects","emoji":"📜"},{"base":[9876,65039],"alternates":[],"emoticons":[],"shortcodes":[":crossed-swords:"],"animated":false,"directional":false,"group":"Objects","emoji":"⚔️"},{"base":[128481,65039],"alternates":[],"emoticons":[],"shortcodes":[":dagger:"],"animated":false,"directional":false,"group":"Objects","emoji":"🗡️"},{"base":[128737,65039],"alternates":[],"emoticons":[],"shortcodes":[":shield:"],"animated":false,"directional":false,"group":"Objects","emoji":"🛡️"},{"base":[128477,65039],"alternates":[],"emoticons":[],"shortcodes":[":old-key:"],"animated":false,"directional":false,"group":"Objects","emoji":"🗝️"},{"base":[128273],"alternates":[],"emoticons":[],"shortcodes":[":key:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔑"},{"base":[128272],"alternates":[],"emoticons":[],"shortcodes":[":lock-with-key:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔐"},{"base":[128271],"alternates":[],"emoticons":[],"shortcodes":[":lock-with-pen:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔏"},{"base":[128274],"alternates":[],"emoticons":[],"shortcodes":[":locked:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔒"},{"base":[128275],"alternates":[],"emoticons":[],"shortcodes":[":unlocked:"],"animated":false,"directional":false,"group":"Objects","emoji":"🔓"},{"base":[128308],"alternates":[],"emoticons":[],"shortcodes":[":red-circle:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔴"},{"base":[128992],"alternates":[],"emoticons":[],"shortcodes":[":orange-circle:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🟠"},{"base":[128993],"alternates":[],"emoticons":[],"shortcodes":[":yellow-circle:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🟡"},{"base":[128994],"alternates":[],"emoticons":[],"shortcodes":[":green-circle:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🟢"},{"base":[128309],"alternates":[],"emoticons":[],"shortcodes":[":blue-circle:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔵"},{"base":[128995],"alternates":[],"emoticons":[],"shortcodes":[":purple-circle:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🟣"},{"base":[128996],"alternates":[],"emoticons":[],"shortcodes":[":brown-circle:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🟤"},{"base":[9899],"alternates":[],"emoticons":[],"shortcodes":[":black-circle:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⚫"},{"base":[9898],"alternates":[],"emoticons":[],"shortcodes":[":white-circle:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⚪"},{"base":[128997],"alternates":[],"emoticons":[],"shortcodes":[":red-square:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🟥"},{"base":[128999],"alternates":[],"emoticons":[],"shortcodes":[":orange-square:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🟧"},{"base":[129000],"alternates":[],"emoticons":[],"shortcodes":[":yellow-square:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🟨"},{"base":[129001],"alternates":[],"emoticons":[],"shortcodes":[":green-square:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🟩"},{"base":[128998],"alternates":[],"emoticons":[],"shortcodes":[":blue-square:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🟦"},{"base":[129002],"alternates":[],"emoticons":[],"shortcodes":[":purple-square:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🟪"},{"base":[129003],"alternates":[],"emoticons":[],"shortcodes":[":brown-square:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🟫"},{"base":[11035],"alternates":[],"emoticons":[],"shortcodes":[":black-square:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⬛"},{"base":[11036],"alternates":[],"emoticons":[],"shortcodes":[":white-square:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⬜"},{"base":[10084,65039],"alternates":[],"emoticons":[],"shortcodes":[":red-heart:"],"animated":true,"directional":false,"group":"Symbols","emoji":"❤️"},{"base":[129505],"alternates":[],"emoticons":[],"shortcodes":[":orange-heart:"],"animated":true,"directional":false,"group":"Symbols","emoji":"🧡"},{"base":[128155],"alternates":[],"emoticons":[],"shortcodes":[":yellow-heart:"],"animated":true,"directional":false,"group":"Symbols","emoji":"💛"},{"base":[128154],"alternates":[],"emoticons":[],"shortcodes":[":green-heart:"],"animated":true,"directional":false,"group":"Symbols","emoji":"💚"},{"base":[128153],"alternates":[],"emoticons":[],"shortcodes":[":blue-heart:"],"animated":true,"directional":false,"group":"Symbols","emoji":"💙"},{"base":[128156],"alternates":[],"emoticons":[],"shortcodes":[":purple-heart:"],"animated":true,"directional":false,"group":"Symbols","emoji":"💜"},{"base":[129294],"alternates":[],"emoticons":[],"shortcodes":[":brown-heart:"],"animated":true,"directional":false,"group":"Symbols","emoji":"🤎"},{"base":[128420],"alternates":[],"emoticons":[],"shortcodes":[":black-heart:"],"animated":true,"directional":false,"group":"Symbols","emoji":"🖤"},{"base":[129293],"alternates":[],"emoticons":[],"shortcodes":[":white-heart:"],"animated":true,"directional":false,"group":"Symbols","emoji":"🤍"},{"base":[129655],"alternates":[],"emoticons":[],"shortcodes":[":pink-heart:"],"animated":true,"directional":false,"group":"Symbols","emoji":"🩷"},{"base":[129653],"alternates":[],"emoticons":[],"shortcodes":[":light-blue-heart:"],"animated":true,"directional":false,"group":"Symbols","emoji":"🩵"},{"base":[129654],"alternates":[],"emoticons":[],"shortcodes":[":gray-heart:"],"animated":true,"directional":false,"group":"Symbols","emoji":"🩶"},{"base":[9829,65039],"alternates":[],"emoticons":[],"shortcodes":[":heart:"],"animated":false,"directional":false,"group":"Symbols","emoji":"♥️"},{"base":[9830,65039],"alternates":[],"emoticons":[],"shortcodes":[":diamond:"],"animated":false,"directional":false,"group":"Symbols","emoji":"♦️"},{"base":[9827,65039],"alternates":[],"emoticons":[],"shortcodes":[":club:"],"animated":false,"directional":false,"group":"Symbols","emoji":"♣️"},{"base":[9824,65039],"alternates":[],"emoticons":[],"shortcodes":[":spade:"],"animated":false,"directional":false,"group":"Symbols","emoji":"♠️"},{"base":[9800],"alternates":[],"emoticons":[],"shortcodes":[":Aries:"],"animated":true,"directional":false,"group":"Symbols","emoji":"♈"},{"base":[9801],"alternates":[],"emoticons":[],"shortcodes":[":Taurus:"],"animated":true,"directional":false,"group":"Symbols","emoji":"♉"},{"base":[9802],"alternates":[],"emoticons":[],"shortcodes":[":Gemini:"],"animated":true,"directional":false,"group":"Symbols","emoji":"♊"},{"base":[9803],"alternates":[],"emoticons":[],"shortcodes":[":Cancer:"],"animated":true,"directional":false,"group":"Symbols","emoji":"♋"},{"base":[9804],"alternates":[],"emoticons":[],"shortcodes":[":Leo:"],"animated":true,"directional":false,"group":"Symbols","emoji":"♌"},{"base":[9805],"alternates":[],"emoticons":[],"shortcodes":[":Virgo:"],"animated":true,"directional":false,"group":"Symbols","emoji":"♍"},{"base":[9806],"alternates":[],"emoticons":[],"shortcodes":[":Libra:"],"animated":true,"directional":false,"group":"Symbols","emoji":"♎"},{"base":[9807],"alternates":[],"emoticons":[],"shortcodes":[":Scorpio:"],"animated":true,"directional":false,"group":"Symbols","emoji":"♏"},{"base":[9808],"alternates":[],"emoticons":[],"shortcodes":[":Sagittarius:"],"animated":true,"directional":false,"group":"Symbols","emoji":"♐"},{"base":[9809],"alternates":[],"emoticons":[],"shortcodes":[":Capricorn:"],"animated":true,"directional":false,"group":"Symbols","emoji":"♑"},{"base":[9810],"alternates":[],"emoticons":[],"shortcodes":[":Aquarius:"],"animated":true,"directional":false,"group":"Symbols","emoji":"♒"},{"base":[9811],"alternates":[],"emoticons":[],"shortcodes":[":Pisces:"],"animated":true,"directional":false,"group":"Symbols","emoji":"♓"},{"base":[9934],"alternates":[],"emoticons":[],"shortcodes":[":Ophiuchus:"],"animated":true,"directional":false,"group":"Symbols","emoji":"⛎"},{"base":[9792,65039],"alternates":[],"emoticons":[],"shortcodes":[":female-sign:"],"animated":false,"directional":false,"group":"Symbols","emoji":"♀️"},{"base":[9794,65039],"alternates":[],"emoticons":[],"shortcodes":[":male-sign:"],"animated":false,"directional":false,"group":"Symbols","emoji":"♂️"},{"base":[9895,65039],"alternates":[],"emoticons":[],"shortcodes":[":trans-sign:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⚧️"},{"base":[128173],"alternates":[],"emoticons":[],"shortcodes":[":thought-bubble:",":thought-balloon:"],"animated":false,"directional":false,"group":"Symbols","emoji":"💭"},{"base":[128495,65039],"alternates":[],"emoticons":[],"shortcodes":[":anger-bubble:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🗯️"},{"base":[128172],"alternates":[],"emoticons":[],"shortcodes":[":speech-bubble:"],"animated":false,"directional":false,"group":"Symbols","emoji":"💬"},{"base":[128488,65039],"alternates":[],"emoticons":[],"shortcodes":[":speech-bubble-leftwards:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🗨️"},{"base":[10069],"alternates":[],"emoticons":[],"shortcodes":[":exclamation-mark-white:"],"animated":false,"directional":false,"group":"Symbols","emoji":"❕"},{"base":[10068],"alternates":[],"emoticons":[],"shortcodes":[":question-mark-white:"],"animated":false,"directional":false,"group":"Symbols","emoji":"❔"},{"base":[10071],"alternates":[],"emoticons":[],"shortcodes":[":exclamation:",":exclamation-mark:"],"animated":true,"directional":false,"group":"Symbols","emoji":"❗"},{"base":[10067],"alternates":[],"emoticons":[],"shortcodes":[":question:",":question-mark:",":?:"],"animated":true,"directional":false,"group":"Symbols","emoji":"❓"},{"base":[8265,65039],"alternates":[],"emoticons":[],"shortcodes":[":exclamation-question-mark:",":!?:"],"animated":true,"directional":false,"group":"Symbols","emoji":"⁉️"},{"base":[8252,65039],"alternates":[],"emoticons":[],"shortcodes":[":exclamation-double:",":!!:"],"animated":true,"directional":false,"group":"Symbols","emoji":"‼️"},{"base":[11093],"alternates":[],"emoticons":[],"shortcodes":[":large-circle:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⭕"},{"base":[10060],"alternates":[],"emoticons":[],"shortcodes":[":x:",":cross-mark:"],"animated":true,"directional":false,"group":"Symbols","emoji":"❌"},{"base":[128683],"alternates":[],"emoticons":[],"shortcodes":[":prohibited:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🚫"},{"base":[128691],"alternates":[],"emoticons":[],"shortcodes":[":no-bicycles:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🚳"},{"base":[128685],"alternates":[],"emoticons":[],"shortcodes":[":no-smoking:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🚭"},{"base":[128687],"alternates":[],"emoticons":[],"shortcodes":[":no-littering:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🚯"},{"base":[128689],"alternates":[],"emoticons":[],"shortcodes":[":non-potable-water:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🚱"},{"base":[128695],"alternates":[],"emoticons":[],"shortcodes":[":no-pedestrians:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🚷"},{"base":[128245],"alternates":[],"emoticons":[],"shortcodes":[":no-mobile-phones:"],"animated":false,"directional":false,"group":"Symbols","emoji":"📵"},{"base":[128286],"alternates":[],"emoticons":[],"shortcodes":[":no-under-eighteen:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔞"},{"base":[128277],"alternates":[],"emoticons":[],"shortcodes":[":no-sound:",":no-bell:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔕"},{"base":[128263],"alternates":[],"emoticons":[],"shortcodes":[":mute:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔇"},{"base":[127344,65039],"alternates":[],"emoticons":[],"shortcodes":[":a-button:",":blood-type-a:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🅰️"},{"base":[127374],"alternates":[],"emoticons":[],"shortcodes":[":ab-button:",":blood-type-ab:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🆎"},{"base":[127345,65039],"alternates":[],"emoticons":[],"shortcodes":[":b-button:",":blood-type-b:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🅱️"},{"base":[127358,65039],"alternates":[],"emoticons":[],"shortcodes":[":o-button:",":blood-type-o:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🅾️"},{"base":[127377],"alternates":[],"emoticons":[],"shortcodes":[":cl-button:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🆑"},{"base":[127384],"alternates":[],"emoticons":[],"shortcodes":[":sos:"],"animated":true,"directional":false,"group":"Symbols","emoji":"🆘"},{"base":[128721],"alternates":[],"emoticons":[],"shortcodes":[":stop:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🛑"},{"base":[9940],"alternates":[],"emoticons":[],"shortcodes":[":no-entry:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⛔"},{"base":[128219],"alternates":[],"emoticons":[],"shortcodes":[":name-badge:"],"animated":false,"directional":false,"group":"Symbols","emoji":"📛"},{"base":[9832,65039],"alternates":[],"emoticons":[],"shortcodes":[":hot-springs:"],"animated":false,"directional":false,"group":"Symbols","emoji":"♨️"},{"base":[128162],"alternates":[],"emoticons":[],"shortcodes":[":anger:"],"animated":false,"directional":false,"group":"Symbols","emoji":"💢"},{"base":[128315],"alternates":[],"emoticons":[],"shortcodes":[":triangle-pointed-down:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔻"},{"base":[128314],"alternates":[],"emoticons":[],"shortcodes":[":triangle-pointed-up:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔺"},{"base":[127568],"alternates":[],"emoticons":[],"shortcodes":[":bargain:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🉐"},{"base":[12953,65039],"alternates":[],"emoticons":[],"shortcodes":[":secret:"],"animated":false,"directional":false,"group":"Symbols","emoji":"㊙️"},{"base":[12951,65039],"alternates":[],"emoticons":[],"shortcodes":[":congratulations:"],"animated":false,"directional":false,"group":"Symbols","emoji":"㊗️"},{"base":[127540],"alternates":[],"emoticons":[],"shortcodes":[":passing-grade:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🈴"},{"base":[127541],"alternates":[],"emoticons":[],"shortcodes":[":no-vacancy:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🈵"},{"base":[127545],"alternates":[],"emoticons":[],"shortcodes":[":discount:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🈹"},{"base":[127538],"alternates":[],"emoticons":[],"shortcodes":[":prohibited-button:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🈲"},{"base":[127569],"alternates":[],"emoticons":[],"shortcodes":[":accept:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🉑"},{"base":[127542],"alternates":[],"emoticons":[],"shortcodes":[":not-free-of-charge:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🈶"},{"base":[127514],"alternates":[],"emoticons":[],"shortcodes":[":free-of-charge:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🈚"},{"base":[127544],"alternates":[],"emoticons":[],"shortcodes":[":application:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🈸"},{"base":[127546],"alternates":[],"emoticons":[],"shortcodes":[":open-for-business:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🈺"},{"base":[127543,65039],"alternates":[],"emoticons":[],"shortcodes":[":monthly-amount:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🈷️"},{"base":[10036,65039],"alternates":[],"emoticons":[],"shortcodes":[":eight-pointed-star:"],"animated":false,"directional":false,"group":"Symbols","emoji":"✴️"},{"base":[128310],"alternates":[],"emoticons":[],"shortcodes":[":diamond-orange-large:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔶"},{"base":[128312],"alternates":[],"emoticons":[],"shortcodes":[":diamond-orange-small:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔸"},{"base":[128262],"alternates":[],"emoticons":[],"shortcodes":[":bright:",":brightness:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔆"},{"base":[128261],"alternates":[],"emoticons":[],"shortcodes":[":dim:",":dimness:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔅"},{"base":[127386],"alternates":[],"emoticons":[],"shortcodes":[":vs:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🆚"},{"base":[127910],"alternates":[],"emoticons":[],"shortcodes":[":cinema:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🎦"},{"base":[128246],"alternates":[],"emoticons":[],"shortcodes":[":signal-strength:"],"animated":false,"directional":false,"group":"Symbols","emoji":"📶"},{"base":[128257],"alternates":[],"emoticons":[],"shortcodes":[":repeat:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔁"},{"base":[128258],"alternates":[],"emoticons":[],"shortcodes":[":repeat-one:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔂"},{"base":[128256],"alternates":[],"emoticons":[],"shortcodes":[":shuffle:",":twisted-rightwards-arrows:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔀"},{"base":[9654,65039],"alternates":[],"emoticons":[],"shortcodes":[":arrow-forward:",":play-button:"],"animated":false,"directional":false,"group":"Symbols","emoji":"▶️"},{"base":[9193],"alternates":[],"emoticons":[],"shortcodes":[":fast-forward:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⏩"},{"base":[9197,65039],"alternates":[],"emoticons":[],"shortcodes":[":next-track:",":play-next:",":next:",":right-pointing-double-triangle-with-vertical-bar:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⏭️"},{"base":[9199,65039],"alternates":[],"emoticons":[],"shortcodes":[":play-or-pause:",":right-pointing-triangle-with-double-vertical-bar:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⏯️"},{"base":[9664,65039],"alternates":[],"emoticons":[],"shortcodes":[":reverse:",":leftwards-triangle:",":arrow-backward:"],"animated":false,"directional":false,"group":"Symbols","emoji":"◀️"},{"base":[9194],"alternates":[],"emoticons":[],"shortcodes":[":rewind:",":leftwards-double-triangles:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⏪"},{"base":[9198,65039],"alternates":[],"emoticons":[],"shortcodes":[":previous:",":left-pointing-double-triangle-with-vertical-bar:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⏮️"},{"base":[128316],"alternates":[],"emoticons":[],"shortcodes":[":upwards:",":arrow-up:",":triangle-up:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔼"},{"base":[9195],"alternates":[],"emoticons":[],"shortcodes":[":fast-up:",":double-triangle-up:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⏫"},{"base":[128317],"alternates":[],"emoticons":[],"shortcodes":[":downwards:",":arrow-down:",":triangle-down:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔽"},{"base":[9196],"alternates":[],"emoticons":[],"shortcodes":[":fast-down:",":double-triangle-down:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⏬"},{"base":[9208,65039],"alternates":[],"emoticons":[],"shortcodes":[":pause:",":double-vertical-bar:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⏸️"},{"base":[9209,65039],"alternates":[],"emoticons":[],"shortcodes":[":stop-button:",":square-button:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⏹️"},{"base":[9210,65039],"alternates":[],"emoticons":[],"shortcodes":[":record:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⏺️"},{"base":[9167,65039],"alternates":[],"emoticons":[],"shortcodes":[":eject:",":triangle-up-with-horizontal-bar:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⏏️"},{"base":[128244],"alternates":[],"emoticons":[],"shortcodes":[":phone-off:"],"animated":true,"directional":false,"group":"Symbols","emoji":"📴"},{"base":[128732],"alternates":[],"emoticons":[],"shortcodes":[":wireless:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🛜"},{"base":[128243],"alternates":[],"emoticons":[],"shortcodes":[":vibration:",":vibration-mode:"],"animated":false,"directional":false,"group":"Symbols","emoji":"📳"},{"base":[128242],"alternates":[],"emoticons":[],"shortcodes":[":phone-with-arrow:"],"animated":false,"directional":false,"group":"Symbols","emoji":"📲"},{"base":[9762,65039],"alternates":[],"emoticons":[],"shortcodes":[":radioactive:"],"animated":false,"directional":false,"group":"Symbols","emoji":"☢️"},{"base":[9763,65039],"alternates":[],"emoticons":[],"shortcodes":[":biohazard:"],"animated":false,"directional":false,"group":"Symbols","emoji":"☣️"},{"base":[9888,65039],"alternates":[],"emoticons":[],"shortcodes":[":warning:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⚠️"},{"base":[128696],"alternates":[],"emoticons":[],"shortcodes":[":children-crossing:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🚸"},{"base":[9884,65039],"alternates":[],"emoticons":[],"shortcodes":[":fleur-de-lis:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⚜️"},{"base":[128305],"alternates":[],"emoticons":[],"shortcodes":[":trident-emblem:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔱"},{"base":[12349,65039],"alternates":[],"emoticons":[],"shortcodes":[":part-alternation-mark:"],"animated":false,"directional":false,"group":"Symbols","emoji":"〽️"},{"base":[128304],"alternates":[],"emoticons":[],"shortcodes":[":Japanese-symbol-for-beginner:",":beginner:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔰"},{"base":[10035,65039],"alternates":[],"emoticons":[],"shortcodes":[":eight-spoked-asterisk:"],"animated":false,"directional":false,"group":"Symbols","emoji":"✳️"},{"base":[10055,65039],"alternates":[],"emoticons":[],"shortcodes":[":sparkle:"],"animated":false,"directional":false,"group":"Symbols","emoji":"❇️"},{"base":[9851,65039],"alternates":[],"emoticons":[],"shortcodes":[":recycling-symbol:"],"animated":false,"directional":false,"group":"Symbols","emoji":"♻️"},{"base":[128177],"alternates":[],"emoticons":[],"shortcodes":[":currency-exchange:"],"animated":false,"directional":false,"group":"Symbols","emoji":"💱"},{"base":[128178],"alternates":[],"emoticons":[],"shortcodes":[":dollar-sign:"],"animated":false,"directional":false,"group":"Symbols","emoji":"💲"},{"base":[128185],"alternates":[],"emoticons":[],"shortcodes":[":chart-increasing-with-yen:"],"animated":false,"directional":false,"group":"Symbols","emoji":"💹"},{"base":[127535],"alternates":[],"emoticons":[],"shortcodes":[":reserved:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🈯"},{"base":[10062],"alternates":[],"emoticons":[],"shortcodes":[":x-mark:",":cross mark button:",":no-mark:"],"animated":false,"directional":false,"group":"Symbols","emoji":"❎"},{"base":[9989],"alternates":[],"emoticons":[],"shortcodes":[":check-mark:",":check-mark-green:"],"animated":true,"directional":false,"group":"Symbols","emoji":"✅"},{"base":[10004,65039],"alternates":[],"emoticons":[],"shortcodes":[":check-mark-black:"],"animated":false,"directional":false,"group":"Symbols","emoji":"✔️"},{"base":[9745,65039],"alternates":[],"emoticons":[],"shortcodes":[":check-mark-button:",":vote:"],"animated":false,"directional":false,"group":"Symbols","emoji":"☑️"},{"base":[11014,65039],"alternates":[],"emoticons":[],"shortcodes":[":up-arrow:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⬆️"},{"base":[8599,65039],"alternates":[],"emoticons":[],"shortcodes":[":up-right-arrow:"],"animated":false,"directional":false,"group":"Symbols","emoji":"↗️"},{"base":[10145,65039],"alternates":[],"emoticons":[],"shortcodes":[":right-arrow:"],"animated":false,"directional":false,"group":"Symbols","emoji":"➡️"},{"base":[8600,65039],"alternates":[],"emoticons":[],"shortcodes":[":down-right-arrow:"],"animated":false,"directional":false,"group":"Symbols","emoji":"↘️"},{"base":[11015,65039],"alternates":[],"emoticons":[],"shortcodes":[":down-arrow:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⬇️"},{"base":[8601,65039],"alternates":[],"emoticons":[],"shortcodes":[":down-left-arrow:"],"animated":false,"directional":false,"group":"Symbols","emoji":"↙️"},{"base":[11013,65039],"alternates":[],"emoticons":[],"shortcodes":[":left-arrow:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⬅️"},{"base":[8598,65039],"alternates":[],"emoticons":[],"shortcodes":[":up-left-arrow:"],"animated":false,"directional":false,"group":"Symbols","emoji":"↖️"},{"base":[8597,65039],"alternates":[],"emoticons":[],"shortcodes":[":up-down-arrow:"],"animated":false,"directional":false,"group":"Symbols","emoji":"↕️"},{"base":[8596,65039],"alternates":[],"emoticons":[],"shortcodes":[":left-right-arrow:"],"animated":false,"directional":false,"group":"Symbols","emoji":"↔️"},{"base":[8617,65039],"alternates":[],"emoticons":[],"shortcodes":[":right-arrow-curving-left:"],"animated":false,"directional":false,"group":"Symbols","emoji":"↩️"},{"base":[8618,65039],"alternates":[],"emoticons":[],"shortcodes":[":left-arrow-curving-right:"],"animated":false,"directional":false,"group":"Symbols","emoji":"↪️"},{"base":[10548,65039],"alternates":[],"emoticons":[],"shortcodes":[":right-arrow-curving-up:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⤴️"},{"base":[10549,65039],"alternates":[],"emoticons":[],"shortcodes":[":right-arrow-curving-down:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⤵️"},{"base":[128259],"alternates":[],"emoticons":[],"shortcodes":[":clockwise-arrows:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔃"},{"base":[128260],"alternates":[],"emoticons":[],"shortcodes":[":counterclockwise-arrows:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔄"},{"base":[128281],"alternates":[],"emoticons":[],"shortcodes":[":back:",":arrow-back:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔙"},{"base":[128283],"alternates":[],"emoticons":[],"shortcodes":[":on:",":arrow-on:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔛"},{"base":[128285],"alternates":[],"emoticons":[],"shortcodes":[":top:",":arrow-top:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔝"},{"base":[128282],"alternates":[],"emoticons":[],"shortcodes":[":end:",":arrow-end:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔚"},{"base":[128284],"alternates":[],"emoticons":[],"shortcodes":[":soon:",":arrow-soon:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔜"},{"base":[127381],"alternates":[],"emoticons":[],"shortcodes":[":new:"],"animated":true,"directional":false,"group":"Symbols","emoji":"🆕"},{"base":[127379],"alternates":[],"emoticons":[],"shortcodes":[":free:"],"animated":true,"directional":false,"group":"Symbols","emoji":"🆓"},{"base":[127385],"alternates":[],"emoticons":[],"shortcodes":[":up!:"],"animated":true,"directional":false,"group":"Symbols","emoji":"🆙"},{"base":[127383],"alternates":[],"emoticons":[],"shortcodes":[":ok-button:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🆗"},{"base":[127378],"alternates":[],"emoticons":[],"shortcodes":[":cool:"],"animated":true,"directional":false,"group":"Symbols","emoji":"🆒"},{"base":[127382],"alternates":[],"emoticons":[],"shortcodes":[":ng:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🆖"},{"base":[8505,65039],"alternates":[],"emoticons":[],"shortcodes":[":information:"],"animated":false,"directional":false,"group":"Symbols","emoji":"ℹ️"},{"base":[127359,65039],"alternates":[],"emoticons":[],"shortcodes":[":Parking:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🅿️"},{"base":[127489],"alternates":[],"emoticons":[],"shortcodes":[":here:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🈁"},{"base":[127490,65039],"alternates":[],"emoticons":[],"shortcodes":[":service-charge:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🈂️"},{"base":[127539],"alternates":[],"emoticons":[],"shortcodes":[":vacancy:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🈳"},{"base":[128291],"alternates":[],"emoticons":[],"shortcodes":[":symbols:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔣"},{"base":[128292],"alternates":[],"emoticons":[],"shortcodes":[":letters:",":abc:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔤"},{"base":[128288],"alternates":[],"emoticons":[],"shortcodes":[":uppercase-letters:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔠"},{"base":[128289],"alternates":[],"emoticons":[],"shortcodes":[":lowercase-letters:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔡"},{"base":[128290],"alternates":[],"emoticons":[],"shortcodes":[":numbers:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔢"},{"base":[35,65039,8419],"alternates":[],"emoticons":[],"shortcodes":[":#:",":number-sign:"],"animated":false,"directional":false,"group":"Symbols","emoji":"#️⃣"},{"base":[42,65039,8419],"alternates":[],"emoticons":[],"shortcodes":[":asterisk:",":keycap-asterisk:"],"animated":false,"directional":false,"group":"Symbols","emoji":"*️⃣"},{"base":[48,65039,8419],"alternates":[],"emoticons":[],"shortcodes":[":zero:",":keycap-zero:"],"animated":false,"directional":false,"group":"Symbols","emoji":"0️⃣"},{"base":[49,65039,8419],"alternates":[],"emoticons":[],"shortcodes":[":one:",":keycap-one:"],"animated":false,"directional":false,"group":"Symbols","emoji":"1️⃣"},{"base":[50,65039,8419],"alternates":[],"emoticons":[],"shortcodes":[":two:",":keycap-two:"],"animated":false,"directional":false,"group":"Symbols","emoji":"2️⃣"},{"base":[51,65039,8419],"alternates":[],"emoticons":[],"shortcodes":[":three:",":keycap-three:"],"animated":false,"directional":false,"group":"Symbols","emoji":"3️⃣"},{"base":[52,65039,8419],"alternates":[],"emoticons":[],"shortcodes":[":four:",":keycap-four:"],"animated":false,"directional":false,"group":"Symbols","emoji":"4️⃣"},{"base":[53,65039,8419],"alternates":[],"emoticons":[],"shortcodes":[":five:",":keycap-five:"],"animated":false,"directional":false,"group":"Symbols","emoji":"5️⃣"},{"base":[54,65039,8419],"alternates":[],"emoticons":[],"shortcodes":[":six:",":keycap-six:"],"animated":false,"directional":false,"group":"Symbols","emoji":"6️⃣"},{"base":[55,65039,8419],"alternates":[],"emoticons":[],"shortcodes":[":seven:",":keycap-seven:"],"animated":false,"directional":false,"group":"Symbols","emoji":"7️⃣"},{"base":[56,65039,8419],"alternates":[],"emoticons":[],"shortcodes":[":eight:",":keycap-eight:"],"animated":false,"directional":false,"group":"Symbols","emoji":"8️⃣"},{"base":[57,65039,8419],"alternates":[],"emoticons":[],"shortcodes":[":nine:",":keycap-nine:"],"animated":false,"directional":false,"group":"Symbols","emoji":"9️⃣"},{"base":[128287],"alternates":[],"emoticons":[],"shortcodes":[":ten:",":keycap-ten:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔟"},{"base":[127760],"alternates":[],"emoticons":[],"shortcodes":[":globe:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🌐"},{"base":[128160],"alternates":[],"emoticons":[],"shortcodes":[":diamond-jewel:"],"animated":false,"directional":false,"group":"Symbols","emoji":"💠"},{"base":[128311],"alternates":[],"emoticons":[],"shortcodes":[":blue-diamond-large:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔷"},{"base":[128313],"alternates":[],"emoticons":[],"shortcodes":[":blue-diamond-small:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔹"},{"base":[127975],"alternates":[],"emoticons":[],"shortcodes":[":ATM:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🏧"},{"base":[9410,65039],"alternates":[],"emoticons":[],"shortcodes":[":metro-sign:",":circled-m:"],"animated":false,"directional":false,"group":"Symbols","emoji":"Ⓜ️"},{"base":[128702],"alternates":[],"emoticons":[],"shortcodes":[":water-closet:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🚾"},{"base":[128699],"alternates":[],"emoticons":[],"shortcodes":[":restroom:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🚻"},{"base":[128697],"alternates":[],"emoticons":[],"shortcodes":[":mens-room:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🚹"},{"base":[128698],"alternates":[],"emoticons":[],"shortcodes":[":womens-room:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🚺"},{"base":[9855],"alternates":[],"emoticons":[],"shortcodes":[":wheelchair-symbol:"],"animated":false,"directional":false,"group":"Symbols","emoji":"♿"},{"base":[128700],"alternates":[],"emoticons":[],"shortcodes":[":baby-symbol:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🚼"},{"base":[128727],"alternates":[],"emoticons":[],"shortcodes":[":elevator:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🛗"},{"base":[128686],"alternates":[],"emoticons":[],"shortcodes":[":litter:"],"animated":true,"directional":false,"group":"Symbols","emoji":"🚮"},{"base":[128688],"alternates":[],"emoticons":[],"shortcodes":[":water-faucet:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🚰"},{"base":[128706],"alternates":[],"emoticons":[],"shortcodes":[":passport-control:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🛂"},{"base":[128707],"alternates":[],"emoticons":[],"shortcodes":[":customs:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🛃"},{"base":[128708],"alternates":[],"emoticons":[],"shortcodes":[":baggage-claim:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🛄"},{"base":[128709],"alternates":[],"emoticons":[],"shortcodes":[":left-luggage:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🛅"},{"base":[128159],"alternates":[],"emoticons":[],"shortcodes":[":heart-box:"],"animated":false,"directional":false,"group":"Symbols","emoji":"💟"},{"base":[9883,65039],"alternates":[],"emoticons":[],"shortcodes":[":atom-symbol:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⚛️"},{"base":[128720],"alternates":[],"emoticons":[],"shortcodes":[":place-of-worship:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🛐"},{"base":[128329,65039],"alternates":[],"emoticons":[],"shortcodes":[":om:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🕉️"},{"base":[9784,65039],"alternates":[],"emoticons":[],"shortcodes":[":wheel-of-dharma:"],"animated":false,"directional":false,"group":"Symbols","emoji":"☸️"},{"base":[9774,65039],"alternates":[],"emoticons":[],"shortcodes":[":peace-symbol:"],"animated":false,"directional":false,"group":"Symbols","emoji":"☮️"},{"base":[9775,65039],"alternates":[],"emoticons":[],"shortcodes":[":yin-yang:"],"animated":false,"directional":false,"group":"Symbols","emoji":"☯️"},{"base":[9770,65039],"alternates":[],"emoticons":[],"shortcodes":[":star-and-crescent:"],"animated":false,"directional":false,"group":"Symbols","emoji":"☪️"},{"base":[129711],"alternates":[],"emoticons":[],"shortcodes":[":khanda:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🪯"},{"base":[10013,65039],"alternates":[],"emoticons":[],"shortcodes":[":latin-cross:"],"animated":false,"directional":false,"group":"Symbols","emoji":"✝️"},{"base":[9766,65039],"alternates":[],"emoticons":[],"shortcodes":[":orthodox-cross:"],"animated":false,"directional":false,"group":"Symbols","emoji":"☦️"},{"base":[10017,65039],"alternates":[],"emoticons":[],"shortcodes":[":star-of-David:"],"animated":false,"directional":false,"group":"Symbols","emoji":"✡️"},{"base":[128303],"alternates":[],"emoticons":[],"shortcodes":[":star-of-david-with-dot:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔯"},{"base":[128334],"alternates":[],"emoticons":[],"shortcodes":[":menorah:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🕎"},{"base":[9854,65039],"alternates":[],"emoticons":[],"shortcodes":[":infinity:"],"animated":false,"directional":false,"group":"Symbols","emoji":"♾️"},{"base":[127380],"alternates":[],"emoticons":[],"shortcodes":[":id-button:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🆔"},{"base":[129489,8205,129489,8205,129490],"alternates":[],"emoticons":[],"shortcodes":[":family:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🧑‍🧑‍🧒"},{"base":[129489,8205,129489,8205,129490,8205,129490],"alternates":[],"emoticons":[],"shortcodes":[":family-4:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🧑‍🧑‍🧒‍🧒"},{"base":[129489,8205,129490],"alternates":[],"emoticons":[],"shortcodes":[":family-2:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🧑‍🧒"},{"base":[129489,8205,129490,8205,129490],"alternates":[],"emoticons":[],"shortcodes":[":family-3:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🧑‍🧒‍🧒"},{"base":[9877,65039],"alternates":[],"emoticons":[],"shortcodes":[":medical-symbol:"],"animated":false,"directional":false,"group":"Symbols","emoji":"⚕️"},{"base":[127932],"alternates":[],"emoticons":[],"shortcodes":[":musical-score:",":treble-clef:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🎼"},{"base":[127925],"alternates":[],"emoticons":[],"shortcodes":[":musical-note:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🎵"},{"base":[127926],"alternates":[],"emoticons":[],"shortcodes":[":musical-notes:"],"animated":true,"directional":false,"group":"Symbols","emoji":"🎶"},{"base":[10006,65039],"alternates":[],"emoticons":[],"shortcodes":[":multiplication-x:"],"animated":false,"directional":false,"group":"Symbols","emoji":"✖️"},{"base":[10133],"alternates":[],"emoticons":[],"shortcodes":[":plus-sign:",":+:"],"animated":true,"directional":false,"group":"Symbols","emoji":"➕"},{"base":[10134],"alternates":[],"emoticons":[],"shortcodes":[":minus-sign:",":-:"],"animated":false,"directional":false,"group":"Symbols","emoji":"➖"},{"base":[10135],"alternates":[],"emoticons":[],"shortcodes":[":division-sign:"],"animated":false,"directional":false,"group":"Symbols","emoji":"➗"},{"base":[129008],"alternates":[],"emoticons":[],"shortcodes":[":equals-sign:",":=:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🟰"},{"base":[10160],"alternates":[],"emoticons":[],"shortcodes":[":curly-loop:"],"animated":false,"directional":false,"group":"Symbols","emoji":"➰"},{"base":[10175],"alternates":[],"emoticons":[],"shortcodes":[":curly-loop-double:"],"animated":false,"directional":false,"group":"Symbols","emoji":"➿"},{"base":[12336,65039],"alternates":[],"emoticons":[],"shortcodes":[":wavy-dash:"],"animated":false,"directional":false,"group":"Symbols","emoji":"〰️"},{"base":[169,65039],"alternates":[],"emoticons":[],"shortcodes":[":copyright:"],"animated":false,"directional":false,"group":"Symbols","emoji":"©️"},{"base":[174,65039],"alternates":[],"emoticons":[],"shortcodes":[":registered:"],"animated":false,"directional":false,"group":"Symbols","emoji":"®️"},{"base":[8482,65039],"alternates":[],"emoticons":[],"shortcodes":[":trade-mark:"],"animated":false,"directional":false,"group":"Symbols","emoji":"™️"},{"base":[128280],"alternates":[],"emoticons":[],"shortcodes":[":radio-button:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔘"},{"base":[128307],"alternates":[],"emoticons":[],"shortcodes":[":white-square-button:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔳"},{"base":[9724,65039],"alternates":[],"emoticons":[],"shortcodes":[":black-square-medium:"],"animated":false,"directional":false,"group":"Symbols","emoji":"◼️"},{"base":[9726],"alternates":[],"emoticons":[],"shortcodes":[":black-square-medium-small:"],"animated":false,"directional":false,"group":"Symbols","emoji":"◾"},{"base":[9642,65039],"alternates":[],"emoticons":[],"shortcodes":[":black-square-small:"],"animated":false,"directional":false,"group":"Symbols","emoji":"▪️"},{"base":[128306],"alternates":[],"emoticons":[],"shortcodes":[":button-black-square:"],"animated":false,"directional":false,"group":"Symbols","emoji":"🔲"},{"base":[9723,65039],"alternates":[],"emoticons":[],"shortcodes":[":white-square-medium:"],"animated":false,"directional":false,"group":"Symbols","emoji":"◻️"},{"base":[9725],"alternates":[],"emoticons":[],"shortcodes":[":white-square-medium-small:"],"animated":false,"directional":false,"group":"Symbols","emoji":"◽"},{"base":[9643,65039],"alternates":[],"emoticons":[],"shortcodes":[":white-square-small:"],"animated":false,"directional":false,"group":"Symbols","emoji":"▫️"},{"base":[128065,65039,8205,128488,65039],"alternates":[],"emoticons":[],"shortcodes":[":eye-bubble:"],"animated":false,"directional":false,"group":"Symbols","emoji":"👁️‍🗨️"},{"base":[127937],"alternates":[],"emoticons":[],"shortcodes":[":chequered-flag:"],"animated":true,"directional":false,"group":"Flags","emoji":"🏁"},{"base":[128681],"alternates":[],"emoticons":[],"shortcodes":[":triangular-flag:"],"animated":true,"directional":false,"group":"Flags","emoji":"🚩"},{"base":[127884],"alternates":[],"emoticons":[],"shortcodes":[":crossed-flags:"],"animated":false,"directional":false,"group":"Flags","emoji":"🎌"},{"base":[127988],"alternates":[],"emoticons":[],"shortcodes":[":black-flag:"],"animated":true,"directional":false,"group":"Flags","emoji":"🏴"},{"base":[127987,65039],"alternates":[],"emoticons":[],"shortcodes":[":white-flag:"],"animated":true,"directional":false,"group":"Flags","emoji":"🏳️"},{"base":[127987,65039,8205,127752],"alternates":[],"emoticons":[],"shortcodes":[":rainbow-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🏳️‍🌈"},{"base":[127987,65039,8205,9895,65039],"alternates":[],"emoticons":[],"shortcodes":[":trans-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🏳️‍⚧️"},{"base":[127988,8205,9760,65039],"alternates":[],"emoticons":[],"shortcodes":[":pirate-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🏴‍☠️"},{"base":[127462,127464],"alternates":[],"emoticons":[],"shortcodes":[":Ascension-Island-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇨"},{"base":[127462,127465],"alternates":[],"emoticons":[],"shortcodes":[":Andorra-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇩"},{"base":[127462,127466],"alternates":[],"emoticons":[],"shortcodes":[":United-Arab-Emirates-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇪"},{"base":[127462,127467],"alternates":[],"emoticons":[],"shortcodes":[":Afghanistan-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇫"},{"base":[127462,127468],"alternates":[],"emoticons":[],"shortcodes":[":Antigua-Barbuda-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇬"},{"base":[127462,127470],"alternates":[],"emoticons":[],"shortcodes":[":Anguilla-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇮"},{"base":[127462,127473],"alternates":[],"emoticons":[],"shortcodes":[":Albania-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇱"},{"base":[127462,127474],"alternates":[],"emoticons":[],"shortcodes":[":Armenia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇲"},{"base":[127462,127476],"alternates":[],"emoticons":[],"shortcodes":[":Angola-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇴"},{"base":[127462,127478],"alternates":[],"emoticons":[],"shortcodes":[":Antarctica-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇶"},{"base":[127462,127479],"alternates":[],"emoticons":[],"shortcodes":[":Argentina-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇷"},{"base":[127462,127480],"alternates":[],"emoticons":[],"shortcodes":[":American-Samoa-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇸"},{"base":[127462,127481],"alternates":[],"emoticons":[],"shortcodes":[":Austria-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇹"},{"base":[127462,127482],"alternates":[],"emoticons":[],"shortcodes":[":Australia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇺"},{"base":[127462,127484],"alternates":[],"emoticons":[],"shortcodes":[":Aruba-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇼"},{"base":[127462,127485],"alternates":[],"emoticons":[],"shortcodes":[":Åland-Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇽"},{"base":[127462,127487],"alternates":[],"emoticons":[],"shortcodes":[":Azerbaijan-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇦🇿"},{"base":[127463,127462],"alternates":[],"emoticons":[],"shortcodes":[":Bosnia-Herzegovina-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇦"},{"base":[127463,127463],"alternates":[],"emoticons":[],"shortcodes":[":Barbados-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇧"},{"base":[127463,127465],"alternates":[],"emoticons":[],"shortcodes":[":Bangladesh-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇩"},{"base":[127463,127466],"alternates":[],"emoticons":[],"shortcodes":[":Belgium-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇪"},{"base":[127463,127467],"alternates":[],"emoticons":[],"shortcodes":[":Burkina-Faso-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇫"},{"base":[127463,127468],"alternates":[],"emoticons":[],"shortcodes":[":Bulgaria-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇬"},{"base":[127463,127469],"alternates":[],"emoticons":[],"shortcodes":[":Bahrain-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇭"},{"base":[127463,127470],"alternates":[],"emoticons":[],"shortcodes":[":Burundi-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇮"},{"base":[127463,127471],"alternates":[],"emoticons":[],"shortcodes":[":Benin-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇯"},{"base":[127463,127473],"alternates":[],"emoticons":[],"shortcodes":[":St-Barthélemy-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇱"},{"base":[127463,127474],"alternates":[],"emoticons":[],"shortcodes":[":Bermuda-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇲"},{"base":[127463,127475],"alternates":[],"emoticons":[],"shortcodes":[":Brunei-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇳"},{"base":[127463,127476],"alternates":[],"emoticons":[],"shortcodes":[":Bolivia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇴"},{"base":[127463,127478],"alternates":[],"emoticons":[],"shortcodes":[":Caribbean-Netherlands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇶"},{"base":[127463,127479],"alternates":[],"emoticons":[],"shortcodes":[":Brazil-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇷"},{"base":[127463,127480],"alternates":[],"emoticons":[],"shortcodes":[":Bahamas-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇸"},{"base":[127463,127481],"alternates":[],"emoticons":[],"shortcodes":[":Bhutan-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇹"},{"base":[127463,127483],"alternates":[],"emoticons":[],"shortcodes":[":Bouvet-Island-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇻"},{"base":[127463,127484],"alternates":[],"emoticons":[],"shortcodes":[":Botswana-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇼"},{"base":[127463,127486],"alternates":[],"emoticons":[],"shortcodes":[":Belarus-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇾"},{"base":[127463,127487],"alternates":[],"emoticons":[],"shortcodes":[":Belize-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇧🇿"},{"base":[127464,127462],"alternates":[],"emoticons":[],"shortcodes":[":Canada-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇦"},{"base":[127464,127464],"alternates":[],"emoticons":[],"shortcodes":[":Cocos-Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇨"},{"base":[127464,127465],"alternates":[],"emoticons":[],"shortcodes":[":Congo-Kinshasa-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇩"},{"base":[127464,127467],"alternates":[],"emoticons":[],"shortcodes":[":Central-African-Republic-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇫"},{"base":[127464,127468],"alternates":[],"emoticons":[],"shortcodes":[":Congo-Brazzaville-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇬"},{"base":[127464,127469],"alternates":[],"emoticons":[],"shortcodes":[":Switzerland-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇭"},{"base":[127464,127470],"alternates":[],"emoticons":[],"shortcodes":[":Côte-d’Ivoire-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇮"},{"base":[127464,127472],"alternates":[],"emoticons":[],"shortcodes":[":Cook-Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇰"},{"base":[127464,127473],"alternates":[],"emoticons":[],"shortcodes":[":Chile-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇱"},{"base":[127464,127474],"alternates":[],"emoticons":[],"shortcodes":[":Cameroon-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇲"},{"base":[127464,127475],"alternates":[],"emoticons":[],"shortcodes":[":China-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇳"},{"base":[127464,127476],"alternates":[],"emoticons":[],"shortcodes":[":Colombia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇴"},{"base":[127464,127477],"alternates":[],"emoticons":[],"shortcodes":[":Clipperton-Island-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇵"},{"base":[127464,127479],"alternates":[],"emoticons":[],"shortcodes":[":Costa-Rica-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇷"},{"base":[127464,127482],"alternates":[],"emoticons":[],"shortcodes":[":Cuba-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇺"},{"base":[127464,127483],"alternates":[],"emoticons":[],"shortcodes":[":Cape-Verde-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇻"},{"base":[127464,127484],"alternates":[],"emoticons":[],"shortcodes":[":Curaçao-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇼"},{"base":[127464,127485],"alternates":[],"emoticons":[],"shortcodes":[":Christmas-Island-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇽"},{"base":[127464,127486],"alternates":[],"emoticons":[],"shortcodes":[":Cyprus-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇾"},{"base":[127464,127487],"alternates":[],"emoticons":[],"shortcodes":[":Czechia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇨🇿"},{"base":[127465,127466],"alternates":[],"emoticons":[],"shortcodes":[":Germany-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇩🇪"},{"base":[127465,127468],"alternates":[],"emoticons":[],"shortcodes":[":Diego-Garcia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇩🇬"},{"base":[127465,127471],"alternates":[],"emoticons":[],"shortcodes":[":Djibouti-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇩🇯"},{"base":[127465,127472],"alternates":[],"emoticons":[],"shortcodes":[":Denmark-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇩🇰"},{"base":[127465,127474],"alternates":[],"emoticons":[],"shortcodes":[":Dominica-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇩🇲"},{"base":[127465,127476],"alternates":[],"emoticons":[],"shortcodes":[":Dominican Republic-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇩🇴"},{"base":[127465,127487],"alternates":[],"emoticons":[],"shortcodes":[":Algeria-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇩🇿"},{"base":[127466,127462],"alternates":[],"emoticons":[],"shortcodes":[":Ceuta-Melilla-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇪🇦"},{"base":[127466,127464],"alternates":[],"emoticons":[],"shortcodes":[":Ecuador-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇪🇨"},{"base":[127466,127466],"alternates":[],"emoticons":[],"shortcodes":[":Estonia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇪🇪"},{"base":[127466,127468],"alternates":[],"emoticons":[],"shortcodes":[":Egypt-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇪🇬"},{"base":[127466,127469],"alternates":[],"emoticons":[],"shortcodes":[":Western-Sahara-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇪🇭"},{"base":[127466,127479],"alternates":[],"emoticons":[],"shortcodes":[":Eritrea-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇪🇷"},{"base":[127466,127480],"alternates":[],"emoticons":[],"shortcodes":[":Spain-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇪🇸"},{"base":[127466,127481],"alternates":[],"emoticons":[],"shortcodes":[":Ethiopia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇪🇹"},{"base":[127466,127482],"alternates":[],"emoticons":[],"shortcodes":[":European-Union-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇪🇺"},{"base":[127467,127470],"alternates":[],"emoticons":[],"shortcodes":[":Finland-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇫🇮"},{"base":[127467,127471],"alternates":[],"emoticons":[],"shortcodes":[":Fiji-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇫🇯"},{"base":[127467,127472],"alternates":[],"emoticons":[],"shortcodes":[":Falkland-Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇫🇰"},{"base":[127467,127474],"alternates":[],"emoticons":[],"shortcodes":[":Micronesia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇫🇲"},{"base":[127467,127476],"alternates":[],"emoticons":[],"shortcodes":[":Faroe-Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇫🇴"},{"base":[127467,127479],"alternates":[],"emoticons":[],"shortcodes":[":France-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇫🇷"},{"base":[127468,127462],"alternates":[],"emoticons":[],"shortcodes":[":Gabon-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇦"},{"base":[127468,127463],"alternates":[],"emoticons":[],"shortcodes":[":United-Kingdom-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇧"},{"base":[127468,127465],"alternates":[],"emoticons":[],"shortcodes":[":Grenada-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇩"},{"base":[127468,127466],"alternates":[],"emoticons":[],"shortcodes":[":Georgia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇪"},{"base":[127468,127467],"alternates":[],"emoticons":[],"shortcodes":[":French Guiana-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇫"},{"base":[127468,127468],"alternates":[],"emoticons":[],"shortcodes":[":Guernsey-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇬"},{"base":[127468,127469],"alternates":[],"emoticons":[],"shortcodes":[":Ghana-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇭"},{"base":[127468,127470],"alternates":[],"emoticons":[],"shortcodes":[":Gibraltar-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇮"},{"base":[127468,127473],"alternates":[],"emoticons":[],"shortcodes":[":Greenland-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇱"},{"base":[127468,127474],"alternates":[],"emoticons":[],"shortcodes":[":Gambia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇲"},{"base":[127468,127475],"alternates":[],"emoticons":[],"shortcodes":[":Guinea-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇳"},{"base":[127468,127477],"alternates":[],"emoticons":[],"shortcodes":[":Guadeloupe-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇵"},{"base":[127468,127478],"alternates":[],"emoticons":[],"shortcodes":[":Equatorial-Guinea-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇶"},{"base":[127468,127479],"alternates":[],"emoticons":[],"shortcodes":[":Greece-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇷"},{"base":[127468,127480],"alternates":[],"emoticons":[],"shortcodes":[":South-Georgia-South-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇸"},{"base":[127468,127481],"alternates":[],"emoticons":[],"shortcodes":[":Guatemala-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇹"},{"base":[127468,127482],"alternates":[],"emoticons":[],"shortcodes":[":Guam-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇺"},{"base":[127468,127484],"alternates":[],"emoticons":[],"shortcodes":[":Guinea-Bissau-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇼"},{"base":[127468,127486],"alternates":[],"emoticons":[],"shortcodes":[":Guyana-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇬🇾"},{"base":[127469,127472],"alternates":[],"emoticons":[],"shortcodes":[":Hong-Kong-SAR-China-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇭🇰"},{"base":[127469,127474],"alternates":[],"emoticons":[],"shortcodes":[":Heard-McDonald Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇭🇲"},{"base":[127469,127475],"alternates":[],"emoticons":[],"shortcodes":[":Honduras-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇭🇳"},{"base":[127469,127479],"alternates":[],"emoticons":[],"shortcodes":[":Croatia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇭🇷"},{"base":[127469,127481],"alternates":[],"emoticons":[],"shortcodes":[":Haiti-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇭🇹"},{"base":[127469,127482],"alternates":[],"emoticons":[],"shortcodes":[":Hungary-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇭🇺"},{"base":[127470,127464],"alternates":[],"emoticons":[],"shortcodes":[":Canary-Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇮🇨"},{"base":[127470,127465],"alternates":[],"emoticons":[],"shortcodes":[":Indonesia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇮🇩"},{"base":[127470,127466],"alternates":[],"emoticons":[],"shortcodes":[":Ireland-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇮🇪"},{"base":[127470,127473],"alternates":[],"emoticons":[],"shortcodes":[":Israel-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇮🇱"},{"base":[127470,127474],"alternates":[],"emoticons":[],"shortcodes":[":Isle-of-Man-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇮🇲"},{"base":[127470,127475],"alternates":[],"emoticons":[],"shortcodes":[":India-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇮🇳"},{"base":[127470,127476],"alternates":[],"emoticons":[],"shortcodes":[":British-Indian-Ocean-Territory-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇮🇴"},{"base":[127470,127478],"alternates":[],"emoticons":[],"shortcodes":[":Iraq-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇮🇶"},{"base":[127470,127479],"alternates":[],"emoticons":[],"shortcodes":[":Iran-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇮🇷"},{"base":[127470,127480],"alternates":[],"emoticons":[],"shortcodes":[":Iceland-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇮🇸"},{"base":[127470,127481],"alternates":[],"emoticons":[],"shortcodes":[":Italy-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇮🇹"},{"base":[127471,127466],"alternates":[],"emoticons":[],"shortcodes":[":Jersey-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇯🇪"},{"base":[127471,127474],"alternates":[],"emoticons":[],"shortcodes":[":Jamaica-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇯🇲"},{"base":[127471,127476],"alternates":[],"emoticons":[],"shortcodes":[":Jordan-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇯🇴"},{"base":[127471,127477],"alternates":[],"emoticons":[],"shortcodes":[":Japan-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇯🇵"},{"base":[127472,127466],"alternates":[],"emoticons":[],"shortcodes":[":Kenya-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇰🇪"},{"base":[127472,127468],"alternates":[],"emoticons":[],"shortcodes":[":Kyrgyzstan-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇰🇬"},{"base":[127472,127469],"alternates":[],"emoticons":[],"shortcodes":[":Cambodia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇰🇭"},{"base":[127472,127470],"alternates":[],"emoticons":[],"shortcodes":[":Kiribati-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇰🇮"},{"base":[127472,127474],"alternates":[],"emoticons":[],"shortcodes":[":Comoros-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇰🇲"},{"base":[127472,127475],"alternates":[],"emoticons":[],"shortcodes":[":St. Kitts & Nevis-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇰🇳"},{"base":[127472,127477],"alternates":[],"emoticons":[],"shortcodes":[":North Korea-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇰🇵"},{"base":[127472,127479],"alternates":[],"emoticons":[],"shortcodes":[":South Korea-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇰🇷"},{"base":[127472,127484],"alternates":[],"emoticons":[],"shortcodes":[":Kuwait-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇰🇼"},{"base":[127472,127486],"alternates":[],"emoticons":[],"shortcodes":[":Cayman Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇰🇾"},{"base":[127472,127487],"alternates":[],"emoticons":[],"shortcodes":[":Kazakhstan-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇰🇿"},{"base":[127473,127462],"alternates":[],"emoticons":[],"shortcodes":[":Laos-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇱🇦"},{"base":[127473,127463],"alternates":[],"emoticons":[],"shortcodes":[":Lebanon-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇱🇧"},{"base":[127473,127464],"alternates":[],"emoticons":[],"shortcodes":[":St. Lucia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇱🇨"},{"base":[127473,127470],"alternates":[],"emoticons":[],"shortcodes":[":Liechtenstein-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇱🇮"},{"base":[127473,127472],"alternates":[],"emoticons":[],"shortcodes":[":Sri Lanka-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇱🇰"},{"base":[127473,127479],"alternates":[],"emoticons":[],"shortcodes":[":Liberia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇱🇷"},{"base":[127473,127480],"alternates":[],"emoticons":[],"shortcodes":[":Lesotho-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇱🇸"},{"base":[127473,127481],"alternates":[],"emoticons":[],"shortcodes":[":Lithuania-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇱🇹"},{"base":[127473,127482],"alternates":[],"emoticons":[],"shortcodes":[":Luxembourg-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇱🇺"},{"base":[127473,127483],"alternates":[],"emoticons":[],"shortcodes":[":Latvia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇱🇻"},{"base":[127473,127486],"alternates":[],"emoticons":[],"shortcodes":[":Libya-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇱🇾"},{"base":[127474,127462],"alternates":[],"emoticons":[],"shortcodes":[":Morocco-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇦"},{"base":[127474,127464],"alternates":[],"emoticons":[],"shortcodes":[":Monaco-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇨"},{"base":[127474,127465],"alternates":[],"emoticons":[],"shortcodes":[":Moldova-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇩"},{"base":[127474,127466],"alternates":[],"emoticons":[],"shortcodes":[":Montenegro-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇪"},{"base":[127474,127467],"alternates":[],"emoticons":[],"shortcodes":[":St-Martin-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇫"},{"base":[127474,127468],"alternates":[],"emoticons":[],"shortcodes":[":Madagascar-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇬"},{"base":[127474,127469],"alternates":[],"emoticons":[],"shortcodes":[":Marshall-Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇭"},{"base":[127474,127472],"alternates":[],"emoticons":[],"shortcodes":[":Macedonia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇰"},{"base":[127474,127473],"alternates":[],"emoticons":[],"shortcodes":[":Mali-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇱"},{"base":[127474,127474],"alternates":[],"emoticons":[],"shortcodes":[":Myanmar-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇲"},{"base":[127474,127475],"alternates":[],"emoticons":[],"shortcodes":[":Mongolia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇳"},{"base":[127474,127476],"alternates":[],"emoticons":[],"shortcodes":[":Macau-SAR-China-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇴"},{"base":[127474,127477],"alternates":[],"emoticons":[],"shortcodes":[":Northern-Mariana-Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇵"},{"base":[127474,127478],"alternates":[],"emoticons":[],"shortcodes":[":Martinique-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇶"},{"base":[127474,127479],"alternates":[],"emoticons":[],"shortcodes":[":Mauritania-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇷"},{"base":[127474,127480],"alternates":[],"emoticons":[],"shortcodes":[":Montserrat-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇸"},{"base":[127474,127481],"alternates":[],"emoticons":[],"shortcodes":[":Malta-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇹"},{"base":[127474,127482],"alternates":[],"emoticons":[],"shortcodes":[":Mauritius-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇺"},{"base":[127474,127483],"alternates":[],"emoticons":[],"shortcodes":[":Maldives-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇻"},{"base":[127474,127484],"alternates":[],"emoticons":[],"shortcodes":[":Malawi-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇼"},{"base":[127474,127485],"alternates":[],"emoticons":[],"shortcodes":[":Mexico-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇽"},{"base":[127474,127486],"alternates":[],"emoticons":[],"shortcodes":[":Malaysia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇾"},{"base":[127474,127487],"alternates":[],"emoticons":[],"shortcodes":[":Mozambique-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇲🇿"},{"base":[127475,127462],"alternates":[],"emoticons":[],"shortcodes":[":Namibia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇳🇦"},{"base":[127475,127464],"alternates":[],"emoticons":[],"shortcodes":[":New-Caledonia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇳🇨"},{"base":[127475,127466],"alternates":[],"emoticons":[],"shortcodes":[":Niger-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇳🇪"},{"base":[127475,127467],"alternates":[],"emoticons":[],"shortcodes":[":Norfolk-Island-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇳🇫"},{"base":[127475,127468],"alternates":[],"emoticons":[],"shortcodes":[":Nigeria-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇳🇬"},{"base":[127475,127470],"alternates":[],"emoticons":[],"shortcodes":[":Nicaragua-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇳🇮"},{"base":[127475,127473],"alternates":[],"emoticons":[],"shortcodes":[":Netherlands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇳🇱"},{"base":[127475,127476],"alternates":[],"emoticons":[],"shortcodes":[":Norway-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇳🇴"},{"base":[127475,127477],"alternates":[],"emoticons":[],"shortcodes":[":Nepal-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇳🇵"},{"base":[127475,127479],"alternates":[],"emoticons":[],"shortcodes":[":Nauru-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇳🇷"},{"base":[127475,127482],"alternates":[],"emoticons":[],"shortcodes":[":Niue-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇳🇺"},{"base":[127475,127487],"alternates":[],"emoticons":[],"shortcodes":[":New-Zealand-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇳🇿"},{"base":[127476,127474],"alternates":[],"emoticons":[],"shortcodes":[":Oman-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇴🇲"},{"base":[127477,127462],"alternates":[],"emoticons":[],"shortcodes":[":Panama-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇵🇦"},{"base":[127477,127466],"alternates":[],"emoticons":[],"shortcodes":[":Peru-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇵🇪"},{"base":[127477,127467],"alternates":[],"emoticons":[],"shortcodes":[":French-Polynesia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇵🇫"},{"base":[127477,127468],"alternates":[],"emoticons":[],"shortcodes":[":Papua-New-Guinea-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇵🇬"},{"base":[127477,127469],"alternates":[],"emoticons":[],"shortcodes":[":Philippines-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇵🇭"},{"base":[127477,127472],"alternates":[],"emoticons":[],"shortcodes":[":Pakistan-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇵🇰"},{"base":[127477,127473],"alternates":[],"emoticons":[],"shortcodes":[":Poland-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇵🇱"},{"base":[127477,127474],"alternates":[],"emoticons":[],"shortcodes":[":St-Pierre-Miquelon-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇵🇲"},{"base":[127477,127475],"alternates":[],"emoticons":[],"shortcodes":[":Pitcairn-Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇵🇳"},{"base":[127477,127479],"alternates":[],"emoticons":[],"shortcodes":[":Puerto-Rico-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇵🇷"},{"base":[127477,127480],"alternates":[],"emoticons":[],"shortcodes":[":Palestinian-Territories-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇵🇸"},{"base":[127477,127481],"alternates":[],"emoticons":[],"shortcodes":[":Portugal-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇵🇹"},{"base":[127477,127484],"alternates":[],"emoticons":[],"shortcodes":[":Palau-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇵🇼"},{"base":[127477,127486],"alternates":[],"emoticons":[],"shortcodes":[":Paraguay-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇵🇾"},{"base":[127478,127462],"alternates":[],"emoticons":[],"shortcodes":[":Qatar-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇶🇦"},{"base":[127479,127466],"alternates":[],"emoticons":[],"shortcodes":[":Réunion-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇷🇪"},{"base":[127479,127476],"alternates":[],"emoticons":[],"shortcodes":[":Romania-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇷🇴"},{"base":[127479,127480],"alternates":[],"emoticons":[],"shortcodes":[":Serbia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇷🇸"},{"base":[127479,127482],"alternates":[],"emoticons":[],"shortcodes":[":Russia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇷🇺"},{"base":[127479,127484],"alternates":[],"emoticons":[],"shortcodes":[":Rwanda-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇷🇼"},{"base":[127480,127462],"alternates":[],"emoticons":[],"shortcodes":[":Saudi-Arabia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇦"},{"base":[127480,127463],"alternates":[],"emoticons":[],"shortcodes":[":Solomon-Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇧"},{"base":[127480,127464],"alternates":[],"emoticons":[],"shortcodes":[":Seychelles-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇨"},{"base":[127480,127465],"alternates":[],"emoticons":[],"shortcodes":[":Sudan-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇩"},{"base":[127480,127466],"alternates":[],"emoticons":[],"shortcodes":[":Sweden-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇪"},{"base":[127480,127468],"alternates":[],"emoticons":[],"shortcodes":[":Singapore-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇬"},{"base":[127480,127469],"alternates":[],"emoticons":[],"shortcodes":[":St-Helena-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇭"},{"base":[127480,127470],"alternates":[],"emoticons":[],"shortcodes":[":Slovenia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇮"},{"base":[127480,127471],"alternates":[],"emoticons":[],"shortcodes":[":Svalbard-Jan Mayen-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇯"},{"base":[127480,127472],"alternates":[],"emoticons":[],"shortcodes":[":Slovakia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇰"},{"base":[127480,127473],"alternates":[],"emoticons":[],"shortcodes":[":Sierra-Leone-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇱"},{"base":[127480,127474],"alternates":[],"emoticons":[],"shortcodes":[":San-Marino-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇲"},{"base":[127480,127475],"alternates":[],"emoticons":[],"shortcodes":[":Senegal-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇳"},{"base":[127480,127476],"alternates":[],"emoticons":[],"shortcodes":[":Somalia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇴"},{"base":[127480,127479],"alternates":[],"emoticons":[],"shortcodes":[":Suriname-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇷"},{"base":[127480,127480],"alternates":[],"emoticons":[],"shortcodes":[":South-Sudan-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇸"},{"base":[127480,127481],"alternates":[],"emoticons":[],"shortcodes":[":São-Tomé-Príncipe-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇹"},{"base":[127480,127483],"alternates":[],"emoticons":[],"shortcodes":[":El-Salvador-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇻"},{"base":[127480,127485],"alternates":[],"emoticons":[],"shortcodes":[":Sint-Maarten-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇽"},{"base":[127480,127486],"alternates":[],"emoticons":[],"shortcodes":[":Syria-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇾"},{"base":[127480,127487],"alternates":[],"emoticons":[],"shortcodes":[":Swaziland-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇸🇿"},{"base":[127481,127462],"alternates":[],"emoticons":[],"shortcodes":[":Tristan-da-Cunha-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇦"},{"base":[127481,127464],"alternates":[],"emoticons":[],"shortcodes":[":Turks-Caicos Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇨"},{"base":[127481,127465],"alternates":[],"emoticons":[],"shortcodes":[":Chad-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇩"},{"base":[127481,127467],"alternates":[],"emoticons":[],"shortcodes":[":French-Southern-Territories-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇫"},{"base":[127481,127468],"alternates":[],"emoticons":[],"shortcodes":[":Togo-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇬"},{"base":[127481,127469],"alternates":[],"emoticons":[],"shortcodes":[":Thailand-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇭"},{"base":[127481,127471],"alternates":[],"emoticons":[],"shortcodes":[":Tajikistan-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇯"},{"base":[127481,127472],"alternates":[],"emoticons":[],"shortcodes":[":Tokelau-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇰"},{"base":[127481,127473],"alternates":[],"emoticons":[],"shortcodes":[":Timor-Leste-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇱"},{"base":[127481,127474],"alternates":[],"emoticons":[],"shortcodes":[":Turkmenistan-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇲"},{"base":[127481,127475],"alternates":[],"emoticons":[],"shortcodes":[":Tunisia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇳"},{"base":[127481,127476],"alternates":[],"emoticons":[],"shortcodes":[":Tonga-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇴"},{"base":[127481,127479],"alternates":[],"emoticons":[],"shortcodes":[":Turkey-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇷"},{"base":[127481,127481],"alternates":[],"emoticons":[],"shortcodes":[":Trinidad-Tobago-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇹"},{"base":[127481,127483],"alternates":[],"emoticons":[],"shortcodes":[":Tuvalu-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇻"},{"base":[127481,127484],"alternates":[],"emoticons":[],"shortcodes":[":Taiwan-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇼"},{"base":[127481,127487],"alternates":[],"emoticons":[],"shortcodes":[":Tanzania-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇹🇿"},{"base":[127482,127462],"alternates":[],"emoticons":[],"shortcodes":[":Ukraine-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇺🇦"},{"base":[127482,127468],"alternates":[],"emoticons":[],"shortcodes":[":Uganda-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇺🇬"},{"base":[127482,127474],"alternates":[],"emoticons":[],"shortcodes":[":US-Outlying Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇺🇲"},{"base":[127482,127475],"alternates":[],"emoticons":[],"shortcodes":[":United-Nations-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇺🇳"},{"base":[127482,127480],"alternates":[],"emoticons":[],"shortcodes":[":United-States-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇺🇸"},{"base":[127482,127486],"alternates":[],"emoticons":[],"shortcodes":[":Uruguay-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇺🇾"},{"base":[127482,127487],"alternates":[],"emoticons":[],"shortcodes":[":Uzbekistan-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇺🇿"},{"base":[127483,127462],"alternates":[],"emoticons":[],"shortcodes":[":Vatican City-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇻🇦"},{"base":[127483,127464],"alternates":[],"emoticons":[],"shortcodes":[":St-Vincent-Grenadines-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇻🇨"},{"base":[127483,127466],"alternates":[],"emoticons":[],"shortcodes":[":Venezuela-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇻🇪"},{"base":[127483,127468],"alternates":[],"emoticons":[],"shortcodes":[":British-Virgin Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇻🇬"},{"base":[127483,127470],"alternates":[],"emoticons":[],"shortcodes":[":US-Virgin-Islands-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇻🇮"},{"base":[127483,127475],"alternates":[],"emoticons":[],"shortcodes":[":Vietnam-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇻🇳"},{"base":[127483,127482],"alternates":[],"emoticons":[],"shortcodes":[":Vanuatu-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇻🇺"},{"base":[127484,127467],"alternates":[],"emoticons":[],"shortcodes":[":Wallis-Futuna-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇼🇫"},{"base":[127484,127480],"alternates":[],"emoticons":[],"shortcodes":[":Samoa-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇼🇸"},{"base":[127485,127472],"alternates":[],"emoticons":[],"shortcodes":[":Kosovo-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇽🇰"},{"base":[127486,127466],"alternates":[],"emoticons":[],"shortcodes":[":Yemen-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇾🇪"},{"base":[127486,127481],"alternates":[],"emoticons":[],"shortcodes":[":Mayotte-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇾🇹"},{"base":[127487,127462],"alternates":[],"emoticons":[],"shortcodes":[":South-Africa-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇿🇦"},{"base":[127487,127474],"alternates":[],"emoticons":[],"shortcodes":[":Zambia-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇿🇲"},{"base":[127487,127484],"alternates":[],"emoticons":[],"shortcodes":[":Zimbabwe-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🇿🇼"},{"base":[127988,917607,917602,917605,917614,917607,917631],"alternates":[],"emoticons":[],"shortcodes":[":England-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🏴󠁧󠁢󠁥󠁮󠁧󠁿"},{"base":[127988,917607,917602,917619,917603,917620,917631],"alternates":[],"emoticons":[],"shortcodes":[":Scotland-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🏴󠁧󠁢󠁳󠁣󠁴󠁿"},{"base":[127988,917607,917602,917623,917612,917619,917631],"alternates":[],"emoticons":[],"shortcodes":[":Wales-flag:"],"animated":false,"directional":false,"group":"Flags","emoji":"🏴󠁧󠁢󠁷󠁬󠁳󠁿"}]');class ga{constructor(e=[],t={}){this.docs=e,this.options={primaryKey:"_id",...t}}post(e){return this.docs.push(e),e}get(e){return this.docs.find((t=>t[this.options.primaryKey]===e))}patch(e,t){const a=this.docs.findIndex((t=>t[this.options.primaryKey]===e));return-1!==a?(this.docs[a]=this.deepMerge(this.docs[a],t),this.docs[a]):null}delete(e){const t=this.docs.findIndex((t=>t[this.options.primaryKey]===e));if(-1!==t){const e=this.docs[t];return this.docs.splice(t,1),e}return null}put(e){return e[this.options.primaryKey]?this.patch(e[this.options.primaryKey],e):this.post(e)}sort(e,t){return e.sort(((e,a)=>{for(const o of t){const{name:t,order:i}=o,s=this.getValue(e,t),n=this.getValue(a,t);if("asc"===i){if(s<n)return-1;if(s>n)return 1}else if("desc"===i){if(s>n)return-1;if(s<n)return 1}}return 0}))}search(e,t){const a=t.toLowerCase().trim();return e.filter((e=>this.deepSearch(e,a)))}filter(e,t){return e.filter((e=>this.deepFilter(e,t)))}paginate(e,t,a){const o=(t-1)*a;return e.slice(o,o+a)}slice(e,t,a){return e.slice(t,a)}getAll(e={}){let{_sort:t,_order:a,q:o,_page:i,_limit:s,_start:n,_end:l,sorters:r,filters:d,...m}=e,c=this.docs.slice();if(t&&a||r){if(!r){const e=t.split(","),o=a.split(",");r=e.map(((e,t)=>({name:e,order:o[t]})))}c=this.sort(c,r)}if(o&&(c=this.search(c,o)),Object.keys(m).length>0||d){if(!d){d=[];for(const e in m)if(Object.prototype.hasOwnProperty.call(m,e)){const t=m[e],[,a,o="_eq"]=e.match(/^(.*?)(_eq|_ne|_lt|_lte|_gt|_gte|_like|_in|_nin)?$/)||[];d.push({name:a,value:t,operator:o})}}c=this.filter(c,d)}let u=c.length;return void 0!==i&&void 0!==s?c=this.paginate(c,i,s):void 0!==n&&void 0!==l&&(c=this.slice(c,n,l)),{total:u,docs:c}}deepMerge(e,t){if(!_a(e)||!_a(t))return t;for(const a in t)_a(t[a])?(e[a]||Object.assign(e,{[a]:{}}),this.deepMerge(e[a],t[a])):Object.assign(e,{[a]:t[a]});return e}getValue(e,t){return t.split(".").reduce(((e,t)=>e&&e[t]),e)}deepSearch(e,t){if(!_a(e))return!1;for(const a in e)if(_a(e[a])){if(this.deepSearch(e[a],t))return!0}else if("string"==typeof e[a]&&e[a].toLowerCase().includes(t))return!0;return!1}deepFilter(e,t){return t.every((t=>{const{name:a,value:o,operator:i}=t,s=this.getValue(e,a);if(Array.isArray(s))switch(i){case"_eq":return s.includes(o);case"_ne":return!s.includes(o);case"_like":return s.some((e=>"string"==typeof e&&e.toLowerCase().includes(o.toLowerCase())));case"_in":return s.some((e=>o.includes(e)));case"_nin":return s.every((e=>!o.includes(e)));default:return!1}else switch(i){case"_eq":return s===o;case"_ne":return s!==o;case"_lt":return s<o;case"_lte":return s<=o;case"_gt":return s>o;case"_gte":return s>=o;case"_like":return"string"==typeof s&&s.toLowerCase().includes(o.toLowerCase());case"_in":return Array.isArray(o)&&o.includes(s);case"_nin":return Array.isArray(o)&&!o.includes(s);default:return!1}}))}}function _a(e){return null!==e&&"object"==typeof e}class ya{constructor(e,t){(this.host=e).addController(this),this.options={viewportSelector:null,scrollbarSelector:null,containerSelector:null,rowTotal:0,rowHeight:52,buffer:2,columnTotal:0,columnWidth:156,...t},this.cache=null}emit(e,t){const a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});this.viewport&&this.viewport.dispatchEvent(a)}async hostConnected(){await this.host.updateComplete,this.viewport=this.options.viewportSelector?this.host.querySelector(this.options.viewportSelector):this.host,this.scrollbar=this.options.scrollbarSelector&&this.host.querySelector(this.options.scrollbarSelector),this.container=this.options.containerSelector&&this.host.querySelector(this.options.containerSelector),this.viewport&&(this.handleVirtualScroll=this.handleVirtualScroll.bind(this),this.viewport.addEventListener("scroll",this.handleVirtualScroll),this.handleVirtualScroll())}async hostDisconnected(){await this.host.updateComplete,this.viewport&&this.viewport.removeEventListener("scroll",this.handleVirtualScroll)}handleVirtualScroll(e){window.requestAnimationFrame((()=>{this.options.rowTotal&&(this.scrollbarHeight=this.options.rowTotal*this.options.rowHeight,this.rowStart=Math.floor(this.viewport.scrollTop/this.options.rowHeight)-this.options.buffer,this.rowStart=Math.max(0,this.rowStart),this.rowLimit=Math.ceil(this.viewport.clientHeight/this.options.rowHeight)+2*this.options.buffer,this.rowLimit=Math.min(this.options.rowTotal-this.rowStart,this.rowLimit),this.rowEnd=this.rowStart+this.rowLimit,this.translateY=this.rowStart*this.options.rowHeight),this.options.columnTotal&&(this.scrollbarWidth=this.options.columnTotal*this.options.columnWidth,this.columnStart=Math.floor(this.viewport.scrollLeft/this.options.columnWidth)-this.options.buffer,this.columnStart=Math.max(0,this.columnStart),this.columnLimit=Math.ceil(this.viewport.clientWidth/this.options.columnWidth)+2*this.options.buffer,this.columnLimit=Math.min(this.options.columnTotal-this.columnStart,this.columnLimit),this.columnEnd=this.columnStart+this.columnLimit,this.translateX=this.columnStart*this.options.columnWidth);let t=JSON.stringify([this.rowStart,this.rowEnd,this.columnStart,this.columnEnd]);this.cache!==t&&(this.cache=t,this.emit("onVirtualScrollChange",e)),this.emit("onVirtualScroll",e)}))}}const va=e=>(...t)=>({_$litDirective$:e,values:t});class ka{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const ja="important",xa=" !"+ja,Sa=va(class extends ka{constructor(e){if(super(e),1!==e.type||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,a)=>{const o=e[a];return null==o?t:t+`${a=a.includes("-")?a:a.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`}),"")}update(e,[t]){const{style:a}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?a.removeProperty(e):a[e]=null);for(const e in t){const o=t[e];if(null!=o){this.ft.add(e);const t="string"==typeof o&&o.endsWith(xa);e.includes("-")||t?a.setProperty(e,t?o.slice(0,-11):o,t?ja:""):a[e]=o}}return Rt}});class Ca extends ma{static properties={...ma.properties,value:{type:String},frequentlyUsed:{type:Array}};get body(){return[this.renderMain()]}set body(e){this._body=e}get leadingActions(){return[{name:"label",component:"text-field",type:"search",placeholder:"Search",icon:"search",variant:"rounded"}]}get actions(){return[{component:"spacer"},{name:"cancel",label:"Cancel"},{name:"ok",label:"Ok"}]}get tabs(){return this.querySelector(".md-emoji-picker__tabs")}constructor(){super(),this.selection={},this.popper=new ha(this,{}),this.tabEmojis={"Frequently Used":"🕛","Smileys and emotions":"😀",People:"🙇","Animals and nature":"💐","Food and drink":"🍓","Travel and places":"🛑","Activities and events":"🎉",Objects:"📱",Symbols:"🔴",Flags:"🏁"},this.frequentlyUsed=[]}renderMain(){return Ot`
            <div class="md-emoji-picker__main">
                <div class="md-emoji-picker__tabs">
                    ${this.dataTabs.map((e=>Ot`
                        <div 
                            class="md-emoji-picker__tabs-item"
                            .data="${e}"
                            @click="${this.handleEmojiPickerTabsItemClick}"
                        >
                            <div class="md-emoji-picker__tabs-emoji md-emoji">${e.emoji}</div>
                        </div>
                    `))}
                </div>           
                <div 
                    class="md-emoji-picker__viewport"
                    @onVirtualScroll="${this.handleEmojiPickerViewportVirtualScroll}"
                >
                    <div class="md-emoji-picker__scrollbar"></div>
                    <div class="md-emoji-picker__container">
                        <div class="md-emoji-picker__grid">
                            ${this.virtualRows?.map((e=>Ot`
                                <div 
                                    class="md-emoji-picker__grid-row"
                                    style="${Sa({...!!e[0]?.label&&{position:"sticky",top:0-this.virtual.translateY+"px","z-index":"1"}})}"
                                >
                                    ${e.map((e=>Ot`
                                        <div 
                                            class="md-emoji-picker__grid-column"
                                            .data="${e}"
                                            @click="${this.handleEmojiPickerGridColumnClick}"
                                        >
                                            ${e.label?Ot`<div class="md-emoji-picker__grid-label">${e.label}</div>`:Dt}
                                            ${e.emoji?Ot`<div class="md-emoji-picker__grid-emoji md-emoji">${e.emoji}</div>`:Dt}
                                        </div>
                                    `))}
                                </div>
                            `))}
                        </div>
                    </div>
                </div> 
            </div>
        `}async connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-emoji-picker"),this.defaultValue=this.value,this.on("onTextFieldNativeInput",this.handleEmojiPickerTextFieldNativeInput),this.store=new ga(fa);const{docs:e}=this.store.getAll(),{dataTabs:t,dataRows:a}=this.createTabsAndRows(this.frequentlyUsed.concat(e),this.tabEmojis);this.dataTabs=t,this.dataRows=a,this.virtual=new ya(this,{viewportSelector:".md-emoji-picker__viewport",scrollbarSelector:".md-emoji-picker__scrollbar",containerSelector:".md-emoji-picker__container",rowTotal:this.dataRows.length,rowHeight:48,buffer:this.dataTabs.length})}async disconnectedCallback(){super.disconnectedCallback(),this.off("onTextFieldNativeInput",this.handleEmojiPickerTextFieldNativeInput)}handleEmojiPickerTextFieldNativeInput(e){const t=e.detail.currentTarget.value,{docs:a}=this.store.getAll({shortcodes_like:t}),{dataTabs:o,dataRows:i}=this.createTabsAndRows(t?a:this.frequentlyUsed.concat(a),this.tabEmojis);this.dataTabs=o,this.dataRows=i,this.virtual.options.buffer=this.dataTabs.length,this.virtual.options.rowTotal=this.dataRows.length,this.virtual.handleVirtualScroll(),this.emit("onEmojiPickerTextFieldNativeInput",e)}handleEmojiPickerTabsItemClick(e){const t=e.currentTarget.data;this.virtual.viewport.scrollTop=48*t.rowIndex+48*t.index,this.updateEmojiPickerTabsScrollLeftAndIndicator(t),this.emit("onEmojiPickerTabsItemClick",e)}updateEmojiPickerTabsScrollLeftAndIndicator(e){if(!e)return;const t=24+48*e.index,a=12+48*this.dataTabs.length+12,o=a-t-(a-360)-24;this.tabs.scrollLeft=a-360-o+24,this.style.setProperty("--md-comp-emoji-picker-tabs-indicator-left",t+"px"),this.style.setProperty("--md-comp-emoji-picker-tabs-indicator-right",o+"px")}handleEmojiPickerViewportVirtualScroll(e){this.virtualRows=this.dataRows.filter(((e,t)=>t>=this.virtual.rowStart&&t<this.virtual.rowEnd||!!e[0]?.label)),this.requestUpdate();const t=Math.floor(this.virtual.viewport.scrollTop/this.virtual.options.rowHeight),a=this.dataTabs.find(((e,a,o)=>o[a+1]?t>=e.rowIndex&&t<o[a+1].rowIndex:t>=e.rowIndex));this.data!==a&&(this.data=a,this.updateEmojiPickerTabsScrollLeftAndIndicator(a)),this.virtual.scrollbar.style.height=this.virtual.scrollbarHeight+"px",this.virtual.container.style.transform=`translate3d(0,${this.virtual.translateY}px,0)`,this.emit("onEmojiPickerViewportVirtualScroll",e)}handleEmojiPickerGridColumnClick(e){this.emit("onEmojiPickerGridColumnClick",e)}createTabsAndRows(e,t){const a=e.reduce(((e,t)=>{const{group:a="Frequently Used",emoji:o}=t;return e[a]||(e[a]=[]),e[a].push({emoji:o}),e}),{}),o=[],i=[];let s=0,n=0;for(const e in a){const l=a[e];o.push([{label:e}]),i.push({label:e,emoji:t[e]||l[0].emoji,rowIndex:s,index:n}),++s,++n;for(let e=0;e<l.length;e+=7)o.push(l.slice(e,e+7)),++s}return{dataTabs:i,dataRows:o}}handleCardIconButtonClick(e){"prev"==e.currentTarget.name?this.handleCardIconButtonPrevClick(e):"next"==e.currentTarget.name&&this.handleCardIconButtonNextClick(e),this.emit("onEmojiPickerIconButtonClick",e)}handleCardButtonClick(e){"label"==e.currentTarget.name?this.handleCardButtonLabelClick(e):"cancel"==e.currentTarget.name?this.handleCardButtonCancelClick(e):"ok"==e.currentTarget.name&&this.handleCardButtonOkClick(e),this.emit("onEmojiPickerButtonClick",e)}handleCardIconButtonPrevClick(e){this.emit("onEmojiPickerSelection",e),this.emit("onEmojiPickerIconButtonPrevClick",e)}handleCardIconButtonNextClick(e){this.emit("onEmojiPickerSelection",e),this.emit("onEmojiPickerIconButtonNextClick",e)}handleCardButtonLabelClick(e){this.emit("onEmojiPickerButtonLabelClick",e)}handleCardButtonCancelClick(e){this.emit("onEmojiPickerSelection",e),this.emit("onEmojiPickerButtonCancelClick",e)}handleCardButtonOkClick(e){this.emit("onEmojiPickerSelection",e),this.emit("onEmojiPickerButtonOkClick",e)}showModal(e,t){super.showModal(),this.setPlacement(e,t)}show(e,t){super.show(),this.setPlacement(e,t)}setPlacement(e,t){this.popper.setPlacement(e,{placements:["top-start","top-end","top","below-start","below-end","below","bottom-start","bottom-end","bottom","above-start","above-end","above","left-start","left-end","left","after-start","after-end","after","right-start","right-end","right","before-start","before-end","before","center"],...t})}}customElements.define("md-emoji-picker",Ca);class wa extends aa{static properties={variant:{type:String},icon:{type:String},label:{type:String},selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};variants=["small","large","surface","secondary","tertiary","unelevated","extended"];constructor(){super(),this.ripple=new oa(this,{clipped:!0,fadeOut:!0})}render(){return Ot`
            ${this.icon?Ot`<div class="md-icon md-fab__icon">${this.icon}</div>`:Dt}
            ${this.label?Ot`<div class="md-fab__label">${this.label}</div>`:Dt}
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-fab")}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`md-fab--${t}`,(this.variant??"").split(" ").includes(t))}e.has("disabled")&&(this.disabled?(this.setAttribute("aria-disabled","true"),this.setAttribute("tabindex","-1")):(this.removeAttribute("aria-disabled"),this.removeAttribute("tabindex")))}}customElements.define("md-fab",wa),customElements.define("md-bottom-app-bar",class extends ma{connectedCallback(){super.connectedCallback(),this.classList.add("md-card"),this.classList.add("md-bottom-app-bar")}});class Pa extends aa{static properties={src:{type:String},alt:{type:String},srcset:{type:String},sizes:{type:String},crossorigin:{type:String},usemap:{type:String},ismap:{type:Boolean},width:{type:Number},height:{type:Number},referrerpolicy:{type:String},decoding:{type:String},loading:{type:String},title:{type:String},longdesc:{type:String},fetchpriority:{type:String},ratio:{type:String},variant:{type:String}};variants=["rounded"];get nativeStyle(){let e={};return this.ratio&&(e["aspect-ratio"]=this.ratio),this.variant&&this.variant.includes("rounded")&&(this.ratio?e["border-radius"]=`50% / calc(50% * ${this.ratio})`:e["border-radius"]="50%"),e}constructor(){super(),this.loading="lazy",this.alt="alt"}render(){return Ot`
            <img 
                class="md-image__native"
                style="${Sa(this.nativeStyle)}"
                .src="${na(this.src)}"
                .alt="${na(this.alt)}"
                .srcset="${na(this.srcset)}"
                .sizes="${na(this.sizes)}"
                .crossorigin="${na(this.crossorigin)}"
                .usemap="${na(this.usemap)}"
                .ismap="${na(this.ismap)}"
                .width="${na(this.width)}"
                .height="${na(this.height)}"
                .referrerpolicy="${na(this.referrerpolicy)}"
                .decoding="${na(this.decoding)}"
                .loading="${na(this.loading)}"
                .title="${na(this.title)}"
                .longdesc="${na(this.longdesc)}"
                .fetchpriority="${na(this.fetchpriority)}"
                @load="${this.handleImageNativeLoad}"
                @error="${this.handleImageNativeError}"
            >
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-image")}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`md-image--${t}`,(this.variant??"").split(" ").includes(t))}}handleImageNativeLoad(e){this.emit("onImageNativeLoad",e)}handleImageNativeError(e){e.currentTarget.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",this.emit("onImageNativeError",e)}}customElements.define("md-image",Pa),customElements.define("md-badge",class extends aa{static properties={label:{type:Number},limit:{type:Number}};constructor(){super(),this.limit=999}render(){return this.label?Ot`<div class="md-badge__label">${this.label>this.limit?this.limit+"+":this.label}</div>`:Dt}connectedCallback(){super.connectedCallback(),this.classList.add("md-badge")}});class $a extends aa{static properties={acceptCharset:{type:String},action:{type:String},autocomplete:{type:String},enctype:{type:String},method:{type:String},name:{type:String},novalidate:{type:Boolean},target:{type:String},rel:{type:String}};get native(){return this.querySelector(".md-form__native")}constructor(){super(),this.method="post",this.enctype="application/x-www-form-urlencoded",this.acceptCharset="UTF-8",this.body=Array.from(this.childNodes)}render(){return Ot`
            <form 
                class="md-form__native"
                .acceptCharset="${na(this.acceptCharset)}"
                .action="${na(this.action)}"
                .autocomplete="${na(this.autocomplete)}"
                .enctype="${na(this.enctype)}"
                .method="${na(this.method)}"
                .name="${na(this.name)}"
                .novalidate="${na(this.novalidate)}"
                .target="${na(this.target)}"
                .rel="${na(this.rel)}"
                @reset="${this.handleFormNativeReset}"
                @submit="${this.handleFormNativeSubmit}"
            >${this.body}</form>
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-form")}handleFormNativeReset(e){for(const t of e.currentTarget.elements){const a=new CustomEvent("reset",{bubbles:!0,cancelable:!0,detail:e});t.dispatchEvent(a)}this.emit("onFormNativeReset",e)}handleFormNativeSubmit(e){e.preventDefault();const t=new FormData(e.currentTarget),a={};for(const[e,o]of t.entries())a[e]?Array.isArray(a[e])?a[e].push(o):a[e]=[a[e],o]:a[e]=o;e.formData=t,e.data=a,this.emit("onFormNativeSubmit",e)}reset(){this.native.reset()}submit(){this.native.submit()}}customElements.define("md-form",$a);class Aa extends aa{static properties={checked:{type:Boolean},defaultChecked:{type:Boolean},disabled:{type:Boolean},indeterminate:{type:Boolean},value:{type:String},name:{type:String},form:{type:Object},type:{type:String}};constructor(){super(),this.type="checkbox",this.ripple=new oa(this,{buttonSelector:".md-checkbox__native",containerSelector:".md-checkbox__track",size:40,centered:!0,fadeOut:!0})}renderNative(){return Ot`
            <input 
                .type="${this.type}" 
                class="md-checkbox__native"
                .checked="${na(this.checked)}"
                .defaultChecked="${na(this.defaultChecked)}"
                .disabled="${na(this.disabled)}"
                .indeterminate="${na(this.indeterminate)}"
                .value="${na(this.value)}"
                .defaultValue="${na(this.defaultValue)}"
                .name="${na(this.name)}"
                .form="${na(this.form)}"
                @input="${this.handleCheckboxNativeInput}"
                @reset="${this.handleCheckboxNativeReset}"
            >
        `}renderTrack(){return Ot`
            <div class="md-checkbox__track"><div class="md-checkbox__thumb"></div></div>
        `}renderContainer(){return Ot`
            <div class="md-checkbox__container">
                ${this.renderNative()}
                ${this.renderTrack()}
            </div>
        `}render(){return Ot`
            <label class="md-checkbox__inner">
                <div class="md-checkbox__label">${this.type}</div>
                ${this.renderContainer()}
            </label>
        `}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value||"on",this.defaultChecked=this.checked,this.defaultIndeterminate=this.indeterminate,this.classList.add("md-checkbox")}handleCheckboxNativeInput(e){const t=e.currentTarget;this.value=t.value,this.checked=t.checked,this.indeterminate=t.indeterminate,this.emit("onCheckboxNativeInput",e)}handleCheckboxNativeReset(e){const t=e.currentTarget;t.value=this.defaultValue,t.checked=this.defaultChecked,t.indeterminate=this.defaultIndeterminate,this.value=this.defaultValue,this.checked=this.defaultChecked,this.indeterminate=this.defaultIndeterminate,this.emit("onCheckboxNativeReset",e)}}customElements.define("md-checkbox",Aa);class Fa extends aa{static properties={checked:{type:Boolean},defaultChecked:{type:Boolean},disabled:{type:Boolean},indeterminate:{type:Boolean},value:{type:String},name:{type:String},form:{type:Object},type:{type:String}};constructor(){super(),this.type="radio",this.ripple=new oa(this,{buttonSelector:".md-radio-button__native",containerSelector:".md-radio-button__track",size:40,centered:!0,fadeOut:!0})}renderNative(){return Ot`
            <input 
                .type="${this.type}" 
                class="md-radio-button__native"
                .checked="${na(this.checked)}"
                .defaultChecked="${na(this.defaultChecked)}"
                .disabled="${na(this.disabled)}"
                .indeterminate="${na(this.indeterminate)}"
                .value="${na(this.value)}"
                .defaultValue="${na(this.defaultValue)}"
                .name="${na(this.name)}"
                .form="${na(this.form)}"
                @input="${this.handleRadioButtonNativeInput}"
                @reset="${this.handleRadioButtonNativeReset}"
            >
        `}renderTrack(){return Ot`
            <div class="md-radio-button__track"><div class="md-radio-button__thumb"></div></div>
        `}renderContainer(){return Ot`
            <div class="md-radio-button__container">
                ${this.renderNative()}
                ${this.renderTrack()}
            </div>
        `}render(){return Ot`
            <label class="md-radio-button__inner">
                <div class="md-radio-button__label">${this.type}</div>
                ${this.renderContainer()}
            </label>
        `}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value||"on",this.defaultChecked=this.checked,this.defaultIndeterminate=this.indeterminate,this.classList.add("md-radio-button")}handleRadioButtonNativeInput(e){const t=e.currentTarget;this.value=t.value,this.checked=t.checked,this.indeterminate=t.indeterminate,this.emit("onRadioButtonNativeInput",e)}handleRadioButtonNativeReset(e){const t=e.currentTarget;t.value=this.defaultValue,t.checked=this.defaultChecked,t.indeterminate=this.defaultIndeterminate,this.value=this.defaultValue,this.checked=this.defaultChecked,this.indeterminate=this.defaultIndeterminate,this.emit("onRadioButtonNativeReset",e)}}customElements.define("md-radio-button",Fa);class Ta extends aa{static properties={checked:{type:Boolean},defaultChecked:{type:Boolean},disabled:{type:Boolean},indeterminate:{type:Boolean},value:{type:String},name:{type:String},form:{type:Object},type:{type:String},icons:{type:Array}};constructor(){super(),this.type="checkbox",this.ripple=new oa(this,{buttonSelector:".md-switch__native",containerSelector:".md-switch__thumb",size:40,centered:!0,fadeOut:!0})}renderNative(){return Ot`
            <input 
                .type="${this.type}" 
                class="md-switch__native"
                .checked="${na(this.checked)}"
                .defaultChecked="${na(this.defaultChecked)}"
                .disabled="${na(this.disabled)}"
                .indeterminate="${na(this.indeterminate)}"
                .value="${na(this.value)}"
                .defaultValue="${na(this.defaultValue)}"
                .name="${na(this.name)}"
                .form="${na(this.form)}"
                @input="${this.handleSwitchNativeInput}"
                @reset="${this.handleSwitchNativeReset}"
            >
        `}renderTrack(){return Ot`
            <div class="md-switch__track"><div class="md-icon md-switch__thumb">${this.icons?.length?this.icons[~~this.checked]:Dt}</div></div>
        `}renderContainer(){return Ot`
            <div class="md-switch__container">
                ${this.renderNative()}
                ${this.renderTrack()}
            </div>
        `}render(){return Ot`
            <label class="md-switch__inner">
                <div class="md-switch__label">${this.type}</div>
                ${this.renderContainer()}
            </label>
        `}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value||"on",this.defaultChecked=this.checked,this.defaultIndeterminate=this.indeterminate,this.classList.add("md-switch")}handleSwitchNativeInput(e){const t=e.currentTarget;this.value=t.value,this.checked=t.checked,this.indeterminate=t.indeterminate,this.emit("onSwitchNativeInput",e)}handleSwitchNativeReset(e){const t=e.currentTarget;t.value=this.defaultValue,t.checked=this.defaultChecked,t.indeterminate=this.defaultIndeterminate,this.value=this.defaultValue,this.checked=this.defaultChecked,this.indeterminate=this.defaultIndeterminate,this.emit("onSwitchNativeReset",e)}}customElements.define("md-switch",Ta);class Ia extends aa{static properties={value:{type:Array,converter:{fromAttribute:e=>(/^\s*\[.*\]\s*$/.test(e)||(e=`[${e}]`),JSON.parse(e)),toAttribute:e=>JSON.stringify(e)}},defaultValue:{type:Array},min:{type:Number},max:{type:Number},step:{type:Number},disabled:{type:Boolean},form:{type:String},name:{type:String},list:{type:String},autocomplete:{type:String}};constructor(){super(),this.min=0,this.max=100,this.step=1,this.value=[void 0]}renderTrack(e){let t=2;return this.step>1&&(t=this.max/this.step),t+=1,Ot`
            <div class="md-slider__track">
                ${Array.from({length:t},((t,a)=>Ot`
                    <div class="md-slider__indicator" value="${this.step*a}" ?activated="${this.step*a<=e}"></div>
                `))}
            </div>
        `}render(){return Ot`
            <label class="md-slider__inner">
                <div class="md-slider__label">${this.type}</div>
                ${this.value.map(((e,t)=>Ot`
                    <div class="md-slider__container md-slider__container${t+1}">
                        <input 
                            type="range" 
                            class="md-slider__native"
                            .value="${na(this.value?.[t])}"
                            .defaultValue="${na(this.defaultValue?.[t])}"
                            .min="${na(this.min)}"
                            .max="${na(this.max)}"
                            .step="${na(this.step)}"
                            .disabled="${na(this.disabled)}"
                            .form="${na(this.form)}"
                            .list="${na(this.list)}"
                            .autocomplete="${na(this.autocomplete)}"
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
                    .name="${na(this.name)}"
                    .value="${na(this.value)}"
                >
            </label>
        `}async connectedCallback(){await super.connectedCallback();const e=this.max<this.min?this.min:this.min+(this.max-this.min)/2;for(let t=0;t<this.value.length;t++)this.value[t]=this.value[t]??e;this.defaultValue=this.value.slice(),this.classList.add("md-slider"),await this.updateComplete;for(let e=0;e<this.natives.length;e++)this.natives[e].value=this.value[e],this.updateStyle(e)}updateStyle(e){const t=d(this.min,this.max,this.value[e]),a=(o=this.min,i=this.max,(this.value[e]-o)/(i-o));var o,i;this.style.setProperty("--md-comp-slider-percentage"+(e+1),t+"%"),this.style.setProperty("--md-comp-slider-decimal"+(e+1),a)}async updated(e){super.updated(e),e.has("min")&&this.min<0&&this.classList.add("md-slider--centered"),e.has("step")&&this.step>1&&this.classList.add("md-slider--discrete"),e.has("value")&&this.value?.length>1&&this.classList.add("md-slider--range")}get natives(){return this.querySelectorAll(".md-slider__native")}handleSliderNativeInput(e){this.value?.length>1?(this.natives[0].value=Math.min(this.natives[0].value,this.value[1]),this.natives[1].value=Math.max(this.natives[1].value,this.value[0]),this.value[0]=this.natives[0].value,this.value[1]=this.natives[1].value,this.updateStyle(0),this.updateStyle(1)):(this.value[0]=this.natives[0].value,this.updateStyle(0)),this.requestUpdate(),this.emit("onSliderNativeInput",e)}handleSliderNativeReset(e){for(let e=0;e<this.natives.length;e++)this.natives[e].value=this.defaultValue[e],this.value[e]=this.defaultValue[e],this.updateStyle(e);this.requestUpdate(),this.emit("onSliderNativeReset",e)}}customElements.define("md-slider",Ia),customElements.define("md-progress-indicator",class extends aa{static properties={variant:{type:String},value:{type:Number},max:{type:Number}};variants=["circular","linear"];constructor(){super(),this.max=100}renderCircular(){return Ot`
            <svg class="md-progress-indicator__container" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle class="md-progress-indicator__track" cx="50" cy="50" r="45.833333333333336" />
                <circle class="md-progress-indicator__indicator" cx="50" cy="50" r="45.833333333333336" />
            </svg>
        `}renderLinear(){return Ot`
            <div class="md-progress-indicator__track">
                <div class="md-progress-indicator__indicator"></div>
            </div>
        `}render(){return this.variant&&this.variant.includes("circular")?this.renderCircular():this.renderLinear()}connectedCallback(){super.connectedCallback(),this.classList.add("md-progress-indicator")}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`md-progress-indicator--${t}`,(this.variant??"").split(" ").includes(t))}if(e.has("value")){const e=d(0,this.max,this.value);this.style.setProperty("--md-comp-progress-indicator-percentage",e+"%"),this.style.setProperty("--md-comp-progress-indicator-value",e)}}});class Ba{constructor(e,t){(this.host=e).addController(this),this.options={containerSelector:void 0,dragHandleSelector:void 0,drag:["x","y"],dragAfterLongPress:!1,resize:["n","e","s","w","ne","se","sw","nw"],resizeAfterLongPress:!1,selection:!1,selectionAfterLongPress:!1,updateStyle:!1,...t}}emit(e,t){const a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});this.container.dispatchEvent(a)}async hostConnected(){if(await this.host.updateComplete,this.container=this.options.containerSelector?this.host.querySelector(this.options.containerSelector):this.host,this.container.classList.add("md-gesture"),this.options.drag.length&&(this.dragHandle=this.options.dragHandleSelector?this.container.querySelector(this.options.dragHandleSelector):this.container,this.dragHandle.classList.add("md-draggable")),this.options.resize.length){this.resizable=document.createElement("div"),this.resizable.classList.add("md-resizable");for(const e of this.options.resize){const t=document.createElement("div");t.classList.add("md-resizable__handle"),t.classList.add("md-resizable__handle--"+e),this.resizable.append(t)}this.container.append(this.resizable)}this.handleGesturePointerdown=this.handleGesturePointerdown.bind(this),this.handleGesturePointermove=this.handleGesturePointermove.bind(this),this.handleGesturePointerup=this.handleGesturePointerup.bind(this),this.container.addEventListener("pointerdown",this.handleGesturePointerdown)}async hostDisconnected(){await this.host.updateComplete}handleGesturePointerdown(e){if(0!==e.button)return;const t=(this.options.dragHandleSelector?e.target.closest(this.options.dragHandleSelector):this.container)==this.dragHandle,a=e.target.closest(".md-resizable__handle")?.classList.value.match(/--(\w+)$/)[1];window.addEventListener("pointermove",this.handleGesturePointermove),window.addEventListener("pointerup",this.handleGesturePointerup),document.body.classList.add("md-gesture--unselectable"),this.endX=this.endX||0,this.endY=this.endY||0,this.startX=e.clientX-this.endX,this.startY=e.clientY-this.endY,this.startWidth=this.container.clientWidth,this.startHeight=this.container.clientHeight,this.swipe=!1,this.drag=!1,this.options.dragAfterLongPress||!t||a||(this.drag=!0,this.dragHandle.classList.add("md-draggable--drag"),this.emit("onDragStart",e)),this.resize=!1,!this.options.resizeAfterLongPress&&a&&(this.resize=a,this.emit("onResizeStart",e)),this.selection=!1,!this.options.selectionAfterLongPress&&this.options.selection&&(this.selection=!0,this.emit("onSelectionStart",e)),this.longPress=!1,this.longPressTimeout=window.setTimeout((()=>{this.longPress=!0,this.emit("onLongPress",e),this.options.dragAfterLongPress&&t&&!a&&(this.drag=!0,this.dragHandle.classList.add("md-draggable--drag"),this.emit("onDragStart",e)),this.options.resizeAfterLongPress&&a&&(this.resize=a,this.emit("onResizeStart",e)),!this.drag&&!this.resize&&this.options.selectionAfterLongPress&&this.options.selection&&(this.selection=!0,this.emit("onSelectionStart",e))}),300)}handleGesturePointermove(e){window.clearTimeout(this.longPressTimeout);const t=e.clientX-this.startX,a=e.clientY-this.startY;this.swipe=!this.drag&&!this.resize&&(t-this.endX<-30?"Left":a-this.endY<-30?"Top":t-this.endX>30?"Right":a-this.endY>30?"Bottom":""),this.drag&&(this.options.drag.includes("x")&&(this.currentX=t),this.options.drag.includes("y")&&(this.currentY=a),this.emit("onDrag",e)),this.resize&&(this.resize.includes("e")&&(this.currentWidth=this.startWidth+t-this.endX),this.resize.includes("s")&&(this.currentHeight=this.startHeight+a-this.endY),this.resize.includes("w")&&(this.currentX=t,this.currentWidth=this.startWidth-this.currentX+this.endX),this.resize.includes("n")&&(this.currentY=a,this.currentHeight=this.startHeight-this.currentY+this.endY),this.emit("onResize",e)),this.selection&&this.emit("onSelection",e),this.options.updateStyle&&(this.container.style.left=(this.currentX??0)+"px",this.container.style.top=(this.currentY??0)+"px",this.container.style.width=(this.currentWidth??this.startWidth)+"px",this.container.style.height=(this.currentHeight??this.startHeight)+"px")}handleGesturePointerup(e){window.clearTimeout(this.longPressTimeout),this.options.updateStyle&&(this.endX=this.currentX,this.endY=this.currentY),this.longPress||this.swipe||(this.emit("onTap",e),performance.now()-this.lastTap<300&&(this.lastTap-this.lastDoubleTap!=0&&this.emit("onDoubleTap",e),this.lastDoubleTap=performance.now()),this.lastTap=performance.now()),this.swipe&&!this.selection&&this.emit("onSwipe"+this.swipe,e),this.selection&&this.emit("onSelectionEnd",e),this.drag&&(this.dragHandle.classList.remove("md-draggable--drag"),this.emit("onDragEnd",e)),this.resize&&this.emit("onResizeEnd",e),document.body.classList.remove("md-gesture--unselectable"),window.removeEventListener("pointermove",this.handleGesturePointermove),window.removeEventListener("pointerup",this.handleGesturePointerup)}}class Ma extends aa{static properties={avatar:{type:String},thumbnail:{type:String},video:{type:String},icon:{type:String},label:{type:String},subLabel:{type:String},badge:{type:Number},text:{type:String},leadingCheckbox:{type:Boolean},leadingRadioButton:{type:Boolean},leadingSwitch:{type:Boolean},trailingCheckbox:{type:Boolean},trailingRadioButton:{type:Boolean},trailingSwitch:{type:Boolean},selected:{type:Boolean,reflect:!0},routerLink:{type:String,reflect:!0}};constructor(){super(),this.ripple=new oa(this,{clipped:!0}),this.gesture=new Ba(this,{drag:[],dragAfterLongPress:!0,resize:[],resizeAfterLongPress:!0,selection:!0,selectionAfterLongPress:!0})}renderCheckbox(){return Ot`<md-checkbox 
            class="md-list__checkbox"
            .checked="${this.selected}"
        ></md-checkbox>`}renderRadioButton(){return Ot`<md-radio-button 
            class="md-list__radio-button"
            .checked="${this.selected}"
        ></md-radio-button>`}renderSwitch(){return Ot`<md-switch 
            class="md-list__switch"
            .checked="${this.selected}"
        ></md-switch>`}render(){return Ot`
            ${this.leadingCheckbox?this.renderCheckbox():Dt}
            ${this.leadingRadioButton?this.renderRadioButton():Dt}
            ${this.leadingSwitch?this.renderSwitch():Dt}

            ${this.avatar?Ot`<md-image class="md-list__avatar" .src="${this.avatar}" .alt="${"avatar"}" .variant="${"rounded"}"></md-image>`:Dt}
            ${this.thumbnail?Ot`<md-image class="md-list__thumbnail" .src="${this.thumbnail}" .alt="${"thumbnail"}"></md-image>`:Dt}
            ${this.video?Ot`<md-image class="md-list__video" .src="${this.video}" .alt="${"video"}" .ratio="${"3/2"}"></md-image>`:Dt}

            ${this.icon?Ot`<div class="md-icon md-list__icon">${this.icon}</div>`:Dt}

            ${this.label||this.subLabel||this.badge?Ot`
                    <div class="md-list__inner">
                        ${this.label||this.subLabel?Ot`
                                <div class="md-list__label">
                                    ${this.label?Ot`<div class="md-list__label-primary">${this.label}</div>`:Dt}
                                    ${this.subLabel?Ot`<div class="md-list__label-secondary">${this.subLabel}</div>`:Dt}
                                </div>
                        `:Dt}
                        ${this.badge?Ot`<md-badge class="md-list__badge" .label="${this.badge}"></md-badge>`:Dt}
                    </div>
            `:Dt}

            ${this.text?Ot`<div class="md-list__text">${this.text}</div>`:Dt}

            ${this.trailingCheckbox?this.renderCheckbox():Dt}
            ${this.trailingRadioButton?this.renderRadioButton():Dt}
            ${this.trailingSwitch?this.renderSwitch():Dt}
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-list__item")}async updated(e){if(super.updated(e),e.has("subLabel")){await this.requestUpdate;const e=this.querySelector(".md-list__label-secondary"),t=window.getComputedStyle(e),a=parseFloat(t.getPropertyValue("line-height"));e.scrollHeight>a?this.classList.add("md-list__item--three"):this.classList.add("md-list__item--two")}}}customElements.define("md-list-item",Ma);class La extends aa{static properties={list:{type:Array},selection:{type:Boolean},rangeSelection:{type:Boolean},multiSelection:{type:Boolean},singleSelection:{type:Boolean},allSelection:{type:Boolean}};constructor(){super()}renderListItem(e){return Ot`
            <md-list-item
                .data="${e}"
                .avatar="${na(e.avatar)}"
                .thumbnail="${na(e.thumbnail)}"
                .video="${na(e.video)}"
                .icon="${na(e.icon)}"
                .label="${na(e.label)}"
                .subLabel="${na(e.subLabel)}"
                .badge="${na(e.badge)}"
                .text="${na(e.text)}"
                .leadingCheckbox="${na(e.leadingCheckbox)}"
                .leadingRadioButton="${na(e.leadingRadioButton)}"
                .leadingSwitch="${na(e.leadingSwitch)}"
                .trailingCheckbox="${na(e.trailingCheckbox)}"
                .trailingRadioButton="${na(e.trailingRadioButton)}"
                .trailingSwitch="${na(e.trailingSwitch)}"
                .selected="${na(e.selected)}"
                .routerLink="${na(e.routerLink)}"
                @click="${this.handleListItemClick}"
                @onCheckboxNativeInput="${this.handleListItemCheckboxNativeInput}"
                @onRadioButtonNativeInput="${this.handleListItemRadioButtonNativeInput}"
                @onSwitchNativeInput="${this.handleListItemSwitchNativeInput}"
                @onSelectionStart="${this.handleListItemSelectionStart}"
                @onSelection="${this.handleListItemSelection}"
                @onSelectionEnd="${this.handleListItemSelectionEnd}"
            ></md-list-item>
        `}render(){return this.list?.map((e=>this.renderListItem(e)))}connectedCallback(){super.connectedCallback(),this.classList.add("md-list"),this.on("keydown",this.handleListKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.off("keydown",this.handleListKeydown)}select(e){for(let t=0;t<this.list.length;t++){let a=this.list[t];a.selected=a===e}this.endIndex=this.list.indexOf(e)}multiSelect(e){e.selected=!e.selected,this.selectionMode&&-1==this.list.findIndex((e=>e.selected))&&(this.selectionMode=!1)}selectRange(e){this.endIndex=this.endIndex||0,this.startIndex=this.list.indexOf(e),this.swapIndex=this.startIndex>this.endIndex,this.swapIndex&&([this.endIndex,this.startIndex]=[this.startIndex,this.endIndex]);for(let e=0;e<this.list.length;e++)this.list[e].selected=e>=this.startIndex&&e<=this.endIndex;this.swapIndex&&([this.startIndex,this.endIndex]=[this.endIndex,this.startIndex])}selectAll(){for(let e=0;e<this.list.length;e++)this.list[e].selected=!0}handleListItemClick(e){if(e.target.closest(".md-list__checkbox,.md-list__radio-button,.md-list__switch"))return;const t=e.currentTarget.data;this.rangeSelection&&e.shiftKey?this.selectRange(t):this.multiSelection&&e.ctrlKey||this.selectionMode?this.multiSelect(t):this.singleSelection&&this.select(t),this.requestUpdate(),this.emit("onListItemClick",e)}handleListKeydown(e){this.allSelection&&e.ctrlKey&&"a"==e.key&&(this.selectAll(),this.requestUpdate()),this.emit("handleListKeydown",e)}handleListItemSelectionStart(e){if(!this.selection)return;const t=e.currentTarget.data;this.select(t),this.requestUpdate(),this.emit("onListItemSelectionStart",e)}handleListItemSelection(e){if(!this.selection)return;const t=e.detail.target.closest(".md-list__item")?.data;t&&this.data!==t&&(this.data=t,this.selectRange(t),this.requestUpdate()),this.emit("onListItemSelection",e)}async handleListItemSelectionEnd(e){this.selection&&(window.requestAnimationFrame((()=>{this.selectionMode=!0})),this.emit("onListItemSelectionEnd",e))}handleListItemCheckboxNativeInput(e){const t=e.currentTarget.data;this.multiSelect(t),this.requestUpdate(),this.emit("onListItemCheckboxNativeInput",e)}handleListItemRadioButtonNativeInput(e){const t=e.currentTarget.data;this.select(t),this.requestUpdate(),this.emit("onListItemRadioButtonNativeInput",e)}handleListItemSwitchNativeInput(e){const t=e.currentTarget.data;this.multiSelect(t),this.requestUpdate(),this.emit("onListItemSwitchNativeInput",e)}}customElements.define("md-list",La);class Ea extends aa{static properties={icon:{type:String},label:{type:String},badge:{type:Number},selected:{type:Boolean,reflect:!0},routerLink:{type:String,reflect:!0},indent:{type:Number},isNode:{type:Boolean},expanded:{type:Boolean,reflect:!0},activated:{type:Boolean,reflect:!0},variant:{type:String},isParent:{type:Boolean},nodeActions:{type:Array},nodeIcons:{type:Array},leafIcons:{type:Array}};get nodeActions_(){let e=[];return"accordion"==this.variant?e=["keyboard_arrow_down","keyboard_arrow_up"]:"tree"==this.variant?e=["keyboard_arrow_right","keyboard_arrow_down"]:"level"==this.variant&&(e=["arrow_forward","arrow_back"]),this.nodeActions&&(e=this.nodeActions),e}get nodeIcons_(){let e=[];return"tree"==this.variant&&(e=["folder","folder_open"]),this.nodeIcons?e=this.nodeIcons:this.icon&&(e=[this.icon,this.icon]),e}get leafIcons_(){let e=[];return"tree"==this.variant&&(e=["draft","draft"]),this.leafIcons?e=this.leafIcons:this.icon&&(e=[this.icon,this.icon]),e}get nodeAction(){return this.nodeActions_[~~this.expanded]}get nodeicon(){return this.nodeIcons_[~~this.expanded]}get leafIcon(){return this.leafIcons_[~~this.selected]}get icon_(){return this.isNode?this.nodeicon:this.leafIcon}constructor(){super(),this.ripple=new oa(this,{clipped:!0})}renderPlain(){return Ot`
            ${this.icon_?Ot`<div class="md-icon md-tree__icon">${this.icon_}</div>`:Dt}
            ${this.label||l(this.badge)?Ot`
                <div class="md-tree__inner">
                    ${this.label?Ot`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>`:Dt}
                    ${l(this.badge)?Ot`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>`:Dt}
                </div>
            `:Dt}
            ${this.isNode?Ot`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>`:Dt}
        `}renderAccordion(){return Ot`
            ${this.icon_?Ot`<div class="md-icon md-tree__icon">${this.icon_}</div>`:this.indent>0?Ot`<div class="md-tree__indent"></div>`:Dt}
            ${this.label||l(this.badge)?Ot`
                <div class="md-tree__inner">
                    ${this.label?Ot`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>`:Dt}
                    ${l(this.badge)?Ot`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>`:Dt}
                </div>
            `:Dt}
            ${this.isNode?Ot`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>`:Dt}
        `}renderTree(){return Ot`
            ${Array.from({length:this.indent},(()=>Ot`<div class="md-tree__indent"></div>`))}
            ${this.isNode?Ot`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeAction}"></md-icon-button>`:this.indent>0?Ot`<div class="md-tree__indent"></div>`:Dt}
            ${this.icon_?Ot`<div class="md-icon md-tree__icon">${this.icon_}</div>`:Dt}
            ${this.label||l(this.badge)?Ot`
                <div class="md-tree__inner">
                    ${this.label?Ot`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>`:Dt}
                    ${l(this.badge)?Ot`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>`:Dt}
                </div>
            `:Dt}
        `}renderLevel(){return Ot`
            ${this.isParent?Ot`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeActions_[1]}"></md-icon-button>`:this.icon_?Ot`<div class="md-icon md-tree__icon">${this.icon_}</div>`:this.indent>0?Ot`<div class="md-tree__indent"></div>`:Dt}
            ${this.label||l(this.badge)?Ot`
                <div class="md-tree__inner">
                    ${this.label?Ot`<div class="md-tree__label"><div class="md-tree__label-primary">${this.label}</div></div>`:Dt}
                    ${l(this.badge)?Ot`<md-badge class="md-tree__badge" .label="${this.badge}"></md-badge>`:Dt}
                </div>
            `:Dt}
            ${this.isNode?Ot`<md-icon-button class="md-tree__icon-button" .icon="${this.nodeActions_[0]}"></md-icon-button>`:Dt}
        `}render(){return la(this.variant,[["accordion",()=>this.renderAccordion()],["tree",()=>this.renderTree()],["level",()=>this.renderLevel()]],(()=>this.renderPlain()))}connectedCallback(){super.connectedCallback(),this.classList.add("md-tree__item")}async updated(e){super.updated(e),e.has("selected")&&this.selected&&this.emit("onTreeItemSelected",this)}}customElements.define("md-tree-item",Ea);class Oa extends aa{static properties={list:{type:Array},variant:{type:String}};variants=["plain","accordion","tree","level"];constructor(){super(),this.variant="tree"}renderTreeItem(e){return Ot`
            <md-tree-item
                .data="${e}"
                .icon="${na(e.icon)}"
                .label="${na(e.label)}"
                .badge="${na(e.badge)}"
                .selected="${na(e.selected)}"
                .routerLink="${na(e.routerLink)}"
                .indent="${na(e.indent)}"
                .isNode="${na(e.isNode)}"
                .expanded="${na(e.expanded)}"
                .activated="${na(e.activated)}"
                .variant="${na(this.variant)}"
                .isParent="${na(e.isParent)}"
                .nodeActions="${na(e.nodeActions)}"
                .nodeIcons="${na(e.nodeIcons)}"
                .leafIcons="${na(e.leafIcons)}"
                @click="${this.handleTreeItemClick}"
                @onTreeItemSelected="${this.handleTreeItemSelected}"
            ></md-tree-item>
            ${e.expanded&&e.children?.length?e.children.map((e=>this.renderTreeItem(e))):Dt}
        `}render(){return("level"==this.variant&&this.getList(this.list)||this.list)?.map((e=>this.renderTreeItem(e)))}connectedCallback(){super.connectedCallback(),this.classList.add("md-tree")}async updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`${this.localName}--${t}`,(this.variant??"").split(" ").includes(t))}e.has("list")&&(await this.updateComplete,this.setList(this.list),this.requestUpdate())}getList(e){let t;for(let a=0;a<e.length;a++){let o=e[a];if(o.expanded&&(t=o.children),o.children?.length){const e=this.getList(o.children);e&&(t=e)}}return t}setList(e,t=0){let a,o;for(let i=0;i<e.length;i++){let s=e[i];if(s.indent=t,(s.expanded||s.selected)&&(a=!0),s.selected&&(o=!0),s.children?.length){"level"==this.variant&&s.children.unshift({label:s.label,parent:s,isParent:!0}),s.isNode=!0;const{expanded:e,activated:i}=this.setList(s.children,t+1);e&&(a=!0,s.expanded=!0),i&&(o=!0,s.activated=!0)}}return{expanded:a,activated:o}}select(e,t){let a;for(let o=0;o<e.length;o++){let i=e[o];i.selected=i==t,i.activated=!1,i.selected&&(a=!0),i.children?.length&&this.select(i.children,t)&&(a=!0,i.activated=!0)}return a}expand(e,t){t.expanded=!t.expanded}handleTreeItemClick(e){const t=e.currentTarget.data;t.isNode||t.isParent?(e.preventDefault(),this.expand(this.list,t.isParent?t.parent:t)):this.select(this.list,t),this.requestUpdate(),this.emit("onTreeItemClick",e)}handleTreeItemSelected(){}}customElements.define("md-tree",Oa);class Ra extends ma{static properties={...ma.properties,...Oa.properties};get body(){return[Ot`
            <md-tree
                class="md-navigation-bar__tree"
                .variant="${"plain"}"
                .list="${this.list}"
            ></md-tree>
        `]}set body(e){this._body=e}connectedCallback(){super.connectedCallback(),this.classList.add("md-sheet"),this.classList.add("md-navigation-bar")}}customElements.define("md-navigation-bar",Ra);class Da extends ma{static properties={...ma.properties,...Oa.properties};get body(){return[Ot`
            <md-tree
                class="md-navigation-drawer__tree"
                .variant="${"plain"}"
                .list="${this.list}"
            ></md-tree>
        `]}set body(e){this._body=e}connectedCallback(){super.connectedCallback(),this.classList.add("md-sheet"),this.classList.add("md-navigation-drawer")}}customElements.define("md-navigation-drawer",Da);class Na extends ma{static properties={...ma.properties,...Oa.properties};get body(){return[Ot`
            <md-tree
                class="md-navigation-rail__tree"
                .variant="${"plain"}"
                .list="${this.list}"
            ></md-tree>
        `]}set body(e){this._body=e}connectedCallback(){super.connectedCallback(),this.classList.add("md-sheet"),this.classList.add("md-navigation-rail")}}customElements.define("md-navigation-rail",Na);class qa extends ma{static properties={...ma.properties,...Oa.properties};get body(){return[Ot`
            <md-tree
                class="md-menu__tree"
                .variant="${"plain"}"
                .list="${this.list}"
                @onTreeItemClick="${this.handleMenuTreeItemClick}"
            ></md-tree>
        `]}set body(e){this._body=e}constructor(){super(),this.popper=new ha(this,{})}connectedCallback(){super.connectedCallback(),this.classList.add("md-sheet"),this.classList.add("md-menu")}handleMenuTreeItemClick(e){this.close(),this.emit("onMenuTreeItemClick",e)}showModal(e,t){super.showModal(),this.setPlacement(e,t)}show(e,t){super.show(),this.setPlacement(e,t)}setPlacement(e,t){this.popper.setPlacement(e,{placements:["top-start","top-end","top","below-start","below-end","below","bottom-start","bottom-end","bottom","above-start","above-end","above","left-start","left-end","left","after-start","after-end","after","right-start","right-end","right","before-start","before-end","before","center"],...t})}}customElements.define("md-menu",qa),customElements.define("md-tabs",class extends Oa{constructor(){super(),this.variant="primary"}variants=["primary","secondary"];connectedCallback(){super.connectedCallback(),this.classList.add("md-tabs")}handleTreeItemSelected(e){window.requestAnimationFrame((()=>{const t=e.detail;let a=t.clientWidth,o=t.offsetLeft;if("primary"===this.variant){const e=t.querySelector(".md-tree__inner");a=e.clientWidth,o+=e.offsetLeft}let i=this.scrollWidth-(o+a);this.currentSelectedIndex=this.list.indexOf(t.data);const s=this.lastSelectedIndex>this.currentSelectedIndex?"left":"right";this.style.removeProperty("--md-comp-tabs-indicator-transition-left"),this.style.removeProperty("--md-comp-tabs-indicator-transition-right"),this.style.setProperty(`--md-comp-tabs-indicator-transition-${s}`,"0ms"),this.lastSelectedIndex=this.currentSelectedIndex,this.style.setProperty("--md-comp-tabs-indicator-left",o+"px"),this.style.setProperty("--md-comp-tabs-indicator-right",i+"px")}))}});class Ha extends aa{static properties={variant:{type:String},avatar:{type:String},icon:{type:String},label:{type:String},action:{type:String},selected:{type:Boolean,reflect:!0},disabled:{type:Boolean,reflect:!0}};variants=["assist","filter","input","suggestion"];constructor(){super(),this.ripple=new oa(this,{clipped:!0})}render(){return Ot`
            ${this.selected?Ot`<div class="md-icon md-chip__icon">check</div>`:Dt}
            ${!this.selected&&this.avatar?Ot`<md-image class="md-chip__avatar" .src="${this.avatar}" .alt="${"Avatar"}" .variant="${"rounded"}"></md-image>`:Dt}
            ${!this.selected&&this.icon?Ot`<div class="md-icon md-chip__icon">${this.icon}</div>`:Dt}
            <div class="md-chip__label">${this.label}</div>
            ${this.action?Ot`<md-icon-button class="md-chip__action" .icon="${this.action}" @click="${this.handleChipActionClick}"></md-icon-button>`:Dt}
        `}connectedCallback(){super.connectedCallback(),this.classList.add("md-chip")}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`md-chip--${t}`,(this.variant??"").split(" ").includes(t))}e.has("disabled")&&(this.disabled?(this.setAttribute("aria-disabled","true"),this.setAttribute("tabindex","-1")):(this.removeAttribute("aria-disabled"),this.removeAttribute("tabindex")))}handleChipActionClick(e){this.emit("onChipActionClick",e)}}customElements.define("md-chip",Ha);class za extends aa{static properties={list:{type:Array},multiSelection:{type:Boolean}};constructor(){super()}renderChip(e){return Ot`
            <md-chip
                .data="${e}"
                .variant="${na(e.variant)}"
                .avatar="${na(e.avatar)}"
                .icon="${na(e.icon)}"
                .label="${na(e.label)}"
                .action="${na(e.action)}"
                .selected="${na(e.selected)}"
                .disabled="${na(e.disabled)}"
                @click="${this.handleChipClick}"
                @onChipActionClick="${this.handleChipActionClick}"
            ></md-chip>
        `}render(){return this.list?.map((e=>this.renderChip(e)))}connectedCallback(){super.connectedCallback(),this.classList.add("md-chips")}handleChipClick(e){const t=e.currentTarget.data;this.multiSelection&&(t.selected=!t.selected,this.requestUpdate()),this.emit("onChipClick",e)}handleChipActionClick(e){const t=e.currentTarget.data,a=this.list.indexOf(t);a>-1&&this.list.splice(a,1),this.requestUpdate()}}customElements.define("md-chips",za);class Ya extends aa{static properties={label:{type:String},icon:{type:String},prefix:{type:String},suffix:{type:String},actions:{type:Array},text:{type:String},accept:{type:String},alt:{type:String},autocomplete:{type:String},autofocus:{type:Boolean},checked:{type:Boolean},defaultChecked:{type:Boolean},disabled:{type:Boolean},files:{type:FileList},form:{type:Object},formAction:{type:String},formEnctype:{type:String},formMethod:{type:String},formNoValidate:{type:Boolean},formTarget:{type:String},height:{type:Number},indeterminate:{type:Boolean},list:{type:Object},max:{type:String},maxLength:{type:Number},min:{type:String},minLength:{type:Number},multiple:{type:Boolean},name:{type:String},pattern:{type:String},placeholder:{type:String},readOnly:{type:Boolean},required:{type:Boolean},size:{type:Number},src:{type:String},step:{type:String},type:{type:String},defaultValue:{type:String},value:{type:String},width:{type:Number},inputMode:{type:String},selectionDirection:{type:String},selectionEnd:{type:Number},selectionStart:{type:Number},align:{type:String},useMap:{type:String},cols:{type:Number},rows:{type:Number},spellcheck:{type:Boolean},wrap:{type:String},length:{type:Number},selectedIndex:{type:Number},selectedOptions:{type:HTMLCollection},options:{type:Array},errorText:{type:String},error:{type:Boolean},variant:{type:String}};variants=["filled","outlined","rounded"];get native(){return this.querySelector(".md-text-field__native")}constructor(){super(),this.type="text",this.autocomplete="off",this.renderIconButton=this.renderIconButton.bind(this)}renderInput(){return Ot`
            <input 
                class="md-text-field__native"
                .accept="${na(this.accept)}"
                .autocomplete="${na(this.autocomplete)}"
                .disabled="${na(this.disabled)}"
                .max="${na(this.max)}"
                .maxLength="${na(this.maxLength)}"
                .min="${na(this.min)}"
                .minLength="${na(this.minLength)}"
                .multiple="${na(this.multiple)}"
                .name="${na(this.name)}"
                .pattern="${na(this.pattern)}"
                .placeholder="${na(this.placeholder)}"
                .readOnly="${na(this.readOnly)}"
                .required="${na(this.required)}"
                .size="${na(this.size)}"
                .src="${na(this.src)}"
                .step="${na(this.step)}"
                .type="${na(this.type)}"
                .defaultValue="${na(this.defaultValue)}"
                .value="${na(this.value)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @search="${this.handleTextFieldNativeSearch}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            >
        `}renderTextarea(){return Ot`
            <textarea 
                class="md-text-field__native"
                .autocomplete="${na(this.autocomplete)}"
                .disabled="${na(this.disabled)}"
                .maxLength="${na(this.maxLength)}"
                .minLength="${na(this.minLength)}"
                .name="${na(this.name)}"
                .placeholder="${na(this.placeholder)}"
                .readOnly="${na(this.readOnly)}"
                .required="${na(this.required)}"
                .defaultValue="${na(this.defaultValue)}"
                .value="${na(this.value)}"
                .cols="${na(this.cols)}"
                .rows="${na(this.rows)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            ></textarea>
        `}renderSelect(){return Ot`
            <select 
                class="md-text-field__native"
                .autocomplete="${na(this.autocomplete)}"
                .disabled="${na(this.disabled)}"
                .multiple="${na(this.multiple)}"
                .name="${na(this.name)}"
                .required="${na(this.required)}"
                .size="${na(this.size)}"
                .value="${na(this.value)}"
                @focus="${this.handleTextFieldNativeFocus}"
                @blur="${this.handleTextFieldNativeBlur}"
                @input="${this.handleTextFieldNativeInput}"
                @invalid="${this.handleTextFieldNativeInvalid}"
                @reset="${this.handleTextFieldNativeReset}"
            >
                ${this.options?.map((e=>Ot`
                    <option 
                        ?disabled="${na(e.disabled)}"
                        label="${na(e.label)}"
                        ?selected="${na(e.selected)}"
                        value="${na(e.value)}"
                        text="${na(e.text)}"
                    ></option>
                `))}
            </select>
        `}renderNative(){return la(this.type,[["textarea",()=>this.renderTextarea()],["select",()=>this.renderSelect()]],(()=>this.renderInput()))}renderIconButton(e){return Ot`
            <md-icon-button
                class="md-text-field__icon-button"
                name="${na(e.name)}"
                .name="${na(e.name)}"
                .variant="${na(e.variant)}"
                .icon="${na(e.icon)}"
                .selected="${na(e.selected)}"
                .disabled="${na(e.disabled)}"
            ></md-icon-button>
        `}renderAction(e){return this.renderIconButton(e)}renderActions(){return this.actions?.length||this.error?Ot`
            <div class="md-text-field__actions">
                ${this.error?Ot`<div class="md-icon md-text-field__icon md-text-field__icon--error">error</div>`:Dt}
                ${this.actions?.map((e=>this.renderAction(e)))}
            </div>
        `:Dt}render(){return Ot`
            <label class="md-text-field__inner">
                ${this.label?Ot`<div class="md-text-field__label">${this.label}</div>`:Ot`<div class="md-text-field__nolabel">Label</div>`}
                <div class="md-text-field__container">
                    ${this.icon?Ot`<div class="md-icon md-text-field__icon">${this.icon}</div>`:Dt}
                    ${this.prefix?Ot`<div class="md-text-field__meta">${this.prefix}</div>`:Dt}
                    ${this.renderNative()}
                    ${this.suffix?Ot`<div class="md-text-field__meta">${this.suffix}</div>`:Dt}
                    ${this.renderActions()}
                </div>
                ${this.errorText||this.text?Ot`<div class="md-text-field__text">${this.errorText||this.text}</div>`:Dt}
            </label>
        `}async connectedCallback(){super.connectedCallback(),this.classList.add("md-text-field"),this.value=this.value||{color:"#000000","datetime-local":"",date:"",time:"",week:"",month:"",url:"",email:""}[this.type],this.defaultValue=this.value,this.populate()}updated(e){if(super.updated(e),e.has("variant"))for(let e=0;e<this.variants.length;e++){let t=this.variants[e];this.classList.toggle(`${this.localName}--${t}`,(this.variant??"").split(" ").includes(t))}e.has("icon")&&window.requestAnimationFrame((()=>{this.style.setProperty("--md-comp-text-field-offset-left",this.native.offsetLeft+"px")}))}handleTextFieldNativeFocus(e){this.classList.add("md-text-field--focused"),this.emit("onTextFieldNativeFocus",e)}handleTextFieldNativeBlur(e){this.classList.remove("md-text-field--focused"),this.emit("onTextFieldNativeBlur",e)}handleTextFieldNativeInput(e){"file"!==this.type&&(this.value=this.native.value),this.populate(),this.validate(),this.emit("onTextFieldNativeInput",e)}handleTextFieldNativeSearch(e){this.emit("onTextFieldNativeSearch",e)}handleTextFieldNativeInvalid(e){e.preventDefault(),this.validate(),this.emit("onTextFieldNativeInvalid",e)}handleTextFieldNativeReset(e){"file"!==this.type&&(this.native.value=this.defaultValue,this.value=this.defaultValue),this.populate(),this.validate(),this.emit("onTextFieldNativeReset",e)}populate(){this.classList.toggle("md-text-field--populated",!!this.value||"file"==this.type)}validate(){this.errorText=this.native.validationMessage,this.error=!!this.errorText,this.classList.toggle("md-text-field--error",this.error)}}customElements.define("md-text-field",Ya);class Ua{static setRoutes(e,t){return e.reduce(((e,a)=>(a.parent=t,a.pathname=`${t?.pathname??""}/${a.path}`.replace(/\/+/g,"/"),e.push(a),a.children?.length&&e.push(...this.setRoutes(a.children,a)),e)),[])}static get path(){return this.historyApiFallback?window.location.pathname:window.location.hash.replace(/^#/,"").replace(/\?.*$/,"")||"/"}static get query(){let e;e=this.historyApiFallback?window.location.search:window.location.hash.replace(/^#/,"").match(/(\?.*)$/)?.[1]||"";const t={};for(const[a,o]of new URLSearchParams(e).entries())t[a]?Array.isArray(t[a])?t[a].push(o):t[a]=[t[a],o]:t[a]=o;return t}static getRoute(e){return this.stacks.find((t=>{const a=`^${t.pathname.replace(/:(\w+)/g,"(?<$1>[^/]+)").replace(/\*/,"(?:.*)")}(?:/?$)`,o=new RegExp(a,"i"),i=e.match(o);return!!i&&(this.params={...i.groups},!0)}))}static getRoutes(e){return[e].reduce(((e,t)=>(t.parent&&e.push(...this.getRoutes(t.parent)),e.push(t),e)),[])}static getOutlet(e,t){return new Promise((a=>{let o,i,s=e,n="md-outlet:not([name])";t.outlet&&(s=document.body,n=`md-outlet[name="${t.outlet}"]`);const l=()=>{o=s.querySelector(n),o&&(i&&i.disconnect(),a(o))};l(),o||(i=new MutationObserver(l),i.observe(s,{childList:!0,subtree:!0}))}))}static async handleLoad(e){this.emit("onRouterCurrentEntryChange",e),performance.mark("markRouterCurrentEntryChange"),this.params={},this.route=this.getRoute(this.path),this.routes=this.getRoutes(this.route),this.controller&&!this.controller.signal.aborted&&this.controller.abort(),(!this.controller||this.controller&&this.controller.signal.aborted)&&(this.controller=new AbortController);for(const t of this.routes){if(this.emit("onRouterNavigate",e),performance.mark("markRouterNavigate"),t.beforeLoad)try{await new Promise(((e,a)=>{const o=t=>{this.controller.signal.removeEventListener("abort",o),t?a(t):e()};this.controller.signal.addEventListener("abort",o),t.beforeLoad(o)}))}catch(t){this.emit("onRouterNavigateError",e),performance.mark("markRouterNavigateError"),console.error(t);break}t.component||(t.component=await t.load());const a=t.parent?.component??document.body,o=await this.getOutlet(a,t);t.component.isConnected||o.parentElement.insertBefore(t.component,o.nextElementSibling);const i=Array.from(document.body.querySelectorAll("md-outlet"));for(const e of i){let t=e.nextElementSibling;for(;t;){const e=!this.routes.find((e=>e.component==t)),a=!i.find((e=>e==t));e&&a&&t.remove(),t=t.nextElementSibling}}}this.emit("onRouterNavigateSuccess",e),performance.mark("markRouterNavigateSuccess"),performance.measure("measureRouterNavigateSuccess","markRouterCurrentEntryChange","markRouterNavigateSuccess"),performance.clearMarks("markRouterCurrentEntryChange"),performance.clearMarks("markRouterNavigate"),performance.clearMarks("markRouterNavigateError"),performance.clearMarks("markRouterNavigateSuccess"),performance.clearMeasures("measureRouterNavigateSuccess")}static navigate(e){this.historyApiFallback?window.history.pushState({},"",e):window.location.hash=e}static handleClick(e){const t=e.target.closest("[routerLink]");if(t){const e=t.getAttribute("routerLink");this.navigate(e)}}static historyApiFallback=!0;static emit(e,t){const a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});window.dispatchEvent(a)}static init(e){if(this.stacks=this.setRoutes(e),this.handleLoad=this.handleLoad.bind(this),window.addEventListener("DOMContentLoaded",this.handleLoad),this.historyApiFallback){window.addEventListener("popstate",this.handleLoad);const e=window.history.pushState;window.history.pushState=function(){e.apply(this,arguments),Ua.emit("popstate")}}else window.addEventListener("hashchange",this.handleLoad);this.handleClick=this.handleClick.bind(this),window.addEventListener("click",this.handleClick)}}Ua.historyApiFallback=!1,customElements.define("dev-main",class extends aa{get topAppBar(){return this.querySelector("#topAppBar")}get navigationDrawer(){return this.querySelector("#navigationDrawer")}constructor(){super(),this.list=[{icon:"deployed_code",routerLink:"/icon",label:"Icon"},{icon:"deployed_code",routerLink:"/button",label:"Button"},{icon:"deployed_code",routerLink:"/icon-button",label:"Icon Button"},{icon:"deployed_code",routerLink:"/card",label:"Card"},{icon:"deployed_code",routerLink:"/sheet",label:"Sheet"},{icon:"deployed_code",routerLink:"/dialog",label:"Dialog"},{icon:"deployed_code",routerLink:"/top-app-bar",label:"Top App Bar"},{icon:"deployed_code",routerLink:"/side-sheet",label:"Side Sheet"},{icon:"deployed_code",routerLink:"/bottom-sheet",label:"Bottom Sheet"},{icon:"deployed_code",routerLink:"/segmented-button",label:"Segmented Button"},{icon:"deployed_code",routerLink:"/snackbar",label:"Snackbar"},{icon:"deployed_code",routerLink:"/localization",label:"Localization"},{icon:"deployed_code",routerLink:"/color",label:"Color"},{icon:"deployed_code",routerLink:"/ripple",label:"Ripple"},{icon:"deployed_code",routerLink:"/tooltip",label:"Tooltip"},{icon:"deployed_code",routerLink:"/picker",label:"Picker"},{icon:"deployed_code",routerLink:"/datetime-picker",label:"Datetime Picker"},{icon:"deployed_code",routerLink:"/date-picker",label:"Date Picker"},{icon:"deployed_code",routerLink:"/month-picker",label:"Month Picker"},{icon:"deployed_code",routerLink:"/time-picker",label:"Time Picker"},{icon:"deployed_code",routerLink:"/week-picker",label:"Week Picker"},{icon:"deployed_code",routerLink:"/color-picker",label:"Color Picker"},{icon:"deployed_code",routerLink:"/emoji-picker",label:"Emoji Picker"},{icon:"deployed_code",routerLink:"/fab",label:"Fab"},{icon:"deployed_code",routerLink:"/bottom-app-bar",label:"Bottom App Bar"},{icon:"deployed_code",routerLink:"/image",label:"Image"},{icon:"deployed_code",routerLink:"/popper",label:"Popper"},{icon:"deployed_code",routerLink:"/badge",label:"Badge"},{icon:"deployed_code",routerLink:"/form",label:"Form"},{icon:"deployed_code",routerLink:"/checkbox",label:"Checkbox"},{icon:"deployed_code",routerLink:"/radio-button",label:"Radio Button"},{icon:"deployed_code",routerLink:"/switch",label:"Switch"},{icon:"deployed_code",routerLink:"/slider",label:"Slider"},{icon:"deployed_code",routerLink:"/form2",label:"Form 2"},{icon:"deployed_code",routerLink:"/progress-indicator",label:"Progress Indicator"},{icon:"deployed_code",routerLink:"/gesture",label:"Gesture"},{icon:"deployed_code",routerLink:"/list",label:"List"},{icon:"deployed_code",routerLink:"/selection",label:"Selection"},{icon:"deployed_code",routerLink:"/tree",label:"Tree"},{icon:"deployed_code",routerLink:"/navigation",label:"Navigation"},{icon:"deployed_code",routerLink:"/navigation-bar",label:"Navigation Bar"},{icon:"deployed_code",routerLink:"/navigation-drawer",label:"Navigation Drawer"},{icon:"deployed_code",routerLink:"/navigation-rail",label:"Navigation Rail"},{icon:"deployed_code",routerLink:"/menu",label:"Menu"},{icon:"deployed_code",routerLink:"/tabs",label:"Tabs"},{icon:"deployed_code",routerLink:"/chips",label:"Chips"},{icon:"deployed_code",routerLink:"/text-field",label:"Text Field"},{icon:"deployed_code",routerLink:"/text-field2",label:"Text Field 2"},{icon:"deployed_code",routerLink:"/text-field3",label:"Text Field 3"},{icon:"deployed_code",routerLink:"/virtual",label:"Virtual"},{icon:"deployed_code",routerLink:"/emoji",label:"Emoji"}];for(let e=0;e<this.list.length;e++){let t=this.list[e];t.selected=t.routerLink===Ua.path}this.list.sort(((e,t)=>e.label.localeCompare(t.label)))}render(){return Ot`
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
        `}handleCardIconButtonClick(e){this.navigationDrawer.toggle()}handleTreeItemSelected(e){const t=e.detail;this.ready||(this.ready=!0,t.scrollIntoView({block:"center",inline:"center",behavior:"instant"}))}});const Va=document.createElement("dev-main");customElements.define("dev-icon",class extends aa{render(){return Ot`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon>image</md-icon>
                </div>
            </div>
        `}});const Wa=document.createElement("dev-icon");class Ga extends ka{constructor(e){if(super(e),this.it=Dt,2!==e.type)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===Dt||null==e)return this._t=void 0,this.it=e;if(e===Rt)return e;if("string"!=typeof e)throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Ga.directiveName="unsafeHTML",Ga.resultType=1;const Xa=va(Ga);customElements.define("dev-button",class extends aa{render(){return Ot`
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
        `}});const Ka=document.createElement("dev-button");customElements.define("dev-icon-button",class extends aa{render(){return Ot`
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
        `}});const Ja=document.createElement("dev-icon-button");customElements.define("dev-card",class extends aa{render(){return Ot`
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
        `}});const Za=document.createElement("dev-card");customElements.define("dev-sheet",class extends aa{get sheetNorth(){return this.querySelector("#sheetNorth")}get sheetEast(){return this.querySelector("#sheetEast")}get sheetSouth(){return this.querySelector("#sheetSouth")}get sheetWest(){return this.querySelector("#sheetWest")}get sheetNorthModal(){return this.querySelector("#sheetNorthModal")}get sheetEastModal(){return this.querySelector("#sheetEastModal")}get sheetSouthModal(){return this.querySelector("#sheetSouthModal")}get sheetWestModal(){return this.querySelector("#sheetWestModal")}render(){return Ot`
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
        `}handleButtonSheetNorthClick(){this.sheetNorth.toggle()}handleButtonSheetEastClick(){this.sheetEast.toggle()}handleButtonSheetSouthClick(){this.sheetSouth.toggle()}handleButtonSheetWestClick(){this.sheetWest.toggle()}handleButtonSheetNorthModalClick(){this.sheetNorthModal.showModal()}handleButtonSheetEastModalClick(){this.sheetEastModal.showModal()}handleButtonSheetSouthModalClick(){this.sheetSouthModal.showModal()}handleButtonSheetWestModalClick(){this.sheetWestModal.showModal()}handleSheetNorthClick(){this.sheetNorth.close()}handleSheetEastClick(){this.sheetEast.close()}handleSheetSouthClick(){this.sheetSouth.close()}handleSheetWestClick(){this.sheetWest.close()}handleSheetNorthModalClick(){this.sheetNorthModal.close()}handleSheetEastModalClick(){this.sheetEastModal.close()}handleSheetSouthModalClick(){this.sheetSouthModal.close()}handleSheetWestModalClick(){this.sheetWestModal.close()}});const Qa=document.createElement("dev-sheet");customElements.define("dev-dialog",class extends aa{get dialog(){return this.querySelector("#dialog")}get dialog2(){return this.querySelector("#dialog2")}get dialogFull(){return this.querySelector("#dialogFull")}render(){return Ot`
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
        `}handleButtonDialogClick(){this.dialog.showModal()}handleButtonDialog2Click(){this.dialog2.showModal()}handleButtonDialogFullClick(){this.dialogFull.show()}handleDialogClick(){this.dialog.close()}handleDialog2Click(){this.dialog2.close()}handleDialogFullClick(){this.dialogFull.close()}});const eo=document.createElement("dev-dialog");customElements.define("dev-top-app-bar",class extends aa{get topAppBarCenter(){return this.querySelector("#topAppBarCenter")}get topAppBarSmall(){return this.querySelector("#topAppBarSmall")}get topAppBarMedium(){return this.querySelector("#topAppBarMedium")}get topAppBarLarge(){return this.querySelector("#topAppBarLarge")}get center(){return this.querySelector("#center")}render(){return Ot`
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
        `}handleButtonTopAppBarCenterClick(){this.topAppBarCenter.toggle()}handleButtonTopAppBarSmallClick(){this.topAppBarSmall.toggle()}handleButtonTopAppBarMediumClick(){this.topAppBarMedium.toggle()}handleButtonTopAppBarLargeClick(){this.topAppBarLarge.toggle()}topAppBarCenterClick(){this.topAppBarCenter.close()}topAppBarSmallClick(){this.topAppBarSmall.close()}topAppBarMediumClick(){this.topAppBarMedium.close()}topAppBarLargeClick(){this.topAppBarLarge.close()}});const to=document.createElement("dev-top-app-bar");customElements.define("dev-side-sheet",class extends aa{get sideSheet(){return this.querySelector("#sideSheet")}get sideSheetModal(){return this.querySelector("#sideSheetModal")}render(){return Ot`
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
        `}handleButtonSideSheetClick(){this.sideSheet.toggle()}handleButtonSideSheetModalClick(){this.sideSheetModal.showModal()}handleSideSheetClick(){this.sideSheet.close()}handleSideSheetModalClick(){this.sideSheetModal.close()}});const ao=document.createElement("dev-side-sheet");customElements.define("dev-bottom-sheet",class extends aa{get bottomSheet(){return this.querySelector("#bottomSheet")}get bottomSheetModal(){return this.querySelector("#bottomSheetModal")}render(){return Ot`
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
        `}handleButtonBottomSheetClick(){this.bottomSheet.toggle()}handleButtonBottomSheetModalClick(){this.bottomSheetModal.showModal()}handleBottomSheetClick(){this.bottomSheet.close()}handleBottomSheetModalClick(){this.bottomSheetModal.close()}});const oo=document.createElement("dev-bottom-sheet");customElements.define("dev-segmented-button",class extends aa{render(){return Ot`
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
        `}});const io=document.createElement("dev-segmented-button");customElements.define("dev-snackbar",class extends aa{get snackbar(){return this.querySelector("#snackbar")}get snackbar1(){return this.querySelector("#snackbar1")}get snackbar2(){return this.querySelector("#snackbar2")}get snackbar3(){return this.querySelector("#snackbar3")}get snackbar4(){return this.querySelector("#snackbar4")}get snackbar5(){return this.querySelector("#snackbar5")}render(){return Ot`
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
        `}handleButtonSnackbarClick(){this.snackbar.toggle()}handleButtonSnackbar1Click(){this.snackbar1.toggle()}handleButtonSnackbar2Click(){this.snackbar2.toggle()}handleButtonSnackbar3Click(){this.snackbar3.toggle()}handleButtonSnackbar4Click(){this.snackbar4.toggle()}handleButtonSnackbar5Click(){this.snackbar5.toggle()}handleSnackbarClick(){this.snackbar.close()}handleSnackbar1Click(){this.snackbar1.close()}handleSnackbar2Click(){this.snackbar2.close()}handleSnackbar3Click(){this.snackbar3.close()}handleSnackbar4Click(){this.snackbar4.close()}handleSnackbar5Click(){this.snackbar5.close()}});const so=document.createElement("dev-snackbar"),no=Object.keys(B).map((e=>({name:e,value:B[e]})));customElements.define("dev-localization",class extends aa{render(){return Ot`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <div>${T("The older sisters perched on the window of grandma, her old teeth were only two")}</div>
                    <label for="localization">Select localization</label>
                    <select
                        name=""
                        id="localization"
                        @change="${this.handleChange}"
                    >
                        <option value="en">Select language</option>
                        ${no.map((e=>Ot`
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
        `}handleChange(e){L(e.currentTarget.value)}});const lo=document.createElement("dev-localization");customElements.define("dev-color",class extends aa{render(){return Ot`
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
        `}handleChange(e){Ge(e.currentTarget.value)}});const ro=document.createElement("dev-color");customElements.define("dev-ripple",class extends aa{render(){return Ot`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-button label="button"></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-icon-button icon="image"></md-icon-button>
                </div>
            </div>
        `}});const mo=document.createElement("dev-ripple");customElements.define("dev-tooltip",class extends aa{get tooltip(){return this.querySelector("#tooltip")}get tooltip1(){return this.querySelector("#tooltip1")}get tooltip2(){return this.querySelector("#tooltip2")}get tooltip3(){return this.querySelector("#tooltip3")}get tooltip4(){return this.querySelector("#tooltip4")}get tooltip5(){return this.querySelector("#tooltip5")}get tooltip6(){return this.querySelector("#tooltip6")}render(){return Ot`
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
        `}handleButtonTooltipPointerenter(e){this.tooltip.show(e.currentTarget)}handleButtonTooltipPointerleave(){this.tooltip.close()}handleButtonTooltip1Pointerenter(e){this.tooltip1.show(e.currentTarget)}handleButtonTooltip1Pointerleave(){this.tooltip1.close()}handleButtonTooltip2Pointerenter(e){this.tooltip2.show(e.currentTarget)}handleButtonTooltip2Pointerleave(){this.tooltip2.close()}handleButtonTooltip3Pointerenter(e){this.tooltip3.show(e.currentTarget)}handleButtonTooltip3Pointerleave(){this.tooltip3.close()}handleButtonTooltip4Pointerenter(e){this.tooltip4.show(e.currentTarget)}handleButtonTooltip4Pointerleave(){this.tooltip4.close()}handleButtonTooltip5Pointerenter(e){this.tooltip5.show(e.currentTarget)}handleButtonTooltip5Pointerleave(){this.tooltip5.close()}handleButtonTooltip6Pointerenter(e){this.tooltip6.show(e.currentTarget)}handleButtonTooltip6Pointerleave(){this.tooltip6.close()}handleTooltipClick(){this.tooltip.close()}handleTooltip1Click(){this.tooltip1.close()}handleTooltip2Click(){this.tooltip2.close()}handleTooltip3Click(){this.tooltip3.close()}handleTooltip4Click(){this.tooltip4.close()}handleTooltip5Click(){this.tooltip5.close()}handleTooltip6Click(){this.tooltip6.close()}});const co=document.createElement("dev-tooltip");customElements.define("dev-picker",class extends aa{render(){return Ot`
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
        `}get datetimePicker(){return this.querySelector("#datetimePicker")}handleDatetimePickerButtonClick(e){this.datetimePicker.showModal(e.currentTarget)}get datePicker(){return this.querySelector("#datePicker")}handleDatePickerButtonClick(e){this.datePicker.showModal(e.currentTarget)}get monthPicker(){return this.querySelector("#monthPicker")}handleMonthPickerButtonClick(e){this.monthPicker.showModal(e.currentTarget)}get timePicker(){return this.querySelector("#timePicker")}handleTimePickerButtonClick(e){this.timePicker.showModal(e.currentTarget)}get weekPicker(){return this.querySelector("#weekPicker")}handleWeekPickerButtonClick(e){this.weekPicker.showModal(e.currentTarget)}get colorPicker(){return this.querySelector("#colorPicker")}handleColorPickerButtonClick(e){this.colorPicker.showModal(e.currentTarget)}});const uo=document.createElement("dev-picker");customElements.define("dev-datetime-picker",class extends aa{render(){return Ot`
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
        `}get datetimeLocal(){return this.querySelector("#datetimeLocal")}get datetimePicker(){return this.querySelector("#datetimePicker")}get datetimePicker2(){return this.querySelector("#datetimePicker2")}handleDatetimePickerButtonClick(e){this.datetimePicker.showModal(e.currentTarget)}handleDatetimePickerButtonClick2(e){this.datetimePicker2.showModal(e.currentTarget)}handleDatetimeLocalInput(){this.datetimePicker.value=this.datetimeLocal.value}handleDatetimePickerButtonCancelClick(){this.datetimeLocal.value=this.datetimePicker.value,this.datetimePicker.close()}handleDatetimePickerButtonOkClick(){this.datetimeLocal.value=this.datetimePicker.value,this.datetimePicker.close()}handleDatetimePickerSelection(){this.datetimeLocal.value=e(this.datetimePicker.selection)}});const ho=document.createElement("dev-datetime-picker");customElements.define("dev-date-picker",class extends aa{render(){return Ot`
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
        `}get date(){return this.querySelector("#date")}get datePicker(){return this.querySelector("#datePicker")}get datePicker2(){return this.querySelector("#datePicker2")}handleDatePickerButtonClick(e){this.datePicker.showModal(e.currentTarget)}handleDatePickerButtonClick2(e){this.datePicker2.showModal(e.currentTarget)}handleDateInput(){this.datePicker.value=this.date.value}handleDatePickerButtonCancelClick(){this.date.value=this.datePicker.value,this.datePicker.close()}handleDatePickerButtonOkClick(){this.date.value=this.datePicker.value,this.datePicker.close()}handleDatePickerSelection(){this.date.value=t(this.datePicker.selection)}});const po=document.createElement("dev-date-picker");customElements.define("dev-month-picker",class extends aa{render(){return Ot`
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
        `}get month(){return this.querySelector("#month")}get monthPicker(){return this.querySelector("#monthPicker")}get monthPicker2(){return this.querySelector("#monthPicker2")}handleMonthPickerButtonClick(e){this.monthPicker.showModal(e.currentTarget)}handleMonthPickerButtonClick2(e){this.monthPicker2.showModal(e.currentTarget)}handleMonthInput(){this.monthPicker.value=this.month.value}handleMonthPickerButtonCancelClick(){this.month.value=this.monthPicker.value,this.monthPicker.close()}handleMonthPickerButtonOkClick(){this.month.value=this.monthPicker.value,this.monthPicker.close()}handleMonthPickerSelection(){this.month.value=o(this.monthPicker.selection)}});const bo=document.createElement("dev-month-picker");customElements.define("dev-time-picker",class extends aa{render(){return Ot`
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
        `}get time(){return this.querySelector("#time")}get timePicker(){return this.querySelector("#timePicker")}get timePicker2(){return this.querySelector("#timePicker2")}handleTimePickerButtonClick(e){this.timePicker.showModal(e.currentTarget)}handleTimePickerButtonClick2(e){this.timePicker2.showModal(e.currentTarget)}handleTimeInput(){this.timePicker.value=this.time.value}handleTimePickerButtonCancelClick(){this.time.value=this.timePicker.value,this.timePicker.close()}handleTimePickerButtonOkClick(){this.time.value=this.timePicker.value,this.timePicker.close()}handleTimePickerSelection(){this.time.value=s(this.timePicker.selection)}});const fo=document.createElement("dev-time-picker");customElements.define("dev-week-picker",class extends aa{render(){return Ot`
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
        `}get week(){return this.querySelector("#week")}get weekPicker(){return this.querySelector("#weekPicker")}get weekPicker2(){return this.querySelector("#weekPicker2")}handleWeekPickerButtonClick(e){this.weekPicker.showModal(e.currentTarget)}handleWeekPickerButtonClick2(e){this.weekPicker2.showModal(e.currentTarget)}handleWeekInput(){this.weekPicker.value=this.week.value}handleWeekPickerButtonCancelClick(){this.week.value=this.weekPicker.value,this.weekPicker.close()}handleWeekPickerButtonOkClick(){this.week.value=this.weekPicker.value,this.weekPicker.close()}handleWeekPickerSelection(){this.week.value=n(this.weekPicker.selection)}});const go=document.createElement("dev-week-picker");customElements.define("dev-color-picker",class extends aa{render(){return Ot`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="color">Select color</label>
                    <input
                        id="color"
                        name="color"
                        type="color"
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
        `}get color(){return this.querySelector("#color")}get colorPicker(){return this.querySelector("#colorPicker")}get colorPicker2(){return this.querySelector("#colorPicker2")}handleColorPickerButtonClick(e){this.colorPicker.showModal(e.currentTarget)}handleColorPickerButtonClick2(e){this.colorPicker2.showModal(e.currentTarget)}handleColorLocalInput(){this.colorPicker.value=this.color.value}handleColorPickerButtonCancelClick(){this.color.value=this.colorPicker.value,this.colorPicker.close()}handleColorPickerButtonOkClick(){this.color.value=this.colorPicker.value,this.colorPicker.close()}handleColorPickerSelection(){this.color.value=this.colorPicker.selection.hex.slice(0,7)}});const _o=document.createElement("dev-color-picker");customElements.define("dev-emoji-picker",class extends aa{render(){return Ot`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <label for="emoji">Select emoji</label>
                    <div
                        contenteditable="true"
                        style="display:inline-block;min-width:240px;min-height:24px;background:white;"
                        id="emoji"
                        name="emoji"
                        type="text"
                        value=""
                        @input="${this.handleEmojiLocalInput}"
                    ></div>
                    <md-emoji-picker
                        id="emojiPicker"
                        value=""
                        .frequentlyUsed="${[{emoji:"😑"},{emoji:"🥱"},{emoji:"🫣"},{emoji:"🧐"},{emoji:"😵"},{emoji:"😩"},{emoji:"😆"},{emoji:"🤪"},{emoji:"😁"},{emoji:"😔"},{emoji:"😤"},{emoji:"😮‍💨"},{emoji:"🥳"}]}"
                        @onEmojiPickerButtonCancelClick="${this.handleEmojiPickerButtonCancelClick}"
                        @onEmojiPickerButtonOkClick="${this.handleEmojiPickerButtonOkClick}"
                        @onEmojiPickerSelection="${this.handleEmojiPickerSelection}"
                        @onEmojiPickerGridColumnClick="${this.handleEmojiPickerGridColumnClick}"
                    ></md-emoji-picker>
                    <md-button
                        variant="tonal"
                        label="Emoji Picker"
                        @click="${this.handleEmojiPickerButtonClick}"
                    ></md-button>
                </div>
                <div class="md-layout-column__item md-layout-column__item--expanded3 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-emoji-picker id="emojiPicker2"></md-emoji-picker>
                    <md-button
                        variant="tonal"
                        label="Emoji Picker 2"
                        @click="${this.handleEmojiPickerButtonClick2}"
                    ></md-button>
                </div>
            </div>
        `}get emoji(){return this.querySelector("#emoji")}get emojiPicker(){return this.querySelector("#emojiPicker")}get emojiPicker2(){return this.querySelector("#emojiPicker2")}handleEmojiPickerButtonClick(e){this.emojiPicker.showModal(e.currentTarget)}handleEmojiPickerButtonClick2(e){this.emojiPicker2.showModal(e.currentTarget)}handleEmojiLocalInput(){this.emojiPicker.value=this.emoji.value}handleEmojiPickerButtonCancelClick(){this.emojiPicker.close()}handleEmojiPickerButtonOkClick(){this.emoji.value=this.emojiPicker.value,this.emojiPicker.close()}handleEmojiPickerSelection(){}handleEmojiPickerGridColumnClick(e){e.detail.currentTarget.data.emoji}});const yo=document.createElement("dev-emoji-picker");customElements.define("dev-fab",class extends aa{render(){return Ot`
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
        `}});const vo=document.createElement("dev-fab");customElements.define("dev-bottom-app-bar",class extends aa{get bottomAppBar(){return this.querySelector("#bottomAppBar")}get bottomAppBar2(){return this.querySelector("#bottomAppBar2")}render(){return Ot`
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
        `}handleButtonBottomAppBarClick(){this.bottomAppBar.toggle()}handleButtonBottomAppBar2Click(){this.bottomAppBar2.toggle()}bottomAppBarClick(){this.bottomAppBar.close()}bottomAppBar2Click(){this.bottomAppBar2.close()}});const ko=document.createElement("dev-bottom-app-bar");customElements.define("dev-image",class extends aa{render(){return Ot`
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
        `}});const jo=document.createElement("dev-image");customElements.define("dev-popper",class extends aa{get tooltip(){return this.querySelector("#tooltip")}render(){return Ot`
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
        `}handleButtonClick(e){this.tooltip.toggle(e.currentTarget)}});const xo=document.createElement("dev-popper");customElements.define("dev-badge",class extends aa{render(){return Ot`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-badge label=""></md-badge>
                    <md-badge label="1"></md-badge>
                    <md-badge label="11"></md-badge>
                    <md-badge label="111"></md-badge>
                    <md-badge label="1111"></md-badge>
                </div>
            </div>
        `}});const So=document.createElement("dev-badge");customElements.define("dev-form",class extends aa{render(){return Ot`
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
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){const t=JSON.stringify(e.detail.data);console.log(t)}});const Co=document.createElement("dev-form");customElements.define("dev-checkbox",class extends aa{render(){return Ot`
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
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const wo=document.createElement("dev-checkbox");customElements.define("dev-radio-button",class extends aa{render(){return Ot`
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
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const Po=document.createElement("dev-radio-button");customElements.define("dev-switch",class extends aa{render(){return Ot`
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
                            icons='["close","check"]'
                            name="switch2"
                            value="item1"
                            checked
                        ></md-switch>
                        <md-switch
                            icons='["close","check"]'
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
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const $o=document.createElement("dev-switch");customElements.define("dev-slider",class extends aa{render(){return Ot`
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
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const Ao=document.createElement("dev-slider");customElements.define("dev-form2",class extends aa{render(){return Ot`
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
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const Fo=document.createElement("dev-form2");customElements.define("dev-progress-indicator",class extends aa{render(){return Ot`
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
        `}});const To=document.createElement("dev-progress-indicator");customElements.define("dev-gesture",class extends aa{constructor(){super(),new Ba(this,{containerSelector:"#card",updateStyle:!0}),new Ba(this,{containerSelector:"#card2",updateStyle:!0,resize:[],drag:["x"]}),new Ba(this,{containerSelector:"#card3",updateStyle:!0,resize:[],drag:["y"]}),new Ba(this,{containerSelector:"#card4",updateStyle:!0,drag:[],resize:["e","w"]}),new Ba(this,{containerSelector:"#card5",updateStyle:!0,drag:[],resize:["s","n"]}),new Ba(this,{containerSelector:"#card6",updateStyle:!0,dragHandleSelector:'[name="drag_indicator"]'}),new Ba(this,{containerSelector:"#card7",updateStyle:!0,dragAfterLongPress:!0,resizeAfterLongPress:!0}),new Ba(this,{containerSelector:"#card8",updateStyle:!0,selection:!0,dragAfterLongPress:!0,resizeAfterLongPress:!0,selectionAfterLongPress:!0,dragHandleSelector:'[name="drag_indicator"]'})}render(){return Ot`
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
                        >${Xa(this.cardLog)}</md-card
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
                        >${Xa(this.cardLog8)}</md-card
                    >
                </div>
            </div>
        `}cardLog="";handleCardEvent(e){const t=e.currentTarget.querySelector(".md-card__inner");this.cardLog+=e.type+"<br>",this.requestUpdate(),window.requestAnimationFrame((()=>{t.scrollTop=t.scrollHeight}))}cardLog8="";handleCardEvent8(e){const t=e.currentTarget.querySelector(".md-card__inner");this.cardLog8+=e.type+"<br>",this.requestUpdate(),window.requestAnimationFrame((()=>{t.scrollTop=t.scrollHeight}))}});const Io=document.createElement("dev-gesture");customElements.define("dev-list",class extends aa{render(){return Ot`
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
        `}});const Bo=document.createElement("dev-list");customElements.define("dev-selection",class extends aa{render(){return Ot`
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
        `}});const Mo=document.createElement("dev-selection");customElements.define("dev-tree",class extends aa{constructor(){super(),this.list1=[{label:"Item 1",children:[{label:"Item 1.1",expanded:!0,children:[{label:"Item 1.1.1"},{label:"Item 1.1.2"}]},{label:"Item 1.2",children:[{label:"Item 1.2.1"},{label:"Item 1.2.2"}]}]},{label:"Item 2",children:[{label:"Item 2.1",children:[{label:"Item 2.1.1",selected:!0},{label:"Item 2.1.2"}]},{label:"Item 2.2",children:[{label:"Item 2.2.1"},{label:"Item 2.2.2"}]}]},{label:"Item 3",children:[{label:"Item 3.1",children:[{label:"Item 3.1.1"},{label:"Item 3.1.2"}]},{label:"Item 3.2",children:[{label:"Item 3.2.1"},{label:"Item 3.2.2"}]}]}],this.list2=[{label:"Item 1",children:[{label:"Item 1.1",expanded:!0,children:[{label:"Item 1.1.1"},{label:"Item 1.1.2"}]},{label:"Item 1.2",children:[{label:"Item 1.2.1"},{label:"Item 1.2.2"}]}]},{label:"Item 2",children:[{label:"Item 2.1",children:[{label:"Item 2.1.1",selected:!0},{label:"Item 2.1.2"}]},{label:"Item 2.2",children:[{label:"Item 2.2.1"},{label:"Item 2.2.2"}]}]},{label:"Item 3",children:[{label:"Item 3.1",children:[{label:"Item 3.1.1"},{label:"Item 3.1.2"}]},{label:"Item 3.2",children:[{label:"Item 3.2.1"},{label:"Item 3.2.2"}]}]}],this.list3=[{label:"Item 1",children:[{label:"Item 1.1",expanded:!0,children:[{label:"Item 1.1.1"},{label:"Item 1.1.2"}]},{label:"Item 1.2",children:[{label:"Item 1.2.1"},{label:"Item 1.2.2"}]}]},{label:"Item 2",children:[{label:"Item 2.1",children:[{label:"Item 2.1.1",selected:!0},{label:"Item 2.1.2"}]},{label:"Item 2.2",children:[{label:"Item 2.2.1"},{label:"Item 2.2.2"}]}]},{label:"Item 3",children:[{label:"Item 3.1",children:[{label:"Item 3.1.1"},{label:"Item 3.1.2"}]},{label:"Item 3.2",children:[{label:"Item 3.2.1"},{label:"Item 3.2.2"}]}]}],this.list4=[{label:"Item 1",children:[{label:"Item 1.1",expanded:!0,children:[{label:"Item 1.1.1"},{label:"Item 1.1.2"}]},{label:"Item 1.2",children:[{label:"Item 1.2.1"},{label:"Item 1.2.2"}]}]},{label:"Item 2",children:[{label:"Item 2.1",children:[{label:"Item 2.1.1",selected:!0},{label:"Item 2.1.2"}]},{label:"Item 2.2",children:[{label:"Item 2.2.1"},{label:"Item 2.2.2"}]}]},{label:"Item 3",children:[{label:"Item 3.1",children:[{label:"Item 3.1.1"},{label:"Item 3.1.2"}]},{label:"Item 3.2",children:[{label:"Item 3.2.1"},{label:"Item 3.2.2"}]}]}]}render(){return Ot`
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
        `}});const Lo=document.createElement("dev-tree");customElements.define("dev-navigation",class extends aa{constructor(){super()}render(){return Ot`
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
        `}});const Eo=document.createElement("dev-navigation");customElements.define("dev-navigation-bar",class extends aa{get navigationBar(){return this.querySelector("#navigationBar")}get navigationBar2(){return this.querySelector("#navigationBar2")}render(){return Ot`
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
        `}handleButtonNavigationBarClick(){this.navigationBar.toggle()}handleButtonNavigationBar2Click(){this.navigationBar2.toggle()}navigationBarClick(){this.navigationBar.close()}navigationBar2Click(){this.navigationBar2.close()}});const Oo=document.createElement("dev-navigation-bar");customElements.define("dev-navigation-drawer",class extends aa{get navigationDrawer(){return this.querySelector("#navigationDrawer")}get navigationDrawer2(){return this.querySelector("#navigationDrawer2")}render(){return Ot`
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
        `}handleButtonNavigationDrawerClick(){this.navigationDrawer.toggle()}handleButtonNavigationDrawer2Click(){this.navigationDrawer2.showModal()}navigationDrawerClick(){this.navigationDrawer.close()}navigationDrawer2Click(){this.navigationDrawer2.close()}});const Ro=document.createElement("dev-navigation-drawer");customElements.define("dev-navigation-rail",class extends aa{get navigationRail(){return this.querySelector("#navigationRail")}get navigationRail2(){return this.querySelector("#navigationRail2")}render(){return Ot`
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
        `}handleButtonNavigationRailClick(){this.navigationRail.toggle()}handleButtonNavigationRail2Click(){this.navigationRail2.toggle()}navigationRailClick(){this.navigationRail.close()}navigationRail2Click(){this.navigationRail2.close()}});const Do=document.createElement("dev-navigation-rail");customElements.define("dev-menu",class extends aa{get menu(){return this.querySelector("#menu")}get menu2(){return this.querySelector("#menu2")}render(){return Ot`
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
        `}handleButtonMenuClick(e){this.menu.showModal(e.currentTarget)}handleButtonMenu2Click(e){this.menu2.showModal(e.currentTarget)}menuClick(){this.menu.close()}menu2Click(){this.menu2.close()}});const No=document.createElement("dev-menu");customElements.define("dev-tabs",class extends aa{constructor(){super()}render(){return Ot`
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
        `}});const qo=document.createElement("dev-tabs");customElements.define("dev-chips",class extends aa{render(){return Ot`
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
        `}});const Ho=document.createElement("dev-chips");customElements.define("dev-text-field",class extends aa{render(){return Ot`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded filled"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>

                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            label="Label"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            label="Label"
                            prefix="Prefix"
                            suffix="Suffix"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            name="text"
                            placeholder="Placeholder"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="rounded outlined"
                            required
                            text="Text"
                            label="Label"
                            icon="image"
                            actions='[{"icon":"image"}]'
                            name="text"
                            placeholder="Placeholder"
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
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const zo=document.createElement("dev-text-field");customElements.define("dev-text-field2",class extends aa{render(){return Ot`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="#ff0000"
                            name="color"
                            placeholder="color"
                            label="Color"
                            text="Color description"
                            type="color"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="1990-10-17"
                            name="date"
                            placeholder="date"
                            label="Date"
                            text="Date description"
                            type="date"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="1990-10-17T20:30"
                            name="datetime"
                            placeholder="datetime"
                            label="Datetime"
                            text="Datetime description"
                            type="datetime-local"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="ndiing.inc@gmail.com"
                            name="email"
                            placeholder="email"
                            label="Email"
                            text="Email description"
                            type="email"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            name="file"
                            multiple
                            placeholder="file"
                            label="File"
                            text="File description"
                            type="file"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="1990-10"
                            name="month"
                            placeholder="month"
                            label="Month"
                            text="Month description"
                            type="month"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="1"
                            name="number"
                            placeholder="number"
                            label="Number"
                            text="Number description"
                            type="number"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="secret"
                            name="password"
                            placeholder="password"
                            label="Password"
                            text="Password description"
                            type="password"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="what today is it?"
                            name="search"
                            placeholder="search"
                            label="Search"
                            text="Search description"
                            type="search"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="+6281935155404"
                            name="tel"
                            placeholder="tel"
                            label="Tel"
                            text="Tel description"
                            type="tel"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="Hello word!"
                            name="text"
                            placeholder="text"
                            label="Text"
                            text="Text description"
                            type="text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="20:30"
                            name="time"
                            placeholder="time"
                            label="Time"
                            text="Time description"
                            type="time"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="https://www.google.com"
                            name="url"
                            placeholder="url"
                            label="Url"
                            text="Url description"
                            type="url"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            novalue="1990-W42"
                            name="week"
                            placeholder="week"
                            label="Week"
                            text="Week description"
                            type="week"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="#ff0000"
                            name="color"
                            placeholder="color"
                            label="Color"
                            text="Color description"
                            type="color"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="1990-10-17"
                            name="date"
                            placeholder="date"
                            label="Date"
                            text="Date description"
                            type="date"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="1990-10-17T20:30"
                            name="datetime"
                            placeholder="datetime"
                            label="Datetime"
                            text="Datetime description"
                            type="datetime-local"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="ndiing.inc@gmail.com"
                            name="email"
                            placeholder="email"
                            label="Email"
                            text="Email description"
                            type="email"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            name="file"
                            multiple
                            placeholder="file"
                            label="File"
                            text="File description"
                            type="file"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="1990-10"
                            name="month"
                            placeholder="month"
                            label="Month"
                            text="Month description"
                            type="month"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="1"
                            name="number"
                            placeholder="number"
                            label="Number"
                            text="Number description"
                            type="number"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="secret"
                            name="password"
                            placeholder="password"
                            label="Password"
                            text="Password description"
                            type="password"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="what today is it?"
                            name="search"
                            placeholder="search"
                            label="Search"
                            text="Search description"
                            type="search"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="+6281935155404"
                            name="tel"
                            placeholder="tel"
                            label="Tel"
                            text="Tel description"
                            type="tel"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="Hello word!"
                            name="text"
                            placeholder="text"
                            label="Text"
                            text="Text description"
                            type="text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="20:30"
                            name="time"
                            placeholder="time"
                            label="Time"
                            text="Time description"
                            type="time"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="https://www.google.com"
                            name="url"
                            placeholder="url"
                            label="Url"
                            text="Url description"
                            type="url"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="filled"
                            novalue="1990-W42"
                            name="week"
                            placeholder="week"
                            label="Week"
                            text="Week description"
                            type="week"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>

                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="#ff0000"
                            name="color"
                            placeholder="color"
                            label="Color"
                            text="Color description"
                            type="color"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="1990-10-17"
                            name="date"
                            placeholder="date"
                            label="Date"
                            text="Date description"
                            type="date"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="1990-10-17T20:30"
                            name="datetime"
                            placeholder="datetime"
                            label="Datetime"
                            text="Datetime description"
                            type="datetime-local"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="ndiing.inc@gmail.com"
                            name="email"
                            placeholder="email"
                            label="Email"
                            text="Email description"
                            type="email"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            name="file"
                            multiple
                            placeholder="file"
                            label="File"
                            text="File description"
                            type="file"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="1990-10"
                            name="month"
                            placeholder="month"
                            label="Month"
                            text="Month description"
                            type="month"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="1"
                            name="number"
                            placeholder="number"
                            label="Number"
                            text="Number description"
                            type="number"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="secret"
                            name="password"
                            placeholder="password"
                            label="Password"
                            text="Password description"
                            type="password"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="what today is it?"
                            name="search"
                            placeholder="search"
                            label="Search"
                            text="Search description"
                            type="search"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="+6281935155404"
                            name="tel"
                            placeholder="tel"
                            label="Tel"
                            text="Tel description"
                            type="tel"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="Hello word!"
                            name="text"
                            placeholder="text"
                            label="Text"
                            text="Text description"
                            type="text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="20:30"
                            name="time"
                            placeholder="time"
                            label="Time"
                            text="Time description"
                            type="time"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="https://www.google.com"
                            name="url"
                            placeholder="url"
                            label="Url"
                            text="Url description"
                            type="url"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            variant="outlined"
                            novalue="1990-W42"
                            name="week"
                            placeholder="week"
                            label="Week"
                            text="Week description"
                            type="week"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">1</div>

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
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const Yo=document.createElement("dev-text-field2");customElements.define("dev-text-field3",class extends aa{render(){return Ot`
            <md-form
                @onFormNativeReset="${this.handleFormNativeReset}"
                @onFormNativeSubmit="${this.handleFormNativeSubmit}"
            >
                <div class="md-layout-column">
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            name="text"
                            label="Text field"
                            type="text"
                            value="text"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            name="textarea"
                            label="Textarea field"
                            type="textarea"
                            value="textarea"
                        ></md-text-field>
                    </div>
                    <div class="md-layout-column__item md-layout-column__item--expanded2 md-layout-column__item--medium8 md-layout-column__item--compact4">
                        <md-text-field
                            name="select"
                            label="Select field"
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
        `}handleFormNativeReset(e){console.log(e)}handleFormNativeSubmit(e){console.log(JSON.stringify(e.detail.data,null,4))}});const Uo=document.createElement("dev-text-field3");customElements.define("dev-virtual",class extends aa{get viewport(){return this.querySelector(".md-virtual")}get scrollbar(){return this.querySelector(".md-virtual__scrollbar")}get container(){return this.querySelector(".md-virtual__container")}constructor(){super(),this.virtualScroll=new ya(this,{viewportSelector:".md-virtual",rowTotal:1e3,rowHeight:52,buffer:2,columnTotal:1e3,columnWidth:156}),this.addEventListener("onVirtualScrollChange",(()=>{console.log(this.virtualScroll.rowStart,this.virtualScroll.rowEnd,this.virtualScroll.columnStart,this.virtualScroll.columnEnd),this.scrollbar.style.height=this.virtualScroll.scrollbarHeight+"px",this.scrollbar.style.width=this.virtualScroll.scrollbarWidth+"px"}))}render(){return Ot`
            <div
                class="md-layout-column"
                style="margin:0;padding:24px;min-height:0;min-width:0;height:100%;width:100%;"
            >
                <div
                    class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4"
                    style="min-height:0;min-width:0;height:100%;width:100%;"
                >
                    <div class="md-virtual">
                        <div class="md-virtual__scrollbar"></div>
                        <div class="md-virtual__container"></div>
                    </div>
                </div>
            </div>
        `}});const Vo=document.createElement("dev-virtual");customElements.define("dev-emoji",class extends aa{render(){return Ot`
            <div class="md-layout-column">
                <div class="md-layout-column__item md-layout-column__item--expanded12 md-layout-column__item--medium8 md-layout-column__item--compact4">
                    <md-emoji>:D</md-emoji>
                </div>
            </div>
        `}});const Wo=document.createElement("dev-emoji");Ua.historyApiFallback=!1;const Go=[{path:"",component:Va,children:[{path:"icon",component:Wa},{path:"button",component:Ka},{path:"icon-button",component:Ja},{path:"card",component:Za},{path:"sheet",component:Qa},{path:"dialog",component:eo},{path:"top-app-bar",component:to},{path:"side-sheet",component:ao},{path:"bottom-sheet",component:oo},{path:"segmented-button",component:io},{path:"snackbar",component:so},{path:"localization",component:lo},{path:"color",component:ro},{path:"ripple",component:mo},{path:"tooltip",component:co},{path:"picker",component:uo},{path:"datetime-picker",component:ho},{path:"date-picker",component:po},{path:"month-picker",component:bo},{path:"time-picker",component:fo},{path:"week-picker",component:go},{path:"color-picker",component:_o},{path:"emoji-picker",component:yo},{path:"fab",component:vo},{path:"bottom-app-bar",component:ko},{path:"image",component:jo},{path:"popper",component:xo},{path:"badge",component:So},{path:"form",component:Co},{path:"checkbox",component:wo},{path:"radio-button",component:Po},{path:"switch",component:$o},{path:"slider",component:Ao},{path:"form2",component:Fo},{path:"progress-indicator",component:To},{path:"gesture",component:Io},{path:"list",component:Bo},{path:"selection",component:Mo},{path:"tree",component:Lo},{path:"navigation",component:Eo},{path:"navigation-bar",component:Oo},{path:"navigation-drawer",component:Ro},{path:"navigation-rail",component:Do},{path:"menu",component:No},{path:"tabs",component:qo},{path:"chips",component:Ho},{path:"text-field",component:zo},{path:"text-field2",component:Yo},{path:"text-field3",component:Uo},{path:"virtual",component:Vo},{path:"emoji",component:Wo}]},{path:"*",component:Va}];Ua.init(Go)})()})();