import { Stack } from "./Stack";

const pilha = new Stack<string>();

pilha.push("prato azul");
pilha.push("prato verde");
pilha.push("prato vermelho");

pilha.printStack();

console.log(pilha.contains("prato branco"))

//tirar elementos
pilha.pop();

pilha.printStack;

