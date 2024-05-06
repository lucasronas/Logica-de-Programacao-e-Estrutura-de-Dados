//Guardando os valores dos usuário.
let n1 = parseFloat(prompt("Digite a primeira nota: "));
let n2 = parseFloat(prompt("Digite a segunda nota: "));

//Calculando.
let media = (n1 + n2) / 2;

//1º Checagem.
if (media > 4 && n1 > 0 && n2 > 0) {

    //Exibindo.
    alert("1º Aprovado!");
} else {

    //Exibindo.
    alert("1º Reprovado!");
}

//2º Checagem.
if (media <= 4 || n1 === 0 || n2 === 0) {

    //Exibindo.
    alert("2º Reprovado!");
} else {
    
    //Exibindo.
    alert("2º Aprovado!");
}