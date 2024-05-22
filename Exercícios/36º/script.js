// Inicializa a variável i com valor 0.
let i = 0;  

// Inicia um loop while que continua enquanto i for igual a 0.
while (i == 0) {

    // Pede ao usuário para digitar um número.
    let n = parseFloat(prompt("Digite um número: "));  

    // Verifica se a entrada do usuário é um número.
    if (!isNaN(n)){  
        
        // Incrementa i, saindo do loop while.
        i++;  

        // Inicia um loop for que vai de 0 até 1000.
        for (let j = 0; j <= 1000; j++) {  

            // Verifica se j é múltiplo de 10 e maior que 0.
            if (j % 10 == 0 && j > 0) {  

                // Se verdadeiro, escreve a multiplicação seguida de uma linha horizontal.
                document.write(i + " x " + j + ": " + (i * j) + "<hr>")  
            } else {

                // Se falso, escreve a multiplicação seguida de uma quebra de linha.
                document.write(i + " x " + j + ": " + (i * j) + "<br>")  
            }

        }

    } else {

        // Se a entrada do usuário não for um número, exibe um alerta informando que o valor é inválido.
        alert("Valor Invalido! Por favor, digite apenas número.");  
    }
}
