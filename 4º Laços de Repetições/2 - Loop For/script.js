/*
  Loops são laços de repetições que servem para executar um bloco de código específico repetidamente até que a sua condição seja falsa, em quanto ele for verdadeira o loop ira continuar.
  
  Nesta aula foi falada sobre o "for", cria um laço de repetição que consiste em três expressões opcionais dentro de parênteses e separadas por ponto e vírgula, como mostrado a baixo:
  
    for([inicialização]; [condição]; [expressão final]){
        executa o bloco ate que a condição seja falsa.
    }
*/
let n = parseFloat(prompt("Digite um número: "));

if (!isNaN(n)){

    for (let i = 0; i <= 1000; i++){

        document.write(n + " x " + i + ": " + (n * i) + "<br>");
    }

} else {

    alert("Valor Invalido! Por favor, digite apenas números.");
}