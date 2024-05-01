//Guardando o valor do usuário.
let money = parseFloat(prompt("QUanto de dinheiro você tem: "));

//Checando se tem dinheiro para compra combustível.
if (money >= 5) {
    
    //Calculando.
    let comb = money / 5;
    let km = 20 * comb;

    //Exibindo a mensagem.
    alert(
        "Dinheiro fornecido: R$" + money + "\nLitros de combustível compravel: " + comb + "L\nKilometos que anda: " + km + "km"
    );

} else {

    //Avisando que não consegue comprar combustível.
    alert(
        "Dinheiro insuficiente para compra de combustível! \nMínimo R$ 5.00."
    );
}