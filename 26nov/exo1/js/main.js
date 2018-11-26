/* 
Attendre le chargement du DOM
*/
document.addEventListener( 'DOMContentLoaded', () => {

    /* 
    Déclarer les variables
    */
        let myForm = document.querySelector('form');
        let userEmail = document.querySelector('[type="email"]');
        let userPassword = document.querySelector('[type="password"]');
        let userType = document.querySelectorAll('[name="type"]');
        let labelEmail = document.querySelector('#labelEmail');
        let labelPassword = document.querySelector('#labelPassword');
        let userList = document.querySelector('h2 + ul');
        let selectedType = '';
    //

    /* 
    Supprimer les messages d'erreur
    */
        userEmail.addEventListener( 'focus', ()=>{
            labelEmail.textContent = 'Votre email';
        });

        userPassword.addEventListener( 'focus', ()=>{
            labelPassword.textContent = 'Votre mot de passe';
        });
    //

    

    /* 
    Capter la soumission du formulaire
    */
        myForm.addEventListener( 'submit', (event) => {
            // Bloquer le comportement naturel du formulaire
            event.preventDefault();

            // Définir une variable pour les erreur
            let formError = 0;

            /* 
            Vérifier email et password : 5 caractères minimum
            */
                if( userEmail.value.length > 4 ){
                    console.log('OK');

                }
                else{
                    // Ajouter un message d'erreur dans le label du dessus
                    labelEmail.textContent += ' : 5 caractères min.';
                    
                    // Incrémenter la variable formError de 1
                    formError++;
                };

                if( userPassword.value.length > 4 ){
                    console.log('OK');

                }
                else{
                    // Ajouter un message d'erreur dans le label du dessus
                    labelPassword.textContent += ' : 5 caractères min.';

                    // Incrémenter la variable formError de 1
                    formError++;
                };
            // 

            /* 
            Vérifier le type
            */
                for( let input of userType ){
                    if( input.checked ){
                        selectedType = input.value;
                    };
                };
            //
            
            /* 
            Validation final du formulaire
            */
                if( formError === 0 ){
                    // Ajouter un utilisateur dans la liste
                    userList.innerHTML += `
                        <li>Email : ${ userEmail.value } / Type : ${ selectedType }</li>
                    `;

                    // Vider le formulaire
                    userEmail.value = '';
                    userPassword.value = '';
                }
            //
        });
    // 

});
//