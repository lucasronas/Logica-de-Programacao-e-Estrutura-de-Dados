// Variáveis que irão guardar os números fornecidos pelo usuário.
let number_1 = null;
let number_2 = null;
let number_3 = null;

// Variáveis que guardam o maior e o segundo maior número.
let maior_1 = null;
let maior_2 = null;

// Variável que irá fazer a soma.
let soma = 0;

// Loop para pegar o número fornecido pelo usuário e armazená-lo nas três variáveis criadas.
for (let i = 0; i < 3;) {

    // Variável que pega o número fornecido pelo usuário para depois guardar nas variáveis.
    let n = parseFloat(prompt("Por favor, digite o " + (i + 1) + "º número: "));

    // Checando se o valor fornecido pelo usuário é um número ou não.
    if (!isNaN(n)) {

        // Checando se a variável number_1 é null para poder atribuir o número fornecido pelo usuário.
        if (number_1 === null) {
            // Atribui o valor de n em number_1.
            number_1 = n;
        } else if (number_2 === null) {
            // Atribui o valor de n em number_2.
            number_2 = n;
        } else {
            // Atribui o valor de n em number_3.
            number_3 = n;
        }

        // Incrementa a variável para poder acabar o loop.
        i++;

    } else {
        // Exibe mensagem de erro.
        alert("Valor Inválido! Por favor, forneça apenas números válidos.");
    }
}

// Checando quais são os dois maiores números dos três.
if ((number_1 > number_2 && number_1 > number_3)) {

    // Guarda o maior número.
    maior_1 = number_1;
    // Pega e guarda o segundo maior número.
    maior_2 = Math.max(number_2, number_3);

} else if (number_2 > number_1 && number_2 > number_3) {

    maior_1 = number_2;
    maior_2 = Math.max(number_1, number_3);

} else {
    
    maior_1 = number_3;
    maior_2 = Math.max(number_1, number_2);
}

// Soma os dois maiores números.
soma = maior_1 + maior_2;

// Exibe mensagem mostrando os dois maiores números e a soma deles.
alert(
    "Os dois maiores números são " + maior_1 + " e " + maior_2 + ", a soma destes números é de " + soma + "."
);
