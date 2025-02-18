import './polyfills.server.mjs';
import{a as z}from"./chunk-KCDCPOIC.mjs";import{a as K}from"./chunk-TXQQKV2F.mjs";import{a as F,b as W,e as V,q as J}from"./chunk-ERC2CRHF.mjs";import{a as R,b as H}from"./chunk-QZQANR5E.mjs";import{a as D,b as k}from"./chunk-XZVO5RUM.mjs";import{b as B,c as N,d as U}from"./chunk-G2EMQGJ6.mjs";import{a as C,b as O,n as T,q}from"./chunk-UTIOHHII.mjs";import{A as v,Bb as E,Cb as j,Db as L,Fb as _,Fc as M,Ma as m,Mb as p,Na as r,Nb as d,R as h,U as y,Z as f,ca as I,eb as s,fb as c,gb as l,l as g,lb as x,na as G,oa as A,qb as P,wb as S,yb as b}from"./chunk-RDXAN74U.mjs";import"./chunk-5XUXGTUW.mjs";var u=class n{constructor(t,e){this.http=t;this.authService=e}apiUrl=D.apiUrl+"questions/questionsByCode";apiUrlPractice=D.apiUrl+"questions/questionInfoBycode";submitGameCode(t,e){let i=this.authService.getUserData(),a=new C({Authorization:`Bearer ${i?.access_token}`});return this.http.post(this.apiUrl,{code:t,language:e},{headers:a}).pipe(h(o=>o),v(o=>g(()=>new Error(o.error.message||"Ocurrio un error intentalo mas tarde"))))}submitGameCodePractice(t){let e=this.authService.getUserData(),i=new C({Authorization:`Bearer ${e?.access_token}`});return this.http.post(this.apiUrlPractice,{code:t},{headers:i}).pipe(h(a=>a),v(a=>g(()=>new Error(a.error.message||"Ocurrio un error intentalo mas tarde"))))}static \u0275fac=function(e){return new(e||n)(f(O),f(k))};static \u0275prov=y({token:n,factory:n.\u0275fac,providedIn:"root"})};var w=class n{constructor(t,e,i,a,o,Z,$,ee){this.gameService=t;this.router=e;this.route=i;this.gameDataParamsService=a;this.loadingService=o;this.alertService=Z;this.translate=$;this.storageService=ee;this.route.queryParams.subscribe(Q=>{this.mode=Q.mode})}gameCode="";mode=null;ngOnInit(){}submitCode(){this.gameCode.trim()?(this.loadingService.showLoading(),this.mode=="practice"?this.gameService.submitGameCodePractice(this.gameCode).subscribe({next:t=>{this.loadingService.hideLoading();let e=t.questions;if(!e||e.length===0){this.alertService.showAlert("No se encontraron preguntas para el juego, por favor comunicate con tu docente.");return}else this.gameDataParamsService.setGamePracticeDataLocalStorage(e),this.gameDataParamsService.setGameRoomIdLocalStorage(t.game_room_id),this.gameDataParamsService.setGameDataPractice(e),this.mode==="find"?this.router.navigate(["/quiz-game"]):this.mode==="practice"&&this.router.navigate(["/practice-game"])},error:t=>{this.loadingService.hideLoading(),this.alertService.showAlert(t.message,!0)}}):this.gameService.submitGameCode(this.gameCode,this.storageService.getItem()||"es").subscribe({next:t=>{this.loadingService.hideLoading();let e=t.questions;if(!e||e.length===0){this.storageService.getItem()==="es"?this.alertService.showAlert("No se encontraron preguntas para el juego, por favor comunicate con tu docente."):this.alertService.showAlert("No questions found for the game, please contact your teacher for more information.");return}else this.gameDataParamsService.setGameDataLocalStorage(e),this.gameDataParamsService.setGameRoomIdLocalStorage(t.game_room_id),this.gameDataParamsService.setGameData(e),this.mode==="find"?this.router.navigate(["/quiz-game"]):this.mode==="practice"&&this.router.navigate(["/practice-game"])},error:t=>{this.loadingService.hideLoading(),this.alertService.showAlert(t.message,!0)}})):this.storageService.getItem()==="es"?this.alertService.showAlert("El c\xF3digo del juego no puede estar vac\xEDo.",!0):this.alertService.showAlert("The game code cannot be empty.",!0)}static \u0275fac=function(e){return new(e||n)(r(u),r(q),r(T),r(z),r(R),r(H),r(B),r(K))};static \u0275cmp=I({type:n,selectors:[["app-game"]],standalone:!0,features:[_],decls:16,vars:10,consts:[[1,"py-10","flex","justify-center","items-center"],[1,"bg-white","p-8","rounded-2xl","shadow-2xl","max-w-md","w-full"],[1,"text-center","text-xl","font-bold","text-gray-700","mb-6"],[1,"flex","items-center","space-x-3"],["type","text",1,"w-full","px-4","py-3","border","border-gray-300","rounded-lg","focus:outline-none","focus:border-blue-600","focus:ring-2","focus:ring-blue-300","transition-all",3,"ngModelChange","ngModel","placeholder"],[1,"flex","items-center","justify-center","bg-[#0D92F4]","text-white","p-3","rounded-lg","shadow-md","hover:bg-blue-700","hover:shadow-lg","focus:outline-none","focus:ring-2","focus:ring-blue-400","transition-all",3,"click"],["fill","currentColor","viewBox","0 0 24 24",1,"w-5","h-5"],["d","M10 2a8 8 0 015.292 13.708l4.707 4.707-1.414 1.414-4.707-4.707A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z"],[1,"text-center","text-sm","text-gray-600","mt-4"]],template:function(e,i){e&1&&(s(0,"div",0)(1,"div",1)(2,"p",2),S(3),p(4,"translate"),c(),l(5,"br"),s(6,"div",3)(7,"input",4),p(8,"translate"),L("ngModelChange",function(o){return j(i.gameCode,o)||(i.gameCode=o),o}),c(),s(9,"button",5),x("click",function(){return i.submitCode()}),G(),s(10,"svg",6),l(11,"path",7),c()()(),A(),l(12,"br"),s(13,"p",8),S(14),p(15,"translate"),c()()()),e&2&&(m(3),b(" \u{1F511} ",d(4,4,"GAME_CODE.TITLE")," "),m(4),P("placeholder",d(8,6,"GAME_CODE.PLACEHOLDER")),E("ngModel",i.gameCode),m(7),b(" ",d(15,8,"GAME_CODE.DESCRIPTION")," "))},dependencies:[M,J,F,W,V,U,N]})};export{w as default};
