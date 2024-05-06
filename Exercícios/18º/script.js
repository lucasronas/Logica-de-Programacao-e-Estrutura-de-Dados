//Guardando os valores do usuário;
let n1 = parseFloat(prompt("Digite a nota 1: "));
let n2 = parseFloat(prompt("Digite a nota 2: "));

//Calculando.
let media = (n1 + n2) / 2;

//Checando.
if (media > 4) {

    //Exibindo.
    alert("Aprovado!");
} else {

    //Exibindo.
    alert("Reprovado!");
}