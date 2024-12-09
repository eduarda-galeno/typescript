import readlinesync = require('readline-sync');

const notas: Array<number> = new Array<number>(7.0, 5.0, 4.0, 10.0);

//laço for of para exibir notas
for(let nota of notas){
    console.log(nota.toFixed(1))
}

//adicionar nova nota
notas.push(4.0)

//adicionar novas notas de uma única vez
notas.unshift(2.5, 9.0)

//novo laço for off para exibir notas
console.log("\nExibir as novas notas cadastradas: ")

for(let nota of notas){
    console.log(nota.toFixed(1))
}

//checar o índice de uma nota no array = método index of
console.log("\nO índice da nota 2.5 é: " + notas.indexOf(2.5));

//checar se uma nota existe no array = método includes (esse método é do tipo boolean, logo se a nota for encontrada ele retornará true, caso contrário retornará false)
console.log("\nA nota 2.5 está cadastrada  no Array notas: " + notas.includes(2.5));

//para alterar o valor de uma nota atribua um novo valor através do índice da nota que você deseja alterar, da mesma forma que fizemos com o array tradicional
notas[notas.indexOf(7.0)] = 6.0;

//vamos criar um novo laço for of para exibir o resultado da altaração
console.log("\nExibir a nota alterada: " )

for(let nota of notas){
    console.log(nota.toFixed(1))
}

//apagar uma nota através do método splice (esse método possui dois parâmetros, o primeiro é o índice da nota que será obtido através do método index of).
//o segundo é o número de notas que você deseja apagar a partir da posição do índice, observe que inserimos o valor 1 porque queremos apagar apenas uma nota.

notas.splice(notas.indexOf(2.5), 1);
console.log("\nExibir as notas sem a npota apagada: " )

//vamos criar um novo laço for of para exibir as alterações realizadas na coleção notas

for(let nota of notas){
    console.log(nota.toFixed(1))
}