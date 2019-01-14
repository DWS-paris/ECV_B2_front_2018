/* 
Attendre le chargement du DOM
Les balises HTML doivent être sélectionnables en Javascript et c'est pourquoi il faut attendre le chargement de la page HTML (DOM)
*/
    $(document).ready( () => {

        // Sélectionner une balise HTML en jQuery : $('. | # | tag')
        const burgerMenu = $('nav button');
        const myNav = $('nav ul');
        
        // Pour la gestion du formulaire
        const myForm = $('form');
        const userEmail = $('[name="email"]');
        const userSubject = $('[name="subject"]');
        const userMessage = $('[name="message"]');
        const emailSpan = $('label:nth-of-type(1) span');
        const subjectSpan = $('label:nth-of-type(2) span');
        const messageSpan = $('label:nth-of-type(3) span');

        // Capter le clic sur une balise : click()
        burgerMenu.click( () => {
            // Ajouter ou supprimer une class : toggleClass('...')
            myNav.toggleClass('open');
        });

        // Capter la soumission du formulaire : submit()
        myForm.submit( event => {
            // Bloquer le comportement par defaut du formulaire
            event.preventDefault();

            // Créer une variable pour comptabiliser le ,nombre d'erreur
            let formError = 0;
            
            // Vérifier le nombre de caractères pour chaque input/textarea
            if( userEmail.val().length < 5 ){
                // Afficher le message d'erreur
                emailSpan.fadeIn();

                // Incrémenter formError de 1
                formError++;
            };

            if( userSubject.val().length < 5 ){
                // Afficher le message d'erreur
                subjectSpan.fadeIn();

                // Incrémenter formError de 1
                formError++;
            };

            if( userMessage.val().length < 5 ){
                // Afficher le message d'erreur
                messageSpan.fadeIn();

                // Incrémenter formError de 1
                formError++;
            };

            // Validation finnale du formulaire
            if( formError === 0 ){
                // Modifier le contenu HTML du formulaire
                myForm.html('Your message <b>has been sent</b>');
            };
        });

        /* 
        Masquage des messages d'erreur
        */
            document.querySelectorAll('input, textarea').forEach( item => {
                $(item).focus( () => {
                    $(item).prev().children('span').fadeOut();
                });
            });
        //

    }); // Fin de la fonction de chargement du DOM
//