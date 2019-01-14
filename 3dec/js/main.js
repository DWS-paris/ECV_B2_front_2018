/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', function(){

        /* 
        Définition des variables
        */
            /* 
            Créer une variable contenant toutes les balises A de la NAV
            - querySelectorAll(...) place toutes les balises dans un tableau
            */
            let navLinks = document.querySelectorAll('nav a');
        //


        /* 
        Définition des méthodes (fonctions)
        */
            // Créer une fonction pour manipuler la navigation
            let navigationStart = () => {
                // Faire une boucle sur le tableau des liens de la nav
                for( let item of navLinks ){
                    //=> item = lien de la NAV
                    item.addEventListener('click', function(event){
                        // Bloquer le comportement naturel de la balise A
                        event.preventDefault();

                        // Récupérer la valeur de l'attribut href
                        let hrefValue = item.getAttribute('href');
                        
                        // Charger le contenu
                        loadContent(hrefValue);
                    });
                };;
            };


            // Fonction pour charger le contenu
            // Ajouter une valeur par défaut au paramètre
            let loadContent = (partial = 'home.html') => {
                
                fetch('./partials/' + partial) // Charger un fichier avec Fetch

                .then( rawData => { // N'est exécuté que si la méthode fetch fonctionne
                    console.log('Then #1')
                    console.log(rawData)

                    // Vérifier le status de la requête
                    if( rawData.status === 200 ){
                        // Renvoyer la réponse au fromat texte
                        return rawData.text();  
                    };
                })
                
                .then( textData => { // N'est exécuté que si le premier then renvoie des données
                    console.log('Then #2');
                    console.log(textData);

                    // Ajouter le contenu du partial dans la balise MAIN
                    displayContent(textData);

                    // Renvoyer le nom du partial à chargé
                    return partial;
                })

                .then( partial => {
                    console.log('Then #3');
                    console.log(partial)

                    // Initier le formulaire de la page contacts.html
                    if( partial === 'contacts.html' ){
                        initFormContact();
                    }
                })

                .catch( fetchError => { // N'est exécuté que si la méthode fetch ne fonctionne pas
                    console.error(fetchError)
                });
            };

            // Fonction pour ajouter le contenu dans le DOM
            let displayContent = content => {
                // Ajouter le contenu dans la balise MAIN
                document.querySelector('main').innerHTML = content;
            };

            // Fonction pour la gestion du formulaire de contact
            let initFormContact = () => {
                
                // Créer un tableau pour les labels
                let formLabels = document.querySelectorAll('label span');

                // Créer une variable pour chaque champs du formulaire
                let myForm = document.querySelector('form');
                let formEmail = document.querySelector('[type="email"]');
                let formSubject = document.querySelector('[type="text"]');
                let formMessage = document.querySelector('textarea');

                // Capter le submit sur la formulaire
                myForm.addEventListener('submit', function(event){
                    // Créer une variable pour les erreurs
                    let formError = 0;

                    // Bloquer le comportemanet par defaut du formulaire
                    event.preventDefault();

                    // Vérifier tous les champs
                    if( formEmail.value.length < 4 ){
                        // Afficher une erreur dans le span du label
                        formLabels[0].textContent = 'Min. 5 caractères';

                        // Incrémenter formError de 1
                        formError++;

                        // Masquer le message d'erreur
                        formEmail.addEventListener('focus', () => formLabels[0].textContent = '');
                    }

                    if( formSubject.value.length < 4 ){
                        // Afficher une erreur dans le span du label
                        formLabels[1].textContent = 'Min. 5 caractères';

                        // Incrémenter formError de 1
                        formError++;

                        // Masquer le message d'erreur
                        formSubject.addEventListener('focus', () => formLabels[1].textContent = '');
                    }

                    if( formMessage.value.length < 4 ){
                        // Afficher une erreur dans le span du label
                        formLabels[2].textContent = 'Min. 5 caractères';

                        // Incrémenter formError de 1
                        formError++;

                        // Masquer le message d'erreur
                        formMessage.addEventListener('focus', () => formLabels[2].textContent = '');
                    }

                    // Validation finale du formulaire
                    if( formError === 0 ){
                        // Le formulaire est validé => Envoyer les données vers un serveur

                        // Vider les champs du formulaire
                        myForm.reset();
                    }
                });
            };
        //


        /* 
        Lancer l'application
        */
            // Initialiser la navigation
            navigationStart();
            loadContent();

            
        //
    });
//