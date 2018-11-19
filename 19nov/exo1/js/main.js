/* 
Attendre me chargement du DOM
- Invoquer le DOM => "document"
- Ajouter un écouteur d'événement => addEventListener()
    - 1er paramètre : type d'événement => 'DOMContentLoaded'
    - 2ème paramètre : la fonction de callback => function() {...}
*/
    document.addEventListener( 'DOMContentLoaded', function() {

        /* 
        Variables globales
        */
            // Création d'une collection de données
            let farmerCollection = [];

            // Sélection du formulaire HTML
            let myForm = document.querySelector('form');

            // Sélection de la liste des fermiers
            let myFarmers = document.querySelector('section:last-of-type');

            // Sélectionner un à un les inputs et le select du formulaire
            let firstName = document.querySelector('[name="first_name"]');
            let lastName = document.querySelector('[name="last_name"]');
            let age = document.querySelector('[name="age"]');
            let literate = document.querySelector('select');
        // 

        /* 
        Création d'un constructor
        - Un constructor permet de défir un type d'objet
        - Un constructor est une fonction particulière
        */
            function Farmer(_id, first_name, last_name, age, literate){
                // Utilisation du mot clef this pour le constructor
                this._id = _id;
                this.first_name = first_name;
                this.last_name = last_name;
                this.age = age;
                this.literate = literate;
                this.IsDisplayed = false;
            }

            // Ajouter une fonction au constructor
            Farmer.prototype.addFarmer = function(){
                // Vérifier sur l'objet est déjà affiché
                if( this.IsDisplayed === false ){
                    // Créer un article
                    let newArticle = document.createElement('article');
                            
                    // Ajouter le contenu HTML dans l'article
                    newArticle.innerHTML += `
                        <h3>${this.first_name} ${this.last_name}</h3>
                        <ul>
                            <li><b>Age: </b>${this.age}</li>
                            <li><b>Literate: </b>${this.literate == 1 ? 'Yes' : 'No'}</li>
                        </ul>
                    `;

                    // Ajouter l'article dans la section
                    myFarmers.appendChild(newArticle);

                    // Changer la valeur de isDisplayed
                    this.IsDisplayed = true;
                }
            };
        // 


        /* 
        Capter la soumission du formulaire
        - Pas le clic sur le bouton mais le submit sur le formulaire
        - Attention de bien bloquer le comportement naturel du formulaire
            => Ne pas envoyer les données dans le fichier de traitement
        */
            myForm.addEventListener('submit', function(event){
                // Bloquer le comportement naturel du formulaire
                event.preventDefault();

                // Définir une variable pour les erreurs
                let formError = 0;

                /* 
                Le prénom et le nom sont validés SI il y à plus de 2 caractères dans leur valeur
                */
                    if( firstName.value.length >= 2 ){
                        console.log('Prénom validé');

                    } else{
                        console.log('Prénom non-validé');
                        // Incrémenter la variable formError de 1
                        formError++;
                    }

                    if( lastName.value.length >= 2 ){
                        console.log('Nom validé');

                    } else{
                        console.log('Nom non-validé');
                        // Incrémenter la variable formError de 1
                        formError++;
                    };
                //

                /* 
                L'age est valide SI 
                    - il contient au minimum 1 caractère dans la valeur
                    - la valeur est suppérieure à 0
                */
                    if( age.value.length > 0 && age.value > 0 ){
                        console.log('Age validé');

                    } else{
                        console.log('Age non-validé');
                        // Incrémenter la variable formError de 1
                        formError++;
                        
                    };
                //

                /* 
                L'alphabétisation est valide SI la valeur est égale à 1 OU 0
                */
                    if( literate.value === "1" || literate.value === "0" ){
                        console.log('Alphabétisation validé');

                    } else{
                        console.log('Alphabétisation non validé');
                        // Incrémenter la variable formError de 1
                        formError++;
                    };
                //

                /* 
                Validation finale du formulaire
                - La variable forError DOIT être égale à 0
                */
                    if( formError === 0 ){
                        // Ajouter le fermier dans la collection de données
                        farmerCollection.push( 
                            new Farmer( farmerCollection.length, firstName.value, lastName.value, parseInt(age.value), parseInt(literate.value) )
                        );

                        // Vider les champs du formulaire
                        firstName.value = '';
                        lastName.value = '';
                        age.value = '';
                        literate.value = 'NULL';

                        // Boucle sur la collection de données pour ajouter un fermier dans le DOM
                        for( let item of farmerCollection ){
                            console.log(item)
                            // Appeler la foction pour ajouter le fermier dans le DOM
                            item.addFarmer();
                        };
                    };
                //
            });
        //

       
    });
// 