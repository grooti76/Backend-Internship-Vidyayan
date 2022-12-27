function change() {
  let title = document.getElementById("title");
  title.innerText = "Thank You";
  let btn = document.getElementById("btn");
  btn.style.display = "none";
}
let btn = document.querySelector("input");
btn.addEventListener("click", change);
