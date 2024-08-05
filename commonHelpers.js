var g=(s,t,a)=>{if(!t.has(s))throw TypeError("Cannot "+a)};var f=(s,t,a)=>(g(s,t,"read from private field"),a?a.call(s):t.get(s)),l=(s,t,a)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,a)};var h=(s,t,a)=>(g(s,t,"access private method"),a);import{S as P,i as w}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const e of r)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const e={};return r.integrity&&(e.integrity=r.integrity),r.referrerPolicy&&(e.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?e.credentials="include":r.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(r){if(r.ep)return;r.ep=!0;const e=a(r);fetch(r.href,e)}})();const L=document.querySelector(".gallery"),A=new P(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function E(s){L.innerHTML=s.map(R).join(""),A.refresh()}function R({largeImageURL:s,tags:t,webformatURL:a,likes:o,views:r,comments:e,downloads:n}){return`
        <li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img
                  class="gallery-image"
                  loading="lazy"
                  src="${a}"
                  alt="${t}"
                />
                <span class="gallery-info-bar">
                    <span class="gallery-info">
                        <span class="gallery-info-label">Likes</span>
                        <span class="gallery-info-value">${o}</span>
                    </span>
                    <span class="gallery-info">
                        <span class="gallery-info-label">Views</span>
                        <span class="gallery-info-value">${r}</span>
                    </span>
                    <span class="gallery-info">
                        <span class="gallery-info-label">Comments</span>
                        <span class="gallery-info-value">${e}</span>
                    </span>
                    <span class="gallery-info">
                        <span class="gallery-info-label">Downloads</span>
                        <span class="gallery-info-value">${n}</span>
                    </span>
                </span>
            </a>
        </li>
    `}const y=document.querySelector(".progress-bar");function m(s){s?y.classList.add("progress-bar--show"):y.classList.remove("progress-bar--show")}const d={error(s){w.error({position:"topRight",message:s})}},{VITE_API_KEY:O}={BASE_URL:"/goit-mcs-advancedjs-hw-03/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};var i,c,u,b;class ${constructor(){l(this,u);l(this,i,"https://pixabay.com/api/");l(this,c,{key:O,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0})}fetchPhotos({searchValue:t="",startCallback:a=null,finallyCallback:o=null}){h(this,u,b).call(this,t);const r=new URLSearchParams({...f(this,c),q:t});a==null||a(),m(!0),fetch(`${f(this,i)}?${r}`,{method:"GET"}).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{var n;(n=e.hits)!=null&&n.length||d.error("Sorry, there are no images matching your search query. Please try again!"),E(e.hits??[])}).catch(e=>{(e==null?void 0:e.name)!=="AbortError"&&d.error((e==null?void 0:e.message)??"Something went wrong")}).finally(()=>{o==null||o(),m(!1)})}}i=new WeakMap,c=new WeakMap,u=new WeakSet,b=function(t){if(t.length>100){const a="Search value may not exceed 100 characters.";throw new Error(a)}};const q=new $,v=document.querySelector(".search-form"),S=v.querySelector(".button");v.addEventListener("submit",D);let p=!1;function D(s){var a;if(s.preventDefault(),p)return;const t=((a=s.target.elements["search-value"])==null?void 0:a.value)??"";q.fetchPhotos({searchValue:t.trim(),startCallback:()=>{p=!0,S.setAttribute("disabled","")},finallyCallback:()=>{p=!1,S.removeAttribute("disabled")}})}
//# sourceMappingURL=commonHelpers.js.map
