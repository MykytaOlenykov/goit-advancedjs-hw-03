var g=(e,s,t)=>{if(!s.has(e))throw TypeError("Cannot "+t)};var f=(e,s,t)=>(g(e,s,"read from private field"),t?t.call(e):s.get(e)),l=(e,s,t)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,t)};var h=(e,s,t)=>(g(e,s,"access private method"),t);import{S as P,i as w}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const L=document.querySelector(".gallery"),A=new P(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function E(e){L.innerHTML=e.map(R).join(""),A.refresh()}function R({largeImageURL:e,tags:s,webformatURL:t,likes:o,views:a,comments:r,downloads:n}){return`
        <li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img
                  class="gallery-image"
                  loading="lazy"
                  src="${t}"
                  alt="${s}"
                />
                <span class="gallery-info-bar">
                    <span class="gallery-info">
                        <span class="gallery-info-label">Likes</span>
                        <span class="gallery-info-value">${o}</span>
                    </span>
                    <span class="gallery-info">
                        <span class="gallery-info-label">Views</span>
                        <span class="gallery-info-value">${a}</span>
                    </span>
                    <span class="gallery-info">
                        <span class="gallery-info-label">Comments</span>
                        <span class="gallery-info-value">${r}</span>
                    </span>
                    <span class="gallery-info">
                        <span class="gallery-info-label">Downloads</span>
                        <span class="gallery-info-value">${n}</span>
                    </span>
                </span>
            </a>
        </li>
    `}const y=document.querySelector(".progress-bar");function d(e){e?y.classList.add("progress-bar--show"):y.classList.remove("progress-bar--show")}const m={error(e){w.error({position:"topRight",message:e})}},{VITE_API_KEY:O}={BASE_URL:"/goit-mcs-advancedjs-hw-03/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};var i,c,u,b;class ${constructor(){l(this,u);l(this,i,"https://pixabay.com/api/");l(this,c,{key:O,q:"",image_type:"photo",orientation:"horizontal",safesearch:!0})}fetchPhotos({searchValue:s="",startCallback:t=null,finallyCallback:o=null}){h(this,u,b).call(this,s);const a=new URLSearchParams({...f(this,c),q:s});t==null||t(),d(!0),fetch(`${f(this,i)}?${a}`,{method:"GET"}).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{var n;(n=r.hits)!=null&&n.length||m.error("Sorry, there are no images matching your search query. Please try again!"),E(r.hits??[])}).catch(r=>{m.error((r==null?void 0:r.message)??"Something went wrong")}).finally(()=>{o==null||o(),d(!1)})}}i=new WeakMap,c=new WeakMap,u=new WeakSet,b=function(s){if(s.length>100){const t="Search value may not exceed 100 characters.";throw new Error(t)}};const q=new $,v=document.querySelector(".search-form"),S=v.querySelector(".button");v.addEventListener("submit",D);let p=!1;function D(e){var t;if(e.preventDefault(),p)return;const s=((t=e.target.elements["search-value"])==null?void 0:t.value)??"";q.fetchPhotos({searchValue:s.trim(),startCallback:()=>{p=!0,S.setAttribute("disabled","")},finallyCallback:()=>{p=!1,S.removeAttribute("disabled")}})}
//# sourceMappingURL=commonHelpers.js.map
