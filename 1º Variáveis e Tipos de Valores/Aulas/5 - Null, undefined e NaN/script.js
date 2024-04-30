/*
    Como foi dito em aulas anteriores existem mais tipos de dados alem do String, Number e Boolean, e alguns outros são:

        º Null: Nulo ou Vazio;
        º Undefined: Quando a variável esta vazia, quando ela esta sem nem um valor armazenado dentro dela;
        º NaN: Not-a-Number (Não é um Númbero).
    

    Também foi mostrado algumas maneiras de converter os tipos de dados, como:

        º Converter para Number: Number(), parseInt() e parseFloat();
        º Converter para String: String() e .toString();
        º Converter para Boolean: Boolean() e ! <-- esse sera falo melhor daqui a algumas aulas.
    
    Para saber qual o tipo da variável, do valor que ela guarda utiliza o operador "typeof" que retorna um string falando qual o tipo armazenado nela.
    
    Exemplo: let x = 10
             console.log(typeof x)
*/
let x = 10;
let a = 1
let n = "ola";
let l = true;
let nulll = null;
let unde;

//Conversões.
x = parseInt(x);
console.log(x);

x = Boolean(x);
console.log(x);

x = String(x);
console.log(x);

//Typeof
console.log(typeof a);
console.log(typeof n);
console.log(typeof l);
console.log(typeof nulll); // Erro de implementação do javascript
console.log(typeof unde);