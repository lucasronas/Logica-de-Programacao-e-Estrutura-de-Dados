//Base e altura fornecidas pelo usuário.
let altura = parseFloat(prompt("Forneça o valor da altura do retângulo: "));
let base = parseFloat(prompt("Forneça o valor da base do retângulo: "));


//Calculando a área e o perímetro.
let area = altura * base;
let perim = 2 * (altura + base);

//Exibindo o resultado.
alert("Área do retângulo: " + area + "\nPerímetro do retângulo: " + perim);