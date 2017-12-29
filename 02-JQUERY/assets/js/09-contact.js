// -- Initialisation de jQuery (DOM READY)
$(function() {
    
    // -- Déclaration de Variables
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
    function ajouterContact(UnContact) {}

    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire() {}

    // -- Affichage d'une Notification
    function afficheUneNotification() {}

    // -- Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(UnEmail) {}

    // -- Vérification de la validité d'un Email
    // : https://paulund.co.uk/regular-expression-to-validate-email-address
    function validateEmail(email){
        var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        var valid = emailReg.test(email);

        if(!valid) {
            return false;
        } else {
            return true;
        }
    }

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon Formulaire
    $('#contact').on('submit', function(e) {

        // -- Stopper la redirection de la page
        e.preventDefault();

        // -- Récupération des champs à vérifier
        var prenom, nom, email, tel;
        nom     = $('#nom');
        prenom  = $('#prenom');
        email  = $('#email');
        tel     = $('#tel');
           
        // -- Vérification des informations...
        let mesInformationsSontValides = true;
        // -- Vérification du Prénom
        if(prenom.val().lenght == 0){
            //--Le champ est incorrect car il n'a pas été rempli
            mesInformationsSontValides = false;
        }
        // -- Vérification du Nom
        if(nom.val().lenght == 0){
            //--Le champ est incorrect car il n'a pas été rempli
            mesInformationsSontValides = false;
        }
        // -- Vérification du Tel
        if(tel.val().lenght == 0){
            //--Le champ est incorrect car il n'a pas été rempli
            mesInformationsSontValides = false;
        }
        // -- Vérification du Mail
        if(!validateEmail(email.val())){
            mesInformationsSontValides = false;
        }
        // -- Si mesInformationsSontValides
        if(mesInformationsSontValides){
            //-- Tout est correct, preparation du contact
            let Contact = {
                //cle       //valeur
                nom      : nom.val(),
                prenom   : prenom.val(),
                email    : email.val(),
                tel      : tel.val()
            };
        }

        // -- Sinon...
        //-- Alert ..
        else{
            alert("ATTENTION\n Veuillez remplir tout les champs")
        }
    });

}); // -- Fin de jQuery READY !
