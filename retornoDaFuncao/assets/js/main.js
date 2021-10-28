function criaMultiplicador(multiplicador){
    //multiplicador
     return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
console.log(duplica(3))