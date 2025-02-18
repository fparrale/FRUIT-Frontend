import './polyfills.server.mjs';
import{b as H}from"./chunk-XZVO5RUM.mjs";import{b as T,c as M,d as R}from"./chunk-G2EMQGJ6.mjs";import{q as w,u as D}from"./chunk-UTIOHHII.mjs";import{Ac as C,Fb as g,Fc as O,Ma as r,Mb as s,Na as f,Nb as p,Za as E,ab as _,ca as h,eb as e,fb as i,jb as v,la as d,lb as I,ma as u,nb as x,wb as o,xb as l}from"./chunk-RDXAN74U.mjs";import"./chunk-5XUXGTUW.mjs";function Q(t,a){if(t&1){let n=v();e(0,"div",4),I("click",function(){d(n);let c=x();return u(c.importQuestions())}),e(1,"div",5),o(2,"\u{1F4DD}"),i(),e(3,"h5",6),o(4),s(5,"translate"),i(),e(6,"p",7),o(7),s(8,"translate"),i()()}t&2&&(r(4),l(p(5,2,"HOME.IMPORT_QUESTION")),r(3),l(p(8,4,"HOME.DESCRIPTION_IMPORT_QUESTION")))}function A(t,a){if(t&1){let n=v();e(0,"div",4),I("click",function(){d(n);let c=x();return u(c.createGame())}),e(1,"div",8),o(2,"\u{1F3AE}"),i(),e(3,"h5",6),o(4),s(5,"translate"),i(),e(6,"p",7),o(7),s(8,"translate"),i()()}t&2&&(r(4),l(p(5,2,"HOME.CREATE_GAME_ROOM")),r(3),l(p(8,4,"HOME.DESCRIPTION_GAME_ROOM")))}function N(t,a){if(t&1){let n=v();e(0,"div",4),I("click",function(){d(n);let c=x();return u(c.findGame("find"))}),e(1,"div",9),o(2,"\u{1F50D}"),i(),e(3,"h5",6),o(4),s(5,"translate"),i(),e(6,"p",7),o(7),s(8,"translate"),i()()}t&2&&(r(4),l(p(5,2,"HOME.FIND_GAME_ROOM")),r(3),l(p(8,4,"HOME.DESCRIPTION_FIND_GAME_ROOM")))}function b(t,a){if(t&1){let n=v();e(0,"div",4),I("click",function(){d(n);let c=x();return u(c.findGame("practice"))}),e(1,"div",9),o(2,"\u{1FA84}"),i(),e(3,"h5",6),o(4),s(5,"translate"),i(),e(6,"p",7),o(7),s(8,"translate"),i()()}t&2&&(r(4),l(p(5,2,"HOME.FIND_PRACTICE_GAME_ROOM")),r(3),l(p(8,4,"HOME.DESCRIPTION_FIND_PRACTICE_GAME_ROOM")))}var S=class t{constructor(a,n,m){this.translate=a;this.router=n;this.authService=m}userRoleId="";ngOnInit(){let a=this.authService.getUserData();this.userRoleId=a?.user.role.name??""}importQuestions(){this.router.navigate(["/game-rooms"])}createGame(){this.router.navigate(["/create-game-room"])}findGame(a){this.router.navigate(["/game"]),localStorage.setItem("gameOption",a),this.router.navigate(["/game"],{queryParams:{mode:a}})}canShowItemTeacher(){return this.userRoleId==="Docente"}canShowItemStudent(){return this.userRoleId==="Estudiante"}static \u0275fac=function(n){return new(n||t)(f(T),f(w),f(H))};static \u0275cmp=h({type:t,selectors:[["app-home-question"]],standalone:!0,features:[g],decls:7,vars:4,consts:[[1,""],[1,"container","mx-auto","px-4","py-8"],[1,"grid","grid-cols-1","md:grid-cols-3","gap-6"],["class","bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow cursor-pointer",3,"click",4,"ngIf"],[1,"bg-white","shadow-lg","rounded-lg","p-6","hover:shadow-2xl","transition-shadow","cursor-pointer",3,"click"],[1,"text-blue-600","text-4xl","mb-4"],[1,"text-lg","font-bold","mb-2"],[1,"text-gray-600"],[1,"text-green-600","text-4xl","mb-4"],[1,"text-yellow-600","text-4xl","mb-4"]],template:function(n,m){n&1&&(e(0,"div",0)(1,"main",1)(2,"div",2),E(3,Q,9,6,"div",3)(4,A,9,6,"div",3)(5,N,9,6,"div",3)(6,b,9,6,"div",3),i()()()),n&2&&(r(3),_("ngIf",m.canShowItemTeacher()),r(),_("ngIf",m.canShowItemTeacher()),r(),_("ngIf",m.canShowItemStudent()),r(),_("ngIf",m.canShowItemStudent()))},dependencies:[D,O,C,R,M]})};export{S as default};
