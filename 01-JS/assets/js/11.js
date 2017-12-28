/* LE DOM

    Le DOM est une interface de developpement en Javascript pour
    html. Grace au DOM je vais etre en mesur d'acceder / modifier mon html.
    
    L'objet "document": c'est le point d'entrée vers mon contenu html!

    Chaque page chargée dans mon navigateur à un objet "document".
    */

    //Comment puis-je faire pour recuperer les differentes informations de ma page html?

   
/* document.getElementById    

    C'est une fonction qui va permettre de récupérer un élément html
    à partir de son identifiant unique : ID */
    
    var bonjour = document.getElementById('bonjour');
    console.log(bonjour);

/* document.getElementByClassName */
    var contenu = document.getElementsByClassName('contenu');
    console.log(contenu);

    /* Me renvoi un tableau JS avec mes éléments HTML, ou
    encore autrement dit, une "collection" d'éléments html.
    */
    
/*document.getElementByTagName*/
    var span = document.getElementsByTagName('span');
    console.log(span);

