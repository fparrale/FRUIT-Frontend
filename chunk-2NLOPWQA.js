import{a as k}from"./chunk-IUWLHEJ5.js";import{c as F,d as O}from"./chunk-EIXRTAYT.js";import{l as N}from"./chunk-PWFTLQLJ.js";import{k as D,l as L,m as U,r as B}from"./chunk-N5F7BLGW.js";import{Eb as a,Fb as s,Gb as u,Hb as h,Nb as y,Qb as w,Ra as e,Sa as f,Ub as d,Vb as m,db as c,gb as p,ja as S,jb as R,kb as r,lb as t,mb as v,pb as C,sa as E,ta as I,tb as T,ua as b,vb as x}from"./chunk-EU2SIFBO.js";var G=(n,l)=>({"text-green-500":n,"text-red-500":l});function M(n,l){n&1&&(r(0,"span",23),a(1,"\u2714"),t())}function j(n,l){n&1&&(r(0,"span",24),a(1,"\u2716"),t())}function P(n,l){if(n&1&&(r(0,"p",25)(1,"strong"),a(2),d(3,"translate"),t(),a(4),t()),n&2){let i=x(2).$implicit;e(2),s(m(3,2,"RESULTS.FEEDBACK")),e(2),u(" ",i.feedback_variable||"No se proporcion\xF3 feedback"," ")}}function V(n,l){n&1&&(r(0,"span",23),a(1,"\u2714"),t())}function $(n,l){n&1&&(r(0,"span",24),a(1,"\u2716"),t())}function K(n,l){if(n&1&&(r(0,"p",25)(1,"strong"),a(2),d(3,"translate"),t(),a(4),t()),n&2){let i=x(2).$implicit;e(2),s(m(3,2,"RESULTS.FEEDBACK")),e(2),u(" ",i.feedback_value||"No se proporcion\xF3 feedback"," ")}}function W(n,l){n&1&&(r(0,"span",23),a(1,"\u2714"),t())}function Y(n,l){n&1&&(r(0,"span",24),a(1,"\u2716"),t())}function Q(n,l){if(n&1&&(r(0,"p",25)(1,"strong"),a(2),d(3,"translate"),t(),a(4),t()),n&2){let i=x(2).$implicit;e(2),s(m(3,2,"RESULTS.FEEDBACK")),e(2),u(" ",i.feedback_recomend||"No se proporcion\xF3 feedback"," ")}}function q(n,l){if(n&1&&(r(0,"div",15)(1,"div",16)(2,"h6",17)(3,"span"),a(4),d(5,"translate"),t(),c(6,M,2,0,"span",18)(7,j,2,0,"span",19),t(),r(8,"p",20),a(9),d(10,"translate"),r(11,"strong"),a(12),t()(),c(13,P,5,4,"p",21),t(),v(14,"div",22),r(15,"div",16)(16,"h6",17)(17,"span"),a(18),d(19,"translate"),t(),c(20,V,2,0,"span",18)(21,$,2,0,"span",19),t(),r(22,"p",20),a(23),d(24,"translate"),r(25,"strong"),a(26),t()(),c(27,K,5,4,"p",21),t(),v(28,"div",22),r(29,"div",16)(30,"h6",17)(31,"span"),a(32),d(33,"translate"),t(),c(34,W,2,0,"span",18)(35,Y,2,0,"span",19),t(),r(36,"p",20),a(37),d(38,"translate"),r(39,"strong"),a(40),t()(),c(41,Q,5,4,"p",21),t()()),n&2){let i=x().$implicit;e(4),s(m(5,18,"RESULTS.LINGUISTIC_VARIABLE")),e(2),p("ngIf",i.correct_variable),e(),p("ngIf",!i.correct_variable),e(2),u("",m(10,20,"RESULTS.YOUR_ANSWER")," "),e(3),s(i.user_variable),e(),p("ngIf",!i.correct_variable),e(5),s(m(19,22,"RESULTS.LINGUISTIC_VALUE")),e(2),p("ngIf",i.correct_value),e(),p("ngIf",!i.correct_value),e(2),u("",m(24,24,"RESULTS.YOUR_ANSWER")," "),e(3),s(i.user_value),e(),p("ngIf",!i.correct_value),e(5),s(m(33,26,"RESULTS.LINGUISTIC_RECOMMENDATION")),e(2),p("ngIf",i.correct_recomend),e(),p("ngIf",!i.correct_recomend),e(2),u("",m(38,28,"RESULTS.YOUR_ANSWER")," "),e(3),s(i.user_recomend),e(),p("ngIf",!i.correct_recomend)}}function z(n,l){if(n&1){let i=C();r(0,"div",9)(1,"div",10),T("click",function(){let _=E(i).index,A=x();return I(A.toggleCard(_))}),r(2,"h6",11),a(3),t(),b(),r(4,"svg",12),v(5,"path",13),t()(),c(6,q,42,30,"div",14),t()}if(n&2){let i=l.$implicit,o=l.index,_=x();e(3),h("RNF ",o+1,": ",i.nfr,""),e(),R(_.expandedIndex===o?"rotate-180":""),e(2),p("ngIf",_.expandedIndex===o)}}var g=class n{constructor(l,i){this.gameDataService=l;this.router=i}resultData=null;expandedIndex=null;ngOnInit(){let l=this.gameDataService.getGameResult();l&&l.data?this.resultData=l.data:(this.router.navigate(["/game"]),this.router.navigate(["/game"],{queryParams:{mode:"find"}}))}toggleCard(l){this.expandedIndex=this.expandedIndex===l?null:l}static \u0275fac=function(i){return new(i||n)(f(k),f(N))};static \u0275cmp=S({type:n,selectors:[["app-results"]],standalone:!0,features:[y],decls:16,vars:15,consts:[[1,"p-6","min-h-screen","flex","flex-col","items-center"],[1,"w-full","max-w-3xl","flex","justify-between","items-center","mb-6"],[1,"text-2xl","font-bold","text-blue-600"],[1,"bg-white","rounded-2xl","shadow-md","px-6","py-3","flex","flex-col","items-center","justify-center"],[1,"text-sm","font-semibold","text-gray-700"],[1,"text-lg","font-bold",3,"ngClass"],[1,"w-full","max-w-3xl","space-y-4"],[1,"text-xl","font-semibold","text-gray-700","mb-4"],["class","bg-white rounded-2xl border border-gray-300 shadow-md hover:shadow-lg transition overflow-hidden",4,"ngFor","ngForOf"],[1,"bg-white","rounded-2xl","border","border-gray-300","shadow-md","hover:shadow-lg","transition","overflow-hidden"],[1,"cursor-pointer","p-4","flex","justify-between","items-center","rounded-t-xl","bg-blue-100","hover:bg-blue-200","transition",3,"click"],[1,"text-sm","font-bold","text-blue-700","flex-1"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","3",1,"transform","transition-transform","w-5","h-5","text-gray-700","ml-2","flex-shrink-0"],["stroke-linecap","round","stroke-linejoin","round","d","M19 9l-7 7-7-7"],["class","p-4 border-t border-gray-300 bg-gray-50 rounded-b-lg",4,"ngIf"],[1,"p-4","border-t","border-gray-300","bg-gray-50","rounded-b-lg"],[1,"mb-4"],[1,"text-sm","font-semibold","text-blue-600","flex","items-center"],["class","ml-2 text-green-500",4,"ngIf"],["class","ml-2 text-red-500",4,"ngIf"],[1,"text-sm","text-gray-800"],["class","text-xs text-red-600 mt-1",4,"ngIf"],[1,"pt-4","border-t","border-gray-300"],[1,"ml-2","text-green-500"],[1,"ml-2","text-red-500"],[1,"text-xs","text-red-600","mt-1"]],template:function(i,o){i&1&&(r(0,"div",0)(1,"div",1)(2,"h5",2),a(3),d(4,"translate"),t(),r(5,"div",3)(6,"h6",4),a(7),d(8,"translate"),t(),r(9,"p",5),a(10),t()()(),r(11,"div",6)(12,"h5",7),a(13),d(14,"translate"),t(),c(15,z,7,5,"div",8),t()()),i&2&&(e(3),s(m(4,6,"RESULTS.TITLE")),e(4),s(m(8,8,"RESULTS.TOTAL_SCORE")),e(2),p("ngClass",w(12,G,((o.resultData==null?null:o.resultData.total_score)||0)>=70,((o.resultData==null?null:o.resultData.total_score)||0)<70)),e(),u(" ",o.resultData==null?null:o.resultData.total_score," / 100 "),e(3),s(m(14,10,"RESULTS.DETAILS")),e(2),p("ngForOf",o.resultData==null?null:o.resultData.result))},dependencies:[B,D,L,U,O,F]})};export{g as default};
