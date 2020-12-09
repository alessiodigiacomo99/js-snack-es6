// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
const parolaUno = prompt("Inserisci la prima parola");
const parolaDue = prompt("Inserisci la seconda parola");

if(parolaUno.length < parolaDue.length){
    console.log(parolaUno);
    console.log(parolaDue);
}else if(parolaUno.length > parolaDue.length){
    console.log(parolaDue);
    console.log(parolaUno);
}else{
    console.log("le parole hanno la stessa lunghezza");
}
