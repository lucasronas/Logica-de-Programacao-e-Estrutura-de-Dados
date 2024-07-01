let i = 0;

//Loop.
while (i === 0) {

    //Variável que recebe e guarda o valor do usuário.
    let valor = parseInt(prompt("Digite a quantidade que deseja sacar: "));

    //Checagem se o usuário digitou número ou não.
    if (!isNaN(valor)) {

        i++;

        //Variáveis de cada nota.
        let n_1 = 0;
        let n_2 = 0;
        let n_5 = 0;
        let n_10 = 0;
        let n_20 = 0;
        let n_50 = 0;
        let n_100 = 0;

        //Variável para armazenar o valor restante do saque.
        let saque = valor;

        //Loop do saque das notas.
        while (saque > 0) {

            //Verifica se é possível sacar notas de 100.
            if (saque >= 100) {

                //Armazena quantas notas ele ira sacar.
                n_100 = Math.floor(saque / 100);
                //Pega o resto do valor para continuar sacando notas.
                saque = saque % 100;
            }
            //Verifica se é possível sacar notas de 50.
            else if (saque >= 50) {

                n_50 = Math.floor(saque / 50);
                saque = saque % 50;
            }
            //Verifica se é possível sacar notas de 20.
            else if (saque >= 20) {

                n_20 = Math.floor(saque / 20);
                saque = saque % 20;
            }
            //Verifica se é possível sacar notas de 10.
            else if (saque >= 10) {

                n_10 = Math.floor(saque / 10);
                saque = saque % 10;
            }
            //Verifica se é possível sacar notas de 5.
            else if (saque >= 5) {
                
                n_5 = Math.floor(saque / 5);
                saque = saque % 5;
            } 
            //Verifica se é possível sacar notas de 2.
            else if (saque >= 2) {

                n_2 = Math.floor(saque / 2);
                saque = saque % 2;
            } 
            //Verifica se é possível sacar notas de 1.
            else if (saque >= 1) {

                n_1 = Math.floor(saque / 1);
                saque = saque % 1;
            }
        }

        //Exibe mensagem do saque.
        alert(
            "Saque de " + valor + " reais\nNotas de 100: " + n_100 + "\nNotas de 50: " + n_50 + "\nNotas de 20: " + n_20 + "\nNotas de 10: " + n_10 + "\nNotas de 5: " + n_5 + "\nNotas de 2: " + n_2 + "\nNotas de 1: " + n_1
        );

    } else {
        //Exibe mensagem de erro e pede novamente o valor.
        alert("Valor Inválido! Por favor, digite apenas números.");
    }
}
