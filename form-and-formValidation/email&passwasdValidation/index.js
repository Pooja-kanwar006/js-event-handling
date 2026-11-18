let form = document.querySelector("form");
let email = document.querySelector("#email");
let pwd = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(pwd.value);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const pwdRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (emailRegex.test(email.value)) {
    document.querySelector(".Emailwarn").style.display = "none";
  } else {
    document.querySelector(".Emailwarn").style.display = "initial";
  }
   if (pwdRegex.test(pwd.value)) {
     document.querySelector(".Pwdwarn").style.display = "none";
   } else {
     document.querySelector(".Pwdwarn").style.display = "initial";
   }

});
