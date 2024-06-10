//Variável do loop.
let i = 0;

//Loop para checar se o usuário digitou valor number.
while (i === 0) {

    //Variável que guarda o valor do raio da circunferência.
    let r = parseFloat(prompt("Forneça o valor do raio da circunferência: "));

    //Checando se foi digitado um valor number ou não.
    if (!isNaN(r)) {

        //Incrementa a variável do loop.
        i++;

        //Calculando a área e o perímetro.
        let area = Math.PI.toFixed(2) * (r ** 2);
        let perim = 2 * Math.PI.toFixed(2) * r;

        //Exibindo o resultado.
        alert("Área da circunferência: " + area.toFixed(2) + "cm²\nPerímetro da circunferência: " + perim.toFixed(2) + "cm");

    } else {

        //Exibindo aviso para o usuário digitar apenas números.
        alert("Valor Invalido! Por favor, forneça apenas números.");
    }
}