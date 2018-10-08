/*
Déclarer un tableau
Peut contenir des items de n'importe quel type
- Array = "[...]"
*/
    let myArray = [ 'Julien', 39, true, 23.56 ];
    console.log(myArray);
//

/*
Connaître la taille du tableau (nombre d'items)
- Propriété du tableau : "lenght"
*/
    let arrayLength = myArray.length;
    console.log( arrayLength );
//

/*
Afficher un des items du tableau
- En programmation on commence à compter à partir de 0
*/
    let firstItem = myArray[0];
    console.log( firstItem );

    let lastItem = myArray[ myArray.length - 1 ];
    console.log( lastItem );
//

/*
Ajouter un item à la fin du tableau
- Fonction sur un tableau : "push()"
*/
    let newItem = 'Noyer';

    myArray.push( newItem );
    console.log( myArray );
//

/*
Manipuler les données d'un tableau
- Fonction sur un tableau : "splice()"
*/
    // Supprimer l'item n°2
    myArray.splice( 1, 1 );
    console.log( myArray );

    // Ajouter '39' après l'item n°0
    myArray.splice( 1, 0, '39' );
    console.log( myArray );
//