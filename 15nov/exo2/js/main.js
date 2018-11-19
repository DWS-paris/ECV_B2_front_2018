/*
Attendre le chargement du DOM pour manipuler les balises HTML en Javascript
*/
    document.addEventListener( 'DOMContentLoaded', function(){
        // Sélectionner une balise HTML : querySelector('TAG_NAME|.CLASS|#ID')
        let mainTitle = document.querySelector('header h1');
        let mainContent = document.querySelector('main');

        // Afficher dans la console le contenu textuel de mainContent
        console.log( mainContent.textContent );

        // Afficher dans le console le contenu HTML de mainContent
        console.log( mainContent.innerHTML );

        // Modifier le contenu textuel de mainTitle
        mainTitle.textContent = '<em>Mon super nouveau titre en JavaScript</em>';

        // Modifier le contenu HTML de mainTitle
        mainTitle.innerHTML = 'EXO2 : <em>Manipuler le DOM en Javascript</em>';

        // Ajouter la class .isActive sur la balise mainTitle
        mainTitle.classList.add('isActive');

        // Supprimer la class .bigFont sur la balise mainTitle
        mainTitle.classList.remove('bigFont');
    });
//