//Guarda o valor do usuário.
let fahre = parseFloat(prompt("Quantos graus esta fazendo (Fahrenheit): "));

//Calculando para Celsius.
let celsius = ( (fahre - 32) * (5 / 9) ).toFixed(1);

//Exibindo a conversão.
alert(
    "Temperatura fornecida: " + fahre + "°F\nTemperatura convertida para Celsius: " + celsius + "°C"
)