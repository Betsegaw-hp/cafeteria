//date 
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();
//declaration
 const bars = document.querySelector(".bars i");
 const listContainer = document.querySelector(".list-container");
 const header = document.querySelector(".header");
 const map = document.querySelector("#google-map"); 
//  functions
function getWidthInstantly() {
  console.log(map.clientWidth ,", " + window.innerWidth);
   map.style.width = (window.innerWidth -100)+"px";
}
// event listeners
// window.addEventListener("resize",getWidthInstantly );
// window.addEventListener("change orentation",getWidthInstantly );
bars.addEventListener("click" ,()=>{
  listContainer.classList.toggle("show-li-container");
  bars.classList.toggle("fa-stream");
});
window.addEventListener("DOMContentLoaded", ()=>{
  bars.classList.remove("fa-stream");
});
window.addEventListener("scroll", ()=> {
  header.classList.add("show-shodow");
  if(Math.abs(Math.floor(window.scrollY)) == 0) {
    header.classList.remove("show-shodow");
  }
});