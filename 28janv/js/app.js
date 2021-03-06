/* 
Attendre le chargement du DOM
*/
    document.addEventListener('DOMContentLoaded', () => {

        /* 
        Déclarations
        */
            let burgerMenu = document.querySelector('#burgerMenu');
            let navigation = document.querySelector('nav');
            let navLinks = document.querySelectorAll('nav a');
            let navIsOpen = false;
            let mainTag = document.querySelector('main');
            let activePage = undefined;
        //

        /* 
        Fonctions
        */
            // Fonction pour afficher le menu
            const displayMenu = () => {
                // Capter le click sur le bouton "#burgerMenu"
                burgerMenu.addEventListener( 'click', () => {

                    // Vérifier si la navigation est ouverte
                    if( navIsOpen === true ){
                        // Supprimer la class ".open" sur la nav
                        navigation.classList.remove('open');

                    } else{
                        // Ajouter la class ".open" sur la nav
                        navigation.classList.add('open');
                    };

                    // Mettre à jour le status de la navigation
                    navIsOpen = !navIsOpen;
                })
            };

            // Fonction pour gérer la navigation
            const mainNavigation = () => {
                // Boucle sur la collection navLinks
                for( let link of navLinks ){
                    // Capter le click sur chaque lien
                    link.addEventListener( 'click', (event) => {
                        event.preventDefault();

                        // Récupérer la valeur de l'attibut HREF
                        asyncFetch( link.getAttribute('href') );
                    });
                };
            };

            // Fonction async pour charger le contenu HTML des pages
            const asyncFetch = async (pageHtml) => {
                // Requêtes sur une fichier
                const response = await fetch(`./partials/${pageHtml}`);

                // Transformation de la réponse
                const htmlResponse = await response.text();

                // Ajouter le contenu HTML dans la balise main
                mainTag.innerHTML = htmlResponse;

                // Définir la page active
                activePage = pageHtml;

                // Vérifier la page active pour capter le formulaire
                if( pageHtml === 'contact.html' ){
                    // Capter la soumission du formulaire
                    contactForm();
                }
            };

            // Fonction pour la soumission du formulaire
            const contactForm = () => {
                let myForm = document.querySelector('form');
                console.log(myForm);
            }
        //


        /* 
        Start interface
        */
            displayMenu();
            mainNavigation();
        //
    });
//