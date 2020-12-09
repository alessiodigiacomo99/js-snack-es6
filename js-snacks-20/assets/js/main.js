/* Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */
const reverse = (parola) => {
    var parolaReverse = "";
    for (let i = 0; i < parola.length; i++) {
        let lettera = parola.charAt(i);
        parolaReverse = lettera + parolaReverse;
    }
    console.log(parolaReverse);
};
reverse("pippo");
