function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() + (max - min) + min);
}

function esperaAi(msg, tempo, cb) {
  return new Promise((resolve, reject) => {
    if (typeof msg != string) reject("BAD VALUE");

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Frase 1", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(22222, rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Frase 3", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .catch((e) => console.log(e));
