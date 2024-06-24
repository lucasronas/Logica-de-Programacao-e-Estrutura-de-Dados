// Variável do loop.
let i = 0;

// Loop principal.
while (i === 0) {

    // Variável que guarda o valor do usuário.
    let saque = parseInt(prompt("Quanto quer sacar? "));

    // Checagem se o usuário digitou um número válido.
    if (!isNaN(saque)){

        // Incrementa a variável do loop principal.
        i++;

        // Variáveis para contar cada tipo de nota.
        let nota_1 = 0;
        let nota_2 = 0;
        let nota_5 = 0;
        let nota_10 = 0;
        let nota_20 = 0;
        let nota_50 = 0;
        let nota_100 = 0;

        // Variável para armazenar o valor restante do saque durante os cálculos das notas.
        let resto = saque;

        // Loop interno para calcular as notas necessárias para o saque.
        while (resto > 0) {

            // Verifica se é possível usar notas de 100.
            if (resto >= 100) {

                // Calcula quantas notas de 100 são necessárias.
                nota_100 = Math.floor(resto / 100); 
                // Calcula o restante após usar as notas de 100.
                resto = resto % 100; 

            } 
            // Verifica se é possível usar notas de 50.
            else if (resto >= 50) {
                nota_50 = Math.floor(resto / 50);
                resto = resto % 50;
                
            }
            // Verifica se é possível usar notas de 20.  
            else if (resto >= 20) { 
                nota_20 = Math.floor(resto / 20);
                resto = resto % 20;

            } 
            // Verifica se é possível usar notas de 10.
            else if (resto >= 10) {
                nota_10 = Math.floor(resto / 10);
                resto = resto % 10;

            } 
            // Verifica se é possível usar notas de 5.
            else if (resto >= 5) {
                nota_5 = Math.floor(resto / 5);
                resto = resto % 5;

            } 
            // Verifica se é possível usar notas de 2.
            else if (resto >= 2) {
                nota_2 = Math.floor(resto / 2);
                resto = resto % 2;

            } 
            // Verifica se é possível usar notas de 1.
            else if (resto >= 1) {
                nota_1 = Math.floor(resto / 1);
                resto = resto % 1;
            }
        }

        // Exibe um alerta com a quantidade de cada nota utilizada no saque.
        alert(
            "Notas de 100: " + nota_100 + "\nNotas de 50: " + nota_50 + "\nNotas de 20: " + nota_20 + "\nNotas de 10: " + nota_10 + "\nNotas de 5: " + nota_5 + "\nNotas de 2: " + nota_2 + "\nNotas de 1: " + nota_1
        );

    } else {

        // Exibe mensagem de erro se o usuário não digitou um número válido.
        alert(
            "Valor Inválido! Por favor, digite apenas números."
        );
    }
}
