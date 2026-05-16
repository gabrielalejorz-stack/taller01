valor_compra = float(input("Ingrese el valor de la compra: "))

if valor_compra >= 100000:
    descuento = valor_compra * 0.10
    total_pagar = valor_compra - descuento
    print(f"Se aplica un descuento del 10%. Total a pagar: {total_pagar}")
else:
    print(f"No hay descuento. Total a pagar: {valor_compra}")