// Loop que itera de 0 a 100
for (let i = 0; i <= 100; i++) {

    // Sorteia um número de 1 a 100
    let n = Math.round(Math.random() * 99) + 1;

    // Se i é múltiplo de 10, pula para a próxima iteração do loop
    if (i % 10 == 0) {
        continue;
    }

    // Se i é divisível por n, escreve uma mensagem e sai do loop
    if (i % n == 0) {
        document.write("Parado, pois o número " + i + " é divisível por " + n);
        break;
    }

    // Escreve o valor de i
    document.write("Número: " + i + "<br>");
}
