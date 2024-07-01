//Variável do loop.
let i = 0;


//Loop;
while (i === 0) {

    //Variável que armazena o valor do usuário.
    let n = parseFloat(prompt("Digite qualquer número: "));

    //Checagem para ver se foi digitado número.
    if (!isNaN(n)){

        //Incrementa a variável do loop.
        i++;
        //Variável que guarda se é positivo, negativo ou neutro.
        let aux;

        //Checagem se foi digitado valor positivo, negativo ou neutro.
        if (n > 0) {

            //Se o número for maior que 0, é positivo.
            aux = "positivo";

        } 
        else if (n < 0) {

            //Se o número for menor que 0, é negativo.
            aux = "negativo";
        } 
        else {

            //Se o número for igual a 0, é neutro.
            aux = "neutro";
        }

        //Exibe mensagem mostrando se é positivo, negativo ou neutro.
        alert(
            "O número " + n + " é u número " + aux + "."
        );

    } else {

        //Exibe mensagem de erro.
        alert(
            "Valor Invalido! Por favor, digite apenas números."
        );
    }
}
