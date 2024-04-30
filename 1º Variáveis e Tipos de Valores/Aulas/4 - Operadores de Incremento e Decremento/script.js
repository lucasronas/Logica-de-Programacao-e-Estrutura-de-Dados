/*
    O operadores de incremento de decremento são apenas quatros, os número 1º e 2º mostra a ordem de precedência dos operadores:

        º ++ Incremento pós fixado: x++; 1º
        º -- Decremento pós fixado: x--; 1º
        º ++ Incremento pré fixado: ++x; 2º
        º -- Decremento pré fixado: --x; 2º
*/
let x = 10;

++x;
console.log(x);
x++;
console.log(x);

--x;
console.log(x);
x--;
console.log(x);