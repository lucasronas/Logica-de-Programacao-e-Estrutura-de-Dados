//Variável do loop.
let i = 0;

//Loop.
while (i === 0) {

    //Variáveis que guardam os valores do usuário.
    let r1 = parseFloat(prompt("Digite o valor da 1º resistência: "));
    let r2 = parseFloat(prompt("Digite o valor da 2º resistência: "));
    let r3 = parseFloat(prompt("Digite o valor da 3º resistência: "));

    //Checagem.
    if (
        !isNaN(r1) && !isNaN(r2) && !isNaN(r3)
    ) {

        //Incrementa a variável do loop.
        i++;

        //Calculando.
        let req = r3 + ((r1 * r2) / (r1 + r2));

        //Exibe mensagem.
        alert(
            "A resistência equivaletne do circuito é de " + req.toFixed(3) + " \u03A9"
        );
    } else {

        //Exibe mensagem.
        alert(
            "Valor Invalido! Por favor, forneça apenas números."
        );
    }
}