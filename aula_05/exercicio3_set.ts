import readlinesync = require('readline-sync');

const numeros: Set<number> = new Set<number>()

console.log("Abaixo insira 10 números inteiros não repetidos")

for(let i=0; i<10; i++){
    let numero = (readlinesync.questionInt(`Digite o número ${i+1}: `));

    if (numeros.has(numero)) {
        console.log("Este número já foi inserido! Tente novamente.");
        i--; 
    } else {
        numeros.add(numero);
    }
}

//para poder ordenar a saída dos números em ordem crescente igual mostra no exemplo do exercício, usei o spread para transformar o set em array
const numerosOrdenados = [...numeros].sort((a, b) => a - b);
console.log("Números inseridos em ordem crescente:")
console.table(numerosOrdenados);

