/* Scrivi una funzione per stabilire se un numero è primo.
Chiedi un numero all’utente e utilizza la funzione per
comunicargli se il numero inserito è primo oppure no. */
var insertNumber = Number(prompt("inserisci un numero e ti dirò se è primo"));

let primo = (numero => {
    for(var i = 2; i < numero; i++){
        var bool = true;
        if (numero % i == 0){
            bool = false;
            break;
        }
    }if (bool || numero == 2){
        console.log("è primo");
    }else if (!bool){
        console.log("non è primo");
        
    }
});
primo(insertNumber);