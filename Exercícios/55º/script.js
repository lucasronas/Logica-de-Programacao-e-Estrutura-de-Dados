//Loop.
while (true) {

    //Variáveis que guardam os números do usuário.
    let n1 = parseInt(prompt("Digite o primeiro número: "));
    let n2 = parseInt(prompt("Digite o segundo número: "));    

    //Checagem para ver se o usuário digitou valor valido.
    if (
        !isNaN(n1) && !isNaN(n2)
    ) {

        // Exibe os valores antes da permuta
        alert("Valores antes da permuta:\n1º Valor: " + n1 + "\n2º Valor: " + n2);

        //Trocando os valores da variáveis.
        let aux = n1;
        n1 = n2;
        n2 = aux;

        // Exibe os valores depois da permuta ao usuário
        alert("Valores depois da permuta:\n1º Valor: " + n1 + "\n2º Valor: " + n2);

        //Sai do loop.
        break;
    } else {

        //Exibe mensagem.
        alert(
            "Valor Invalido! Por favor, forneça apenas números."
        );
    }
}
