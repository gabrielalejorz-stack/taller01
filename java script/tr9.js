// Pedir los valores
let valor1 = prompt("Ingrese el primer valor");
let valor2 = prompt("Ingrese el segundo valor");

// Mostrar antes
alert("Antes del intercambio:\nValor 1 = " + valor1 + "\nValor 2 = " + valor2);
let aux = valor1;
valor1 = valor2;
valor2 = aux;
alert("Después del intercambio:\nValor 1 = " + valor1 + "\nValor 2 = " + valor2);