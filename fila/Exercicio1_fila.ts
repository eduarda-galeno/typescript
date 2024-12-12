import readlinesync = require('readline-sync');
import { Queue } from './Queue';

const fila = new Queue<string>();
let opcao: number;


do { 

    console.log(`=#=`.repeat(20));
    console.log(`
        \t1 - Adicionar Cliente na fila
        \t2 - Listar todos os Clientes
        \t3 - Chamar um Cliente da fila
        \t0 - Sair
        `)
    console.log(`=#=`.repeat(20));

    opcao = Number(readlinesync.question('\nDigite a opcao desejada: '));


    if(opcao === 1) {
        const nome = readlinesync.question('\nDigite o seu nome: ');

        fila.enqueue(nome);
        console.log(`\nCliente ${nome} adicionado com sucesso!`);

    } else if(opcao === 2) {
        console.log(`\nClientes na fila de espera: `);
            fila.printQueue();

    } else if(opcao === 3) {
        console.log("\nDirija-se ao guichê de atendimento: ", fila.dequeue())
        fila.printQueue();

        if(fila.isEmpty()) {
            console.log("\nA fila está vazia!");
        }

    } else if (opcao === 0) {
        console.log('Programa encerrado!');
        break;
    }
} while (opcao !== 0);