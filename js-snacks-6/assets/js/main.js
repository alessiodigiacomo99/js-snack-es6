// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

let numeroN = Number(prompt("Inserisci numero"));
for(let i = 1; i <= numeroN; i++){
    let cubo = Math.pow(i, 3);
    console.log(cubo);
}