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
            const asyncFetch = async (page) => {
                // Requêtes sur une fichier
                const response = await fetch(`./data/${page}.json`);

                // Connaitre le type d'une variable : typeof
                console.log(typeof response);
                
                /* 
                L'objet response à une propriétré "ok" qui permet de
                savoir si le chargement à bien fonctionné.
                - Il faut tester si la valeur de "response.ok" est "true"
                */
                if( response.ok ){ // "response.ok" eg. "response.ok === true"
                
                    /* 
                    Selon la réponse attendu, il faut la convertir au bon format
                    - HTML : const convertedResponse = await response.text();
                    - JSON : const convertedResponse = await response.json();
                    */
                    const convertedResponse = await response.json();

                    // Ajouter les balises HTML dans le MAIN
                    mainTag.innerHTML = `
                        <h2>${convertedResponse.title}</h2>
                        <p>${convertedResponse.content}</p>
                    `;

                } else{ console.log('Erreur de chargement.') };
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