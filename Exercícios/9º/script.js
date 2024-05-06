//Guarda o valor do usuário.
let n1 = parseFloat(prompt("Digite sua primeira nota: "));
let n2 = parseFloat(prompt("Digite sua segunda nota: "));

//Calculando média
let media = (n1 + n2) / 2;

//Checagem.
if (media === 10) {

    //Exibindo mensagem.
    alert("Aprovado com Distinção!");
} else if (media >= 7 && media < 10) {

    //Exibindo mensagem.
    alert("Aprovado!");
} else if (media < 7) {

    //Exibindo mensagem.
    alert("Reprovado!");
} else {

    //Exibindo mensagem.
    alert("Valor Invalido! Por favor, forneça apenas números.");
}