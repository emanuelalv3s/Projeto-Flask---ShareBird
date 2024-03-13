from sqlalchemy import create_engine

faturamento = 1000

texto1 = f'o faturamento foi de: {faturamento}'

texto2 = "O faturamento foi de: {}".format(faturamento)
#ambas as formas apresentam o mesmo resultado, porém na linguagem de integracao com HTML
#apenas o segundo formato do texto2 funciona
print(texto1)
print(texto2)
