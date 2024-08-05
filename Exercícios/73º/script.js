//Json das vogais.
let vogais = ["a", "e", "i", "o" , "u"];

//Loop principal.
while (true) {

    //Variável que recebe e guarda a letra fornecida pelo usuário.
    let l = prompt("Por favor, digite uma letra do alfabeto: ");

    //Variável que guarda se é uma consoante ou vogal.
    let aux;

    //Checagem se foi fornecido uma letra ou não.
    if (isNaN(l)){

        //Checagem de que a letra é uma consoante ou vogal.
        if (vogais.includes(l)) {

            //Guarda na variável o valor "vogal".
            aux = "vogal";
        } else {

            //Guarda na variável o valor "consoante".
            aux = "consoante";
        }

        //Exibe mensagem mostrando se a letra fornecida é uma vogal ou consoante.
        alert(
            "A letra '" + l + "' é uma " + aux 
        );
        break;
    } else {

        //Exibe mensagem de erro avisando para fornece uma letra do alfabeto.
        alert(
            "Valor Invalido! Por favor, forneça apenas uma letra do alfabeto."
        );
    }
}