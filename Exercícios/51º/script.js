//Variável do loop.
let i = 0;

//Loop.
while (i === 0) {

    //Variáveis que guardam os valores fornecidos pelo usuário.
    let dS = parseFloat(prompt("Forneça a distância entre os semáforos (metros): "));
    let vP = parseFloat(prompt("Forneça a velocidade permitida da via (km/h): "));
    let aT = parseFloat(prompt("Forneça a aceleração típica do carro (m/s²): "));
    let tA = parseFloat(prompt("Forneça o tempo de antecipação do próximo semáforo (s): "));

    //Checando se o usuário forneceu apenas números ou letras.
    if (
        (!isNaN(dS)) && (!isNaN(vP)) && (!isNaN(aT)) && (!isNaN(tA))
    ) {

        //Incrementando a variável do loop.
        i++

        //Convertendo a velocidade de km/h por m/s.
        vP *= (1 / 3.6);

        //Calculando o tempo para atingir a velocidade máxima.
        let t1 = vP / aT;

        //Calculando a distância percorrida durante a aceleração.
        let d1 = (vP ** 2) / (2 * aT);

        //Variável do tempo total.
        let tTotal;

        //Checando se o vai atingir a velocidade máxima antes de chegar ao próximo semáforo.
        if (d1 < dS) {

            //Calculando a distância restante.
            let d2 = dS - d1;

            //Calculando o tempo para percorrer a distância restante.
            let t2 = d2 / vP;

            //Calculando o tempo total.
            tTotal = (t1 + t2) - tA;

            //Exibindo a mensagem.
            alert(
                "O próximo semáforo deve abir em "+ tTotal.toFixed(2) + " segundos."
            );

          //Caso o carro atinga a velocidade máxima antes de percorrer a distância total.
        } else {

            //Calculando o tempo total
            tTotal = dS / vP - tA;

            //Exibindo a mensagem.
            alert(
                "O próximo semáforo deve abrir em " + tTotal.toFixed(2) + " segundos."
            )
        }   
    
    } else {

        //Exibindo mensagem.
        alert(
            "Valor Invalido! Por favor, forneça apenas números."
        );
    }
}