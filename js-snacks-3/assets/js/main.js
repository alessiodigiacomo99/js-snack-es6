// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while

/* let sommaNumeri = 0;
for (let i = 0; i < 5; i++) {
    let numero = Number(prompt("Inserisci numero"));
    sommaNumeri += numero;
}
console.log(sommaNumeri); */
let sommaNumeri = 0;
let i = 0;
while (i < 5){
    let numero = Number(prompt("Inserisci numero"));
    sommaNumeri += numero;
    i++;
};
console.log(sommaNumeri);