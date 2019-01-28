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
                for( let i = 0; i < navLinks.length; i++ ){
                    
                }
            };
        //


        /* 
        Start interface
        */
            displayMenu();
            mainNavigation();
        //
    });
//