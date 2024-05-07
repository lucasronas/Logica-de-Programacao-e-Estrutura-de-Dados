/*
    Condicionais é uma estrutura de controle que permite a tomada de decisões ocm base em condições específicas, que são avaliadas como verdadeiras (true) ou falsas (false). Nesta aula foi falado sobre a condicional "switch...case" que sua estrutura é mostrado a baixo:

        switch (expressão) {

            case 1:
                executa o bloco de instruções;
                break;
            
            case 2 :
                executa o bloco de instruções;
                break;

            default:
                executa quando o valor da expressão é diferente de todos os cases;
        }    
*/
let n = prompt("Digite um número de 0 a 6: ");

switch (n) {

    case "0":

        console.log("Domingo!");
        break;    
    case "1":

        console.log("Segunda-feira!");
        break;
    case "2":

        console.log("Terça-feira!");
        break; 

    case "3":

        console.log("Quarta-feira!");
        break;
    case "4":

        console.log("Quinta-feira!");
        break;
    case "5":

        console.log("Sexta-feira!");
        break;
    case "6":

        console.log("Sábado!");
        break;
    default:
        
        console.log("Valor Invalido! Por favor, informe apenas números de 0 a 6.");
}