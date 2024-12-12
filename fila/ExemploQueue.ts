import readlinesync = require('readline-sync');
import { Queue } from './Queue';

const fila = new Queue<string>();

//inserir dados
fila.enqueue("Beatriz");
fila.enqueue("Gustavo");
fila.enqueue("Alana");

//fila.enqueue(readlinesync.question("Digite o seu nome: "))

//mostrar na tela tudo que está na fila
fila.printQueue();

//checar se existe na fila a Alana
console.log(fila.contains("Alana"))

//checar o tamanho da fila
console.log(fila.count())

//retirar uma pessoa da fila (tira a primeira pessoa)
fila.dequeue()

//ver se realmete tirou a pessoa da fila
fila.printQueue();

//só mostrar sem remover
console.log(fila.peek())