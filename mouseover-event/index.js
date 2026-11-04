let div = document.querySelector(".box");
div.addEventListener("mouseover", (e) => {
  div.style.backgroundColor = "green";
});
div.addEventListener("mouseout",()=>{
div.style.backgroundColor="blue";
})

//mousemove
window.addEventListener("mousemove",(e)=>{

div.style.position="absolute";

div.style.left=`${e.clientX}px`;
div.style.top = `${e.clientY}px`;

})