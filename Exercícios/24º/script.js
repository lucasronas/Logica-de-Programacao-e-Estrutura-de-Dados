//Variáveis;
let n;
let cont1 = 1;
let cont2 = 0;

//Loop para checar se o usuário digitou uma número ou letra.
while (cont1 < 2){

    //Guardando o valor do usuário.
    n = parseFloat(prompt("Digite um número: "));
    
    if (!isNaN(n)) {
        
        //Loop da tabuada de 1000.
        while (cont2 <= 1000) {

            //Exibindo.
            document.write(n + " x " + cont2 + ": " + (n * cont2) + "<br>");
            cont2++;
        }
        cont1++;
        
    } else {

        //Exibindo mensagem.
        alert("Valor Invalido! Por favor, digite apenas número.");
    }
}