/*
  Loops são laços de repetições que servem para executar um bloco de código específico repetidamente até que a sua condição seja falsa, em quanto ele for verdadeira o loop ira continuar.
  
  Nesta aula foi falada sobre o "do...while", que é um laço de repetição bem parecido com o "while", só que ele executa ao menos uma vez mesmo que na primeira vez a condição seja falsa, como é mostrado a baixo:

    do{
        executa o bloco pelo menos uma vez, mesmo que seja falso a condição;
    } while(condição)
*/
let d1 = Math.round(Math.random() * 5) + 1;
let d2 = Math.round(Math.random() * 5) + 1;
let cont = 1;

do {
    
    d1 = Math.round(Math.random() * 5) + 1;
    d2 = Math.round(Math.random() * 5) + 1;
    cont++;
} while (d1 !== d2)

alert("Foi necessário " + cont + " vezes.\nDado 1: " + d1 + "\nDado 2: " + d2);