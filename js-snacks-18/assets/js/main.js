const squadre = [
    {
        nome: "sampdoria",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "inter",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "sassuolo",
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: "spal",
        puntiFatti: 0,
        falliSubiti: 0
    }
];
/* Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti */
for(let i = 0; i < squadre.length; i++){
    squadre[i].puntiFatti = Math.floor(Math.random() * 100);
    squadre[i].falliSubiti = Math.floor(Math.random() * 20);
    console.log(squadre[i].nome, squadre[i].puntiFatti, squadre[i].falliSubiti);
}
