const relogio = document.querySelector(".relogio");
let segundos = 0;
let timer;

function getTimeFromSecond(segundos) {
  const date = new Date(segundos * 1000);
  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
}

function initTimer() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = getTimeFromSecond(segundos);
  }, 1000);
}

document.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("iniciar")) {
    relogio.classList.remove("pausado");
    clearInterval(timer);
    initTimer();
  }

  if (element.classList.contains("pausar")) {
    relogio.classList.add("pausado");
    clearInterval(timer);
  }

  if (element.classList.contains("zerar")) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    segundos = 0;
  }
});
