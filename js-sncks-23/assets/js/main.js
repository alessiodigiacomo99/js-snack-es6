/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al
massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che
hanno la posizione compresa tra “a” e “b” */
let newArray = ((array, a, b) => {
    if (array.length >= b && b > a){
        let arrayNuova = array.slice(a, b);
        console.log(arrayNuova);
    }
});

arrayA = ["p", "n", "q", "l", "a", "b", "c", "d"];
numeroUno = 6;
numeroDue = 1;
newArray(arrayA, numeroDue, numeroUno);