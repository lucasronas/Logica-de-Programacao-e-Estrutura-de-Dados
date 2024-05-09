//As variáveis "d1" e "d2" são os dados que vão começar com um valor aleatorio de 1 e 6, como se já tivesse rolado os dados.
let d1 = Math.round(Math.random() * 5) + 1;;
let d2 = Math.round(Math.random() * 5) + 1;;
//A variável "cont" serve para contar quantas vezes foram rolado os dados, começando com 1 pois os dados começam com um valor, como se ele já tivessem rolados.
let cont = 1;

//Loop onde se os dados forem diferentes roda-os novamente até que sejam iguais.
while (d1 !== d2) {

    //Rolando até sair igual.
    d1 = Math.round(Math.random() * 5) + 1;
    d2 = Math.round(Math.random() * 5) + 1;
    //Adiciona +1 na variável sempre que o loop for verdadeiro.  
    cont++; 
}

//Exibindo a quantidade de roladas que foram necessárias e o valor dos dados.
alert("Foi necessário " + cont + " vezes.\nDado 1: " + d1 + "\nDado 2: " + d2);