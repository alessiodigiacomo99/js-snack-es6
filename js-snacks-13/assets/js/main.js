/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

const arrayUno = ["franco", "piero", "paolo", "gianni", "marco", "luca", "giovanni"];

const arrayDue = ["francoDue", "pieroDue", "paoloDue"];
const differenza = Math.abs(arrayUno.length - arrayDue.length);
for (let i = 0; i < differenza; i++){
    let indiceCasualeUno = Math.floor(Math.random() * arrayUno.length);
    let indiceCasualeDue = Math.floor(Math.random() * arrayDue.length);
    if (arrayUno.length < arrayDue.length){
        arrayUno.push(arrayDue[indiceCasualeDue]);
    }else if (arrayUno.length > arrayDue.length){
        arrayDue.push(arrayUno[indiceCasualeUno]);
    }else{
        console.log("Hanno la stessa lunghezza");
    }

}
console.log(arrayDue);
console.log(arrayUno);