/*
Déclarer un objet
- Un objet contient des propriétés entre les accolade : "{...}"
- Ajouter une propriété "prop: value"
- Les propriétés sont séparées par une virgule
- Les propriétés peuvent être des fonctions
- Le mot clef "this" est utiliser pour faire référence à une propriété d'objet
*/
    let newUser = {
        userName: 'Julien Noyer',
        userAge: 39,

        sayHello: function( msg ){ 
            console.log( msg + ' ' + this.userName + ' !' );
        }
    };

    // Afficher l'objet
    console.log( newUser );
    
    // Afficher l'âge de l'utilisateur
    console.log( newUser.userAge );

    // Appeler la fonction de l'objet
    newUser.sayHello( 'Wesh' );

    // Modifier une des propriété de l'objet
    newUser.userAge = 22;

    // Afficher l'objet
    console.log( newUser );
//