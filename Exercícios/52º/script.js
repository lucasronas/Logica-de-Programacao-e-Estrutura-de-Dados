//Variável do loop.
let i = 0;

//Loop.
while (i === 0) {

    //Variáveis que guardam os valores do usuário.
    let h = parseFloat(prompt("Digite sua altura: "));
    let cSombraPredio = parseFloat(prompt("Digite o comprimento da sombra do prédio: "));
    let cSombraPessoa = parseFloat(prompt("Digite o comprimento da sua sombre: "));

    //Checando se o usuário digitou números ou letras.
    if (
        (!isNaN(h)) && (!isNaN(cSombraPessoa)) && (!isNaN(cSombraPredio)) 
    ) {

        //Incrementando a variável do loop.
        i++;

        //Calculando a altura do prédio.
        let hPredio = (h * cSombraPredio) / cSombraPessoa;

        //Exibindo mensagem.
        alert(
            "A altura do prédio é de " + hPredio + " metros."
        );
    } else {

        //Exibindo mensagem.
        alert(
            "Valor Invalido! Por favor, forneça apenas números."
        );
    }
}