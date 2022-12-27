function newdate() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d;
  document.getElementById("btn").style.display = "none";
  document.getElementById("reload").style.display = "block";
  document.getElementById("reload").innerHTML = "Reload";
}
