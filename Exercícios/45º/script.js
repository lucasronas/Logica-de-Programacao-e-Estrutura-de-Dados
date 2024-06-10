//Variável do loop.
let i = 0;

//Loop.
while (i === 0) {

    //Variável que guarda o valor do usuário.
    let f = parseFloat(prompt("Digite a temperatura atual (Fahrenheit): "));

    //Checagem.
    if (!isNaN(f)) {

        //Incrementa a variável do loop.
        i++;

        //Convertendo para Fahrenheit.
        let c = (f - 32) * (5 / 9);

        //Exibindo resultado.
        alert(
            "Temperatura em Fahrenheit: " + f + "ºF\nTemperatura convetida para Celsius: " + c.toFixed(2) + "ºC"
        );
    } else {

        //Exibi mensagem para o usuário fornecer apenas números.
        alert(
            "Valor Invalido! Por favor, digite apenas números."
        );
    }
}