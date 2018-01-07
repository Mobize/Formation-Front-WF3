var invalid = function(){	
    document.getElementById("choixChat").style = "border: 1px solid red";
};



$(document).ready(function(){

    var choix     = $('#choixChat');
    var raison    = $('#raisonChat')
    var succes    = $('#success')

    $("#cat-form").submit(function(e){

        e.preventDefault();

        if( $(choix).val() && $(raison).val().length >= 10 ){
            $(this).fadeOut(400);
            $(succes).fadeIn(1500);
        }
        if(raison.val().length === 0){
            raison.parent().addClass('has-error');
            $('<p class="text-danger">Veuillez saisir la raison d\'adoption</p>').appendTo(raison.parent());
        }

    });

    $(raison).change(function(){
        if( $(this).val().length >= 15 ){
            $(this).css("border", "1px solid #ccc");
        }
    });

    $(choix).change(function(){
        if( $(this).val() ){
            $(this).css("border", "1px solid #ccc");
        }
    });

    $(raison).blur(function(){
        if( $(this).val().length < 15 ){
            $(this).css("border", "1px solid red");
        }
    });

});