// Pedir los tres números
let a = Number(prompt("Ingrese el primer número:"));
let b = Number(prompt("Ingrese el segundo número:"));
let c = Number(prompt("Ingrese el tercer número:"));
if (a <= b && a <= c) {
    if (b <= c) {
        alert("Orden ascendente: " + a + ", " + b + ", " + c);
    } else {
        alert("Orden ascendente: " + a + ", " + c + ", " + b);
    }
} else if (b <= a && b <= c) {
    if (a <= c) {
        alert("Orden ascendente: " + b + ", " + a + ", " + c);
    } else {
        alert("Orden ascendente: " + b + ", " + c + ", " + a);
    }
} else {
    if (a <= b) {
        alert("Orden ascendente: " + c + ", " + a + ", " + b);
    } else {
        alert("Orden ascendente: " + c + ", " + b + ", " + a);
    }
}