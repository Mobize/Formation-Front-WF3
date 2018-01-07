// VALIDATION DU FORMULAIRE


    /*
    *
    * 1- VALIDER L EMAIL ET LE TELEPHONE AVEC LES EXPRESSIONS REGULIERES (REGEXP)
    * https://paulund.co.uk/regular-expression-to-validate-email-address
    * Si l'email n'est pas valide ça retourne faux (false)
    *
    */

    function validateEmail(email){
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var valid = emailReg.test(email);
    
        if(!valid) {
            return false;
        } else {
            return true;
        }
    }
    
    function validateTel(tel){
        var telReg = new RegExp("(0|\\+33|0033)[1-9][0-9]{8}");
        var valid = telReg.test(tel);
    
        if(!valid) {
            return false;
        } else {
            return true;
        }
    }

    //-2 Initialisation de jQuery

    $(function(){

        //-2.a- Ecouter à quel moment est soumis notre formulaire
        $('#contact').on('submit', function(e){         // #contact est mon formulaire // .on(sumbmit) veut dire à la soumission du formulaire

        //-2.b- Neutraliser la redirection HTML5    
           e.preventDefault();                          // supprime la redirection à la validation du formulaire
            
        //-2-c- Supprimer les diférentes erreurs
        $('#contact .has-error').removeClass('has-error');
        $('#contact .text-danger').remove();

        //-2-d- Déclarer les variables à verifier
        var nom      = $('#inputName3');  // reprend l'ID de mon champ input pour le nom
        var email    = $('#inputEmail3');
        var tel      = $('#inputTel3');
        var sujet    = $('#inputSubject3');
        var message  = $('#inputMessage3');

        //.2.e- Verification de chaque champ
        //.2-e-1 Verification du nom
            if(nom.val().length === 0){   // si le nom n'est pas rempli=(si la valeur du champ input 'nom' est égal à 0 caracteres)
            nom.parent().addClass('has-error');  // je rajoute une classe 'has-error'de bootstrap au parent (#contact) de la variable "nom" (classe #nom) qui me surligne en rouge le champ à la validation
            $('<p class="text-danger">N\'oubliez pas de saisir votre nom</p>').appendTo(nom.parent()); //  j ajoute un paragraphe avec une classe "text-danger" bootstrap dans le parent de la classe nom qui est #contac     
            } else{
                nom.parent().addClass('has-success'); // Sinon (donc si le champ est bien rempli) je rajoute une classe "has-success" bootstrap 
            }
            if(!validateEmail(email.val())){ // Si la valeur du champ email n'est pas valide 
                email.parent().addClass('has-error'); // je rajoute une classe 'has-error'
                $('<p class="text-danger">Verifier votre email</p>').appendTo(email.parent()); // et un paragraphe avec la classe 'text-danger'
            } else{
                email.parent().addClass('has-success');
            }
            if(!validateTel(tel.val())){
                tel.parent().addClass('has-error');
                $('<p class="text-danger">N\'oubliez pas de saisir votre n) de téléphone</p>').appendTo(tel.parent());
            } else{
                tel.parent().addClass('has-success');
            }
            if(sujet.val().length === 0){
                sujet.parent().addClass('has-error');
                $('<p class="text-danger">Veuillez saisir un sujet</p>').appendTo(sujet.parent());
            } else{
                sujet.parent().addClass('has-success');
            }
            if(message.val().length === 0){
                message.parent().addClass('has-error');
                $('<p class="text-danger">Veuillez saisir votre message</p>').appendTo(message.parent());
            } else{
                message.parent().addClass('has-success');
            }

            //Verifier si il y à des erreurs dans le formulaire
            if($('#contact').find('.has-error').length === 0){
                $('.container.formulaire').fadeOut(20,function(){
                    $(".container.votre").fadeIn(800);
                    $("#success").fadeIn(0);
                });    
            } else{
                $('#contact').prepend(`
                <div class="alert alert-danger">
                    Nous n'avons pas été en mesure de valider votre demande.
                    Verifier vos informations.
                </div>
                `)
                
            }
            
        });

    })
    