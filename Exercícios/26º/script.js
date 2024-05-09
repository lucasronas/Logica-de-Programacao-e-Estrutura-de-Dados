//Guardando o valor do usuário e criando o contador.
let n = parseFloat(prompt("Digite um número: "));
let i = 0;

//Loop para executar pelo menos uma vez.
do {

    document.write("Número par: " + i + "<br>");
    i += 2;
} while (i <= n)