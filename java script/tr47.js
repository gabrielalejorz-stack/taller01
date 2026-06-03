let numeros = [5, 12, 8, 20, 3];
let buscar = 8;
let encontrado = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] == buscar) {
        console.log("Número encontrado en la posición:", i);
        encontrado = true;
    }
}

if (encontrado == false)
    console.log("El número no existe en el arreglo");