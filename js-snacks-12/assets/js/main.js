/* Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */
const arrayNumeri = [];
for (let i = 0; i < 10; i++) {
    let nRandom = Math.floor(Math.random() * i);
    if (!arrayNumeri.includes(nRandom)){
        arrayNumeri.push(nRandom);
    }   
}
let somma = 0;
for (let j = 0; j < arrayNumeri.length; j++){
    if (j % 2 !== 0){
        somma += arrayNumeri[j];
    }
}
console.log(arrayNumeri);   
console.log(somma);