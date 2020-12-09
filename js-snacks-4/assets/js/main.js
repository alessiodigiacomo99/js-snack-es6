// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
const listaNomi = ["Piero", "Gianni", "Luca", "Giorgio", "Franco"];
const nome = prompt("Come ti chiami?");
const nomeCapitalized = nome.charAt(0).toUpperCase() + nome.slice(1);
let bool = false;
for(i = 0; i < listaNomi.length; i++){
    if(nomeCapitalized == listaNomi[i]){
        bool = true;
    }
}
if(bool){
    console.log("sei dentro");
}else{
    console.log("non sei dentro");
}