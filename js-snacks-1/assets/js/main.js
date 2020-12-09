// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
const uno = Number(prompt("Inserisci il primo numero"));
const due = Number(prompt("Inserisci il secondo numero"));

if(uno > due){
    console.log(uno);
}else if(due > uno){
    console.log(due);
}else{
    console.log("pari")
}