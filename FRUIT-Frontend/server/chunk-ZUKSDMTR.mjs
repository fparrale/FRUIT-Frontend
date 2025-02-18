import './polyfills.server.mjs';
import{a as V,b as de,e as $e,k as me,n as Ze,o as Ye,p as Je,q as Ke,t as Xe,u as F}from"./chunk-NA3BDKOW.mjs";import{a as et}from"./chunk-RK5NAUVG.mjs";import{a as Qe}from"./chunk-KCDCPOIC.mjs";import{c as Ve,d as ae,f as se,g as ce,h as le}from"./chunk-J4BDXTMW.mjs";import{a as qe}from"./chunk-TXQQKV2F.mjs";import{b as Z}from"./chunk-XZVO5RUM.mjs";import{b as Q,c as q,d as $}from"./chunk-G2EMQGJ6.mjs";import{f as Le,m as ze,o as He,q as W,r as Ue,s as Ge,u as We}from"./chunk-UTIOHHII.mjs";import{$a as G,Ac as Pe,E as fe,F as te,Fb as w,Fc as Be,G as ge,Gb as Te,Ha as Se,Hb as Ae,Ib as Oe,Ja as Ce,Ka as ye,Ma as d,Mb as C,Na as c,Nb as y,Q as ie,V as O,Va as Ie,X as ve,Za as ne,_ as re,_a as xe,ab as I,ac as oe,bb as Me,ca as v,cb as j,da as N,eb as n,f as A,fb as a,gb as m,jb as x,kb as ke,la as _,lb as g,ma as b,mb as Ee,na as u,nb as k,o as ee,oa as f,ob as P,pa as _e,pb as B,pc as Ne,qb as De,ra as be,sb as L,ta as M,tb as D,ua as we,ub as R,v as ue,wa as U,wb as h,xb as S,y as E,yb as Re,yc as je,zb as Fe}from"./chunk-RDXAN74U.mjs";import"./chunk-5XUXGTUW.mjs";var tt=["*"],mt=["content"];var it={transformDrawer:Ve("transform",[ce("open, open-instant",se({transform:"none",visibility:"visible"})),ce("void",se({"box-shadow":"none",visibility:"hidden"})),le("void => open-instant",ae("0ms")),le("void <=> open, open-instant => void",ae("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))])};var ht=new ve("MAT_DRAWER_CONTAINER");var pt=(()=>{class r{get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=V(e)}get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=V(e)),this._autoFocus=e}get opened(){return this._opened}set opened(e){this.toggle(V(e))}constructor(e,t,i,l,p,H,st,ct){this._elementRef=e,this._focusTrapFactory=t,this._focusMonitor=i,this._platform=l,this._ngZone=p,this._interactivityChecker=H,this._doc=st,this._container=ct,this._focusTrap=null,this._elementFocusedBeforeDrawerWasOpened=null,this._enableAnimations=!1,this._position="start",this._mode="over",this._disableClose=!1,this._opened=!1,this._animationStarted=new A,this._animationEnd=new A,this._animationState="void",this.openedChange=new M(!0),this._openedStream=this.openedChange.pipe(E(s=>s),ee(()=>{})),this.openedStart=this._animationStarted.pipe(E(s=>s.fromState!==s.toState&&s.toState.indexOf("open")===0),te(void 0)),this._closedStream=this.openedChange.pipe(E(s=>!s),ee(()=>{})),this.closedStart=this._animationStarted.pipe(E(s=>s.fromState!==s.toState&&s.toState==="void"),te(void 0)),this._destroyed=new A,this.onPositionChanged=new M,this._modeChanged=new A,this._injector=re(be),this._changeDetectorRef=re(oe),this.openedChange.pipe(ie(this._destroyed)).subscribe(s=>{s?(this._doc&&(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement),this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._ngZone.runOutsideAngular(()=>{ue(this._elementRef.nativeElement,"keydown").pipe(E(s=>s.keyCode===27&&!this.disableClose&&!Ze(s)),ie(this._destroyed)).subscribe(s=>this._ngZone.run(()=>{this.close(),s.stopPropagation(),s.preventDefault()}))}),this._animationEnd.pipe(ge((s,T)=>s.fromState===T.fromState&&s.toState===T.toState)).subscribe(s=>{let{fromState:T,toState:pe}=s;(pe.indexOf("open")===0&&T==="void"||pe==="void"&&T.indexOf("open")===0)&&this.openedChange.emit(this._opened)})}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{e.removeEventListener("blur",i),e.removeEventListener("mousedown",i),e.removeAttribute("tabindex")};e.addEventListener("blur",i),e.addEventListener("mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":xe(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngAfterContentChecked(){this._platform.isBrowser&&(this._enableAnimations=!0)}ngOnDestroy(){this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,t){e&&t&&(this._openedVia=t);let i=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),i}_setOpen(e,t,i){return this._opened=e,e?this._animationState=this._enableAnimations?"open":"open-instant":(this._animationState="void",t&&this._restoreFocus(i)),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(l=>{this.openedChange.pipe(fe(1)).subscribe(p=>l(p?"open":"close"))})}_getWidth(){return this._elementRef.nativeElement&&this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=!!this._container?.hasBackdrop&&this.opened)}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let t=this._elementRef.nativeElement,i=t.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),i.insertBefore(this._anchor,t)),i.appendChild(t)):this._anchor&&this._anchor.parentNode.insertBefore(t,this._anchor)}static{this.\u0275fac=function(t){return new(t||r)(c(U),c(Ke),c(Xe),c($e),c(we),c(Je),c(Ne,8),c(ht,8))}}static{this.\u0275cmp=v({type:r,selectors:[["mat-drawer"]],viewQuery:function(t,i){if(t&1&&L(mt,5),t&2){let l;D(l=R())&&(i._content=l.first)}},hostAttrs:["tabIndex","-1",1,"mat-drawer"],hostVars:12,hostBindings:function(t,i){t&1&&Ee("@transform.start",function(p){return i._animationStarted.next(p)})("@transform.done",function(p){return i._animationEnd.next(p)}),t&2&&(ke("@transform",i._animationState),G("align",null),j("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-drawer-opened",i.opened))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],standalone:!0,features:[w],ngContentSelectors:tt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,i){t&1&&(P(),n(0,"div",1,0),B(2),a())},dependencies:[me],encapsulation:2,data:{animation:[it.transformDrawer]},changeDetection:0})}}return r})();var rt=(()=>{class r extends pt{constructor(){super(...arguments),this._fixedInViewport=!1,this._fixedTopGap=0,this._fixedBottomGap=0}get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=V(e)}get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=de(e)}get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=de(e)}static{this.\u0275fac=(()=>{let e;return function(i){return(e||(e=_e(r)))(i||r)}})()}static{this.\u0275cmp=v({type:r,selectors:[["mat-sidenav"]],hostAttrs:["tabIndex","-1",1,"mat-drawer","mat-sidenav"],hostVars:17,hostBindings:function(t,i){t&2&&(G("align",null),Me("top",i.fixedInViewport?i.fixedTopGap:null,"px")("bottom",i.fixedInViewport?i.fixedBottomGap:null,"px"),j("mat-drawer-end",i.position==="end")("mat-drawer-over",i.mode==="over")("mat-drawer-push",i.mode==="push")("mat-drawer-side",i.mode==="side")("mat-drawer-opened",i.opened)("mat-sidenav-fixed",i.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],standalone:!0,features:[Ie,w],ngContentSelectors:tt,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(t,i){t&1&&(P(),n(0,"div",1,0),B(2),a())},dependencies:[me],encapsulation:2,data:{animation:[it.transformDrawer]},changeDetection:0})}}return r})();var vt=["menuRef"],_t=r=>({hidden:r}),bt=(r,o)=>({"-translate-x-full":r,"translate-x-0":o}),wt=()=>({mode:"find"});function St(r,o){if(r&1){let e=x();n(0,"li")(1,"a",17),g("click",function(){_(e);let i=k();return b(i.onOptionClick())}),u(),n(2,"svg",2),m(3,"path",18),a(),f(),n(4,"span",13),h(5),C(6,"translate"),a()()()}r&2&&(d(5),S(y(6,1,"SIDEBAR.USERS")))}function Ct(r,o){if(r&1){let e=x();n(0,"li")(1,"a",19),g("click",function(){_(e);let i=k();return b(i.onOptionClick())}),u(),n(2,"svg",2),m(3,"path",20),a(),f(),n(4,"span",13),h(5),C(6,"translate"),a()()()}r&2&&(d(5),S(y(6,1,"SIDEBAR.GAME_ROOMS")))}function yt(r,o){if(r&1){let e=x();n(0,"li")(1,"a",21),g("click",function(){_(e);let i=k();return b(i.onOptionClick())}),u(),n(2,"svg",2),m(3,"path",22),a(),f(),n(4,"span",13),h(5),C(6,"translate"),a()()()}r&2&&(d(5),S(y(6,1,"SIDEBAR.GAME_HISTORY")))}function It(r,o){if(r&1){let e=x();n(0,"li")(1,"a",23),g("click",function(){_(e);let i=k();return b(i.onOptionClick())}),u(),n(2,"svg",2),m(3,"path",20),a(),f(),n(4,"span",13),h(5),C(6,"translate"),a()()()}r&2&&(d(),I("queryParams",Te(4,wt)),d(4),S(y(6,2,"SIDEBAR.GAME")))}function xt(r,o){if(r&1){let e=x();n(0,"li")(1,"a",24),g("click",function(){_(e);let i=k();return b(i.onOptionClick())}),u(),n(2,"svg",25),m(3,"path",26),n(4,"text",27),h(5,"PDF"),a()(),f(),n(6,"span",13),h(7),C(8,"translate"),a()()()}r&2&&(d(7),S(y(8,1,"SIDEBAR.REPORT")))}var Y=class r{constructor(o,e,t,i,l){this.translate=o;this.observer=e;this.authService=t;this.gameDataParamsService=i;this.router=l}sidenav;isMobile=!0;isCollapsed=!0;toggleSidenav=new M;userRoleId="";ngOnInit(){let o=this.authService.getUserData();this.userRoleId=o?.user.role.name??""}canShowItemAdmin(){return this.userRoleId==="Administrador"}canShowItemTeacher(){return this.userRoleId==="Docente"}canShowItemStudent(){return this.userRoleId==="Estudiante"}logout(){this.authService.logout(),this.gameDataParamsService.removeGameRoomIdLocalStorage(),this.gameDataParamsService.clearGameDataLocalStorage(),this.gameDataParamsService.removeGameRoomOptionLocalStorage(),this.gameDataParamsService.clearGameDataPractice()}isRouteActive(){return["/game","/quiz-game"].some(e=>this.router.isActive(e,!1))}menuOpen=!1;isActive(o){return this.router.url===o}menuRef;toggleMenu(o){o&&o.stopPropagation(),this.menuOpen=!this.menuOpen}onOptionClick(){window.innerWidth<1280&&(this.menuOpen=!1)}onResize(){window.innerWidth>=1280?this.menuOpen=!0:this.menuOpen=!1}onDocumentClick(o){this.menuOpen&&!this.menuRef.nativeElement.contains(o.target)&&(this.menuOpen=!1)}static \u0275fac=function(e){return new(e||r)(c(Q),c(Ye),c(Z),c(Qe),c(W))};static \u0275cmp=v({type:r,selectors:[["app-sidebar"]],viewQuery:function(e,t){if(e&1&&(L(rt,5),L(vt,7)),e&2){let i;D(i=R())&&(t.sidenav=i.first),D(i=R())&&(t.menuRef=i.first)}},hostBindings:function(e,t){e&1&&g("resize",function(l){return t.onResize(l)},!1,Ce)("click",function(l){return t.onDocumentClick(l)},!1,ye)},outputs:{toggleSidenav:"toggleSidenav"},standalone:!0,features:[w],decls:31,vars:18,consts:[["menuRef",""],[1,"fixed","z-50","top-6","left-6","p-3","bg-[#0D92F4]","text-white","rounded-full","shadow-md","xl:hidden","hover:bg-blue-700","focus:outline-none","focus:ring-2","focus:ring-blue-300","transition-all",3,"click","ngClass"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","2","stroke","currentColor",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","d","M4 6h16M4 12h16M4 18h16"],[1,"bg-[#0D92F4]","fixed","inset-y-0","w-80","transform","transition-transform","duration-300","xl:translate-x-0","rounded-menu",3,"ngClass"],[1,"relative","border-b","border-white/20","flex","justify-between","items-center","p-6"],[1,"text-[#FFD628]","font-semibold","text-lg","leading-relaxed"],[1,"w-8","h-8","flex","items-center","justify-center","text-white","bg-transparent","hover:bg-white/10","rounded-full","xl:hidden",3,"click"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","2.5","stroke","currentColor",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","d","M6 18L18 6M6 6l12 12"],[1,"mt-4","flex","flex-col","space-y-2","px-4"],["routerLink","/home","routerLinkActive","active-link",1,"flex","items-center","gap-3","p-3","rounded-lg","transition-all","hover:bg-gray-100",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M3 9l9-7 9 7v11a4 4 0 01-4 4H7a4 4 0 01-4-4z"],[1,"text-base","font-medium"],[4,"ngIf"],[1,"flex","items-center","gap-3","p-3","rounded-lg","transition-all","hover:bg-gray-100","cursor-pointer",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M15 12H3m12 0l-4-4m4 4l-4 4m8-8v8"],["routerLink","/users","routerLinkActive","active-link",1,"flex","items-center","gap-3","p-3","rounded-lg","transition-all","hover:bg-gray-100",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-3.31 0-6 2.69-6 6v2h12v-2c0-3.31-2.69-6-6-6z"],["routerLink","/game-rooms","routerLinkActive","active-link",1,"flex","items-center","gap-3","p-3","rounded-lg","transition-all","hover:bg-gray-100",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M15 10l4.553 2.276A1 1 0 0120 13.132V16m-4.553 2.276A1 1 0 0115 18.268V21m-6 0h6m0-2H7m0-4V7m6-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"],["routerLink","/game-history","routerLinkActive","active-link",1,"flex","items-center","gap-3","p-3","rounded-lg","transition-all","hover:bg-gray-100",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M8 16l-4-4m0 0l4-4m-4 4h16"],["routerLink","/game","routerLinkActive","active-link",1,"flex","items-center","gap-3","p-3","rounded-lg","transition-all","hover:bg-gray-100",3,"click","queryParams"],["routerLink","/report","routerLinkActive","active-link",1,"flex","items-center","gap-3","p-3","rounded-lg","transition-all","hover:bg-gray-100",3,"click"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor",1,"w-6","h-6"],["d","M19 2H8a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-5-6zM13 9V3.5L18.5 9H13z","fill","#FFFFF"],["x","8","y","17","font-size","6","fill","white","font-family","Arial, sans-serif","font-weight","bold"]],template:function(e,t){if(e&1){let i=x();n(0,"button",1),g("click",function(p){return _(i),b(t.toggleMenu(p))}),u(),n(1,"svg",2),m(2,"path",3),a()(),f(),n(3,"aside",4,0)(5,"div",5)(6,"h6",6),h(7," FRUIT "),a(),n(8,"button",7),g("click",function(p){return _(i),b(t.toggleMenu(p))}),u(),n(9,"svg",8),m(10,"path",9),a()()(),f(),n(11,"ul",10)(12,"li")(13,"a",11),g("click",function(){return _(i),b(t.onOptionClick())}),u(),n(14,"svg",2),m(15,"path",12),a(),f(),n(16,"span",13),h(17),C(18,"translate"),a()()(),ne(19,St,7,3,"li",14)(20,Ct,7,3,"li",14)(21,yt,7,3,"li",14)(22,It,7,5,"li",14)(23,xt,9,3,"li",14),n(24,"li")(25,"a",15),g("click",function(){return _(i),t.logout(),b(t.onOptionClick())}),u(),n(26,"svg",2),m(27,"path",16),a(),f(),n(28,"span",13),h(29),C(30,"translate"),a()()()()()}e&2&&(I("ngClass",Ae(13,_t,t.menuOpen)),d(3),I("ngClass",Oe(15,bt,!t.menuOpen,t.menuOpen)),d(14),S(y(18,9,"SIDEBAR.HOME")),d(2),I("ngIf",t.canShowItemAdmin()),d(),I("ngIf",t.canShowItemTeacher()),d(),I("ngIf",t.canShowItemStudent()),d(),I("ngIf",t.canShowItemStudent()),d(),I("ngIf",t.canShowItemTeacher()),d(6),S(y(30,11,"SIDEBAR.LOGOUT")))},dependencies:[Be,je,Pe,Ue,Ge,$,q],styles:["a[_ngcontent-%COMP%]{color:#fff}a.active-link[_ngcontent-%COMP%]{background-color:#fff;color:#0d92f4;font-weight:700;border-radius:8px}a[_ngcontent-%COMP%]:hover{color:#0d92f4;background-color:#f5f5f5}"]})};var ot=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275mod=N({type:r})}static{this.\u0275inj=O({imports:[F,F]})}}return r})();var at=(()=>{class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275mod=N({type:r})}static{this.\u0275inj=O({imports:[F,F]})}}return r})();var J={"/home":"Inicio","/game":"Juego","/game-history":"Historial de Juegos","/quiz-game":"Juego","/results":"Resultados","/users":"Usuarios","/game-rooms":"Salas de Juego","/report":"Reporte","/create-game-room":"Crear Sala de Juego","/practice-game":"Sala de practica","/edit-game-room":"Editar Sala de Juego","/get-participating-players":"Participantes"},K={"/home":"Home","/game":"Game","/game-history":"Game History","/quiz-game":"Quiz Game","/results":"Results","/users":"Users","/game-rooms":"Game Rooms","/report":"Report","/create-game-room":"Create Game Room","/practice-game":"Practice Room","/edit-game-room":"Edit Game Room","/get-participating-players":"Participating"};var X=class r{constructor(o,e,t,i,l){this.translate=o;this.authService=e;this.questionService=t;this.router=i;this.storageService=l}isMobile=!1;currentRouteName="";fullName="";rolName="";name="";lastName="";toggleSidenav=new M;toggleMenu(){this.toggleSidenav.emit()}againQuestionClear(){this.questionService.againQuestions({refresh:!0})}ngOnInit(){let o=this.storageService.getItem();o&&this.translate.setDefaultLang(o),this.getUserAuthenticaded(),this.router.events.subscribe(i=>{if(i instanceof ze){let l=this.router.url.split("?")[0];if(this.storageService.getItem()==="es"?this.currentRouteName=J[l]||"ruta":this.currentRouteName=K[l]||"route",this.currentRouteName==="route"||this.currentRouteName==="ruta"){let H=this.router.url.split("?")[0].split("/").slice(0,-1).join("/");this.storageService.getItem()==="es"?this.currentRouteName=J[H]||"ruta":this.currentRouteName=K[H]||"route"}}});let e=this.router.url.split("?")[0]||"/home",t=this.getStaticRoute(e);this.storageService.getItem()==="es"?this.currentRouteName=J[t]||"b":this.currentRouteName=K[t]||"a"}getStaticRoute(o){return`/${o.split("/")[1]}`}getUserAuthenticaded(){this.fullName=this.authService.getUserData()?.user.name+" "+this.authService.getUserData()?.user.last_name,this.storageService.getItem()==="es"?this.rolName=this.authService.getUserData()?.user.role.name:this.authService.getUserData()?.user.role.name==="Estudiante"?this.rolName="Student":this.authService.getUserData()?.user.role.name==="Docente"?this.rolName="Teacher":this.rolName="Administrator"}getPhotoUser(){return"https://ui-avatars.com/api/?name="+this.authService.getUserData()?.user.name+"+"+this.authService.getUserData()?.user.last_name+"&background=0D92F4&color=FFFFFF"}static \u0275fac=function(e){return new(e||r)(c(Q),c(Z),c(et),c(W),c(qe))};static \u0275cmp=v({type:r,selectors:[["app-navbar"]],outputs:{toggleSidenav:"toggleSidenav"},standalone:!0,features:[w],decls:16,vars:7,consts:[[1,"flex","items-center","justify-between","px-4","py-2","md:px-6"],[1,"flex","items-center","gap-4"],["aria-label","Abrir men\xFA","type","button",1,"w-8","h-8","flex","items-center","justify-center","rounded-full","bg-gray-100","text-gray-600","sm:hidden"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor",1,"w-5","h-5"],["d","M3 5h14M3 10h14M3 15h14"],[1,"text-gray-900","text-lg","font-semibold","block","text-center","w-full","sm:w-auto"],[1,"hidden","sm:flex","items-center","gap-2"],[1,"text-sm","text-gray-600","font-medium"],[1,"text-sm","font-semibold","text-gray-900"],[1,"w-10","h-10"],["alt","Avatar del usuario",1,"w-full","h-full","rounded-full","object-cover","border","border-gray-300",3,"src"]],template:function(e,t){e&1&&(n(0,"div",0)(1,"div",1)(2,"button",2),u(),n(3,"svg",3),m(4,"path",4),a()(),f(),n(5,"h6",5),h(6),a()(),n(7,"div",1)(8,"div",6)(9,"span",7),h(10),C(11,"translate"),a(),n(12,"span",8),h(13),a()(),n(14,"div",9),m(15,"img",10),a()()()),e&2&&(d(6),S(t.currentRouteName),d(4),Re("",y(11,5,"NAVBAR.HELLO"),","),d(3),Fe("",t.fullName," - ",t.rolName,""),d(2),De("src",t.getPhotoUser(),Se))},dependencies:[We,ot,at,Le,$,q],styles:[".navbar[_ngcontent-%COMP%]{background-color:#fff!important;color:#fff;width:10vh;height:10vh;display:flex;align-items:center;box-shadow:0 2px 4px #1903031a;width:100%}.container-fluid[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}mat-toolbar[_ngcontent-%COMP%]{position:fixed;top:0;z-index:1000;width:100%;height:10vh;box-shadow:0 2px 4px #1903031a;background-color:#fff!important;color:#fff;display:flex;align-items:center}.score[_ngcontent-%COMP%]{color:#01f}.navbar-nav[_ngcontent-%COMP%]{display:flex;list-style:none;margin:0;padding:0}mat-toolbar[_ngcontent-%COMP%]{position:fixed;top:0;z-index:1000;width:100%;height:10vh;background-color:#fff!important;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 1rem}.navbar-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%}.logo[_ngcontent-%COMP%]{color:#000;margin-right:auto;padding:40px}.navbar-nav[_ngcontent-%COMP%]{display:flex;list-style:none;margin:0;padding:0;gap:1rem}.nav-item[_ngcontent-%COMP%]{margin-left:1rem}@media (max-width: 800px){.navbar-content[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.logo[_ngcontent-%COMP%]{padding:40px}.navbar-nav[_ngcontent-%COMP%]{flex-direction:column;width:100%;display:none}.navbar-nav.show[_ngcontent-%COMP%]{display:flex}.nav-item[_ngcontent-%COMP%]{margin-left:0}}.logo[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}.logo-icon[_ngcontent-%COMP%]{font-size:1.5rem}.logo-text[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:700;color:var(--primary-color)}"]})};var he=class r{static \u0275fac=function(e){return new(e||r)};static \u0275cmp=v({type:r,selectors:[["app-layout"]],standalone:!0,features:[w],decls:8,vars:0,consts:[[1,"min-h-screen","bg-[#F5F5F5]"],[1,"p-4","xl:ml-80"],[1,"block","w-full","max-w-full","bg-transparent","text-white","shadow-none","rounded-xl","transition-all","px-0","py-1"],[1,"text-blue-gray-600"]],template:function(e,t){e&1&&(n(0,"div",0),m(1,"app-sidebar"),n(2,"div",1)(3,"nav",2),m(4,"app-navbar"),a(),n(5,"div"),m(6,"router-outlet"),a(),m(7,"div",3),a()())},dependencies:[X,Y,He]})};export{he as default};
