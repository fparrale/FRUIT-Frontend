import{a as ie}from"./chunk-N5F7BLGW.js";import{$a as u,A as he,Aa as F,Da as w,Mb as d,Sa as o,Xa as I,Y as B,Zb as fe,_ as c,_a as S,a as h,aa as J,b as p,ca as y,fb as C,gc as pe,ib as te,ka as Q,kc as U,l as ue,la as l,mc as N,nc as m,p as ce,ra as ee,tb as V,u as de,wa as f}from"./chunk-EU2SIFBO.js";var be=(()=>{class i{constructor(e,n){this._renderer=e,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static{this.\u0275fac=function(n){return new(n||i)(o(I),o(w))}}static{this.\u0275dir=l({type:i})}}return i})(),X=(()=>{class i extends be{static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=f(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,features:[u]})}}return i})(),T=new y("");var Be={provide:T,useExisting:c(()=>Ae),multi:!0};function Ue(){let i=ie()?ie().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var He=new y(""),Ae=(()=>{class i extends be{constructor(e,n,r){super(e,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ue())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static{this.\u0275fac=function(n){return new(n||i)(o(I),o(w),o(He,8))}}static{this.\u0275dir=l({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&V("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},features:[d([Be]),u]})}}return i})();function _(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Le(i){return i!=null&&typeof i.length=="number"}var v=new y(""),Me=new y(""),$e=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;function We(i){return t=>{if(_(t.value)||_(i))return null;let e=parseFloat(t.value);return!isNaN(e)&&e<i?{min:{min:i,actual:t.value}}:null}}function qe(i){return t=>{if(_(t.value)||_(i))return null;let e=parseFloat(t.value);return!isNaN(e)&&e>i?{max:{max:i,actual:t.value}}:null}}function ze(i){return _(i.value)?{required:!0}:null}function Ze(i){return _(i.value)||$e.test(i.value)?null:{email:!0}}function Xe(i){return t=>_(t.value)||!Le(t.value)?null:t.value.length<i?{minlength:{requiredLength:i,actualLength:t.value.length}}:null}function Ye(i){if(!i)return ne;let t,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=i.toString(),t=i),n=>{if(_(n.value))return null;let r=n.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function ne(i){return null}function Ee(i){return i!=null}function Fe(i){return fe(i)?ce(i):i}function we(i){let t={};return i.forEach(e=>{t=e!=null?h(h({},t),e):t}),Object.keys(t).length===0?null:t}function Ie(i,t){return t.map(e=>e(i))}function Ke(i){return!i.validate}function Se(i){return i.map(t=>Ke(t)?t:e=>t.validate(e))}function Je(i){if(!i)return null;let t=i.filter(Ee);return t.length==0?null:function(e){return we(Ie(e,t))}}function se(i){return i!=null?Je(Se(i)):null}function Qe(i){if(!i)return null;let t=i.filter(Ee);return t.length==0?null:function(e){let n=Ie(e,t).map(Fe);return he(n).pipe(de(we))}}function oe(i){return i!=null?Qe(Se(i)):null}function ge(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function et(i){return i._rawValidators}function tt(i){return i._rawAsyncValidators}function re(i){return i?Array.isArray(i)?i:[i]:[]}function L(i,t){return Array.isArray(i)?i.includes(t):i===t}function me(i,t){let e=re(t);return re(i).forEach(r=>{L(e,r)||e.push(r)}),e}function _e(i,t){return re(t).filter(e=>!L(i,e))}var $=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=se(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=oe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},A=class extends ${get formDirective(){return null}get path(){return null}},R=class extends ${constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},W=class{constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},it={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},li=p(h({},it),{"[class.ng-submitted]":"isSubmitted"}),ui=(()=>{class i extends W{constructor(e){super(e)}static{this.\u0275fac=function(n){return new(n||i)(o(R,2))}}static{this.\u0275dir=l({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&te("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[u]})}}return i})(),ci=(()=>{class i extends W{constructor(e){super(e)}static{this.\u0275fac=function(n){return new(n||i)(o(A,10))}}static{this.\u0275dir=l({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&te("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[u]})}}return i})();var O="VALID",H="INVALID",D="PENDING",x="DISABLED",M=class{},q=class extends M{constructor(t,e){super(),this.value=t,this.source=e}},k=class extends M{constructor(t,e){super(),this.pristine=t,this.source=e}},G=class extends M{constructor(t,e){super(),this.touched=t,this.source=e}},b=class extends M{constructor(t,e){super(),this.status=t,this.source=e}};function Ne(i){return(Y(i)?i.validators:i)||null}function nt(i){return Array.isArray(i)?se(i):i||null}function Oe(i,t){return(Y(t)?t.asyncValidators:i)||null}function rt(i){return Array.isArray(i)?oe(i):i||null}function Y(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function st(i,t,e){let n=i.controls;if(!(t?Object.keys(n):n).length)throw new B(1e3,"");if(!n[e])throw new B(1001,"")}function ot(i,t,e){i._forEachChild((n,r)=>{if(e[r]===void 0)throw new B(1002,"")})}var z=class{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=N(()=>this.statusReactive()),this.statusReactive=S(void 0),this._pristine=N(()=>this.pristineReactive()),this.pristineReactive=S(!0),this._touched=N(()=>this.touchedReactive()),this.touchedReactive=S(!1),this._events=new ue,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return m(this.statusReactive)}set status(t){m(()=>this.statusReactive.set(t))}get valid(){return this.status===O}get invalid(){return this.status===H}get pending(){return this.status==D}get disabled(){return this.status===x}get enabled(){return this.status!==x}get pristine(){return m(this.pristineReactive)}set pristine(t){m(()=>this.pristineReactive.set(t))}get dirty(){return!this.pristine}get touched(){return m(this.touchedReactive)}set touched(t){m(()=>this.touchedReactive.set(t))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(me(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(me(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(_e(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(_e(t,this._rawAsyncValidators))}hasValidator(t){return L(this._rawValidators,t)}hasAsyncValidator(t){return L(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsTouched(p(h({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new G(!0,n))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new G(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;this._parent&&!t.onlySelf&&this._parent.markAsDirty(p(h({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new k(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new k(!0,n))}markAsPending(t={}){this.status=D;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new b(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.markAsPending(p(h({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=x,this.errors=null,this._forEachChild(r=>{r.disable(p(h({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new q(this.value,n)),this._events.next(new b(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(p(h({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=O,this._forEachChild(n=>{n.enable(p(h({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(p(h({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===O||this.status===D)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new q(this.value,e)),this._events.next(new b(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(p(h({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?x:O}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1};let n=Fe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(t,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new b(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?x:this.errors?H:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(H)?H:O}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!t.onlySelf&&this._parent._updatePristine(t,e),r&&this._events.next(new k(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new G(this.touched,e)),this._parent&&!t.onlySelf&&this._parent._updateTouched(t,e)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){Y(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let e=this._parent&&this._parent.dirty;return!t&&!!e&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=nt(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=rt(this._rawAsyncValidators)}},Z=class extends z{constructor(t,e,n){super(Ne(e),Oe(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){ot(this,!0,t),Object.keys(t).forEach(n=>{st(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let r=this.controls[n];r&&r.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t?t[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((r,s)=>{n=e(n,r,s)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var ae=new y("CallSetDisabledState",{providedIn:"root",factory:()=>le}),le="always";function at(i,t){return[...t.path,i]}function xe(i,t,e=le){Pe(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(i.disabled),ut(i,t),dt(i,t),ct(i,t),lt(i,t)}function ve(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function lt(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Pe(i,t){let e=et(i);t.validator!==null?i.setValidators(ge(e,t.validator)):typeof e=="function"&&i.setValidators([e]);let n=tt(i);t.asyncValidator!==null?i.setAsyncValidators(ge(n,t.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();ve(t._rawValidators,r),ve(t._rawAsyncValidators,r)}function ut(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&ke(i,t)})}function ct(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&ke(i,t),i.updateOn!=="submit"&&i.markAsTouched()})}function ke(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function dt(i,t){let e=(n,r)=>{t.valueAccessor.writeValue(n),r&&t.viewToModelUpdate(n)};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function ht(i,t){i==null,Pe(i,t)}function ft(i,t){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function pt(i){return Object.getPrototypeOf(i.constructor)===X}function gt(i,t){i._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function mt(i,t){if(!t)return null;Array.isArray(t);let e,n,r;return t.forEach(s=>{s.constructor===Ae?e=s:pt(s)?n=s:r=s}),r||n||e||null}var _t={provide:A,useExisting:c(()=>vt)},P=Promise.resolve(),vt=(()=>{class i extends A{get submitted(){return m(this.submittedReactive)}constructor(e,n,r){super(),this.callSetDisabledState=r,this._submitted=N(()=>this.submittedReactive()),this.submittedReactive=S(!1),this._directives=new Set,this.ngSubmit=new F,this.form=new Z({},se(e),oe(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){P.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),xe(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){P.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){P.then(()=>{let n=this._findContainer(e.path),r=new Z({});ht(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){P.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){P.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),gt(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static{this.\u0275fac=function(n){return new(n||i)(o(v,10),o(Me,10),o(ae,8))}}static{this.\u0275dir=l({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&V("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[d([_t]),u]})}}return i})();function ye(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}function Ce(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var yt=class extends z{constructor(t=null,e,n){super(Ne(e),Oe(n,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Y(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Ce(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){ye(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){ye(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){Ce(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Ct={provide:R,useExisting:c(()=>Vt)},Ve=Promise.resolve(),Vt=(()=>{class i extends R{constructor(e,n,r,s,a,g){super(),this._changeDetectorRef=a,this.callSetDisabledState=g,this.control=new yt,this._registered=!1,this.name="",this.update=new F,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=mt(this,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),ft(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){xe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Ve.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&U(n);Ve.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?at(e,this._parent):[e]}static{this.\u0275fac=function(n){return new(n||i)(o(A,9),o(v,10),o(Me,10),o(T,10),o(pe,8),o(ae,8))}}static{this.\u0275dir=l({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[d([Ct]),u,ee]})}}return i})(),hi=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=l({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})(),Dt={provide:T,useExisting:c(()=>bt),multi:!0},bt=(()=>{class i extends X{writeValue(e){let n=e??"";this.setProperty("value",n)}registerOnChange(e){this.onChange=n=>{e(n==""?null:parseFloat(n))}}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=f(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,r){n&1&&V("input",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},features:[d([Dt]),u]})}}return i})();var At={provide:T,useExisting:c(()=>Re),multi:!0};function Ge(i,t){return i==null?`${t}`:(t&&typeof t=="object"&&(t="Object"),`${i}: ${t}`.slice(0,50))}function Mt(i){return i.split(":")[0]}var Re=(()=>{class i extends X{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;let n=this._getOptionId(e),r=Ge(n,e);this.setProperty("value",r)}registerOnChange(e){this.onChange=n=>{this.value=this._getOptionValue(n),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),e))return n;return null}_getOptionValue(e){let n=Mt(e);return this._optionMap.has(n)?this._optionMap.get(n):e}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=f(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,r){n&1&&V("change",function(a){return r.onChange(a.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[d([At]),u]})}}return i})(),fi=(()=>{class i{constructor(e,n,r){this._element=e,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(Ge(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._setElementValue(e),this._select&&this._select.writeValue(this._select.value)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(n){return new(n||i)(o(w),o(I),o(Re,9))}}static{this.\u0275dir=l({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return i})(),Et={provide:T,useExisting:c(()=>Te),multi:!0};function De(i,t){return i==null?`${t}`:(typeof t=="string"&&(t=`'${t}'`),t&&typeof t=="object"&&(t="Object"),`${i}: ${t}`.slice(0,50))}function Ft(i){return i.split(":")[0]}var Te=(()=>{class i extends X{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(e){this._compareWith=e}writeValue(e){this.value=e;let n;if(Array.isArray(e)){let r=e.map(s=>this._getOptionId(s));n=(s,a)=>{s._setSelected(r.indexOf(a.toString())>-1)}}else n=(r,s)=>{r._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(e){this.onChange=n=>{let r=[],s=n.selectedOptions;if(s!==void 0){let a=s;for(let g=0;g<a.length;g++){let j=a[g],K=this._getOptionValue(j.value);r.push(K)}}else{let a=n.options;for(let g=0;g<a.length;g++){let j=a[g];if(j.selected){let K=this._getOptionValue(j.value);r.push(K)}}}this.value=r,e(r)}}_registerOption(e){let n=(this._idCounter++).toString();return this._optionMap.set(n,e),n}_getOptionId(e){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,e))return n;return null}_getOptionValue(e){let n=Ft(e);return this._optionMap.has(n)?this._optionMap.get(n)._value:e}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=f(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,r){n&1&&V("change",function(a){return r.onChange(a.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},features:[d([Et]),u]})}}return i})(),pi=(()=>{class i{constructor(e,n,r){this._element=e,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(De(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(De(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static{this.\u0275fac=function(n){return new(n||i)(o(w),o(I),o(Te,9))}}static{this.\u0275dir=l({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}})}}return i})();function wt(i){return typeof i=="number"?i:parseInt(i,10)}function je(i){return typeof i=="number"?i:parseFloat(i)}var E=(()=>{class i{constructor(){this._validator=ne}ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):ne,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=l({type:i,features:[ee]})}}return i})(),It={provide:v,useExisting:c(()=>St),multi:!0},St=(()=>{class i extends E{constructor(){super(...arguments),this.inputName="max",this.normalizeInput=e=>je(e),this.createValidator=e=>qe(e)}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=f(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["input","type","number","max","","formControlName",""],["input","type","number","max","","formControl",""],["input","type","number","max","","ngModel",""]],hostVars:1,hostBindings:function(n,r){n&2&&C("max",r._enabled?r.max:null)},inputs:{max:"max"},features:[d([It]),u]})}}return i})(),Nt={provide:v,useExisting:c(()=>Ot),multi:!0},Ot=(()=>{class i extends E{constructor(){super(...arguments),this.inputName="min",this.normalizeInput=e=>je(e),this.createValidator=e=>We(e)}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=f(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["input","type","number","min","","formControlName",""],["input","type","number","min","","formControl",""],["input","type","number","min","","ngModel",""]],hostVars:1,hostBindings:function(n,r){n&2&&C("min",r._enabled?r.min:null)},inputs:{min:"min"},features:[d([Nt]),u]})}}return i})(),xt={provide:v,useExisting:c(()=>Pt),multi:!0};var Pt=(()=>{class i extends E{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=U,this.createValidator=e=>ze}enabled(e){return e}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=f(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&C("required",r._enabled?"":null)},inputs:{required:"required"},features:[d([xt]),u]})}}return i})();var kt={provide:v,useExisting:c(()=>Gt),multi:!0},Gt=(()=>{class i extends E{constructor(){super(...arguments),this.inputName="email",this.normalizeInput=U,this.createValidator=e=>Ze}enabled(e){return e}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=f(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["","email","","formControlName",""],["","email","","formControl",""],["","email","","ngModel",""]],inputs:{email:"email"},features:[d([kt]),u]})}}return i})(),Rt={provide:v,useExisting:c(()=>Tt),multi:!0},Tt=(()=>{class i extends E{constructor(){super(...arguments),this.inputName="minlength",this.normalizeInput=e=>wt(e),this.createValidator=e=>Xe(e)}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=f(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(n,r){n&2&&C("minlength",r._enabled?r.minlength:null)},inputs:{minlength:"minlength"},features:[d([Rt]),u]})}}return i})();var jt={provide:v,useExisting:c(()=>Bt),multi:!0},Bt=(()=>{class i extends E{constructor(){super(...arguments),this.inputName="pattern",this.normalizeInput=e=>e,this.createValidator=e=>Ye(e)}static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=f(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(n,r){n&2&&C("pattern",r._enabled?r.pattern:null)},inputs:{pattern:"pattern"},features:[d([jt]),u]})}}return i})();var Ut=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=Q({type:i})}static{this.\u0275inj=J({})}}return i})();var gi=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:ae,useValue:e.callSetDisabledState??le}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=Q({type:i})}static{this.\u0275inj=J({imports:[Ut]})}}return i})();export{Ae as a,ui as b,ci as c,vt as d,Vt as e,hi as f,bt as g,Re as h,fi as i,pi as j,St as k,Ot as l,Pt as m,Gt as n,Tt as o,Bt as p,gi as q};
