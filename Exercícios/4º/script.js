//Guarda o valor do usuário.
let r = parseFloat(prompt("Digite o raio do círculo: "));

//Calculos.
let area = (Math.PI * (r ** 2) ).toFixed(2);
let peri = (2 * Math.PI * r).toFixed(2);

//Exibindo o perímetro e a área do círculo.
alert(
    "Raio fornecido: " + r + "\nPerímetro do Círculo: " + peri + "\nÁrea do Círculo: " + area
);