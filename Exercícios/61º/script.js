//Variável do loop.
let i = 0;
//Variável da quantidade que foi jogada os dados.
let j = 0; 

while (i < 10) {

    //Variáveis dos dados.
    let d1 = Math.round(Math.random() * 5) + 1;
    let d2 = Math.round(Math.random() * 5) + 1;
    
    //Incrementa a variável da quantidade de vezes que foi rolada.
    j++;

    //Variável para somar o resultado os dados.
    let soma = d1 + d2;

    //Checagem se a soma dos dado deu par.
    if (soma % 2 === 0) {

        //Incrementa a variável do loop, até chega em 10.
        i++        
    }
}

//Exibe mensagem da quantidade de vezes que foi rodado os dados.
alert(
    "Foram jogados " + j + " vezes."
);