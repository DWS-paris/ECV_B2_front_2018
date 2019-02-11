// Attendre le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {

    /* 
    Déclaration
    */
        const treeList = document.querySelector('#treeList');
        let tallestTree = 0;
        let tallestNameTree = undefined;
    //


    /* 
    Création d'une fonction ascynchrone
    */
        const asyncFetch = async () => {
            // Créer une variable qui attend le retour du fetch
            const response = await fetch('./data/arbres.2.json');

            // Vérifier l'état de la requête
            if( response.ok ){
                // Convertir la réponse
                const jsonResponse = await response.json();

                // Afficher les données dans le DOM
                displayData(jsonResponse);

            } else { console.error('Fetch error...') };
        };
    //

    /* 
    Fonction pour afficher les arbres dans le DOM
    */
        const displayData = (data) => {
            console.log(data.features)
            // Faire une boucle sur la collection de données
            for( let item of data.features ){
                // Créer une balise "li"
                let newLiTag = document.createElement('li');
                
                // Ajouter le contenu dans la balise li
                newLiTag.innerHTML = `<b>Nom : ${item.properties.nom_commun}</b>`;

                // Ajouter la balise "li" dans la liste d'arbres
                treeList.appendChild( newLiTag );

                // Vérifier la taille de l'arbre
                if( tallestTree < item.properties.hauteur ){
                    // Modifier la taille
                    tallestTree = item.properties.hauteur;

                    // Modifier le nom
                    tallestNameTree = item.properties.nom_commun;
                };
            };

            console.log(tallestTree);
            console.log(tallestNameTree);
        };
    //
    
    /* 
    Démarrer IHM
    */
        asyncFetch();
    //


}); // Fin de la fonction d'attente de chargement du DOM