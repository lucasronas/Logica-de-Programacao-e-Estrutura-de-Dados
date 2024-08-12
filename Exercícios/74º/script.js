//Loop principal. O loop serve para continuar pedindo o salário do usuário até que seja informado um valor válido.
while (true) {

    //Variável que guarda o salário do funcionário.
    let salario = parseFloat(prompt("Por favor, informe o salário: "));

    //Variável do desconto previdenciário.
    let desconto = salario * 0.11;
    //Variável do desconto máximo.
    let descontoMaximo = 334.29;

    //Checando se foi informado um número válido.
    if (!isNaN(salario)) {
        
        //Checa se o desconto é maior que o desconto máximo.
        if (desconto > descontoMaximo){

            //Caso seja maior que o desconto máximo (R$ 334.29), desconto sera limitado a este valor. 
            desconto = 334.29;
        }
        
        //Exibe a mensagem para o usuário ver o valor do salário e do desconto, colocando duas casas decimais em ambos.
        alert(
            "O salário de R$" + salario.toFixed(2) + " tem R$" + desconto.toFixed(2) + " de desconto previdenciário."
        )

        //Para o loop principal.
        break;
    } else {

        //Exibe mensagem de erro indicando que a entrada foi inválida.
        alert(
            "Valor Inválido! Por favor, forneça um salário válido."
        );
    }
}