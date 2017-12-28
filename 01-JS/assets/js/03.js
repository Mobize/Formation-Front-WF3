/* la concatenation */

var debutDePhrase     ="Aujourd'hui ";
var laDate            =new Date() ;
var suiteDePhrase     ="sont présents.<br> ";
var nombreDeStagiaires= ' '+18;
var finDePhrase       = " stagiaires ";

/*-- Nous souhaitons maintenant, grace à la concatenation afficher tout
ce petit monde, en un seul morceau */

document.write( debutDePhrase + laDate.getDate() + '/' + ( laDate.getMonth() +1) + '/' + laDate.getFullYear() + nombreDeStagiaires + finDePhrase +suiteDePhrase );

var phrase1 = "je m'appelle ";
var phrase2 = "Hugo et j'ai ";
var age     = 28;
var phrase3 = " ans";

document.write( phrase1 + phrase2 + age + phrase3 )