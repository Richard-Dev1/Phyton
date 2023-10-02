# Chiedi all'utente di inserire due valori
# valore1 = input("Inserisci il primo valore: ")
# valore2 = input("Inserisci il secondo valore: ")

import sys 
valore = sys.argv][1]
valore = sys.argv][2]

# Verifica se entrambi i valori sono numeri
if valore1.isnumeric() and valore2.isnumeric():
    # Entrambi i valori sono numeri, quindi esegui la moltiplicazione
    risultato = int(valore1) * int(valore2)
    print("Il risultato della moltiplicazione è:", risultato)
# Verifica se almeno uno dei valori è un numero
elif valore1.isnumeric() or valore2.isnumeric():
    # Uno dei valori è una stringa e l'altro è un numero
    print("Pesto misto")
else:
    # Entrambi i valori sono stringhe, quindi esegui la concatenazione
    risultato = valore1 + valore2
    print("La concatenazione delle due stringhe è:", risultato)
