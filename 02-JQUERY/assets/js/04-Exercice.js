
/*$( "#MonFormulaire" ).submit(function( event ) {
        event.preventDefault();
        $( "#MonFormulaire" ).hide('slow');
          
  });*/

  $("#MonFormulaire").submit(function(event){
      //cette focntion anonyme sera executée à la soumission du formaulaire.

      // Permet d'annuler l'action par defaut du submit du formulaire. (la redirection html).
        event.preventDefault();

    

      // version courte  
      $(this).replaceWith('<p>Bonjour ' + $('#nomcomplet').val() + '!<p>')  
       
      //version longue
      $("#MonFormulaire").hide();

      $('<p>').append('<p>Bonjour' + $('#nomcomplet').val() + '!<p>').appendTo('body');
  })