// Uma função recursiva é aquele que executa um código e depois chama ela mesmo

function recursiva(max) {
  if (max >= 10) return;
  max++;
  console.log(max);
  recursiva(max);
}

recursiva(0);
