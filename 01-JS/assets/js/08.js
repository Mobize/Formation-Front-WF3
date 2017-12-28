/*//LES CONDITIONS
var majoriteLegalFR = 18;

if(19 >= majoriteLegalFR){
    alert("Bienvenue !");
}
// Le else n'est pas OBLIGATOIRE.
else{
    alert("Google");
}

function bienvenue(){
    var majoriteLegalFR = 18;
    var age = prompt("Quel est ton age ?");
    if(age>= majoriteLegalFR){
        alert("Bienvenue");
    }
    else{
        alert("Vous n'avez pas l'age")
        document.location.href="http://www.google.fr";
    }
}
bienvenue();


   //1-Declarer la majorité légale:
    var majoriteLegalFR = 18;

   // 2-Creer une fonction pour demander son age:
   // SI l'age de l'utilisateur passé en parametre en superieur ou égale
   // à la majorité légale, alors la fonction retourne vrai.
   //sinon elle retourne faux.
   // @param{Int}age
   // @return{Boolean}

    function verifierage(age){
        if(age >= majoriteLegalFR){
           return true;
        }else{
            return false;
        }
    }

    //3-Demander à l'utilisateur son age:
    var age = parseInt(prompt("Bonjour, quel age avez-vous?","saisissez votre age"));

    //4-Verification de l'age de l'utilisateur
    if(verifierage(age)){
        
    //4a- J'affiche un message de bienvenue:
    alert("Bienvenue sur mon site internet reservé pour les majeurs")    
    }
    else{
     //4b- J'effectue une redirection:   
     document.location.href="http://www.google.fr";
    }

/*LES OPERATEURS DE COMPARAISON

    L'operateur de comparaison " == " signifie : Egal à
    Il permet de verifier que 2 variables sont identiques.

    L'operateur de comparaison " === " signifie:
    strictement egal à. Il va comparer la valeur et le type de donnée.

    L'operateur de comparaison " != " signifie different de.

    L'operateur de comparaison " !== " signifie strictement diferent de.
*/

/*function acces(){
    var email = "wf3@hl-media.fr";
    var mdp = "wf3";
    var logemail = prompt("entrer votre email:  " );
    var logmdp = prompt("Entrez votre mot de passe: ");
    if(logemail = email){
        alert("Bienvenue");
    }
    if(logmdp = mdp){
        alert("Bienvenue");
    }
    else{
        alert("erreur");
    }
      
}
acces();*/


//correction

/*var email, mdp;
var email = "wf3@hl-media.fr";
var mdp = "wf3";

//1-Demander à l'utilisateur son email
var emailuser = prompt ("Bonjour quel est votre email");

//2-Je verifie si l'email saisie (emailuser) correspond à celui en base de donnée (email)
if(emailuser == email){
    //2a. tout est ok, je continu la verification avec le mot de passe

    //2a1.Je demande à l'utilisateur son mot de passe
    var mdpuser = prompt ("Bonjour quel est votre mot de passe");

    //2a2. Verification du mot de passe
    if(mdpuser == mdp){
        alert("Bienvenue");
    }
    else{
        alert("Attention nous n'avons pas reconnu votre mot de passe");
    }
}
else{
    //2b. Les emails ne correspondent pas...
    alert("Attention, nous n'avons pas reconnu votre adresse email");
}*/

//Exemple avec les fonctions
/* verifie si le couple email/mot de passe est correct 
@param {*string} emailuser
@param {*string} mdpuser
@return {boolean}
*/

var email, mdp;
var email = "wf3@hl-media.fr";
var mdp = "wf3";

function monutilisateurestcorrect(emailuser,mdpuser){
    if(emailuser === email && mdpuser === mdp){
        return true;
    }else{
        return false;
    }
}
var emailuser = prompt ("Bonjour quel est votre email","saisissez votre email");
var mdpuser = prompt ("Bonjour quel est votre mot de passe","saisissez votre mot de passe");

if(monutilisateurestcorrect(emailuser,mdpuser)){
    alert("Bienvenue " + emailuser);
}
else{
    alert("Attention votre mdp/email est invalide");
}

/*LES OPERATEURS LOGIQUES
    --L'operateur ET : && ou AND
    Si la combinaison emailuser et email correspond ET la combinaison mdpuser et mdp correspond.
    --> Dans cette condition les 2 doivent obligatoirement correspondre pour etre validées.
    ex: if(emailuser == email && mdpuser == mdp){...}

    --L'operateur ou: || ou OR
    Si la combinaison emailuser et email correspond ET/OU la combinaison mdpuser et mdp correspond.
    --> Dans cette condition au moins l'un des 2 doit  correspondre pour etre validées.
    ex: if(emailuser == email OU : || mdpuser == mdp){...}

    --L'operateur " ! " ou encore NOT
    L'operateur "!" signifie le CONTRAIRE de... ou NOT
    var monutilisateurestapprouvé = true;
    if(!monutilisateurestapprouvé){...} : Mon utilisateur n'est pas approuvé.
    reviens à écrire:
    if(monutilisateurestapprouvé == false){...}

*/