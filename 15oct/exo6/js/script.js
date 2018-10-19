/*
Variables
*/
    let age = 12;
//

// Condition if, else if, else
    // if( age >= 60 ){
    //     console.log('Vous êtes un vieux');

    // } else if( age < 60 && age >= 18 ){
    //     console.log('Vous êtes majeur');

    // } else{
    //     console.log('Vous êtes mineur');
    // };
//

// Le switch, une alternatif au If, else if, else pour des cas précis
function translateColor( color ){
    // Faire un switch sur le paramètre color
    switch(color){
        case 'jaune':
        console.log('Jaune => Yellow');
        break; // Obligatoire

        case 'rouge':
        console.log('rouge => red');
        break; // Obligatoire

        case 'noir':
        console.log('noir => black');
        break; // Obligatoire

        default:
        console.log('Je ne connais pas cette couleur :', color);
        break; // Obligatoire
    };
};

translateColor('jaune');
translateColor('noir');
translateColor('rouge');
translateColor('bleu');