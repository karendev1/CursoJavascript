const pessoas = [
  { id: 3, nome: "Karen" },
  { id: 2, nome: "Luiz" },
  { id: 1, nome: "Maria" },
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, {...pessoa });
}

novasPessoas.delete(2)
console.log(novasPessoas);
