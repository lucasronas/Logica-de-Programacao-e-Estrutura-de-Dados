//Variável do loop.
let i = 0;

//Loop para checar se o usuário digitou um número ou letra.
while (i === 0) {

    //Variáveis que guardam o valor do usuário.
    let n1 = parseInt(prompt("Digite o primeiro número: "));
    let n2 = parseInt(prompt("Digite o segundo número: "));

    //Checando se foi digitado um número ou letra.
    if (
        !isNaN(n1) && !isNaN(n2)
    ) {

        //Incrementa a variável do loop.
        i++;

        //Exibindo o quociente e o resto da divisão.
        alert(
            "Valores fornecidos: " + n1 + ", " + n2 + "\nQuociente: " + (n1 / n2) + "\nResto da divisão: " + (n1 % n2)
        );
    } else {

        //Exibindo mensagem para o usuário digitar apenas números.
        alert(
            "Valor Invalido! Por favor, digite apenas números."
        );
    }
}