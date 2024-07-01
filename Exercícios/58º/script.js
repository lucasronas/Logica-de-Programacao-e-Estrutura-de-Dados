//Variável do loop.
let i = 0;

//Loop.
while (i === 0) {

    //Variável que guarda o valor do produto.
    let valor_Merc = parseFloat(prompt("Digite o valor da mercadoria: "));

    //Checagem para ver se foi digitado apenas números.
    if (!isNaN(valor_Merc) && valor_Merc >= 0){

        //Incrementa a variável do loop.
        i++

        //Variável das prestações.
        let valor_Presta = Math.floor(valor_Merc / 3);
        //Variável da entrada.
        let valor_Entrada = valor_Merc - (2 * valor_Presta);

        //Exibe mensagem.
        alert(
            "Valor da Mercadoria: " + valor_Merc + 
            "\nValor da Entrada: " + valor_Entrada.toFixed(2) + 
            "\nValor das duas Prestações: " + valor_Presta.toFixed(2)
        );
    } else {

        //Exibe mensagem de erro.
        alert(
            "Valor Invalido! Por favor, forneça apenas números."
        );
    }
}