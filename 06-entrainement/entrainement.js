/*  
function conversion()
{
   var somme = prompt("Entrez la valeur en Euros :");
   var resultat = somme * 6.55957;
   alert(somme + " E\n" + resultat + " Frs");
}
*/

/*function conversion(unite1, taux, unite2)
{
    var valeur = prompt('Entrez la valeur à convertir, en ' + unite1);
    var resultat = valeur * taux;
    alert(valeur + ' ' + unite1 +'\n' + resultat + ' ' + unite2);
}*/

/* 
function f(x)
{
   var resultat = 5*x - 3;
   return resultat;
}
alert( f(7) );
 */

 /*var nombre = prompt('entrez un nombre' , 'votre nombre ici')
 alert('Vous avez tapez' + nombre)*/

 /*function f(x){
 var resultat = 5*x -3;
 return resultat;
 }
 alert(f(7))*/

 /*function triple(x)
{
   return 3*x;
}

function carre(x)
{
   return x*x;
}

function cube(x)
{
   return x*x*x;
}
var resultat = 4*cube(5) - 7*3 / carre(6);

console.log(resultat)

function addition(unite1, unite){
    var somme = prompt('')
}*/

<<<<<<< HEAD

/*function conversion(unite1, taux, unite2)
{
   var valeur = prompt("Entrez la valeur à convertir, en " + unite1);
   var resultat = valeur * taux;
   alert(valeur + ' ' + unite1 + '\n' + resultat + ' ' + unite2);
}*/

/*var nombre = prompt('Entrez un nombre', 'Votre nombre ici');
alert('Vous avez tapé ' + nombre);*/

/*function essai(argument1, argument2)
{
   // code de la fonction
}
essai(57,"un message");*/

/*function f(x)
{
   var resultat = 5*x - 3;
   return resultat;
}
alert(f(7));*/

/*unction triple(x)
{
    return 3*x;
}

function carre(x)
{
    return x*x;
}

function cube(x)
{
    return x*x*x;
}

var resultat = 4*cube(5) - 7*3 / carre(6);*/


/*var nombre = prompt('Entrez un nombre', 'Votre nombre ici');
alert('Vous avez tapé ' + nombre);*/


/*function calculette(){
    var chiffre1 = prompt('entrez un 1er chiffre');
    var chiffre2 = prompt('entrez un 2em chiffre');
    var resultat = parseInt(chiffre1) + parseInt(chiffre2);
    alert("le resultat est " + resultat);
}
calculette();

function soustraction(){
    var chiffre1 = prompt('entrez un 1er chiffre');
    var chiffre2 = prompt('entrez un 2eme chiffre '); 
    var resultat = chiffre1-chiffre2;
    alert("le resultat est" + resultat);
}
soustraction()

function multiplication(){
    var chiffre1 = prompt('Entrez votre chiffre');
    var chiffre2 = prompt('entrez votre 2 eme chiffre');
    var resultat = chiffre1*chiffre2;
    alert('le resultat est' + resultat)
}
multiplication()

function division(){
    var chiffre1 = prompt('entrez votre chiffre');
    var chiffre2 = prompt('entrez votre 2eme chiffre');
    var resultat = chiffre1/chiffre2;
    alert('le resulat est' + resultat);
}
division()*/

/*function carre(x){
   return x*x;
}
var chiffre = prompt('Pour trouver le carré ' , "entrez un chiffre")
var resultat = carre(chiffre) ;
   
carre()
document.write("le carre de " +chiffre+ " est " +resultat)*/

/*function cube(x){
    return x*x*x;
}
var chiffre = prompt('entrez votre chiffre', 'entrez votre chiffre')
var resultat = cube(chiffre);
cube()
document.write("le cube de " +chiffre+ " est " +resultat)*/

/*var taille = prompt('Combien mesurez-vous ?');
var poids  = prompt('Combien pesez-vous ?')

costaud = (taille >=2 || poids >=90);
alert('Vous etes costaud : '+costaud)*/


/*var majeur = (age>=18);
var mineur = !(age>=18);
var age = prompt('quel')
console.log(age)*/

/*var age = prompt('quel age');

mineur = !(age>=18);
majeur = (age>=18);

alert("mineur" + mineur)
alert('majeur' + majeur)*/

/*var age    = prompt('Quel est votre age ?');
var majeur = age>=18;
var mineur = !age>=18;
if(majeur){
    alert('Vous etes majeur !')
    var nom =prompt('quel est votre nom')
    if(nom=='olivier'){
        alert('Bienvenue ' + nom)
    }else{
        alert('Changez de prenom')
        
    }
}else{
    alert('Vous etes mineur')
    document.write('Au revoir...')
};*/

/*if(prompt('votre')>=18)
alert('')*/


/*var age = prompt('Quel âge avez-vous ? (en années)');
if(!age)
   alert('Vous devez entrez votre âge');
else
{
   if(age >= 18)
      alert('Vous êtes majeur');
   else
      alert('T\'es mineur');
}*/

/*var nom = prompt("Entrez un nom d'animal");
switch(nom)
{
        case "chat":
                alert("Miaou !");
                break;
        case "chien":
                alert("Et PAF, le chien !");
                break;
        case "pingouin":
                alert("Bonjour, Tux");
                break;
        default:
                alert("Je n'ai rien à te dire...");
                break;
}*/

/*var plat = prompt("Quel est votre plat préféré ?");
switch(plat)    // debut du switch
{
        case "frites":  // si c'est les frites ...
                alert("C'est classique...");    // ... on affiche ce message...
                break;  // ... et on sort du switch.
                
        case "hamburger":
                alert("Yeah, do you come from the USA ?!");
                break;
                
        // on ne met pas de "break" entre les deux, pour afficher le meme message
        case "lasagnes":
        case "pizza":
                alert("Monsieur est italien ?");
                break;
                
        default:        // si c'est un autre plat
                alert("Je ne connais pas ce plat...");
                break;
}*/

/*var i = 1;      // on initialise le compteur
while(i < 10)   // tant que i<10 ...
{
        // ... on affiche un message
        alert(i);
        i++;
}*/

/*for(var i=0; i<10 ; i++)
alert(i);

for(var i =5; i<25 ; i++)
document.write(i)*/
=======
$(function(){
    $('#contact').on('submit' , function(e){

        e.preventDefault();
        
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger' ).remove();

        var nom    = $('#nom');
        var prenom = $('#prenom');

        if(nom.val().length === 0){
            nom.parent().addClass('has-error');
            $('<p class="text-danger"> saisissez votre nom</p >').appendTo(nom.parent())
        } else{
            nom.parent().addClass('has-success');
        }
        if(prenom.val().length === 0){
            prenom.parent().addClass('has-error');
            $('<p class="text-danger">Saisissez votre prenom</p>').appendTo(prenom.parent())
        }

        if($('#contact').find('has-error').length ===0){
           
            
        }        
    })
})
>>>>>>> 782a02c8d52107c195af06149a20313f156fbd3a
