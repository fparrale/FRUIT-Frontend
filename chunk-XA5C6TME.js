import{b as m,l as h}from"./chunk-PWFTLQLJ.js";import{$ as d,G as s,X as i,ea as u,r as n}from"./chunk-EU2SIFBO.js";var o=class extends Error{};o.prototype.name="InvalidTokenError";function w(t){return decodeURIComponent(atob(t).replace(/(.)/g,(e,r)=>{let a=r.charCodeAt(0).toString(16).toUpperCase();return a.length<2&&(a="0"+a),"%"+a}))}function U(t){let e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return w(e)}catch{return atob(e)}}function g(t,e){if(typeof t!="string")throw new o("Invalid token specified: must be a string");e||(e={});let r=e.header===!0?0:1,a=t.split(".")[r];if(typeof a!="string")throw new o(`Invalid token specified: missing part #${r+1}`);let l;try{l=U(a)}catch(c){throw new o(`Invalid token specified: invalid base64 for part #${r+1} (${c.message})`)}try{return JSON.parse(l)}catch(c){throw new o(`Invalid token specified: invalid json for part #${r+1} (${c.message})`)}}var p={production:!0,apiUrl:"http://devhubcentral.org/fruit/api/"};var f=class t{constructor(e,r){this.http=e;this.router=r}apiUrlLogin=p.apiUrl+"auth/login";apiUrlRegister=p.apiUrl+"auth/register";apiUrlRoles=p.apiUrl+"auth/roles";apiUrlSendCode=p.apiUrl+"change-password/send-otp";apiUrlPasswordReset=p.apiUrl+"change-password/reset-otp";userDataKey="userData";login(e){return this.http.post(this.apiUrlLogin,e).pipe(i(r=>{this.setUserData(r.data)}),s(r=>n(()=>new Error(r.error.message||"Ocurrio un error intentalo mas tarde"))))}register(e){return e.username=e.email,e.role=Number(e.role),e.birth_date=this.formatDate(new Date),this.http.post(this.apiUrlRegister,e).pipe(i(r=>r),s(r=>n(()=>new Error(r.error.message||"Ocurrio un error intentalo mas tarde"))))}getRoles(){return this.http.get(this.apiUrlRoles).pipe(i(e=>e),s(e=>n(()=>new Error(e.error.message||"Ocurrio un error intentalo mas tarde"))))}passwordSendCode(e){return this.http.post(this.apiUrlSendCode,e).pipe(i(r=>r),s(r=>n(()=>new Error(r.error.message||"Ocurrio un error intentalo mas tarde"))))}passwordReset(e){return this.http.post(this.apiUrlPasswordReset,e).pipe(i(r=>r),s(r=>n(()=>new Error(r.error.message||"Ocurrio un error intentalo mas tarde"))))}setUserData(e){localStorage.setItem(this.userDataKey,JSON.stringify(e))}getUserData(){if(typeof window<"u"){let e=localStorage.getItem(this.userDataKey);return e?JSON.parse(e):null}else return null}isAuthenticated(){let e=this.getUserData();return e?this.isValidToken(e):!1}isValidToken(e){try{let r=g(e.access_token),a=Math.floor(Date.now()/1e3);return r.exp>a}catch{return!1}}logout(){localStorage.removeItem(this.userDataKey),localStorage.removeItem("timer"),this.router.navigate(["/login"])}formatDate(e){let r=e.getFullYear(),a=(e.getMonth()+1).toString().padStart(2,"0"),l=e.getDate().toString().padStart(2,"0");return`${r}-${a}-${l}`}static \u0275fac=function(r){return new(r||t)(u(m),u(h))};static \u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})};export{p as a,f as b};
