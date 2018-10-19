/*
Variables globales
*/
    let myUsers = [];
//

/*
Créer un constructor pour le modèle objet
*/
    function User( paramEmail, paramPassword, paramAge ){
        this.email = paramEmail;
        this.password = paramPassword;
        this.age = paramAge;
    };
//

/*
Ajouter des utilisateurs
*/
    myUsers.push( new User( 'j.noyer@digitalworkshop.fr', '12345', 39 ) );
    myUsers.push( new User( 'juju@juju.com', '54321', 25 ) );
    myUsers.push( new User( 'test@test.com', '67890', 12 ) );
    myUsers.push( new User( 'julien@noyer.com', '09876', 45 ) );

    console.log(myUsers);
//


/*
Créer une fonction "addUser" pour ajouter un utilisateur
- La fonction est appelée au clic sur le bouton
*/
    function addUser(){
        // Demander à l'utilisateur les information sur le nouveau User
        let userEmail = prompt('Email ustilisteur');
        let userPassword = prompt('Mot de passe utilisateur');
        let userAge = parseInt( prompt('Age de l\'utilisateur') );

        // Créer un objet newUser
        let newUser = new User(userEmail, userPassword, userAge);

        // Vérifier la présence de l'utilisateur
        checkUsers(newUser);
    };
//

/*
Fonction pour vérifier la présence d'un utilisateur
*/
    function checkUsers( newUser ){
        // Créer une variable pour vérifier l'email
        let emailUsed = false;

        // Faire une boucle sur la collection de données
        for( let i = 0; i < myUsers.length; i++ ){
            // Vérifier la nouvelle adresse mail
            if( myUsers[i].email === newUser.email ){
                // Email déjà inscrit
                emailUsed = true;
            };
        };

        // Vérifier la variable emailUsed => si = false : créer / Sinon afficher une alert
        if( emailUsed === false ){
            // Ajouter le nouvel utilisateur dans myUsers
            myUsers.push(newUser);
            console.log(myUsers);

        } else{
            console.log('NOT CREATE');
        };
    };
//

/*
Fonction pour connecter un utilisateur
*/
    function login(){
        // Demander à l'utilisateur de renseigner email et mot de passe
        let userEmail = prompt('Votre email');
        let userPassword = prompt('Votre mot de passe');

        // Créer une variable pour la vérification des credentials
        let userIsLogged = false;

        // Faire une boucle sur la myUsers pour vérifier les données renseignées
        for( let i = 0; i < myUsers.length; i++ ){
            // Pour chaque item, vérifier email et mot de passe
            if( myUsers[i].email == userEmail && myUsers[i].password == userPassword ){
                // Les données correspondent
                userIsLogged = true;
            };
        };

        // Vérifier les  credentials
        userIsLogged === true ? alert('Vous êtes connecté') : alert('Email ou mot de passe incorrect');
    };
//