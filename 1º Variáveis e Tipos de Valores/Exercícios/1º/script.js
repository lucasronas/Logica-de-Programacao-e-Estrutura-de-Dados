//Guardando os valores do usuário.
let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));

//Soma.
let soma = n1 + n2;

//Subtração.
let subt = n1 - n2;

//Multiplicação.
let multi = n1 * n2;

//Divisão. O toFixed() serve para fixar quantas casas decimais vai mostrar, como foi colocado 2 vai mostra apenas 2 casas.
let divisao = (n1 / n2).toFixed(2);

//Mostrando os quatro.
alert(
    "Valores fornecidos: " + n1 + " e " + n2 + "\nSoma: " + soma + "\nSubtração: " + subt + "\nMultiplicação: " + multi + "\nDivisão: " + divisao
);