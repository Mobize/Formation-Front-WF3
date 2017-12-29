// Initialisation de jQuery
$(() => {     //equivalent à $(function(){})

    //-Les flemars.js
    function l(e){ console.log(e)};

    // Je souhaite selectionner toute mes div
   l($('div'));

   // Je souhaite selectionner mon menu
   l($('nav'));

   // Je souhaite connaitre tous les elements descendants direct (enfants) qui sont dans le menu
    l($('nav').children());

    // Je souhaite parmi ces enfants, uniquement les éléments "ul"
    l($('nav').children('ul'));

    //Je souhaite recuperer tous les elements 'li' de mon 'ul'
    l($('nav').children('ul').find('li'));

    // Je souhaite recuperer uniquement le deuxieme élément de mes 'li'
    l($('nav').children('ul').find('li').eq(1));

    // Je souhaite connaitre le voisin immediat de mon menu
    l($('nav').next());
    l($('nav').next().next()); // Le voisin du voisin
    l($('nav').prev()); // Le voisin d'avant

    // Le parent
    l($('nav').parent());

});