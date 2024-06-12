//Variável do loop.
let i = 0;

//Loop para checar.
while (i === 0) {

    //Variáveis que guardam os valores das notas dos dois bimestres.
    let n1 = parseFloat(prompt("Digite a 1º nota do 1º bimestre: "));
    let n2 = parseFloat(prompt("Digite a 2º nota do 1º bimestre: "));
    let n3 = parseFloat(prompt("Digite a 1º nota do 2º bimestre: "));
    let n4 = parseFloat(prompt("Digite a 2º nota do 2º bimestre: "));

    //Checando se foi digitado um número ou letra.
    if (
        !isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(n4)
    ) {

        //Incrementa a variável do loop.
        i++;

        //Calculando os bimestre e semestre.
        let b1 = (n1 + n2) / 2;
        let b2 = (n3 + n4) / 2;
        let s = (b1 + b2) / 2;

        //Exibe mensagem.
        document.write(
            "Nota dos Bimestres: <br> 1º Bimestre: " + b1 + "<br> 2º Bimestre: " + b2 + "<br> Nota do Semestre: " + s
        )
    } else {

        //Exibe mensagem.
        alert(
            "Valor Invalido! Por favor, digite apenas números para suas notas."
        );
    }
}