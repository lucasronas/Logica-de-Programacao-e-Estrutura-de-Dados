//Variável do loop.
let i = 0;

//Loop.
while (i === 0) {

    //Variável que guarda o valor do usuário.
    let ms = parseInt(prompt("Digite sua velocidade em m/s: "));

    //Checagem.
    if (!isNaN(ms)){

        //Incrementa a variável do loop.
        i++;

        //Convertendo para km/h.
        let kmh = ms * 3.6;

        //Exibe mensagem.
        alert(
            "A velocidade de " + ms + " m/s são de " + kmh + " km/h."
        );
    } else {

        //Exibe mensagem.
        alert(
            "Valor Invalido! Por favor, forneça apenas números."
        );
    }
}