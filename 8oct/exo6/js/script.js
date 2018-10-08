/*
Déclarer une fonction
- Mot-clef : "function"
- Déclaration : "function functionName(){...}"
*/
    function askUser(){
        // Créer une variable pour demander le prénom de l'utilisateur
        let firstName = prompt('Quel est votre prénom ?');

        // Créer une variable pour demander le nom de l'utilisateur
        let lastName = prompt('Quel est votre nom ?');

        // Créer une variable pour demander l'âge de l'utilisateur
        let userAge = prompt('Quel est votre âge ?');

        /*
        Calculer l'année de naissance de l'utilisateur
        - La variable userAge est de type String à cause du prompt()
        - Connaitre le type d'une variable : "typeof"
        - Convertir la variable userAge en Number : "parseInt()"
        */
            let userBirthYear = 2018 - parseInt(userAge);
        //

        // Saluer l'utilisateur en lui affichant sa date de naissance
        console.log( 'Bonjour ' + firstName + ' ' + lastName + ', votre année de naissance est ' + userBirthYear + '.' );
    };
//