//Guarda o valor do usuário.
let celsius = parseFloat(prompt("Quantos graus estão fazendo (Celsius): "));

//Calculando para Fahrenheit.
let fahre = ( (celsius * (9 / 5) ) + 32).toFixed(1);

//Exibindo a conversão.
alert(
    "Temperatura fornecida: " + celsius + "°C\nTemperatura convertida para Fahrenheit: " + fahre + "°F"
);