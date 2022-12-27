setInterval(timeChange, 1000);
function timeChange() {
  const date = new Date();
  document.getElementById("main").innerHTML = date.toLocaleTimeString();
  document.getElementById("main1").innerHTML = date.toLocaleDateString();
}
