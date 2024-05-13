//Variável contador.
let i = 0;

//Loop para pega o valor.
while (i == 0) {

    //Guardando o valor do usuário.
    let n = parseFloat(prompt("Digite um nota entre 0 e 10: "));

    //Checagem se a nota esta entre zero e dez.
    if (n > 0 && n < 10) {

        //Exibindo mensagem.
        alert("Nota guardada com sucesso!");
        i++
    } else {

        //Exibindo mesnagem.
        alert("Valor Invalido! Por favor, informe uma nota entre 0 e 10.");
    }

}