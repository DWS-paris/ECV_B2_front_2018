/*
Caculateur de moyenne
Nous allon réaliser un petit programme pour permetrte de calculer la moyenne des notes d'une classe.

User story
    - l'utilisateur ajoute une nouvelle note (x le nombre de notes)
    - l'utilsateur calcule la moyenne
    - la moyenne est affichée dans la console
*/

/*
L'utilisateur ajoute une nouvelle note (x le nombre de notes)
- utiliser prompt() pour demander à l'utilisateur d'ajouter une note
- ajouter la note dans un tableau
*/

let noteArray = []; // Tableau vvide pour stocker les notes
console.log(noteArray);
let totalNote = 0;


/*
Créer une fonction pour ajouter une note
*/
    function addNote(){
        let userNote = prompt('Ajouter une note');

        // Transformer la chaine de caractère en Integer
        let integerNote = parseInt(userNote)

        // Connaitre le type de variable
        console.log( typeof userNote)
        console.log( typeof integerNote)

        // Ajouter la note à la variable totalNote
        totalNote += integerNote;

        noteArray.push(integerNote);
        console.log(noteArray);
    };
//

/*
Créer une fonction pour calculer la moyenne
*/
    function noteAmount(){
        /*
        Diviser totalNote par le nombre de notes
        */
       console.log( 'La moyenne et de ' + totalNote / noteArray.length );

    };
//