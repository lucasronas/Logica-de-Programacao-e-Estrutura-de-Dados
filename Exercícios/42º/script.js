//Variável do loop.
let i = 0;

//Loop para checar se foi digitado number.
while (i === 0) {

    //Variável que guarda o valor fornecido pelo usuário.
    let n = parseInt(prompt("Digite um número: "));

    //Checando se foi digitado um número ou letra.
    if (!isNaN(n)) {

        //Incrementa a variável do loop.
        i++;

        //Exibindo o seu sucessor.
        alert(
            "O sucessor de " + n + " é " + (n + 1)
        )

    } else {

        //Exibindo mensagem para usuário digitar apenas números.
        alert(
            "Valor Invalido! Por favor, digite apenas números."
        );
    }
}