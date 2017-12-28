//LE CHAINAGE DE METHODE AVEC JQUERY

$(function(){
    //-- Je souhaite cacher toutes les divs de ma page HTMl
    console.log($('div'));

    $('div').hide('slow', function(){
        /*une fois que la methode hide() est terminée, mon alerte
        peux s'executer.*/
    alert('Fin du hide');   
    // NOTA BENE : la fonction s'executera pour l"ensemble des éléments du selecteur.

    $('div').css('background','yellow');
    $('div').css('color','red');
    
    //Je fais reaparaitre mes divs
    $('div').show('slow');

    
    });//fin de fonction anonyme et du hyde

    $('p').hide(1000).css('color','blue').css('font-size','20px').delay(2000).show(500);

    $('p').hide(1000).css({'color':'green','font-size':'20px'}).delay(2000).show(500);

})