

function entrer(){
    //prenom
    var Prenom = prompt("Quel est ton Prénom ?");
    // age
    var Age = prompt("Bonjour " + Prenom + ", Quel age as-tu ?");
    var Annee = 2017 - Age;
    alert("Tu est donc né en " + Annee);
    document.write("Bonjour " + Prenom + ", tu as " + Age + "ans!")
}
entrer();

//1.Initialisation des variables
    var dateObj       = new Date();
    var anneeActuelle = dateObj.getFullYear();
//2.Creation d'une fonction
      // 2a. je demande à l'utilisateur son prénom
    function Hello() {
        let prenom = prompt("Hello ! What is your name ?","saisir votre prénom");
    console.log(prenom);
    console.log(typeof prenom); 

     // 2b. Je lui demande son age
    let Age= parseInt (prompt("Hello " + prenom + "How old are you ?" , "saisir votre age"));
    console.log(Age);
    console.log(typeof Age);   

    // 2c. Déduire l'année de naissance, et l'afficher dans une "alert".
    alert("Amazing ! So you were born in " + (anneeActuelle - Age) + "!" );

    // 2d. J'affiche tout ça dans la page (recapitulatif)
    document.write("<br>Hello " + prenom + " it's Amazing! you're " + Age + "years old !");
}
//3. Execution de la fonction    
    Hello();