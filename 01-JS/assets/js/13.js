// LES EVENEMENTS

/*Les évenements vont me permettre de declencher une fonction,
c'est à dire : une serie d'instruction suite à une fonction de mon utilisateur.

OBJECTIF : Etre en mesure de capturer ces évenements afin 
d'executer une fonction.

Les évenements: MOUSE (souris)

    click      : au clic sur un element
    mousenter  : la souris passe au dessus de la zone qu'occupe un élémént
    mouseleave : la souris sors de cette zone

Les évenements : keyboard (clavier)

    keydown    : une touche du clavier est enfoncée
    keyup      : une touche du clavier à été relachée
        
Les événement  : Window (fenetre)    

    scroll     : au defilement de la fenetre
    resize     : redimensionnement de la fenetre

Les évenements : Form(formulaire)

    change     : pour les elements <input>, <select> et <textearea>
    submit     : à l'envoi (sousmission) du formulaire
    input      : pour capter la saisie d'un utilisateur sur un champ <input>


// LES ECOUTEURS D EVENEMENTS   

    Pour attacher un evenement à un element, ou autrement dit
    pour declarer un ecouteur d evenement qui se chargera de declencher une fontion,
    je vais utiliser la syntaxe suivante:
*/

var p = document.getElementById('monparagraphe');

// je souhaite que mon paragraphe soit rouge au clic de la souris

// 1 je defini une fonction chargée d executer cette action

function changecolortored(){
    p.style.color = 'red';
}

p.addEventListener('click', changecolortored);


// exercice
//creation du champ Input
var input = document.createElement ('input');

//Attribution d'un attribut
input.setAttribute ('type','text')
input.setAttribute ('placeholder','saisissez un contenu...')

//attribution d'un ID
input.id = "moninput";

//ajout de l'element dans la page
document.body.appendChild(input);

function voirlasaisiedemoninput(){
    alert(input.value);
}

input.addEventListener('change', voirlasaisiedemoninput);

/*
input.id = "moninput";
input.textContent = " Mon beau texte en JS"
document.body.appendChild(input)

function saisie(){
    alert("");
}
input.addEventListener('change', saisie );



/*function surface()
        {
            var surface = document.getElementById("surface").value;
            alert(surface);
        } */ //a tester*/