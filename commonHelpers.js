import{A as x,a as S,i as w,S as E,N as k,K as q,b as T}from"./assets/vendor-cc0cdd35.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const I=()=>{const t=document.querySelectorAll(".switch-theme-checkbox"),e=document.querySelector("body"),o="theme",n=localStorage.getItem(o),r=window.matchMedia("(prefers-color-scheme: dark)").matches;addEventListener("load",()=>{(n==="dark"||n===null&&r)&&(e.classList.add("dark"),t.forEach(s=>{s.checked=!0})),n==="light"&&(e.classList.add("light"),t.forEach(s=>{s.checked=!1}))}),t.forEach(s=>{s.addEventListener("click",()=>{s.checked===!0?(localStorage.setItem(o,"dark"),e.classList.add("dark"),e.classList.remove("light"),t.forEach(c=>{c.checked=!0})):(localStorage.setItem(o,"light"),e.classList.remove("dark"),e.classList.add("light"),t.forEach(c=>{c.checked=!1}))})})},z=()=>{const t=document.querySelector(".burger-icon"),e=document.querySelector(".close-modal"),o=document.querySelector(".modal-header"),n=()=>{o.classList.remove("is-active"),o.classList.add("is-hidden"),document.body.classList.remove("modal-open"),setTimeout(()=>{t.style.display="block",e.style.display="none"},500)};t.addEventListener("click",()=>{o.classList.add("is-active"),o.classList.remove("is-hidden"),t.style.display="none",e.style.display="block",document.body.classList.add("modal-open")}),e.addEventListener("click",n),o.addEventListener("click",s=>{s.target===o&&n()}),document.querySelectorAll(".modal-content .header-menu-link").forEach(s=>{s.addEventListener("click",n)})},A=()=>{document.querySelectorAll(".benefits-item").forEach(e=>{e.addEventListener("mouseover",()=>{e.style.transform="scale(1.12) translate(10px, -10px)",e.style.transition="transform 0.4s ease",e.style.zIndex="1"}),e.addEventListener("mouseout",()=>{e.style.transform="scale(1)",e.style.backgroundColor="transparent",e.style.zIndex="0"})})},C="/portfolio-project/assets/proj-4-x1-b8298328.jpg",F="/portfolio-project/assets/proj-4-x2-528b3c0a.jpg",N="/portfolio-project/assets/proj-5-x1-5b3c21fd.jpg",B="/portfolio-project/assets/proj-5-x2-1e39277c.jpg",M="/portfolio-project/assets/proj-6-x1-3e3fedcc.jpg",O="/portfolio-project/assets/proj-6-x2-fc5f0d59.jpg",P="/portfolio-project/assets/proj-7-x1-824b4d0d.jpg",$="/portfolio-project/assets/proj-7-x2-74fbf7e4.jpg",R="/portfolio-project/assets/proj-8-x1-aca9c4f6.jpg",X="/portfolio-project/assets/proj-8-x2-3f1ced89.jpg",D="/portfolio-project/assets/proj-9-x1-4675c177.jpg",H="/portfolio-project/assets/proj-9-x2-030fb67c.jpg",J="/portfolio-project/assets/proj-10-x1-1ff4f85a.jpg",K="/portfolio-project/assets/proj-10-x2-edb71ae0.jpg",U="/portfolio-project/assets/icons-0c57a0de.svg",V=()=>{const t=[{url:C,urlX2:F,title:"power pulse webservice"},{url:N,urlX2:B,title:"mimino website"},{url:M,urlX2:O,title:"vyshyvanka vibes Landing Page"},{url:P,urlX2:$,title:"chego jewelry website"},{url:R,urlX2:X,title:"energy flow webservice"},{url:D,urlX2:H,title:"fruitbox online store"},{url:J,urlX2:K,title:"starlight studio landing page"}],e=document.querySelector(".projects-list"),o=document.querySelector(".projects-button");let n=0;o.addEventListener("click",r);function r(){e.insertAdjacentHTML("beforeend",s(t)),n>=t.length&&(o.style.display="none");const a=document.querySelector(".projects-list-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a,behavior:"smooth"})}function s(c){const a=[];for(let i=n;i<n+3&&i<c.length;i++){const{url:u,urlX2:m,title:p}=c[i];a.push(`<li class="projects-list-item">
        <img
          class="projects-list-img"
          srcset="${u} 1x, ${m} 2x"
          src="${u}"
          alt="${p}"
          width="320"
        />
        <p class="projects-list-text">React, JavaScript, Node JS, Git</p>
        <div class="list-title-container">
          <h3 class="projects-list-title">${p}</h3>
          <a class="projects-list-link" href="#">
            VISIT
            <svg class="projects-list-icon" width="24" height="24">
              <use href="${U}#icon-arrow-up"></use>
            </svg>
          </a>
        </div>
      </li>`)}return n+=3,a.join("")}},_=()=>{const t=document.querySelector(".faq-list"),e=new x(t,{duration:250,showMultiple:!1,elementClass:"faq-item",triggerClass:"faq-btn",panelClass:"faq-text",activeClass:"active"});e.open(0);const o=document.querySelectorAll(".faq-item");o.forEach((n,r)=>{n.addEventListener("click",s=>{s.target.closest(".faq-btn")||(o.forEach((c,a)=>{a!==r&&c.classList.contains("active")&&e.close(a)}),n.classList.contains("active")?e.close(r):e.open(r))})})},b="/portfolio-project/assets/error-887c6bc4.svg",G=()=>{const t=document.querySelector(".ltw-form"),e=document.querySelector(".ltw-modal-backdrop"),o=document.querySelector(".ltw-modal-close-btn"),n=document.querySelector(".ltw-modal-backdrop"),r=document.querySelector("body");t.addEventListener("submit",p),t.addEventListener("input",u),o.addEventListener("click",f);const s="https://portfolio-js.b.goit.study/api",c="/requests",a="form-data",i={email:"",comment:""};m();function u(l){const d=l.target.name;i[d]=l.target.value.trim(),localStorage.setItem(a,JSON.stringify(i))}function m(){const l=JSON.parse(localStorage.getItem(a));if(!l)return;const{email:d,comment:g}=t.elements;i.email=l.email,i.comment=l.comment,d.value=i.email,g.value=i.comment}async function p(l){if(l.preventDefault(),!i.email||!i.comment){L("Please fill out the form!");return}const d=`${s}${c}`;try{await S.post(d,i),e.classList.remove("visually-hidden"),r.classList.add("no-scroll"),window.addEventListener("keydown",h),n.addEventListener("click",v),j()}catch(g){L(g.message)}}function f(){e.classList.add("visually-hidden"),r.classList.remove("no-scroll"),window.removeEventListener("keydown",h),n.removeEventListener("click",v),i.email="",i.comment=""}function h(l){l.key==="Escape"&&f()}function v(l){l.target.querySelector(".ltw-modal-container")&&f()}function j(){localStorage.removeItem(a),t.reset()}function L(l){w.show({iconUrl:b,message:l,theme:"dark",backgroundColor:"#00b068",messageColor:"#FFF",messageSize:"16px",position:"topRight"})}},W=()=>{const t=document.querySelector(".scrollToTopBtn");function e(){window.scrollTo({top:0,behavior:"smooth"})}t.addEventListener("click",e);function o(){document.body.scrollTop>20||document.documentElement.scrollTop>20?t.style.display="flex":t.style.display="none"}window.onscroll=o},Y=()=>{const t=document.querySelector(".footer-logo-link"),e=document.querySelectorAll(".footer-soc-link");t.addEventListener("mouseover",()=>{t.style.transition="transform 0.3s ease",t.style.position="relative",t.style.transform="scale(1.3) translate(65px, -10px)",t.style.zIndex="1",t.style.textShadow="0 4px 8px rgba(0, 0, 0, 0.6)"}),t.addEventListener("mouseout",()=>{t.style.transform="scale(1)",t.style.zIndex="0",t.style.textShadow="none"}),e.forEach(o=>{o.addEventListener("mouseover",()=>{o.style.position="relative",o.style.transform="scale(1.4) rotate(360deg) translate(10px, -10px)",o.style.zIndex="1",o.style.textShadow="0 4px 8px rgba(0, 0, 0, 0.6)"}),o.addEventListener("mouseout",()=>{o.style.transform="scale(1) rotate(0deg)",o.style.zIndex="0",o.style.textShadow="none"})})},y=document.querySelector(".reviews-list");function Q({author:t,avatar_url:e,review:o}){return`
    <li class="reviews-item swiper-slide">
      <p class="reviews-text">${o}</p>
      <ul class="person-info">
        <li>
          <img src="${e}" alt="person photo" width="40" height="40">
        </li>
        <li>
          <p class="person-name">${t}</p>
        </li>
      </ul>
    </li>
  `}function Z(t){return t.map(Q).join("")}async function ee(){const t="https://portfolio-js.b.goit.study/api/reviews";try{const e=await S(t),o=Z(e.data);y.innerHTML=o}catch(e){y.classList.add("cap"),y.innerHTML="<p>Not found</p>",w.error({...ne,message:e.message})}}const te=document.querySelector(".swiper"),oe=document.querySelector("[data-prev]"),se=document.querySelector("[data-next]");function re(){new E(te,{modules:[k,q],navigation:{nextEl:se,prevEl:oe,disabledClass:"disabled"},keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,spaceBetween:32,breakpoints:{1280:{slidesPerView:2}},autoHeight:!0,touchEventsTarget:"container"})}const ne={iconUrl:b,backgroundColor:"#00b068",messageColor:"#FFF",messageSize:"16px",position:"topRight"};I();z();V();A();_();G();Y();W();T.init();document.addEventListener("DOMContentLoaded",async()=>{await ee(),re()});
//# sourceMappingURL=commonHelpers.js.map
