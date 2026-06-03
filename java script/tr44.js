let numeros = [5, 2, 9, 1, 6];
let menor = numeros[0];
let i = 1;
while (i < numeros.length) {

    if (numeros[i] < menor) {
        menor = numeros[i];
    }

    i = i + 1;
}
alert("El número menor es: " + menor);