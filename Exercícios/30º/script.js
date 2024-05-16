//Contadores.
let i = 0;
let tent = 0;

//Loop.
while (i < 10) {

    //Contador de quantasa vezes foram jogados;
    tent++;
    //Número aleatoria dos dois dados.
    let d1 = Math.round(Math.random() * 5) + 1;
    let d2 = Math.round(Math.random() * 5) + 1;
    //Soma dos valores dos dados
    let soma = d1 + d2;
    
    //Checagem se a soma é par
    if (soma % 2 === 0) {

        //Exibe os dados e sua soma.
        console.log(
            (i + 1) + "º Par" + "\nDados: " + d1 + ", " + d2 + "\nSoma: " + soma
        );
        //Contador do loop while.
        i++;
    }
        
}

//Exibe as quantidades de vezes que foram jogadas.
console.log("Foram " + tent + " vezes.");


//Utilizando o "break".
/*
let i = 0;
let j = 0;

while (true) {

    j++
    let d1 = Math.round(Math.random() * 5) + 1; 
    let d2 = Math.round(Math.random() * 5) + 1;
    let soma = d1 + d2;

    if (soma % 2 === 0) {
        console.log(
            (i + 1) + "º Par" + "\nDados: " + d1 + ", " + d2 + "\nSoma: " + soma
        )
        i++;
    }

    if (i >= 10) {
        break;
    }
}

console.log("Foram jogados " + j + " vezes.");
*/