/* Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo */
const numero = Number(prompt("inserisci un numero"));
if (numero % 2 == 0){
    console.log(numero);
}else {
    console.log(numero + 1);
}