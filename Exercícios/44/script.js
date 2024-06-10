//Variável do loop.
let i = 0;

//Loop que checa se foi digitado um número ou letra.
while (i === 0) {

    //Variável que guarda o valor do usuário.
    let d = parseFloat(prompt("Digite sua idade me dias: "));

    //Checando se foi digitado um número ou letra.
    if (!isNaN(d)) {

        //Incrementa a variável do loop.
        i++

        //Variáveis que guardam o a idade do usuário em meses e anos.
        let a = Math.round(d / 365.25);
        let m = Math.round(d / 30.44);

        //Exibindo o resultado.
        alert(
            "Você tem " + a + " anos, " + m + " meses e " + d + " dias de idade"
        );
    } else {

        //Exibindo mensagem para o usuário digitar apenas número.
        alert(
            "Valor Invalido! Por favor, digite apenas números."
        );
    }
}