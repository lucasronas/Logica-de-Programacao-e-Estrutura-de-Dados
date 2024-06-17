//Variável do loop.
let i = 0;

//Loop.
while (i === 0) {

    //Variável que guarda o valor do usuário.
    let n = parseInt(prompt("Digite um número com três digitos: "));

    //Checando se foi digitado um número e se tem três digitos.
    if (
        !isNaN(n) && (n >= 100 && n <= 999)
    ) {

        //Incrementa a variável do loop.
        i++;

        //Variáveis para inverter cada casa.
        let centena = Math.floor(n / 100);
        let dezena = Math.floor((n % 100) / 10);
        let unidade = n % 10;
        let invert = (unidade * 100) + (dezena * 10) + centena;

        //Exibe mensagem.
        alert(
            "O número " + n + " invertido é " + invert
        );
    } else {

        //Exibe mensagem.
        alert(
            "Valor Invalido! Por favor, forneça apenas números e que tenha no máximo três digitos."
        );
    }
}