//Variável do contador/ano.
let ano = 0;

//Loop do ano bissexto.
while (ano <= 2024) {

    //Se o ano não for 0, for divisível por 4 e não divisível por 100, ou se for divisível por 400, então ele é considerado bissexto
    if (
        (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0) && (ano != 0)
    ) {

        //Exiba o ano bissexto na tela, pule uma linha e aumente o contador em 4.
        document.write("Ano Bissexto: " + ano + "<br>");
        ano += 4;
    } else {

        //Aumente o contador em 4 e continue o loop, sem exibir o ano na tela.
        ano += 4;
        continue;
    }
}

/*
Utilizando o loop "for".

for (let ano = 0; ano <= 2024; ano += 4) {

    if (
        (ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0) && (ano != 0)
    ) {

        document.write("Ano Bissexto: " + ano + "<br>");
    } else {

        continue;
    }
}

Utilizando o "do...while"

let ano = 0;

do {

    if (
        (ano % 4 == 0 && ano != 0) || (ano % 400 == 0) && (ano != 0)
    ) {

        document.write("Ano Bissexto: " + ano + "<br>");
        ano += 4;
    } else {

        ano += 4;
        continue;
    }
} while (ano <= 2024)

*/