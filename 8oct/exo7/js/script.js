/*
Déclarer une fonction
- Deux méthodes possible : soit dans variable, soit sans variable
*/
    // Foinction classique
    function firstFunction(){
        console.log( 'Je suis une fonction classique' );
    };

    // Fonction anonyme dans une variable
    let secondFunction = function(){
        console.log( 'Je suis une fonction anonyme dans une variable' );
    };
//

/*
Une fois créée, il faut appeler la fonction pour la déclencher
*/
    firstFunction();
    secondFunction();
//

/*
Utilisation du mot clef "return"
- Permet de renvoyer le résutat d'une fonction
*/
    function trirdFunction(){
        return 'Renvoyer une chaîne de caractères';
    };

    // Assigner la valeur du return à yne variable
    let functionReturn = trirdFunction();

    // Afficher la variable dans la console
    console.log( functionReturn );
//

/*
Déclarer une fonction avec parmètres
- Les paramètres sont à ajouter dans les paranthèse de la fonction
- Les paramètres sont séparés par une virgule
*/
    function fourthFunction( userName, userAge ){
        console.log( 'Boujour ' + userName + ', votre âge est ' + userAge + ' ans.' );
    };

    // Appeler la fonction en précisant le ou les paramètres
    fourthFunction( 'Julien Noyer', 39 );
    fourthFunction( 'Chuck Norris', 123456789 );
//