//Loop.
for(i = 0; i <= 2024; i += 4) {

    //Checagem de ano bissexto.
    if (
        (i % 4 === 0 && i % 100 != 0) || (i % 400 === 0)
    ) {

        //Exibe a mensagem mostando o ano bissexto
        document.write(
            "Ano Bissexto: " + i + ".<br>"
        );
    }

    //Continua o loop caso não seja bissexto.
    continue;
}