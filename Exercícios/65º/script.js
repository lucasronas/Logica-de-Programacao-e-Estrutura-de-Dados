//Varíavel contador.
let contador = 0;

while (true) {

    //Variáveis dos dados de seis faces.
    let d1 = Math.round(Math.random() * 5) + 1;
    let d2 = Math.round(Math.random() * 5) + 1;

    //Incrementa o contador depois que os dados são jogados.
    contador++;

    //Checando se os valores dos dados se repetiram.
    if(d1 === d2) {

        //Exibe a mensagem mostrando quantas vezes foram nescessario jogar os dados é quais são os números repetidos.
        document.write(
            "Números Sorteados: " + d1 + ", " + d2 + "<br>Foram nescessario " + contador + " vezes."
        );
        //Para o loop.
        break;
    }
}