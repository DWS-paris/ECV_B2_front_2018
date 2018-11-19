/*
Définition du HEADER
*/
    // Définir le contenu du HEADER
    let headerContent = {
        title: 'Julien Noyer WebSite',
        sub_title: 'Web Development & Mentoring'
    };
    
    // Créer une balise HEADER
    let myHeader = document.createElement('header');

    // Ajouter le contenu HTML dans le header
    myHeader.innerHTML = '<h1>' + headerContent.title + '</h1>';
    myHeader.innerHTML += '<p>' + headerContent.sub_title + '</p>';
//


/*
Définition de la NAV
*/
    // Créer une balise NAV
    let myNavigation = document.createElement('nav');
    let myNavigationList = document.createElement('ul');

    // Ajouter myNavigationList dans myNavigation
    myNavigation.appendChild(myNavigationList);

    // Création du constructeur (ou model) objet
    function NavModel(paramTitle){
        this.title = paramTitle,
        this.state = false
    };

    // Ajouter une fonction sur le constructeur
    NavModel.prototype.toggleState = function(){
        // Inverser la valuer de state
        this.state = !this.state;
    };

    // Créer un tableau d'objet pour la navigation
    let navCollection = [
        new NavModel('Accueil'),
        new NavModel('A propos'),
        new NavModel('Portfolio'),
        new NavModel('Contacts')
    ];

    // Ajouter la class .isActive sur le premier objet de navCollection
    navCollection[0].toggleState();
    
    // Faire une boucle sur navCollection pour créer les LI de myNavigationList
    for( let item of navCollection ){
        // Pour chaque item, ajouter une balise LI dans myNavigationList
        myNavigationList.innerHTML += '<li><a href="#">' + item.title + '</a></li>';
    };
//


/*
Créer une fonction pour capter le click sur les liens de la NAV
*/
    function getNavLinkClick(){
        // Créer un tabbleau avec les balises du DOM
        let domLink = document.querySelectorAll('nav a');

        // Boucler sur les balises du DOM
        for( let i = 0; i < domLink.length; i++ ){
            // Ajouter un écouteur d'événement pour le click sur la balise A
            domLink[i].addEventListener('click', function(){
                navCollection[i].toggleState();
                setActiveNavItem();
            })
        }
    };
/**/


/*
Création d'une fonction pour définir le lien actif dans la NAV
*/
    function setActiveNavItem(){
        // Faire une boucle sur navCollection
        for( let i = 0; i < navCollection.length; i++ ){
            // Sélectionner le lien
            let selectedLink = document.querySelector('li:nth-child(' + (i + 1) + ') a' );

            // Ajouter la class .isActive à selectedLink si le STATE est égale à true
            if( navCollection[i].state === true ){
                // Ajouter la class .isActive sur selectedLink
                selectedLink.classList.add('isActive');
            };
        };
    };
//



/*
Attendre le chargement du DOM
*/
    document.addEventListener( 'DOMContentLoaded', () => {
        /*
        Ajouter les balises dans le DOM
        */
            // Ajouter la balise HEADER dans le DOM
            document.body.appendChild(myHeader);

            // Ajouter myNavigation dans myHeader
            myHeader.appendChild(myNavigation);
        //

        /*
        Lancer les fonctions
        */
            setActiveNavItem();
            getNavLinkClick();
        //
    });
//