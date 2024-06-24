//Loop.
while (true) {

    //Variáveis que guardam os valores do usuário.
    let a = parseFloat(prompt("Digite o valor de a: "));
    let b = parseFloat(prompt("Digite o valor de b: "));

    //Checando se foi digitado números.
    if (
        !isNaN(a) && !isNaN(b)
    ) {

        //Calculando.
        let x = -b / a;

        //Exibe mensagem.
        alert(
            "Resultado da raiz da equação de primeiro grau (x = -b / a): " + x 
        );
        
        //Sai do loop.
        break;
    } else {

        //Exibe mensagem.
        alert(
            "Valor Invalido! Por favor, forneça apenas números."
        );
    }
}