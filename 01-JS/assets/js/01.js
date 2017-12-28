//alert('wow tu es sur ma page');//

// deux slash pour faire un commentaire uniligne //

/*  
    ici je peux faire un commentaire
    sur plusieurs lignes...
    RACCOURCI : CTRL + SLASH
            ou: CTRL + SHIFT + SLASH ( ALT + SHIFT + A)
*/
// -- 1. Déclarer une variable en js
var Prenom;

// -- 2. Affecter une valeur
Prenom ='Marie-pierre';

// --3. Afficher la valeur de ma variable dans la console du navigateur.
console.log(Prenom);

/*---------------------------------------------------------------
|                   LES TYPES DE VARIABLES                       |
---------------------------------------------------------------- */

//-------- "typeof" me permet de connaitre le type de ma variable
console.log(typeof Prenom);

// -- Déclaration et affectation d'une valeur à une variable
var Age= 22;

// -- Afficher dans la console
console.log(Age);

// -- Verifier son type
console.log(typeof Age);

/*---------------------------------------------------------------
|                   ~ LA PORTEE DES VARIABLES ~                  |
|                                                                |       
|  Les variables déclarées directement à la racine du fichier    |
|  sont appélées variables "GLOBALES".                           |
|                                                                |
|  Elles sont disponibles dans l'ensemble de votre               |
|  document y compris dans les fonctions / boucles               |
|                                                                |
|  La portée des variables globales s'arrete au fichier          |
|  Si je change de page, les variables n'existent plus.6         |
|                                                                |
|  Les variables déclarées à l'nterieur d'une fonction           |
|  sont appélées variables "LOCALES"                             |
|                                                                |
|  Elles sont disponibles uniquement à l'interieur de celle-ci   |
---------------------------------------------------------------- */

// -- Les variables de type FLOAT

var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les booléens (VRAI / FAUX)

var unBooleen = false; // -- true
console.log(unBooleen);
console.log(typeof unBooleen);

/*---------------------------------------------------------------
|                   ~ LES CONSTANTES ~                
|   La déclaration CONST permet de créer une constante
|   accessible UNIQUEMENT en lecture...                             
|   
|    Sa valeur ne pourra pas etre modifiée par des 
|    réaffectations ulterieurs.
|
|    Une constante ne peut pas être déclarée à nouveau.
|
|    Généralement par convention, les constantes sont en
|    MAJUSCULES.
|                                                              
---------------------------------------------------------------- */

const HOST = "localhost";
const USER = "root";
const PASW = "mysql";

// je ne peux pas faire cela...
// USER = "127.0.1";
// typeError: Assignment to constant variable.

/*---------------------------------------------------------------
|                   ~ LA MINUTE INFO ~                
|   Au fur et a mesure que l'on affecte ou on reaffecte
|   des valeurs à une variable, celle ci prend la nouvelle
|   valeur et le nouveau type.
|
|    En Javascript (ECMA script - ES), les variables sont 
|    auto-typées.

    Pour convertir une variable de type NUMBER en STRING et 
    STRING en NUMBER   , je peux utiliser les fonctions
    natives de Javascript.
|                                                              
---------------------------------------------------------------- */

console.log('---')

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

/* -- la fonction ParseInt() permet de retourner un ENTIER à partir
    d'un STRING -- */
unNombre = parseInt(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// Je reaffecte une valeur à ma variable

unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

//-- La fonction parseFloat() permet de retourner un FLOAT à partir d'un STRING

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- Conversion d'un nombre en STRING avec toString()
var unNombreQuiDevientString = 10;
console.log(unNombreQuiDevientString);
console.log(typeof unNombreQuiDevientString.toString() );

