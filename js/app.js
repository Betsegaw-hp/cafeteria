//date 
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();
//declaration
 const bars = document.querySelector(".bars i");
 const listContainer = document.querySelector(".list-container");
 const header = document.querySelector(".header");
 const map = document.querySelector("#google-map"); 
 const preLoad = document.querySelector(".preloader");
//  functions

// event listeners
bars.addEventListener("click" ,()=>{
  listContainer.classList.toggle("show-li-container");
  bars.classList.toggle("fa-stream");
});
window.addEventListener("DOMContentLoaded", ()=>{
  bars.classList.remove("fa-stream");
  preLoad.classList.add("hide-preloader");
});
window.addEventListener("scroll", ()=> {
  const navHieght = header.scrollHeight;

  if(Math.abs(Math.floor(window.scrollY)) >= navHieght) {
    header.classList.add("show-shodow");
  } else {
    header.classList.remove("show-shodow");
  }
});