import readlinesync = require('readline-sync');

const numeros: Array<number> = new Array<number>(7, 2, 5, 10, 7, 3);

for(let numero of numeros) {
    console.log(numero);
}

let numeroDigitado: number = (readlinesync.questionInt("Digite um número inteiro: "))

if(numeros.includes(numeroDigitado)) {
    console.log(`O número ${numeroDigitado} foi encontrada no Array na posição ${numeros.indexOf(numeroDigitado)}`)
}else{
    console.log(`O número ${numeroDigitado} não foi encontrado`)
}


