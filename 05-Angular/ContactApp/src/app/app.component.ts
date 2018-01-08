
/* -- Pour déclarer une classe comme composant de notre application, 
 * on importe  "Component" via @angular/core
 * */

import { Component } from '@angular/core';

/* Creation d une interface de contact
* Cela me permet de definir la forme/structure 
* de mes objets contact.d 
 */

 interface Contact {
   id     : number;
   prenom : string;
   nom    : string;
   email?  : string;
 }

 interface ContactArray {
   [index: number] : Contact;
 }

/* -- @Component est ce qu'on appelle un decorateur.
* Il va nous permettre de definir 3 parametres essentiels à
* notre application...
*/

@Component({

  /* -- Le selecteur (selector) determine la manière 
   * dont le composant sera affiché dans un template.
   * on ecrira dans notre HTML : <app-root></app-root>
   * Vous devez obligatoirement avoir la balise d'ouverture et celle de fermeture .
   * */
  selector: 'app-root',

  /* 
  * "templateUrl" ou "template" est la partie visible du composant
  * C'est ce qui s'affiche à l'écran lorque le composant est utilisé*/
  templateUrl: './app.component.html',

  /* 
   * La déclaration des styles avec "styleUrls" ou "styles"
   */
  styleUrls: ['./app.component.css']
})
/* 
 * La classe contient les données du composant, mais aussi son comportement.
 * Dans le contexte MVVM, notre classe correspond au ViewModel
 *  */
export class AppComponent {
  //-Déclaration d'une variable
  title  = 'ContactApp';
  
  // Declaration d'un object contact 
  contact:Contact = {
    id     : 1,
    prenom :"Hugo",
    nom    :"Liegeard",
    
  }

  // Un tableau qui contient une collection de contacts
  Contacts:ContactArray =[
    {id: 1, prenom:'Hugo', nom:'Liegeard'},
    {id: 2, prenom:'Olivier', nom:'Charpentier'},
    {id: 3, prenom:'Barry', nom:'White'},
    {id: 4, prenom:'Michael', nom:'Jackson'}
  ]

  //-- function getNomComplet (UnContact:Contact){}
  getNomComplet = (UnContact:Contact) =>{
    return UnContact.prenom +' '+ UnContact.nom;
  }

  //- Choix de mon utilisateur actif
  contactActif;

  /* 
   *Permet de definir un contact actif
   *  */

  choisirUnContact = (UnContact:Contact)=>{
    this.contactActif = UnContact;
    console.log(this.contactActif);
  }

}
