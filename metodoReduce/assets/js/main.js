// Reduce - Reduzir o array a um valor só

// some todos os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor) => {
  acumulador += valor;
  return acumulador;
});

console.log(total);

// ------------------------------

// Retorne a soma do dobro de todos os pares
//  -> Filtrar pares
// -> Dobrar valores
// -> Reduzir (somar tudo)

const numerosPares = numeros
  .filter((numeros) => numeros % 2 === 0)
  .map((n) => n * 2)
  .reduce((cont, n) => {
    cont += n;
    return cont;
  });

  console.log(numerosPares)