import"./assets/modulepreload-polyfill-ec808ebb.js";const s="feedback-form-state",e=document.querySelector(".feedback-form");e.addEventListener("input",o);function o(){const t=e.elements.email.value,a=e.elements.message.value;m(s,{email:t,message:a})}e.addEventListener("submit",l);function l(t){if(t.preventDefault(),e.elements.email.value&&e.elements.message.value){const a=e.elements.email.value,n=e.elements.message.value;console.log({email:a,message:n}),e.reset(),localStorage.removeItem(s)}else alert("Check input!")}r();function m(t,a){localStorage.setItem(t,JSON.stringify(a))}function c(t){const a=localStorage.getItem(t);try{return JSON.parse(a)}catch{return null}}function r(){const t=c(s)||{};e.elements.email.value=t.email||"",e.elements.message.value=t.message||""}
//# sourceMappingURL=commonHelpers.js.map
