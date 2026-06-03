let numeros = [5, 12, 8, 20, 3];
let mayor = numeros[0];
let i = 1;
while (i < numeros.length) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
    i = i + 1;
}
alert("El número mayor es: " + mayor);