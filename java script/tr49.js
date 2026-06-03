let numeros = [1, 2, 3, 4, 5];
let invertido = [];
let i = numeros.length - 1;
let j = 0;
while (i >= 0) {
    invertido[j] = numeros[i];
    i = i - 1;
    j = j + 1;
}
alert("Arreglo original: " + numeros);
alert("Arreglo invertido: " + invertido);