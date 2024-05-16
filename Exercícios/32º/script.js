//Varíavel que guarda o número sorteado/aleatório.
let n;

//Loop que percorre os números de 0 a 100
for (let i = 0; i <= 100; i++) {

    //Gera um número aleatório entre 1 a 100.
    n = Math.round(Math.random() * 99) + 1;

    //Verifica se i é multiplo de 10.
    if (i % 10 === 0) {

        //Se i for múltiplo de 10, continua o loop.
        continue;        
    }

    //Verifica se o i é divisivel por n, que é o número sorteado.
    if (i % n === 0) {

        //Exibe a mensagem mostrando que o loop foi interrompido.
        document.write("Interrompido, pois o número " + i + " é divisível pelo número " + n);

        //Interrompe o loop
        break;
    }
    
    //Exibe o número na tela, se i não for múltiplo de 10 nem divisível por n.
    document.write("Número: " + i + "<br>");    
}