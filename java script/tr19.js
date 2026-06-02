let salario = prompt("Ingrese su salario");
let impuesto = 0;
if (salario < 1500000) {
    impuesto = 0;
} else if (salario <= 3000000) {
    impuesto = salario * 0.10;
} else {
    impuesto = salario * 0.20;
}
let neto = salario - impuesto;
alert(
    "Salario: " + salario +
    "\nImpuesto: " + impuesto +
    "\nSalario neto: " + neto
);