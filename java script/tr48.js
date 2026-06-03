let numeros = [5, 2, 9, 1, 6];
let i = 0;
let j = 0;
let aux;
while (i < numeros.length) {
    j = 0;

    while (j < numeros.length - 1) {

        if (numeros[j] > numeros[j + 1]) {
            aux = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = aux;
        }

        j = j + 1;
    }

    i = i + 1;
}
alert("Arreglo ordenado: " + numeros);