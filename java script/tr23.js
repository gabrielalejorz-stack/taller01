salario_base = float(input("Ingrese el salario base: "))
horas_extra = int(input("Ingrese la cantidad de horas extra: "))

normal (suponiendo 240 horas al mes)
valor_hora = salario_base / 240

 extra (1.5 veces la hora normal)
valor_hora_extra = valor_hora * 1.5

 extra
pago_horas_extra = horas_extra * valor_hora_extra

 total
salario_total = salario_base + pago_horas_extra

resultados
print("Salario base:", salario_base)
print("Pago por horas extra:", pago_horas_extra)
print("Salario total:", salario_total)