//Guarda o valor do usuário.
let l = prompt("Digite uma letra: ").toLocaleLowerCase();

//Checando se foi digitado uma letra.
if (isNaN(l)) {

    //Checando se foi digitado uma vogal ou consoante.
    if (
        l == "a" || l == "e" || l == "i" || l == "o" || l == "u"
    ) {
        
        //Exibindo a mensagem.
        alert("Você digitou uma vogal '" + l + "'");
    
    } else {    
        
        //Exibindo a mensagem.
        alert("Você digitou uma consoante '" + l + "'");    
    }
} else {

    alert("Valor Invalido! Por favor, forneça uma letra.");
}