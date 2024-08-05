var g=(e,s,a)=>{if(!s.has(e))throw TypeError("Cannot "+a)};var u=(e,s,a)=>(g(e,s,"read from private field"),a?a.call(e):s.get(e)),l=(e,s,a)=>{if(s.has(e))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(e):s.set(e,a)};var h=(e,s,a)=>(g(e,s,"access private method"),a);import{S as w,i as P}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const L=document.querySelector(".gallery"),A=new w(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function R(e){L.innerHTML=e.map($).join(""),A.refresh()}function $({largeImageURL:e,tags:s,webformatURL:a,likes:o,views:t,comments:r,downloads:n}){return`
        <li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img
                  class="gallery-image"
                  loading="lazy"
                  src="${a}"
                  alt="${s}"
                />
                <span class="gallery-info-bar">
                    <span class="gallery-info">
                        <span class="gallery-info-label">Likes</span>
                        <span class="gallery-info-value">${o}</span>
                    </span>
                    <span class="gallery-info">
                        <span class="gallery-info-label">Views</span>
                        <span class="gallery-info-value">${t}</span>
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
    `}const y=document.querySelector(".progress-bar");function m(e){e?y.classList.add("progress-bar--show"):y.classList.remove("progress-bar--show")}const d={error(e){P.error({position:"topRight",message:e})}};var i,c,f,S;class q{constructor(){l(this,f);l(this,i,"https://pixabay.com/api/");l(this,c,{key:"33901204-9e2cee760dcc4c2bf1fca35a0",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0})}fetchPhotos({searchValue:s="",startCallback:a=null,finallyCallback:o=null}){h(this,f,S).call(this,s);const t=new URLSearchParams({...u(this,c),q:s});a==null||a(),m(!0),fetch(`${u(this,i)}?${t}`,{method:"GET"}).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{var n;(n=r.hits)!=null&&n.length||d.error("Sorry, there are no images matching your search query. Please try again!"),R(r.hits??[])}).catch(r=>{d.error((r==null?void 0:r.message)??"Something went wrong")}).finally(()=>{o==null||o(),m(!1)})}}i=new WeakMap,c=new WeakMap,f=new WeakSet,S=function(s){if(s.length>100){const a="Search value may not exceed 100 characters.";throw new Error(a)}};const E=new q,v=document.querySelector(".search-form"),b=v.querySelector(".button");v.addEventListener("submit",O);let p=!1;function O(e){var a;if(e.preventDefault(),p)return;const s=((a=e.target.elements["search-value"])==null?void 0:a.value)??"";E.fetchPhotos({searchValue:s.trim(),startCallback:()=>{p=!0,b.setAttribute("disabled","")},finallyCallback:()=>{p=!1,b.removeAttribute("disabled")}})}
//# sourceMappingURL=commonHelpers.js.map
