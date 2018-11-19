/*
Créer une variable (let) de type ARRAY contenant 4 STRING
    - Accueil
    - Portfolio
    - A propos
    - Contacts
*/
    let navCollection = [ 'Accueil', 'Portfolio', 'A propos', 'Photos', 'Contacts' ];

    // Afficher le tableau dans la console
    console.log(navCollection);

    // Afficher la taille du tableau dans la console
    console.log(navCollection.length);

    // Faire une boucle (FOR) pour afficher dans la console tous les items du tableau
    for( let i = 0; i < navCollection.length; i++ ){
        console.log( navCollection[i] );
    };

    // Méthode FOR OF sur un tableau
    for( let item of navCollection ){
        console.log(item);
    };
/**/

/*
Créer une variable de type { OBJECT } contenant les propriétés :
    - un titre : Accueil STRING
    - un état : faux BOOLEAN

Ajouter une fonction en propriété de l'objet pour changer son état
*/
    let object = {
        title: 'Accueil',
        state: false,

        changeState: function(){
            // Inverser une valeur BOOLEAN avec !
            this.state = !this.state;
            console.log(this);
        }
    };

    // Appeler la méthode objet
    object.changeState();

    // Faire une boucle (FOR IN) pour afficher dans la console toutes les propriétés de l'objet
    for( let property in object ){
        // console.log( 'Propriété : ' + property );
        // console.log( 'Valeur de la propriété : ' + object[property] );
    };
//