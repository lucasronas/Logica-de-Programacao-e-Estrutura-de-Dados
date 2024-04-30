/* 
    Uma variável pode ter varios tipos de dados e alguns deles podem ser:
    
        º String = Texto;
        º Number = Número Inteiro ou Decimal;
        º Boolean = true ou false.
    Existe mais alguns outro tipos de dados, mas neste momento foi apresentado apenas esses três tipos.

    Alem disto tb temos os Operadores Aritméticos, que alguns deles são:

        º + Adição/Soma;
        º - Subtração;
        º * Multiplicação;
        º / Divisão;
        º % Resto da Divisão ou Módulo: Retorna o resto da divisão como inteiro.    
    Também existem outros, mas ate o momento estes foram apresentados.

    Para fazer a conversão de String para Number podemos utiliza as funções:

    Number(): Converte a String para qualquer número, seja inteiro, decimal ou float. Não pode ter uma letra se não vira NaN (Not a Number);
    parseInt(): Converte a String para número inteiro;
    parseFloat(): Converte a String para número decimal.
*/
let n1 = parseFloat(prompt("Digite o primeiro valor: "));
let n2 = parseFloat(prompt("Digite o segundo valor: "));
let soma = n1 + n2;

alert("Soma: " + soma);