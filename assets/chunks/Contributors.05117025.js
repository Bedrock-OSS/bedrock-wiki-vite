var D=Object.defineProperty;var j=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var B=(r,t,e)=>t in r?D(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,p=(r,t)=>{for(var e in t||(t={}))E.call(t,e)&&B(r,e,t[e]);if(j)for(var e of j(t))O.call(t,e)&&B(r,e,t[e]);return r};import{f as T,u as F,g as L,h as A,i as G,j as _,o as b,c as w,b as N,F as H,k as I,l as K}from"../404.md.25b6a67d.js";function v(r,t){return fetch(r,t)}const P={key:0,class:"inline-block"},S={class:"space-x-2 md:-space-x-2 md:hover:space-x-2"},U=["href","alt"],V=["src","alt","title"],z=T({props:{mentioned:null},async setup(r){let t,e;const u=r,{page:f,site:c}=F(),y=async function(){const i=c.value.themeConfig.docsDir+"/"+f.value.relativePath,s=c.value.themeConfig.contributors;if(!s||!JSON.stringify(s).includes("SirLich"))return console.error("couldn't fetch contributors:",s),await k();const o=s[i]?Array.from(s[i]):null;if(!o)return console.error("Document path:",i,"not found within contributors:",Object.keys(s)),await k();const l=p({},!!{}.GITHUB_TOKEN);for(let a=0;a<u.mentioned.length;a++){if(o.filter(n=>n.login===u.mentioned[a]).length>0)continue;const g="https://api.github.com/users/"+u.mentioned[a];let d=await(await v(g,{headers:l})).json();o.push(d)}return o},k=async function(){var m,d;let i="https://api.github.com/repos/"+c.value.themeConfig.repo+"/commits?path="+c.value.themeConfig.docsDir+"/"+f.value.relativePath;const s=p({},!!{}.GITHUB_TOKEN);let l=await(await v(i,{headers:s})).json(),a=[];const g=n=>a.filter(C=>C.login===n).length>0;for(let n=0;n<l.length;n++)((d=(m=l[n])==null?void 0:m.author)==null?void 0:d.login)&&!g(l[n].author.login)&&a.push(l[n].author);for(let n=0;n<u.mentioned.length;n++){i="https://api.github.com/users/"+u.mentioned[n];let x=await(await v(i,{headers:s})).json();g(x.login)||a.push(x)}return a};let h=L(([t,e]=A(()=>y()),t=await t,e(),t));return G(f,async()=>{h.value=await y()}),(i,s)=>_(h)&&_(h).length>0?(b(),w("div",P,[N("div",S,[(b(!0),w(H,null,I(_(h),o=>(b(),w("a",{key:o.login,href:o.html_url,alt:o.login,target:"_blank",class:"h-8 w-8 transition-spacing ease-in-out duration-150"},[N("img",{src:o.avatar_url,class:"h-8 w-8 rounded-full border-2 border-white dark:border-true-gray-600 bg-white dark:bg-true-gray-900",alt:o.login,title:o.login},null,8,V)],8,U))),128))])])):K("",!0)}});export{z as default};
