// Variáveis que guardaram os números fornecidos pelo usuário.
let number_1 = null;
let number_2 = null;
let number_3 = null;

// Loop para pedir que o usuário forneça três números.
for (let i = 0; i < 3;) {

    // Variável que pega o número do usuário.
    let n = parseFloat(prompt("Por favor, digite o " + (i + 1) + "º número: "));

    // Checando se foi fornecido um número ou não.
    if (!isNaN(n)) {

        // Checando se é possível a variável guardar o número.
        if (number_1 === null) {
            number_1 = n; // Variável guarda o número fornecido pelo usuário
        } else if (number_2 === null) {
            number_2 = n;
        } else {
            number_3 = n;
        }

        // Incrementa a variável do loop.
        i++;
    } else {
        // Exibe mensagem de erro.
        alert("Valor Inválido! Por favor, forneça um número válido.");
    }
}

// Variável que checa qual o maior número e guarda ele.
let aux = Math.max(number_1, number_2, number_3);

// Exibe os três números e mostra o maior deles.
alert(
    "Você digitou os números: " + number_1 + ", " + number_2 + ", " + number_3 + "\nO maior número é: " + aux
);