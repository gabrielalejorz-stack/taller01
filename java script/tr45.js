let numeros = [10, 8, 6, 9, 7];
let suma = 0;
let i = 0;
while (i < numeros.length) {
    suma = suma + numeros[i];
    i = i + 1;
}
let promedio = suma / numeros.length;
alert("El promedio es: " + promedio);