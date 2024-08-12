//Loop principal. O loop vai continuar a pedir o tipo de combustível e quantos litros para o usuário até que seja válido.
while (true) {

    //Variável que vai guarda o valor a ser pagado.
    let pagar = 0;

    // Preços e descontos.
    const precoGasolina = 2.70;
    const precoAlcool = 1.90;
    const descontoGasolinaAte25 = 0.03; // 3%
    const descontoGasolinaAcima25 = 0.05; // 5%
    const descontoAlcoolAte25 = 0.02; // 2%
    const descontoAlcoolAcima25 = 0.04; // 4%

    //Variável que guarda o tipo de combustível pedido pelo usuário.
    let tipo = prompt("Por favor, informe o tipo de combustível (A-álcool, G-gasolina):").toUpperCase();

    //Variável que guarda a quantidade de litros pedido pelo usuário.
    let litros = parseFloat(prompt("Informe quantos litros deseja comprar (Gasolina: R$2.70, Álcool: R$1.90): "));

    
    //Checando se foi informado a letra G ou A.
    if( (tipo === "G" || tipo === "A") && !isNaN(litros) && litros > 0 ) {

        //Guarda o valor do desconto.
        let desconto = 0;

        // Verifica se a quantidade de litros é menor ou igual a 25.
        if (litros <=  25) {

            // Determina o valor do desconto por litro com base no tipo de combustível.
            switch (tipo) {

                //Gasolina
                case "G":
                    //Calcula o preço do litro com desconto para gasolina até de 25 litro
                    desconto = precoGasolina - (precoGasolina * descontoGasolinaAte25);
                    break;
                
                //Álcool
                case "A":
                    //Calcula o preço do litro com desconto para álcool até de 25 litro
                    desconto =  precoAlcool - (precoAlcool * descontoAlcoolAte25);
                    break;
            }
          //Caso a quantidade de litros for maior que 25  
        } else {

            // Determina o valor do desconto por litro com base no tipo de combustível
            switch (tipo) {

                //Gasolina
                case "G":
                    //Calcula o preço do litro com desconto para gasolina acima de 25 litro
                    desconto = precoGasolina - (precoGasolina * descontoGasolinaAcima25);
                    break;
                
                //Álcool
                case "A":
                    //Calcula o preço do litro com desconto para álcool acima de 25 litro
                    desconto =  precoAlcool - (precoAlcool *  descontoAlcoolAcima25);
                    break;
            }
        }

        //Calcula o valor total a ser pago pelo cliente
        pagar = desconto * litros;

        //Exibe mensagem mostrando o valor a ser pagado é o desconto.
        alert("Valor a pagar: R$" + pagar.toFixed(2) + "\nPreço por litro com desconto: R$" + desconto.toFixed(2))


        //Para o loop principal
        break;        
        
    } else {

        //Exibe mensagem de erro caso seja inválido o valor.
        alert(
            "Valor Inválido! Por favor, informe valores o tipo de combustível válido ('A' ou 'G') e uma quantidade de litros positiva."
        );
    }
}