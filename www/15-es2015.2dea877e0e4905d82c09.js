(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6c6G":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J");class t{}var b=u("pMnS"),i=u("MKJQ"),e=u("sZkV"),c=u("SVse"),r=u("SxV6"),a=u("5+tZ"),x=u("lJxs"),s=u("JB3z"),p=u("oSch");class d{constructor(l,n){this._route=l,this._foodService=n}ngOnInit(){this._getQuery().pipe(Object(r.a)(),Object(a.a)(l=>this._getFoodDetail(+l))).subscribe()}_getQuery(){return this._route.queryParamMap.pipe(Object(x.a)(l=>l.get("foodId")))}_getFoodDetail(l){return this._foodService.getDetail(l).pipe(Object(x.a)(l=>{const n=this._foodService.storage.getItem("foodDetail");this.content=new p.a(JSON.parse(n))}))}}var h=u("iInd"),f=o.mb({encapsulation:0,styles:[[""]],data:{}});function k(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,10,"ion-row",[],null,null,null,i.x,i.j)),o.nb(1,49152,null,0,e.db,[o.h,o.k,o.x],null,null),(l()(),o.ob(2,0,null,0,2,"ion-col",[],null,null,null,i.p,i.b)),o.nb(3,49152,null,0,e.q,[o.h,o.k,o.x],null,null),(l()(),o.Db(4,0,[" "," "])),(l()(),o.ob(5,0,null,0,2,"ion-col",[],null,null,null,i.p,i.b)),o.nb(6,49152,null,0,e.q,[o.h,o.k,o.x],null,null),(l()(),o.Db(7,0,[" "," "])),(l()(),o.ob(8,0,null,0,2,"ion-col",[],null,null,null,i.p,i.b)),o.nb(9,49152,null,0,e.q,[o.h,o.k,o.x],null,null),(l()(),o.Db(10,0,[" "," "]))],null,(function(l,n){l(n,4,0,n.context.$implicit.name),l(n,7,0,n.context.$implicit.amount),l(n,10,0,n.context.$implicit.unit)}))}function g(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,17,"ion-grid",[],null,null,null,i.r,i.d)),o.nb(1,49152,null,0,e.x,[o.h,o.k,o.x],null,null),(l()(),o.ob(2,0,null,0,2,"ion-row",[],null,null,null,i.x,i.j)),o.nb(3,49152,null,0,e.db,[o.h,o.k,o.x],null,null),(l()(),o.Db(4,0,[" "," "])),(l()(),o.ob(5,0,null,0,10,"ion-row",[],null,null,null,i.x,i.j)),o.nb(6,49152,null,0,e.db,[o.h,o.k,o.x],null,null),(l()(),o.ob(7,0,null,0,2,"ion-col",[],null,null,null,i.p,i.b)),o.nb(8,49152,null,0,e.q,[o.h,o.k,o.x],null,null),(l()(),o.Db(-1,0,[" Name "])),(l()(),o.ob(10,0,null,0,2,"ion-col",[],null,null,null,i.p,i.b)),o.nb(11,49152,null,0,e.q,[o.h,o.k,o.x],null,null),(l()(),o.Db(-1,0,[" Amount "])),(l()(),o.ob(13,0,null,0,2,"ion-col",[],null,null,null,i.p,i.b)),o.nb(14,49152,null,0,e.q,[o.h,o.k,o.x],null,null),(l()(),o.Db(-1,0,[" unit "])),(l()(),o.db(16777216,null,0,1,null,k)),o.nb(17,278528,null,0,c.h,[o.L,o.I,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,17,0,n.component.content.nutrients)}),(function(l,n){l(n,4,0,n.component.content.name)}))}function m(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,6,"ion-header",[],null,null,null,i.s,i.e)),o.nb(1,49152,null,0,e.y,[o.h,o.k,o.x],null,null),(l()(),o.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.B,i.n)),o.nb(3,49152,null,0,e.wb,[o.h,o.k,o.x],null,null),(l()(),o.ob(4,0,null,0,2,"ion-title",[],null,null,null,i.A,i.m)),o.nb(5,49152,null,0,e.ub,[o.h,o.k,o.x],null,null),(l()(),o.Db(-1,0,["nutrition-detail"])),(l()(),o.ob(7,0,null,null,3,"ion-content",[],null,null,null,i.q,i.c)),o.nb(8,49152,null,0,e.r,[o.h,o.k,o.x],null,null),(l()(),o.db(16777216,null,0,1,null,g)),o.nb(10,16384,null,0,c.i,[o.L,o.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,10,0,n.component.content)}),null)}function D(l){return o.Eb(0,[(l()(),o.ob(0,0,null,null,1,"app-nutrition-detail",[],null,null,null,m,f)),o.nb(1,114688,null,0,d,[h.a,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var j=o.kb("app-nutrition-detail",d,D,{},{},[]),w=u("s7LF");class q{}u.d(n,"NutritionDetailPageModuleNgFactory",(function(){return v}));var v=o.lb(t,[],(function(l){return o.wb([o.xb(512,o.j,o.W,[[8,[b.a,j]],[3,o.j],o.v]),o.xb(4608,c.k,c.j,[o.s,[2,c.q]]),o.xb(4608,w.d,w.d,[]),o.xb(4608,e.a,e.a,[o.x,o.g]),o.xb(4608,e.Ab,e.Ab,[e.a,o.j,o.p]),o.xb(4608,e.Db,e.Db,[e.a,o.j,o.p]),o.xb(1073742336,c.b,c.b,[]),o.xb(1073742336,w.c,w.c,[]),o.xb(1073742336,w.a,w.a,[]),o.xb(1073742336,e.yb,e.yb,[]),o.xb(1073742336,h.n,h.n,[[2,h.s],[2,h.m]]),o.xb(1073742336,q,q,[]),o.xb(1073742336,t,t,[]),o.xb(1024,h.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);