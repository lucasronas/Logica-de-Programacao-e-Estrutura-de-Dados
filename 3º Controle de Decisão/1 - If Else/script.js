/*
    Condicionais é uma estrutura de controle que permite a tomada de decisões ocm base em condições específicas, que são avaliadas como verdadeiras (true) ou falsas (false). Nesta aula foi falado sobre a condicional "if...else" que sua estrutura é mostrado a baixo:

    if (condicional) {
        executa esse bloco caso a condicional for verdaderia.
    } else {
        executa esse bloco caso a condicional for falsa.
    }

    Também tem o "else if", que é usado para adicionar mais uma condição na estrura do "if...else" permitindo múltiplas condições em sequencias, estrutura mostrado a baixo:

    if (condicional) {
        executa esse bloco caso a condicional for verdaderia.

    } else if (condicional 2) {
        executa esse bloco caso a condicional for verdadeira. Ele não é executado caso a sua condicional não for cumprida ou caso o primeiro if seja executado. 

    } else {
        executa esse bloco caso a condicional for falsa.
    }
*/
let n1 = parseFloat(prompt("Digite a primeira nota: "));
let n2 = parseFloat(prompt("Digite a segunda nota: "));
let n3 = parseFloat(prompt("Digite a terceira nota: "));
let n4 = parseFloat(prompt("Digite a quarta nota: "));

//Calculando.
let media = (n1 + n2 + n3 + n4) / 4;

if (media === 10) {

    console.log("Aprovado por Distinção!");
} else if (media >= 7 && media < 10) {

    console.log("Aprovado!");
} else {

    console.log("Reprovado!");
}