/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore. */
const listaBici = [
    uno = {
        nome: "biciUno",
        peso: 160
    },

    due = {
        nome: "biciDue",
        peso: 130
    },
    
    tre = {
        nome: "biciTre",
        peso: 100
    },
    
    quattro = {
        nome: "biciQuattro",
        peso: 130
    }
]

listaBici.forEach(bici => {
    let variabile = true;
    for (let i = 0; i < listaBici.length; i++){
        if (bici.peso > listaBici[i].peso ){
            variabile = false;
        }
    }
    if (variabile){
        console.log(bici);
    }
});