/*
Créer un constructeur d'objet (constructor)
- Un constructor est une fonction avec paramètre(s)
- Les propriétés du constructor sont préfixées avec "this"
*/
    function User( nameParam, ageParam ){
        this.userName = nameParam;
        this.userAge = ageParam;
        this.skills = [];
    };
//

/*
Ajouter une fonction en propriété d'objet issue du constructor User
- Utiliser la fonction prototype sur le constructor
- Nommer la propriété après la fonction prototype
- Ajouter la fonction en valeur
- Toutes les propriétés du constructor sont diponibles
*/
    // Saluer le user
    User.prototype.sayHello = function( msgParam ){
        console.log( msgParam + ' ' + this.userName + ' !' );
    };

    // Ajouter une compétence au user
    User.prototype.addSkill = function( skillParam ){
        this.skills.push( skillParam );
    };
//

/*
Créer des objets en utilisant le constructor
- Utiliser le mot clef "new"
- Ajouter les propriétés de l'objet dans les paramètre de la fonction du constructor
*/
    let julien = new User('Julien Noyer', 39);
    let chuck = new User('Chuck Norris', 2018);
//

/*
Appeler les fonction prototypées
*/
    julien.sayHello('Ciao');
    julien.addSkill('Javascript');
    julien.addSkill('HTML');
    julien.addSkill('CSS');

    chuck.sayHello('Please don\'t bit me');
    chuck.addSkill('Force');
    chuck.addSkill('Immortalité');
    chuck.addSkill('Humour');
//

/*
Afficher les objets dans la console
*/
    console.log(julien);
    console.log(chuck);
//