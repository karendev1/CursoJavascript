//Escreve uma função que recebe um numero e retorne o seguinte:
// Numero é divisivel por 3 = Fizz;
//Numero é divisivel por 5 = Buzz;
// Numero é divisivel por 3 e 5 = FizzBuzz;
// Numero NÃO é divisivel por 3 e 5 = Retorna o proprio numero
//Checar se o numero é realmente um numero
// Use a função com numeros de 0 a 100

function fizzBuzz(number) {
  if (typeof number !== "number") return numero;
  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";

  return number;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
