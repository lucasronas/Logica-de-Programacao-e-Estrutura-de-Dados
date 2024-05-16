//Contadores.
let i = 0;
let j = 0;

//Loop.
while (i < 10) {
    
    //Variáveis que guarda o valor dos dados rolados.
    let d1 = Math.round(Math.random() * 5) + 1;
    let d2 = Math.round(Math.random() * 5) + 1;
    
    //Checa se os valores dos dados são iguais.
    if ( d1 === d2) {

        //Se for igual apenas continua rolando os dados.
        continue;
    } else {

        //Contador de quantas vezes foram jogado os dados, caso não seja igual os valores dos dados.
        j++;
        //Soma os valores.
        let soma = d1 + d2;

        //Checa se a soma dos valores da um número par.
        if (soma % 2 === 0) {

            //Exibe os valores dos dados e sua soma.
            console.log(
                (i + 1) + "º Par" + "\nDados: " + d1 + ", " + d2 + "\nSoma: " + soma
            );
            //Contador do loop while.
            i++
        }
    }
}

//Exibe quantas vezes foram nescessário
console.log("Foram nescessário " + j + " vezes."); 

//Utilizando o break e continue.
/*
let i = 0;
let j = 0;

while (true) {
    
    let d1 = Math.round(Math.random() * 5) + 1;
    let d2 = Math.round(Math.random() * 5) + 1;

    if (d1 === d2) {

        continue;
    } else {

        j++;
        let soma = d1 + d2;

        if (soma % 2 === 0) {

            console.log(
                (i + 1) + "º Par" + "\nDados: " + d1 + ", " + d2 + "\nSoma: " + soma
            );           
            i++
        }

        if (i >= 10) {

            break;
        }
    }

}

console.log("Foram nescessário " + j + " vezes."); 
*/