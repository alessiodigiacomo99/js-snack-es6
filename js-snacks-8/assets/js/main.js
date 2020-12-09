// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

const numero = (prompt("inserisci numero di 4 cifre"));
let somma = 0
for(let i = 0; i < 4; i++){
    let numeriSingoli = Number(numero.charAt(i));
    somma += numeriSingoli; 
}
console.log(somma);