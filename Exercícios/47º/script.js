//Variável do loop.
let i = 0;

//Loop para checar.
while (i === 0) {

    //Variável que guarda o número do usuário.
    let n = parseInt(prompt("Digite um número menor que 32: "));

    //Checando se digitou um número ou letra.
    if (
        !isNaN(n) && n < 32 && n >= 0
    ) {

        //Incrementando a variável do loop.
        i++;
        
        //Conversão.
        let b = n.toString(2);

        //Exibe mensagem.
        alert(
            "A conversão de " + n + " para bináro e de " + b
        );

    } else {

        //Exibindo mensagem.
        alert(
            "Valor Invalido! Por favor, digite um número."
        );
    }
}