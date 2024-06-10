//Variável do loop;
let i = 0;

//Loop para que fica checando se o usuário forneceu um número.
while (i === 0) {

    //Lado do quadrado fornecido pelo usuário.
    let l = parseFloat(prompt("Forneça o valor do lado do quadrado: "));

    //Checando se foi fornecido um número.
    if (!isNaN(l)){
        
        //Incrementa a variável para sair do loop.
        i++;

        //Calculando a área e o perímetro.
        let area = l ** 2;
        let perim = 4 * l;

        //Exbindo o resultado.
        alert("Perímetro do quadrado: " + perim + "cm\nÁrea do quadrado: " + area + "cm²");
    } else {

        alert("Valor Invalido! Por favor, apenas forneça números.");
    }
}