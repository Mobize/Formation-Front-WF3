//La manipulation des contenus

function l(e){
    console.log(e);
}

// Je souhaite récupérer mon lien; comment proceder?
var google = document.getElementById('google');
l(google);

// Maintenant, je souhaite accéder aux informations de ce lien...

    // A : Le lien vers lequel pointe la balise
    l(google.href);

    // B : l ID de la balise
    l(google.id)

    // C : La classe de la balise
    l(google.className)

    // D : Le texte de la balise
    l(google.textContent)

/* Maintenant, je souhaite modifier le contenu de mon lien*/

    google.textContent = "mon lien vers Google !";

/* AJOUTER UN ELEMENT DANS MA PAGE

    // Nous allons utiliser 2 methodes:
        1- La fonction document.createElement() va permettre de gerer un nouvel éléméent dans le DOM;
        que je pourrais modifier par la suite avec les méthodes que nous venons de voir
        ps: ce nouvel élément est placé en mémoire.*/
        
        // Definition de l'élément
         var span = document.createElement ('span');

         // Si je souhaite lui donner un ID
         span.id = "monSpan";

         // Si je souhaite lui attribuer du contenu
         span.textContent = " Mon beau texte en JS";

         //Comment ajouter l'élément dans la page?
         // La fonction appendChild va permettre de rajouter un enfant à un element du DOM.
         google.appendChild(span);

 
 // Creation de la balise H1     
var h1 = document.createElement ('h1');

 // Creation de la balise a   
var a = document.createElement('a')

//titre de mon article
a.textContent ='Titre de mon article'; 

// Je veux donner un lien à mon lien
a.href = "#";

// appenchild()

    // Je mets mon lien (a) dans mon h1
    h1.appendChild(a);

    //Je met mon H1 dans ma page, dans mon body
    document.body.appendChild(h1);
    
    // bonus- je veux que mon lien soit de couleur rouge
    a.style.color = 'red';
    a.style.textDecoration = 'none';


    

   
