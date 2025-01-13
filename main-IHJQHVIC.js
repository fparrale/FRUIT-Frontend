import{a as Se,b as we}from"./chunk-RK23KOMG.js";import{a as xe}from"./chunk-IUWLHEJ5.js";import{a as D,c as _e,d as S}from"./chunk-EIXRTAYT.js";import{b as m}from"./chunk-XA5C6TME.js";import{b as _,c as fe,d as ge,f as he,g as ve,h as ye,k as Ce,l as a,o as Ae,p as B}from"./chunk-PWFTLQLJ.js";import{d as ce,k as me,m as M,p as de,r as L,t as ue}from"./chunk-N5F7BLGW.js";import{$ as F,Ba as J,Eb as y,Gb as R,Ha as K,Ia as ee,La as te,Nb as C,Qb as pe,Ra as s,Sa as T,Ta as re,Ub as A,Va as oe,Vb as x,Wa as ne,Y as q,Za as ie,aa as $,ca as Y,db as v,ea as I,ec as le,fa as i,gb as p,ja as h,ka as Z,kb as c,lb as d,mb as f,na as Q,pb as ae,sa as W,ta as X,tb as se,ua as H,vb as k}from"./chunk-EU2SIFBO.js";var l=(r,t)=>{let e=i(K),o=i(m),n=i(a);if(ue(e)){if(o.isAuthenticated())return!0;n.navigate(["/login"]).then(()=>!1)}return!1};var P=(r,t)=>{let e=i(m),o=i(a);return e.isAuthenticated()?o.navigate(["/home"]):!0};var be=(r,t)=>{let e=i(xe),o=i(a);return typeof window<"u"?localStorage.getItem("gameOption")==="practice"?e.getGamePracticeDataLocalStorage()==null?!0:(o.navigate(["/practice-game"]),!1):e.getGameDataLocalStorage()==null?!0:(o.navigate(["/quiz-game"]),!1):!0};var Fe=(r,t)=>{let e=i(m),o=i(a);return e.getUserData()?.user.role.name=="Administrador"?!0:(o.navigate(["/home"]),!1)};var j=(r,t)=>{let e=i(m),o=i(a);return e.getUserData()?.user.role.name=="Docente"?!0:(o.navigate(["/home"]),!1)};var w=(r,t)=>{let e=i(m),o=i(a);return e.getUserData()?.user.role.name=="Estudiante"?!0:(o.navigate(["/home"]),!1)};var z=[{path:"login",loadComponent:()=>import("./chunk-FXBNA2P2.js"),canActivate:[P]},{path:"register",loadComponent:()=>import("./chunk-Q77SBZOD.js"),canActivate:[P]},{path:"forget-password",loadComponent:()=>import("./chunk-SSOMH3MC.js"),canActivate:[P]},{path:"",loadComponent:()=>import("./chunk-HHMKNMJC.js"),children:[{path:"home",loadComponent:()=>import("./chunk-RL7CYHPX.js"),canActivate:[l]},{path:"users",loadComponent:()=>import("./chunk-LFUGKGHX.js"),canActivate:[l,Fe]},{path:"game",loadComponent:()=>import("./chunk-L64NITZZ.js"),canActivate:[l,be,w]},{path:"quiz-game",loadComponent:()=>import("./chunk-AJJPKGGQ.js"),canActivate:[l,w]},{path:"results",loadComponent:()=>import("./chunk-2NLOPWQA.js"),canActivate:[l,w]},{path:"game-history",loadComponent:()=>import("./chunk-EXVZLMSI.js"),canActivate:[l,w]},{path:"game-rooms",loadComponent:()=>import("./chunk-TB2ZN7S3.js"),canActivate:[l,j]},{path:"create-game-room",loadComponent:()=>import("./chunk-IZWHDMKX.js"),canActivate:[l,j]},{path:"report",loadComponent:()=>import("./chunk-2GQZYUYK.js"),canActivate:[l,j]},{path:"practice-game",loadComponent:()=>import("./chunk-YCCQSIPU.js").then(r=>r.PracticeQuestionsComponent),canActivate:[l,w]},{path:"",redirectTo:"home",pathMatch:"full"}]},{path:"**",redirectTo:"home"}],Ie=class r{static \u0275fac=function(e){return new(e||r)};static \u0275mod=Z({type:r});static \u0275inj=$({imports:[B.forRoot(z),B]})};var De="@",Pe=(()=>{class r{constructor(e,o,n,u,g){this.doc=e,this.delegate=o,this.zone=n,this.animationType=u,this.moduleImpl=g,this._rendererFactoryPromise=null,this.scheduler=i(oe,{optional:!0}),this.loadingSchedulerFn=i(je,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-VUYN4FOV.js").then(n=>n),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(e):o=e(),o.catch(n=>{throw new q(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:u})=>{this._engine=n(this.animationType,this.doc);let g=new u(this.delegate,this._engine,this.zone);return this.delegate=g,g})}createRenderer(e,o){let n=this.delegate.createRenderer(e,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let u=new U(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(g=>{let Le=g.createRenderer(e,o);u.use(Le),this.scheduler?.notify(10)}).catch(g=>{u.use(n)}),u}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(o){re()}}static{this.\u0275prov=F({token:r,factory:r.\u0275fac})}}return r})(),U=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,o,n){this.delegate.insertBefore(t,e,o,n)}removeChild(t,e,o){this.delegate.removeChild(t,e,o)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,o,n){this.delegate.setAttribute(t,e,o,n)}removeAttribute(t,e,o){this.delegate.removeAttribute(t,e,o)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,o,n){this.delegate.setStyle(t,e,o,n)}removeStyle(t,e,o){this.delegate.removeStyle(t,e,o)}setProperty(t,e,o){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(t,e,o)),this.delegate.setProperty(t,e,o)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,o){return this.shouldReplay(e)&&this.replay.push(n=>n.listen(t,e,o)),this.delegate.listen(t,e,o)}shouldReplay(t){return this.replay!==null&&t.startsWith(De)}},je=new Y("");function Te(r="animations"){return ie("NgAsyncAnimations"),Q([{provide:ne,useFactory:(t,e,o)=>new Pe(t,e,o,r),deps:[ce,he,J]},{provide:ee,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var N=(()=>{class r{http;prefix;suffix;constructor(e,o="/assets/i18n/",n=".json"){this.http=e,this.prefix=o,this.suffix=n}getTranslation(e){return this.http.get(`${this.prefix}${e}${this.suffix}`)}static \u0275fac=function(o){return new(o||r)(I(_),I(String),I(String))};static \u0275prov=F({token:r,factory:r.\u0275fac})}return r})();function V(r){return new N(r,"./assets/i18n/",".json")}var Ht=S.forRoot({loader:{provide:D,useFactory:V,deps:[_]}});var Re={providers:[le({eventCoalescing:!0}),Ae(z),ye(),Te(),fe(ge()),...S.forRoot({loader:{provide:D,useFactory:V,deps:[_]}}).providers]};function Oe(r,t){r&1&&(c(0,"div",1)(1,"div",2),f(2,"div",3),c(3,"p"),y(4,"Cargando..."),d()()())}var O=class r{constructor(t){this.loadingService=t;this.isLoading=this.loadingService.loading$}isLoading;static \u0275fac=function(e){return new(e||r)(T(we))};static \u0275cmp=h({type:r,selectors:[["app-loading"]],standalone:!0,features:[C],decls:2,vars:3,consts:[["class","loading-overlay",4,"ngIf"],[1,"loading-overlay"],[1,"spinner-container"],[1,"spinner"]],template:function(e,o){e&1&&(v(0,Oe,5,0,"div",0),A(1,"async")),e&2&&p("ngIf",x(1,1,o.isLoading))},dependencies:[L,M,de],styles:[".loading-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:#00000080;display:flex;align-items:center;justify-content:center;z-index:1000}.spinner-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:10px}.spinner[_ngcontent-%COMP%]{border:5px solid rgba(0,0,0,.1);border-top:5px solid #fff;border-radius:50%;width:50px;height:50px;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}p[_ngcontent-%COMP%]{color:#fff;font-size:1.2em;font-weight:500;margin:0}"]})};var Ee=(r,t)=>({"bg-red-500 hover:bg-red-600":r,"bg-green-500 hover:bg-green-600":t});function Ge(r,t){r&1&&(H(),c(0,"svg",9),f(1,"line",10)(2,"line",11),d())}function He(r,t){r&1&&(H(),c(0,"svg",9),f(1,"path",12),d())}function ke(r,t){r&1&&(c(0,"h6",13),y(1),A(2,"translate"),d()),r&2&&(s(),R(" ",x(2,1,"ALERT.ERROR")," "))}function Be(r,t){r&1&&(c(0,"h6",13),y(1),A(2,"translate"),d()),r&2&&(s(),R(" ",x(2,1,"ALERT.SUCCESS")," "))}function ze(r,t){if(r&1){let e=ae();c(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4),v(4,Ge,3,0,"svg",5)(5,He,2,0,"svg",5),d(),v(6,ke,3,3,"h6",6)(7,Be,3,3,"h6",6),f(8,"p",7),c(9,"button",8),se("click",function(){W(e);let n=k();return X(n.closeAlert())}),y(10),A(11,"translate"),d()()()()}if(r&2){let e=k();s(3),p("ngClass",e.alert.type?"bg-red-500":"bg-green-500"),s(),p("ngIf",e.alert.type),s(),p("ngIf",!e.alert.type),s(),p("ngIf",e.alert.type===!0),s(),p("ngIf",e.alert.type===!1),s(),p("innerHTML",e.alert.message,te),s(),p("ngClass",pe(10,Ee,e.alert.type,!e.alert.type)),s(),R(" ",x(11,8,"ALERT.BUTTON_CLOSE")," ")}}var E=class r{constructor(t){this.alertService=t}alert;ngOnInit(){this.alertService.alertState$.subscribe(t=>{this.alert=t})}closeAlert(){this.alert=null}static \u0275fac=function(e){return new(e||r)(T(Se))};static \u0275cmp=h({type:r,selectors:[["app-alert"]],standalone:!0,features:[C],decls:1,vars:1,consts:[["class","fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50",4,"ngIf"],[1,"fixed","inset-0","bg-gray-800","bg-opacity-50","flex","items-center","justify-center","z-50"],[1,"bg-white","p-6","rounded-2xl","shadow-lg","w-96"],[1,"flex","flex-col","items-center"],[1,"flex","items-center","justify-center","w-12","h-12","rounded-full","mb-6",3,"ngClass"],["class","w-8 h-8","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","white","stroke-width","3",4,"ngIf"],["class","text-lg font-bold text-gray-800 mb-4",4,"ngIf"],[1,"text-center","text-gray-600","text-md","mb-8",3,"innerHTML"],[1,"px-4","py-2","text-white","rounded-lg","mt-4",3,"click","ngClass"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","white","stroke-width","3",1,"w-8","h-8"],["x1","6","y1","6","x2","18","y2","18"],["x1","6","y1","18","x2","18","y2","6"],["stroke-linecap","round","stroke-linejoin","round","d","M5 13l4 4L19 7"],[1,"text-lg","font-bold","text-gray-800","mb-4"]],template:function(e,o){e&1&&v(0,ze,12,13,"div",0),e&2&&p("ngIf",o.alert)},dependencies:[L,me,M,S,_e],encapsulation:2})};var G=class r{title="SeriousGameFront";static \u0275fac=function(e){return new(e||r)};static \u0275cmp=h({type:r,selectors:[["app-root"]],standalone:!0,features:[C],decls:3,vars:0,template:function(e,o){e&1&&f(0,"router-outlet")(1,"app-loading")(2,"app-alert")},dependencies:[Ce,O,E]})};function fr(r){return new N(r,"./assets/i18n/",".json")}ve(G,Re).catch(r=>console.error(r));export{fr as HttpLoaderFactory};
