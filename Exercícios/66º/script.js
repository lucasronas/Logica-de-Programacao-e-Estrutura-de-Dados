//Variável que guarda o número pedido do usuário.
let n = parseFloat(prompt("Digite qualquer número: "));

//Loop da tabuada de 1 até 1000.
for (i = 0; i <= 1000; i++){

    //Divisoria a cada mudança da dezena.
    if (i % 10 === 0 && i != 0) {

        document.write(
            n + " x " + i + ": " + (n * i) + "<hr>"
        );
        continue;
    }

    document.write(
        n + " x " + i + ": " + (n * i) + "<br>"
    );
}
