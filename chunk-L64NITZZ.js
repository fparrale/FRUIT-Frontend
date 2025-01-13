import{a as U,b as H,e as N,q as k}from"./chunk-56TG5EE6.js";import{a as V,b as $}from"./chunk-RK23KOMG.js";import{a as B}from"./chunk-IUWLHEJ5.js";import{a as J}from"./chunk-N77IRRRE.js";import{b as z,c as F,d as W}from"./chunk-EIXRTAYT.js";import{a as D,b as q}from"./chunk-XA5C6TME.js";import{a as C,b as O,j as T,l as R}from"./chunk-PWFTLQLJ.js";import{r as M}from"./chunk-N5F7BLGW.js";import{$ as G,Eb as S,G as v,Gb as b,Jb as E,Kb as j,Lb as L,Nb as _,Ra as c,Sa as a,Ub as p,Vb as d,X as h,ea as f,ja as y,kb as n,lb as s,mb as l,r as g,tb as A,ua as I,va as x,yb as P}from"./chunk-EU2SIFBO.js";var u=class o{constructor(t,e){this.http=t;this.authService=e}apiUrl=D.apiUrl+"questions/questionsByCode";apiUrlPractice=D.apiUrl+"questions/questionInfoBycode";submitGameCode(t){let e=this.authService.getUserData(),r=new C({Authorization:`Bearer ${e?.access_token}`});return this.http.post(this.apiUrl,{code:t},{headers:r}).pipe(h(i=>i),v(i=>g(()=>new Error(i.error.message||"Ocurrio un error intentalo mas tarde"))))}submitGameCodePractice(t){let e=this.authService.getUserData(),r=new C({Authorization:`Bearer ${e?.access_token}`});return this.http.post(this.apiUrlPractice,{code:t},{headers:r}).pipe(h(i=>i),v(i=>g(()=>new Error(i.error.message||"Ocurrio un error intentalo mas tarde"))))}static \u0275fac=function(e){return new(e||o)(f(O),f(q))};static \u0275prov=G({token:o,factory:o.\u0275fac,providedIn:"root"})};var w=class o{constructor(t,e,r,i,m,Y,Z,ee){this.gameService=t;this.router=e;this.route=r;this.gameDataParamsService=i;this.loadingService=m;this.alertService=Y;this.translate=Z;this.storageService=ee;this.route.queryParams.subscribe(K=>{this.mode=K.mode,console.log(`Game mode: ${this.mode}`)})}gameCode="";mode=null;ngOnInit(){}submitCode(){this.gameCode.trim()?(this.loadingService.showLoading(),this.mode=="practice"?this.gameService.submitGameCodePractice(this.gameCode).subscribe({next:t=>{this.loadingService.hideLoading();let e=t.questions;if(!e||e.length===0){this.alertService.showAlert("No se encontraron preguntas para el juego, por favor comunicate con tu docente.");return}else this.gameDataParamsService.setGamePracticeDataLocalStorage(e),this.gameDataParamsService.setGameRoomIdLocalStorage(t.game_room_id),this.gameDataParamsService.setGameDataPractice(e),this.mode==="find"?this.router.navigate(["/quiz-game"]):this.mode==="practice"&&this.router.navigate(["/practice-game"])},error:t=>{this.loadingService.hideLoading(),this.alertService.showAlert(t.message,!0)}}):this.gameService.submitGameCode(this.gameCode).subscribe({next:t=>{this.loadingService.hideLoading();let e=t.questions;if(!e||e.length===0){this.alertService.showAlert("No se encontraron preguntas para el juego, por favor comunicate con tu docente.");return}else this.gameDataParamsService.setGameDataLocalStorage(e),this.gameDataParamsService.setGameRoomIdLocalStorage(t.game_room_id),this.gameDataParamsService.setGameData(e),this.mode==="find"?this.router.navigate(["/quiz-game"]):this.mode==="practice"&&this.router.navigate(["/practice-game"])},error:t=>{this.loadingService.hideLoading(),this.alertService.showAlert(t.message,!0)}})):this.alertService.showAlert("El c\xF3digo del juego no puede estar vac\xEDo.",!0)}static \u0275fac=function(e){return new(e||o)(a(u),a(R),a(T),a(B),a($),a(V),a(z),a(J))};static \u0275cmp=y({type:o,selectors:[["app-game"]],standalone:!0,features:[_],decls:16,vars:10,consts:[[1,"py-10","flex","justify-center","items-center"],[1,"bg-white","p-8","rounded-2xl","shadow-2xl","max-w-md","w-full"],[1,"text-center","text-xl","font-bold","text-gray-700","mb-6"],[1,"flex","items-center","space-x-3"],["type","text",1,"w-full","px-4","py-3","border","border-gray-300","rounded-lg","focus:outline-none","focus:border-blue-600","focus:ring-2","focus:ring-blue-300","transition-all",3,"ngModelChange","ngModel","placeholder"],[1,"flex","items-center","justify-center","bg-[#0D92F4]","text-white","p-3","rounded-lg","shadow-md","hover:bg-blue-700","hover:shadow-lg","focus:outline-none","focus:ring-2","focus:ring-blue-400","transition-all",3,"click"],["fill","currentColor","viewBox","0 0 24 24",1,"w-5","h-5"],["d","M10 2a8 8 0 015.292 13.708l4.707 4.707-1.414 1.414-4.707-4.707A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z"],[1,"text-center","text-sm","text-gray-600","mt-4"]],template:function(e,r){e&1&&(n(0,"div",0)(1,"div",1)(2,"p",2),S(3),p(4,"translate"),s(),l(5,"br"),n(6,"div",3)(7,"input",4),p(8,"translate"),L("ngModelChange",function(m){return j(r.gameCode,m)||(r.gameCode=m),m}),s(),n(9,"button",5),A("click",function(){return r.submitCode()}),I(),n(10,"svg",6),l(11,"path",7),s()()(),x(),l(12,"br"),n(13,"p",8),S(14),p(15,"translate"),s()()()),e&2&&(c(3),b(" \u{1F511} ",d(4,4,"GAME_CODE.TITLE")," "),c(4),P("placeholder",d(8,6,"GAME_CODE.PLACEHOLDER")),E("ngModel",r.gameCode),c(7),b(" ",d(15,8,"GAME_CODE.DESCRIPTION")," "))},dependencies:[M,k,U,H,N,W,F]})};export{w as default};
