function _defineProperties(n,l){for(var u=0;u<l.length;u++){var e=l[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,u){return l&&_defineProperties(n.prototype,l),u&&_defineProperties(n,u),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{k0NY:function(n,l,u){"use strict";u.r(l);var e=u("8Y7J"),t=function n(){_classCallCheck(this,n)},o=u("pMnS"),a=u("MKJQ"),r=u("sZkV"),i=u("SVse"),c=u("s7LF"),b=u("JB3z"),s=u("SxV6"),h=u("NVzC"),f=function(){function n(l,u){_classCallCheck(this,n),this._router=l,this._foodService=u}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"handleSearchResultClick",value:function(n){this._router.navigate(["/nutrition-detail"],{queryParams:{foodId:n.fdcId}})}},{key:"handleSearchInput",value:function(n){var l=this;this._foodService.search(n.target.value||"").pipe(Object(s.a)()).subscribe((function(){var n=l._foodService.storage.getItem("searchResult");l.searchResult=new h.a(JSON.parse(n))}))}}]),n}(),p=u("iInd"),d=e.mb({encapsulation:0,styles:[[""]],data:{}});function k(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,4,"ion-item",[],null,null,null,a.t,a.f)),e.nb(1,49152,null,0,r.E,[e.h,e.k,e.x],null,null),(n()(),e.ob(2,0,null,0,2,"ion-label",[],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.handleSearchResultClick(n.context.$implicit)&&e),e}),a.u,a.g)),e.nb(3,49152,null,0,r.K,[e.h,e.k,e.x],null,null),(n()(),e.Db(4,0,["",""]))],null,(function(n,l){n(l,4,0,l.context.$implicit.description)}))}function x(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,3,"ion-list",[],null,null,null,a.v,a.h)),e.nb(1,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(n()(),e.db(16777216,null,0,1,null,k)),e.nb(3,278528,null,0,i.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,3,0,l.component.searchResult.foods)}),null)}function v(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,6,"ion-header",[],null,null,null,a.s,a.e)),e.nb(1,49152,null,0,r.y,[e.h,e.k,e.x],null,null),(n()(),e.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.B,a.n)),e.nb(3,49152,null,0,r.wb,[e.h,e.k,e.x],null,null),(n()(),e.ob(4,0,null,0,2,"ion-title",[],null,null,null,a.A,a.m)),e.nb(5,49152,null,0,r.ub,[e.h,e.k,e.x],null,null),(n()(),e.Db(-1,0,["search"])),(n()(),e.ob(7,0,null,null,7,"ion-content",[],null,null,null,a.q,a.c)),e.nb(8,49152,null,0,r.r,[e.h,e.k,e.x],null,null),(n()(),e.ob(9,0,null,0,3,"ion-searchbar",[],null,[[null,"change"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.zb(n,12)._handleBlurEvent(u.target)&&t),"ionChange"===l&&(t=!1!==e.zb(n,12)._handleInputEvent(u.target)&&t),"change"===l&&(t=!1!==o.handleSearchInput(u)&&t),t}),a.y,a.k)),e.Ab(5120,null,c.b,(function(n){return[n]}),[r.Eb]),e.nb(11,49152,null,0,r.eb,[e.h,e.k,e.x],null,null),e.nb(12,16384,null,0,r.Eb,[e.k],null,null),(n()(),e.db(16777216,null,0,1,null,x)),e.nb(14,16384,null,0,i.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,14,0,l.component.searchResult)}),null)}var g=e.kb("app-search",f,(function(n){return e.Eb(0,[(n()(),e.ob(0,0,null,null,1,"app-search",[],null,null,null,v,d)),e.nb(1,114688,null,0,f,[p.m,b.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),m=function n(){_classCallCheck(this,n)};u.d(l,"SearchPageModuleNgFactory",(function(){return C}));var C=e.lb(t,[],(function(n){return e.wb([e.xb(512,e.j,e.W,[[8,[o.a,g]],[3,e.j],e.v]),e.xb(4608,i.k,i.j,[e.s,[2,i.q]]),e.xb(4608,c.d,c.d,[]),e.xb(4608,r.a,r.a,[e.x,e.g]),e.xb(4608,r.Ab,r.Ab,[r.a,e.j,e.p]),e.xb(4608,r.Db,r.Db,[r.a,e.j,e.p]),e.xb(1073742336,i.b,i.b,[]),e.xb(1073742336,c.c,c.c,[]),e.xb(1073742336,c.a,c.a,[]),e.xb(1073742336,r.yb,r.yb,[]),e.xb(1073742336,p.n,p.n,[[2,p.s],[2,p.m]]),e.xb(1073742336,m,m,[]),e.xb(1073742336,t,t,[]),e.xb(1024,p.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);