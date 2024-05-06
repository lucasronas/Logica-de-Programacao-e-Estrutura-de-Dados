//Guardando os valores do usuário;
let n1 = parseFloat(prompt("Digite a nota 1: "));
let n2 = parseFloat(prompt("Digite a nota 2: "));

//Calculando.
let media = (n1 + n2) / 2;

//Exibindo.
alert("Esta Reprovado? " + (media <= 4 || n1 === 0 || n2 === 0));