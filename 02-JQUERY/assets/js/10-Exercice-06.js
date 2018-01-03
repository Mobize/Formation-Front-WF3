$(function() {

    // -- Tableau de Membres
    var membres = [
      {'pseudo':'Hugo','age':26,'email':'wf3@hl-media.fr','mdp':'wf3'},
      {'pseudo':'Rodrigue','age':56,'email':'rodrigue@hl-media.fr','mdp':'roro'},
      {'pseudo':'James','age':78,'email':'james@hl-media.fr','mdp':'james8862'},
      {'pseudo':'Emilio','age':18,'email':'milio@hl-media.fr','mdp':'milioDu62'}
    ];

    //Initialisation des variables...

    // Récuperation de differents éléménts
    var form          = $('#registerForm')
    var bienvenue     = $('#Bienvenue')
    var pseudo        = $('#pseudo')
    var age           = $('#age')
    var email         = $('#email')
    var mdp           = $('#mdp')
    var submit        = $('#submit')
    var pseudoError   = $('.pseudoError')
    var ageError      = $('.ageError')

    //Etapes 1 & 3
    pseudo.on('input',function(e){  // declencher la fonction à la saisie sur un champ <input>
       // console.log(pseudo.val())

       //A. parcourir mon tableau de membre.
        for(let i = 0 ; i < membres.length ; i++){
            console.log(pseudo.val())
            console.log(membres[i].pseudo)
        /*B. Verifier si la saisie d'un pseudo par mon utilisateur 
        correspond à un pseudo dans mon tableau de membre alors ma condition s'applique. */  
        if(pseudo.val() == membres[i].pseudo){
        // C. j'ai trouvé une correspondance, je vais afficher un message d'alerte  
        pseudoError.fadeIn();
        // Je desactive le bouton
        submit.prop('disabled', true) ;
        //je vide le titre bienvenue
        bienvenue.text('');
        //Je stop la boucle
        break;
             }
             else{
                // on cache l'erreur et on reactive le bouton
                pseudoError.fadeOut();
                submit.removeAttr('disabled');
                bienvenue.text("Bienvenue " + pseudo.val());
                
             }
        }
    });   

    // Etape 2
    age.on('change',function(e){
        if(age.val() <18){
            ageError.fadeIn();
            submit.attr('disabled', true);
        } else{
            ageError.fadeOut();
            submit.removeAttr('disabled');
        }
    })

    // etape 4
    form.on('submit', function(e){ // ecouter le formulaire dans la fonction anonyme
        // arret de la propagation du submit
        e.preventDefault();

        //creation d un object contact
        var contact = {
            pseudo  : pseudo.val(),
            age     : age.val(),
            email   : email.val(),           
            mdp     : mdp.val()
        };
        //etape 4.a
        //ajout du contact avec les membres
        membres.push(contact);

        //reinitialiser le formulaire
        this.reset();

        // etape 4.b
        //afficher du nouveau contact
        $( "<p>Bonjour " + pseudo.val() + " tu est maintenant inscrit<p>" + "<p>Voici la liste de nos membres :<p>" ).appendTo( "body" );
        
        //creation de la boucle pour ajouter le contact au membres
        for(let i = 0 ; i < membres.length ; i++){
            $("<p>" + membres[i].pseudo +" "+ membres[i].age +" Ans<p>" ).appendTo( "body" )
            
        };
       
    });

});




