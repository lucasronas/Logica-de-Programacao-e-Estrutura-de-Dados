//Loop principal.
while (true) {

    //Variável é guarda o valor pedido do usuário.
    let valor = parseInt(prompt("Quanto deseja sacar? "));

    //Checagem se foi digitado apenas números.
    if (!isNaN(valor)){

        //Variável de cada nota.
        let nota_100 = 0;
        let nota_50 = 0;
        let nota_20 = 0;
        let nota_10 = 0;
        let nota_5 = 0;
        let nota_2 = 0;
        let nota_1 = 0;

        //Variável que recebe o valor do usuário para saber quanto vai sacar.
        let saque = valor;

        //Loop para saber quantas notas de cada o usuário vai receber.
        while (saque > 0 ) {

            //Verifica se o valor restante do saque é suficiente para uma ou mais notas de 100.
            if (saque >= 100) {

                //Calcula o número de notas que são nescessárias.
                nota_100 = Math.floor(saque / 100);
                //Atualiza o valor restante do saque após retirar as notas. 
                saque %= 100;
            }

            //Verifica se o valor restante do saque é suficiente para uma ou mais notas de 50.
            if (saque >= 50) {

                nota_50 = Math.floor(saque / 50);
                saque %= 50;
            }
            
            //Verifica se o valor restante do saque é suficiente para uma ou mais notas de 20.
            if (saque >= 20) {

                nota_20 = Math.floor(saque / 20);
                saque %= 20;
            }

            //Verifica se o valor restante do saque é suficiente para uma ou mais notas de 10.
            if (saque >= 10) {

                nota_10 = Math.floor(saque / 10);
                saque %= 10;
            }

            //Verifica se o valor restante do saque é suficiente para uma ou mais notas de 5.
            if (saque >= 5) {

                nota_5 = Math.floor(saque / 5);
                saque %= 5;
            }

            //Verifica se o valor restante do saque é suficiente para uma ou mais notas de 2.
            if (saque >= 2) {

                nota_2 = Math.floor(saque / 2);
                saque %= 2;
            }

            //Verifica se o valor restante do saque é suficiente para uma ou mais notas de 1.
            if (saque >= 1) {

                nota_1 = Math.floor(saque / 1);
                saque %= 1;
            }
        } 

        //Exibe mensagem monstrando quantas notas de cada ele vai sacar.
        alert(
            "Notas de 100: " + nota_100 + "\nNotas de 50: " + nota_50 + "\nNotas de 20: " + nota_20 + "\nNotas de 10: " + nota_10 + "\nNotas de 5: " + nota_5 + "\nNotas de 2: " + nota_2 + "\nNotas de 1: " + nota_1
        );

        //Interrompe o loop principal
        break;

    } else {

        //Exibe mensagem avisando o usuário para digitar números.
        alert(
            "Valor Invalido! Por favor, digite apenas números."
        );
    }
}