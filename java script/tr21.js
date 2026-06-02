let edad = prompt("Ingrese la edad");
if (edad >= 0 && edad <= 12) {
    alert("Niño");
} else if (edad >= 13 && edad <= 17) {
    alert("Joven");
} else if (edad >= 18 && edad <= 59) {
    alert("Adulto");
} else {
    alert("Adulto mayor");
}