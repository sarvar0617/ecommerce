function time() {
  let date = new Date();
  let day = date.getDate().toString().padStart(2, "0");
  let hour = date.getHours().toString().padStart(2, "0");
  let minut = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");
  let resDate = `${day} : ${hour} : ${minut} : ${second}`;
  document.querySelector(".time").textContent = resDate;
}
time();
setInterval(time, 1000);