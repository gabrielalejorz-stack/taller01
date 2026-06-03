let n = Number(prompt("¿Cuántos números va a ingresar?"));
let positivos = 0;
let i = 1;
while (i <= n) {
    let numero = Number(prompt("Ingrese un número:"));

    if (numero > 0) {
        positivos = positivos + 1;
    }

    i = i + 1;
}
alert("Cantidad de números positivos: " + positivos);