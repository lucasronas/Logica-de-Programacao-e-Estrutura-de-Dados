//Variável do loop.
let i = 0;

//Loop para checar se o usuário digitou valor number.
while (i === 0) {

    //Variáveis que vão guarda o valor de cada lado do triângulo.
    let l1 = parseFloat(prompt("Forneça o valor do primero lado do triângulo: "));
    let l2 = parseFloat(prompt("Forneça o valor do segundo lado do triângulo: "));
    let l3 = parseFloat(prompt("Forneça o valor do terceiro lado do triângulo: "));

    //Checando se foi digitado valor number.
    if (
        !isNaN(l1) && !isNaN(l2) && !isNaN(l3)
    ) {

        //Incrementa a variável do loop.
        i++

        //Calculando o perímetro do triângulo.
        let perim = l1 + l2 + l3;

        //Exibindo o resultado.
        alert(
            "Perímetro do triângulo: " + perim + " m"
        );
    } else {

        //Exibindo mensagem para o usuário fornecer apenas valores number.
        alert(
            "Valor Invalido! Por favor, digite apenas números."
        );
    }
}