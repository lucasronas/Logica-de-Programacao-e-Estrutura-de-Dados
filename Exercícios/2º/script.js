//Guardando os valores do usuário.
let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));

//Para fazer a média basta somar os valores e depois dividir eles pela quantidade de valores somados, neste exercício são 2 valores.
let media = (n1 + n2) / 2;

//Exibindo a média.
alert(
    "Números fornecidos: " + n1 + " e " + n2 + "\nMédia: " + media
);