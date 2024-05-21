// Inicializa o contador i e j.
let i = 0;
let j = 0;

// Inicia o loop enquanto i for igual a 0.
while (i == 0) {

    // Gera dois números aleatórios entre 1 e 6.
    let d1 = Math.round(Math.random() * 5) + 1;
    let d2 = Math.round(Math.random() * 5) + 1;

    // Incrementa o contador j para registrar a quantidade de tentativas.
    j++;

    // Verifica se os dois números aleatórios são iguais.
    if (d1 == d2) {

        // Exibe no console a mensagem informando quantas vezes foram necessárias para sair um par de números repetidos, juntamente com os números.
        console.log("Foram necessárias " + j + " vezes para sair um par de números repetidos.\n" + d1 + ", " + d2);

        // Sai do loop, pois encontrou um par de números iguais.
        i++;
    }
}