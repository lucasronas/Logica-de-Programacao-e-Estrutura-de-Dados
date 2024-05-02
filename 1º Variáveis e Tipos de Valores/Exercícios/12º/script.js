//Guardando os valores do usuário.
let n1 = parseInt(prompt("Digite o primeiro número: "));
let n2 = parseInt(prompt("Digite o segundo número: "));

//Variável auxiliar.
let aux;

//Trocando os valores
aux = n1;
n1 = n2;
n2 = aux;

//Mostrando na tela.
alert(
    "Valores fornecidos: " + n2 + ", " + n1 + "\nValores invertidos: " + n1 + ", " + n2
);