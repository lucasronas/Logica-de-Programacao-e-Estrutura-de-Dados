//Loop principal.
while (true) {

    //Variável que guarda o número de dias do mês.
    let days = null;

    //Variável que pega o mês que e fornecido pelo usuário.
    let n = parseInt(prompt("Por favor, digite o mês (1 a 12): "), 10);

    //Checando se foi fornecido número ou não e se está no intervalod de 1 a 12.
    if (!isNaN(n) && n >= 1 && n <= 12){

        //Switch para determina o número de dias do mês baseado no mês fornecido pelo usuário.
        switch (n) {

            case 1: //Janeiro.
            case 3: //Março.
            case 5: //Maio.
            case 7: //Julho.
            case 8: //Agosto.
            case 10: //Outubro.
            case 12: //Dezembro.
                //Atribrui 31 dias para os meses espeficados.
                days = 31;
                break;
            
            case 4: //Abril.
            case 6: //Junho.
            case 9: //Setembro.
            case 11: //Novembro.
                //Atribrui 30 dias para os meses espeficados.
                days = 30;
                break;

            case 2: //Fevereiro.
                //Atribrui 28 dias para Fevereiro.
                days = 28;
                break;
        }

        //Exibe mensagem com o número de dias do mês fornecido.
        alert(
            "O mês " + n + " tem " + days + " dias."
        );
        //Para o loop principal.
        break;

    }else {

        //Exibe mensagem de erro se o número fornecido não estiver dentro do invertalo válido.
        alert(
            "Por favor, forneça um número válido entre 1 e 12."
        );
    }
}