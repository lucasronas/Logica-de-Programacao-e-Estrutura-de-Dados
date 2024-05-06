//Guardando os valores do usuário.
let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));
let n3 = parseFloat(prompt("Digite o terceiro número: "));

//Variáveis auxiliares.
let maior;
let meio;
let menor;

//Checando qual o maior;
if (n1 > n2 && n1 > n3) {

    //Guardando o maior.
    maior = n1;
} else if (n2 > n1 && n2 > n3) {

    //Guardando o maior.
    maior = n2;
} else {

    //Guardando o maior.
    maior = n3;
}

//Checando qual o menor;
if (n1 < n2 && n1 < n3) {

    //Guardando o menor.
    menor = n1;
} else if (n2 < n1 && n2 < n3) {

    //Guardando o menor.
    menor = n2;
} else {

    //Guardando o menor.
    menor = n3;
}

//Calculando o do meio;
meio = (n1 + n2 + n3) - maior - menor;

alert("Número: " + n1 + ", " + n2 + ", " + n3 + "\nDecrescente: " + menor + ", " + meio + ", " + maior);