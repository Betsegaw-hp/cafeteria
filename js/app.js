//date 
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();
//declaration
 const bars = document.querySelector(".bars i");
 const listContainer = document.querySelector(".list-container");
 const header = document.querySelector(".header");
 const map = document.querySelector("#google-map"); 
 const mapPreloader = document.querySelector(".map-preloader"); 
 const preLoad = document.querySelector(".preloader");
 const bouncer =document.querySelector(".bouncer");
//  functions

// event listeners
bars.addEventListener("click" ,()=>{
  listContainer.classList.toggle("show-li-container");
  if(bars.classList.contains("fa-stream")) {
    bars.classList.remove("fa-stream");
  } else {
    bars.classList.add("fa-stream");
  }
});
const navHieght = header.scrollHeight;
window.addEventListener("DOMContentLoaded", ()=>{
  bars.classList.remove("fa-stream");
  bouncer.classList.add("bouncer-hide");
  preLoad.classList.add("hide-preloader");
  if(Math.abs(Math.floor(window.pageYOffset)) >= navHieght) {
    header.classList.add("show-shodow");
  } 
  else {
    header.classList.remove("show-shodow");
  }
});


window.addEventListener("scroll", ()=> {
  if(Math.abs(Math.floor(window.pageYOffset)) >= navHieght) {
    header.classList.add("show-shodow");
  } 
  else {
    header.classList.remove("show-shodow");
  }
  if(Math.abs(Math.floor(window.scrollY)) <= 500 ) {
    bouncer.classList.add("bouncer-hide");
  }
  else {
    bouncer.classList.remove("bouncer-hide");
  }
});
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".a-scroll");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    bars.classList.remove("fa-stream");
    //navigate to specific spot
    const id = e.currentTarget.getAttribute("href");
    const element = document.querySelector(id);
    const navHeight = header.getBoundingClientRect().height;
    const containerHeight = listContainer.getBoundingClientRect().height;
    const fixedNav = header.classList.contains("show-shodow");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    listContainer.classList.remove("show-li-container");
  },false);
});
window.addEventListener("load",()=> {
  mapPreloader.classList.add("map-preloader-hide");
});