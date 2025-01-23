import{a as V,b as U,c as z}from"./chunk-XMJ5Y64K.js";import{a as j}from"./chunk-REPWG47S.js";import{a as N}from"./chunk-QMIFJZ5Y.js";import{a as M,b as F}from"./chunk-JTD2GUQY.js";import"./chunk-EOS4WQRA.js";import{c as D,d as k}from"./chunk-JOV6O4AC.js";import{l as B}from"./chunk-24SHYF34.js";import{Ab as a,Ac as L,Bb as E,Cb as l,Jb as I,Kb as P,Qa as r,Qb as d,Ra as x,Rb as c,bb as S,e as Y,eb as u,ia as C,ib as o,jb as n,kb as A,nb as b,pb as p,ra as v,rb as h,sa as f,tc as O,uc as G}from"./chunk-NJXLY5TY.js";var X=Y(z());var J=()=>[];function K(g,i){if(g&1){let e=b();o(0,"tr",19)(1,"td",20),a(2),n(),o(3,"td",20),a(4),n(),o(5,"td",20),a(6),n(),o(7,"td",20),a(8),n(),o(9,"td",20)(10,"span",21),A(11,"span",22),a(12),d(13,"translate"),d(14,"translate"),n()(),o(15,"td",20)(16,"div",23)(17,"button",24),p("click",function(){let m=v(e).$implicit,s=h();return f(s.onEdit(m))}),a(18),d(19,"translate"),n(),o(20,"button",25),p("click",function(){let m=v(e).$implicit,s=h();return f(s.onDelete(m))}),a(21),d(22,"translate"),n(),o(23,"button",26),p("click",function(){let m=v(e).$implicit,s=h();return f(s.onHistoryPlayers(m.id))}),a(24),d(25,"translate"),n()()()()}if(g&2){let e=i.$implicit,t=h();r(2),E(e.id),r(2),E(e.code),r(2),l("",t.formatDate(e.created_at)," "),r(2),l("",t.formatDate(e.expiration_date)," "),r(2),u("ngClass",e.status?"bg-green-100 text-green-800 border-green-300":"bg-red-100 text-red-800 border-red-300"),r(),u("ngClass",e.status?"bg-green-500":"bg-red-500"),r(),l(" ",e.status?c(13,10,"GAME_ROOM.ASSET"):c(14,12,"GAME_ROOM.IDLE")," "),r(6),l(" ",c(19,14,"CREATE_GAME_ROOM.MODAL_EDIT_CREATE_RNF.BUTTON_EDIT_MODAL")," "),r(3),l(" ",c(22,16,"GAME_ROOM.ELIMINATED")," "),r(3),l(" ",c(25,18,"GAME_ROOM.PLAYER_HISTORY")," ")}}function W(g,i){if(g&1){let e=b();o(0,"button",27),p("click",function(){let m=v(e).index,s=h();return f(s.goToPage(m+1))}),a(1),n()}if(g&2){let e=i.index,t=h();u("ngClass",t.currentPage===e+1?"bg-[#0D92F4] text-white border-blue-500":"bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200 hover:text-gray-700"),r(),l(" ",e+1," ")}}var y=class g{constructor(i,e,t,m,s){this.gameRoomsService=i;this.alertService=e;this.loadingService=t;this.router=m;this.storageService=s}gameRooms=[];paginatedData=[];currentPage=1;itemsPerPage=5;selectedFile=null;questions=[];listRnf=[];ngOnInit(){this.getGameRooms()}getGameRooms(){this.loadingService.showLoading(),this.gameRoomsService.getGameRooms().subscribe({next:i=>{this.loadingService.hideLoading(),this.gameRooms=i.data,this.updatePagination()},error:i=>{this.loadingService.hideLoading(),this.alertService.showAlert(i.message,!0)}})}onDelete(i){let e=!1;i.status==!0?e=!1:e=!0,this.loadingService.showLoading(),this.gameRoomsService.deleteGameRoom(i.id,e,this.storageService.getItem()||"es").subscribe({next:t=>{this.loadingService.hideLoading(),this.alertService.showAlert(t.message,!1),this.getGameRooms()},error:t=>{this.loadingService.hideLoading(),this.alertService.showAlert(t.message,!0)}})}onEdit(i){this.loadingService.showLoading(),this.gameRoomsService.getGameRoomQuestions(i.id).subscribe({next:e=>{this.loadingService.hideLoading(),this.questions=e.questions,this.router.navigate(["/edit-game-room",i.id],{state:{questions:this.questions,gameRoom:i}})},error:e=>{this.loadingService.hideLoading(),this.alertService.showAlert(e.message,!0)}})}transformExcelToCsv(i){return new Promise((e,t)=>{let m=new FileReader;m.onload=s=>{let R=new Uint8Array(s.target.result),w=new Array;for(let _=0;_!==R.length;++_)w[_]=String.fromCharCode(R[_]);let q=w.join(""),T=V(q,{type:"binary"}),H=T.SheetNames[0],Q=T.Sheets[H],$=U.sheet_to_csv(Q);e($)},m.onerror=s=>t(s),m.readAsArrayBuffer(i)})}parseCsvToArray(i){X.parse(i,{header:!0,skipEmptyLines:!0,complete:e=>{this.listRnf=e.data,this.gameRoomsService.uploadExcel(this.listRnf).subscribe({next:t=>{this.loadingService.hideLoading(),this.alertService.showAlert(t.message,!1),this.getGameRooms()},error:t=>{this.loadingService.hideLoading(),this.alertService.showAlert("Error al subir el archivo",!0),console.error("Error al subir archivo:",t)}})},error:e=>{console.error("Error parsing CSV:",e)}})}onFileSelected(i){let e=i.target;if(e.files&&e.files.length>0){let t=e.files[0];if(!["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.ms-excel"].includes(t.type)){this.alertService.showAlert("Solo se permiten archivos Excel (.xls, .xlsx)",!0),e.value="";return}this.loadingService.showLoading(),this.transformExcelToCsv(t).then(s=>{this.parseCsvToArray(s),this.loadingService.hideLoading(),e.value=""}).catch(s=>{e.value="",this.loadingService.hideLoading(),this.alertService.showAlert("Error al subir el archivo",s)})}}updatePagination(){let i=(this.currentPage-1)*this.itemsPerPage,e=i+this.itemsPerPage;this.paginatedData=this.gameRooms.slice(i,e)}goToPage(i){this.currentPage=i,this.updatePagination()}nextPage(){this.currentPage*this.itemsPerPage<this.gameRooms.length&&(this.currentPage++,this.updatePagination())}prevPage(){this.currentPage>1&&(this.currentPage--,this.updatePagination())}get totalPages(){return Math.ceil(this.gameRooms.length/this.itemsPerPage)}formatDate(i){let e=new Date(i),t={day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"};return e.toLocaleDateString("es-ES",t).replace(",","")}goToCreateGameRoom(){this.router.navigate(["/create-game-room"])}onHistoryPlayers(i){this.router.navigate(["/get-participating-players",i])}static \u0275fac=function(e){return new(e||g)(x(j),x(M),x(F),x(B),x(N))};static \u0275cmp=C({type:g,selectors:[["app-game-rooms"]],standalone:!0,features:[I],decls:50,vars:37,consts:[[1,"py-5"],[1,"flex","flex-wrap","gap-4","mb-6","items-center","justify-between"],[1,"flex","items-center","gap-2","px-4","py-2","text-white","bg-[#28A745]","rounded-lg","shadow-md","hover:bg-green-700","focus:outline-none","transition","duration-300","w-full","sm:w-auto","text-center","justify-center",3,"click"],[1,"material-icons","text-base"],[1,"flex","flex-col","sm:flex-row","items-center","gap-4","w-full","sm:w-auto"],[1,"flex","items-center","gap-2"],["for","fileInput",1,"text-sm","font-medium","text-gray-700"],["id","fileInput","type","file","accept",".xlsx, .xls",1,"w-auto","px-3","py-2","text-sm","border","border-gray-300","rounded-lg","shadow-sm","focus:ring-blue-500","focus:border-blue-500","transition","duration-300","cursor-pointer",3,"change"],["href","https://franklinparrales.es/RECURSOS/FRUIT-example.xlsx","download","example.xlsx",1,"flex","items-center","bg-green-500","text-white","font-medium","px-4","py-2","rounded-lg","shadow-md","hover:bg-green-600","transition","duration-300"],[1,"material-icons","pr-1"],[1,"bg-white","shadow-md","rounded-lg","overflow-hidden"],[1,"overflow-x-auto"],[1,"min-w-full","table-auto"],[1,"bg-[#0D92F4]","text-white"],[1,"px-4","py-3","text-left","text-sm","font-medium","uppercase","tracking-wider","whitespace-nowrap"],["class","odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200",4,"ngFor","ngForOf"],[1,"flex","justify-center","items-center","mt-6","space-x-2"],[1,"px-4","py-2","text-sm","font-medium","text-gray-500","bg-gray-100","border","border-gray-300","rounded-md","hover:bg-gray-200","hover:text-gray-700","transition-colors","duration-300",3,"click","disabled","ngClass"],["class","px-4 py-2 text-sm font-medium border rounded-md transition-colors duration-300",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"odd:bg-gray-50","even:bg-gray-100","hover:bg-gray-200"],[1,"px-4","py-4","text-sm","text-gray-700","whitespace-nowrap"],[1,"inline-flex","items-center","gap-2","px-3","py-1","text-xs","font-medium","border","rounded-full",3,"ngClass"],[1,"w-2.5","h-2.5","rounded-full",3,"ngClass"],[1,"flex","gap-2"],[1,"px-2","py-1","text-xs","font-medium","text-white","bg-[#0D92F4]","rounded","hover:bg-blue-700","focus:outline-none",3,"click"],[1,"px-2","py-1","text-xs","font-medium","text-white","bg-[#C62E2E]","rounded","hover:bg-red-700","focus:outline-none",3,"click"],[1,"px-2","py-1","text-xs","font-medium","text-white","bg-[#6C757D]","rounded","hover:bg-[#6C757D]","focus:outline-none",3,"click"],[1,"px-4","py-2","text-sm","font-medium","border","rounded-md","transition-colors","duration-300",3,"click","ngClass"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"div",1)(2,"button",2),p("click",function(){return t.goToCreateGameRoom()}),o(3,"span",3),a(4,"add"),n(),a(5),d(6,"translate"),n(),o(7,"div",4)(8,"div",5)(9,"label",6),a(10),d(11,"translate"),n(),o(12,"input",7),p("change",function(s){return t.onFileSelected(s)}),n()(),o(13,"a",8)(14,"span",9),a(15,"download"),n(),a(16),d(17,"translate"),n()()(),o(18,"div",10)(19,"div",11)(20,"table",12)(21,"thead",13)(22,"tr")(23,"th",14),a(24," Id"),n(),o(25,"th",14),a(26),d(27,"translate"),n(),o(28,"th",14),a(29),d(30,"translate"),n(),o(31,"th",14),a(32),d(33,"translate"),n(),o(34,"th",14),a(35),d(36,"translate"),n(),o(37,"th",14),a(38),d(39,"translate"),n()()(),o(40,"tbody"),S(41,K,26,20,"tr",15),n()()()(),o(42,"div",16)(43,"button",17),p("click",function(){return t.prevPage()}),a(44),d(45,"translate"),n(),S(46,W,2,2,"button",18),o(47,"button",17),p("click",function(){return t.nextPage()}),a(48),d(49,"translate"),n()()()),e&2&&(r(5),l(" ",c(6,16,"GAME_ROOM.BUTTON_CREATE")," "),r(5),l(" ",c(11,18,"GAME_ROOM.UPLOAD_QUESTION")," "),r(6),l(" ",c(17,20,"GAME_ROOM.EXCEL_FILE")," "),r(10),l(" ",c(27,22,"TABLE.CODE"),""),r(3),l(" ",c(30,24,"TABLE.CREATION_DATE"),""),r(3),l(" ",c(33,26,"TABLE.EXPIRATION_DATE"),""),r(3),l(" ",c(36,28,"TABLE.STATUS"),""),r(3),l(" ",c(39,30,"TABLE.ACTIONS"),""),r(3),u("ngForOf",t.paginatedData),r(2),u("disabled",t.currentPage===1)("ngClass",t.currentPage===1?"opacity-50 cursor-not-allowed":""),r(),l(" \xAB ",c(45,32,"BUTTON_NAVIGATION_TABLE.PREVIOUS")," "),r(2),u("ngForOf",P(36,J).constructor(t.totalPages)),r(),u("disabled",t.currentPage===t.totalPages)("ngClass",t.currentPage===t.totalPages?"opacity-50 cursor-not-allowed":""),r(),l(" ",c(49,34,"BUTTON_NAVIGATION_TABLE.NEXT")," \xBB "))},dependencies:[L,O,G,k,D]})};export{y as default};
