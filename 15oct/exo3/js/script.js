// Création d'un tableau - collection - d'entiers
let myArray = [ 12, 24, 42, 56, 29 ];

/*
Utilisation de la boucle WHILE
- Créer une variable pour le nombre de boucles - itérations
- Lancer la boucle tant que la variable et plus petite que le nombre de note
*/
    let i = 0; // Créer une variable pour le nombre d'itération

    // Lancer la boucle tant que la variable et plus petite que le nombre de note
    while( i < myArray.length ){

        // Afficher l'item du tableau
        console.log(myArray[i]);

        // Incrémenter la variable i : sinon boucle infinie
        i++;
    };
//

/*
Utilisation de la boucle FOR
- Lancer la boucle POUR sur la collection de données
*/
    for( let i = 0; i < myArray.length; i++ ){
        console.log(myArray[i]);
    };
//