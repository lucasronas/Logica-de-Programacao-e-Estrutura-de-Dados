//Guarda os valores do usuário;
let n1 = parseFloat(prompt("Digite um número entre 0 a 10: "));
let n2 = parseFloat(prompt("Digite o segundo número entre 0 a 10: "));

//Calculando a Média.
let media = (n1 + n2) / 2;

//Variável auxiliar.
let aux;

if (media > 7) {

    //Guardando a resposta.
    aux = true;
} else {

    //Guardando a resposta.
    aux = false;
}

//Exibindo.
alert("A média é maior que 7? " + aux);