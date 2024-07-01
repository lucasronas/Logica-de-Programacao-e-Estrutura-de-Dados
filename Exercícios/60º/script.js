//Variável do loop.
let i = 0;

//Loop.
while (i === 0) {

    //Variável que guarda o valor do usuário.
    let n = parseFloat(prompt("Digite qualquer número: "));

    //Checagem se foi digitado apenas números.
    if (!isNaN(n)) {

        //Incrementa a variável do loop.
        i++

        //Variável auxiliar.
        let aux = n;

        //Checagem para ver se o número é negatio, se for tira o sinal.
        if (n < 0) {

            n = 0 - n;
        }

        //Exibe mensagem mostrando o módulo do número.
        alert(
            "O módulo de " + aux + " é " + n
        );

    } else {

        //Exibe mensagem de erro.
        alert(
            "Valor Invalido! Por favor, forneça apenas números."
        );
    }
}