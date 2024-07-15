//Loop principal.
while (true) {

    //Recebe o valor da mercadoria e o guarda.
    let valor_Merc = parseFloat(prompt("Digite o valor da mercadoria: "));

    //Verifica se o valor da mercadoria recebeu apenas números.
    if (!isNaN(valor_Merc)){

        //Variável que calcula o valor de cada prestação, arredondando para baixo.
        let valor_Presta = Math.floor(valor_Merc / 3); 
        //Variável que calcula o valor da entrada somando o valor de uma prestação mais o resto da divisão por 3.
        let valor_Entra = valor_Presta + (valor_Merc % 3);

        //Exibe os valores calculados formatados com duas casas decimais.
        alert(
            "Valor da Entrada: R$ " + valor_Entra.toFixed(2) + "\nValor das duas Prestações: R$ " + valor_Presta.toFixed(2)
        );

        //Finaliza o loop principal.
        break;   


    } else {

        //Exibe uma mensagem de erro se o valor digitado não for um número válido.
        alert(
            "Valor Invalido! Por favor, digite apenas números."
        );
    }
}