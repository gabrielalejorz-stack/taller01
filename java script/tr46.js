let numeros = [10, 15, 20, 3];
let pares = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        pares++;
    }
}
console.log(pares);