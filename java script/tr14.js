let num1 = prompt("Ingrese el primer número");
let num2 = prompt("Ingrese el segundo número");
let num3 = prompt("Ingrese el tercer número");
if (num1 >= num2 && num1 >= num3) {
    alert("El mayor es el primer número: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    alert("El mayor es el segundo número: " + num2);
} else {
    alert("El mayor es el tercer número: " + num3);
}