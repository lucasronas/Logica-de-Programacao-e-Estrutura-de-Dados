//Loop para fazer ate o ano de 2024.
for (let ano = 0; ano <= 2024; ano += 4) {

    //Checagem para ver sé o ano é bissexto.
    if (
        (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0) && (ano > 0)
    ) {
        
        //Exibe o ano sé for bissexto.
        document.write("Ano Bissexto: "+ ano + "<br>")        
    }
}