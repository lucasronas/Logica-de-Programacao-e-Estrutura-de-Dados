/*
  Podemos controlar o fluxo do loop com duas palavrinhas, o "break" e o "continue".

  Utiliza o "break" em um loop para interromper o loop, como o exemplo a baixo mostra ele interrompe quando o valor de "i" for igual a 5.

  Utiliza o "continue" em um loop para reiniciar a instrução loop onde ele encerrará a iteração atual mais interna de uma instrução e depois ira fazer a execução do laço a partir da próxima iteração. Como mostra o exemplo a baixo, o laço mostra o valor de "i" ate o 4 depois ele continua a partir do 6 ate chega no 10, no final ele não mostra o 5 mais mostra todos os outros números.
*/
for (let i = 1; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}

console.log("fim do loop com break");


for (let i = 1; i < 10; i++) {

    if (i === 5) {
        continue;
    }
    console.log(i);
}

console.log("fim do loop com continue");