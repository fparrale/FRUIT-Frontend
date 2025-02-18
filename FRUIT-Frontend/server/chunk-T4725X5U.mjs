import './polyfills.server.mjs';
import{a as V}from"./chunk-ZJ7GHIPZ.mjs";import{a as F,b as $}from"./chunk-QZQANR5E.mjs";import"./chunk-XZVO5RUM.mjs";import{c as M,d as D}from"./chunk-G2EMQGJ6.mjs";import{n as k}from"./chunk-UTIOHHII.mjs";import{Ac as O,Fb as A,Fc as R,Gb as L,Ma as t,Mb as l,Na as h,Nb as p,Za as u,ab as d,ca as C,eb as n,fb as i,gb as w,jb as P,la as b,lb as v,ma as y,nb as x,wb as a,xb as g,yb as c,yc as B,zb as T,zc as N}from"./chunk-RDXAN74U.mjs";import"./chunk-5XUXGTUW.mjs";var G=()=>[];function j(r,o){r&1&&(n(0,"span",29),a(1,"\u2714"),i())}function q(r,o){r&1&&(n(0,"span",30),a(1,"\u2718"),i())}function H(r,o){if(r&1&&(n(0,"p",31)(1,"strong"),a(2),l(3,"translate"),i(),a(4),l(5,"translate"),i()),r&2){let e=x().$implicit;t(2),g(p(3,2,"RESULTS.FEEDBACK")),t(2),c(" ",e.feedback_variable||p(5,4,"NO_FEEDBACK")," ")}}function K(r,o){r&1&&(n(0,"span",29),a(1,"\u2714"),i())}function W(r,o){r&1&&(n(0,"span",30),a(1,"\u2718"),i())}function Q(r,o){if(r&1&&(n(0,"p",31)(1,"strong"),a(2),l(3,"translate"),i(),a(4),l(5,"translate"),i()),r&2){let e=x().$implicit;t(2),g(p(3,2,"RESULTS.FEEDBACK")),t(2),c(" ",e.feedback_value||p(5,4,"NO_FEEDBACK")," ")}}function z(r,o){r&1&&(n(0,"span",29),a(1,"\u2714"),i())}function X(r,o){r&1&&(n(0,"span",30),a(1,"\u2718"),i())}function J(r,o){if(r&1&&(n(0,"p",31)(1,"strong"),a(2),l(3,"translate"),i(),a(4),l(5,"translate"),i()),r&2){let e=x().$implicit;t(2),g(p(3,2,"RESULTS.FEEDBACK")),t(2),c(" ",e.feedback_recomend||p(5,4,"NO_FEEDBACK")," ")}}function Y(r,o){r&1&&w(0,"hr",32)}function Z(r,o){if(r&1&&(n(0,"li",21)(1,"p")(2,"strong",22),a(3),l(4,"translate"),i(),a(5),i(),n(6,"div",23)(7,"strong",22),a(8),l(9,"translate"),i(),n(10,"span",24),a(11),i(),n(12,"span"),u(13,j,2,0,"span",25)(14,q,2,0,"span",26),i()(),u(15,H,6,6,"p",27),n(16,"div",23)(17,"strong",22),a(18),l(19,"translate"),i(),n(20,"span",24),a(21),i(),n(22,"span"),u(23,K,2,0,"span",25)(24,W,2,0,"span",26),i()(),u(25,Q,6,6,"p",27),n(26,"div",23)(27,"strong",22),a(28),l(29,"translate"),i(),n(30,"span",24),a(31),i(),n(32,"span"),u(33,z,2,0,"span",25)(34,X,2,0,"span",26),i()(),u(35,J,6,6,"p",27)(36,Y,1,0,"hr",28),i()),r&2){let e=o.$implicit,s=o.last;t(3),c("",p(4,18,"QUESTION.NFR"),":"),t(2),c(" ",e.nfr," "),t(3),g(p(9,20,"MODAL_CONFIRMATION.LINGUISTIC_VARIABLE")),t(3),c("(",e.user_variable,")"),t(2),d("ngIf",e.correct_variable),t(),d("ngIf",!e.correct_variable),t(),d("ngIf",!e.correct_variable),t(3),g(p(19,22,"MODAL_CONFIRMATION.LINGUISTIC_VALUE")),t(3),c("(",e.user_value,")"),t(2),d("ngIf",e.correct_value),t(),d("ngIf",!e.correct_value),t(),d("ngIf",!e.correct_value),t(3),g(p(29,24,"MODAL_CONFIRMATION.LINGUISTIC_RECOMMENDATION")),t(3),c("(",e.user_recomend,")"),t(2),d("ngIf",e.correct_recomend),t(),d("ngIf",!e.correct_recomend),t(),d("ngIf",!e.correct_recomend),t(),d("ngIf",!s)}}function ee(r,o){if(r&1){let e=P();n(0,"div",11)(1,"div",12)(2,"div",13)(3,"h3",14),a(4),l(5,"translate"),i()(),n(6,"div",15)(7,"ul",16),u(8,Z,37,26,"li",17),i()(),n(9,"div",18)(10,"button",19),v("click",function(){b(e);let m=x();return y(m.closeModal())}),a(11),l(12,"translate"),i(),n(13,"button",20),v("click",function(){b(e);let m=x();return y(m.printResults())}),a(14),l(15,"translate"),i()()()()}if(r&2){let e=x();t(4),g(p(5,4,"TABLE.ANSWERS")),t(4),d("ngForOf",e.selectedAnswers),t(3),c(" ",p(12,6,"ALERT.BUTTON_CLOSE")," "),t(3),c(" ",p(15,8,"ALERT.PRINT")," ")}}function te(r,o){if(r&1){let e=P();n(0,"tr",33)(1,"td",34),a(2),i(),n(3,"td",34),a(4),i(),n(5,"td",34),a(6),i(),n(7,"td",34),a(8),i(),n(9,"td",34),a(10),i(),n(11,"td",34)(12,"button",35),v("click",function(){let m=b(e).$implicit,f=x();return y(f.openAnswersModal(m.answered_questions,m))}),a(13),l(14,"translate"),i()()()}if(r&2){let e=o.$implicit;t(2),g(e.id),t(2),g(e.code),t(2),g(e.score),t(2),T("",e.surnames," ",e.names,""),t(2),g(e.duration),t(3),c(" ",p(14,7,"TABLE.VIEW_ANSWERS")," ")}}function ie(r,o){if(r&1){let e=P();n(0,"button",36),v("click",function(){let m=b(e).index,f=x();return y(f.goToPage(m+1))}),a(1),i()}if(r&2){let e=o.index,s=x();d("ngClass",s.currentPage===e+1?"bg-[#0D92F4] text-white border-blue-500":"bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200 hover:text-gray-700"),t(),c(" ",e+1," ")}}var S=class r{constructor(o,e,s,m){this.gameRoomsService=o;this.alertService=e;this.loadingService=s;this.route=m}participatingPlayers=[];paginatedData=[];currentPage=1;itemsPerPage=10;showModal=!1;selectedAnswers=[];gameHistoryPrint={};ngOnInit(){this.loadingService.showLoading();let o=Number(this.route.snapshot.paramMap.get("id"));this.gameRoomsService.getParticipatingPlayersByGameRoom(o).subscribe({next:e=>{this.loadingService.hideLoading(),this.participatingPlayers=e.data,this.updatePagination()},error:e=>{this.loadingService.hideLoading(),this.alertService.showAlert(e.message,!0)}})}updatePagination(){let o=(this.currentPage-1)*this.itemsPerPage,e=o+this.itemsPerPage;this.paginatedData=this.participatingPlayers.slice(o,e)}goToPage(o){this.currentPage=o,this.updatePagination()}nextPage(){this.currentPage*this.itemsPerPage<this.participatingPlayers.length&&(this.currentPage++,this.updatePagination())}prevPage(){this.currentPage>1&&(this.currentPage--,this.updatePagination())}get totalPages(){return Math.ceil(this.participatingPlayers.length/this.itemsPerPage)}openAnswersModal(o,e){this.selectedAnswers=o,this.gameHistoryPrint=e,this.showModal=!0}closeModal(){this.showModal=!1,this.selectedAnswers=[],this.gameHistoryPrint={}}printResults(){let o=document.getElementById("print-content"),e=this.gameHistoryPrint,s=e.score,m=e.names,f=e.surnames,U=e.duration,E=e.code;if(o){document.title=`Resultados - ${f} ${m} - ${E}`;let _=document.createElement("iframe");_.style.position="absolute",_.style.width="0",_.style.height="0",_.style.border="none",document.body.appendChild(_);let I=_.contentWindow?.document||_.contentDocument;I&&(I.open(),I.write(`
          <html>
            <head>
            <title>Resultados - ${f} ${m} - ${E}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 20px;
                  color: #4a5568;
                }
                .header {
                  margin-bottom: 20px;
                  border-bottom: 1px solid #e2e8f0;
                  position: relative;
                }
                .score-box {
                  position: absolute;
                  top: 0;
                  right: 10px;
                  padding: 10px;
                  border: 2px solid #4a5568;
                  font-weight: bold;
                  font-size: 16px;
                  text-align: center;
                  color: #4a5568;
                  background-color: #f1f5f9;
                }
                .font-bold {
                  font-weight: bold;
                }
                .text-gray-700 {
                  color: #4a5568;
                }
                .text-green-500 {
                  color: #48bb78;
                }
                .text-red-500 {
                  color: #f56565;
                }
                .text-sm {
                  font-size: 0.875rem;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <div class="score-box">
                  SCORE<br>${s} / 100
                </div>
                <h2 class="font-bold text-gray-700">Resultado</h2>
                <p><strong>Nombres:</strong> ${m}</p>
                <p><strong>Apellidos:</strong> ${f}</p>
                <p><strong>Duraci\xF3n:</strong> ${U}</p>
                <p><strong>C\xF3digo de sala:</strong> ${E}</p>
              </div>
              ${o.outerHTML}
            </body>
          </html>
        `),I.close()),_.onload=()=>{_.contentWindow?.print(),document.title="FRUIT",document.body.removeChild(_)}}else console.error("No se encontr\xF3 el contenido a imprimir.")}static \u0275fac=function(e){return new(e||r)(h(V),h($),h(F),h(k))};static \u0275cmp=C({type:r,selectors:[["app-participants-list"]],standalone:!0,features:[A],decls:34,vars:29,consts:[["class","fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50",4,"ngIf"],[1,"py-10"],[1,"bg-white","shadow-md","rounded-lg","overflow-hidden"],[1,"overflow-x-auto"],[1,"min-w-full","table-auto"],[1,"bg-[#0D92F4]","text-white"],[1,"px-4","py-3","text-left","text-sm","font-medium","uppercase","tracking-wider","whitespace-nowrap"],["class","odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200",4,"ngFor","ngForOf"],[1,"flex","justify-center","items-center","mt-6","space-x-2"],[1,"px-4","py-2","text-sm","font-medium","text-gray-500","bg-gray-100","border","border-gray-300","rounded-md","hover:bg-gray-200","hover:text-gray-700","transition-colors","duration-300",3,"click","disabled","ngClass"],["class","px-4 py-2 text-sm font-medium border rounded-md transition-colors duration-300",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"fixed","inset-0","flex","items-center","justify-center","z-50","bg-black","bg-opacity-50"],[1,"bg-white","rounded-lg","shadow-lg","w-4/5","max-w-lg"],[1,"px-4","pt-4","border-b","border-gray-200"],[1,"text-xl","font-bold","text-gray-800","m-0"],[1,"p-6","max-h-[70vh]","overflow-y-auto"],["id","print-content",1,"space-y-6"],["class","text-gray-700",4,"ngFor","ngForOf"],[1,"p-4","border-t","border-gray-200","flex","justify-end"],[1,"px-6","py-2","bg-red-500","text-white","text-sm","font-semibold","rounded-lg","shadow","hover:bg-red-600","focus:outline-none","focus:ring","focus:ring-red-300","transition",3,"click"],[1,"ml-4","px-6","py-2","bg-blue-500","text-white","text-sm","font-semibold","rounded-lg","shadow","hover:bg-blue-600","focus:outline-none","focus:ring","focus:ring-blue-300","transition",3,"click"],[1,"text-gray-700"],[1,"font-semibold"],[1,"flex","items-center","space-x-2"],[1,"text-sm","text-gray-600"],["class","text-green-500 text-lg font-bold",4,"ngIf"],["class","text-red-500 text-lg font-bold",4,"ngIf"],["class","text-sm text-red-500",4,"ngIf"],["class","mt-6 border-t border-gray-300",4,"ngIf"],[1,"text-green-500","text-lg","font-bold"],[1,"text-red-500","text-lg","font-bold"],[1,"text-sm","text-red-500"],[1,"mt-6","border-t","border-gray-300"],[1,"odd:bg-gray-50","even:bg-gray-100","hover:bg-gray-200"],[1,"px-4","py-4","text-sm","text-gray-700","whitespace-nowrap"],[1,"px-4","py-2","bg-blue-500","text-white","rounded-lg","hover:bg-blue-600","transition-colors","duration-300",3,"click"],[1,"px-4","py-2","text-sm","font-medium","border","rounded-md","transition-colors","duration-300",3,"click","ngClass"]],template:function(e,s){e&1&&(u(0,ee,16,10,"div",0),n(1,"div",1)(2,"div",2)(3,"div",3)(4,"table",4)(5,"thead",5)(6,"tr")(7,"th",6),a(8," Id"),i(),n(9,"th",6),a(10),l(11,"translate"),i(),n(12,"th",6),a(13),l(14,"translate"),i(),n(15,"th",6),a(16),l(17,"translate"),i(),n(18,"th",6),a(19),l(20,"translate"),i(),n(21,"th",6),a(22),l(23,"translate"),i()()(),n(24,"tbody"),u(25,te,15,9,"tr",7),i()()()(),n(26,"div",8)(27,"button",9),v("click",function(){return s.prevPage()}),a(28),l(29,"translate"),i(),u(30,ie,2,2,"button",10),n(31,"button",9),v("click",function(){return s.nextPage()}),a(32),l(33,"translate"),i()()()),e&2&&(d("ngIf",s.showModal),t(10),c(" ",p(11,14,"TABLE.CODE"),""),t(3),c(" ",p(14,16,"TABLE.SCORE"),""),t(3),c(" ",p(17,18,"TABLE.FULL_NAME"),""),t(3),c(" ",p(20,20,"TABLE.DURATION"),""),t(3),c(" ",p(23,22,"TABLE.ANSWERS"),""),t(3),d("ngForOf",s.paginatedData),t(2),d("disabled",s.currentPage===1)("ngClass",s.currentPage===1?"opacity-50 cursor-not-allowed":""),t(),c(" \xAB ",p(29,24,"BUTTON_NAVIGATION_TABLE.PREVIOUS")," "),t(2),d("ngForOf",L(28,G).constructor(s.totalPages)),t(),d("disabled",s.currentPage===s.totalPages)("ngClass",s.currentPage===s.totalPages?"opacity-50 cursor-not-allowed":""),t(),c(" ",p(33,26,"BUTTON_NAVIGATION_TABLE.NEXT"),"\xBB "))},dependencies:[R,B,N,O,D,M]})};export{S as default};
