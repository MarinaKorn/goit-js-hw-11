import{a as f,S as p,i as c}from"./assets/vendor-BjRz3xa9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="49725006-00816a3e1de0585a9b0ca4d46",y="https://pixabay.com/api/";async function h(o){return(await f.get(y,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let a;function g(o){const s=o.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="stats">
          <span>Likes ${t.likes}</span>
          <span>Views ${t.views}</span>
          <span>Comments ${t.comments}</span>
          <span>Downloads ${t.downloads}</span>
        </div>
      </li>
    `).join("");l.innerHTML+=s,a?a.refresh():a=new p(".gallery a")}function L(){l.innerHTML=""}function w(){u.classList.remove("hidden")}function b(){u.classList.add("hidden")}const d=document.querySelector(".form"),v=d.elements["search-text"];d.addEventListener("submit",async o=>{o.preventDefault();const s=v.value.trim();if(s){w(),L();try{const t=await h(s);if(t.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}catch{c.error({message:"An error occurred while fetching data.",position:"topRight"})}finally{b()}}});
//# sourceMappingURL=index.js.map
