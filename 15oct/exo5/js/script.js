/*
Création de plusieurs variables
*/
    let variable1 = 15;
    let variable2 = '15';
    let variable3 = true;
    let variable4 = 'true';
//

// Comparaison simple : "=="
    if( variable1 == variable2 ){
        console.log('Les deux variables ont la même valeur');
    }

    if( variable3 == variable4 ){
        console.log('Les deux variables ont la même valeur');
    }
//

// Comparaison strict : "==="
    if( variable1 === variable2 ){
        console.log('Les deux variables ont le même type et la même valeur');
    }

    if( variable3 === variable4 ){
        console.log('Les deux variables ont le même type et la même valeur');
    }
//

// Comparaison avec ou logique
    if( variable1 === 15 || variable1 === 20 ){
        console.log('La valeur est 15 ou 20');
    };
//

// Opérateur de différence
    if(variable3 !== false){
        console.log('La variable3 est différente de false')
    }
//