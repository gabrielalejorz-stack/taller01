let lado1 = prompt("Ingrese el primer lado");
let lado2 = prompt("Ingrese el segundo lado");
let lado3 = prompt("Ingrese el tercer lado");
if (lado1 == lado2 && lado2 == lado3) {
    alert("El triángulo es equilátero");
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    alert("El triángulo es isósceles");
} else {
    alert("El triángulo es escaleno");
}