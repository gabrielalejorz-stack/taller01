ingresos=float(input("ingrese sus ingresos"))
if ingresos<=1500000:
    impuesto=0
elif ingresos<=3000000:
    impuesto=ingresos *0.10
else:
    ingresos>=3000000
impuesto=ingresos *0.20

neto=ingresos-impuesto
print("\n--- Resultado ---")
print(f"Salario: ${salario:,.0f}")
print(f"Impuesto: ${impuesto:,.0f}")
print(f"Salario neto: ${neto:,.0f}")