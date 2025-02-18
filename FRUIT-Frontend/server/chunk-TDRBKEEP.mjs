import './polyfills.server.mjs';
import{a as we}from"./chunk-KCDCPOIC.mjs";import{c as Ce}from"./chunk-7ZI5CKKE.mjs";import{a as _e,b as be}from"./chunk-QZQANR5E.mjs";import{b as c}from"./chunk-XZVO5RUM.mjs";import{a as P,c as Se,d as S}from"./chunk-G2EMQGJ6.mjs";import{b as _,d as ue,e as ge,j as he,k as ve,l as ye,o as Ae,q as s,t as xe,u as H}from"./chunk-UTIOHHII.mjs";import{Aa as J,Ac as D,Ba as K,Dc as de,Fb as C,Fc as L,Ga as ee,Ib as se,Ic as fe,Ma as p,Mb as A,Na as T,Nb as x,Oa as te,Pa as oe,Qa as re,S as V,Ta as ne,U as I,V as q,X as $,Z as R,Za as v,Zb as pe,_ as i,ab as l,ca as h,da as Y,eb as m,fb as d,ga as Z,gb as u,jb as ie,la as Q,lb as ae,lc as le,ma as W,na as G,nb as k,pc as me,ua as X,wb as y,yb as M,yc as ce}from"./chunk-RDXAN74U.mjs";function je(o,t){o&1&&(m(0,"div",1)(1,"div",2),u(2,"div",3),m(3,"p"),y(4,"Cargando..."),d()()())}var N=class o{constructor(t){this.loadingService=t;this.isLoading=this.loadingService.loading$}isLoading;static \u0275fac=function(e){return new(e||o)(T(_e))};static \u0275cmp=h({type:o,selectors:[["app-loading"]],standalone:!0,features:[C],decls:2,vars:3,consts:[["class","loading-overlay",4,"ngIf"],[1,"loading-overlay"],[1,"spinner-container"],[1,"spinner"]],template:function(e,r){e&1&&(v(0,je,5,0,"div",0),A(1,"async")),e&2&&l("ngIf",x(1,1,r.isLoading))},dependencies:[L,D,de],styles:[".loading-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:1000}.spinner-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:10px}.spinner[_ngcontent-%COMP%]{border:5px solid rgba(0,0,0,.1);border-top:5px solid #fff;border-radius:50%;width:50px;height:50px;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}p[_ngcontent-%COMP%]{color:#fff;font-size:1.2em;font-weight:500;margin:0}"]})};var Ee=(o,t)=>({"bg-red-500 hover:bg-red-600":o,"bg-green-500 hover:bg-green-600":t});function Ge(o,t){o&1&&(G(),m(0,"svg",9),u(1,"line",10)(2,"line",11),d())}function ke(o,t){o&1&&(G(),m(0,"svg",9),u(1,"path",12),d())}function He(o,t){o&1&&(m(0,"h6",13),y(1),A(2,"translate"),d()),o&2&&(p(),M(" ",x(2,1,"ALERT.ERROR")," "))}function Be(o,t){o&1&&(m(0,"h6",13),y(1),A(2,"translate"),d()),o&2&&(p(),M(" ",x(2,1,"ALERT.SUCCESS")," "))}function ze(o,t){if(o&1){let e=ie();m(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4),v(4,Ge,3,0,"svg",5)(5,ke,2,0,"svg",5),d(),v(6,He,3,3,"h6",6)(7,Be,3,3,"h6",6),u(8,"p",7),m(9,"button",8),ae("click",function(){Q(e);let n=k();return W(n.closeAlert())}),y(10),A(11,"translate"),d()()()()}if(o&2){let e=k();p(3),l("ngClass",e.alert.type?"bg-red-500":"bg-green-500"),p(),l("ngIf",e.alert.type),p(),l("ngIf",!e.alert.type),p(),l("ngIf",e.alert.type===!0),p(),l("ngIf",e.alert.type===!1),p(),l("innerHTML",e.alert.message,ee),p(),l("ngClass",se(10,Ee,e.alert.type,!e.alert.type)),p(),M(" ",x(11,8,"ALERT.BUTTON_CLOSE")," ")}}var O=class o{constructor(t){this.alertService=t}alert;ngOnInit(){this.alertService.alertState$.subscribe(t=>{this.alert=t})}closeAlert(){this.alert=null}static \u0275fac=function(e){return new(e||o)(T(be))};static \u0275cmp=h({type:o,selectors:[["app-alert"]],standalone:!0,features:[C],decls:1,vars:1,consts:[["class","fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50",4,"ngIf"],[1,"fixed","inset-0","bg-gray-800","bg-opacity-50","flex","items-center","justify-center","z-50"],[1,"bg-white","p-6","rounded-2xl","shadow-lg","w-96"],[1,"flex","flex-col","items-center"],[1,"flex","items-center","justify-center","w-12","h-12","rounded-full","mb-6",3,"ngClass"],["class","w-8 h-8","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","white","stroke-width","3",4,"ngIf"],["class","text-lg font-bold text-gray-800 mb-4",4,"ngIf"],[1,"text-center","text-gray-600","text-md","mb-8",3,"innerHTML"],[1,"px-4","py-2","text-white","rounded-lg","mt-4",3,"click","ngClass"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","white","stroke-width","3",1,"w-8","h-8"],["x1","6","y1","6","x2","18","y2","18"],["x1","6","y1","18","x2","18","y2","6"],["stroke-linecap","round","stroke-linejoin","round","d","M5 13l4 4L19 7"],[1,"text-lg","font-bold","text-gray-800","mb-4"]],template:function(e,r){e&1&&v(0,ze,12,13,"div",0),e&2&&l("ngIf",r.alert)},dependencies:[L,ce,D,S,Se],encapsulation:2})};var j=class o{title="SeriousGameFront";static \u0275fac=function(e){return new(e||o)};static \u0275cmp=h({type:o,selectors:[["app-root"]],standalone:!0,features:[C],decls:3,vars:0,template:function(e,r){e&1&&u(0,"router-outlet")(1,"app-loading")(2,"app-alert")},dependencies:[Ae,N,O]})};var a=(o,t)=>{let e=i(J),r=i(c),n=i(s);if(fe(e)){if(r.isAuthenticated())return!0;n.navigate(["/login"]).then(()=>!1)}return!1};var E=(o,t)=>{let e=i(c),r=i(s);return e.isAuthenticated()?r.navigate(["/home"]):!0};var Ie=(o,t)=>{let e=i(we),r=i(s);return typeof window<"u"?localStorage.getItem("gameOption")==="practice"?e.getGamePracticeDataLocalStorage()==null?!0:(r.navigate(["/practice-game"]),!1):e.getGameDataLocalStorage()==null?!0:(r.navigate(["/quiz-game"]),!1):!0};var Re=(o,t)=>{let e=i(c),r=i(s);return e.getUserData()?.user.role.name=="Administrador"?!0:(r.navigate(["/home"]),!1)};var b=(o,t)=>{let e=i(c),r=i(s);return e.getUserData()?.user.role.name=="Docente"?!0:(r.navigate(["/home"]),!1)};var w=(o,t)=>{let e=i(c),r=i(s);return e.getUserData()?.user.role.name=="Estudiante"?!0:(r.navigate(["/home"]),!1)};var B=[{path:"login",loadComponent:()=>import("./chunk-JFA6MLJR.mjs"),canActivate:[E]},{path:"register",loadComponent:()=>import("./chunk-SJ3PFHIU.mjs"),canActivate:[E]},{path:"forget-password",loadComponent:()=>import("./chunk-TKLPYSE4.mjs"),canActivate:[E]},{path:"",loadComponent:()=>import("./chunk-ZUKSDMTR.mjs"),children:[{path:"home",loadComponent:()=>import("./chunk-WTTG3VVK.mjs"),canActivate:[a]},{path:"users",loadComponent:()=>import("./chunk-PQKBFJY5.mjs"),canActivate:[a,Re]},{path:"game",loadComponent:()=>import("./chunk-XI6AUPG5.mjs"),canActivate:[a,Ie,w]},{path:"quiz-game",loadComponent:()=>import("./chunk-GK6CMUHE.mjs"),canActivate:[a,w]},{path:"results",loadComponent:()=>import("./chunk-X5Z2FGER.mjs"),canActivate:[a,w]},{path:"game-history",loadComponent:()=>import("./chunk-AMZ3SND7.mjs"),canActivate:[a,w]},{path:"game-rooms",loadComponent:()=>import("./chunk-XSBONGPW.mjs"),canActivate:[a,b]},{path:"edit-game-room/:id",loadComponent:()=>import("./chunk-EQAXH7F7.mjs"),canActivate:[a,b]},{path:"get-participating-players/:id",loadComponent:()=>import("./chunk-T4725X5U.mjs"),canActivate:[a,b]},{path:"create-game-room",loadComponent:()=>import("./chunk-6AEAXZXP.mjs"),canActivate:[a,b]},{path:"report",loadComponent:()=>import("./chunk-6N4AGMME.mjs"),canActivate:[a,b]},{path:"practice-game",loadComponent:()=>import("./chunk-SZVA44UM.mjs").then(o=>o.PracticeQuestionsComponent),canActivate:[a,w]},{path:"",redirectTo:"home",pathMatch:"full"}]},{path:"**",redirectTo:"home"}],Te=class o{static \u0275fac=function(e){return new(e||o)};static \u0275mod=Y({type:o});static \u0275inj=q({imports:[H.forRoot(B),H]})};var Ue="@",Ve=(()=>{class o{constructor(e,r,n,f,g){this.doc=e,this.delegate=r,this.zone=n,this.animationType=f,this.moduleImpl=g,this._rendererFactoryPromise=null,this.scheduler=i(oe,{optional:!0}),this.loadingSchedulerFn=i(qe,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-ZKPCYFF6.mjs").then(n=>n),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(e):r=e(),r.catch(n=>{throw new V(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:f})=>{this._engine=n(this.animationType,this.doc);let g=new f(this.delegate,this._engine,this.zone);return this.delegate=g,g})}createRenderer(e,r){let n=this.delegate.createRenderer(e,r);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let f=new z(n);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(g=>{let Ne=g.createRenderer(e,r);f.use(Ne),this.scheduler?.notify(10)}).catch(g=>{f.use(n)}),f}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(r){te()}}static{this.\u0275prov=I({token:o,factory:o.\u0275fac})}}return o})(),z=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,r,n){this.delegate.insertBefore(t,e,r,n)}removeChild(t,e,r){this.delegate.removeChild(t,e,r)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,r,n){this.delegate.setAttribute(t,e,r,n)}removeAttribute(t,e,r){this.delegate.removeAttribute(t,e,r)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,r,n){this.delegate.setStyle(t,e,r,n)}removeStyle(t,e,r){this.delegate.removeStyle(t,e,r)}setProperty(t,e,r){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(t,e,r)),this.delegate.setProperty(t,e,r)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,r){return this.shouldReplay(e)&&this.replay.push(n=>n.listen(t,e,r)),this.delegate.listen(t,e,r)}shouldReplay(t){return this.replay!==null&&t.startsWith(Ue)}},qe=new $("");function Me(o="animations"){return ne("NgAsyncAnimations"),Z([{provide:re,useFactory:(t,e,r)=>new Ve(t,e,r,o),deps:[me,he,X]},{provide:K,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var De=(()=>{class o{http;prefix;suffix;constructor(e,r="/assets/i18n/",n=".json"){this.http=e,this.prefix=r,this.suffix=n}getTranslation(e){return this.http.get(`${this.prefix}${e}${this.suffix}`)}static \u0275fac=function(r){return new(r||o)(R(_),R(String),R(String))};static \u0275prov=I({token:o,factory:o.\u0275fac})}return o})();function U(o){return new De(o,"./assets/i18n/",".json")}var oo=S.forRoot({loader:{provide:P,useFactory:U,deps:[_]}});var Le={providers:[pe({eventCoalescing:!0}),xe(B),ye(),Me(),ue(ge()),...S.forRoot({loader:{provide:P,useFactory:U,deps:[_]}}).providers]};var $e={providers:[Ce()]},Pe=le(Le,$e);var Ye=()=>ve(j,Pe),bo=Ye;export{bo as a};
