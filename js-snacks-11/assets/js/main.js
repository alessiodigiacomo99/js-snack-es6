/* Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati. */

const listaNomi = ["Piero", "Luca", "Gianni", "Mario"];
const listaCognomi = ["Todi", "Digiovanni", "Franco", "Desì"];
const listaFalsa = [];
for (let i = 0; i < listaNomi.length && i < listaCognomi.length; i++){
    let nomeFalso = listaNomi[Math.floor(Math.random() * listaNomi.length)] + " " + listaCognomi[Math.floor(Math.random() * listaCognomi.length)];
    listaFalsa.push(nomeFalso);
}
console.log(listaFalsa);