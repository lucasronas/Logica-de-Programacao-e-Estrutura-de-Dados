// Inicializa o contador.
let i = 0;

// Inicia o primeiro loop.
while (i == 0) {

    // Solicita ao usuário que digite um número.
    let n = parseFloat(prompt("Digite um número qualquer: "));

    // Verifica se o valor digitado é um número.
    if (!isNaN(n)){

        // Incrementa o contador para sair do loop.
        i++;

        // Inicia um loop para calcular a tabuada do número até 1000.
        for (let j = 0; j <= 1000; j++){

            // Exibe na tela o resultado da multiplicação do número pelo índice do loop.
            document.write(n + " x " + j + ": " + (n * j) + "<br>");
        }

    } else {

        // Exibe uma mensagem de alerta se o valor digitado não for um número.
        alert("Valor Inválido! Por favor, digite apenas números.");
    }
}
