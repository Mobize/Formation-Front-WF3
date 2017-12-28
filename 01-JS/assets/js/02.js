// -- Déclarer un tableau indexé
var monTableau = [];
var myArray    = new Array;

// -- Affecter des valeurs à un tableau indexé
monTableau[0] = "Marie-Pierre";
monTableau[1] = "Hugo";
monTableau[2] = "Hamid";

// -- Afficher le contenu de mon tableau dans la console.
console.log(monTableau[1]); // -- Hugo
console.log(monTableau[2]); // -- Hamid
console.log(monTableau); // -- Afficher toute les données.

// -- Déclarer et affecter des valeurs à un tableau indexé.
var NosPrenoms = ["Marie-Pierre","Thomas","olivier","Cloé","Riad","Hugo"];
console.log(NosPrenoms);

// -- Déclarer et affecter des valeurs à un Objet
// -- Pas de tableau associatif en JS !!!!!!!!
var Coordonnee = {
    prenom: "Hugo",
    nom   : "LIEGEARD",
    age   : 28
};
console.log(Coordonnee);
console.log( typeof Coordonnee);

// -- jE VAIS CREER 2 TABLEAUX indexés
var ListeDePrenoms = ["Hugo","Marie-Pierre","Lounis","Romain"];
var ListeDeNoms    = ["LIEGEARD","DUPOUX","DGADEN","ELIE"];

// -- Je vais créer un tableau à 2dimansions à partir de mes 2 tableaux precedents
var Annuaire = [ ListeDePrenoms, ListeDeNoms ];
console.log(Annuaire);

// -- Hugo LIEGEARD
console.log(Annuaire[0][0]);
console.log(Annuaire[1][0]);

// -- Exercice
var Prenoms =["Olivier","Hamid","Greg"];
var Noms    =["Charpentier","Kezzal","Malaud"];
var Tel     =["01","02","03"];

var AnnuaireDesStagiaires = [ Prenoms,Noms,Tel]
console.log(AnnuaireDesStagiaires);

console.log(AnnuaireDesStagiaires[0][1])// = Hamid
console.log(AnnuaireDesStagiaires[1][1])// = Kezzal
console.log(AnnuaireDesStagiaires[0][0])// = Olivier
console.log(AnnuaireDesStagiaires[1][0])// = Charpentier

// -- Correction:
var AnnuaireDesStagiaires=[
    { prenom : "Hugo", nom : "LIEGEARD" , tel : '0783971515'}, 
    { prenom : "Chloé", nom : "THUILLIER" , tel : 'BBXXXXXX'}, 
    { prenom : "Anis", nom : "CHAHBANI" , tel : '1245789'}, 
];

console.log(AnnuaireDesStagiaires);
console.log(AnnuaireDesStagiaires[1]);
console.log(AnnuaireDesStagiaires['prenom']);
console.log(AnnuaireDesStagiaires[1].prenom);



// -- Exemple de Tableau 4D

var Contacts = [

    {
        prenom      : "Hugo",
        nom         : "LIEGEARD",
        coordonnees : {
                        email   : "wf3@hl-media.fr",
                        adresse : {
                                    ville   : "Ducos",
                                    cp      : 97224,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 108 328",
                                    fax     : "0596 108 632",
                                    port    : "0783 97 15 15"
                                  }
                      }
    },
    {
        prenom      : "Rodrigue",
        nom         : "NOUEL",
        coordonnees : {
                        email   : "wellcommunication.net@gmail.com",
                        adresse : {
                                    ville   : "Fort-de-France",
                                    cp      : 97200,
                                    region  : "Martinique",
                                    pays    : "France"
                                  },
                        tel     : {
                                    fixe    : "0596 XXX XXX",
                                    fax     : "0596 XX XX XX",
                                    port    : "0696 07 04 34"
                                  }
                      }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.tel.port);
console.log(Contacts[1].coordonnees.tel.port);

// -- Ajouter un élément

var couleurs = ['rouge','jaune','vert'];

/* Si je souhaite ajouter un élément dans mon tableau.
je fais appel à la fonction push qui me renvoi le nombre d'élément d
e mon tableau; que je peux recuperer facultativement  dans un variable.*/

console.log(couleurs);
var nombreElementDansMonTableau = couleurs.push('orange');
console.log(couleurs);
console.log(nombreElementDansMonTableau);

/* 
    NB : La fonction unshift() permet d'ajouter un ou plusieurs éléments
    en debut de tableau
*/

/* Recuperer et sortir le dernier element*/
/* La fonction pop() permet de supprimer le dernier element
de mon tableau et d'en recuperer la valeur
La meme chose est possible avec le premier element en
utilisant la fonction shift()

NB: la fonction splice() permet de faire sortir un ou plusieurs éléments de
notre tableau.*/

var monDernierElement = couleurs.pop();
console.log(monDernierElement);
console.log(couleurs);

