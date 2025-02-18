import './polyfills.server.mjs';
import{Aa as Ee,C as J,Ca as we,E as ee,G as te,Ic as Ae,N as W,Na as k,O as ie,Q as R,U as l,V as b,X as A,Z as a,_ as S,_a as Ce,c as L,da as v,ea as P,f as y,g as be,k as z,o as U,p as ve,pc as f,ra as Ie,s as ye,ta as H,ua as m,v as Q,wa as D,y as q,z as X}from"./chunk-RDXAN74U.mjs";import{a as E}from"./chunk-5XUXGTUW.mjs";function Qe(t){return t!=null&&`${t}`!="false"}function De(t,n=0){return qe(t)?Number(t):arguments.length===2?n:0}function qe(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function ne(t){return Array.isArray(t)?t:[t]}function I(t){return t instanceof D?t.nativeElement:t}var re;try{re=typeof Intl<"u"&&Intl.v8BreakIterator}catch{re=!1}var h=(()=>{class t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?Ae(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||re)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static{this.\u0275fac=function(i){return new(i||t)(a(Ee))}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var j;function Xe(){if(j==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>j=!0}))}finally{j=j||!1}return j}function O(t){return Xe()?t:!!t.capture}var _=function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t}(_||{}),K,x;function ke(){if(x==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return x=!1,x;if("scrollBehavior"in document.documentElement.style)x=!0;else{let t=Element.prototype.scrollTo;t?x=!/\{\s*\[native code\]\s*\}/.test(t.toString()):x=!1}}return x}function F(){if(typeof document!="object"||!document)return _.NORMAL;if(K==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),K=_.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,K=t.scrollLeft===0?_.NEGATED:_.INVERTED),t.remove()}return K}var se;function Je(){if(se==null){let t=typeof document<"u"?document.head:null;se=!!(t&&(t.createShadowRoot||t.attachShadow))}return se}function xe(t){if(Je()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function w(t){return t.composedPath?t.composedPath()[0]:t.target}function Te(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var tt=new A("cdk-dir-doc",{providedIn:"root",factory:it});function it(){return S(f)}var nt=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function st(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?nt.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var Re=(()=>{class t{constructor(e){if(this.value="ltr",this.change=new H,e){let i=e.body?e.body.dir:null,s=e.documentElement?e.documentElement.dir:null;this.value=st(i||s||"ltr")}}ngOnDestroy(){this.change.complete()}static{this.\u0275fac=function(i){return new(i||t)(a(tt,8))}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var ae=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=v({type:t})}static{this.\u0275inj=b({})}}return t})();var Et=20,wt=(()=>{class t{constructor(e,i,s){this._ngZone=e,this._platform=i,this._scrolled=new y,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=s}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Et){return this._platform.isBrowser?new L(i=>{this._globalSubscription||this._addGlobalListener();let s=e>0?this._scrolled.pipe(X(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{s.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):z()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let s=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(q(r=>!r||s.indexOf(r)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((s,r)=>{this._scrollableContainsElement(r,e)&&i.push(r)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let s=I(i),r=e.getElementRef().nativeElement;do if(s==r)return!0;while(s=s.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return Q(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static{this.\u0275fac=function(i){return new(i||t)(a(m),a(h),a(f,8))}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Di=(()=>{class t{constructor(e,i,s,r){this.elementRef=e,this.scrollDispatcher=i,this.ngZone=s,this.dir=r,this._destroyed=new y,this._elementScrolled=new L(o=>this.ngZone.runOutsideAngular(()=>Q(this.elementRef.nativeElement,"scroll").pipe(R(this._destroyed)).subscribe(o)))}ngOnInit(){this.scrollDispatcher.register(this)}ngOnDestroy(){this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,s=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=s?e.end:e.start),e.right==null&&(e.right=s?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),s&&F()!=_.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),F()==_.INVERTED?e.left=e.right:F()==_.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;ke()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",s="right",r=this.elementRef.nativeElement;if(e=="top")return r.scrollTop;if(e=="bottom")return r.scrollHeight-r.clientHeight-r.scrollTop;let o=this.dir&&this.dir.value=="rtl";return e=="start"?e=o?s:i:e=="end"&&(e=o?i:s),o&&F()==_.INVERTED?e==i?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:o&&F()==_.NEGATED?e==i?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==i?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static{this.\u0275fac=function(i){return new(i||t)(k(D),k(wt),k(m),k(Re,8))}}static{this.\u0275dir=P({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]],standalone:!0})}}return t})(),Ct=20,ki=(()=>{class t{constructor(e,i,s){this._platform=e,this._change=new y,this._changeListener=r=>{this._change.next(r)},this._document=s,i.runOutsideAngular(()=>{if(e.isBrowser){let r=this._getWindow();r.addEventListener("resize",this._changeListener),r.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:s}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+s,right:e.left+i,height:s,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),s=e.documentElement,r=s.getBoundingClientRect(),o=-r.top||e.body.scrollTop||i.scrollY||s.scrollTop||0,c=-r.left||e.body.scrollLeft||i.scrollX||s.scrollLeft||0;return{top:o,left:c}}change(e=Ct){return e>0?this._change.pipe(X(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static{this.\u0275fac=function(i){return new(i||t)(a(h),a(m),a(f,8))}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var xi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=v({type:t})}static{this.\u0275inj=b({})}}return t})();var Oe=new Set,T,At=(()=>{class t{constructor(e,i){this._platform=e,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):kt}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Dt(e,this._nonce),this._matchMedia(e)}static{this.\u0275fac=function(i){return new(i||t)(a(h),a(we,8))}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Dt(t,n){if(!Oe.has(t))try{T||(T=document.createElement("style"),n&&T.setAttribute("nonce",n),T.setAttribute("type","text/css"),document.head.appendChild(T)),T.sheet&&(T.sheet.insertRule(`@media ${t} {body{ }}`,0),Oe.add(t))}catch(e){console.error(e)}}function kt(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Ne=(()=>{class t{constructor(e,i){this._mediaMatcher=e,this._zone=i,this._queries=new Map,this._destroySubject=new y}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Fe(ne(e)).some(s=>this._registerQuery(s).mql.matches)}observe(e){let s=Fe(ne(e)).map(o=>this._registerQuery(o).observable),r=ve(s);return r=ye(r.pipe(ee(1)),r.pipe(W(1),J(0))),r.pipe(U(o=>{let c={matches:!1,breakpoints:{}};return o.forEach(({matches:g,query:u})=>{c.matches=c.matches||g,c.breakpoints[u]=g}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),r={observable:new L(o=>{let c=g=>this._zone.run(()=>o.next(g));return i.addListener(c),()=>{i.removeListener(c)}}).pipe(ie(i),U(({matches:o})=>({query:e,matches:o})),R(this._destroySubject)),mql:i};return this._queries.set(e,r),r}static{this.\u0275fac=function(i){return new(i||t)(a(At),a(m))}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Fe(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function Bi(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var Tt=(()=>{class t{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Rt(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=Mt(Bt(e));if(i&&(Le(i)===-1||!this.isVisible(i)))return!1;let s=e.nodeName.toLowerCase(),r=Le(e);return e.hasAttribute("contenteditable")?r!==-1:s==="iframe"||s==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Pt(e)?!1:s==="audio"?e.hasAttribute("controls")?r!==-1:!1:s==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return jt(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static{this.\u0275fac=function(i){return new(i||t)(a(h))}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Mt(t){try{return t.frameElement}catch{return null}}function Rt(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function St(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function Ot(t){return Nt(t)&&t.type=="hidden"}function Ft(t){return Lt(t)&&t.hasAttribute("href")}function Nt(t){return t.nodeName.toLowerCase()=="input"}function Lt(t){return t.nodeName.toLowerCase()=="a"}function Be(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function Le(t){if(!Be(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function Pt(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function jt(t){return Ot(t)?!1:St(t)||Ft(t)||t.hasAttribute("contenteditable")||Be(t)}function Bt(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var le=class{get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}constructor(n,e,i,s,r=!1,o){this._element=n,this._checker=e,this._ngZone=i,this._document=s,this._injector=o,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,r||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let s=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(s)return s}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let s=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(s)return s}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?Ce(n,{injector:this._injector}):setTimeout(n)}},mn=(()=>{class t{constructor(e,i,s){this._checker=e,this._ngZone=i,this._injector=S(Ie),this._document=s}create(e,i=!1){return new le(e,this._checker,this._ngZone,this._document,i,this._injector)}static{this.\u0275fac=function(i){return new(i||t)(a(Tt),a(m),a(f))}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function de(t){return t.buttons===0||t.detail===0}function he(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var Vt=new A("cdk-input-modality-detector-options"),zt={ignoreKeys:[18,17,224,91,16]},Ve=650,N=O({passive:!0,capture:!0}),Ut=(()=>{class t{get mostRecentModality(){return this._modality.value}constructor(e,i,s,r){this._platform=e,this._mostRecentTarget=null,this._modality=new be(null),this._lastTouchMs=0,this._onKeydown=o=>{this._options?.ignoreKeys?.some(c=>c===o.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=w(o))},this._onMousedown=o=>{Date.now()-this._lastTouchMs<Ve||(this._modality.next(de(o)?"keyboard":"mouse"),this._mostRecentTarget=w(o))},this._onTouchstart=o=>{if(he(o)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=w(o)},this._options=E(E({},zt),r),this.modalityDetected=this._modality.pipe(W(1)),this.modalityChanged=this.modalityDetected.pipe(te()),e.isBrowser&&i.runOutsideAngular(()=>{s.addEventListener("keydown",this._onKeydown,N),s.addEventListener("mousedown",this._onMousedown,N),s.addEventListener("touchstart",this._onTouchstart,N)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,N),document.removeEventListener("mousedown",this._onMousedown,N),document.removeEventListener("touchstart",this._onTouchstart,N))}static{this.\u0275fac=function(i){return new(i||t)(a(h),a(m),a(f),a(Vt,8))}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var $=function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t}($||{}),Wt=new A("cdk-focus-monitor-default-options"),G=O({passive:!0,capture:!0}),fn=(()=>{class t{constructor(e,i,s,r,o){this._ngZone=e,this._platform=i,this._inputModalityDetector=s,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new y,this._rootNodeFocusAndBlurListener=c=>{let g=w(c);for(let u=g;u;u=u.parentElement)c.type==="focus"?this._onFocus(c,u):this._onBlur(c,u)},this._document=r,this._detectionMode=o?.detectionMode||$.IMMEDIATE}monitor(e,i=!1){let s=I(e);if(!this._platform.isBrowser||s.nodeType!==1)return z();let r=xe(s)||this._getDocument(),o=this._elementInfo.get(s);if(o)return i&&(o.checkChildren=!0),o.subject;let c={checkChildren:i,subject:new y,rootNode:r};return this._elementInfo.set(s,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let i=I(e),s=this._elementInfo.get(i);s&&(s.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(s))}focusVia(e,i,s){let r=I(e),o=this._getDocument().activeElement;r===o?this._getClosestElementsInfo(r).forEach(([c,g])=>this._originChanged(c,i,g)):(this._setOrigin(i),typeof r.focus=="function"&&r.focus(s))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===$.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===$.IMMEDIATE){clearTimeout(this._originTimeoutId);let s=this._originFromTouchInteraction?Ve:1;this._originTimeoutId=setTimeout(()=>this._origin=null,s)}})}_onFocus(e,i){let s=this._elementInfo.get(i),r=w(e);!s||!s.checkChildren&&i!==r||this._originChanged(i,this._getFocusOrigin(r),s)}_onBlur(e,i){let s=this._elementInfo.get(i);!s||s.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(s,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,s=this._rootNodeFocusListenerCount.get(i)||0;s||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,G),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,G)}),this._rootNodeFocusListenerCount.set(i,s+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(R(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let s=this._rootNodeFocusListenerCount.get(i);s>1?this._rootNodeFocusListenerCount.set(i,s-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,G),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,G),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,s){this._setClasses(e,i),this._emitOrigin(s,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((s,r)=>{(r===e||s.checkChildren&&r.contains(e))&&i.push([r,s])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:s}=this._inputModalityDetector;if(s!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let o=0;o<r.length;o++)if(r[o].contains(i))return!0}return!1}static{this.\u0275fac=function(i){return new(i||t)(a(m),a(h),a(Ut),a(f,8),a(Wt,8))}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var M=function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t}(M||{}),Pe="cdk-high-contrast-black-on-white",je="cdk-high-contrast-white-on-black",ce="cdk-high-contrast-active",ze=(()=>{class t{constructor(e,i){this._platform=e,this._document=i,this._breakpointSubscription=S(Ne).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return M.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,s=i&&i.getComputedStyle?i.getComputedStyle(e):null,r=(s&&s.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return M.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return M.BLACK_ON_WHITE}return M.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(ce,Pe,je),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===M.BLACK_ON_WHITE?e.add(ce,Pe):i===M.WHITE_ON_BLACK&&e.add(ce,je)}}static{this.\u0275fac=function(i){return new(i||t)(a(h),a(f))}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Kt(){return!0}var Gt=new A("mat-sanity-checks",{providedIn:"root",factory:Kt}),Ue=(()=>{class t{constructor(e,i,s){this._sanityChecks=i,this._document=s,this._hasDoneGlobalChecks=!1,e._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return Te()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[e]}static{this.\u0275fac=function(i){return new(i||t)(a(ze),a(Gt,8),a(f))}}static{this.\u0275mod=v({type:t})}static{this.\u0275inj=b({imports:[ae,ae]})}}return t})();var p=function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t}(p||{}),ue=class{constructor(n,e,i,s=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=s,this.state=p.HIDDEN}fadeOut(){this._renderer.fadeOutRipple(this)}},We=O({passive:!0,capture:!0}),me=class{constructor(){this._events=new Map,this._delegateEventHandler=n=>{let e=w(n);e&&this._events.get(n.type)?.forEach((i,s)=>{(s===e||s.contains(e))&&i.forEach(r=>r.handleEvent(n))})}}addHandler(n,e,i,s){let r=this._events.get(e);if(r){let o=r.get(i);o?o.add(s):r.set(i,new Set([s]))}else this._events.set(e,new Map([[i,new Set([s])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,We)})}removeHandler(n,e,i){let s=this._events.get(n);if(!s)return;let r=s.get(e);r&&(r.delete(i),r.size===0&&s.delete(e),s.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,We)))}},He={enterDuration:225,exitDuration:150},$t=800,Ke=O({passive:!0,capture:!0}),Ge=["mousedown","touchstart"],$e=["mouseup","mouseleave","touchend","touchcancel"],Ze=class t{static{this._eventManager=new me}constructor(n,e,i,s){this._target=n,this._ngZone=e,this._platform=s,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,s.isBrowser&&(this._containerElement=I(i))}fadeInRipple(n,e,i={}){let s=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=E(E({},He),i.animation);i.centered&&(n=s.left+s.width/2,e=s.top+s.height/2);let o=i.radius||Zt(n,e,s),c=n-s.left,g=e-s.top,u=r.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${c-o}px`,d.style.top=`${g-o}px`,d.style.height=`${o*2}px`,d.style.width=`${o*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(d);let fe=window.getComputedStyle(d),Ye=fe.transitionProperty,pe=fe.transitionDuration,Z=Ye==="none"||pe==="0s"||pe==="0s, 0s"||s.width===0&&s.height===0,C=new ue(this,d,i,Z);d.style.transform="scale3d(1, 1, 1)",C.state=p.FADING_IN,i.persistent||(this._mostRecentTransientRipple=C);let V=null;return!Z&&(u||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let _e=()=>{V&&(V.fallbackTimer=null),clearTimeout(ge),this._finishRippleTransition(C)},Y=()=>this._destroyRipple(C),ge=setTimeout(Y,u+100);d.addEventListener("transitionend",_e),d.addEventListener("transitioncancel",Y),V={onTransitionEnd:_e,onTransitionCancel:Y,fallbackTimer:ge}}),this._activeRipples.set(C,V),(Z||!u)&&this._finishRippleTransition(C),C}fadeOutRipple(n){if(n.state===p.FADING_OUT||n.state===p.HIDDEN)return;let e=n.element,i=E(E({},He),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=p.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=I(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Ge.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{$e.forEach(e=>{this._triggerElement.addEventListener(e,this,Ke)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===p.FADING_IN?this._startFadeOutTransition(n):n.state===p.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=p.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=p.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=de(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+$t;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!he(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===p.VISIBLE||n.config.terminateOnPointerUp&&n.state===p.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(Ge.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&($e.forEach(e=>n.removeEventListener(e,this,Ke)),this._pointerUpEventsRegistered=!1))}};function Zt(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),s=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+s*s)}var Kn=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=v({type:t})}static{this.\u0275inj=b({imports:[Ue,Ue]})}}return t})();export{Qe as a,De as b,ne as c,I as d,h as e,O as f,xe as g,w as h,Re as i,wt as j,Di as k,ki as l,xi as m,Bi as n,Ne as o,Tt as p,mn as q,de as r,he as s,fn as t,Ue as u,Kn as v};
