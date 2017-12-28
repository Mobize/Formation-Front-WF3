// LES SELECTEURS JQUERY

// Format : $('selecteur')
// En jQuery, tous les selecteurs CSS sont disponibles...

$(function(){
    // DOM READY

    function l(e){
        console.log(e);
    }

    // selectionner les balises SPAN :

    // version Javascript :
    l(document.getElementsByTagName('span'));

    // Version jQuery
    l($('span'));

    //Selectionner mon menu:

        //Version javascript
        l(document.getElementById('menu'));

        //Version jQuery
        l($('#menu'));

     //Selectionner une classe: 
     
         //Version javascript
         l(document.getElementsByClassName('MaCLasse'));

          //Version jQuery
        l($('.MaCLasse'));

     //Selectionner un Attribut
     
        //En jQuery
        l($("[href='https://wwww.google.fr']"));
});


