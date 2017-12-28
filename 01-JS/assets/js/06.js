// LES FONCTIONS

// Declarer une fonction
// Cette fonction ne retourne aucune valeur

function ditBonjour() {
    //Lors de l'appel de cette fonction, les instructions ci-dessous seront executées..
    alert("Bonjour !");
}

/*Je vais appeler ma fonction "ditBonjour" et declencher ses instrcutions.*/

ditBonjour();

// declarer une fonction qui prend une variable en parametre
function Bonjour(Prenom, Nom){
    document.write("<p>Bonjour <strong>" + Prenom +"" + Nom + "</strong>!<p>");
}

// appeler / utiliser une fonction avec des parametres
Bonjour("Olivier","Charpentier");

function addition(nb1,nb2){
    return nb1 + nb2;
}

document.write("<p>" + addition (10,5) + "<p>");

