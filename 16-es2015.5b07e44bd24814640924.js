(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{k0NY:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),b=u("MKJQ"),r=u("sZkV"),a=u("SVse"),c=u("s7LF"),i=u("JB3z"),s=u("SxV6"),h=u("NVzC");class p{constructor(l,n){this._router=l,this._foodService=n}ngOnInit(){}handleSearchResultClick(l){this._router.navigate(["/nutrition-detail"],{queryParams:{foodId:l.fdcId}})}handleSearchInput(l){this._foodService.search(l.target.value||"").pipe(Object(s.a)()).subscribe(()=>{const l=this._foodService.storage.getItem("searchResult");this.searchResult=new h.a(JSON.parse(l))})}}var d=u("iInd"),f=e.mb({encapsulation:0,styles:[[""]],data:{}});function x(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,4,"ion-item",[],null,null,null,b.t,b.f)),e.nb(1,49152,null,0,r.E,[e.h,e.k,e.x],null,null),(l()(),e.ob(2,0,null,0,2,"ion-label",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.handleSearchResultClick(l.context.$implicit)&&e),e}),b.u,b.g)),e.nb(3,49152,null,0,r.K,[e.h,e.k,e.x],null,null),(l()(),e.Db(4,0,["",""]))],null,(function(l,n){l(n,4,0,n.context.$implicit.description)}))}function k(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,3,"ion-list",[],null,null,null,b.v,b.h)),e.nb(1,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.db(16777216,null,0,1,null,x)),e.nb(3,278528,null,0,a.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.searchResult.foods)}),null)}function g(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,6,"ion-header",[],null,null,null,b.s,b.e)),e.nb(1,49152,null,0,r.y,[e.h,e.k,e.x],null,null),(l()(),e.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,b.B,b.n)),e.nb(3,49152,null,0,r.wb,[e.h,e.k,e.x],null,null),(l()(),e.ob(4,0,null,0,2,"ion-title",[],null,null,null,b.A,b.m)),e.nb(5,49152,null,0,r.ub,[e.h,e.k,e.x],null,null),(l()(),e.Db(-1,0,["search"])),(l()(),e.ob(7,0,null,null,7,"ion-content",[],null,null,null,b.q,b.c)),e.nb(8,49152,null,0,r.r,[e.h,e.k,e.x],null,null),(l()(),e.ob(9,0,null,0,3,"ion-searchbar",[],null,[[null,"change"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.zb(l,12)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.zb(l,12)._handleInputEvent(u.target)&&t),"change"===n&&(t=!1!==o.handleSearchInput(u)&&t),t}),b.y,b.k)),e.Ab(5120,null,c.b,(function(l){return[l]}),[r.Eb]),e.nb(11,49152,null,0,r.eb,[e.h,e.k,e.x],null,null),e.nb(12,16384,null,0,r.Eb,[e.k],null,null),(l()(),e.db(16777216,null,0,1,null,k)),e.nb(14,16384,null,0,a.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,14,0,n.component.searchResult)}),null)}function v(l){return e.Eb(0,[(l()(),e.ob(0,0,null,null,1,"app-search",[],null,null,null,g,f)),e.nb(1,114688,null,0,p,[d.m,i.a],null,null)],(function(l,n){l(n,1,0)}),null)}var m=e.kb("app-search",p,v,{},{},[]);class I{}u.d(n,"SearchPageModuleNgFactory",(function(){return S}));var S=e.lb(t,[],(function(l){return e.wb([e.xb(512,e.j,e.W,[[8,[o.a,m]],[3,e.j],e.v]),e.xb(4608,a.k,a.j,[e.s,[2,a.q]]),e.xb(4608,c.d,c.d,[]),e.xb(4608,r.a,r.a,[e.x,e.g]),e.xb(4608,r.Ab,r.Ab,[r.a,e.j,e.p]),e.xb(4608,r.Db,r.Db,[r.a,e.j,e.p]),e.xb(1073742336,a.b,a.b,[]),e.xb(1073742336,c.c,c.c,[]),e.xb(1073742336,c.a,c.a,[]),e.xb(1073742336,r.yb,r.yb,[]),e.xb(1073742336,d.n,d.n,[[2,d.s],[2,d.m]]),e.xb(1073742336,I,I,[]),e.xb(1073742336,t,t,[]),e.xb(1024,d.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);