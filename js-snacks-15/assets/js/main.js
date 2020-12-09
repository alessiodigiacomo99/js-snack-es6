let palla = {
    nome : "palla",
    peso : 10
}
/* Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.  */
let pesoNuovo = Number(prompt("modifica il peso"));
palla.peso = pesoNuovo;
console.log(palla.peso);