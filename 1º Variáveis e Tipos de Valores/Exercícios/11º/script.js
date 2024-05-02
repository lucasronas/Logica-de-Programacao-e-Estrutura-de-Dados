//Guardando os valores do usuário.
let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));
let n3 = parseFloat(prompt("Digite o terceiro número: "));

//Variáveis auxiliares.
let maior;
let menor;
let igual;

//Checando o maior.
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

//Checando o menor.
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

//Checando se não são iguais.
if (n1 === n2 && n1 === n3 && n2 === n3) {

    //Exibindo mensagem.
    alert("Os três número são iguais!\n" + n1 + ", " + n2 + ", " + n3);
} else {

    //Exibindo mensagem.
    alert(
        "Números fornecidos: " + n1 + ", " + n2 + ", " + n3 + "\nMaior número: " + maior + "\nMenor número: " + menor
    );
}