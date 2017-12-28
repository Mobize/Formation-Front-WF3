function conversion(){
    var somme    = prompt("Entrer la valeur en Euros :");
    var resultat = somme*6.55957;
    alert(somme + " Euros\n" + resultat + '  Francs');
}
conversion();

function convers(){
    var somme    = prompt("Entrer la valeur en Francs :");
    var resultat = somme/6.55957;
    alert(somme + "Francs\n" + resultat + ' Euros');
}
convers();