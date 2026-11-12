let ul = document.querySelector("ul");
let li = document.querySelector("li");
ul.addEventListener("click", (e) => {
  e.target.classList.toggle("lt");
});

//event capture
let btn = document.querySelector("button");
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");


btn.addEventListener("click", () => {
  console.log("evt btn has triggered");
});
a.addEventListener("click",() => {
  console.log("evt a has triggered");
});
b.addEventListener("click",() => {
  console.log("evt b has triggered");
},true);
c.addEventListener("click",() => {
  console.log("evt c has triggered");
});
