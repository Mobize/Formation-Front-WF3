/* LES BOUCLES */

// La boucle FOR
// pour i = 1 ; tant que i <= strictement inferieur ou égale à 10 ; alors j'incremente i de 1.
for(let i = 1 ; i<= 10 ; i++){
    document.write("<p>Instruction executée : <strong>" + i + "</strong><p>")
}

document.write("<hr>");
var j = 1;
while(j <=10){
    document.write("<p>Instruction executée : <strong>" + j + "</strong><p>");
    // Attention à ne pas oublier l'incrementation!
    j++;
}

// supposons le tableau suivant:
var Prenoms = ['jean','Marc','Matthieu','Luc','Pierre','Paul','Hugo']
for(let i = 0 ; i<7 ; i++){
    document.write(Prenoms[i]);
}

for(let i = 0 ; i< Prenoms.length ; i++){
    console.log(Prenoms[i]);
}

console.log('---t');
var h = 0;
while(h<Prenoms.length){
    console.log(Prenoms[h]);
    h++;
}

console.log('---');
//Meme exercice avec la boucle foreach
// Attention à la performance!!

Prenoms.forEach(affichePrenoms);

function affichePrenoms(prenom, indice){
    console.log(prenom);
}
// https://benhollis.net/blog/2009/12/13/investigating-javascript-array-iteration-performance/
// https://leftshift.io/4-javascript-optimisations-you-should-know