let inpT = document.querySelector("textarea");
let inpS=document.querySelector('input[type="submit"]');
let form=document.querySelector("form");
 let span=document.querySelector("span")


inpS.addEventListener("click",(e)=>{
e.preventDefault();

alert(`your input have ${inpT.value.length} characters`);

})