//Guarda os valores do usuário.
let n1 = parseFloat(prompt("Digite o primeiro número de 0 a 10: "));
let n2 = parseFloat(prompt("Digite o segundo númereo de 0 a 10: "));

//1º Checagem.
if (
    (n1 <= 10 && n2 <= 10) && (n1 >=0 && n2 >=0)
) {

    //Calculando
    let media = (n1 + n2) / 2;

    //2º Checagem.
    if (media > 4 && n1 > 0 && n2 > 0){

        //Exibe.
        alert("Aprovado!");
    } else {

        //Exibe.
        alert("Reprovado!");
    }

} else {

    //Exibe.
    alert("Valor Invalido! Por favor, digitar dois número de 0 a 10.");
}

// if (
//     (n1 > 10 || n2 > 10) || (n1 < 0 || n2 < 0)
// ) {

//     alert("Valor Invalido! Por favor, digitar dois números de 0 a 10.");
// } else {

//     let media = (n1 + n2) / 2;

//     if (media > 4 && n1 > 0 && n2 > 0) {

//         alert("Aprovado!");
//     } else {

//         alert("Reprovado!");
//     }
// }
