var I=Object.defineProperty;var K=(s,t,e)=>t in s?I(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var v=(s,t,e)=>(K(s,typeof t!="symbol"?t+"":t,e),e),g=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var i=(s,t,e)=>(g(s,t,"read from private field"),e?e.call(s):t.get(s)),o=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},h=(s,t,e,b)=>(g(s,t,"write to private field"),b?b.call(s,e):t.set(s,e),e);var m=(s,t,e)=>(g(s,t,"access private method"),e);import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */var a,n,r,c,p,u,y,f,D,d,E;const l=class l{constructor(t){o(this,c);o(this,u);o(this,f);o(this,d);o(this,a,{});o(this,n,[]);o(this,r,{});t&&h(this,n,t.querySelectorAll("input, textarea")),h(this,a,t),i(this,n)&&(i(this,a).addEventListener("submit",this.onSubmitForm.bind(this)),i(this,a).addEventListener("input",this.onInput.bind(this)))}destroy(){i(this,n)&&(i(this,a).removeEventListener("submit",this.onSubmitForm.bind(this)),i(this,a).removeEventListener("input",this.onInput.bind(this)))}restoreData(){m(this,c,p).call(this),m(this,u,y).call(this)}onInput(t){i(this,n).forEach(e=>{e.name&&(i(this,r)[e.name]=t.currentTarget.elements[e.name].value.trim())}),m(this,f,D).call(this)}onSubmitForm(t){if(t.preventDefault(),!m(this,d,E).call(this))return alert("Fill please all fields");console.log("submit data: ",i(this,r)),localStorage.removeItem(l.localStorageKey),h(this,r,{}),t.currentTarget.reset()}};a=new WeakMap,n=new WeakMap,r=new WeakMap,c=new WeakSet,p=function(){const t=localStorage.getItem(l.localStorageKey);h(this,r,t?JSON.parse(t):{})},u=new WeakSet,y=function(){Object.keys(i(this,r)).forEach(e=>{i(this,a).elements[e]&&(i(this,a).elements[e].value=i(this,r)[e])})},f=new WeakSet,D=function(){localStorage.setItem(l.localStorageKey,JSON.stringify(i(this,r)))},d=new WeakSet,E=function(){let t=!0;return i(this,n).forEach(e=>{t&&(t=i(this,a).elements[e.name].value.trim())}),t},v(l,"localStorageKey","feedback-form-state");let S=l;const F=document.querySelector(".feedback-form"),L=new S(F);L.restoreData();
//# sourceMappingURL=commonHelpers2.js.map
