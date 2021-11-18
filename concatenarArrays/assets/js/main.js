// Concatenando arrays usando o método concat
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9, "Karen"])
console.log(a3)

// Concatenando arrays com spread operator

const newArray = [...a1, ...a2, ...[7, 8, 9, "Karen"]];
console.log(newArray)
