// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
let array = [];
for (let i = 0; i < 6; i++) {
    let numero = Number(prompt("inserisci numero"))
    if(numero % 2 !== 0){
        array.push(numero);
    }
}
console.log(array);