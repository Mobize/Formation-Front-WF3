var invalid = function(){	
    document.getElementById("choixChat").style = "border: 1px solid red";
};

$(function(){

    $("#formulaire").submit(function(e){

        e.preventDefault();

        if( $("#choixChat").val() && $("#raisonChat").val().length >= 15 ){
            $(this).fadeOut(400);
            $("#validation").fadeIn(500);
        }

    });

    $("#raisonChat").change(function(){
        if( $(this).val().length >= 15 ){
            $(this).css("border", "1px solid #ccc");
        }
    });

    $("#choixChat").change(function(){
        if( $(this).val() ){
            $(this).css("border", "1px solid #ccc");
        }
    });

    $("#raisonChat").blur(function(){
        if( $(this).val().length < 15 ){
            $(this).css("border", "1px solid red");
            $(this).on('input', function(){
                $(this).css("border", "1px solid #b0baff")
            })
        }
    });

});