const paragrafos = document.querySelector(".paragrafos"); // Só retorna o primeiro elemento
const ps = paragrafos.querySelectorAll("p"); // Selecionando todos os paragrafos, da div paragrafos

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

ps.forEach(p=> {
   p.style.backgroundColor = backgroundColorBody;
   p.style.color = '#fff'
});