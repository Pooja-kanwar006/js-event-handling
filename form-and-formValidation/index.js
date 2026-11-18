
let form = document.querySelector("form");
let email=document.querySelector("#email")
let dis = document.querySelector(".name-warning");


form.addEventListener("submit", (e) => {
  e.preventDefault();
//conditions for name
console.log(email);
  let val = e.target[0].value;
  console.log(e.target);
  if ((val.length) < 3) {
    dis.style.display="initial";
  }else{dis.style.display = "none";}
//condition for email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


 if(emailRegex.test(email)){console.log("email ok")}
 else{document.querySelector(".email-warning").style.display="initial";}
});
