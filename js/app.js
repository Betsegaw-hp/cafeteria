//declaration
 const bars = document.querySelector(".bars i");
 const listContainer = document.querySelector(".list-container");
 const header = document.querySelector(".header");

//  functions

// event listeners
bars.addEventListener("click" ,()=>{
  listContainer.classList.toggle("show-li-container");
  bars.classList.toggle("fa-stream");
});
window.addEventListener("DOMContentLoaded", ()=>{
  bars.classList.remove("fa-stream");
});
window.addEventListener("scroll", ()=> {
  header.classList.add("show-shodow");
  if(Math.abs(Math.floor(window.scrollY)) === 0) {
    header.classList.remove("show-shodow");
  }
});