(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{Dl6n:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a}));const i=(t,e)=>null!==e.closest(t),r=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,o=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const i=document.querySelector("ion-router");if(i)return null!=e&&e.preventDefault(),i.push(t,n)}return!1}},JB3z:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("SxV6"),r=n("lJxs"),o=(n("oSch"),n("NVzC"),n("8Y7J")),s=n("IheW");let a=(()=>{class t{constructor(t){this._http=t,this._url="https://api.nal.usda.gov/fdc/v1/",this._searchUrl=`${this._url}/search`,this._apiKey="jAR3Dd1SkmumMDSTGsu4ayV1JtnOQ8wr174CGxmH",this.storage=window.localStorage}search(t){const e={api_key:this._apiKey,generalSearchInput:t};return this.storage.clear(),this._http.get(this._searchUrl,{params:e}).pipe(Object(i.a)(),Object(r.a)(t=>this.storage.setItem("searchResult",JSON.stringify(t))))}getDetail(t){const e={api_key:this._apiKey};return this.storage.clear(),this._http.get(this._url+t,{params:e}).pipe(Object(i.a)(),Object(r.a)(t=>this.storage.setItem("foodDetail",JSON.stringify(t))))}}return t.ngInjectableDef=o.Ib({factory:function(){return new t(o.Jb(s.c))},token:t,providedIn:"root"}),t})()},NVzC:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));class i{constructor(t){this.foods=t.foods}}},TMBv:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const i=`${t*e/n-t}ms`,r=2*Math.PI*e/n;return{r:5,style:{top:`${9*Math.sin(r)}px`,left:`${9*Math.cos(r)}px`,"animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const i=e/n,r=`${t*i-t}ms`,o=2*Math.PI*i;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:`${9-9*e}px`,"animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/n-t}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/n-t}ms`}})}}},Uch9:function(t,e,n){"use strict";n.d(e,"a",(function(){return w})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return b})),n.d(e,"e",(function(){return o}));var i=n("54nT"),r=n("kBU6");const o=t=>new Promise((e,n)=>{Object(i.l)(()=>{s(t),a(t).then(n=>{n.animation&&n.animation.destroy(),c(t),e(n)},e=>{c(t),n(e)})})}),s=t=>{const e=t.enteringEl,n=t.leavingEl;E(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),b(e,!1),n&&b(n,!1)},a=async t=>{const e=await l(t);return e?u(e,t):d(t)},c=t=>{const e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")},l=async t=>{if(t.leavingEl&&t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await n.e(96).then(n.bind(null,"QtHV"))).iosTransitionAnimation:(await n.e(97).then(n.bind(null,"cmQl"))).mdTransitionAnimation},u=async(t,e)=>{await m(e,!0);const n=t(e.baseEl,e);h(e.enteringEl,e.leavingEl);const i=await p(n,e);return e.progressCallback&&e.progressCallback(void 0),i&&g(e.enteringEl,e.leavingEl),{hasCompleted:i,animation:n}},d=async t=>{const e=t.enteringEl,n=t.leavingEl;return await m(t,!1),h(e,n),g(e,n),{hasCompleted:!0}},m=async(t,e)=>{const n=(void 0!==t.deepWait?t.deepWait:e)?[w(t.enteringEl),w(t.leavingEl)]:[v(t.enteringEl),v(t.leavingEl)];await Promise.all(n),await f(t.viewIsReady,t.enteringEl)},f=async(t,e)=>{t&&await t(e)},p=(t,e)=>{const n=e.progressCallback,i=new Promise(e=>{t.onFinish(t=>e(1===t))});return n?(t.progressStart(!0),n(t)):t.play(),i},h=(t,e)=>{y(e,r.c),y(t,r.a)},g=(t,e)=>{y(t,r.b),y(e,r.d)},y=(t,e)=>{if(t){const n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}},v=t=>t&&t.componentOnReady?t.componentOnReady():Promise.resolve(),w=async t=>{const e=t;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(w))}},b=(t,e)=>{e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))},E=(t,e,n)=>{void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")},S=t=>t.classList.contains("ion-page")?t:t.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||t},YtD4:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i=t=>{try{if("string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,a.forEach(t=>{const n=e.querySelectorAll(t);for(let i=n.length-1;i>=0;i--){const t=n[i];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const s=o(t);for(let e=0;e<s.length;e++)r(s[e])}});const i=o(e);for(let t=0;t<i.length;t++)r(i[t]);const s=document.createElement("div");s.appendChild(e);const c=s.querySelector("div");return null!==c?c.innerHTML:s.innerHTML}catch(e){return console.error(e),""}},r=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),i=e.name;if(!s.includes(i.toLowerCase())){t.removeAttribute(i);continue}const r=e.value;null!=r&&r.toLowerCase().includes("javascript:")&&t.removeAttribute(i)}const e=o(t);for(let n=0;n<e.length;n++)r(e[n])},o=t=>null!=t.children?t.children:t.childNodes,s=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},m9yc:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r}));const i=async(t,e,n,i,r)=>{if(t)return t.attachViewToDom(e,n,r,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>o.classList.add(t)),r&&Object.assign(o,r),e.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},oSch:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));class i{constructor(t){this.name=t.description,this.nutrients=t.foodNutrients.map(t=>new r(t))}}class r{constructor(t){switch(this.name=t.nutrient.name,t.nutrient.unitName){case"mg":this.amount=t.amount/1e3,this.unit="g";break;default:this.amount=t.amount,this.unit=t.nutrient.unitName}}}},opz7:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return i}));const i=()=>{const t=window.TapticEngine;t&&t.selection()},r=()=>{const t=window.TapticEngine;t&&t.gestureSelectionStart()},o=()=>{const t=window.TapticEngine;t&&t.gestureSelectionChanged()},s=()=>{const t=window.TapticEngine;t&&t.gestureSelectionEnd()}}}]);