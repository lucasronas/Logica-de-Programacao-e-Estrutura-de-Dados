//Variável do loop.
let i = 0;

//Loop para checar.
while (i === 0) {

    //Variáveis que guardam o valor do volume e do raio.
    let r = parseFloat(prompt("Digite o raio da lata: "));
    let a = parseFloat(prompt("Digite a altura da lata: "));
    
    //Checando se digitou número ou letra.
    if (
        !isNaN(r) && !isNaN(a)
    ) {

        //Incrementa a variável do loop.
        i++;

        //Calculando.
        let v = Math.PI.toFixed(2) * (r ** 2) * a;

        //Exibindo resultado.
        alert(
            "O volume da lata de óleo é de " + v.toFixed(2)
        );
    } else {

        //Exibi mensagem para o usuário.
        alert(
            "Valor Invalido! Por favor, forneça apenas números."
        );
    }
}