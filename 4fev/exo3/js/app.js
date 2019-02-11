document.addEventListener('DOMContentLoaded', () => {

    /* 
    Déclaration
    */
        const apiKey = '558b63db8d7d46e8934c954fbd98bd3f';
        const newsSources = document.querySelector('#newsSources');
        const articleList = document.querySelector('#articleList');
    //

    /* 
    Functions
    */
        // Fonction pour cfaire une requête asynchrone
        const asyncFetch = async ( path ) => {
            // Faire une requête fetch()
            const response = await fetch(`https://newsapi.org/v2/${path}apiKey=${apiKey}`);

            // Vérifier le statut de la requête
            if( response.ok ){
                // Convertire la réponse en JSON
                const jsonResponse = await response.json();

                // Vérifier le path
                if( path === 'sources?' ){
                    displaySources(jsonResponse)
                }
                else{
                    displayArticles(jsonResponse)
                }

            } else{ console.error('Fetch error detected...') };
        };

        // Function pour afficher les sources dans le DOM
        const displaySources = ( data ) => {
            // Faire une boucle sur le tableau de sources
            for( let item of data.sources ){
                // Ajouter une option dans le select
                newsSources.innerHTML += `
                    <option value="${item.id}">${item.name}</option>
                `;
            };

            // Capter le changement de source
            getSelectedSource();
        };

        // Fonction pour capter le changement de source
        const getSelectedSource = () => {
            newsSources.addEventListener( 'change', (event) => {
                // Faire une requête sur la source
                asyncFetch(`top-headlines?sources=${event.target.value}&`);
            });
        };

        // Fonction pour afficher les articles dans le DOM
        const displayArticles = (data) => {
            // Vider la liste des articles
            articleList.innerHTML = '';
            
            // Boucle sur la collectionn de données
            for( let item of data.articles ){
                articleList.innerHTML += `
                    <article>
                        <h2>${item.title}</h2>
                        <img src="${ item.urlToImage || 'http://lorempixel.com/200/200' }" alt="${item.title}">
                        <p>${item.description}</p>
                    </article>
                `
            }
        }
    //

    /* 
    Démarrer Interface Homme Machine (IHM)
    */
        asyncFetch('sources?');
    //

});