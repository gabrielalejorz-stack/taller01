numeros = [1, 2, 3, 2, 1, 4, 5, 3]
sin_duplicados = []
for i in range(len(numeros)):
    if numeros[i] not in sin_duplicados:
        sin_duplicados.append(numeros[i])
print("Arreglo original:", numeros)
print("Arreglo sin duplicados:", sin_duplicados)