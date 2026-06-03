let n = Number(prompt("Ingrese el tamaño del arreglo:"));
let numeros = [];
let suma = 0;
let i = 0;
while (i < n) {
    let aleatorio = Math.floor(Math.random() * 10) + 1; // números del 1 al 10
    numeros[i] = aleatorio;
    suma = suma + aleatorio;
    i = i + 1;
}
alert("Los números del arreglo son: " + numeros);
alert("La suma de los elementos es: " + suma);