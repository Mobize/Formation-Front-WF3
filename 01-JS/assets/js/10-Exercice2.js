
// LES FLEMARD.JS

function w (ceciestunparametredemafonction){
    document.write(ceciestunparametredemafonction);
}

function l(e){
    console.log(e);
}

var PremierTrimestre = [
    {
        prenom  : "Hugo",
        moyenne : {
                 francais  : 15,
                 anglais   : 16,   
        }
    },
    {
        prenom  : "Olivier",
        moyenne : {
                mathematiques : 12,
                 histoire     : 15,   
        }
    },
    {
        prenom  : "Eric",
        moyenne : {
                geographie  : 17,
                eps         : 16,
        }
    },
    {
        prenom  : "Jean",
        moyenne : {
                 dessin     : 13,
                 langues    : 17,    
        }
    },
    {
        prenom  : "Cedric",
        moyenne : {
                vocabulaire     : 17,
                 grammaire      : 19,  
        }
    }
]






function afficheMoyenne(){



console.log(PremierTrimestre);
    document.write("<ul>");

    for(let i = 0 ; i<PremierTrimestre.length ; i++){

        document.write("<li>" + PremierTrimestre[i].prenom + "</li>");

        document.write("<ul><li> Moyenne Francais" + PremierTrimestre[i].moyenne.francais + "</ul>" )

    }
    
    document.write("<ul>");


}

afficheMoyenne();











