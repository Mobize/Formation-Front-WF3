var PremierTrimestre = [
    {
        nom     :"Liegeard",
        prenom  : "Hugo",
        moyenne : {
                 francais  : 15,
                 anglais   : 16,   
        }
    },
    {
        nom     :"Charpentier",
        prenom  : "Olivier",
        moyenne : {
                mathematiques : 12,
                 histoire     : 15,   
        }
    },
    {
        nom     :"Renard",
        prenom  : "Eric",
        moyenne : {
                geographie  : 17,
                eps         : 16,
        }
    },
    {
        nom     :"Fretur",
        prenom  : "Jean",
        moyenne : {
                 dessin     : 13,
                 langues    : 17,    
        }
    },
    {
        nom     :"Dutret",
        prenom  : "Cedric",
        moyenne : {
                vocabulaire     : 17,
                 grammaire      : 19,  
        }
    }
]


function w (ceciestunparametredemafonction){
    document.write(ceciestunparametredemafonction);
}

function l(e){
    console.log(e);
}

l(PremierTrimestre);

w("<ol>");

// JE SOUHAITE AFFICHER LA LISTE DE MES ETUDIANTS.
for(let i = 0 ; i < PremierTrimestre.length ; i++){

    // on recupère l'objet etudiant de l iteration (la boucle)
    let Etudiant = PremierTrimestre[i];

    //Apperçu dans la console
    l(Etudiant);

    // ici mes variables seront remises à zéro à chaque nouvel étudiant
    //(tour de boucle = iteration)
    var nombredematiere = 0, sommedesnotes = 0;

    // Afficher le prenom et le nom d'un étudiant
    w("<li>");
         w(Etudiant.prenom + " " + Etudiant.nom );
        // afficher la moyenne de l'etudiant aux differentes matieres
        w("<ul>")
        for(let matiere in Etudiant.moyenne){
            l(matiere);
            l(Etudiant.moyenne[matiere])

            nombredematiere++;
            sommedesnotes += Etudiant.moyenne[matiere]; // equivaut à sommedesnotes + Etudiant.moyenne[matiere] =

            w("<li>");
                w( matiere + " : " + Etudiant.moyenne[matiere])
            w("</li>");
        }// Fin de la boucle matière
        w("<li>");
            w("<strong>Moyenne Générale : </strong>" + (sommedesnotes / nombredematiere).toFixed(2));
        w("</li>");
        w("</ul>")
    w("</li><br>");
}// Fin de la boucle Etudiant
w("</ol>");
