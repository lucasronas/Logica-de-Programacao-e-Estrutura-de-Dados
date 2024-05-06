//Guardando os valores do usuário.
let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));
let n3 = parseFloat(prompt("Digite o terceiro número: "));

//Variável auxiliar.
let aux;

//Checagem
if (n1 > n2 && n1 > n3) {
    
    //Guardando o maior.
    aux = n1;
} else if (n2 > n1 && n2 > n3) {

    //Guardando o maior.
    aux = n2;
} else {

    //Guardando o maior.
    aux = n3;
}

//Exibindo o maior.
alert(
    "Número fornecidos: " + n1 + ", " + n2 + ", " + n3 + "\nO maior deles é: " + aux
);