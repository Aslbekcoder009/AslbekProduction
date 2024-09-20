
const barEl = document.querySelector(".fa-bars");
const conEl = document.querySelector(".container");
const xEl = document.querySelector(".fa-xmark");


barEl.addEventListener("click", () => {
    conEl.style.marginLeft = "-100px";
    barEl.style.display = "none" ;  
    xEl.style.color = "blue" ;

})
xEl.addEventListener( "click", () => {
    conEl.style.marginLeft = "-320px";
    barEl.style.display = "block" ;  
    xEl.style.color = "white" ;



} )