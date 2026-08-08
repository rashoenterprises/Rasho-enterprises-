const menuBtn=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav");
if(menuBtn) menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));

document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",()=>nav.classList.remove("open"));
});

document.getElementById("year").textContent=new Date().getFullYear();

const lightbox=document.getElementById("lightbox");
const lightboxImg=lightbox.querySelector("img");
document.querySelectorAll(".gallery-grid img").forEach(img=>{
  img.addEventListener("click",()=>{
    lightboxImg.src=img.src;
    lightboxImg.alt=img.alt;
    lightbox.classList.add("show");
  });
});
lightbox.addEventListener("click",e=>{
  if(e.target===lightbox || e.target.tagName==="BUTTON") lightbox.classList.remove("show");
});

const sections=[...document.querySelectorAll("main section[id]")];
const links=[...document.querySelectorAll(".nav-links a")];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>observer.observe(s));
