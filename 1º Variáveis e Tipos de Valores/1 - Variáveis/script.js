/*
    Variável é um local onde armazena um valor dado pelo usuário ou programador que pode ser acessado  através do nome predefinido da variável. A variável tem um escopo grobal, pode ser acessado por qualquer parte do programa.

    Constante é um local onde armazena um valor, mas depois não pode ser alterado este valor dado a ela. A constante tem um escopo de bloco, só pode ser acessado no bloco onde ela foi declarado.

    Variável Let é um local onde armazena um valor, mas só pode ser acessada pelo escopo onde ela foi declarada, já que ela tem um escopo de bloco.
*/
let nome = prompt("Qual seu nome?");

alert("Bem Vindo, " + nome);