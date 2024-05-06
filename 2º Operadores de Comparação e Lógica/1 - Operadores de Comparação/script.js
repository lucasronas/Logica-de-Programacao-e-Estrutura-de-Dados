/*
    Existem varios operadores de comparação que podem ser utilizados, que são:

        º == Igualdade (valor);
        º === Igualdade (valor e tipo);
        º != Diferente (valor);
        º !== Diferente (valor e tipo);
        º > Maior;
        º >= Maior ou Igual à;
        º < Menor;
        º <= Menor ou Igual à.
*/
let n1 = 2;
let n2 = 3;
let n3 = 3;
let t = "2";

console.log(n1 == n2);
console.log(n2 == n3);
console.log(n2 === n3);
console.log(n1 === t);
console.log(n1 != n2);
console.log(n1 != t);
console.log(n2 !== n3);
console.log(n1 !== t);
console.log(n1 !== n2);
console.log(n1 > n2);
console.log(n2 >= n3);
console.log(n1 < n2);
console.log(n1 <= t);