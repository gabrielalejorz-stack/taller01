let compra = prompt("Ingrese el valor de la compra");
if (compra >= 100000) {
    let descuento = compra * 0.10;
    let total = compra - descuento;
    alert("Tiene descuento.\nTotal a pagar: " + total);
} else {
    alert("No tiene descuento.\nTotal a pagar: " + compra);
}