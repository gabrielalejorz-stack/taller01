numeros = [4, 7, 10, 3, 8, 5]
contador = 0
for numero in numeros:
    if numero % 2 == 0:
        contador += 1
print("Cantidad de números pares:", contador)