//Contador.
let i = 0;

//Loop para ver se foi colocado um número ou letra.
while (i === 0) {

    //Guarda o valor do usuário.
    let n = parseFloat(prompt("Digite um número: "));

    //Checagem se é letra ou número.
    if (!isNaN(n)) {

        //Aumenta o contador.
        i++
        //Loop para fazer a tabuado ate o 1000.
        for (let j = 1; j <= 1000; j++){

            //Checagem se o contador "j" é divisivel por 10, se for ele coloca um linha para separar as dezenas.
            if (j % 10 === 0) {

                //Exibe com uma linha.
                document.write(n + " x " + j + ": " + (n * j) + "<hr>");
            } else {

                //Exibe quebra de linha.
                document.write(n + " x " + j + ": " + (n * j) + "<br>");
            }
        }

    } else {
        
        //Exibe mensagem.
        alert("Valor Invalido! Por favor, digite apenas números.");
    }

}