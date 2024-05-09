/*
  Loops são laços de repetições que servem para executar um bloco de código específico repetidamente até que a sua condição seja falsa, em quanto ele for verdadeira o loop ira continuar.
  
  Nesta aula foi falada sobre o "while", que é um laço de repetição que executa um bloco de código específico enquanto a condição for verdadeira, como é mostrado a baixo:

    while (condição){
        executa o bloco até que a condição seja falsa;
    }
*/
let n = parseFloat(prompt("Digite um número: "));
let contador = 0;


while(contador <= 1000) {

    //Serve para mostra na tela. (NÃO É UTILIZADO EM AMBIENTE DE TRABALHO, ESTA SENDO USADO AQUI PARA DIDÁTICA PARA APRENDER LÓGICA.)
    document.write(n + " x " + contador + ": " + n * contador + "<br>");
    contador++;
}