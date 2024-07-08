//Loop.
while (true) {

    //Variável que guarda o valor do usuário.
    let n = parseFloat(prompt("Digite qualquer número: "));

    //Checando se foi fornecido um número ou letra.
    if(!isNaN(n)) {

        //Checando se o número é ou não par.
        if (n % 2 === 0) {

            //Caso seja par, exibe mensagem para o usuário avisando que é par.
            document.write(
                "O número " + n + " é par."
            );

        } else {

            //Caso não seja par, exibe a mensagem para o usuário avisando que não é par.
            document.write(
                "O número " + n + " não é par."
            );
        }

        //Para o loop.
        break;
        
    } else {

        //Exibe mensagem de erro para o usuário.
        alert(
            "Valor Invalido! Por favor, forneça apenas números."
        );
    }
}