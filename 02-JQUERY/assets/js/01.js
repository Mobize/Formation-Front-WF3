/* LA DISPONIBILITE DU DOM */

/* A partir du moment ou mon DOM, c'est à dire l'ensemble
de l'arborescence de ma page est completement chargée
je peux commencer à utiliser JQuery.

Je vais mettre l'ensemble de mon code dans une fonction,
cette focntion sera appelé AUTOMATIQUEMENT par JQuery
lorsque le DOM sera entierement defini.

3 façons de faire: */

// 1ere possibilité
jQuery(document).ready(function(){
    //--Ici le DOM est entièrement chargé, je peux procéder à mon code JS.
});


// 2eme possibilité
 // " $ "" veut dire jQuery

 $(document).ready(function(){
     // --Ici le DOM est entièrement chargé, je peux procéder à mon code JS.
 });


 // 3eme posibilité
 $(function(){
    alert("J'ai 20 ans !")

        // EN jS :
        document.getElementById('TexteEnJQuery').innerHTML = "<strong><h1>Mon texte en JS<h1></strong>";

        // En jQuery, les sélecteurs sont les même qu'en CSS :
        $('#TexteEnJQuery').html('Mon texte en JQ');
        
 });

 